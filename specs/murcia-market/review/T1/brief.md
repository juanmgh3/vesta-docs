# T1 — brief

- [x] **T1 — City decision and file skeleton** (structural). Append to
  `founder-inputs.md` a section `## Addendum 2026-10-05 — operating city resolved`:
  operating base Murcia capital (CAPTURED), service area "Murcia and surroundings"
  (CAPTURED; radii to be proposed by research), launch window no longer gated by
  relocation (CAPTURED), and mark Block 4 and consolidated UNDECIDED items 2 and 4 as
  superseded by the addendum. Create `murcia-market.md` with the header block (purpose,
  label standard, method, what is reused from `market-dossier.md`) and the empty
  numbered sections 1–10 named as in T2–T7. _Verify:_ `grep -c "^## " business/research/murcia-market.md` and `grep -c "Addendum 2026-10-05" business/research/founder-inputs.md`.
  Accept: the skeleton has the ten `## N.` sections and the addendum exists; no prior line of `founder-inputs.md` is deleted (`git diff` shows additions and superseded marks only).

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

