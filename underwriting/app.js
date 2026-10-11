/* UI for the Underwriting Finder. All matching logic lives in engine.js. */
(function () {
  'use strict';

  var STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];
  var STALE_DAYS = 183;

  var $ = function (sel, el) { return (el || document).querySelector(sel); };
  var $$ = function (sel, el) { return Array.prototype.slice.call((el || document).querySelectorAll(sel)); };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function tone(outcome) {
    var r = UW.rank(outcome);
    if (outcome === 'decline') return 'bad';
    if (outcome === 'refer' || outcome === 'gi') return 'warn';
    if (r >= 4) return 'mid';
    return 'good';
  }
  function pill(outcome) {
    return '<span class="pill ' + tone(outcome) + '">' + esc(UW.label(outcome)) + '</span>';
  }

  // ---------------------------------------------------------------------------
  // Form state
  // ---------------------------------------------------------------------------
  var form = $('#client-form');
  var picked = { condition: [], medication: [] }; // [{id, yearsSince}]

  function readClient() {
    var fd = new FormData(form);
    var ft = fd.get('heightFt'), inch = fd.get('heightIn');
    var heightIn = '';
    if (ft !== '' && ft != null) heightIn = Number(ft) * 12 + Number(inch || 0);
    return {
      age: fd.get('age'),
      state: fd.get('state'),
      faceAmount: fd.get('faceAmount'),
      heightIn: heightIn,
      weightLb: fd.get('weightLb'),
      tobacco: fd.get('tobacco'),
      sex: fd.get('sex') || '',
      productTypes: $$('#product-toggles input:checked').map(function (i) { return i.value; }),
      uwTypes: $$('#uw-toggles input:checked').map(function (i) { return i.value; }),
      conditions: picked.condition.slice(),
      medications: picked.medication.slice()
    };
  }

  function buildToggles(container, dict) {
    container.innerHTML = Object.keys(dict).map(function (k) {
      return '<label class="toggle"><input type="checkbox" value="' + k + '"><span>' + esc(dict[k]) + '</span></label>';
    }).join('');
  }

  // ---------------------------------------------------------------------------
  // Typeahead
  // ---------------------------------------------------------------------------
  function search(kind, q) {
    if (kind === 'condition') return UW.searchConditions(q, 8).map(function (c) { return { kind: 'condition', item: c }; });
    if (kind === 'medication') return UW.searchMedications(q, 8).map(function (m) { return { kind: 'medication', item: m }; });
    return search('condition', q).slice(0, 6).concat(search('medication', q).slice(0, 6));
  }

  function setupTypeahead(box, onPick) {
    var input = $('input', box), list = $('.suggestions', box), active = -1, items = [];
    function close() { list.hidden = true; active = -1; }
    function render() {
      items = search(box.dataset.kind, input.value);
      if (!items.length || !input.value.trim()) {
        list.innerHTML = input.value.trim() ? '<li class="empty">No match. Try another name or abbreviation.</li>' : '';
        list.hidden = !input.value.trim();
        return;
      }
      list.innerHTML = items.map(function (r, i) {
        var sub = r.kind === 'medication' ? 'Medication' : (r.item.category || 'Condition');
        return '<li data-i="' + i + '"' + (i === active ? ' class="active"' : '') + '><span>' + esc(r.item.name) + '</span><small>' + esc(sub) + '</small></li>';
      }).join('');
      list.hidden = false;
    }
    function pick(i) {
      if (!items[i]) return;
      onPick(items[i]);
      input.value = ''; close();
    }
    input.addEventListener('input', function () { active = -1; render(); });
    input.addEventListener('focus', render);
    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') { active = Math.min(active + 1, items.length - 1); render(); e.preventDefault(); }
      else if (e.key === 'ArrowUp') { active = Math.max(active - 1, 0); render(); e.preventDefault(); }
      else if (e.key === 'Enter') { pick(active >= 0 ? active : 0); e.preventDefault(); }
      else if (e.key === 'Escape') close();
    });
    list.addEventListener('mousedown', function (e) {
      var li = e.target.closest('li[data-i]');
      if (li) { pick(Number(li.dataset.i)); e.preventDefault(); }
    });
    input.addEventListener('blur', function () { setTimeout(close, 100); });
  }

  function renderChips(kind) {
    var el = $('#' + kind + '-chips');
    var dict = kind === 'condition' ? UW.state.conditions : UW.state.medications;
    el.innerHTML = picked[kind].map(function (p, i) {
      var name = dict[p.id] ? dict[p.id].name : p.id;
      return '<span class="chip">' + esc(name) +
        '<input class="yrs" type="number" min="0" step="0.5" placeholder="yrs ago" inputmode="decimal" data-kind="' + kind + '" data-i="' + i + '" value="' + (p.yearsSince === '' || p.yearsSince == null ? '' : p.yearsSince) + '" title="Years since diagnosis / treatment / last use (optional)">' +
        '<button type="button" class="x" data-kind="' + kind + '" data-i="' + i + '" aria-label="Remove">×</button></span>';
    }).join('');
  }

  document.addEventListener('input', function (e) {
    if (e.target.classList.contains('yrs')) {
      var k = e.target.dataset.kind, i = Number(e.target.dataset.i);
      picked[k][i].yearsSince = e.target.value === '' ? '' : Number(e.target.value);
      run();
    }
  });
  document.addEventListener('click', function (e) {
    var x = e.target.closest('.chip .x');
    if (x) {
      picked[x.dataset.kind].splice(Number(x.dataset.i), 1);
      renderChips(x.dataset.kind); run();
    }
  });

  // ---------------------------------------------------------------------------
  // Results
  // ---------------------------------------------------------------------------
  function outcomeRange(r) {
    if (r.best === r.worst) return pill(r.best);
    return pill(r.best) + '<span class="arrow">to</span>' + pill(r.worst);
  }

  function factorRow(f) {
    var icon, cls;
    if (f.best === 'decline') { icon = '✕'; cls = 'bad'; }
    else if (f.verify) { icon = '?'; cls = 'warn'; }
    else if (f.timing) { icon = '◐'; cls = 'warn'; }
    else if (f.info) { icon = 'i'; cls = 'info'; }
    else if (f.best) { icon = '•'; cls = tone(f.best); }
    else { icon = '✓'; cls = 'good'; }
    var gridLine = '';
    if (f.grid) {
      gridLine = '<div class="gridnote ' + (f.gridConflict ? 'conflict' : 'agree') + '">Grid: "' + esc(f.grid) + '"' +
        (f.gridConflict ? ', disagrees with the guide (guide wins)' : ', agrees') + '</div>';
    }
    var result = f.best ? (f.best === f.worst ? UW.label(f.best) : UW.label(f.best) + ' → ' + UW.label(f.worst))
      : f.worst ? 'Approved → ' + UW.label(f.worst)
      : (f.verify ? 'Verify' : f.basis === 'none' ? 'Not asked' : f.info ? 'Not checked' : 'OK');
    return '<li class="factor ' + cls + '"><span class="ic">' + icon + '</span>' +
      '<div><div><strong>' + esc(f.label) + '</strong>: ' + esc(result) +
      (f.basis === 'grid' ? ' <span class="src grid">' + (f.backup ? 'grid (backup)' : 'grid') + '</span>' : f.source ? ' <span class="src">' + esc(f.source) + '</span>' : '') + '</div>' +
      (f.note ? '<div class="note">' + esc(f.note) + (f.timing && !/yrs ago\)/.test(f.label) ? '. Add "yrs ago" to narrow this down' : '') + '</div>' : '') +
      gridLine + (f.guideSays ? '<div class="gridnote agree">Guide says: ' + esc(f.guideSays) + '</div>' : '') + '</div></li>';
  }

  function linkify(text) {
    return esc(text).replace(/(https?:\/\/[^\s<]+)/g, function (u) {
      return '<a href="' + u + '" target="_blank" rel="noopener noreferrer">' + (u.length > 48 ? u.slice(0, 45) + '…' : u) + '</a>';
    }).replace(/\n/g, '<br>');
  }

  function infoBlock(info) {
    if (!info) return '';
    var keys = Object.keys(info);
    if (!keys.length) return '';
    return '<details class="pinfo"><summary>Product info (from your grid)</summary><dl>' +
      keys.map(function (k) { return '<dt>' + esc(k) + '</dt><dd>' + linkify(info[k]) + '</dd>'; }).join('') +
      '</dl></details>';
  }

  function card(r, open) {
    var p = r.product;
    var flags = [];
    if (r.verifyCount) flags.push(r.verifyCount + ' not answered by the guide');
    if (r.timingCount) flags.push(r.timingCount + ' depends on timing');
    if (r.backupCount) flags.push(r.backupCount + ' from grid');
    if (r.conflictCount) flags.push(r.conflictCount + ' grid disagrees');
    var g = p.guide || {};
    return '<details class="result ' + r.status + '"' + (open ? ' open' : '') + '>' +
      '<summary>' +
        '<div class="r-main"><div class="r-title">' + esc(p.carrier) + ' <span class="muted">· ' + esc(p.product) + '</span></div>' +
        '<div class="badges"><span class="badge">' + esc(UW.PRODUCT_TYPES[p.type] || p.type) + '</span><span class="badge">' + esc(UW.UW_TYPES[p.underwriting] || p.underwriting) + '</span>' +
        (p.gridOfficial ? '<span class="badge">from your grid (no carrier guide exists)</span>' : p.gridOnly ? '<span class="badge grid">grid only, no guide loaded</span>' : '') +
        (flags.length ? '<span class="badge warn">' + esc(flags.join(' · ')) + '</span>' : '') + '</div></div>' +
        '<div class="r-outcome">' + (r.status === 'ineligible' ? pill('decline') : outcomeRange(r)) + '</div>' +
      '</summary>' +
      '<div class="r-body">' +
        (r.factors.length ? '<ul class="factors">' + r.factors.map(factorRow).join('') + '</ul>' : '<p class="muted">Enter client details to see how this product treats them.</p>') +
        (p.notes ? '<p class="pnote">' + esc(p.notes) + '</p>' : '') +
        infoBlock(p.gridInfo) +
        '<p class="guide">Source: ' + esc(g.document || '—') + (g.revision ? ' · ' + esc(g.revision) : '') + (g.lastReviewed ? ' · reviewed ' + esc(g.lastReviewed) : '') + '</p>' +
      '</div></details>';
  }

  function section(title, cls, list, openCards, collapsed) {
    if (!list.length) return '';
    var body = list.map(function (r) { return card(r, openCards); }).join('');
    if (collapsed) {
      return '<details class="group ' + cls + '"><summary><h3>' + title + ' <span class="count">' + list.length + '</span></h3></summary>' + body + '</details>';
    }
    return '<div class="group ' + cls + '"><h3>' + title + ' <span class="count">' + list.length + '</span></h3>' + body + '</div>';
  }

  function hasInput(c) {
    return ['age', 'state', 'faceAmount', 'heightIn', 'weightLb', 'tobacco', 'sex'].some(function (k) { return c[k] !== '' && c[k] != null; }) ||
      c.conditions.length || c.medications.length;
  }

  function run() {
    var client = readClient();
    var results = UW.evaluate(client);
    var fit = results.filter(function (r) { return r.status === 'fit'; });
    var verify = results.filter(function (r) { return r.status === 'verify'; });
    var out = results.filter(function (r) { return r.status === 'ineligible'; });
    var entered = hasInput(client);
    var html = '';
    if (!results.length) {
      html = '<div class="card empty">No products match the selected product/underwriting filters.</div>';
    } else {
      html += '<div class="summary">' +
        '<span><b>' + fit.length + '</b> clean fit</span>' +
        '<span><b>' + verify.length + '</b> need a check</span>' +
        '<span><b>' + out.length + '</b> ruled out</span>' +
        (entered ? '' : '<span class="muted">Enter anything on the left to start narrowing.</span>') + '</div>';
      html += section('Ranked matches', 'eligible', results.filter(function (r) { return r.status !== 'ineligible'; }), false);
      html += section('Ruled out', 'ineligible', out, false, true);
    }
    $('#results').innerHTML = html;
  }

  // ---------------------------------------------------------------------------
  // Lookup tab
  // ---------------------------------------------------------------------------
  function runLookup(hit) {
    var rows = UW.lookup(hit.kind, hit.item.id);
    var extra = '';
    if (hit.kind === 'medication' && hit.item.commonlyFor) {
      extra = '<p class="hint">Often prescribed for: ' + hit.item.commonlyFor.map(function (id) {
        return esc(UW.state.conditions[id] ? UW.state.conditions[id].name : id);
      }).join(', ') + '</p>';
    }
    $('#lookup-results').innerHTML = '<h3>' + esc(hit.item.name) + '</h3>' + extra +
      '<div class="table-wrap"><table><thead><tr><th>Carrier / product</th><th>Result</th><th>Details</th><th>Source</th></tr></thead><tbody>' +
      rows.map(function (r) {
        var f = r.factor, p = r.product;
        var res = f.verify ? '<span class="pill warn">Not in guide</span>' : f.basis === 'none' ? '<span class="pill">Not asked</span>' :
          (f.best ? (f.best === f.worst ? pill(f.best) : pill(f.best) + ' → ' + pill(f.worst)) : (f.worst ? '<span class="pill good">Not asked</span> → ' + pill(f.worst) : '<span class="pill good">OK</span>'));
        if (f.basis === 'grid' && !f.verify) res += ' <span class="badge grid">grid</span>';
        var details = esc(f.note) + (f.grid ? '<div class="gridnote ' + (f.gridConflict ? 'conflict' : 'agree') + '">Grid: "' + esc(f.grid) + '"' + (f.gridConflict ? ', disagrees' : ', agrees') + '</div>' : '');
        return '<tr><td><strong>' + esc(p.carrier) + '</strong>' + (p.gridOfficial ? ' <span class="badge">grid (official)</span>' : p.gridOnly ? ' <span class="badge grid">grid only</span>' : '') + '<br><span class="muted">' + esc(p.product) + '</span></td><td>' + res +
          '</td><td>' + details + '</td><td class="src">' + esc(f.basis === 'grid' ? 'grid' : f.source) + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }

  // ---------------------------------------------------------------------------
  // Carriers tab
  // ---------------------------------------------------------------------------
  function renderCarriers() {
    var now = Date.now();
    $('#carrier-list').innerHTML = '<div class="table-wrap"><table><thead><tr><th>Carrier / product</th><th>Type</th><th>Ages</th><th>Face</th><th>Rules</th><th>Guide</th></tr></thead><tbody>' +
      UW.state.products.map(function (p) {
        var g = p.guide || {};
        var stale = !g.lastReviewed || (now - Date.parse(g.lastReviewed)) / 864e5 > STALE_DAYS;
        var a = UW.agentAges(p) || {}, f = p.faceAmount || {};
        var money = function (n) { return n == null ? '?' : '$' + Number(n).toLocaleString('en-US'); };
        return '<tr><td><strong>' + esc(p.carrier) + '</strong>' + (p.sample ? ' <span class="badge">sample</span>' : '') + (p.gridOfficial ? ' <span class="badge">grid (official, no carrier guide)</span>' : p.gridOnly ? ' <span class="badge grid">grid only</span>' : p.gridColumn ? ' <span class="badge">+ grid backup</span>' : '') + '<br><span class="muted">' + esc(p.product) + '</span></td>' +
          '<td>' + esc(UW.PRODUCT_TYPES[p.type]) + '<br><span class="muted">' + esc(UW.UW_TYPES[p.underwriting]) + '</span></td>' +
          '<td>' + (a.min != null ? a.min + '–' + a.max : '?') + '</td><td>' + (p.faceAmount ? money(f.min) + '–' + money(f.max) : '?') + '</td>' +
          '<td>' + Object.keys(p.conditions || {}).length + ' conditions<br>' + Object.keys(p.medications || {}).length + ' meds</td>' +
          '<td>' + esc(g.revision || '—') + '<br><span class="' + (stale ? 'stale' : 'muted') + '">reviewed ' + esc(g.lastReviewed || 'never') + (stale ? ' ⚠' : '') + '</span></td></tr>';
      }).join('') + '</tbody></table></div>';

    var conflicts = UW.gridConflicts();
    $('#conflicts-card').hidden = !conflicts.length;
    $('#conflict-list').innerHTML = '<div class="table-wrap"><table><thead><tr><th>Carrier / product</th><th>Item</th><th>Guide says</th><th>Grid says</th></tr></thead><tbody>' +
      conflicts.map(function (c) {
        var dict = c.kind === 'conditions' ? UW.state.conditions : UW.state.medications;
        var f = c.factor;
        var guide = f.best ? (f.best === f.worst ? UW.label(f.best) : UW.label(f.best) + ' → ' + UW.label(f.worst)) : (f.worst ? 'Not asked → ' + UW.label(f.worst) : 'OK');
        return '<tr><td><strong>' + esc(c.product.carrier) + '</strong><br><span class="muted">' + esc(c.product.product) + '</span></td>' +
          '<td>' + esc(dict[c.id] ? dict[c.id].name : c.id) + '</td><td>' + esc(guide) + ' <span class="src">' + esc(f.source) + '</span></td><td>' + esc(f.grid) + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }

  // ---------------------------------------------------------------------------
  // Rule check tab: every age/time rule and its plain-English reading
  // ---------------------------------------------------------------------------
  var ruleRows = null;
  function timed(rules) {
    return (rules || []).some(function (r) { return r.withinYears != null || r.dxAgeMax != null || r.dxAgeBelow != null; });
  }
  function collectRules() {
    var rows = {}, cond = UW.state.conditions, meds = UW.state.medications;
    var add = function (key, item, raw, rules, where, src) {
      var r = rows[key] = rows[key] || { item: item, raw: raw, reading: UW.explainRules(rules), where: [], source: src };
      if (r.where.indexOf(where) === -1) r.where.push(where);
    };
    UW.state.products.forEach(function (p) {
      ['conditions', 'medications'].forEach(function (kind) {
        var dict = kind === 'conditions' ? cond : meds;
        Object.keys(p[kind] || {}).forEach(function (id) {
          var rule = p[kind][id], rules = rule.rules || [{ outcome: rule.outcome }];
          if (!timed(rules)) return;
          var name = dict[id] ? dict[id].name : id;
          add('g|' + p.id + '|' + id, name, '(carrier guide, ' + (rule.source || '') + ')', rules, p.carrier + ' · ' + p.product, 'guide');
        });
      });
    });
    var g = UW.state.grid;
    if (g) ['conditions', 'medications'].forEach(function (kind) {
      var dict = kind === 'conditions' ? cond : meds;
      Object.keys(g[kind] || {}).forEach(function (id) {
        Object.keys(g[kind][id]).forEach(function (col) {
          var cell = g[kind][id][col];
          if (!timed(cell.rules)) return;
          var name = dict[id] ? dict[id].name : id;
          add('c|' + id + '|' + cell.raw, name, cell.raw, cell.rules, col.split(' :: ')[1] || col, 'grid');
        });
      });
    });
    return Object.keys(rows).map(function (k) { return rows[k]; })
      .sort(function (a, b) { return a.item.localeCompare(b.item) || a.raw.localeCompare(b.raw); });
  }
  function renderRules() {
    ruleRows = ruleRows || collectRules();
    var q = ($('#rules-filter').value || '').toLowerCase();
    var list = ruleRows.filter(function (r) {
      return !q || (r.item + ' ' + r.raw + ' ' + r.reading + ' ' + r.where.join(' ')).toLowerCase().indexOf(q) !== -1;
    });
    $('#rules-count').textContent = list.length + ' of ' + ruleRows.length + ' rules';
    $('#rules-list').innerHTML = '<div class="table-wrap"><table><thead><tr><th>Condition</th><th>Source wording</th><th>App reads it as</th><th>Where</th></tr></thead><tbody>' +
      list.slice(0, 400).map(function (r) {
        return '<tr><td><strong>' + esc(r.item) + '</strong></td><td>' + esc(r.raw) + (r.source === 'grid' ? ' <span class="badge grid">grid</span>' : '') +
          '</td><td>' + esc(r.reading) + '</td><td class="muted">' + esc(r.where.slice(0, 4).join(', ')) + (r.where.length > 4 ? ' +' + (r.where.length - 4) + ' more' : '') + '</td></tr>';
      }).join('') + '</tbody></table></div>' + (list.length > 400 ? '<p class="hint">Showing first 400; filter to narrow.</p>' : '');
  }
  $('#rules-filter').addEventListener('input', renderRules);

  // ---------------------------------------------------------------------------
  // Init
  // ---------------------------------------------------------------------------
  $('select[name=state]').innerHTML += STATES.map(function (s) { return '<option>' + s + '</option>'; }).join('');
  buildToggles($('#product-toggles'), UW.PRODUCT_TYPES);
  buildToggles($('#uw-toggles'), UW.UW_TYPES);

  $$('.typeahead').forEach(function (box) {
    setupTypeahead(box, function (hit) {
      if (box.dataset.kind === 'any') return runLookup(hit);
      var list = picked[hit.kind];
      if (!list.some(function (p) { return p.id === hit.item.id; })) list.push({ id: hit.item.id, yearsSince: '' });
      renderChips(hit.kind); run();
    });
  });

  form.addEventListener('input', function (e) { if (!e.target.classList.contains('yrs')) run(); });
  form.addEventListener('change', run);
  $('#clear-btn').addEventListener('click', function () {
    form.reset(); picked.condition = []; picked.medication = [];
    renderChips('condition'); renderChips('medication'); run();
  });

  $$('.tab').forEach(function (t) {
    t.addEventListener('click', function () {
      $$('.tab').forEach(function (x) { x.classList.toggle('active', x === t); });
      $$('.tab-panel').forEach(function (p) { p.hidden = p.id !== 'tab-' + t.dataset.tab; });
      if (t.dataset.tab === 'rules') renderRules();
    });
  });

  $('#sample-banner').hidden = !UW.state.products.some(function (p) { return p.sample; });
  renderCarriers();
  run();
  // Shared with live.js
  window.UWApp = { card: card, esc: esc };
})();
