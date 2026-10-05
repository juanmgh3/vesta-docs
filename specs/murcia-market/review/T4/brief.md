# T4 — brief

- [x] **T4 — Competition sweep and local price map** (structural). Fill §4 and §5 at
  Madrid/Valencia depth: at least 15 providers profiled, or every provider found plus
  an explicit statement that the field is exhausted and with which searches. Search
  terms logged (colchones, sofás, tapicerías, "a domicilio", Murcia, Molina, Alcantarilla,
  Cartagena; plus Google Maps category results and marketplaces Cronoshare /
  Habitissimo). Per provider: type (local independent / national chain / franchise /
  generalist), services, published prices by piece and size, travel policy and area
  served, minimum order, Google rating and review count, trust signals (lab
  certification, guarantees, B2B page, method or machine named — flag any Hyla-based
  operator), price transparency (published vs quote-only). §5: price map by service
  (colchón individual / matrimonio / king, sofá 2 / 3 / chaise longue, sillón, silla)
  with Murcia range, median where n≥3, and the Madrid/Valencia cluster and Granada
  figure beside it; density and white-space reading labelled ANALYSIS. _Verify:_ `grep -c "^| \*\*" business/research/murcia-market.md`.
  Accept: Scenario: sweep depth — WHEN the provider table is counted THEN it has ≥15 rows or an exhaustion statement listing the searches run; every price cell is a figure read on the provider's page with URL, or NOT FOUND.

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

