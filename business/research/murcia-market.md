# Murcia market inputs — operating-city research

> Research pass for `specs/murcia-market/feature.md`. Murcia capital and its
> surroundings are the operating city (`founder-inputs.md`, Addendum 2026-10-05). This
> file replaces the Granada scenario as the parameter source for the economic model,
> the bank dossier and both reports. It is research input only: it does not decide
> prices, does not write report or dossier copy, and does not change the model.
>
> **Label standard** — unchanged from `market-dossier.md`: **FACT** (load-bearing
> figures need a second independent source, else "FACT (1 source), provisional") /
> **ESTIMATE** (derivation shown) / **HYPOTHESIS** / **NOT FOUND**. A number that could
> not be sourced is written NOT FOUND, never filled with a plausible value. Judgements
> built on sourced rows are labelled **ANALYSIS** and kept apart from the facts.
>
> **Method** — every FACT row carries its source URL inline and the retrieval date
> (2026-10). Primary statistical sources first: INE (Padrón, Censo 2021, ADRH) and
> CREM / Econet; newsroom citations of INE are a declared fallback. Competitor prices
> are read on the competitor's own page; a snippet-only datum is labelled as such.
> Incompatible geographic definitions are flagged, never blended or averaged. Zones
> follow `market-dossier.md` §7; Trends follows `trends-keywords-addendum.md`.
>
> **Reused from `market-dossier.md`** — the national rates already graded there (§5.1
> allergy, §5.2 pets, §6.1–6.3 CPC / CVR, §9 admin costs) are carried by reference and
> re-researched only where a Murcia-specific figure exists.

---

## 1. Geography, population, households, service radii

### 1.1 Murcia municipality — population

| Figure | Value | Label | Source |
| --- | --- | --- | --- |
| Population, 1-Jan-2025 (INE official figure, Padrón revision) | **479,405** | FACT | INE table 2883, read through the INE JSON API ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=2883), [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2883?nult=1)); same figure republished by CREM ([econet.carm.es](https://econet.carm.es/inicio/-/crem/sicrem/PU_datosBasicos/sec164.html)). Retrieved 2026-10. |
| Population, 1-Jan-2025 (municipal Padrón exploitation) | 479,491 | FACT (2nd source) | Ayuntamiento de Murcia press release, 26-Jan-2026 ([web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000)). Retrieved 2026-10. |
| Population, 1-Jan-2024 (municipal Padrón, trend check) | 474,834 | FACT (1 source), provisional | Ayuntamiento de Murcia / CARM, *Características sociodemográficas de las personas mayores del municipio de Murcia, año 2024*, p. 2 ([cendocps.carm.es](https://cendocps.carm.es/documentacion/2025_Sociodemografia_mayores_Murcia.pdf)). Retrieved 2026-10. |
| **Verdict** | **≈479,400–479,500** | **Two publications of one register (agree within 86 people, 0.02%)** | — |

Both rows come from the same register (the Padrón): the INE figure is the official
revision, the Ayuntamiento figure is its own exploitation of the file on the same date.
They are two publications, not two measurements; the CREM row is a republication of
the INE figure and is not counted as a third source. Murcia is ≈2.05× Granada capital
(233,975, `granada-market.md` §1.1).

### 1.2 Urban core vs pedanías

| Unit | Population, 1-Jan-2025 | Label | Source |
| --- | --- | --- | --- |
| Urban core ("centro urbano", 24 barrios) | **138,997** (28.99%) | FACT (1 source), provisional | Ayuntamiento press release ([web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000)). Retrieved 2026-10. |
| Pedanías (59) | **340,494** (71.01%) | FACT (1 source), provisional | Same release ([web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000)). Retrieved 2026-10. |
| Count of units: 24 barrios, 59 pedanías | — | FACT (1 source), provisional | Murcia Plaza, 26-Jan-2026, reading the same Padrón ([murciaplaza.com](https://murciaplaza.com/murciaplaza/murcia/murcia-roza-los-480000-habitantes-impulsada-por-el-crecimiento-de-las-pedanias-frente-al-estancamiento-del-centro)). Retrieved 2026-10. |

The feature brief said "~54 pedanías"; the Padrón publication reads 59. The 59 count is
used here; the difference is a matter of how the Ayuntamiento splits pedanías, not a
population difference, and no figure in this file depends on it.

Largest pedanías and core barrios, 1-Jan-2025:

| Unit | Type | Population | Label | Source |
| --- | --- | --- | --- | --- |
| El Palmar | pedanía | 25,339 | FACT (2 publications) | [web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000); [murciaplaza.com](https://murciaplaza.com/murciaplaza/murcia/murcia-roza-los-480000-habitantes-impulsada-por-el-crecimiento-de-las-pedanias-frente-al-estancamiento-del-centro). Retrieved 2026-10. |
| Puente Tocinos | pedanía | 16,976 | FACT (2 publications) | same two. Retrieved 2026-10. |
| Cabezo de Torres | pedanía | 14,350 | FACT (2 publications) | same two. Retrieved 2026-10. |
| La Alberca | pedanía | 13,263 | FACT (1 source), provisional | [web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000). Retrieved 2026-10. |
| Espinardo | pedanía | 12,792 | FACT (1 source), provisional | same. Retrieved 2026-10. |
| Sangonera la Verde | pedanía | 12,726 | FACT (1 source), provisional | same. Retrieved 2026-10. |
| El Carmen | core barrio | 20,599 | FACT (1 source), provisional | [murciaplaza.com](https://murciaplaza.com/murciaplaza/murcia/murcia-roza-los-480000-habitantes-impulsada-por-el-crecimiento-de-las-pedanias-frente-al-estancamiento-del-centro). Retrieved 2026-10. |
| Vistalegre (Vista Alegre) | core barrio | 13,546 | FACT (1 source), provisional | same. Retrieved 2026-10. |
| Infante Juan Manuel | core barrio | 12,151 | FACT (1 source), provisional | same. Retrieved 2026-10. |

Reading (ANALYSIS): the six largest pedanías hold 95,446 people, 28% of the pedanía
population; the other 53 average ≈4,600 each. The municipality is therefore not a
compact city with suburbs: seven in ten residents live outside the 24-barrio core, in
settlements of very uneven size. Growth is in the pedanías; the core is flat (Murcia
Plaza, same article).

### 1.3 Households and household size

| Figure | Value | Label | Source |
| --- | --- | --- | --- |
| Average household size, Murcia municipality, 2023 | **2.8** | FACT (1 source), provisional | INE ADRH, *Indicadores demográficos*, Murcia province table 31123, series "Murcia. Tamaño medio del hogar" ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123), [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31123?nult=2)); 2022 value also 2.8. Retrieved 2026-10. |
| Share of one-person households, municipality, 2023 | 25.2% | FACT (1 source), provisional | Same table ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123)). Retrieved 2026-10. |
| Average household size, Región de Murcia, 1-Jul-2026 | 2.7 (national 2.49) | FACT (1 source), provisional — **different geography (region), consistency check only** | INE Estadística Continua de Población, table 60134 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=60134)). Retrieved 2026-10. |
| Households, Región de Murcia, 1-Jul-2026 | 595,361 | FACT (1 source), provisional — region | INE ECP, table 60133 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=60133)). Retrieved 2026-10. |
| Households, Murcia municipality, direct count (Censo 2021 / CREM) | **NOT FOUND** | NOT FOUND | The CREM Censo 2021 pages answered with a bot-check redirect and were not read; INE's Censo 2021 municipal household tables are not exposed in the INE API (operation 463 publishes persons only). |
| **Households, Murcia municipality (ESTIMATE)** | **≈171,200** (band ≈168,200–174,300) | ESTIMATE | 479,405 ÷ 2.8. The band is the rounding range of the published size (2.75–2.85), not a sampling interval. |

This closes the Granada pass's borrowed-divisor hole: the divisor is Murcia-measured
(2.8), not Madrid's 2.41. It is larger than Granada's borrowed 2.4, so Murcia has
**fewer households per inhabitant**; using 2.4 here would overstate the pool by
≈28,500 households (≈17%). The regional 2.7 is the highest in Spain
(FACT (1 source), provisional: the regional ranking in INE ECP table 60134,
[ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=60134), retrieved 2026-10) and agrees in
direction; it is a different geography and is not averaged with the municipal 2.8.

ADRH by census district, 2023 (INE census districts — **a different geographic unit
from the Ayuntamiento's core / pedanía split in §1.2; the two are not blended**):

| District | Population | Household size | One-person households | Mean age |
| --- | --- | --- | --- | --- |
| 01 | 61,764 | 2.6 | 29.0% | 43.2 |
| 02 | 53,330 | 2.6 | 30.0% | 44.3 |
| 03 | 53,829 | 2.7 | 26.6% | 43.1 |
| 04 | 101,630 | 2.8 | 22.8% | 39.6 |
| 05 | 79,508 | 2.8 | 22.8% | 39.8 |
| 06 | 51,695 | 2.8 | 22.8% | 39.9 |
| 07 | 52,574 | 2.8 | 23.5% | 41.3 |
| 08 | 12,986 | 2.7 | 27.0% | 42.1 |

Source: INE ADRH table 31123 as above ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123);
FACT (1 source), provisional; retrieved 2026-10). Which barrios and pedanías each
district contains was not mapped this pass, so the table is not used to size R1; it
shows that household size runs 2.6–2.8 inside the municipality.

### 1.4 Age structure — the 45–65 share

| Figure | Value | Label | Source |
| --- | --- | --- | --- |
| Age 45–64, Murcia municipality, Padrón 1-Jan-2024 | 141,136 of 474,834 = **29.7%** | FACT | Ayuntamiento / CARM age pyramid, p. 2: 45–49 40,139; 50–54 36,925; 55–59 35,046; 60–64 29,026 ([cendocps.carm.es](https://cendocps.carm.es/documentacion/2025_Sociodemografia_mayores_Murcia.pdf)). Retrieved 2026-10. |
| Age 45–64, Murcia municipality, Censo 2021 | 131,478 of 459,778 = 28.6% | FACT (2nd source) | INE Censo 2021, republished by telencuestas: 45–49 37,897; 50–54 35,994; 55–59 31,544; 60–64 26,043 ([telencuestas.com](https://telencuestas.com/censos-de-poblacion/espana/2021/region-de-murcia/murcia/murcia)). Retrieved 2026-10. |
| Age 65+, municipality, 2023 | 16.7% | FACT (1 source), provisional | INE ADRH table 31123 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123)). Retrieved 2026-10. |
| Mean age, municipality, 2023 | 41.3 | FACT (1 source), provisional | INE ADRH table 31123 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123)). Retrieved 2026-10. |
| **Verdict** | **≈29–30% (use 29.7%)** | **Murcia-measured, two sources consistent (rise 2021→2024 matches the ageing of the 40–44 cohort)** | — |

The share is measured for Murcia; the borrowed 29% of the Granada pass is not used.
The age bands are five-year Padrón groups, so "45–65" here means ages 45 to 64, the
same reading `market-dossier.md` §5.3 used. The two rows are different dates and
different operations (Padrón vs Censo), and the newer one is used.

Applied (ESTIMATE): 479,405 × 29.7% ≈ **≈142,400** residents aged 45–64 in the
municipality. Segment sizing per ring is §3.

### 1.5 Housing stock

| Figure | Value | Label | Source |
| --- | --- | --- | --- |
| Vacant dwellings, Murcia municipality, Censo 2021 | 7% | FACT (1 source), provisional — newsroom citation of INE Censo 2021, declared fallback | COPE, 30-Jun-2023 ([cope.es](https://www.cope.es/actualidad/espana/noticias/cartagena-murcia-entre-las-ciudades-espanolas-mas-200000-habitantes-con-mas-viviendas-vacias-20230630_2790978)). Retrieved 2026-10. |
| Main vs secondary dwellings, municipality | **NOT FOUND** | NOT FOUND | CREM Censo 2021 dwelling tables were behind a bot-check redirect; not read. |
| Flats vs single-family houses, municipality | **NOT FOUND** | NOT FOUND | A search snippet gave "60.8% single-family" without a geography or a readable source; not used. |

### 1.6 Surrounding municipalities — ring table

Population is the INE official figure at 1-Jan-2025 (tables 2883 Murcia and 2856
Alicante, [API Murcia](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2883?nult=1),
[API Alicante](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2856?nult=1);
retrieved 2026-10). CREM
([econet.carm.es](https://econet.carm.es/inicio/-/crem/sicrem/PU_datosBasicos/sec164.html))
republishes the same INE figures for the Murcia-region rows; under the rule in §1.1 a
republication is not a second source. Household size is each municipality's own INE
ADRH 2023 value (tables 31123 Murcia, [ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123);
30841 Alicante, [ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=30841); retrieved 2026-10). Distance and time are road routes from Glorieta de España (Murcia
centre) to the municipal centroid, computed on 2026-10-05 with OSRM
([router.project-osrm.org](https://router.project-osrm.org)) over OpenStreetMap, with
places geocoded by Nominatim ([nominatim.openstreetmap.org](https://nominatim.openstreetmap.org)).
OSRM times are **free-flow** (no traffic): they are ESTIMATES and understate peak-hour
time. A measured typical (traffic) drive time is **NOT FOUND** for every row.

| Municipality | Ring | Population 1-Jan-2025 | Household size (ADRH 2023) | Est. households | Road km | Free-flow min |
| --- | --- | --- | --- | --- | --- | --- |
| Murcia (municipality) | core + pedanías | 479,405 | 2.8 | ≈171,200 | 0 | 0 |
| Alcantarilla | inner belt | 43,876 | 2.8 | ≈15,700 | 8.7 | 10 |
| Molina de Segura | inner belt | 78,458 | 2.8 | ≈28,000 | 12.5 | 12 |
| Las Torres de Cotillas | inner belt | 22,676 | 2.8 | ≈8,100 | 16.6 | 15 |
| Santomera | inner belt | 16,443 | 2.9 | ≈5,700 | 20.5 | 16 |
| Beniel | inner belt | 11,582 | 3.1 | ≈3,700 | 16.6 | 19 |
| Alguazas | inner belt | 10,431 | 3.0 | ≈3,500 | 15.0 | 16 |
| Ceutí | inner belt | 13,089 | 2.8 | ≈4,700 | 20.4 | 22 |
| Lorquí | inner belt | 7,946 | 2.7 | ≈2,900 | 17.8 | 19 |
| Archena | inner belt | 20,908 | 2.9 | ≈7,200 | 26.9 | 22 |
| Orihuela (Alicante) | outer ring | 84,560 | 2.5 | ≈33,800 | 29.6 | 32 |
| Cartagena | outer ring | 220,704 | 2.7 | ≈81,700 | 48.7 | 39 |
| Torre-Pacheco (Mar Menor) | outer ring | 41,479 | 3.0 | ≈13,800 | 37.7 | 38 |
| San Javier (Mar Menor) | outer ring | 36,524 | 2.7 | ≈13,500 | 44.1 | 37 |
| San Pedro del Pinatar (Mar Menor) | outer ring | 29,674 | 2.7 | ≈11,000 | 47.7 | 42 |
| Los Alcázares (Mar Menor) | outer ring | 20,408 | 2.6 | ≈7,800 | 46.0 | 45 |
| Torrevieja (Alicante) | outer ring | 98,533 | 2.4 | ≈41,100 | 50.1 | 53 |
| Lorca | outer ring | 98,969 | 3.0 | ≈33,000 | 78.7 | 66 |
| Cieza | outer ring | 35,577 | 2.8 | ≈12,700 | 42.9 | 32 |

Labels: population — Murcia municipality FACT (two publications of one register,
§1.1); every other row FACT (1 source), provisional (INE only). Household size — every
row FACT (1 source), provisional (INE ADRH only). Households ESTIMATE (population ÷
own household size); km and minutes ESTIMATE (routing engine, free-flow). Inside the
municipality, the same method gives El Palmar 8.0 km / 8 min, Sangonera la Verde
12.8 km / 14 min and Cabezo de Torres 13.0 km / 12 min (the last looks long for a
pedanía that borders the core: the geocoder's point for it is not its centre, so treat
it as an upper bound); the Altorreal development (Molina de Segura) is 15.2 km / 17 min.

Caveat on the outer ring: Torrevieja, Orihuela (coast), San Javier, San Pedro del
Pinatar and Los Alcázares carry large second-home and foreign-resident populations;
their Padrón count measures registered residents, not occupied main dwellings, and
their small household sizes (2.4–2.7) and high one-person shares (Torrevieja 34.9%,
Los Alcázares 30.6%; FACT (1 source), provisional, INE ADRH 2023 tables 30841
[ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=30841) and 31123
[ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123), retrieved 2026-10) point the same way. Their households are not directly comparable
with the inner belt's, and are kept apart.

### 1.7 Proposed service radii

| Radius | Scope | Population | Est. households | Drive from centre (free-flow) |
| --- | --- | --- | --- | --- |
| **R1 — Urban core** | 24 core barrios | 138,997 (FACT (1 source), provisional) | ≈49,600 (ESTIMATE: ÷2.8 municipal) | Within the core: short urban trips, not routed this pass (NOT FOUND) |
| **R2 — Municipality + inner belt** | Murcia municipality (core + 59 pedanías) + Alcantarilla, Molina de Segura, Las Torres de Cotillas, Santomera, Beniel, Alguazas, Ceutí, Lorquí, Archena | 479,405 + 225,409 = **704,814** (ESTIMATE: sum of FACT rows; belt rows FACT (1 source), provisional) | ≈171,200 + ≈79,500 = **≈250,700** (ESTIMATE) | Belt towns 9–27 km, 10–22 min; largest pedanías 8–13 km, 8–14 min |
| **R3 — Outer ring (occasional or surcharge)** | Orihuela, Cartagena, Torre-Pacheco, San Javier, San Pedro del Pinatar, Los Alcázares, Torrevieja, Lorca, Cieza | **666,428** (ESTIMATE: sum of FACT (1 source), provisional rows) | **≈248,500** (ESTIMATE; coastal rows overstate main-dwelling households, see caveat) | 30–79 km, 32–66 min one way |

R2 is the municipality with the belt added; R1 is a subset of it, not added to it. R3 is
on top of R2. The R1 household figure uses the municipal 2.8 because the core's own
household size is not published on the Ayuntamiento's core boundary; the district
values in §1.3 are a different geography and are not used to size R1.

Which ring a single operator at 4 services/day can serve (ANALYSIS, built on the rows
above, with the drive times understated by free-flow routing):

- **R1 and R2 — yes, as the daily operating area.** Every inner-belt town is at most
  22 free-flow minutes from the centre, and the inter-job hops inside R2 are of the same
  order. Four jobs a day with three hops and two base legs is ≈5 legs × 10–22 min ≈
  1–2 h of driving, the same order as the Granada R2 case (`granada-market.md` §1.4).
- **R3 — not as a daily area.** A Cartagena or Mar Menor job costs ≈75–90 min of round
  trip before any work, close to one service slot; Torrevieja and Lorca cost more than
  one slot. R3 works only as batched days (several jobs booked into the same coastal
  zone) or with a travel surcharge. Orihuela (30 km, 32 min) and Cieza (43 km, 32 min)
  are the cheapest R3 points by time.
- The pool in R2 (≈250,700 households) is ≈2.6× Granada's R1 (≈97,000) and ≈1.1×
  Granada's R2 (≈233,000, borrowed divisor). For the model, R2 replaces Granada R1 as
  the base case only if the operator actually works the belt; R1-only (≈50,000
  households) is smaller than Granada R1, because Murcia's population sits in the
  pedanías, not the core. This is a reading for the model re-run, not a decision.

## 2. Income and premium zones

### 2.1 Murcia purchasing power vs Granada / Valencia / Madrid / national

Same table as `granada-market.md` §6, extended with the per-person figure. Every INE
value below was read directly from the INE ADRH tables through the INE JSON API, not
from a press citation: table 31115 (Murcia province, municipalities and sections,
[ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31115),
[API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31115?nult=1)), 31025
(Granada province, [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31025?nult=1)),
31250 (Valencia province, [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31250?nult=1))
and 53689 (national, CCAA and provinces,
[API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/53689?nult=1)). Latest year
published: 2023 (ADRH 2023, released 21-Oct-2025,
[ine.es](https://www.ine.es/dyngs/Prensa/ADRH2023.htm)). Retrieved 2026-10.

| Metric (INE ADRH 2023) | Murcia (municipality) | Granada (municipality) | Valencia (municipality) | Madrid (Comunidad, region) | National |
| --- | --- | --- | --- | --- | --- |
| Net income per household | **€38,682** | €36,821 | €40,058 | €48,806 | €38,326 |
| Net income per person | **€13,906** | €16,024 | €16,121 | €18,142 | €15,036 |
| Label | FACT (1 source), provisional — INE table read directly; the AEAT cross-check below is a different metric and supports only the per-person ordering, not the per-household one | FACT (1 source), provisional — INE table read directly | FACT (1 source), provisional — INE table read directly | **CONFLICTING** — INE table re-read at source confirms both cells; conflicts with `market-dossier.md` §5.3 (€43,037 per household), see note | FACT (1 source), provisional — INE table read directly; the INE press release is a republication by the same body, not a second source (§1.1 rule) |

Region of Murcia, for reference only (different geography, not blended): €34,951 per
household, €12,446 per person (INE table 53689, retrieved 2026-10).

Independent second source, **different metric** (tax-declarant gross income, not
comparable in level with ADRH; shown for ordering only):

| AEAT IRPF 2023, gross income per declarant | Murcia | Granada | València | Madrid (Comunidad) | Common-territory mean |
| --- | --- | --- | --- | --- | --- |
| Renta bruta media | €30,979 | €32,694 | €34,355 | €40,801 | €31,333 |
| Label | FACT (1 source), provisional | FACT (1 source), provisional | FACT (1 source), provisional | FACT (1 source), provisional | FACT (1 source), provisional |

Scope flag: the AEAT municipal IRPF statistic covers the common tax territory only
(it excludes País Vasco and Navarra, which run their own income tax), so its
common-territory mean is not Spain and is not the same geography as the ADRH National
column above. The two are not blended.

Source: Agencia Tributaria, *Estadística de los declarantes del IRPF por municipios
2023*, ranking table ([sede.agenciatributaria.gob.es](https://sede.agenciatributaria.gob.es/AEAT/Contenidos_Comunes/La_Agencia_Tributaria/Estadisticas/Publicaciones/sites/irpfmunicipios/2023/jrubikf6b1df8fe9d9e1b349886f03cf541e3fd2e65dd05.html)).
Murcia ranks 518th in the common territory and 2nd in the region, behind Molina de Segura
(€32,691). CREM republishes the same AEAT figure (€30,979,
[econet.carm.es](https://econet.carm.es/inicio/-/crem/sicrem/PM2071/pdf/sec2.pdf));
under the rule in §1.1 that is not a third source. Retrieved 2026-10.

Notes:

- **Madrid conflict.** `market-dossier.md` §5.3 carries €43,037 per household for the
  Comunidad de Madrid. INE table 53689 was re-opened at its source (INE JSON API,
  [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/53689?nult=2); retrieved
  2026-10): row "Madrid, Comunidad de. Dato base. Renta neta media por hogar"
  (series ADRH9974348), year 2023, reads **€48,806**; row "… Renta neta media por
  persona" (ADRH9974349), year 2023, reads **€18,142**. Both cells are kept as read.
  The same rows give €45,726 per household for 2022, so €43,037 matches neither of
  the two latest years. The national row (€38,326) and Valencia (€40,058) match
  `market-dossier.md` exactly, so the difference is specific to the Madrid row. Labelled
  CONFLICTING until the §5.3 figure is traced; `market-dossier.md` is not edited by
  this feature. Flagged for §9.
- **Granada.** `granada-market.md` §6 carries €36,821 as "FACT (1 source), provisional"
  from a secondary citation. The INE table read here returns the same €36,821, so the
  figure is now read at the primary source. That file is not edited by this feature.

Reading (ANALYSIS):

- The two income measures point in **opposite directions** for Murcia, and the reason
  is household size (§1.3). Per household, Murcia (€38,682) sits ≈1% **above** the
  national mean and ≈5% above Granada. Per person, it sits ≈7.5% **below** the national
  mean, ≈13% below Granada (−13.2%) and ≈14% below Valencia (−13.7%). Murcia households are larger (2.8 vs ≈2.5
  nationally), so more people share a similar household income.
- The independent AEAT series agrees with the per-person reading, not the per-household
  one: Murcia €30,979 vs Granada €32,694 vs common-territory mean €31,333. Both sources therefore
  place Murcia **below Granada and below each source's own wider mean** (ADRH national
  mean per person; AEAT common-territory mean) in individual purchasing power.
- For a discretionary household service, the per-person figure is the safer affluence
  signal; the per-household figure flatters Murcia through household size. The
  directional expectation that Murcia prices sit **at or below Granada** is supported by
  two independent sources; it is a reading for the model re-run, not a price decision.

### 2.2 Income by census section — where the premium zones are

Method (follows `market-dossier.md` §7, and keeps its metric caveat: every figure in this
subsection is **INE ADRH 2023 net income**, per person or per household as labelled;
none is an AEAT per-declarant figure, so all rows are comparable with each other):

1. INE ADRH 2023 publishes net income for each of Murcia's 387 census sections (table
   31115 above) and population and household size per section (table 31123,
   [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31123?nult=1)). Retrieved
   2026-10.
2. Census sections carry codes, not names. Each section's geometry was read from INE's
   own section cartography (OGC API Features, collection `Secciones_2023`,
   [ine.es/geoserver](https://www.ine.es/geoserver/ogc/features/v1/collections/WMS_INE_SECCIONES_G01:Secciones_2023/items?f=application/json&filter-lang=cql-text&filter=CUMUN%3D%2730030%27%20AND%20TIPO%3D%27SECCIONADO%27&limit=1000);
   retrieved 2026-10).
3. Each candidate zone was geocoded with Nominatim / OpenStreetMap
   ([nominatim.openstreetmap.org](https://nominatim.openstreetmap.org)); the section
   containing that point and every section intersecting a ≈300 m box around it were
   taken. Zone income is the population-weighted mean of those sections (per person) or
   the household-weighted mean (per household; households = population ÷ section
   household size). Section names in the ranking were obtained the other way round, by
   reverse-geocoding each section's centroid.

Labels: section income, population and household size are
**FACT (1 source), provisional** — INE ADRH, read directly. The zone a section is assigned to is **ESTIMATE** (geocoding; a zone
has no official boundary, and a ≈300 m box is a convention, not a neighbourhood
limit). Zone averages are **ESTIMATE** (weighted means of FACT rows).

Municipal reference: €13,906 per person, €38,682 per household (§2.1).

Verdict criterion (one rule, applied to every zone): a zone is **Premium** when its
population-weighted net income per person is ≥1.5× the per-person mean of its own
municipality — the same cut-off that sizes the high-income pool below (Murcia
≥€20,859; Molina de Segura, mean €13,766, ≥€20,649). Every other zone is **Below the
premium cut-off**, with its ratio shown. Sections inside a zone that clear the cut-off
on their own are named, but they do not change the zone's verdict.

Candidate zones from the brief, tested:

| Zone | Section at the geocoded point (per person / per household) | ≈300 m around the point: sections, population | Per person, weighted (range) | Per household, weighted | Verdict |
| --- | --- | --- | --- | --- | --- |
| **Centro** (Plaza de Santo Domingo: Catedral, San Lorenzo, San Miguel, Santa Catalina, San Bartolomé) | 02020: €27,096 / €69,127 | 19 sections, 18,306 people | **€23,808** (€14,781–€33,082) | **€61,141** | **Premium** (1.71×) — the richest cluster in the municipality |
| **Vistalegre** (Vista Alegre) | 02003: €17,472 / €46,618 | 14 sections, 14,304 people | **€19,079** (€12,920–€28,078) | **€50,832** | Below the premium cut-off (1.37×); its Avenida de Europa section clears it on its own (02062: €28,078 / €83,936), the rest is mixed |
| **La Flota** | 02055: €18,535 / €51,912 | 10 sections, 12,261 people | **€17,806** (€12,041–€22,233) | **€49,294** | Below the premium cut-off (1.28×); its highest section (€22,233) clears it on its own |
| **Santa María de Gracia** | 01007: €17,684 / €47,198 | 19 sections, 18,518 people | **€16,316** (€9,821–€23,704) | **€42,866** | Below the premium cut-off (1.17×), wide spread; its southern-edge sections clear it on their own (01022 €25,934, 01018 €23,704) and border the centro cluster |
| **Juan Carlos I** | 01040: €13,757 / €35,227 and 04002: €19,650 / €56,436 (the point sits on a section boundary) | 8 sections, 9,162 people | €14,002 (€7,656–€19,650) | €37,403 | **Below the premium cut-off (1.01×).** The geocoder places "Avenida Juan Carlos I" at its northern end (El Puntal side); there the area is at the municipal mean. The avenue is long and its southern end (section 01016, €21,580) is above it. The zone the brief means has no published boundary: NOT FOUND as a defined zone |
| **Altorreal** (Molina de Segura) | 01050: €20,906 / €68,258 | 2 sections, 3,123 people | **€20,567** (€20,195–€20,906) | **€66,663** | Below the premium cut-off, at its edge (1.49× Molina's mean, €13,766); section 01050 clears it on its own (€20,906 ≥ €20,649); small, large households (3.2) |
| **La Alcayna** (Molina de Segura) | 01035: €22,431 / €71,601 | 2 sections, 2,717 people | **€23,255** (€22,431–€25,083) | **€72,553** | **Premium** (1.69× Molina's mean), small; the highest per-household values in the belt |
| **Montepinar** (El Esparragal, Murcia) | 04062: €10,919 / €30,738 | 3 sections, 5,283 people | €12,468 (€10,919–€16,365) | €36,742 | **Below the premium cut-off (0.90×).** The point's own section is below the municipal mean; the adjacent 04075 (€16,365 / €54,039, household size 3.3) may be the development itself, but the boundary was not confirmed |

The ten highest-income sections of the municipality (per person), named by
reverse geocoding of the section centroid (name = ESTIMATE; income
FACT (1 source), provisional — INE ADRH 2023):

| Section | Area (OSM reverse geocode) | Per person | Per household | Population |
| --- | --- | --- | --- | --- |
| 02011 | San Miguel — C/ Jaime I el Conquistador | €33,082 | €85,753 | 1,342 |
| 02019 | San Miguel — C/ Manuel Massotti Littel | €29,603 | €78,232 | 1,039 |
| 01032 | Santa Catalina — C/ Marquesa | €28,989 | €77,644 | 703 |
| 02012 | La Fama — C/ Escritor Antonio Martínez Endique | €28,193 | €74,404 | 610 |
| 02062 | Vista Alegre — Avenida de Europa | €28,078 | €83,936 | 855 |
| 01031 | Santa Catalina — C/ Vinader | €27,263 | €64,609 | 816 |
| 01024 | San Miguel — C/ Jerónimo de Roda | €27,238 | €67,628 | 652 |
| 02020 | San Lorenzo — C/ Licenciado Cascales | €27,096 | €69,127 | 1,259 |
| 02013 | La Fama — C/ Catedrático Eugenio Úbeda | €26,494 | €67,274 | 785 |
| 01022 | San Miguel — C/ Entrejardines | €25,934 | €65,350 | 1,103 |

Two high-income sections outside the brief's candidate list also appear in the top 25:
04051 (Churra, "Ladera – Glorieta", €25,372 / €76,282, 924 people) and 05022 (La
Alberca, Senda Ismael, €22,229 / €70,232, 805 people). They are single sections, not
zones, and are recorded here so the zone list is not read as exhaustive.

Size of the high-income pool (ESTIMATE): Murcia sections with net income per person
≥1.5× the municipal mean (≥€20,859) are **34 of 387**, holding **32,488 people in
≈12,200 households** (population ÷ section household size); 29 of the 34 are in census
districts 01 and 02, the old city and its first ring. In Molina de Segura the same
threshold (≥€20,649) gives 4 of 56 sections, **4,872 people, ≈1,560 households**, all
in census district 01. The 1.5× threshold is a convention chosen here, not an INE
definition.

Geography (ANALYSIS, built on the rows above):

- Murcia's high-income geography is **one compact cluster**: centro, Vistalegre, La
  Flota and the southern edge of Santa María de Gracia lie within ≈1.5 km straight line
  of each other (geocoded points, ESTIMATE), all inside R1 (§1.7). Only centro clears
  the premium cut-off as a zone; the other three hold sections that clear it on their
  own. It is closer to the
  Valencia pattern (one compact zone) than the Madrid one (two or three clusters) in
  `market-dossier.md` §7.
- The belt's high-income pockets (La Alcayna, premium by the criterion; Altorreal, at
  1.49× just below it) are small and lie north of the centre inside R2: Altorreal 15.2 km / 17 free-flow minutes (§1.6), La Alcayna ≈2 km
  further north (geocoded points; not routed this pass). They are worth a batched day,
  not a daily base.
- Two brief candidates did not hold up at the geocoded point (Juan Carlos I,
  Montepinar). They are not dropped; their boundary is undefined and the reading may
  change when it is.

## 3. Target segment sizing per radius

Every product in this section is an **ESTIMATE**: a rate times a denominator. The rate
keeps its own label; the denominators are the §1.7 radii (R1 urban core 138,997 people /
≈49,600 households; R2 municipality + inner belt 704,814 / ≈250,700; R3 outer ring
666,428 / ≈248,500). R1 is a subset of R2; R3 sits on top of R2.

### 3.1 Age 45–64 per radius

Rates are measured per municipality, not borrowed. Source: INE, *Estadística del
Padrón Continuo*, population by municipality and five-year age group at 1-Jan-2022 (the
latest year that table publishes), tables 33854 Murcia
([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/33854?nult=1)) and 33584
Alicante ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/33584?nult=1));
45–64 = the sum of the four groups 45–49 … 60–64. FACT (1 source), provisional per
municipality; retrieved 2026-10.

| Municipality | 45–64 share, 1-Jan-2022 |
| --- | --- |
| Murcia | 29.1% (§1.4 uses the newer 29.7%, Padrón 2024) |
| Alcantarilla | 29.4% |
| Molina de Segura | 29.6% |
| Las Torres de Cotillas | 29.3% |
| Santomera | 29.0% |
| Beniel | 27.0% |
| Alguazas | 27.2% |
| Ceutí | 27.5% |
| Lorquí | 27.9% |
| Archena | 28.1% |
| Orihuela | 30.3% |
| Cartagena | 29.1% |
| Torre-Pacheco | 27.2% |
| San Javier | 28.5% |
| San Pedro del Pinatar | 27.2% |
| Los Alcázares | 28.6% |
| Torrevieja | 29.8% |
| Lorca | 27.5% |
| Cieza | 29.2% |

The Murcia 2022 value (29.1%) sits between the Censo 2021 (28.6%) and Padrón 2024
(29.7%) readings of §1.4: three operations, one trend.

| Radius | Rate | Denominator | 45–64 residents | Label |
| --- | --- | --- | --- | --- |
| R1 — urban core | 29.7% (municipal, Padrón 2024; **core-specific share NOT FOUND**, municipal proxy shown) | 138,997 | **≈41,300** | ESTIMATE |
| R2 — municipality + inner belt | Murcia 29.7% × 479,405; each belt town its own 2022 share × its 2025 population | 704,814 | **≈207,600** (29.4% of R2) | ESTIMATE |
| R3 — outer ring | each town its own 2022 share × its 2025 population | 666,428 | **≈192,600** (28.9% of R3) | ESTIMATE |

### 3.2 Respiratory allergy and dust-mite sensitisation

Search for a Murcia or Mediterranean-coast figure, in the order the brief set:

| Figure | Value | Label | Source |
| --- | --- | --- | --- |
| Dust-mite sensitisation among allergic-respiratory patients, **Región de Murcia** (Alergológica 2015) | **NOT FOUND** | NOT FOUND | The Alergológica 2015 regional figures that are published (Baleares 88%, Canarias 85%, Galicia 74%, País Vasco 56%, Comunitat Valenciana 56%, Cataluña 55%) name no Murcia row (Salud a Diario, 4-Dec-2018, reporting the SEAIC release, [saludadiario.es](https://www.saludadiario.es/pacientes/la-alergia-a-los-acaros-aumenta-en-las-comunidades-autonomas-costeras/)). Retrieved 2026-10. |
| Adults with any allergy, Región de Murcia | 23% | FACT (1 source), provisional — official statement, study not named | Servicio Murciano de Salud, director-general statement, 29-Oct-2013 ([murciasalud.es](https://www.murciasalud.es/-/un-23-por-ciento-de-los-murcianos-adultos-padecen-algun-tipo-de-alergia)). Retrieved 2026-10. |
| Adults with any allergy, "Levante" survey zone | 23.8% (n=698) vs 21.6% national (n=4,949) | FACT (1 source), provisional — 2001 field work; the zone is defined only on the paper's map; whether it includes Región de Murcia was not confirmed | Gaig et al., *Prevalencia de alergia en la población adulta española*, Alergol Inmunol Clin 2004;19:68-74, table I ([revista.seaic.org](http://revista.seaic.org/abril2004/68.pdf)). Retrieved 2026-10. |
| Self-reported dust-mite allergy, adults **45–64**, Spain | 3.2% (44 of 1,362) | FACT (1 source), provisional — 2001 field work | Same paper, table V. Retrieved 2026-10. |
| Respiratory allergy prevalence, Spain | ~20% | FACT (per `market-dossier.md` §5.1) | SEPAR via ImMédico (2025), carried by reference |
| Dust-mite sensitisation among asthma + rhinitis patients, Spain | up to 50% | FACT (per `market-dossier.md` §5.1) | Alergológica 2015, carried by reference |

No Murcia-specific dust-mite rate exists in the sources found, so the national bands
are carried, as the brief requires. The two regional "any allergy" figures (23%, 23.8%)
sit near the national 21.6% of the same survey design; they do not justify a different
respiratory rate for Murcia, and they are a different measure (any allergy, not
respiratory), so they are not substituted. The Comunitat Valenciana 56% is a
neighbouring region's figure and is not used for Murcia.

| Radius | Respiratory allergy (~20% × population) | Of which dust-mite sensitised (up to 50% of those) | 45–64 with self-reported dust-mite allergy (3.2% × 45–64 residents, §3.1) |
| --- | --- | --- | --- |
| R1 | 138,997 × 20% ≈ **≈27,800** | ≤ **≈13,900** | 41,300 × 3.2% ≈ **≈1,300** |
| R2 | 704,814 × 20% ≈ **≈141,000** | ≤ **≈70,500** | 207,600 × 3.2% ≈ **≈6,600** |
| R3 | 666,428 × 20% ≈ **≈133,300** | ≤ **≈66,600** | 192,600 × 3.2% ≈ **≈6,200** |

All ESTIMATE. Same caution as `market-dossier.md` §5.1: the 50% is sensitisation among
already-allergic patients, an upper bound, not a share of the population. The right-hand
column is the narrow, self-declared core of the 45–64 target; the 2001 survey date makes
it a floor, not a current figure.

### 3.3 Pet-owning households

| Figure | Value | Label | Source |
| --- | --- | --- | --- |
| Identified companion animals, **Región de Murcia**, mid-2023 | 271,031 (236,899 dogs, 33,696 cats, 436 ferrets) | FACT (1 source), provisional | REIAC statistics, "censo a mediados de 2023" ([reiac.es](https://www.reiac.es/reiac-info-02.php?lang=ESP)). Retrieved 2026-10. |
| Identified companion animals, Spain, same table | 10,474,251 (9,201,109 dogs) | FACT (1 source), provisional | Same page. Retrieved 2026-10. |
| Households with ≥1 pet, Spain | 49% (ANFAAC) or 61% (IPMARK) | CONFLICTING (per `market-dossier.md` §5.2) | Carried by reference; ANFAAC anchor used |
| Municipal registry count, Murcia | **NOT FOUND** | NOT FOUND | No published count of dogs or cats registered in the Murcia municipal registry was found. |

The regional registry exists but counts **animals, not households**, and the page does
not say whether records are active or cumulative; it cannot be turned into a share of
households without a pets-per-owner figure, which was not found. As a cross-check only
(ESTIMATE): registered dogs per inhabitant are ≈0.15 in the region (236,899 ÷ 1,571,933
inhabitants, AEAT 2023 population column, §2.1 source) against ≈0.19 for Spain
(9,201,109 ÷ 48,320,520, the Spain-wide population at 1-Jul-2023, INE *Estadística
Continua de Población*, table 56934, series ECP320, row "Total Nacional. Todas las edades",
[API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/56934?nult=10); retrieved
2026-10). The AEAT population column is not used for the national figure because it
covers the common tax territory only (§2.1 scope flag), while REIAC counts all of
Spain. The same INE table gives 1,558,016 for the region at 1-Jul-2023, which also
returns ≈0.15. The registry gives no sign that pet ownership in Murcia is
above the national level; registration completeness differs by region, so it is not
evidence that it is lower either. The ANFAAC national anchor is carried unchanged.

| Radius | Households (§1.7) | × 49% (ANFAAC anchor) | Label |
| --- | --- | --- | --- |
| R1 | ≈49,600 | **≈24,300** | ESTIMATE |
| R2 | ≈250,700 | **≈122,800** | ESTIMATE |
| R3 | ≈248,500 | **≈121,800** | ESTIMATE (coastal rows overstate main-dwelling households, §1.6) |

### 3.4 Summary per radius

| Radius | Population | Households | 45–64 | Respiratory allergy | Dust-mite sensitised (upper bound) | Pet-owning households |
| --- | --- | --- | --- | --- | --- | --- |
| R1 | 138,997 | ≈49,600 | ≈41,300 | ≈27,800 | ≤≈13,900 | ≈24,300 |
| R2 | 704,814 | ≈250,700 | ≈207,600 | ≈141,000 | ≤≈70,500 | ≈122,800 |
| R3 | 666,428 | ≈248,500 | ≈192,600 | ≈133,300 | ≤≈66,600 | ≈121,800 |

R1 population (138,997) is FACT (1 source), provisional (§1.2); R2 and R3 population are
ESTIMATE (sums of rows, §1.7); every other cell is ESTIMATE. Derivations in §1.7 and
§3.1–3.3. The
segments overlap (one household can be 45–64, allergic and pet-owning) and are not
summed. The high-income pool of §2.2 (≈12,200 households in Murcia, ≈1,560 in Molina)
is a separate cut, not a segment of this table.

## 4. Competition in Murcia

### 4.1 Search log and sweep depth

Web searches run 2026-10 (Spanish phrasing): "limpieza de colchones a domicilio Murcia
precio"; "limpieza de sofás a domicilio Murcia tapicerías"; "limpieza tapicerías Molina
de Segura Alcantarilla sofás colchones"; "limpieza de sofás y colchones a domicilio
Cartagena"; "limpieza colchones Lorca Cieza Archena a domicilio sofás"; "limpieza
tapicerías Torrevieja Orihuela sofás colchones a domicilio"; "\"limpieza de colchones\"
Murcia ácaros desinfección empresa"; "limpieza tapicería sofá Murcia inyección
extracción presupuesto WhatsApp"; "limpieza de sofás Murcia opiniones Google reseñas";
chain checks "UrbanCleaner Murcia", "EcoCleans Murcia", "Tapinet Murcia", "Biomex
precios"; method check "Hyla Murcia limpieza colchones" and "limpieza colchones Hyla
servicio a domicilio Murcia OR Alicante OR Cartagena". Cartagena results include
Cartagena de Indias (Colombia) operators; those were discarded.

Google Maps (limited view, non-essential cookies declined, up to 8 results per query):
"limpieza de sofás Murcia", "servicio de limpieza de tapicería Murcia", "limpieza de
tapicería Molina de Segura", "limpieza de tapicería Cartagena Murcia", plus a named
lookup for each provider below. The query "limpieza de colchones a domicilio Murcia"
returned no result list in the limited view.

Marketplaces: Cronoshare "limpieza de colchones / Murcia" and "limpieza de sofás a
domicilio / Murcia" (fetched; no Murcia price figure published, only a €–€€€€ scale);
Habitissimo "limpieza de tapicerías / Murcia" (the fetched page, updated 16-Sep-2026, has
no Murcia row; a search snippet reads "average €290, €50–2,400, 77 budgets", snippet
only, not used); ProntoPro, Milanuncios and Wallapop surfaced as listing pages of
individual classified ads and were not profiled.

**Sweep depth:** 20 providers profiled below (the brief's floor is 15). The field is
not claimed exhausted: the Maps limited view caps each query at 8 results, so a
Maps-only operator outside those queries can exist. Of the 20, 9 are upholstery
specialists or have a dedicated upholstery line with a Murcia-region presence stated on
their own page; the rest are national chains with no Murcia base found, or general
cleaning companies that list upholstery among other services.

UrbanCleaner (the only operator with an AITEX lab report in `market-dossier.md` §4.1) was
checked and **not found** in Murcia: its national site lists distributors in "diferentes
ciudades" without naming Murcia ([urbancleaner.es](https://www.urbancleaner.es/),
retrieved 2026-10), and no Murcia delegation page surfaced. **No Hyla-based operator
was found** in Murcia, Cartagena or Alicante with the method searches above.

### 4.2 Provider table

Prices are copied from the provider's own page as published ("desde" kept); VAT basis is
stated where the page states it. Google ratings are read on the Google Maps listing,
which itself marks the reviews as "No se verificaron las opiniones". Every cell that rests
on one page is FACT (1 source), provisional; a row-level label is given in the last
column. People are not named; owner names shown on some pages are left out.

| Provider | Type | Services | Published prices (piece / size) | Travel and area | Min. order | Google rating (reviews) | Trust signals and method | Price transparency | Label and source |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Clean-Home.es** | Regional chain (same brand as `market-dossier.md` §3.1 Valencia and `granada-market.md` §3) | Colchón, sofá, sillón, butaca, alfombra | Colchón 1 side / 2 sides: individual ≤100 cm €59 / €75; doble 135 cm €65 / €79; matrimonio ≤175 cm €69 / €79; king ≤195 cm €69 / €85; super king ≥200 cm €75 / €89. Sofá recto 2 pl €79 (struck €99), 3 pl €85 (€111), 4 pl €89 (€116); 2+chaise €89, 3+chaise €95, 4+chaise €99. Sillón +€35, butaca +€25 (add-ons only) | "Desplazamiento Gratis", all localities of the province | Base service = one mattress | 4.9 (1,632) — one national listing, not Murcia-specific | "EcoFusion360™" (injection-extraction + hot water + steam); satisfaction guarantee with free return visit; pay after service; no lab certification | Published, per size | FACT (1 source), provisional. [Colchón page](https://clean-home.es/es/servicio-de-limpieza-de-colchon-en-la-provincia-de-murcia-clean-home-es/), [sofá page](https://clean-home.es/es/servicio-de-limpieza-de-sofs-en-la-provincia-de-murcia-clean-home-es/), [Maps](https://www.google.com/maps/search/Clean-Home.es+limpieza+sof%C3%A1s). Retrieved 2026-10. |
| **Happy Clean** | Regional independent, based in Torrevieja (Alicante); serves Alicante, Granada and Murcia provinces | Sofá, sillón, silla, cabecero, colchón | Sofá 2 pl €70–90, 3 pl €100–120, 4 pl or chaise longue €110–130, piel "desde €50"; sillón "desde €30"; silla "desde €5"; cabecero "desde €15"; colchón "desde €45" (no size split on the page; a search snippet reads individual €45 / matrimonio €65 / king €75, snippet only) | Not stated as free or charged; Murcia towns listed | NOT FOUND | 5.0 (105), Torrevieja listing | "Limpieza en seco", 5–7 h drying; 10% first-order discount; quote from photos | Published (sofá by plazas; colchón without size) | FACT (1 source), provisional. [Murcia page](https://www.happyclean8.com/limpieza-de-sofas-a-domicilio-en-murcia), [home](https://www.happyclean8.com/), [Maps](https://www.google.com/maps/search/Happy+Clean+limpieza+sof%C3%A1s+Torrevieja). Retrieved 2026-10. |
| **Limpiezalto** | Local independent, Murcia | Colchón, sofá, tapicería | Prices "desde", **VAT excluded**: colchón cuna €30, 90 cm €50, 135/150/160 cm €100, 180–200 cm €120; sofá 1 pl €60, 2 pl €80, 3 pl €100, 4 pl €110; L 3 pl €120, L 4 pl €140, L 5 pl €160; U 6 pl €180 (a search snippet shows an older-looking list, 90 cm €40 … 180 cm €80; not used) | Travel charged outside Murcia capital, added to the quote; serves the region incl. Cartagena, Mar Menor, Mazarrón, Águilas | NOT FOUND | 4.9 (66) | States limits: no stain-removal guarantee on old stains or delicate fabrics; no method or machine named | Published, per size | FACT (1 source), provisional. [Colchones](https://www.limpiezalto.com/colchones), [sofás](https://www.limpiezalto.com/limpiezadesof%C3%A1s), [Maps](https://www.google.com/maps/search/LIMPIEZALTO+Murcia). Retrieved 2026-10. |
| **Brillamu** | Local cleaning company with upholstery line, C/ Plutón 3, 30010 Murcia | Sofá, sillón, silla, colchón | **VAT included**, "desde": sofá 2 pl €80, 3 pl €100, L / rinconera €110; sillón / butaca €40; silla tapizada €20; colchón €55 (no size) | Travel included in Murcia capital and pedanías / nearby towns (El Palmar, Alcantarilla, Puente Tocinos, Molina de Segura) | NOT FOUND | Listing found, no reviews | Kärcher injection-extraction + steam; 2–4 h drying; 24–48 h response | Published (sofá by plazas; colchón without size) | FACT (1 source), provisional. [Sofá page](https://brillamu.com/limpieza-de-sofas-a-domicilio-en-murcia/), [Maps](https://www.google.com/maps/search/Brillamu+Murcia). Retrieved 2026-10. |
| **Sercomanga** | Local general cleaning company (offices, communities) with upholstery line, Murcia | Sofá, chaise longue, colchón, boat upholstery, cortinas | **+21% VAT**: sofá 2 pl €60 tela / €75 piel, 3 pl €85 / €108; chaise small €108 / €130, medium €130 / €145, large €155 / €170; colchón 80/90/105 cm €36, 135 cm €50, 150 cm €60 | "Varies with travel distance"; Murcia and Cartagena | NOT FOUND | 4.8 (23) | No method named; multi-item discount | Published, per size | FACT (1 source), provisional. [Tapicerías page](https://sercomanga.es/limpieza-tapicerias/), [Maps](https://www.google.com/maps/search/servicio+de+limpieza+de+tapicer%C3%ADa+Murcia). Retrieved 2026-10. |
| **Biomex** | National chain; Murcia listed among service areas, no local base stated | Colchón, sofá, alfombra, impermeabilización | Colchón individual "desde €55", matrimonio "desde €65"; sofá cleaning price NOT FOUND (impermeabilización sofá "desde €45"); silla €12.50 read once as cleaning and once as impermeabilización, so not used | "Desplazamiento incluido"; travel fee charged on cancellation | NOT FOUND | No Murcia listing found | Post-service issue review ("analizamos la situación"); no certification | Partial | FACT (1 source), provisional. [Murcia page](https://www.biomex.es/es/limpieza-colchoes-murcia), [prices](https://www.biomex.es/es/limpieza-profunda-moquetas-sofas-tapizados), [Maps](https://www.google.com/maps/search/Biomex+Murcia). Retrieved 2026-10. |
| **Sofaclín** | National multi-city brand, templated city pages (`market-dossier.md` §2.1) | Sofá | Own Murcia page: no € figure (checked twice). A search snippet reads 2 pl €75, chaise €89, 3 pl €97, snippet only | No surcharge within the metropolitan area and main pedanías (districts named) | NOT FOUND | No Murcia listing; "Sofaclín Alicante" listing with the same phone has no reviews. Own page shows only 5-star testimonials; a snippet's "4.9 / 85" is unverified | Injection-extraction; 3–6 h drying; no address | Quote-only on own page | FACT (1 source), provisional. [Murcia page](https://sofaclin.es/limpieza-de-sofas-en-murcia/), [Maps](https://www.google.com/maps/search/Sofacl%C3%ADn+Murcia). Retrieved 2026-10. |
| **TapiClean Services Murcia** | Local independent upholstery specialist | Sofá, tapicería | NOT FOUND (website is an Instagram account) | NOT FOUND | NOT FOUND | 5.0 (37) | NOT FOUND | Quote-only | FACT (1 source), provisional. [Maps](https://www.google.com/maps/search/TapiClean+Services+Murcia). Retrieved 2026-10. |
| **FJ Limpieza Móvil** | Local independent, El Raal (Murcia pedanía) | Colchón, sofá, alfombra, tapicería | NOT FOUND | At-home; Murcia and Alicante; travel policy NOT FOUND | NOT FOUND | 5.0 (12) | Injection-extraction with neutral-pH enzymatic cleaners, "antiácaros" claim; mentions hostelería | Quote-only | FACT (1 source), provisional. [Site](https://fjlimpiezamovil.es/), [Maps](https://www.google.com/maps/search/servicio+de+limpieza+de+tapicer%C3%ADa+Murcia). Retrieved 2026-10. |
| **Limpieza de Tapicerías Amo** | Local independent, Molina de Segura | Sofá, sillón, colchón, alfombra, vehicle | NOT FOUND ("presupuesto sin compromiso") | Molina de Segura and surroundings; policy NOT FOUND | NOT FOUND | 5.0 (4) | Extraction + disinfection; **B2B named** (offices, hotels, casas rurales) | Quote-only | FACT (1 source), provisional. [Site](https://limpiezadetapiceriasamo.com/), [Maps](https://www.google.com/maps/search/Limpieza+de+Tapicer%C3%ADas+Amo+Molina+de+Segura). Retrieved 2026-10. |
| **LavaYa Tapizados** | Local independent upholstery specialist | Sofá, colchón, silla, car seats | "Desde": sofá €60, colchón €40, silla €10, car seat €60 (no size split) | Whole Región de Murcia (24 municipalities listed); no extra travel charge mentioned | NOT FOUND | 5.0 (3) | Injection-extraction, eco products; drying stated per piece (sofá 4–10 h, colchón 3–8 h) | Published "desde" only | FACT (1 source), provisional. [Site](https://lavayatapizados.es/), [Maps](https://www.google.com/maps/search/LavaYa+Tapizados). Retrieved 2026-10. |
| **Limpieza Villalba** | Local general cleaning company, Cartagena | Sofá, tapicería, colchón, alfombra | NOT FOUND ("presupuesto gratuito") | "Sin coste adicional por desplazamiento"; Cartagena, Campo de Cartagena, Región de Murcia, south Alicante coast | NOT FOUND | 4.9 (56); reviews read mostly concern home and post-works cleaning | Injection-extraction; 3-pl sofa 45–90 min | Quote-only | FACT (1 source), provisional. [Cartagena page](https://limpiezavillalba.es/limpieza-sofas-tapicerias-cartagena), [Maps](https://www.google.com/maps/search/Limpieza+Villalba+sof%C3%A1s+Cartagena). Retrieved 2026-10. |
| **Tapinet (Grupo TaPiNeT)** | National network of regional sites; Murcia listed | Sofá, sillón, colchón, moqueta | NOT FOUND (Murcia subpage 404) | NOT FOUND | NOT FOUND | NOT FOUND | Two-phase: turbine suction of mites and dust, then disinfectant foam; 1–2 h drying | Quote-only | FACT (1 source), provisional. [Site](https://www.tapinet.es/). Retrieved 2026-10. |
| **Hidrokleen** | Local independent, Murcia 30007 (Cronoshare profile; own site NOT FOUND) | Sofá, sillón, chaise, colchón, alfombra, boats | NOT FOUND | Murcia, Alicante, Almería (snippet of the profile) | NOT FOUND | Google NOT FOUND; Cronoshare 9.5 (4 reviews), 7 hires | NOT FOUND | Quote-only | FACT (1 source), provisional. [Cronoshare](https://www.cronoshare.com/servicios/limpieza-sofas-domicilio/murcia/murcia). Retrieved 2026-10. |
| **Limpiezas Murcia** (limpiezamurcia.pro) | Local general cleaning company, Av. Región de Murcia 92 | Tapizados, moqueta, plus industrial and end-of-works cleaning | NOT FOUND | Región de Murcia; policy NOT FOUND | NOT FOUND | NOT FOUND | Dry powder, injection-extraction, foam, steam; "resultados garantizados"; **B2B named** (empresas, instituciones, fleets) | Quote-only | FACT (1 source), provisional. [Page](https://www.limpiezamurcia.pro/limpieza-moqueta-tapizados). Retrieved 2026-10. |
| **EcoCleans** | National franchise (`market-dossier.md` §2.1); Murcia presence only through a 2022 advertorial | Sofá, colchón, alfombra, ozone | NOT FOUND (only "20% discount" promotions) | NOT FOUND | NOT FOUND | No Murcia listing searched out | Self-reported ISO / ITEL (dossier) | Quote-only | FACT (1 source), provisional, advertorial. [murcia.com, 14-Dec-2022](https://www.murcia.com/empresas/noticias/2022/12/14-limpieza-a-fondo-con-la-empresa-ecocleans.asp). Retrieved 2026-10. |
| **Limpromur** | Local general cleaning company, Av. General Primo de Rivera 13, Murcia | General cleaning; surfaced on the "limpieza de sofás Murcia" Maps query | Upholstery NOT FOUND; Cronoshare shows "desde 11 €/hora" general cleaning | NOT FOUND | NOT FOUND | 4.6 (333) | NOT FOUND | Quote-only for upholstery | FACT (1 source), provisional. [Maps](https://www.google.com/maps/search/limpieza+de+sof%C3%A1s+Murcia), [Cronoshare](https://www.cronoshare.com/servicios/limpieza-sofas-domicilio/murcia/murcia). Retrieved 2026-10. |
| **Grupo iClean** | Local general cleaning company, Patiño (Murcia pedanía) | Home-cleaning bonos, vehicle upholstery | Upholstery NOT FOUND; "Bono limpieza 01" €159.91 (8 h, home cleaning) | Bonos valid in the Murcia metropolitan area only | NOT FOUND | 4.3 (183) | NOT FOUND | Quote-only for upholstery | FACT (1 source), provisional. [Bono page](https://www.grupoiclean.es/bono/limpieza-hogar-01), [Maps](https://www.google.com/maps/search/limpieza+de+sof%C3%A1s+Murcia). Retrieved 2026-10. |
| **Limpiezas Hermanas** | Local cleaning provider, Lorquí (Cronoshare profile) | Listed in the Cronoshare mattress-cleaning category | NOT FOUND | NOT FOUND | NOT FOUND | Google NOT FOUND; Cronoshare 8.6 (18 reviews), 81 hires | NOT FOUND | Quote-only | FACT (1 source), provisional. [Cronoshare](https://www.cronoshare.com/servicios/limpieza-colchones/murcia/murcia). Retrieved 2026-10. |
| **Ofihogar Limpiezas** | Cleaning company, Redován (Alicante); snippet says it serves Alicante and Murcia | Sofá, colchón | NOT FOUND (site does not resolve: DNS failure) | NOT FOUND | NOT FOUND | NOT FOUND | NOT FOUND | NOT FOUND | Snippet only, not a FACT. Search result for limpiezasofihogarspain.com, 2026-10. |

Also seen and not profiled: "Limpieza a domicilio Murcia" (a WordPress site listing
upholstery among childcare, gardening and ironing, no prices); Limpiezas del Segura
(Molina, 4.3 (17)), Grupo Serclimp, Cleaniser and other Maps results that are general
cleaning firms with no upholstery page found.

**Correction carried to the record, not applied:** `granada-market.md` §3 types Happy
Clean as a Granada "local independent"; its own page gives a Torrevieja address and
three provinces. That file is out of scope here and is not edited.

### 4.3 Reading of the field — ANALYSIS

- **Transparency.** Criterion: a provider is "transparent" if its own page publishes at
  least one per-size price. 6 of 20 meet it (Clean-Home, Happy Clean, Limpiezalto,
  Brillamu, Sercomanga, Biomex); LavaYa publishes "desde" figures without sizes; 13 are
  quote-only or NOT FOUND. On the looser test of any published figure, the dossier
  counts Valencia 5 of 16 and Madrid's list shows 10 of 15 (`market-dossier.md` §2–§3).
- **Two of the six transparent price lists are multi-province.** Clean-Home's Murcia
  sofa list (2 pl €79, 3 pl €85, 4 pl €89) is the same list `granada-market.md` §3 read
  for Granada, and Happy Clean's sillón / silla / colchón "desde" figures are the same as
  in Granada. A Murcia-vs-Granada price comparison therefore partly compares a list with
  itself.
- **Trust signals.** No lab certification was found on any provider present in Murcia;
  the one AITEX claim of the national set (UrbanCleaner) has no Murcia presence found.
  B2B is named by three (Amo, Limpiezas Murcia, FJ Limpieza Móvil's "hostelería"), none
  with a dedicated B2B page or client list of the Superlimpia kind. Guarantees: Clean-Home
  (free return visit), Biomex (case review), Limpiezas Murcia ("resultados
  garantizados"); Limpiezalto states the opposite for old stains.
- **Method.** Injection-extraction is the stated norm (Clean-Home, Brillamu, Sofaclín,
  FJ, LavaYa, Villalba, Limpiezas Murcia), as in Madrid / Valencia. The nearest
  vacuum-led methods are Tapinet's turbine-suction phase and Happy Clean's "limpieza en
  seco"; no Hyla-based operator was found.
- **The premium + transparent lane is not empty in Murcia.** `market-dossier.md` §4.2
  read that lane as empty in Madrid / Valencia. In Murcia, Limpiezalto publishes the
  highest per-size list found (colchón 135–160 cm €100 + VAT, 3 pl sofá €100 + VAT) and
  holds 4.9 (66) on Maps. That is one local player, not a crowded tier; the
  "verified proof" opening (a lab report) stays unclaimed.
- **Reputation depth.** Criterion: a Murcia-present upholstery specialist with ≥30
  Google reviews on a local listing. Three meet it: Happy Clean 105 (Torrevieja listing),
  Limpiezalto 66, TapiClean 37. Clean-Home's 1,632 is one national listing. Review counts
  are small against Valencia's Clean-Home 1,300 / Centauro 160 (`market-dossier.md` §3.2).
- **Travel.** Free travel within the capital is the norm where stated; Limpiezalto
  charges outside the capital and Sercomanga prices by distance. No published minimum
  order apart from Clean-Home's one-mattress base, against Madrid's €60–70
  (`market-dossier.md` §2.1).

## 5. Local price map

Figures are the published per-piece prices of §4.2, one value per provider per size
bucket. Where a provider gives a range (Happy Clean) its low end is used; "desde" is
kept as published. VAT basis differs: Limpiezalto and Sercomanga publish ex-VAT,
Brillamu VAT-included, the rest do not say. The median uses published figures; a second
median adds 21% VAT to the two ex-VAT providers and treats the rest as VAT-included.
Medians only where n ≥ 3. Snippet-only figures (Sofaclín, Happy Clean sizes) are left
out. Madrid / Valencia from `market-dossier.md` §2.1 / §3.1; Granada from
`granada-market.md` §3–§4.

| Service | Murcia figures (provider: €) | n | Murcia range | Median, published / VAT-adjusted | Madrid range (cluster) | Valencia range (cluster) | Granada | Label |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Colchón individual (80–100 cm) | Sercomanga 36 +VAT; Limpiezalto 50 +VAT; Biomex 55; Clean-Home 59 (1 side) | 4 | €36–59 | €52.5 / €57.0 | €35–60 (€35–45) | €25–55 (€40–55) | "desde €45", no size (Happy Clean) | Range FACT (4 sources); medians ESTIMATE |
| Colchón matrimonio (135–150 cm; 150 cm bucket used) | Sercomanga 60 +VAT; Biomex 65; Clean-Home 69 (≤175 cm, 1 side); Limpiezalto 100 +VAT (135/150/160 cm) | 4 | €60–100 (135 cm: Sercomanga €50, Clean-Home €65) | €67 / €70.8 | €55–90 (€60–75) | €60–75 (€65) | Clean-Home add-on only, +€25 | Range FACT (4 sources); medians ESTIMATE |
| Colchón king (160–200 cm) | Clean-Home 69 (≤195 cm, 1 side); Limpiezalto 100 (160 cm) / 120 (180–200 cm) +VAT | 2 | €69–120 | n < 3, no median | €75–100 (€80–90) | €65–100 | Clean-Home add-on only, +€35 | FACT (1 source), provisional per provider; no median |
| Sofá 2 plazas | Sercomanga 60 +VAT; Happy Clean 70 (70–90); Clean-Home 79; Limpiezalto 80 +VAT; Brillamu 80 | 5 | €60–90 published (€70–96.8 VAT-adjusted) | €79 / €79 | €60–97 (€60–70) | €69–89 (€70–79) | €79 (Clean-Home) | Range FACT (5 sources); medians ESTIMATE |
| Sofá 3 plazas | Clean-Home 85; Sercomanga 85 +VAT; Happy Clean 100 (100–120); Limpiezalto 100 +VAT; Brillamu 100 | 5 | €85–120 published | €100 / €100 | €90–119 (€90) | €85–119 (€90) | €85 (Clean-Home) | Range FACT (5 sources); medians ESTIMATE |
| Chaise longue / L (entry configuration) | Clean-Home 89 (2+chaise); Sercomanga 108 +VAT (small); Happy Clean 110 (110–130); Brillamu 110; Limpiezalto 120 +VAT (L 3 pl) | 5 | €89–180 across all configurations (U 6 pl, Limpiezalto) | €110 / €110 | €120–175 | €89–190 | €89–99 (Clean-Home) | Range FACT (5 sources); medians ESTIMATE |
| Sillón / butaca | Happy Clean 30; Brillamu 40; Limpiezalto 60 +VAT ("sofá 1 plaza", read as sillón) | 3 | €30–60 | €40 / €40 | €42–50 (€50) | NOT FOUND in dossier | "desde €30" (Happy Clean) | Range FACT (3 sources); medians ESTIMATE |
| Silla | Happy Clean 5; LavaYa 10; Brillamu 20 | 3 | €5–20 | €10 / €10 | NOT FOUND in dossier | NOT FOUND in dossier | "desde €5" (Happy Clean) | Range FACT (3 sources); medians ESTIMATE |

Per-cell sources are the §4.2 rows (URLs there, retrieved 2026-10). VAT-adjusted values:
Limpiezalto colchón 90 cm €60.50, 150 cm €121, sofá 2 pl €96.80, 3 pl €121, L 3 pl
€145.20, 1 pl €72.60; Sercomanga colchón 90 cm €43.56, 150 cm €72.60, sofá 2 pl €72.60,
3 pl €102.85, chaise small €130.68.

**Reading — ANALYSIS.**

- **Murcia is not a cheaper market on published prices.** Criterion: the Murcia median
  against the Madrid / Valencia cluster. Sofá 2 pl (€79) sits at the top of the Valencia
  cluster and above Madrid's; sofá 3 pl (€100) is above both clusters (€90); colchón
  individual (€52.5–57.0) is above Madrid's cluster and inside Valencia's; colchón
  matrimonio (€67–70.8) is inside both. Granada's single-chain read in
  `granada-market.md` §4 ("same band, mild downward lean") does not carry over.
- **The spread is set by two local lists.** Sercomanga sets most low ends and Limpiezalto
  most high ends; Clean-Home sits in the middle with the same list it uses in Granada and
  the Costa Blanca. A price set inside €79–100 for sofás and €55–70 for a mattress
  would sit in the published middle; this file does not choose prices.
- **King size and silla rest on thin data** (n = 2 and n = 3 with "desde" figures); they
  are not a basis for a parameter without a second read.
- **White space** (from §4.3): no lab-verified mite claim and no vacuum-led specialist in
  Murcia; transparent pricing exists, so transparency alone is not a differentiator here.

## 6. Demand signals and seasonality

### 6.1 Google Trends — regional index

Method of `trends-keywords-addendum.md` / `market-dossier.md` §5.4: Trends was opened in
the browser after loading the Trends home page first (session warming); the regional
values were read from the page's own data responses (`comparedgeo` widget), not from a
chart image. Query: "limpieza de colchones" and "limpieza de sofás" compared in one
request; geo Spain (`geo=ES`); "Últimos 5 años" (weekly, Oct-2021 to Oct-2026); all
categories; web search
([trends.google.es](https://trends.google.es/trends/explore?date=today%205-y&geo=ES&q=limpieza%20de%20colchones,limpieza%20de%20sof%C3%A1s&hl=es)).
Retrieved 2026-10-05. The index is relative: 100 is the region with the highest share of
searches for that term, every other region is scaled to it. It measures share of a
region's searches, not volume.

| Region | "limpieza de colchones" index | "limpieza de sofás" index | Split between the two terms (colchones / sofás) |
| --- | --- | --- | --- |
| **Región de Murcia** | **45** | **16** | 69% / 31% |
| Andalucía | 54 | 25 | 62% / 38% |
| Comunitat Valenciana | 45 | 41 | 51% / 49% |
| Comunidad de Madrid | 63 | 66 | 48% / 52% |
| Top region | Canarias 100 | Castilla-La Mancha 100 | — |

Label: every cell FACT (1 source), provisional — Google Trends, tool, geo and date as
above; retrieved 2026-10. The Madrid "limpieza de colchones" index (63) is the same
value `market-dossier.md` §5.4 read on 2026-07-07, a repeat read of the same tool, not a
second source.

Murcia-level read (`geo=ES-MC`, same terms, same window,
[trends.google.es](https://trends.google.es/trends/explore?date=today%205-y&geo=ES-MC&q=limpieza%20de%20colchones,limpieza%20de%20sof%C3%A1s&hl=es),
retrieved 2026-10-05): the time series averages 0 and 1 and every city, related-query and
sub-area panel reads "Tu búsqueda no tiene suficientes datos para mostrar resultados".
A Trends index for the Región de Murcia time series, for Murcia city, or for Murcia
related queries is therefore **NOT FOUND**: the volume is below Trends' threshold at that
geography.

Reading (ANALYSIS):

- On the mattress term, Murcia (45) is level with the Comunitat Valenciana and below
  Andalucía (54) and Madrid (63). On the sofa term it is among the lowest regions with
  data (16, against 25 / 41 / 66). In Murcia the mattress term takes 69% of the pair,
  the highest mattress share of the four regions compared.
- The values come in a few repeated steps (45 is shared by seven regions, 16 by five).
  Criterion: when many regions share an identical index, Trends is rounding a small
  sample; the regional ranking is coarse and the Murcia–Valencia tie on the mattress
  term is not a measured equality.

### 6.2 Seasonality (Trends, Spain)

Same two terms, geo Spain, "2004–presente" (monthly points), read from the page's
`multiline` data response
([trends.google.es](https://trends.google.es/trends/explore?date=all&geo=ES&q=limpieza%20de%20colchones,limpieza%20de%20sof%C3%A1s&hl=es));
retrieved 2026-10-05. The 60 monthly values Oct-2021 to Sep-2026 were averaged by
calendar month (ESTIMATE: mean of FACT (1 source), provisional values). The scale is
relative to the highest month of the pair since 2004, so the low absolute values (5–17)
are expected. Months Trends marks "no data" are left out of the mean, not counted as 0:
one for colchones (Apr-2025), ten for sofás.

| Month | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep | Oct | Nov | Dec |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| "limpieza de colchones", 5-year mean | 10.0 | 10.8 | 8.4 | 9.0 | 9.6 | 9.6 | 11.4 | 11.0 | **12.0** | 10.8 | 8.4 | **7.2** |
| "limpieza de sofás", 5-year mean | 8.2 | **10.8** | **6.0** | 6.6 | 6.7 | 7.2 | 7.8 | 9.3 | 9.5 | 7.3 | 9.0 | 6.8 |
| Months with data (colchones / sofás) | 5 / 5 | 5 / 4 | 5 / 5 | 4 / 5 | 5 / 3 | 5 / 5 | 5 / 4 | 5 / 4 | 5 / 4 | 5 / 4 | 5 / 3 | 5 / 4 |

A Murcia seasonal curve is **NOT FOUND** (below threshold, §6.1); the Spain curve is
carried as a proxy.

Reading (ANALYSIS): the mattress term has a mild late-summer high (Jul–Sep, 11.0–12.0)
and a December low (7.2); peak over trough ≈1.7×, on a low-volume series. The sofa term
is noisier (a sixth of its months have no data) with its highs in February and
August–September. This agrees with `market-dossier.md` §5.4 (no strong spring peak;
roughly year-round demand) and adds one thing: on five years of monthly means, the
mattress term's highest quarter is July–September, not spring.

### 6.3 Keyword volume and CPC

| Keyword | Monthly volume | CPC | Tool, geo filter, date | Label |
| --- | --- | --- | --- | --- |
| limpieza de sofas murcia | 70 | €3.04 | Ubersuggest, unregistered free search, language Spanish, location Spain (`locId=2724`); the tool flags the row "Outdated" ([app.neilpatel.com](https://app.neilpatel.com/en/ubersuggest/keyword_ideas?keyword=limpieza%20de%20sofas%20murcia&lang=es&locId=2724)); retrieved 2026-10-05 | FACT (1 source), provisional — a Murcia-named phrase in the Spain database, not a Murcia geo filter; the tool marks it outdated |
| limpieza de sofás en murcia / limpieza de sofas a domicilio en murcia / limpieza de sofa murcia | 0 each | €0 each | Same search, "Keyword ideas" rows | FACT (1 source), provisional — same caveats |
| Any core term with a Murcia **geo filter** (region or city) | **NOT FOUND** | **NOT FOUND** | Ahrefs Free Keyword Generator (Spain) stopped at a Cloudflare "Verifique que es un ser humano" check, not bypassed; Ubersuggest allows one unregistered search, used above; Google and Microsoft keyword planners are account-walled (`trends-keywords-addendum.md` §5) | NOT FOUND |

National band carried by reference: CPC ≈€1.0–3.0 per click, central ≈€1.5–2.0, ESTIMATE
(`market-dossier.md` §6.1); volume bands for the core terms `>100` / `<100` per month in
Spain, FACT (displayed band) (`trends-keywords-addendum.md` §4).

Reading (ANALYSIS): the one Murcia-named figure (€3.04) sits at the top of the national
CPC band, and 70 searches a month for the phrase is small; both rest on one row the tool
itself marks outdated. They are not a basis for a Murcia CPC parameter; the national
band stays the planning input until a live campaign measures it.

### 6.4 Climate inputs

AEMET standard climatological values, station Murcia (index 7178I, 62 m, 38°0'7" N
1°10'15" W), period 1984–2010 — the period AEMET publishes for this station, not a
1991–2020 normal
([aemet.es](https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?l=7178I&k=mur));
retrieved 2026-10. Every value FACT (1 source), provisional — AEMET.

| Month | Mean temp. °C | Mean daily max. °C | Mean daily min. °C | Rainfall mm | Relative humidity % | Days with rain ≥1 mm | Sunshine h |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jan | 10.6 | 16.6 | 4.7 | 27 | 65 | 3.8 | 189 |
| Feb | 12.2 | 18.4 | 5.9 | 27 | 63 | 3.6 | 190 |
| Mar | 14.3 | 20.9 | 7.7 | 30 | 59 | 3.3 | 223 |
| Apr | 16.5 | 23.3 | 9.7 | 25 | 53 | 3.6 | 256 |
| May | 20.0 | 26.6 | 13.3 | 28 | 52 | 3.9 | 289 |
| Jun | 24.2 | 31.0 | 17.4 | 18 | 49 | 2.0 | 323 |
| Jul | 27.2 | 34.0 | 20.3 | 3 | 50 | 0.6 | 353 |
| Aug | 27.6 | 34.2 | 20.9 | 8 | 54 | 1.0 | 316 |
| Sep | 24.2 | 30.4 | 18.0 | 32 | 59 | 3.0 | 239 |
| Oct | 19.8 | 25.6 | 13.9 | 36 | 64 | 3.7 | 217 |
| Nov | 14.6 | 20.3 | 8.9 | 32 | 65 | 4.1 | 186 |
| Dec | 11.5 | 17.2 | 5.8 | 29 | 68 | 3.9 | 172 |
| **Year** | **18.6** | **24.9** | **12.3** | **297** | **58** | **36.5** | **2,967** |

Cross-check, different station (different geography, does not upgrade the label):
AEMET Alcantarilla Base Aérea (7228, 75 m, 1981–2010,
[aemet.es](https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?l=7228&k=mur);
retrieved 2026-10) reads within 0.5 °C on every monthly mean temperature, within 2 points
on humidity (49–67%) and 35.0 rain days a year against 36.5.

Reading against drying time and seasonality (ANALYSIS):

- **Drying.** Criterion: drying is fastest when air is warm and relative humidity is
  low. Murcia's least favourable month (December: 17.2 °C mean max, 68% humidity) is
  still mild and moderately humid; June–August (31–34 °C max, 49–54%) are the most
  favourable. The drying times local providers publish (Brillamu 2–4 h; LavaYa sofá
  4–10 h, colchón 3–8 h; §4.2) are not broken down by season, so the size of the
  winter penalty is NOT FOUND; this file does not estimate it.
- **Rain is not a constraint.** 36.5 days a year with ≥1 mm, at most 4.1 in any month
  (November), i.e. about one day in seven in the wettest month and fewer than one in
  thirty in July.
- **Summer.** The climate favours summer work for drying, and the mattress search high
  (§6.2) falls in July–September. Against it: 34 °C mean daily maxima in July–August
  bear on the operator's working day (physical work, car loading at midday). The
  August holiday effect on bookings in Murcia is a HYPOTHESIS, untested here.

## 7. B2B pool and local acquisition channels

### 7.1 Tourist dwellings (viviendas de uso turístico)

INE, *Medición del número de viviendas turísticas en España y su capacidad*
(experimental statistic built from listings on the three largest platforms), table 39363,
municipalities, latest reference **May 2026**
([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=39363),
[API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/39363?nult=1)); retrieved
2026-10. Every row FACT (1 source), provisional — INE. Region of Murcia total: 6,382
dwellings, 32,966 plazas (same table).

| Municipality | Ring | Tourist dwellings | Plazas |
| --- | --- | --- | --- |
| Murcia | core + pedanías | **777** | 3,690 |
| Alcantarilla | inner belt | 12 | 71 |
| Molina de Segura | inner belt | 27 | 154 |
| Las Torres de Cotillas | inner belt | 4 | 29 |
| Santomera | inner belt | 4 | 24 |
| Beniel | inner belt | 0 | 0 |
| Alguazas | inner belt | 0 | 0 |
| Ceutí | inner belt | 8 | 24 |
| Lorquí | inner belt | 2 | 20 |
| Archena | inner belt | 23 | 108 |
| Orihuela (Alicante) | outer ring | 2,090 | 10,674 |
| Cartagena | outer ring | 1,307 | 6,961 |
| Torre-Pacheco | outer ring | 681 | 3,379 |
| San Javier | outer ring | 940 | 4,778 |
| San Pedro del Pinatar | outer ring | 436 | 2,276 |
| Los Alcázares | outer ring | 492 | 2,480 |
| Torrevieja (Alicante) | outer ring | 3,887 | 17,195 |
| Lorca | outer ring | 67 | 373 |
| Cieza | outer ring | 10 | 61 |

Cross-check, **different measurement and date** (does not upgrade the label): the
regional tourism register (Instituto de Turismo de la Región de Murcia, *Registro de
Empresas y Actividades Turísticas*) as published by CREM, *Turismo. Datos municipales*,
table 6, year 2024
([econet.carm.es](https://econet.carm.es/inicio/-/crem/sicrem/PM12/sec10.html);
retrieved 2026-10): Murcia 608 registered dwellings / 2,931 plazas; Cartagena 1,066 /
5,869; San Javier 940 / 4,779; Torre-Pacheco 677 / 3,215; Los Alcázares 360 / 1,763;
San Pedro del Pinatar 254 / 1,302; Molina de Segura 6 / 31. The INE figure counts
platform listings in 2026, the register counts licensed dwellings in 2024; they are
kept apart and not averaged. Read in a browser; a second CREM page in the same session
returned a bot-check (Radware) page and was not read further.

### 7.2 Hotels, tourist apartments and student residences

| Figure | Value | Label | Source |
| --- | --- | --- | --- |
| Hotel establishments open, Murcia (tourist point), Aug-2026 | **32** establishments, 2,488 rooms, 4,781 plazas | FACT (1 source), provisional | INE *Encuesta de Ocupación Hotelera*, table 2076, tourist points ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=2076), [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2076?nult=12)). Retrieved 2026-10. |
| Same, Cartagena, Aug-2026 | **25** establishments, 2,806 rooms, 6,186 plazas (Jan-2026: 17 / 1,388 / 3,012) | FACT (1 source), provisional | Same table. Retrieved 2026-10. |
| Same, Torrevieja, Oct-2025 (latest month published; later months are blank in the table) | 17 establishments, 930 rooms, 1,925 plazas | FACT (1 source), provisional | Same table. Retrieved 2026-10. |
| Hotel establishments in the belt towns and the other Mar Menor municipalities | **NOT FOUND** | NOT FOUND | INE publishes the survey by tourist point only for the points above; the CREM municipal hotel table was behind a bot-check page and was not read. |
| Tourist apartments (regulated, not VUT), Región de Murcia, Aug-2026 | 1,828 apartments, 7,873 plazas | FACT (1 source), provisional — region, not municipality | INE *Encuesta de Ocupación en Apartamentos Turísticos*, table 2072 ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2072?nult=1)). Retrieved 2026-10. |
| Student residences and colegios mayores, Murcia municipality | 10 listed; plazas stated for 7: Campus (Espinardo) 374, Colegio Mayor Azarbe 96, María Inmaculada 86, Hermanas Oblatas 82, JC1 70, San Pablo Apóstol 50, Residencia para Jóvenes (DG Juventud) 36; RUM, Plaza Mayor Home and Casa Emilio without a figure | FACT (1 source), provisional | Ayuntamiento de Murcia, Informajoven, *Alojamiento para estudiantes* ([informajoven.org](https://www.informajoven.org/info/educacion/B_18_11.asp)); page update date not shown. Retrieved 2026-10. |
| Student residences, Cartagena | Residencia Alberto Colao, 165 plazas | FACT (1 source), provisional | Same page. Retrieved 2026-10. |

The Hermanas Oblatas figure conflicts: 82 plazas on the Informajoven page, 165 on a
private residence directory seen in a search result (snippet only, not used). The
stated-plazas sum for the municipality is **794** (ESTIMATE: sum of the seven figures;
a floor, three residences have no figure).

### 7.3 B2B pool per radius

| Radius | Tourist dwellings (INE, May-2026) | Plazas in tourist dwellings | Hotels (INE EOH) | Student residence plazas |
| --- | --- | --- | --- | --- |
| R1 — urban core | Municipal 777, core share **NOT FOUND** (the INE section-level download was not read this pass) | NOT FOUND | NOT FOUND at core level (municipal 32) | NOT FOUND at core level; 4 of the 7 figured residences have core addresses (C/ Rambla, C/ Princesa, Plaza de la Universidad, C/ San Nicolás) |
| R2 — municipality + inner belt | 777 + 80 = **857** | 3,690 + 430 = **4,120** | 32 (Murcia only; belt NOT FOUND) | ≥794 (Murcia only) |
| R3 — outer ring | **9,910** | **48,177** | Cartagena 25, Torrevieja 17; others NOT FOUND | Cartagena 165 |

ESTIMATE: sums of the FACT (1 source), provisional rows of §7.1–7.2. 74% of R3's tourist
dwellings (7,284 of 9,910) are in Torrevieja, Orihuela and Cartagena.

Reading (ANALYSIS):

- The tourist-dwelling pool sits on the coast, not in the operating area. R2 holds
  ≈860 dwellings, R3 ≈9,900 — about 11.6× more — at 30–79 km (§1.7). The model's B2B line
  for Murcia is therefore a capital-city line (hotels, residences, the ≈780 Murcia
  dwellings) unless the operator runs batched coastal days.
- The coastal pool is seasonal: Cartagena's hotel plazas fall from 6,186 (Aug) to 3,012
  (Jan). That makes the off-season (Oct–May) the plausible window for deep-cleaning
  contracts with coastal properties, the reverse of the household curve in §6.2. This
  is a HYPOTHESIS, untested.
- No B2B € spend figure exists for Murcia; `market-dossier.md` §6.4 already records the
  national gap. Nothing here changes it.

### 7.4 Local acquisition channels

Each row says what the channel is and why it is plausible. Whether any of them produces
customers is **HYPOTHESIS** for every row: none has been tested.

| Channel | What it is | Why it is plausible | Evidence status |
| --- | --- | --- | --- |
| Onda Regional de Murcia / La 7 (RTRM) | Regional public radio and TV; sells advertising, with a 2025 Onda Regional tariff PDF and a contact for advertisers on its tariffs page | Region-wide reach, older audience overlaps the 45–64 target | Existence of an advertising offer FACT (1 source), provisional — [rtrm.es](https://www.rtrm.es/servlet/rtrm.servlets.ServletLink2?METHOD=tarifas.jsp&sit=c%2C4), retrieved 2026-10; tariff figures NOT FOUND (PDF not read) |
| La Verdad (Murcia) | Largest daily of the region (Vocento group), print and web | Local reach; display and advertorial formats | Advertising terms NOT FOUND on a primary page; a search summary quoted a CPM and a minimum spend without a readable source, not used |
| murcia.com | Regional news / business portal publishing paid company pieces | A national franchise (EcoCleans) used it for a 2022 advertorial (§4.2), so the format exists and is used by the category | FACT (1 source), provisional — the advertorial itself ([murcia.com](https://www.murcia.com/empresas/noticias/2022/12/14-limpieza-a-fondo-con-la-empresa-ecocleans.asp)), retrieved 2026-10; prices NOT FOUND |
| Neighbourhood associations | The Ayuntamiento's register of citizen entities (Nov-2025 edition) lists 441 entities, of which 24 have "vecin-" in the name (ESTIMATE: name match on the PDF text), among them San Lorenzo-Universidad, Santa María de Gracia, El Carmen, El Palmar (Los Rosales), Espinardo, Beniaján, Algezares and Corvera; the Federación de Asociaciones Vecinales de Murcia (created May 2005) states 25 affiliated associations and ≈15 collaborating entities | Talks, stands at barrio events and association newsletters reach residents by barrio, including the premium cluster of §2.2 (Santa María de Gracia, El Carmen, San Lorenzo) | Register: FACT (1 source), provisional — [transparencia.mimurcia.murcia.es](https://transparencia.mimurcia.murcia.es/sites/default/files/2025-11/Registro%20de%20Entidades%20Ciudadanas_0.pdf), retrieved 2026-10. Federation counts: FACT (1 source), provisional — self-reported, [favmurcia.es](https://favmurcia.es/quienes-somos/), retrieved 2026-10 |
| Large local community groups (Facebook, WhatsApp, Telegram buy-sell and barrio groups) | Groups by town or pedanía | Word of mouth is the dominant channel for at-home services (`market-dossier.md` §6.4); the pedanía structure (59 units, §1.2) maps onto per-pedanía groups | Group names and member counts NOT FOUND (behind login, not read) |
| Marketplaces | Cronoshare and Habitissimo run Murcia categories for mattress and upholstery cleaning (§4.1) | Live paid-lead channel already used by local providers (Hidrokleen, Limpiezas Hermanas, §4.2) | Category existence FACT (1 source), provisional (§4.1 sources); lead prices NOT FOUND |

Reading (ANALYSIS): the cheapest channels to test first are the free or low-cost ones
that reach the premium cluster directly (neighbourhood associations in the old city,
community groups); paid regional media reach the whole region, most of which is outside
R2. This is an ordering for testing, not a channel decision.

## 8. Local operating costs, access rules and financing landscape

## 9. Headline parameter set, Granada deltas and gaps

## 10. Sources appendix
