# Vesta Docs

Business documents for Grupo Vesta (reports, research, briefs).
Moved out of the vesta-web repo on 2026-07-08 to keep the web repo code-only.

## Current deliverable

- `business/reports/business-report-murcia.html` and `business/reports/business-report-murcia.pdf` —
  the single business report for the Murcia launch (October 2026, no external
  financing, no new purchases). It merges the economic and marketing reports.

## Layout

- `business/reports/` — the current report, the superseded reports and the reusable template
- `business/reports/_template/` — `report.css`, `embedded-assets.css`, component docs and the
  two build scripts:
  - `build-charts.mjs` — reads `business/research/murcia-model-data.json`, writes the chart SVGs
  - `build-report.mjs` — assembles the chapter fragments into the self-contained report HTML
- `business/reports/_src/` — chapter fragments per report (`_src/murcia/ch-*.html`, `charts.html`)
- `business/research/` — sourced research inputs + reproducible model scripts
  (`murcia-market.md`, `murcia-model.mjs`, `founder-inputs.md`, `pricing-decision.md`,
  `trademark-clearance-vesta.md` — búsqueda de anterioridades de la marca "Vesta" en OEPM/EUIPO/TMview,
  `domain-options.md` — domain names and registrars compared)
- `business/visibility/` — the visibility playbook: `plan-visibilidad.html` (orientation + roadmap,
  published as a claude.ai artifact whose checkboxes keep their state there) and one numbered
  step per file (Google Business Profile, web, Ads, measurement), with paste-ready copy
- `business/bank/` — bank financing dossier (superseded)
- `briefs/` — the original assignment brief + starter prompts

## Superseded, kept for history

Replaced by `business-report-murcia` and not edited further:

- `business/reports/economic-report.{html,pdf}` — economic report
- `business/reports/marketing-report.{html,pdf}` — marketing report (Madrid/Valencia)
- `business/bank/bank-dossier.{html,pdf,docx}` — Granada bank financing dossier
- `business/research/granada-market.md` and `business/research/bank-granada-scenario.mjs` — Granada research and bank scenario
- `business/research/economic-model.md` and `business/research/economic-model-engine.mjs` — previous economic model, replaced by `murcia-model.mjs`
