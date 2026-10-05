# T2 — brief

- [x] **T2 — Geography, population, households, service radii** (structural). Fill §1.
  Murcia municipality population (INE Padrón, latest) with second source; split urban
  core vs pedanías (the municipality has ~54 pedanías; largest ones named with
  population); households from INE Censo 2021 / CREM directly, and average household
  size measured for Murcia, not borrowed; age structure with the 45–65 share measured
  for Murcia; housing stock (share of main vs secondary dwellings, flats vs houses) if
  published. Ring table of surrounding municipalities with population, road distance
  and typical drive time from Murcia centre: inner belt (Alcantarilla, Molina de
  Segura, Las Torres de Cotillas, Santomera, Beniel, Alguazas, Ceutí, Lorquí,
  Archena), outer ring (Orihuela, Cartagena, Mar Menor municipalities, Torrevieja,
  Lorca, Cieza). Propose radii R1 (urban core) / R2 (municipality + inner belt) / R3
  (outer ring, occasional or surcharge) with population and households each, and say
  which ring a single operator at 4 services/day can serve. _Verify:_ `grep -c "^### 1\." business/research/murcia-market.md`.
  Accept: population and household figures are FACT with two sources or declared provisional; household size and 45–65 share are Murcia-measured or explicitly NOT FOUND with the borrowed proxy shown; every ring row has population, km and minutes or NOT FOUND.

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

