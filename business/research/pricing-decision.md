# Pricing study & decision record — Phase 2 (Grupo Vesta business reports)

> Phase 2 deliverable of the business-report assignment (`docs/briefs/business-report.md`).
> Written 2026-07-07 at **Opus / max effort**, **pure reasoning** — no new web research.
> It stands entirely on the Phase 0 interview (`founder-inputs.md` + the private
> calibration) and the Phase 1 market dossier (`market-dossier.md`,
> `trends-keywords-addendum.md`). It assembles a usable price map, analyses the
> charging models, simulates margins from the founder's real costs, and proposes
> **three price architectures with trade-offs**.
>
> **The price architecture is a founder DECISION, not a recommendation.** This file lays
> out the options and the honest math behind each. **Decisions recorded 2026-07-07 (§6):
> the founder retains all three architectures (A, B, C) as comparative strategic scenarios
> — not one is chosen — to carry their different strategies and impact into the reports for
> a stakeholder presentation. IVA: régimen general 21% (all margins here are net of IVA).
> B2B menu: built now (§2.4).**

## 0. How to read this file

Label standard (inherited from the brief's number-verification section):

- **FACT** — sourced in the dossier (market prices, costs stated by the founder).
- **CAPTURED** — a founder-stated input from the Phase 0 interview.
- **ESTIMATE** — derived here; the derivation is shown inline.
- **HYPOTHESIS** — plausible but unverified; needs founder validation or a live test.
- **PROPOSAL** — a price point or structure *designed here* for the founder to accept,
  reject or tune. Never confuse a PROPOSAL with a market FACT.

Two variables sit above everything and are flagged up front because they move the
numbers more than any price choice:

1. **IVA treatment (§3.2).** Cleaning services to private homes carry **21% IVA**.
   **Decided (founder, 2026-07-07): régimen general 21%** — so net revenue = price ÷ 1.21;
   the business keeps **82.6%** of every sticker price. This is the single biggest margin
   lever in the study (larger than the gap between architectures). **All margin figures below
   are net of 21% IVA** as the decided reality; gross prices are kept only as the market-facing
   sticker.
2. **Average ticket per visit (§3.6).** Because cost is trip-dominated (§3.1), margin is
   governed by how many pieces one visit sells, not by per-piece price. This is why the
   charging model (§2) and the price architecture (§4) are the same decision seen twice.

---

## 1. Price map — real market prices by service and city

Assembled from the dossier's competitor survey (§2–§4). All ranges are **FACT** (each
competitor's own live site, fetched 2026-07-07). "Cluster" = the mode/central band where
most published prices land — the actionable anchor. A single "average" would be ESTIMATE;
the **band** is the honest market signal.

### 1.1 Consolidated grid (per service, IVA-inclusive as published to consumers)

| Service | Madrid cluster | Valencia cluster | Actionable market anchor | Label |
| --- | --- | --- | --- | --- |
| Colchón individual (90 cm) | €35–45 | €40–55 | **€40–50** | FACT |
| Colchón matrimonio (135–150) | €60–75 | €60–65 | **€60–75** | FACT |
| Colchón king (160–180) | €80–90 | €65–100 | **€80–95** | FACT |
| Sofá tela (per plaza) | €30/plaza | ~€30–35/plaza | **€30/plaza** | FACT |
| Sofá 2 plazas | €60–70 | €70–79 | **€65–79** | FACT |
| Sofá 3 plazas | ~€90 | ~€90 | **€90–99** | FACT |
| Sillón / butaca (1 plaza) | €42–50 | (unpublished) | **€45–50** | FACT (Madrid) |
| Chaise longue / rinconera | €120–175 | €89–190 | **€120–175** | FACT |
| Pedido mínimo (minimum order) | €70 | (mostly unpublished) | **€60–70** | FACT |
| Desplazamiento (travel) | Free | Free | **Free within region** | FACT |

### 1.2 Reading the map — three FACTS that constrain any pricing choice

- **Madrid ≈ Valencia.** Prices are near-identical across both cities; if anything Valencia
  is marginally *firmer* on sofás (€70–79 vs €60–70) and colchón individual. There is **no
  Madrid premium and no Valencia discount** to design around. [FACT — dossier §4.1.]
- **"Por zona" ≠ price differentiation.** The affluent operating belts (Pozuelo, La Moraleja;
  Rocafort, Godella — dossier §7) are *income* geography, not *price* geography. **No
  competitor prices by neighbourhood.** So "price map by zone" resolves to: (a) Madrid vs
  Valencia = the same; (b) the premium belts are where *demand* and *willingness to pay*
  concentrate, not where the published price changes. Charging a premium-belt surcharge is
  therefore an **option** (§5.3), not a market norm. [FACT + ANALYSIS.]
- **Opaque pricing is the category norm.** In Valencia 10 of 16 competitors publish no price
  at all; in Madrid ~half hide at least one. **No premium-positioned player publishes
  transparent prices** — the empty lane the dossier flagged (§4.2). Transparency is itself a
  differentiator, independent of the price level chosen. [FACT.]

### 1.3 Cross-check anchors (method, not targets)

- **Chile reference** (the founder's operating business, real prices a market pays):
  matrimonio 40,000 CLP ≈ **€37.80**; individual 28,000 CLP ≈ **€26.46** (CLP→EUR
  €0.000945, dossier §9.3). Both land at or **below the low end** of the Spanish cluster.
  Implication: **matching Chilean prices in Spain would underprice the market by ~40%.**
  Even the most aggressive architecture below (A, penetración) sits *above* the Chilean
  anchor. [FACT — confirms Chile is a cross-check, not a target.]
- **Cronoshare live tickets** for "limpieza de colchones": **€40–100** (Jan 2026) — a real
  paid market, brackets the colchón grid above. [FACT — dossier §5.4.]

---

## 2. Charging models (modos de cobro)

The founder named four: servicio único, packs, bonos, contratos B2B. Each is analysed
against market evidence and the cost structure. The recurring theme: **anything that raises
pieces-per-visit is worth more than anything that raises price-per-piece**, because of §3.1.

### 2.1 Servicio único — per-piece (the market default)

- **What the market does:** per-piece pricing — colchón by size, sofá by plaza — with a
  **€60–70 minimum order** to make a visit worth the trip. [FACT — dossier §8.]
- **Fit:** the necessary baseline. Every architecture in §4 keeps a per-piece menu as its
  spine. The open question is not *whether* but *at what level* (§4) and *with what minimum*
  (§5.2).
- **Weakness for a paid-traffic business:** a single-piece sale barely covers — or fails to
  cover — its acquisition cost (§3.5). Per-piece alone is a fragile model when clients arrive
  from Google Ads.

### 2.2 Packs — the structural lever (strong recommendation to *offer*, level is §4)

Two distinct pack types, both evidenced in the market:

- **Tiered service packs (Good/Better/Best on the *same* piece).** Precedent: Sofaclín
  €97/€119/€169 (essential / deep+stain / +waterproofing). [FACT — dossier §2.1.] Lets a
  price-sensitive client take the entry tier while a premium client self-selects up — the
  business captures willingness-to-pay instead of guessing one price.
- **Volume / multi-piece packs (more pieces per visit).** Precedent: Clean-Home 2× individual
  €69, 3× individual €97; whole-home framings. [FACT — dossier §3.] These attack the CAC
  problem head-on: the trip and the acquisition cost are already paid, so each added piece is
  almost pure contribution (§3.1).
- **Why packs matter here specifically [ANALYSIS]:** with a trip-dominated cost base and a
  ~€71 paid CAC, packs are not an upsell nicety — they are **what turns paid acquisition
  profitable** (§3.6). A "dormitorio completo" or "colchón + sofá" bundle converts a
  loss-making single visit into a solidly positive one.

### 2.3 Bonos / maintenance plan — reframe, don't force a subscription

- **The honest constraint:** deep upholstery cleaning is a **considered, low-frequency
  purchase** — roughly annual/biannual, not monthly (dossier §5.4, Trends "low-volume
  considered search"). A true subscription (monthly billing) **does not fit** the service and
  would read as forced. [ANALYSIS — grounded in the low-frequency FACT.]
- **What *does* fit:** a **plan de mantenimiento** — prepay now + a scheduled revisit in
  12 months at a preferential rate ("primera limpieza + revisión anual"). It converts a
  one-off into a relationship, smooths the low-frequency problem, and books a future revenue
  slot with **zero future CAC**. This is a **retention mechanism, not a revenue engine** — its
  value is a lower blended CAC over time (§3.5), not a big line item.
- **Bono multi-sesión / prepaid credit:** viable for households with several pieces or that
  value a standing arrangement (allergy households treating seasonally). Present as an *option
  within* the maintenance plan, not a headline product. [PROPOSAL.]

### 2.4 Contratos B2B — build the menu now (founder decision)

- **Market reality:** hotels routinely outsource deep cleaning (avoids payroll/SS); short-
  term rentals bundle it into turnover; a CEHAT/ICTE/Mintur protocol treats soft-surface
  disinfection as a minimum standard. **But no € spend figure for B2B upholstery hygiene
  exists publicly** — a genuine data gap (dossier §6.4, §10 "Blocked"). [FACT + gap.]
- **Posture (founder decision 2026-07-07): build the B2B menu now.** It layers on top of the
  B2C scenarios in §4 without driving them. Concrete launch menu below; the demand *size*
  stays a **HYPOTHESIS** (no public B2B spend figure) until first contracts measure it.

**B2B launch menu [PROPOSAL — priced off whichever B2C scenario's per-piece sticker applies]:**

| Tier | Who | Rate | Rationale |
| --- | --- | --- | --- |
| **Volumen S** (10–24 piezas/visita) | small hotel, aparthotel, casa rural | **−15%** off B2C per-piece sticker | trip amortises across many pieces → discount stays high-margin |
| **Volumen L** (25+ piezas/visita) | mid hotel, STR operator with a portfolio | **−25%** off B2C per-piece (quoted) | volume justifies a deeper cut; still far above cost |
| **Contrato periódico** | any B2B wanting scheduled hygiene | fixed fee per property, quoted after a walk-through; quarterly or seasonal | **recurring revenue** the B2C side lacks; predictable cash |
| **STR turnover add-on** | apartamentos turísticos | per-piece volume rate, bookable per turnover | fits the cleaning-into-turnover norm (dossier §6.4) |

- **Per-hour is deliberately excluded** — it commoditises the service, caps margin at
  operator-time, and contradicts a premium posture (the race-to-the-bottom model of the
  contract-cleaning sector, not this niche). [ANALYSIS.]
- **Why it is worth building now even before demand is measured [ANALYSIS]:** B2B is
  structurally the **highest-margin channel per visit**. A hotel with ~30 mattresses at
  Architecture B (€69) − 25% = €51.75/pieza gross (€42.77 net of IVA); across one amortised
  trip that is ~€1,230 net contribution in a single visit — the trip and the acquisition are
  paid once, spread over 30 pieces. The margin case is compelling; only the *demand* is
  unproven, which is why the menu ships now and the volumes stay HYPOTHESIS until real
  contracts land.

---

## 3. Cost structure & margin simulation (from the interview)

All costs are CAPTURED from the Phase 0 interview unless labelled. Derivations shown. **All
contribution figures are net of the decided 21% IVA** (§3.2).

### 3.1 The cost structure — trip-dominated, not production-dominated

| Cost | Value | Type | Note |
| --- | --- | --- | --- |
| Consumables | ≈ **€1.5 / service** | Variable | Brush, products. CAPTURED. |
| Water + electricity | **€0** | — | Supplied by client (work in their home). CAPTURED. |
| Travel / desplazamiento | ≈ **€7 / day** (≈€1.75/service at 4/day) | Variable, per-*trip* | ESTIMATE: ~40 km clustered affluent-belt day @ ~€0.175/km all-in (fuel+wear). Madrid's split belts could push €10–15/day; folds into price per market norm. FLAG A → §5.1. |
| Autónomo cuota | **€80/mo** (yr 1, tarifa plana) → **€205–300/mo** (yr 2+) | Fixed | FACT — dossier §9.1. |
| Gestor | **€30/mo** (€90/quarter) | Fixed | CAPTURED. |
| Car insurance | **€50/mo** | Fixed | CAPTURED. |
| Web (hosting + domain) | ≈ **€1/mo** (€8–16/yr) | Fixed | FACT — dossier §9.2. |
| Equipment (Hyla pack) | **€2,300** one-off, already paid | Sunk | CAPTURED. Amortise; sets the cost of a 2nd machine when scaling. |
| Marketing / CAC | ≈ **€71 / client** (range €36–111) | Variable, per-*acquisition* | ESTIMATE — dossier §6.3 funnel. Paid-traffic only; ~€0 for referral/repeat. |

- **Fixed monthly, year 1:** 80 + 30 + 50 + 1 = **€161/month** (excl. marketing).
- **Fixed monthly, year 2+ (post tarifa plana):** **€286–381/month** (cuota rises to
  €205–300).
- **The headline:** direct production cost is **~€1.5 per piece**. Once the operator is on
  site, a second piece costs ~€1.5 + ~15–60 min of a fixed daily capacity. **Margin is set by
  operator-hours, the trip, and acquisition — not by materials.** [ANALYSIS — the load-bearing
  fact of this whole study.]

### 3.2 The IVA wedge — DECIDED: régimen general 21%

- Cleaning services to particulares are **21% IVA**. **Founder decision (2026-07-07):
  régimen general 21%.** The published market prices in §1 are what the *client pays*
  (IVA-inclusive), so **net revenue = price ÷ 1.21** — the business keeps **82.6%** of the
  sticker; **17.4% is IVA remitted to Hacienda.**
- Example: matrimonio at **€65 gross → €53.72 net.** That €11.28 wedge is larger than the gap
  between two of the architectures in §4 — which is why every margin figure from here on is
  shown **net of 21% IVA**, with gross kept only as the market-facing sticker.
- Input IVA on consumables/fuel is deductible under the general regime, but those inputs are
  tiny (~€1.5/service), so costs are kept at face value below — a negligible, conservative
  simplification.
- *(The franquicia-del-IVA small-business regime was considered and set aside by this
  decision; it is no longer modelled.)*

### 3.3 Contribution per service (per piece)

Matrimonio at market cluster mid (€65). **Net of 21% IVA: €53.72.** Minus consumables (€1.5)
and travel share (€1.75 at 4/day): **€50.47 net contribution per piece** (gross-of-IVA it
would be €61.75). [ESTIMATE — derivation shown.] The margin on *materials* is near-total, but
that is misleading on its own — it ignores the trip and the CAC, which is where the money
actually goes (§3.5).

### 3.4 Per-day / per-trip economics + capacity ceiling

At full capacity (4 matrimonios/day @ €65, 22 working days) — this is the **ceiling, not a
forecast** (scenario projections are Phase 4):

- Revenue/day: 4 × €65 = **€260** gross. Contribution/day pre-fixed, pre-IVA: 260 − 4×1.5 − 7
  = €247.
- Revenue/month (gross ceiling): **€5,720**. Gross contribution/month after €161 fixed, before
  marketing and IVA: €5,273.
- **Net of the decided 21% IVA:** net revenue ceiling ≈ €4,727/mo; contribution after €161
  fixed ≈ **€4,280/mo**. [ESTIMATE — the realistic net ceiling for one operator, before
  marketing.]
- **Capacity, not price, is the ceiling.** One operator maxes at ~88 services/month. Growth
  beyond that needs a second operator (2nd €2,300 machine, payback ≈ **37 services ≈ 9 working
  days** at capacity) — the owner-transition lever, and a Phase 4 topic, noted here only to
  show the equipment cost is trivially recovered when scaling.

### 3.5 Break-even and the CAC truth

- **Break-even excl. marketing (year 1):** €161 fixed ÷ €50.47 net contribution = **3.2
  services/month** — about one day of work covers all fixed costs. The fixed base is
  negligible. [ESTIMATE.]
- **But include acquisition, and the picture inverts.** A **single matrimonio acquired via
  paid ads**, net of 21% IVA: `€53.72 − €1.5 − €7 (full trip) − €71 CAC = −€25.78` — **a loss
  on the first visit** (before fixed). [ESTIMATE — the study's sharpest finding; gross-of-IVA
  it is −€14.5, so the 21% IVA nearly doubles the hole.]
- The fixed base is trivial to cover; **paid acquisition of single-piece jobs is not.** The
  business's real break-even question is not "how many services cover the cuota" (≈3) but
  **"how do we make a paid-acquired visit exceed €71 of value"** — answered by ticket size,
  not by the fixed side.

### 3.6 The pack imperative (why §2.2 and §4 are the same decision)

Same €71 CAC, three ticket sizes, **net of the decided 21% IVA**:

| Visit | Gross | Net (÷1.21) | − consumables − trip − CAC | Net contribution |
| --- | --- | --- | --- | --- |
| 1 matrimonio | €65 | €53.72 | − 1.5 − 7 − 71 | **−€25.78** |
| matrimonio + 3-plaza sofá | €155 | €128.10 | − 3 − 7 − 71 | **+€47.10** |
| "casa" pack (2 colchones + sofá) | €200 | €165.29 | − 4.5 − 7 − 71 | **+€82.79** |

[ESTIMATE — net of 21% IVA; CAC held at central €71.]

**Two-plus pieces per paid visit is the difference between losing and making money on
acquisition.** This is the concrete reason the minimum order and the pack menu are strategic,
not cosmetic — and it interacts with the price architecture: a *lower* price (Architecture A)
makes the single-visit CAC hole *deeper*, while tiers/packs (C) dig out of it. The three
architectures differ mostly in **how well they solve this**.

> **Note on channel mix:** the €71 CAC is *paid-traffic* cost. Referral and repeat clients
> cost ≈€0 to acquire (dossier §6.4: referral is a dominant channel for at-home services;
> verified reviews lift revenue +5–9% per star). Blended CAC falls as the review/referral
> flywheel spins up — so the single-piece loss above is a **year-1 cold-start** problem, worst
> exactly when cash is tightest. That timing is why the architecture choice is cash-sensitive,
> not just brand-sensitive.

---

## 4. Three price architectures (retained as scenarios, with trade-offs)

Each is a concrete PROPOSAL grid (illustrative price points, tunable), a margin/CAC read, the
strategic tension it resolves (founder's "low price to capture fast" vs the web lead's
"protect prestige"), and its cash-flow character. **Prices are PROPOSAL, anchored to the §1
market FACTs; contribution figures are net of the decided 21% IVA.** **Per the founder's
decision (§6), all three are retained as comparative scenarios** — not one is chosen — so the
economic report (Phase 4) can show a stakeholder each strategy's distinct impact side by side.
§5 lists cross-cutting recommendations that apply under any of them.

### 4.1 Architecture A — *Penetración* (below market)

Price ~15–20% under the cluster to capture clients fast. The founder's stated instinct.

| Service | Price (PROPOSAL) | vs market |
| --- | --- | --- |
| Colchón individual | €39 | −15% |
| Colchón matrimonio | €55 | −15% |
| Colchón king | €69 | −15% |
| Sofá (per plaza) | €25/plaza | −17% |
| Sofá 3 plazas | €72 | −20% |
| Pedido mínimo | €55 | low |

- **Margin read (net of 21% IVA):** matrimonio net €45.45; **single paid visit = −€34.05**
  (deeper hole than any other architecture); 2-piece visit (matrimonio + sofá, €127 gross)
  ≈ **+€24**. [ESTIMATE.]
- **Resolves:** the founder's capture-fast instinct — maximally.
- **Trade-offs (honest, mostly against):**
  - (−) **Worst cash profile on paid traffic** — lower price + same €71 CAC = the deepest
    single-visit loss, precisely when there is no runway (break-even urgency is a hard
    priority, founder-inputs §2). Penetration + paid ads + no cushion is the riskiest
    combination in this study.
  - (−) **Damages the premium asset** the whole web/brand project is built to create (the web
    lead's explicit concern, founder-inputs §3). Hard to raise prices later without churn.
  - (−) **Fights the wrong battle.** The real low-price competitor is **DIY** — a €3 Mercadona
    spray (dossier §5.4). You cannot out-cheap a supermarket; discounting concedes the premium
    story without winning the price story.
  - (+) Fastest raw conversion *if* volume materialises and is mostly referral/repeat (low
    CAC), where the loss math softens.
- **When it makes sense:** only if acquisition is dominated by *free* channels (referral, local
  word-of-mouth) rather than paid ads, and brand prestige is explicitly sacrificed for speed.

### 4.2 Architecture B — *Igualar mercado con look premium* (match price, premium presentation) — the brief's required option

Price **at** the market cluster, **transparently published**, wrapped in a premium brand the
competitors don't have. Same sticker as rivals; superior everything-else.

| Service | Price (PROPOSAL) | vs market |
| --- | --- | --- |
| Colchón individual | €49 | at cluster |
| Colchón matrimonio | €69 | at cluster (upper) |
| Colchón king | €89 | at cluster |
| Sofá (per plaza) | €32/plaza | at cluster |
| Sofá 3 plazas | €95 | at cluster |
| Pedido mínimo | €70 | market norm |

- **Margin read (net of 21% IVA):** matrimonio net €57.02; single paid visit ≈ **−€22.48**;
  2-piece (colchón + sofá, €164 gross) ≈ **+€54.5**. [ESTIMATE.] Full market margin retained.
- **Resolves:** the middle ground between the two positions — the founder "adapts to market
  price" *and* the web lead's prestige is protected. No margin sacrificed.
- **Trade-offs:**
  - (+) **Owns the empty lane** the dossier identified: *premium look + honest published
    price*, which **no competitor occupies** (§1.2). Transparency is a trust differentiator in
    a market where 10/16 hide prices — you win on **trust, not on discount**.
  - (+) The premium wrapper justifies sitting at the **top** of the cluster (€69–75, not €60)
    without reading as "expensive."
  - (+) Protects future price increases; attracts the 45–65 quality segment the brand targets.
  - (−) Doesn't undercut, so against a pure price-shopper you win on brand, not number —
    conversion leans on the brand/proof actually landing (the web already does this heavy
    lifting).
  - (−) Single-visit CAC still negative — **still needs the pack/minimum discipline** of
    §2.2 / §5.2 to be cash-safe.
- **When it makes sense:** the natural fit for everything the web project is building; the
  lowest-risk way to *not* devalue the brand while staying market-competitive.

### 4.3 Architecture C — *Premium escalonado* (tiered, anchored above market)

Entry at the **top** of the cluster, a **Good/Better/Best** ladder per piece, and packs that
push average ticket **above** market. Positioned slightly premium on the strength of the
vacuum-method story + verified proof + transparency.

| Service | Básico | Profundo (+antimanchas) | Integral (+protección antiácaros) |
| --- | --- | --- | --- |
| Colchón matrimonio | €69 | €89 | €109 |
| Sofá 3 plazas | €95 | €119 | €145 |
| Colchón individual | €49 | €65 | €79 |
| Packs | "Dormitorio" (2 colchones + cabecero) ~€149 · "Casa" (sofá + 2 colchones) ~€200 | | |
| Pedido mínimo | €79 or any pack | | |

- **Margin read (net of 21% IVA):** mid-tier matrimonio €89 net €73.55; single paid mid-tier
  visit ≈ **−€6.45** (closest to break-even of any single visit in the study — under
  gross-of-IVA it was positive at +€9, so even C's premium single visit needs a second piece
  once IVA bites); pack (€200) ≈ **+€82.8.** [ESTIMATE.] Highest margin per visit.
- **Resolves:** leans to the web lead's premium/prestige position; best funds the 8-year
  owner-transition (higher margin → hire a second operator sooner).
- **Trade-offs:**
  - (+) **Best CAC coverage** — a mid/upper-tier single visit lands near break-even (≈−€6 net)
    and any pack clears the CAC comfortably (§3.6); the model that most reliably makes paid
    acquisition profitable.
  - (+) **Captures willingness-to-pay** — price-sensitive clients take *Básico*, premium
    clients self-select up; the business stops guessing one price.
  - (+) Fully consistent with the premium brand and the owner-transition north star.
  - (−) **Highest early execution bar.** A brand-new business pricing *above* market with no
    reputation yet needs its **proof assets live from day 1** — verified reviews, a guarantee,
    ideally a lab certificate (dossier §4.2: certification is a TO-CONFIRM). Without them,
    premium pricing on an unknown brand slows cold conversion — worsening the no-runway early
    cash problem.
  - (−) Requires disciplined tier design and copy; more moving parts to communicate on a
    landing built for a 45–65 mobile audience.
- **When it makes sense:** if the proof assets (reviews/guarantee/cert) can be stood up
  quickly and the founder accepts a slower-but-richer ramp over a fast-but-thin one.

### 4.4 Decision matrix

| Dimension | A — Penetración | B — Match + premium look | C — Premium escalonado |
| --- | --- | --- | --- |
| Matrimonio price (gross) | €55 | €69 | €69–109 (tiered) |
| Net contribution / single paid visit | **−€34** | −€22 | **−€6** |
| Net contribution / 2-piece or pack visit | +€24 | +€54 | +€83 |
| Brand / prestige | **Erodes** | Protects | **Elevates** |
| Cash risk, year-1 cold start | **Highest** | Medium | Medium–low *if* proof assets ready |
| Future price flexibility | Low (locked low) | Medium | **High** |
| Fit with the built web/brand | Poor | **Strong** | **Strong** |
| Execution difficulty at launch | Low | Low | **High** (needs proof assets) |
| Resolves the founder⇄web-lead tension toward… | Founder (speed) | **Middle** | Web lead (prestige) |

*All contribution figures ESTIMATE, net of the decided 21% IVA, €71 central CAC. The three
columns are **retained as scenarios** (§6), not mutually exclusive choices; packs/minimums
(§5.2) apply within each. Note IVA pulls every single-visit contribution negative — the
2-piece/pack row is where each architecture actually earns.*

---

## 5. Cross-cutting recommendations (apply under any architecture — not the decision)

These resolve the founder's open FLAGs and hold regardless of §4. They are recommendations,
not the architecture decision.

### 5.1 Travel model (resolves FLAG A)

The market default is unambiguous (dossier §8): **fold travel into the price, free within the
operating belt, and use a minimum order to keep the trip worthwhile.** Charging per-km in-city
would make Vesta a visible outlier. Recommendation: **free desplazamiento within the chosen
affluent belt**; if a job falls outside the belt, a quoted supplement — not a published fee.
[PROPOSAL, grounded in FACT.]

### 5.2 Minimum order, sized against CAC

The market minimum is €60–70 (§1). But §3.6 shows a single piece at that level loses money on
paid traffic (worse net of IVA). Recommendation: **keep a €60–79 headline minimum for
organic/referral clients, but design the paid-ads offer around a 2-piece / pack entry** (e.g.,
the ad's landing leads with "colchón + sofá" or a per-room pack), so paid-acquired visits clear
the CAC by construction. The minimum protects the trip; the pack protects the acquisition.
[PROPOSAL.]

### 5.3 Zone pricing — an available lever, not a market norm

No competitor prices by neighbourhood (§1.2), but the affluent belts concentrate willingness-
to-pay. A premium-belt surcharge (or simply positioning C in those zones) is a **legitimate
option** — it just isn't something the market currently does, so it must be justified by
service level, not assumed. Recommend **holding one price city-wide at launch** for simplicity
and trust; revisit zone differentiation once demand data exists. [PROPOSAL.]

### 5.4 IVA regime — RESOLVED: régimen general 21%

The founder decided the **general 21% regime** (§3.2 / §6), so every margin figure in this
study is already net of IVA and Phase 4 inherits that single assumption across all three
scenarios. No open item remains here.

---

## 6. DECISION (founder) — RECORDED 2026-07-07

> Recorded from the founder's Phase 2 checkpoint. Per the assignment, the executor did **not**
> choose the architecture; these are the founder's decisions.

**Primary decision — price architecture:**

- **Retain all three (A, B, C) as comparative strategic scenarios.** The founder chose *not*
  to collapse to a single architecture at this stage: the three are carried forward as
  distinct strategies so the reports can present each one's approach and its impact side by
  side to a stakeholder. Phase 4 therefore projects **three pricing scenarios** (see the
  forward note below).

**Secondary decisions:**

- **IVA regime:** **régimen general 21%** — all margins net of IVA (§3.2, §3.6). RESOLVED.
- **B2B at launch:** **build the menu now** — concrete B2B menu delivered in §2.4 (per-piece
  volume tiers −15% / −25% + periodic contract + STR turnover add-on; per-hour rejected).
  Demand *size* stays a HYPOTHESIS (no public figure) until first contracts.
- **Minimum order / pack-first paid offer:** default per §5.2 (€60–79 headline minimum;
  paid-ads landing leads with a 2-piece/pack entry) — applies within each scenario unless the
  founder tunes it.
- **Zone pricing:** hold one price city-wide at launch (§5.3); revisit with demand data.
- **City context:** still UNDECIDED (gated by the external relocation factor) — the three
  scenarios are city-agnostic; Madrid/Valencia specifics live in the comparative chapter.

**Forward note for Phase 4 (not resolved here, flagged):** three pricing scenarios ×
conservative/realistic/optimistic demand = a 3×3 grid. Whether Phase 4 projects the full grid
or a reduced, legible set (e.g., each architecture at the realistic demand + a sensitivity
band) is a **Phase 4 scoping decision** — noted so it is not silently assumed.

**Decision recorded:** 2026-07-07 · **by:** el socio fundador (Phase 2 checkpoint).

---

*End of Phase 2 pricing study. Next boundary: Phase 3 (marketing report) / Phase 4 (economic
model), which inherit the three retained pricing scenarios, the 21% IVA assumption, and the
B2B menu from §6. No report copy is written here.*
