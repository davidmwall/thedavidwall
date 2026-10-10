// SAMPLE DATA — fictional carrier for demonstration only. Replace with real guides.
UW.addProduct({
  id: 'sample-term-accelerated',
  sample: true,
  carrier: 'Sample Carrier B',
  product: 'Term 10/20/30 — Accelerated UW',
  type: 'term',
  underwriting: 'accelerated',
  bestOutcome: 'preferred_plus',
  guide: { document: 'Sample accelerated UW guide', revision: 'demo', effective: '2026-01-01', lastReviewed: '2026-10-10' },

  issueAges: { min: 18, max: 60, source: 'p. 1' },
  faceAmount: { min: 100000, max: 3000000, note: 'max $1M ages 51-60', source: 'p. 1' },
  statesNotAvailable: [],
  tobacco: { outcome: 'standard', note: 'Tobacco classes: Preferred Tobacco / Standard Tobacco', source: 'p. 2' },

  build: {
    source: 'p. 3',
    rows: [
      { h: 58, min: 81, max: { preferred_plus: 129, preferred: 144, standard_plus: 153, standard: 177 } },
      { h: 59, min: 84, max: { preferred_plus: 134, preferred: 149, standard_plus: 158, standard: 183 } },
      { h: 60, min: 87, max: { preferred_plus: 138, preferred: 154, standard_plus: 164, standard: 189 } },
      { h: 61, min: 90, max: { preferred_plus: 143, preferred: 159, standard_plus: 169, standard: 196 } },
      { h: 62, min: 93, max: { preferred_plus: 148, preferred: 164, standard_plus: 175, standard: 202 } },
      { h: 63, min: 96, max: { preferred_plus: 152, preferred: 169, standard_plus: 181, standard: 209 } },
      { h: 64, min: 99, max: { preferred_plus: 157, preferred: 175, standard_plus: 186, standard: 216 } },
      { h: 65, min: 102, max: { preferred_plus: 162, preferred: 180, standard_plus: 192, standard: 222 } },
      { h: 66, min: 105, max: { preferred_plus: 167, preferred: 186, standard_plus: 198, standard: 229 } },
      { h: 67, min: 109, max: { preferred_plus: 172, preferred: 192, standard_plus: 204, standard: 236 } },
      { h: 68, min: 112, max: { preferred_plus: 178, preferred: 197, standard_plus: 210, standard: 243 } },
      { h: 69, min: 115, max: { preferred_plus: 183, preferred: 203, standard_plus: 217, standard: 251 } },
      { h: 70, min: 118, max: { preferred_plus: 188, preferred: 209, standard_plus: 223, standard: 258 } },
      { h: 71, min: 122, max: { preferred_plus: 194, preferred: 215, standard_plus: 229, standard: 265 } },
      { h: 72, min: 125, max: { preferred_plus: 199, preferred: 221, standard_plus: 236, standard: 273 } },
      { h: 73, min: 129, max: { preferred_plus: 205, preferred: 227, standard_plus: 243, standard: 280 } },
      { h: 74, min: 132, max: { preferred_plus: 210, preferred: 234, standard_plus: 249, standard: 288 } },
      { h: 75, min: 136, max: { preferred_plus: 216, preferred: 240, standard_plus: 256, standard: 296 } },
      { h: 76, min: 140, max: { preferred_plus: 222, preferred: 246, standard_plus: 263, standard: 304 } },
      { h: 77, min: 143, max: { preferred_plus: 228, preferred: 253, standard_plus: 270, standard: 312 } },
      { h: 78, min: 147, max: { preferred_plus: 234, preferred: 260, standard_plus: 277, standard: 320 } }
    ]
  },

  conditions: {
    high_blood_pressure: { rules: [{ outcome: 'preferred' }], note: 'Controlled, on ≤2 meds', source: 'p. 5' },
    high_cholesterol: { rules: [{ outcome: 'preferred' }], note: 'Controlled', source: 'p. 5' },
    asthma: { rules: [{ outcome: 'preferred' }], note: 'Mild; no hospitalization 2 yrs', source: 'p. 5' },
    sleep_apnea: { rules: [{ outcome: 'standard_plus' }], note: 'Compliant with CPAP', source: 'p. 5' },
    depression_anxiety: { rules: [{ outcome: 'standard_plus' }], note: 'Outpatient, ≤2 meds, no hospitalization', source: 'p. 5' },
    thyroid: { rules: [{ outcome: 'preferred_plus' }], source: 'p. 5' },
    diabetes_oral: { rules: [{ outcome: 'standard' }], note: 'A1C < 7.5, diagnosed after age 40', source: 'p. 6' },
    diabetes_insulin: { rules: [{ outcome: 'refer' }], note: 'Not eligible for accelerated — full UW', source: 'p. 4' },
    afib: { rules: [{ outcome: 'refer' }], source: 'p. 4' },
    heart_attack: { rules: [{ outcome: 'refer' }], source: 'p. 4' },
    cad: { rules: [{ outcome: 'refer' }], source: 'p. 4' },
    heart_stent: { rules: [{ outcome: 'refer' }], source: 'p. 4' },
    stroke: { rules: [{ outcome: 'refer' }], source: 'p. 4' },
    cancer: { rules: [{ withinYears: 10, outcome: 'refer' }], source: 'p. 4' },
    skin_cancer_basal: { rules: [{ outcome: 'preferred_plus' }], source: 'p. 5' },
    copd: { rules: [{ outcome: 'decline' }], source: 'p. 4' },
    chf: { rules: [{ outcome: 'decline' }], source: 'p. 4' },
    bipolar: { rules: [{ outcome: 'refer' }], source: 'p. 4' },
    alcohol_abuse: { rules: [{ withinYears: 5, outcome: 'decline' }, { withinYears: 10, outcome: 'refer' }], source: 'p. 4' },
    drug_abuse: { rules: [{ withinYears: 5, outcome: 'decline' }, { withinYears: 10, outcome: 'refer' }], source: 'p. 4' },
    marijuana: { rules: [{ outcome: 'standard_plus' }], note: 'Non-tobacco rates if ≤ 2x/week', source: 'p. 6' },
    dui: { rules: [{ withinYears: 2, outcome: 'decline' }, { withinYears: 5, outcome: 'standard' }], source: 'p. 7' },
    felony: { rules: [{ withinYears: 5, outcome: 'decline' }], source: 'p. 7' },
    hazardous_avocation: { rules: [{ outcome: 'refer' }], note: 'Requires avocation questionnaire', source: 'p. 7' },
    hiv_aids: { rules: [{ outcome: 'decline' }], source: 'p. 4' }
  },

  medications: {
    insulin: { outcome: 'refer', source: 'p. 4' },
    eliquis: { outcome: 'refer', source: 'p. 4' },
    plavix: { outcome: 'refer', source: 'p. 4' },
    opioids: { outcome: 'refer', note: 'Chronic use', source: 'p. 4' },
    suboxone: { outcome: 'decline', source: 'p. 4' },
    antipsychotic: { outcome: 'refer', source: 'p. 4' }
  },

  notes: 'Accelerated decision uses Rx, MIB, MVR, and lab data. Any "refer" result falls to full UW (exam).'
});
