// SAMPLE DATA — fictional carrier for demonstration only. Replace with real guides.
UW.addProduct({
  id: 'sample-gi',
  sample: true,
  carrier: 'Sample Carrier D',
  product: 'Guaranteed Issue Whole Life',
  type: 'final_expense',
  underwriting: 'guaranteed',
  bestOutcome: 'gi',
  guide: { document: 'Sample GI brochure', revision: 'demo', effective: '2026-01-01', lastReviewed: '2026-10-10' },

  issueAges: { min: 50, max: 80, source: 'p. 1' },
  faceAmount: { min: 2000, max: 25000, source: 'p. 1' },
  statesNotAvailable: [],
  tobacco: { note: 'No tobacco distinction', source: 'p. 1' },

  // No health questions, no build chart.
  unlisted: { outcome: 'gi', note: 'No health questions — 2-year graded death benefit', source: 'p. 1' },
  build: 'none',
  conditions: {},
  medications: {},

  notes: 'Fallback when nothing else fits. 2-year return of premium + interest.'
});
