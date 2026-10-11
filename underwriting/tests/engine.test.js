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
  assert.strictEqual(z.verifyCount, 2);   // age + face; a missing state list is info only
  assert.ok(z.factors.some(function (f) { return f.kind === 'state' && f.info && !f.verify; }));
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

test('grid face bands follow the client age; grid overrides guide ages/face, keeps guide minimum', function () {
  UW.state.products = []; UW.state.grid = null;
  UW.addProduct({ id: 'f', carrier: 'F', product: 'F', type: 'term', underwriting: 'simplified', bestOutcome: 'standard',
    issueAges: { min: 18, max: 70 }, faceAmount: { min: 25000, max: 300000 } });
  UW.registerGrid({ columns: { 'T :: F': { product: 'f', issueAges: { min: 18, max: 75 },
    faceAmount: { max: 500000, bands: [{ min: 18, max: 55, face: 500000 }, { min: 56, max: 80, face: 250000 }] } } },
    conditions: {}, medications: {} });
  var run = function (age, face) { return UW.evaluate({ age: age, faceAmount: face })[0]; };
  assert.strictEqual(run(50, 400000).status, 'fit');         // grid band: $500k at 50 (guide said $300k)
  assert.strictEqual(run(60, 400000).status, 'ineligible');  // grid band: $250k at 60
  assert.strictEqual(run(60, 200000).status, 'fit');
  assert.strictEqual(run(72, 100000).status, 'fit');         // grid ages 18-75 override guide 18-70
  assert.strictEqual(run(50, 10000).status, 'ineligible');   // guide minimum $25k kept
});

test('tobacco-gated rules use the tobacco answer', function () {
  UW.state.products = []; UW.state.grid = null;
  UW.addProduct({ id: 't', carrier: 'T', product: 'T', type: 'final_expense', underwriting: 'simplified', bestOutcome: 'preferred',
    conditions: { copd: { rules: [{ outcome: 'graded', ifTobacco: true }, { outcome: 'standard' }] } } });
  var run = function (tob) { return UW.evaluate({ tobacco: tob, conditions: [{ id: 'copd' }] })[0]; };
  assert.strictEqual(run('no').best, 'standard');
  assert.strictEqual(run('no').worst, 'standard');
  assert.strictEqual(run('yes').best, 'graded');
  assert.strictEqual(run('').best, 'standard');
  assert.strictEqual(run('').worst, 'graded');
});

test('underweight tiers: best tier whose minimum the client meets', function () {
  UW.state.products = []; UW.state.grid = null;
  UW.addProduct({ id: 'u', carrier: 'U', product: 'U', type: 'final_expense', underwriting: 'instant', bestOutcome: 'preferred',
    build: { rows: [{ h: 66, min: 115, max: { preferred: 260, standard: 285, graded: 297 }, under: { standard: 103, graded: 93 } }] } });
  var run = function (lb) { return UW.evaluate({ heightIn: 66, weightLb: lb })[0].best; };
  assert.strictEqual(run(115), 'preferred');
  assert.strictEqual(run(110), 'standard');
  assert.strictEqual(run(100), 'graded');
  assert.strictEqual(run(92), 'decline');
  assert.strictEqual(run(290), 'graded');
  assert.strictEqual(run(298), 'decline');
});

test('a condition sub-type uses the parent rule when the carrier has no specific one', function () {
  UW.state.products = []; UW.state.grid = null;
  UW.addProduct({ id: 'g', carrier: 'G', product: 'General', type: 'final_expense', underwriting: 'simplified', bestOutcome: 'level',
    conditions: { cancer: { rules: [{ withinYears: 2, outcome: 'decline' }, { outcome: 'level' }] } } });
  UW.addProduct({ id: 's', carrier: 'S', product: 'Specific', type: 'final_expense', underwriting: 'simplified', bestOutcome: 'level',
    conditions: { cancer: { rules: [{ outcome: 'decline' }] }, cancer_breast: { rules: [{ withinYears: 2, outcome: 'graded' }, { outcome: 'level' }] } } });
  var r = UW.evaluate({ conditions: [{ id: 'cancer_breast', yearsSince: 1 }] });
  assert.strictEqual(find(r, 'g').best, 'decline');   // general cancer rule
  assert.strictEqual(find(r, 's').best, 'graded');    // its own breast-cancer rule wins
});

test('class limits: a class the client cannot get drops to the next one', function () {
  UW.state.products = []; UW.state.grid = null;
  UW.addProduct({ id: 'ta', carrier: 'T', product: 'T', type: 'final_expense', underwriting: 'instant', bestOutcome: 'preferred',
    issueAges: { min: 18, max: 85 }, faceAmount: { min: 5000, max: 100000 },
    tierLimits: { preferred: { faceMin: 10000, statesNot: ['CA'], fallback: 'standard' },
                  graded: { ageMax: 80, faceMax: 25000, fallback: 'decline' } },
    conditions: { cirrhosis: { rules: [{ outcome: 'graded' }] } } });
  var run = function (c) { return UW.evaluate(c)[0]; };
  assert.strictEqual(run({ age: 60 }).best, 'preferred');
  assert.strictEqual(run({ state: 'CA' }).best, 'standard');
  assert.strictEqual(run({ faceAmount: 8000 }).best, 'standard');
  assert.strictEqual(run({ age: 80, conditions: [{ id: 'cirrhosis' }] }).best, 'graded');
  assert.strictEqual(run({ age: 81, conditions: [{ id: 'cirrhosis' }] }).best, 'decline');
  assert.strictEqual(run({ age: 81, conditions: [{ id: 'cirrhosis' }] }).status, 'ineligible');
  assert.strictEqual(run({ faceAmount: 30000, conditions: [{ id: 'cirrhosis' }] }).best, 'decline');
});

test('class limits: tobacco age limit and chained fallbacks (level -> graded -> GI)', function () {
  UW.state.products = []; UW.state.grid = null;
  UW.addProduct({ id: 'aig', carrier: 'A', product: 'A', type: 'final_expense', underwriting: 'instant', bestOutcome: 'level',
    tierLimits: { level: { tobaccoAgeMax: 70, fallback: 'graded' }, graded: { faceMax: 25000, fallback: 'gi' }, gi: { faceMax: 25000, fallback: 'decline' } },
    conditions: { hiv_aids: { rules: [{ outcome: 'gi' }] } } });
  var run = function (c) { return UW.evaluate(c)[0].best; };
  assert.strictEqual(run({ age: 70, tobacco: 'yes' }), 'level');
  assert.strictEqual(run({ age: 71, tobacco: 'yes' }), 'graded');
  assert.strictEqual(run({ age: 71, tobacco: 'no' }), 'level');
  assert.strictEqual(run({ age: 71, tobacco: 'yes', faceAmount: 30000 }), 'decline');
  assert.strictEqual(run({ faceAmount: 20000, conditions: [{ id: 'hiv_aids' }] }), 'gi');
});

test('per-rule tobacco keeps its place in the timeline; condition combos apply only when entered', function () {
  UW.state.products = []; UW.state.grid = null;
  UW.addProduct({ id: 'a', carrier: 'A', product: 'A', type: 'final_expense', underwriting: 'instant', bestOutcome: 'level',
    conditions: {
      heart_attack: { rules: [{ withinYears: 0.5, outcome: 'gi' }, { withinYears: 2, outcome: 'graded', tobacco: 'yes' }, { withinYears: 2, outcome: 'level' }] },
      copd: { rules: [{ outcome: 'gi', tobacco: 'yes' }, { outcome: 'graded' }] },
      diabetes_oral: { rules: [{ outcome: 'gi', withConditions: ['stroke', 'cad'] }, { outcome: 'level' }] },
      stroke: { rules: [{ withinYears: 1, outcome: 'gi' }] } } });
  var run = function (c) { var r = UW.evaluate(c)[0]; return r.best + '/' + r.worst; };
  var mi = function (y, tob) { return run({ tobacco: tob, conditions: [{ id: 'heart_attack', yearsSince: y }] }); };
  assert.strictEqual(mi(1, 'no'), 'level/level');
  assert.strictEqual(mi(1, 'yes'), 'graded/graded');
  assert.strictEqual(mi(1, ''), 'level/graded');
  assert.strictEqual(mi(0.3, 'yes'), 'gi/gi');      // the 6-month rule still wins for smokers
  assert.strictEqual(mi(3, 'yes'), 'level/level');  // past the lookback
  assert.strictEqual(run({ tobacco: 'yes', conditions: [{ id: 'copd' }] }), 'gi/gi');
  assert.strictEqual(run({ tobacco: 'no', conditions: [{ id: 'copd' }] }), 'graded/graded');
  assert.strictEqual(run({ conditions: [{ id: 'diabetes_oral' }] }), 'level/level');
  assert.strictEqual(run({ conditions: [{ id: 'diabetes_oral' }, { id: 'stroke', yearsSince: 5 }] }), 'gi/gi');
});

test('build minimum can change with age (minFromAge)', function () {
  UW.state.products = []; UW.state.grid = null;
  UW.addProduct({ id: 'b', carrier: 'B', product: 'B', type: 'iul', underwriting: 'instant', bestOutcome: 'standard',
    build: { rows: [{ h: 66, min: 100, max: { standard: 241 }, minFromAge: { age: 60, min: 112 } }] } });
  var run = function (age, lb) { return UW.evaluate({ age: age, heightIn: 66, weightLb: lb })[0].best; };
  assert.strictEqual(run(40, 105), 'standard');
  assert.strictEqual(run(65, 105), 'decline');
  assert.strictEqual(run('', 105), 'standard');   // age unknown: never rules out
  assert.strictEqual(run(65, 112), 'standard');
});

test('rules by current age (ageRange): firm when age is known, possible when blank', function () {
  UW.state.products = []; UW.state.grid = null;
  UW.addProduct({ id: 'c', carrier: 'C', product: 'C', type: 'term', underwriting: 'full', bestOutcome: 'preferred_plus',
    conditions: { cad: { rules: [{ ageRange: [0, 39], outcome: 'decline' }, { ageRange: [40, 59], outcome: 'table' }, { outcome: 'standard' }] } } });
  var run = function (age) { var r = UW.evaluate({ age: age, conditions: [{ id: 'cad' }] })[0]; return r.best + '/' + r.worst; };
  assert.strictEqual(run(35), 'decline/decline');
  assert.strictEqual(run(50), 'table/table');
  assert.strictEqual(run(65), 'standard/standard');
  assert.strictEqual(run(''), 'standard/decline');
});

test('build charts by sex: blank sex uses the more lenient chart', function () {
  UW.state.products = []; UW.state.grid = null;
  UW.addProduct({ id: 's', carrier: 'S', product: 'S', type: 'term', underwriting: 'full', bestOutcome: 'preferred_plus',
    build: { overweight: 'table', rowsBySex: { male: [{ h: 70, max: { preferred_plus: 195, standard: 250 } }], female: [{ h: 70, max: { preferred_plus: 180, standard: 240 } }] } } });
  var run = function (sex, lb) { return UW.evaluate({ sex: sex, heightIn: 70, weightLb: lb })[0].best; };
  assert.strictEqual(run('male', 190), 'preferred_plus');
  assert.strictEqual(run('female', 190), 'standard');
  assert.strictEqual(run('', 190), 'preferred_plus');
  assert.strictEqual(run('female', 245), 'table');
  assert.strictEqual(run('', 245), 'standard');
});

test('face bands: an age past the listed bands uses the nearest band, not the overall max', function () {
  UW.state.products = []; UW.state.grid = null;
  UW.addProduct({ id: 'f', carrier: 'F', product: 'F', type: 'term', underwriting: 'simplified', bestOutcome: 'standard',
    issueAges: { min: 18, max: 75 }, faceAmount: { min: 25000, max: 550000, bands: [{ min: 18, max: 50, face: 550000 }, { min: 61, max: 70, face: 350000 }] } });
  var run = function (age, amt) { return UW.evaluate({ age: age, faceAmount: amt })[0].best; };
  assert.strictEqual(run(72, 400000), 'decline');
  assert.strictEqual(run(72, 300000), 'standard');
  assert.strictEqual(run(40, 500000), 'standard');
});

test('agent rule gi-only: GI where the product has a GI plan, decline elsewhere, overriding the guide', function () {
  UW.state.products = []; UW.state.grid = null; var saved = UW.state.agentRules;
  UW.registerAgentRules({ hiv_aids: { outcome: 'gi-only', note: 'Agent rule' } });
  UW.addProduct({ id: 'term', carrier: 'T', product: 'T', type: 'term', underwriting: 'accelerated', bestOutcome: 'standard', conditions: { hiv_aids: { rules: [{ outcome: 'refer' }] } } });
  UW.addProduct({ id: 'fe', carrier: 'F', product: 'F', type: 'final_expense', underwriting: 'simplified', bestOutcome: 'level', conditions: { chf: { rules: [{ outcome: 'gi' }] } } });
  UW.addProduct({ id: 'giwl', carrier: 'G', product: 'G', type: 'final_expense', underwriting: 'guaranteed', bestOutcome: 'gi' });
  var r = UW.evaluate({ conditions: [{ id: 'hiv_aids' }] });
  assert.strictEqual(find(r, 'term').best, 'decline');
  assert.strictEqual(find(r, 'fe').best, 'gi');
  assert.strictEqual(find(r, 'giwl').best, 'gi');
  UW.state.agentRules = saved;
});

test('agent product limits override guide and grid issue ages', function () {
  UW.state.products = []; UW.state.grid = null; var saved = UW.state.agentLimits; UW.state.agentLimits = [];
  UW.registerAgentLimits([{ products: /^acme-/, except: ['acme-gi'], issueAgeMin: 18 }, { products: ['acme-gi'], issueAgeMin: 45 }]);
  UW.addProduct({ id: 'acme-term', carrier: 'A', product: 'T', type: 'term', underwriting: 'accelerated', bestOutcome: 'standard', issueAges: { min: 20, max: 65 } });
  UW.addProduct({ id: 'acme-gi', carrier: 'A', product: 'G', type: 'final_expense', underwriting: 'guaranteed', bestOutcome: 'gi', issueAges: { min: 50, max: 80 } });
  var r = UW.evaluate({ age: 18 }), r2 = UW.evaluate({ age: 46 });
  assert.strictEqual(find(r, 'acme-term').best, 'standard');
  assert.strictEqual(find(r2, 'acme-gi').best, 'gi');
  assert.strictEqual(find(UW.evaluate({ age: 66 }), 'acme-term').best, 'decline');   // max unchanged
  UW.state.agentLimits = saved;
});

test('shipped data passes the validator', function () {
  var cp = require('child_process');
  var res = cp.spawnSync(process.execPath, [path.join(__dirname, '..', 'tools', 'validate.js')], { encoding: 'utf8' });
  assert.strictEqual(res.status, 0, res.stdout + res.stderr);
});

test('a drug the guide does not list is judged through the condition it treats', function () {
  UW.state.grid = null;
  load([FE]);
  var alone = find(UW.evaluate({ medications: [{ id: 'metformin' }] }), 'fe');
  var withDx = find(UW.evaluate({ conditions: [{ id: 'diabetes_insulin' }], medications: [{ id: 'metformin' }] }), 'fe');
  var rx = function (r) { return r.factors.filter(function (f) { return f.kind === 'medication'; })[0]; };
  assert.ok(rx(alone).verify);
  assert.ok(!rx(withDx).verify && rx(withDx).info);
  assert.match(rx(withDx).note, /Judged through Diabetes — insulin/);
});
