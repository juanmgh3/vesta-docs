# T3 — brief

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
  `market-dossier.md` (national rates only) and `founder-inputs.md`. The report never
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

