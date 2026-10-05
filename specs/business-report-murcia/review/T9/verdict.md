## Open findings
- F-004 — fixed — business/research/murcia-model.mjs:150-153 (the Oct-2027 point is `cash − accrued` at i=11, where accrued holds exactly Jul–Sep because it resets in Jul); murcia-model.md:84-88; murcia-model-tables.md:3 and :76 `−974 (Oct-2027)`
- F-005 — fixed — business/research/murcia-model.md:160-166 (§3 items 11 and 12); I22 caveat at murcia-model.md:37 (diff line 1448)
- F-006 — fixed — business/research/murcia-model.md:118-125
- F-007 — fixed — business/research/murcia-model.mjs:242-243, :281-287, :723-734 (diff); murcia-model-tables.md:118-128; murcia-model.md:102-109
- F-008 — fixed — business/research/murcia-model.mjs:356-440; murcia-model.md:129-137

Checks I re-derived:
- A × conservador trough: Sep-2027 cash −619 minus Jul–Sep IVA 355 gives −974. That is below the −923 Jul month-end, so the row reads −974 (Oct-2027). The Accept asks for ≤ −974, and it lands exactly on the bound.
- B × realista trough: Sep cash 5,855 minus 1,087 gives 4,768, which is above −91, so the trough stays −91 (Oct-2026).
- Every other envelope row has a positive year-end cash, so only the A × conservador row moves.
- The Oct-2027 point means the same thing in the script, in §2.4 and in the table header. §2.4 also says it covers only the IVA payment and none of the Oct-2027 trading.
- Owner state, realista × B: one hire from Y5, so hired capacity is 88.
  - Y5: demand 81.7 ≤ 88, holds.
  - Y6: demand 85.9 ≤ 88, holds.
  - Y7: demand 88.15 (48.97 visits × 1.8) > 88, lapses.
  - Y8: demand 89.3 > 88, lapses.
  - Y7–Y8 utilisation is about 50%, below the 75% trigger, so no second hire comes and "lapses" is correct.
  - Optimista × B: demand 96 > 88 from Y3 on, so the milestone is never reached, the same as before.
- §2.6 bases:
  - Model: 72.50 / 1.21 = 59.92, then − 1.5 − 5.5 − 71 = −18.08. This matches T8 and the formula at mjs:301.
  - pricing-decision §4.2: 57.02 − 1.5 − 7 − 71 = −22.48. This matches pricing-decision.md:340, and the €7 full trip is the one used in §3.5.
- `market` spot-checks:
  - Colchón king median is null, labelled "no median (n < 3)". It matches murcia-market.md:674.
  - Pack Casa is 200 with approx and PROPOSAL. pricing-decision.md:370 prints "~€200".
  - Madrid is labelled "FACT — own sites". market-dossier.md:90 uses that label.
  - R1 population is labelled "FACT (1 source), provisional" and its households carry ≈, ESTIMATE and approx. Both match murcia-market.md:208.
  - Travel is labelled ESTIMATE. §8.5 at line 1060 says "ESTIMATE throughout".
- Nothing else in the outputs changed:
  - The JSON diff touches only the trough fields, the new `ownerStateHolds`/`ownerYears` fields and the reshaped `market` block.
  - The tables diff touches only the header line, the T4 A × conservador row and the T6 columns and milestone lines.
  - T1–T3 are untouched, and B × realista Y1 is still 4,768.
- Determinism is evidenced by the double sha256 in the report. The script reads no clock, random or locale input.
- The script has no comments. The evidence row ending in "none" is correct, because that column is Refactor.

## Minor
- business/research/murcia-model.mjs:360-362, :373 (rows :382, :388, :389) — the Granada label and source are applied to every row from one constant: label "FACT (1 source)", source "granada-market.md §4". That label is granada-market's verdict for the Clean-Home figures only (granada-market.md:204-205). The Happy Clean "desde" anchors (colchón individual, sillón, silla) get it anyway: the source gives them "FACT (own site)" (granada-market.md:144) and, for the mattress, "FACT (1 source, weak — no size split)" (:279). Silla's "desde €5" also appears only in granada-market §3 (:144), not in §4. How it fails: §2.7 (murcia-model.md:133-134) promises the label is "the evidence label the source gives it, verbatim" and that the source names the right section. A report chip built from the JSON would put Clean-Home's grade on Happy Clean's weaker anchors and point the silla figure at a section that does not contain it.
