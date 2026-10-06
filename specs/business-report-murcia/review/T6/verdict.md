## Open findings
- F-010 to F-015: open. T6 does not touch build-charts.mjs; these belong to T8.
- F-016 — open — the chart-marker chips are still at ch-04-mercado.html:76 and ch-05-competencia.html:131. That makes 2 + 2 marker chips in the T5 chapters. Ch. 7–9 have no markers, so the T6 counts (18/28/22) are prose chips only.
- F-031 — fixed — ch-04-mercado.html:233-235 puts "857 en total" under an Estimate chip. ch-02-arranque.html:114-116 grades it the same way.
- F-032 — fixed — ch-04-mercado.html:137-141 now follows murcia-market.md §2.1: per-person income is the safer signal and sits below Granada and the national mean. The callout at :252-253 says "algo menos de renta por persona".
- F-033 — fixed — ch-05-competencia.html:147-154 leaves only the lab report as unclaimed and states the counts (three with a guarantee, one with a named method, six with per-size prices). The callout at :164-165 matches.
- F-034 — open — every item is closed except one. The "X, no Y" density at ch-06-publico.html (the last Minor bullet of the T5 verdict) is still there: :37-38, :41-42, :98-99, :115, :116, :128-129, :132-133, :139 (9 sites, down from 12). The other items are closed:
  - ch-04:22-23 is now Analysis;
  - ch-04:12, :83-85 and :220-222 now carry chips;
  - ch-04:69-73 is the table 4.1 note;
  - ch-04:240-242 now reads "oferta", Cartagena only;
  - ch-04:185-186 is the Molina district line;
  - ch-05:41, :65, :78, :140-141 and :75;
  - ch-06:9, :33-34 and :49-50;
  - ch-01:107-109 and ch-02:198-203 for the Ayuntamiento line and the 2027 edition.

## Important
- ch-09-costes.html:68-71 — "Quitando 1,5 € de material quedan 55,36 € por pieza". That is false arithmetic: 59.92 − 1.5 = 58.42. In the model, 55.36 = (1.8 × 58.42 − 5.5) ÷ 1.8 (murcia-model.md:113-116), so travel and parking are already inside it. How it fails: the next sentence's 1.8 × 55.36 − 5.5 gives 94.15, not the 99.65 printed. The 92 % at :69 also already includes travel, so the reading at :72-73 ("el dinero se va en llegar…") contradicts the figure it explains. Table 7.2 has the same problem at ch-07-precios.html:86-87: 55.36 − 71 = −15.64, not −18.08. Nowhere does the report say that "contribución por pieza" carries a travel share.
- ch-08-captacion.html:20-22 — "un cliente de cada ocho visitas a la web y una de cada tres consultas" misreads the dossier funnel (market-dossier.md:437-440). There, 8 % is visits → leads (one lead per 12.5 clicks), not "one client in eight". How it fails: the words give €2 × 8 × 3 ≈ €48, not the €71 printed beside them. The source gives 2 ÷ 0.08 ÷ 0.35 = €71.4.
- ch-08-captacion.html:62-66 — organic 0 → 12 a month "el doble que los de pago". Neither figure is in murcia-model.md or murcia-model-tables.md: T1 has only total visits, and the split lives in murcia-model.mjs:67-68 and the JSON. That fails the Accept ("appears … in murcia-model.md / tables"). Also, "una estimación de cómo se ha visto arrancar a negocios parecidos" invents a basis. economic-model.md:33-36 says only "ramps with the reviews flywheel… the honest range, not forecasts"; no comparable businesses were observed. How it fails: the founder reads a benchmark where there is a free assumption.
- ch-07-precios.html:132-133 — "La competencia ya los vende" stands under Fact for the Sofaclín 97/119/169 tiers and Clean-Home's 2×69 pack. Those are dossier precedents from Madrid (market-dossier.md:126-128) and from dossier §3, not from Murcia. Sofaclín's Murcia page gives no price (ch-05:45), and murcia-market.md has no pack at all (zero matches). How it fails: in a Murcia chapter, the reader takes these as local competitors' offers.
- ch-07-precios.html:121-122 — "con una presentación que nadie más tiene en Murcia" (and :32, "una marca que la competencia no tiene"). This brings back the claim F-034 cut from ch-05 ("presentación cuidada"): no source assessed how Murcia competitors present themselves. How it fails: an unsourced, unchipped differentiator carries the B recommendation.
- ch-07-precios.html:62-63 — 56,75 / 72,50 / 82,81 carry an Estimate chip, but murcia-model.md:15-17 labels I1–I3 PROPOSAL. This is the F-021 class (a grid-derived proposal chipped as evidence). How it fails: a chip stronger than the source, against the Accept's "same label".
- ch-08-captacion.html:83-85 — "la de San Lorenzo-Universidad, en pleno centro, la zona que supera el corte de renta alta" sits before a Fact chip. ch-04-mercado.html:178-179 grades the zone verdicts Estimate (murcia-market.md §2.2). How it fails: two chapters grade the same verdict differently, the pattern behind F-031.

## Minor
- ch-07-precios.html:38 and :49-53 — a table with IVA-inclusive grids is set against the mixed-VAT published medians (52,5 / 67) with no caveat. ch-02:76-79 gives the caveat and the VAT-adjusted 57 / 70,8. On that basis, B's individual mattress is 14 % under the market.
- ch-07-precios.html:93-95 — "un colchón de matrimonio suelto" covers all three −34 / −22 / −6. But C's −6 is the Profundo tier at €89 (pricing-decision.md:373-374), not the €69 básico.
- ch-07-precios.html:153 and report.md:15 — the €1,230 is not a misprint: 30 × 42.77 − 30 × 1.5 − 7 = 1,231. The executor's deviation note has a false premise. The source bullet is [ANALYSIS] (pricing-decision.md:166), and the report chips it Estimate. Neither the source nor the report deducts the CAC, despite "la captación pagada".
- ch-07-precios.html:109 — "casi todos los clientes llegan gratis" is stronger than the source's "dominated by free channels" (pricing-decision.md:323).
- ch-08-captacion.html:36-37 — "lo que las agencias recomiendan": the source is one agency (addendum:300-305).
- ch-08-captacion.html:47-49 — "la llamada convierte mejor que el formulario" (Fact). The source says call assets "can convert better than the landing" (addendum:121-122).
- ch-08-captacion.html:49-52 — the LSA figure €6–50 (Estimate, addendum:284) has no chip of its own; the only chip there is the Not found at the end of the sentence.
- ch-08-captacion.html:97-101 — the Cronoshare 2–15 % / 6 % rate is national (murcia-market.md:967: Murcia lead prices NOT FOUND), and the report does not say so. "Bastante más alto" is the addendum's HYPOTHESIS and has no chip.
- ch-08-captacion.html:104-105 — "su audiencia es mayor" (Fact). It reads as "larger". The source's "older audience" is in the unlabelled "why plausible" column; only the existence of an advertising offer is FACT.
- ch-08-captacion.html:71-72 — "vale… más que el anuncio que lo trajo" is the unsourced comparative cut from ch-06 under F-034, now back.
- ch-08-captacion.html:121-122 — "lo que funcione en noviembre funcionará en junio" is unsourced. murcia-market.md:853-862 leaves the winter penalty NOT FOUND and flags the 34 °C heat as a cost to the working day.
- ch-09-costes.html:48-49 — "ahorra la mitad del viaje del segundo" puts a number on what the source only says qualitatively ("shares legs").
- Style:
  - "X, no Y" contrasts are dense again across the three chapters: ch-07:12, :34, :96, :132, :143; ch-08:39, :65-66, :86, :100-101; ch-09:73, :114, :141.
  - ch-09:39 "El desplazamiento merece un párrafo" is filler.
  - ch-08:69 "La reseña es el engranaje" is a calque of "flywheel".
  - ch-07:17-18 "de cada 100 € que paga la empresa se queda" needs a comma after "paga", or it reads as the company paying.

Everything else traces with the same value and label:
- tables 7.1 (grids and medians), 7.2, 9.2 and 9.3 against T7, T8 and T9;
- 1,7 / 1,3 / 1,1; 82,6 %; −15 % / −25 % / 10 / 25;
- 1–3, 1,5–2, 2–6, 3–7; 71 / 36–111; 70 / 3,04; 70 / 30 %; 150–300 / 5–10;
- the ads ramp of 150 → 400 in June; 40 / 25 %; 441 / 24;
- the climate figures (31–34 °C, 68 %, 16,6 °C, 36 days);
- 3,5 / 2,80 / 3,05 / 4,4–4,5 / 7,1–9,4; 50/35/15 under Hypothesis; 3,5–6,0;
- 1,80 / 1,89; 0,11 at 6 l (Hypothesis); 0,175; 1,90 / 2,70 / 40 % / 1,0; 88.

The chapter titles match the TOC, and the −18,08 / +40,33 basis and the B grid match ch. 1–2.

I added one lesson to C:\Users\juanm\.claude\agent-memory\reviewer-opus\feedback_review_heuristics.md: redo the arithmetic of prose that re-derives model figures, and grep later chapters for lines a prior finding cut.

Files reviewed:
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-07-precios.html
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-08-captacion.html
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-09-costes.html
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-04-mercado.html
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-05-competencia.html
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-06-publico.html
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-01-resumen.html
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-02-arranque.html
