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
- [x] **T9 — Fix pass on T3 review findings** (structural). In `murcia-market.md`
  §2–§3, at the lines the findings record names. (F-008) Relabel the Murcia income row
  "FACT (1 source), provisional" and state that the AEAT cross-check supports only the
  per-person ordering, not the per-household one. (F-009) Re-open the INE ADRH table at
  its source for the Comunidad de Madrid net income per household and per person, 2023:
  if the figure read differs from the cell, correct the cell and every gap computed
  from it; if the source confirms €48,806, keep it, label the cell CONFLICTING against
  `market-dossier.md` §5.3 (€43,037) and state which table, row and year was read; do
  not edit `market-dossier.md`. (F-010) Apply the §1.1 republication rule to the
  comparison rows: an INE press release is not a second source for an INE table; mark
  National, Granada, Valencia and the AEAT row "FACT (1 source), provisional" unless a
  second independent source is cited. (F-011) Recompute dogs per inhabitant with a
  Spain-wide denominator from INE, cited, or flag the common-territory scope
  explicitly; flag the same scope on the AEAT "National" column. (F-012) State one
  criterion for zone verdicts (tie it to the file's 1.5× high-income cut-off) and apply
  it to all eight zones; Vistalegre and La Flota must come out consistent with it.
  (F-013) Correct the sentence on which cells of the ring summary are ESTIMATE.
  (F-014) Correct the Valencia per-person gap to the computed figure. This is the only
  task in this pass allowed new source reads, and only for F-009 and F-011. _Verify:_ `grep -c "provisional" business/research/murcia-market.md` and `grep -c "CONFLICTING" business/research/murcia-market.md`.
  Accept: each of F-008 to F-014 is addressed at the lines the findings record names; no Murcia figure changes; any changed comparison figure is listed in the report with old value, new value and the source row read.
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
- [ ] **T11 — Fix pass on T4/T5 review findings** (structural). In `murcia-market.md`
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
  the result per row. Close every finding still `open` in
  `specs/murcia-market/review/findings.md` at the lines it names (at the time of
  writing: F-007 confirm or relabel two attached sources; F-019 relabel the three
  "FACT (2 publications)" pedanía rows; F-020 relabel the 45–64 row and reword its
  "two sources" verdict), plus any raised by T4–T6. _Verify:_ `grep -c "^| M[0-9]" business/research/murcia-market.md`.
  Accept: Scenario: traceable headline — WHEN any row of the §9 table is picked THEN it names its section, its label and its source status, and a reader can reach the source URL in §10; the delta table covers every G-row of `granada-market.md` §7.

## Checks

- `grep -c "^## [0-9]" business/research/murcia-market.md`
- `grep -c "NOT FOUND" business/research/murcia-market.md`
- `grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"`
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
- 2026-10-05 T2 + T8 committed (d829447); F-001 to F-006 fixed, F-007 Minor open for T7.
- 2026-10-05 stop at T3: reviewer raised open Critical F-008 (Murcia income row not
  marked provisional, AEAT cross-check overstated). T3 not committed; run halted.
- 2026-10-05 human decision: add fix task T9 and continue. Standing authorization
  for the rest of this run: when an open Critical is about labelling or wording and
  changes no figure, the orchestrator adds the fix task and continues without
  stopping; a Critical that questions a figure or a source still stops the run.
  The exact label wording was added to Constraints for T4–T7.
- 2026-10-05 T9 reviewed: F-008 to F-014 fixed; new open Critical F-015 (labelling,
  no figure in question). Under the standing authorization, fix task T10 added
  (whole-file label sweep, proven by a grep now also in Checks); run continues.
- 2026-10-05 T3 + T9 + T10 committed (2e0abed); T4 committed (e76ee7d), no Critical.
- 2026-10-05 T5 reviewed, no Critical. Orchestrator decision: fix task T11 added
  before T6 for the T4/T5 findings (F-021 to F-040), so T7 keeps to the headline
  table, the source re-opening and F-007, F-019, F-020.

## Evidence

| Task | Test | Layer | Safety net | RED | GREEN | Triangulate | Refactor |
|---|---|---|---|---|---|---|---|
| T1 | structural — `grep -c "^## " business/research/murcia-market.md`; `grep -c "Addendum 2026-10-05" business/research/founder-inputs.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `grep: business/research/murcia-market.md: No such file or directory` exit 2, addendum count `0` exit 1 | `10` exit 0; `4` exit 0; `git diff --numstat HEAD`: `15	0	business/research/founder-inputs.md` | Triangulation skipped: structural skeleton, no behaviour to triangulate; TODO/TBD/lorem grep empty (exit 1) | none |
| T2 | structural — `grep -c "^### 1\." business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `0` exit 1 | `7` exit 0; `git diff --numstat HEAD`: `191	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `7` | none |
| T8 | structural — `grep -c "provisional" business/research/murcia-market.md`; `grep -c "SUPERSEDED 2026-10-05" business/research/founder-inputs.md` | docs | n/a — docs repo, no package.json / tsc / eslint; pre-change counts `5` exit 0, `3` exit 0 | n/a (structural) | `12` exit 0; `5` exit 0; `git diff --numstat HEAD -- business/research/founder-inputs.md`: `3	0	business/research/founder-inputs.md` | Triangulation skipped: text-only fix pass; numeric-token diff before/after shows only added dates, table ids, URLs and § refs, plus the dropped R1 upper bound (`49,600–53,500` → `49,600`, `2.6` removed) per F-004; TODO/TBD/lorem grep empty (exit 1) | none |
| T3 | structural — `grep -c "^### [23]\." business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `0` exit 1 | `6` exit 0; `git diff --numstat HEAD`: `265	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `11`; protected-files diff stat empty | none |
| T9 | structural — `grep -c "provisional" business/research/murcia-market.md`; `grep -c "CONFLICTING" business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; pre-change counts `15` exit 0, `1` exit 0 (T3 uncommitted by design) | n/a (structural) | `18` exit 0; `3` exit 0 | Triangulation skipped: text fix pass; F-009 re-read INE 53689 confirms €48,806 / €18,142 (no cell changed); F-011 national dogs per inhabitant ≈0.20 → ≈0.19 (denominator 45,678,948 AEAT → 48,320,520 INE 56940, 1-Jul-2023); zone ratios recomputed (1.71, 1.37, 1.28, 1.17, 1.01, 0.90, 1.49, 1.69); TODO/TBD/lorem grep empty (exit 1); protected-files diff stat empty | none |
| T10 | structural — `grep -n "FACT (1 source" business/research/murcia-market.md \| grep -v -c "FACT (1 source), provisional"` | docs | n/a — docs repo, no package.json / tsc / eslint; pre-change count `16` exit 0 (T3/T9 uncommitted by design) | n/a (structural) | `0` exit 1 (grep -c on zero matches) | Triangulation skipped: text-only label sweep; numeric-token diff before/after: only `56940` → `56934` (×2), plus the `1` of each new "FACT (1 source)" label and `ECP320` (series code); TODO/TBD/lorem grep empty (exit 1); protected-files diff stat empty | none |
| T4 | structural — `grep -c "^\| \*\*" business/research/murcia-market.md` (Scenario: sweep depth) | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `14` exit 0 (bold rows of §1–§3) | `34` exit 0 (14 + 20 provider rows); `git diff --numstat HEAD`: `158	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; label grep `0` exit 1; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `33`; protected-files diff stat empty | none |
| T5 | structural — `grep -c "^### [67]\." business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `0` exit 1 | `8` exit 0; `git diff --numstat HEAD`: `239	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; label grep `0` exit 1; no FACT label ends a line; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `46`; protected-files diff stat empty | none |

## Briefing

**What we decided.** One new research file for Murcia, built in seven passes, plus a dated note in the founder inputs saying the city is now decided. HECHO: nothing in the repo describes Murcia today — the reports compare Madrid and Valencia and the bank dossier uses Granada figures (read here, 139 mentions of Granada across 6 files, none of Murcia). ESTIMACIÓN: the pass is roughly twice the depth of the Granada one, derived from its scope — 15+ competitors instead of 7, three service rings instead of two, income by neighbourhood, local rules (low-emission zone, parking) and a financing map that Granada never had. SUPOSICIÓN: that the demand curves and the price architecture already chosen still hold in Murcia; this file does not test that, the model re-run that follows it does.

**If this is wrong.** You would see it as a research file that reads thin or leans on borrowed national figures where a Murcia one exists. Nothing else in the repo changes in this feature, so the fix is another pass on the weak section; no report, dossier or model has to be undone.

**Three questions to ask this spec.**
1. "Does this give me the new bank dossier?" — No. It gives the numbers the dossier needs. Re-running the model and regenerating dossier and reports for Murcia is the next feature, and it is a parameter swap once this exists.
2. "How do I know a figure is not invented?" — Every figure carries a label and a link. Load-bearing ones need two independent sources, the last task re-opens each of them, and what could not be found is written NOT FOUND instead of estimated silently.
3. "Why three rings and not just 'Murcia'?" — Because the municipality is spread over about 54 pedanías and the belt towns are 10–15 minutes away while Cartagena or the Mar Menor are 40–50. The ring decides how many services fit in a day and what travel costs, which is what moves the margin.
