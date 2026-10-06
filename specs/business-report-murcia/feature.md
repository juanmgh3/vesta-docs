# business-report-murcia — feature

mode: ungated

## Objective

One complete business report for the founder, in Spanish, as a self-contained HTML and a
PDF: `business/reports/business-report-murcia.html` and `.pdf`. It merges the economic
and marketing reports into a single document rebuilt on the Murcia research
(`business/research/murcia-market.md`), with launch in mid-October 2026, no external
financing and no new purchases. It replaces the Madrid/Valencia reports and the Granada
bank dossier as the current deliverable; those stay in the repo, marked superseded.

## Problem

The founder launches in Murcia in about ten days with the equipment already paid. Every
deliverable in the repo describes another city, assumes a loan, and splits what he needs
across two reports and a dossier. He needs one document that covers the business inside
and out: what to charge and where to work from day one, who the competitors are and at
what price, who the customer is and how to reach them, what each service costs to
deliver, how the first year and the following ones look under honest scenarios, when to
hire and buy a second machine, and what is still unknown. It must read as written for his
case by someone who did the work, not as generated filler.

## Scope

- business/research/founder-inputs.md
- business/research/murcia-model.mjs
- business/research/murcia-model.md
- business/research/murcia-model-tables.md
- business/research/murcia-model-data.json
- business/reports/_template/build-report.mjs
- business/reports/_template/build-charts.mjs
- business/reports/_src/murcia/ch-00-cover-toc.html
- business/reports/_src/murcia/ch-01-resumen.html
- business/reports/_src/murcia/ch-02-arranque.html
- business/reports/_src/murcia/ch-03-empresa.html
- business/reports/_src/murcia/ch-04-mercado.html
- business/reports/_src/murcia/ch-05-competencia.html
- business/reports/_src/murcia/ch-06-publico.html
- business/reports/_src/murcia/ch-07-precios.html
- business/reports/_src/murcia/ch-08-captacion.html
- business/reports/_src/murcia/ch-09-costes.html
- business/reports/_src/murcia/ch-10-proyecciones.html
- business/reports/_src/murcia/ch-11-crecimiento.html
- business/reports/_src/murcia/ch-12-riesgos.html
- business/reports/_src/murcia/ch-13-glosario-fuentes.html
- business/reports/_src/murcia/charts.html
- business/reports/business-report-murcia.html
- business/reports/business-report-murcia.pdf
- business/reports/CHECK-murcia.md
- README.md
- specs/business-report-murcia/feature.md

## Constraints

- Audience: the founder (referred to by role only, never by name). Spanish prose, written
  for a reader aged 45–65 who runs the business; code, identifiers and commits in English.
- Prose chapters (T4–T7) are written by the orchestrator in the main thread, per
  CLAUDE.md ("trabajo creativo o de criterio lo hace el modelo principal"); the
  `estilo-es` skill is loaded before writing. Each prose task still goes through the
  review package, reviewer and commit steps. Model, build, charts, render and check
  tasks (T1–T3, T8) go to the executor as usual.
- No filler: every paragraph says something specific to this business or this city, or
  it is cut. No sentence that would be true of any company. No lists of three for
  rhythm. Every load-bearing figure carries its evidence chip (FACT / ESTIMATE /
  HYPOTHESIS / ANALYSIS / NOT FOUND) carried verbatim from the research files, never
  re-graded. What is unknown is said as unknown, with what would resolve it.
- Numbers come only from `murcia-market.md`, `murcia-model.md` /
  `murcia-model-tables.md`, `pricing-decision.md`, `marketing-research-addendum.md`,
  `market-dossier.md` (national rates only), `founder-inputs.md` and
  `aids-and-eu-branding.md` (Juan's research note of 2026-10-06 on aids and the Kit
  Digital publicity obligation; read, not edited). The report never
  contains a figure that is not in one of those files; prose is written around the
  tables, not the other way round.
- Decisions carried into the model, each stated in the report as a recommendation open
  to the founder: service area R2 (municipality + inner belt) with travel included,
  R3 (coast, Cartagena, Lorca) only with surcharge or minimum order; price grids A/B/C
  from `pricing-decision.md` unchanged, no Granada −8% adjustment; three architectures
  compared with B recommended; no loan, no purchases, break-even urgency; month 1 =
  October 2026.
- Founder facts not recorded are modelled as visible assumptions and listed in ch. 12:
  alta date and region (affects tarifa plana months left and Cuota Cero), vehicle type
  and consumption, hours he can work.
- Template: reuse `business/reports/_template/report.css`, `embedded-assets.css` and
  the component classes documented in the README; no new component without documenting
  it there; flat design, gold hairlines only, chips as the signature. Charts are inline
  SVG with `.chart*` classes, generated from `murcia-model-data.json` by a script so
  every chart value traces to the model.
- Chapter sources live as fragments in `business/reports/_src/murcia/`; the shipped
  report is one self-contained HTML built by `build-report.mjs` (inlines CSS, assets,
  charts). The PDF is rendered with the README's headless-Chrome recipe.
- `economic-model.md`, `economic-model-engine.mjs`, `granada-market.md`,
  `bank-granada-scenario.mjs`, the two old reports and the bank dossier are not edited;
  README marks them superseded by this report.
- Never open, quote or reference `founder-calibration.private.md`.
- Zero comments in code by default; documentation lives in `murcia-model.md` and the
  template README.

## Tasks

- [x] **T1 — Founder inputs addendum and README** (structural). Append to
  `founder-inputs.md` a section `## Addendum 2026-10-06 — launch and financing`: launch
  mid-October 2026, month 1 = October 2026 (CAPTURED); no external financing, no new
  purchases, operates with equipment already owned (CAPTURED); alta date and region
  still TO-CONFIRM, with the two consequences named (tarifa plana months left, Cuota
  Cero window); mark the Block 5 launch-window item and the Granada bank scenario as
  superseded by this addendum. Rewrite `README.md` so it names
  `business/reports/business-report-murcia.{html,pdf}` as the current deliverable, lists
  the superseded files (two reports, bank dossier, Granada research) as kept for history,
  and lists `business/reports/_src/` and the two build scripts. Additions only in
  `founder-inputs.md`. _Verify:_ `grep -c "Addendum 2026-10-06" business/research/founder-inputs.md` and `grep -c "business-report-murcia" README.md`.
  Accept: both counts are ≥1; `git diff --numstat HEAD -- business/research/founder-inputs.md` shows 0 deletions.
- [x] **T2 — Murcia economic model** (structural). Write `murcia-model.mjs`, derived from
  `economic-model-engine.mjs`, that computes and writes `murcia-model-tables.md`
  (markdown tables only) and `murcia-model-data.json` (the same numbers as data for the
  charts). Inputs, each with label and source, listed in `murcia-model.md` §1: prices
  I1–I3 unchanged from `economic-model.md`; IVA 21%; consumables €1.5; travel per visit
  ESTIMATE €4.5 central (band €3.5–6.0) derived from `murcia-market.md` §8.5 with a
  stated R1/R2 job mix; parking ESTIMATE €1.0 per visit average (share of jobs in SER
  sectors × one ticket, `murcia-market.md` §8.3), stated as HYPOTHESIS on the share;
  fixed costs €186/month with tarifa plana, stepping to €356 after `FLAT_RATE_MONTHS_LEFT`
  months (HYPOTHESIS, default 9, alta date unrecorded); RC €25; capacity 88 pieces/month;
  demand curves conservador/realista/optimista from `economic-model.md` §2 unchanged
  (city-agnostic), with month 1 = October 2026 and calendar months labelled; no loan.
  Outputs: year 1 monthly P&L and cash for B × realista (main track), A and C × realista,
  sensitivity envelope (3 architectures × 3 demand bands, year-1 headline), years 2–3
  annual, years 4–8 strategic trajectory with the founder→owner milestone (second
  operator at the trigger `economic-model.md` §7 defines, re-derived), structural
  break-even in pieces/month and visits/month per architecture, cash trough per
  scenario with no buffer, contribution per piece and per visit, ratios. `murcia-model.md`
  carries the input sheet, derivations and a "what changed vs economic-model.md" list.
  Also close F-001 and F-002 in `README.md`: add `economic-model.md` and
  `economic-model-engine.mjs` to the superseded list and drop the "(Madrid/Valencia)"
  label from the economic report line.
  Running the script twice must produce identical files. _Verify:_ `node business/research/murcia-model.mjs && git diff --exit-code --stat -- business/research/murcia-model-tables.md business/research/murcia-model-data.json; echo "exit $?"`.
  Accept: Scenario: reproducible model — WHEN the script runs on a clean checkout THEN the tables and JSON are byte-identical to the committed ones (exit 0); every input row in `murcia-model.md` §1 has a label and a source file and section; the year-1 table starts at Oct-2026 and ends at Sep-2027.
- [x] **T9 — Model fix pass** (structural). In `murcia-model.mjs` and `murcia-model.md`,
  close F-004 to F-008 at the lines the findings record names: (F-004) the cash trough
  per scenario includes the Oct-2027 payment of the Jul–Sep IVA, so it is the lowest
  cash point the founder must be able to cover; state it in §2; (F-005) §3 lists the
  hire-trigger change (annual average) and says troughs are not comparable with the old
  reports because of the IVA timing; I22 carries the caveat; (F-006) §2.6 states the
  basis of the single-piece paid visit figure and names the pricing-decision §4.2 figure
  with its different basis so the report can quote either knowingly; (F-007) the
  owner-state milestone is re-checked every year Y5–Y8 and the table says in which
  years it holds; (F-008) every figure in the JSON `market` block carries its label and
  source section as fields, and the pack price keeps its "~" as an `approx` flag.
  Regenerate the tables and JSON; the script stays deterministic. _Verify:_ `node business/research/murcia-model.mjs && node business/research/murcia-model.mjs && git status --short -- business/research/murcia-model-tables.md business/research/murcia-model-data.json; echo "exit $?"`.
  Accept: F-004 to F-008 are addressed; the trough row for A × conservador is ≤ −974; the B × realista year-1 result is unchanged at 4,768 unless a fix changes an input, in which case the report lists old and new values.
- [x] **T3 — Report skeleton, build script and charts** (structural). Write
  `build-report.mjs`: reads `ch-*.html` in order from `_src/murcia/`, inlines
  `report.css` and `embedded-assets.css`, inlines the chart SVGs from `charts.html` where
  a fragment has `<!-- chart:ID -->`, and writes `business-report-murcia.html`; no
  external reference remains in the output. Write `build-charts.mjs`: reads
  `murcia-model-data.json` and writes `charts.html`, one inline SVG per chart using the
  `.chart*` classes, direct labels, open axes, no library: year-1 monthly result B ×
  realista; cumulative cash by scenario; break-even pieces vs capacity per architecture;
  sensitivity grid; years 1–8 trajectory; price map Murcia vs Madrid/Valencia vs Granada
  (values from `murcia-market.md` §5 carried into the JSON by T2 as a `market` block or
  hard-coded with their source in `murcia-model.md`; close F-009 by giving each Granada
  row the label and section its source states); service rings (population and
  travel cost per ring). Write `ch-00-cover-toc.html` (cover with title "Informe de
  negocio — Grupo Vesta · Murcia", subtitle, "Documento interno · octubre 2026", chip
  legend; TOC with the 13 chapters and `.toc__page` placeholders "—") and the thirteen
  `ch-NN-*.html` fragments each containing only its `.chapter` header (numeral, eyebrow,
  title) so the build runs end to end before prose exists. _Verify:_ `node business/reports/_template/build-charts.mjs && node business/reports/_template/build-report.mjs && grep -c "<svg" business/reports/business-report-murcia.html && grep -c 'href="http\|src="http\|url(http' business/reports/business-report-murcia.html; echo "exit $?"`.
  Accept: the build runs without error, the output has ≥7 inline SVG charts, zero external URL references, and the chapter headers appear in TOC order; every chart carries a `.figure-caption` with source and chip placeholder filled by the fragment.
- [x] **T4 — Chapters 1–3: resumen, arranque, empresa** (structural). Orchestrator
  writes `ch-01-resumen.html`, `ch-02-arranque.html`, `ch-03-empresa.html`. Ch. 1: the
  eight things the founder must know, each with its figure and chip, one page or two.
  Ch. 2: the first fortnight — opening prices per piece under the recommended
  architecture with the Murcia market median beside each; service area R2 with travel
  included and the R3 rule; what must be in place before the first job (RC insurance
  quote, Google Business Profile and the first reviews, SER parking in the centre, pack
  first offer, minimum order); the alta-date check and the Cuota Cero window. Ch. 3:
  the company and the service (catalogue, equipment owned, capacity, duration range,
  drying, operator solo, the path from operator to owner), from `founder-inputs.md`.
  _Verify:_ `node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-01-resumen.html business/reports/_src/murcia/ch-02-arranque.html business/reports/_src/murcia/ch-03-empresa.html && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-0[123]*.html; echo "exit $?"`.
  Accept: Scenario: traceable chapter — WHEN any figure in ch. 1–3 is picked THEN it appears with the same value and label in one of the source files named in Constraints; no placeholder text remains; the build still runs.
- [x] **T10 — Prose fix pass on chapters 1–3** (structural). Orchestrator closes
  F-017 to F-027 at the lines the findings record names: repair the placeholder grep in
  this document; correct the minimum-order row (no published minimum in Murcia; 60–70 €
  is Madrid's norm); re-grade every chip to its source label (ESTIMATE for the sweep
  counts, SER tariffs, the autónomo pass and the 186 € / 356 € fixed costs; ANALYSIS for
  the travel and method norms); add the specialist criterion to the review count; drop
  the chip from the PROPOSAL grid; remove the unsourced review projection; fix the
  Cartagena / Lorca round-trip times; restate the alta date as already done by July
  2026 with eligibility left open and the domicile-change case NOT FOUND; add the tarifa
  plana extension; make the owner state Y5–Y6 with the lapse from Y7; chip the unchipped
  figures; complete the Cuota Cero conditions; cut the filler lines and the repeated
  "no X sino Y"; fold in `aids-and-eu-branding.md` (three alta-gated aid lines, the
  Kit Digital bono held and its NextGenerationEU logo obligation). _Verify:_ `node business/reports/_template/build-report.mjs && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-0[123]*.html; echo "exit $?"`.
  Accept: every finding F-017 to F-027 is addressed at its line; no figure outside the sources named in Constraints remains; the build runs.
- [ ] **T5 — Chapters 4–6: mercado, competencia, público** (structural). Orchestrator
  writes `ch-04-mercado.html` (rings with population, households, drive times and
  travel cost; income and the premium sections; the segment per ring; the ring chart),
  `ch-05-competencia.html` (the 17 providers as a comparison table with price, travel
  policy, reviews and trust signals; the price map chart; what is missing in Murcia and
  what is not, with the sweep caveat), `ch-06-publico.html` (45–65, allergy, pets, trust
  cues and messages per segment from `marketing-research-addendum.md` R1–R4, adapted to
  Murcia's zones and B2B pool). _Verify:_ `node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-04-mercado.html business/reports/_src/murcia/ch-05-competencia.html business/reports/_src/murcia/ch-06-publico.html && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-0[456]*.html; echo "exit $?"`.
  Accept: Scenario: traceable chapter — WHEN any figure in ch. 4–6 is picked THEN it appears with the same value and label in `murcia-market.md` or the addendum; every competitor named is in `murcia-market.md` §4.2; no placeholder text remains.
- [ ] **T6 — Chapters 7–9: precios, captación, costes** (structural). Orchestrator
  writes `ch-07-precios.html` (three architectures with the Murcia medians beside, the
  pack imperative and the single-visit loss, B2B menu, recommendation B and why),
  `ch-08-captacion.html` (Google Ads entry budget and CAC band, the reviews flywheel,
  local channels as hypotheses to test in order, the Spain-proxy seasonality caveat),
  `ch-09-costes.html` (cost per service: consumables, travel by ring, parking; fixed
  costs timeline with the tarifa plana assumption; contribution per piece and per visit;
  the IVA wedge; IRPF not modelled). _Verify:_ `node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-07-precios.html business/reports/_src/murcia/ch-08-captacion.html business/reports/_src/murcia/ch-09-costes.html && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-0[789]*.html; echo "exit $?"`.
  Accept: Scenario: traceable chapter — WHEN any figure in ch. 7–9 is picked THEN it appears with the same value and label in `pricing-decision.md`, `murcia-model.md` / tables or `murcia-market.md`; no placeholder text remains.
- [ ] **T7 — Chapters 10–13: proyecciones, crecimiento, riesgos, glosario** (structural).
  Orchestrator writes `ch-10-proyecciones.html` (year 1 month by month from October 2026
  for B × realista with the chart; A and C beside; sensitivity grid; cash trough with no
  buffer; years 2–3; 4–8 trajectory; break-even), `ch-11-crecimiento.html` (triggers:
  when to hire operator 2, second machine cost, coast B2B as expansion, Cartagena as a
  separate market), `ch-12-riesgos.html` (assumptions list with what resolves each,
  gaps from `murcia-market.md` §9.3, RC, alta date, single-source figures), and
  `ch-13-glosario-fuentes.html` (terms; sources by chapter pointing to the research
  files and their URLs). Fill the TOC page numbers after a render pass. _Verify:_ `node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-10-proyecciones.html business/reports/_src/murcia/ch-11-crecimiento.html business/reports/_src/murcia/ch-12-riesgos.html && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-1[0-3]*.html; echo "exit $?"`.
  Accept: Scenario: traceable chapter — WHEN any figure in ch. 10–11 is picked THEN it appears in `murcia-model-tables.md`; every assumption in ch. 12 names what would resolve it; the TOC has no "—" placeholder left.
- [ ] **T8 — Render, check and ship** (structural). Render the PDF with the README's
  headless-Chrome recipe (absolute `file://` URL, `--virtual-time-budget`,
  `--no-pdf-header-footer`); confirm page count ≥40 and size ≥1 MB; run a number-trace
  pass like `CHECK.md`: extract text with `pdftotext -layout`, pick every figure in ch. 1,
  2, 7, 9 and 10 and trace it to its source file; check every chip label matches the
  source label; check no external URL, no placeholder, TOC page numbers match the PDF;
  close F-010 to F-015 in `build-charts.mjs` (open grid cells, gender agreement,
  estimate colour and caption for the Murcia median, two-decimal ranges, "oct. 2027"
  month format, chart figures read from JSON fields) and rebuild;
  write `CHECK-murcia.md` with the result table and fix in place only what is a
  transcription error (report any other mismatch as a finding, do not rewrite prose).
  _Verify:_ `python -c "import pypdf,sys;r=pypdf.PdfReader('business/reports/business-report-murcia.pdf');print(len(r.pages))" && grep -c "Match" business/reports/CHECK-murcia.md; echo "exit $?"`.
  Accept: Scenario: shipped PDF — WHEN the PDF is opened THEN it has ≥40 pages, a cover without page number, numbered content pages and a TOC whose numbers match; `CHECK-murcia.md` traces ≥30 figures with zero unexplained mismatches.

## Checks

- `node business/research/murcia-model.mjs && git diff --exit-code --stat -- business/research/murcia-model-tables.md business/research/murcia-model-data.json`
- `node business/reports/_template/build-charts.mjs && node business/reports/_template/build-report.mjs && git diff --exit-code --stat -- business/reports/business-report-murcia.html`
- `grep -c 'href="http\|src="http\|url(http' business/reports/business-report-murcia.html`
- `grep -n "TODO\|TBD\|lorem" business/reports/business-report-murcia.html`
- `python -c "import pypdf;r=pypdf.PdfReader('business/reports/business-report-murcia.pdf');print(len(r.pages))"`
- `git diff --stat HEAD -- business/research/economic-model.md business/research/economic-model-engine.mjs business/research/granada-market.md business/bank business/reports/economic-report.html business/reports/marketing-report.html`

## Progress

- 2026-10-06 ungated (Juan's word). Decisions carried: launch mid-October 2026, no
  financing, no purchases; prose written by the orchestrator per CLAUDE.md.
- 2026-10-06 T1 (adbb06f), T2 (32f7420), T9 (1c7dc66), T3 committed; no Critical so far.
- 2026-10-06 T4 written by the orchestrator (ch. 1–3). Verify greps made case-sensitive
  because `-i` matched the Spanish word "todo".
- 2026-10-06 T4 reviewed: three Critical (F-017 mangled grep, F-018 wrong-geography
  minimum, F-019 chips above source label) plus F-020 to F-027. All label or wording,
  no figure in question. Fixed by the orchestrator as T10 under the same rule Juan set
  on 2026-10-05 for labelling Criticals; run continues.
- 2026-10-06 T10 reviewed: F-017 to F-026 fixed, no Critical. F-028, F-029 (aid-condition
  summary sentences; Kit Digital logos as instruction) and F-030 raised; fixes applied in
  the same pass before commit, left `open` for the T5 reviewer to confirm. Juan's note
  `aids-and-eu-branding.md` (untracked, his) added to the allowed sources.

## Evidence

| Task | Test | Layer | Safety net | RED | GREEN | Triangulate | Refactor |
|---|---|---|---|---|---|---|---|
| T1 | grep counts + numstat (structural) | docs | no package.json, no runner; baseline counts 0 / 0 (exit 1) | n/a (structural) | `grep -c "Addendum 2026-10-06"` → 2; `grep -c "business-report-murcia" README.md` → 2; numstat `20	0` | Triangulation skipped: structural docs task, verified by counts and 0-deletion numstat | none |
| T2 | verify command + double-run sha256 (structural) | model script | no package.json, no runner; baseline verify `Error: Cannot find module '...\murcia-model.mjs'` (exit 1) | n/a (structural) | `node business/research/murcia-model.mjs && git diff --exit-code --stat -- …tables.md …data.json` → `exit 0` | Triangulation skipped: structural; outputs untracked so git diff is vacuous until commit — reproducibility shown by two runs with identical sha256 (tables `18129d61…`, json `88ad897d…`) | none |
| T9 | verify command + double-run sha256 (structural) | model script | baseline verify on committed T2 outputs: empty `git status --short`, `exit 0` | n/a (structural) | verify → ` M …murcia-model-data.json` / ` M …murcia-model-tables.md` / `exit 0` (intended regeneration); A × conservador trough `−974 (Oct-2027)`, B × realista Y1 result `4,768` unchanged | Triangulation skipped: structural; two runs give identical sha256 (tables `257d0335…`, json `46c4e569…`) | none |
| T3 | verify command + double-run sha256 (structural) | build scripts | model check `node business/research/murcia-model.mjs && git diff --exit-code --stat …` → `exit 0`; baseline verify `Error: Cannot find module '…\build-charts.mjs'` (exit 1) | n/a (structural) | build → `14 fragments, 8 svg`; `grep -c "<svg"` → 8; external-ref `grep -c` → 0 (grep's no-match `exit 1`) | Triangulation skipped: structural; two full runs (model + charts + report) give identical sha256 (charts `cc0e0d2a…`, report `58d8e8b4…`, json `9722af15…`, tables `257d0335…` unchanged); chapter titles diff TOC labels → exit 0; 7 captions carry a chip, 0 unfilled slots | sensitivity cells: trough text split onto two lines after a visual check showed overflow |
| T4 | build + chip count + placeholder grep | docs | n/a (prose) | n/a | build ok; chips 19/23/15; grep exit 1 | none | none |
| T10 | build + placeholder grep | docs | n/a (prose) | n/a | build ok; grep exit 1 | none | none |
