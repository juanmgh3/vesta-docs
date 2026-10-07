T7 done by the orchestrator (main thread): chapters 10–13 written as fragments, build runs, every load-bearing figure carries its chip. The T12 fixes to ch. 6–9 (F-035 to F-042) are committed for the reviewer to confirm.

Files changed:
- `business/reports/_src/murcia/ch-10-proyecciones.html` — how the model is built (paid / organic visits, ppv 1.5 / 1.8 / 2.0, ads ramp 150→400, IVA quarters, capacity 88 vs max 56), year one month by month for B × realista (table 10.1, twelve rows from T1; 14,877 / 12,295 / 4,768; −137 / −91; cumulative positive February; 1,087 IVA owed; the July fixed-cost step), A and C beside (2,097 / −318 Jan; 6,517 / −54), the sensitivity grid (table 10.2, nine rows from T4, including A prudente −974 Oct-2027), years two and three (T5 B rows, conservador and optimista), the Y2–Y8 trajectory (table 10.3 from T6: pieces, operators, gross, result, owner state), break-even and ratios (T7, T9), what the model does not say. Five chart markers kept. 20 chips.
- `business/reports/_src/murcia/ch-11-crecimiento.html` — the hire trigger (75 % average utilisation and three months of cash), when it fires per scenario (Y4→Y5 realista at 84 %, Y2→Y3 optimista at 82 %, never in conservador ≤37 %), its cost (1,860 €/month TO-CONFIRM, 2,300 € machine, 38,856 → 19,354), owner state Y5–Y6 and the Y7 lapse at 88.1 pieces, machine payback (37 services ≈ 9 days), wait vs anticipate (the founder's hours Not found), the coast (9,910 vs 857, three in four, winter window Hypothesis, 10–18 € and ~1.5 h round trip), Cartagena as its own market (220,704 / ≈81,700 / 48.7 km / 39 min / 25 hotels 2,806 rooms / Villalba 56 reviews / 17.05 €). 19 chips.
- `business/reports/_src/murcia/ch-12-riesgos.html` — table 12.1 of founder facts not recorded and what each changes; model assumptions (demand curves, 1.8 ppv, CAC 71 with band 36–111 and the +0.33 € two-piece margin at 111 €, job mix and SER share, Y4+ rule, operator cost, IRPF / drawings / B2B not modelled); the research gaps ranked as murcia-market.md §9.3; a note on single-source FACTs and the re-opening of 2026-10-05; year-one risks (−548 € January, single operator, CAC at the top of the band, damage in a client's home and RC, winter drying, ZBE and biocide rules). 27 chips.
- `business/reports/_src/murcia/ch-13-glosario-fuentes.html` — how to read the chips (including that Fact is usually one official source), a 16-term glossary, sources by chapter naming the research files and the bodies behind them. 5 chips (the legend).
- `business/reports/business-report-murcia.html` — rebuilt.
- `specs/business-report-murcia/feature.md` — T12 and T7 marked `[x]`, evidence rows, Progress lines.

Sources: `murcia-model-tables.md` T1, T4, T5, T6, T7, T9 and the header; `murcia-model.md` §1 (I11–I13, I19–I24), §2.4–§2.5, §3; `economic-model.md` §2 (the paid / organic split, carried by I13); `pricing-decision.md` §3.4 (machine payback 37 services ≈ 9 days); `murcia-market.md` §1.6–§1.7 (Cartagena), §4.2 (Villalba), §7.1–§7.3 (tourist dwellings, hotels), §8.2 (ZBE), §8.5 (travel), §9.3 (gaps); `marketing-research-addendum.md` R6 (RD 830/2010); `aids-and-eu-branding.md` (Kit Digital row in table 12.1); `founder-inputs.md` (capacity, equipment).

Deviations:
- TOC page numbers are left as "—": they can only be read from the rendered PDF, which T8 produces; T8's Accept already requires the TOC to match the PDF.
- The "+0,33 €" two-piece margin at a 111 € CAC is derived in the chapter (40.33 − 40 = 0.33) and chipped Estimate.
- The Y7 owner-state lapse is written as a decision point ("volver a hacer servicios, contratar a un segundo o frenar la demanda"), which is the chapter's reading of T6, chipped Estimate for the figures and left unchipped as a recommendation.
- Ch. 13 names sources by body and date rather than listing the 200+ URLs; the research files hold them.

## Verification output

$ node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-10-proyecciones.html business/reports/_src/murcia/ch-11-crecimiento.html business/reports/_src/murcia/ch-12-riesgos.html && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-1[0-3]*.html; echo "exit $?"
C:\Users\juanm\Documents\dev\vesta-docs\business\reports\business-report-murcia.html: 14 fragments, 8 svg, 3349402 chars
business/reports/_src/murcia/ch-10-proyecciones.html:20
business/reports/_src/murcia/ch-11-crecimiento.html:19
business/reports/_src/murcia/ch-12-riesgos.html:27
exit 1
(exit 1 is the placeholder grep finding nothing)

$ grep -n -i "cabe destacar\|es importante\|en este sentido\|por otro lado\|además\|sin embargo\|por tanto\|sino " business/reports/_src/murcia/ch-1[0-3]*.html; echo "exit $?"
exit 1
