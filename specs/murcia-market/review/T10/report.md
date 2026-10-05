T10 is done: the verify command now prints 0 (it printed 16 before the sweep), and no figure in the file changed except table id 56940 → 56934. Nothing is committed.

**Files changed**
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-market.md`
  - F-015 / F-016: every single-source FACT now reads exactly "FACT (1 source), provisional", with any qualifier moved after it. That covers table rows at lines 36, 51, 64–69, 82, 83, 84, 121, 122, 458, 459, 485 and 486. It also covers line 91 (the label is no longer split across a line break), line 111 (was "FACT, 1 source"), line 329 (was "FACT (1 source: INE ADRH, read directly)") and the top-ten caption at line 357 (was "income FACT, INE ADRH 2023").
  - F-017: the AEAT column is now called "Common-territory mean". The rank reads "518th in the common territory", and line 300 says "below each source's own wider mean" (the ADRH national mean and the AEAT common-territory mean). "National" no longer appears next to an AEAT figure.
  - F-018: the citation now points to table 56934, series ECP320, and the API URL was updated to match.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\murcia-market\feature.md`: T10 marked `[x]` and its row added to the evidence table.

**Deviations**
- The brief says "keeping the series code", but the file had no series code at that citation. I added "series ECP320", taken from the F-018 finding. I did not re-read it at the source, because this task allows no new research.
- I relabelled lines 36, 83 and 84 too, although no finding names them. They are single-source rows labelled plain FACT, and the task asks for a whole-file sweep. Lines 34 and 119 stay plain FACT because each has a second-source row directly below it (35 and 120).

**Concerns**
- Lines 61–63 are labelled "FACT (2 publications)": an Ayuntamiento press release and Murcia Plaza, which reads the same Padrón. Under §1.1 that could count as one register. No finding names these rows, the T8 review let them through, and I left them as they are. The reviewer should take a look.
- The numeric-token diff also shows, besides the table id, the "1" from each new label and "320" from ECP320. Neither is a figure.

## Verification output

$ grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"; echo "exit $?"   (pre-change)
16
exit 0

$ grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"; echo "exit $?"   (post-change)
0
exit 1

$ diff <(grep -oE '[0-9][0-9.,]*' before.md | sort) <(grep -oE '[0-9][0-9.,]*' business/research/murcia-market.md | sort)
138a139,142
> 1
> 1
> 1
> 1
844a849
> 320,
1037,1038c1042,1043
< 56940
< 56940,
---
> 56934
> 56934,

$ grep -n -i "TODO\|TBD\|lorem" business/research/murcia-market.md; echo "exit $?"
exit 1

$ git diff --stat HEAD -- business/research/granada-market.md business/research/economic-model.md business/bank business/reports; echo "exit $?"
exit 0
