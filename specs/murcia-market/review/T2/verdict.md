## Open findings
- F-001 — open — founder-inputs.md is not in this diff (only murcia-market.md and feature.md changed), so Block 5 at :146 is untouched
- F-002 — open — founder-inputs.md is not in this diff, so FLAG-RESEARCH D at :169 is untouched

I recomputed all the arithmetic and it checks out:
- §1.2: the core/pedanía split sums to 479,491 and the percentages are 28.99/71.01. The six largest pedanías sum to 95,446, which is 28% of the pedanías, and the rest average about 4,623.
- §1.3: 479,405 ÷ 2.8 = 171,216. The band works out to 168,212–174,329. Using 2.4 instead adds 28,536 (+16.7%).
- §1.4: the age-band sums are 141,136 and 131,478, giving 29.72% and 28.60%. Applied to 479,405 that is 142,383.
- §1.6: every ring row's population ÷ household size matches the rounded household figure.
- §1.7: the inner belt sums to 225,409 people and ≈79,501 households. The outer ring sums to 666,428 people and ≈248,509 households. R1 is 49,642–53,460. The km/min ranges, the 74–90 min round trips, and the ×2.6 / ×1.1 / ×2.05 ratios against Granada all reproduce.

## Critical
- business/research/murcia-market.md:175-176 — The ring populations and household sizes are labelled plain FACT, but by the file's own rule they come from one source and are not marked provisional. Line 175 counts "CREM agrees" as confirmation for the Murcia-region rows. Lines 41-42 say a CREM republication of INE "is not counted as a third source". So every ring population is effectively one source, and Orihuela and Torrevieja say so explicitly. All the household sizes are "FACT (1 source)" with no "provisional". These rows feed the 225,409 / ≈79,500 inner belt in R2 and the whole of R3 (lines 195-196). That fails the Accept line ("population and household figures are FACT with two sources or declared provisional") and the label constraint for load-bearing figures. The fix is a label edit: "FACT (1 source), provisional", and drop the CREM-agreement claim or the line 41-42 rule, whichever is wrong. The same slip appears at line 194, where R1's 138,997 is "FACT, 1 source" without the "provisional" it carries at line 49.

## Important
- business/research/murcia-market.md:194 (vs :108-110 and :199-201) — R1's upper bound divides by 2.6, "the lowest district value". Lines 108-110 say the district table "is not used to size R1" because the district-to-barrio mapping was not done. Line 194 uses it to size R1 anyway. Lines 199-201 call 2.6 a "bound", but that is unsupported. Without the mapping, nothing shows the 24-barrio core is made of whole districts, and a subset of a district can average below that district's 2.6. That breaks the brief's "incompatible geographies flagged, never blended": a district-level divisor is applied to the Ayuntamiento's core boundary. The fix is to drop the ÷2.6 bound or label it explicitly as a borrowed proxy (HYPOTHESIS), and to remove the contradiction with line 109.
- business/research/murcia-market.md:49-51, 61-69, 82-84, 110, 116-119, 134 — Most FACT rows don't carry the retrieval date. The brief's constraint says "Every FACT row carries its source URL inline and the retrieval date (2026-10)", and only lines 34-36 and 81 do. Lines 118-119 (65+ share and mean age, both FACT) have no URL at all, just "INE ADRH table 31123". Prose FACTs have no source either: line 91 ("the regional 2.7 is the highest in Spain") and lines 186-187 (one-person shares for Torrevieja 34.9% and Los Alcázares 30.6%, which appear in no table).

## Minor
- business/research/murcia-market.md:37 — The population verdict "Graduated" rests on two publications of the same register. Lines 39-41 admit they are "not two measurements", and the brief requires a second *independent* source. The disclosure is honest, but the verdict label overclaims compared with Granada's "2 independent sources" (granada-market.md:20). Saying "two publications of one register" in the verdict cell would make it consistent.

## Cannot verify from diff
- Every source value: populations, the ADRH sizes, the age bands, the 7% vacancy rate and the OSRM routes.
- The claims that CREM's Censo 2021 pages are bot-walled and that INE operation 463 has no municipal household tables. These are why the direct household count is NOT FOUND instead of FACT (brief line 6). If either is wrong, the Accept's "household figures are FACT" was achievable.
- 59 vs ~54 pedanías (the report's declared deviation).
- That market-dossier.md §5.3 read "45–65" as 45–64 (line 124). Lines 306-307 of the dossier don't say which reading it used.

No names or personal data. founder-calibration.private.md is not referenced. No out-of-scope files were touched. The `### 1.` verify count (7) and the T2 evidence row match the report's final run.
