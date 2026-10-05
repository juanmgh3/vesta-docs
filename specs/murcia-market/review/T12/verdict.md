## Open findings
- F-052 — fixed — business/research/murcia-market.md:34, :35, :37, :183-185, :1142. Every place 479,405 is graded now reads "FACT (1 source), provisional". :35 calls the Ayuntamiento row an agreeing publication of the same register, not a second source. Nothing still reads "2nd source", "2 publications" or "graduated". :41 ("two publications, not two measurements") explains the case and does not grade the figure.
- F-053 — fixed — business/research/murcia-market.md:1187 now carries "≈93,000–100,000 (mid ≈97,000; ÷2.4, borrowed)", worded as granada-market.md:274 states it. The ratios still follow from the values shown: 49,600/97,000 = 0.51 and 171,200/97,000 = 1.76.
- F-054 — fixed — business/research/murcia-market.md:1193. I recounted §4.2 (:588-606). Seven profiled providers publish any upholstery price, "desde" included: Clean-Home, Happy Clean, Limpiezalto, Brillamu, Sercomanga, Biomex and LavaYa. Limpromur's €11/h and iClean's bono are general cleaning, not upholstery. Granada's Happy Clean has no per-size price (granada-market.md:144), so the criterion difference is real and 7 vs 2 (+5) holds.
- F-055 — fixed — business/research/murcia-market.md:1200-1201 labels the ranking ANALYSIS, and the margin claim is gone. :1216-1218 gives 2.6–2.8, which yields 138,997/2.8 = 49,642 and /2.6 = 53,460, i.e. ≈49,600–53,500, labelled HYPOTHESIS proxy. That is the range's only occurrence. It does not contradict §1.3:114-116, §1.7:213-215 or M8, which keep the single ≈49,600: the range is offered as a gap reading, not as a sizing.
- F-056 — fixed — business/research/murcia-market.md:1132-1138. Row by row: M1, M2, M6, M9, M11, M12, M17-M20, M23, M24, M26, M28 and M29 read "Confirmed". M3 and M5 read "confirmed" on all nine rows. The ESTIMATE rows M4, M7, M8, M10, M13, M16 and M25 inherit their inputs, as the sentence says. M14, M15, M21, M22 and M27 are named as exceptions and their cells agree. The T7 evidence row (specs/murcia-market/feature.md:292) is scoped the same way.
- F-057 — fixed — business/research/murcia-market.md:593 says both Biomex figures are on the national prices page, not the Murcia page, which agrees with M19 at :1160.

## Minor
- business/research/murcia-market.md:1187 — the G4 note says "Murcia's urban core is a quarter of its municipality". This row was rewritten in this pass, and the wording also slipped past my T7 review. How it fails: the file's own share is 138,997 / 479,405 = 28.99% (:49), and in households 49,600 / 171,200 = 29%. Three rows earlier, G1 (:1184) says "seven in ten residents live outside the core". So the delta table carries two different fractions for the same split, and the smaller one understates the core by about a seventh. Reword to "under a third" or "≈29%".

Whole-file label grep: no "FACT (2nd source)" or "FACT (2 publications)" is left, and no "FACT (1 source" appears without ", provisional". The only other FACT forms are:
- the label-standard header (:9, :15);
- "sum of FACT rows" (:209, :338) and "FACT rows" (:1137, :1172), which describe rows and grade nothing;
- the by-reference dossier rows (:467-468);
- the §5 "Range FACT (N sources)" cells (:672-679), which follow the dossier's own standard for independent own-site figures.

None of these is a single-source FACT missing the exact wording.

I also saved one line to my memory file (C:\Users\juanm\.claude\agent-memory\reviewer-opus\feedback_review_heuristics.md): recompute fraction words like "a quarter" or "half" in delta notes against the file's own shares.
