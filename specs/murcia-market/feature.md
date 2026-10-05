# murcia-market — feature

mode: gated

## Objective

Produce `business/research/murcia-market.md`: the sourced market research for the
real operating city, Murcia capital and its surroundings. It replaces the Granada
scenario as the parameter source for the economic model, the bank dossier and both
reports, and it is deeper than `granada-market.md` on every axis (geography,
competition, income by zone, local costs, financing landscape).

## Problem

The founder has relocated to Murcia capital (stated 2026-10-05). No document in this
repo describes that market: `founder-inputs.md` still lists the city as UNDECIDED
(Madrid / Valencia), the two reports compare Madrid vs Valencia, and the bank dossier
runs on a Granada parameter set. Any text or figure written now would rest on another
city's numbers. The Granada pass also left known holes that a bank reader can
challenge: 7 competitors against 15–16 for Madrid/Valencia, a borrowed household
divisor, a borrowed 45–65 share, a single-source income figure, no zone-level income,
and no local keyword or CPC data.

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

## Tasks

- [x] **T1 — City decision and file skeleton** (structural). Append to
  `founder-inputs.md` a section `## Addendum 2026-10-05 — operating city resolved`:
  operating base Murcia capital (CAPTURED), service area "Murcia and surroundings"
  (CAPTURED; radii to be proposed by research), launch window no longer gated by
  relocation (CAPTURED), and mark Block 4 and consolidated UNDECIDED items 2 and 4 as
  superseded by the addendum. Create `murcia-market.md` with the header block (purpose,
  label standard, method, what is reused from `market-dossier.md`) and the empty
  numbered sections 1–10 named as in T2–T7. _Verify:_ `grep -c "^## " business/research/murcia-market.md` and `grep -c "Addendum 2026-10-05" business/research/founder-inputs.md`.
  Accept: the skeleton has the ten `## N.` sections and the addendum exists; no prior line of `founder-inputs.md` is deleted (`git diff` shows additions and superseded marks only).
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
- [ ] **T3 — Income, premium zones and segment sizing** (structural). Fill §2 and §3.
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
- [ ] **T4 — Competition sweep and local price map** (structural). Fill §4 and §5 at
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
- [ ] **T5 — Demand signals, seasonality and acquisition** (structural). Fill §6 and
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
- [ ] **T6 — Local operating costs, access rules and financing landscape** (structural).
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
- [ ] **T7 — Headline parameter set, deltas, gaps and sources** (structural). Fill §9
  and §10. §9: table M1…Mn of load-bearing inputs for the model, each tracing to a
  section, with label and second-source status (shape of `granada-market.md` §7); a
  Murcia vs Granada delta table for every parameter the Granada scenario used (pool,
  households, income, piece prices, competitor count, CPC), so the model re-run is a
  parameter swap; a "Gaps and what closes them" list (shape of `market-dossier.md`
  §11), ranked by how much each gap moves the model. §10: sources appendix by section.
  Re-open every load-bearing FACT of §9 at its source and confirm the figure; record
  the result per row. _Verify:_ `grep -c "^| M[0-9]" business/research/murcia-market.md`.
  Accept: Scenario: traceable headline — WHEN any row of the §9 table is picked THEN it names its section, its label and its source status, and a reader can reach the source URL in §10; the delta table covers every G-row of `granada-market.md` §7.

## Checks

- `grep -c "^## [0-9]" business/research/murcia-market.md`
- `grep -c "NOT FOUND" business/research/murcia-market.md`
- `grep -c "https\?://" business/research/murcia-market.md`
- `grep -n -i "TODO\|TBD\|lorem" business/research/murcia-market.md`
- `git diff --stat HEAD -- business/research/granada-market.md business/research/economic-model.md business/bank business/reports`

## Progress

- 2026-10-05 approved (gated). Founder-side note at approval: the end deliverable is a
  complete, polished PDF built on this research; that PDF is the next feature.
- 2026-10-05 T1 committed (e198c22).
- 2026-10-05 stop at T2: reviewer raised open Critical F-003 (single-source ring
  figures labelled plain FACT). T2 not committed; run halted for the human.
- 2026-10-05 human decision: add a fix task and continue. Recorded as T8, placed
  after T2 (the lint accepts only numeric task ids, so not "T2a").

## Evidence

| Task | Test | Layer | Safety net | RED | GREEN | Triangulate | Refactor |
|---|---|---|---|---|---|---|---|
| T1 | structural — `grep -c "^## " business/research/murcia-market.md`; `grep -c "Addendum 2026-10-05" business/research/founder-inputs.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `grep: business/research/murcia-market.md: No such file or directory` exit 2, addendum count `0` exit 1 | `10` exit 0; `4` exit 0; `git diff --numstat HEAD`: `15	0	business/research/founder-inputs.md` | Triangulation skipped: structural skeleton, no behaviour to triangulate; TODO/TBD/lorem grep empty (exit 1) | none |
| T2 | structural — `grep -c "^### 1\." business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `0` exit 1 | `7` exit 0; `git diff --numstat HEAD`: `191	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `7` | none |
| T8 | structural — `grep -c "provisional" business/research/murcia-market.md`; `grep -c "SUPERSEDED 2026-10-05" business/research/founder-inputs.md` | docs | n/a — docs repo, no package.json / tsc / eslint; pre-change counts `5` exit 0, `3` exit 0 | n/a (structural) | `12` exit 0; `5` exit 0; `git diff --numstat HEAD -- business/research/founder-inputs.md`: `3	0	business/research/founder-inputs.md` | Triangulation skipped: text-only fix pass; numeric-token diff before/after shows only added dates, table ids, URLs and § refs, plus the dropped R1 upper bound (`49,600–53,500` → `49,600`, `2.6` removed) per F-004; TODO/TBD/lorem grep empty (exit 1) | none |

## Briefing

**What we decided.** One new research file for Murcia, built in seven passes, plus a dated note in the founder inputs saying the city is now decided. HECHO: nothing in the repo describes Murcia today — the reports compare Madrid and Valencia and the bank dossier uses Granada figures (read here, 139 mentions of Granada across 6 files, none of Murcia). ESTIMACIÓN: the pass is roughly twice the depth of the Granada one, derived from its scope — 15+ competitors instead of 7, three service rings instead of two, income by neighbourhood, local rules (low-emission zone, parking) and a financing map that Granada never had. SUPOSICIÓN: that the demand curves and the price architecture already chosen still hold in Murcia; this file does not test that, the model re-run that follows it does.

**If this is wrong.** You would see it as a research file that reads thin or leans on borrowed national figures where a Murcia one exists. Nothing else in the repo changes in this feature, so the fix is another pass on the weak section; no report, dossier or model has to be undone.

**Three questions to ask this spec.**
1. "Does this give me the new bank dossier?" — No. It gives the numbers the dossier needs. Re-running the model and regenerating dossier and reports for Murcia is the next feature, and it is a parameter swap once this exists.
2. "How do I know a figure is not invented?" — Every figure carries a label and a link. Load-bearing ones need two independent sources, the last task re-opens each of them, and what could not be found is written NOT FOUND instead of estimated silently.
3. "Why three rings and not just 'Murcia'?" — Because the municipality is spread over about 54 pedanías and the belt towns are 10–15 minutes away while Cartagena or the Mar Menor are 40–50. The ring decides how many services fit in a day and what travel costs, which is what moves the margin.
