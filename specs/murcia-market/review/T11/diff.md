class: medium

## git status --short -uall
```
 M business/research/murcia-market.md
 M specs/murcia-market/feature.md
?? .torq-flow/active
?? specs/murcia-market/review/T11/brief.md
?? specs/murcia-market/review/T11/report.md
```

## git diff HEAD
```diff
diff --git a/business/research/murcia-market.md b/business/research/murcia-market.md
index 5d8cf5c..7018216 100644
--- a/business/research/murcia-market.md
+++ b/business/research/murcia-market.md
@@ -553,9 +553,12 @@ no Murcia row; a search snippet reads "average €290, €50–2,400, 77 budgets
 only, not used); ProntoPro, Milanuncios and Wallapop surfaced as listing pages of
 individual classified ads and were not profiled.
 
-**Sweep depth:** 20 providers profiled below (the brief's floor is 15). The field is
+**Sweep depth:** the table below has 20 rows; 17 are profiled providers (the brief's
+floor is 15). The other three are kept for the record and not counted: Limpromur and
+Grupo iClean are general cleaners whose upholstery offer is NOT FOUND, and Ofihogar
+rests on a search snippet only. The field is
 not claimed exhausted: the Maps limited view caps each query at 8 results, so a
-Maps-only operator outside those queries can exist. Of the 20, 9 are upholstery
+Maps-only operator outside those queries can exist. Of the 17, 9 are upholstery
 specialists or have a dedicated upholstery line with a Murcia-region presence stated on
 their own page; the rest are national chains with no Murcia base found, or general
 cleaning companies that list upholstery among other services.
@@ -595,7 +598,7 @@ column. People are not named; owner names shown on some pages are left out.
 | **Limpromur** | Local general cleaning company, Av. General Primo de Rivera 13, Murcia | General cleaning; surfaced on the "limpieza de sofás Murcia" Maps query | Upholstery NOT FOUND; Cronoshare shows "desde 11 €/hora" general cleaning | NOT FOUND | NOT FOUND | 4.6 (333) | NOT FOUND | Quote-only for upholstery | FACT (1 source), provisional. [Maps](https://www.google.com/maps/search/limpieza+de+sof%C3%A1s+Murcia), [Cronoshare](https://www.cronoshare.com/servicios/limpieza-sofas-domicilio/murcia/murcia). Retrieved 2026-10. |
 | **Grupo iClean** | Local general cleaning company, Patiño (Murcia pedanía) | Home-cleaning bonos, vehicle upholstery | Upholstery NOT FOUND; "Bono limpieza 01" €159.91 (8 h, home cleaning) | Bonos valid in the Murcia metropolitan area only | NOT FOUND | 4.3 (183) | NOT FOUND | Quote-only for upholstery | FACT (1 source), provisional. [Bono page](https://www.grupoiclean.es/bono/limpieza-hogar-01), [Maps](https://www.google.com/maps/search/limpieza+de+sof%C3%A1s+Murcia). Retrieved 2026-10. |
 | **Limpiezas Hermanas** | Local cleaning provider, Lorquí (Cronoshare profile) | Listed in the Cronoshare mattress-cleaning category | NOT FOUND | NOT FOUND | NOT FOUND | Google NOT FOUND; Cronoshare 8.6 (18 reviews), 81 hires | NOT FOUND | Quote-only | FACT (1 source), provisional. [Cronoshare](https://www.cronoshare.com/servicios/limpieza-colchones/murcia/murcia). Retrieved 2026-10. |
-| **Ofihogar Limpiezas** | Cleaning company, Redován (Alicante); snippet says it serves Alicante and Murcia | Sofá, colchón | NOT FOUND (site does not resolve: DNS failure) | NOT FOUND | NOT FOUND | NOT FOUND | NOT FOUND | NOT FOUND | Snippet only, not a FACT. Search result for limpiezasofihogarspain.com, 2026-10. |
+| **Ofihogar Limpiezas** | Cleaning company, Redován (Alicante); snippet says it serves Alicante and Murcia | Sofá, colchón | NOT FOUND (site does not resolve: DNS failure) | NOT FOUND | NOT FOUND | NOT FOUND | NOT FOUND | NOT FOUND | NOT FOUND on a primary page (site does not resolve); the row rests on a search snippet for limpiezasofihogarspain.com, 2026-10, snippet only. Not counted in the 17. |
 
 Also seen and not profiled: "Limpieza a domicilio Murcia" (a WordPress site listing
 upholstery among childcare, gardening and ironing, no prices); Limpiezas del Segura
@@ -609,9 +612,9 @@ three provinces. That file is out of scope here and is not edited.
 ### 4.3 Reading of the field — ANALYSIS
 
 - **Transparency.** Criterion: a provider is "transparent" if its own page publishes at
-  least one per-size price. 6 of 20 meet it (Clean-Home, Happy Clean, Limpiezalto,
-  Brillamu, Sercomanga, Biomex); LavaYa publishes "desde" figures without sizes; 13 are
-  quote-only or NOT FOUND. On the looser test of any published figure, the dossier
+  least one per-size price. 6 of the 17 profiled meet it (Clean-Home, Happy Clean,
+  Limpiezalto, Brillamu, Sercomanga, Biomex); LavaYa publishes "desde" figures without
+  sizes; 10 are quote-only or NOT FOUND. On the looser test of any published figure, the dossier
   counts Valencia 5 of 16 and Madrid's list shows 10 of 15 (`market-dossier.md` §2–§3).
 - **Two of the six transparent price lists are multi-province.** Clean-Home's Murcia
   sofa list (2 pl €79, 3 pl €85, 4 pl €89) is the same list `granada-market.md` §3 read
@@ -628,14 +631,16 @@ three provinces. That file is out of scope here and is not edited.
   FJ, LavaYa, Villalba, Limpiezas Murcia), as in Madrid / Valencia. The nearest
   vacuum-led methods are Tapinet's turbine-suction phase and Happy Clean's "limpieza en
   seco"; no Hyla-based operator was found.
-- **The premium + transparent lane is not empty in Murcia.** `market-dossier.md` §4.2
-  read that lane as empty in Madrid / Valencia. In Murcia, Limpiezalto publishes the
-  highest per-size list found (colchón 135–160 cm €100 + VAT, 3 pl sofá €100 + VAT) and
-  holds 4.9 (66) on Maps. That is one local player, not a crowded tier; the
-  "verified proof" opening (a lab report) stays unclaimed.
+- **Highest published list.** `market-dossier.md` §4.2 read the premium + transparent
+  lane as empty in Madrid / Valencia. In Murcia, Limpiezalto publishes the highest
+  per-size list found (colchón 135–160 cm €100 + VAT, 3 pl sofá €100 + VAT) and holds
+  4.9 (66) on Maps. Its row names no method and states limits instead of a guarantee
+  (§4.2), so whether it fills that lane is not established here; the "verified proof"
+  opening (a lab report) is unclaimed by any provider found in this sweep.
 - **Reputation depth.** Criterion: a Murcia-present upholstery specialist with ≥30
-  Google reviews on a local listing. Three meet it: Happy Clean 105 (Torrevieja listing),
-  Limpiezalto 66, TapiClean 37. Clean-Home's 1,632 is one national listing. Review counts
+  Google reviews on a local listing. Two meet it: Limpiezalto 66, TapiClean 37. Happy
+  Clean's 105 sit on its Torrevieja (Alicante) listing and Clean-Home's 1,632 on one
+  national listing, so neither counts. Review counts
   are small against Valencia's Clean-Home 1,300 / Centauro 160 (`market-dossier.md` §3.2).
 - **Travel.** Free travel within the capital is the norm where stated; Limpiezalto
   charges outside the capital and Sercomanga prices by distance. No published minimum
@@ -645,21 +650,24 @@ three provinces. That file is out of scope here and is not edited.
 ## 5. Local price map
 
 Figures are the published per-piece prices of §4.2, one value per provider per size
-bucket. Where a provider gives a range (Happy Clean) its low end is used; "desde" is
-kept as published. VAT basis differs: Limpiezalto and Sercomanga publish ex-VAT,
-Brillamu VAT-included, the rest do not say. The median uses published figures; a second
-median adds 21% VAT to the two ex-VAT providers and treats the rest as VAT-included.
+bucket. Where a provider gives a range (Happy Clean), the medians use its low end and
+the range cells span its full published range; "desde" is kept as published. VAT basis
+differs: Limpiezalto and Sercomanga publish ex-VAT, Brillamu VAT-included, the rest do
+not say. Every range cell is built from published figures on these mixed VAT bases; the
+VAT-adjusted values are listed under the table. The median uses published figures; a
+second median adds 21% VAT to the two ex-VAT providers and treats the rest as
+VAT-included.
 Medians only where n ≥ 3. Snippet-only figures (Sofaclín, Happy Clean sizes) are left
 out. Madrid / Valencia from `market-dossier.md` §2.1 / §3.1; Granada from
 `granada-market.md` §3–§4.
 
-| Service | Murcia figures (provider: €) | n | Murcia range | Median, published / VAT-adjusted | Madrid range (cluster) | Valencia range (cluster) | Granada | Label |
+| Service | Murcia figures (provider: €) | n | Murcia range (published, mixed VAT bases) | Median, published / VAT-adjusted | Madrid range (cluster) | Valencia range (cluster) | Granada | Label |
 | --- | --- | --- | --- | --- | --- | --- | --- | --- |
 | Colchón individual (80–100 cm) | Sercomanga 36 +VAT; Limpiezalto 50 +VAT; Biomex 55; Clean-Home 59 (1 side) | 4 | €36–59 | €52.5 / €57.0 | €35–60 (€35–45) | €25–55 (€40–55) | "desde €45", no size (Happy Clean) | Range FACT (4 sources); medians ESTIMATE |
-| Colchón matrimonio (135–150 cm; 150 cm bucket used) | Sercomanga 60 +VAT; Biomex 65; Clean-Home 69 (≤175 cm, 1 side); Limpiezalto 100 +VAT (135/150/160 cm) | 4 | €60–100 (135 cm: Sercomanga €50, Clean-Home €65) | €67 / €70.8 | €55–90 (€60–75) | €60–75 (€65) | Clean-Home add-on only, +€25 | Range FACT (4 sources); medians ESTIMATE |
+| Colchón matrimonio (135–150 cm; 150 cm bucket used) | Sercomanga 60 +VAT; Biomex 65; Clean-Home 69 (≤175 cm, 1 side); Limpiezalto 100 +VAT (135/150/160 cm) | 4 | €60–100 (135 cm: Sercomanga €50, Clean-Home €65) | €67 / €70.8 | €55–90 (€60–75) | €60–75 (€65) | Clean-Home add-on only: 135 cm +€25, queen +€29 | Range FACT (4 sources); medians ESTIMATE |
 | Colchón king (160–200 cm) | Clean-Home 69 (≤195 cm, 1 side); Limpiezalto 100 (160 cm) / 120 (180–200 cm) +VAT | 2 | €69–120 | n < 3, no median | €75–100 (€80–90) | €65–100 | Clean-Home add-on only, +€35 | FACT (1 source), provisional per provider; no median |
-| Sofá 2 plazas | Sercomanga 60 +VAT; Happy Clean 70 (70–90); Clean-Home 79; Limpiezalto 80 +VAT; Brillamu 80 | 5 | €60–90 published (€70–96.8 VAT-adjusted) | €79 / €79 | €60–97 (€60–70) | €69–89 (€70–79) | €79 (Clean-Home) | Range FACT (5 sources); medians ESTIMATE |
-| Sofá 3 plazas | Clean-Home 85; Sercomanga 85 +VAT; Happy Clean 100 (100–120); Limpiezalto 100 +VAT; Brillamu 100 | 5 | €85–120 published | €100 / €100 | €90–119 (€90) | €85–119 (€90) | €85 (Clean-Home) | Range FACT (5 sources); medians ESTIMATE |
+| Sofá 2 plazas | Sercomanga 60 +VAT; Happy Clean 70 (70–90); Clean-Home 79; Limpiezalto 80 +VAT; Brillamu 80 | 5 | €60–90 | €79 / €79 | €60–97 (€60–70) | €69–89 (€70–79) | €79 (Clean-Home) | Range FACT (5 sources); medians ESTIMATE |
+| Sofá 3 plazas | Clean-Home 85; Sercomanga 85 +VAT; Happy Clean 100 (100–120); Limpiezalto 100 +VAT; Brillamu 100 | 5 | €85–120 | €100 / €100 | €90–119 (€90) | €85–119 (€90) | €85 (Clean-Home) | Range FACT (5 sources); medians ESTIMATE |
 | Chaise longue / L (entry configuration) | Clean-Home 89 (2+chaise); Sercomanga 108 +VAT (small); Happy Clean 110 (110–130); Brillamu 110; Limpiezalto 120 +VAT (L 3 pl) | 5 | €89–180 across all configurations (U 6 pl, Limpiezalto) | €110 / €110 | €120–175 | €89–190 | €89–99 (Clean-Home) | Range FACT (5 sources); medians ESTIMATE |
 | Sillón / butaca | Happy Clean 30; Brillamu 40; Limpiezalto 60 +VAT ("sofá 1 plaza", read as sillón) | 3 | €30–60 | €40 / €40 | €42–50 (€50) | NOT FOUND in dossier | "desde €30" (Happy Clean) | Range FACT (3 sources); medians ESTIMATE |
 | Silla | Happy Clean 5; LavaYa 10; Brillamu 20 | 3 | €5–20 | €10 / €10 | NOT FOUND in dossier | NOT FOUND in dossier | "desde €5" (Happy Clean) | Range FACT (3 sources); medians ESTIMATE |
@@ -674,17 +682,19 @@ Limpiezalto colchón 90 cm €60.50, 150 cm €121, sofá 2 pl €96.80, 3 pl 
 - **Murcia is not a cheaper market on published prices.** Criterion: the Murcia median
   against the Madrid / Valencia cluster. Sofá 2 pl (€79) sits at the top of the Valencia
   cluster and above Madrid's; sofá 3 pl (€100) is above both clusters (€90); colchón
-  individual (€52.5–57.0) is above Madrid's cluster and inside Valencia's; colchón
-  matrimonio (€67–70.8) is inside both. Granada's single-chain read in
+  individual is above Madrid's cluster (€35–45) on both medians, and against Valencia's
+  (€40–55) the published median (€52.5) is inside and the VAT-adjusted one (€57.0)
+  above; colchón matrimonio (€67 / €70.8) is inside Madrid's cluster (€60–75) and above
+  Valencia's single-point cluster (€65). Granada's single-chain read in
   `granada-market.md` §4 ("same band, mild downward lean") does not carry over.
 - **The spread is set by two local lists.** Sercomanga sets most low ends and Limpiezalto
   most high ends; Clean-Home sits in the middle with the same list it uses in Granada and
-  the Costa Blanca. A price set inside €79–100 for sofás and €55–70 for a mattress
-  would sit in the published middle; this file does not choose prices.
+  the Costa Blanca. This file does not choose prices.
 - **King size and silla rest on thin data** (n = 2 and n = 3 with "desde" figures); they
   are not a basis for a parameter without a second read.
-- **White space** (from §4.3): no lab-verified mite claim and no vacuum-led specialist in
-  Murcia; transparent pricing exists, so transparency alone is not a differentiator here.
+- **White space** (from §4.3): no lab-verified mite claim and no vacuum-led specialist
+  found in Murcia in this sweep, which is not claimed exhausted (§4.1); transparent
+  pricing exists, so transparency alone is not a differentiator here.
 
 ## 6. Demand signals and seasonality
 
@@ -701,11 +711,25 @@ Retrieved 2026-10-05. The index is relative: 100 is the region with the highest
 searches for that term, every other region is scaled to it. It measures share of a
 region's searches, not volume.
 
+Provenance per column (re-read 2026-10-05): the two index columns are the per-term
+"Interés por subregión" widgets of the two-term request; two single-term requests
+(same geo and window) return the same values for the four regions and the same top
+regions. The split column is the request's "Desglose comparativo por subregión" widget,
+which gives each term's share of the pair inside each region; it is normalised per
+region, not computed from the two index columns, so the index ratio and the split do
+not match. Two reads of that widget returned the same values; three split cells of the
+first transcription were corrected to them.
+
+Only the two core service terms were requested. The other seven core terms of
+`trends-keywords-addendum.md` §4 (the two "a domicilio" phrases, "higienización de
+colchones", "limpieza de tapicería" and the three "ácaros" terms) were not requested in
+this pass; their regional index is NOT FOUND.
+
 | Region | "limpieza de colchones" index | "limpieza de sofás" index | Split between the two terms (colchones / sofás) |
 | --- | --- | --- | --- |
-| **Región de Murcia** | **45** | **16** | 69% / 31% |
-| Andalucía | 54 | 25 | 62% / 38% |
-| Comunitat Valenciana | 45 | 41 | 51% / 49% |
+| **Región de Murcia** | **45** | **16** | 70% / 30% |
+| Andalucía | 54 | 25 | 63% / 37% |
+| Comunitat Valenciana | 45 | 41 | 50% / 50% |
 | Comunidad de Madrid | 63 | 66 | 48% / 52% |
 | Top region | Canarias 100 | Castilla-La Mancha 100 | — |
 
@@ -726,7 +750,7 @@ Reading (ANALYSIS):
 
 - On the mattress term, Murcia (45) is level with the Comunitat Valenciana and below
   Andalucía (54) and Madrid (63). On the sofa term it is among the lowest regions with
-  data (16, against 25 / 41 / 66). In Murcia the mattress term takes 69% of the pair,
+  data (16, against 25 / 41 / 66). In Murcia the mattress term takes 70% of the pair,
   the highest mattress share of the four regions compared.
 - The values come in a few repeated steps (45 is shared by seven regions, 16 by five).
   Criterion: when many regions share an identical index, Trends is rounding a small
@@ -753,12 +777,11 @@ one for colchones (Apr-2025), ten for sofás.
 A Murcia seasonal curve is **NOT FOUND** (below threshold, §6.1); the Spain curve is
 carried as a proxy.
 
-Reading (ANALYSIS): the mattress term has a mild late-summer high (Jul–Sep, 11.0–12.0)
-and a December low (7.2); peak over trough ≈1.7×, on a low-volume series. The sofa term
-is noisier (a sixth of its months have no data) with its highs in February and
-August–September. This agrees with `market-dossier.md` §5.4 (no strong spring peak;
-roughly year-round demand) and adds one thing: on five years of monthly means, the
-mattress term's highest quarter is July–September, not spring.
+Reading (ANALYSIS): the mattress term's monthly means run from 7.2 (December) to 12.0
+(September), and the sofa term is noisier (a sixth of its months have no data). Each
+mean rests on 3–5 values of a low-volume series and no spread was computed, so the
+month-to-month differences are not read as a measured seasonal effect. This agrees with
+`market-dossier.md` §5.4 (no strong spring peak; roughly year-round demand).
 
 ### 6.3 Keyword volume and CPC
 
@@ -770,7 +793,10 @@ mattress term's highest quarter is July–September, not spring.
 
 National band carried by reference: CPC ≈€1.0–3.0 per click, central ≈€1.5–2.0, ESTIMATE
 (`market-dossier.md` §6.1); volume bands for the core terms `>100` / `<100` per month in
-Spain, FACT (displayed band) (`trends-keywords-addendum.md` §4).
+Spain (Ahrefs displayed bands, read 2026-07-07, carried by reference from
+`trends-keywords-addendum.md` §4 and not re-read here), with the addendum's unresolved
+conflict on "limpieza de sofás" carried with them: Ubersuggest 1.3K against Ahrefs
+`<100`, CONFLICTING, neither value used.
 
 Reading (ANALYSIS): the one Murcia-named figure (€3.04) sits at the top of the national
 CPC band, and 70 searches a month for the phrase is small; both rest on one row the tool
@@ -783,7 +809,12 @@ AEMET standard climatological values, station Murcia (index 7178I, 62 m, 38°0'7
 1°10'15" W), period 1984–2010 — the period AEMET publishes for this station, not a
 1991–2020 normal
 ([aemet.es](https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?l=7178I&k=mur));
-retrieved 2026-10. Every value FACT (1 source), provisional — AEMET.
+retrieved 2026-10. Every value FACT (1 source), provisional — AEMET. The Year row is
+AEMET's own published annual row ("Año") on the same page, not a sum or mean of the
+monthly rows, and it does not equal them (sunshine 2,967 against a monthly sum of
+2,953; minimum 12.3 against a monthly mean of 12.2); the cause is not stated on the
+page. Re-read
+2026-10-05: all twelve monthly rows match the page.
 
 | Month | Mean temp. °C | Mean daily max. °C | Mean daily min. °C | Rainfall mm | Relative humidity % | Days with rain ≥1 mm | Sunshine h |
 | --- | --- | --- | --- | --- | --- | --- | --- |
@@ -810,16 +841,17 @@ on humidity (49–67%) and 35.0 rain days a year against 36.5.
 Reading against drying time and seasonality (ANALYSIS):
 
 - **Drying.** Criterion: drying is fastest when air is warm and relative humidity is
-  low. Murcia's least favourable month (December: 17.2 °C mean max, 68% humidity) is
-  still mild and moderately humid; June–August (31–34 °C max, 49–54%) are the most
-  favourable. The drying times local providers publish (Brillamu 2–4 h; LavaYa sofá
+  low. On the two variables of the criterion no single month is worst on both: January
+  has the lowest mean maximum (16.6 °C) and December the highest humidity (68%).
+  June–August have the three highest mean maxima (31.0–34.2 °C) at 49–54% humidity. The drying times local providers publish (Brillamu 2–4 h; LavaYa sofá
   4–10 h, colchón 3–8 h; §4.2) are not broken down by season, so the size of the
   winter penalty is NOT FOUND; this file does not estimate it.
 - **Rain is not a constraint.** 36.5 days a year with ≥1 mm, at most 4.1 in any month
   (November), i.e. about one day in seven in the wettest month and fewer than one in
   thirty in July.
-- **Summer.** The climate favours summer work for drying, and the mattress search high
-  (§6.2) falls in July–September. Against it: 34 °C mean daily maxima in July–August
+- **Summer.** The climate favours summer work for drying. The highest monthly means of
+  the mattress search series (§6.2, Spain proxy) fall in July–September, which §6.2
+  does not read as a measured seasonal effect. Against it: 34 °C mean daily maxima in July–August
   bear on the operator's working day (physical work, car loading at midday). The
   August holiday effect on bookings in Murcia is a HYPOTHESIS, untested here.
 
@@ -867,7 +899,11 @@ retrieved 2026-10): Murcia 608 registered dwellings / 2,931 plazas; Cartagena 1,
 San Pedro del Pinatar 254 / 1,302; Molina de Segura 6 / 31. The INE figure counts
 platform listings in 2026, the register counts licensed dwellings in 2024; they are
 kept apart and not averaged. Read in a browser; a second CREM page in the same session
-returned a bot-check (Radware) page and was not read further.
+returned a bot-check (Radware) page and was not read further. San Javier matches to
+the dwelling (940 in both), so both sources were re-read on 2026-10-05: the CREM table
+(update 16-Jun-2025, data at 31-Dec-2024) gives 940 / 4,779 and INE table 39363 (May
+2026) gives 940 / 4,778. Both read, both stand as written; the equal dwelling count is
+a match of two different measurements, not one figure copied.
 
 ### 7.2 Hotels, tourist apartments and student residences
 
@@ -905,7 +941,8 @@ Reading (ANALYSIS):
   dwellings) unless the operator runs batched coastal days.
 - The coastal pool is seasonal: Cartagena's hotel plazas fall from 6,186 (Aug) to 3,012
   (Jan). That makes the off-season (Oct–May) the plausible window for deep-cleaning
-  contracts with coastal properties, the reverse of the household curve in §6.2. This
+  contracts with coastal properties, the reverse of the household search curve in §6.2
+  (Spain proxy). This
   is a HYPOTHESIS, untested.
 - No B2B € spend figure exists for Murcia; `market-dossier.md` §6.4 already records the
   national gap. Nothing here changes it.
@@ -918,15 +955,15 @@ customers is **HYPOTHESIS** for every row: none has been tested.
 | Channel | What it is | Why it is plausible | Evidence status |
 | --- | --- | --- | --- |
 | Onda Regional de Murcia / La 7 (RTRM) | Regional public radio and TV; sells advertising, with a 2025 Onda Regional tariff PDF and a contact for advertisers on its tariffs page | Region-wide reach, older audience overlaps the 45–64 target | Existence of an advertising offer FACT (1 source), provisional — [rtrm.es](https://www.rtrm.es/servlet/rtrm.servlets.ServletLink2?METHOD=tarifas.jsp&sit=c%2C4), retrieved 2026-10; tariff figures NOT FOUND (PDF not read) |
-| La Verdad (Murcia) | Largest daily of the region (Vocento group), print and web | Local reach; display and advertorial formats | Advertising terms NOT FOUND on a primary page; a search summary quoted a CPM and a minimum spend without a readable source, not used |
+| La Verdad (Murcia) | Regional daily (Vocento group), print and web | Local reach; display and advertorial formats | Advertising terms NOT FOUND on a primary page; a search summary quoted a CPM and a minimum spend without a readable source, not used |
 | murcia.com | Regional news / business portal publishing paid company pieces | A national franchise (EcoCleans) used it for a 2022 advertorial (§4.2), so the format exists and is used by the category | FACT (1 source), provisional — the advertorial itself ([murcia.com](https://www.murcia.com/empresas/noticias/2022/12/14-limpieza-a-fondo-con-la-empresa-ecocleans.asp)), retrieved 2026-10; prices NOT FOUND |
-| Neighbourhood associations | The Ayuntamiento's register of citizen entities (Nov-2025 edition) lists 441 entities, of which 24 have "vecin-" in the name (ESTIMATE: name match on the PDF text), among them San Lorenzo-Universidad, Santa María de Gracia, El Carmen, El Palmar (Los Rosales), Espinardo, Beniaján, Algezares and Corvera; the Federación de Asociaciones Vecinales de Murcia (created May 2005) states 25 affiliated associations and ≈15 collaborating entities | Talks, stands at barrio events and association newsletters reach residents by barrio, including the premium cluster of §2.2 (Santa María de Gracia, El Carmen, San Lorenzo) | Register: FACT (1 source), provisional — [transparencia.mimurcia.murcia.es](https://transparencia.mimurcia.murcia.es/sites/default/files/2025-11/Registro%20de%20Entidades%20Ciudadanas_0.pdf), retrieved 2026-10. Federation counts: FACT (1 source), provisional — self-reported, [favmurcia.es](https://favmurcia.es/quienes-somos/), retrieved 2026-10 |
-| Large local community groups (Facebook, WhatsApp, Telegram buy-sell and barrio groups) | Groups by town or pedanía | Word of mouth is the dominant channel for at-home services (`market-dossier.md` §6.4); the pedanía structure (59 units, §1.2) maps onto per-pedanía groups | Group names and member counts NOT FOUND (behind login, not read) |
-| Marketplaces | Cronoshare and Habitissimo run Murcia categories for mattress and upholstery cleaning (§4.1) | Live paid-lead channel already used by local providers (Hidrokleen, Limpiezas Hermanas, §4.2) | Category existence FACT (1 source), provisional (§4.1 sources); lead prices NOT FOUND |
+| Neighbourhood associations | The Ayuntamiento's register of citizen entities (Nov-2025 edition) lists 441 entities, of which 24 have "vecin-" in the name (ESTIMATE: name match on the PDF text), among them San Lorenzo-Universidad, Santa María de Gracia, El Carmen, El Palmar (Los Rosales), Espinardo, Beniaján, Algezares and Corvera; the Federación de Asociaciones Vecinales de Murcia (created May 2005) states 25 affiliated associations and ≈15 collaborating entities | Talks, stands at barrio events and association newsletters reach residents by barrio. Of the associations named here, San Lorenzo-Universidad sits in the centro zone, the one zone of §2.2's high-income cluster that clears the premium cut-off, and Santa María de Gracia in a zone below the cut-off whose southern edge clears it; an association for Vistalegre or La Flota is not among those named here | Register: FACT (1 source), provisional — [transparencia.mimurcia.murcia.es](https://transparencia.mimurcia.murcia.es/sites/default/files/2025-11/Registro%20de%20Entidades%20Ciudadanas_0.pdf), retrieved 2026-10. Federation counts: FACT (1 source), provisional — self-reported, [favmurcia.es](https://favmurcia.es/quienes-somos/), retrieved 2026-10 |
+| Large local community groups (Facebook, WhatsApp, Telegram buy-sell and barrio groups) | Groups by town or pedanía | Word of mouth is a dominant channel for at-home services (Spain proxy, MODERATE in `market-dossier.md` §6.4, from a home-repairs survey); the pedanía structure (59 units, §1.2) maps onto per-pedanía groups | Group names and member counts NOT FOUND (behind login, not read) |
+| Marketplaces | Cronoshare and Habitissimo run Murcia categories for mattress and upholstery cleaning (§4.1) | Live paid-lead channel already used by local providers (Hidrokleen, Limpiezas Hermanas, §4.2) | Cronoshare category existence FACT (1 source), provisional — [colchones](https://www.cronoshare.com/servicios/limpieza-colchones/murcia/murcia), [sofás](https://www.cronoshare.com/servicios/limpieza-sofas-domicilio/murcia/murcia), retrieved 2026-10; Habitissimo's page was read in §4.1 but its URL was not recorded, so it is not counted as FACT here; lead prices NOT FOUND |
 
 Reading (ANALYSIS): the cheapest channels to test first are the free or low-cost ones
-that reach the premium cluster directly (neighbourhood associations in the old city,
-community groups); paid regional media reach the whole region, most of which is outside
+that reach the high-income cluster of §2.2 directly (the San Lorenzo-Universidad
+association in the centro zone, community groups); paid regional media reach the whole region, most of which is outside
 R2. This is an ordering for testing, not a channel decision.
 
 ## 8. Local operating costs, access rules and financing landscape
diff --git a/specs/murcia-market/feature.md b/specs/murcia-market/feature.md
index 94b9d85..e26c118 100644
--- a/specs/murcia-market/feature.md
+++ b/specs/murcia-market/feature.md
@@ -172,7 +172,7 @@ and no local keyword or CPC data.
   associations), each with what it is and why it is plausible, labelled HYPOTHESIS
   where untested. _Verify:_ `grep -c "^### [67]\." business/research/murcia-market.md`.
   Accept: every Trends or keyword figure states tool, geo filter and date, or is NOT FOUND; climate table has 12 months from AEMET; B2B counts are FACT with source or NOT FOUND.
-- [ ] **T11 — Fix pass on T4/T5 review findings** (structural). In `murcia-market.md`
+- [x] **T11 — Fix pass on T4/T5 review findings** (structural). In `murcia-market.md`
   §4–§7, close F-021 to F-040 at the lines `specs/murcia-market/review/findings.md`
   names, each as that entry describes. Source re-reads are allowed only for these
   three and each result is reported with what was read: (F-031) re-read Google Trends
@@ -260,6 +260,7 @@ and no local keyword or CPC data.
 | T10 | structural — `grep -n "FACT (1 source" business/research/murcia-market.md \| grep -v -c "FACT (1 source), provisional"` | docs | n/a — docs repo, no package.json / tsc / eslint; pre-change count `16` exit 0 (T3/T9 uncommitted by design) | n/a (structural) | `0` exit 1 (grep -c on zero matches) | Triangulation skipped: text-only label sweep; numeric-token diff before/after: only `56940` → `56934` (×2), plus the `1` of each new "FACT (1 source)" label and `ECP320` (series code); TODO/TBD/lorem grep empty (exit 1); protected-files diff stat empty | none |
 | T4 | structural — `grep -c "^\| \*\*" business/research/murcia-market.md` (Scenario: sweep depth) | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `14` exit 0 (bold rows of §1–§3) | `34` exit 0 (14 + 20 provider rows); `git diff --numstat HEAD`: `158	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; label grep `0` exit 1; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `33`; protected-files diff stat empty | none |
 | T5 | structural — `grep -c "^### [67]\." business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `0` exit 1 | `8` exit 0; `git diff --numstat HEAD`: `239	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; label grep `0` exit 1; no FACT label ends a line; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `46`; protected-files diff stat empty | none |
+| T11 | structural — `grep -n "FACT (1 source" business/research/murcia-market.md \| grep -v -c "FACT (1 source), provisional"`; `grep -c "Spain proxy" business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural) | `0` exit 1 (grep -c on zero matches); `3` exit 0; `git diff --numstat HEAD`: `89	52	business/research/murcia-market.md`, first hunk at line 556 (§1–§3 untouched) | Triangulation skipped: text fix pass; re-reads: Trends split cells 69/31 → 70/30 (Murcia), 62/38 → 63/37 (Andalucía), 51/49 → 50/50 (Valencia), index columns confirmed; AEMET 12 monthly rows confirmed, Year row is AEMET's published "Año" row; San Javier CREM 940 / 4,779 and INE 940 / 4,778 both confirmed; counts 20 → 17 profiled, 6 of 20 → 6 of 17, 13 → 10 quote-only, reputation 3 → 2; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `48`; protected-files diff stat empty | none |
 
 ## Briefing
 
```
