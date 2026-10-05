class: medium

## git status --short -uall
```
 M business/research/murcia-market.md
 M specs/murcia-market/feature.md
 M specs/murcia-market/review/findings.md
?? .torq-flow/active
?? specs/murcia-market/review/T12/brief.md
?? specs/murcia-market/review/T12/report.md
?? specs/murcia-market/review/T7/brief.md
?? specs/murcia-market/review/T7/diff.md
?? specs/murcia-market/review/T7/report.md
?? specs/murcia-market/review/T7/verdict.md
```

## git diff HEAD
```diff
diff --git a/business/research/murcia-market.md b/business/research/murcia-market.md
index f51f6c3..833e182 100644
--- a/business/research/murcia-market.md
+++ b/business/research/murcia-market.md
@@ -31,10 +31,10 @@
 
 | Figure | Value | Label | Source |
 | --- | --- | --- | --- |
-| Population, 1-Jan-2025 (INE official figure, Padrón revision) | **479,405** | FACT | INE table 2883, read through the INE JSON API ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=2883), [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2883?nult=1)); same figure republished by CREM ([econet.carm.es](https://econet.carm.es/inicio/-/crem/sicrem/PU_datosBasicos/sec164.html)). Retrieved 2026-10. |
-| Population, 1-Jan-2025 (municipal Padrón exploitation) | 479,491 | FACT (2nd source) | Ayuntamiento de Murcia press release, 26-Jan-2026 ([web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000)). Retrieved 2026-10. |
+| Population, 1-Jan-2025 (INE official figure, Padrón revision) | **479,405** | FACT (1 source), provisional | INE table 2883, read through the INE JSON API ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=2883), [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2883?nult=1)); same figure republished by CREM ([econet.carm.es](https://econet.carm.es/inicio/-/crem/sicrem/PU_datosBasicos/sec164.html)). Retrieved 2026-10. |
+| Population, 1-Jan-2025 (municipal Padrón exploitation) | 479,491 | FACT (1 source), provisional — an agreeing publication of the same register, not a second source | Ayuntamiento de Murcia press release, 26-Jan-2026 ([web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000)). Retrieved 2026-10. |
 | Population, 1-Jan-2024 (municipal Padrón, trend check) | 474,834 | FACT (1 source), provisional | Ayuntamiento de Murcia / CARM, *Características sociodemográficas de las personas mayores del municipio de Murcia, año 2024*, p. 2 ([cendocps.carm.es](https://cendocps.carm.es/documentacion/2025_Sociodemografia_mayores_Murcia.pdf)). Retrieved 2026-10. |
-| **Verdict** | **≈479,400–479,500** | **Two publications of one register (agree within 86 people, 0.02%)** | — |
+| **Verdict** | **≈479,400–479,500** | **FACT (1 source), provisional — one register; the two rows agree within 86 people, 0.02%** | — |
 
 Both rows come from the same register (the Padrón): the INE figure is the official
 revision, the Ayuntamiento figure is its own exploitation of the file on the same date.
@@ -58,9 +58,9 @@ Largest pedanías and core barrios, 1-Jan-2025:
 
 | Unit | Type | Population | Label | Source |
 | --- | --- | --- | --- | --- |
-| El Palmar | pedanía | 25,339 | FACT (2 publications) | [web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000); [murciaplaza.com](https://murciaplaza.com/murciaplaza/murcia/murcia-roza-los-480000-habitantes-impulsada-por-el-crecimiento-de-las-pedanias-frente-al-estancamiento-del-centro). Retrieved 2026-10. |
-| Puente Tocinos | pedanía | 16,976 | FACT (2 publications) | same two. Retrieved 2026-10. |
-| Cabezo de Torres | pedanía | 14,350 | FACT (2 publications) | same two. Retrieved 2026-10. |
+| El Palmar | pedanía | 25,339 | FACT (1 source), provisional — the newspaper reports the Ayuntamiento's Padrón release, not a second source | [web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000); [murciaplaza.com](https://murciaplaza.com/murciaplaza/murcia/murcia-roza-los-480000-habitantes-impulsada-por-el-crecimiento-de-las-pedanias-frente-al-estancamiento-del-centro). Retrieved 2026-10. |
+| Puente Tocinos | pedanía | 16,976 | FACT (1 source), provisional — same | same two. Retrieved 2026-10. |
+| Cabezo de Torres | pedanía | 14,350 | FACT (1 source), provisional — same | same two. Retrieved 2026-10. |
 | La Alberca | pedanía | 13,263 | FACT (1 source), provisional | [web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000). Retrieved 2026-10. |
 | Espinardo | pedanía | 12,792 | FACT (1 source), provisional | same. Retrieved 2026-10. |
 | Sangonera la Verde | pedanía | 12,726 | FACT (1 source), provisional | same. Retrieved 2026-10. |
@@ -88,9 +88,12 @@ Plaza, same article).
 This closes the Granada pass's borrowed-divisor hole: the divisor is Murcia-measured
 (2.8), not Madrid's 2.41. It is larger than Granada's borrowed 2.4, so Murcia has
 **fewer households per inhabitant**; using 2.4 here would overstate the pool by
-≈28,500 households (≈17%). The regional 2.7 is the highest in Spain
-(FACT (1 source), provisional: the regional ranking in INE ECP table 60134,
-[ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=60134), retrieved 2026-10) and agrees in
+≈28,500 households (≈17%). The regional 2.7 is the highest of Spain's 50 provinces;
+only the autonomous cities are higher, Ceuta 3.07 and Melilla 3.13
+(FACT (1 source), provisional: INE ECP table 60134, which ranks provinces and the two
+autonomous cities, re-read 2026-10-05 through the
+[API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/60134?nult=1),
+[ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=60134), retrieved 2026-10). It agrees in
 direction; it is a different geography and is not averaged with the municipal 2.8.
 
 ADRH by census district, 2023 (INE census districts — **a different geographic unit
@@ -116,11 +119,11 @@ shows that household size runs 2.6–2.8 inside the municipality.
 
 | Figure | Value | Label | Source |
 | --- | --- | --- | --- |
-| Age 45–64, Murcia municipality, Padrón 1-Jan-2024 | 141,136 of 474,834 = **29.7%** | FACT | Ayuntamiento / CARM age pyramid, p. 2: 45–49 40,139; 50–54 36,925; 55–59 35,046; 60–64 29,026 ([cendocps.carm.es](https://cendocps.carm.es/documentacion/2025_Sociodemografia_mayores_Murcia.pdf)). Retrieved 2026-10. |
-| Age 45–64, Murcia municipality, Censo 2021 | 131,478 of 459,778 = 28.6% | FACT (2nd source) | INE Censo 2021, republished by telencuestas: 45–49 37,897; 50–54 35,994; 55–59 31,544; 60–64 26,043 ([telencuestas.com](https://telencuestas.com/censos-de-poblacion/espana/2021/region-de-murcia/murcia/murcia)). Retrieved 2026-10. |
+| Age 45–64, Murcia municipality, Padrón 1-Jan-2024 | 141,136 of 474,834 = **29.7%** | FACT (1 source), provisional | Ayuntamiento / CARM age pyramid, p. 2: 45–49 40,139; 50–54 36,925; 55–59 35,046; 60–64 29,026 ([cendocps.carm.es](https://cendocps.carm.es/documentacion/2025_Sociodemografia_mayores_Murcia.pdf)). Retrieved 2026-10. |
+| Age 45–64, Murcia municipality, Censo 2021 | 131,478 of 459,778 = 28.6% | FACT (1 source), provisional — consistency check: different date and operation, not a second source for the row above | INE Censo 2021, republished by telencuestas: 45–49 37,897; 50–54 35,994; 55–59 31,544; 60–64 26,043 ([telencuestas.com](https://telencuestas.com/censos-de-poblacion/espana/2021/region-de-murcia/murcia/murcia)). Retrieved 2026-10. |
 | Age 65+, municipality, 2023 | 16.7% | FACT (1 source), provisional | INE ADRH table 31123 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123)). Retrieved 2026-10. |
 | Mean age, municipality, 2023 | 41.3 | FACT (1 source), provisional | INE ADRH table 31123 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123)). Retrieved 2026-10. |
-| **Verdict** | **≈29–30% (use 29.7%)** | **Murcia-measured, two sources consistent (rise 2021→2024 matches the ageing of the 40–44 cohort)** | — |
+| **Verdict** | **≈29–30% (use 29.7%)** | **Murcia-measured, one source; the Censo 2021 row is a consistent check on another date (rise 2021→2024 matches the ageing of the 40–44 cohort)** | — |
 
 The share is measured for Murcia; the borrowed 29% of the Granada pass is not used.
 The age bands are five-year Padrón groups, so "45–65" here means ages 45 to 64, the
@@ -177,8 +180,9 @@ time. A measured typical (traffic) drive time is **NOT FOUND** for every row.
 | Lorca | outer ring | 98,969 | 3.0 | ≈33,000 | 78.7 | 66 |
 | Cieza | outer ring | 35,577 | 2.8 | ≈12,700 | 42.9 | 32 |
 
-Labels: population — Murcia municipality FACT (two publications of one register,
-§1.1); every other row FACT (1 source), provisional (INE only). Household size — every
+Labels: population — every row FACT (1 source), provisional (Murcia municipality: INE,
+with an agreeing Ayuntamiento publication of the same register, §1.1; every other row
+INE only). Household size — every
 row FACT (1 source), provisional (INE ADRH only). Households ESTIMATE (population ÷
 own household size); km and minutes ESTIMATE (routing engine, free-flow). Inside the
 municipality, the same method gives El Palmar 8.0 km / 8 min, Sangonera la Verde
@@ -192,7 +196,9 @@ their Padrón count measures registered residents, not occupied main dwellings,
 their small household sizes (2.4–2.7) and high one-person shares (Torrevieja 34.9%,
 Los Alcázares 30.6%; FACT (1 source), provisional, INE ADRH 2023 tables 30841
 [ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=30841) and 31123
-[ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123), retrieved 2026-10) point the same way. Their households are not directly comparable
+[ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123), retrieved 2026-10; both re-read
+2026-10-05 through the INE API, rows "Torrevieja. Porcentaje de hogares unipersonales"
+and "Alcázares, Los. Porcentaje de hogares unipersonales", year 2023) point the same way. Their households are not directly comparable
 with the inner belt's, and are kept apart.
 
 ### 1.7 Proposed service radii
@@ -584,7 +590,7 @@ column. People are not named; owner names shown on some pages are left out.
 | **Limpiezalto** | Local independent, Murcia | Colchón, sofá, tapicería | Prices "desde", **VAT excluded**: colchón cuna €30, 90 cm €50, 135/150/160 cm €100, 180–200 cm €120; sofá 1 pl €60, 2 pl €80, 3 pl €100, 4 pl €110; L 3 pl €120, L 4 pl €140, L 5 pl €160; U 6 pl €180 (a search snippet shows an older-looking list, 90 cm €40 … 180 cm €80; not used) | Travel charged outside Murcia capital, added to the quote; serves the region incl. Cartagena, Mar Menor, Mazarrón, Águilas | NOT FOUND | 4.9 (66) | States limits: no stain-removal guarantee on old stains or delicate fabrics; no method or machine named | Published, per size | FACT (1 source), provisional. [Colchones](https://www.limpiezalto.com/colchones), [sofás](https://www.limpiezalto.com/limpiezadesof%C3%A1s), [Maps](https://www.google.com/maps/search/LIMPIEZALTO+Murcia). Retrieved 2026-10. |
 | **Brillamu** | Local cleaning company with upholstery line, C/ Plutón 3, 30010 Murcia | Sofá, sillón, silla, colchón | **VAT included**, "desde": sofá 2 pl €80, 3 pl €100, L / rinconera €110; sillón / butaca €40; silla tapizada €20; colchón €55 (no size) | Travel included in Murcia capital and pedanías / nearby towns (El Palmar, Alcantarilla, Puente Tocinos, Molina de Segura) | NOT FOUND | Listing found, no reviews | Kärcher injection-extraction + steam; 2–4 h drying; 24–48 h response | Published (sofá by plazas; colchón without size) | FACT (1 source), provisional. [Sofá page](https://brillamu.com/limpieza-de-sofas-a-domicilio-en-murcia/), [Maps](https://www.google.com/maps/search/Brillamu+Murcia). Retrieved 2026-10. |
 | **Sercomanga** | Local general cleaning company (offices, communities) with upholstery line, Murcia | Sofá, chaise longue, colchón, boat upholstery, cortinas | **+21% VAT**: sofá 2 pl €60 tela / €75 piel, 3 pl €85 / €108; chaise small €108 / €130, medium €130 / €145, large €155 / €170; colchón 80/90/105 cm €36, 135 cm €50, 150 cm €60 | "Varies with travel distance"; Murcia and Cartagena | NOT FOUND | 4.8 (23) | No method named; multi-item discount | Published, per size | FACT (1 source), provisional. [Tapicerías page](https://sercomanga.es/limpieza-tapicerias/), [Maps](https://www.google.com/maps/search/servicio+de+limpieza+de+tapicer%C3%ADa+Murcia). Retrieved 2026-10. |
-| **Biomex** | National chain; Murcia listed among service areas, no local base stated | Colchón, sofá, alfombra, impermeabilización | Colchón individual "desde €55", matrimonio "desde €65"; sofá cleaning price NOT FOUND (impermeabilización sofá "desde €45"); silla €12.50 read once as cleaning and once as impermeabilización, so not used | "Desplazamiento incluido"; travel fee charged on cancellation | NOT FOUND | No Murcia listing found | Post-service issue review ("analizamos la situación"); no certification | Partial | FACT (1 source), provisional. [Murcia page](https://www.biomex.es/es/limpieza-colchoes-murcia), [prices](https://www.biomex.es/es/limpieza-profunda-moquetas-sofas-tapizados), [Maps](https://www.google.com/maps/search/Biomex+Murcia). Retrieved 2026-10. |
+| **Biomex** | National chain; Murcia listed among service areas, no local base stated | Colchón, sofá, alfombra, impermeabilización | Colchón individual "desde €55", matrimonio "desde €65", both read on the national prices page, not on the Murcia page; sofá cleaning price NOT FOUND (impermeabilización sofá "desde €45"); silla €12.50 read once as cleaning and once as impermeabilización, so not used | "Desplazamiento incluido"; travel fee charged on cancellation | NOT FOUND | No Murcia listing found | Post-service issue review ("analizamos la situación"); no certification | Partial | FACT (1 source), provisional. [Murcia page](https://www.biomex.es/es/limpieza-colchoes-murcia), [prices](https://www.biomex.es/es/limpieza-profunda-moquetas-sofas-tapizados), [Maps](https://www.google.com/maps/search/Biomex+Murcia). Retrieved 2026-10. |
 | **Sofaclín** | National multi-city brand, templated city pages (`market-dossier.md` §2.1) | Sofá | Own Murcia page: no € figure (checked twice). A search snippet reads 2 pl €75, chaise €89, 3 pl €97, snippet only | No surcharge within the metropolitan area and main pedanías (districts named) | NOT FOUND | No Murcia listing; "Sofaclín Alicante" listing with the same phone has no reviews. Own page shows only 5-star testimonials; a snippet's "4.9 / 85" is unverified | Injection-extraction; 3–6 h drying; no address | Quote-only on own page | FACT (1 source), provisional. [Murcia page](https://sofaclin.es/limpieza-de-sofas-en-murcia/), [Maps](https://www.google.com/maps/search/Sofacl%C3%ADn+Murcia). Retrieved 2026-10. |
 | **TapiClean Services Murcia** | Local independent upholstery specialist | Sofá, tapicería | NOT FOUND (website is an Instagram account) | NOT FOUND | NOT FOUND | 5.0 (37) | NOT FOUND | Quote-only | FACT (1 source), provisional. [Maps](https://www.google.com/maps/search/TapiClean+Services+Murcia). Retrieved 2026-10. |
 | **FJ Limpieza Móvil** | Local independent, El Raal (Murcia pedanía) | Colchón, sofá, alfombra, tapicería | NOT FOUND | At-home; Murcia and Alicante; travel policy NOT FOUND | NOT FOUND | 5.0 (12) | Injection-extraction with neutral-pH enzymatic cleaners, "antiácaros" claim; mentions hostelería | Quote-only | FACT (1 source), provisional. [Site](https://fjlimpiezamovil.es/), [Maps](https://www.google.com/maps/search/servicio+de+limpieza+de+tapicer%C3%ADa+Murcia). Retrieved 2026-10. |
@@ -687,9 +693,10 @@ Limpiezalto colchón 90 cm €60.50, 150 cm €121, sofá 2 pl €96.80, 3 pl 
   above; colchón matrimonio (€67 / €70.8) is inside Madrid's cluster (€60–75) and above
   Valencia's single-point cluster (€65). Granada's single-chain read in
   `granada-market.md` §4 ("same band, mild downward lean") does not carry over.
-- **The spread is set by two local lists.** Sercomanga sets most low ends and Limpiezalto
-  most high ends; Clean-Home sits in the middle with the same list it uses in Granada and
-  the Costa Blanca. This file does not choose prices.
+- **Who sets the range ends.** Counted on the eight rows: low ends Sercomanga 3 plus a
+  tie with Clean-Home (sofá 3 pl), Clean-Home 2, Happy Clean 2; high ends Limpiezalto 4,
+  Happy Clean 2, Clean-Home 1, Brillamu 1. No single list sets the spread. Clean-Home's
+  list is the same one it uses in Granada. This file does not choose prices.
 - **King size and silla rest on thin data** (n = 2 and n = 3 with "desde" figures); they
   are not a basis for a parameter without a second read.
 - **White space** (from §4.3): no lab-verified mite claim and no vacuum-led specialist
@@ -715,9 +722,8 @@ Provenance per column (re-read 2026-10-05): the two index columns are the per-te
 "Interés por subregión" widgets of the two-term request; two single-term requests
 (same geo and window) return the same values for the four regions and the same top
 regions. The split column is the request's "Desglose comparativo por subregión" widget,
-which gives each term's share of the pair inside each region; it is normalised per
-region, not computed from the two index columns, so the index ratio and the split do
-not match. Two reads of that widget returned the same values; three split cells of the
+which gives each term's share of the pair inside each region. The two widgets disagree
+on the within-region ratio of the two terms; the cause is not established. Two reads of that widget returned the same values; three split cells of the
 first transcription were corrected to them.
 
 Only the two core service terms were requested. The other seven core terms of
@@ -793,8 +799,9 @@ month-to-month differences are not read as a measured seasonal effect. This agre
 
 National band carried by reference: CPC ≈€1.0–3.0 per click, central ≈€1.5–2.0, ESTIMATE
 (`market-dossier.md` §6.1); volume bands for the core terms `>100` / `<100` per month in
-Spain (Ahrefs displayed bands, read 2026-07-07, carried by reference from
-`trends-keywords-addendum.md` §4 and not re-read here), with the addendum's unresolved
+Spain, FACT (1 source), provisional — Ahrefs displayed bands, per
+`trends-keywords-addendum.md` §4 (retrieved there 2026-07-07), carried by reference and
+not re-read here, with the addendum's unresolved
 conflict on "limpieza de sofás" carried with them: Ubersuggest 1.3K against Ahrefs
 `<100`, CONFLICTING, neither value used.
 
@@ -941,9 +948,7 @@ Reading (ANALYSIS):
   dwellings) unless the operator runs batched coastal days.
 - The coastal pool is seasonal: Cartagena's hotel plazas fall from 6,186 (Aug) to 3,012
   (Jan). That makes the off-season (Oct–May) the plausible window for deep-cleaning
-  contracts with coastal properties, the reverse of the household search curve in §6.2
-  (Spain proxy). This
-  is a HYPOTHESIS, untested.
+  contracts with coastal properties. This is a HYPOTHESIS, untested.
 - No B2B € spend figure exists for Murcia; `market-dossier.md` §6.4 already records the
   national gap. Nothing here changes it.
 
@@ -959,7 +964,7 @@ customers is **HYPOTHESIS** for every row: none has been tested.
 | murcia.com | Regional news / business portal publishing paid company pieces | A national franchise (EcoCleans) used it for a 2022 advertorial (§4.2), so the format exists and is used by the category | FACT (1 source), provisional — the advertorial itself ([murcia.com](https://www.murcia.com/empresas/noticias/2022/12/14-limpieza-a-fondo-con-la-empresa-ecocleans.asp)), retrieved 2026-10; prices NOT FOUND |
 | Neighbourhood associations | The Ayuntamiento's register of citizen entities (Nov-2025 edition) lists 441 entities, of which 24 have "vecin-" in the name (ESTIMATE: name match on the PDF text), among them San Lorenzo-Universidad, Santa María de Gracia, El Carmen, El Palmar (Los Rosales), Espinardo, Beniaján, Algezares and Corvera; the Federación de Asociaciones Vecinales de Murcia (created May 2005) states 25 affiliated associations and ≈15 collaborating entities | Talks, stands at barrio events and association newsletters reach residents by barrio. Of the associations named here, San Lorenzo-Universidad sits in the centro zone, the one zone of §2.2's high-income cluster that clears the premium cut-off, and Santa María de Gracia in a zone below the cut-off whose southern edge clears it; an association for Vistalegre or La Flota is not among those named here | Register: FACT (1 source), provisional — [transparencia.mimurcia.murcia.es](https://transparencia.mimurcia.murcia.es/sites/default/files/2025-11/Registro%20de%20Entidades%20Ciudadanas_0.pdf), retrieved 2026-10. Federation counts: FACT (1 source), provisional — self-reported, [favmurcia.es](https://favmurcia.es/quienes-somos/), retrieved 2026-10 |
 | Large local community groups (Facebook, WhatsApp, Telegram buy-sell and barrio groups) | Groups by town or pedanía | Word of mouth is a dominant channel for at-home services (Spain proxy, MODERATE in `market-dossier.md` §6.4, from a home-repairs survey); the pedanía structure (59 units, §1.2) maps onto per-pedanía groups | Group names and member counts NOT FOUND (behind login, not read) |
-| Marketplaces | Cronoshare and Habitissimo run Murcia categories for mattress and upholstery cleaning (§4.1) | Live paid-lead channel already used by local providers (Hidrokleen, Limpiezas Hermanas, §4.2) | Cronoshare category existence FACT (1 source), provisional — [colchones](https://www.cronoshare.com/servicios/limpieza-colchones/murcia/murcia), [sofás](https://www.cronoshare.com/servicios/limpieza-sofas-domicilio/murcia/murcia), retrieved 2026-10; Habitissimo's page was read in §4.1 but its URL was not recorded, so it is not counted as FACT here; lead prices NOT FOUND |
+| Marketplaces | Cronoshare runs Murcia categories for mattress and sofa cleaning, Habitissimo a Murcia upholstery category (§4.1) | Live paid-lead channel already used by local providers (Hidrokleen, Limpiezas Hermanas, §4.2) | Cronoshare category existence FACT (1 source), provisional — [colchones](https://www.cronoshare.com/servicios/limpieza-colchones/murcia/murcia), [sofás](https://www.cronoshare.com/servicios/limpieza-sofas-domicilio/murcia/murcia), retrieved 2026-10; Habitissimo's page was read in §4.1 but its URL was not recorded, so it is not counted as FACT here; lead prices NOT FOUND |
 
 Reading (ANALYSIS): the cheapest channels to test first are the free or low-cost ones
 that reach the high-income cluster of §2.2 directly (the San Lorenzo-Universidad
@@ -996,7 +1001,7 @@ its region; whether the conditions above are met is not concluded here.
 | Figure | Value | Label | Source |
 | --- | --- | --- | --- |
 | ZBE ordinance in force, Murcia municipality | **NOT FOUND** — the Ayuntamiento's ordinance list carries a mobility ordinance (25-Apr-2024) and the parking ordinance (16-Jun-2025), no ZBE ordinance | NOT FOUND | Ayuntamiento de Murcia, *Ordenanzas municipales* ([web.murcia.es](https://web.murcia.es/institucional/ordenanzas)), read 2026-10-05. |
-| What the mobility ordinance says | Art. 7: the Ayuntamiento "implantará progresivamente zonas bajas emisiones conforme a la normativa vigente"; no perimeter, schedule or vehicle rule | FACT (1 source), provisional | *Ordenanza de movilidad*, BORM no. 95, 25-Apr-2024 ([web.murcia.es](https://web.murcia.es/sites/default/files/2025-02/aprobac-definitiva-ordenanza-movilidad-2025.pdf)). Retrieved 2026-10. |
+| What the mobility ordinance says | Art. 7: the Ayuntamiento "implantará progresivamente zonas bajas emisiones conforme a la normativa vigente"; no perimeter, schedule or vehicle rule | FACT (1 source), provisional | *Ordenanza de movilidad*, BORM no. 95, 25-Apr-2024 ([web.murcia.es](https://web.murcia.es/sites/default/files/2025-02/aprobac-definitiva-ordenanza-movilidad-2025.pdf)). Retrieved 2026-10. Re-read 2026-10-05: the linked PDF is itself BORM no. 95 of 25-Apr-2024, pp. 12423 ff. (definitive approval by the Pleno of 21-Mar-2024, after initial approval announced in BORM no. 266 of 17-Nov-2023); the "2025" in its folder and file name does not mark a later publication, since every page header of the PDF reads no. 95, 25-Apr-2024. The Ayuntamiento's ordinance list links this PDF under the 25-Apr-2024 date and lists no later mobility ordinance. |
 | Technical project | Junta de Gobierno Local, 30-Dec-2025, item 9: approves the "Proyecto técnico para la implementación de una Zona de Bajas Emisiones (ZBE) en el municipio de Murcia", drafted by a Universidad Politécnica de Cartagena R&D group (expte. 2025/035/002293) | FACT (1 source), provisional | Extract of the session ([web.murcia.es](https://web.murcia.es/sites/default/files/2026-01/extracto_jgl_30xii2025.pdf)). Retrieved 2026-10. |
 | Status cross-check, earlier date (does not upgrade any label) | Defensor del Pueblo resolution of 3-Dec-2024: no ZBE approved in Murcia; the Ayuntamiento had not answered the Defensor's request | FACT (1 source), provisional | [defensordelpueblo.es](https://www.defensordelpueblo.es/resoluciones/declaracion-de-zonas-de-bajas-emisiones-en-murcia/). Retrieved 2026-10. |
 | Perimeter | **NOT FOUND** — the technical project document was not found published; press guesses (centre, El Carmen, Infante, from 2023) are not used | NOT FOUND | — |
@@ -1019,16 +1024,17 @@ same ordinance, not a second source.
 | Hours | Mon–Sat 9:00–14:00 and Mon–Fri 16:30–20:30; not applied on Sundays and holidays, Holy Saturday, the afternoons of 24 and 31 Dec, Saturdays in July and the whole of August (art. 7) | FACT (1 source), provisional | BORM 16-Jun-2025, link above. Retrieved 2026-10. |
 | Where | Sector A ("muy alta rotación"): the historic centre inside a polygon including Av. Primo de Rivera, Ronda de Levante, Paseo Garay, Paseo Marqués de Corvera, C/ Floridablanca and Plano de San Francisco. Sector B: from there out to a polygon including Ronda Norte, Av. Juan de Borbón, Av. de la Fama and Av. Ciudad de Almería. Sector C: out to a polygon including the A-30, Ronda Sur and Av. Juan Carlos I (Anexo I). The SER is implemented initially in Sectors A and B only | FACT (1 source), provisional | Same. Retrieved 2026-10. |
 | Zona azul, Sector A (max 90 min, no extension in the same area) | 30 min €0.30 · 60 min €1.15 · 90 min €1.90 | Base FACT (1 source), provisional; VAT-incl. ESTIMATE | Same, art. 29.1(a): base €0.2479 / €0.9504 / €1.5702. Retrieved 2026-10. |
-| Zona azul, Sector B (max 150 min) | 30 min €0.25 · 60 min €0.70 · 90 min €1.00 · 120 min €1.70 · 150 min €2.70 | Base FACT (1 source), provisional; VAT-incl. ESTIMATE | Same, art. 29.1(b). Retrieved 2026-10. |
+| Zona azul, Sector B (max 150 min) | 30 min €0.25 · 60 min €0.70 · 90 min €1.00 · 120 min €1.70 · 150 min €2.70 | Base FACT (1 source), provisional; VAT-incl. ESTIMATE | Same, art. 29.1(b): base €0.2066 / €0.5785 / €0.8264 / €1.4049 / €2.2314. Retrieved 2026-10. |
 | Zona azul, Sector C (max 300 min) | 300 min €3.00 | Base FACT (1 source), provisional; VAT-incl. ESTIMATE | Same, art. 29.1(c): base €2.4793. Retrieved 2026-10. |
-| Zona verde (Sectors B and C) | Morning €2.05 · afternoon €1.45 · full day €2.80 | Base FACT (1 source), provisional; VAT-incl. ESTIMATE | Same, art. 29.1(g). Retrieved 2026-10. |
-| "Empresas o autónomos" modality | Up to 5 h/day in any zone without the sector's maximum stay; per vehicle €250/year, €30/month, €7.50/week or €2.05/day; digital ticket only. Conditions: natural or legal person holding a business, domicilio fiscal in the municipality of Murcia, no debts with the local treasury, and a vehicle that is "vehículo industrial" of ≤3,500 kg MMA and ≤7 m (art. 23.4, art. 29.6) | Base FACT (1 source), provisional; VAT-incl. ESTIMATE | Same. Retrieved 2026-10. |
+| Zona verde (Sectors B and C) | Morning €2.05 · afternoon €1.45 · full day €2.80 | Base FACT (1 source), provisional; VAT-incl. ESTIMATE | Same, art. 29.1(g): base €1.6942 / €1.1984 / €2.3140. Retrieved 2026-10. |
+| "Empresas o autónomos" modality | Up to 5 h/day in any zone without the sector's maximum stay; per vehicle €250/year, €30/month, €7.50/week or €2.05/day; digital ticket only. Conditions: natural or legal person holding a business, domicilio fiscal in the municipality of Murcia, no debts with the local treasury, and a vehicle that is "vehículo industrial" of ≤3,500 kg MMA and ≤7 m (art. 23.4, art. 29.6) | Base FACT (1 source), provisional; VAT-incl. ESTIMATE | Same, art. 29.6: base €206.6116 / €24.7934 / €6.1983 / €1.6942. Retrieved 2026-10. |
 
 Reading (ANALYSIS): a job in Sector A during SER hours can be parked for at most 90
 minutes in one area (€1.90) and in Sector B for 150 minutes (€2.70); a job longer than
-that cannot be covered by one rotation ticket in the same area. Parking is a per-visit
-cost of €0 to €2.70 inside Sectors A–B during SER hours and €0 outside them, and it is
-not part of the model's travel input I6. Whether the operator's car is a "vehículo
+that cannot be covered by one rotation ticket in the same area. One zona azul ticket
+costs up to €1.90 in Sector A and up to €2.70 in Sector B during SER hours, and parking
+is free outside them; a job longer than one ticket costs more, and that cost is not
+computed here. Parking is not part of the model's travel input I6. Whether the operator's car is a "vehículo
 industrial" for the autónomo modality is not recorded in `founder-inputs.md` and is not
 concluded here.
 
@@ -1059,17 +1065,20 @@ at €0.175/km — an upper bound, since chaining two jobs in one day shares the
 | Destination | Ring | One-way km | Out-and-back km | At €0.175/km | At €0.26/km |
 | --- | --- | --- | --- | --- | --- |
 | El Palmar | R2 (pedanía) | 8.0 | 16.0 | €2.80 | €4.16 |
-| Alcantarilla | R2 (belt) | 8.7 | 17.4 | €3.04 | €4.52 |
+| Alcantarilla | R2 (belt) | 8.7 | 17.4 | €3.05 | €4.52 |
 | Molina de Segura | R2 (belt) | 12.5 | 25.0 | €4.38 | €6.50 |
 | Sangonera la Verde | R2 (pedanía) | 12.8 | 25.6 | €4.48 | €6.66 |
 | Las Torres de Cotillas / Beniel | R2 (belt) | 16.6 | 33.2 | €5.81 | €8.63 |
 | Ceutí | R2 (belt) | 20.4 | 40.8 | €7.14 | €10.61 |
-| Santomera | R2 (belt) | 20.5 | 41.0 | €7.17 | €10.66 |
-| Archena | R2 (belt) | 26.9 | 53.8 | €9.41 | €13.99 |
+| Santomera | R2 (belt) | 20.5 | 41.0 | €7.18 | €10.66 |
+| Archena | R2 (belt) | 26.9 | 53.8 | €9.42 | €13.99 |
 | Orihuela | R3 | 29.6 | 59.2 | €10.36 | €15.39 |
-| Cartagena | R3 | 48.7 | 97.4 | €17.04 | €25.32 |
+| Cartagena | R3 | 48.7 | 97.4 | €17.05 | €25.32 |
 | Torrevieja | R3 | 50.1 | 100.2 | €17.54 | €26.05 |
-| Lorca | R3 | 78.7 | 157.4 | €27.54 | €40.92 |
+| Lorca | R3 | 78.7 | 157.4 | €27.55 | €40.92 |
+
+Rounding: both cost columns are rounded to the cent, half up (17.4 × 0.175 = 3.045 →
+€3.05).
 
 The €0.26/km column is the IRPF tax-exempt mileage allowance for a private vehicle,
 Orden HFP/792/2023 ([boe.es](https://www.boe.es/buscar/doc.php?id=BOE-A-2023-16461));
@@ -1082,7 +1091,7 @@ Reading (ANALYSIS):
 
 - **€3.5 holds inside ≈10 km of the base.** At €0.175/km, €3.5 pays an out-and-back of
   20 km, i.e. a job up to 10 km away: the core, El Palmar and Alcantarilla fit; the
-  12–13 km pedanías and Molina de Segura cost €4.4–4.6; the outer belt towns (Ceutí,
+  12–13 km pedanías and Molina de Segura cost €4.4–4.6; the farther inner-belt towns (Ceutí,
   Santomera, Archena) €7.1–9.4.
 - **The model's 40 km/day is an R2 day with chaining**, not an out-and-back day: two
   separate out-and-backs to 12–13 km points already use ≈50 km. For an R2 base case
@@ -1090,8 +1099,8 @@ Reading (ANALYSIS):
   €0.175/km rate itself is the model's own figure and is not re-derived here.
 - **R3 costs €10–28 per visit out-and-back**, three to eight times I6, which is the cost
   side of §1.7's "batched days or surcharge" reading.
-- Parking (§8.3, €0–2.70 per visit in Sectors A–B during SER hours) is a separate cost
-  the model does not carry.
+- Parking (§8.3, up to €2.70 per zona azul ticket in Sectors A–B during SER hours) is a
+  separate cost the model does not carry.
 
 ### 8.6 Financing landscape
 
@@ -1104,18 +1113,247 @@ are as published; whether the founder meets them is not assessed.
 | **CIMM-Emprende 2026** (sub-line of ICREF) | Ayuntamiento de Murcia, with ICREF and Aválam | Bank loan, 100% Aválam guarantee, plus a subsidy | €15,000–30,000; subsidy up to €1,500 | For autónomos and pymes that are members of the CIMM (what membership requires: NOT FOUND); "tipos de interés bonificados" (rate not stated on the page); no opening or cancellation fees; allocation €300,000 in loans and €30,000 in subsidies; the subsidy covers costs such as the first two years' interest, notary fees or the guarantee fee; published 6-Apr-2026 | FACT (1 source), provisional — [web.murcia.es](https://web.murcia.es/noticia/autonomos-y-pymes-vinculados-al-cimm-podran-acceder-financiacion-de-hasta-30000-euros-con). Retrieved 2026-10. |
 | **Aválam SGR** (formerly UNDEMUR) | Regional mutual guarantee society, Banco de España supervised, re-guaranteed by CERSA | Guarantee before a bank | Amounts and guarantee fee **NOT FOUND** on the pages read | Viable project, up to date with public bodies, not in default registers; membership compulsory when the financing is signed, by at least one share of €300.51, refundable only after the guaranteed risk ends; project study free of charge; a project can be assessed before the alta as autónomo | FACT (1 source), provisional — [avalam.es](https://avalam.es/somos-avalam/), [FAQ](https://avalam.es/productos-y-servicios/preguntas-frecuentes/). Retrieved 2026-10. |
 | **ENISA Startups y pymes** (national reference) | ENISA | Participatory loan, no guarantees | €25,000–1,500,000 | Company "con personalidad jurídica propia" and domicilio fiscal in Spain, SME; natural persons are outside the condition; own funds at least equal to the loan; innovative business model; up to 7 years, up to 2 years' grace; real estate and finance excluded | FACT (1 source), provisional — [enisa.es](https://www.enisa.es/servicios/financiacion/startups-y-pymes). Retrieved 2026-10. |
-| **ICO Empresas y Emprendedores 2026** (national reference) | Instituto de Crédito Oficial, through banks | Loan, leasing, renting or credit line | Up to 100% of the financing need | Autónomos and entrepreneurs included; investment and liquidity; 1–20 years, up to 3 years' grace on principal; fixed or variable rate plus the bank's margin; the bank takes the credit risk and decides; valid in 2026 | FACT (1 source), provisional — [ico.es](https://www.ico.es/en/ico-empresas-y-emprendedores). Retrieved 2026-10. |
+| **ICO Empresas y Emprendedores 2026** (national reference) | Instituto de Crédito Oficial, through banks | Loan, leasing, renting or credit line | Amount range **NOT FOUND** on the page read; it states financing of up to 100% of the need | Autónomos and entrepreneurs included; investment and liquidity; 1–20 years, up to 3 years' grace on principal; fixed or variable rate plus the bank's margin; the bank takes the credit risk and decides; valid in 2026 | FACT (1 source), provisional — [ico.es](https://www.ico.es/en/ico-empresas-y-emprendedores). Retrieved 2026-10. |
 | **MicroBank Microcrédito Negocios Convenio Entidades** | MicroBank | Microcredit | Up to €30,000 (natural persons), up to 100% of the project | Entrepreneurs, autónomos and microenterprises up to 9 employees and €2 M turnover; business plan and a viability report from a collaborating entity, both compulsory; up to 6 years, optional 6-month grace; fixed rate (figure not stated); no real guarantee | FACT (1 source), provisional — [microbank.com](https://www.microbank.com/es/productos/negocios-convenio.html). Retrieved 2026-10. |
 | **Cuota Cero Ampliada** | CARM, SEF | Non-repayable aid | €2,920 | See §8.1 | §8.1 |
 | INFO Murcia (Instituto de Fomento) — a line for a solo autónomo starting a service business | INFO | — | **NOT FOUND** | The open-calls list (read 2026-10-05) carries fairs, trade missions and vouchers for innovation, investment rounds and internationalisation, none aimed at starting a small service business; the FAIIP loan fund it lists excludes autónomos; its 2010 liquidity line for autónomos is closed. The *Incentivos Regionales* page on the CARM autónomos portal returned a bot-check page and was not read | NOT FOUND — [institutofomentomurcia.es](https://www.institutofomentomurcia.es/convocatorias-activas), read 2026-10-05 |
 | Cajamar — current entrepreneur or microcredit line | Cajamar Caja Rural | — | **NOT FOUND** | Only an expired 2018 conditions sheet was found on its site; no current line read | NOT FOUND |
 
-Reading (ANALYSIS): four of the instruments are written for autónomos at the small
-amounts a launch needs — ICO (bank decides), MicroBank (needs a collaborating entity's
+Reading (ANALYSIS): four of the instruments are open to autónomos — ICO (bank decides), MicroBank (needs a collaborating entity's
 report), ICREF Financia 100 (Aválam guarantee and its €300.51 share) and CIMM-Emprende
 (needs CIMM membership); ENISA is written for companies, not natural persons. This is
 a list for the bank dossier, not a choice of instrument.
 
 ## 9. Headline parameter set, Granada deltas and gaps
 
+### 9.1 Headline parameter set
+
+The load-bearing inputs for the model re-run, each traced to its section (shape of
+`granada-market.md` §7). The rows marked "Confirmed" in the last column were re-opened
+at their source on 2026-10-05 and the figure read again; the last column records the
+result. Exceptions, not re-opened: M21 and M22 (the €3.04 CPC and the 70 / month
+volume, FACT (1 source), provisional, come from the single §6.3 query the tool allows),
+and M14, M15, M27 (national figures reused by reference). Source URLs are in the row's
+section and in §10. ESTIMATE rows inherit the re-read of the FACT rows they are built
+from.
+
+| # | Input | Value | Section | Label | Second-source status | Re-opened at source, 2026-10-05 |
+| --- | --- | --- | --- | --- | --- | --- |
+| M1 | Population, Murcia municipality, 1-Jan-2025 | 479,405 | §1.1 | FACT (1 source), provisional | Ayuntamiento 479,491, same Padrón, an agreeing publication, not an independent measurement | Confirmed: INE table 2883 ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2883?nult=1)) reads 479,405; the Ayuntamiento release ([web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000)) reads 479,491. Retrieved 2026-10. |
+| M2 | Population, urban core (R1) | 138,997 | §1.2 | FACT (1 source), provisional | None | Confirmed: the Ayuntamiento release reads 138,997 (28.99%) and 340,494 in pedanías ([web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000)). Retrieved 2026-10. |
+| M3 | Population, inner belt (9 municipalities) | 225,409 | §1.6 | ESTIMATE — sum of FACT (1 source), provisional rows | None (INE only) | All nine rows confirmed in INE table 2883 ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2883?nult=1)); sum recomputed 225,409. Retrieved 2026-10. |
+| M4 | Population, R2 (municipality + inner belt) | 704,814 | §1.7 | ESTIMATE — M1 + M3 | — | Inherits M1, M3 |
+| M5 | Population, R3 (outer ring, 9 municipalities) | 666,428 | §1.7 | ESTIMATE — sum of FACT (1 source), provisional rows | None (INE only) | All nine rows confirmed in INE tables 2883 and 2856 ([API Alicante](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2856?nult=1)); sum recomputed 666,428. Retrieved 2026-10. |
+| M6 | Average household size, Murcia municipality, 2023 | 2.8 | §1.3 | FACT (1 source), provisional | Regional 2.7 (INE ECP 60134) is a different geography, consistency check only | Confirmed: INE ADRH table 31123 ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31123?nult=1)), row "Murcia. Tamaño medio del hogar", 2023, reads 2.8. Retrieved 2026-10. |
+| M7 | Households, Murcia municipality | ≈171,200 (≈168,200–174,300) | §1.3 | ESTIMATE — M1 ÷ M6; direct count NOT FOUND | — | Inherits M1, M6 |
+| M8 | Households, R1 / R2 / R3 | ≈49,600 / ≈250,700 / ≈248,500 | §1.7 | ESTIMATE — population ÷ own household size; R3 overstates main-dwelling households (coast) | — | Inherits M2–M6 and the §1.6 household-size rows |
+| M9 | Share aged 45–64, Murcia municipality, 1-Jan-2024 | 29.7% | §1.4 | FACT (1 source), provisional | Censo 2021 28.6% is a consistency check on another date and operation, not a second source | Confirmed: the Ayuntamiento / CARM report ([cendocps.carm.es](https://cendocps.carm.es/documentacion/2025_Sociodemografia_mayores_Murcia.pdf)), p. 2, Padrón 1-Jan-2024, reads 40,139 + 36,925 + 35,046 + 29,026 = 141,136 of 474,834. Retrieved 2026-10. |
+| M10 | Residents aged 45–64, R1 / R2 / R3 | ≈41,300 / ≈207,600 / ≈192,600 | §3.1 | ESTIMATE — share × population; R1 uses the municipal share as proxy | — | Inherits M2–M5, M9 |
+| M11 | Net income per household, Murcia, 2023 | €38,682 | §2.1 | FACT (1 source), provisional | AEAT IRPF is a different metric; it supports the per-person ordering only | Confirmed: INE ADRH table 31115 ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31115?nult=1)), row "Murcia. Dato base. Renta neta media por hogar", 2023, reads 38,682. Retrieved 2026-10. |
+| M12 | Net income per person, Murcia, 2023 | €13,906 | §2.1 | FACT (1 source), provisional | Same as M11 | Confirmed: same table, row "… Renta neta media por persona", reads 13,906. Retrieved 2026-10. |
+| M13 | High-income pool (census sections ≥1.5× own municipal mean per person) | ≈12,200 households (Murcia) + ≈1,560 (Molina de Segura) | §2.2 | ESTIMATE — sum over FACT (1 source), provisional section rows; 1.5× is a convention | — | Inherits the section rows of INE tables 31115 / 31123 (M11 re-read confirms the table returns the same 2023 series) |
+| M14 | Respiratory allergy rate; dust-mite sensitisation among the allergic | ~20%; up to 50% | §3.2 | Carried by reference (`market-dossier.md` §5.1) | Murcia-specific dust-mite figure NOT FOUND | Not re-opened: national rate reused by reference, as the Constraints set |
+| M15 | Households with ≥1 pet | 49% (ANFAAC anchor) | §3.3 | CONFLICTING (49% vs 61%), carried by reference (`market-dossier.md` §5.2) | Murcia household figure NOT FOUND | Not re-opened: national anchor reused by reference |
+| M16 | Competitors present in Murcia | 17 profiled, 6 with a published per-size price | §4.1, §4.3 | ESTIMATE — count of this sweep's rows; a lower bound, the field is not claimed exhausted | — | Inherits the §4.2 rows; the price rows behind M17–M20 were re-opened |
+| M17 | Sofá 2 plazas, Murcia median (range) | €79 (€60–90), n = 5 | §5 | Median ESTIMATE; range built from FACT (1 source), provisional rows | Five providers' own pages | Confirmed on each own page: Clean-Home €79 ([page](https://clean-home.es/es/servicio-de-limpieza-de-sofs-en-la-provincia-de-murcia-clean-home-es/)), Sercomanga €60 + VAT ([page](https://sercomanga.es/limpieza-tapicerias/)), Limpiezalto "desde €80", VAT excluded ([page](https://www.limpiezalto.com/limpiezadesof%C3%A1s)), Brillamu "desde €80", VAT included ([page](https://brillamu.com/limpieza-de-sofas-a-domicilio-en-murcia/)), Happy Clean €70–90 ([page](https://www.happyclean8.com/limpieza-de-sofas-a-domicilio-en-murcia)). Retrieved 2026-10. |
+| M18 | Sofá 3 plazas, Murcia median (range) | €100 (€85–120), n = 5 | §5 | Median ESTIMATE; range built from FACT (1 source), provisional rows | Five providers' own pages | Confirmed on the same five pages: Clean-Home €85, Sercomanga €85 + VAT, Limpiezalto "desde €100", Brillamu "desde €100", Happy Clean €100–120. Retrieved 2026-10. |
+| M19 | Colchón individual, Murcia median, published / VAT-adjusted | €52.5 / €57.0, n = 4 | §5 | Median ESTIMATE; inputs FACT (1 source), provisional rows | Four providers' own pages | Confirmed: Sercomanga €36 + VAT, Limpiezalto 90 cm "desde €50", VAT excluded ([page](https://www.limpiezalto.com/colchones)), Clean-Home individual ≤100 cm €59 one side ([page](https://clean-home.es/es/servicio-de-limpieza-de-colchon-en-la-provincia-de-murcia-clean-home-es/)); Biomex "desde €55" is on its prices page ([page](https://www.biomex.es/es/limpieza-profunda-moquetas-sofas-tapizados)), not on its Murcia page. Retrieved 2026-10. |
+| M20 | Colchón matrimonio, Murcia median, published / VAT-adjusted | €67 / €70.8, n = 4 | §5 | Median ESTIMATE; inputs FACT (1 source), provisional rows | Four providers' own pages | Confirmed: Sercomanga 150 cm €60 + VAT, Biomex "desde €65", Clean-Home ≤175 cm €69 one side, Limpiezalto 135/150/160 cm "desde €100", VAT excluded. Retrieved 2026-10. |
+| M21 | Google Ads CPC, Murcia geo filter | NOT FOUND; national band €1.0–3.0, central ≈€1.5–2.0 carried | §6.3 | NOT FOUND (Murcia); national band ESTIMATE (`market-dossier.md` §6.1) | One Murcia-named phrase, €3.04, FACT (1 source), provisional, in the Spain database and marked outdated by the tool | Not re-opened: the unregistered Ubersuggest search allows one query, used in §6.3; the Murcia figure is not a model input |
+| M22 | Keyword volume, Murcia geo filter | NOT FOUND | §6.3 | NOT FOUND | "limpieza de sofas murcia" 70 / month, same tool and caveats as M21 | Not re-opened (same reason as M21) |
+| M23 | Tourist dwellings, Murcia municipality / R2 / R3, May-2026 | 777 / 857 / 9,910 | §7.1, §7.3 | Murcia FACT (1 source), provisional; R2 and R3 ESTIMATE (sums) | Regional register (CREM, 2024) 608 in Murcia: different measurement and date, does not upgrade | Confirmed: INE table 39363 ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/39363?nult=1)), May-2026, Murcia 777 dwellings / 3,690 plazas, Cartagena 1,307, Torrevieja 3,887, region 6,382. Retrieved 2026-10. |
+| M24 | Hotel establishments open, Murcia, Aug-2026 | 32 (2,488 rooms, 4,781 plazas) | §7.2 | FACT (1 source), provisional | None | Confirmed: INE table 2076 ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2076?nult=3)), Aug-2026, reads 32 / 2,488 / 4,781. Retrieved 2026-10. |
+| M25 | Travel per visit, out-and-back at the model's €0.175/km | R2 points €2.80–9.42 (model I6 €3.5); R3 €10.36–27.55 | §8.5 | ESTIMATE — routing km × model rate | — | Inherits §1.6 routing (ESTIMATE, not a source) |
+| M26 | Fuel price, Murcia municipality, mean €/l | Gasolina 95 E5 1.795; Gasóleo A 1.888 | §8.4 | ESTIMATE — mean over FACT (1 source), provisional station prices | None | Confirmed: a later snapshot of the same service ([API](https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroCCAA/14), timestamp 05/10/2026 20:19:02) gives the same means, station counts (107 / 108) and ranges. A repeat read of one service, not a second source. Retrieved 2026-10. |
+| M27 | RETA cuota, first year | €80 / month (tarifa plana) | §8.1 | Carried by reference (`market-dossier.md` §9.1) | — | Not re-opened: national rule reused by reference |
+| M28 | Regional Cuota Cero Ampliada | €2,920, one payment; eligibility of a moved alta NOT FOUND | §8.1 | FACT (1 source), provisional | The CARM autónomos portal is the same body, not a second source | Confirmed: the CARM sede page ([sede.carm.es](https://sede.carm.es/web/pagina?IDCONTENIDO=4091&IDTIPO=240&RASTRO=c672%24m)) reads "2.920,00 €" and "Personas que causen alta inicial en RETA". No eligibility asserted. Retrieved 2026-10. |
+| M29 | Parking, one zona azul ticket, VAT included | up to €1.90 (Sector A, 90 min) / €2.70 (Sector B, 150 min) | §8.3 | Base FACT (1 source), provisional; VAT-included ESTIMATE | Concessionaire's page republishes the same ordinance | Confirmed: BORM no. 136, 16-Jun-2025 ([web.murcia.es](https://web.murcia.es/sites/default/files/2025-06/borm_orde_ser_estacionamientos.pdf)), art. 29.1(a) base €1.5702 and art. 29.1(b) base €2.2314 "más I.V.A.". Retrieved 2026-10. |
+
+Every re-opened FACT returned the figure already in the file, and no figure of §1–§8
+changed as a result of the re-read. The separate re-read of INE table 60134 (§1.3)
+corrected a ranking claim, not a figure: the regional 2.7 is the highest of the 50
+provinces, not of Spain, since Ceuta and Melilla are higher.
+
+### 9.2 Murcia vs Granada — parameter deltas
+
+One row per G-row of `granada-market.md` §7, so the model re-run is a parameter swap.
+Granada values are carried as that file states them; ratios are ESTIMATE.
+
+| G-row | Granada input (`granada-market.md` §7) | Granada value | Murcia counterpart | Murcia value | Delta | Note |
+| --- | --- | --- | --- | --- | --- | --- |
+| G1 | Capital population | ≈233,000–234,000 | M1 municipality | 479,405 | ≈2.05× (vs 233,975) | Murcia's municipality holds 59 pedanías; seven in ten residents live outside the core (§1.2) |
+| G2 | Cinturón metropolitano (32 municipios) | ≈324,700–325,000 | M3 inner belt (9 municipalities) | 225,409 | ≈0.69× | **Different definitions**: Granada's 32-municipality belt against the 9 towns the brief named; flagged, not a like-for-like ratio |
+| G3 | R1 + R2 reachable population | ≈559,000 | M4 R2 | 704,814 | ≈1.26× | Same caveat as G2 |
+| G4 | Households, capital (R1) | ≈93,000–100,000 (mid ≈97,000; ÷2.4, borrowed) | M8 R1 urban core / M7 municipality | ≈49,600 / ≈171,200 | ≈0.51× / ≈1.76× | Granada's R1 is the whole capital; Murcia's urban core is a quarter of its municipality. Murcia divisor 2.8 measured, Granada 2.4 borrowed |
+| G5 | Households, R2 combined | ≈233,000 | M8 R2 | ≈250,700 | ≈1.08× | Divisors differ as in G4 |
+| G6 | Net income per household | €36,821 | M11 | €38,682 | +5.1% | Per person the sign flips: €13,906 (M12) vs €16,024, −13.2% (§2.1) |
+| G7 | Sofá 3 pl (Clean-Home) | €85 | M18 Clean-Home / Murcia median | €85 / €100 | 0% / +17.6% | Clean-Home uses the same list in both cities (§4.3) |
+| G8 | Sofá 2 pl (Clean-Home) | €79 | M17 Clean-Home / Murcia median | €79 / €79 | 0% / 0% | Same list |
+| G9 | Mattress "desde" anchor (Happy Clean, no size) | €45 | M19 / M20 medians | €52.5 individual; €67 matrimonio | +16.7% / +48.9% against the €45 anchor | Murcia has per-size prices; Granada had none, so the delta compares a size median with a no-size "desde" figure |
+| G10 | Visible competitor count | 7 named, 2 with published prices | M16 | 17 profiled, 6 with per-size prices | +10 / +5 like-for-like | **Different criteria**: Granada's 2 include a no-size "desde" list (Happy Clean, G9); Murcia's 6 count only per-size lists. On Granada's criterion Murcia has 7 (adding LavaYa's "desde" figures, §4.3), so like-for-like is 7 vs 2. Murcia sweep deeper; neither field claimed exhausted |
+| G11 | Google Ads CPC, city-specific | NOT FOUND (national band) | M21 | NOT FOUND (national band) | none | Same national band carried in both |
+| G12 | Keyword search volume, city-specific | NOT FOUND | M22 | NOT FOUND | none | One Murcia-named phrase read (70 / month, outdated row), not a geo figure |
+| G13 | Allergy / pet segment sizing | national rates × Granada population | M10, M14, M15 × §1.7 radii | R2: ≈141,000 respiratory-allergic, ≤≈70,500 dust-mite sensitised, ≈122,800 pet-owning households (§3.4) | — | Same national rates, Murcia denominators; the delta is the denominator (G3 / G5) |
+
+### 9.3 Gaps and what closes them
+
+Ranked by how much each gap can move the model (shape of `market-dossier.md` §11). The
+ranking is ANALYSIS: an ordering by judgement, not computed by the model.
+
+1. **CPC, keyword volume and conversion for Murcia** (M21, M22; close rate already open
+   in `market-dossier.md` §11 item 5). Only national bands exist. Closes with Microsoft Advertising Keyword
+   Planner (account-walled) for volume and CPC, and the first live campaign for CPC,
+   conversion and close rate.
+2. **Which ring the model runs** — not a data gap but the largest swing in the table: R1
+   ≈49,600 households against R2 ≈250,700 (≈5×), and travel per visit €2.80–9.42 across
+   R2 (M25). Closes with the founder's operating-area decision; this file does not make it.
+3. **Typical (traffic) drive times and the real per-km cost** — every drive time is
+   free-flow (NOT FOUND with traffic, §1.6) and the car's consumption is a HYPOTHESIS
+   (§8.5). Moves I6 and the services that fit in a day. Closes with a week of logged
+   trips from the real base, or a routing service with traffic, plus the car's data in
+   `founder-inputs.md`.
+4. **Core-specific household size and 45–64 share** (M8 R1, M10 R1 use municipal
+   proxies). The district sizes run 2.6–2.8 (§1.3); applied to 138,997 that band gives R1
+   ≈49,600–53,500 households (HYPOTHESIS proxy, since the districts are not mapped to the
+   core). Closes by mapping INE census sections (§2.2
+   cartography) to the Ayuntamiento's 24-barrio core and summing ADRH 31123.
+5. **Direct household count** (M7 is population ÷ 2.8, band ±1.8%). Closes by reading
+   the CREM Censo 2021 household tables in a browser session (bot-check, §1.3).
+6. **Competitor field not exhausted** (M16): the Maps limited view caps each query at 8
+   results (§4.1). Moves the price medians only if an unseen provider publishes prices.
+   Closes with a full-view Maps sweep.
+7. **B2B spend and the core share of tourist dwellings** (M23; national gap in
+   `market-dossier.md` §11 item 4). Moves the B2B line, which is a capital-city line
+   unless coastal days are batched (§7.3). Closes with direct outreach and the INE
+   section-level download of table 39363's source.
+8. **Murcia-specific dust-mite and pet-ownership rates** (M14, M15 NOT FOUND). Moves
+   segment sizes, not the revenue line directly. Closes with Alergológica regional
+   tables or a regional pet-ownership survey, if either exists.
+9. **Cuota Cero applicability to a moved alta** (M28): €2,920 one-off. Closes with a
+   query by the founder to the SEF; this file does not conclude eligibility.
+10. **ZBE perimeter and rules** (§8.2): no ZBE in force in Murcia; Molina de Segura's is
+    in force with sanctions suspended until 3-Jan-2028. Moves nothing until Murcia
+    approves one. Closes by watching the BORM.
+11. **Madrid income CONFLICTING** (§2.1, €48,806 read vs €43,037 in
+    `market-dossier.md` §5.3). Affects the city comparison only, not the Murcia model.
+    Closes by tracing the §5.3 figure in that file's next pass.
+
 ## 10. Sources appendix
+
+By section; every URL was retrieved 2026-10. Sources re-opened for §9 on 2026-10-05 are
+marked (re-read).
+
+- **§1 Geography and population:** INE table 2883, Murcia municipalities
+  ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=2883),
+  [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2883?nult=1)) (re-read); INE
+  table 2856, Alicante municipalities
+  ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2856?nult=1)) (re-read); CREM
+  republication ([econet.carm.es](https://econet.carm.es/inicio/-/crem/sicrem/PU_datosBasicos/sec164.html));
+  Ayuntamiento de Murcia Padrón release, 26-Jan-2026
+  ([web.murcia.es](https://web.murcia.es/noticia/murcia-suma-mas-de-4600-nuevos-habitantes-al-padron-municipal-y-se-acerca-los-500000))
+  (re-read); Murcia Plaza, 26-Jan-2026
+  ([murciaplaza.com](https://murciaplaza.com/murciaplaza/murcia/murcia-roza-los-480000-habitantes-impulsada-por-el-crecimiento-de-las-pedanias-frente-al-estancamiento-del-centro));
+  Ayuntamiento / CARM, personas mayores 2024
+  ([cendocps.carm.es](https://cendocps.carm.es/documentacion/2025_Sociodemografia_mayores_Murcia.pdf))
+  (re-read); INE ADRH tables 31123
+  ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=31123)) (re-read) and 30841
+  ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=30841)) (re-read); INE ECP tables 60133
+  ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=60133)) and 60134
+  ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=60134)) (re-read); INE Censo 2021 via
+  telencuestas ([telencuestas.com](https://telencuestas.com/censos-de-poblacion/espana/2021/region-de-murcia/murcia/murcia));
+  COPE, 30-Jun-2023 ([cope.es](https://www.cope.es/actualidad/espana/noticias/cartagena-murcia-entre-las-ciudades-espanolas-mas-200000-habitantes-con-mas-viviendas-vacias-20230630_2790978));
+  OSRM ([router.project-osrm.org](https://router.project-osrm.org)) and Nominatim
+  ([nominatim.openstreetmap.org](https://nominatim.openstreetmap.org)).
+- **§2 Income and zones:** INE ADRH tables 31115
+  ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31115?nult=1)) (re-read),
+  31025 ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31025?nult=1)), 31250
+  ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/31250?nult=1)), 53689
+  ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/53689?nult=2)) (re-read,
+  national and regional rows); INE ADRH 2023 release
+  ([ine.es](https://www.ine.es/dyngs/Prensa/ADRH2023.htm)); AEAT IRPF by municipality 2023
+  ([sede.agenciatributaria.gob.es](https://sede.agenciatributaria.gob.es/AEAT/Contenidos_Comunes/La_Agencia_Tributaria/Estadisticas/Publicaciones/sites/irpfmunicipios/2023/jrubikf6b1df8fe9d9e1b349886f03cf541e3fd2e65dd05.html));
+  CREM AEAT republication ([econet.carm.es](https://econet.carm.es/inicio/-/crem/sicrem/PM2071/pdf/sec2.pdf));
+  INE census-section cartography
+  ([ine.es/geoserver](https://www.ine.es/geoserver/ogc/features/v1/collections/WMS_INE_SECCIONES_G01:Secciones_2023/items?f=application/json&filter-lang=cql-text&filter=CUMUN%3D%2730030%27%20AND%20TIPO%3D%27SECCIONADO%27&limit=1000)).
+- **§3 Segments:** INE Padrón tables 33854
+  ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/33854?nult=1)) and 33584
+  ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/33584?nult=1)); Salud a Diario,
+  4-Dec-2018 ([saludadiario.es](https://www.saludadiario.es/pacientes/la-alergia-a-los-acaros-aumenta-en-las-comunidades-autonomas-costeras/));
+  Servicio Murciano de Salud, 29-Oct-2013
+  ([murciasalud.es](https://www.murciasalud.es/-/un-23-por-ciento-de-los-murcianos-adultos-padecen-algun-tipo-de-alergia));
+  Gaig et al. 2004 ([revista.seaic.org](http://revista.seaic.org/abril2004/68.pdf)); REIAC
+  ([reiac.es](https://www.reiac.es/reiac-info-02.php?lang=ESP)); INE ECP table 56934
+  ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/56934?nult=10)); national rates
+  carried from `market-dossier.md` §5.1–§5.2.
+- **§4–§5 Competition and prices:** Clean-Home colchón
+  ([clean-home.es](https://clean-home.es/es/servicio-de-limpieza-de-colchon-en-la-provincia-de-murcia-clean-home-es/))
+  and sofá ([clean-home.es](https://clean-home.es/es/servicio-de-limpieza-de-sofs-en-la-provincia-de-murcia-clean-home-es/))
+  (both re-read); Happy Clean ([happyclean8.com](https://www.happyclean8.com/limpieza-de-sofas-a-domicilio-en-murcia))
+  (re-read); Limpiezalto colchones ([limpiezalto.com](https://www.limpiezalto.com/colchones))
+  and sofás ([limpiezalto.com](https://www.limpiezalto.com/limpiezadesof%C3%A1s)) (both
+  re-read); Brillamu ([brillamu.com](https://brillamu.com/limpieza-de-sofas-a-domicilio-en-murcia/))
+  (re-read); Sercomanga ([sercomanga.es](https://sercomanga.es/limpieza-tapicerias/))
+  (re-read); Biomex Murcia ([biomex.es](https://www.biomex.es/es/limpieza-colchoes-murcia))
+  and prices ([biomex.es](https://www.biomex.es/es/limpieza-profunda-moquetas-sofas-tapizados))
+  (both re-read); Sofaclín ([sofaclin.es](https://sofaclin.es/limpieza-de-sofas-en-murcia/));
+  FJ Limpieza Móvil ([fjlimpiezamovil.es](https://fjlimpiezamovil.es/)); Limpieza de
+  Tapicerías Amo ([limpiezadetapiceriasamo.com](https://limpiezadetapiceriasamo.com/)); LavaYa
+  ([lavayatapizados.es](https://lavayatapizados.es/)); Limpieza Villalba
+  ([limpiezavillalba.es](https://limpiezavillalba.es/limpieza-sofas-tapicerias-cartagena));
+  Tapinet ([tapinet.es](https://www.tapinet.es/)); Limpiezas Murcia
+  ([limpiezamurcia.pro](https://www.limpiezamurcia.pro/limpieza-moqueta-tapizados)); Grupo
+  iClean ([grupoiclean.es](https://www.grupoiclean.es/bono/limpieza-hogar-01)); EcoCleans
+  advertorial ([murcia.com](https://www.murcia.com/empresas/noticias/2022/12/14-limpieza-a-fondo-con-la-empresa-ecocleans.asp));
+  UrbanCleaner ([urbancleaner.es](https://www.urbancleaner.es/)); Cronoshare colchones
+  ([cronoshare.com](https://www.cronoshare.com/servicios/limpieza-colchones/murcia/murcia))
+  and sofás ([cronoshare.com](https://www.cronoshare.com/servicios/limpieza-sofas-domicilio/murcia/murcia));
+  Google Maps listings as linked in each §4.2 row; Madrid / Valencia / Granada clusters
+  from `market-dossier.md` §2–§3 and `granada-market.md` §3–§4.
+- **§6 Demand and climate:** Google Trends, geo ES
+  ([trends.google.es](https://trends.google.es/trends/explore?date=today%205-y&geo=ES&q=limpieza%20de%20colchones,limpieza%20de%20sof%C3%A1s&hl=es)),
+  geo ES-MC ([trends.google.es](https://trends.google.es/trends/explore?date=today%205-y&geo=ES-MC&q=limpieza%20de%20colchones,limpieza%20de%20sof%C3%A1s&hl=es))
+  and 2004–present ([trends.google.es](https://trends.google.es/trends/explore?date=all&geo=ES&q=limpieza%20de%20colchones,limpieza%20de%20sof%C3%A1s&hl=es));
+  Ubersuggest ([app.neilpatel.com](https://app.neilpatel.com/en/ubersuggest/keyword_ideas?keyword=limpieza%20de%20sofas%20murcia&lang=es&locId=2724));
+  AEMET Murcia 7178I
+  ([aemet.es](https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?l=7178I&k=mur))
+  and Alcantarilla 7228
+  ([aemet.es](https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?l=7228&k=mur));
+  carried from `market-dossier.md` §5.4, §6.1 and `trends-keywords-addendum.md` §4.
+- **§7 B2B and channels:** INE table 39363
+  ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=39363),
+  [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/39363?nult=1)) (re-read); CREM
+  tourism register ([econet.carm.es](https://econet.carm.es/inicio/-/crem/sicrem/PM12/sec10.html));
+  INE EOH table 2076 ([ine.es](https://www.ine.es/jaxiT3/Tabla.htm?t=2076),
+  [API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2076?nult=12)) (re-read); INE EOAT
+  table 2072 ([API](https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/2072?nult=1));
+  Informajoven ([informajoven.org](https://www.informajoven.org/info/educacion/B_18_11.asp));
+  RTRM tariffs ([rtrm.es](https://www.rtrm.es/servlet/rtrm.servlets.ServletLink2?METHOD=tarifas.jsp&sit=c%2C4));
+  register of citizen entities
+  ([transparencia.mimurcia.murcia.es](https://transparencia.mimurcia.murcia.es/sites/default/files/2025-11/Registro%20de%20Entidades%20Ciudadanas_0.pdf));
+  FAV Murcia ([favmurcia.es](https://favmurcia.es/quienes-somos/)).
+- **§8 Costs, rules and financing:** CARM Cuota Cero Ampliada
+  ([sede.carm.es](https://sede.carm.es/web/pagina?IDCONTENIDO=4091&IDTIPO=240&RASTRO=c672%24m))
+  (re-read) and autónomos portal ([autonomos.carm.es](https://autonomos.carm.es/-/01-03-cuota-cero-ampliada));
+  Ayuntamiento ordinance list ([web.murcia.es](https://web.murcia.es/institucional/ordenanzas))
+  (re-read); mobility ordinance, BORM no. 95, 25-Apr-2024
+  ([web.murcia.es](https://web.murcia.es/sites/default/files/2025-02/aprobac-definitiva-ordenanza-movilidad-2025.pdf))
+  (re-read); Junta de Gobierno Local, 30-Dec-2025
+  ([web.murcia.es](https://web.murcia.es/sites/default/files/2026-01/extracto_jgl_30xii2025.pdf));
+  Defensor del Pueblo ([defensordelpueblo.es](https://www.defensordelpueblo.es/resoluciones/declaracion-de-zonas-de-bajas-emisiones-en-murcia/));
+  Molina de Segura ZBE ([movilidad.molinadesegura.es](https://movilidad.molinadesegura.es/zona-de-bajas-emisiones/));
+  SER ordinance, BORM no. 136, 16-Jun-2025
+  ([web.murcia.es](https://web.murcia.es/sites/default/files/2025-06/borm_orde_ser_estacionamientos.pdf))
+  (re-read) and concessionaire ([aparcamurcia.com](https://aparcamurcia.com/adios-ora-hola-ser/));
+  Geoportal de Gasolineras
+  ([sedeaplicaciones.minetur.gob.es](https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroCCAA/14))
+  (re-read); Orden HFP/792/2023 ([boe.es](https://www.boe.es/buscar/doc.php?id=BOE-A-2023-16461));
+  ICREF ([icref.carm.es](https://icref.carm.es/jsp/linea-autonomos.jsp)); CIMM-Emprende
+  ([web.murcia.es](https://web.murcia.es/noticia/autonomos-y-pymes-vinculados-al-cimm-podran-acceder-financiacion-de-hasta-30000-euros-con));
+  Aválam ([avalam.es](https://avalam.es/somos-avalam/),
+  [FAQ](https://avalam.es/productos-y-servicios/preguntas-frecuentes/)); ENISA
+  ([enisa.es](https://www.enisa.es/servicios/financiacion/startups-y-pymes)); ICO
+  ([ico.es](https://www.ico.es/en/ico-empresas-y-emprendedores)); MicroBank
+  ([microbank.com](https://www.microbank.com/es/productos/negocios-convenio.html)); INFO
+  Murcia ([institutofomentomurcia.es](https://www.institutofomentomurcia.es/convocatorias-activas));
+  national rules carried from `market-dossier.md` §9; model inputs from `economic-model.md`
+  I6 and `pricing-decision.md`.
diff --git a/specs/murcia-market/feature.md b/specs/murcia-market/feature.md
index 3ff0c17..0fe9e7b 100644
--- a/specs/murcia-market/feature.md
+++ b/specs/murcia-market/feature.md
@@ -199,7 +199,7 @@ and no local keyword or CPC data.
   banks with strong local presence), each with instrument, amount range, conditions
   and source. _Verify:_ `grep -c "^### 8\." business/research/murcia-market.md`.
   Accept: each cost or rule row is FACT with an official source or NOT FOUND; at least five financing instruments are listed with conditions read on the issuer's page; no eligibility is asserted for the founder.
-- [ ] **T7 — Headline parameter set, deltas, gaps and sources** (structural). Fill §9
+- [x] **T7 — Headline parameter set, deltas, gaps and sources** (structural). Fill §9
   and §10. §9: table M1…Mn of load-bearing inputs for the model, each tracing to a
   section, with label and second-source status (shape of `granada-market.md` §7); a
   Murcia vs Granada delta table for every parameter the Granada scenario used (pool,
@@ -216,6 +216,24 @@ and no local keyword or CPC data.
   while the linked PDF is named as a 2025 definitive approval) and correct the row. _Verify:_ `grep -c "^| M[0-9]" business/research/murcia-market.md`.
   Accept: Scenario: traceable headline — WHEN any row of the §9 table is picked THEN it names its section, its label and its source status, and a reader can reach the source URL in §10; the delta table covers every G-row of `granada-market.md` §7.
 
+- [x] **T12 — Final label and wording pass** (structural). Text corrections only, no
+  new research, no figure changed. In `murcia-market.md`: (F-052) relabel the
+  municipality population as "FACT (1 source), provisional" at every place it is
+  graded — §1.1 INE row, the Ayuntamiento row (no "FACT (2nd source)" wording; it is an
+  agreeing publication of the same register), the §1.6 caption and M1 in §9.1 — and
+  grep the whole file so no "FACT (2nd source)", "FACT (2 publications)" or "two
+  publications of one register" label is left grading a figure as more than one
+  source; (F-053) quote Granada's household value in the G4 delta row as that file
+  states it, band and mid; (F-054) name the criterion difference in the G10 delta row
+  and give the like-for-like count; (F-055) label the §9.3 ranking ANALYSIS, remove or
+  label the unlabelled margin claim, and replace "a few percent" with the 2.6–2.8
+  household-size band and the R1 range it implies; (F-056) scope the "every FACT was
+  re-opened" sentence in §9.1 to the rows actually re-opened and name the exceptions;
+  (F-057) update the Biomex row in §4.2 to say which page carries the figure, as M19
+  already does. In `specs/murcia-market/feature.md`, correct the T7 evidence row's
+  "every §9 FACT confirmed" wording the same way. _Verify:_ `grep -c "FACT (2nd source)\|FACT (2 publications)\|FACT — two publications" business/research/murcia-market.md` (must print 0) and `grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"` (must print 0).
+  Accept: both verify commands print 0; F-052 to F-057 are addressed at the lines the findings record names; a numeric-token diff before and after shows no figure changed other than the values F-053 to F-055 ask to add.
+
 ## Checks
 
 - `grep -c "^## [0-9]" business/research/murcia-market.md`
@@ -253,6 +271,9 @@ and no local keyword or CPC data.
 - 2026-10-05 T6 reviewed, no Critical or Important. Open for T7: F-007, F-019, F-020,
   F-041 to F-051, plus the reviewer's note to confirm which BORM publication of the
   mobility ordinance is in force (§8.2).
+- 2026-10-05 T6 committed (3e88eb6). T7 reviewed: F-007, F-019, F-020, F-041 to F-051
+  fixed; new open Critical F-052 (population label, no figure in question). Under the
+  standing authorization, fix task T12 added for F-052 to F-057; run continues.
 
 ## Evidence
 
@@ -268,6 +289,8 @@ and no local keyword or CPC data.
 | T5 | structural — `grep -c "^### [67]\." business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `0` exit 1 | `8` exit 0; `git diff --numstat HEAD`: `239	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; label grep `0` exit 1; no FACT label ends a line; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `46`; protected-files diff stat empty | none |
 | T11 | structural — `grep -n "FACT (1 source" business/research/murcia-market.md \| grep -v -c "FACT (1 source), provisional"`; `grep -c "Spain proxy" business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural) | `0` exit 1 (grep -c on zero matches); `3` exit 0; `git diff --numstat HEAD`: `89	52	business/research/murcia-market.md`, first hunk at line 556 (§1–§3 untouched) | Triangulation skipped: text fix pass; re-reads: Trends split cells 69/31 → 70/30 (Murcia), 62/38 → 63/37 (Andalucía), 51/49 → 50/50 (Valencia), index columns confirmed; AEMET 12 monthly rows confirmed, Year row is AEMET's published "Año" row; San Javier CREM 940 / 4,779 and INE 940 / 4,778 both confirmed; counts 20 → 17 profiled, 6 of 20 → 6 of 17, 13 → 10 quote-only, reputation 3 → 2; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `48`; protected-files diff stat empty | none |
 | T6 | structural — `grep -c "^### 8\." business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `0` exit 1 | `6` exit 0; `git diff --numstat HEAD`: `148	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; label grep `0` exit 1; no FACT label ends a line; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `56`; protected-files diff stat empty; 6 financing instruments with issuer-page conditions (ICREF Financia 100, CIMM-Emprende, Aválam, ENISA, ICO, MicroBank) plus Cuota Cero | none |
+| T7 | structural — `grep -c "^\| M[0-9]" business/research/murcia-market.md` (Scenario: traceable headline) | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `0` exit 1 | `29` exit 0; `git diff --numstat HEAD`: `272	40	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; delta table has one row per G1–G13; label grep `0` exit 1; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `67`; `## [0-9]` count `10`; protected-files diff stat empty; re-reads: every §9 row marked Confirmed re-read unchanged (M21, M22 not re-opened; M14, M15, M27 carried by reference); F-007 re-read corrected "highest in Spain" (Ceuta 3.07, Melilla 3.13 higher); BORM mobility ordinance confirmed as no. 95, 25-Apr-2024; F-048 rounding 3.04→3.05, 7.17→7.18, 9.41→9.42, 17.04→17.05, 27.54→27.55 | none |
+| T12 | structural — `grep -c "FACT (2nd source)\|FACT (2 publications)\|FACT — two publications" business/research/murcia-market.md`; `grep -n "FACT (1 source" business/research/murcia-market.md \| grep -v -c "FACT (1 source), provisional"` | docs | n/a — docs repo, no package.json / tsc / eslint; T7 uncommitted by design; pre-change counts `2` exit 0, `0` exit 1 | n/a (structural) | `0` exit 1; `0` exit 1 (grep -c on zero matches) | Triangulation skipped: text-only label and wording pass; numeric-token diff before/after: only the `1` of five new labels, G4 band `93,000`/`100,000`, G10 `+4` → `+5` with `7`/`7`/`6`/`G9`, R1 band `2.6`/`2.8`/`138,997`/`49,600`/`53,500`, the cited M21/M22 values `3.04`/`70`, and row / § references; TODO/TBD/lorem grep empty (exit 1); `## [0-9]` count `10`; protected-files diff stat empty | none |
 
 ## Briefing
 
```
