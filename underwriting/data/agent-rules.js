// Agent-wide rules: your decisions that override every carrier's guide and grid for a condition.
//   outcome 'gi-only': products that offer a GI plan (or are GI) show GI; every other product declines.
UW.registerAgentRules({
  hiv_aids: { outcome: 'gi-only', note: 'Agent rule: HIV is guaranteed issue only, across every carrier' }
});
