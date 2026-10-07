## Open findings
- F-010 to F-015: all six still open. They belong to T8 (build-charts.mjs), which this diff does not touch.
- F-016 — open — the chart-marker chips are still in the chapters. Ch. 10 adds five more (ch-10-proyecciones.html:72, :106, :119, :158, :178), so the reported 20 chips for ch. 10 are 15 in prose. Ch. 11 and ch. 12 have no markers.
- F-034 — open — the "X, no Y" density in ch. 6 is essentially unchanged, at 9 sites: ch-06-publico.html:31, :41-42, :65-66, :113-114, :115, :116, :128, :132, :139.
- F-035 — fixed — ch-09-costes.html:68-71 now gives 58,42 € after material and 55,36 € "con su parte de viaje". ch-07-precios.html:87 names the 5,5 € spread over 1,8 pieces.
- F-036 — fixed — ch-08-captacion.html:20-23 has 2 € per click, 8 %, 35 % and ≈71 €.
- F-037 — fixed — ch-08-captacion.html:63-66 states the organic ramp as a model assumption. 12 against 6 traces to economic-model.md:41 (via I13).
- F-038 — fixed — ch-07-precios.html:134-136 now says "En Madrid y Valencia" and that no Murcia competitor publishes a pack.
- F-039 — fixed — ch-07-precios.html:31-32 and :123-125 use Vesta's own decision wording.
- F-040 — fixed — ch-07-precios.html:63-64: 56,75 / 72,50 / 82,81 are unchipped and called proposals.
- F-041 — fixed — ch-08-captacion.html:82-84 puts the association under Fact and the zone verdict under Estimate.
- F-042 — open — every content item is closed. That is ch-07:59-60, :95-96, :111, :156-157 and ch-08:36, :48, :50-51, :96-101, :106-107, plus the cut comparatives and filler lines and the comma at ch-07:17. The style item is not closed: 8 of the 12 listed "X, no Y" sites remain (ch-07-precios.html:34, :134, :146; ch-08-captacion.html:39, :66, :85, :101-102; ch-09-costes.html:113).

## Important
- ch-10-proyecciones.html:112-113 — "A prudente, no cubre ni los fijos en el año" is false. How it fails: A conservador has ads of 150 € flat (economic-model.md:40), so 12 × 150 = 1.800 €. The year's fixed costs are 9 × 186 + 3 × 356 = 2.742 €. Result −974 = contribution − 2.742 − 1.800, so contribution ≈ 3.568 €. That covers the fixed costs with ≈826 € to spare. It is the ads that sink the year.
- ch-10-proyecciones.html:197-198 and ch-12-riesgos.html:48-50 — "si se queda en 1,5, el año realista se parece más a la fila prudente" (and in ch. 12 the same claim under an Estimate chip). The model does not produce this. How it fails: realista has 205,2 pieces; at 1,5 it has 171. The 34,2 pieces lost × 58,42 € ≈ 2.000 €, so the result is ≈2.770 €. That is nearer realista's 4.768 € than prudente's 139 €. The old engine agrees: ppv 1,5 gives 3.508 € against a 5.506 € base and 763 € for conservador (economic-model.md:218).
- ch-12-riesgos.html:95 — "Ninguno de estos huecos cambia el signo del primer año" has no source and is false for the first gap in the list. How it fails: at the 111 € CAC, paid visits scale × 0,64 (economic-model.md:217). B prudente has 23 paid visits, so it loses ≈8 visits × (1,5 × 58,42 − 5,5) ≈ 680 €. Its 139 € becomes ≈ −540 €.
- ch-11-crecimiento.html:18 — the hire rule (75 % and three months of cash) carries an Estimate chip. murcia-model.md:40 labels I22 as PROPOSAL. How it fails: this is the F-040 / F-021 class, a proposal chipped as evidence.
- ch-11-crecimiento.html:77-80 — "48,7 kilómetros y 39 minutos sin tráfico" sit inside the span that ends in the Fact chip. murcia-market.md:187 grades km and minutes as ESTIMATE (routing). How it fails: the chip is stronger than the source, the F-041 pattern.
- ch-11-crecimiento.html:84-86 and :94 — Cartagena "como base del segundo operario … en vez de repartirse el de Murcia" contradicts the chapter's own owner-state logic. At :30, the hire carries all of Murcia's demand in Y5–Y6 (T6: 81,7 and 85,9 pieces). How it fails: if the hire is based in Cartagena, the founder keeps operating in Murcia. The callout at :94 also calls Cartagena "crecimiento sin nómina", two sentences after making it the payroll hire's base.
- ch-10-proyecciones.html:206 — the callout says "El segundo año ya da para vivir de ello". No source supports it. The chapter itself says (:173, :195) that the result is before IRPF and drawings, and ch-11-crecimiento.html:48-51 marks the founder's needs and hours as Not found. How it fails: the founder reads 19.028 € before IRPF (≈1.586 € a month) as a living income, on the strength of a judgement the report never makes elsewhere.
- ch-12-riesgos.html:149 — "Si el coche no tiene etiqueta, es un asunto de 2028, no de 2026". 2028 is Molina's sanction suspension. For Murcia, murcia-market.md:1007-1008 gives the perimeter and rules as NOT FOUND, and §9.3 item 10 says it "moves nothing until Murcia approves one", with no date. How it fails: it gives the founder a deadline that no source sets for the municipality he works in.

## Minor
- ch-10-proyecciones.html:161-172, ch-11-crecimiento.html:22 and :32 — the Y4–Y8 figures (84 %, 38.856 → 19.354, 37 %, 88 pieces, 189.562) carry Estimate chips. The same paragraph says these years follow the I23 HYPOTHESIS rule. Figures derived from a Hypothesis input should not carry a stronger chip than the rule.
- ch-10-proyecciones.html:25 — "El gasto en anuncios sube con la caja" does not describe the model. The ads follow a fixed schedule: A realista raises them 150 → 300 while its cash sits at −318 € (T2).
- ch-10-proyecciones.html:110-111 and ch-12-riesgos.html:114 — the January payment is called "el IVA del primer trimestre". The January payment is the Oct–Dec quarter, but a business owner reads "primer trimestre" as Jan–Mar, which is paid in April.
- ch-10-proyecciones.html:204-205 — the callout says "solo octubre está en negativo". December's result is −37 € (T1). The body at :64 is right only because it says "caja".
- ch-10-proyecciones.html:24 (250.700 hogares) and ch-11-crecimiento.html:61 ("tres de cada cuatro", 74 % ESTIMATE) — both are figures without a chip of their own.
- ch-10-proyecciones.html:94-102 against charts.html:144 and ch-01-resumen.html:70 — table 10.2 says "prudente", but the chart drawn beside it and ch. 1 say "conservador" for the same scenario.
- ch-11-crecimiento.html:33 — "contratar a un segundo" uses "segundo" for a third person. The chapter title uses "segundo operario" for the first hire.
- ch-11-crecimiento.html:46-47 — "meses en que no se dé abasto" overstates the I22 caveat, which is about months above 75 %, not above 100 %.
- ch-11-crecimiento.html:54-55 — "la vía con menos riesgo es frenar la captación pagada" has no chip and no source, and it omits the cost: each paid two-piece visit gives up +40,33 €, and paid clients seed the reviews the organic ramp depends on.
- ch-12-riesgos.html:35 — capacity is chipped Estimate. ch-01-resumen.html:93 and ch-09-costes.html:138 chip the same 88 as Fact (CAPTURED, I12).
- ch-12-riesgos.html:36 — "ninguno exige investigar" is contradicted by row :25 ("si cabe alguna ayuda"). That row depends on the domicile-change question, which the same chapter lists as a research gap at :93-94.
- ch-12-riesgos.html:101-106 — "las cifras que sostienen el modelo se volvieron a abrir … y coincidían" (Fact) overstates the re-check. murcia-market.md:1134-1136 says M27, the cuota that feeds I8/I9, was not re-opened.
- ch-12-riesgos.html:133-134 — "El seguro de responsabilidad civil no es obligatorio" is stated without the condition. If a biocide is used, RD 830/2010 makes RC mandatory (marketing-research-addendum.md:335), a case the same chapter raises at :149-151.
- ch-12-riesgos.html:113-115 and :160 — "el riesgo más probable" puts a probability ranking on an outcome that only occurs in prudente. No source weights the curves.
- ch-13-glosario-fuentes.html:40 — the Kit Digital definition mentions only "el emblema de la UE". The source requires three elements (aids-and-eu-branding.md:69), as ch-12-riesgos.html:29 itself says.
- ch-13-glosario-fuentes.html:50 — the SER definition lists sectors A, B and C but only the 90 / 150-minute tickets. Sector C's maximum is 300 minutes, and only A and B are in force (murcia-market.md:1025, :1028).
- ch-13-glosario-fuentes.html:83-87 — the sources point to "el repositorio del proyecto", which the reader of the PDF does not have, and they name no file. The brief asks for "research files and their URLs", but T8 bans external URLs (feature.md:244, :257). This conflict needs a decision by the human. At least the file names belong here.
- Style: dense "X, no Y" contrasts again. ch-10-proyecciones.html:23-25, :174, :193-194; ch-11-crecimiento.html:48, :50, :55, :63, :86; ch-12-riesgos.html:122-123, :141, :149.
- Style: generic or filler lines. ch-12-riesgos.html:9 ("Un informe que no dice lo que no sabe no sirve para decidir"), ch-11-crecimiento.html:25 ("El coste de la decisión es claro"), ch-12-riesgos.html:121 ("No hay fuente que lo cuantifique y no hace falta").
- feature.md:238 — T7 is marked [x] although its own Accept clause ("the TOC has no '—' placeholder left") is unmet. The deviation is recorded at :285 and :302. Moving the clause into T8's Accept would keep the record honest.

## Cannot verify from diff
- report.md:8-9 says business-report-murcia.html was rebuilt and feature.md edited (T7 [x], progress line, evidence row). The package's `git status` (diff.md:4-14) lists neither file. Either the T7 lines were already committed in 537ff48 before the review, or they were edited after the package was cut.

Everything else traces with the same value:
- Table 10.1 row by row against T1, table 10.2 against T4, and table 10.3 against T6 realista × B.
- The T5 figures for years 2–3, T7 break-even and T9 ratios.
- 5.855 − 1.087 = 4.768; 40,33 − 40 = 0,33; 6.517 − 2.097 = 4.420 (printed as 4.400).
- The paid / organic split against economic-model.md:40-42, and the 56 maximum and 88 capacity.
- Cartagena 220.704 / 81.700 / 25 / 2.806 / Villalba 56 / 17,05; the winter fall in rooms 2.806 → 1.388.
- 37 services ≈ 9 days (pricing-decision.md:239); the §9.3 gap order; the Kit Digital row; RC 25 € and Fact on "no obligatorio".
- Glossary values (71 / 36–111, 1,8 / 1,5 / 2, 82,6 %, 12 + 12, 2.920, 387).
- TOC titles match the chapter headers.

Files reviewed:
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-10-proyecciones.html
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-11-crecimiento.html
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-12-riesgos.html
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-13-glosario-fuentes.html
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-06-publico.html to ch-09-costes.html
- C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-model-tables.md, murcia-model.md, economic-model.md, murcia-market.md
