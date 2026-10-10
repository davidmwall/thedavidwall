#!/usr/bin/env node
/*
 * Import your condition spreadsheet as the BACKUP grid.
 *
 *   node underwriting/tools/import_grid.js underwriting/guides/grid.xlsx
 *
 * Input: .xlsx (every tab is imported) or a single .csv. Layout per tab:
 *   first row    = carrier/product column names
 *   first column = condition or medication names
 *   cells        = the grid's verdict ("Decline", "Graded", "IC", "2 yrs graded", "✓", …)
 *
 * Mapping decisions live in underwriting/grid-mapping.json, so a re-import of
 * an updated spreadsheet keeps every decision you already made:
 *   tabs:    { "Whole Life": { "type": "final_expense" }, "Term/IUL": { "type": "term" }, "UHL": "skip" }
 *   rows:    { "Heart Attack (MI)": "condition:heart_attack", "Notes": "skip" }
 *   columns: { "Whole Life :: Carrier A": { "product": "carrier-a-fe" },   <- backs up a loaded carrier file
 *              "Term/IUL :: Carrier Z":   { "underwriting": "accelerated" }, <- grid-only
 *              "Whole Life :: Comments":  "skip" }
 * Column keys are "<tab> :: <column header>" so the same carrier in two tabs
 * stays two products.
 *   values:  { "IC": "refer", "2yr GR": [{ "withinYears": 2, "outcome": "graded" }, { "outcome": "best" }] }
 *
 * Writes underwriting/data/grid.js and prints a report of anything it could
 * not match or interpret. Unmatched rows/columns and unreadable cells are
 * never guessed — fix them in grid-mapping.json and re-run.
 */
'use strict';
var fs = require('fs');
var path = require('path');

var ROOT = path.join(__dirname, '..');
var UW = require(path.join(ROOT, 'engine.js'));
require(path.join(ROOT, 'data', 'conditions.js'));

var args = process.argv.slice(2);
var input = args.filter(function (a) { return a[0] !== '-'; })[0];
var opt = function (name, dflt) {
  var a = args.filter(function (x) { return x.indexOf('--' + name + '=') === 0; })[0];
  return a ? a.split('=').slice(1).join('=') : dflt;
};
if (!input) {
  console.error('usage: import_grid.js <grid.xlsx|grid.csv> [--mapping=path] [--out=path] [--sample]');
  process.exit(2);
}
var mappingPath = opt('mapping', path.join(ROOT, 'grid-mapping.json'));
var outPath = opt('out', path.join(ROOT, 'data', 'grid.js'));
var mapping = fs.existsSync(mappingPath) ? JSON.parse(fs.readFileSync(mappingPath, 'utf8')) : {};
mapping.tabs = mapping.tabs || {}; mapping.rows = mapping.rows || {}; mapping.columns = mapping.columns || {}; mapping.values = mapping.values || {};

// --- CSV ---------------------------------------------------------------------
function parseCSV(text) {
  var rows = [], row = [], cell = '', q = false;
  text = text.replace(/^﻿/, '');
  for (var i = 0; i < text.length; i++) {
    var ch = text[i];
    if (q) {
      if (ch === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (ch === '"') q = false;
      else cell += ch;
    } else if (ch === '"') q = true;
    else if (ch === ',') { row.push(cell); cell = ''; }
    else if (ch === '\n' || ch === '\r') {
      if (ch === '\r' && text[i + 1] === '\n') i++;
      row.push(cell); rows.push(row); row = []; cell = '';
    } else cell += ch;
  }
  if (cell !== '' || row.length) { row.push(cell); rows.push(row); }
  return rows.filter(function (r) { return r.some(function (c) { return c.trim() !== ''; }); });
}

// --- Cell interpretation -------------------------------------------------------
// Cells that carry no information: treated as empty (the app then says "verify").
var NOT_SPECIFIED = /(does not specify|do not specify|not specified|^n\/?a$|^none$|^-+$|^see\b|not on (the )?underwriting guide|check med list)/i;

var KEYWORDS = [
  [/\b(declined|decline|dec|knock ?out|ko|uninsurable|not eligible|ineligible)\b|^(no|n|x|✗|✘)$/, 'decline'],
  [/\b(ic|individual consideration|refer|call (uw|underwriting|underwriter)|underwriter review|uw review|case by case)\b/, 'refer'],
  [/\b(guaranteed issue|guaranteed|guarantee|gi)\b/, 'gi'],
  [/\b(return of premium|modified|mod|rop)\b/, 'modified'],
  [/\b(graded|grade|gr|grd)\b/, 'graded'],
  [/\b(table|rated|substandard)\b/, 'table'],
  [/\b(preferred plus|pref plus)\b/, 'preferred_plus'],
  [/\b(preferred|pref)\b/, 'preferred'],
  [/\b(standard plus|std plus)\b/, 'standard_plus'],
  [/\b(standard|std)\b/, 'standard'],
  [/\b(level|lvl|immediate|day 1)\b/, 'level'],
  [/\b(not asked|acceptable|accepted|accept|approved|approve|eligible|yes|ok|y)\b|^(✓|✔|√)$/, 'best']
];

function outcomesIn(seg) {
  var found = [];
  KEYWORDS.forEach(function (k) {
    var re = new RegExp(k[0].source, 'g'), m;
    while ((m = re.exec(seg))) found.push({ outcome: k[1], at: m.index, len: m[0].length });
  });
  // Drop matches nested inside a longer match ("guaranteed issue" vs "issue").
  return found.sort(function (a, b) { return a.at - b.at || b.len - a.len; })
    .filter(function (f, i, all) { return !all.some(function (g, j) { return j < i && f.at < g.at + g.len; }); });
}

function years(n, unit) { return /^m/.test(unit) ? Number(n) / 12 : Number(n); }
var UNIT = '(years?|yrs?|y|months?|mos?)\\b';

// Words that only describe timing or are filler. Anything else left over means
// the cell has a condition the app can't check (age, severity, meds, tobacco…),
// so the result is kept but flagged "verify".
var FILLER = /\b(if|y|treated|treatment|diagnosed|diagnosis|performed|occurred|or|and|since|ago|the|past|last|in|a|of|has|been|it|for|then|otherwise|likely|within|between|over|after|more|than|longer|under|less|years?|yrs?|months?|mos?|onset|any|is|was|on|at|time|=|-)\b/g;

// One sentence -> { outcome, within, after, qualified } or null when it
// doesn't contain exactly one outcome word.
function parseSegment(seg) {
  var ageq = false;
  // Client-age conditions ("> 60 years of age", "age 45 or greater") are not timing.
  seg = seg.replace(/(?:>|<|over|under)?\s*\d+\s*(?:years?|yrs?)\s*(?:of age|old)/g, function () { ageq = true; return ' agecond '; })
    .replace(/(?:>|<)?\s*\bage\s*\d+(?:\s*or (?:greater|older|younger))?/g, function () { ageq = true; return ' agecond '; })
    .replace(/\d+\s*or (?:greater|older|younger)/g, function () { ageq = true; return ' agecond '; });
  var outs = outcomesIn(seg);
  if (outs.length !== 1) return null;
  var o = outs[0].outcome;
  var within = null, after = null, m;
  if ((m = seg.match(new RegExp('between\\s+(\\d+(?:\\.\\d+)?)\\s+and\\s+(\\d+(?:\\.\\d+)?)\\s*' + UNIT)))) within = years(m[2], m[3]);
  else if ((m = seg.match(new RegExp('(\\d+(?:\\.\\d+)?)\\s*-\\s*(\\d+(?:\\.\\d+)?)\\s*' + UNIT)))) within = years(m[2], m[3]);
  else if ((m = seg.match(new RegExp('(?:>|over|more than|longer than|after|older than)\\s*(\\d+(?:\\.\\d+)?)\\s*' + UNIT)))) after = years(m[1], m[2]);
  else if ((m = seg.match(new RegExp('(?:within|<|less than|under|in the (?:past|last)|past|last)\\s*(\\d+(?:\\.\\d+)?)\\s*' + UNIT)))) within = years(m[1], m[2]);
  else if ((m = seg.match(new RegExp('(\\d+(?:\\.\\d+)?)\\s*' + UNIT)))) within = years(m[1], m[2]);
  else if (/\b(after|longer)\b/.test(seg)) after = 0;

  var rest = seg.slice(0, outs[0].at) + ' ' + seg.slice(outs[0].at + outs[0].len);
  rest = rest.replace(/\d+(\.\d+)?/g, ' ').replace(/[<>(),:"'—–]/g, ' ').replace(FILLER, ' ')
    .replace(/\b(since diagnosis|diagnosis and treatment)\b/g, ' ').trim();
  return { outcome: o, within: within, after: after, qualified: ageq || /[a-z]{2,}/.test(rest) };
}

// Cell text -> { rules, qualified } | 'empty' | null (could not interpret).
function interpret(raw) {
  var exact = mapping.values[raw.trim()];
  if (exact !== undefined) {
    if (exact === 'empty') return 'empty';
    return { rules: typeof exact === 'string' ? [{ outcome: exact }] : exact, qualified: false };
  }
  var text = raw.toLowerCase().replace(/\s+/g, ' ').trim();
  if (NOT_SPECIFIED.test(text)) return 'empty';
  // Quoted application questions and parenthetical asides: keep as a qualifier
  // word, but don't let a quoted "Yes" read as an outcome.
  var asked = false;
  text = text.replace(/"[^"]*"|“[^”]*”/g, function () { asked = true; return ' question '; })
    .replace(/answered\s+question/g, ' answered ')
    .replace(/\(([^)]*)\)/g, ' ');
  // Sentences: periods (not decimals), semicolons, slashes, newlines.
  var sentences = text.split(/\.(?!\d)|;|\s*\/\s*|\|/).map(function (x) { return x.trim(); }).filter(Boolean);
  var segs = [];
  sentences.forEach(function (sent) {
    // "Decline <1 yr, Graded 1-2 yrs": split on commas only when each part has its own outcome.
    var parts = sent.split(',').map(function (x) { return x.trim(); }).filter(Boolean);
    var each = parts.every(function (p) { return outcomesIn(p).length === 1; });
    if (parts.length > 1 && each) segs = segs.concat(parts); else segs.push(sent);
  });
  var parsed = segs.map(parseSegment);
  if (!parsed.length || parsed.some(function (x) { return !x; })) return null;

  // Firm rules depend only on timing. Conditional rules depend on something the
  // app can't check (age at diagnosis, severity, tobacco, an app question), so
  // the engine only lets them widen the range — they never rule a carrier out.
  var timed = [], fallback = [], conditional = [], qualified = asked;
  parsed.forEach(function (p) {
    var q = p.qualified || asked;
    qualified = qualified || q;
    var add = function (rule) {
      if (q) conditional.push(Object.assign(rule, { conditional: true }));
      else if (rule.withinYears != null) timed.push(rule);
      else fallback.push(rule);
    };
    if (p.within != null) add({ withinYears: p.within, outcome: p.outcome });
    else if (p.after != null) {
      // "Y IF > 2 YEARS": acceptable after 2 years, implied not acceptable before.
      if (p.after > 0 && !parsed.some(function (x) { return x.within != null; })) {
        add({ withinYears: p.after, outcome: 'decline', note: 'implied by grid' });
      }
      add({ outcome: p.outcome });
    } else add({ outcome: p.outcome });
  });
  // "Approved if mild. Otherwise, decline": the fallback only applies when the
  // qualifier fails, so it is conditional too.
  if (conditional.length && fallback.length) {
    fallback.forEach(function (r) { conditional.push(Object.assign(r, { conditional: true })); });
    fallback = [];
  }
  timed.sort(function (a, b) { return a.withinYears - b.withinYears; });
  if (fallback.length > 1) return null;
  for (var j = 1; j < timed.length; j++) if (timed[j].withinYears === timed[j - 1].withinYears) return null;
  return { rules: timed.concat(fallback, conditional), qualified: qualified };
}

// --- Row / column matching -----------------------------------------------------
function exactMatch(dict, name) {
  var n = name.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  var hit = null;
  Object.keys(dict).forEach(function (id) {
    var e = dict[id];
    [e.name, e.name.replace(/\s*\(.*\)\s*/g, ' ')].concat(e.aliases || []).forEach(function (a) {
      if (a.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim() === n) hit = id;
    });
  });
  return hit;
}

function matchRow(name) {
  var m = mapping.rows[name];
  if (m === 'skip') return { skip: true };
  if (m) { var parts = m.split(':'); return { kind: parts[0] === 'medication' ? 'medications' : 'conditions', id: parts[1], how: 'mapping' }; }
  var c = exactMatch(UW.state.conditions, name);
  if (c) return { kind: 'conditions', id: c, how: 'auto' };
  var md = exactMatch(UW.state.medications, name);
  if (md) return { kind: 'medications', id: md, how: 'auto' };
  return null;
}

// --- Main ------------------------------------------------------------------------
function loadSheets(file) {
  if (/\.xlsx$/i.test(file)) {
    var cp = require('child_process');
    var res = cp.spawnSync('python3', ['-I', path.join(__dirname, 'xlsx_dump.py'), file], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
    if (res.status !== 0) { console.error(res.stderr); process.exit(1); }
    return JSON.parse(res.stdout);
  }
  var tab = path.basename(file).replace(/\.csv$/i, '');
  var out = {}; out[tab] = parseCSV(fs.readFileSync(file, 'utf8'));
  return out;
}

var sheets = loadSheets(input);
var columns = {};
var grid = { conditions: {}, medications: {} };
var report = { tabs: [], notSpecified: 0, rowsMatched: 0, rowsUnmatched: {}, rowsSkipped: 0, gridOnly: [], cells: 0, unparsed: {} };

Object.keys(sheets).forEach(function (tab) {
  var tabCfg = mapping.tabs[tab];
  if (tabCfg === 'skip') { report.tabs.push(tab + ' (skipped)'); return; }
  tabCfg = tabCfg || {};
  var rows = sheets[tab].filter(function (r) { return r.some(function (c) { return String(c).trim() !== ''; }); });
  if (!rows.length) return;
  report.tabs.push(tab);
  var header = rows[0].map(function (h) { return String(h).trim(); });
  var colKeys = [];
  header.slice(1).forEach(function (h, i) {
    if (!h) return;
    var key = tab + ' :: ' + h;
    var m = mapping.columns[key];
    if (m === 'skip') return;
    colKeys[i + 1] = key;
    var cfg = Object.assign({ carrier: h, productName: tab + ' (from grid)' }, tabCfg, m || {});
    delete cfg.skip;
    columns[key] = cfg;
    if (!cfg.product) report.gridOnly.push(key);
  });

  rows.slice(1).forEach(function (r) {
    var name = String(r[0] || '').trim();
    if (!name) return;
    var match = matchRow(name);
    if (!match) { report.rowsUnmatched[name] = (report.rowsUnmatched[name] || []).concat(tab); return; }
    if (match.skip) { report.rowsSkipped++; return; }
    if (!(match.kind === 'conditions' ? UW.state.conditions : UW.state.medications)[match.id]) {
      report.rowsUnmatched[name + '  (mapping points to unknown ID "' + match.id + '")'] = [tab]; return;
    }
    report.rowsMatched++;
    var target = grid[match.kind][match.id] = grid[match.kind][match.id] || {};
    for (var i = 1; i < r.length; i++) {
      var col = colKeys[i], raw = String(r[i] || '').trim();
      if (!col || !raw) continue;
      var res = interpret(raw);
      if (res === 'empty') { report.notSpecified++; continue; }
      if (!res) report.unparsed[raw] = (report.unparsed[raw] || 0) + 1;
      var cell = { raw: raw, rules: res ? res.rules : null };
      if (res && res.qualified) cell.qualified = true;
      // Two rows mapping to the same condition: keep both texts, needs a human look.
      target[col] = target[col] && target[col].raw !== raw
        ? { raw: target[col].raw + ' | ' + raw, rules: null }
        : cell;
      report.cells++;
    }
  });
});

var payload = {
  sample: args.indexOf('--sample') !== -1 || undefined,
  source: { document: path.basename(input), imported: new Date().toISOString().slice(0, 10) },
  columns: columns,
  conditions: grid.conditions,
  medications: grid.medications
};
fs.writeFileSync(outPath,
  '// GENERATED by tools/import_grid.js from ' + path.basename(input) + ' — do not edit by hand.\n' +
  '// Change underwriting/grid-mapping.json or the spreadsheet, then re-run the import.\n' +
  'UW.registerGrid(' + JSON.stringify(payload, null, 1) + ');\n');

// --- Report --------------------------------------------------------------------
var unparsed = Object.keys(report.unparsed).sort(function (a, b) { return report.unparsed[b] - report.unparsed[a]; });
console.log('Wrote ' + path.relative(process.cwd(), outPath));
var unmatched = Object.keys(report.rowsUnmatched);
console.log('Tabs: ' + report.tabs.join(', '));
console.log('Rows: ' + report.rowsMatched + ' matched, ' + report.rowsSkipped + ' skipped, ' + unmatched.length + ' unmatched');
console.log('Columns: ' + Object.keys(columns).length + ' (' + report.gridOnly.length + ' grid-only: no carrier file mapped)');
console.log('Cells: ' + report.cells + ' imported, ' + report.notSpecified + ' "does not specify" treated as blank, ' + unparsed.length + ' distinct values not understood');
if (unmatched.length) {
  console.log('\nUNMATCHED ROWS: add to grid-mapping.json "rows" as "condition:<id>", "medication:<id>" or "skip":');
  unmatched.forEach(function (n) { console.log('  ' + n + '  [' + report.rowsUnmatched[n].join(', ') + ']'); });
}
if (report.gridOnly.length) {
  console.log('\nGRID-ONLY COLUMNS: map to a carrier file with { "product": "<id>" } once its PDF is loaded:');
  report.gridOnly.forEach(function (n) { console.log('  ' + n); });
}
if (unparsed.length) {
  console.log('\nCELL VALUES NOT UNDERSTOOD: these show as "verify" until added to grid-mapping.json "values":');
  unparsed.slice(0, 40).forEach(function (v) { console.log('  ' + JSON.stringify(v) + '  x' + report.unparsed[v]); });
}
