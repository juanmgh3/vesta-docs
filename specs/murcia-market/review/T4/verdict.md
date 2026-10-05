## Open findings
- F-007 — open — the T4 diff only adds §4/§5 (lines 529–687); line 91 and lines 193–195 are untouched
- F-019 — open — line 61 still reads "FACT (2 publications)"; the diff doesn't touch §1
- F-020 — open — lines 119–123 are untouched; the 29.7% row still carries plain FACT

## Important
- business/research/murcia-market.md:631 — The heading "premium + transparent lane is not empty" uses the verdict word premium without a stated criterion. The only basis given is that Limpiezalto has "the highest per-size list found". How it fails: any market has a highest list. The lane in market-dossier.md §4.2 (line 260) means a premium *posture* paired with published prices. The executor's own row at line 74 gives Limpiezalto no method and an explicit no-guarantee on old stains, so that row argues against a premium posture. This bullet reverses a dossier conclusion that feeds positioning, and the report escalates it to the human as settled. Either state a criterion (for example, top of range after VAT plus a named trust signal) or reword it to "highest published list".
- business/research/murcia-market.md:686 — The §5 white-space line states "no lab-verified mite claim and no vacuum-led specialist in Murcia" as a market fact. How it fails: line 556 explicitly says the field is not claimed exhausted, because Maps caps each query at 8 results. Lines 614 and 630 correctly say "was found". The positioning conclusion should carry the same "none found in this sweep" qualifier.

## Minor
- business/research/murcia-market.md:677 — The sentence "colchón individual (€52.5–57.0) … inside Valencia's [cluster]" is wrong for the VAT-adjusted median: €57.0 is above the €40–55 cluster. At line 678, "matrimonio (€67–70.8) is inside both" is also wrong: the Valencia cluster is a single point, €65 (market-dossier.md:176), so neither median sits inside it. Both errors understate the "not cheaper" reading rather than flip it.
- business/research/murcia-market.md:658 — The range cells mix VAT bases, and only sofá 2 pl (line 661) gives a VAT-adjusted range. How it fails: the matrimonio top end of €100 (line 659) is €121 VAT-adjusted, the chaise €180 (line 663) is €217.80, and the low end of €36 at line 658 is €43.56. These cells are labelled FACT and sit beside the Madrid/Valencia ranges, but they are not on one basis.
- business/research/murcia-market.md:648 — The method says Happy Clean's "low end is used", but the range cells at lines 661–662 take its high end (€90, €120) as the Murcia maximum. The figures column and the range column then disagree on which number is Happy Clean's.
- business/research/murcia-market.md:659 — The Granada cell reads "+€25" for a row that says the 150 cm bucket is used. granada-market.md:145 gives 135 cm +€25 but queen +€29, so the 150 cm figure is +€29, or the cell should show both.
- business/research/murcia-market.md:637 — The reputation criterion is "≥30 Google reviews on a *local* listing", yet it counts Happy Clean's 105 from a Torrevieja (Alicante) listing. Applying the criterion as written leaves two providers, not three.
- business/research/murcia-market.md:595 — Limpromur (line 595) and Grupo iClean (line 596) are general cleaners with upholstery NOT FOUND, which is the class that lines 600–603 say was "seen and not profiled". Both are still counted in the 20. Ofihogar (line 598) is a snippet-only row with no URL, labelled "Snippet only, not a FACT", which is not one of the four standard labels; HYPOTHESIS would be. The ≥15 floor still holds without these three rows (17), but the "20 profiled" headline at line 556 is padded.
- business/research/murcia-market.md:682 — "A price set inside €79–100 for sofás and €55–70 for a mattress would sit in the published middle" is a price band, which the Constraints rule out ("does not decide prices") even with the disclaimer that follows. It also blends the individual and matrimonio medians into one "mattress" band.

Checked clean:
- The 20 provider rows are bold, so the verify grep gives 34.
- Every §5 median recomputes, both as published and VAT-adjusted: 52.5/57.0, 67/70.8, 79/79, 100/100, 110/110, 40/40, 10/10. King correctly has no median (n=2).
- All Madrid/Valencia ranges and clusters match market-dossier.md §2.1/§3.1. The 10-of-15 and 5-of-16 transparency counts match too.
- Snippet-only data is labelled and kept out of ranges.
- No people are named. The label wording on the §4.2 rows is exact.
- "Range FACT (N sources)" follows the dossier's own rule (market-dossier.md:86–88), so it is not a finding.
- The evidence row's "none" sits in the Refactor column, so it is correct.

I added one line to my review memory, C:\Users\juanm\.claude\agent-memory\reviewer-opus\feedback_review_heuristics.md: check the dossier's grading before flagging a composite range label.
