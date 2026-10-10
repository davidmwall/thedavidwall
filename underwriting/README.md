# Underwriting Finder

A search engine for no-exam life insurance underwriting (instant decision, accelerated, simplified issue and GI) across final expense, term, mortgage protection, IUL and whole life.

Enter as much or as little as you know about a client: just one condition, or a full profile. The app ranks every carrier product by the best class the client could get. It shows why for each one, with the guide page number.

## How to use it

**Open it:** double-click `underwriting/index.html`. It's a static page with no server, login, or install. To use it on your phone, host it (see below).

**Find carriers tab**
- Every field is optional. **A blank field never rules a carrier out.**
- Type a condition or medication. Search understands abbreviations and brand names (`afib`, `MI`, `CABG`, `Ozempic`, `Coumadin`, …).
- Add **yrs ago** on a condition when you know it. Without it you get the range (e.g. *Level → Decline* for a heart attack with a 2-year lookback). With it you get the exact answer.
- Results:
  - **Ranked matches.** Best achievable class first. A tag such as *"1 to verify"* or *"depends on timing"* means something still needs checking.
  - **Ruled out.** A field you entered hit a decline, such as age, state, build, a knockout question, or a med. Expand a card to see which one.
- **Verify** (`?`) means the carrier's guide doesn't mention that condition or med. The app never assumes it's fine.

**Lookup tab:** pick one condition or med and see how every carrier treats it, side by side. This replaces Ctrl+F across PDFs.

**Carriers tab:** lists every loaded product with its guide revision. A product is flagged when its rules haven't been reviewed in 6+ months.

## Results are only as good as the data

The app ships with **4 fictional sample carriers** (the yellow banner). The engine has no carrier knowledge of its own. Every result comes from a carrier file you can read, and every rule cites its page. This is what makes it more reliable than asking a chatbot to "remember" guides.

### Adding a real carrier

**Easiest: have Claude do it.** Put the guide PDF in `underwriting/guides/` (it's gitignored, so guides are never committed). Then in a Claude Code session on this repo, say:

> add-carrier: underwriting/guides/<file>.pdf

The `add-carrier` skill (`.claude/skills/add-carrier/SKILL.md`) runs these steps:
1. Extracts the text with page numbers.
2. Fills in a carrier file and wires it into the app.
3. Runs the validator.
4. Lists any rules that were ambiguous, so you can decide them.

**By hand:**
1. `underwriting/tools/pdf_to_text.sh underwriting/guides/guide.pdf` gives page-numbered text.
2. Copy `data/carriers/_TEMPLATE.js` to `data/carriers/<carrier>-<product>.js` and fill it in. The comments in the template explain every field.
3. Add `<script src="data/carriers/<file>.js"></script>` to `index.html`.
4. Run `node underwriting/tools/validate.js`. It catches typos in condition IDs and outcomes, bad lookback order, build-chart gaps, missing page citations, and files you forgot to add to `index.html`.

When a carrier publishes a new guide, update the file and bump `guide.revision` and `guide.lastReviewed`.

### Your condition grid (backup source)

Carrier PDFs are the **official** source. Your spreadsheet grid is the **backup**:

| Situation | What the app shows |
|---|---|
| The carrier guide covers the condition | The guide's answer. The grid's value appears underneath ("agrees", or "disagrees, guide wins" in orange) |
| The guide is silent, but the grid has it | The grid's answer, tagged **grid (backup)**. The product can't be a "clean fit" until it's confirmed |
| A carrier in the grid with no PDF loaded yet | Listed as **grid only**. It ranks below guide-backed carriers with the same result. Age, state and face limits show "verify" |
| Neither | "Verify" |

The Carriers tab lists every **grid vs. guide disagreement**. Each one is either a stale grid entry or a guide rule worth double-checking.

**Import or re-import the spreadsheet** (put the .xlsx in `underwriting/guides/`, which is never committed):

```
node underwriting/tools/import_grid.js underwriting/guides/<grid>.xlsx
```

- Every tab is imported. Tab settings are in `underwriting/grid-mapping.json`. The UHL tab is skipped because United Home Life's PDF replaces it.
- Each tab's columns become separate products ("Whole Life :: Carrier X" vs "Term-IUL :: Carrier X").
- The import report lists:
  - rows it couldn't match to a condition
  - columns not yet linked to a carrier file
  - cell values it couldn't read (e.g. "See notes")

  Nothing is guessed. Record each decision in `grid-mapping.json` and re-run. Re-imports keep every decision.
- When you add a carrier's PDF, link its grid column so the grid backs up that carrier instead of showing a separate grid-only entry: `"Whole Life :: Carrier X": { "product": "carrier-x-fe" }`.

### How rules work

| Guide says | Data |
|---|---|
| "CHF — ever" → decline | `chf: { rules: [{ outcome: 'decline' }] }` |
| "Heart attack within 1 yr decline, 1–2 yrs graded" | `heart_attack: { rules: [{ withinYears: 1, outcome: 'decline' }, { withinYears: 2, outcome: 'graded' }] }` (older than 2 yrs = not asked) |
| "COPD within 2 yrs graded, otherwise level" | `copd: { rules: [{ withinYears: 2, outcome: 'graded' }, { outcome: 'level' }] }` |
| Build chart | one row per inch: `{ h: 70, min: 112, max: { level: 279, graded: 314 } }` |

Outcomes from best to worst: `preferred_plus, preferred, standard_plus, standard, level, table, graded, modified, gi, refer, decline`. A product's overall result is the **worst** outcome across everything entered.

## Hosting

- **GitHub Pages:** go to Settings → Pages and set the source to this branch with the `/ (root)` folder. The app is then at `https://<user>.github.io/<repo>/underwriting/`.
- **Privacy:** if the repo is public, your carrier rule files are public too. Many guides are marked "for agent use only." Make the repo private, or host somewhere private (Netlify or Cloudflare Pages with password protection). GitHub Pages from a private repo needs a paid GitHub plan.

## Development

```
node underwriting/tools/validate.js        # check carrier data
node --test underwriting/tests/*.test.js   # engine tests
```

Files:
- `engine.js`: matching and ranking logic, shared by the browser and Node.
- `data/conditions.js`: condition and medication vocabulary and aliases.
- `data/carriers/*.js`: one file per carrier product.
- `app.js`, `index.html`, `styles.css`: the UI.
- `data/grid.js`: the backup grid, generated by the import. Don't edit it by hand.
- `grid-mapping.json`: your decisions for the grid import (tabs, rows, columns, cell values).
- `tools/`: the validator, the PDF-to-text script, and the grid importer.
