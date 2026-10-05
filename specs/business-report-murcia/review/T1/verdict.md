## Open findings
None: the record (`specs/business-report-murcia/review/findings.md`) has no entries.

Spec compliance: the addendum records the facts the brief asks for. It has the launch mid-October 2026 with month 1 = October 2026, no financing, and no purchases, all CAPTURED. It has the alta date and region as TO-CONFIRM, with both consequences. It adds no new facts. "Hyla pack, drill, existing car" and "alta is done" point back to what Block 2 already records. "Cuota Cero Ampliada" is the name `murcia-market.md:988` uses. Nothing in `founder-inputs.md` is deleted (20 lines added, 0 removed). The Block 5 supersede mark is at `founder-inputs.md:149` and points to the addendum. The Granada bank scenario had no line in the file to mark, so the addendum itself declares it superseded (`founder-inputs.md:210-211`). That is an acceptable deviation. No names or personal data. Every path the README lists exists, apart from the ones noted below.

## Important
- `README.md:49-56` — The "Superseded, kept for history" list leaves out `business/research/economic-model.md` and `business/research/economic-model-engine.mjs`. The brief's Constraint says: "`economic-model.md`, `economic-model-engine.mjs`, `granada-market.md`, `bank-granada-scenario.mjs`, the two old reports and the bank dossier are not edited; README marks them superseded by this report." Nothing marks those two files superseded anywhere in the README. Line 44 even keeps "reproducible model scripts" under `business/research/` without separating the old engine from the new one. Someone reading the README would treat the economic-model engine as current alongside `murcia-model.mjs`.

## Minor
- `README.md:53` — It labels `economic-report.{html,pdf}` "(Madrid/Valencia)", but that report doesn't cover a city. Its only mention of either city (`business/reports/economic-report.html:4397`) says the Madrid/Valencia comparison lives in the marketing report. The label gives the wrong idea of what the file contains.
- `README.md:45` — It lists `murcia-model.mjs`, which doesn't exist yet (T2 creates it). The only files allowed to be listed ahead of time were the two build scripts and `_src/`. It will be correct once T2 lands. Until then it points to a file that isn't there.

## Cannot verify from diff
- Whether the founder actually stated "no credit line" (`founder-inputs.md:214`). I read it as "no external financing" spelled out, not a new fact, but only the founder can confirm it.
