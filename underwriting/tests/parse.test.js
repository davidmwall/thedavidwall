// Run: node --test underwriting/tests/
'use strict';
var test = require('node:test');
var assert = require('node:assert');
var fs = require('fs');
var path = require('path');
var UW = require('../engine.js');
require('../data/conditions.js');
fs.readdirSync(path.join(__dirname, '..', 'data')).filter(function (f) { return /^medications-extra/.test(f); })
  .forEach(function (f) { require('../data/' + f); });
var P = require('../parse.js');
var parse = function (t) { return P.parse(t, UW, { nowYear: 2026 }); };
var ids = function (list) { return list.map(function (x) { return x.id + (x.yearsSince != null ? '@' + x.yearsSince : ''); }); };

test('profile fields from free text', function () {
  var c = parse("67 yo male, 5'10 230, smoker, TX, $25k").client;
  assert.deepStrictEqual([c.age, c.sex, c.heightIn, c.weightLb, c.tobacco, c.state, c.faceAmount], [67, 'male', 70, 230, 'yes', 'TX', 25000]);
  var d = parse('female 72, nonsmoker, 250k face, Texas').client;
  assert.deepStrictEqual([d.age, d.sex, d.tobacco, d.faceAmount, d.state], [72, 'female', 'no', 250000, 'TX']);
});

test('conditions and medications with time frames', function () {
  var c = parse('heart attack 2 yrs ago, stroke 18 months ago, breast cancer in 2019, afib on eliquis').client;
  assert.deepStrictEqual(ids(c.conditions), ['heart_attack@2', 'stroke@1.5', 'cancer_breast@7', 'afib']);
  assert.deepStrictEqual(ids(c.medications), ['eliquis']);
});

test('diagnosed at an age becomes years since, once the age is known', function () {
  assert.deepStrictEqual(ids(parse('age 60, diabetes dx at 45').client.conditions), ['diabetes_oral@15']);
});

test('insulin adds the insulin-diabetes condition; x2 picks the multiple-episode condition', function () {
  assert.deepStrictEqual(ids(parse('insulin').client.conditions), ['diabetes_insulin']);
  assert.deepStrictEqual(ids(parse('tia x2').client.conditions), ['tia_multiple']);
});

test('unrecognized phrases are reported, not guessed', function () {
  var r = parse('blah thing, copd');
  assert.deepStrictEqual(ids(r.client.conditions), ['copd']);
  assert.strictEqual(r.unknown.length, 1);
  assert.strictEqual(r.unknown[0].text, 'blah thing');
});
