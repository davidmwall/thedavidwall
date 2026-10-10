/*
 * TEMPLATE — copy this file to data/carriers/<carrier>-<product>.js, fill it in
 * from the carrier's underwriting guide, then add a <script> tag for it in
 * index.html (see the "Carrier data" block). This file itself is NOT loaded.
 *
 * Accuracy rules (these keep the app trustworthy):
 *   - Only enter what the guide actually says. If the guide is silent, leave it
 *     out — the app shows "verify" instead of guessing.
 *   - Put the page number in every `source` so you can check it in seconds.
 *   - Update `guide.revision` / `guide.effective` whenever a new guide drops.
 *   - Run `node underwriting/tools/validate.js` after editing.
 *
 * OUTCOME KEYS (best -> worst):
 *   preferred_plus, preferred, standard_plus, standard, level, table,
 *   graded, modified, gi, refer, decline
 *   - Final expense usually uses: level, graded, modified, gi, decline
 *   - Term / IUL accelerated uses: preferred_plus … standard, table, refer, decline
 *   - `refer` = drops out of instant/accelerated into review or full UW
 */
UW.addProduct({
  id: 'carrier-product',                 // unique, lowercase, dashes
  carrier: 'Carrier Name',
  product: 'Product Name',
  type: 'final_expense',                 // final_expense | term | mortgage_protection | iul | whole_life
  underwriting: 'instant',               // instant | accelerated | simplified | guaranteed
  bestOutcome: 'level',                  // best class a perfectly healthy client gets
  guide: {
    document: 'Carrier FE Underwriting Guide',  // file name / title of the PDF
    revision: 'Form 1234 rev 03/2026',
    effective: '2026-03-01',
    lastReviewed: '2026-10-10'           // when YOU last checked it against the PDF
  },

  issueAges: { min: 50, max: 85, source: 'p. 2' },
  faceAmount: { min: 2000, max: 40000, note: 'max 25k ages 81+', source: 'p. 2' },
  statesNotAvailable: ['NY'],            // or use statesAvailable: ['TX', 'FL', ...]

  // Applies when client uses tobacco/nicotine. Leave outcome off if it only changes rates.
  tobacco: { note: 'Tobacco rates; nicotine 12-month lookback', source: 'p. 3' },

  // Build chart: one row per height in inches. Use build: 'none' if there is no build requirement. `max` maps outcome -> max weight.
  // Over every max = decline. Under `min` = `underweight` (default decline).
  build: {
    source: 'p. 4',
    // underweight: 'graded',
    rows: [
      { h: 60, min: 85, max: { level: 210, graded: 235 } },
      { h: 61, min: 88, max: { level: 217, graded: 243 } }
      // ...
    ]
  },

  // OPTIONAL: what happens to conditions/meds the guide doesn't mention.
  // Only set this if the guide explicitly says so (common on GI products).
  // unlisted: { outcome: 'level', note: 'Only knockout questions apply', source: 'p. 1' },

  // Conditions: key = ID from data/conditions.js. Rules are checked in order.
  //   withinYears: N  -> applies if diagnosed/treated less than N years ago
  //   no withinYears  -> fallback ("ever" or "more than N years")
  // If every rule has withinYears, anything older is treated as "not asked" (no impact).
  //   dxAgeMax: N    -> rule applies if diagnosed at age N or younger ("onset > age 45" = decline, dxAgeMax: 45)
  //   dxAgeBelow: N  -> rule applies if diagnosed before age N ("diagnosed prior to age 20")
  //                     Age at diagnosis = client age - years since; unknown -> shown as a range.
  //   conditional: true -> depends on something the app can't check (severity, meds, an app
  //                     question); only widens the worst case, never rules a carrier out.
  conditions: {
    heart_attack: {
      rules: [
        { withinYears: 2, outcome: 'graded' },
        { outcome: 'level' }
      ],
      source: 'p. 6, Part B Q2'
    },
    chf: { rules: [{ outcome: 'decline' }], source: 'p. 5, Part A Q1' }
  },

  // Medications: key = ID from data/conditions.js (medication list).
  // Use { outcome } for a simple rule, or { rules: [...] } like conditions.
  medications: {
    insulin: { outcome: 'level', note: 'Decline if insulin started before age 50', source: 'p. 9' }
  },

  notes: 'Anything worth remembering: e-app only, phone interview required, etc.'
});
