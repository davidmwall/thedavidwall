// Agent-wide rules: your decisions that override every carrier's guide and grid for a condition.
//   outcome 'gi-only': products that offer a GI plan (or are GI) show GI; every other product declines.
//   outcome 'decline-if-silent': decline on the listed product types only when neither the guide nor the grid answers.
//   except: product IDs where the carrier's own guide/grid answer is kept.
UW.registerAgentRules({
  hiv_aids: { outcome: 'gi-only', note: 'Agent rule: HIV is guaranteed issue only, across every carrier',
             except: ['rnoa-ensured-legacy'] },   // Royal Neighbors' guide: HIV virus only = GDB (graded)
  adl_assistance: TERM_SILENT('Needs help with ADLs'),
  bedridden: TERM_SILENT('Bedridden'),
  hospice: TERM_SILENT('Hospice'),
  nursing_home: TERM_SILENT('Nursing home')
});
function TERM_SILENT(what) {
  return { outcome: 'decline-if-silent', types: ['term', 'mortgage_protection', 'universal_life', 'iul'],
    note: 'Agent rule: ' + what + ' declines on term/UL/IUL when the guide and grid don\'t say otherwise' };
}

// Product limits that override carrier guides and the grid.
UW.registerAgentLimits([
  { products: /^ethos-/, except: ['ethos-trustage-ga-wl', 'ethos-term-prime', 'ethos-term-choice', 'ethos-trustage-term'], issueAgeMin: 18, note: 'Agent rule: Ethos issues from age 18 (term stays at 20)' },
  { products: ['ethos-trustage-ga-wl'], issueAgeMin: 45, note: 'Agent rule: Ethos GI from age 45' },
  { products: /^rnoa-/, statesNot: ['AL'], note: 'Agent rule: Royal Neighbors does not operate in Alabama' },
  { products: /cica/, statesNot: ['CA'], note: 'Agent rule: Cica does not operate in California' },
  { products: /^ahl-/, statesNot: ['CA'], note: 'Agent rule: American Home Life does not operate in California' }
]);
