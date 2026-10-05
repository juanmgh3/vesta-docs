T6 is done: §8 of `murcia-market.md` now has six subsections (8.1–8.6), and the `### 8.` count went from 0 to 6. The edit only adds lines (148 added, none removed), and the label grep still prints 0 (no "FACT (1 source" without ", provisional"). Nothing is committed.

The findings that matter most for the next step:

- **Travel (€3.5 per visit, the model's input I6).** It only holds for jobs within about 10 km of the centre. At the model's own €0.175/km, a single round trip costs €4.4–4.6 to Molina or the bigger pedanías (12–13 km), €7.1–9.4 to Ceutí, Santomera or Archena, and €10–28 to the outer ring. The model's 40 km/day only works as a whole-municipality-plus-belt day if jobs are chained.
- **Parking.** The old ORA is now the SER (Servicio de Estacionamiento Regulado, BORM 16-Jun-2025). In the centre you can stay at most 90 minutes in one area (€1.90); in the next ring out, 150 minutes (€2.70). The model doesn't include parking. There is an autónomo pass (€30/month), but it requires an industrial vehicle; whether the founder's car qualifies is not recorded.
- **Murcia low-emission zone.** No zone is in force. Only the technical project was approved (Junta de Gobierno, 30-Dec-2025). Perimeter and rules: NOT FOUND. Molina de Segura (inner belt) does have one, but fines are suspended until January 2028.
- **Regional "Cuota Cero".** €2,920, for an initial alta (or none in the two prior years), unemployed the day before, and applied for within one month of the alta. The founder's alta has no recorded date or region, so I don't say whether they qualify.
- **Financing.** Six instruments with conditions read on the issuer's own page: ICREF Financia 100, CIMM-Emprende (municipal), Aválam (the regional guarantee society), ENISA, ICO and MicroBank. INFO Murcia and Cajamar: NOT FOUND.

Files changed:
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-market.md`: §8 filled with 8.1 cuota and Cuota Cero, 8.2 low-emission zone, 8.3 parking, 8.4 fuel, 8.5 the €3.5 travel check, 8.6 financing.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\murcia-market\feature.md`: T6 marked `[x]` and its row added to the Evidence table.

Deviations:
- **Autónomo cuota.** I took it from `market-dossier.md` §9.1 rather than researching it again, because it is set nationally and I found no Murcia-specific modifier. The only Murcia-specific part is Cuota Cero.
- **"Existing alta moved" to Murcia.** The CARM pages don't say whether moving an existing alta counts, so that row is NOT FOUND and nothing is concluded.
- **Parking with VAT.** The bulletin gives tariffs before VAT. The VAT-included figures are labelled ESTIMATE (×1.21) and match the concessionaire's published figures.
- **Fuel.** Read from the government's Geoportal de Gasolineras service: one snapshot (05/10/2026 20:06), with means and medians labelled ESTIMATE.
- **Fuel cost per km.** Uses an assumed consumption of 6 l/100 km, labelled HYPOTHESIS, because the car is not recorded.
- **Travel base point.** It is Glorieta de España, as in §1.6.
- **Mileage reference.** I added the €0.26/km tax-exempt mileage allowance (Orden HFP/792/2023) only as a reference ceiling.
- **Molina's zone.** I included it although the task only names Murcia, because Molina is in the inner belt.

Concerns:
- **INFO Murcia.** The Incentivos Regionales page redirected to a bot-check; I didn't get past it and wrote NOT FOUND. INFO's open-calls list has nothing aimed at starting a small service business.
- **Single sources.** Every FACT in §8 is "FACT (1 source), provisional": these are bulletins and issuers' own pages with no independent second source. T7 should re-open the ones it uses.
- **ICREF line total.** The page says €68 M and is undated. Press items surfaced by the search report later increases; I didn't open them and didn't use their figures.
- **CIMM-Emprende interest rate.** The council page only says "bonificados"; the Euribor + 1% appears only in press reports and is not used.
- **SER sector C.** It is defined in the ordinance, but the SER is introduced first only in sectors A and B; the row says so.
- **No new findings for T7.** I raised none.

## Verification output

$ git diff --stat HEAD; echo "exit $?"
exit 0

$ grep -c "^### 8\." business/research/murcia-market.md; echo "exit $?"   (pre-change)
0
exit 1

$ grep -c "^### 8\." business/research/murcia-market.md; echo "exit $?"
6
exit 0

$ grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"; echo "exit $?"
0
exit 1

$ grep -n "FACT (1$\|FACT$" business/research/murcia-market.md; echo "exit $?"
exit 1

$ grep -n -i "TODO\|TBD\|lorem" business/research/murcia-market.md; echo "exit $?"
exit 1

$ grep -c "NOT FOUND" business/research/murcia-market.md; echo "exit $?"
56
exit 0

$ git diff --stat HEAD -- business/research/granada-market.md business/research/economic-model.md business/bank business/reports; echo "exit $?"
exit 0

$ git diff --numstat HEAD; echo "exit $?"
warning: in the working copy of 'business/research/murcia-market.md', LF will be replaced by CRLF the next time Git touches it
148	0	business/research/murcia-market.md
exit 0
