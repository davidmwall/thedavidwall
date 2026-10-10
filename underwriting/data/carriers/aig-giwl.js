// AIG / Corebridge Guaranteed Issue Whole Life — no health questions. Ages and face from your grid;
// $25k limit and NY exclusion from the SimpliNow Legacy guide (AGLC201192 p. 9, p. 12).
UW.addProduct({
  id: 'aig-giwl',
  carrier: 'AIG / Corebridge',
  product: 'Guaranteed Issue Whole Life (graded 2 yrs)',
  type: 'final_expense',
  underwriting: 'guaranteed',
  bestOutcome: 'gi',
  guide: { document: 'Your grid + SimpliNow Legacy guide (GIWL limits)', revision: 'grid / AGLC201192 REV0224', lastReviewed: '2026-10-10' },
  issueAges: { min: 50, max: 80, source: 'your grid' },
  faceAmount: { min: 5000, max: 25000, note: '$25k max includes all existing AIG GIWL and SIWL coverage', source: 'your grid; SIWL guide p. 9' },
  statesNotAvailable: ['NY'],
  tobacco: { outcome: 'gi', note: 'No health questions; tobacco rates apply', source: 'your grid' },
  build: 'none',
  unlisted: { outcome: 'gi', note: 'Guaranteed issue: no health questions', source: 'your grid' },
  notes: 'Guaranteed issue, no health questions, no build chart. Graded death benefit for the first 2 years. Fallback for clients who do not qualify for SimpliNow Legacy.',
  conditions: {
    foreign_national: { rules: [{ outcome: 'refer', note: 'Citizenship, not health: call underwriting (SimpliNow Legacy is not available to foreign nationals)' }], source: 'your grid; SIWL guide p. 9' }
  },
  medications: {}
});
