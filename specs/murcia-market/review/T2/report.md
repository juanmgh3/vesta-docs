T2 is done. §1 of `murcia-market.md` now has seven sourced subsections (1.1–1.7). The task is marked `[x]` and its evidence row is in, nothing is committed, and no file outside scope was touched.

Files changed:
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-market.md`: §1 written (191 lines added, none removed).
  - **1.1 Population:** 479,405 (official INE figure for 1-Jan-2025), with 479,491 from the Ayuntamiento as the second source.
  - **1.2 Core vs pedanías:** urban core 138,997 against 340,494 in the pedanías; the six largest pedanías and three core barrios are named.
  - **1.3 Household size:** 2.8, measured for Murcia (INE ADRH 2023), giving about 171,200 households as an estimate. Includes the 8 ADRH census districts as a separate geography.
  - **1.4 Age 45–64:** 29.7% (Padrón 2024), with 28.6% from Censo 2021 as the second source.
  - **1.5 Housing stock.**
  - **1.6 Ring table:** 18 towns, each with population, household size, households, km and minutes.
  - **1.7 Radii:** R1 ≈49,600–53,500 households, R2 704,814 people / ≈250,700 households, R3 666,428 people / ≈248,500 households, plus a reading of which ring one operator at 4 services/day can cover.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\murcia-market\feature.md`: T2 marked `[x]` and its evidence row added.

Deviations:
- The brief said "~54 pedanías"; the Padrón publication (via Murcia Plaza) says 59. I used 59 and recorded the difference. No figure depends on it.
- There is no direct household count for the municipality. The CREM Census 2021 pages redirect to an anti-bot check, which I did not get past, and the INE API doesn't expose Census 2021 household tables by municipality. Households are therefore an estimate (population ÷ the measured 2.8), and the direct count is marked NOT FOUND.
- Distances and drive times come from OSRM, a public route calculator over OpenStreetMap, and are labelled ESTIMATE. They are free-flow times with no traffic, so they come out shorter than real peak-hour drives. A measured typical drive time is NOT FOUND for every row.
- Main vs secondary dwellings and flats vs houses for the municipality are NOT FOUND. The only housing figure is a 7% vacancy rate from Censo 2021, sourced from a news article quoting it and labelled as that fallback.

Concerns:
- The two population sources come from the same register (the Padrón): the official INE revision and the Ayuntamiento's own release of the file. They are two publications, not two independent measurements, and the text says so.
- Household size 2.8 has only one source and is labelled provisional. The regional 2.7 is a different geography, so I used it only as a consistency check and did not average them.
- For Cabezo de Torres the route came out at 13 km / 12 min, which looks too long; the geocoder's point for it is not its centre. I left it as an upper bound.
- In the coastal R3 towns (Torrevieja, Orihuela, Mar Menor), the Padrón counts registered residents, many of them second-home owners, so the household estimate overstates main homes. This is flagged in the file and those towns are not mixed with the inner belt.
- For the model (my reading): R1 alone (≈50,000 households) is smaller than Granada R1, because most of Murcia's population lives in the pedanías rather than the core.

## Verification output

$ ls package.json; git diff --stat HEAD; echo "exit $?"; grep -c "^### 1\." business/research/murcia-market.md; echo "exit $?"
ls: cannot access 'package.json': No such file or directory
exit 0
0
exit 1

$ grep -n -i "TODO\|TBD\|lorem" business/research/murcia-market.md; echo "exit $?"
exit 1

$ grep -c "NOT FOUND" business/research/murcia-market.md; echo "exit $?"
7
exit 0

$ git ls-files --eol business/research/murcia-market.md; git diff --numstat HEAD; grep -c "^### 1\." business/research/murcia-market.md; echo "exit $?"
i/lf    w/lf    attr/                 	business/research/murcia-market.md
warning: in the working copy of 'business/research/murcia-market.md', LF will be replaced by CRLF the next time Git touches it
191	0	business/research/murcia-market.md
7
exit 0

$ grep -c "^### 1\." business/research/murcia-market.md; echo "exit $?"
7
exit 0

$ git diff --numstat HEAD; echo "exit $?"
warning: in the working copy of 'business/research/murcia-market.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'specs/murcia-market/feature.md', LF will be replaced by CRLF the next time Git touches it
191	0	business/research/murcia-market.md
2	1	specs/murcia-market/feature.md
exit 0
