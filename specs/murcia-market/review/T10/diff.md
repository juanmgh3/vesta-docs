class: medium

## git status --short -uall
```
 M business/research/murcia-market.md
 M specs/murcia-market/feature.md
 M specs/murcia-market/review/findings.md
?? .torq-flow/active
?? specs/murcia-market/review/T10/brief.md
?? specs/murcia-market/review/T10/report.md
?? specs/murcia-market/review/T3/brief.md
?? specs/murcia-market/review/T3/diff.md
?? specs/murcia-market/review/T3/report.md
?? specs/murcia-market/review/T3/verdict.md
?? specs/murcia-market/review/T9/brief.md
?? specs/murcia-market/review/T9/diff.md
?? specs/murcia-market/review/T9/report.md
?? specs/murcia-market/review/T9/verdict.md
```

## git diff HEAD
```diff
diff --git a/business/research/murcia-market.md b/business/research/murcia-market.md
index 405fb0b..a06b058 100644
--- a/business/research/murcia-market.md
+++ b/business/research/murcia-market.md
@@ -33,7 +33,7 @@
 | --- | --- | --- | --- |
 | Population, 1-Jan-2025 (INE official figure, Padrón revision) | **479,405** | FACT | INE table 2883, read through the INE JSON API ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=2883), [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2883?nult=1)); same figure republished by CREM ([econet.carm.es](https://econet.carm.es/inicio/-/crem/sicrem/PU_datosBasicos/sec164.html)). Retrieved 2026-10. |
 | Population, 1-Jan-2025 (municipal Padrón exploitation) | 479,491 | FACT (2nd source) | Ayuntamiento de Murcia press release, 26-Jan-2026 ([web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000)). Retrieved 2026-10. |
-| Population, 1-Jan-2024 (municipal Padrón, trend check) | 474,834 | FACT | Ayuntamiento de Murcia / CARM, *Características sociodemográficas de las personas mayores del municipio de Murcia, año 2024*, p. 2 ([cendocps.carm.es](https://cendocps.carm.es/documentacion/2025_Sociodemografia_mayores_Murcia.pdf)). Retrieved 2026-10. |
+| Population, 1-Jan-2024 (municipal Padrón, trend check) | 474,834 | FACT (1 source), provisional | Ayuntamiento de Murcia / CARM, *Características sociodemográficas de las personas mayores del municipio de Murcia, año 2024*, p. 2 ([cendocps.carm.es](https://cendocps.carm.es/documentacion/2025_Sociodemografia_mayores_Murcia.pdf)). Retrieved 2026-10. |
 | **Verdict** | **≈479,400–479,500** | **Two publications of one register (agree within 86 people, 0.02%)** | — |
 
 Both rows come from the same register (the Padrón): the INE figure is the official
@@ -48,7 +48,7 @@ the INE figure and is not counted as a third source. Murcia is ≈2.05× Granada
 | --- | --- | --- | --- |
 | Urban core ("centro urbano", 24 barrios) | **138,997** (28.99%) | FACT (1 source), provisional | Ayuntamiento press release ([web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000)). Retrieved 2026-10. |
 | Pedanías (59) | **340,494** (71.01%) | FACT (1 source), provisional | Same release ([web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000)). Retrieved 2026-10. |
-| Count of units: 24 barrios, 59 pedanías | — | FACT (1 source) | Murcia Plaza, 26-Jan-2026, reading the same Padrón ([murciaplaza.com](https://murciaplaza.com/murciaplaza/murcia/murcia-roza-los-480000-habitantes-impulsada-por-el-crecimiento-de-las-pedanias-frente-al-estancamiento-del-centro)). Retrieved 2026-10. |
+| Count of units: 24 barrios, 59 pedanías | — | FACT (1 source), provisional | Murcia Plaza, 26-Jan-2026, reading the same Padrón ([murciaplaza.com](https://murciaplaza.com/murciaplaza/murcia/murcia-roza-los-480000-habitantes-impulsada-por-el-crecimiento-de-las-pedanias-frente-al-estancamiento-del-centro)). Retrieved 2026-10. |
 
 The feature brief said "~54 pedanías"; the Padrón publication reads 59. The 59 count is
 used here; the difference is a matter of how the Ayuntamiento splits pedanías, not a
@@ -61,12 +61,12 @@ Largest pedanías and core barrios, 1-Jan-2025:
 | El Palmar | pedanía | 25,339 | FACT (2 publications) | [web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000); [murciaplaza.com](https://murciaplaza.com/murciaplaza/murcia/murcia-roza-los-480000-habitantes-impulsada-por-el-crecimiento-de-las-pedanias-frente-al-estancamiento-del-centro). Retrieved 2026-10. |
 | Puente Tocinos | pedanía | 16,976 | FACT (2 publications) | same two. Retrieved 2026-10. |
 | Cabezo de Torres | pedanía | 14,350 | FACT (2 publications) | same two. Retrieved 2026-10. |
-| La Alberca | pedanía | 13,263 | FACT (1 source) | [web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000). Retrieved 2026-10. |
-| Espinardo | pedanía | 12,792 | FACT (1 source) | same. Retrieved 2026-10. |
-| Sangonera la Verde | pedanía | 12,726 | FACT (1 source) | same. Retrieved 2026-10. |
-| El Carmen | core barrio | 20,599 | FACT (1 source) | [murciaplaza.com](https://murciaplaza.com/murciaplaza/murcia/murcia-roza-los-480000-habitantes-impulsada-por-el-crecimiento-de-las-pedanias-frente-al-estancamiento-del-centro). Retrieved 2026-10. |
-| Vistalegre (Vista Alegre) | core barrio | 13,546 | FACT (1 source) | same. Retrieved 2026-10. |
-| Infante Juan Manuel | core barrio | 12,151 | FACT (1 source) | same. Retrieved 2026-10. |
+| La Alberca | pedanía | 13,263 | FACT (1 source), provisional | [web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000). Retrieved 2026-10. |
+| Espinardo | pedanía | 12,792 | FACT (1 source), provisional | same. Retrieved 2026-10. |
+| Sangonera la Verde | pedanía | 12,726 | FACT (1 source), provisional | same. Retrieved 2026-10. |
+| El Carmen | core barrio | 20,599 | FACT (1 source), provisional | [murciaplaza.com](https://murciaplaza.com/murciaplaza/murcia/murcia-roza-los-480000-habitantes-impulsada-por-el-crecimiento-de-las-pedanias-frente-al-estancamiento-del-centro). Retrieved 2026-10. |
+| Vistalegre (Vista Alegre) | core barrio | 13,546 | FACT (1 source), provisional | same. Retrieved 2026-10. |
+| Infante Juan Manuel | core barrio | 12,151 | FACT (1 source), provisional | same. Retrieved 2026-10. |
 
 Reading (ANALYSIS): the six largest pedanías hold 95,446 people, 28% of the pedanía
 population; the other 53 average ≈4,600 each. The municipality is therefore not a
@@ -79,17 +79,17 @@ Plaza, same article).
 | Figure | Value | Label | Source |
 | --- | --- | --- | --- |
 | Average household size, Murcia municipality, 2023 | **2.8** | FACT (1 source), provisional | INE ADRH, *Indicadores demográficos*, Murcia province table 31123, series "Murcia. Tamaño medio del hogar" ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123), [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31123?nult=2)); 2022 value also 2.8. Retrieved 2026-10. |
-| Share of one-person households, municipality, 2023 | 25.2% | FACT (1 source) | Same table ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123)). Retrieved 2026-10. |
-| Average household size, Región de Murcia, 1-Jul-2026 | 2.7 (national 2.49) | FACT — **different geography (region), consistency check only** | INE Estadística Continua de Población, table 60134 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=60134)). Retrieved 2026-10. |
-| Households, Región de Murcia, 1-Jul-2026 | 595,361 | FACT — region | INE ECP, table 60133 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=60133)). Retrieved 2026-10. |
+| Share of one-person households, municipality, 2023 | 25.2% | FACT (1 source), provisional | Same table ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123)). Retrieved 2026-10. |
+| Average household size, Región de Murcia, 1-Jul-2026 | 2.7 (national 2.49) | FACT (1 source), provisional — **different geography (region), consistency check only** | INE Estadística Continua de Población, table 60134 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=60134)). Retrieved 2026-10. |
+| Households, Región de Murcia, 1-Jul-2026 | 595,361 | FACT (1 source), provisional — region | INE ECP, table 60133 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=60133)). Retrieved 2026-10. |
 | Households, Murcia municipality, direct count (Censo 2021 / CREM) | **NOT FOUND** | NOT FOUND | The CREM Censo 2021 pages answered with a bot-check redirect and were not read; INE's Censo 2021 municipal household tables are not exposed in the INE API (operation 463 publishes persons only). |
 | **Households, Murcia municipality (ESTIMATE)** | **≈171,200** (band ≈168,200–174,300) | ESTIMATE | 479,405 ÷ 2.8. The band is the rounding range of the published size (2.75–2.85), not a sampling interval. |
 
 This closes the Granada pass's borrowed-divisor hole: the divisor is Murcia-measured
 (2.8), not Madrid's 2.41. It is larger than Granada's borrowed 2.4, so Murcia has
 **fewer households per inhabitant**; using 2.4 here would overstate the pool by
-≈28,500 households (≈17%). The regional 2.7 is the highest in Spain (FACT (1 source),
-provisional: the regional ranking in INE ECP table 60134,
+≈28,500 households (≈17%). The regional 2.7 is the highest in Spain
+(FACT (1 source), provisional: the regional ranking in INE ECP table 60134,
 [ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=60134), retrieved 2026-10) and agrees in
 direction; it is a different geography and is not averaged with the municipal 2.8.
 
@@ -108,7 +108,7 @@ from the Ayuntamiento's core / pedanía split in §1.2; the two are not blended*
 | 08 | 12,986 | 2.7 | 27.0% | 42.1 |
 
 Source: INE ADRH table 31123 as above ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123);
-FACT, 1 source; retrieved 2026-10). Which barrios and pedanías each
+FACT (1 source), provisional; retrieved 2026-10). Which barrios and pedanías each
 district contains was not mapped this pass, so the table is not used to size R1; it
 shows that household size runs 2.6–2.8 inside the municipality.
 
@@ -118,8 +118,8 @@ shows that household size runs 2.6–2.8 inside the municipality.
 | --- | --- | --- | --- |
 | Age 45–64, Murcia municipality, Padrón 1-Jan-2024 | 141,136 of 474,834 = **29.7%** | FACT | Ayuntamiento / CARM age pyramid, p. 2: 45–49 40,139; 50–54 36,925; 55–59 35,046; 60–64 29,026 ([cendocps.carm.es](https://cendocps.carm.es/documentacion/2025_Sociodemografia_mayores_Murcia.pdf)). Retrieved 2026-10. |
 | Age 45–64, Murcia municipality, Censo 2021 | 131,478 of 459,778 = 28.6% | FACT (2nd source) | INE Censo 2021, republished by telencuestas: 45–49 37,897; 50–54 35,994; 55–59 31,544; 60–64 26,043 ([telencuestas.com](https://telencuestas.com/censos-de-poblacion/espana/2021/region-de-murcia/murcia/murcia)). Retrieved 2026-10. |
-| Age 65+, municipality, 2023 | 16.7% | FACT (1 source) | INE ADRH table 31123 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123)). Retrieved 2026-10. |
-| Mean age, municipality, 2023 | 41.3 | FACT (1 source) | INE ADRH table 31123 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123)). Retrieved 2026-10. |
+| Age 65+, municipality, 2023 | 16.7% | FACT (1 source), provisional | INE ADRH table 31123 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123)). Retrieved 2026-10. |
+| Mean age, municipality, 2023 | 41.3 | FACT (1 source), provisional | INE ADRH table 31123 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123)). Retrieved 2026-10. |
 | **Verdict** | **≈29–30% (use 29.7%)** | **Murcia-measured, two sources consistent (rise 2021→2024 matches the ageing of the 40–44 cohort)** | — |
 
 The share is measured for Murcia; the borrowed 29% of the Granada pass is not used.
@@ -228,8 +228,302 @@ above, with the drive times understated by free-flow routing):
 
 ## 2. Income and premium zones
 
+### 2.1 Murcia purchasing power vs Granada / Valencia / Madrid / national
+
+Same table as `granada-market.md` §6, extended with the per-person figure. Every INE
+value below was read directly from the INE ADRH tables through the INE JSON API, not
+from a press citation: table 31115 (Murcia province, municipalities and sections,
+[ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31115),
+[API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31115?nult=1)), 31025
+(Granada province, [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31025?nult=1)),
+31250 (Valencia province, [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31250?nult=1))
+and 53689 (national, CCAA and provinces,
+[API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/53689?nult=1)). Latest year
+published: 2023 (ADRH 2023, released 21-Oct-2025,
+[ine.es](https://www.ine.es/dyngs/Prensa/ADRH2023.htm)). Retrieved 2026-10.
+
+| Metric (INE ADRH 2023) | Murcia (municipality) | Granada (municipality) | Valencia (municipality) | Madrid (Comunidad, region) | National |
+| --- | --- | --- | --- | --- | --- |
+| Net income per household | **€38,682** | €36,821 | €40,058 | €48,806 | €38,326 |
+| Net income per person | **€13,906** | €16,024 | €16,121 | €18,142 | €15,036 |
+| Label | FACT (1 source), provisional — INE table read directly; the AEAT cross-check below is a different metric and supports only the per-person ordering, not the per-household one | FACT (1 source), provisional — INE table read directly | FACT (1 source), provisional — INE table read directly | **CONFLICTING** — INE table re-read at source confirms both cells; conflicts with `market-dossier.md` §5.3 (€43,037 per household), see note | FACT (1 source), provisional — INE table read directly; the INE press release is a republication by the same body, not a second source (§1.1 rule) |
+
+Region of Murcia, for reference only (different geography, not blended): €34,951 per
+household, €12,446 per person (INE table 53689, retrieved 2026-10).
+
+Independent second source, **different metric** (tax-declarant gross income, not
+comparable in level with ADRH; shown for ordering only):
+
+| AEAT IRPF 2023, gross income per declarant | Murcia | Granada | València | Madrid (Comunidad) | Common-territory mean |
+| --- | --- | --- | --- | --- | --- |
+| Renta bruta media | €30,979 | €32,694 | €34,355 | €40,801 | €31,333 |
+| Label | FACT (1 source), provisional | FACT (1 source), provisional | FACT (1 source), provisional | FACT (1 source), provisional | FACT (1 source), provisional |
+
+Scope flag: the AEAT municipal IRPF statistic covers the common tax territory only
+(it excludes País Vasco and Navarra, which run their own income tax), so its
+common-territory mean is not Spain and is not the same geography as the ADRH National
+column above. The two are not blended.
+
+Source: Agencia Tributaria, *Estadística de los declarantes del IRPF por municipios
+2023*, ranking table ([sede.agenciatributaria.gob.es](https://sede.agenciatributaria.gob.es/AEAT/Contenidos_Comunes/La_Agencia_Tributaria/Estadisticas/Publicaciones/sites/irpfmunicipios/2023/jrubikf6b1df8fe9d9e1b349886f03cf541e3fd2e65dd05.html)).
+Murcia ranks 518th in the common territory and 2nd in the region, behind Molina de Segura
+(€32,691). CREM republishes the same AEAT figure (€30,979,
+[econet.carm.es](https://econet.carm.es/inicio/-/crem/sicrem/PM2071/pdf/sec2.pdf));
+under the rule in §1.1 that is not a third source. Retrieved 2026-10.
+
+Notes:
+
+- **Madrid conflict.** `market-dossier.md` §5.3 carries €43,037 per household for the
+  Comunidad de Madrid. INE table 53689 was re-opened at its source (INE JSON API,
+  [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/53689?nult=2); retrieved
+  2026-10): row "Madrid, Comunidad de. Dato base. Renta neta media por hogar"
+  (series ADRH9974348), year 2023, reads **€48,806**; row "… Renta neta media por
+  persona" (ADRH9974349), year 2023, reads **€18,142**. Both cells are kept as read.
+  The same rows give €45,726 per household for 2022, so €43,037 matches neither of
+  the two latest years. The national row (€38,326) and Valencia (€40,058) match
+  `market-dossier.md` exactly, so the difference is specific to the Madrid row. Labelled
+  CONFLICTING until the §5.3 figure is traced; `market-dossier.md` is not edited by
+  this feature. Flagged for §9.
+- **Granada.** `granada-market.md` §6 carries €36,821 as "FACT (1 source), provisional"
+  from a secondary citation. The INE table read here returns the same €36,821, so the
+  figure is now read at the primary source. That file is not edited by this feature.
+
+Reading (ANALYSIS):
+
+- The two income measures point in **opposite directions** for Murcia, and the reason
+  is household size (§1.3). Per household, Murcia (€38,682) sits ≈1% **above** the
+  national mean and ≈5% above Granada. Per person, it sits ≈7.5% **below** the national
+  mean, ≈13% below Granada (−13.2%) and ≈14% below Valencia (−13.7%). Murcia households are larger (2.8 vs ≈2.5
+  nationally), so more people share a similar household income.
+- The independent AEAT series agrees with the per-person reading, not the per-household
+  one: Murcia €30,979 vs Granada €32,694 vs common-territory mean €31,333. Both sources therefore
+  place Murcia **below Granada and below each source's own wider mean** (ADRH national
+  mean per person; AEAT common-territory mean) in individual purchasing power.
+- For a discretionary household service, the per-person figure is the safer affluence
+  signal; the per-household figure flatters Murcia through household size. The
+  directional expectation that Murcia prices sit **at or below Granada** is supported by
+  two independent sources; it is a reading for the model re-run, not a price decision.
+
+### 2.2 Income by census section — where the premium zones are
+
+Method (follows `market-dossier.md` §7, and keeps its metric caveat: every figure in this
+subsection is **INE ADRH 2023 net income**, per person or per household as labelled;
+none is an AEAT per-declarant figure, so all rows are comparable with each other):
+
+1. INE ADRH 2023 publishes net income for each of Murcia's 387 census sections (table
+   31115 above) and population and household size per section (table 31123,
+   [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31123?nult=1)). Retrieved
+   2026-10.
+2. Census sections carry codes, not names. Each section's geometry was read from INE's
+   own section cartography (OGC API Features, collection `Secciones_2023`,
+   [ine.es/geoserver](https://www.ine.es/geoserver/ogc/features/v1/collections/WMS_INE_SECCIONES_G01:Secciones_2023/items?f=application/json&filter-lang=cql-text&filter=CUMUN%3D%2730030%27%20AND%20TIPO%3D%27SECCIONADO%27&limit=1000);
+   retrieved 2026-10).
+3. Each candidate zone was geocoded with Nominatim / OpenStreetMap
+   ([nominatim.openstreetmap.org](https://nominatim.openstreetmap.org)); the section
+   containing that point and every section intersecting a ≈300 m box around it were
+   taken. Zone income is the population-weighted mean of those sections (per person) or
+   the household-weighted mean (per household; households = population ÷ section
+   household size). Section names in the ranking were obtained the other way round, by
+   reverse-geocoding each section's centroid.
+
+Labels: section income, population and household size are
+**FACT (1 source), provisional** — INE ADRH, read directly. The zone a section is assigned to is **ESTIMATE** (geocoding; a zone
+has no official boundary, and a ≈300 m box is a convention, not a neighbourhood
+limit). Zone averages are **ESTIMATE** (weighted means of FACT rows).
+
+Municipal reference: €13,906 per person, €38,682 per household (§2.1).
+
+Verdict criterion (one rule, applied to every zone): a zone is **Premium** when its
+population-weighted net income per person is ≥1.5× the per-person mean of its own
+municipality — the same cut-off that sizes the high-income pool below (Murcia
+≥€20,859; Molina de Segura, mean €13,766, ≥€20,649). Every other zone is **Below the
+premium cut-off**, with its ratio shown. Sections inside a zone that clear the cut-off
+on their own are named, but they do not change the zone's verdict.
+
+Candidate zones from the brief, tested:
+
+| Zone | Section at the geocoded point (per person / per household) | ≈300 m around the point: sections, population | Per person, weighted (range) | Per household, weighted | Verdict |
+| --- | --- | --- | --- | --- | --- |
+| **Centro** (Plaza de Santo Domingo: Catedral, San Lorenzo, San Miguel, Santa Catalina, San Bartolomé) | 02020: €27,096 / €69,127 | 19 sections, 18,306 people | **€23,808** (€14,781–€33,082) | **€61,141** | **Premium** (1.71×) — the richest cluster in the municipality |
+| **Vistalegre** (Vista Alegre) | 02003: €17,472 / €46,618 | 14 sections, 14,304 people | **€19,079** (€12,920–€28,078) | **€50,832** | Below the premium cut-off (1.37×); its Avenida de Europa section clears it on its own (02062: €28,078 / €83,936), the rest is mixed |
+| **La Flota** | 02055: €18,535 / €51,912 | 10 sections, 12,261 people | **€17,806** (€12,041–€22,233) | **€49,294** | Below the premium cut-off (1.28×); its highest section (€22,233) clears it on its own |
+| **Santa María de Gracia** | 01007: €17,684 / €47,198 | 19 sections, 18,518 people | **€16,316** (€9,821–€23,704) | **€42,866** | Below the premium cut-off (1.17×), wide spread; its southern-edge sections clear it on their own (01022 €25,934, 01018 €23,704) and border the centro cluster |
+| **Juan Carlos I** | 01040: €13,757 / €35,227 and 04002: €19,650 / €56,436 (the point sits on a section boundary) | 8 sections, 9,162 people | €14,002 (€7,656–€19,650) | €37,403 | **Below the premium cut-off (1.01×).** The geocoder places "Avenida Juan Carlos I" at its northern end (El Puntal side); there the area is at the municipal mean. The avenue is long and its southern end (section 01016, €21,580) is above it. The zone the brief means has no published boundary: NOT FOUND as a defined zone |
+| **Altorreal** (Molina de Segura) | 01050: €20,906 / €68,258 | 2 sections, 3,123 people | **€20,567** (€20,195–€20,906) | **€66,663** | Below the premium cut-off, at its edge (1.49× Molina's mean, €13,766); section 01050 clears it on its own (€20,906 ≥ €20,649); small, large households (3.2) |
+| **La Alcayna** (Molina de Segura) | 01035: €22,431 / €71,601 | 2 sections, 2,717 people | **€23,255** (€22,431–€25,083) | **€72,553** | **Premium** (1.69× Molina's mean), small; the highest per-household values in the belt |
+| **Montepinar** (El Esparragal, Murcia) | 04062: €10,919 / €30,738 | 3 sections, 5,283 people | €12,468 (€10,919–€16,365) | €36,742 | **Below the premium cut-off (0.90×).** The point's own section is below the municipal mean; the adjacent 04075 (€16,365 / €54,039, household size 3.3) may be the development itself, but the boundary was not confirmed |
+
+The ten highest-income sections of the municipality (per person), named by
+reverse geocoding of the section centroid (name = ESTIMATE; income
+FACT (1 source), provisional — INE ADRH 2023):
+
+| Section | Area (OSM reverse geocode) | Per person | Per household | Population |
+| --- | --- | --- | --- | --- |
+| 02011 | San Miguel — C/ Jaime I el Conquistador | €33,082 | €85,753 | 1,342 |
+| 02019 | San Miguel — C/ Manuel Massotti Littel | €29,603 | €78,232 | 1,039 |
+| 01032 | Santa Catalina — C/ Marquesa | €28,989 | €77,644 | 703 |
+| 02012 | La Fama — C/ Escritor Antonio Martínez Endique | €28,193 | €74,404 | 610 |
+| 02062 | Vista Alegre — Avenida de Europa | €28,078 | €83,936 | 855 |
+| 01031 | Santa Catalina — C/ Vinader | €27,263 | €64,609 | 816 |
+| 01024 | San Miguel — C/ Jerónimo de Roda | €27,238 | €67,628 | 652 |
+| 02020 | San Lorenzo — C/ Licenciado Cascales | €27,096 | €69,127 | 1,259 |
+| 02013 | La Fama — C/ Catedrático Eugenio Úbeda | €26,494 | €67,274 | 785 |
+| 01022 | San Miguel — C/ Entrejardines | €25,934 | €65,350 | 1,103 |
+
+Two high-income sections outside the brief's candidate list also appear in the top 25:
+04051 (Churra, "Ladera – Glorieta", €25,372 / €76,282, 924 people) and 05022 (La
+Alberca, Senda Ismael, €22,229 / €70,232, 805 people). They are single sections, not
+zones, and are recorded here so the zone list is not read as exhaustive.
+
+Size of the high-income pool (ESTIMATE): Murcia sections with net income per person
+≥1.5× the municipal mean (≥€20,859) are **34 of 387**, holding **32,488 people in
+≈12,200 households** (population ÷ section household size); 29 of the 34 are in census
+districts 01 and 02, the old city and its first ring. In Molina de Segura the same
+threshold (≥€20,649) gives 4 of 56 sections, **4,872 people, ≈1,560 households**, all
+in census district 01. The 1.5× threshold is a convention chosen here, not an INE
+definition.
+
+Geography (ANALYSIS, built on the rows above):
+
+- Murcia's high-income geography is **one compact cluster**: centro, Vistalegre, La
+  Flota and the southern edge of Santa María de Gracia lie within ≈1.5 km straight line
+  of each other (geocoded points, ESTIMATE), all inside R1 (§1.7). Only centro clears
+  the premium cut-off as a zone; the other three hold sections that clear it on their
+  own. It is closer to the
+  Valencia pattern (one compact zone) than the Madrid one (two or three clusters) in
+  `market-dossier.md` §7.
+- The belt's high-income pockets (La Alcayna, premium by the criterion; Altorreal, at
+  1.49× just below it) are small and lie north of the centre inside R2: Altorreal 15.2 km / 17 free-flow minutes (§1.6), La Alcayna ≈2 km
+  further north (geocoded points; not routed this pass). They are worth a batched day,
+  not a daily base.
+- Two brief candidates did not hold up at the geocoded point (Juan Carlos I,
+  Montepinar). They are not dropped; their boundary is undefined and the reading may
+  change when it is.
+
 ## 3. Target segment sizing per radius
 
+Every product in this section is an **ESTIMATE**: a rate times a denominator. The rate
+keeps its own label; the denominators are the §1.7 radii (R1 urban core 138,997 people /
+≈49,600 households; R2 municipality + inner belt 704,814 / ≈250,700; R3 outer ring
+666,428 / ≈248,500). R1 is a subset of R2; R3 sits on top of R2.
+
+### 3.1 Age 45–64 per radius
+
+Rates are measured per municipality, not borrowed. Source: INE, *Estadística del
+Padrón Continuo*, population by municipality and five-year age group at 1-Jan-2022 (the
+latest year that table publishes), tables 33854 Murcia
+([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/33854?nult=1)) and 33584
+Alicante ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/33584?nult=1));
+45–64 = the sum of the four groups 45–49 … 60–64. FACT (1 source), provisional per
+municipality; retrieved 2026-10.
+
+| Municipality | 45–64 share, 1-Jan-2022 |
+| --- | --- |
+| Murcia | 29.1% (§1.4 uses the newer 29.7%, Padrón 2024) |
+| Alcantarilla | 29.4% |
+| Molina de Segura | 29.6% |
+| Las Torres de Cotillas | 29.3% |
+| Santomera | 29.0% |
+| Beniel | 27.0% |
+| Alguazas | 27.2% |
+| Ceutí | 27.5% |
+| Lorquí | 27.9% |
+| Archena | 28.1% |
+| Orihuela | 30.3% |
+| Cartagena | 29.1% |
+| Torre-Pacheco | 27.2% |
+| San Javier | 28.5% |
+| San Pedro del Pinatar | 27.2% |
+| Los Alcázares | 28.6% |
+| Torrevieja | 29.8% |
+| Lorca | 27.5% |
+| Cieza | 29.2% |
+
+The Murcia 2022 value (29.1%) sits between the Censo 2021 (28.6%) and Padrón 2024
+(29.7%) readings of §1.4: three operations, one trend.
+
+| Radius | Rate | Denominator | 45–64 residents | Label |
+| --- | --- | --- | --- | --- |
+| R1 — urban core | 29.7% (municipal, Padrón 2024; **core-specific share NOT FOUND**, municipal proxy shown) | 138,997 | **≈41,300** | ESTIMATE |
+| R2 — municipality + inner belt | Murcia 29.7% × 479,405; each belt town its own 2022 share × its 2025 population | 704,814 | **≈207,600** (29.4% of R2) | ESTIMATE |
+| R3 — outer ring | each town its own 2022 share × its 2025 population | 666,428 | **≈192,600** (28.9% of R3) | ESTIMATE |
+
+### 3.2 Respiratory allergy and dust-mite sensitisation
+
+Search for a Murcia or Mediterranean-coast figure, in the order the brief set:
+
+| Figure | Value | Label | Source |
+| --- | --- | --- | --- |
+| Dust-mite sensitisation among allergic-respiratory patients, **Región de Murcia** (Alergológica 2015) | **NOT FOUND** | NOT FOUND | The Alergológica 2015 regional figures that are published (Baleares 88%, Canarias 85%, Galicia 74%, País Vasco 56%, Comunitat Valenciana 56%, Cataluña 55%) name no Murcia row (Salud a Diario, 4-Dec-2018, reporting the SEAIC release, [saludadiario.es](https://www.saludadiario.es/pacientes/la-alergia-a-los-acaros-aumenta-en-las-comunidades-autonomas-costeras/)). Retrieved 2026-10. |
+| Adults with any allergy, Región de Murcia | 23% | FACT (1 source), provisional — official statement, study not named | Servicio Murciano de Salud, director-general statement, 29-Oct-2013 ([murciasalud.es](https://www.murciasalud.es/-/un-23-por-ciento-de-los-murcianos-adultos-padecen-algun-tipo-de-alergia)). Retrieved 2026-10. |
+| Adults with any allergy, "Levante" survey zone | 23.8% (n=698) vs 21.6% national (n=4,949) | FACT (1 source), provisional — 2001 field work; the zone is defined only on the paper's map; whether it includes Región de Murcia was not confirmed | Gaig et al., *Prevalencia de alergia en la población adulta española*, Alergol Inmunol Clin 2004;19:68-74, table I ([revista.seaic.org](http://revista.seaic.org/abril2004/68.pdf)). Retrieved 2026-10. |
+| Self-reported dust-mite allergy, adults **45–64**, Spain | 3.2% (44 of 1,362) | FACT (1 source), provisional — 2001 field work | Same paper, table V. Retrieved 2026-10. |
+| Respiratory allergy prevalence, Spain | ~20% | FACT (per `market-dossier.md` §5.1) | SEPAR via ImMédico (2025), carried by reference |
+| Dust-mite sensitisation among asthma + rhinitis patients, Spain | up to 50% | FACT (per `market-dossier.md` §5.1) | Alergológica 2015, carried by reference |
+
+No Murcia-specific dust-mite rate exists in the sources found, so the national bands
+are carried, as the brief requires. The two regional "any allergy" figures (23%, 23.8%)
+sit near the national 21.6% of the same survey design; they do not justify a different
+respiratory rate for Murcia, and they are a different measure (any allergy, not
+respiratory), so they are not substituted. The Comunitat Valenciana 56% is a
+neighbouring region's figure and is not used for Murcia.
+
+| Radius | Respiratory allergy (~20% × population) | Of which dust-mite sensitised (up to 50% of those) | 45–64 with self-reported dust-mite allergy (3.2% × 45–64 residents, §3.1) |
+| --- | --- | --- | --- |
+| R1 | 138,997 × 20% ≈ **≈27,800** | ≤ **≈13,900** | 41,300 × 3.2% ≈ **≈1,300** |
+| R2 | 704,814 × 20% ≈ **≈141,000** | ≤ **≈70,500** | 207,600 × 3.2% ≈ **≈6,600** |
+| R3 | 666,428 × 20% ≈ **≈133,300** | ≤ **≈66,600** | 192,600 × 3.2% ≈ **≈6,200** |
+
+All ESTIMATE. Same caution as `market-dossier.md` §5.1: the 50% is sensitisation among
+already-allergic patients, an upper bound, not a share of the population. The right-hand
+column is the narrow, self-declared core of the 45–64 target; the 2001 survey date makes
+it a floor, not a current figure.
+
+### 3.3 Pet-owning households
+
+| Figure | Value | Label | Source |
+| --- | --- | --- | --- |
+| Identified companion animals, **Región de Murcia**, mid-2023 | 271,031 (236,899 dogs, 33,696 cats, 436 ferrets) | FACT (1 source), provisional | REIAC statistics, "censo a mediados de 2023" ([reiac.es](https://www.reiac.es/reiac-info-02.php?lang=ESP)). Retrieved 2026-10. |
+| Identified companion animals, Spain, same table | 10,474,251 (9,201,109 dogs) | FACT (1 source), provisional | Same page. Retrieved 2026-10. |
+| Households with ≥1 pet, Spain | 49% (ANFAAC) or 61% (IPMARK) | CONFLICTING (per `market-dossier.md` §5.2) | Carried by reference; ANFAAC anchor used |
+| Municipal registry count, Murcia | **NOT FOUND** | NOT FOUND | No published count of dogs or cats registered in the Murcia municipal registry was found. |
+
+The regional registry exists but counts **animals, not households**, and the page does
+not say whether records are active or cumulative; it cannot be turned into a share of
+households without a pets-per-owner figure, which was not found. As a cross-check only
+(ESTIMATE): registered dogs per inhabitant are ≈0.15 in the region (236,899 ÷ 1,571,933
+inhabitants, AEAT 2023 population column, §2.1 source) against ≈0.19 for Spain
+(9,201,109 ÷ 48,320,520, the Spain-wide population at 1-Jul-2023, INE *Estadística
+Continua de Población*, table 56934, series ECP320, row "Total Nacional. Todas las edades",
+[API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/56934?nult=10); retrieved
+2026-10). The AEAT population column is not used for the national figure because it
+covers the common tax territory only (§2.1 scope flag), while REIAC counts all of
+Spain. The same INE table gives 1,558,016 for the region at 1-Jul-2023, which also
+returns ≈0.15. The registry gives no sign that pet ownership in Murcia is
+above the national level; registration completeness differs by region, so it is not
+evidence that it is lower either. The ANFAAC national anchor is carried unchanged.
+
+| Radius | Households (§1.7) | × 49% (ANFAAC anchor) | Label |
+| --- | --- | --- | --- |
+| R1 | ≈49,600 | **≈24,300** | ESTIMATE |
+| R2 | ≈250,700 | **≈122,800** | ESTIMATE |
+| R3 | ≈248,500 | **≈121,800** | ESTIMATE (coastal rows overstate main-dwelling households, §1.6) |
+
+### 3.4 Summary per radius
+
+| Radius | Population | Households | 45–64 | Respiratory allergy | Dust-mite sensitised (upper bound) | Pet-owning households |
+| --- | --- | --- | --- | --- | --- | --- |
+| R1 | 138,997 | ≈49,600 | ≈41,300 | ≈27,800 | ≤≈13,900 | ≈24,300 |
+| R2 | 704,814 | ≈250,700 | ≈207,600 | ≈141,000 | ≤≈70,500 | ≈122,800 |
+| R3 | 666,428 | ≈248,500 | ≈192,600 | ≈133,300 | ≤≈66,600 | ≈121,800 |
+
+R1 population (138,997) is FACT (1 source), provisional (§1.2); R2 and R3 population are
+ESTIMATE (sums of rows, §1.7); every other cell is ESTIMATE. Derivations in §1.7 and
+§3.1–3.3. The
+segments overlap (one household can be 45–64, allergic and pet-owning) and are not
+summed. The high-income pool of §2.2 (≈12,200 households in Murcia, ≈1,560 in Molina)
+is a separate cut, not a segment of this table.
+
 ## 4. Competition in Murcia
 
 ## 5. Local price map
diff --git a/specs/murcia-market/feature.md b/specs/murcia-market/feature.md
index e11c336..83c32f4 100644
--- a/specs/murcia-market/feature.md
+++ b/specs/murcia-market/feature.md
@@ -39,6 +39,13 @@ and no local keyword or CPC data.
 - Primary statistical sources first: INE (Padrón, Censo 2021, ADRH) and CREM /
   Econet (Centro Regional de Estadística de Murcia). Newsroom citations of INE are a
   fallback, declared as a fallback.
+- Label wording is exact (added 2026-10-05 after two review stops): a FACT resting on
+  one source is always written "FACT (1 source), provisional"; a republication or
+  press release by the same body is not a second source; every FACT row and every
+  FACT stated in prose carries its URL and "Retrieved 2026-10"; the label is never
+  split across a line break and qualifiers go after it; a cross-check on a
+  different metric is named as such and never upgrades a label; a verdict word
+  (premium, dense, cheap) needs a stated criterion.
 - Incompatible geographic definitions are flagged, never blended or averaged.
 - National rates already graded in `market-dossier.md` (§5.1 allergy, §5.2 pets,
   §6.1–6.3 CPC/CVR, §9 admin costs) are reused by reference and re-researched only
@@ -94,7 +101,7 @@ and no local keyword or CPC data.
   mark under FLAG-RESEARCH D pointing to `murcia-market.md` §2. Additions only in
   `founder-inputs.md`. _Verify:_ `grep -c "provisional" business/research/murcia-market.md` and `grep -c "SUPERSEDED 2026-10-05" business/research/founder-inputs.md`.
   Accept: each of F-001 to F-006 is addressed at the lines the findings record names; no population, household, distance or percentage figure differs from the T2 text; `founder-inputs.md` diff has no deleted line.
-- [ ] **T3 — Income, premium zones and segment sizing** (structural). Fill §2 and §3.
+- [x] **T3 — Income, premium zones and segment sizing** (structural). Fill §2 and §3.
   §2: net income per household and per person, INE ADRH latest, for Murcia
   municipality with second source, set against Granada, Valencia city, Madrid region
   and national (same table as `granada-market.md` §6); income by district / census
@@ -107,6 +114,37 @@ and no local keyword or CPC data.
   Alergológica or SEAIC before falling back to national), pet-owning households
   (regional registry figure if one exists, else national ANFAAC anchor). _Verify:_ `grep -c "^### [23]\." business/research/murcia-market.md`.
   Accept: the income comparison table has all five geographies with labels; at least four zones are named with an income figure or NOT FOUND each; every segment product is labelled ESTIMATE with its rate and denominator shown.
+- [x] **T9 — Fix pass on T3 review findings** (structural). In `murcia-market.md`
+  §2–§3, at the lines the findings record names. (F-008) Relabel the Murcia income row
+  "FACT (1 source), provisional" and state that the AEAT cross-check supports only the
+  per-person ordering, not the per-household one. (F-009) Re-open the INE ADRH table at
+  its source for the Comunidad de Madrid net income per household and per person, 2023:
+  if the figure read differs from the cell, correct the cell and every gap computed
+  from it; if the source confirms €48,806, keep it, label the cell CONFLICTING against
+  `market-dossier.md` §5.3 (€43,037) and state which table, row and year was read; do
+  not edit `market-dossier.md`. (F-010) Apply the §1.1 republication rule to the
+  comparison rows: an INE press release is not a second source for an INE table; mark
+  National, Granada, Valencia and the AEAT row "FACT (1 source), provisional" unless a
+  second independent source is cited. (F-011) Recompute dogs per inhabitant with a
+  Spain-wide denominator from INE, cited, or flag the common-territory scope
+  explicitly; flag the same scope on the AEAT "National" column. (F-012) State one
+  criterion for zone verdicts (tie it to the file's 1.5× high-income cut-off) and apply
+  it to all eight zones; Vistalegre and La Flota must come out consistent with it.
+  (F-013) Correct the sentence on which cells of the ring summary are ESTIMATE.
+  (F-014) Correct the Valencia per-person gap to the computed figure. This is the only
+  task in this pass allowed new source reads, and only for F-009 and F-011. _Verify:_ `grep -c "provisional" business/research/murcia-market.md` and `grep -c "CONFLICTING" business/research/murcia-market.md`.
+  Accept: each of F-008 to F-014 is addressed at the lines the findings record names; no Murcia figure changes; any changed comparison figure is listed in the report with old value, new value and the source row read.
+- [x] **T10 — Label sweep of §1–§3** (structural). Text corrections only, no new
+  research, no figure changed. Whole-file sweep of `murcia-market.md`, not only the
+  lines the findings name: (F-015, F-016) every single-source FACT label, in tables,
+  captions and prose, reads exactly "FACT (1 source), provisional", with any qualifier
+  (source name, field-work year, "read directly") moved after it; the label is never
+  split across a line break, so a grep can prove it; a bare "FACT" in a caption that
+  covers single-source figures gets the full wording. (F-017) Name the AEAT mean
+  "common-territory mean" wherever it is compared, never "national". (F-018) Cite the
+  INE table the 1-Jul-2023 Spain population was actually read from (56934), keeping the
+  series code. _Verify:_ `grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"` (must print 0).
+  Accept: the verify command prints 0; F-015 to F-018 are addressed; a numeric-token diff of the file before and after shows no figure changed except the table id 56940 → 56934.
 - [ ] **T4 — Competition sweep and local price map** (structural). Fill §4 and §5 at
   Madrid/Valencia depth: at least 15 providers profiled, or every provider found plus
   an explicit statement that the field is exhausted and with which searches. Search
@@ -162,6 +200,7 @@ and no local keyword or CPC data.
 
 - `grep -c "^## [0-9]" business/research/murcia-market.md`
 - `grep -c "NOT FOUND" business/research/murcia-market.md`
+- `grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"`
 - `grep -c "https\?://" business/research/murcia-market.md`
 - `grep -n -i "TODO\|TBD\|lorem" business/research/murcia-market.md`
 - `git diff --stat HEAD -- business/research/granada-market.md business/research/economic-model.md business/bank business/reports`
@@ -175,6 +214,17 @@ and no local keyword or CPC data.
   figures labelled plain FACT). T2 not committed; run halted for the human.
 - 2026-10-05 human decision: add a fix task and continue. Recorded as T8, placed
   after T2 (the lint accepts only numeric task ids, so not "T2a").
+- 2026-10-05 T2 + T8 committed (d829447); F-001 to F-006 fixed, F-007 Minor open for T7.
+- 2026-10-05 stop at T3: reviewer raised open Critical F-008 (Murcia income row not
+  marked provisional, AEAT cross-check overstated). T3 not committed; run halted.
+- 2026-10-05 human decision: add fix task T9 and continue. Standing authorization
+  for the rest of this run: when an open Critical is about labelling or wording and
+  changes no figure, the orchestrator adds the fix task and continues without
+  stopping; a Critical that questions a figure or a source still stops the run.
+  The exact label wording was added to Constraints for T4–T7.
+- 2026-10-05 T9 reviewed: F-008 to F-014 fixed; new open Critical F-015 (labelling,
+  no figure in question). Under the standing authorization, fix task T10 added
+  (whole-file label sweep, proven by a grep now also in Checks); run continues.
 
 ## Evidence
 
@@ -183,6 +233,9 @@ and no local keyword or CPC data.
 | T1 | structural — `grep -c "^## " business/research/murcia-market.md`; `grep -c "Addendum 2026-10-05" business/research/founder-inputs.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `grep: business/research/murcia-market.md: No such file or directory` exit 2, addendum count `0` exit 1 | `10` exit 0; `4` exit 0; `git diff --numstat HEAD`: `15	0	business/research/founder-inputs.md` | Triangulation skipped: structural skeleton, no behaviour to triangulate; TODO/TBD/lorem grep empty (exit 1) | none |
 | T2 | structural — `grep -c "^### 1\." business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `0` exit 1 | `7` exit 0; `git diff --numstat HEAD`: `191	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `7` | none |
 | T8 | structural — `grep -c "provisional" business/research/murcia-market.md`; `grep -c "SUPERSEDED 2026-10-05" business/research/founder-inputs.md` | docs | n/a — docs repo, no package.json / tsc / eslint; pre-change counts `5` exit 0, `3` exit 0 | n/a (structural) | `12` exit 0; `5` exit 0; `git diff --numstat HEAD -- business/research/founder-inputs.md`: `3	0	business/research/founder-inputs.md` | Triangulation skipped: text-only fix pass; numeric-token diff before/after shows only added dates, table ids, URLs and § refs, plus the dropped R1 upper bound (`49,600–53,500` → `49,600`, `2.6` removed) per F-004; TODO/TBD/lorem grep empty (exit 1) | none |
+| T3 | structural — `grep -c "^### [23]\." business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `0` exit 1 | `6` exit 0; `git diff --numstat HEAD`: `265	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `11`; protected-files diff stat empty | none |
+| T9 | structural — `grep -c "provisional" business/research/murcia-market.md`; `grep -c "CONFLICTING" business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; pre-change counts `15` exit 0, `1` exit 0 (T3 uncommitted by design) | n/a (structural) | `18` exit 0; `3` exit 0 | Triangulation skipped: text fix pass; F-009 re-read INE 53689 confirms €48,806 / €18,142 (no cell changed); F-011 national dogs per inhabitant ≈0.20 → ≈0.19 (denominator 45,678,948 AEAT → 48,320,520 INE 56940, 1-Jul-2023); zone ratios recomputed (1.71, 1.37, 1.28, 1.17, 1.01, 0.90, 1.49, 1.69); TODO/TBD/lorem grep empty (exit 1); protected-files diff stat empty | none |
+| T10 | structural — `grep -n "FACT (1 source" business/research/murcia-market.md \| grep -v -c "FACT (1 source), provisional"` | docs | n/a — docs repo, no package.json / tsc / eslint; pre-change count `16` exit 0 (T3/T9 uncommitted by design) | n/a (structural) | `0` exit 1 (grep -c on zero matches) | Triangulation skipped: text-only label sweep; numeric-token diff before/after: only `56940` → `56934` (×2), plus the `1` of each new "FACT (1 source)" label and `ECP320` (series code); TODO/TBD/lorem grep empty (exit 1); protected-files diff stat empty | none |
 
 ## Briefing
 
```
