// Regression tests for reading grid cells, built from the agency grid's real
// wording. Age and time thresholds are the highest-stakes part of the app:
// every pattern here was checked by hand. Run: node --test underwriting/tests/
'use strict';
var test = require('node:test');
var assert = require('node:assert');
var grid = require('../tools/import_grid.js');
var UW = globalThis.UW;

function rules(text, opts) {
  var r = grid.interpret(text, opts);
  return r === 'empty' || !r ? r : r.rules;
}
// Compact form: '<2y decline', 'dx<=45 decline', '?decline' (conditional).
function short(text, opts) {
  var r = rules(text, opts);
  if (!r || r === 'empty') return r;
  return r.map(function (x) {
    return (x.conditional ? '?' : '') +
      (x.withinYears != null ? '<' + x.withinYears + 'y ' : '') +
      (x.dxAgeMax != null ? 'dx<=' + x.dxAgeMax + ' ' : '') +
      (x.dxAgeBelow != null ? 'dx<' + x.dxAgeBelow + ' ' : '') + x.outcome;
  }).join(', ');
}

var CASES = [
  // "No information" is never a verdict
  ['Carrier Does Not Specify', 'empty'],
  ['Application and Underwiting Guidelines Do Not Specify', 'empty'],
  ['NA', 'empty'],
  ['See TruStage UW Guide', 'empty'],
  // Plain verdicts
  ['Decline', 'decline'],
  ['Declined', 'decline'],
  ['Accepted', 'best'],
  ['Graded', 'graded'],
  ['Case by case', 'refer'],
  // "Within N" windows: older than N = not asked
  ['If treated within 5 years, Decline', '<5y decline'],
  ['If treated within 2 years, Graded', '<2y graded'],
  ['If within 1 year, Decline', '<1y decline'],
  ['If treated within 6 months, Decline', '<0.5y decline'],
  ['Decline if within 5 years', '<5y decline'],
  ['Within 10 years, Decline.', '<10y decline'],
  // "Y IF > N": accepted after N, implied decline before
  ['Y IF > 2 YEARS SINCE DIAGNOSIS AND TREATMENT', '<2y decline, best'],
  ['Y IF > 18 MONTHS SINCE TREATMENT', '<1.5y decline, best'],
  ['Y IF > 1 YEAR', '<1y decline, best'],
  ['Y IF ONSET > 2 YEARS AGO', '<2y decline, best'],
  // Stepped windows
  ['If treated within 2 years, ROP. If treated between 2 and 3 years ago, Graded', '<2y modified, <3y graded'],
  ['If diagnosed within 1 year, Graded. If diagnosed between 1 and 10 years ago, Standard', '<1y graded, <10y standard'],
  ['Decline <1 yr, Graded 1-2 yrs', '<1y decline, <2y graded'],
  ['PREF IF OVER 2 YEARS/MODIFIED IF WITHIN 2 YEARS', '<2y modified, preferred'],
  ['Decline <2 yrs, graded after', '<2y decline, graded'],
  ['If implanted within 1 year, Decline. If implanted between 1 and 2 years ago, Standard', '<1y decline, <2y standard'],
  ['If performed within 2 years, Graded. If performed between 2 and 10 years ago, Standard', '<2y graded, <10y standard'],
  // Age at diagnosis (client age minus years since)
  ['Y IF ONSET > AGE 45', 'dx<=45 decline, best'],
  ['Y IF ONSET > 45 YEARS OF AGE', 'dx<=45 decline, best'],
  ['Y IF > 45 YEARS OLD AT DIAGNOSIS', 'dx<=45 decline, best'],
  ['Y IF > 60 YEARS OF AGE WHEN DIAGNOSED', 'dx<=60 decline, best'],
  ['Y IF > 2 YEARS AND > AGE 45 AT OCCURRENCE', 'dx<=45 decline, <2y decline, best'],
  ['Y IF > 2 YEARS AGO AND AGE 45 OR GREATER AT ONSET', 'dx<45 decline, <2y decline, best'],
  ['If diagnosed prior to age 20, Decline', 'dx<20 decline'],
  ['If diagnosed within 1 year, Decline. If diagnosed prior to age 20, Decline', '<1y decline, dx<20 decline'],
  ['If diagnosed prior to age 44, Graded', 'dx<44 graded'],
  ['If diagnosed before age 40 AND requiring insulin, Decline', '?dx<40 decline'],
  ['Y IF > AGE 45 WHEN DIAGNOSED, NON SMOKER, NO COMPLICATIONS AND GOOD BUILD', 'dx<=45 decline, ?decline, ?best'],
  // Current age is NOT age at diagnosis, and "years of age" is not a time window
  ['If younger than 17, Decline', '?decline'],
  ['Y IF > 9 YEARS OF AGE, MILD AND SELF- SUFFICIENT', '?decline, ?best'],
  ['Y IF INSULIN > 30 YEARS OF AGE', '?decline, ?best'],
  // "or": the time window alone is enough
  ['Within 10 years or current medication, Decline.', '<10y decline, ?decline'],
  ['Decline if within last 5 yrs or w/ tobacco/diabetes/stroke at any time', '<5y decline, ?decline'],
  // ...unless the window is about something else (a hospital stay, not the diagnosis)
  ['If hospitalization/inpatient within last 5 years or suicidal thoughts past 6 mo, Decline', '?<5y decline'],
  // Conditions the app can't check never become a firm decline
  ['If currently, Decline', '?decline'],
  ['Approved if minimal or slight impairment. Otherwise, decline', '?decline, ?best'],
  ['If "Is the insured taking more than 2 anxiety/depression medications?" answered "Yes" , Decline', '?decline'],
  ['Cancerous and treated within 10 years, Decline', '?<10y decline'],
  ['Mild = approved, severe = declined', '?best, ?decline']
];

CASES.forEach(function (c) {
  test('reads: ' + c[0], function () {
    assert.strictEqual(short(c[0]), c[1]);
  });
});

test('carrier tier names read per column', function () {
  var aig = { column: 'WHOLE LIFE :: AIG (SIWL)', tiers: [
    { name: 'SimpliNow Legacy Max', outcome: 'level', columns: 'AIG (SIWL)' },
    { name: 'SimpliNow Legacy', outcome: 'graded', columns: 'AIG (SIWL)' }] };
  assert.strictEqual(short('If within 6 months, Decline. If between 6 months and 2 years ago, SimpliNow Legacy', aig), '<0.5y decline, <2y graded');
  assert.strictEqual(short('SimpliNow Legacy Max', aig), 'level');
  var foresters = { column: 'WHOLE LIFE :: Foresters (Plan Right)', tiers: [{ name: 'Basic', outcome: 'graded', columns: 'Foresters' }] };
  assert.strictEqual(short('If within 1 year, Basic. If between 1 and 2 years ago, Standard', foresters), '<1y graded, <2y standard');
  assert.strictEqual(short('If implanted within 1 year, Basic. If implanted between 1 and 2 years ago, Standard', foresters), '<1y graded, <2y standard');
  assert.strictEqual(short('If diagnosis or treatment within 3 years – Basic Death Benefit', foresters), '<3y graded');
  // Tier names don't leak into other carriers' columns
  assert.strictEqual(short('Basic', { column: 'WHOLE LIFE :: Other', tiers: foresters.tiers }), null);
});

test('saved value decisions win', function () {
  assert.strictEqual(short('Accepted — Guaranteed Issue (no health questions)', { values: { 'Accepted — Guaranteed Issue (no health questions)': 'gi' } }), 'gi');
});

// --- Engine: age at diagnosis against a real client ---------------------------
test('age at diagnosis = age minus years since', function () {
  UW.reset();
  UW.addProduct({ id: 'x', carrier: 'X', product: 'X', type: 'term', underwriting: 'simplified', bestOutcome: 'standard',
    issueAges: { min: 18, max: 80 }, conditions: { diabetes_oral: { rules: rules('Y IF > AGE 45 WHEN DIAGNOSED') } } });
  var run = function (age, yrs) { return UW.evaluate({ age: age, conditions: [{ id: 'diabetes_oral', yearsSince: yrs }] })[0]; };
  assert.strictEqual(run(60, 10).best, 'standard');   // diagnosed at 50
  assert.strictEqual(run(60, 15).status, 'ineligible'); // diagnosed at 45
  assert.strictEqual(run(60, 20).status, 'ineligible'); // diagnosed at 40
  var unknown = UW.evaluate({ age: 60, conditions: [{ id: 'diabetes_oral' }] })[0];
  assert.notStrictEqual(unknown.status, 'ineligible'); // can't tell: range, never a hard decline
  assert.strictEqual(unknown.worst, 'decline');
});

test('preferGrid: grid answer wins, guide shown underneath', function () {
  UW.reset();
  UW.addProduct({ id: 'p', carrier: 'P', product: 'P', type: 'term', underwriting: 'simplified', bestOutcome: 'standard', preferGrid: true,
    conditions: { afib: { rules: [{ outcome: 'standard' }, { outcome: 'decline', conditional: true }], source: 'p. 1' } } });
  UW.registerGrid({ columns: { 'T :: P': { product: 'p' } }, conditions: { afib: { 'T :: P': { raw: 'Decline', rules: [{ outcome: 'decline' }] } } }, medications: {} });
  var r = UW.evaluate({ conditions: [{ id: 'afib' }] })[0];
  assert.strictEqual(r.status, 'ineligible');
  assert.match(r.factors[0].guideSays, /Standard/);
  assert.strictEqual(r.factors[0].backup, false);
});
