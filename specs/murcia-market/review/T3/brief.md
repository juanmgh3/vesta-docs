# T3 — brief

- [x] **T3 — Income, premium zones and segment sizing** (structural). Fill §2 and §3.
  §2: net income per household and per person, INE ADRH latest, for Murcia
  municipality with second source, set against Granada, Valencia city, Madrid region
  and national (same table as `granada-market.md` §6); income by district / census
  section to name the plausible premium zones inside the municipality (candidates to
  test, not assume: La Flota, Juan Carlos I, Santa María de Gracia, Vistalegre, centro)
  and the high-income residential developments in the belt (candidates: Altorreal, La
  Alcayna, Montepinar); zones follow the method of `market-dossier.md` §7. §3: segment
  sizing per radius — 45–65 population, respiratory allergy and dust-mite
  sensitisation (look for a Región de Murcia / Mediterranean-coast figure in
  Alergológica or SEAIC before falling back to national), pet-owning households
  (regional registry figure if one exists, else national ANFAAC anchor). _Verify:_ `grep -c "^### [23]\." business/research/murcia-market.md`.
  Accept: the income comparison table has all five geographies with labels; at least four zones are named with an income figure or NOT FOUND each; every segment product is labelled ESTIMATE with its rate and denominator shown.

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

