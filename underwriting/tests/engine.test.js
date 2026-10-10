// Run: node --test underwriting/tests/
'use strict';
var test = require('node:test');
var assert = require('node:assert');
var path = require('path');

var UW = require('../engine.js');
require('../data/conditions.js');

function load(products) { UW.state.products = []; products.forEach(UW.addProduct); }

var FE = {
  id: 'fe', carrier: 'A', product: 'FE', type: 'final_expense', underwriting: 'instant', bestOutcome: 'level',
  issueAges: { min: 50, max: 85 }, faceAmount: { min: 2000, max: 40000 }, statesNotAvailable: ['NY'],
  build: { rows: [{ h: 70, min: 110, max: { level: 280, graded: 315 } }] },
  conditions: {
    chf: { rules: [{ outcome: 'decline' }] },
    heart_attack: { rules: [{ withinYears: 1, outcome: 'decline' }, { withinYears: 2, outcome: 'graded' }] },
    copd: { rules: [{ withinYears: 2, outcome: 'graded' }, { outcome: 'level' }] }
  },
  medications: { insulin: { outcome: 'level' } }
};
var TERM = {
  id: 'term', carrier: 'B', product: 'Term', type: 'term', underwriting: 'accelerated', bestOutcome: 'preferred_plus',
  issueAges: { min: 18, max: 60 }, faceAmount: { min: 100000, max: 1000000 },
  tobacco: { outcome: 'standard' },
  conditions: { high_blood_pressure: { rules: [{ outcome: 'preferred' }] } }
};
var GI = {
  id: 'gi', carrier: 'C', product: 'GI', type: 'final_expense', underwriting: 'guaranteed', bestOutcome: 'gi',
  issueAges: { min: 50, max: 80 }, build: 'none', unlisted: { outcome: 'gi' }
};

function find(results, id) { return results.filter(function (r) { return r.product.id === id; })[0]; }

test('empty input eliminates nothing', function () {
  load([FE, TERM, GI]);
  var r = UW.evaluate({});
  assert.strictEqual(r.length, 3);
  r.forEach(function (x) { assert.notStrictEqual(x.status, 'ineligible'); });
});

test('age outside issue ages rules out only that product', function () {
  load([FE, TERM, GI]);
  var r = UW.evaluate({ age: 45 });
  assert.strictEqual(find(r, 'fe').status, 'ineligible');
  assert.strictEqual(find(r, 'gi').status, 'ineligible');
  assert.strictEqual(find(r, 'term').status, 'fit');
});

test('state exclusion', function () {
  load([FE]);
  assert.strictEqual(UW.evaluate({ state: 'ny' })[0].status, 'ineligible');
  assert.strictEqual(UW.evaluate({ state: 'TX' })[0].status, 'fit');
});

test('build chart tiers', function () {
  load([FE]);
  assert.strictEqual(UW.evaluate({ heightIn: 70, weightLb: 250 })[0].best, 'level');
  assert.strictEqual(UW.evaluate({ heightIn: 70, weightLb: 300 })[0].best, 'graded');
  assert.strictEqual(UW.evaluate({ heightIn: 70, weightLb: 330 })[0].status, 'ineligible');
  assert.strictEqual(UW.evaluate({ heightIn: 70, weightLb: 100 })[0].status, 'ineligible');
  // Height not on chart -> verify, not decline
  assert.strictEqual(UW.evaluate({ heightIn: 64, weightLb: 150 })[0].status, 'verify');
});

test('height without weight is ignored', function () {
  load([FE]);
  assert.strictEqual(UW.evaluate({ heightIn: 70 })[0].factors.length, 0);
});

test('timed condition rules with known years', function () {
  load([FE]);
  var at = function (y) { return UW.evaluate({ conditions: [{ id: 'heart_attack', yearsSince: y }] })[0]; };
  assert.strictEqual(at(0.5).status, 'ineligible');
  assert.strictEqual(at(1.5).best, 'graded');
  assert.strictEqual(at(5).best, 'level'); // older than all lookbacks -> not asked
  assert.strictEqual(at(5).status, 'fit');
});

test('timed condition with unknown years shows a range and is not eliminated', function () {
  load([FE]);
  var r = UW.evaluate({ conditions: [{ id: 'heart_attack' }] })[0];
  assert.strictEqual(r.status, 'verify');
  assert.strictEqual(r.best, 'level');
  assert.strictEqual(r.worst, 'decline');
  var c = UW.evaluate({ conditions: [{ id: 'copd' }] })[0];
  assert.strictEqual(c.best, 'level');
  assert.strictEqual(c.worst, 'graded');
});

test('hard decline condition', function () {
  load([FE, GI]);
  var r = UW.evaluate({ conditions: [{ id: 'chf' }] });
  assert.strictEqual(find(r, 'fe').status, 'ineligible');
  assert.strictEqual(find(r, 'gi').status, 'fit');
  assert.strictEqual(find(r, 'gi').best, 'gi');
});

test('condition not in guide is flagged verify, never assumed fine', function () {
  load([TERM]);
  var r = UW.evaluate({ conditions: [{ id: 'lupus' }] })[0];
  assert.strictEqual(r.status, 'verify');
  assert.strictEqual(r.verifyCount, 1);
  assert.strictEqual(r.best, 'preferred_plus');
});

test('worst factor wins; tobacco caps term class', function () {
  load([TERM]);
  var r = UW.evaluate({ tobacco: 'yes', conditions: [{ id: 'high_blood_pressure' }] })[0];
  assert.strictEqual(r.best, 'standard');
  assert.strictEqual(r.status, 'fit');
});

test('product type filter', function () {
  load([FE, TERM, GI]);
  var r = UW.evaluate({ productTypes: ['term'] });
  assert.deepStrictEqual(r.map(function (x) { return x.product.id; }), ['term']);
});

test('ranking: clean fits first, best class first', function () {
  load([FE, TERM, GI]);
  var r = UW.evaluate({ age: 55 });
  assert.deepStrictEqual(r.map(function (x) { return x.product.id; }), ['term', 'fe', 'gi']);
});

test('a GI fallback does not outrank a product that may offer level', function () {
  load([FE, GI]);
  var r = UW.evaluate({ age: 60, conditions: [{ id: 'heart_attack' }] });
  assert.deepStrictEqual(r.map(function (x) { return x.product.id; }), ['fe', 'gi']);
});

test('search finds aliases and brand names', function () {
  assert.strictEqual(UW.searchConditions('afib')[0].id, 'afib');
  assert.strictEqual(UW.searchConditions('mi')[0].id, 'heart_attack');
  assert.strictEqual(UW.searchMedications('ozempic')[0].id, 'glp1');
  assert.strictEqual(UW.searchMedications('coumadin')[0].id, 'warfarin');
});

// --- Backup grid -------------------------------------------------------------
function loadWithGrid() {
  load([FE, GI]);
  UW.state.grid = null;
  UW.registerGrid({
    columns: { 'WL :: A': { product: 'fe' }, 'WL :: Z': { type: 'final_expense', underwriting: 'simplified' } },
    conditions: {
      copd: { 'WL :: A': { raw: 'Decline', rules: [{ outcome: 'decline' }] }, 'WL :: Z': { raw: 'Yes', rules: [{ outcome: 'best' }] } },
      chf: { 'WL :: A': { raw: 'Decline', rules: [{ outcome: 'decline' }] } },
      lupus: { 'WL :: A': { raw: 'Graded', rules: [{ outcome: 'graded' }] }, 'WL :: Z': { raw: 'See notes', rules: null } }
    },
    medications: {}
  });
}

test('grid: carrier guide wins and disagreement is flagged', function () {
  loadWithGrid();
  var f = find(UW.evaluate({ conditions: [{ id: 'copd' }] }), 'fe').factors[0];
  assert.strictEqual(f.basis, 'guide');
  assert.strictEqual(f.best, 'level');      // from the guide, not the grid's Decline
  assert.strictEqual(f.grid, 'Decline');
  assert.strictEqual(f.gridConflict, true);
});

test('grid: agreement is not a conflict', function () {
  loadWithGrid();
  var f = find(UW.evaluate({ conditions: [{ id: 'chf' }] }), 'fe').factors[0];
  assert.strictEqual(f.gridConflict, false);
});

test('grid: fills a gap in the guide, labeled backup, never a clean fit', function () {
  loadWithGrid();
  var r = find(UW.evaluate({ conditions: [{ id: 'lupus' }] }), 'fe');
  assert.strictEqual(r.factors[0].basis, 'grid');
  assert.strictEqual(r.best, 'graded');
  assert.strictEqual(r.backupCount, 1);
  assert.strictEqual(r.status, 'verify');
});

test('grid: grid-only carrier appears, "yes" means best class, uninterpretable cell is verify', function () {
  loadWithGrid();
  var r = UW.evaluate({ conditions: [{ id: 'copd' }] });
  var z = r.filter(function (x) { return x.product.gridOnly; })[0];
  assert.ok(z);
  assert.strictEqual(z.best, 'level');
  assert.strictEqual(z.status, 'verify');
  var lupus = UW.evaluate({ conditions: [{ id: 'lupus' }] }).filter(function (x) { return x.product.gridOnly; })[0];
  assert.strictEqual(lupus.verifyCount, 1);
});

test('grid: grid-only ranks below a guide-backed product with the same result', function () {
  loadWithGrid();
  var r = UW.evaluate({});
  var ids = r.map(function (x) { return x.product.id; });
  assert.ok(ids.indexOf('fe') < ids.indexOf('grid-wl-z'));
});

test('grid: grid-only product does not rule anyone out on age/state/face it does not know', function () {
  loadWithGrid();
  var z = UW.evaluate({ age: 99, state: 'NY', faceAmount: 5000000 }).filter(function (x) { return x.product.gridOnly; })[0];
  assert.strictEqual(z.status, 'verify');
  assert.strictEqual(z.verifyCount, 3);
});

test('importer reads all xlsx tabs, skips UHL, parses timed cells', function () {
  var cp = require('child_process'), fs = require('fs'), os = require('os');
  var out = path.join(os.tmpdir(), 'grid-test-' + process.pid + '.js');
  var res = cp.spawnSync(process.execPath, [path.join(__dirname, '..', 'tools', 'import_grid.js'),
    path.join(__dirname, 'fixtures', 'sample-grid.xlsx'),
    '--mapping=' + path.join(__dirname, 'fixtures', 'sample-grid-mapping.json'), '--out=' + out], { encoding: 'utf8' });
  assert.strictEqual(res.status, 0, res.stderr);
  assert.match(res.stdout, /UHL \(skipped\)/);
  assert.match(res.stdout, /Zebra Fever/);  // unmatched row reported, not guessed
  assert.match(res.stdout, /"Ask Bob"/);    // unreadable cell reported
  var captured;
  var saved = UW.registerGrid;
  UW.registerGrid = function (g) { captured = g; };
  try { require(out); } finally { UW.registerGrid = saved; fs.unlinkSync(out); }
  assert.deepStrictEqual(captured.conditions.heart_attack['Whole Life :: Sample Carrier A'].rules,
    [{ withinYears: 1, outcome: 'decline' }, { withinYears: 2, outcome: 'graded' }]);
  assert.deepStrictEqual(captured.conditions.chf['Whole Life :: Sample Carrier A'].rules,
    [{ withinYears: 2, outcome: 'decline' }, { outcome: 'graded' }]);
  assert.deepStrictEqual(captured.conditions.copd['Term-IUL :: Sample Carrier B'].rules, [{ outcome: 'decline' }]);
  assert.deepStrictEqual(captured.medications.eliquis['Whole Life :: Sample Carrier E'].rules, [{ outcome: 'best' }]);
  assert.strictEqual(captured.columns['Term-IUL :: Sample Carrier B'].type, 'term');
});

test('shipped data passes the validator', function () {
  var cp = require('child_process');
  var res = cp.spawnSync(process.execPath, [path.join(__dirname, '..', 'tools', 'validate.js')], { encoding: 'utf8' });
  assert.strictEqual(res.status, 0, res.stdout + res.stderr);
});
