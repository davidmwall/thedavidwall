// Agent-wide rules: your decisions that override every carrier's guide and grid for a condition.
//   outcome 'gi-only': products that offer a GI plan (or are GI) show GI; every other product declines.
//   except: product IDs where the carrier's own guide/grid answer is kept.
UW.registerAgentRules({
  hiv_aids: { outcome: 'gi-only', note: 'Agent rule: HIV is guaranteed issue only, across every carrier',
             except: ['rnoa-ensured-legacy'] }   // Royal Neighbors' guide: HIV virus only = GDB (graded)
});

// Product limits that override carrier guides and the grid.
UW.registerAgentLimits([
  { products: /^ethos-/, except: ['ethos-trustage-ga-wl', 'ethos-term-prime', 'ethos-term-choice', 'ethos-trustage-term'], issueAgeMin: 18, note: 'Agent rule: Ethos issues from age 18 (term stays at 20)' },
  { products: ['ethos-trustage-ga-wl'], issueAgeMin: 45, note: 'Agent rule: Ethos GI from age 45' }
]);
