---
name: add-carrier
description: Turn a carrier underwriting guide (PDF or pasted text) into a carrier data file for the Underwriting Finder app in underwriting/. Use when the user uploads or names a carrier guide, says "add <carrier>", or asks to update a carrier's rules for a new guide revision.
---

# Add or update a carrier in the Underwriting Finder

The app's accuracy depends entirely on this step. Transcribe the guide; never infer.

## Steps

1. **Get the text with page numbers.**
   - PDF: `underwriting/tools/pdf_to_text.sh underwriting/guides/<file>.pdf` → `<file>.txt` with `===== PAGE N =====` headers.
   - If the script warns that little text was extracted, the PDF is scanned. Tell the user and ask for a text-based copy (don't guess at content).
   - Guides live in `underwriting/guides/`, which is gitignored. Never commit a guide PDF or its text.

2. **Read the whole guide** before writing anything. Note: product name, form/revision number, effective date, issue ages, face limits (including age-banded limits), state availability, tobacco rules, build chart, every knockout/health question with its lookback period, the medication list, and any statement about unlisted conditions.

3. **Create or edit** `underwriting/data/carriers/<carrier>-<product>.js` from `_TEMPLATE.js`. One file per product. If one guide covers several products with different rules (e.g. level vs graded plans, or term vs IUL), make separate products.
   - Map each guide item to an ID in `underwriting/data/conditions.js`. If none fits, **add a new ID** there (with aliases) rather than forcing a near match.
   - Lookbacks: "within 2 years" → `{ withinYears: 2, ... }`. "Ever" or "more than N years" → a final rule with no `withinYears`. If the guide only asks within N years, leave out the fallback (older = not asked).
   - Health questions answered "yes" usually map to: Part A/knockout → `decline`; graded section → `graded`; modified section → `modified`. Accelerated products: items that drop to full underwriting → `refer`.
   - Build chart: one row per inch, with every tier the chart shows. If the chart is by age band or gender, use the most common band and note the difference in `notes`. Never average.
   - Put the page and question number in **every** `source`.
   - Set `unlisted` **only** if the guide explicitly says unlisted conditions are acceptable.
   - Set `guide.revision`, `guide.effective`, and `guide.lastReviewed` (today).
   - Anything that doesn't fit the schema goes in `notes` or a rule `note`. Don't drop it.

4. **Wire it up.** Add `<script src="data/carriers/<file>.js"></script>` to `underwriting/index.html` in the "Carrier data" block.

5. **Verify.**
   - `node underwriting/tools/validate.js` must report 0 errors. Fix the warnings too.
   - `node --test underwriting/tests/*.test.js` must pass.
   - Spot-check 3 rules against the PDF by page number, and list them for the user so they can confirm.

6. **Report back** with a list of ambiguous items you couldn't map cleanly, each with its page number, so the user can decide. Don't silently pick an interpretation.

7. Once the user has real carriers loaded, offer to delete the `sample-*.js` files and their script tags.
