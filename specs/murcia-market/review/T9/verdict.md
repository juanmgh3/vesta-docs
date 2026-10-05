## Open findings
- F-007 — open — T9 did not touch line 91 or lines 193-195. The work belongs to T7.
- F-008 — fixed — business/research/murcia-market.md:249. The label is now "FACT (1 source), provisional" and says AEAT is a different metric that supports only the per-person ordering.
- F-009 — fixed — business/research/murcia-market.md:249 and :276-286. The cell is labelled CONFLICTING, and the note gives the table read (53689), the series (ADRH9974348/9), the year (2023) and the 2022 value. `market-dossier.md` was not edited, and its line 310 does carry €43,037.
- F-010 — fixed — business/research/murcia-market.md:249 and :260. National, Granada, Valencia and every AEAT cell now read "FACT (1 source), provisional". The press release is called a republication.
- F-011 — fixed — business/research/murcia-market.md:493-500. 9,201,109 ÷ 48,320,520 = 0.1904. The AEAT column is flagged as common territory at :257 and :262-265.
- F-012 — fixed — business/research/murcia-market.md:336-354. I recomputed every ratio and each verdict follows the 1.5× rule: 1.712, 1.372, 1.280, 1.173, 1.007, 0.897, 1.494 (20,567/13,766) and 1.689. The cut-offs €20,859 and €20,649 are correct. No "Upper-middle" is left, and Altorreal is written as 1.49× at :352 and :395.
- F-013 — fixed — business/research/murcia-market.md:519-520. This matches the labels at :49 and :202.
- F-014 — fixed — business/research/murcia-market.md:296. 13,906/16,121 = −13.7%.

No Murcia figure changed: €38,682, €13,906 and the zone rows match the T3 verdict. All the gaps check out: +0.9%, +5.1%, −7.5% and −13.2%.

## Critical
- business/research/murcia-market.md:329 (and :357) — The section-income label reads "FACT (1 source: INE ADRH, read directly)", and the top-ten caption reads "income FACT, INE ADRH 2023". Neither has the exact wording the new Constraint requires: "FACT (1 source), provisional". — These section figures carry every zone verdict at :347-354 and the high-income pool at :377-383 (≈12,200 households). They are single-source and load-bearing, and they are unmarked inside the very range this pass was meant to make compliant. This is the same class as F-003 and F-008.

## Important
- business/research/murcia-market.md:485-486, :458-459 — Four rows still say "FACT (1 source)" or "FACT (1 source, 2001 field work)" without "provisional": the two REIAC rows, which the executor knowingly left, and the two Gaig 2004 rows. — The Constraint says "always", so "not in the findings" does not exempt them. The row at :459 (3.2%) also feeds the right-hand column of the §3.2 radius table at :472-474.

## Minor
- business/research/murcia-market.md:300 — "Both sources therefore place Murcia … below the national mean" folds the AEAT common-territory mean (€31,333) and the ADRH Spain mean into a single "national". — This goes against the "never blended" Constraint, two lines after :299 named the AEAT figure "common-territory mean" correctly.

## Cannot verify from diff
- business/research/murcia-market.md:495-497 — The file cites 48,320,520 to INE table 56940 (`nult=10`). The report's 56940 output shows only 2023 T4 (48,486,865) and later. The 2023 T3 value was read from table 56934, and the report states rather than shows that 56940 returns the same series. Confirming it needs the API.

Lesson added to C:\Users\juanm\.claude\agent-memory\reviewer-opus\feedback_review_heuristics.md: on a label-wording fix pass, grep every "FACT (" variant across the whole scoped range, not only the rows the findings name.
