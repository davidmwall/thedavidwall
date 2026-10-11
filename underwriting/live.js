/* Live search: type a client in plain words, every product re-colors as you type. */
(function () {
  'use strict';
  var $ = function (s) { return document.querySelector(s); };
  var esc = window.UWApp.esc;
  var box = $('#qt'), chipsEl = $('#qt-chips'), board = $('#board'), detail = $('#tile-detail');
  var onlyApprove = $('#only-approve'), counts = $('#live-counts');
  var types = {};          // product-type filter; empty = all
  var openId = null, last = [];
  var LS = 'uw-live-text';

  // Outcome -> color group
  function group(o) {
    if (!o) return 'std';
    if (o === 'decline') return 'bad';
    if (o === 'gi' || o === 'refer') return 'gi';
    if (o === 'preferred_plus' || o === 'preferred') return 'pref';
    if (o === 'standard_plus' || o === 'standard' || o === 'level') return 'std';
    return 'mid';   // table, graded, modified
  }
  function short(o) {
    return { preferred_plus: 'Preferred+', preferred: 'Preferred', standard_plus: 'Standard+', standard: 'Standard', level: 'Level',
      table: 'Table', graded: 'Graded', modified: 'Modified/ROP', gi: 'GI only', refer: 'Refer', decline: 'Decline' }[o] || UW.label(o);
  }
  // Filter groups: product types that are shopped together.
  var GROUPS = [
    { key: 'wl', label: 'Final expense / Whole life', types: ['final_expense', 'whole_life'] },
    { key: 'term', label: 'Term', types: ['term', 'mortgage_protection'] },
    { key: 'ul', label: 'UL / IUL', types: ['universal_life', 'iul'] }
  ];
  var TYPE_SHORT = { final_expense: 'Final expense', whole_life: 'Whole life', term: 'Term', mortgage_protection: 'Term', iul: 'IUL', universal_life: 'UL' };

  function buildTypeToggles() {
    var present = {};
    UW.state.products.forEach(function (p) { present[p.type] = true; });
    $('#live-types').innerHTML = GROUPS.filter(function (g) { return g.types.some(function (t) { return present[t]; }); }).map(function (g) {
      return '<label class="toggle"><input type="checkbox" value="' + g.key + '"><span>' + g.label + '</span></label>';
    }).join('');
    $('#live-types').addEventListener('change', function (e) { types[e.target.value] = e.target.checked; render(); });
  }

  // The factor that limits this product the most (shown on the tile).
  function why(r) {
    var rated = r.factors.filter(function (f) { return f.worst || f.best; });
    if (rated.length) {
      rated.sort(function (a, b) { return UW.rank(b.worst || b.best) - UW.rank(a.worst || a.best); });
      var f = rated[0];
      var o = !f.best ? 'OK → ' + short(f.worst) : f.best === f.worst ? short(f.best) : short(f.best) + ' → ' + short(f.worst);
      return f.label.replace(/\s*\((?!\d).*?\)\s*$/, '') + ': ' + o;
    }
    var v = r.factors.filter(function (f) { return f.verify; })[0];
    if (v) return v.label.replace(/\s*\(.*?\)/g, '') + ': not in guide';
    return r.factors.length ? 'Nothing entered limits this product' : '';
  }

  // What the guide (and grid) leave unanswered for this client.
  function unanswered(r) {
    return r.factors.filter(function (f) { return f.verify; }).map(function (f) {
      return f.label.replace(/^Rx: /, '').replace(/\s*\(.*?\)/g, '');
    });
  }
  function unansweredShort(r) {
    var u = unanswered(r);
    return u.length === 1 ? u[0] + ' unclear' : u.length + ' unclear';
  }

  function tile(r) {
    var p = r.product;
    var best = r.status === 'ineligible' ? 'decline' : r.best, worst = r.status === 'ineligible' ? 'decline' : r.worst;
    var gb = group(best), gw = group(worst);
    var label = best === worst ? short(best) : short(best) + ' → ' + short(worst);
    var flags = (p.gridOnly && !p.gridOfficial ? '<span class="tflag">grid only</span>' : '') +
      (r.verifyCount && worst !== 'decline' ? '<span class="tflag" title="' + esc(unanswered(r).join(', ')) + '">? ' + esc(unansweredShort(r)) + '</span>' : '');
    return '<button type="button" class="tile g-' + gb + (gb !== gw ? ' split w-' + gw : '') + (openId === p.id ? ' open' : '') + '" data-id="' + esc(p.id) + '">' +
      '<span class="t-class">' + esc(label) + '</span>' +
      '<span class="t-carrier">' + esc(p.carrier) + '</span>' +
      '<span class="t-product">' + esc(p.product) + '</span>' +
      '<span class="t-why">' + esc(why(r)) + '</span>' +
      '<span class="t-foot"><span class="t-type">' + esc(TYPE_SHORT[p.type] || p.type) + '</span>' + flags + '</span>' +
      '</button>';
  }

  function render() {
    var parsed = UWParse.parse(box.value, UW);
    renderChips(parsed);
    var client = parsed.client;
    var sel = [];
    GROUPS.forEach(function (g) { if (types[g.key]) sel = sel.concat(g.types); });
    client.productTypes = sel;
    var results = UW.evaluate(client);
    last = results;
    var tally = { pref: 0, std: 0, mid: 0, gi: 0, bad: 0 };
    results.forEach(function (r) { tally[group(r.status === 'ineligible' ? 'decline' : r.best)]++; });
    var shown = onlyApprove.checked ? results.filter(function (r) { return r.status !== 'ineligible'; }) : results;
    board.innerHTML = shown.length ? shown.map(tile).join('') : '<p class="muted">No product approves this client.</p>';
    counts.textContent = results.length + ' products: ' + (tally.pref + tally.std) + ' day-1 · ' + tally.mid + ' graded/rated · ' + tally.gi + ' GI/refer · ' + tally.bad + ' declined';
    renderDetail();
    try { localStorage.setItem(LS, box.value); } catch (e) { /* storage unavailable */ }
  }

  function renderChips(parsed) {
    var have = (parsed.client.conditions || []).map(function (c) { return c.id; });
    var html = parsed.chips.map(function (c) {
      return '<span class="qchip k-' + c.kind + '">' + esc(c.label) + (c.detail ? ' <em>' + esc(c.detail) + '</em>' : '') + reasonHint(c, have) + '</span>';
    }).join('');
    html += parsed.unknown.map(function (u) {
      return '<span class="qchip unknown" title="Not recognized">“' + esc(u.text) + '”?' +
        (u.suggestions.length ? ' <span class="sugg">did you mean ' + u.suggestions.map(function (s) {
          return '<button type="button" class="link-btn" data-replace="' + esc(u.text) + '" data-with="' + esc(s.name.replace(/\s*\(.*?\)/g, '')) + '">' + esc(s.name) + '</button>';
        }).join(', ') + '</span>' : ' <span class="sugg">not found. Try another word, or use the Find tab</span>') + '</span>';
    }).join('');
    chipsEl.innerHTML = html;
  }

  // A drug without the condition it treats leaves most guides silent. Offer the
  // likely reasons as one-click adds.
  function reasonHint(c, have) {
    var m = c.kind === 'medication' && c.item && UW.state.medications[c.item.id];
    var why = m && (m.commonlyFor || []).filter(function (id) { return UW.state.conditions[id]; });
    if (!why || !why.length || why.some(function (id) { return have.indexOf(id) !== -1; })) return '';
    return ' <span class="sugg">for ' + why.slice(0, 3).map(function (id) {
      var n = UW.state.conditions[id].name.replace(/\s*\(.*?\)/g, '');
      return '<button type="button" class="link-btn" data-append="' + esc(n) + '">' + esc(n) + '</button>';
    }).join(' / ') + '?</span>';
  }

  function renderDetail() {
    var r = openId && last.filter(function (x) { return x.product.id === openId; })[0];
    if (!r) { detail.hidden = true; detail.innerHTML = ''; return; }
    detail.hidden = false;
    detail.innerHTML = '<div class="td-head"><strong>Why: ' + esc(r.product.carrier) + '</strong><button type="button" class="link-btn" id="td-close">Close</button></div>' +
      window.UWApp.card(r, true);
  }

  var timer;
  box.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(render, 120); });
  onlyApprove.addEventListener('change', render);
  $('#qt-clear').addEventListener('click', function () { box.value = ''; openId = null; render(); box.focus(); });
  board.addEventListener('click', function (e) {
    var t = e.target.closest('.tile'); if (!t) return;
    openId = openId === t.dataset.id ? null : t.dataset.id;
    render();
    if (openId) detail.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
  detail.addEventListener('click', function (e) { if (e.target.id === 'td-close') { openId = null; render(); } });
  chipsEl.addEventListener('click', function (e) {
    var a = e.target.closest('[data-append]');
    if (a) { box.value = box.value.replace(/[\s,]*$/, '') + ', ' + a.dataset.append.toLowerCase(); render(); box.focus(); return; }
    var b = e.target.closest('[data-replace]'); if (!b) return;
    box.value = box.value.replace(b.dataset.replace, b.dataset.with);
    render(); box.focus();
  });

  buildTypeToggles();
  try { box.value = localStorage.getItem(LS) || ''; } catch (e) { /* storage unavailable */ }
  render();
}());
