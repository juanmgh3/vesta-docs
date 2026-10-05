T5 is done: §6 (demand signals and seasonality) and §7 (B2B pool and local acquisition channels) are filled in `murcia-market.md`, and the verify command prints 8. Two of the brief's asks could only be partly met. Google Trends has too little data for Murcia itself, so the seasonality curve is Spain's. And no free tool would give a keyword volume or CPC filtered to Murcia, so that is recorded as NOT FOUND and the national band is carried.

**Files changed**
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-market.md`: 239 lines added, no lines removed.
  - §6.1 Google Trends regional index for "limpieza de colchones" and "limpieza de sofás". Murcia scores 45 and 16, against Andalucía 54/25, Comunitat Valenciana 45/41 and Madrid 63/66. Each figure states the tool, the geo filter and the date.
  - §6.2 Seasonality: 5-year monthly means for Spain. The mattress term peaks in July–September and is lowest in December.
  - §6.3 Keywords: one Ubersuggest row, "limpieza de sofas murcia", 70 searches a month and €3.04 CPC. The tool itself flags that row "Outdated", and it is a Spain-wide search, not a Murcia filter.
  - §6.4 AEMET climate table for all 12 months (Murcia station 7178I), checked against the Alcantarilla station, with a reading on drying time and seasonality.
  - §7.1 Tourist dwellings by municipality from INE (May 2026). The regional tourism register published by CREM (2024) is shown beside it as a cross-check of a different kind.
  - §7.2 Hotels from INE for Murcia, Cartagena and Torrevieja; tourist apartments for the region; student residences from the Ayuntamiento's Informajoven page.
  - §7.3 B2B pool per radius: about 857 tourist dwellings in R2 against 9,910 in R3.
  - §7.4 Local acquisition channels, each labelled HYPOTHESIS: regional radio and TV, La Verdad, murcia.com, neighbourhood associations, community groups and marketplaces.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\murcia-market\feature.md`: T5 is marked `[x]` and its evidence row is added.

**Deviations**
- **Murcia Trends:** a Trends read for Murcia (`geo=ES-MC`) shows "no tiene suficientes datos" in every panel. The Murcia time series, city breakdown and related queries are therefore NOT FOUND.
- **Keyword volume and CPC:**
  - Ahrefs' free tool stopped at a Cloudflare human-verification check, which I did not try to get past.
  - Ubersuggest allows only one search without an account.
  - So no figure filtered to Murcia exists, and §6.3 carries the national band from `market-dossier.md` §6.1.
- **AEMET period:** the Murcia station's published normals cover 1984–2010, not 1991–2020. The section says so.
- **CREM bot-check:** CREM showed a bot-check page on the second page I opened, and I did not get past it. As a result, hotel counts for the belt towns and the other Mar Menor municipalities are NOT FOUND, and so are tourist dwellings in the core (R1). I did not read INE's section-level download that would give the core figure.

**Concerns**
- The Trends and keyword figures come from one tool each, so they are all labelled "FACT (1 source), provisional".
- The Murcia Trends values repeat in steps (45 is shared by seven regions), which means Trends is rounding a small sample. §6.1 states this, so the regional ranking reads as coarse.
- The neighbourhood-association count (24 of 441 entities) comes from matching "vecin" in the PDF text, so it is labelled ESTIMATE.
- The Hermanas Oblatas residence shows 82 places on the official page and 165 in a search snippet. I recorded it as a conflict and used 82.
- For T7: if the reviewer wants a second source for the B2B counts, the register cross-check in §7.1 does not count as one, because it is a different measurement on a different date.

## Verification output

$ cd /c/Users/juanm/Documents/dev/vesta-docs && git diff --stat HEAD; echo "exit $?"
exit 0

$ grep -c "^### [67]\." business/research/murcia-market.md; echo "exit $?"   (safety net, before the change)
0
exit 1

$ grep -c "^### [67]\." business/research/murcia-market.md; echo "exit $?"
8
exit 0

$ grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"; echo "exit $?"
0
exit 1

$ grep -n -i "TODO\|TBD\|lorem" business/research/murcia-market.md; echo "exit $?"
exit 1

$ grep -c "NOT FOUND" business/research/murcia-market.md; echo "exit $?"
46
exit 0

$ git diff --stat HEAD -- business/research/granada-market.md business/research/economic-model.md business/bank business/reports; echo "exit $?"
exit 0

$ git diff --numstat HEAD; echo "exit $?"
warning: in the working copy of 'business/research/murcia-market.md', LF will be replaced by CRLF the next time Git touches it
239	0	business/research/murcia-market.md
exit 0

$ grep -n -E "FACT( \(1)?$|FACT \(1 source\),?$|source\),$" business/research/murcia-market.md; echo "exit $?"
exit 1
