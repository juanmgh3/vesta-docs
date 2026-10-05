## Open findings
- F-007 — open — §1 (line 91) untouched by T11; this belongs to T7
- F-019 — open — §1 (line 61) untouched by T11; this belongs to T7
- F-020 — open — §1 (lines 119–123) untouched by T11; this belongs to T7
- F-021 — fixed — business/research/murcia-market.md:634-639
- F-022 — fixed — business/research/murcia-market.md:695-697
- F-023 — fixed — business/research/murcia-market.md:684-688 (I rechecked every bound against the clusters)
- F-024 — fixed — business/research/murcia-market.md:664, 669 (the VAT-adjusted range is gone; the header now says the bases are mixed; I recomputed all VAT-adjusted values and medians and they are correct)
- F-025 — fixed — business/research/murcia-market.md:653-654 (the method text now matches the 669/670 cells; the deviation is acceptable, but see the Important below)
- F-026 — fixed — business/research/murcia-market.md:667 (matches granada-market.md:145, "135cm +€25, queen +€29")
- F-027 — fixed — business/research/murcia-market.md:640-643
- F-028 — fixed — business/research/murcia-market.md:556-561, 601, 615-617 (recounted: 6 + LavaYa + 10 = 17; no stale "20" or "13" left in §4–§7)
- F-029 — fixed — business/research/murcia-market.md:690-692
- F-030 — fixed — business/research/murcia-market.md:960, 964-966 (checked against §2.2 lines 347-350, 390-391)
- F-031 — fixed — business/research/murcia-market.md:714-721 (provenance is stated per column; see the Minor on the stated reason)
- F-032 — fixed — business/research/murcia-market.md:853, 944-945
- F-033 — fixed — business/research/murcia-market.md:780-784 (one downstream dependent is left, see Minor)
- F-034 — fixed — business/research/murcia-market.md:812-817 (I recomputed the sums: sunshine 2,953 and minimum 12.21 are right)
- F-035 — fixed — business/research/murcia-market.md:844-846 (Jan 16.6 lowest maximum, Dec 68% highest humidity, Jun–Aug the three highest maxima; all correct)
- F-036 — fixed — business/research/murcia-market.md:795-799 (the non-standard wording is gone and the conflict is carried and marked CONFLICTING; the remaining label gap is a Minor below)
- F-037 — fixed — business/research/murcia-market.md:962 (the FACT now covers only Cronoshare, with both URLs and a date; leaving Habitissimo unlabelled is the right call when no re-read was allowed; the remaining claim in the "What it is" column is a Minor below)
- F-038 — fixed — business/research/murcia-market.md:958
- F-039 — fixed — business/research/murcia-market.md:961 (matches market-dossier.md:455-457)
- F-040 — fixed — business/research/murcia-market.md:723-726 (7 + 2 = 9 matches the core terms at trends-keywords-addendum.md:184-192; disclosing the gap without a reason closes it, and inventing a reason would be worse)

## Important
- business/research/murcia-market.md:690-691 — "Sercomanga sets most low ends and Limpiezalto most high ends" is false against the eight rows at 666-673. The executor's concern is confirmed. Low ends: Sercomanga sets 3 outright (rows 1, 2, 4), plus a tie with Clean-Home at 3 pl €85; Clean-Home sets king and chaise; Happy Clean sets sillón and silla. High ends: Limpiezalto sets 4 of 8 (matrimonio, king, chaise, sillón); Happy Clean sets sofá 2 pl and 3 pl, Clean-Home sets individual and Brillamu sets silla. The heading "set by two local lists" is also wrong: Happy Clean, a Torrevieja multi-province operator (line 583), sets 4 range ends. T11's own F-025 choice caused this, because Happy Clean's high end became the 2 pl and 3 pl maximum. A T7 reader would take Sercomanga and Limpiezalto as the price brackets when the table does not show that. Fix: reword to the counted split, or drop the sentence.

## Minor
- business/research/murcia-market.md:718-720 — the reason given for the index/split mismatch ("normalised per region … so the index ratio and the split do not match") is mathematically wrong. Per-region totals cancel, so (idxA/idxB)/(splitA/splitB) must be the same constant, maxB/maxA, in every region. With the corrected cells and ±0.5 rounding, that quotient is Madrid 1.00–1.07, Valencia 1.05–1.15, Murcia 1.13–1.29 and Andalucía 1.21–1.33. Madrid and Andalucía do not overlap, so the two widgets still disagree. The file presents this disagreement as expected by construction. Fix: say the two widgets disagree on the within-region ratio and that the cause is not established.
- business/research/murcia-market.md:943-945 — "the reverse of the household search curve in §6.2" assumes a summer search high. §6.2 (780-784) now explicitly refuses to read one, so this hypothesis still rests on the claim F-033 removed. (Line 852-854 is fine: the top three monthly means are Sep 12.0, Jul 11.4 and Aug 11.0, and it carries the caveat.)
- business/research/murcia-market.md:795-799 — the carried volume bands now have no label at all, while the CPC band just before them carries "ESTIMATE". The file already has a pattern for carried figures, "FACT (per `market-dossier.md` §5.1) … carried by reference" (line 461). Writing "FACT (1 source), provisional, per addendum §4, retrieved 2026-07-07" would satisfy the rule without a re-read.
- business/research/murcia-market.md:962 — the "What it is" cell still says "Cronoshare and Habitissimo run Murcia categories for mattress and upholstery cleaning". §4.1 (551-552) records only a Habitissimo "limpieza de tapicerías / Murcia" page, with no Murcia row. The Habitissimo mattress category has no basis, and the claim now sits unlabelled next to an evidence cell that refuses it FACT status.

## Cannot verify from diff
- The re-read values themselves (the Trends split cells 70/30, 63/37, 50/50, AEMET 7178I, CREM and INE for San Javier) rest on the executor's browser and curl output. I checked that they are internally consistent and that every dependent figure moved with them (Murcia "70%" at 753; no 69% left), but not that they match the live source.
- §1–§3 untouched: diff.md has no hunk before line 553, and the line-556 hunk is in §4.1. I accept that and did not re-run git.

Memory updated: C:\Users\juanm\.claude\agent-memory\reviewer-opus\feedback_review_heuristics.md (extended the Trends-quotient heuristic, and added a rule to recount "who sets the ends" prose after a change to how the range cells are built).
