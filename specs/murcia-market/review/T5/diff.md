class: medium

## git status --short -uall
```
 M business/research/murcia-market.md
 M specs/murcia-market/feature.md
?? .torq-flow/active
?? specs/murcia-market/review/T5/brief.md
?? specs/murcia-market/review/T5/report.md
```

## git diff HEAD
```diff
diff --git a/business/research/murcia-market.md b/business/research/murcia-market.md
index 1947984..5d8cf5c 100644
--- a/business/research/murcia-market.md
+++ b/business/research/murcia-market.md
@@ -688,8 +688,247 @@ Limpiezalto colchón 90 cm €60.50, 150 cm €121, sofá 2 pl €96.80, 3 pl 
 
 ## 6. Demand signals and seasonality
 
+### 6.1 Google Trends — regional index
+
+Method of `trends-keywords-addendum.md` / `market-dossier.md` §5.4: Trends was opened in
+the browser after loading the Trends home page first (session warming); the regional
+values were read from the page's own data responses (`comparedgeo` widget), not from a
+chart image. Query: "limpieza de colchones" and "limpieza de sofás" compared in one
+request; geo Spain (`geo=ES`); "Últimos 5 años" (weekly, Oct-2021 to Oct-2026); all
+categories; web search
+([trends.google.es](https://trends.google.es/trends/explore?date=today%205-y&geo=ES&q=limpieza%20de%20colchones,limpieza%20de%20sof%C3%A1s&hl=es)).
+Retrieved 2026-10-05. The index is relative: 100 is the region with the highest share of
+searches for that term, every other region is scaled to it. It measures share of a
+region's searches, not volume.
+
+| Region | "limpieza de colchones" index | "limpieza de sofás" index | Split between the two terms (colchones / sofás) |
+| --- | --- | --- | --- |
+| **Región de Murcia** | **45** | **16** | 69% / 31% |
+| Andalucía | 54 | 25 | 62% / 38% |
+| Comunitat Valenciana | 45 | 41 | 51% / 49% |
+| Comunidad de Madrid | 63 | 66 | 48% / 52% |
+| Top region | Canarias 100 | Castilla-La Mancha 100 | — |
+
+Label: every cell FACT (1 source), provisional — Google Trends, tool, geo and date as
+above; retrieved 2026-10. The Madrid "limpieza de colchones" index (63) is the same
+value `market-dossier.md` §5.4 read on 2026-07-07, a repeat read of the same tool, not a
+second source.
+
+Murcia-level read (`geo=ES-MC`, same terms, same window,
+[trends.google.es](https://trends.google.es/trends/explore?date=today%205-y&geo=ES-MC&q=limpieza%20de%20colchones,limpieza%20de%20sof%C3%A1s&hl=es),
+retrieved 2026-10-05): the time series averages 0 and 1 and every city, related-query and
+sub-area panel reads "Tu búsqueda no tiene suficientes datos para mostrar resultados".
+A Trends index for the Región de Murcia time series, for Murcia city, or for Murcia
+related queries is therefore **NOT FOUND**: the volume is below Trends' threshold at that
+geography.
+
+Reading (ANALYSIS):
+
+- On the mattress term, Murcia (45) is level with the Comunitat Valenciana and below
+  Andalucía (54) and Madrid (63). On the sofa term it is among the lowest regions with
+  data (16, against 25 / 41 / 66). In Murcia the mattress term takes 69% of the pair,
+  the highest mattress share of the four regions compared.
+- The values come in a few repeated steps (45 is shared by seven regions, 16 by five).
+  Criterion: when many regions share an identical index, Trends is rounding a small
+  sample; the regional ranking is coarse and the Murcia–Valencia tie on the mattress
+  term is not a measured equality.
+
+### 6.2 Seasonality (Trends, Spain)
+
+Same two terms, geo Spain, "2004–presente" (monthly points), read from the page's
+`multiline` data response
+([trends.google.es](https://trends.google.es/trends/explore?date=all&geo=ES&q=limpieza%20de%20colchones,limpieza%20de%20sof%C3%A1s&hl=es));
+retrieved 2026-10-05. The 60 monthly values Oct-2021 to Sep-2026 were averaged by
+calendar month (ESTIMATE: mean of FACT (1 source), provisional values). The scale is
+relative to the highest month of the pair since 2004, so the low absolute values (5–17)
+are expected. Months Trends marks "no data" are left out of the mean, not counted as 0:
+one for colchones (Apr-2025), ten for sofás.
+
+| Month | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
+| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
+| "limpieza de colchones", 5-year mean | 10.0 | 10.8 | 8.4 | 9.0 | 9.6 | 9.6 | 11.4 | 11.0 | **12.0** | 10.8 | 8.4 | **7.2** |
+| "limpieza de sofás", 5-year mean | 8.2 | **10.8** | **6.0** | 6.6 | 6.7 | 7.2 | 7.8 | 9.3 | 9.5 | 7.3 | 9.0 | 6.8 |
+| Months with data (colchones / sofás) | 5 / 5 | 5 / 4 | 5 / 5 | 4 / 5 | 5 / 3 | 5 / 5 | 5 / 4 | 5 / 4 | 5 / 4 | 5 / 4 | 5 / 3 | 5 / 4 |
+
+A Murcia seasonal curve is **NOT FOUND** (below threshold, §6.1); the Spain curve is
+carried as a proxy.
+
+Reading (ANALYSIS): the mattress term has a mild late-summer high (Jul–Sep, 11.0–12.0)
+and a December low (7.2); peak over trough ≈1.7×, on a low-volume series. The sofa term
+is noisier (a sixth of its months have no data) with its highs in February and
+August–September. This agrees with `market-dossier.md` §5.4 (no strong spring peak;
+roughly year-round demand) and adds one thing: on five years of monthly means, the
+mattress term's highest quarter is July–September, not spring.
+
+### 6.3 Keyword volume and CPC
+
+| Keyword | Monthly volume | CPC | Tool, geo filter, date | Label |
+| --- | --- | --- | --- | --- |
+| limpieza de sofas murcia | 70 | €3.04 | Ubersuggest, unregistered free search, language Spanish, location Spain (`locId=2724`); the tool flags the row "Outdated" ([app.neilpatel.com](https://app.neilpatel.com/en/ubersuggest/keyword_ideas?keyword=limpieza%20de%20sofas%20murcia&lang=es&locId=2724)); retrieved 2026-10-05 | FACT (1 source), provisional — a Murcia-named phrase in the Spain database, not a Murcia geo filter; the tool marks it outdated |
+| limpieza de sofás en murcia / limpieza de sofas a domicilio en murcia / limpieza de sofa murcia | 0 each | €0 each | Same search, "Keyword ideas" rows | FACT (1 source), provisional — same caveats |
+| Any core term with a Murcia **geo filter** (region or city) | **NOT FOUND** | **NOT FOUND** | Ahrefs Free Keyword Generator (Spain) stopped at a Cloudflare "Verifique que es un ser humano" check, not bypassed; Ubersuggest allows one unregistered search, used above; Google and Microsoft keyword planners are account-walled (`trends-keywords-addendum.md` §5) | NOT FOUND |
+
+National band carried by reference: CPC ≈€1.0–3.0 per click, central ≈€1.5–2.0, ESTIMATE
+(`market-dossier.md` §6.1); volume bands for the core terms `>100` / `<100` per month in
+Spain, FACT (displayed band) (`trends-keywords-addendum.md` §4).
+
+Reading (ANALYSIS): the one Murcia-named figure (€3.04) sits at the top of the national
+CPC band, and 70 searches a month for the phrase is small; both rest on one row the tool
+itself marks outdated. They are not a basis for a Murcia CPC parameter; the national
+band stays the planning input until a live campaign measures it.
+
+### 6.4 Climate inputs
+
+AEMET standard climatological values, station Murcia (index 7178I, 62 m, 38°0'7" N
+1°10'15" W), period 1984–2010 — the period AEMET publishes for this station, not a
+1991–2020 normal
+([aemet.es](https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?l=7178I&k=mur));
+retrieved 2026-10. Every value FACT (1 source), provisional — AEMET.
+
+| Month | Mean temp. °C | Mean daily max. °C | Mean daily min. °C | Rainfall mm | Relative humidity % | Days with rain ≥1 mm | Sunshine h |
+| --- | --- | --- | --- | --- | --- | --- | --- |
+| Jan | 10.6 | 16.6 | 4.7 | 27 | 65 | 3.8 | 189 |
+| Feb | 12.2 | 18.4 | 5.9 | 27 | 63 | 3.6 | 190 |
+| Mar | 14.3 | 20.9 | 7.7 | 30 | 59 | 3.3 | 223 |
+| Apr | 16.5 | 23.3 | 9.7 | 25 | 53 | 3.6 | 256 |
+| May | 20.0 | 26.6 | 13.3 | 28 | 52 | 3.9 | 289 |
+| Jun | 24.2 | 31.0 | 17.4 | 18 | 49 | 2.0 | 323 |
+| Jul | 27.2 | 34.0 | 20.3 | 3 | 50 | 0.6 | 353 |
+| Aug | 27.6 | 34.2 | 20.9 | 8 | 54 | 1.0 | 316 |
+| Sep | 24.2 | 30.4 | 18.0 | 32 | 59 | 3.0 | 239 |
+| Oct | 19.8 | 25.6 | 13.9 | 36 | 64 | 3.7 | 217 |
+| Nov | 14.6 | 20.3 | 8.9 | 32 | 65 | 4.1 | 186 |
+| Dec | 11.5 | 17.2 | 5.8 | 29 | 68 | 3.9 | 172 |
+| **Year** | **18.6** | **24.9** | **12.3** | **297** | **58** | **36.5** | **2,967** |
+
+Cross-check, different station (different geography, does not upgrade the label):
+AEMET Alcantarilla Base Aérea (7228, 75 m, 1981–2010,
+[aemet.es](https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?l=7228&k=mur);
+retrieved 2026-10) reads within 0.5 °C on every monthly mean temperature, within 2 points
+on humidity (49–67%) and 35.0 rain days a year against 36.5.
+
+Reading against drying time and seasonality (ANALYSIS):
+
+- **Drying.** Criterion: drying is fastest when air is warm and relative humidity is
+  low. Murcia's least favourable month (December: 17.2 °C mean max, 68% humidity) is
+  still mild and moderately humid; June–August (31–34 °C max, 49–54%) are the most
+  favourable. The drying times local providers publish (Brillamu 2–4 h; LavaYa sofá
+  4–10 h, colchón 3–8 h; §4.2) are not broken down by season, so the size of the
+  winter penalty is NOT FOUND; this file does not estimate it.
+- **Rain is not a constraint.** 36.5 days a year with ≥1 mm, at most 4.1 in any month
+  (November), i.e. about one day in seven in the wettest month and fewer than one in
+  thirty in July.
+- **Summer.** The climate favours summer work for drying, and the mattress search high
+  (§6.2) falls in July–September. Against it: 34 °C mean daily maxima in July–August
+  bear on the operator's working day (physical work, car loading at midday). The
+  August holiday effect on bookings in Murcia is a HYPOTHESIS, untested here.
+
 ## 7. B2B pool and local acquisition channels
 
+### 7.1 Tourist dwellings (viviendas de uso turístico)
+
+INE, *Medición del número de viviendas turísticas en España y su capacidad*
+(experimental statistic built from listings on the three largest platforms), table 39363,
+municipalities, latest reference **May 2026**
+([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=39363),
+[API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/39363?nult=1)); retrieved
+2026-10. Every row FACT (1 source), provisional — INE. Region of Murcia total: 6,382
+dwellings, 32,966 plazas (same table).
+
+| Municipality | Ring | Tourist dwellings | Plazas |
+| --- | --- | --- | --- |
+| Murcia | core + pedanías | **777** | 3,690 |
+| Alcantarilla | inner belt | 12 | 71 |
+| Molina de Segura | inner belt | 27 | 154 |
+| Las Torres de Cotillas | inner belt | 4 | 29 |
+| Santomera | inner belt | 4 | 24 |
+| Beniel | inner belt | 0 | 0 |
+| Alguazas | inner belt | 0 | 0 |
+| Ceutí | inner belt | 8 | 24 |
+| Lorquí | inner belt | 2 | 20 |
+| Archena | inner belt | 23 | 108 |
+| Orihuela (Alicante) | outer ring | 2,090 | 10,674 |
+| Cartagena | outer ring | 1,307 | 6,961 |
+| Torre-Pacheco | outer ring | 681 | 3,379 |
+| San Javier | outer ring | 940 | 4,778 |
+| San Pedro del Pinatar | outer ring | 436 | 2,276 |
+| Los Alcázares | outer ring | 492 | 2,480 |
+| Torrevieja (Alicante) | outer ring | 3,887 | 17,195 |
+| Lorca | outer ring | 67 | 373 |
+| Cieza | outer ring | 10 | 61 |
+
+Cross-check, **different measurement and date** (does not upgrade the label): the
+regional tourism register (Instituto de Turismo de la Región de Murcia, *Registro de
+Empresas y Actividades Turísticas*) as published by CREM, *Turismo. Datos municipales*,
+table 6, year 2024
+([econet.carm.es](https://econet.carm.es/inicio/-/crem/sicrem/PM12/sec10.html);
+retrieved 2026-10): Murcia 608 registered dwellings / 2,931 plazas; Cartagena 1,066 /
+5,869; San Javier 940 / 4,779; Torre-Pacheco 677 / 3,215; Los Alcázares 360 / 1,763;
+San Pedro del Pinatar 254 / 1,302; Molina de Segura 6 / 31. The INE figure counts
+platform listings in 2026, the register counts licensed dwellings in 2024; they are
+kept apart and not averaged. Read in a browser; a second CREM page in the same session
+returned a bot-check (Radware) page and was not read further.
+
+### 7.2 Hotels, tourist apartments and student residences
+
+| Figure | Value | Label | Source |
+| --- | --- | --- | --- |
+| Hotel establishments open, Murcia (tourist point), Aug-2026 | **32** establishments, 2,488 rooms, 4,781 plazas | FACT (1 source), provisional | INE *Encuesta de Ocupación Hotelera*, table 2076, tourist points ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=2076), [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2076?nult=12)). Retrieved 2026-10. |
+| Same, Cartagena, Aug-2026 | **25** establishments, 2,806 rooms, 6,186 plazas (Jan-2026: 17 / 1,388 / 3,012) | FACT (1 source), provisional | Same table. Retrieved 2026-10. |
+| Same, Torrevieja, Oct-2025 (latest month published; later months are blank in the table) | 17 establishments, 930 rooms, 1,925 plazas | FACT (1 source), provisional | Same table. Retrieved 2026-10. |
+| Hotel establishments in the belt towns and the other Mar Menor municipalities | **NOT FOUND** | NOT FOUND | INE publishes the survey by tourist point only for the points above; the CREM municipal hotel table was behind a bot-check page and was not read. |
+| Tourist apartments (regulated, not VUT), Región de Murcia, Aug-2026 | 1,828 apartments, 7,873 plazas | FACT (1 source), provisional — region, not municipality | INE *Encuesta de Ocupación en Apartamentos Turísticos*, table 2072 ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2072?nult=1)). Retrieved 2026-10. |
+| Student residences and colegios mayores, Murcia municipality | 10 listed; plazas stated for 7: Campus (Espinardo) 374, Colegio Mayor Azarbe 96, María Inmaculada 86, Hermanas Oblatas 82, JC1 70, San Pablo Apóstol 50, Residencia para Jóvenes (DG Juventud) 36; RUM, Plaza Mayor Home and Casa Emilio without a figure | FACT (1 source), provisional | Ayuntamiento de Murcia, Informajoven, *Alojamiento para estudiantes* ([informajoven.org](https://www.informajoven.org/info/educacion/B_18_11.asp)); page update date not shown. Retrieved 2026-10. |
+| Student residences, Cartagena | Residencia Alberto Colao, 165 plazas | FACT (1 source), provisional | Same page. Retrieved 2026-10. |
+
+The Hermanas Oblatas figure conflicts: 82 plazas on the Informajoven page, 165 on a
+private residence directory seen in a search result (snippet only, not used). The
+stated-plazas sum for the municipality is **794** (ESTIMATE: sum of the seven figures;
+a floor, three residences have no figure).
+
+### 7.3 B2B pool per radius
+
+| Radius | Tourist dwellings (INE, May-2026) | Plazas in tourist dwellings | Hotels (INE EOH) | Student residence plazas |
+| --- | --- | --- | --- | --- |
+| R1 — urban core | Municipal 777, core share **NOT FOUND** (the INE section-level download was not read this pass) | NOT FOUND | NOT FOUND at core level (municipal 32) | NOT FOUND at core level; 4 of the 7 figured residences have core addresses (C/ Rambla, C/ Princesa, Plaza de la Universidad, C/ San Nicolás) |
+| R2 — municipality + inner belt | 777 + 80 = **857** | 3,690 + 430 = **4,120** | 32 (Murcia only; belt NOT FOUND) | ≥794 (Murcia only) |
+| R3 — outer ring | **9,910** | **48,177** | Cartagena 25, Torrevieja 17; others NOT FOUND | Cartagena 165 |
+
+ESTIMATE: sums of the FACT (1 source), provisional rows of §7.1–7.2. 74% of R3's tourist
+dwellings (7,284 of 9,910) are in Torrevieja, Orihuela and Cartagena.
+
+Reading (ANALYSIS):
+
+- The tourist-dwelling pool sits on the coast, not in the operating area. R2 holds
+  ≈860 dwellings, R3 ≈9,900 — about 11.6× more — at 30–79 km (§1.7). The model's B2B line
+  for Murcia is therefore a capital-city line (hotels, residences, the ≈780 Murcia
+  dwellings) unless the operator runs batched coastal days.
+- The coastal pool is seasonal: Cartagena's hotel plazas fall from 6,186 (Aug) to 3,012
+  (Jan). That makes the off-season (Oct–May) the plausible window for deep-cleaning
+  contracts with coastal properties, the reverse of the household curve in §6.2. This
+  is a HYPOTHESIS, untested.
+- No B2B € spend figure exists for Murcia; `market-dossier.md` §6.4 already records the
+  national gap. Nothing here changes it.
+
+### 7.4 Local acquisition channels
+
+Each row says what the channel is and why it is plausible. Whether any of them produces
+customers is **HYPOTHESIS** for every row: none has been tested.
+
+| Channel | What it is | Why it is plausible | Evidence status |
+| --- | --- | --- | --- |
+| Onda Regional de Murcia / La 7 (RTRM) | Regional public radio and TV; sells advertising, with a 2025 Onda Regional tariff PDF and a contact for advertisers on its tariffs page | Region-wide reach, older audience overlaps the 45–64 target | Existence of an advertising offer FACT (1 source), provisional — [rtrm.es](https://www.rtrm.es/servlet/rtrm.servlets.ServletLink2?METHOD=tarifas.jsp&sit=c%2C4), retrieved 2026-10; tariff figures NOT FOUND (PDF not read) |
+| La Verdad (Murcia) | Largest daily of the region (Vocento group), print and web | Local reach; display and advertorial formats | Advertising terms NOT FOUND on a primary page; a search summary quoted a CPM and a minimum spend without a readable source, not used |
+| murcia.com | Regional news / business portal publishing paid company pieces | A national franchise (EcoCleans) used it for a 2022 advertorial (§4.2), so the format exists and is used by the category | FACT (1 source), provisional — the advertorial itself ([murcia.com](https://www.murcia.com/empresas/noticias/2022/12/14-limpieza-a-fondo-con-la-empresa-ecocleans.asp)), retrieved 2026-10; prices NOT FOUND |
+| Neighbourhood associations | The Ayuntamiento's register of citizen entities (Nov-2025 edition) lists 441 entities, of which 24 have "vecin-" in the name (ESTIMATE: name match on the PDF text), among them San Lorenzo-Universidad, Santa María de Gracia, El Carmen, El Palmar (Los Rosales), Espinardo, Beniaján, Algezares and Corvera; the Federación de Asociaciones Vecinales de Murcia (created May 2005) states 25 affiliated associations and ≈15 collaborating entities | Talks, stands at barrio events and association newsletters reach residents by barrio, including the premium cluster of §2.2 (Santa María de Gracia, El Carmen, San Lorenzo) | Register: FACT (1 source), provisional — [transparencia.mimurcia.murcia.es](https://transparencia.mimurcia.murcia.es/sites/default/files/2025-11/Registro%20de%20Entidades%20Ciudadanas_0.pdf), retrieved 2026-10. Federation counts: FACT (1 source), provisional — self-reported, [favmurcia.es](https://favmurcia.es/quienes-somos/), retrieved 2026-10 |
+| Large local community groups (Facebook, WhatsApp, Telegram buy-sell and barrio groups) | Groups by town or pedanía | Word of mouth is the dominant channel for at-home services (`market-dossier.md` §6.4); the pedanía structure (59 units, §1.2) maps onto per-pedanía groups | Group names and member counts NOT FOUND (behind login, not read) |
+| Marketplaces | Cronoshare and Habitissimo run Murcia categories for mattress and upholstery cleaning (§4.1) | Live paid-lead channel already used by local providers (Hidrokleen, Limpiezas Hermanas, §4.2) | Category existence FACT (1 source), provisional (§4.1 sources); lead prices NOT FOUND |
+
+Reading (ANALYSIS): the cheapest channels to test first are the free or low-cost ones
+that reach the premium cluster directly (neighbourhood associations in the old city,
+community groups); paid regional media reach the whole region, most of which is outside
+R2. This is an ordering for testing, not a channel decision.
+
 ## 8. Local operating costs, access rules and financing landscape
 
 ## 9. Headline parameter set, Granada deltas and gaps
diff --git a/specs/murcia-market/feature.md b/specs/murcia-market/feature.md
index 51fd7f0..c803a88 100644
--- a/specs/murcia-market/feature.md
+++ b/specs/murcia-market/feature.md
@@ -159,7 +159,7 @@ and no local keyword or CPC data.
   with Murcia range, median where n≥3, and the Madrid/Valencia cluster and Granada
   figure beside it; density and white-space reading labelled ANALYSIS. _Verify:_ `grep -c "^| \*\*" business/research/murcia-market.md`.
   Accept: Scenario: sweep depth — WHEN the provider table is counted THEN it has ≥15 rows or an exhaustion statement listing the searches run; every price cell is a figure read on the provider's page with URL, or NOT FOUND.
-- [ ] **T5 — Demand signals, seasonality and acquisition** (structural). Fill §6 and
+- [x] **T5 — Demand signals, seasonality and acquisition** (structural). Fill §6 and
   §7. §6: Google Trends regional index for the core terms, Región de Murcia against
   Andalucía, Comunitat Valenciana, Madrid (method of `trends-keywords-addendum.md`);
   any Murcia-geo keyword volume or CPC obtainable from free tools, else NOT FOUND with
@@ -241,6 +241,7 @@ and no local keyword or CPC data.
 | T9 | structural — `grep -c "provisional" business/research/murcia-market.md`; `grep -c "CONFLICTING" business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; pre-change counts `15` exit 0, `1` exit 0 (T3 uncommitted by design) | n/a (structural) | `18` exit 0; `3` exit 0 | Triangulation skipped: text fix pass; F-009 re-read INE 53689 confirms €48,806 / €18,142 (no cell changed); F-011 national dogs per inhabitant ≈0.20 → ≈0.19 (denominator 45,678,948 AEAT → 48,320,520 INE 56940, 1-Jul-2023); zone ratios recomputed (1.71, 1.37, 1.28, 1.17, 1.01, 0.90, 1.49, 1.69); TODO/TBD/lorem grep empty (exit 1); protected-files diff stat empty | none |
 | T10 | structural — `grep -n "FACT (1 source" business/research/murcia-market.md \| grep -v -c "FACT (1 source), provisional"` | docs | n/a — docs repo, no package.json / tsc / eslint; pre-change count `16` exit 0 (T3/T9 uncommitted by design) | n/a (structural) | `0` exit 1 (grep -c on zero matches) | Triangulation skipped: text-only label sweep; numeric-token diff before/after: only `56940` → `56934` (×2), plus the `1` of each new "FACT (1 source)" label and `ECP320` (series code); TODO/TBD/lorem grep empty (exit 1); protected-files diff stat empty | none |
 | T4 | structural — `grep -c "^\| \*\*" business/research/murcia-market.md` (Scenario: sweep depth) | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `14` exit 0 (bold rows of §1–§3) | `34` exit 0 (14 + 20 provider rows); `git diff --numstat HEAD`: `158	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; label grep `0` exit 1; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `33`; protected-files diff stat empty | none |
+| T5 | structural — `grep -c "^### [67]\." business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `0` exit 1 | `8` exit 0; `git diff --numstat HEAD`: `239	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; label grep `0` exit 1; no FACT label ends a line; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `46`; protected-files diff stat empty | none |
 
 ## Briefing
 
```
