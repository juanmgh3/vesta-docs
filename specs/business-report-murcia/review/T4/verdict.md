## Open findings
- F-010 — open — T4 does not touch build-charts.mjs
- F-011 — open — same
- F-012 — open — same
- F-013 — open — same
- F-014 — open — same
- F-015 — open — same
- F-016 — open — T4 does not touch ch-04-mercado.html

## Critical
- specs/business-report-murcia/feature.md:177, :186, :195, :205 and Checks :226 (diff.md:450/459/468/477/486). The placeholder grep no longer works as a check. It was mangled into `grep -n "TODO|TBD|lorem"\|grep -n "TODO|TBD|lorem"\|grep -n "TODO|TBD|lorem" <files>`. The shell turns that into the pattern `TODO|TBD|lorem|grep`, where BRE reads `|` as a literal character, followed by two nonexistent "file" arguments. It can never match a placeholder, and it exits 2 on the missing files. brief.md:13 carries the same broken line. The report's verification output (report.md:21) ran the intended `"TODO\|TBD\|lorem"`, which is not what is on record. As written, T5–T8 and the final Checks get a placeholder check that cannot fail. The fix is `grep -n "TODO\|TBD\|lorem"` with no `-i`.
- ch-02-arranque.html:65-68. The "Pedido mínimo" row puts "60–70 €" in the "Mediana Murcia" column and reads it as "La norma del mercado". That range is Madrid's (pricing-decision.md:432, murcia-market.md:652-654). For Murcia the source says there is "No published minimum order apart from Clean-Home's one-mattress base". The figure is attributed to the wrong geography, and it states a Murcia norm the source denies.
- Chips stronger than the source label. Constraints: "carried verbatim… never re-graded"; Accept: "same value and label".
  - ch-01-resumen.html:42: 17 / 6 / 10 carry Fact. murcia-market.md:1157 (M16) labels them ESTIMATE, a lower bound.
  - ch-01-resumen.html:78 and ch-02-arranque.html:142: 1,90 € / 2,70 € carry Fact. They are VAT-included figures, which §8.3:1026-1027 labels "VAT-incl. ESTIMATE".
  - ch-02-arranque.html:146: the 30 € al mes autónomo pass carries Fact, but it is also a VAT-included ESTIMATE (§8.3:1030).
  - ch-01-resumen.html:79, ch-02-arranque.html:163, ch-03-empresa.html:79: 186 € carries Fact. murcia-model.md:26 (I8) labels it "FACT / CAPTURED / ESTIMATE"; the RC component is ESTIMATE.
  - ch-02-arranque.html:97: "como hace la mayoría de la competencia que lo dice" carries Fact. It is an ANALYSIS reading (§4.3:651), and the source scopes it to free travel "within the capital", not to the nine belt towns the sentence covers.
  - ch-03-empresa.html:46: "La norma … es la inyección-extracción" carries Fact. That is also ANALYSIS (§4.3:636).

## Important
- ch-01-resumen.html:42-43. "Solo dos tienen más de 30 reseñas en una ficha local de Google" is false as written. Limpieza Villalba, one of the 17, has 4.9 (56) on its Cartagena listing (§4.2:599). The source's criterion is "upholstery specialist" (§4.3:646), and ch-02:129 says "especialistas" correctly. The two chapters disagree.
- ch-01-resumen.html:35. The B grid carries an Estimate chip, but pricing-decision.md:331 labels it PROPOSAL. The report's own deviation (report.md:13) says these prices are deliberately left unchipped, and ch-02:74 calls them "una propuesta".
- ch-02-arranque.html:130-132. "Vesta estaría entre los más valorados de la ciudad antes del verano" carries Analysis, but this projection is in no research file. It also cuts against the addendum's own steer (marketing-research-addendum.md:137): a few credible reviews beat volume for this cohort.
- ch-02-arranque.html:105-108. The sentence ties "entre 74 y 90 minutos" of round trip to both Cartagena and Lorca. The source gives ≈75–90 min for Cartagena and the Mar Menor only, and says Lorca "costs more than one slot" (§1.7:224-226; 66 min one way, about 132 round trip). The figure 74 appears in no source.
- ch-02-arranque.html:159-177 and ch-01-resumen.html:97-100. The alta-date framing ignores a bound in the source. founder-inputs.md:4 and :69 record the alta as "already done" in the interview of 2026-07-07, so the alta is at least three months old. "Si fue hace menos de un mes" (ch-01:97) and "Si el alta es reciente, hay que pedirla esta semana" (ch-02:175) push a path that only a new alta could open, and the exclusion at §8.1:992 (RETA in the two prior years) would apply to that. This is not a call on eligibility: the report should state the bound and leave the question open. ch-02:176-177 also has two problems:
  - "si no se cumplen las condiciones, este informe no puede decirlo" is garbled; it should read "si se cumplen".
  - "lo más probable es que no corresponda" for an alta filed in another region is a guess. The source marks that case NOT FOUND (§8.1:994).
- ch-02-arranque.html:160-161. "La tarifa plana … dura doce meses" leaves out that it is "extendable +12 (24 total) if net income stays below SMI" (market-dossier.md:543). With a year-1 result of 4.768 € (T1), that extension is exactly the founder's case. It is worth 170 €/month against the step-up the paragraph presents as certain.
- ch-03-empresa.html:94-95. "y el fundador puede dejar de hacer el servicio él mismo" presents the owner state as reached. murcia-model-tables.md:128 says it holds only in Y5–Y6 and lapses in Y7–Y8, because demand keeps growing and there is no second hire.

## Minor
- Figures outside the named sources, or with a unit missing:
  - ch-01-resumen.html:88 and ch-03-empresa.html:66: "56" is only in murcia-model-data.json:1723, not in the tables or model.md.
  - ch-02-arranque.html:166: "170 €" is derived (356 − 186).
  - ch-02-arranque.html:102: "ya son 80" has no unit (km).
- ch-01-resumen.html:20. "todos a menos de 27 kilómetros" is sourced only for the belt towns and the largest pedanías (8–13 km, §1.7:209). Distances to the outlying pedanías were never routed.
- ch-02-arranque.html:127-129. "Entre el 75 % y el 89 %" puts the two single-study figures into one range, which the source says "must not be merged" (addendum:134). Both studies measure online purchase, not "contratar". The 45–65 HYPOTHESIS caveat (addendum:135-136) is dropped, and that is the founder's target segment.
- ch-01-resumen.html:98 and ch-02-arranque.html:172. Cuota Cero conditions:
  - ch-01 names only "altas iniciales" and drops the alternative of no RETA in the two prior years.
  - ch-02 leaves out the IAE census registration (§8.1:991).
- ch-02-arranque.html:110-111. "La costa es sobre todo mercado de alquiler turístico" overstates the source. R3 has ≈9,910 tourist dwellings against ≈248,500 households (M23, M8). The caveat in the source is about second homes and foreign residents.
- ch-02-arranque.html:144. "o a última" (hora de la tarde): before 20:30 that is still SER hours, so the advice is ambiguous.
- ch-01-resumen.html:52 and ch-02-arranque.html:84. The −18,08 € figure does not name its basis (an average-price piece). murcia-model.md:125 asks for the basis to be named, because pricing-decision §4.2 gives −22,48 for a matrimonio.
- Sentences with a figure and no chip:
  - ch-01-resumen.html:46 (8)
  - ch-01-resumen.html:55 (+40,33)
  - ch-01-resumen.html:64-65 (−91 / Nov / Feb)
  - ch-01-resumen.html:73-74 (4,38 / 7,18 / 17,05)
  - ch-01-resumen.html:97 (66)
  - ch-02-arranque.html:100 (2,80–9,42)
  - ch-03-empresa.html:65 (22 days / 88)
- Filler and style against the no-filler constraint:
  - Generic or unsourced lines: ch-01-resumen.html:96 ("el activo de confianza más barato que existe", which is also a calque), ch-01-resumen.html:107-108, ch-02-arranque.html:153-154 ("mueve la caja … más que cualquier anuncio"), ch-03-empresa.html:11-12, ch-03-empresa.html:49-50.
  - The "no X sino Y" construction repeats at ch-01:106, ch-02:86, ch-03:68, ch-03:86 and ch-03:103.
  - Calque "sueldo cargado" at ch-03-empresa.html:93.

## Cannot verify from diff
- ch-02-arranque.html:111. Whether chapter 11 ("Crecimiento: segundo operario y segunda máquina") will cover the coast and tourist rentals. T7 is not written yet.

Clean: the TOC titles in ch-00 match all three chapter titles. Only template classes are used and the tags are well formed. People appear by role only. The figures 704.814 / 250.700 / 666.428 / 138.997 / 479.405 / 59, every km and € per town, the medians and their VAT-adjusted values, the B grid, T1/T4/T7/T8/T6 and the RC figures all trace with the same value.

Files: C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-01-resumen.html, ch-02-arranque.html, ch-03-empresa.html; C:\Users\juanm\Documents\dev\vesta-docs\specs\business-report-murcia\feature.md
