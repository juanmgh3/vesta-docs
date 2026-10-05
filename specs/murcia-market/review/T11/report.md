T11 is done: F-021 to F-040 are closed in §4–§7 of `murcia-market.md`. Both verify commands pass (the label grep prints 0 and "Spain proxy" appears 3 times), and §1–§3 are untouched (the first diff hunk is at line 556). Nothing committed.

**Files changed**
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-market.md`: 89 lines added, 52 removed, all in §4.1–§7.4.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\murcia-market\feature.md`: T11 marked `[x]` and its evidence row added.

**What the three re-reads gave**
- **F-031, Google Trends (re-read 2026-10-05):**
  - The two index columns come from the per-term widgets of the two-term request. Single-term requests return the same values, so these columns are confirmed.
  - The split column comes from the comparison widget of the same request. Two reads gave the same values, and three cells were wrong in the file:

| Region | Old split | New split |
|---|---|---|
| Murcia | 69/31 | 70/30 |
| Andalucía | 62/38 | 63/37 |
| Valencia | 51/49 | 50/50 |

  - Madrid's 48/52 was correct. The prose figure for Murcia changes from 69% to 70%.
  - The counts "45 shared by seven regions" and "16 by five" were also confirmed.
- **F-034, AEMET station 7178I:** all 12 monthly rows match the page, and the 1984–2010 period is confirmed. The Year row is AEMET's own published annual row, not a sum. No cell changed.
- **San Javier (review note on §7.1):** I read both sources. CREM gives 940 / 4,779 (data at 31-Dec-2024) and INE table 39363 gives 940 / 4,778 (May-2026). Both figures stand. The other six CREM figures quoted in §7.1 also match the page.

**Figures changed without a re-read (arithmetic or correction on rows already in the file)**
- **F-028:** providers profiled go from 20 to 17. The two general cleaners with no upholstery offer and the snippet-only row stay in the table but are no longer counted. In §4.3 this changes "6 of 20" to "6 of 17" and the quote-only count from 13 to 10.
- **F-027:** providers meeting the reputation criterion go from three to two. Happy Clean is excluded because its reviews sit on a Torrevieja (Alicante) listing.
- **F-024:** I removed the VAT-adjusted range "(€70–96.8 VAT-adjusted)" from the sofá 2 plazas row, so every range cell is now on published prices.
- **F-026:** the Granada cell for the 150 cm mattress changes from "+€25" to "135 cm +€25, queen +€29", as `granada-market.md` §3 gives it.
- **F-029:** I deleted the sentence proposing a €79–100 / €55–70 price set, since this file does not choose prices.
- **F-033:** I deleted the "≈1.7×" peak-over-trough ratio and the "highest quarter is July–September" claim. The means rest on 3–5 values with no spread computed.

**Deviations**
- **F-025:** I fixed the method text instead of the ranges. It now says the medians use Happy Clean's low end and the range cells span its full published range. That leaves the €60–90 and €85–120 ranges unchanged.
- **F-036:** I did not give the carried keyword band a new FACT label, because it was retrieved in July 2026, not 2026-10. It is now carried by reference to the addendum, and the 1.3K vs `<100` conflict is marked CONFLICTING.
- **F-037:** only Cronoshare is labelled FACT, with its two URLs from §4.2. Habitissimo has no recorded URL in the file and re-reading it was not allowed, so I said so instead of labelling it.
- **F-040:** I state that the other seven core terms (including the three "ácaros" terms) were not requested and their index is NOT FOUND. I did not give a reason, because none is recorded.
- I did not update `specs/murcia-market/review/findings.md` (marking F-021 to F-040 fixed) because it is outside the task scope.

**Concerns**
- This needs a decision before T7: in §5, the line "Sercomanga sets most low ends and Limpiezalto most high ends" now claims more than the table shows. With the full Happy Clean range in the cells, each sets about half of the eight rows. No finding covers it, so I left it.
- The Trends split cells may have been sampled on an earlier read rather than mis-transcribed; I can't tell which. Today's two reads agreed, so I corrected the cells to them.

## Verification output

$ git status --short; Test-Path package.json; git diff --stat HEAD   (safety net)
```
?? .torq-flow/
no package.json
```
exit 0

$ curl -sL -A "Mozilla/5.0" "https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?l=7178I&k=mur" -o aemet.html
```
75235 aemet.html
```
exit 0
Parsed rows Enero to Diciembre match the file; `Año | 18.6 | 24.9 | 12.3 | 297 | 58 | 36.5 | … | 2967`; `Periodo: 1984-2010`.

$ Trends in-page explore + comparedgeo (Browser pane)
```
GEO_MAP (split): ES-MD 48/52, ES-AN 63/37, ES-MC 70/30, ES-VC 50/50; second read identical
GEO_MAP_0: ES-MD 63, ES-AN 54, ES-MC 45, ES-VC 45, top Canarias
GEO_MAP_1: ES-MD 66, ES-VC 41, ES-AN 25, ES-MC 16, top Castilla-La Mancha
single-term requests: identical; c45=7, s16=5; window 2021-10-05 2026-10-05
```

$ CREM econet PM12/sec10 (Browser pane), 2024 column
```
San Javier 940 / 4.779; Murcia 608 / 2.931; Cartagena 1.066 / 5.869; Torre Pacheco 677 / 3.215; Alcázares 360 / 1.763; San Pedro 254 / 1.302; Molina 6 / 31; Fecha de actualización: 16/06/2025; datos a 31 de diciembre
```

$ curl -s "https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/39363?nult=1" -o ine39363.json
```
San Javier. Viviendas turísticas. Dato base.  [(2026, 5, 940.0)]
San Javier. Plazas. Dato base.  [(2026, 5, 4778.0)]
```
exit 0

$ grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"; echo "exit $?"
```
0
```
exit 1

$ grep -c "Spain proxy" business/research/murcia-market.md; echo "exit $?"
```
3
```
exit 0

$ git diff --numstat HEAD; echo "exit $?"
```
89	52	business/research/murcia-market.md
```
exit 0

$ git diff -U0 HEAD -- business/research/murcia-market.md | grep "^@@"
```
first hunk: @@ -556 +556,4 @@ ; last: @@ -928,2 +965,2 @@ (no hunk before line 556)
```
exit 0

$ grep -n "FACT *$\|FACT (1$" business/research/murcia-market.md; echo "exit $?"
```
```
exit 1

$ grep -n -i "TODO\|TBD\|lorem" business/research/murcia-market.md; echo "exit $?"
```
```
exit 1

$ git diff --stat HEAD -- business/research/granada-market.md business/research/economic-model.md business/bank business/reports; echo "exit $?"
```
```
exit 0

$ grep -c "NOT FOUND" business/research/murcia-market.md; echo "exit $?"
```
48
```
exit 0
