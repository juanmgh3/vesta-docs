T10 done by the orchestrator (main thread): fix pass on chapters 1–3 closing F-017 to F-027, plus the fold-in of Juan's note `business/research/aids-and-eu-branding.md` (2026-10-06), which appeared in the working tree during T4 and is now an allowed source in the Constraints.

Files changed:
- `specs/business-report-murcia/feature.md` — F-017: the five placeholder greps restored to `grep -n "TODO\|TBD\|lorem"` (the earlier sed had mangled them into a pattern that could not match); `aids-and-eu-branding.md` added to the Constraints' source list; T10 task and evidence row added; Progress line.
- `business/reports/_src/murcia/ch-01-resumen.html` — F-019 chips re-graded (17/6/10 → Estimate with "cota inferior"; 1,90 € → Estimate "con IVA"; 186/356 € → Estimate); F-020 "especialistas en tapicería"; F-021 B grid unchipped and called a proposal; F-027 chips added to +40,33, −91/Nov/Feb, 4,38/7,18/17,05, 66; −18,08 basis named ("al precio medio de la mezcla"); "27 km" scoped to the belt towns; filler line and callout trimmed; point 8 rewritten: alta already done by July 2026, three alta-gated aid lines (2.920 €, 6.000–9.900 €, 3.500 €) with the bound stated and eligibility left open, Kit Digital logo obligation.
- `business/reports/_src/murcia/ch-02-arranque.html` — F-018 minimum-order row (Murcia publishes no minimum; 60–70 € is Madrid's norm); F-019 free-travel norm → Analysis scoped to the capital; SER tariffs and autónomo pass → Estimate; 186/356 € → Estimate; F-022 review projection removed, addendum's few-credible-reviews hypothesis carried, RDL 24/2021 verified-reviews obligation added; F-023 75–90 min for Cartagena / Mar Menor, more than two hours for Lorca; F-024/F-025 alta block rewritten: alta done by July 2026 and tarifa plana held (Fact), extension +12 months below SMI (Fact) with the year-1 result as the likely case (Analysis), Cuota Cero conditions complete (incl. IAE census), SEF Fomento line (6.000–9.900 €, 2 months, demandante the day before, 2.500 € investment, incompatible with Cuota Cero), Ayuntamiento 3.500 € line closed 20-Jul-2026 with the 2027 edition as Hypothesis, the one- and two-month windows most likely elapsed (Analysis), domicile-change case Not found; Kit Digital bono held and the three NextGenerationEU publicity elements (Fact); F-027 "80 kilómetros", coast sentence rewritten with 9.910 vs 857 (Estimate), "o a última" replaced by "entre las 14 y las 16:30", review percentages kept separate (89 % and 75 %), "mueve la caja más que cualquier anuncio" cut; checklist updated.
- `business/reports/_src/murcia/ch-03-empresa.html` — F-019 injection-extraction norm → Analysis; 186 € → Estimate; F-026 owner state holds Y5–Y6 and lapses from Y7; F-027 22 days / 88 chipped Fact, 56 chipped Estimate, "sueldo con cargas sociales", lead and callout trimmed, "no X sino Y" removed.
- `business/reports/business-report-murcia.html` — rebuilt.

Sources for the new figures: `aids-and-eu-branding.md` §1–§5 (2.920 €; 6.000–9.900 €, 2 months, demandante, 2.500 € investment, incompatibility; 3.500 €, window and 20-Jul-2026 close, 2027 edition SUPUESTO; Kit Digital held, art. 34.3 publicity, three elements, 12 months; regional lines bring no EU logo); `market-dossier.md` §9.1 (tarifa plana extension below SMI); `marketing-research-addendum.md` R2/R4 (89 % / 75 %, 45–65 review hypothesis, RDL 24/2021); `murcia-market.md` §1.7 (75–90 min, 66 min one way Lorca), §7.3 (9.910 / 857).

Deviations:
- F-027's "56" is kept with an Estimate chip: it is in `murcia-model-data.json` (allowed as the model's data) and in `economic-model.md` §2's capacity check.
- "170 €" is kept as a derived Estimate (356 − 186).
- The aids note names the founder; the report keeps role only.

## Verification output

$ node business/reports/_template/build-report.mjs && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-0[123]*.html; echo "exit $?"
C:\Users\juanm\Documents\dev\vesta-docs\business\reports\business-report-murcia.html: 14 fragments, 8 svg, 3248497 chars
exit 1
(exit 1 is the placeholder grep finding nothing)

$ grep -c "chip--" business/reports/_src/murcia/ch-0[123]*.html
ch-01 25 · ch-02 36 · ch-03 17

$ grep -n 'TODO' specs/business-report-murcia/feature.md | grep -o 'grep -n "TODO[^ ]*' | sort | uniq -c
      5 grep -n "TODO\|TBD\|lorem"
