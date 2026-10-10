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
var KEYWORDS = [
  [/\b(decline|declined|dec|ko|knock ?out|uninsurable|not eligible|ineligible)\b|^(no|n|x|✗|✘)$/, 'decline'],
  [/\b(ic|individual consideration|refer|call|underwriter|uw review|case by case)\b/, 'refer'],
  [/\b(gi|guaranteed)\b/, 'gi'],
  [/\b(modified|mod|rop|return of premium)\b/, 'modified'],
  [/\b(graded|grade|gr|grd)\b/, 'graded'],
  [/\b(table|rated|substandard)\b/, 'table'],
  [/\b(preferred plus|pref plus|pp)\b/, 'preferred_plus'],
  [/\b(preferred|pref)\b/, 'preferred'],
  [/\b(standard plus|std plus)\b/, 'standard_plus'],
  [/\b(standard|std)\b/, 'standard'],
  [/\b(level|lvl|immediate|day 1|full)\b/, 'level'],
  [/\b(yes|y|ok|accept|acceptable|approved|approve|eligible)\b|^(✓|✔|√)$/, 'best']
];

function outcomeOf(seg) {
  for (var i = 0; i < KEYWORDS.length; i++) if (KEYWORDS[i][0].test(seg)) return KEYWORDS[i][1];
  return null;
}

// "Decline <2 yrs, graded 2-3 yrs, level after" -> rules; null if unsure.
function interpret(raw) {
  var exact = mapping.values[raw.trim()];
  if (exact !== undefined) return typeof exact === 'string' ? [{ outcome: exact }] : exact;
  var text = raw.toLowerCase().replace(/\s+/g, ' ').trim();
  var segs = text.split(/[,;\/\n]| then | otherwise /).map(function (x) { return x.trim(); }).filter(Boolean);
  var rules = [];
  for (var i = 0; i < segs.length; i++) {
    var seg = segs[i];
    var o = outcomeOf(seg);
    if (!o) return null;
    var after = /\b(after|over|more than|beyond|older than)\b|>|\+/.test(seg);
    var range = seg.match(/(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)\s*(y|yr|yrs|year|years)\b/);
    var yrs = seg.match(/(\d+(?:\.\d+)?)\s*(y|yr|yrs|year|years)\b/);
    var mos = seg.match(/(\d+)\s*(m|mo|mos|month|months)\b/);
    var n = range ? Number(range[2]) : yrs ? Number(yrs[1]) : mos ? Number(mos[1]) / 12 : null;
    if (n !== null && !after) rules.push({ withinYears: n, outcome: o });
    else rules.push({ outcome: o });
  }
  if (!rules.length) return null;
  // Timed rules ascending, single fallback last; anything else is ambiguous.
  var timed = rules.filter(function (r) { return r.withinYears != null; }).sort(function (a, b) { return a.withinYears - b.withinYears; });
  var fallback = rules.filter(function (r) { return r.withinYears == null; });
  if (fallback.length > 1) return null;
  for (var j = 1; j < timed.length; j++) if (timed[j].withinYears === timed[j - 1].withinYears) return null;
  return timed.concat(fallback);
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
var report = { tabs: [], rowsMatched: 0, rowsUnmatched: {}, rowsSkipped: 0, gridOnly: [], cells: 0, unparsed: {} };

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
      var rules = interpret(raw);
      if (!rules) report.unparsed[raw] = (report.unparsed[raw] || 0) + 1;
      // Two rows mapping to the same condition (e.g. "MI" and "Heart attack"): keep both texts.
      target[col] = target[col] && target[col].raw !== raw
        ? { raw: target[col].raw + ' | ' + raw, rules: null }
        : { raw: raw, rules: rules };
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
console.log('Cells: ' + report.cells + ' imported, ' + unparsed.length + ' distinct values not understood');
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
