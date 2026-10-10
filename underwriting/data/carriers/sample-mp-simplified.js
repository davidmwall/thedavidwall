// SAMPLE DATA — fictional carrier for demonstration only. Replace with real guides.
UW.addProduct({
  id: 'sample-mp-simplified',
  sample: true,
  carrier: 'Sample Carrier C',
  product: 'Mortgage Protection Term (Simplified Issue)',
  type: 'mortgage_protection',
  underwriting: 'simplified',
  bestOutcome: 'standard',
  guide: { document: 'Sample MP field guide', revision: 'demo', effective: '2026-01-01', lastReviewed: '2026-10-10' },

  issueAges: { min: 20, max: 75, source: 'p. 1' },
  faceAmount: { min: 25000, max: 500000, note: 'max $250k ages 66+', source: 'p. 1' },
  statesNotAvailable: ['NY', 'MT'],
  tobacco: { note: 'Tobacco rates apply', source: 'p. 1' },

  build: {
    source: 'p. 2',
    rows: [
      { h: 58, min: 77, max: { standard: 206 } },
      { h: 59, min: 79, max: { standard: 213 } },
      { h: 60, min: 82, max: { standard: 220 } },
      { h: 61, min: 85, max: { standard: 228 } },
      { h: 62, min: 87, max: { standard: 235 } },
      { h: 63, min: 90, max: { standard: 243 } },
      { h: 64, min: 93, max: { standard: 251 } },
      { h: 65, min: 96, max: { standard: 258 } },
      { h: 66, min: 99, max: { standard: 266 } },
      { h: 67, min: 102, max: { standard: 275 } },
      { h: 68, min: 105, max: { standard: 283 } },
      { h: 69, min: 108, max: { standard: 291 } },
      { h: 70, min: 112, max: { standard: 300 } },
      { h: 71, min: 115, max: { standard: 308 } },
      { h: 72, min: 118, max: { standard: 317 } },
      { h: 73, min: 121, max: { standard: 326 } },
      { h: 74, min: 125, max: { standard: 335 } },
      { h: 75, min: 128, max: { standard: 344 } },
      { h: 76, min: 131, max: { standard: 353 } },
      { h: 77, min: 135, max: { standard: 363 } },
      { h: 78, min: 138, max: { standard: 372 } }
    ]
  },

  conditions: {
    hospitalized_now: { rules: [{ outcome: 'decline' }], source: 'p. 3 Q1' },
    nursing_home: { rules: [{ outcome: 'decline' }], source: 'p. 3 Q1' },
    oxygen: { rules: [{ outcome: 'decline' }], source: 'p. 3 Q1' },
    dialysis: { rules: [{ outcome: 'decline' }], source: 'p. 3 Q2' },
    hiv_aids: { rules: [{ outcome: 'decline' }], source: 'p. 3 Q2' },
    alzheimers_dementia: { rules: [{ outcome: 'decline' }], source: 'p. 3 Q2' },
    chf: { rules: [{ outcome: 'decline' }], source: 'p. 3 Q2' },
    cirrhosis: { rules: [{ outcome: 'decline' }], source: 'p. 3 Q2' },
    copd: { rules: [{ outcome: 'decline' }], source: 'p. 3 Q2' },
    cancer: { rules: [{ withinYears: 5, outcome: 'decline' }], source: 'p. 3 Q3' },
    heart_attack: { rules: [{ withinYears: 3, outcome: 'decline' }], source: 'p. 3 Q3' },
    heart_stent: { rules: [{ withinYears: 3, outcome: 'decline' }], source: 'p. 3 Q3' },
    stroke: { rules: [{ withinYears: 3, outcome: 'decline' }], source: 'p. 3 Q3' },
    diabetes_insulin: { rules: [{ outcome: 'decline' }], note: 'Insulin before age 50', source: 'p. 3 Q4' },
    diabetes_complications: { rules: [{ outcome: 'decline' }], source: 'p. 3 Q4' },
    alcohol_abuse: { rules: [{ withinYears: 5, outcome: 'decline' }], source: 'p. 3 Q5' },
    drug_abuse: { rules: [{ withinYears: 5, outcome: 'decline' }], source: 'p. 3 Q5' },
    dui: { rules: [{ withinYears: 3, outcome: 'decline' }], source: 'p. 3 Q6' },
    felony: { rules: [{ withinYears: 5, outcome: 'decline' }], source: 'p. 3 Q6' }
  },

  // This sample guide says: if no knockout question is answered "yes", the app is approvable.
  unlisted: { outcome: 'standard', note: 'Guide: only the knockout questions apply', source: 'p. 3' },

  medications: {
    insulin: { outcome: 'decline', note: 'Only if insulin started before age 50', source: 'p. 4' },
    donepezil: { outcome: 'decline', source: 'p. 4' },
    hiv_meds: { outcome: 'decline', source: 'p. 4' }
  },

  notes: 'Includes return-of-premium and living benefit riders.'
});
