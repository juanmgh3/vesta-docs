# T11 — brief

- [x] **T11 — Fix pass on T4/T5 review findings** (structural). In `murcia-market.md`
  §4–§7, close F-021 to F-040 at the lines `specs/murcia-market/review/findings.md`
  names, each as that entry describes. Source re-reads are allowed only for these
  three and each result is reported with what was read: (F-031) re-read Google Trends
  for the regional table and state per column which request it came from (one
  two-term comparison, or single-term requests), correcting any mis-transcribed cell;
  (F-034) re-read the AEMET station page and say whether the Year row is AEMET's
  published annual value or a sum of the monthly rows, correcting any mis-transcribed
  monthly cell; (review note on §7.1) re-read the regional tourism register figure for
  San Javier, which matches INE's count to the dwelling, and correct it or state that
  both sources were read and agree. Everything else is wording, labels and
  arithmetic on rows already in the file: no provider, price or count is added.
  Where a finding offers two fixes, take the one that claims less. _Verify:_ `grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"` (must print 0) and `grep -c "Spain proxy" business/research/murcia-market.md`.
  Accept: each of F-021 to F-040 is addressed; every changed figure is listed in the report with old value, new value and the source read; §1–§3 are untouched.

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

