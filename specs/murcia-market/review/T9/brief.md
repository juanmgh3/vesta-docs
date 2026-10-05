# T9 — brief

- [x] **T9 — Fix pass on T3 review findings** (structural). In `murcia-market.md`
  §2–§3, at the lines the findings record names. (F-008) Relabel the Murcia income row
  "FACT (1 source), provisional" and state that the AEAT cross-check supports only the
  per-person ordering, not the per-household one. (F-009) Re-open the INE ADRH table at
  its source for the Comunidad de Madrid net income per household and per person, 2023:
  if the figure read differs from the cell, correct the cell and every gap computed
  from it; if the source confirms €48,806, keep it, label the cell CONFLICTING against
  `market-dossier.md` §5.3 (€43,037) and state which table, row and year was read; do
  not edit `market-dossier.md`. (F-010) Apply the §1.1 republication rule to the
  comparison rows: an INE press release is not a second source for an INE table; mark
  National, Granada, Valencia and the AEAT row "FACT (1 source), provisional" unless a
  second independent source is cited. (F-011) Recompute dogs per inhabitant with a
  Spain-wide denominator from INE, cited, or flag the common-territory scope
  explicitly; flag the same scope on the AEAT "National" column. (F-012) State one
  criterion for zone verdicts (tie it to the file's 1.5× high-income cut-off) and apply
  it to all eight zones; Vistalegre and La Flota must come out consistent with it.
  (F-013) Correct the sentence on which cells of the ring summary are ESTIMATE.
  (F-014) Correct the Valencia per-person gap to the computed figure. This is the only
  task in this pass allowed new source reads, and only for F-009 and F-011. _Verify:_ `grep -c "provisional" business/research/murcia-market.md` and `grep -c "CONFLICTING" business/research/murcia-market.md`.
  Accept: each of F-008 to F-014 is addressed at the lines the findings record names; no Murcia figure changes; any changed comparison figure is listed in the report with old value, new value and the source row read.

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
  FACT stated in prose carries its URL and "Retrieved 2026-10"; a cross-check on a
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

