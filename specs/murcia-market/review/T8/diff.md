class: medium

## git status --short -uall
```
 M business/research/founder-inputs.md
 M business/research/murcia-market.md
 M specs/murcia-market/feature.md
 M specs/murcia-market/review/findings.md
?? .torq-flow/active
?? specs/murcia-market/review/T2/brief.md
?? specs/murcia-market/review/T2/diff.md
?? specs/murcia-market/review/T2/report.md
?? specs/murcia-market/review/T2/verdict.md
?? specs/murcia-market/review/T8/brief.md
?? specs/murcia-market/review/T8/report.md
```

## git diff HEAD
```diff
diff --git a/business/research/founder-inputs.md b/business/research/founder-inputs.md
index b74510d..a76fdf0 100644
--- a/business/research/founder-inputs.md
+++ b/business/research/founder-inputs.md
@@ -145,6 +145,7 @@ Conventions in force (from the brief):
   when to hire the first operator, when to delegate the operation.
 - **Launch window.** **UNDECIDED** — operationally ready (equipment-wise), but the
   actual launch is gated by the relocation decision (Block 4).
+  **SUPERSEDED 2026-10-05** → Addendum 2026-10-05.
 
 ---
 
@@ -167,6 +168,7 @@ Conventions in force (from the brief):
 - **B.** Web hosting / running cost for a static, backend-less site.
 - **C.** Autónomo monthly cuota quantification (tarifa plana vs. general quota).
 - **D.** Plausible operating zones per city (Madrid / Valencia).
+  **SUPERSEDED 2026-10-05** → zone research now runs for Murcia in `murcia-market.md` §2.
 - **E.** Chile → EUR exchange rate at report date.
 
 **TO-CONFIRM / validate:**
@@ -193,6 +195,7 @@ Conventions in force (from the brief):
 
 Stated by the founder on 2026-10-05. Supersedes Block 4 and consolidated UNDECIDED
 items 2 and 4; the superseded text above is kept as written.
+It also supersedes the Block 5 "Launch window" item and FLAG-RESEARCH D.
 
 - **Operating base.** **Murcia capital.** CAPTURED.
 - **Service area.** "Murcia and surroundings". CAPTURED. The service radii are not
diff --git a/business/research/murcia-market.md b/business/research/murcia-market.md
index 20cb6cf..405fb0b 100644
--- a/business/research/murcia-market.md
+++ b/business/research/murcia-market.md
@@ -27,6 +27,205 @@
 
 ## 1. Geography, population, households, service radii
 
+### 1.1 Murcia municipality — population
+
+| Figure | Value | Label | Source |
+| --- | --- | --- | --- |
+| Population, 1-Jan-2025 (INE official figure, Padrón revision) | **479,405** | FACT | INE table 2883, read through the INE JSON API ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=2883), [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2883?nult=1)); same figure republished by CREM ([econet.carm.es](https://econet.carm.es/inicio/-/crem/sicrem/PU_datosBasicos/sec164.html)). Retrieved 2026-10. |
+| Population, 1-Jan-2025 (municipal Padrón exploitation) | 479,491 | FACT (2nd source) | Ayuntamiento de Murcia press release, 26-Jan-2026 ([web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000)). Retrieved 2026-10. |
+| Population, 1-Jan-2024 (municipal Padrón, trend check) | 474,834 | FACT | Ayuntamiento de Murcia / CARM, *Características sociodemográficas de las personas mayores del municipio de Murcia, año 2024*, p. 2 ([cendocps.carm.es](https://cendocps.carm.es/documentacion/2025_Sociodemografia_mayores_Murcia.pdf)). Retrieved 2026-10. |
+| **Verdict** | **≈479,400–479,500** | **Two publications of one register (agree within 86 people, 0.02%)** | — |
+
+Both rows come from the same register (the Padrón): the INE figure is the official
+revision, the Ayuntamiento figure is its own exploitation of the file on the same date.
+They are two publications, not two measurements; the CREM row is a republication of
+the INE figure and is not counted as a third source. Murcia is ≈2.05× Granada capital
+(233,975, `granada-market.md` §1.1).
+
+### 1.2 Urban core vs pedanías
+
+| Unit | Population, 1-Jan-2025 | Label | Source |
+| --- | --- | --- | --- |
+| Urban core ("centro urbano", 24 barrios) | **138,997** (28.99%) | FACT (1 source), provisional | Ayuntamiento press release ([web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000)). Retrieved 2026-10. |
+| Pedanías (59) | **340,494** (71.01%) | FACT (1 source), provisional | Same release ([web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000)). Retrieved 2026-10. |
+| Count of units: 24 barrios, 59 pedanías | — | FACT (1 source) | Murcia Plaza, 26-Jan-2026, reading the same Padrón ([murciaplaza.com](https://murciaplaza.com/murciaplaza/murcia/murcia-roza-los-480000-habitantes-impulsada-por-el-crecimiento-de-las-pedanias-frente-al-estancamiento-del-centro)). Retrieved 2026-10. |
+
+The feature brief said "~54 pedanías"; the Padrón publication reads 59. The 59 count is
+used here; the difference is a matter of how the Ayuntamiento splits pedanías, not a
+population difference, and no figure in this file depends on it.
+
+Largest pedanías and core barrios, 1-Jan-2025:
+
+| Unit | Type | Population | Label | Source |
+| --- | --- | --- | --- | --- |
+| El Palmar | pedanía | 25,339 | FACT (2 publications) | [web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000); [murciaplaza.com](https://murciaplaza.com/murciaplaza/murcia/murcia-roza-los-480000-habitantes-impulsada-por-el-crecimiento-de-las-pedanias-frente-al-estancamiento-del-centro). Retrieved 2026-10. |
+| Puente Tocinos | pedanía | 16,976 | FACT (2 publications) | same two. Retrieved 2026-10. |
+| Cabezo de Torres | pedanía | 14,350 | FACT (2 publications) | same two. Retrieved 2026-10. |
+| La Alberca | pedanía | 13,263 | FACT (1 source) | [web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000). Retrieved 2026-10. |
+| Espinardo | pedanía | 12,792 | FACT (1 source) | same. Retrieved 2026-10. |
+| Sangonera la Verde | pedanía | 12,726 | FACT (1 source) | same. Retrieved 2026-10. |
+| El Carmen | core barrio | 20,599 | FACT (1 source) | [murciaplaza.com](https://murciaplaza.com/murciaplaza/murcia/murcia-roza-los-480000-habitantes-impulsada-por-el-crecimiento-de-las-pedanias-frente-al-estancamiento-del-centro). Retrieved 2026-10. |
+| Vistalegre (Vista Alegre) | core barrio | 13,546 | FACT (1 source) | same. Retrieved 2026-10. |
+| Infante Juan Manuel | core barrio | 12,151 | FACT (1 source) | same. Retrieved 2026-10. |
+
+Reading (ANALYSIS): the six largest pedanías hold 95,446 people, 28% of the pedanía
+population; the other 53 average ≈4,600 each. The municipality is therefore not a
+compact city with suburbs: seven in ten residents live outside the 24-barrio core, in
+settlements of very uneven size. Growth is in the pedanías; the core is flat (Murcia
+Plaza, same article).
+
+### 1.3 Households and household size
+
+| Figure | Value | Label | Source |
+| --- | --- | --- | --- |
+| Average household size, Murcia municipality, 2023 | **2.8** | FACT (1 source), provisional | INE ADRH, *Indicadores demográficos*, Murcia province table 31123, series "Murcia. Tamaño medio del hogar" ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123), [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31123?nult=2)); 2022 value also 2.8. Retrieved 2026-10. |
+| Share of one-person households, municipality, 2023 | 25.2% | FACT (1 source) | Same table ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123)). Retrieved 2026-10. |
+| Average household size, Región de Murcia, 1-Jul-2026 | 2.7 (national 2.49) | FACT — **different geography (region), consistency check only** | INE Estadística Continua de Población, table 60134 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=60134)). Retrieved 2026-10. |
+| Households, Región de Murcia, 1-Jul-2026 | 595,361 | FACT — region | INE ECP, table 60133 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=60133)). Retrieved 2026-10. |
+| Households, Murcia municipality, direct count (Censo 2021 / CREM) | **NOT FOUND** | NOT FOUND | The CREM Censo 2021 pages answered with a bot-check redirect and were not read; INE's Censo 2021 municipal household tables are not exposed in the INE API (operation 463 publishes persons only). |
+| **Households, Murcia municipality (ESTIMATE)** | **≈171,200** (band ≈168,200–174,300) | ESTIMATE | 479,405 ÷ 2.8. The band is the rounding range of the published size (2.75–2.85), not a sampling interval. |
+
+This closes the Granada pass's borrowed-divisor hole: the divisor is Murcia-measured
+(2.8), not Madrid's 2.41. It is larger than Granada's borrowed 2.4, so Murcia has
+**fewer households per inhabitant**; using 2.4 here would overstate the pool by
+≈28,500 households (≈17%). The regional 2.7 is the highest in Spain (FACT (1 source),
+provisional: the regional ranking in INE ECP table 60134,
+[ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=60134), retrieved 2026-10) and agrees in
+direction; it is a different geography and is not averaged with the municipal 2.8.
+
+ADRH by census district, 2023 (INE census districts — **a different geographic unit
+from the Ayuntamiento's core / pedanía split in §1.2; the two are not blended**):
+
+| District | Population | Household size | One-person households | Mean age |
+| --- | --- | --- | --- | --- |
+| 01 | 61,764 | 2.6 | 29.0% | 43.2 |
+| 02 | 53,330 | 2.6 | 30.0% | 44.3 |
+| 03 | 53,829 | 2.7 | 26.6% | 43.1 |
+| 04 | 101,630 | 2.8 | 22.8% | 39.6 |
+| 05 | 79,508 | 2.8 | 22.8% | 39.8 |
+| 06 | 51,695 | 2.8 | 22.8% | 39.9 |
+| 07 | 52,574 | 2.8 | 23.5% | 41.3 |
+| 08 | 12,986 | 2.7 | 27.0% | 42.1 |
+
+Source: INE ADRH table 31123 as above ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123);
+FACT, 1 source; retrieved 2026-10). Which barrios and pedanías each
+district contains was not mapped this pass, so the table is not used to size R1; it
+shows that household size runs 2.6–2.8 inside the municipality.
+
+### 1.4 Age structure — the 45–65 share
+
+| Figure | Value | Label | Source |
+| --- | --- | --- | --- |
+| Age 45–64, Murcia municipality, Padrón 1-Jan-2024 | 141,136 of 474,834 = **29.7%** | FACT | Ayuntamiento / CARM age pyramid, p. 2: 45–49 40,139; 50–54 36,925; 55–59 35,046; 60–64 29,026 ([cendocps.carm.es](https://cendocps.carm.es/documentacion/2025_Sociodemografia_mayores_Murcia.pdf)). Retrieved 2026-10. |
+| Age 45–64, Murcia municipality, Censo 2021 | 131,478 of 459,778 = 28.6% | FACT (2nd source) | INE Censo 2021, republished by telencuestas: 45–49 37,897; 50–54 35,994; 55–59 31,544; 60–64 26,043 ([telencuestas.com](https://telencuestas.com/censos-de-poblacion/espana/2021/region-de-murcia/murcia/murcia)). Retrieved 2026-10. |
+| Age 65+, municipality, 2023 | 16.7% | FACT (1 source) | INE ADRH table 31123 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123)). Retrieved 2026-10. |
+| Mean age, municipality, 2023 | 41.3 | FACT (1 source) | INE ADRH table 31123 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123)). Retrieved 2026-10. |
+| **Verdict** | **≈29–30% (use 29.7%)** | **Murcia-measured, two sources consistent (rise 2021→2024 matches the ageing of the 40–44 cohort)** | — |
+
+The share is measured for Murcia; the borrowed 29% of the Granada pass is not used.
+The age bands are five-year Padrón groups, so "45–65" here means ages 45 to 64, the
+same reading `market-dossier.md` §5.3 used. The two rows are different dates and
+different operations (Padrón vs Censo), and the newer one is used.
+
+Applied (ESTIMATE): 479,405 × 29.7% ≈ **≈142,400** residents aged 45–64 in the
+municipality. Segment sizing per ring is §3.
+
+### 1.5 Housing stock
+
+| Figure | Value | Label | Source |
+| --- | --- | --- | --- |
+| Vacant dwellings, Murcia municipality, Censo 2021 | 7% | FACT (1 source), provisional — newsroom citation of INE Censo 2021, declared fallback | COPE, 30-Jun-2023 ([cope.es](https://www.cope.es/actualidad/espana/noticias/cartagena-murcia-entre-las-ciudades-espanolas-mas-200000-habitantes-con-mas-viviendas-vacias-20230630_2790978)). Retrieved 2026-10. |
+| Main vs secondary dwellings, municipality | **NOT FOUND** | NOT FOUND | CREM Censo 2021 dwelling tables were behind a bot-check redirect; not read. |
+| Flats vs single-family houses, municipality | **NOT FOUND** | NOT FOUND | A search snippet gave "60.8% single-family" without a geography or a readable source; not used. |
+
+### 1.6 Surrounding municipalities — ring table
+
+Population is the INE official figure at 1-Jan-2025 (tables 2883 Murcia and 2856
+Alicante, [API Murcia](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2883?nult=1),
+[API Alicante](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2856?nult=1);
+retrieved 2026-10). CREM
+([econet.carm.es](https://econet.carm.es/inicio/-/crem/sicrem/PU_datosBasicos/sec164.html))
+republishes the same INE figures for the Murcia-region rows; under the rule in §1.1 a
+republication is not a second source. Household size is each municipality's own INE
+ADRH 2023 value (tables 31123 Murcia, [ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123);
+30841 Alicante, [ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=30841); retrieved 2026-10). Distance and time are road routes from Glorieta de España (Murcia
+centre) to the municipal centroid, computed on 2026-10-05 with OSRM
+([router.project-osrm.org](https://router.project-osrm.org)) over OpenStreetMap, with
+places geocoded by Nominatim ([nominatim.openstreetmap.org](https://nominatim.openstreetmap.org)).
+OSRM times are **free-flow** (no traffic): they are ESTIMATES and understate peak-hour
+time. A measured typical (traffic) drive time is **NOT FOUND** for every row.
+
+| Municipality | Ring | Population 1-Jan-2025 | Household size (ADRH 2023) | Est. households | Road km | Free-flow min |
+| --- | --- | --- | --- | --- | --- | --- |
+| Murcia (municipality) | core + pedanías | 479,405 | 2.8 | ≈171,200 | 0 | 0 |
+| Alcantarilla | inner belt | 43,876 | 2.8 | ≈15,700 | 8.7 | 10 |
+| Molina de Segura | inner belt | 78,458 | 2.8 | ≈28,000 | 12.5 | 12 |
+| Las Torres de Cotillas | inner belt | 22,676 | 2.8 | ≈8,100 | 16.6 | 15 |
+| Santomera | inner belt | 16,443 | 2.9 | ≈5,700 | 20.5 | 16 |
+| Beniel | inner belt | 11,582 | 3.1 | ≈3,700 | 16.6 | 19 |
+| Alguazas | inner belt | 10,431 | 3.0 | ≈3,500 | 15.0 | 16 |
+| Ceutí | inner belt | 13,089 | 2.8 | ≈4,700 | 20.4 | 22 |
+| Lorquí | inner belt | 7,946 | 2.7 | ≈2,900 | 17.8 | 19 |
+| Archena | inner belt | 20,908 | 2.9 | ≈7,200 | 26.9 | 22 |
+| Orihuela (Alicante) | outer ring | 84,560 | 2.5 | ≈33,800 | 29.6 | 32 |
+| Cartagena | outer ring | 220,704 | 2.7 | ≈81,700 | 48.7 | 39 |
+| Torre-Pacheco (Mar Menor) | outer ring | 41,479 | 3.0 | ≈13,800 | 37.7 | 38 |
+| San Javier (Mar Menor) | outer ring | 36,524 | 2.7 | ≈13,500 | 44.1 | 37 |
+| San Pedro del Pinatar (Mar Menor) | outer ring | 29,674 | 2.7 | ≈11,000 | 47.7 | 42 |
+| Los Alcázares (Mar Menor) | outer ring | 20,408 | 2.6 | ≈7,800 | 46.0 | 45 |
+| Torrevieja (Alicante) | outer ring | 98,533 | 2.4 | ≈41,100 | 50.1 | 53 |
+| Lorca | outer ring | 98,969 | 3.0 | ≈33,000 | 78.7 | 66 |
+| Cieza | outer ring | 35,577 | 2.8 | ≈12,700 | 42.9 | 32 |
+
+Labels: population — Murcia municipality FACT (two publications of one register,
+§1.1); every other row FACT (1 source), provisional (INE only). Household size — every
+row FACT (1 source), provisional (INE ADRH only). Households ESTIMATE (population ÷
+own household size); km and minutes ESTIMATE (routing engine, free-flow). Inside the
+municipality, the same method gives El Palmar 8.0 km / 8 min, Sangonera la Verde
+12.8 km / 14 min and Cabezo de Torres 13.0 km / 12 min (the last looks long for a
+pedanía that borders the core: the geocoder's point for it is not its centre, so treat
+it as an upper bound); the Altorreal development (Molina de Segura) is 15.2 km / 17 min.
+
+Caveat on the outer ring: Torrevieja, Orihuela (coast), San Javier, San Pedro del
+Pinatar and Los Alcázares carry large second-home and foreign-resident populations;
+their Padrón count measures registered residents, not occupied main dwellings, and
+their small household sizes (2.4–2.7) and high one-person shares (Torrevieja 34.9%,
+Los Alcázares 30.6%; FACT (1 source), provisional, INE ADRH 2023 tables 30841
+[ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=30841) and 31123
+[ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123), retrieved 2026-10) point the same way. Their households are not directly comparable
+with the inner belt's, and are kept apart.
+
+### 1.7 Proposed service radii
+
+| Radius | Scope | Population | Est. households | Drive from centre (free-flow) |
+| --- | --- | --- | --- | --- |
+| **R1 — Urban core** | 24 core barrios | 138,997 (FACT (1 source), provisional) | ≈49,600 (ESTIMATE: ÷2.8 municipal) | Within the core: short urban trips, not routed this pass (NOT FOUND) |
+| **R2 — Municipality + inner belt** | Murcia municipality (core + 59 pedanías) + Alcantarilla, Molina de Segura, Las Torres de Cotillas, Santomera, Beniel, Alguazas, Ceutí, Lorquí, Archena | 479,405 + 225,409 = **704,814** (ESTIMATE: sum of FACT rows; belt rows FACT (1 source), provisional) | ≈171,200 + ≈79,500 = **≈250,700** (ESTIMATE) | Belt towns 9–27 km, 10–22 min; largest pedanías 8–13 km, 8–14 min |
+| **R3 — Outer ring (occasional or surcharge)** | Orihuela, Cartagena, Torre-Pacheco, San Javier, San Pedro del Pinatar, Los Alcázares, Torrevieja, Lorca, Cieza | **666,428** (ESTIMATE: sum of FACT (1 source), provisional rows) | **≈248,500** (ESTIMATE; coastal rows overstate main-dwelling households, see caveat) | 30–79 km, 32–66 min one way |
+
+R2 is the municipality with the belt added; R1 is a subset of it, not added to it. R3 is
+on top of R2. The R1 household figure uses the municipal 2.8 because the core's own
+household size is not published on the Ayuntamiento's core boundary; the district
+values in §1.3 are a different geography and are not used to size R1.
+
+Which ring a single operator at 4 services/day can serve (ANALYSIS, built on the rows
+above, with the drive times understated by free-flow routing):
+
+- **R1 and R2 — yes, as the daily operating area.** Every inner-belt town is at most
+  22 free-flow minutes from the centre, and the inter-job hops inside R2 are of the same
+  order. Four jobs a day with three hops and two base legs is ≈5 legs × 10–22 min ≈
+  1–2 h of driving, the same order as the Granada R2 case (`granada-market.md` §1.4).
+- **R3 — not as a daily area.** A Cartagena or Mar Menor job costs ≈75–90 min of round
+  trip before any work, close to one service slot; Torrevieja and Lorca cost more than
+  one slot. R3 works only as batched days (several jobs booked into the same coastal
+  zone) or with a travel surcharge. Orihuela (30 km, 32 min) and Cieza (43 km, 32 min)
+  are the cheapest R3 points by time.
+- The pool in R2 (≈250,700 households) is ≈2.6× Granada's R1 (≈97,000) and ≈1.1×
+  Granada's R2 (≈233,000, borrowed divisor). For the model, R2 replaces Granada R1 as
+  the base case only if the operator actually works the belt; R1-only (≈50,000
+  households) is smaller than Granada R1, because Murcia's population sits in the
+  pedanías, not the core. This is a reading for the model re-run, not a decision.
+
 ## 2. Income and premium zones
 
 ## 3. Target segment sizing per radius
diff --git a/specs/murcia-market/feature.md b/specs/murcia-market/feature.md
index d7ec1fe..e11c336 100644
--- a/specs/murcia-market/feature.md
+++ b/specs/murcia-market/feature.md
@@ -63,7 +63,7 @@ and no local keyword or CPC data.
   label standard, method, what is reused from `market-dossier.md`) and the empty
   numbered sections 1–10 named as in T2–T7. _Verify:_ `grep -c "^## " business/research/murcia-market.md` and `grep -c "Addendum 2026-10-05" business/research/founder-inputs.md`.
   Accept: the skeleton has the ten `## N.` sections and the addendum exists; no prior line of `founder-inputs.md` is deleted (`git diff` shows additions and superseded marks only).
-- [ ] **T2 — Geography, population, households, service radii** (structural). Fill §1.
+- [x] **T2 — Geography, population, households, service radii** (structural). Fill §1.
   Murcia municipality population (INE Padrón, latest) with second source; split urban
   core vs pedanías (the municipality has ~54 pedanías; largest ones named with
   population); households from INE Censo 2021 / CREM directly, and average household
@@ -77,6 +77,23 @@ and no local keyword or CPC data.
   (outer ring, occasional or surcharge) with population and households each, and say
   which ring a single operator at 4 services/day can serve. _Verify:_ `grep -c "^### 1\." business/research/murcia-market.md`.
   Accept: population and household figures are FACT with two sources or declared provisional; household size and 45–65 share are Murcia-measured or explicitly NOT FOUND with the borrowed proxy shown; every ring row has population, km and minutes or NOT FOUND.
+- [x] **T8 — Fix pass on T1/T2 review findings** (structural). Text corrections only,
+  no new research, no figure changed. In `murcia-market.md` §1: (F-003) relabel every
+  ring population and household-size row that rests on one source as "FACT (1 source),
+  provisional", including R1's 138,997 in the radii table, and remove the claim that a
+  CREM republication of INE confirms a figure, so the file obeys its own rule in §1.1;
+  (F-004) drop the R1 upper bound derived from the district-level 2.6 divisor, or keep
+  it only as an explicitly labelled HYPOTHESIS proxy, and remove the contradiction with
+  the statement that the district table is not used to size R1; (F-005) add the
+  retrieval date (2026-10) to every FACT row, add the source URL to the 65+ share and
+  mean-age rows, and give a source to the prose FACTs (regional 2.7 "highest in Spain",
+  one-person shares for Torrevieja and Los Alcázares) or relabel them; (F-006) reword
+  the population verdict cell to "two publications of one register". In
+  `founder-inputs.md`: (F-001) add a superseded mark under the Block 5 "Launch window"
+  item and widen the addendum's scope sentence to name it; (F-002) add a superseded
+  mark under FLAG-RESEARCH D pointing to `murcia-market.md` §2. Additions only in
+  `founder-inputs.md`. _Verify:_ `grep -c "provisional" business/research/murcia-market.md` and `grep -c "SUPERSEDED 2026-10-05" business/research/founder-inputs.md`.
+  Accept: each of F-001 to F-006 is addressed at the lines the findings record names; no population, household, distance or percentage figure differs from the T2 text; `founder-inputs.md` diff has no deleted line.
 - [ ] **T3 — Income, premium zones and segment sizing** (structural). Fill §2 and §3.
   §2: net income per household and per person, INE ADRH latest, for Murcia
   municipality with second source, set against Granada, Valencia city, Madrid region
@@ -153,12 +170,19 @@ and no local keyword or CPC data.
 
 - 2026-10-05 approved (gated). Founder-side note at approval: the end deliverable is a
   complete, polished PDF built on this research; that PDF is the next feature.
+- 2026-10-05 T1 committed (e198c22).
+- 2026-10-05 stop at T2: reviewer raised open Critical F-003 (single-source ring
+  figures labelled plain FACT). T2 not committed; run halted for the human.
+- 2026-10-05 human decision: add a fix task and continue. Recorded as T8, placed
+  after T2 (the lint accepts only numeric task ids, so not "T2a").
 
 ## Evidence
 
 | Task | Test | Layer | Safety net | RED | GREEN | Triangulate | Refactor |
 |---|---|---|---|---|---|---|---|
 | T1 | structural — `grep -c "^## " business/research/murcia-market.md`; `grep -c "Addendum 2026-10-05" business/research/founder-inputs.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `grep: business/research/murcia-market.md: No such file or directory` exit 2, addendum count `0` exit 1 | `10` exit 0; `4` exit 0; `git diff --numstat HEAD`: `15	0	business/research/founder-inputs.md` | Triangulation skipped: structural skeleton, no behaviour to triangulate; TODO/TBD/lorem grep empty (exit 1) | none |
+| T2 | structural — `grep -c "^### 1\." business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `0` exit 1 | `7` exit 0; `git diff --numstat HEAD`: `191	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `7` | none |
+| T8 | structural — `grep -c "provisional" business/research/murcia-market.md`; `grep -c "SUPERSEDED 2026-10-05" business/research/founder-inputs.md` | docs | n/a — docs repo, no package.json / tsc / eslint; pre-change counts `5` exit 0, `3` exit 0 | n/a (structural) | `12` exit 0; `5` exit 0; `git diff --numstat HEAD -- business/research/founder-inputs.md`: `3	0	business/research/founder-inputs.md` | Triangulation skipped: text-only fix pass; numeric-token diff before/after shows only added dates, table ids, URLs and § refs, plus the dropped R1 upper bound (`49,600–53,500` → `49,600`, `2.6` removed) per F-004; TODO/TBD/lorem grep empty (exit 1) | none |
 
 ## Briefing
 
```
