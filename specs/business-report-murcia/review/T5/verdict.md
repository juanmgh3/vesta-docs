## Open findings
- F-010 to F-015: open. T5 doesn't touch build-charts.mjs; these belong to T8.
- F-016 — open — the chart-marker chips are still there at ch-04-mercado.html:73 and ch-05-competencia.html:130, so the `chip--` counts in the report (44/21/32) include 2 + 2 marker chips.
- F-027 — fixed — ch-01-resumen.html:47-48 now carries "como mucho ocho" with a chip. ch-03-empresa.html:8-11 is specific now. ch-03:48-49 is rewritten. The ch-01 closing line has become the callout at :118-122. ch-03:67 now reads "El problema del primer año es la demanda."
- F-028 — fixed — ch-02-arranque.html:187-188 now reads "Dos de las tres ayudas… la tercera va por convocatoria". ch-01-resumen.html:105-107 separates the two alta-gated lines from the third. One new defect in the same sentence is listed under Minor.
- F-029 — fixed — ch-01-resumen.html:111-115 now says "en la solución que pagó" with Not found on what it paid for. ch-02-arranque.html:211-220 adds "si fue la web" and the callout at :228-229 matches.
- F-030 — fixed — the heading at ch-01:97 now says "Cuatro cosas" and introduces four items. ch-02:196-198: 2.500 € + IVA, now Estimate and marked as a secondary source. ch-02:215-217: the 12 months, now Estimate. ch-02:220: Cuota Cero only. ch-02:113-115: the coast/outer-ring line, which is now true (about 9,833 of the 10,767 dwellings are in coastal municipalities). ch-02:141-144: disclosure vs process. ch-02:181-184: the comparative is gone.

## Critical
- ch-04-mercado.html:228-230 — "777 … y el cinturón 80 más, 857 en total" sits under a Fact chip. murcia-market.md:937-940 labels 857 (and the belt's 80) ESTIMATE as a sum of rows, and ch-02-arranque.html:114-116 carries the same 857 as Estimate. How it fails: the chip is stronger than the source, against the Accept ("same value and label"), and two chapters grade one figure differently.

## Important
- ch-04-mercado.html:22 — "las otras 53 rondan las 4.600 cada una" (and the 95.446) has a Fact chip. murcia-market.md:71 gives both inside "Reading (ANALYSIS)". How it fails: a derived average is upgraded to Fact.
- ch-04-mercado.html:135-137 — "Para un servicio que se contrata por casa, la renta por hogar es la que importa, y ahí Murcia está en la media" (Analysis) reverses the source. murcia-market.md:308-310 says "the per-person figure is the safer affluence signal; the per-household figure flatters Murcia through household size". The callout at :246-247 ("una renta por hogar en la media") builds on the reversed reading. How it fails: the founder reads Murcia as average for spending power when the source says it sits below Granada and the national mean.
- ch-05-competencia.html:151-153 — "una garantía escrita y un método distinto del de todos los demás son tres cosas que ningún competidor local enseña". This contradicts the same chapter: :86 says "Garantía declaran Clean-Home, Biomex y Limpiezas Murcia". The method half is also false: Clean-Home publishes a trademarked process ("EcoFusion360™", murcia-market.md:588, addendum:383), and Happy Clean, Tapinet and EcoCleans each declare a different method (table rows :40, :51, :54). The callout at :162-163 ("Nadie enseña método propio ni prueba de resultado") repeats the method claim. How it fails: the white-space reading rests on two claims the chapter's own table refutes. Only the lab report is actually unclaimed (murcia-market.md:645).

## Minor
- ch-01-resumen.html:107 — "la tercera va por convocatoria anual" sits under Fact. aids-and-eu-branding.md:57 makes the 2027 edition a SUPUESTO, and ch-02:200-202 chips it Hypothesis. The Ayuntamiento amount, window and close are FACT (secondary) (aids:55-56) but sit under a plain Fact chip in ch-01:108 and ch-02:198-200. This is the same class as the 2.500 € item of F-030.
- ch-04-mercado.html:180-181 — "En Molina de Segura son otros 1.560 hogares, en La Alcayna y Altorreal". murcia-market.md:388-389 places them only "in census district 01" (4 sections). The zone table identifies at most three of them inside the two developments.
- ch-04-mercado.html:234-236 — "la demanda hotelera cae a la mitad en invierno" rests on open hotel plazas (6.186 → 3.012). That is supply, not demand, and the figure is for Cartagena only, not "la costa".
- ch-04-mercado.html:67-69 — the note under table 4.1 says "Población Fact (INE, padrón a 1 de enero de 2025)". The R2/R3 populations are ESTIMATE sums (murcia-market.md:526-527), and R1's 138.997 comes from the Ayuntamiento release, not INE (:49). Also, R1's time cell ("Trayectos urbanos cortos", :48) is NOT FOUND at the source, yet the note puts it under the Estimate chip for "tiempos".
- Figures without a chip:
  - ch-04-mercado.html:11-12 "otros 225.000";
  - ch-04-mercado.html:80 "75 a 90 minutos" (ANALYSIS at the source);
  - ch-04-mercado.html:215-217 "49 %" and "61 %" (CONFLICTING at murcia-market.md:494 — say so in prose, since there is no chip for it).
- ch-04-mercado.html:124-125 — "Hogares más grandes significan más colchones por casa… dos piezas por visita" is chipped Analysis but is not in any source; the Constraints require chips "carried verbatim from the research files". The same applies to ch-05-competencia.html:154 "nadie está ganando con eso" and ch-06-publico.html:105-106 "el segmento… que menos explicación necesita".
- ch-05-competencia.html:41 — the Limpiezalto prices drop "desde" (murcia-market.md:590 says "desde"), against the rule the chapter states at :20-21 ("'desde' incluido").
- ch-05-competencia.html:65-67 — "dos son de empresas de fuera: … Clean-Home … Happy Clean" under Fact. The source says "multi-province" (murcia-market.md:625). Clean-Home's base is not stated, and Biomex is the transparent one with "no local base" (:593).
- ch-05-competencia.html:78 — "El método que declaran casi todos es inyección-extracción". The source lists 7 of the 17 (murcia-market.md:636-637), and 8 of the 11 that name any method.
- ch-05-competencia.html:139-140 — the low ends are given as "Sercomanga y Clean-Home". Happy Clean sets two low ends (sillón 30, silla 5; murcia-market.md:697), so dropping it skews the "who sets the ends" reading.
- ch-05-competencia.html:147-149 — "presentación cuidada" is part of "lo que nadie ofrece", but no source assessed how competitors present themselves. It is also a list of three for rhythm, followed by another "tres cosas" list at :151-153.
- ch-05-competencia.html:75 — "En Murcia nadie ha construido todavía ese capital" is stronger than the source's "review counts are small" (murcia-market.md:649-650) from a sweep that does not claim to be exhaustive.
- ch-06-publico.html:9 — "vive en casa propia" has no source in any of the allowed files (no tenure data; murcia-market.md:141 has main vs secondary dwellings as NOT FOUND).
- ch-06-publico.html:33-35 — "no tiene ninguna fuente científica detrás" vs the addendum:64 "no primary scientific citation located".
- ch-06-publico.html:49 — "no se compra por estatus" is put before a Fact chip. The addendum:98 calls it "an inference by absence" (ANALYSIS).
- ch-06-publico.html:88-89 — "el primer cliente satisfecho de cada barrio vale más que el anuncio que lo trajo" is an unsourced comparative, the same kind as the line cut in F-030.
- ch-06-publico.html:94 — "respirar mejor" as the 45–65 message contradicts :100 "Sin… promesas médicas". "Dormir mejor, respirar mejor, una casa que se cuida" and :104-105 "Pelo, olor y lo que no se ve" are rhythm triples.
- ch-06-publico.html — "X, no Y" contrasts are dense: :39 (sino), :43, :51-52, :95, :101, :116-117, :118-119 (two), :131-132, :135, :142. The executor's style grep only looks for "sino", so this pattern went unchecked.

## Cannot verify from diff
- Granada's matrimonio cell "(añadido a un sofá)" at ch-05-competencia.html:120. murcia-market.md:673 says only "Clean-Home add-on only". I did not open granada-market.md §3.

The rest traces with the same value and label:
- tables 4.1–4.4 against §1.6, §1.7, §2.2 and §3.4;
- the eight income figures;
- 2,8 / 2,49 / 25,2 % / 41,3 / 16,7 % / 29,7 %;
- the zone ratios and 20.859;
- 34/387, 32.488, 12.200 and 29/34;
- 32 / 2.488 / 794 / 6.186 / 3.012, and "tres de cada cuatro" (74 %);
- every price, review and travel cell of table 5.1 and every cell of 5.2;
- 6/17, 10, 10 of 15, 5 of 16, 66 / 37 / 105 / 1.632 / 1.300 / 160;
- all the ch. 6 figures (207.600 / 141.000 / 122.800, >40 %, +14 %, 60/15 % as Estimate, 12–15 €/h, June 2023 / 2M, 75/66/64 %, 51 %, 40/25 %, 88 %, 11 of 13).

Competitor names match §4.2, no private individuals are named, the chapter titles match the TOC, and both chart markers are intact.

I added one line to C:\Users\juanm\.claude\agent-memory\reviewer-opus\feedback_review_heuristics.md: check every Analysis-chipped reading against the source's own conclusion, and check closing "nobody offers" lists against the chapter's own table.

Files reviewed: C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-04-mercado.html, ch-05-competencia.html, ch-06-publico.html, ch-01-resumen.html, ch-02-arranque.html, ch-03-empresa.html
