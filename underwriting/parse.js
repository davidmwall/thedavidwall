/*
 * Quick-type parser: turns free text like
 *   "67 yo male, 5'10 230, smoker, TX, $25k, heart attack 2 yrs ago, afib on eliquis, diabetes dx at 45"
 * into a client profile for UW.evaluate(). Works in the browser (window.UWParse) and in Node.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.UWParse = factory();
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var STATES = { AL: 'alabama', AK: 'alaska', AZ: 'arizona', AR: 'arkansas', CA: 'california', CO: 'colorado', CT: 'connecticut',
    DE: 'delaware', DC: 'district of columbia', FL: 'florida', GA: 'georgia', HI: 'hawaii', ID: 'idaho', IL: 'illinois', IN: 'indiana',
    IA: 'iowa', KS: 'kansas', KY: 'kentucky', LA: 'louisiana', ME: 'maine', MD: 'maryland', MA: 'massachusetts', MI: 'michigan',
    MN: 'minnesota', MS: 'mississippi', MO: 'missouri', MT: 'montana', NE: 'nebraska', NV: 'nevada', NH: 'new hampshire', NJ: 'new jersey',
    NM: 'new mexico', NY: 'new york', NC: 'north carolina', ND: 'north dakota', OH: 'ohio', OK: 'oklahoma', OR: 'oregon', PA: 'pennsylvania',
    RI: 'rhode island', SC: 'south carolina', SD: 'south dakota', TN: 'tennessee', TX: 'texas', UT: 'utah', VT: 'vermont', VA: 'virginia',
    WA: 'washington', WV: 'west virginia', WI: 'wisconsin', WY: 'wyoming' };
  // Words that carry no meaning for matching a condition or medication.
  var FILLER = /\b(ago|diagnosed|dx|dx'd|had|has|have|history|hx|h\/o|of|with|w\/|on|takes|taking|take|for|the|a|an|since|in|at|age|aged|years?|yrs?|months?|mos?|treated|treatment|last|was|is|been|got|about|around|approx|approximately|currently|current|now|still|controlled|well|mild|recent|recently|uses?|using|prescribed|rx|meds?|medication|cured|resolved|compliant)\b/gi;

  function norm(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); }

  function score(q, entry) {
    var names = [entry.name].concat(entry.aliases || []).map(norm), best = 0;
    names.forEach(function (n) {
      var s = 0;
      if (n === q) s = 100;
      else if (n.replace(/\s*\(.*$/, '') === q) s = 95;
      else if (n.indexOf(q) === 0) s = 80;
      else if ((' ' + n).indexOf(' ' + q) !== -1) s = 60;
      else if (q.length >= 5 && n.indexOf(q) !== -1) s = 40;
      if (s > best) best = s;
    });
    return best;
  }

  function bestMatches(UW, q, limit) {
    var out = [];
    [['condition', UW.state.conditions], ['medication', UW.state.medications]].forEach(function (pair) {
      Object.keys(pair[1]).forEach(function (id) {
        var s = score(q, pair[1][id]);
        // Prefer conditions on ties: carriers mostly rule on the condition, not the drug.
        if (s > 0) out.push({ kind: pair[0], id: id, name: pair[1][id].name, score: s + (pair[0] === 'condition' ? 0.5 : 0) });
      });
    });
    return out.sort(function (a, b) { return b.score - a.score || a.name.length - b.name.length; }).slice(0, limit || 5);
  }

  // Pull a time frame out of a phrase. Returns { years, dxAge, text } or null.
  function takeTime(s, nowYear) {
    var m;
    if ((m = s.match(/\b(?:dx|diagnosed|onset)?\s*(?:at|@)\s*(?:age\s*)?(\d{1,2})\b/i)) && !/\b(yrs?|years?|months?|mos?)\b/i.test(s.slice(m.index + m[0].length, m.index + m[0].length + 8)))
      return { dxAge: Number(m[1]), text: m[0] };
    if ((m = s.match(/\b(\d+(?:\.\d+)?)\s*(?:years?|yrs?|y)\b(?:\s*ago)?/i))) return { years: Number(m[1]), text: m[0] };
    if ((m = s.match(/\b(\d+(?:\.\d+)?)\s*(?:months?|mos?|mo)\b(?:\s*ago)?/i))) return { years: Math.round(Number(m[1]) / 12 * 100) / 100, text: m[0] };
    if ((m = s.match(/\b(\d+)\s*(?:weeks?|wks?)\b(?:\s*ago)?/i))) return { years: Math.round(Number(m[1]) / 52 * 100) / 100, text: m[0] };
    if ((m = s.match(/\b(?:in|since|back in)?\s*((?:19|20)\d\d)\b/i)) && Number(m[1]) <= nowYear) return { years: nowYear - Number(m[1]), text: m[0] };
    if ((m = s.match(/\blast year\b/i))) return { years: 1, text: m[0] };
    if ((m = s.match(/\b(this year|recently|recent|currently|current|now)\b/i))) return { years: 0, text: m[0] };
    return null;
  }

  function parse(text, UW, opts) {
    opts = opts || {};
    var nowYear = opts.nowYear || new Date().getFullYear();
    var res = { client: { age: '', sex: '', state: '', faceAmount: '', heightIn: '', weightLb: '', tobacco: '', conditions: [], medications: [] },
                chips: [], unknown: [] };
    var c = res.client, pendingDx = [];
    var chip = function (kind, label, extra) { res.chips.push(Object.assign({ kind: kind, label: label }, extra || {})); };

    // Split into phrases; "afib on eliquis" -> "afib" + "eliquis" (drug context), keeping the time frame with its phrase.
    var parts = String(text || '').split(/[,;\n|]+|\s+\+\s+|\s+and\s+|\s+&\s+/i);
    var segs = [];
    parts.forEach(function (p) {
      p.split(/\s+(?:on|taking|takes|w\/|uses|using)\s+(?=[a-z])/i).forEach(function (x) { if (x.trim()) segs.push(x.trim()); });
    });

    segs.forEach(function (raw) {
      var s = ' ' + raw + ' ', m;
      var cut = function (t) { s = s.replace(t, ' '); };
      // Shorthand that the filler words would break apart ("a fib" -> "fib").
      s = s.replace(/\ba[\s.-]?fib\b/gi, ' afib ');

      // Tobacco (negations first)
      if ((m = s.match(/\b(non[- ]?smok\w*|non[- ]?tobacco|no tobacco|doesn'?t smoke|never smok\w*|quit smoking|no nicotine)\b/i))) { c.tobacco = 'no'; chip('tobacco', 'Non-tobacco'); cut(m[0]); }
      else if ((m = s.match(/\b(smok\w*|tobacco|vap\w*|nicotine|cigar\w*|chew\w*|dips)\b/i))) { c.tobacco = 'yes'; chip('tobacco', 'Tobacco'); cut(/\b(smok\w*|tobacco|vap\w*|nicotine|cigar\w*|chew\w*|dips|pipes?|cigs?)\b/gi); }
      // Sex
      if ((m = s.match(/\b(male|man|female|woman)\b/i))) { c.sex = /fe|wo/i.test(m[1]) ? 'female' : 'male'; chip('sex', c.sex === 'male' ? 'Male' : 'Female'); cut(m[0]); }
      else if ((m = raw.match(/^\s*(m|f)\s*$/i))) { c.sex = /f/i.test(m[1]) ? 'female' : 'male'; chip('sex', c.sex === 'male' ? 'Male' : 'Female'); cut(raw); }
      // Height and weight: 5'10 230, 5' 10" 230 lbs, 5ft10 230
      if ((m = s.match(/\b([4-7])\s*(?:'|’|ft|feet)\s*(\d{1,2})?\s*(?:"|”|in|inches)?(?:\s*,?\s*(\d{2,3})\s*(?:lbs?|pounds|#)?)?/i))) {
        c.heightIn = Number(m[1]) * 12 + Number(m[2] || 0);
        if (m[3]) c.weightLb = Number(m[3]);
        chip('build', m[1] + "'" + (m[2] || 0) + '"' + (m[3] ? ' · ' + m[3] + ' lb' : ''));
        cut(m[0]);
      }
      if ((m = s.match(/\b(\d{2,3})\s*(?:lbs?|pounds|#)/i))) { c.weightLb = Number(m[1]); chip('build', m[1] + ' lb'); cut(m[0]); }
      // Face amount: $25k, 250k, $1.5M, 100,000 face
      if ((m = s.match(/\$\s*([\d,.]+)\s*(k|m|mil(?:lion)?)?\b/i)) || (m = s.match(/\b([\d,.]+)\s*(k|m|mil(?:lion)?)?\s*(?:face|coverage|death benefit|db)\b/i)) || (m = s.match(/\b(\d+(?:\.\d+)?)\s*(k)\b/i))) {
        var n = Number(String(m[1]).replace(/,/g, '')), u = (m[2] || '').toLowerCase();
        if (u === 'k') n *= 1000; else if (u && u[0] === 'm') n *= 1000000;
        if (n >= 1000) { c.faceAmount = n; chip('face', '$' + n.toLocaleString('en-US')); cut(m[0]); }
      }
      // Age: 67, age 67, 67 yo, 67 years old
      if ((m = s.match(/\b(\d{1,3})\s*(?:yo|y\/o|yrs? old|years? old|year old)\b/i)) || (m = s.match(/\bage\s*(\d{1,3})\b/i))) {
        c.age = Number(m[1]); chip('age', 'Age ' + c.age); cut(m[0]);
      }
      // State: TX, Texas
      if ((m = s.match(/\b([A-Z]{2})\b/)) && STATES[m[1]]) { c.state = m[1]; chip('state', m[1]); cut(m[0]); }
      else Object.keys(STATES).forEach(function (k) {
        var re = new RegExp('\\b' + STATES[k] + '\\b', 'i');
        if (!c.state && re.test(s)) { c.state = k; chip('state', k); cut(re); }
      });

      // A bare number left over (e.g. "female 72") is the age.
      if (c.age === '' && (m = s.match(/^\s*(\d{1,3})\s*$/)) && Number(m[1]) <= 110) { c.age = Number(m[1]); chip('age', 'Age ' + c.age); cut(m[0]); }

      // Info the form doesn't use (shown, not matched): A1C, blood pressure readings.
      if ((m = s.match(/\ba1c\s*(?:of|=|:)?\s*(\d+(?:\.\d+)?)/i))) { chip('info', 'A1C ' + m[1] + ' (not on the form; see notes)'); cut(m[0]); }
      // "x2", "twice", "multiple" -> the multiple-episode version of a condition when one exists.
      var multi = false;
      if ((m = s.match(/\bx\s*[2-9]\b|\b(?:twice|multiple|several|recurrent|repeat(?:ed)?)\b|^\s*[2-9]\s+(?=[a-z])/i))) { multi = true; cut(m[0]); }

      // What's left is a condition or medication, maybe with a time frame.
      var t = takeTime(s, nowYear);
      if (t) cut(t.text);
      var q = norm(s.replace(FILLER, ' '));
      if (!q || q.length < 2) return;
      var hits = bestMatches(UW, q, 4);
      var top = hits[0];
      if (!top || top.score < 60) {
        res.unknown.push({ text: raw, query: q, suggestions: hits.filter(function (h) { return h.score >= 40 || hits.length <= 3; }).slice(0, 3) });
        return;
      }
      // Drugs that imply the condition carriers actually rule on.
      var IMPLIES = { insulin: 'diabetes_insulin', rx_insulin: 'diabetes_insulin' };
      if (top.kind === 'medication' && IMPLIES[top.id] && UW.state.conditions[IMPLIES[top.id]]) {
        var ci = { id: IMPLIES[top.id] };
        if (t && t.years != null) ci.yearsSince = t.years;
        if (t && t.dxAge != null) pendingDx.push({ item: ci, dxAge: t.dxAge });
        c.conditions.push(ci); chip('condition', UW.state.conditions[ci.id].name, { item: ci, text: raw, time: t });
      }
      var MULTI = { tia: 'tia_multiple', heart_attack: 'heart_attacks_multiple', dui: 'dui_multiple' };
      if (multi && MULTI[top.id] && UW.state.conditions[MULTI[top.id]]) top = { kind: 'condition', id: MULTI[top.id], name: UW.state.conditions[MULTI[top.id]].name };
      var item = { id: top.id };
      if (t && t.years != null) item.yearsSince = t.years;
      if (t && t.dxAge != null) pendingDx.push({ item: item, dxAge: t.dxAge });
      (top.kind === 'condition' ? c.conditions : c.medications).push(item);
      chip(top.kind, top.name, { item: item, text: raw, time: t });
    });

    // "diagnosed at 45" -> years since = age - 45 (once the age is known)
    pendingDx.forEach(function (p) {
      if (c.age !== '' && c.age >= p.dxAge) p.item.yearsSince = c.age - p.dxAge;
    });
    res.chips.forEach(function (ch) {
      if (ch.item) {
        var y = ch.item.yearsSince;
        ch.detail = y == null ? (ch.time && ch.time.dxAge != null ? 'dx at ' + ch.time.dxAge + ' (add age)' : '') : y === 0 ? 'current' : (y < 1 ? Math.round(y * 12) + ' mo ago' : (Math.round(y * 10) / 10) + ' yrs ago');
      }
    });
    return res;
  }

  return { parse: parse, bestMatches: bestMatches };
}));
