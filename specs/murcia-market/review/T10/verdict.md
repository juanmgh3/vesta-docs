## Open findings
- F-007 — open — business/research/murcia-market.md:91-94 still cites INE table 60134 for "2.7 highest in Spain" and 193-195 still cite ADRH 30841 / 31123 for the one-person shares, without saying either was read. T10 only reworded the label. This belongs to T7.
- F-015 — fixed — murcia-market.md:329-330 now reads "**FACT (1 source), provisional** — INE ADRH, read directly". The top-ten caption at :357-358 now reads "income FACT (1 source), provisional — INE ADRH 2023", and the label sits on one line.
- F-016 — fixed — murcia-market.md:458-460 (Gaig rows, with "2001 field work" moved after the label) and :486-487 (REIAC rows) all read "FACT (1 source), provisional".
- F-017 — fixed — murcia-market.md:257 (column "Common-territory mean"), :269 ("518th in the common territory"), :299 and :300-301 ("below each source's own wider mean (ADRH national mean per person; AEAT common-territory mean)"). No "national" is attached to an AEAT figure anywhere in the file. The "national" at :83, :245, :264, :295-297, :459 and :499 refers to INE ECP, ADRH, Gaig or REIAC figures.
- F-018 — fixed — murcia-market.md:497-498 now gives table 56934, series ECP320, and the API URL is updated to 56934.

## Important
- business/research/murcia-market.md:61-63 — the "FACT (2 publications)" label on El Palmar, Puente Tocinos and Cabezo de Torres is a single source under the file's own rule. Murcia Plaza is a newspaper reporting the Ayuntamiento's 26-Jan-2026 Padrón release on the same day. Line 51 says so itself ("Murcia Plaza … reading the same Padrón", labelled 1 source). §1.1 (:41-42) does not count a republication of the same publication as a second source, and the Constraints treat newsroom citations as a fallback, never as confirmation. How it fails: the brief requires every single-source FACT, file-wide, to read exactly "FACT (1 source), provisional". These three rows dodge the requirement only because "(2 publications)" falls outside the verify grep's stem. The executor saw this and left it. They feed only the ANALYSIS at :71 (95,446, 28%), not a verdict, so Important and not Critical. Fix: relabel all three "FACT (1 source), provisional" and keep both URLs as publications.
- business/research/murcia-market.md:119 — the 45–64 row (141,136 of 474,834 = 29.7%) keeps plain "FACT", but its "2nd source" at :120 is a different figure: Censo 2021, 28.6% of 459,778, a different date and a different operation. That row cannot confirm 29.7%, and the Constraints say a cross-check "never upgrades a label". T10 also made the file contradict itself: :36 now labels 474,834 from the same CARM pdf, p. 2, "FACT (1 source), provisional", while :119 presents the same 474,834 as plain FACT. The verdict at :123 ("two sources consistent") overstates the same way. How it fails: 29.7% is load-bearing (it is the rate behind R1 ≈41,300 and R2 at :447-448), and it reads as graduated when it rests on one document. Fix: label :119 "FACT (1 source), provisional", call :120 a consistency check (different date), and reword :123.

## Minor
(none)

## Cannot verify from diff
- No figure changed in §2–§3. T3 and T9 are uncommitted, so diff.md shows §2–§3 as all-new and cannot separate T10's edits from T9's. I spot-checked against T9/diff.md: the AEAT header, the "518th", the "national mean" sentence, the caption and 56940 differ only in wording. In §1 every hunk in diff.md is a label edit or a reflow, with no number touched. The full before/after numeric-token diff is evidenced only by the executor's report.
- "series ECP320" at :497 was copied from the F-018 finding and not re-read at the source (the report declares this deviation).

Other label checks came back clean. The verify stem returns no unconforming line, and no label is split across a line break: :92, :111, :193, :330 and :358 each hold the full label on one line. The "FACT (per market-dossier.md §5.1)" rows at :461-462 are carried by reference under the Constraints. Line 34 (plain FACT, Padrón 479,405) and its caption at :180 keep the "two publications of one register" reading that F-006 already settled. I did not reopen them.

Relevant files:
- C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-market.md
- C:\Users\juanm\Documents\dev\vesta-docs\specs\murcia-market\review\findings.md
- C:\Users\juanm\Documents\dev\vesta-docs\specs\murcia-market\review\T10\report.md
