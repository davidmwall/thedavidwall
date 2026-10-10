// Agent-wide rules: your decisions that override every carrier's guide and grid for a condition.
//   outcome 'gi-only': products that offer a GI plan (or are GI) show GI; every other product declines.
//   except: product IDs where the carrier's own guide/grid answer is kept.
UW.registerAgentRules({
  hiv_aids: { outcome: 'gi-only', note: 'Agent rule: HIV is guaranteed issue only, across every carrier',
             except: ['rnoa-ensured-legacy'] }   // Royal Neighbors' guide: HIV virus only = GDB (graded)
});
