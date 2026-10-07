## Open findings
- F-010 — fixed — business/reports/_template/build-charts.mjs:210 (each cell now gets a top hairline `line` instead of a closed `rect`)
- F-011 — fixed — build-charts.mjs:200 (headers come from `SCEN_ES`; "Demanda conservador" is gone, charts.html:150-152)
- F-012 — fixed — build-charts.mjs:297 (`chart__bar--estimate`) and :308 (caption "mediana estimada (marca dorada)")
- F-013 — fixed — build-charts.mjs:24-28 ("2,80–9,42 €", charts.html:420)
- F-014 — fixed — build-charts.mjs:29-32; month and year on two lines at :91-93
- F-015 — fixed — build-charts.mjs:230-232 (operators = `y2.operators − y2.newHire`; the JSON gives Y2 realista B operators 1, newHire 0, and Y5 2/1, so the derivation holds) and :315-316 (barrios from `rings[0].scope` "Urban core, 24 barrios"; 0.175 from the R2 `travel.note` "out-and-back at €0.175/km")
- F-016 — open — the marker chips are still in the fragments (ch-04-mercado.html:7; ch-10-proyecciones.html:73, :107, :120, :159, :179). Since T8's Verify counts "Match" rows and no longer counts chips, the finding has no remaining effect. Closing it is the human's call.
- F-034 — open — the content items are closed, but the "X, no Y" style item is not: ch-06-publico.html:65-66, :113-114, :115, :116, :128, :132, :139 (7 of the 9 sites remain)
- F-042 — open — the content items are closed, but the style item is not: ch-07-precios.html:34, :146; ch-08-captacion.html:39, :66, :85, :101; ch-09-costes.html:113 (7 of the 8 remain)
- F-043 — fixed — ch-10-proyecciones.html:113-115 ("cubre los fijos pero no los 1.800 € de anuncios")
- F-044 — fixed — ch-10-proyecciones.html:197-199 and ch-12-riesgos.html:48-51 (34 pieces × 58,42 ≈ 2.000 €; re-derived)
- F-045 — fixed — ch-12-riesgos.html:95-97
- F-046 — fixed — ch-11-crecimiento.html:16-19 ("regla propuesta, no un dato"), with the outcomes under Hypothesis at :22
- F-047 — fixed — ch-11-crecimiento.html:77-78 (population Fact; km and minutes Estimate)
- F-048 — fixed — ch-11-crecimiento.html:82-86 and the callout at :92-94
- F-049 — fixed — ch-10-proyecciones.html:207
- F-050 — fixed — ch-12-riesgos.html:150-151, and the glossary at ch-13-glosario-fuentes.html:56
- F-051 — fixed — every recorded item lands: ch-10:25-26, :70, :112, :205-206; ch-11:33, :46, :53-55, :61-62; ch-12:34-36, :106-109, :135-137, :118; ch-13:40, :50, :84-90

## Important
- business/reports/_template/build-charts.mjs:19 — `int.length > 4` leaves four-digit figures without the thousands point. How it fails: the cash chart prints "Realista: 4768 €" next to "Optimista: 12.444 €" (charts.html:88-90). The y1 caption prints "Total del año: 4768 €" (charts.html:64), and the sensitivity grid prints "2097 / 7654 / 4768 / 6517 €". The prose and tables of the same PDF print "4.768 €". This is the executor's concern 6, and it is correct. The fix is `int.length > 3`, which only adds "1.500"-style axis labels. Fix before ship.
- business/reports/_src/murcia/ch-02-arranque.html:125-126 — the "99 € y 120 €" figure exists only in `rc-insurance-quote.md`, which is not in the allowed number sources (brief Constraints). I grepped murcia-market, model, addendum, dossier and founder-inputs and found nothing. How it fails: it breaks "the report never contains a figure that is not in one of those files". The executor's F-1 is correct. Fix before ship, by human decision: cut the sentence, or add the file to the list (ch-13-glosario-fuentes.html:89 already names it as a source).
- business/reports/CHECK-murcia.md:14 and :116 — "Every traced figure matches" and "No figure in these chapters was found without a source" read as full coverage, but the brief asks to "pick every figure in ch. 1, 2, 7, 9 and 10". How it fails: the figures that do not match (insurance 99–120, hotel 1.230, aid 3.500 / 2.500, capacity 88, material 1,5, ads 150–400) are kept out of the table and appear only in §6, so the table is all Match by construction. Several ch. 2 figures are not traced at all: ch-02:49 (69–120 €), :54-55 (64 € / 79 €), :107 (Orihuela 29,6, Torrevieja 50,1), :156 (abono 30 €). The Accept (≥30 rows, mismatches explained) is met. The coverage claim is not. Add the §6 figures as "Mismatch (F-n)" rows, and either trace the rest or reword the claim.

## Minor
- business/reports/CHECK-murcia.md:67 — the 71 € row gives the source label as "ESTIMATE". murcia-model.md:37 (I19) labels it "ESTIMATE / HYPOTHESIS". How it fails: under the house rule set by F-019 (a mixed label takes the weakest grade, as with 186 € → Estimate), the Estimate chip at ch-01:57, ch-07:22 and ch-08:23 is one grade stronger than the source. The misquoted cell hides that.
- business/reports/CHECK-murcia.md:88 — the 82,6 € row gives the source label as "FACT". pricing-decision.md:33-34 and :207 have no FACT tag: it is a founder decision (21 %) plus the arithmetic 1/1,21. The Fact chip may still be right, but the row quotes a label the source does not carry.
- business/reports/CHECK-murcia.md:149 — the executor's F-3 is a false finding. The 3.500 € and 2.500 € + IVA figures were moved from Fact to Estimate on purpose as the resolution of F-030 ("FACT (secondary) rows under Fact chips"). No action is needed.
- business/reports/CHECK-murcia.md:155 — the executor's F-5 is factually correct, but the house has already settled CAPTURED → Fact (ch-12-riesgos.html:34-35 says "la que declaró el socio fundador", and F-051 aligned ch. 12 to Fact). The real gap is the legend at ch-13-glosario-fuentes.html:11-13, which defines Fact as an official source or the company's own website and does not cover a founder statement. One clause there fixes it. The human decides; this does not block shipping.
- business/reports/CHECK-murcia.md:152 — the executor's F-4 is correct. ch-09-costes.html:107-108 gives the realista schedule without naming it (conservador spends 150 € flat, optimista reaches 600 €). Adding "en el escenario realista" fixes it, and can go in with the same rebuild.
- business/reports/CHECK-murcia.md:146 — the executor's F-2 is ambiguous rather than wrong. 1.230 € is a calculation, which fits the house's definition of Estimate, and pricing-decision.md:166 tags the whole bullet [ANALYSIS]. The house has no ordering between Estimate and Analysis. Not a pre-ship item.
- business/reports/CHECK-murcia.md:124 and :161 — "all inside base64 font data" is not accurate: lines 47, 49, 50 and 51 of the built HTML are `data:image/webp;base64,` and only line 19 is a font.
- build-charts.mjs:315-316 — "24 barrios" and 0,175 are regex-scraped from English free-text strings (`scope`, `travel.note`), and `rs[0]` is assumed to be R1. If the note is reworded, the build throws, so the failure is loud and F-015 stays fixed. A numeric field in murcia-model.mjs:429 would be the durable form.
- The T7 style item for ch. 10–12 was never written into F-051's record and still stands: ch-10-proyecciones.html:174-175, :194-195; ch-11-crecimiento.html:18, :47, :49, :62-63; ch-12-riesgos.html:143.

## Cannot verify from diff
- I cannot check the PDF itself: the cover without a number, the footers on pages 2–54, and whether the median mark and two-line month labels are legible. I rely on the report's pdftotext/pypdf output. The TOC in ch-00-cover-toc.html:43-55 (3, 6, 10, 12, 18, 26, 29, 33, 36, 39, 46, 48, 51) matches CHECK-murcia.md §2 entry for entry. The TOC numbers are hand-filled, though, so any fix above that changes ch. 2 or ch. 9 (F-1, F-4) can shift pagination. Re-run the TOC/footer script after the re-render.

Checked and clean: no Date, locale or random calls and zero comments in build-charts.mjs; the `.chart__bar--estimate` and `.chart__grid` classes exist in report.css:640-654; the F-010 change matches README §7 "open axes". I re-traced 13 rows against their sources and all matched: T1/T4 B realista and conservador, T5, T6 (69,5 / 84,0 / 189.562), T7, T8, T9, 1,5-ppv −2.000 €, 186 / 356 sums, 479.405, 704.814 / 250.700, 666.428, 4,38 / 7,18 / 17,05, SER 1,90 / 2,70, fuel 1.795 / 1.888, 9.910 / 857, Cuota Cero 2.920 / 15-Oct, SEF 6.000–9.900.

Must fix before the PDF ships: the thousands separator (build-charts.mjs:19) and the 99–120 € source decision (ch-02:125). F-4 is a one-word fix that can go in with the same rebuild. Everything else is a record correction or a human decision.

Replacement for the Checks placeholder grep on the built HTML. It strips the data URIs and keeps line numbers, and its exit status is grep's, so a clean file gives exit 1:
`sed -E 's#data:[^;,]+;base64,[A-Za-z0-9+/=]+##g' business/reports/business-report-murcia.html | grep -n "TODO\|TBD\|lorem"; echo "exit $?"`

Files reviewed:
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_template\build-charts.mjs
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\charts.html
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-00-cover-toc.html (via diff), ch-02, ch-06, ch-10 to ch-13 (plus greps over ch-01, ch-03, ch-07 to ch-09)
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\CHECK-murcia.md (via diff)
- C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-model-tables.md, murcia-model.md, murcia-market.md, pricing-decision.md, aids-and-eu-branding.md, murcia-model-data.json
