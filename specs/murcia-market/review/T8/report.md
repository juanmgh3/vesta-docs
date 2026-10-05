T8 is done: all six findings, F-001 to F-006, are fixed with text-only edits. No population, household, distance or percentage figure from T2 changed. The one exception is the R1 upper bound, which F-004 told me to remove. Both verify commands return counts, exit 0. Nothing is committed.

Files changed:
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-market.md`, §1:
  - **F-006:** the population verdict now reads "Two publications of one register".
  - **F-003:**
    - The ring table labels now say: the Murcia municipality is two publications of one register, and every other population and household-size row is "FACT (1 source), provisional".
    - The sentence claiming CREM's figures "match" INE's is replaced by one saying CREM republishes the INE figures and, under the §1.1 rule, a republication is not a second source.
    - R1's 138,997 is now "FACT (1 source), provisional". The R2 and R3 sum cells name the provisional rows they add up.
  - **F-004:** the ÷2.6 upper bound is gone, so R1 households read ≈49,600 (ESTIMATE: ÷2.8 municipal). The paragraph under the radii table now says the district values are not used to size R1.
  - **F-005:**
    - Every FACT row and FACT source note now has "Retrieved 2026-10".
    - The 65+ share and mean-age rows have the INE table 31123 URL.
    - The regional "2.7 highest in Spain" claim now cites INE table 60134.
    - The Torrevieja and Los Alcázares one-person shares now cite ADRH tables 30841 and 31123.
    - Both prose claims are labelled "FACT (1 source), provisional".
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\founder-inputs.md`, 3 lines added, 0 deleted:
  - **F-001:** a SUPERSEDED mark under the Block 5 "Launch window" item.
  - **F-002:** a SUPERSEDED mark under FLAG-RESEARCH D, pointing to `murcia-market.md` §2.
  - **F-001 scope:** a new addendum line naming the Block 5 "Launch window" item and FLAG-RESEARCH D.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\murcia-market\feature.md`: T8 is marked `[x]` and its evidence row is added.

Deviations:
- **F-001 scope sentence:** I added a new sentence instead of rewording the existing one. The addendum is already committed (e198c22), so rewording it would show as a deleted line, and T8 allows additions only in `founder-inputs.md`.
- **F-003, CREM mention:** I left the INE row in §1.1 as it was ("same figure republished by CREM"). It doesn't claim confirmation, and the paragraph below it already says the CREM row is not counted as a source. The claim that did say confirmation was in §1.6, and I fixed that one.
- **Labels kept "FACT (1 source)":** the one-person share, 65+ share and mean-age rows were not changed to "provisional". F-003 names only the ring rows and R1.

Concern: I attributed the "highest in Spain" ranking to INE table 60134 without reopening that table, because T8 rules out new research. That is why it carries "provisional". T7's re-check should confirm it.

## Verification output

$ ls package.json; git diff --stat HEAD (safety net, before edits)
ls: cannot access 'package.json': No such file or directory
 business/research/murcia-market.md     | 191 +++++++++++++++++++++++++++++++++
 specs/murcia-market/feature.md         |  25 ++++-
 specs/murcia-market/review/findings.md |   4 +
 3 files changed, 219 insertions(+), 1 deletion(-)

$ grep -c "provisional" business/research/murcia-market.md (before)
5
exit 0

$ grep -c "SUPERSEDED 2026-10-05" business/research/founder-inputs.md (before)
3
exit 0

$ grep -c "provisional" business/research/murcia-market.md
12
exit 0

$ grep -c "SUPERSEDED 2026-10-05" business/research/founder-inputs.md
5
exit 0

$ git diff --numstat HEAD -- business/research/founder-inputs.md
3	0	business/research/founder-inputs.md
exit 0

$ diff nums_before.txt nums_after.txt (sorted numeric tokens of murcia-market.md, before vs after)
Only added: section refs (1, 1., 1.1), "10" and "10." (the retrieval dates 2026-10), 2026, 3, 2023, 2.8 (the new R1 divisor cell), 4600 and 500000 (inside the added web.murcia.es URL), and table ids 30841, 31123, 60134 and "60134,".
Removed: `2.6` (one instance, the R1 divisor).
Changed: `49,600–53,500` → `49,600`.
exit 1

$ grep -n -i "TODO\|TBD\|lorem" business/research/murcia-market.md
exit 1
