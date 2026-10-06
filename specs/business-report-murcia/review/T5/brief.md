# T5 — brief

- [x] **T5 — Chapters 4–6: mercado, competencia, público** (structural). Orchestrator
  writes `ch-04-mercado.html` (rings with population, households, drive times and
  travel cost; income and the premium sections; the segment per ring; the ring chart),
  `ch-05-competencia.html` (the 17 providers as a comparison table with price, travel
  policy, reviews and trust signals; the price map chart; what is missing in Murcia and
  what is not, with the sweep caveat), `ch-06-publico.html` (45–65, allergy, pets, trust
  cues and messages per segment from `marketing-research-addendum.md` R1–R4, adapted to
  Murcia's zones and B2B pool). _Verify:_ `node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-04-mercado.html business/reports/_src/murcia/ch-05-competencia.html business/reports/_src/murcia/ch-06-publico.html && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-0[456]*.html; echo "exit $?"`.
  Accept: Scenario: traceable chapter — WHEN any figure in ch. 4–6 is picked THEN it appears with the same value and label in `murcia-market.md` or the addendum; every competitor named is in `murcia-market.md` §4.2; no placeholder text remains.

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

