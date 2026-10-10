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
 *   tiers:   [{ "name": "SimpliNow Legacy Max", "outcome": "level", "columns": "AIG (SIWL)" }]
 *            carrier-specific tier names, read like Level/Graded wherever they appear in a
 *            cell. "columns" (optional) limits a tier to columns whose key contains it.
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
mapping.tiers = mapping.tiers || []; mapping.tabs = mapping.tabs || {}; mapping.rows = mapping.rows || {}; mapping.columns = mapping.columns || {}; mapping.values = mapping.values || {};

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

var activeTiers = []; // carrier tier names for the column being read

function escapeRe(x) { return x.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function tiersFor(colKey) {
  return mapping.tiers
    .filter(function (t) { return !t.columns || colKey.toLowerCase().indexOf(String(t.columns).toLowerCase()) !== -1; })
    .sort(function (a, b) { return b.name.length - a.name.length; })
    .map(function (t) { return [new RegExp('\\b' + escapeRe(t.name.toLowerCase()) + '\\b'), t.outcome]; });
}

function outcomesIn(seg) {
  var found = [];
  activeTiers.concat(KEYWORDS).forEach(function (k) {
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

// Two grid rows that map to the same condition (e.g. "Angioplasty" and "Stent
// placement"). Same meaning -> keep one answer. Different -> show the full
// range as conditional so the user checks which row applies.
function mergeCells(a, b) {
  if (a.raw === b.raw) return a;
  var raw = a.raw + ' | ' + b.raw;
  if (!a.rules || !b.rules) return { raw: raw, rules: null };
  if (JSON.stringify(a.rules) === JSON.stringify(b.rules) && !!a.qualified === !!b.qualified) {
    return Object.assign({}, a, { raw: raw });
  }
  var all = a.rules.concat(b.rules).map(function (r) { return Object.assign({}, r, { conditional: true }); });
  return { raw: raw, rules: all, qualified: true };
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
  if (m && m.indexOf('info:') === 0) return { info: m.slice(5) };
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
var columns = {}, explicit = {};
var grid = { conditions: {}, medications: {} };
var report = { tabs: [], infoRows: 0, notSpecified: 0, rowsMatched: 0, rowsUnmatched: {}, rowsSkipped: 0, gridOnly: [], cells: 0, unparsed: {} };

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
    var tabTitle = tab.toLowerCase().replace(/\b[a-z]/g, function (x) { return x.toUpperCase(); }).replace(/\b(Ul|Iul)\b/g, function (x) { return x.toUpperCase(); });
    var cfg = Object.assign({ carrier: h, productName: tabTitle + ' (from your grid)' }, tabCfg);
    delete cfg.skip;
    columns[key] = cfg;
    explicit[key] = m || {};
    if (!(m && (m.product || m.absorbInto))) report.gridOnly.push(key);
  });

  rows.slice(1).forEach(function (r) {
    var name = String(r[0] || '').trim();
    if (!name) return;
    var match = matchRow(name);
    if (!match) { report.rowsUnmatched[name] = (report.rowsUnmatched[name] || []).concat(tab); return; }
    if (match.skip) { report.rowsSkipped++; return; }
    if (match.info) {
      // Product facts (ages, face, links): shown on the carrier card.
      for (var k = 1; k < r.length; k++) {
        var ck = colKeys[k], v = String(r[k] || '').trim();
        if (!ck || !v || NOT_SPECIFIED.test(v.toLowerCase())) continue;
        columns[ck].info = columns[ck].info || {};
        columns[ck].info[match.info] = v;
      }
      report.infoRows++;
      return;
    }
    if (!(match.kind === 'conditions' ? UW.state.conditions : UW.state.medications)[match.id]) {
      report.rowsUnmatched[name + '  (mapping points to unknown ID "' + match.id + '")'] = [tab]; return;
    }
    report.rowsMatched++;
    var target = grid[match.kind][match.id] = grid[match.kind][match.id] || {};
    for (var i = 1; i < r.length; i++) {
      var col = colKeys[i], raw = String(r[i] || '').trim();
      if (!col || !raw) continue;
      activeTiers = tiersFor(col);
      var res = interpret(raw);
      if (res === 'empty') { report.notSpecified++; continue; }
      if (!res) report.unparsed[raw] = (report.unparsed[raw] || 0) + 1;
      var cell = { raw: raw, rules: res ? res.rules : null };
      if (res && res.qualified) cell.qualified = true;
      target[col] = target[col] ? mergeCells(target[col], cell) : cell;
      report.cells++;
    }
  });
});

// --- Product type / tier from the grid's own info rows ---------------------------
// Explicit settings in grid-mapping.json "columns" always win over inference.
Object.keys(columns).forEach(function (key) {
  var c = columns[key], info = c.info || {}, name = c.carrier.toLowerCase();
  var ptype = (info['Product type'] || '').toLowerCase();
  var cov = (info['Coverage type'] || '').toLowerCase();
  if (/requires mortgage/.test(ptype)) c.type = 'mortgage_protection';
  else if (/indexed universal|\biul\b/.test(ptype + ' ' + name)) c.type = 'iul';
  else if (/universal life|\bul\b/.test(ptype + ' ' + name)) c.type = 'universal_life';
  else if (/term/.test(ptype)) c.type = 'term';
  if (/children/.test(name)) c.type = 'whole_life';
  if (/guaranteed (issue|acceptance)/.test(name) || /^gi$|guaranteed issue only/.test(cov)) {
    c.underwriting = 'guaranteed'; c.bestOutcome = 'gi';
    c.unlisted = { outcome: 'gi', note: 'Guaranteed issue: no health questions' };
  } else if (/level|immediate/.test(cov)) c.bestOutcome = 'level';
  else if (/graded/.test(cov)) c.bestOutcome = 'graded';
  // Issue ages: only a plain "50 - 85" range is trusted; banded text stays as info.
  // Banded text ("Level 40-89 / Modified 40-75") -> outer limits only: anyone
  // outside every band is out; inside, the card shows the bands to check.
  var ageText = info['Age range'] || '', pairs = [], am, re = /(\d{1,2})\s*(?:-|–|to)\s*(\d{1,3})(?!\s*(?:-?year|yr|%|,\d))/gi;
  while ((am = re.exec(ageText))) {
    var lo = Number(am[1]), hi = Number(am[2]);
    if (lo < hi && hi <= 100) pairs.push([lo, hi]);
  }
  if (pairs.length) {
    var banded = pairs.length > 1 || !/^\s*\d{1,2}\s*(?:-|–|to)\s*\d{1,3}\s*$/.test(ageText);
    c.issueAges = {
      min: Math.min.apply(null, pairs.map(function (x) { return x[0]; })),
      max: Math.max.apply(null, pairs.map(function (x) { return x[1]; })),
      source: 'grid: Age range',
      note: banded ? 'outer limits of: ' + ageText.replace(/\s+/g, ' ').trim() : ''
    };
  }
  // No-exam term, mortgage protection, UL and IUL products are simply approved
  // (Standard) or declined — no preferred classes.
  if (['term', 'mortgage_protection', 'iul', 'universal_life'].indexOf(c.type) !== -1) { c.approveOnly = true; c.bestOutcome = 'standard'; }
  Object.assign(c, explicit[key]);
});

// Per-plan columns ("Living Promise Level" / "… Graded") folded into one
// product column: fills only cells the target column leaves blank.
//   "<Level column>":  { "absorbInto": "<target column>", "as": "level" }
//   "<Graded column>": { "absorbInto": "<target column>", "as": "graded" }
function planRules(cell, plan) {
  if (!cell || !cell.rules) return null;
  return cell.rules.map(function (r) {
    return r.outcome === 'best' ? Object.assign({}, r, { outcome: plan }) : r;
  });
}
// Merge the two plans' timelines: at each point in time the client gets
// Level if the Level plan accepts, else whatever the Graded plan gives.
// Cells that only have conditions the app can't check stay "verify" (null).
function combinePlans(L, G) {
  var lr = L ? planRules(L, 'level') : null, gr = G ? planRules(G, 'graded') : null;
  if ((L && !lr) || (G && !gr)) return null;
  var firm = function (rs) { return rs ? rs.filter(function (r) { return !r.conditional; }) : null; };
  var lf = firm(lr), gf = firm(gr);
  if ((lr && lr.length && !lf.length) || (gr && gr.length && !gf.length)) return null;
  var at = function (rs, plan, t) {
    for (var i = 0; i < rs.length; i++) if (rs[i].withinYears == null || t < rs[i].withinYears) return rs[i].outcome;
    return plan; // past every lookback: not asked
  };
  var outcomeAt = function (t) {
    var lo = lf ? at(lf, 'level', t) : 'decline';
    return lo !== 'decline' ? lo : (gf ? at(gf, 'graded', t) : 'decline');
  };
  var bps = (lf || []).concat(gf || []).map(function (r) { return r.withinYears; })
    .filter(function (y) { return y != null; }).sort(function (a, b) { return a - b; })
    .filter(function (y, i, all) { return i === 0 || y !== all[i - 1]; });
  var out = [];
  bps.forEach(function (bp) {
    var o = outcomeAt(bp - 1e-6);
    if (out.length && out[out.length - 1].outcome === o) out[out.length - 1].withinYears = bp;
    else out.push({ withinYears: bp, outcome: o });
  });
  var fb = outcomeAt(1e6);
  if (out.length && out[out.length - 1].outcome === fb) out.pop();
  out.push({ outcome: fb });
  var conds = (lr || []).concat(gr || []).filter(function (r) { return r.conditional; });
  return out.concat(conds);
}

var absorbed = Object.keys(columns).filter(function (k) { return columns[k].absorbInto; });
var targets = {};
absorbed.forEach(function (k) {
  var c = columns[k];
  if (!columns[c.absorbInto]) { console.error('absorbInto target not found: ' + c.absorbInto); process.exit(1); }
  (targets[c.absorbInto] = targets[c.absorbInto] || {})[c.as] = k;
});
Object.keys(targets).forEach(function (target) {
  var plans = targets[target];
  ['conditions', 'medications'].forEach(function (kind) {
    Object.keys(grid[kind]).forEach(function (id) {
      var row = grid[kind][id];
      if (row[target]) return;
      var L = plans.level && row[plans.level], G = plans.graded && row[plans.graded];
      if (!L && !G) return;
      var raw = [L ? 'Level: ' + L.raw : '', G ? 'Graded: ' + G.raw : ''].filter(Boolean).join(' | ');
      var rules = combinePlans(L, G);
      var qualified = !!((L && L.qualified) || (G && G.qualified));
      row[target] = rules ? Object.assign({ raw: raw, rules: rules }, qualified ? { qualified: true } : {}) : { raw: raw, rules: null };
    });
  });
});
absorbed.forEach(function (k) {
  delete columns[k];
  ['conditions', 'medications'].forEach(function (kind) {
    Object.keys(grid[kind]).forEach(function (id) { delete grid[kind][id][k]; });
  });
});

['conditions', 'medications'].forEach(function (kind) {
  Object.keys(grid[kind]).forEach(function (id) {
    Object.keys(grid[kind][id]).forEach(function (col) {
      var cell = grid[kind][id][col];
      if (!columns[col].approveOnly || !cell.rules) return;
      cell.rules = cell.rules.map(function (r) {
        return r.outcome === 'decline' || r.outcome === 'refer' ? r : Object.assign({}, r, { outcome: 'standard' });
      });
    });
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
console.log('Rows: ' + report.rowsMatched + ' matched, ' + report.infoRows + ' product-info, ' + report.rowsSkipped + ' skipped, ' + unmatched.length + ' unmatched');
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
