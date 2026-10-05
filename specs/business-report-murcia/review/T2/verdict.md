## Open findings
- F-001 — fixed — README.md:33 (economic-model.md and economic-model-engine.mjs are now in the superseded list)
- F-002 — fixed — README.md:29 ("(Madrid/Valencia)" is gone from the economic-report line)
- F-003 — fixed — business/research/murcia-model.mjs:1 (the file README.md:21 lists now exists)

Spec compliance: the diff does what the brief asks. Every required output is there, every §1 row has a label and a file §section, year 1 runs Oct-2026 to Sep-2027, and the script is deterministic. The arithmetic holds where I recomputed it:
- B × realista, Oct-2026: result −137, cash −91.
- Feb-2027: result 212, cash 456.
- Sep-2027: result 1,038, cash 5,855.
- IVA paid in each remittance month: 226 (Jan), 498 (Apr), 770 (Jul).
- Fixed cost steps to 356 at m=10 (Jul-2027). Nine months from October is Oct–Jun, so the step lands in July.
- Break-even, all nine cells; contribution and margin (55.36 / 59.92 = 92.4%).
- Y4–Y8 visits; the realista-B Y5 hire and its result of 19,354.
- Optimista Y3 owner-state result: 21,493.
- The Y1 gap against the old model: 114 visits × €2 = 228, plus 3 × €170 = 510, gives 738 = 5,506 − 4,768.

The 3×3 grid matches T1–T3. The inputs match their sources: I1–I3 (recomputed from the §4 grids × M1), the demand curves, Y23, the travel tiers from §8.5 (means 4.43 / 7.39, mixes 4.41 / 6.11) and the parking tickets from §8.3. No toLocaleString, no Date, no random, no comments.

## Important
- business/research/murcia-model.mjs:145 and :180 — the cash trough only looks at the 12 month-ends and never includes the Jul–Sep IVA paid in Oct-2027. So in A × conservador the reported trough (murcia-model-tables.md:76, −923 in Jul-2027) is shallower than the year-end cash net of IVA owed in the same row (−974). Sep-2027 cash is about −619, and paying about €355 of Q3 IVA in October takes it to −974 or lower. With no buffer and no loan, the trough is the number the founder reads as "how much I must be able to cover", and in this scenario it understates that need by at least €51. Either report min(trough, endCash) or extend the window through the Oct-2027 payment, and say so in murcia-model.md:84.

## Minor
- murcia-model.md:118-138 — the §3 "what changed" list leaves out two declared deviations:
  - The hire trigger now uses the annual average instead of "3 consecutive months". This is only in §2.5 (line 94), and row I22 (line 40) states the trigger without the caveat.
  - The IVA timing change (item 5) moves the troughs on its own: A realista goes from −392 (M4) to −318 even though costs rose. Item 5 does not say troughs are no longer comparable with the old reports.
- murcia-model-tables.md:156-160 / murcia-model.mjs:288 — "Single-piece paid visit" uses the mix-average price per piece and €5.5 per visit. pricing-decision.md §4.2 (line 340), which is an allowed number source for the report, gives the same notion for B as −€22.48 (matrimonio €69, €7 trip). The report will then carry −18.08 and −22.48 for the same idea, and §2.6 (murcia-model.md:108) does not state the basis.
- murcia-model.mjs:248 / murcia-model-tables.md:125-128 — the founder→owner milestone is marked at the first year hired × 88 ≥ demand (Y5, realista B) and never re-checked. In Y7–Y8 demand is 88.1 and 89.3 pieces, so the owner-state result (25,870) falls below the result. The "Y5" line reads as permanent when the state lapses in Y7.
- murcia-model.mjs:343-365 — scope creep: the `market` block (price map, grids, rings) is outside T2's outputs. The brief describes the JSON as "the same numbers as data for the charts", and none of these figures appear in murcia-model-tables.md. They are hand-copied with no per-figure label (range FACT vs median ESTIMATE is lost), so T3 charts built from this block cannot carry their evidence chips from the data. "Pack Dormitorio" is also stored as 149 where the source says "~€149".

## Cannot verify from diff
- The byte-identical re-run on a clean checkout. The outputs are still untracked (`??`), so the brief's `git diff --exit-code` is vacuous until commit. The executor's double-run sha256 is the only evidence, and the evidence row (feature.md:223) says so honestly.
- Whether the default `FLAT_RATE_MONTHS_LEFT = 9` and the jump to €356 are right. With year-1 income well below the SMI, the tarifa plana may be extendable (murcia-market.md §8.1 says "extendable"). This depends on the unrecorded alta date and income; it is correctly labelled HYPOTHESIS.

I added one lesson line (cash trough vs year-end cash net of IVA owed) to C:\Users\juanm\.claude\agent-memory\reviewer-opus\feedback_review_heuristics.md.
