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
 *            column options: product, absorbInto, approveOnly, bestOutcome, keepGuideFace,
 *            declineAs ("gi": the column's declines become that outcome),
 *            official (true: the carrier has no published guide, so the grid is its source)
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
// Required as a module (tests): expose the cell reader, skip the import.
var asModule = require.main !== module;
if (!input && !asModule) {
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
var FILLER = /\b(if|y|treated|treatment|diagnosed|diagnosis|performed|occurred|implanted|placed|inserted|placement|death|benefit|or|and|since|ago|the|past|last|in|a|of|has|been|it|for|then|otherwise|likely|within|between|over|after|more|than|longer|under|less|years?|yrs?|months?|mos?|onset|any|is|was|on|at|time|=|-)\b/g;

// One sentence -> { outcome, within, after, qualified } or null when it
// doesn't contain exactly one outcome word.
function parseSegment(seg) {
  var ageq = false, dxAccept = null, dxApply = null;
  // Age at diagnosis. Accept-only-if-older: "> age 45 when diagnosed",
  // "diagnosed > age 49", "onset > age 45", "age 45 or greater at onset".
  seg = seg.replace(/(?:>|over|after|older than)\s*(?:age\s*)?(\d{1,2})\s*(?:years?\s*(?:of age|old)\s*)?(?:when|at)\s*(?:diagnosed|diagnosis|onset|occurrence)/g,
      function (m, n) { dxAccept = { dxAgeMax: Number(n) }; return ' '; })
    .replace(/(?:diagnosed|diagnosis|dx|onset)\s*(?:>|over|after)\s*(?:age\s*(\d{1,2})|(\d{1,2})\s*years?\s*(?:of age|old))/g,
      function (m, a, b) { dxAccept = { dxAgeMax: Number(a || b) }; return ' '; })
    .replace(/(?:age\s*)?(\d{1,2})\s*or (?:greater|older)\s*at\s*(?:onset|occurrence|diagnosis)/g,
      function (m, n) { dxAccept = { dxAgeBelow: Number(n) }; return ' '; })
    // Outcome applies only if diagnosed young: "diagnosed before age 40", "prior to age 20".
    .replace(/(?:diagnosed|diagnosis|dx|onset)\s*(?:before|prior to|under|<)\s*(?:age\s*)?(\d{1,2})/g,
      function (m, n) { dxApply = { dxAgeBelow: Number(n) }; return ' '; });
  // Client-age conditions ("> 60 years of age", "age 45 or greater") are not timing.
  seg = seg.replace(/(?:>|<|over|under)?\s*\d+\s*(?:years?|yrs?)\s*(?:of age|old)/g, function () { ageq = true; return ' agecond '; })
    .replace(/(?:>|<)?\s*\bage\s*\d+(?:\s*or (?:greater|older|younger))?/g, function () { ageq = true; return ' agecond '; })
    .replace(/\d+\s*or (?:greater|older|younger)/g, function () { ageq = true; return ' agecond '; });
  var outs = outcomesIn(seg);
  if (outs.length !== 1) return null;
  var o = outs[0].outcome;
  // Time windows, most specific first. tAt = where the phrase starts.
  var within = null, after = null, m, tAt = -1;
  var N = '(\\d+(?:\\.\\d+)?)\\s*', U = UNIT;
  var pats = [
    // "between 6 months and 2 years ago", "between 2 and 3 years ago": upper bound
    ['within', new RegExp('between\\s+' + N + '(?:' + U + ')?\\s*(?:and|-|to)\\s*' + N + U), function (x) { return years(x[3], x[4]); }],
    // "1-2 yrs", "2 – 5 years"
    ['within', new RegExp(N + '(?:-|–|to)\\s*' + N + U), function (x) { return years(x[2], x[3]); }],
    // "> 2 years", "over 18 months", "more than 5 yrs", "longer than 10 years"
    ['after', new RegExp('(?:>|over|more than|longer than|after|older than)\\s*' + N + U), function (x) { return years(x[1], x[2]); }],
    // "within 2 years", "< 1 yr", "in the past 10 years", "last 5 yrs"
    ['within', new RegExp('(?:within|<|less than|under|in the (?:past|last)|past|last)\\s*' + N + U), function (x) { return years(x[1], x[2]); }],
    // bare "2 years" next to an outcome ("Graded 2 yrs")
    ['within', new RegExp(N + U), function (x) { return years(x[1], x[2]); }]
  ];
  for (var pi = 0; pi < pats.length; pi++) {
    if ((m = seg.match(pats[pi][1]))) {
      if (pats[pi][0] === 'within') within = pats[pi][2](m); else after = pats[pi][2](m);
      tAt = m.index;
      break;
    }
  }
  if (tAt < 0 && /\b(after|longer)\b/.test(seg)) after = 0;

  var rest = seg.slice(0, outs[0].at) + ' ' + seg.slice(outs[0].at + outs[0].len);
  // "If currently, Decline": the engine decides from the condition (ongoing
  // statuses like needing ADL help are current by definition) or the client's timing.
  var current = false;
  if (tAt < 0 && /\bcurrent(?:ly)?\b/.test(rest)) { current = true; rest = rest.replace(/\bcurrent(?:ly)?\b/g, ' '); }
  rest = rest.replace(/\d+(\.\d+)?/g, ' ').replace(/[<>(),:"'—–]/g, ' ').replace(FILLER, ' ')
    .replace(/\b(since diagnosis|diagnosis and treatment)\b/g, ' ').trim();
  var qualified = ageq || /[a-z]{2,}/.test(rest);
  // "Within 10 years OR current medication, Decline": the time window alone is
  // enough (firm); the other branch adds a conditional decline. Only when the
  // window comes first, i.e. it is about the condition itself, not
  // "if hospitalization within 5 years".
  var orBranch = false;
  if (qualified && tAt >= 0 && /\bor\b/.test(seg.slice(tAt))) {
    var before = seg.slice(0, tAt).slice(0, outs[0].at < tAt ? undefined : undefined)
      .replace(/\b(declined|decline|graded|modified|standard|preferred|level|approved|accepted?|if|treated|diagnosed|performed|occurred|or|in|the|past|last|within|y|yes)\b/g, ' ')
      .replace(/[^a-z]/g, ' ').trim();
    if (!before) orBranch = true;
  }
  return { outcome: o, within: within, after: after, qualified: qualified && !orBranch, orBranch: orBranch, current: current,
    dxAccept: dxAccept, dxApply: dxApply, acceptIf: /^(?:y|yes|approved?|accept(?:ed)?)\s+if\b/.test(seg.trim()) || /\b(?:approved|accepted?)\s+if\b/.test(seg) };
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
  var sentences = text.split(/\.(?!\d)|;|\|/).map(function (x) { return x.trim(); }).filter(Boolean);
  var segs = [];
  // "Decline <1 yr, Graded 1-2 yrs" / "PREF IF OVER 2 YEARS/MODIFIED IF WITHIN 2 YEARS":
  // split on commas or slashes only when every part has its own outcome
  // (so "w/ tobacco/diabetes" and "hospitalization/inpatient" stay whole).
  var splitIfEach = function (sent, sep) {
    var parts = sent.split(sep).map(function (x) { return x.trim(); }).filter(Boolean);
    var each = parts.every(function (p) { return outcomesIn(p).length === 1; });
    return parts.length > 1 && each ? parts : [sent];
  };
  sentences.forEach(function (sent) {
    splitIfEach(sent, '/').forEach(function (part) { segs = segs.concat(splitIfEach(part, ',')); });
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
      if (p.current) rule.current = true;
      if (q) conditional.push(Object.assign(rule, { conditional: true }));
      else if (p.current) conditional.push(rule);   // decided per client by the engine
      else if (rule.withinYears != null) timed.push(rule);
      else fallback.push(rule);
    };
    // Diagnosed too young for this answer: firm decline, checked against age at diagnosis.
    if (p.dxAccept) timed.unshift(Object.assign({ outcome: 'decline', note: 'diagnosed too young' }, p.dxAccept));
    if (p.dxApply) { conditional.push(Object.assign({ outcome: p.outcome, conditional: q }, p.dxApply)); return; }
    // "Y IF <conditions>": accepted when they're met, declined otherwise.
    if (p.acceptIf && q && p.outcome !== 'decline') conditional.push({ outcome: 'decline', conditional: true, note: 'if the conditions in the note are not met' });
    if (p.orBranch) conditional.push({ outcome: p.outcome, conditional: true, note: 'other branch of the "or" in the note' });
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
  if (conditional.some(function (r) { return r.conditional; }) && fallback.length) {
    fallback.forEach(function (r) { conditional.push(Object.assign(r, { conditional: true })); });
    fallback = [];
  }
  timed.sort(function (a, b) { return a.withinYears - b.withinYears; });
  if (fallback.length > 1) return null;
  for (var j = 1; j < timed.length; j++) if (timed[j].withinYears === timed[j - 1].withinYears) return null;
  // Drop repeated conditional rules (an explicit "otherwise, decline" plus the
  // implied one from "approved if ...").
  var seen = {};
  conditional = conditional.filter(function (r) {
    var key = [r.outcome, r.withinYears, r.dxAgeMax, r.dxAgeBelow].join('|');
    if (seen[key]) return false;
    seen[key] = true;
    return true;
  });
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

// Face amount text -> { min, max, bands: [{ min, max, face }], note }.
// Age bands ("18-55 $500,000", "$500,000 (20-45)", "Ages 50-80: $35,000") give
// the limit at a given age; with several plans listed, the highest applies.
function parseAmount(numStr, unit, hadDollar) {
  var v = Number(numStr.replace(/,/g, ''));
  if (/k/i.test(unit || '')) v *= 1000;
  if (/m/i.test(unit || '')) v *= 1e6;
  return (hadDollar || unit || v >= 1000) ? v : null;
}
var AMT = '(\\$)?\\s*(\\d{1,3}(?:,\\d{3})+|\\d+(?:\\.\\d+)?)\\s*([KkMm](?![a-z]))?';
function parseFace(text) {
  if (!text || NOT_SPECIFIED.test(text.toLowerCase())) return null;
  // "(50 to 85): $20,000" -> "50 to 85: $20,000"
  var t = text.replace(/\s+/g, ' ').replace(/\((\d{1,2}\s*(?:-|–|to)\s*\d{1,3})\)\s*:/g, '$1:');
  var bands = [], used = [];
  var mark = function (m) { used.push([m.index, m.index + m[0].length]); };
  // "18-55 $500,000", "Ages 50-80: $35,000", "20-50: $100K-$2M", "50 to 85): $20,000", "18-40: the lesser of $1M or…"
  // A ")" after the range must be followed by ":" ("(50 to 85): $20,000"); "(20-45) $375,000" is the
  // previous amount's band, handled by reB.
  var reA = new RegExp('(?<![\\d(])(\\d{1,2})\\s*(?:-|–|to)\\s*(\\d{1,3})\\s*(?:\\)\\s*:|:)?\\s*(?:up to|the lesser of)?\\s*' + AMT + '(?:\\s*(?:-|–)\\s*' + AMT + ')?', 'g');
  var m;
  while ((m = reA.exec(t))) {
    var a1 = parseAmount(m[4], m[5], m[3]), a2 = m[7] ? parseAmount(m[7], m[8], m[6]) : null;
    if (a1 === null || Number(m[1]) > Number(m[2]) || Number(m[2]) > 120) continue;
    bands.push({ min: Number(m[1]), max: Number(m[2]), face: a2 || a1 }); mark(m);
  }
  // "$500,000 (20-45)"
  var reB = new RegExp(AMT + '\\s*\\((\\d{1,2})\\s*(?:-|–)\\s*(\\d{1,3})\\)', 'g');
  while ((m = reB.exec(t))) {
    var a = parseAmount(m[2], m[3], m[1]);
    if (a !== null) { bands.push({ min: Number(m[4]), max: Number(m[5]), face: a }); mark(m); }
  }
  // Minimum: "MIN $2,500", "Min: $50,000", or the low end of "$5,000 – $25,000".
  var min = null, mm = new RegExp('\\bmin\\w*\\s*:?\\s*' + AMT, 'i').exec(t);
  if (mm) { min = parseAmount(mm[2], mm[3], mm[1]); mark(mm); }
  // Amounts not tied to an age band apply at every age (outer limit).
  var free = [], overall = [], reC = new RegExp(AMT + '(?:\\s*(?:-|–)\\s*' + AMT + ')?', 'g');
  while ((m = reC.exec(t))) {
    var at = m.index;
    if (used.some(function (u) { return at >= u[0] && at < u[1]; })) continue;
    var lo = parseAmount(m[2], m[3], m[1]), hi = m[5] ? parseAmount(m[5], m[6], m[4]) : null;
    if (lo === null) continue;
    if (/^\s*(?:x|%|year|yr|day|pay)/i.test(t.slice(m.index + m[0].length, m.index + m[0].length + 5))) continue;
    // An overall range ("$25,000 - $2,000,000") is the product's span, not an all-ages
    // limit that overrides age bands; a lone amount next to bands is a plan with no bands.
    if (hi !== null) { overall.push(hi); if (min === null || lo < min) min = min === null ? lo : Math.min(min, lo); }
    else free.push(lo);
  }
  if (!bands.length && !free.length && !overall.length) return null;
  if (free.length && bands.length) bands.push({ min: 0, max: 120, face: Math.max.apply(null, free) });
  var all = bands.map(function (b) { return b.face; }).concat(free, bands.length ? [] : overall);
  var out = { max: Math.max.apply(null, all), source: 'grid: Max face amount' };
  if (min !== null && min < out.max) out.min = min;
  if (bands.length) out.bands = bands;
  if (bands.length || free.length > 1) out.note = t.trim();
  return out;
}

if (asModule) {
  module.exports = {
    parseFace: parseFace,
    // interpret('Y IF > 2 YEARS', { column: 'TAB :: Carrier', tiers: [...], values: {...} })
    interpret: function (raw, opts) {
      opts = opts || {};
      mapping.values = opts.values || {};
      mapping.tiers = opts.tiers || [];
      activeTiers = tiersFor(opts.column || '');
      return interpret(raw);
    }
  };
  return;
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
  // Face amounts (agent: the grid is the source for ages and face).
  var face = parseFace(info['Max face amount'] || '');
  if (face) c.faceAmount = face;
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
// Merge per-plan timelines (best plan first): at each point in time the client
// gets the best plan that accepts them; Decline only if every plan declines.
// Cells that only have conditions the app can't check stay "verify" (null).
function combinePlans(plans) {
  var lists = plans.map(function (pl) { return pl.cell ? planRules(pl.cell, pl.as) : null; });
  if (plans.some(function (pl, i) { return pl.cell && !lists[i]; })) return null;
  var firms = lists.map(function (rs) { return rs ? rs.filter(function (r) { return !r.conditional; }) : null; });
  if (lists.some(function (rs, i) { return rs && rs.length && !firms[i].length; })) return null;
  var at = function (rs, plan, t) {
    for (var i = 0; i < rs.length; i++) if (rs[i].withinYears == null || t < rs[i].withinYears) return rs[i].outcome;
    return plan; // past every lookback: not asked
  };
  var outcomeAt = function (t) {
    for (var i = 0; i < plans.length; i++) {
      if (!firms[i]) continue;
      var o = at(firms[i], plans[i].as, t);
      if (o !== 'decline') return o;
    }
    return 'decline';
  };
  var bps = [].concat.apply([], firms.filter(Boolean)).map(function (r) { return r.withinYears; })
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
  var conds = [].concat.apply([], lists.filter(Boolean)).filter(function (r) { return r.conditional; });
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
      var order = Object.keys(plans).sort(function (a, b) { return UW.rank(a) - UW.rank(b); });
      var cells = order.map(function (as) { return { as: as, cell: row[plans[as]] }; });
      if (!cells.some(function (x) { return x.cell; })) return;
      var raw = cells.filter(function (x) { return x.cell; }).map(function (x) { return UW.label(x.as) + ': ' + x.cell.raw; }).join(' | ');
      var rules = combinePlans(cells);
      var qualified = cells.some(function (x) { return x.cell && x.cell.qualified; });
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
      // "declineAs": a carrier whose grid "decline" really means its fallback plan (e.g. AIG: decline = GI)
      if (columns[col].declineAs && cell.rules) {
        cell.rules = cell.rules.map(function (r) { return r.outcome === 'decline' ? Object.assign({}, r, { outcome: columns[col].declineAs }) : r; });
      }
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
