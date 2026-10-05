# T5 — brief

- [x] **T5 — Demand signals, seasonality and acquisition** (structural). Fill §6 and
  §7. §6: Google Trends regional index for the core terms, Región de Murcia against
  Andalucía, Comunitat Valenciana, Madrid (method of `trends-keywords-addendum.md`);
  any Murcia-geo keyword volume or CPC obtainable from free tools, else NOT FOUND with
  the national band carried; climate inputs that matter to the service (AEMET normals
  for Murcia: monthly temperature, relative humidity, rain days) read against drying
  time and summer/winter seasonality. §7: B2B pool sized from official counts (tourist
  dwellings, hotel establishments and beds, in the municipality and on the Mar Menor /
  coast within R3; university residences), and local acquisition channels that exist
  (local press and radio with advertising, large community groups, neighbourhood
  associations), each with what it is and why it is plausible, labelled HYPOTHESIS
  where untested. _Verify:_ `grep -c "^### [67]\." business/research/murcia-market.md`.
  Accept: every Trends or keyword figure states tool, geo filter and date, or is NOT FOUND; climate table has 12 months from AEMET; B2B counts are FACT with source or NOT FOUND.

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

