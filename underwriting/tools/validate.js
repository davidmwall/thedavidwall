#!/usr/bin/env node
/*
 * Checks every carrier file for mistakes that would make results wrong:
 * unknown condition/med IDs, typo'd outcomes, bad rule order, build-chart gaps,
 * missing page citations, carrier files not wired into index.html.
 *
 *   node underwriting/tools/validate.js
 *
 * Exits 1 on errors. Warnings are printed but don't fail.
 */
'use strict';
var fs = require('fs');
var path = require('path');

var ROOT = path.join(__dirname, '..');
var UW = require(path.join(ROOT, 'engine.js'));
var html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
var errors = [], warnings = [];
require(path.join(ROOT, 'data', 'conditions.js'));
if (fs.existsSync(path.join(ROOT, 'data', 'agent-rules.js'))) {
  require(path.join(ROOT, 'data', 'agent-rules.js'));
  if (html.indexOf('src="data/agent-rules.js"') === -1) errors.push('index.html: data/agent-rules.js is not loaded');
  Object.keys(UW.state.agentRules || {}).forEach(function (id) {
    if (!UW.state.conditions[id]) errors.push('agent-rules.js: unknown condition "' + id + '"');
    var o = UW.state.agentRules[id].outcome;
    if (o !== 'gi-only' && o !== 'decline-if-silent') errors.push('agent-rules.js: ' + id + ' has unknown outcome "' + o + '"');
  });
}
if (fs.existsSync(path.join(ROOT, 'data', 'med-reasons.js'))) {
  require(path.join(ROOT, 'data', 'med-reasons.js'));
  if (html.indexOf('src="data/med-reasons.js"') === -1) errors.push('index.html: data/med-reasons.js is not loaded');
  var cats = {};
  Object.keys(UW.state.conditions).forEach(function (id) { cats[UW.state.conditions[id].category] = true; });
  Object.keys(UW.state.medReasons || {}).forEach(function (k) {
    (UW.state.medReasons[k].ids || []).forEach(function (id) {
      if (id.indexOf('cat:') === 0 ? !cats[id.slice(4)] : !UW.state.conditions[id]) errors.push('med-reasons.js: "' + k + '" has unknown condition "' + id + '"');
    });
  });
}
fs.readdirSync(path.join(ROOT, 'data')).filter(function (f) { return /^medications-extra.*\.js$/.test(f); }).forEach(function (f) {
  require(path.join(ROOT, 'data', f));
  if (html.indexOf('src="data/' + f + '"') === -1) errors.push('index.html: data/' + f + ' is not loaded');
});

var referenced = [];
html.replace(/<script src="(data\/carriers\/[^"]+)"/g, function (_, src) { referenced.push(src); });
var gridRef = /<script src="data\/grid\.js"/.test(html);

function err(where, msg) { errors.push(where + ': ' + msg); }
function warn(where, msg) { warnings.push(where + ': ' + msg); }

// Files on disk vs. index.html
var dir = path.join(ROOT, 'data', 'carriers');
fs.readdirSync(dir).filter(function (f) { return /\.js$/.test(f) && f[0] !== '_'; }).forEach(function (f) {
  if (referenced.indexOf('data/carriers/' + f) === -1) err(f, 'not loaded — add <script src="data/carriers/' + f + '"></script> to index.html');
});
referenced.forEach(function (src) {
  if (!fs.existsSync(path.join(ROOT, src))) err('index.html', 'references missing file ' + src);
});

var seenIds = {};
referenced.forEach(function (src) {
  var file = path.join(ROOT, src);
  if (!fs.existsSync(file)) return;
  var before = UW.state.products.length;
  try { require(file); } catch (e) { err(src, 'JavaScript error: ' + e.message); return; }
  var added = UW.state.products.slice(before);
  if (!added.length) err(src, 'file did not call UW.addProduct(...)');
  added.forEach(function (p) { checkProduct(src, p); });
});

function isOutcome(o) { return Object.prototype.hasOwnProperty.call(UW.OUTCOMES, o); }

function checkRules(where, rules) {
  if (!Array.isArray(rules) || !rules.length) return err(where, 'rules must be a non-empty array');
  rules.forEach(function (r, i) {
    if (!isOutcome(r.outcome)) err(where, 'rule ' + (i + 1) + ' has unknown outcome "' + r.outcome + '"');
    if (r.ageRange && !(Array.isArray(r.ageRange) && r.ageRange.length === 2 && r.ageRange[0] <= r.ageRange[1])) err(where, 'rule ' + (i + 1) + ' ageRange must be [min, max]');
    if (r.tobacco && r.tobacco !== 'yes' && r.tobacco !== 'no') err(where, 'rule ' + (i + 1) + ' tobacco must be "yes" or "no"');
    (r.withConditions || []).forEach(function (id) { if (!UW.state.conditions[id]) err(where, 'rule ' + (i + 1) + ' withConditions has unknown condition "' + id + '"'); });
  });
  // Conditional rules (facts the app can't check) may sit anywhere; ordering
  // applies to the firm, timing-only rules.
  var firm = rules.filter(function (r) { return !r.conditional && !r.ifTobacco && !r.tobacco && !r.withConditions && !r.ageRange && !r.current && r.dxAgeMax == null && r.dxAgeBelow == null; });
  var last = -Infinity;
  firm.forEach(function (r, i) {
    if (r.withinYears != null) {
      if (typeof r.withinYears !== 'number' || r.withinYears <= 0) err(where, 'withinYears must be a positive number');
      if (r.withinYears <= last) err(where, 'withinYears must increase from rule to rule');
      last = r.withinYears;
    } else if (i !== firm.length - 1) {
      err(where, 'a rule without withinYears must be the last firm rule (it is the fallback)');
    }
  });
}

function checkProduct(src, p) {
  var w = src + ' [' + (p.id || '?') + ']';
  ['id', 'carrier', 'product', 'type', 'underwriting', 'bestOutcome'].forEach(function (k) {
    if (!p[k]) err(w, 'missing required field "' + k + '"');
  });
  if (p.id && seenIds[p.id]) err(w, 'duplicate product id (also in ' + seenIds[p.id] + ')');
  seenIds[p.id] = src;
  if (p.type && !UW.PRODUCT_TYPES[p.type]) err(w, 'unknown type "' + p.type + '"');
  if (p.underwriting && !UW.UW_TYPES[p.underwriting]) err(w, 'unknown underwriting "' + p.underwriting + '"');
  if (p.bestOutcome && !isOutcome(p.bestOutcome)) err(w, 'unknown bestOutcome "' + p.bestOutcome + '"');

  if (!p.issueAges) { /* checked after the grid loads: the grid is the source for ages */ }
  else if (p.issueAges.min == null || p.issueAges.max == null) err(w, 'issueAges needs {min, max}');
  else if (p.issueAges.min > p.issueAges.max) err(w, 'issueAges min > max');
  if (!p.faceAmount) { /* checked after the grid loads */ }
  else if (p.faceAmount.min > p.faceAmount.max) err(w, 'faceAmount min > max');
  (p.statesNotAvailable || []).concat(p.statesAvailable || []).forEach(function (s) {
    if (!/^[A-Z]{2}$/.test(s)) err(w, 'state "' + s + '" must be a 2-letter uppercase code');
  });
  if (!p.guide || !p.guide.revision) warn(w, 'no guide.revision — you will not know when the data goes stale');
  if (!p.guide || !p.guide.lastReviewed) warn(w, 'no guide.lastReviewed date');
  if (p.tobacco && p.tobacco.outcome && !isOutcome(p.tobacco.outcome)) err(w, 'tobacco.outcome unknown "' + p.tobacco.outcome + '"');
  if (p.build && p.build.overweight && !isOutcome(p.build.overweight)) err(w, 'build.overweight unknown "' + p.build.overweight + '"');
  if (p.build && p.build.underweight && !isOutcome(p.build.underweight)) err(w, 'build.underweight unknown "' + p.build.underweight + '"');
  Object.keys(p.tierLimits || {}).forEach(function (o) {
    if (o === 'source') return;
    if (!isOutcome(o)) err(w, 'tierLimits has unknown outcome "' + o + '"');
    if (!isOutcome(p.tierLimits[o].fallback)) err(w, 'tierLimits.' + o + '.fallback must be an outcome');
    else if (UW.rank(p.tierLimits[o].fallback) <= UW.rank(o)) err(w, 'tierLimits.' + o + '.fallback must be a worse class');
  });
  if (p.unlisted && !isOutcome(p.unlisted.outcome)) err(w, 'unlisted.outcome unknown "' + p.unlisted.outcome + '"');

  if (p.build === undefined) warn(w, "no build chart — set build: 'none' if the product has no build requirement");
  else if (p.build !== 'none' && p.build !== null) {
    if (p.build.rowsBySex && (!p.build.rowsBySex.male || !p.build.rowsBySex.female)) err(w, 'build.rowsBySex needs male and female rows');
    var rows = p.build.rows || (p.build.rowsBySex ? p.build.rowsBySex.male.concat(p.build.rowsBySex.female) : []);
    if (!rows.length) err(w, "build.rows is empty — fill it in or use build: 'none'");
    var heights = rows.map(function (r) { return r.h; });
    rows.forEach(function (r) {
      var where = w + ' build h=' + r.h;
      if (typeof r.h !== 'number') err(where, 'h (height in inches) must be a number');
      Object.keys(r.max || {}).forEach(function (o) {
        if (!isOutcome(o)) err(where, 'unknown outcome "' + o + '" in max');
      });
      var tiers = Object.keys(r.max || {}).sort(function (a, b) { return UW.rank(a) - UW.rank(b); });
      for (var i = 1; i < tiers.length; i++) {
        if (r.max[tiers[i]] < r.max[tiers[i - 1]]) err(where, 'max weight for ' + tiers[i] + ' is lower than for better class ' + tiers[i - 1]);
      }
      if (r.min != null && tiers.length && r.min > r.max[tiers[0]]) err(where, 'min weight is above max weight');
      if (r.minFromAge && (typeof r.minFromAge.age !== 'number' || typeof r.minFromAge.min !== 'number')) err(where, 'minFromAge needs {age, min} numbers');
      Object.keys(r.under || {}).forEach(function (o) {
        if (!isOutcome(o)) err(where, 'unknown outcome "' + o + '" in under');
        if (r.min != null && r.under[o] > r.min) err(where, 'underweight minimum for ' + o + ' is above the best-tier minimum');
      });
    });
    for (var h = Math.min.apply(null, heights); h <= Math.max.apply(null, heights); h++) {
      if (heights.indexOf(h) === -1) warn(w, 'build chart missing height ' + h + ' in — clients at that height will show "verify"');
    }
    if (!p.build.source) warn(w, 'build chart has no source page');
  }

  Object.keys(p.conditions || {}).forEach(function (id) {
    var where = w + ' condition "' + id + '"';
    if (!UW.state.conditions[id]) err(where, 'unknown condition ID — add it to data/conditions.js or fix the spelling');
    checkRules(where, (p.conditions[id] || {}).rules);
    if (!p.conditions[id].source) warn(where, 'no source page');
  });
  Object.keys(p.medications || {}).forEach(function (id) {
    var where = w + ' medication "' + id + '"';
    var m = p.medications[id];
    if (!UW.state.medications[id]) err(where, 'unknown medication ID — add it to data/conditions.js or fix the spelling');
    if (m.rules) checkRules(where, m.rules);
    else if (!isOutcome(m.outcome)) err(where, 'needs outcome or rules');
    if (!m.source) warn(where, 'no source page');
  });
}

// Backup grid: loads after carriers; every mapped column must point at a real product.
if (gridRef && fs.existsSync(path.join(ROOT, 'data', 'grid.js'))) {
  var before = UW.state.products.length;
  try { require(path.join(ROOT, 'data', 'grid.js')); } catch (e) { err('data/grid.js', 'JavaScript error: ' + e.message); }
  var g = UW.state.grid || {};
  Object.keys(g.columns || {}).forEach(function (col) {
    var c = g.columns[col];
    if (c.product && !seenIds[c.product]) err('grid-mapping.json', 'column "' + col + '" maps to unknown product "' + c.product + '"');
  });
  ['conditions', 'medications'].forEach(function (kind) {
    Object.keys(g[kind] || {}).forEach(function (id) {
      if (!(kind === 'conditions' ? UW.state.conditions : UW.state.medications)[id]) err('data/grid.js', 'unknown ' + kind + ' ID "' + id + '" — re-run the import');
    });
  });
  UW.state.products.filter(function (p) { return !p.gridOnly; }).forEach(function (p) {
    if (!p.issueAges) warn(p.id, 'no issue ages in the guide or the grid — age shows "verify"');
    if (!p.faceAmount) warn(p.id, 'no face amounts in the guide or the grid — face shows "verify"');
  });
  var conflicts = UW.gridConflicts();
  console.log('Grid: ' + Object.keys(g.columns || {}).length + ' columns, ' + (UW.state.products.length - before) + ' grid-only products, ' + conflicts.length + ' disagreement(s) with carrier guides');
  conflicts.forEach(function (c) {
    console.log('INFO  grid disagrees: ' + c.product.id + ' ' + c.id + ' — guide ' + c.factor.best + '/' + c.factor.worst + ' (' + c.factor.source + '), grid "' + String(c.factor.grid).replace(/\s+/g, ' ') + '"');
  });
} else if (fs.existsSync(path.join(ROOT, 'data', 'grid.js'))) {
  err('index.html', 'data/grid.js exists but is not loaded — add <script src="data/grid.js"></script> after the carrier scripts');
}

// Vocabulary sanity: duplicate aliases across different conditions confuse search.
var aliasOwner = {};
Object.keys(UW.state.conditions).forEach(function (id) {
  (UW.state.conditions[id].aliases || []).forEach(function (a) {
    var k = a.toLowerCase();
    if (aliasOwner[k] && aliasOwner[k] !== id) warn('conditions.js', 'alias "' + a + '" used by both ' + aliasOwner[k] + ' and ' + id);
    aliasOwner[k] = id;
  });
});

warnings.forEach(function (m) { console.log('WARN  ' + m); });
errors.forEach(function (m) { console.log('ERROR ' + m); });
// Drug-chart reasons ("if taken for X") the app can't tie to a condition yet.
var unknownReasons = {};
UW.state.products.forEach(function (p) {
  Object.keys(p.medications || {}).forEach(function (id) {
    (p.medications[id].rules || []).forEach(function (r) {
      var m = r.note && /^(?:if )?taken for (.+?)(?:;|$)/i.exec(r.note);
      if (!m) return;
      var key = m[1].toLowerCase().trim();
      if (!UW.lookupReason(m[1]) && !/^(other uses?|other|allergies|malaria)$/.test(key)) unknownReasons[key] = (unknownReasons[key] || 0) + 1;
    });
  });
});
Object.keys(unknownReasons).forEach(function (k) { console.log('INFO  drug reason not linked to a condition: "' + k + '" x' + unknownReasons[k]); });
console.log('\n' + UW.state.products.length + ' products checked: ' + errors.length + ' error(s), ' + warnings.length + ' warning(s).');
process.exit(errors.length ? 1 : 0);
