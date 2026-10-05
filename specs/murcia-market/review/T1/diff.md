class: medium

## git status --short -uall
```
 M business/research/founder-inputs.md
?? .torq-flow/active
?? business/research/murcia-market.md
?? specs/murcia-market/feature.md
?? specs/murcia-market/review/T1/brief.md
?? specs/murcia-market/review/T1/report.md
?? specs/murcia-market/review/findings.md
```

## git diff HEAD
```diff
diff --git a/business/research/founder-inputs.md b/business/research/founder-inputs.md
index 691acc9..b74510d 100644
--- a/business/research/founder-inputs.md
+++ b/business/research/founder-inputs.md
@@ -111,6 +111,9 @@ Conventions in force (from the brief):
 
 ## Block 4 — City context
 
+> **SUPERSEDED 2026-10-05** — the operating city is resolved; see
+> "Addendum 2026-10-05 — operating city resolved" at the end of this file.
+
 - **Operating city.** **UNDECIDED.** Candidates: **Madrid, Valencia, possibly another
   city.**
 - **External determinant.** The choice depends on an **unresolved external relocation
@@ -151,8 +154,10 @@ Conventions in force (from the brief):
 
 1. Price posture / architecture — Phase 2 founder decision.
 2. Operating city + zone — gated by an external relocation.
+   **SUPERSEDED 2026-10-05** → Addendum 2026-10-05.
 3. Google Ads monthly budget — marketing report proposes a range.
 4. Launch window — gated by relocation.
+   **SUPERSEDED 2026-10-05** → Addendum 2026-10-05.
 5. Travel-cost model.
 
 **FLAG-RESEARCH (Phase 1, founder-requested):**
@@ -183,3 +188,13 @@ Conventions in force (from the brief):
 | Car insurance                        | €50/month                                                  | CAPTURED              |
 | Legal form                           | Autónomo (alta done; cuota TBD)                            | CAPTURED / TO-CONFIRM |
 | Projection horizon                   | 8 years                                                    | CAPTURED              |
+
+## Addendum 2026-10-05 — operating city resolved
+
+Stated by the founder on 2026-10-05. Supersedes Block 4 and consolidated UNDECIDED
+items 2 and 4; the superseded text above is kept as written.
+
+- **Operating base.** **Murcia capital.** CAPTURED.
+- **Service area.** "Murcia and surroundings". CAPTURED. The service radii are not
+  fixed here — research proposes them (`murcia-market.md` §1).
+- **Launch window.** No longer gated by relocation. CAPTURED.
diff --git a/business/research/murcia-market.md b/business/research/murcia-market.md
new file mode 100644
index 0000000..20cb6cf
--- /dev/null
+++ b/business/research/murcia-market.md
@@ -0,0 +1,46 @@
+# Murcia market inputs — operating-city research
+
+> Research pass for `specs/murcia-market/feature.md`. Murcia capital and its
+> surroundings are the operating city (`founder-inputs.md`, Addendum 2026-10-05). This
+> file replaces the Granada scenario as the parameter source for the economic model,
+> the bank dossier and both reports. It is research input only: it does not decide
+> prices, does not write report or dossier copy, and does not change the model.
+>
+> **Label standard** — unchanged from `market-dossier.md`: **FACT** (load-bearing
+> figures need a second independent source, else "FACT (1 source), provisional") /
+> **ESTIMATE** (derivation shown) / **HYPOTHESIS** / **NOT FOUND**. A number that could
+> not be sourced is written NOT FOUND, never filled with a plausible value. Judgements
+> built on sourced rows are labelled **ANALYSIS** and kept apart from the facts.
+>
+> **Method** — every FACT row carries its source URL inline and the retrieval date
+> (2026-10). Primary statistical sources first: INE (Padrón, Censo 2021, ADRH) and
+> CREM / Econet; newsroom citations of INE are a declared fallback. Competitor prices
+> are read on the competitor's own page; a snippet-only datum is labelled as such.
+> Incompatible geographic definitions are flagged, never blended or averaged. Zones
+> follow `market-dossier.md` §7; Trends follows `trends-keywords-addendum.md`.
+>
+> **Reused from `market-dossier.md`** — the national rates already graded there (§5.1
+> allergy, §5.2 pets, §6.1–6.3 CPC / CVR, §9 admin costs) are carried by reference and
+> re-researched only where a Murcia-specific figure exists.
+
+---
+
+## 1. Geography, population, households, service radii
+
+## 2. Income and premium zones
+
+## 3. Target segment sizing per radius
+
+## 4. Competition in Murcia
+
+## 5. Local price map
+
+## 6. Demand signals and seasonality
+
+## 7. B2B pool and local acquisition channels
+
+## 8. Local operating costs, access rules and financing landscape
+
+## 9. Headline parameter set, Granada deltas and gaps
+
+## 10. Sources appendix
```
