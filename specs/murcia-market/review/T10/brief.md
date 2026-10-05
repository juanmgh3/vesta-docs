# T10 — brief

- [x] **T10 — Label sweep of §1–§3** (structural). Text corrections only, no new
  research, no figure changed. Whole-file sweep of `murcia-market.md`, not only the
  lines the findings name: (F-015, F-016) every single-source FACT label, in tables,
  captions and prose, reads exactly "FACT (1 source), provisional", with any qualifier
  (source name, field-work year, "read directly") moved after it; the label is never
  split across a line break, so a grep can prove it; a bare "FACT" in a caption that
  covers single-source figures gets the full wording. (F-017) Name the AEAT mean
  "common-territory mean" wherever it is compared, never "national". (F-018) Cite the
  INE table the 1-Jul-2023 Spain population was actually read from (56934), keeping the
  series code. _Verify:_ `grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"` (must print 0).
  Accept: the verify command prints 0; F-015 to F-018 are addressed; a numeric-token diff of the file before and after shows no figure changed except the table id 56940 → 56934.

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

