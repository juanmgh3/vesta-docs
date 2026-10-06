T4 done by the orchestrator (main thread), per the Constraints: chapters 1–3 written as fragments, build runs, every load-bearing figure carries its chip.

Files changed:
- `business/reports/_src/murcia/ch-01-resumen.html` — eight numbered points (market, prices, competition, single-visit loss, year 1, travel and parking, break-even, three things before the first job) plus a callout. 19 chips.
- `business/reports/_src/murcia/ch-02-arranque.html` — opening prices table (B grid vs Murcia medians), two-pieces rule, service area R2 with km and travel cost per town and the R3 rule, before-the-first-job block (RC insurance, Google listing and reviews, SER parking hours/sectors/tariffs, call script), the alta-date block (tarifa plana months, Cuota Cero conditions and the 15-Oct-2026 deadline), closing checklist callout. 23 chips.
- `business/reports/_src/murcia/ch-03-empresa.html` — catalogue, Chile reference, equipment and consumables, method vs the Murcia norm, duration and capacity, roles and fixed costs, the founder→owner horizon with the Y5 hire figures. 15 chips.
- `business/reports/business-report-murcia.html` — rebuilt.
- `specs/business-report-murcia/feature.md` — T4 marked `[x]`, evidence row added; the placeholder grep in the Verify lines of T4–T7 and in Checks was made case-sensitive because `-i` matched the Spanish word "todo".

Sources used, by figure: `murcia-market.md` §1.7 (rings), §4.3 (17 / 6 / 10, reviews 66 and 37, no Hyla found), §5 (medians, VAT-adjusted medians, mixed VAT bases), §8.1 (Cuota Cero conditions, dates), §8.3 (SER hours, sectors, tariffs, autónomo pass condition), §8.5 (km and out-and-back costs, 3.5 € inside 10 km); `murcia-model-tables.md` T1, T4, T6, T7, T8 (year-1 figures, troughs, break-even, contribution, Y5 hire); `murcia-model.md` §1 (I6, I7, I8, I9, I11, I12, I20, I21); `pricing-decision.md` §4.2 (B grid, minimum), §5.1–5.2 (travel folded, minimum vs CAC); `founder-inputs.md` Blocks 1–2, 5 (catalogue, equipment €2,300, consumables €1.5, duration, drying, 4/day, gestor, car insurance, horizon, north star, Chile prices); `rc-insurance-quote.md` (€25/mo, €150,000, entry prices €99–120, not mandatory); `marketing-research-addendum.md` R4 (89% / 75% consult reviews, two studies); `market-dossier.md` §9.1–9.2 (tarifa plana 12 months, hosting ≈€0).

Deviations:
- The PROPOSAL label of the B price grid has no chip in the template's five; the prose calls those prices "una propuesta" instead of chipping them, and chips the medians beside them as Estimate.
- "Nueve de cada diez" was replaced by "entre el 75 % y el 89 %" because the two studies give different figures and only the qualitative claim is two-source.
- Chile prices converted at the file's approximate rate ("unos 38 a 40 € y 27 a 28 €"), stated as approximate.

Style pass (estilo-es): no colons outside times; no "cabe destacar / es importante / en este sentido / por otro lado / además / sin embargo / por tanto"; one "por tanto" removed.

## Verification output

$ node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-01-resumen.html business/reports/_src/murcia/ch-02-arranque.html business/reports/_src/murcia/ch-03-empresa.html && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-0[123]*.html; echo "exit $?"
C:\Users\juanm\Documents\dev\vesta-docs\business\reports\business-report-murcia.html: 14 fragments, 8 svg, 3244430 chars
business/reports/_src/murcia/ch-01-resumen.html:19
business/reports/_src/murcia/ch-02-arranque.html:23
business/reports/_src/murcia/ch-03-empresa.html:15
exit 1
(exit 1 is the placeholder grep finding nothing)

$ grep -n -i "cabe destacar\|es importante\|en este sentido\|resulta fundamental\|por otro lado\|además\|sin embargo\|por tanto" business/reports/_src/murcia/ch-0[123]*.html; echo "exit $?"
exit 1
