# Market dossier — Phase 1 (Grupo Vesta business reports)

> Phase 1 deliverable of the business-report assignment (`docs/briefs/business-report.md`).
> Compiled 2026-07-07. Source-gathering ran as a parallel fan-out of Sonnet
> subagents (competition Madrid, competition Valencia, demand/audience, channels,
> admin costs, operating zones/travel); this synthesis was written at Opus/max
> effort. Every load-bearing figure is adjudicated here — the subagents proposed
> labels, this file decides them and applies the second-source rule.
>
> **This is an internal research artifact, not a deliverable.** Repo files are in
> English (per the brief); the two Spanish reports come later (Phases 3–4). Nothing
> here decides pricing (Phase 2) or writes report copy — it only assembles and
> grades the market evidence those phases will stand on.

## How to read this file

Label standard (from the brief's number-verification section):

- **FACT** — directly stated by a credible source. A load-bearing figure only earns
  FACT with a **second independent source**; single-source figures are marked
  `FACT (1 source)` and are provisional until corroborated.
- **ESTIMATE** — derived. The derivation and a source per input are shown.
- **HYPOTHESIS** — plausible but unverified; needs founder validation or a real test.
- **ANALYSIS** — a judgement of mine (the synthesis), built on sourced observations
  below it. Kept visually separate from the facts it rests on, per founder protocol.

Two honest limits up front, because they shape everything downstream:

1. **No absolute keyword search volumes** (Keyword Planner/Ahrefs/SEMrush all need an
   authenticated/paid session; Keyword Planner is walled behind a spending account).
   **Google Trends *was* pulled directly** (§5.4) via a session-warmed browser — it gives
   *relative* interest, regional split and related queries, not absolute volumes. So
   **demand is evidenced structurally + relatively (competitor density, allergy prevalence,
   demographics, Trends), not by an absolute search-volume number.** Flagged where it bites.
2. **CPC / conversion are estimated, not measured.** No Spain-specific, sector-broken-out
   Google Ads benchmark exists publicly for "limpieza del hogar", and Keyword Planner is
   walled. Per founder decision (2026-07-07), CPC is a **triangulated ESTIMATE** from
   Spanish proxies + US ceiling (€1.0–3.0/click, §6.1); conversion/close-rate stay
   ESTIMATE/HYPOTHESIS. These are planning ranges to be replaced by the first live
   campaign — the funnel (§6.3) is illustrative method, not a target.

---

## 1. Executive summary of findings

- **The market is real, crowded, and price-transparent-averse.** Both cities carry
  a dense field of at-home mattress/sofa/upholstery cleaners. In Valencia **10 of 16**
  surveyed competitors publish *no* prices at all (photo/WhatsApp quote); in Madrid
  roughly half hide at least one price. Opaque pricing is the category norm.
- **Published prices cluster tightly and Madrid ≈ Valencia.** Matrimonio mattress
  ≈ **€55–90** (cluster €60–75) in both cities; sofá 3 plazas ≈ **€85–120** (cluster
  ≈€90). **No evidence national chains charge a premium over locals.**
- **Three exploitable gaps (ANALYSIS, see §4):** (a) the method norm is
  *inyección-extracción* — a vacuum-based system is a differentiator, not a weakness;
  (b) third-party lab certification of mite-kill is near-absent (one player cites
  AITEX); (c) **no premium-positioned competitor publishes transparent prices** — the
  "premium look + honest published price" lane is open.
- **The primary competitor is DIY, not a rival firm.** Search intent skews heavily to
  self-treatment (bicarbonato, plancha, Mercadona/Sanytol sprays) — the premium pitch must
  out-argue a €3 supermarket product, not just other cleaners. [ANALYSIS, §5.4.]
- **Demand is grounded, growing, but low-frequency.** ~1 in 5 Spaniards has a
  respiratory allergy (SEPAR); among allergic-respiratory patients, dust-mite
  sensitization exceeds 55% in the Comunidad Valenciana region (Alergológica 2015);
  >20 M pets / ~27% of households with a dog (ANFAAC 2025). Madrid city has ~4.1× the
  45–65 population of Valencia city (≈990 k vs ≈243 k). **Google Trends (direct read)**
  adds: dust-mite interest is on a clear 5-year *uptrend* (tailwind); "limpieza de
  colchones" is a *low-volume, considered* search (not high-traffic); **Madrid outranks
  Valencia** in commercial search interest; and the "spring peak" seasonality hypothesis is
  **not confirmed** — treat demand as roughly year-round.
- **Costs are small and confirmable.** Autónomo: **€80/month** year 1 (tarifa plana),
  then ≈€205–300/month at low income. Website: **≈€0 hosting + €8–16/yr domain.**
- **Operating geography favours a single operator.** Both cities have compact affluent
  belts; Valencia's is tighter (all target zones within ~20 km / 20–25 min), which is
  structurally kinder to a 4-services/day radius than Madrid's split western-belt +
  northern-outlier layout (ANALYSIS).
- **Biggest evidence gaps to close before the economic model leans on them:** real
  Spanish CPC/CVR (needs Keyword Planner), search volumes + seasonality curve, and any
  B2B spend figure for hotels / short-term rentals.

---

## 2. Competition — Madrid

15 competitors profiled. Mix of national franchises (UrbanCleaner, EcoCleans, CleanNew)
and local independents. All prices below are **FACT from each company's own live site**
(fetched 2026-07-07) unless flagged. Because these are many *independent* primary
sources, the observed **price ranges** graduate to FACT; any single "average" derived
from them is ESTIMATE.

### 2.1 Published price ranges (Madrid, FACT — own sites)

| Service | Observed range | Cluster / mode | Notable outliers |
| --- | --- | --- | --- |
| Colchón individual (90 cm) | €35–60 | €35–45 | Aladinos €60, Vaporex "desde €60" (high) |
| Colchón matrimonio (135–150) | €55–90 | €60–75 | Aladinos €85–90 (high); Mr Mantser/Tapinext €55 (low) |
| Colchón king (160–180) | €75–100 | €80–90 | Superlimpia up to €100 |
| Sofá (per plaza, tela) | €30/plaza | €30/plaza | Leather €35–40/plaza |
| Sofá 2 plazas | €60–97 | €60–70 | Sofaclín €97 (tiered pack, not per-plaza) |
| Sofá 3 plazas | €90–119 | €90 | Sofaclín €119 (tiered) |
| Sillón / butaca (1 plaza) | €42–50 | €50 | Mr Mantser €42 |
| Chaise longue / rinconera | €120–175 | — | TAPICRIS €150–175 (leather) |
| Pedido mínimo | €60–70 | €70 | — |
| Desplazamiento | Free (universal where stated) | Free | — |

Per-competitor detail (name · type · method · price anchor · reputation · B2B):

- **Superlimpia** · independent · inyección-extracción · colchón €35→€100 by size, sofá
  €30/plaza, min €60/70, travel free · third-party editorial names it a top-3 Madrid
  upholstery cleaner (Moncloa.com, 17-Oct-2025) · **B2B strong** (client logos: Kinepolis,
  Hospes hotels, embassies). [superlimpia.es]
- **UrbanCleaner Madrid** · franchise · **dry** process, high-suction + germicidal UV,
  no water/chemicals · **prices hidden** (quote only), free travel ≥€60 · **only competitor
  citing a third-party lab (AITEX) certifying total mite elimination** · explicit B2B
  (hotels, residences, short-term rentals). [urbancleanermadrid.es]
- **EcoCleans Madrid** · franchise · inyección-extracción + UV + steam, eco · **prices
  hidden** (promo % only) · self-reported ISO 9001 / ITEL, "4.9★ / 150+ reviews"
  (self-reported). [madrid.ecocleans.es]
- **TAPICRIS** (limpiezadesofasadomicilio.com) · independent · Espuma Activa® +
  inyección-extracción, AXA-insured · sofá tela 2pl €60 / 3pl €90 / 3pl+chaise €150;
  colchón €35–70 (no size split) · top-3 editorial mention. [limpiezadesofasadomicilio.com]
- **Mr Mantser Clean** · independent · steam + deep vacuum · colchón €35→€85, sofá
  €30/plaza · satisfaction guarantee · B2B "hoteles y residencias". [mrmantserclean.com]
- **Aladinos** · independent · inyección-extracción, 45–90 min/colchón · colchón €60→€90
  (priced above pack), sofá from €30/plaza, min €70, 7-day guarantee · Allianz liability
  insurance. [aladinos.es]
- **Sofaclín** · independent (multi-city templated pages — see Valencia note) ·
  inyección-extracción, drying 4–8 h (fast) · **tiered packs** €97 / €119 / €169
  (essential / deep+stain / +waterproofing) rather than per-plaza. [sofaclin.es]
- **Vaporex Madrid** · independent · steam-led 5-step · colchón "desde" €60/75/90,
  sofá "desde" €60/75. [vaporexmadrid.es]
- **Limptex** · independent · inyección-extracción, material-specific · sofá €30/plaza
  (tela) / €40 (leather), min €70, money-back guarantee · top-3 editorial mention.
  [limptex.com]
- **Tapinext** · independent · inyección-extracción, travel included · colchón "desde"
  €35/45/55/65. [tapinext.com]
- **Ecolimp** · independent · deep vacuum + disinfectant · colchón €40/60/70 (VAT
  excl.). [ecolimp.es]
- **CleanNew** · franchise (€20k investment, territorial exclusivity; **origin
  Brazil vs Spain unresolved** across sources) · "Blindaje de Tapicerías" fabric
  protection · **prices hidden**. [cleannew.es]
- **Yaklean** · independent (Madrid/Toledo/Guadalajara) · extraction + biodegradable
  spray · **prices hidden** · dedicated B2B/offices pages. [yaklean.com]
- **Limpiezas Arribas** · independent · inyección-extracción · pricing page 404'd;
  cached "desde 75€+IVA" (WEAK, unverified). [limpiezasarribas.com]
- **La Galardonada** · independent · steam + eco detergents · colchón "35€–80€" range
  only. [lagalardonada.es]

### 2.2 Reputation & competitor market claims (Madrid)

- **Reputation is almost entirely self-reported.** Star ratings/review counts quoted by
  EcoCleans, Aladinos, etc. come from their own marketing copy, not a Google Business
  pull (a fetcher can't render Google Maps). The only *independent* validation found:
  Moncloa.com (17-Oct-2025) naming **Superlimpia, Limptex, TAPICRIS** as Madrid's three
  best-rated upholstery cleaners — with no numeric scores. [ANALYSIS: treat all
  self-reported ratings as marketing, not evidence.]
- **Mite-count marketing claims are uncited.** The one Madrid-family competitor making a
  specific figure — UrbanCleaner (Toledo sister site), "más de 2.000.000 de ácaros" per
  mattress — cites no source. A sleep expert quoted by Infobae (17-Mar-2026) says "más de
  10.000.000". Use neither as a Vesta claim without a primary citation.

---

## 3. Competition — Valencia

16 competitors profiled (national chains in Valencia marked; unique value in the
Valencia-local independents). Pricing opacity is *more* pronounced than Madrid.

### 3.1 Published price ranges (Valencia, FACT — own sites)

Only 5 of 16 publish real figures (Biomex partial, Clean-Home, Lux Limpio, Limpieza
Centauro, Harry el Sucio Clean). Ranges below are from those.

| Service | Observed range | Cluster | Notes |
| --- | --- | --- | --- |
| Colchón individual | €25–55 | €40–55 | Lux Limpio €25 (low outlier, no size split) |
| Colchón matrimonio (135–150) | €60–75 | €65 | Biomex/Clean-Home €65 |
| Colchón king | €65–100 | — | Clean-Home king == matrimonio price (likely extraction artifact — verify) |
| Sofá 2 plazas | €69–89 | €70–79 | Centauro €89 (highest local) |
| Sofá 3 plazas | €85–119 | €90 | Centauro €119 |
| Chaise longue | €89–190 | — | Harry el Sucio €95–190 by size |
| Pedido mínimo | mostly NOT FOUND | — | Sofás Valencia €200 (unusual, likely combined-service min) |
| Desplazamiento | Free (universal where stated) | Free | WillBeClean: free in-city, "desde €20" beyond ~50 km (WEAK/snippet) |

Per-competitor highlights:

- **Biomex** · national chain (Valencia + Madrid, Barcelona, Sevilla…) · colchón "desde"
  €55/65, sofá framed as *ceilings* ("hasta €155" 2-plaza / "hasta €300" grande — **not
  comparable to competitors' "desde"**) · unusual "garantía de 10 años" (scope
  unspecified). [biomex.es]
- **UrbanCleaner** (national franchise) · **AITEX-certified anti-mite report** — the only
  lab-verified mite claim in the Valencia set too · prices hidden (% discounts only).
  [urbancleaner.es]
- **EcoCleans Levante** (franchise territory sold May-2025) · 3-step vacuum→UV+steam→wash,
  "100% de los ácaros" · prices hidden · targets "apartamentos turísticos Valencia".
  [valencia.ecocleans.es]
- **Clean-Home.es** · regional (Costa Blanca/Valencia prov.) · "EcoFusion360™" (steam +
  inyección-extracción + eco) · **most complete published price list**: colchón one/both
  sides €55–75, multi-mattress packs (2× ind. €69, 3× ind. €97), sofá €79→€99 with
  struck-through anchor prices · **strongest reputation claim: 1,300 reviews, 4.9/5** ·
  free travel across the province. [clean-home.es]
- **Lux Limpio** · local (Valencia metro) · inyección-extracción · sofá "desde €69",
  colchón "desde €25" · "4.9★ / 120+ reviews". [luxlimpio.es]
- **Limpieza Centauro** · local · biodegradable, no harsh chemicals · sofá "desde"
  €89/119/139, colchón "desde €49" — **highest base-priced player with published
  figures** (mid-premium local) · "4.8/5, 160 Google reviews". [limpiezacentauro.com]
- **Harry el Sucio Clean** · local, general home-cleaning w/ upholstery line
  (English page — possibly expat-targeted) · **most granular price list found** (sofa
  €70→€200 by configuration, colchón €40→€100 by size) · weaker health/ácaros framing.
  [harrysucio-clean.es]
- **Lavamatt** · local · inyección-extracción + active foam · prices hidden · **most
  explicit B2B list** (hotels, casas rurales, real estate, fleets, logistics).
  [limpiezatapiceriasvalencia.com]
- Others (prices hidden, quote-only): **Multicleaning** (UV, B2B apartamentos/hoteles),
  **Tapiceros ArtDeco**, **Cleaning Family Service**, **Sofás Valencia** (furniture
  retailer w/ cleaning line, €200 min), **eLimpio/Elimpio Colchones**, **Tu Colchón
  Limpio**, **WillBeClean** — the last three could only be reached via search snippets
  (403/DNS), so their data is **low-confidence**.

### 3.2 Valencia-specific reads

- **No premium player with published prices exists.** Centauro (local) is the top of the
  *published* range; the two most visible national franchises (UrbanCleaner, EcoCleans)
  hide prices entirely. [ANALYSIS: the premium-and-transparent lane is empty here.]
- **National-vs-local price premium: no evidence.** The only national chain with published
  numbers (Biomex, €55/65 colchón) sits *inside* the local range, not above it.
- **Best independent reputation is regional/local, not national** (Clean-Home 1,300/4.9;
  Centauro 160/4.8; Lux Limpio 120+/4.9) — franchises lean on softer "X clientes felices"
  claims.

---

## 4. Cross-city competition synthesis + positioning white space

### 4.1 What is FACT across both cities

- **Method norm = inyección-extracción** (often + steam or UV). The clear majority in
  both cities advertise it as the core technology. [FACT — convergent across ~15
  independent sites.]
- **Health/ácaros framing is universal**, usually with an unverified "99–100%" claim.
- **Prices are near-identical Madrid vs Valencia** and **opaque pricing dominates**
  (esp. Valencia, 10/16 quote-only).
- **Desplazamiento is free** almost everywhere it's stated. Charging for in-city travel
  would be an outlier. (Feeds FLAG A, §8.)
- **Third-party certification is rare** — **UrbanCleaner (AITEX)** is the only
  lab-verified mite-kill claim found in *either* city.

### 4.2 Positioning white space — ANALYSIS (mine, grounded in §2–§4.1)

Three openings emerge only from reading both cities together. Each is a judgement built
on the sourced observations above, flagged as such:

1. **Vacuum-based method as a differentiator, not a handicap.** The category standard is
   wet inyección-extracción; the business's Hyla vacuum system is *off-norm*. Framed well
   ("dry-ish, no soaking, faster to use again"), that is a distinctive story, not a
   deficit. Requires careful copy — this is a marketing-report input, not decided here.
2. **Verified proof is ownable.** Because ~every competitor's "100% ácaros" is
   self-asserted, an independent lab report (à la AITEX) or *genuinely verified* Google
   reviews would be a rare trust asset. Whether the business can obtain such a certificate
   is a TO-CONFIRM, not a FACT.
3. **Premium + transparent pricing is an empty lane.** No competitor pairs a premium
   posture with an honestly published price. This is the concrete market evidence behind
   the brief's Phase 2 "match market price with a premium look" option — **but the price
   decision itself is Phase 2, not here.**

---

## 5. Demand & audience

### 5.1 Allergy / dust-mite prevalence (Spain) — the demand rationale

| Figure | Value | Label | Source (year) |
| --- | --- | --- | --- |
| Respiratory allergy prevalence | ~1 in 5 Spaniards (~20%) | FACT | SEPAR via ImMédico (2025) |
| Adult asthma | ~5% | FACT | SEPAR (2025) |
| "Some type of allergy" | ~30% of Spaniards | FACT (survey n=757) | Infosalus/IMOP (2017 — dated) |
| Dust-mite allergy (of respondents) | 4% | FACT (same survey) | Infosalus (2017) |
| Asthma+rhinitis patients sensitized to dust mites | up to 50% nationally | FACT | Alergológica 2015 via F. Caser |
| Dust-mite sensitization, **Com. Valenciana** region (allergic-respiratory patients) | **>55%** | FACT | Alergológica 2015 via F. Caser |
| Dust-mite sensitization, Baleares / Canarias / Galicia | 88% / 85% / 74% | FACT | Alergológica 2015 |

Read carefully: the high percentages are **sensitization among already-allergic patients**,
not general-population prevalence — do not multiply them against the whole city. The
general-population dust-mite figure is nearer the 4% survey number. [ANALYSIS: the honest
audience framing is "the ~20% allergic-respiratory population, within which dust mites are
a leading trigger", not "55% of the city".] SEAIC's **Alergológica 2025** update is still
in data collection (no results yet).

### 5.2 Pet ownership (Spain) — a second audience driver

| Figure | Value | Label | Source |
| --- | --- | --- | --- |
| Total pets | >20 M | FACT | ANFAAC Censos 2025 |
| Households with a dog | ~27% (~9.5 M dogs) | FACT (secondary, ANFAAC-attributed) | AllPetFood / El Español (2025–26) |
| Households with a cat | ~17% (~5.95 M cats) | FACT (secondary) | AllPetFood |
| Households with ≥1 pet | 49% *or* 61% | **CONFLICTING** | ANFAAC vs IPMARK (2024/25) |

Genuine unresolved conflict on household penetration (>20 M vs >30 M pets; 49% vs 61%
of households) — different methodologies. Use ANFAAC's own page as the single anchor if
one number is needed; do not average.

### 5.3 Demographics — MADRID vs VALENCIA (city) side by side

| Metric | Madrid (city) | Valencia (city) | Label | Source |
| --- | --- | --- | --- | --- |
| Total population | 3,527,924 | 840,792 | FACT | Padrón/INE, 1-Jan-2025 |
| Population 45–65 | 989,933 | 242,820 | FACT | Foro-Ciudad/INE Padrón 2024 |
| % aged 45–65 | ≈29.0% | ≈29.4% | ESTIMATE (band ÷ 2024 pop base) | derived |
| Households (total) | ≈1,464,000 | 354,784 | Madrid **ESTIMATE** (pop ÷ ~2.41); Valencia **FACT** | Ayto Madrid %s / 7TeleValencia |
| Rental share | ~24–26% | ~17.3% | FACT (two methodologies) | idealista/Census 2021; diario.madrid.es ECH |
| Net income per household | Com. de Madrid (region) €43,037; **city NOT FOUND** | Valencia city €40,058 | FACT | INE ADRH 2023 |
| National reference | €38,326 net mean per household (+7.0% YoY) | — | FACT | INE ADRH 2023 (pub. Oct-2025) |

Key asymmetries: Madrid city has **~4.1× the 45–65 population** and ~4.1× the households
of Valencia city — a materially larger reachable pool, but also (per §2–§3) a denser and
more spread-out competitive/operational field. The Madrid *city-level* household income
could not be isolated (only the regional figure) — flagged; Valencia's is genuinely
municipal.

### 5.4 Search demand & seasonality — the biggest gap

- **Keyword volumes: confirmed NOT AVAILABLE FREE** (two independent research sweeps).
  Keyword Planner is walled (§6.1); no public page exposes a verifiable Spanish monthly
  volume for these terms (one blog that appeared to quote volumes, cristianprograma.com,
  404s and is unrecoverable — discarded as source contamination). **Substitute demand
  evidence, used instead of a volume number:** (a) the density of active advertisers on
  these exact terms (§2–§3); (b) real transaction activity — Cronoshare tracks live
  quotes for "limpieza de colchones" with a €40–100 ticket (Jan 2026), i.e. a working
  paid market, not just curiosity searches; (c) 20,048 active building-cleaning firms in
  Spain (CNAE 8121, 2024) as adjacent-sector scale. None of these is a search volume;
  together they establish that demand is real and monetised. [ANALYSIS.]
- **Google Trends — direct read** (Playwright, 2026-07-07, geo=ES, últimos 5 años; the
  session-warmed workaround got past the 429 that blocks a cold hit). Four findings:
  - **The category is GROWING.** Interest in "ácaros" trends clearly upward over 5 years
    (baseline roughly doubling, ~30→60–75, peaking ~100 in late-2025/early-2026). Rising
    dust-mite awareness is a demand tailwind. [FACT — Trends time series.]
  - **The commercial term is LOW-VOLUME.** "limpieza de colchones" shows a flat baseline
    with isolated spikes — the signature of a low-volume query. This *independently
    corroborates* "no meaningful free search-volume number exists" and reframes the service
    as a **considered, low-frequency purchase**, not high-traffic search demand. [FACT —
    time-series character.]
  - **Madrid > Valencia in commercial search interest.** For "limpieza de colchones",
    Interés por subregión ranks **Comunidad de Madrid #2 (index 63)**; **Comunitat
    Valenciana is outside the top 5** (of 16). Canarias #1 (100). The health term "ácaros"
    instead peaks in La Rioja/Extremadura/Andalucía/Asturias — a health-search geography,
    not commercial. [FACT — Trends subregion.] This is the first *search-based* signal that
    Madrid is the stronger commercial market, echoing its ~4.1× population edge (§5.3).
  - **Seasonality: WEAK / inconclusive — the earlier "spring peak" hypothesis is NOT
    confirmed.** Neither term shows a clean annual cycle: the commercial term is too spiky
    (low volume), and "ácaros" is dominated by its upward *trend*, not a repeating seasonal
    peak. Honest revision: **treat demand as roughly year-round with, at most, a mild
    unconfirmed seasonal wobble** — do not plan around a strong spring spike. (Month-level
    extraction would need the Trends CSV, which a second (Codex) session could not reach —
    it hit the same 429 wall this session's session-warming got past.)
  - **Real user language (rising related queries)** — useful raw material for the marketing
    report: "limpieza de colchones a domicilio **precio**" (+60%, price sensitivity);
    for ácaros, "**spray antiácaros mercadona**" (a cheap DIY substitute the business
    competes against) and "ácaros en la cama síntomas". [FACT — Trends related queries.]
- **Keyword-volume bands** (Ahrefs/Ubersuggest free, Spain, 2026-07-07 — via the Codex
  addendum, `trends-keywords-addendum.md`): the *commercial* terms register **>100/mo**
  (limpieza de colchones, ...a domicilio, limpieza de sofás a domicilio); the
  *ácaros/higienización* terms **<100/mo**. Ubersuggest showed **1.3K** for "limpieza de
  sofás" vs Ahrefs **<100** (accented spelling) — a ~13× tool disagreement, so no precise
  number is defensible. Directionally the money terms sit at **low-hundreds to ~1K/mo
  nationally** — small but real, consistent with the low-volume Trends curve. Exact figures
  need Microsoft (Bing) Keyword Planner (account-walled). [FACT for displayed bands;
  ESTIMATE for the interpretation.]
- **Strong DIY / substitute intent (Google related searches, FACT — marketing-critical):**
  a large share of related searches are *self-treatment*, not hiring — "bicarbonato",
  "con plancha", "vinagre", and repeatedly **Mercadona / Sanytol / Lidl / Leroy Merlin**
  (cheap products). [ANALYSIS: the premium service's first competitor is **DIY**, not
  another company — messaging must earn the gap over a €3 supermarket spray.] (Codex's list
  was Granada-IP-localized; the DIY/product/price patterns generalise, the "Granada"
  business names do not.)

### 5.5 Sector context

Spanish professional-cleaning sector: **€14,575 M (2024)**, Iberian market €16,000 M
(+6.5% YoY), >35,400 firms, 95% under 20 employees (FACT — Empresa&Limpieza / AELMA-DBK /
Forbes-Informa). Building-cleaning (CNAE 8121) specifically: **20,048 active firms** (2024),
with regional revenue **Madrid ≈€2,205 M vs Comunidad Valenciana ≈€213.7 M** — a ~10×
Madrid-over-Valencia ratio (FACT — eInforma). Digital ad context: Spain Search-ad spend
2025 = **€1,992.6 M (+11.3% YoY)** (FACT — IAB Spain/PwC). **Caveat: CNAE 8121 and the
sector totals are the broad, mostly-B2B contract-cleaning market — no market-sizing exists
for the B2C in-home upholstery-hygiene niche specifically.** Use only as macro backdrop;
the ~10× Madrid/Valencia firm-revenue ratio does, however, echo the ~4.1× population ratio
(§5.3) as a directional sense of relative market size.

---

## 6. Acquisition channels

### 6.1 Google Ads — CPC (ESTIMATE, triangulated — Keyword Planner confirmed walled)

**Keyword Planner is confirmed inaccessible** (2026-07): Google now forces a spending
account, and the old "create an account without a campaign" escape hatch is closed — the
guided flow ends at a sales phone number. No free public source exposes a Spain
keyword-level CPC for these terms either (verified in two independent research sweeps).
So CPC is **triangulated** from three angles, all shown — this is the honest
approximation the founder chose over a false-precise invented number.

Spanish proxies (WEAK — agency blogs, no methodology, but Spain + recent):
- Low-competition local niche: **€0.50–2** (recomiend.app 2025)
- Plumbing/electric local **€2–6**, locksmith **€3–7** (Osyris 2026)
- Spain all-sector average €0.91 (gorkagarmendia 2015 — obsolete; **Madrid ~+30%**,
  Canarias −30% in that same regional split; Valencia not broken out)

US benchmarks (STRONG method, WRONG country/category — ceiling only):
- Cleaning/maid CPC $8.50 (LocalIQ 2025); Home & Home Improvement $8.33 (WordStream 2026)

**Triangulation [ESTIMATE, derivation shown]:** cleaning is a *non-emergency,
lower-competition* local service → it sits at the **bottom** of the Spanish local-services
band, not the plumber/locksmith top. Spanish nominal CPCs run well below US (the proxy
band €0.5–6 vs US ~$8.3–8.5, i.e. Spain ≈ 25–45% of US). Both angles converge on
**≈ €1.0–3.0/click, central ~€1.5–2.0**, with **Madrid ≈ +30% over Valencia**. Label
**ESTIMATE** — a planning range, not a measured number. The cheapest way to replace it
with a FACT is the first live campaign itself.

**Single real data point (corroboration):** Ubersuggest displayed **€2.18 CPC** for
"limpieza de sofás" (free tool, Spain, 2026-07-07 — Codex addendum). It falls inside and
near the centre of the triangulated band, which strengthens confidence in the ~€1.5–2
central estimate. Still one tool / one term — corroboration, not a substitute for planner
data. The identified route to exact volume + CPC is **Microsoft (Bing) Advertising Keyword
Planner** (official, account-walled — easier to open than Google's).

### 6.2 Google Ads — conversion & CPA (ESTIMATE, US-anchored)

- US cleaning CVR **17.65%**, CPL **$46.99** — best-in-class among home services
  (LocalIQ 2025). Do **not** assume a new Spanish page hits US-benchmark CVR.
- US home-improvement CVR **8.05%**, CPL **$90.92** (WordStream 2026).
- All-industry landing-page CVR median **6.6%** (Unbounce, 41k pages).

### 6.3 Worked funnel — ESTIMATE, illustrative method only (not a target)

| Step | Factor | Value | Basis |
| --- | --- | --- | --- |
| Budget | (illustrative) | €1,000/mo | chosen for legibility |
| ÷ CPC | €2.00 | → 500 clicks | ESTIMATE (triangulated central, §6.1) |
| × CVR | 8% | → 40 leads | ESTIMATE (conservative vs US 17.65%) |
| × close rate | 35% | → **~14 clients** | **HYPOTHESIS — unsourced** |
| = CAC | €1,000 ÷ 14 | **≈ €71/client** | only as good as the close rate |

The close rate (lead→client) has **no source** for a solo premium home-hygiene service in
Spain — it is the funnel's weakest link and must come from first real-campaign data.
**Sensitivity** (why this is a range, not a point): sweeping CPC across its triangulated
band €1.0–3.0 (CVR/close held) gives **≈9–28 clients/mo** and **CAC ≈€36–111**; the true
figures depend most on CPC and close rate, the two least-known inputs — which is exactly
why they stay ESTIMATE/HYPOTHESIS until a live campaign measures them.

### 6.4 Reviews, word of mouth, B2B

- **Reviews move the needle** (US-generalized, FACT): 40% of consumers expect ≥4 stars
  before considering a business; a +1 star rating ≈ **+5–9% revenue** (Luca/HBS, Yelp).
  [ANALYSIS: with reputation self-reported across the field, *verified* reviews are a
  cheap, high-leverage trust asset for the business.]
- **Word of mouth (Spain proxy, MODERATE):** ~40% of Spanish households find a home-services
  pro via family/friends, +35% via other trusted contacts (HomeServe 2019 — home *repairs*,
  not cleaning; dated; sample undisclosed). Directionally: referral is a dominant channel
  for at-home services.
- **B2B mechanics (qualitative, MODERATE):** hotels routinely **outsource** deep cleaning
  (avoids payroll/social-security); **CEHAT** is the sector association; a COVID-era
  CEHAT/ICTE/Mintur protocol sets soft-surface (mattress/sofa) disinfection as a minimum
  standard. Short-term rentals bundle cleaning into turnover or management contracts;
  deep upholstery cleaning is a periodic add-on. **No € spend figure** for hotel/STR
  upholstery-hygiene procurement was found (one weak "~€20/h" hotel-cleaning figure). B2B
  is a real but under-quantified channel — matches the founder's "subject to viability".

---

## 7. Operating zones (FLAG D)

**Critical metric caveat.** Spanish income data mixes three incompatible metrics:
**(1) INE ADRH per-capita** (population-wide, authoritative), **(2) Agencia Tributaria per
tax-declarant** (~1.5–2× higher, excludes non-filers), **(3) per-household** (a separate
INE map layer, not extractable). **Figures below are only comparable within the same
metric.** In particular, **Valencia's satellite towns are AEAT per-declarant 2021, Madrid's
suburbs are INE per-capita 2023 — do NOT read Rocafort (€50,214) as "richer than" Pozuelo
(€30,524).**

### 7.1 Madrid — plausible premium zones

| Zone | Income | Metric | Label |
| --- | --- | --- | --- |
| Pozuelo de Alarcón | €30,524 | INE per-capita 2023 (#1 nationally) | FACT |
| Boadilla del Monte | €26,668 | INE per-capita 2023 | FACT |
| Torrelodones | €25,127 | INE per-capita 2023 | FACT |
| Las Rozas | €24,183 | INE per-capita 2023 | FACT |
| Majadahonda | €24,019 | INE per-capita 2023 | FACT |
| La Moraleja (barrio of Alcobendas) | €196,429 | **AEAT per-declarant** 2023 (richest barrio in Spain) | FACT |
| Salamanca / Chamartín / Aravaca (barrios) | €94k–104k | **AEAT per-declarant** 2023 | FACT |

Geography (FACT): western belt (Pozuelo–Majadahonda–Las Rozas–Boadilla) is a tight
**6–8 km / ~10–15 min** cluster ~10 km from centre. Alcobendas/La Moraleja is a **separate
~20 min** northern trip. Central districts (Salamanca, Chamartín, Chamberí, Retiro,
Moncloa, Hortaleza) sit in the dense core.
[ANALYSIS: Madrid presents **two-to-three distinct operating clusters** (western belt,
central core, northern Moraleja pocket) that don't easily combine in one 4-stop day.]

### 7.2 Valencia — plausible premium zones

| Zone | Income | Metric | Label |
| --- | --- | --- | --- |
| Rocafort (municipality) | €50,214 | AEAT per-capita 2021 (richest in prov.) | FACT |
| Bétera | €42,948 | AEAT per-capita 2021 | FACT |
| Godella | €41,451 | AEAT per-capita 2021 | FACT |
| San Antonio de Benagéber | €39,816 | AEAT per-capita 2021 | FACT |
| L'Eliana | €39,233 | AEAT per-capita 2021 | FACT |
| Pla del Real (city district) | €20,636 | INE per-capita 2023 (richest district) | FACT |
| L'Eixample (city district) | €20,081 | INE per-capita 2023 | FACT |

Geography (FACT): the four satellites (Rocafort, Godella, Bétera, L'Eliana) form a **tight
~20 km / 20–25 min** corridor (Camp de Túria / L'Horta Nord), all close to the city centre;
in-city premium districts are central.
[ANALYSIS: Valencia's affluent geography is **structurally more favourable** for a single
operator's 4-services/day radius than Madrid's split layout — one compact zone vs two/three.]

---

## 8. Desplazamiento & minimum-order norms (FLAG A)

Observed market practice (documenting what the market does — **not** prescribing a model;
that's a later phase):

| Practice | Who / evidence | Figures | Label |
| --- | --- | --- | --- |
| Travel folded into price within a home region, free | Tapinext, Aladinos, Superlimpia, Mr Mantser, Clean-Home, Lux Limpio, Lavamatt (own sites) | Free within city/Comunidad | FACT (many primary sources) |
| Minimum order to justify a visit | Aladinos €70, Superlimpia €60/70, Limptex €70, TAPICRIS €60 | €60–70 | FACT |
| Free radius + per-km surcharge beyond | general home-cleaning aggregate | €0.5–1/km beyond ~40–50 km | WEAK (aggregator, unnamed) |
| Explicit flat travel/call-out fee | locksmiths/technicians (ReleMat €49, Benimestic €50) | €15–50 | FACT for those, but **adjacent sector** |
| In-city free + beyond quoted | WillBeClean (Valencia) | free in-city, "desde €20" >50 km | WEAK (site unreachable) |

[ANALYSIS: the sector norm for *scheduled* at-home cleaning is **fold travel in, free
within the home region, use a €60–70 minimum order** to keep small jobs viable. Explicit
per-km fees belong to the urgency/locksmith sub-market, not this one. The founder's FLAG-A
question ("fold in vs charge separately vs by zone") has a clear market default — but the
recommendation itself is Phase 2.]

---

## 9. Admin & running costs (FLAG C, B, E)

### 9.1 FLAG C — Autónomo cuota (FACT)

- **Tarifa plana: €80/month**, 12 months, extendable +12 (24 total) if net income stays
  below SMI. Eligibility: not in RETA in prior 2–3 years, no SS/Hacienda debt. [FACT —
  in force since 2023; corroborated across specialist sources; seg-social.es 403'd on
  direct fetch so not pulled from primary, but consistent.]
- **2026 MEI wrinkle:** sources disagree whether the 0.9% MEI stacks on the flat rate
  (→ ≈€88–89/mo) or not (€80 clean). **ESTIMATE / unresolved** — confirm via the official
  RETA simulator.
- **After tarifa plana**, cuota is by net-income bracket (sistema por ingresos reales,
  BOE Orden PJC/178/2025, prorogated into 2026 by RDL 16/2025 — **primary sources fetched
  directly**). Low-income launch phase: **≈€205–300/month** (tramo 1 reducida min base
  €653.59 × 31.4% = €205.23; general table starts ≈€300). Full range €200–590/mo.

### 9.2 FLAG B — Static-site hosting (FACT)

- **Hosting ≈ €0/month.** Recommended: **Cloudflare Pages** — the only free tier that is
  *both* commercial-use-allowed *and* effectively uncapped bandwidth *and* full custom
  domains. **GitHub Pages and Vercel Hobby explicitly prohibit commercial use** on their
  free tiers — disqualified for a commercial landing. [FACT — official pricing pages.]
- **Domain:** `.es` €8.46/yr renewal (€7.25 yr 1), `.com` €16.32/yr renewal (€9.67 yr 1),
  OVH official ES pricing. [FACT.]
- **Total running cost: ≈€8–16/year (≈€0.70–1.35/month)** — confirms the founder's "tends
  to zero" orientation. Hosting free; domain is the only line item.

### 9.3 FLAG E — CLP→EUR (FACT, ±1.5%)

- Rate 2026-07-07: **1 CLP ≈ €0.000945** (xe.com, timestamped; three providers spread
  1,051–1,061 CLP/€, ~1.5%). **ECB publishes no CLP reference rate** (confirmed).
- Conversions of the Chile reference prices (from founder-inputs):
  **40,000 CLP ≈ €37.80**, **28,000 CLP ≈ €26.46**.
- [ANALYSIS: the Chilean matrimonio anchor (~€38) lands right at the *low end* of the
  Spanish matrimonio cluster (€60–75) — consistent with the founder's note that Spanish
  prices are likely higher. Confirms the Chile figure is a **method cross-check, not a
  target**, exactly as founder-inputs states.]

---

## 10. Load-bearing figures — adjudication & second-source status

The figures the economic model will stand on, with the brief's second-source rule applied:

| Figure | Value | Label | 2nd independent source? | Verdict |
| --- | --- | --- | --- | --- |
| Market price — colchón matrimonio | €55–90 (cluster €60–75) | FACT | Yes (many independent sites + Cronoshare €40–100 ticket, Jan-2026) | **Graduated (well corroborated)** |
| Market price — sofá 3 plazas | €85–120 (cluster €90) | FACT | Yes (many sites) | **Graduated** |
| Desplazamiento norm | Free in-region + €60–70 min | FACT | Yes (multiple sites) | **Graduated** |
| Autónomo cuota (yr 1 / later) | €80 / €205–300 mo | FACT | Yes (BOE primary + specialists) | **Graduated** |
| Hosting + domain | ≈€0 + €8–16/yr | FACT | Yes (official pricing pages) | **Graduated** |
| CLP→EUR + conversions | €0.000945; €37.80 / €26.46 | FACT | Yes (3 FX providers) | **Graduated (±1.5%)** |
| Allergy prevalence (respiratory) | ~20% | FACT | Partial (SEPAR; older survey agrees ~30% "any allergy") | **Provisional-FACT** |
| Demographics (pop, 45–65, households) | see §5.3 | FACT | INE/Padrón | **Graduated** |
| Income by premium zone | see §7 | FACT | INE / AEAT | **Graduated (mind the metric)** |
| **Google Ads CPC (Spain)** | €1.0–3.0 (triangulated, central ~€1.5–2) | **ESTIMATE** | Spanish proxies + US ceiling, triangulated (§6.1); Ubersuggest €2.18 corroborates | **Best free approximation — replace w/ Microsoft KP or live campaign** |
| **Conversion rate** | ~8% (modelled) | **ESTIMATE** | US only | **Range for modelling; measure on launch** |
| **Close rate (lead→client)** | 35% (assumed) | **HYPOTHESIS** | None | **Needs campaign data — funnel's weakest input** |
| Search-volume bands | money terms >100/mo; ácaros terms <100/mo; sofás 1.3K↔<100 (tools disagree ~13×) | FACT (bands) — no precise number | Ahrefs + Ubersuggest (§5.4, addendum) | **Coarse; exact needs Microsoft KP** |
| Category demand trend | growing (ácaros ~2× in 5y) | FACT | Google Trends direct (§5.4) | **Graduated (tailwind)** |
| Commercial search interest Madrid vs Valencia | Madrid #2 (63); Valencia outside top 5 | FACT | Google Trends subregion (§5.4) | **Graduated** |
| **Seasonality curve** | year-round; spring-peak NOT confirmed | corrected via Trends | Google Trends direct (§5.4) | **Hypothesis retired — mild/inconclusive** |
| **B2B spend (hotels/STR)** | — | — | **NOT FOUND** | **Blocked — no public figure** |
| Pet-ownership household % | 49% vs 61% | **CONFLICTING** | 2 sources disagree | **Use ANFAAC anchor; don't average** |

---

## 11. Gaps & what closes them

**Handled by estimation (founder decision 2026-07-07: approximate rather than block) —
these carry an ESTIMATE/HYPOTHESIS label and a range, not a false-precise number:**

1. **Real Spanish CPC** — Google Keyword Planner confirmed walled (spending account forced;
   no-campaign escape hatch closed). **Resolved as a triangulated ESTIMATE €1.0–3.0/click
   (§6.1), corroborated by one real Ubersuggest point (€2.18).** The one remaining route to
   an exact figure is **Microsoft (Bing) Advertising Keyword Planner** (official,
   account-walled, easier than Google's); otherwise the first live campaign settles it.
2. **Search volumes** — no *precise* free figure exists; free tools give only coarse bands
   (Ahrefs >100/<100) that disagree ~13× across providers (§5.4). **Substituted** by
   band + structural demand evidence; exact volume needs Microsoft KP or a paid SEO tool
   (Sistrix/SEMrush), not justified pre-launch.
3. **Seasonality curve** — automated Trends is IP-blocked (429) and the Chrome extension
   would not connect. **Held as an ESTIMATE (spring peak)** pending a 30-second founder
   eyeball at `trends.google.es` (URLs in appendix), which upgrades it to FACT.

**Blocked on primary data that may not exist publicly:**

4. **B2B upholstery-hygiene spend** for hotels / short-term rentals — no figure found;
   would need direct outreach or a sector report.
5. **Close rate** for a solo premium home-hygiene service — only first real-campaign data
   will settle it.

**Resolvable with more targeted fetching (lower priority):**

6. Madrid *city-level* net household income (only regional found); per-household income by
   the named districts (INE ArcGIS map, not text-extractable).
7. Independent (not self-reported) Google ratings/review counts for competitors.
8. Re-verify the four Valencia sites reached only via snippet (403/DNS): Tu Colchón Limpio,
   eLimpio, Elimpio Colchones, WillBeClean.
9. Confirm the 2026 MEI-on-tarifa-plana question via the official RETA simulator.

**Cross-report note:** the CPC/CVR/close-rate trio and the search volumes are the inputs
the **economic report's scenarios** (Phase 4) will be most sensitive to. They are the
right thing to gate on — better to launch with a labelled range and a plan to measure than
a false-precise invented number.

---

## 12. Sources appendix (primary / authoritative, by section)

- **Competition (own sites, fetched 2026-07-07):** superlimpia.es, urbancleanermadrid.es,
  madrid.ecocleans.es, limpiezadesofasadomicilio.com, mrmantserclean.com, aladinos.es,
  sofaclin.es, vaporexmadrid.es, limptex.com, tapinext.com, ecolimp.es, cleannew.es,
  yaklean.com, lagalardonada.es; biomex.es, urbancleaner.es, valencia.ecocleans.es,
  clean-home.es, luxlimpio.es, limpiezacentauro.com, harrysucio-clean.es,
  limpiezatapiceriasvalencia.com. Independent editorial: moncloa.com (17-Oct-2025).
- **Allergy:** SEPAR via immedicohospitalario.es (2025); Alergológica 2015 via
  fundacioncaser.org; Infosalus/IMOP (2017); SEAIC via diariosigloxxi.com (2026-04-28).
- **Pets:** anfaac.org/datos-sectoriales (2025); ipmark.com; allpetfood.net; elespanol.com.
- **Demographics:** INE ADRH 2023 (ine.es/dyngs/Prensa/ADRH2023.htm); Padrón via
  foro-ciudad.com; Ayto Madrid & 7televalencia.com; idealista.com (Census 2021 rental).
- **Sector:** empresaylimpieza.com; aelma.com (DBK); forbes.es (Informa).
- **Channels:** localiq.com (2025 home-services benchmarks); wordstream.com (2026);
  unbounce.com; brightlocal.com (LCRS 2025); Luca/HBS "Reviews, Reputation & Revenue";
  homeserve.es (2019); CEHAT/ICTE/Mintur protocol (ithotelero.com, mintur.gob.es).
- **CPC/volume/demand estimation anchors:** osyrismarketingdigital.com (2026, Spain local
  CPC proxies), recomiend.app (2025), gorkagarmendia.com (2015 regional CPC); cronoshare.com
  (Jan-2026, real colchón quotes €40–100); einforma.com (CNAE 8121 firm counts/revenue,
  2024); iabspain.es (Search-ad spend 2025); support.google.com/localservices (ES).
  Seasonality editorial: blog.ventadecolchones.com, sanitas.es. **Discarded as
  contaminated/unverifiable:** cristianprograma.com (404, unrecoverable volume claims).
- **Trends & keyword tools (direct reads, 2026-07-07):** trends.google.es (this session,
  time series + subregion + related queries); Ahrefs Free Keyword Generator (Spain, volume
  bands), app.neilpatel.com Ubersuggest (Spain, "limpieza de sofás" 1.3K / CPC €2.18),
  google.es related searches (Granada-localized), about.ads.microsoft.com (Bing KP, route
  identified, account-walled). Full method log + per-term detail: **`trends-keywords-addendum.md`**
  (Codex session — honestly records its own 429 wall on Trends).
- **Zones:** INE ADRH 2023; Agencia Tributaria via elespanol.com, democrata.es,
  esdiario.com, valenciaplaza.com; distance sources distanciaentre.org, geodatos.net.
- **Admin:** BOE-A-2025-3780 (Orden PJC/178/2025), BOE-A-2025-26458 (RDL 16/2025);
  infoautonomos.com; official pricing pages Cloudflare/GitHub/Netlify/Vercel; OVHcloud ES;
  xe.com, wise.com, x-rates.com; ECB reference-rates page.
- **Google Trends URLs to check manually (seasonality):**
  `trends.google.es/trends/explore?geo=ES&q=limpieza%20de%20colchones`;
  `trends.google.es/trends/explore?geo=ES&q=%C3%A1caros%20colch%C3%B3n`.

---

*End of Phase 1 dossier. Next boundary: founder OK before Phase 1 is closed. No pricing
architecture (Phase 2) or report copy (Phases 3–4) is decided here.*
