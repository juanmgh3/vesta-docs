# Murcia economic model — number bible (Grupo Vesta)

> Built 2026-10-06. Replaces `economic-model.md` for the Murcia launch report. The
> tables live in `murcia-model-tables.md` and the same numbers as data in
> `murcia-model-data.json`; both are written by `murcia-model.mjs` (same folder), and
> re-running it must reproduce them byte for byte. Every figure the report uses from the
> model traces to those two files; this file carries the inputs, the derivations and
> what changed. Labels: FACT / CAPTURED / ESTIMATE / HYPOTHESIS / PROPOSAL / ASSUMPTION,
> carried from each source as it states them.

## 1. Input sheet

| # | Input | Value | Label | Source (file §section) |
| --- | --- | --- | --- | --- |
| I1 | Avg gross price per piece, Arch. A | €56.75 | PROPOSAL | `economic-model.md` §1 I1 (`pricing-decision.md` §4.1 grid × mix M1) |
| I2 | Avg gross price per piece, Arch. B | €72.50 | PROPOSAL | `economic-model.md` §1 I2 (`pricing-decision.md` §4.2 grid × mix M1) |
| I3 | Avg gross price per piece, Arch. C | €82.81 | PROPOSAL | `economic-model.md` §1 I3 (`pricing-decision.md` §4.3 grid × M1 × tier blend M2) |
| M1 | Service mix behind I1–I3 | 50% matrimonio · 20% individual · 25% sofá 3 pz · 5% king | ESTIMATE | `economic-model.md` §1 M1 |
| M2 | Tier blend (C only) | 60% Básico · 30% Profundo · 10% Integral | ESTIMATE | `economic-model.md` §1 M2 |
| I4 | IVA | 21%, régimen general; net = gross ÷ 1.21 | FACT + founder decision | `pricing-decision.md` §3.2 |
| I5 | Consumables | €1.5 / piece | CAPTURED | `founder-inputs.md` Block 2 |
| I6 | Travel per visit | €4.5 central (band €3.5–6.0), derived in §2.1 | ESTIMATE | `murcia-market.md` §8.5 (per-point out-and-back cost at €0.175/km) |
| I6a | Job mix by distance tier | 50% R1 + pedanías ≤10 km · 35% R2 at 12–13 km · 15% R2 outer belt 16–27 km | HYPOTHESIS | Tiers from `murcia-market.md` §8.5 reading; shares set here, no source measures them |
| I7 | Parking per visit | €1.0 average, derived in §2.2 | ESTIMATE | `murcia-market.md` §8.3 (zona azul tickets, SER hours and sectors) |
| I7a | Share of jobs parked in SER Sectors A–B during SER hours | 40% | HYPOTHESIS | Shares set here; sector perimeter from `murcia-market.md` §8.3 |
| I8 | Fixed costs during tarifa plana | €186/mo = cuota 80 + gestor 30 + car insurance 50 + RC 25 + web 1 | FACT / CAPTURED / ESTIMATE | cuota `market-dossier.md` §9.1 (carried by `murcia-market.md` §8.1); gestor and car insurance `founder-inputs.md` Block 2; RC `rc-insurance-quote.md` Conclusion; web `market-dossier.md` §9.2 |
| I9 | Fixed costs after tarifa plana | €356/mo (cuota steps to €250, central of €205–300) | FACT (band) | `market-dossier.md` §9.1; `economic-model.md` §1 I8 |
| I10 | RC insurance | €25/mo (≈€300/yr, €150,000 cover), inside I8 and I9 | ESTIMATE | `rc-insurance-quote.md` Conclusion |
| I11 | `FLAT_RATE_MONTHS_LEFT` | 9 months (Oct-2026 to Jun-2027 at €186; €356 from Jul-2027) | HYPOTHESIS | `founder-inputs.md` Addendum 2026-10-06 (alta date and region TO-CONFIRM) |
| I12 | Capacity | 88 pieces/mo per operator (4/day × 22 days) | CAPTURED | `founder-inputs.md` Block 1; `economic-model.md` §1 I9 |
| I13 | Demand curves, year 1 | conservador / realista / optimista, visits, ads and ppv unchanged | ESTIMATE | `economic-model.md` §2 |
| I14 | Month 1 | October 2026; year 1 = Oct-2026 to Sep-2027 | CAPTURED | `founder-inputs.md` Addendum 2026-10-06 |
| I15 | Financing and starting cash | No loan, no credit line; starting cash €0 (no buffer) | CAPTURED | `founder-inputs.md` Addendum 2026-10-06 and Block 2 (startup safety buffer) |
| I16 | Purchases at launch | None; equipment €2,300 already paid (sunk) | CAPTURED | `founder-inputs.md` Addendum 2026-10-06 and Block 2 |
| I17 | Visits/mo, years 2–3 | conservador 12→16 · realista 24→34 · optimista 36→48 | ESTIMATE | `economic-model.md` §4 |
| I18 | Ads €/mo, years 2–3 | conservador 200→250 · realista 450→500 · optimista 650→700 | PROPOSAL | `economic-model-engine.mjs` `Y23` block (the figures behind `economic-model.md` §4) |
| I19 | CAC, paid channel | €71 central, band €36–111 | ESTIMATE / HYPOTHESIS | `market-dossier.md` §6.3; `economic-model.md` §1 I10 |
| I20 | Operator 2 full-loaded cost | €1,860/mo | ESTIMATE | `economic-model.md` §1 I13 (TO-CONFIRM vs convenio de limpieza) |
| I21 | Second machine | €2,300, bought in the year an operator joins | CAPTURED | `founder-inputs.md` Block 2 |
| I22 | Operator trigger | utilisation ≥75% of capacity and cash ≥ 3 months of the new cost structure; caveat: tested on the year's average utilisation, not on 3 consecutive months as §7 states, so a year with a strong season can hold 3 months above 75% and still not trigger (§2.5, §3 item 11) | PROPOSAL | `economic-model.md` §7 |
| I23 | Growth, years 4–8 | visits grow at half the Y2→Y3 rate in Y4, and the rate halves every year after | HYPOTHESIS | Rule set here from `economic-model.md` §4 visits (that file's §9 C6 left the rule open) |
| I24 | IRPF and owner drawings | Not modelled; results are pre-IRPF and cash accumulates with no drawings | ASSUMPTION | `economic-model.md` §1 I15 |

## 2. Derivations

### 2.1 Travel per visit (I6)

Tier costs are the out-and-back costs of `murcia-market.md` §8.5 at the model's
€0.175/km. Near tier: €3.50, the figure §8.5 says holds inside ≈10 km (the core, El
Palmar €2.80, Alcantarilla €3.05). Mid tier: mean of Molina de Segura €4.38 and
Sangonera la Verde €4.48 = €4.43. Outer-belt tier: mean of Las Torres de Cotillas /
Beniel €5.81, Ceutí €7.14, Santomera €7.18 and Archena €9.42 = €7.39.

- Central, mix 50/35/15: 0.50 × 3.50 + 0.35 × 4.43 + 0.15 × 7.39 = €4.41 → **€4.5**.
- Band low, all jobs near: €3.50 → **€3.5** (the old I6).
- Band high, belt-heavy mix 10/30/60: €6.11 → **€6.0**.

Rounding to the nearest €0.5. Out-and-back is an upper bound per job: chaining two jobs
in a day shares legs (`murcia-market.md` §8.5). R3 jobs (€10.36–27.55) are outside the
mix: they are served only with a surcharge or a minimum order, so they do not dilute
the R2 price.

### 2.2 Parking per visit (I7)

One zona azul ticket covers one job: Sector A up to €1.90 (90 min) and Sector B up to
€2.70 (150 min), VAT-included ESTIMATE in `murcia-market.md` §8.3. Mean ticket €2.30 ×
40% of jobs (I7a) = €0.92 → **€1.0**, same rounding as I6. Parking outside SER hours and
sectors is free (§8.3). The "empresas o autónomos" pass (€30/month) is not used: it
requires a vehicle that is a "vehículo industrial", which is not recorded.

### 2.3 Fixed costs over time (I8, I9, I11)

Month m (1 = Oct-2026) costs €186 if m ≤ `FLAT_RATE_MONTHS_LEFT`, else €356. With the
default 9, year 1 has nine months at €186 and three at €356; year 2 onward €356 every
month. Changing the constant at the top of the script re-runs every table.

### 2.4 Year 1, monthly (tables T1–T4)

Visits = paid + organic (I13). Pieces = visits × ppv, capped at 88. Gross = pieces ×
price; net = gross ÷ 1.21. Result = net − consumables − travel − parking − ads − fixed.
Cash: the client pays gross; the IVA of each calendar quarter is paid in the month after
it closes (Oct–Dec in Jan-2027, Jan–Mar in Apr-2027, Apr–Jun in Jul-2027); Jul–Sep is
owed at year end (paid Oct-2027) and is netted out of year-end cash, which therefore
equals the year's result. Trough = the lowest cash point the founder must be able to
cover with no buffer: the lowest of the twelve month-ends and of the Oct-2027 point,
where the Jul–Sep IVA is paid (year-end cash net of IVA owed). The Oct-2027 point
counts only that payment, not Oct-2027 trading. A trough dated Oct-2027 is that
payment: in A × conservador it is −€974, below the −€923 Jul-2027 month-end.

### 2.5 Years 2–8 (tables T5, T6)

Annual. Year y visits: I17 for Y2 and Y3; from Y4, the I23 rule. Served pieces =
min(visits × ppv, operators × 88); served visits scale with it. Result = net −
consumables − (travel + parking) − ads × 12 − fixed for the year − hired operators ×
€1,860 × 12 − €2,300 in the year an operator joins. Ads hold at the Y3 level from Y4.

Operator trigger, re-derived from `economic-model.md` §7 for an annual model: at the end
of a year, if served pieces ≥ 75% of that year's capacity (the annual average stands in
for "3 consecutive months") and year-end cash ≥ 3 × (€356 + €1,860 × hired-after +
that year's ads), one operator is hired for the next year.

Founder→owner milestone: the hired operators alone could carry the year's demand
(hired × 88 ≥ demand pieces). It is re-checked every year with a hired operator, and
T6 says in which years it holds ("Owner state holds") and in which it lapses, because
demand keeps growing after the hire and no second hire is triggered. In realista × B it
is first reached in Y5, holds in Y5–Y6 and lapses in Y7–Y8. "Owner-state result" is the
year's result if the founder stopped cleaning that year (capacity = hired × 88). Since
the founder's own hours carry no wage in the model, it equals the operating result
whenever the hired capacity covers demand.

### 2.6 Break-even, contribution, ratios (T7–T9)

Contribution per visit at ppv 1.8 = 1.8 × (price ÷ 1.21 − €1.5) − €5.5 (travel +
parking); per piece = per visit ÷ 1.8. Break-even pieces = monthly cost ÷ contribution
per piece; visits = pieces ÷ 1.8. Paid visits subtract the €71 CAC once per visit.
Contribution margin = contribution per piece ÷ net price.

Single-piece paid visit (T8): one piece at the architecture's average price per piece
(I1–I3, service mix M1) ÷ 1.21, minus €1.5 consumables, minus €5.5 per visit (travel
€4.5 + parking €1.0) and minus €71 CAC. For B: 72.50 ÷ 1.21 = 59.92 − 1.5 − 5.5 − 71 =
−€18.08. `pricing-decision.md` §4.2 gives −€22.48 for the same notion on a different
basis: one matrimonio at €69 (net €57.02), minus €1.5, minus the full €7 day trip
(§3.5) and minus €71, no parking. The two figures answer different questions: the model's
is an average paid piece in Murcia, §4.2's is a single matrimonio under the Phase-2
cost table. The report can quote either, naming its basis.

### 2.7 Market block in the JSON

`market` carries, for the report's charts, the price map of `murcia-market.md` §5
(Murcia median and range, Madrid and Valencia ranges, Granada figures), the three price
grids of `pricing-decision.md` §4.1–§4.3, and the service rings of `murcia-market.md`
§1.7 with the travel range of §8.5. Values are copied as those files state them. Every
figure is an object `{ value, label, source }`: `label` is the evidence label the source
gives it, verbatim, and `source` the file and section. A value the source prints with
"~" or "≈" (the C packs, the ring households) carries `approx: true`; a cell the source
leaves empty is `value: null` with the source's own label (e.g. "NOT FOUND in dossier").
Text the source attaches to a cell goes in `note`.

## 3. What changed vs `economic-model.md`

1. **Calendar.** Month 1 = Oct-2026; every year-1 month is labelled (Oct-2026 …
   Sep-2027).
2. **Travel** €3.5 → €4.5 per visit (I6), from Murcia routing over an R2 job mix.
3. **Parking** added, €1.0 per visit (I7). The old model had none.
4. **Fixed-cost step inside year 1.** The old model held €186 all of year 1; here the
   cuota steps after `FLAT_RATE_MONTHS_LEFT` months (default 9), because the alta date
   is unrecorded.
5. **IVA timing** follows calendar quarters from October. The old engine also paid, in
   each remittance month, that same month's IVA; here only the closed quarter is paid.
6. **No financing.** §6 of the old model (≈€6,000 loan, repayment cuotas) is gone; the
   troughs are reported against €0 starting cash.
7. **Operator 2 by trigger, not by assumption.** The old Y3 optimista assumed operator 2
   and did not subtract its cost; here the hire comes from the §7 trigger and its cost
   and machine are in the result.
8. **Years 4–8** are computed by a stated rule (I23) instead of an open "~+20%/yr".
9. **Contribution margin** is computed on the net price, as the old note says; the old
   table's 76.6–78.5% divided by the gross price.
10. **B2B** remains excluded from every table, as in `economic-model.md` §7 (demand
    HYPOTHESIS); it can only improve them.
11. **Hire trigger on the annual average.** `economic-model.md` §7 fires on utilisation
    ≥75% for 3 consecutive months; this annual model tests the year's average
    utilisation instead (I22, §2.5).
12. **Troughs are not comparable with the old reports.** The IVA timing of item 5 and
    the Oct-2027 IVA payment counted in the trough (§2.4) move the low cash points; a
    trough here and one in `economic-model.md` or the old reports measure different
    things.

## 4. Verification

`node business/research/murcia-model.mjs` then
`git diff --exit-code -- business/research/murcia-model-tables.md business/research/murcia-model-data.json`
must exit 0 on a clean checkout. The script has no clock, random or locale input.
