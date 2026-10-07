# T7 — brief

- [x] **T7 — Chapters 10–13: proyecciones, crecimiento, riesgos, glosario** (structural).
  Orchestrator writes `ch-10-proyecciones.html` (year 1 month by month from October 2026
  for B × realista with the chart; A and C beside; sensitivity grid; cash trough with no
  buffer; years 2–3; 4–8 trajectory; break-even), `ch-11-crecimiento.html` (triggers:
  when to hire operator 2, second machine cost, coast B2B as expansion, Cartagena as a
  separate market), `ch-12-riesgos.html` (assumptions list with what resolves each,
  gaps from `murcia-market.md` §9.3, RC, alta date, single-source figures), and
  `ch-13-glosario-fuentes.html` (terms; sources by chapter pointing to the research
  files and their URLs). Fill the TOC page numbers after a render pass. _Verify:_ `node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-10-proyecciones.html business/reports/_src/murcia/ch-11-crecimiento.html business/reports/_src/murcia/ch-12-riesgos.html && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-1[0-3]*.html; echo "exit $?"`.
  Accept: Scenario: traceable chapter — WHEN any figure in ch. 10–11 is picked THEN it appears in `murcia-model-tables.md`; every assumption in ch. 12 names what would resolve it; the TOC has no "—" placeholder left.

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

