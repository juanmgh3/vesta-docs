# T6 — brief

- [x] **T6 — Local operating costs, access rules and financing landscape** (structural).
  Fill §8. Autónomo cuota for an existing alta moved to Región de Murcia, and whether
  the regional "cuota cero" aid applies to this case (state the eligibility condition
  read on the CARM source; do not conclude eligibility); Murcia low-emission zone (ZBE)
  status, perimeter and what it requires of a private car used for work; regulated
  street parking (ORA) zones and tariffs in the core; fuel price reference for the
  travel-cost line; revalidate the travel-per-visit input of the model (€3.5) against
  the R1/R2 distances of T2 as an ESTIMATE. Financing landscape for the bank dossier:
  regional instruments for a new autónomo (INFO Murcia, ICREF, the regional mutual
  guarantee society, ENISA and ICO lines as national reference, microcredit lines of
  banks with strong local presence), each with instrument, amount range, conditions
  and source. _Verify:_ `grep -c "^### 8\." business/research/murcia-market.md`.
  Accept: each cost or rule row is FACT with an official source or NOT FOUND; at least five financing instruments are listed with conditions read on the issuer's page; no eligibility is asserted for the founder.

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

