# T2 — brief

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

