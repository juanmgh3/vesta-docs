# T7 — brief

- [x] **T7 — Headline parameter set, deltas, gaps and sources** (structural). Fill §9
  and §10. §9: table M1…Mn of load-bearing inputs for the model, each tracing to a
  section, with label and second-source status (shape of `granada-market.md` §7); a
  Murcia vs Granada delta table for every parameter the Granada scenario used (pool,
  households, income, piece prices, competitor count, CPC), so the model re-run is a
  parameter swap; a "Gaps and what closes them" list (shape of `market-dossier.md`
  §11), ranked by how much each gap moves the model. §10: sources appendix by section.
  Re-open every load-bearing FACT of §9 at its source and confirm the figure; record
  the result per row. Close every finding still `open` in
  `specs/murcia-market/review/findings.md` at the lines it names (at the time of
  writing: F-007 confirm or relabel two attached sources; F-019 relabel the three
  "FACT (2 publications)" pedanía rows; F-020 relabel the 45–64 row and reword its
  "two sources" verdict), plus any raised by T4–T6. Also confirm at the source which
  BORM publication of the Murcia mobility ordinance is in force (§8.2 cites 25-Apr-2024
  while the linked PDF is named as a 2025 definitive approval) and correct the row. _Verify:_ `grep -c "^| M[0-9]" business/research/murcia-market.md`.
  Accept: Scenario: traceable headline — WHEN any row of the §9 table is picked THEN it names its section, its label and its source status, and a reader can reach the source URL in §10; the delta table covers every G-row of `granada-market.md` §7.


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

