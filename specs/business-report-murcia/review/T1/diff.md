class: medium

## git status --short -uall
```
 M README.md
 M business/research/founder-inputs.md
?? .torq-flow/active
?? .torq-flow/run
?? specs/business-report-murcia/feature.md
?? specs/business-report-murcia/review/T1/brief.md
?? specs/business-report-murcia/review/T1/report.md
?? specs/business-report-murcia/review/findings.md
```

## git diff HEAD
```diff
diff --git a/README.md b/README.md
index ee8804c..f674f75 100644
--- a/README.md
+++ b/README.md
@@ -1,9 +1,32 @@
 # Vesta Docs
 
-Business documents for Grupo Vesta (reports, bank dossier, research, briefs).
+Business documents for Grupo Vesta (reports, research, briefs).
 Moved out of the vesta-web repo on 2026-07-08 to keep the web repo code-only.
 
-- `business/reports/` — marketing + economic reports (HTML/PDF) and the reusable template
-- `business/bank/` — bank financing dossier (HTML/PDF/DOCX)
+## Current deliverable
+
+- `business/reports/business-report-murcia.html` and `business/reports/business-report-murcia.pdf` —
+  the single business report for the Murcia launch (October 2026, no external
+  financing, no new purchases). It merges the economic and marketing reports.
+
+## Layout
+
+- `business/reports/` — the current report, the superseded reports and the reusable template
+- `business/reports/_template/` — `report.css`, `embedded-assets.css`, component docs and the
+  two build scripts:
+  - `build-charts.mjs` — reads `business/research/murcia-model-data.json`, writes the chart SVGs
+  - `build-report.mjs` — assembles the chapter fragments into the self-contained report HTML
+- `business/reports/_src/` — chapter fragments per report (`_src/murcia/ch-*.html`, `charts.html`)
 - `business/research/` — sourced research inputs + reproducible model scripts
+  (`murcia-market.md`, `murcia-model.mjs`, `founder-inputs.md`, `pricing-decision.md`)
+- `business/bank/` — bank financing dossier (superseded)
 - `briefs/` — the original assignment brief + starter prompts
+
+## Superseded, kept for history
+
+Replaced by `business-report-murcia` and not edited further:
+
+- `business/reports/economic-report.{html,pdf}` — economic report (Madrid/Valencia)
+- `business/reports/marketing-report.{html,pdf}` — marketing report (Madrid/Valencia)
+- `business/bank/bank-dossier.{html,pdf,docx}` — Granada bank financing dossier
+- `business/research/granada-market.md` and `business/research/bank-granada-scenario.mjs` — Granada research and bank scenario
diff --git a/business/research/founder-inputs.md b/business/research/founder-inputs.md
index a76fdf0..3342fec 100644
--- a/business/research/founder-inputs.md
+++ b/business/research/founder-inputs.md
@@ -146,6 +146,7 @@ Conventions in force (from the brief):
 - **Launch window.** **UNDECIDED** — operationally ready (equipment-wise), but the
   actual launch is gated by the relocation decision (Block 4).
   **SUPERSEDED 2026-10-05** → Addendum 2026-10-05.
+  **SUPERSEDED 2026-10-06** → Addendum 2026-10-06 (launch mid-October 2026).
 
 ---
 
@@ -201,3 +202,22 @@ It also supersedes the Block 5 "Launch window" item and FLAG-RESEARCH D.
 - **Service area.** "Murcia and surroundings". CAPTURED. The service radii are not
   fixed here — research proposes them (`murcia-market.md` §1).
 - **Launch window.** No longer gated by relocation. CAPTURED.
+
+## Addendum 2026-10-06 — launch and financing
+
+Stated by the founder on 2026-10-06. Supersedes the Block 5 "Launch window" item and
+the Addendum 2026-10-05 "Launch window" line; the superseded text above is kept as
+written. It also supersedes the Granada bank scenario (`bank-granada-scenario.mjs` and
+the bank dossier in `business/bank/`): no loan is sought.
+
+- **Launch.** Mid-October 2026; month 1 of the model = October 2026. CAPTURED.
+- **Financing.** No external financing — no loan, no credit line. CAPTURED.
+- **Purchases.** No new purchases at launch; the business operates with the equipment
+  already owned (Block 2: Hyla pack, drill, existing car). CAPTURED.
+- **Alta date and region.** TO-CONFIRM. The _alta_ is done (Block 2) but its date and
+  the region where it was filed are not recorded. Two consequences hang on it:
+  - **Tarifa plana months left** — how many reduced-cuota months remain before the
+    fixed cost steps up to the general quota.
+  - **Cuota Cero window** — whether the Región de Murcia Cuota Cero Ampliada aid
+    (`murcia-market.md` §8.1) is still within reach, which depends on where and when
+    the alta was filed.
```
