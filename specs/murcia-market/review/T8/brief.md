# T8 — brief

- [x] **T8 — Fix pass on T1/T2 review findings** (structural). Text corrections only,
  no new research, no figure changed. In `murcia-market.md` §1: (F-003) relabel every
  ring population and household-size row that rests on one source as "FACT (1 source),
  provisional", including R1's 138,997 in the radii table, and remove the claim that a
  CREM republication of INE confirms a figure, so the file obeys its own rule in §1.1;
  (F-004) drop the R1 upper bound derived from the district-level 2.6 divisor, or keep
  it only as an explicitly labelled HYPOTHESIS proxy, and remove the contradiction with
  the statement that the district table is not used to size R1; (F-005) add the
  retrieval date (2026-10) to every FACT row, add the source URL to the 65+ share and
  mean-age rows, and give a source to the prose FACTs (regional 2.7 "highest in Spain",
  one-person shares for Torrevieja and Los Alcázares) or relabel them; (F-006) reword
  the population verdict cell to "two publications of one register". In
  `founder-inputs.md`: (F-001) add a superseded mark under the Block 5 "Launch window"
  item and widen the addendum's scope sentence to name it; (F-002) add a superseded
  mark under FLAG-RESEARCH D pointing to `murcia-market.md` §2. Additions only in
  `founder-inputs.md`. _Verify:_ `grep -c "provisional" business/research/murcia-market.md` and `grep -c "SUPERSEDED 2026-10-05" business/research/founder-inputs.md`.
  Accept: each of F-001 to F-006 is addressed at the lines the findings record names; no population, household, distance or percentage figure differs from the T2 text; `founder-inputs.md` diff has no deleted line.

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

