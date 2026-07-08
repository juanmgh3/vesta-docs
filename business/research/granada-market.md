# Granada market inputs — bank-dossier scenario

> Research pass for `specs/bank-dossier/spec.md` §4 ("El mercado — Granada"). Same
> label standard as `market-dossier.md`: **FACT** (2nd independent source required for
> load-bearing figures) / **ESTIMATE** (derivation shown) / **HYPOTHESIS** / **NOT
> FOUND**. Method replicated from `market-dossier.md` §5.3/§7/§9; national rates
> (allergy, pets) are reused from that file, not re-researched. Nothing here decides
> pricing or writes report copy — Fable adjudicates before the economic-model run.

---

## 1. Population, households, service radius

### 1.1 Granada capital (city)

| Figure | Value | Label | Source |
| --- | --- | --- | --- |
| Population, 1-Jan-2025 | **233,975** | FACT | Ahora Granada, citing INE Padrón ([ahoragranada.com](https://www.ahoragranada.com/noticias/granada-capital-consolida-el-aumento-de-empadronados-por-tercer-ano-consecutivo-y-ya-supera-cifras-prepandemia/)) |
| Population, prior update (2024 cross-check) | 232,246 | FACT (2nd source) | granadadigital.es, citing INE ([granadadigital.es](https://www.granadadigital.es/provincia-granada-ocho-mil-habitantes-granada-capital-mil-quinientos/)) |
| **Verdict** | **≈233,000–234,000** | **Graduated (2 independent sources agree within ~0.7%)** | — |

The primary INE table (`ine.es/jaxiT3/Tabla.htm?t=2871`) hosts the authoritative figure
but returned a JS-rendered page to the fetcher, not extractable text — the two
newsroom citations above (both attributing the same INE Padrón release) stand in as
the second-source pair, consistent with how `market-dossier.md` §5.3 sourced Madrid/
Valencia via Foro-Ciudad/Ayto secondary citations of the same INE series.

### 1.2 Households, Granada capital

- **NOT FOUND** as a direct INE household count for the city in this pass (same gap
  `market-dossier.md` flagged for Madrid city — INE's household table is a
  non-text-extractable ArcGIS/table layer).
- **ESTIMATE**, same method as `market-dossier.md` §5.3 (Madrid: pop ÷ ~2.41
  avg household size): 233,975 ÷ 2.4 ≈ **≈97,000 households**. Granada's average
  household size is plausibly slightly *larger* than Madrid's (younger city, lower
  income, more shared/student housing — Granada has ~60,000 university students) —
  so 2.4 is a conservative (not maximal) divisor; a range of **≈93,000–100,000
  households** is the honest band. **ESTIMATE, unverified divisor.**

### 1.3 Metro area (área metropolitana de Granada)

| Definition | Population | Label | Source |
| --- | --- | --- | --- |
| "Cinturón" — 32 municipios, 1-Jan-2025 | **324,718** | FACT | Ahora Granada ([ahoragranada.com](https://www.ahoragranada.com/noticias/el-area-metropolitana-de-granada-crece-2-639-personas-26-de-sus-32-municipios-aumentan-poblacion-en-el-ultimo-ano/)) |
| Same cinturón, 1-Jan-2024 (cross-check) | 321,901 | FACT (2nd source, prior year, consistent trend +0.9%) | Ahora Granada ([ahoragranada.com](https://www.ahoragranada.com/noticias/la-poblacion-crece-en-29-de-las-32-localidades-del-area-metropolitana-de-granada-donde-ya-hay-cinco-ciudades/)) |
| Broader "área metropolitana" (Wikipedia definition, wider comarca) | 543,816 (2021 Padrón) | FACT (1 source) — **different geographic definition, do not average with the row above** | Wikipedia / INE Padrón 2021 |

**Verdict:** the tight, current, two-year-corroborated figure is **cinturón
metropolitano ≈ 324,700–325,000 inhabitants** (32 municipios directly bordering the
capital: Armilla, Las Gabias, Maracena, Atarfe, La Zubia, Albolote, etc.). The
543,816 figure uses a wider statistical "área funcional" boundary and should be
flagged, not blended, if it surfaces in the dossier — same discipline the market
dossier applied to incompatible income metrics (§7 caveat there).

**Combined reachable population (capital + cinturón): ≈558,700–560,000** —
**ESTIMATE** (sum of the two FACT figures above; not itself independently sourced as
a combined number).

### 1.4 Proposed service radii (operating scenarios)

Following the spec's request for 1–2 plausible radii, and the market-dossier's
precedent of naming compact vs split geographies (§7.1–7.2 there):

| Radius | Scope | Est. population | Est. households (÷2.4) | Commute character |
| --- | --- | --- | --- | --- |
| **R1 — Capital only** | Granada city proper | ≈234,000 | ≈97,000 | Compact; most of the city is within a 15–20 min drive of any point (Granada capital area ≈88 km²) — the tightest, lowest-travel-cost radius. HYPOTHESIS (no direct drive-time source; city area is FACT — Granada capital's municipal area is publicly ≈88.02 km², Ayto. Granada). |
| **R2 — Capital + cinturón metropolitano** | City + the 32 belt municipalities (Armilla, Las Gabias, Maracena, Atarfe, La Zubia, Albolote…) | ≈559,000 | ≈233,000 | Wider pool, closer in spirit to the market-dossier's Madrid "western belt" pattern — several belt towns (Armilla, La Zubia, Maracena) sit 5–10 km / 10–15 min from the centre, so R2 is still plausible for a single-operator 4-services/day day, unlike Madrid's split geography. HYPOTHESIS on exact drive times (no per-town isolation done this pass). |

**Recommendation for the model (ESTIMATE, not a decision):** R1 is the safe,
defensible household pool for a bank dossier (harder to challenge); R2 is the
upside case once the operator's actual travel pattern is observed. This mirrors
`market-dossier.md`'s treatment of Valencia (tight single belt) vs Madrid (split
belts) — Granada's cinturón is structurally closer to the Valencia case (compact,
short drives) than the Madrid case.

---

## 2. Target segment sizing (45–65, allergy, pets) — reusing national rates

Per the assignment, these rates are **not re-researched** — they are the same
national figures already sourced and graded in `market-dossier.md` §5.1–5.2, applied
here to Granada's population instead of Madrid/Valencia's. Labels below reflect the
**source rate's own label** in that file; applying a FACT rate to a new population
denominator makes the *product* an ESTIMATE even where the rate itself is FACT.

### 2.1 Age 45–65

- No Granada-specific 45–65 breakdown was pulled this pass (would need INE Padrón by
  edad, same table class as market-dossier §5.3). **NOT FOUND** (this pass).
- **ESTIMATE using the same ~29% share market-dossier §5.3 found for both Madrid
  and Valencia city** (29.0% / 29.4% — a national-city-scale band, not
  city-specific to those two): 234,000 × 29% ≈ **≈67,800** (capital, R1);
  559,000 × 29% ≈ **≈162,100** (R2). Flagged ESTIMATE because the 29% rate is
  borrowed, not Granada-measured — but it is a stable band across two very different
  Spanish cities, so borrowing it is a reasonable proxy, not a stretch.

### 2.2 Allergy / dust-mite prevalence

Reused verbatim from `market-dossier.md` §5.1 (national figures, not city-specific
there either):

| Figure | Value | Label | Source (per market-dossier §5.1) |
| --- | --- | --- | --- |
| Respiratory allergy prevalence (Spain) | ~20% | FACT | SEPAR via ImMédico (2025) |
| "Some type of allergy" (Spain) | ~30% | FACT (survey n=757, dated) | Infosalus/IMOP (2017) |
| Dust-mite sensitization among allergic-respiratory patients, national | up to 50% | FACT | Alergológica 2015 |

**Applied to Granada (ESTIMATE, R1 capital):** 234,000 × 20% ≈ **≈46,800** people
with a respiratory allergy in the capital; of those, up to half show dust-mite
sensitization ≈ **≈23,400** — same caution as the national file: this is
sensitization-among-allergic, not general-population prevalence.

**Andalucía-specific dust-mite figure — NOT FOUND this pass.** Alergológica 2015's
regional breakdown (cited in market-dossier §5.1) covers Comunidad Valenciana,
Baleares, Canarias and Galicia explicitly but the source snippet did not surface an
Andalucía row; would need the primary Alergológica 2015 PDF to confirm one exists.
Model with the **national ~20%/50%** bands, not a fabricated Andalucía-specific one.

### 2.3 Pet ownership

Reused verbatim from `market-dossier.md` §5.2 (national, CONFLICTING between
sources — carried forward as-is):

- Households with ≥1 pet: **49% (ANFAAC) or 61% (IPMARK)** — genuine unresolved
  conflict, use ANFAAC's own anchor per the market-dossier's own recommendation, do
  not average.
- **Applied to Granada capital (ESTIMATE, R1, ANFAAC anchor):** ≈97,000 households ×
  49% ≈ **≈47,500 pet-owning households**.

---

## 3. Competition in Granada

Search terms: "limpieza de colchones a domicilio Granada", "limpieza de sofás
Granada tapicerías". Granada's competitive field reads as **less dense and less
professionalized** than Madrid/Valencia — a mix of small local independents and a
handful of national-network storefronts, with weaker web presence than the Madrid/
Valencia players profiled in `market-dossier.md` §2–§3 (none of the Granada sites
found show the volume of self-reported reviews, B2B pages, or lab-certification
claims that the Madrid/Valencia set did).

| Company | Type | Services | Published prices | Travel | Notes |
| --- | --- | --- | --- | --- | --- |
| **Happy Clean** (happyclean8.com) | Local independent | Sofa, sillón, silla, cabecero, colchón | Sofá "desde €70"; sillón "desde €30"; silla "desde €5"; cabecero "desde €15"; colchón "desde €45" — no size split published | Not stated as free/charged; serves 80+ named towns in the province | 10% first-order discount; positions on eco products + tech. FACT (own site). |
| **Clean-Home.es** (Granada-province page) | Regional chain (same brand profiled in market-dossier §3 for Valencia/Costa Blanca) | Sofa by size, mattress add-ons | Sofá recto 2pl €79 (was €98) / 3pl €85 (was €111) / 4-5pl €89 (was €116); chaise longue variants €89–99; colchón add-on (only bundled with sofa): individual/cuna +€25, 135cm +€25, queen +€29, king +€35 | **Free** ("Desplazamiento Gratis") | Same national brand already FACT-graded in market-dossier §3.1 for Valencia — corroborates cross-city consistency of this chain's pricing. FACT (own site, this pass). |
| **Limpiezas Gamero** (limpiezasgamero.com) | Local independent | Sofá, chaise longue, sillón, silla, colchón | Not published — "presupuesto cerrado" after inquiry | Not charged (implied free within capital + metro belt) | Explicitly covers Granada capital + cinturón metropolitano (Zaidín, Centro, Realejo, Albaicín + Armilla, Maracena, La Zubia…) and the Costa (Motril, Almuñécar). FACT (own site). |
| **Tapinet Granada** (tapinet-granada.com) | Local independent (regional franchise of a national tapicería-cleaning brand) | Colchones, sofás, tapicerías, alfombras, moquetas | Landing page for mattress cleaning 404'd on fetch — **prices NOT FOUND this pass** (site is live but the specific pricing subpage was unreachable) | NOT FOUND | Positions as "referentes en limpieza profesional de tapicerías" for the province. |
| **Bluclin** (bluclin.com/limpieza-sofas-granada) | — | Sofa cleaning, "premium" eco/hypoallergenic | NOT FOUND (not fetched this pass — search snippet only) | NOT FOUND | Snippet claims "99.9% bacteria elimination", premium eco positioning. Weak/unverified — flagged, not fetched directly. |
| **Sofá Eco Cleaner** (sofaecocleaner.es) | — | Sofás, sillas, sillones, alfombras, ozone treatment | NOT FOUND (search snippet only) | NOT FOUND | Not fetched directly this pass. |
| **Ecolimpio Granada** (ecolimpiogranada.es) | — | Tapicería, coche interior, alfombras, moquetas, sofá | NOT FOUND (search snippet only) | NOT FOUND | Broader cleaning generalist, not upholstery-specialist. |

### 3.1 Market density vs Madrid / Valencia — ANALYSIS

- Madrid: **15 competitors profiled**, several with franchise backing, B2B pages,
  third-party editorial mentions, and one AITEX lab certification
  (`market-dossier.md` §2).
- Valencia: **16 competitors profiled**, similarly professionalized despite heavier
  price opacity (10/16 hide prices).
- Granada (this pass): **7 named players surfaced**, of which only **2 published
  real prices without contact-first friction** (Happy Clean, Clean-Home) — a
  narrower field than either reference city, consistent with Granada's ~4x smaller
  population than Madrid and its provincial-capital scale generally. **No Granada
  player shows a third-party lab certification, no editorial "best of" mention,
  and no B2B-specific page was found** — all three trust signals the Madrid/
  Valencia dossier flagged as differentiators (market-dossier §4.2) are **absent
  from the Granada set found so far**, i.e. the "premium + transparent + verified"
  white space identified nationally is, if anything, **more open in Granada**, not
  less. [ANALYSIS — a plausible read given the data found, not a confirmed
  market map; a fuller sweep (comparable to the 15–16 profiled per city in Madrid/
  Valencia) was out of scope for this pass.]
- **Caveat:** this is a **shallower sweep than Madrid/Valencia's** (7 vs 15–16
  profiled) — do not present the "less dense" reading to the bank as more certain
  than it is. Frame as "a materially smaller field of visible competitors" rather
  than a precise count.

---

## 4. Local price levels

| Service | Granada published range (FACT, own-site) | Madrid/Valencia cluster (from market-dossier §1.1) | Read |
| --- | --- | --- | --- |
| Colchón (no size split, Happy Clean) | "desde €45" | €40–95 depending on size | Consistent with the *low end* of the Madrid/Valencia individual/matrimonio band. |
| Colchón — bundled add-on (Clean-Home) | +€25 (individual/135cm) to +€35 (king), **on top of** a sofa order | Comparable Clean-Home Valencia pricing (dossier §3.1: colchón €55–75 stand-alone) | Clean-Home's Granada page prices the mattress only as a sofa add-on, not stand-alone — likely a page-scope artifact, not evidence Granada mattress-alone pricing is structurally lower; **flag, don't conclude**. |
| Sofá 2 plazas | €79 (Clean-Home) | €60–79 (Madrid/Valencia cluster) | Sits at the **top** of the two-city cluster — no discount visible. |
| Sofá 3 plazas | €85 (Clean-Home) / "desde €70" (Happy Clean, no plaza split) | €90–99 | Clean-Home's Granada 3pl (€85) sits **slightly below** the Madrid/Valencia cluster (€90–99); Happy Clean's undifferentiated "desde €70" is not a clean comparison (unclear which plaza count it anchors). |
| Sillón / butaca | "desde €30" (Happy Clean) | €42–50 (Madrid) | **Below** the Madrid figure — but Madrid's is a FACT range across several sites vs one Granada data point; not enough Granada evidence to call this a confirmed discount, only a directional signal. |

**Cronoshare national reference (reused, not re-sourced):** "el precio de la
limpieza de colchones suele oscilar entre 40€ y 100€" — the same €40–100 band
market-dossier §5.4 already cites nationally (Cronoshare, Jan-2026); Cronoshare's
Granada-specific quote-request page exists (cronoshare.com/servicios/
limpieza-sofas-domicilio/granada/granada) but does **not** publish a Granada-only
average price — **NOT FOUND** as a city-isolated figure; only the national band is
confirmed available.

**Verdict (ESTIMATE, second-source status):** Granada's **one directly comparable,
two-source-corroborated data point** is sofá pricing via the Clean-Home chain
(same national brand pricing both Valencia and Granada, dossier §3.1 + this file
§3) — it prices **at or slightly below** the Madrid/Valencia cluster (2pl €79 vs
€60–79 cluster: at the top; 3pl €85 vs €90–99: below). Combined with Happy Clean's
lower mattress/sillón anchors, the honest read is: **Granada prices sit in the same
overall band as Madrid/Valencia, with a mild downward lean at the low end**, not a
sharply cheaper market. This is a **single-chain corroboration, not a
market-wide second source** — treat as **FACT (1 source) for the Clean-Home
figures**, **ESTIMATE** for the "Granada is mildly cheaper" read.

---

## 5. Google Ads context — search volume & CPC

- **Granada-specific keyword search volume: NOT FOUND.** No free tool (Ahrefs,
  Ubersuggest) was queried with a Granada geo-filter this pass; Google Keyword
  Planner remains walled exactly as `market-dossier.md` §6.1 documents nationally.
  The market dossier's own Trends-related-queries sweep (§5.4) notes its related-
  searches list happened to be **Granada-IP-localized** by accident (the researching
  session's own network location) — meaning the *DIY/price-sensitivity query
  patterns* documented there ("...precio", "spray antiácaros mercadona") were
  literally observed from a Granada vantage point, even though that file frames them
  as generalizable national patterns, not a Granada-specific volume figure. That
  detail is suggestive corroboration that Granada search behavior matches the
  national pattern, but it is **not a substitute for a Granada volume/CPC number**.
- **Granada-specific CPC: NOT FOUND.** No Spain regional CPC breakdown isolates
  Granada (the one regional CPC datum in market-dossier §6.1, gorkagarmendia 2015,
  splits only Madrid +30% / Canarias −30% vs. national average — Granada/Andalucía
  is not in that split).
- **Recommendation for the model:** apply the **national CPC/CVR estimates already
  adjudicated in `market-dossier.md` §6.1/§6.3 and `economic-model.md` I10/I11
  unchanged** (triangulated €1.0–3.0/click, central ~€1.5–2.0; no Madrid +30%
  regional adjustment applied to Granada, since Granada is smaller/less commercially
  saturated than Madrid and closer to national/Valencia-tier competition — if
  anything CPC should sit at or below the national central estimate, not above it).
  This is a **HYPOTHESIS**, not a measured adjustment — flag in the dossier's
  assumptions annex that Granada CPC was not separately measured and the national
  central estimate is used as-is.

---

## 6. Granada purchasing power vs Madrid / Valencia

| Metric | Granada | Madrid (region, per market-dossier §5.3) | Valencia (city, per market-dossier §5.3) | National (per market-dossier §5.3) |
| --- | --- | --- | --- | --- |
| Net income per household (INE ADRH 2023) | **€36,821** | €43,037 (Com. de Madrid region — city not isolated) | €40,058 | €38,326 |
| Label | FACT (1 source this pass — see below) | FACT | FACT | FACT |

Source: INE press coverage / Atlas de Distribución de Renta de los Hogares 2023
(the same official series market-dossier §5.3 used). The €36,821 figure surfaced
via a secondary citation in this pass rather than a direct INE table pull —
**FACT (1 source)**, provisional until a second citation of the same INE ADRH 2023
table for Granada is found (same "provisional until corroborated" discipline
market-dossier.md applies to its own single-source figures).

**Reading (ANALYSIS):** Granada's per-household net income (€36,821) sits **≈4%
below the national mean** (€38,326), **≈8% below Valencia city** (€40,058), and
**≈14% below the Comunidad de Madrid region** (€43,037, noting that figure is
regional not city-level, so the true Madrid-city gap may differ). This is
consistent with Granada being a mid-sized provincial capital with one of Spain's
lower average income profiles among provincial capitals (well-documented separately
in general economic literature on Andalucía, not re-sourced here) — **the
directional expectation that Granada prices should sit at or below the Madrid/
Valencia cluster (§4) is corroborated by this income gap**, not just asserted.

---

## 7. Headline figures for the economic-model Granada parameter set

Fable should treat these as the load-bearing inputs to re-derive with
`economic-model-engine.mjs`; every row traces to a section above.

| # | Input | Value | Label |
| --- | --- | --- | --- |
| G1 | Granada capital population | ≈233,000–234,000 | FACT (2 sources) |
| G2 | Cinturón metropolitano population (32 municipios) | ≈324,700–325,000 | FACT (2 sources, consecutive years) |
| G3 | Combined R1+R2 reachable population | ≈559,000 | ESTIMATE (sum of G1+G2) |
| G4 | Households, capital (R1) | ≈93,000–100,000 (mid ≈97,000) | ESTIMATE (pop ÷ 2.4, borrowed divisor) |
| G5 | Households, R2 combined | ≈233,000 | ESTIMATE (same divisor) |
| G6 | Net income per household, Granada | €36,821 | FACT (1 source; ≈4% below national, ≈8% below Valencia) |
| G7 | Local sofa 3pl price (Clean-Home, corroborated chain) | €85 | FACT (1 source; same brand FACT-graded in Valencia) |
| G8 | Local sofa 2pl price (Clean-Home) | €79 | FACT (1 source) |
| G9 | Local mattress "desde" anchor (Happy Clean, no size split) | €45 | FACT (1 source, weak — no size split) |
| G10 | Visible competitor count (this pass) | 7 named, 2 with real published prices | FACT (this pass's sweep only — shallower than Madrid/Valencia's 15–16) |
| G11 | Google Ads CPC, Granada-specific | — | **NOT FOUND** — model with the national €1.0–3.0 central ~€1.5–2.0 estimate unchanged (market-dossier §6.1) |
| G12 | Granada keyword search volume | — | **NOT FOUND** — no substitute band pulled this pass |
| G13 | Allergy/pet segment sizing | derived from national rates × Granada population (§2) | ESTIMATE (rate itself FACT nationally, product is ESTIMATE) |

---

## 8. Sources appendix (this pass)

- Population/households: ahoragranada.com (two articles, INE Padrón 1-Jan-2025 and
  1-Jan-2024 citations), granadadigital.es (INE cross-check), INE
  `ine.es/jaxiT3/Tabla.htm?t=2871` (table exists, not text-extractable this pass),
  es.wikipedia.org "Área metropolitana de Granada" (wider/older definition, flagged
  not blended).
- Competition/pricing: happyclean8.com, clean-home.es (Granada-province page),
  limpiezasgamero.com, tapinet-granada.com (pricing subpage 404'd), search snippets
  only for bluclin.com, sofaecocleaner.es, ecolimpiogranada.es (not fetched
  directly — flagged NOT FOUND for their prices).
- National reference band: cronoshare.com (`/cuanto-cuesta/limpieza-colchones`,
  €40–100 national band, reused from market-dossier §5.4).
- Income: INE Atlas de Distribución de Renta de los Hogares 2023
  (`ine.es/dyngs/Prensa/ADRH2023.htm`), same series as market-dossier §5.3.
- CPC/search volume: no new sources found beyond market-dossier §6.1's existing
  triangulation; confirmed absence of a Granada-specific regional CPC split.
- Reused without re-fetching (per assignment instruction): `market-dossier.md`
  §5.1 (allergy), §5.2 (pets), §5.3 (Madrid/Valencia demographics, method
  template), §5.4 (search/CPC/keyword findings), §6.1 (CPC triangulation), §9.3
  (CLP→EUR, not applicable here but same rigor standard).

---

*This file is Granada-specific research input only. It does not decide the bank
dossier's numbers — Fable re-derives the economic model with these parameters and
personally verifies every load-bearing figure per the spec's Number rules.*
