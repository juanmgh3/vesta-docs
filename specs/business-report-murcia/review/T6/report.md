T6 done by the orchestrator (main thread): chapters 7–9 written as fragments, build runs, every load-bearing figure carries its chip. The T11 fixes to ch. 1–2 and 4–6 (F-031 to F-034) are committed in c5488ce for the reviewer to confirm.

Files changed:
- `business/reports/_src/murcia/ch-07-precios.html` — what conditions any price (IVA wedge 82.6 %, €1.5 material, per-visit costs, Murcia medians), the three architectures (table 7.1: A / B / C grids vs the Murcia median; service mix and average piece prices 56.75 / 72.50 / 82.81), contribution per visit (table 7.2: net price, contribution per piece, single and two-piece paid visit, CAC payback pieces), the Phase-2 figures (−34 / −22 / −6) named as a different basis, why B (A's cash profile and the DIY spray, C's execution bar, B's fit and the two-piece discipline, C tiers later), packs and maintenance plan, B2B menu (−15 % / −25 % / periodic / STR; the 30-mattress hotel ≈ €1,230 net). 18 chips.
- `business/reports/_src/murcia/ch-08-captacion.html` — Google (CPC band and neighbouring sectors, CAC €71 band €36–111, close rate Not found, Murcia volume/CPC Not found with the one outdated Ubersuggest row, 70/30 mattress share), entry budget €150–300 and the model's ads ramp, campaign set-up (phrase match, negatives, call asset, LSA pay-per-lead €6–50 with no category), referral (40 % / 25 %, organic ramp 0→12 in the realista scenario), reviews, local channels in test order (associations 441 / 24 / San Lorenzo-Universidad, groups, Cronoshare 2–15 % / 6 %, regional media), seasonality (Murcia Not found, Spain proxy, climate: 31–34 °C Jun–Aug, 68 % / 16.6 °C Dec–Jan, 36 rain days). 28 chips.
- `business/reports/_src/murcia/ch-09-costes.html` — direct cost per visit (table 9.1: 1.5 / 4.5 / 1.0 / 71), the travel derivation (3.5 inside 10 km; 2.80 / 3.05 / 4.4–4.5 / 7.1–9.4; the 50/35/15 mix Hypothesis; band 3.5–6.0; fuel 1.80 / 1.89 €/l and 0.11 €/km at 6 l/100 km Hypothesis; 0.175 all-in), parking (1.90 / 2.70, 40 % share, €1.0), contribution (59.92 / 55.36 / 92 % / 99.65 / −18.08 / +40.33), fixed costs (table 9.2: 80 / 30 / 50 / 25 / 1 = 186; 250 → 356; band 205–300; flat-rate months Hypothesis; extension below SMI), what is not modelled (IRPF, drawings, IVA timing), break-even (table 9.3: 186 / 486 / 656 → 3.4 / 8.8 / 11.8 pieces, 1.9 / 4.9 / 6.6 visits; capacity 88). 22 chips.
- `business/reports/business-report-murcia.html` — rebuilt.
- `specs/business-report-murcia/feature.md` — T11 and T6 marked `[x]`, evidence rows, Progress lines (to be committed with T6).

Sources: `pricing-decision.md` §2.1–§2.4, §3.1–§3.6, §4.1–§4.4, §5.1–§5.2; `murcia-model.md` §1 (I1–I3, M1, I6–I9, I11, I19), §2.1–§2.3, §2.6; `murcia-model-tables.md` T0, T1 (ads ramp, organic visits), T7, T8, T9; `murcia-market.md` §5 (medians), §6.1 (70/30), §6.2–§6.3 (Spain proxy, Ubersuggest row, Not found), §6.4 (climate), §7.4 (channels), §8.3 (SER), §8.4 (fuel), §8.5 (travel per town); `marketing-research-addendum.md` R4 (Cronoshare lead cost, HomeServe 40/25), R5 (CPC neighbours, LSA, budget tier, call assets, negatives, close rate Not found); `market-dossier.md` §6.1–§6.3 (CPC, CVR, CAC) and §9.1 (cuota band, extension).

Deviations:
- The three price grids are called "una propuesta" and left unchipped (PROPOSAL has no chip), as in ch. 1–2; the medians beside them are Estimate.
- The CAC derivation sentence ("un cliente de cada ocho visitas … una de cada tres consultas") paraphrases the dossier §6.3 funnel (8 % CVR, ~35 % close) and is chipped Estimate as the dossier labels it.
- "€1,230 net" for the 30-mattress hotel is pricing-decision §2.4's own figure (B €69 −25 % = €51.75, net €42.77 × 30 ≈ €1,283; the file prints ≈€1,230 and that figure is carried as printed).
- The ads ramp 150→400 and organic 0→12 are read from murcia-model-tables.md T1 (B × realista), where ads reach 400 in June (month 9) and organic reaches 12 in September.

## Verification output

$ node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-07-precios.html business/reports/_src/murcia/ch-08-captacion.html business/reports/_src/murcia/ch-09-costes.html && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-0[789]*.html; echo "exit $?"
C:\Users\juanm\Documents\dev\vesta-docs\business\reports\business-report-murcia.html: 14 fragments, 8 svg, 3312228 chars
business/reports/_src/murcia/ch-07-precios.html:18
business/reports/_src/murcia/ch-08-captacion.html:28
business/reports/_src/murcia/ch-09-costes.html:22
exit 1
(exit 1 is the placeholder grep finding nothing)

$ grep -n -i "cabe destacar\|es importante\|en este sentido\|por otro lado\|además\|sin embargo\|por tanto\|sino " business/reports/_src/murcia/ch-0[789]*.html; echo "exit $?"
exit 1
