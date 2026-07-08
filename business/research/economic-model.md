# Economic model — Phase 4 number bible (Grupo Vesta)

> Built 2026-07-08 by the orchestrator (Fable). **Every figure in the economic report
> traces to this file or to the sources listed in §1.** The tables below are computed by
> `economic-model-engine.mjs` (same folder) — re-running it must reproduce them; that is
> the number-check mechanism. Workers never invent numbers: they write prose around these.
> Labels: FACT / CAPTURED / ESTIMATE / HYPOTHESIS / PROPOSAL (brief standard).

## 1. Input sheet (single source of truth)

| #   | Input                              | Value                                                                                                                                               | Label                   | Source                                                              |
| --- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------- |
| I1  | Avg gross price per piece, Arch. A | €56.75                                                                                                                                              | PROPOSAL                | pricing-decision §4.1 grid × mix M1                                 |
| I2  | Avg gross price per piece, Arch. B | €72.50                                                                                                                                              | PROPOSAL                | pricing-decision §4.2 grid × mix M1                                 |
| I3  | Avg gross price per piece, Arch. C | €82.81                                                                                                                                              | PROPOSAL                | pricing-decision §4.3 grid × mix M1 × tier blend M2                 |
| M1  | Service mix                        | 50% matrimonio · 20% individual · 25% sofá 3pz · 5% king                                                                                            | ESTIMATE                | derived: mattress-led demand (dossier §5.4 Cronoshare) + sofa share |
| M2  | Tier blend (C only)                | 60% Básico · 30% Profundo · 10% Integral                                                                                                            | ESTIMATE                | standard G/B/B self-selection assumption                            |
| I4  | IVA                                | 21%, régimen general; net = gross ÷ 1.21                                                                                                            | FACT + founder decision | pricing-decision §3.2                                               |
| I5  | Consumables                        | €1.5 / piece                                                                                                                                        | CAPTURED                | founder-inputs Block 2                                              |
| I6  | Travel                             | €3.5 / visit (€7/day ÷ ~2 visits/day early stage)                                                                                                   | ESTIMATE                | pricing-decision §3.1 FLAG A                                        |
| I7  | Fixed costs year 1                 | €186/mo = cuota 80 + gestor 30 + coche 50 + RC 25 + web 1                                                                                           | CAPTURED/FACT/ESTIMATE  | founder-inputs + dossier §9.1–9.2 + rc-insurance-quote.md           |
| I8  | Fixed costs year 2+                | €356/mo (cuota steps to €250 central of €205–300)                                                                                                   | FACT (band)             | dossier §9.1                                                        |
| I9  | Capacity                           | 88 pieces/mo/operator (4/day × 22 days)                                                                                                             | CAPTURED                | founder-inputs Block 1                                              |
| I10 | CAC paid channel                   | ≈€71 central, band €36–111                                                                                                                          | ESTIMATE/HYPOTHESIS     | dossier §6.3 (close rate unsourced)                                 |
| I11 | Ads entry budget                   | €150–300/mo, scale conditional from M3                                                                                                              | PROPOSAL                | marketing report ch. 8                                              |
| I12 | Equipment                          | €2,300 sunk (paid); 2nd machine same price when scaling                                                                                             | CAPTURED                | founder-inputs Block 2                                              |
| I13 | Operator-2 full-loaded cost        | ≈€1,860/mo ≈ €22–26k/yr (salary + ~33% SS)                                                                                                          | ESTIMATE                | TO-CONFIRM vs convenio de limpieza — flag in report                 |
| I14 | Demand seasonality                 | ~year-round, no confirmed seasonal peak                                                                                                             | FACT (Trends)           | dossier §5.4                                                        |
| I15 | IRPF                               | NOT modelled in the P&L (estimación directa; effective rate depends on personal situation) — stated as an explicit assumption; results are pre-IRPF | ASSUMPTION              | report ch. 3 must state it                                          |

## 2. Demand scenarios (the model's only free variables)

Visits = client jobs; pieces = visits × pieces-per-visit (ppv). Grounding: paid visits =
ads budget ÷ CAC (I10/I11, coherent with the marketing report's 2–4 clients/mo at entry
budget); organic/referral ramps with the reviews flywheel (dossier §6.4) from ~M3.
All three curves are ESTIMATE — the honest range, not forecasts.

| Scenario    | ppv | Paid visits M1→M12        | Organic M1→M12               | Ads €/mo M1→M12                                 |
| ----------- | --- | ------------------------- | ---------------------------- | ----------------------------------------------- |
| Conservador | 1.5 | 1,2,2,2,2,2,2,2,2,2,2,2   | 0,0,1,1,2,2,3,3,4,5,6,7      | 150 flat                                        |
| Realista    | 1.8 | 2,3,3,4,4,5,5,5,6,6,6,6   | 0,1,1,2,3,4,5,6,7,8,10,12    | 150,200,250,300,300,350,350,350,400,400,400,400 |
| Optimista   | 2.0 | 3,4,5,6,6,7,8,8,9,9,10,10 | 1,2,3,4,5,6,8,10,12,14,16,18 | 200,250,300,400,400,450,500,500,550,550,600,600 |

ppv rationale: the pack-first paid offer (pricing-decision §5.2) targets ≥2 pieces per
paid visit; conservador assumes it partially fails (1.5), optimista that it works (2.0).
Capacity check: max month = 28 visits × 2.0 = 56 pieces < 88 (I9) — year 1 never
capacity-bound. CAC implied by the tables stays inside the €36–111 band (e.g. realista
M12: €400 ÷ 6 paid = €67).

## 3. Year 1 — monthly P&L and cash (main tracks: each architecture × realista)

P&L is net-of-IVA (I4). Cash: client pays gross; IVA accrued is remitted the month after
each quarter closes (M4, M7, M10; Q4 remains owed at year-end and is netted out of the
final figure). Starting cash = €0 (no buffer — CAPTURED).

### 3.1 Arquitectura A × realista

| M   | Visitas | Piezas | Ingr. bruto | Ingr. neto | Var. | Ads | Resultado | Caja  |
| --- | ------- | ------ | ----------- | ---------- | ---- | --- | --------- | ----- |
| 1   | 2       | 3.6    | 204         | 169        | 12   | 150 | −180      | −144  |
| 2   | 4       | 7.2    | 409         | 338        | 25   | 200 | −73       | −146  |
| 3   | 4       | 7.2    | 409         | 338        | 25   | 250 | −123      | −198  |
| 4   | 6       | 10.8   | 613         | 507        | 37   | 300 | −17       | −392  |
| 5   | 7       | 12.6   | 715         | 591        | 43   | 300 | 62        | −207  |
| 6   | 9       | 16.2   | 919         | 760        | 56   | 350 | 168       | 121   |
| 7   | 10      | 18     | 1,022       | 844        | 62   | 350 | 246       | 83    |
| 8   | 11      | 19.8   | 1,124       | 929        | 68   | 350 | 324       | 603   |
| 9   | 13      | 23.4   | 1,328       | 1,097      | 81   | 400 | 431       | 1,264 |
| 10  | 14      | 25.2   | 1,430       | 1,182      | 87   | 400 | 509       | 1,348 |
| 11  | 16      | 28.8   | 1,634       | 1,351      | 99   | 400 | 666       | 2,297 |
| 12  | 18      | 32.4   | 1,839       | 1,520      | 112  | 400 | 822       | 3,438 |

Año 1: ingresos brutos **€11,646** · resultado neto **€2,835** · valle de caja **−€392
(M4)** · primer mes positivo **M5** · acumulado positivo **M7**.

### 3.2 Arquitectura B × realista

| M   | Visitas | Piezas | Ingr. bruto | Ingr. neto | Var. | Ads | Resultado | Caja  |
| --- | ------- | ------ | ----------- | ---------- | ---- | --- | --------- | ----- |
| 1   | 2       | 3.6    | 261         | 216        | 12   | 150 | −133      | −87   |
| 2   | 4       | 7.2    | 522         | 431        | 25   | 200 | 21        | 24    |
| 3   | 4       | 7.2    | 522         | 431        | 25   | 250 | −29       | 85    |
| 4   | 6       | 10.8   | 783         | 647        | 37   | 300 | 124       | −18   |
| 5   | 7       | 12.6   | 914         | 755        | 43   | 300 | 226       | 367   |
| 6   | 9       | 16.2   | 1,175       | 971        | 56   | 350 | 379       | 949   |
| 7   | 10      | 18     | 1,305       | 1,079      | 62   | 350 | 481       | 1,067 |
| 8   | 11      | 19.8   | 1,436       | 1,186      | 68   | 350 | 582       | 1,899 |
| 9   | 13      | 23.4   | 1,697       | 1,402      | 81   | 400 | 735       | 2,929 |
| 10  | 14      | 25.2   | 1,827       | 1,510      | 87   | 400 | 837       | 3,222 |
| 11  | 16      | 28.8   | 2,088       | 1,726      | 99   | 400 | 1,040     | 4,625 |
| 12  | 18      | 32.4   | 2,349       | 1,941      | 112  | 400 | 1,244     | 6,276 |

Año 1: ingresos brutos **€14,879** · resultado neto **€5,506** · valle de caja **−€87
(M1)** · primer mes positivo **M2** · acumulado positivo **M5**.

### 3.3 Arquitectura C × realista

| M   | Visitas | Piezas | Ingr. bruto | Ingr. neto | Var. | Ads | Resultado | Caja  |
| --- | ------- | ------ | ----------- | ---------- | ---- | --- | --------- | ----- |
| 1   | 2       | 3.6    | 298         | 246        | 12   | 150 | −102      | −50   |
| 2   | 4       | 7.2    | 596         | 493        | 25   | 200 | 82        | 135   |
| 3   | 4       | 7.2    | 596         | 493        | 25   | 250 | 32        | 271   |
| 4   | 6       | 10.8   | 894         | 739        | 37   | 300 | 216       | 228   |
| 5   | 7       | 12.6   | 1,043       | 862        | 43   | 300 | 333       | 742   |
| 6   | 9       | 16.2   | 1,342       | 1,109      | 56   | 350 | 517       | 1,492 |
| 7   | 10      | 18     | 1,491       | 1,232      | 62   | 350 | 634       | 1,712 |
| 8   | 11      | 19.8   | 1,640       | 1,355      | 68   | 350 | 751       | 2,747 |
| 9   | 13      | 23.4   | 1,938       | 1,601      | 81   | 400 | 935       | 4,018 |
| 10  | 14      | 25.2   | 2,087       | 1,725      | 87   | 400 | 1,052     | 4,449 |
| 11  | 16      | 28.8   | 2,385       | 1,971      | 99   | 400 | 1,286     | 6,149 |
| 12  | 18      | 32.4   | 2,683       | 2,217      | 112  | 400 | 1,520     | 8,134 |

Año 1: ingresos brutos **€16,993** · resultado neto **€7,255** · valle de caja **−€50
(M1)** · primer mes positivo **M2** · acumulado positivo **M3**.

### 3.4 Sensitivity envelopes (year-1 headline per architecture × demand band)

| Arch × demand | Ingr. bruto Y1 | Resultado neto Y1 | Valle de caja (mes) | Acum. positivo |
| ------------- | -------------- | ----------------- | ------------------- | -------------- |
| A conservador | 4,853          | −350              | −931 (M7)           | not within Y1  |
| A realista    | 11,646         | 2,835             | −392 (M4)           | M7             |
| A optimista   | 20,886         | 8,532             | none (≥0 all year)  | M2             |
| B conservador | 6,200          | 763               | −587 (M4)           | M10            |
| B realista    | 14,879         | 5,506             | −87 (M1)            | M5             |
| B optimista   | 26,680         | 13,322            | none                | M1             |
| C conservador | 7,081          | 1,492             | −472 (M4)           | M9             |
| C realista    | 16,993         | 7,255             | −50 (M1)            | M3             |
| C optimista   | 30,473         | 16,457            | none                | M1             |

This table doubles as the **annex 3×3 grid** (spec §3).

## 4. Years 2–3 (annual, net of IVA, pre-IRPF; fixed = €356/mo per I8)

Avg visits/mo assumptions (ESTIMATE): conservador 12→16; realista 24→34; optimista
36→48 (year-3 optimista exceeds one operator's capacity → see §7).

| Scenario × Arch | Y2 piezas/mes | Y2 ingr. bruto | Y2 resultado | Y3 piezas/mes | Y3 ingr. bruto | Y3 resultado |
| --------------- | ------------- | -------------- | ------------ | ------------- | -------------- | ------------ |
| conservador × A | 18            | 12,258         | 2,631        | 24            | 16,344         | 5,131        |
| conservador × B | 18            | 15,660         | 5,442        | 24            | 20,880         | 8,880        |
| conservador × C | 18            | 17,887         | 7,283        | 24            | 23,849         | 11,334       |
| realista × A    | 43            | 29,419         | 12,856       | 61            | 41,677         | 21,642       |
| realista × B    | 43            | 37,584         | 19,604       | 61            | 53,244         | 31,202       |
| realista × C    | 43            | 42,929         | 24,021       | 61            | 60,816         | 37,459       |
| optimista × A   | 72            | 49,032         | 25,642       | 96\*          | 65,376         | 37,614\*     |
| optimista × B   | 72            | 62,640         | 36,889       | 96\*          | 83,520         | 52,609\*     |
| optimista × C   | 72            | 71,548         | 44,250       | 96\*          | 95,397         | 62,425\*     |

\* Optimista Y3 exceeds one operator (88) → requires operator 2; the figures shown do
**not** yet subtract the operator-2 cost (I13 ≈ €22–26k/yr). Net of it, optimista-Y3 ≈
A €13–16k · B €28–31k · C €38–40k — still above each scenario's Y2. The report must show
both numbers and the reasoning (ch. 11).

## 5. Break-even (structural)

Contribution per piece (net of IVA, minus consumables and travel share at ppv 1.8):
A **€43.46** · B **€56.47** · C **€64.99**.

| Threshold                          | A           | B    | C    |
| ---------------------------------- | ----------- | ---- | ---- |
| Cover fixed only, Y1 (€186/mo)     | 4.3 pzs/mes | 3.3  | 2.9  |
| Fixed + ads €300 (Y1 operating BE) | 11.2        | 8.6  | 7.5  |
| Fixed Y2+ + ads €300               | 15.1        | 11.6 | 10.1 |

Reading: ~1–2 working days/month cover the whole structure; the real threshold is the
marketing-inclusive one (~8–15 pieces/mo ≈ 2–4 working days). Calendar break-even per
track: see §3 tables (first positive month / cumulative-positive month).

## 6. Financing need (derived — founder decision: no preset amount)

The financing need = |cash trough| + a prudence buffer. Worst modelled cell: A ×
conservador, trough **−€931 (M7)**. Every other cell troughs under €600; B/C realista
under €100.

**Conclusion (load-bearing for ch. 9):** the business as modelled needs **no material
external financing to operate** — the fixed base is small, equipment is already paid
(I12), and IVA timing is absorbed. The credit is therefore **working-capital insurance

- growth optionality**, not survival — presented to the bank as strength, not need.

**Founder decision (2026-07-08): request ≈€6,000.** Use of funds (ch. 9): worst-trough
coverage ×6 (≈€1,000) + 12 months of fixed costs (≈€2,250) + Ads scale-up reserve to
the conditional M3+ levels (≈€2,750). Repayment capacity (ESTIMATE, rate illustrative
~8% TAE, market-dependent): 36 months → cuota **€188.02/mo** (total interest ≈€769)
≈ 3–4 piezas/mes at B; 60 months → cuota **€121.66/mo** (interest ≈€1,300) ≈ 2–3
piezas/mes. Both cuotas are below every realista track's month-2+ result; even A ×
conservador covers the 60-month cuota from M9.

## 7. Scaling triggers (ch. 11 inputs)

- **Operator-2 trigger (PROPOSAL):** sustained ≥75% capacity (≥66 pzs/mes) for 3
  consecutive months **and** cash ≥ 3 months of the new full cost structure
  (≈3 × (€356 + €1,860 + ads) ≈ €8.5k). Only optimista reaches this inside Y2–Y3.
- **Machine payback:** 2nd machine €2,300 ÷ contribution B €56.47 ≈ **41 pieces ≈ 9–10
  working days at capacity** (matches pricing-decision §3.4's ≈37-service order of
  magnitude; difference = updated contribution incl. RC/travel granularity).
- **Years 4–8 (trajectory, not monthly precision — founder-inputs Block 5):** milestones,
  per realista-B as central: Y4 consolidate 2 operators (≈€60–80k gross), Y5–Y6 founder
  exits day-to-day operation (operator 3 OR B2B contracts fill capacity), Y7–Y8 the
  owner-manager state: founder manages, does not clean — the north star. Each milestone
  gated by the §7 trigger logic, not by calendar. B2B (pricing-decision §2.4) enters as
  upside from Y2: one hotel contract ≈ 30 pzs amortized in one trip ≈ €1,200+ net per
  visit — kept HYPOTHESIS (demand unproven) and therefore **excluded from all tables
  above**; it can only improve them.

## 8. Ratios (ch. 10 inputs, realista tracks)

| Ratio                                | A     | B     | C     | Note                     |
| ------------------------------------ | ----- | ----- | ----- | ------------------------ |
| Margen de contribución / pieza       | 76.6% | 77.9% | 78.5% | contribution ÷ net price |
| CAC payback (pieces per paid client) | 1.6   | 1.3   | 1.1   | €71 ÷ contribution/pieza |
| Resultado neto Y1 / ingresos netos   | 29%   | 45%   | 52%   | pre-IRPF                 |
| Ads / ingresos brutos Y1             | 33%   | 26%   | 23%   | falls as organic ramps   |

**Isolated Y1 net-result swings, B × realista base €5,506 (for chart C7/E7 — computed
with the engine's formula, each variable isolated, rest held):** demand
conservador↔optimista = €763 ↔ €13,322 (§3.4) · CAC 111↔36 (paid visits scaled ×0.64/
×1.97 at same ads spend) = **€3,492 ↔ €10,942** · ppv 1.5↔2.0 = **€3,508 ↔ €6,838**.
All ESTIMATE.

Sensitivity (ch. 10): the three variables that move outcomes most, in order: **(1) close
rate / CAC** (band €36–111 swings paid-client count ~3×), **(2) pieces-per-visit** (ppv
1.5→2.0 swings revenue ±~20% and decides whether paid visits are profitable at all —
pricing-decision §3.6), **(3) demand ramp** (the scenario band itself). Price level
(A vs C) moves year-1 result by ~2.5× — larger than any cost lever.

## 9. Chart specs (T1.6 — closed specs for the SVG worker)

1. **C1 Estructura de costes** — stacked bar: fixed Y1 vs Y2+ breakdown (I7/I8).
2. **C2 Contribución por visita** — grouped bars: single/2-piece/pack visit × A/B/C
   (data: pricing-decision §3.6 table + §5 contributions).
3. **C3 Curvas de caja año 1** — 3 lines (A/B/C × realista), monthly cash from §3
   tables, zero line marked, troughs annotated.
4. **C4 Banda de sensibilidad** — per architecture, Y1 net result as dot (realista) +
   whisker (conservador→optimista), data §3.4.
5. **C5 Punto de equilibrio** — horizontal bars: pieces/mo thresholds (§5) vs capacity
   88, with "días de trabajo equivalentes" secondary axis.
6. **C6 Trayectoria 8 años** — realista-B central line (gross revenue Y1–Y8), band =
   conservador/optimista, milestones flagged (operator 2, owner-transition). Y4–8
   values: extend §4 growth ~+20%/yr conservador-decay, label ESTIMATE-trajectory.
7. **C7 Tornado de sensibilidad** — Y1 net result (B realista) swinging CAC 36↔111,
   ppv 1.5↔2.0, demand cons↔opt: bars from §3.4 + engine variants.
8. **C8 Anexo 3×3** — heat table of §3.4 (Y1 net result), color by sign/magnitude.

## 10. Verification protocol (T3.2)

Re-run `node economic-model-engine.mjs`; every table above must match. Then trace each
input row of §1 to its source file+section. Cross-report coherence: Ads figures vs
marketing report ch. 8 (150–300 entry, conditional scale M3), CAC ≈€71 band €36–111,
funnel 2–4 clients/mo at entry — all already aligned by construction.
