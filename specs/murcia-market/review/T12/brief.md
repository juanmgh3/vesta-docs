# T12 — brief

- [x] **T12 — Final label and wording pass** (structural). Text corrections only, no
  new research, no figure changed. In `murcia-market.md`: (F-052) relabel the
  municipality population as "FACT (1 source), provisional" at every place it is
  graded — §1.1 INE row, the Ayuntamiento row (no "FACT (2nd source)" wording; it is an
  agreeing publication of the same register), the §1.6 caption and M1 in §9.1 — and
  grep the whole file so no "FACT (2nd source)", "FACT (2 publications)" or "two
  publications of one register" label is left grading a figure as more than one
  source; (F-053) quote Granada's household value in the G4 delta row as that file
  states it, band and mid; (F-054) name the criterion difference in the G10 delta row
  and give the like-for-like count; (F-055) label the §9.3 ranking ANALYSIS, remove or
  label the unlabelled margin claim, and replace "a few percent" with the 2.6–2.8
  household-size band and the R1 range it implies; (F-056) scope the "every FACT was
  re-opened" sentence in §9.1 to the rows actually re-opened and name the exceptions;
  (F-057) update the Biomex row in §4.2 to say which page carries the figure, as M19
  already does. In `specs/murcia-market/feature.md`, correct the T7 evidence row's
  "every §9 FACT confirmed" wording the same way. _Verify:_ `grep -c "FACT (2nd source)\|FACT (2 publications)\|FACT — two publications" business/research/murcia-market.md` (must print 0) and `grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"` (must print 0).
  Accept: both verify commands print 0; F-052 to F-057 are addressed at the lines the findings record names; a numeric-token diff before and after shows no figure changed other than the values F-053 to F-055 ask to add.


## Scope

- business/research/murcia-market.md
- business/research/founder-inputs.md
- specs/murcia-market/feature.md

## Constraints

- Label standard of `market-dossier.md`, unchanged: **FACT** (load-bearing figures
  need a second independent source, else "FACT (1 source), provisional"),
  **ESTIMATE** (derivation shown), **HYPOTHESIS**, **NOT FOUND**. A number that could
  not be sourced is written NOT FOUND; it is never filled with a plausible value.
- Every FACT row carries its source URL inline and the retrieval date (2026-10).
  Competitor prices are read from the competitor's own page, not from a search
  snippet; a snippet-only datum is labelled as such.
- Primary statistical sources first: INE (Padrón, Censo 2021, ADRH) and CREM /
  Econet (Centro Regional de Estadística de Murcia). Newsroom citations of INE are a
  fallback, declared as a fallback.
- Label wording is exact (added 2026-10-05 after two review stops): a FACT resting on
  one source is always written "FACT (1 source), provisional"; a republication or
  press release by the same body is not a second source; every FACT row and every
  FACT stated in prose carries its URL and "Retrieved 2026-10"; the label is never
  split across a line break and qualifiers go after it; a cross-check on a
  different metric is named as such and never upgrades a label; a verdict word
  (premium, dense, cheap) needs a stated criterion.
- Incompatible geographic definitions are flagged, never blended or averaged.
- National rates already graded in `market-dossier.md` (§5.1 allergy, §5.2 pets,
  §6.1–6.3 CPC/CVR, §9 admin costs) are reused by reference and re-researched only
  where a Murcia-specific figure exists.
- This file is research input only. It does not decide prices, does not write report
  or dossier copy, and does not touch `economic-model*.{md,mjs}`,
  `bank-granada-scenario.mjs`, `granada-market.md`, the reports or the dossier.
- People by role only, no names, no personal data. Never open, quote or reference
  the content of `founder-calibration.private.md`.
- `founder-inputs.md` gets a dated addendum; existing text is not rewritten or
  deleted (superseded items are marked superseded and point to the addendum).
- English, same register and table shapes as `granada-market.md`.

