class: medium

## git status --short -uall
```
 M README.md
 M specs/business-report-murcia/feature.md
?? .torq-flow/active
?? .torq-flow/run
?? business/research/murcia-model-data.json
?? business/research/murcia-model-tables.md
?? business/research/murcia-model.md
?? business/research/murcia-model.mjs
?? specs/business-report-murcia/review/T2/brief.md
?? specs/business-report-murcia/review/T2/report.md
```

## git diff HEAD
```diff
diff --git a/README.md b/README.md
index f674f75..d3a2191 100644
--- a/README.md
+++ b/README.md
@@ -26,7 +26,8 @@ Moved out of the vesta-web repo on 2026-07-08 to keep the web repo code-only.
 
 Replaced by `business-report-murcia` and not edited further:
 
-- `business/reports/economic-report.{html,pdf}` — economic report (Madrid/Valencia)
+- `business/reports/economic-report.{html,pdf}` — economic report
 - `business/reports/marketing-report.{html,pdf}` — marketing report (Madrid/Valencia)
 - `business/bank/bank-dossier.{html,pdf,docx}` — Granada bank financing dossier
 - `business/research/granada-market.md` and `business/research/bank-granada-scenario.mjs` — Granada research and bank scenario
+- `business/research/economic-model.md` and `business/research/economic-model-engine.mjs` — previous economic model, replaced by `murcia-model.mjs`
diff --git a/specs/business-report-murcia/feature.md b/specs/business-report-murcia/feature.md
index 09debcc..20489c1 100644
--- a/specs/business-report-murcia/feature.md
+++ b/specs/business-report-murcia/feature.md
@@ -109,7 +109,7 @@ case by someone who did the work, not as generated filler.
   and lists `business/reports/_src/` and the two build scripts. Additions only in
   `founder-inputs.md`. _Verify:_ `grep -c "Addendum 2026-10-06" business/research/founder-inputs.md` and `grep -c "business-report-murcia" README.md`.
   Accept: both counts are ≥1; `git diff --numstat HEAD -- business/research/founder-inputs.md` shows 0 deletions.
-- [ ] **T2 — Murcia economic model** (structural). Write `murcia-model.mjs`, derived from
+- [x] **T2 — Murcia economic model** (structural). Write `murcia-model.mjs`, derived from
   `economic-model-engine.mjs`, that computes and writes `murcia-model-tables.md`
   (markdown tables only) and `murcia-model-data.json` (the same numbers as data for the
   charts). Inputs, each with label and source, listed in `murcia-model.md` §1: prices
@@ -220,3 +220,4 @@ case by someone who did the work, not as generated filler.
 | Task | Test | Layer | Safety net | RED | GREEN | Triangulate | Refactor |
 |---|---|---|---|---|---|---|---|
 | T1 | grep counts + numstat (structural) | docs | no package.json, no runner; baseline counts 0 / 0 (exit 1) | n/a (structural) | `grep -c "Addendum 2026-10-06"` → 2; `grep -c "business-report-murcia" README.md` → 2; numstat `20	0` | Triangulation skipped: structural docs task, verified by counts and 0-deletion numstat | none |
+| T2 | verify command + double-run sha256 (structural) | model script | no package.json, no runner; baseline verify `Error: Cannot find module '...\murcia-model.mjs'` (exit 1) | n/a (structural) | `node business/research/murcia-model.mjs && git diff --exit-code --stat -- …tables.md …data.json` → `exit 0` | Triangulation skipped: structural; outputs untracked so git diff is vacuous until commit — reproducibility shown by two runs with identical sha256 (tables `18129d61…`, json `88ad897d…`) | none |
diff --git a/business/research/murcia-model.mjs b/business/research/murcia-model.mjs
new file mode 100644
index 0000000..7c77fbf
--- /dev/null
+++ b/business/research/murcia-model.mjs
@@ -0,0 +1,626 @@
+import { writeFileSync } from "node:fs";
+import { dirname, join } from "node:path";
+import { fileURLToPath } from "node:url";
+
+const HERE = dirname(fileURLToPath(import.meta.url));
+
+const IVA = 0.21;
+const CONSUMABLE = 1.5;
+const CAPACITY = 88;
+const CAC = 71;
+const OPERATOR_COST = 1860;
+const MACHINE = 2300;
+const FLAT_RATE_MONTHS_LEFT = 9;
+const FIXED_FLAT = 80 + 30 + 50 + 25 + 1;
+const FIXED_FULL = 250 + 30 + 50 + 25 + 1;
+const TRIGGER_SHARE = 0.75;
+const CASH_COVER_MONTHS = 3;
+const MAX_YEAR = 8;
+
+const halfEuro = (x) => Math.round(x * 2) / 2;
+const mean = (xs) => xs.reduce((t, x) => t + x, 0) / xs.length;
+
+const TRAVEL_TIERS = {
+  near: { label: "R1 + pedanías ≤10 km", points: [3.5] },
+  mid: { label: "R2 at 12–13 km", points: [4.38, 4.48] },
+  far: { label: "R2 outer belt 16–27 km", points: [5.81, 7.14, 7.18, 9.42] },
+};
+const TRAVEL_MIX = {
+  central: { near: 0.5, mid: 0.35, far: 0.15 },
+  low: { near: 1, mid: 0, far: 0 },
+  high: { near: 0.1, mid: 0.3, far: 0.6 },
+};
+const travelRaw = (mix) =>
+  Object.keys(TRAVEL_TIERS).reduce(
+    (t, k) => t + mix[k] * mean(TRAVEL_TIERS[k].points),
+    0,
+  );
+const TRAVEL = {
+  centralRaw: travelRaw(TRAVEL_MIX.central),
+  lowRaw: travelRaw(TRAVEL_MIX.low),
+  highRaw: travelRaw(TRAVEL_MIX.high),
+};
+TRAVEL.central = halfEuro(TRAVEL.centralRaw);
+TRAVEL.low = halfEuro(TRAVEL.lowRaw);
+TRAVEL.high = halfEuro(TRAVEL.highRaw);
+
+const SER_SHARE = 0.4;
+const SER_TICKET = mean([1.9, 2.7]);
+const PARKING_RAW = SER_SHARE * SER_TICKET;
+const PARKING = halfEuro(PARKING_RAW);
+const PER_VISIT = TRAVEL.central + PARKING;
+
+const ARCH = {
+  A: { label: "A Penetración", piece: 56.75 },
+  B: { label: "B Match + premium", piece: 72.5 },
+  C: { label: "C Premium escalonado", piece: 82.81 },
+};
+
+const SCEN = {
+  conservador: {
+    paid: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
+    organic: [0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7],
+    ads: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
+    ppv: 1.5,
+  },
+  realista: {
+    paid: [2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 6],
+    organic: [0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12],
+    ads: [150, 200, 250, 300, 300, 350, 350, 350, 400, 400, 400, 400],
+    ppv: 1.8,
+  },
+  optimista: {
+    paid: [3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 10, 10],
+    organic: [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18],
+    ads: [200, 250, 300, 400, 400, 450, 500, 500, 550, 550, 600, 600],
+    ppv: 2.0,
+  },
+};
+
+const Y23 = {
+  conservador: { visits: [12, 16], ads: [200, 250] },
+  realista: { visits: [24, 34], ads: [450, 500] },
+  optimista: { visits: [36, 48], ads: [650, 700] },
+};
+
+const MONTHS = [
+  "Oct-2026",
+  "Nov-2026",
+  "Dec-2026",
+  "Jan-2027",
+  "Feb-2027",
+  "Mar-2027",
+  "Apr-2027",
+  "May-2027",
+  "Jun-2027",
+  "Jul-2027",
+  "Aug-2027",
+  "Sep-2027",
+];
+
+const fixedForMonth = (m) => (m <= FLAT_RATE_MONTHS_LEFT ? FIXED_FLAT : FIXED_FULL);
+const fixedForYear = (y) => {
+  let total = 0;
+  for (let m = 12 * (y - 1) + 1; m <= 12 * y; m++) total += fixedForMonth(m);
+  return total;
+};
+
+function year1(scenKey, archKey) {
+  const s = SCEN[scenKey];
+  const price = ARCH[archKey].piece;
+  let cash = 0;
+  let cum = 0;
+  let accrued = 0;
+  let trough = 0;
+  let troughMonth = null;
+  let firstPositive = null;
+  let cumPositive = null;
+  let grossTotal = 0;
+  let netTotal = 0;
+  let adsTotal = 0;
+  const rows = [];
+  for (let i = 0; i < 12; i++) {
+    const visits = s.paid[i] + s.organic[i];
+    const pieces = Math.min(visits * s.ppv, CAPACITY);
+    const gross = pieces * price;
+    const net = gross / (1 + IVA);
+    const consumables = pieces * CONSUMABLE;
+    const travel = visits * TRAVEL.central;
+    const parking = visits * PARKING;
+    const fixed = fixedForMonth(i + 1);
+    const result = net - consumables - travel - parking - s.ads[i] - fixed;
+    let ivaPaid = 0;
+    if (i > 0 && i % 3 === 0) {
+      ivaPaid = accrued;
+      accrued = 0;
+    }
+    accrued += gross - net;
+    cash += gross - consumables - travel - parking - s.ads[i] - fixed - ivaPaid;
+    cum += result;
+    grossTotal += gross;
+    netTotal += net;
+    adsTotal += s.ads[i];
+    if (firstPositive === null && result >= 0) firstPositive = MONTHS[i];
+    if (cumPositive === null && cum >= 0) cumPositive = MONTHS[i];
+    if (cash < trough) {
+      trough = cash;
+      troughMonth = MONTHS[i];
+    }
+    rows.push({
+      month: MONTHS[i],
+      visits,
+      pieces: +pieces.toFixed(1),
+      gross: Math.round(gross),
+      net: Math.round(net),
+      consumables: Math.round(consumables),
+      travel: Math.round(travel),
+      parking: Math.round(parking),
+      ads: s.ads[i],
+      fixed,
+      result: Math.round(result),
+      ivaPaid: Math.round(ivaPaid),
+      cash: Math.round(cash),
+      cumResult: Math.round(cum),
+    });
+  }
+  return {
+    scenario: scenKey,
+    arch: archKey,
+    rows,
+    summary: {
+      gross: Math.round(grossTotal),
+      net: Math.round(netTotal),
+      ads: adsTotal,
+      result: Math.round(cum),
+      trough: troughMonth === null ? null : Math.round(trough),
+      troughMonth,
+      firstPositive,
+      cumPositive,
+      ivaOwedAtYearEnd: Math.round(accrued),
+      endCash: Math.round(cash - accrued),
+    },
+  };
+}
+
+function yearResult(price, served, servedVisits, ads, year, hired, newHire) {
+  const gross = served * price * 12;
+  const net = gross / (1 + IVA);
+  const variable = (served * CONSUMABLE + servedVisits * PER_VISIT) * 12;
+  const operators = hired * OPERATOR_COST * 12;
+  const machine = newHire * MACHINE;
+  const fixed = fixedForYear(year);
+  return {
+    gross,
+    result: net - variable - ads * 12 - fixed - operators - machine,
+    fixed,
+    operators,
+    machine,
+  };
+}
+
+function longRun(scenKey, archKey, endCashY1) {
+  const cfg = Y23[scenKey];
+  const ppv = SCEN[scenKey].ppv;
+  const price = ARCH[archKey].piece;
+  let cash = endCashY1;
+  let hired = 0;
+  let hireNext = false;
+  let visits = 0;
+  let growth = (cfg.visits[1] / cfg.visits[0] - 1) / 2;
+  let ownerYear = null;
+  const years = [];
+  for (let y = 2; y <= MAX_YEAR; y++) {
+    if (y === 2) visits = cfg.visits[0];
+    else if (y === 3) visits = cfg.visits[1];
+    else {
+      visits = visits * (1 + growth);
+      growth = growth / 2;
+    }
+    const ads = y === 2 ? cfg.ads[0] : cfg.ads[1];
+    const newHire = hireNext ? 1 : 0;
+    hired += newHire;
+    hireNext = false;
+    const capacity = (1 + hired) * CAPACITY;
+    const demand = visits * ppv;
+    const served = Math.min(demand, capacity);
+    const r = yearResult(
+      price,
+      served,
+      (visits * served) / demand,
+      ads,
+      y,
+      hired,
+      newHire,
+    );
+    cash += r.result;
+    let ownerResult = null;
+    if (hired > 0) {
+      const ownerServed = Math.min(demand, hired * CAPACITY);
+      ownerResult = yearResult(
+        price,
+        ownerServed,
+        (visits * ownerServed) / demand,
+        ads,
+        y,
+        hired,
+        newHire,
+      ).result;
+      if (ownerYear === null && hired * CAPACITY >= demand) ownerYear = y;
+    }
+    const utilisation = served / capacity;
+    const cashNeed =
+      CASH_COVER_MONTHS * (FIXED_FULL + OPERATOR_COST * (hired + 1) + ads);
+    if (utilisation >= TRIGGER_SHARE && cash >= cashNeed) hireNext = true;
+    years.push({
+      year: y,
+      visits: +visits.toFixed(1),
+      pieces: +served.toFixed(1),
+      demandPieces: +demand.toFixed(1),
+      operators: 1 + hired,
+      hired,
+      newHire,
+      utilisation: +(utilisation * 100).toFixed(1),
+      ads,
+      gross: Math.round(r.gross),
+      fixed: r.fixed,
+      operatorCost: r.operators,
+      machine: r.machine,
+      result: Math.round(r.result),
+      cashEnd: Math.round(cash),
+      ownerStateResult: ownerResult === null ? null : Math.round(ownerResult),
+      hireDecidedForNextYear: hireNext,
+    });
+  }
+  return { scenario: scenKey, arch: archKey, years, ownerYear };
+}
+
+const contribution = {};
+for (const [k, a] of Object.entries(ARCH)) {
+  const ppv = SCEN.realista.ppv;
+  const netPiece = a.piece / (1 + IVA);
+  const perVisit = ppv * netPiece - ppv * CONSUMABLE - PER_VISIT;
+  const perPiece = perVisit / ppv;
+  contribution[k] = {
+    netPrice: +netPiece.toFixed(2),
+    perPiece: +perPiece.toFixed(2),
+    perVisit: +perVisit.toFixed(2),
+    marginPct: +((perPiece / netPiece) * 100).toFixed(1),
+    singlePaidVisit: +(netPiece - CONSUMABLE - PER_VISIT - CAC).toFixed(2),
+    twoPiecePaidVisit: +(2 * netPiece - 2 * CONSUMABLE - PER_VISIT - CAC).toFixed(2),
+    cacPaybackPieces: +(CAC / perPiece).toFixed(1),
+  };
+}
+
+const BE_THRESHOLDS = [
+  { key: "fixedY1", label: `Cover fixed only, tarifa plana (€${FIXED_FLAT}/mo)`, cost: FIXED_FLAT },
+  { key: "fixedAdsY1", label: `Fixed + ads €300, tarifa plana (€${FIXED_FLAT + 300}/mo)`, cost: FIXED_FLAT + 300 },
+  { key: "fixedAdsFull", label: `Fixed after tarifa plana + ads €300 (€${FIXED_FULL + 300}/mo)`, cost: FIXED_FULL + 300 },
+];
+const breakEven = BE_THRESHOLDS.map((t) => {
+  const row = { key: t.key, label: t.label, cost: t.cost };
+  for (const k of Object.keys(ARCH)) {
+    const pieces = t.cost / contribution[k].perPiece;
+    row[k] = {
+      pieces: +pieces.toFixed(1),
+      visits: +(pieces / SCEN.realista.ppv).toFixed(1),
+      capacityPct: +((pieces / CAPACITY) * 100).toFixed(1),
+    };
+  }
+  return row;
+});
+
+const runs = {};
+for (const sk of Object.keys(SCEN)) {
+  runs[sk] = {};
+  for (const ak of Object.keys(ARCH)) runs[sk][ak] = year1(sk, ak);
+}
+
+const envelope = [];
+for (const ak of Object.keys(ARCH))
+  for (const sk of Object.keys(SCEN)) {
+    const s = runs[sk][ak].summary;
+    envelope.push({ arch: ak, scenario: sk, ...s });
+  }
+
+const long = {};
+for (const sk of Object.keys(SCEN)) {
+  long[sk] = {};
+  for (const ak of Object.keys(ARCH))
+    long[sk][ak] = longRun(sk, ak, runs[sk][ak].summary.endCash);
+}
+
+const ratios = {};
+for (const ak of Object.keys(ARCH)) {
+  const s = runs.realista[ak].summary;
+  ratios[ak] = {
+    contributionMarginPct: contribution[ak].marginPct,
+    cacPaybackPieces: contribution[ak].cacPaybackPieces,
+    resultOverNetRevenuePct: +((s.result / s.net) * 100).toFixed(1),
+    adsOverGrossPct: +((s.ads / s.gross) * 100).toFixed(1),
+  };
+}
+
+const market = {
+  source: "murcia-market.md §5 (price map), §1.7 and §8.5 (rings); pricing-decision.md §4 (grids)",
+  priceMap: [
+    { service: "Colchón individual", n: 4, murciaMedian: 52.5, murciaMedianVat: 57.0, murciaRange: [36, 59], madrid: [35, 60], valencia: [25, 55], granada: null, granadaNote: "desde €45, no size (Happy Clean)" },
+    { service: "Colchón matrimonio", n: 4, murciaMedian: 67, murciaMedianVat: 70.8, murciaRange: [60, 100], madrid: [55, 90], valencia: [60, 75], granada: null, granadaNote: "Clean-Home add-on only" },
+    { service: "Colchón king", n: 2, murciaMedian: null, murciaMedianVat: null, murciaRange: [69, 120], madrid: [75, 100], valencia: [65, 100], granada: null, granadaNote: "Clean-Home add-on only, +€35" },
+    { service: "Sofá 2 plazas", n: 5, murciaMedian: 79, murciaMedianVat: 79, murciaRange: [60, 90], madrid: [60, 97], valencia: [69, 89], granada: [79, 79], granadaNote: "Clean-Home" },
+    { service: "Sofá 3 plazas", n: 5, murciaMedian: 100, murciaMedianVat: 100, murciaRange: [85, 120], madrid: [90, 119], valencia: [85, 119], granada: [85, 85], granadaNote: "Clean-Home" },
+    { service: "Chaise longue / L", n: 5, murciaMedian: 110, murciaMedianVat: 110, murciaRange: [89, 180], madrid: [120, 175], valencia: [89, 190], granada: [89, 99], granadaNote: "Clean-Home" },
+    { service: "Sillón / butaca", n: 3, murciaMedian: 40, murciaMedianVat: 40, murciaRange: [30, 60], madrid: [42, 50], valencia: null, granada: null, granadaNote: "desde €30 (Happy Clean)" },
+    { service: "Silla", n: 3, murciaMedian: 10, murciaMedianVat: 10, murciaRange: [5, 20], madrid: null, valencia: null, granada: null, granadaNote: "desde €5 (Happy Clean)" },
+  ],
+  grids: {
+    A: { "Colchón individual": 39, "Colchón matrimonio": 55, "Colchón king": 69, "Sofá 3 plazas": 72, "Sofá por plaza": 25, "Pedido mínimo": 55 },
+    B: { "Colchón individual": 49, "Colchón matrimonio": 69, "Colchón king": 89, "Sofá 3 plazas": 95, "Sofá por plaza": 32, "Pedido mínimo": 70 },
+    C: { "Colchón individual": [49, 65, 79], "Colchón matrimonio": [69, 89, 109], "Sofá 3 plazas": [95, 119, 145], "Pack Dormitorio": 149, "Pack Casa": 200, "Pedido mínimo": 79 },
+  },
+  rings: [
+    { ring: "R1", scope: "Urban core, 24 barrios", population: 138997, households: 49600, travel: [null, 3.5], travelNote: "core trips not routed; I6 €3.5 holds inside ≈10 km" },
+    { ring: "R2", scope: "Municipality + inner belt", population: 704814, households: 250700, travel: [2.8, 9.42], travelNote: "out-and-back at €0.175/km" },
+    { ring: "R3", scope: "Outer ring (surcharge or minimum order)", population: 666428, households: 248500, travel: [10.36, 27.55], travelNote: "out-and-back at €0.175/km" },
+  ],
+};
+
+const data = {
+  meta: {
+    generator: "business/research/murcia-model.mjs",
+    month1: MONTHS[0],
+    months: MONTHS,
+    flatRateMonthsLeft: FLAT_RATE_MONTHS_LEFT,
+    startingCash: 0,
+    loan: 0,
+  },
+  inputs: {
+    iva: IVA,
+    consumablePerPiece: CONSUMABLE,
+    capacityPieces: CAPACITY,
+    cac: CAC,
+    operatorCostMonthly: OPERATOR_COST,
+    machine: MACHINE,
+    fixedFlat: FIXED_FLAT,
+    fixedFull: FIXED_FULL,
+    travel: {
+      central: TRAVEL.central,
+      low: TRAVEL.low,
+      high: TRAVEL.high,
+      centralRaw: +TRAVEL.centralRaw.toFixed(2),
+      lowRaw: +TRAVEL.lowRaw.toFixed(2),
+      highRaw: +TRAVEL.highRaw.toFixed(2),
+      tiers: Object.fromEntries(
+        Object.entries(TRAVEL_TIERS).map(([k, t]) => [
+          k,
+          { label: t.label, points: t.points, mean: +mean(t.points).toFixed(2) },
+        ]),
+      ),
+      mix: TRAVEL_MIX,
+    },
+    parking: {
+      perVisit: PARKING,
+      raw: +PARKING_RAW.toFixed(2),
+      serShare: SER_SHARE,
+      ticket: SER_TICKET,
+    },
+    architectures: ARCH,
+    scenarios: SCEN,
+    years23: Y23,
+  },
+  year1: runs,
+  envelope,
+  longRun: long,
+  breakEven,
+  contribution,
+  ratios,
+  market,
+};
+
+const fmt = (x, d = 0) => {
+  if (x === null || x === undefined) return "—";
+  const neg = x < 0;
+  const [int, dec] = Math.abs(x).toFixed(d).split(".");
+  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
+  const body = dec ? `${grouped}.${dec}` : grouped;
+  return neg ? `−${body}` : body;
+};
+const eur = (x) => (x < 0 ? `−€${fmt(-x)}` : `€${fmt(x)}`);
+const table = (headers, rows) =>
+  [
+    `| ${headers.join(" | ")} |`,
+    `| ${headers.map(() => "---").join(" | ")} |`,
+    ...rows.map((r) => `| ${r.join(" | ")} |`),
+  ].join("\n");
+
+const out = [];
+out.push("# Murcia model — generated tables");
+out.push("");
+out.push(
+  "Generated by `murcia-model.mjs`; do not edit by hand. Inputs and derivations: `murcia-model.md`. Euros; P&L net of IVA, pre-IRPF; cash gross with IVA remitted the month after each calendar quarter; starting cash €0, no loan.",
+);
+out.push("");
+out.push("## T0. Derived per-visit inputs");
+out.push("");
+out.push(
+  table(
+    ["Input", "Raw", "Carried (nearest €0.5)"],
+    [
+      ["Travel per visit, central mix", fmt(TRAVEL.centralRaw, 2), fmt(TRAVEL.central, 1)],
+      ["Travel per visit, band low (all near)", fmt(TRAVEL.lowRaw, 2), fmt(TRAVEL.low, 1)],
+      ["Travel per visit, band high (belt-heavy mix)", fmt(TRAVEL.highRaw, 2), fmt(TRAVEL.high, 1)],
+      ["Parking per visit (SER share × ticket)", fmt(PARKING_RAW, 2), fmt(PARKING, 1)],
+      ["Per-visit cost carried (travel + parking)", "—", fmt(PER_VISIT, 1)],
+    ],
+  ),
+);
+
+let n = 1;
+for (const ak of ["B", "A", "C"]) {
+  const r = runs.realista[ak];
+  const s = r.summary;
+  out.push("");
+  out.push(`## T${n}. Year 1 — ${ARCH[ak].label} × realista`);
+  out.push("");
+  out.push(
+    table(
+      ["Month", "Visits", "Pieces", "Gross", "Net", "Consum.", "Travel", "Parking", "Ads", "Fixed", "Result", "IVA paid", "Cash"],
+      r.rows.map((x) => [
+        x.month,
+        x.visits,
+        fmt(x.pieces, 1),
+        fmt(x.gross),
+        fmt(x.net),
+        fmt(x.consumables),
+        fmt(x.travel),
+        fmt(x.parking),
+        fmt(x.ads),
+        fmt(x.fixed),
+        fmt(x.result),
+        fmt(x.ivaPaid),
+        fmt(x.cash),
+      ]),
+    ),
+  );
+  out.push("");
+  out.push(
+    `Year 1: gross ${eur(s.gross)} · net revenue ${eur(s.net)} · result ${eur(s.result)} · cash trough ${s.troughMonth === null ? "none (≥0 all year)" : `${eur(s.trough)} (${s.troughMonth})`} · first positive month ${s.firstPositive ?? "none"} · cumulative positive ${s.cumPositive ?? "not within year 1"} · IVA owed at year end ${eur(s.ivaOwedAtYearEnd)} · year-end cash net of it ${eur(s.endCash)}.`,
+  );
+  n++;
+}
+
+out.push("");
+out.push(`## T${n}. Sensitivity envelope — year 1, 3 architectures × 3 demand bands`);
+out.push("");
+out.push(
+  table(
+    ["Arch × demand", "Gross Y1", "Result Y1", "Cash trough (month)", "First positive", "Cumulative positive", "Year-end cash"],
+    envelope.map((e) => [
+      `${e.arch} ${e.scenario}`,
+      fmt(e.gross),
+      fmt(e.result),
+      e.troughMonth === null ? "none (≥0 all year)" : `${fmt(e.trough)} (${e.troughMonth})`,
+      e.firstPositive ?? "none",
+      e.cumPositive ?? "not within year 1",
+      fmt(e.endCash),
+    ]),
+  ),
+);
+n++;
+
+out.push("");
+out.push(`## T${n}. Years 2–3 — annual`);
+out.push("");
+const y23Rows = [];
+for (const sk of Object.keys(SCEN))
+  for (const ak of Object.keys(ARCH)) {
+    const [y2, y3] = long[sk][ak].years;
+    y23Rows.push([
+      `${sk} × ${ak}`,
+      fmt(y2.pieces, 1),
+      y2.operators,
+      fmt(y2.gross),
+      fmt(y2.result),
+      fmt(y3.pieces, 1),
+      y3.operators,
+      fmt(y3.gross),
+      fmt(y3.result),
+    ]);
+  }
+out.push(
+  table(
+    ["Scenario × arch", "Y2 pieces/mo", "Y2 operators", "Y2 gross", "Y2 result", "Y3 pieces/mo", "Y3 operators", "Y3 gross", "Y3 result"],
+    y23Rows,
+  ),
+);
+n++;
+
+out.push("");
+out.push(`## T${n}. Years 2–8 — strategic trajectory, architecture B`);
+out.push("");
+for (const sk of Object.keys(SCEN)) {
+  const lr = long[sk].B;
+  out.push(`### ${sk} × B`);
+  out.push("");
+  out.push(
+    table(
+      ["Year", "Visits/mo", "Pieces/mo", "Operators", "Utilisation %", "Gross", "Operator cost", "Machine", "Result", "Cash end", "Owner-state result", "Hire for next year"],
+      lr.years.map((y) => [
+        `Y${y.year}`,
+        fmt(y.visits, 1),
+        fmt(y.pieces, 1),
+        y.operators,
+        fmt(y.utilisation, 1),
+        fmt(y.gross),
+        fmt(y.operatorCost),
+        fmt(y.machine),
+        fmt(y.result),
+        fmt(y.cashEnd),
+        fmt(y.ownerStateResult),
+        y.hireDecidedForNextYear ? "yes" : "no",
+      ]),
+    ),
+  );
+  out.push("");
+  out.push(
+    `Founder→owner milestone (hired operators alone carry demand): ${lr.ownerYear === null ? "not within Y8" : `Y${lr.ownerYear}`}.`,
+  );
+  out.push("");
+}
+n++;
+
+out.push(`## T${n}. Structural break-even (contribution at ppv ${SCEN.realista.ppv})`);
+out.push("");
+out.push(
+  table(
+    ["Threshold", "A pieces/mo", "A visits/mo", "B pieces/mo", "B visits/mo", "C pieces/mo", "C visits/mo"],
+    breakEven.map((b) => [
+      b.label,
+      fmt(b.A.pieces, 1),
+      fmt(b.A.visits, 1),
+      fmt(b.B.pieces, 1),
+      fmt(b.B.visits, 1),
+      fmt(b.C.pieces, 1),
+      fmt(b.C.visits, 1),
+    ]),
+  ),
+);
+out.push("");
+out.push(`Capacity: ${CAPACITY} pieces/month per operator.`);
+n++;
+
+out.push("");
+out.push(`## T${n}. Contribution per piece and per visit (net of IVA)`);
+out.push("");
+out.push(
+  table(
+    ["Arch", "Net price/piece", "Contribution/piece", "Contribution/visit (ppv 1.8)", "Single-piece paid visit (CAC €71)", "Two-piece paid visit (CAC €71)"],
+    Object.entries(contribution).map(([k, c]) => [
+      k,
+      fmt(c.netPrice, 2),
+      fmt(c.perPiece, 2),
+      fmt(c.perVisit, 2),
+      fmt(c.singlePaidVisit, 2),
+      fmt(c.twoPiecePaidVisit, 2),
+    ]),
+  ),
+);
+n++;
+
+out.push("");
+out.push(`## T${n}. Ratios (realista tracks)`);
+out.push("");
+out.push(
+  table(
+    ["Ratio", "A", "B", "C"],
+    [
+      ["Contribution margin / piece (%)", ...["A", "B", "C"].map((k) => fmt(ratios[k].contributionMarginPct, 1))],
+      ["CAC payback (pieces per paid client)", ...["A", "B", "C"].map((k) => fmt(ratios[k].cacPaybackPieces, 1))],
+      ["Result Y1 / net revenue Y1 (%)", ...["A", "B", "C"].map((k) => fmt(ratios[k].resultOverNetRevenuePct, 1))],
+      ["Ads / gross revenue Y1 (%)", ...["A", "B", "C"].map((k) => fmt(ratios[k].adsOverGrossPct, 1))],
+    ],
+  ),
+);
+out.push("");
+
+writeFileSync(join(HERE, "murcia-model-tables.md"), out.join("\n"));
+writeFileSync(join(HERE, "murcia-model-data.json"), `${JSON.stringify(data, null, 2)}\n`);
diff --git a/business/research/murcia-model.md b/business/research/murcia-model.md
new file mode 100644
index 0000000..634284b
--- /dev/null
+++ b/business/research/murcia-model.md
@@ -0,0 +1,144 @@
+# Murcia economic model — number bible (Grupo Vesta)
+
+> Built 2026-10-06. Replaces `economic-model.md` for the Murcia launch report. The
+> tables live in `murcia-model-tables.md` and the same numbers as data in
+> `murcia-model-data.json`; both are written by `murcia-model.mjs` (same folder), and
+> re-running it must reproduce them byte for byte. Every figure the report uses from the
+> model traces to those two files; this file carries the inputs, the derivations and
+> what changed. Labels: FACT / CAPTURED / ESTIMATE / HYPOTHESIS / PROPOSAL / ASSUMPTION,
+> carried from each source as it states them.
+
+## 1. Input sheet
+
+| # | Input | Value | Label | Source (file §section) |
+| --- | --- | --- | --- | --- |
+| I1 | Avg gross price per piece, Arch. A | €56.75 | PROPOSAL | `economic-model.md` §1 I1 (`pricing-decision.md` §4.1 grid × mix M1) |
+| I2 | Avg gross price per piece, Arch. B | €72.50 | PROPOSAL | `economic-model.md` §1 I2 (`pricing-decision.md` §4.2 grid × mix M1) |
+| I3 | Avg gross price per piece, Arch. C | €82.81 | PROPOSAL | `economic-model.md` §1 I3 (`pricing-decision.md` §4.3 grid × M1 × tier blend M2) |
+| M1 | Service mix behind I1–I3 | 50% matrimonio · 20% individual · 25% sofá 3 pz · 5% king | ESTIMATE | `economic-model.md` §1 M1 |
+| M2 | Tier blend (C only) | 60% Básico · 30% Profundo · 10% Integral | ESTIMATE | `economic-model.md` §1 M2 |
+| I4 | IVA | 21%, régimen general; net = gross ÷ 1.21 | FACT + founder decision | `pricing-decision.md` §3.2 |
+| I5 | Consumables | €1.5 / piece | CAPTURED | `founder-inputs.md` Block 2 |
+| I6 | Travel per visit | €4.5 central (band €3.5–6.0), derived in §2.1 | ESTIMATE | `murcia-market.md` §8.5 (per-point out-and-back cost at €0.175/km) |
+| I6a | Job mix by distance tier | 50% R1 + pedanías ≤10 km · 35% R2 at 12–13 km · 15% R2 outer belt 16–27 km | HYPOTHESIS | Tiers from `murcia-market.md` §8.5 reading; shares set here, no source measures them |
+| I7 | Parking per visit | €1.0 average, derived in §2.2 | ESTIMATE | `murcia-market.md` §8.3 (zona azul tickets, SER hours and sectors) |
+| I7a | Share of jobs parked in SER Sectors A–B during SER hours | 40% | HYPOTHESIS | Shares set here; sector perimeter from `murcia-market.md` §8.3 |
+| I8 | Fixed costs during tarifa plana | €186/mo = cuota 80 + gestor 30 + car insurance 50 + RC 25 + web 1 | FACT / CAPTURED / ESTIMATE | cuota `market-dossier.md` §9.1 (carried by `murcia-market.md` §8.1); gestor and car insurance `founder-inputs.md` Block 2; RC `rc-insurance-quote.md` Conclusion; web `market-dossier.md` §9.2 |
+| I9 | Fixed costs after tarifa plana | €356/mo (cuota steps to €250, central of €205–300) | FACT (band) | `market-dossier.md` §9.1; `economic-model.md` §1 I8 |
+| I10 | RC insurance | €25/mo (≈€300/yr, €150,000 cover), inside I8 and I9 | ESTIMATE | `rc-insurance-quote.md` Conclusion |
+| I11 | `FLAT_RATE_MONTHS_LEFT` | 9 months (Oct-2026 to Jun-2027 at €186; €356 from Jul-2027) | HYPOTHESIS | `founder-inputs.md` Addendum 2026-10-06 (alta date and region TO-CONFIRM) |
+| I12 | Capacity | 88 pieces/mo per operator (4/day × 22 days) | CAPTURED | `founder-inputs.md` Block 1; `economic-model.md` §1 I9 |
+| I13 | Demand curves, year 1 | conservador / realista / optimista, visits, ads and ppv unchanged | ESTIMATE | `economic-model.md` §2 |
+| I14 | Month 1 | October 2026; year 1 = Oct-2026 to Sep-2027 | CAPTURED | `founder-inputs.md` Addendum 2026-10-06 |
+| I15 | Financing and starting cash | No loan, no credit line; starting cash €0 (no buffer) | CAPTURED | `founder-inputs.md` Addendum 2026-10-06 and Block 2 (startup safety buffer) |
+| I16 | Purchases at launch | None; equipment €2,300 already paid (sunk) | CAPTURED | `founder-inputs.md` Addendum 2026-10-06 and Block 2 |
+| I17 | Visits/mo, years 2–3 | conservador 12→16 · realista 24→34 · optimista 36→48 | ESTIMATE | `economic-model.md` §4 |
+| I18 | Ads €/mo, years 2–3 | conservador 200→250 · realista 450→500 · optimista 650→700 | PROPOSAL | `economic-model-engine.mjs` `Y23` block (the figures behind `economic-model.md` §4) |
+| I19 | CAC, paid channel | €71 central, band €36–111 | ESTIMATE / HYPOTHESIS | `market-dossier.md` §6.3; `economic-model.md` §1 I10 |
+| I20 | Operator 2 full-loaded cost | €1,860/mo | ESTIMATE | `economic-model.md` §1 I13 (TO-CONFIRM vs convenio de limpieza) |
+| I21 | Second machine | €2,300, bought in the year an operator joins | CAPTURED | `founder-inputs.md` Block 2 |
+| I22 | Operator trigger | utilisation ≥75% of capacity and cash ≥ 3 months of the new cost structure | PROPOSAL | `economic-model.md` §7 |
+| I23 | Growth, years 4–8 | visits grow at half the Y2→Y3 rate in Y4, and the rate halves every year after | HYPOTHESIS | Rule set here from `economic-model.md` §4 visits (that file's §9 C6 left the rule open) |
+| I24 | IRPF and owner drawings | Not modelled; results are pre-IRPF and cash accumulates with no drawings | ASSUMPTION | `economic-model.md` §1 I15 |
+
+## 2. Derivations
+
+### 2.1 Travel per visit (I6)
+
+Tier costs are the out-and-back costs of `murcia-market.md` §8.5 at the model's
+€0.175/km. Near tier: €3.50, the figure §8.5 says holds inside ≈10 km (the core, El
+Palmar €2.80, Alcantarilla €3.05). Mid tier: mean of Molina de Segura €4.38 and
+Sangonera la Verde €4.48 = €4.43. Outer-belt tier: mean of Las Torres de Cotillas /
+Beniel €5.81, Ceutí €7.14, Santomera €7.18 and Archena €9.42 = €7.39.
+
+- Central, mix 50/35/15: 0.50 × 3.50 + 0.35 × 4.43 + 0.15 × 7.39 = €4.41 → **€4.5**.
+- Band low, all jobs near: €3.50 → **€3.5** (the old I6).
+- Band high, belt-heavy mix 10/30/60: €6.11 → **€6.0**.
+
+Rounding to the nearest €0.5. Out-and-back is an upper bound per job: chaining two jobs
+in a day shares legs (`murcia-market.md` §8.5). R3 jobs (€10.36–27.55) are outside the
+mix: they are served only with a surcharge or a minimum order, so they do not dilute
+the R2 price.
+
+### 2.2 Parking per visit (I7)
+
+One zona azul ticket covers one job: Sector A up to €1.90 (90 min) and Sector B up to
+€2.70 (150 min), VAT-included ESTIMATE in `murcia-market.md` §8.3. Mean ticket €2.30 ×
+40% of jobs (I7a) = €0.92 → **€1.0**, same rounding as I6. Parking outside SER hours and
+sectors is free (§8.3). The "empresas o autónomos" pass (€30/month) is not used: it
+requires a vehicle that is a "vehículo industrial", which is not recorded.
+
+### 2.3 Fixed costs over time (I8, I9, I11)
+
+Month m (1 = Oct-2026) costs €186 if m ≤ `FLAT_RATE_MONTHS_LEFT`, else €356. With the
+default 9, year 1 has nine months at €186 and three at €356; year 2 onward €356 every
+month. Changing the constant at the top of the script re-runs every table.
+
+### 2.4 Year 1, monthly (tables T1–T4)
+
+Visits = paid + organic (I13). Pieces = visits × ppv, capped at 88. Gross = pieces ×
+price; net = gross ÷ 1.21. Result = net − consumables − travel − parking − ads − fixed.
+Cash: the client pays gross; the IVA of each calendar quarter is paid in the month after
+it closes (Oct–Dec in Jan-2027, Jan–Mar in Apr-2027, Apr–Jun in Jul-2027); Jul–Sep is
+owed at year end (paid Oct-2027) and is netted out of year-end cash, which therefore
+equals the year's result. Trough = lowest month-end cash below zero, with no buffer.
+
+### 2.5 Years 2–8 (tables T5, T6)
+
+Annual. Year y visits: I17 for Y2 and Y3; from Y4, the I23 rule. Served pieces =
+min(visits × ppv, operators × 88); served visits scale with it. Result = net −
+consumables − (travel + parking) − ads × 12 − fixed for the year − hired operators ×
+€1,860 × 12 − €2,300 in the year an operator joins. Ads hold at the Y3 level from Y4.
+
+Operator trigger, re-derived from `economic-model.md` §7 for an annual model: at the end
+of a year, if served pieces ≥ 75% of that year's capacity (the annual average stands in
+for "3 consecutive months") and year-end cash ≥ 3 × (€356 + €1,860 × hired-after +
+that year's ads), one operator is hired for the next year.
+
+Founder→owner milestone: the first year in which the hired operators alone could
+carry the year's demand (hired × 88 ≥ demand pieces). "Owner-state result" is the
+year's result if the founder stopped cleaning that year (capacity = hired × 88). Since
+the founder's own hours carry no wage in the model, it equals the operating result
+whenever the hired capacity covers demand.
+
+### 2.6 Break-even, contribution, ratios (T7–T9)
+
+Contribution per visit at ppv 1.8 = 1.8 × (price ÷ 1.21 − €1.5) − €5.5 (travel +
+parking); per piece = per visit ÷ 1.8. Break-even pieces = monthly cost ÷ contribution
+per piece; visits = pieces ÷ 1.8. Paid visits subtract the €71 CAC once per visit.
+Contribution margin = contribution per piece ÷ net price.
+
+### 2.7 Market block in the JSON
+
+`market` carries, for the report's charts, the price map of `murcia-market.md` §5
+(Murcia median and range, Madrid and Valencia ranges, Granada figures), the three price
+grids of `pricing-decision.md` §4.1–§4.3, and the service rings of `murcia-market.md`
+§1.7 with the travel range of §8.5. Values are copied as those files state them.
+
+## 3. What changed vs `economic-model.md`
+
+1. **Calendar.** Month 1 = Oct-2026; every year-1 month is labelled (Oct-2026 …
+   Sep-2027).
+2. **Travel** €3.5 → €4.5 per visit (I6), from Murcia routing over an R2 job mix.
+3. **Parking** added, €1.0 per visit (I7). The old model had none.
+4. **Fixed-cost step inside year 1.** The old model held €186 all of year 1; here the
+   cuota steps after `FLAT_RATE_MONTHS_LEFT` months (default 9), because the alta date
+   is unrecorded.
+5. **IVA timing** follows calendar quarters from October. The old engine also paid, in
+   each remittance month, that same month's IVA; here only the closed quarter is paid.
+6. **No financing.** §6 of the old model (≈€6,000 loan, repayment cuotas) is gone; the
+   troughs are reported against €0 starting cash.
+7. **Operator 2 by trigger, not by assumption.** The old Y3 optimista assumed operator 2
+   and did not subtract its cost; here the hire comes from the §7 trigger and its cost
+   and machine are in the result.
+8. **Years 4–8** are computed by a stated rule (I23) instead of an open "~+20%/yr".
+9. **Contribution margin** is computed on the net price, as the old note says; the old
+   table's 76.6–78.5% divided by the gross price.
+10. **B2B** remains excluded from every table, as in `economic-model.md` §7 (demand
+    HYPOTHESIS); it can only improve them.
+
+## 4. Verification
+
+`node business/research/murcia-model.mjs` then
+`git diff --exit-code -- business/research/murcia-model-tables.md business/research/murcia-model-data.json`
+must exit 0 on a clean checkout. The script has no clock, random or locale input.
diff --git a/business/research/murcia-model-tables.md b/business/research/murcia-model-tables.md
new file mode 100644
index 0000000..ca5891e
--- /dev/null
+++ b/business/research/murcia-model-tables.md
@@ -0,0 +1,169 @@
+# Murcia model — generated tables
+
+Generated by `murcia-model.mjs`; do not edit by hand. Inputs and derivations: `murcia-model.md`. Euros; P&L net of IVA, pre-IRPF; cash gross with IVA remitted the month after each calendar quarter; starting cash €0, no loan.
+
+## T0. Derived per-visit inputs
+
+| Input | Raw | Carried (nearest €0.5) |
+| --- | --- | --- |
+| Travel per visit, central mix | 4.41 | 4.5 |
+| Travel per visit, band low (all near) | 3.50 | 3.5 |
+| Travel per visit, band high (belt-heavy mix) | 6.11 | 6.0 |
+| Parking per visit (SER share × ticket) | 0.92 | 1.0 |
+| Per-visit cost carried (travel + parking) | — | 5.5 |
+
+## T1. Year 1 — B Match + premium × realista
+
+| Month | Visits | Pieces | Gross | Net | Consum. | Travel | Parking | Ads | Fixed | Result | IVA paid | Cash |
+| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
+| Oct-2026 | 2 | 3.6 | 261 | 216 | 5 | 9 | 2 | 150 | 186 | −137 | 0 | −91 |
+| Nov-2026 | 4 | 7.2 | 522 | 431 | 11 | 18 | 4 | 200 | 186 | 13 | 0 | 12 |
+| Dec-2026 | 4 | 7.2 | 522 | 431 | 11 | 18 | 4 | 250 | 186 | −37 | 0 | 65 |
+| Jan-2027 | 6 | 10.8 | 783 | 647 | 16 | 27 | 6 | 300 | 186 | 112 | 226 | 86 |
+| Feb-2027 | 7 | 12.6 | 914 | 755 | 19 | 32 | 7 | 300 | 186 | 212 | 0 | 456 |
+| Mar-2027 | 9 | 16.2 | 1,175 | 971 | 24 | 41 | 9 | 350 | 186 | 361 | 0 | 1,021 |
+| Apr-2027 | 10 | 18.0 | 1,305 | 1,079 | 27 | 45 | 10 | 350 | 186 | 461 | 498 | 1,210 |
+| May-2027 | 11 | 19.8 | 1,436 | 1,186 | 30 | 50 | 11 | 350 | 186 | 560 | 0 | 2,019 |
+| Jun-2027 | 13 | 23.4 | 1,697 | 1,402 | 35 | 59 | 13 | 400 | 186 | 709 | 0 | 3,023 |
+| Jul-2027 | 14 | 25.2 | 1,827 | 1,510 | 38 | 63 | 14 | 400 | 356 | 639 | 770 | 3,209 |
+| Aug-2027 | 16 | 28.8 | 2,088 | 1,726 | 43 | 72 | 16 | 400 | 356 | 838 | 0 | 4,410 |
+| Sep-2027 | 18 | 32.4 | 2,349 | 1,941 | 49 | 81 | 18 | 400 | 356 | 1,038 | 0 | 5,855 |
+
+Year 1: gross €14,877 · net revenue €12,295 · result €4,768 · cash trough −€91 (Oct-2026) · first positive month Nov-2026 · cumulative positive Feb-2027 · IVA owed at year end €1,087 · year-end cash net of it €4,768.
+
+## T2. Year 1 — A Penetración × realista
+
+| Month | Visits | Pieces | Gross | Net | Consum. | Travel | Parking | Ads | Fixed | Result | IVA paid | Cash |
+| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
+| Oct-2026 | 2 | 3.6 | 204 | 169 | 5 | 9 | 2 | 150 | 186 | −184 | 0 | −148 |
+| Nov-2026 | 4 | 7.2 | 409 | 338 | 11 | 18 | 4 | 200 | 186 | −81 | 0 | −158 |
+| Dec-2026 | 4 | 7.2 | 409 | 338 | 11 | 18 | 4 | 250 | 186 | −131 | 0 | −218 |
+| Jan-2027 | 6 | 10.8 | 613 | 507 | 16 | 27 | 6 | 300 | 186 | −29 | 177 | −318 |
+| Feb-2027 | 7 | 12.6 | 715 | 591 | 19 | 32 | 7 | 300 | 186 | 48 | 0 | −146 |
+| Mar-2027 | 9 | 16.2 | 919 | 760 | 24 | 41 | 9 | 350 | 186 | 150 | 0 | 163 |
+| Apr-2027 | 10 | 18.0 | 1,022 | 844 | 27 | 45 | 10 | 350 | 186 | 226 | 390 | 177 |
+| May-2027 | 11 | 19.8 | 1,124 | 929 | 30 | 50 | 11 | 350 | 186 | 302 | 0 | 674 |
+| Jun-2027 | 13 | 23.4 | 1,328 | 1,097 | 35 | 59 | 13 | 400 | 186 | 405 | 0 | 1,309 |
+| Jul-2027 | 14 | 25.2 | 1,430 | 1,182 | 38 | 63 | 14 | 400 | 356 | 311 | 603 | 1,266 |
+| Aug-2027 | 16 | 28.8 | 1,634 | 1,351 | 43 | 72 | 16 | 400 | 356 | 464 | 0 | 2,013 |
+| Sep-2027 | 18 | 32.4 | 1,839 | 1,520 | 49 | 81 | 18 | 400 | 356 | 616 | 0 | 2,948 |
+
+Year 1: gross €11,645 · net revenue €9,624 · result €2,097 · cash trough −€318 (Jan-2027) · first positive month Feb-2027 · cumulative positive May-2027 · IVA owed at year end €851 · year-end cash net of it €2,097.
+
+## T3. Year 1 — C Premium escalonado × realista
+
+| Month | Visits | Pieces | Gross | Net | Consum. | Travel | Parking | Ads | Fixed | Result | IVA paid | Cash |
+| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
+| Oct-2026 | 2 | 3.6 | 298 | 246 | 5 | 9 | 2 | 150 | 186 | −106 | 0 | −54 |
+| Nov-2026 | 4 | 7.2 | 596 | 493 | 11 | 18 | 4 | 200 | 186 | 74 | 0 | 123 |
+| Dec-2026 | 4 | 7.2 | 596 | 493 | 11 | 18 | 4 | 250 | 186 | 24 | 0 | 251 |
+| Jan-2027 | 6 | 10.8 | 894 | 739 | 16 | 27 | 6 | 300 | 186 | 204 | 259 | 351 |
+| Feb-2027 | 7 | 12.6 | 1,043 | 862 | 19 | 32 | 7 | 300 | 186 | 319 | 0 | 851 |
+| Mar-2027 | 9 | 16.2 | 1,342 | 1,109 | 24 | 41 | 9 | 350 | 186 | 499 | 0 | 1,583 |
+| Apr-2027 | 10 | 18.0 | 1,491 | 1,232 | 27 | 45 | 10 | 350 | 186 | 614 | 569 | 1,886 |
+| May-2027 | 11 | 19.8 | 1,640 | 1,355 | 30 | 50 | 11 | 350 | 186 | 729 | 0 | 2,900 |
+| Jun-2027 | 13 | 23.4 | 1,938 | 1,601 | 35 | 59 | 13 | 400 | 186 | 909 | 0 | 4,145 |
+| Jul-2027 | 14 | 25.2 | 2,087 | 1,725 | 38 | 63 | 14 | 400 | 356 | 854 | 880 | 4,481 |
+| Aug-2027 | 16 | 28.8 | 2,385 | 1,971 | 43 | 72 | 16 | 400 | 356 | 1,084 | 0 | 5,979 |
+| Sep-2027 | 18 | 32.4 | 2,683 | 2,217 | 49 | 81 | 18 | 400 | 356 | 1,314 | 0 | 7,758 |
+
+Year 1: gross €16,993 · net revenue €14,043 · result €6,517 · cash trough −€54 (Oct-2026) · first positive month Nov-2026 · cumulative positive Jan-2027 · IVA owed at year end €1,242 · year-end cash net of it €6,517.
+
+## T4. Sensitivity envelope — year 1, 3 architectures × 3 demand bands
+
+| Arch × demand | Gross Y1 | Result Y1 | Cash trough (month) | First positive | Cumulative positive | Year-end cash |
+| --- | --- | --- | --- | --- | --- | --- |
+| A conservador | 4,852 | −974 | −923 (Jul-2027) | Jun-2027 | not within year 1 | −974 |
+| A realista | 11,645 | 2,097 | −318 (Jan-2027) | Feb-2027 | May-2027 | 2,097 |
+| A optimista | 20,884 | 7,654 | none (≥0 all year) | Nov-2026 | Nov-2026 | 7,654 |
+| B conservador | 6,199 | 139 | −548 (Jan-2027) | Apr-2027 | Sep-2027 | 139 |
+| B realista | 14,877 | 4,768 | −91 (Oct-2026) | Nov-2026 | Feb-2027 | 4,768 |
+| B optimista | 26,680 | 12,444 | none (≥0 all year) | Oct-2026 | Oct-2026 | 12,444 |
+| C conservador | 7,080 | 868 | −425 (Jan-2027) | Feb-2027 | Jun-2027 | 868 |
+| C realista | 16,993 | 6,517 | −54 (Oct-2026) | Nov-2026 | Jan-2027 | 6,517 |
+| C optimista | 30,474 | 15,579 | none (≥0 all year) | Oct-2026 | Oct-2026 | 15,579 |
+
+## T5. Years 2–3 — annual
+
+| Scenario × arch | Y2 pieces/mo | Y2 operators | Y2 gross | Y2 result | Y3 pieces/mo | Y3 operators | Y3 gross | Y3 result |
+| --- | --- | --- | --- | --- | --- | --- | --- | --- |
+| conservador × A | 18.0 | 1 | 12,258 | 2,343 | 24.0 | 1 | 16,344 | 4,747 |
+| conservador × B | 18.0 | 1 | 15,660 | 5,154 | 24.0 | 1 | 20,880 | 8,496 |
+| conservador × C | 18.0 | 1 | 17,887 | 6,995 | 24.0 | 1 | 23,849 | 10,950 |
+| realista × A | 43.2 | 1 | 29,419 | 12,280 | 61.2 | 1 | 41,677 | 20,826 |
+| realista × B | 43.2 | 1 | 37,584 | 19,028 | 61.2 | 1 | 53,244 | 30,386 |
+| realista × C | 43.2 | 1 | 42,929 | 23,445 | 61.2 | 1 | 60,816 | 36,643 |
+| optimista × A | 72.0 | 1 | 49,032 | 24,778 | 96.0 | 2 | 65,376 | 11,842 |
+| optimista × B | 72.0 | 1 | 62,640 | 36,025 | 96.0 | 2 | 83,520 | 26,837 |
+| optimista × C | 72.0 | 1 | 71,548 | 43,386 | 96.0 | 2 | 95,397 | 36,653 |
+
+## T6. Years 2–8 — strategic trajectory, architecture B
+
+### conservador × B
+
+| Year | Visits/mo | Pieces/mo | Operators | Utilisation % | Gross | Operator cost | Machine | Result | Cash end | Owner-state result | Hire for next year |
+| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
+| Y2 | 12.0 | 18.0 | 1 | 20.5 | 15,660 | 0 | 0 | 5,154 | 5,293 | — | no |
+| Y3 | 16.0 | 24.0 | 1 | 27.3 | 20,880 | 0 | 0 | 8,496 | 13,789 | — | no |
+| Y4 | 18.7 | 28.0 | 1 | 31.8 | 24,360 | 0 | 0 | 11,124 | 24,914 | — | no |
+| Y5 | 20.2 | 30.3 | 1 | 34.5 | 26,390 | 0 | 0 | 12,657 | 37,571 | — | no |
+| Y6 | 21.1 | 31.6 | 1 | 35.9 | 27,490 | 0 | 0 | 13,488 | 51,058 | — | no |
+| Y7 | 21.5 | 32.3 | 1 | 36.7 | 28,062 | 0 | 0 | 13,920 | 64,979 | — | no |
+| Y8 | 21.7 | 32.6 | 1 | 37.0 | 28,355 | 0 | 0 | 14,141 | 79,119 | — | no |
+
+Founder→owner milestone (hired operators alone carry demand): not within Y8.
+
+### realista × B
+
+| Year | Visits/mo | Pieces/mo | Operators | Utilisation % | Gross | Operator cost | Machine | Result | Cash end | Owner-state result | Hire for next year |
+| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
+| Y2 | 24.0 | 43.2 | 1 | 49.1 | 37,584 | 0 | 0 | 19,028 | 23,796 | — | no |
+| Y3 | 34.0 | 61.2 | 1 | 69.5 | 53,244 | 0 | 0 | 30,386 | 54,181 | — | no |
+| Y4 | 41.1 | 74.0 | 1 | 84.0 | 64,337 | 0 | 0 | 38,856 | 93,037 | — | yes |
+| Y5 | 45.4 | 81.7 | 2 | 46.4 | 71,038 | 22,320 | 2,300 | 19,354 | 112,391 | 19,354 | no |
+| Y6 | 47.7 | 85.9 | 2 | 48.8 | 74,738 | 22,320 | 0 | 24,479 | 136,870 | 24,479 | no |
+| Y7 | 49.0 | 88.1 | 2 | 50.1 | 76,684 | 22,320 | 0 | 25,965 | 162,835 | 25,870 | no |
+| Y8 | 49.6 | 89.3 | 2 | 50.7 | 77,683 | 22,320 | 0 | 26,728 | 189,562 | 25,870 | no |
+
+Founder→owner milestone (hired operators alone carry demand): Y5.
+
+### optimista × B
+
+| Year | Visits/mo | Pieces/mo | Operators | Utilisation % | Gross | Operator cost | Machine | Result | Cash end | Owner-state result | Hire for next year |
+| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
+| Y2 | 36.0 | 72.0 | 1 | 81.8 | 62,640 | 0 | 0 | 36,025 | 48,469 | — | yes |
+| Y3 | 48.0 | 96.0 | 2 | 54.5 | 83,520 | 22,320 | 2,300 | 26,837 | 75,305 | 21,493 | no |
+| Y4 | 56.0 | 112.0 | 2 | 63.6 | 97,440 | 22,320 | 0 | 39,825 | 115,130 | 23,793 | no |
+| Y5 | 60.7 | 121.3 | 2 | 68.9 | 105,560 | 22,320 | 0 | 46,060 | 161,190 | 23,793 | no |
+| Y6 | 63.2 | 126.4 | 2 | 71.8 | 109,958 | 22,320 | 0 | 49,437 | 210,627 | 23,793 | no |
+| Y7 | 64.5 | 129.0 | 2 | 73.3 | 112,249 | 22,320 | 0 | 51,196 | 261,823 | 23,793 | no |
+| Y8 | 65.2 | 130.4 | 2 | 74.1 | 113,418 | 22,320 | 0 | 52,094 | 313,916 | 23,793 | no |
+
+Founder→owner milestone (hired operators alone carry demand): not within Y8.
+
+## T7. Structural break-even (contribution at ppv 1.8)
+
+| Threshold | A pieces/mo | A visits/mo | B pieces/mo | B visits/mo | C pieces/mo | C visits/mo |
+| --- | --- | --- | --- | --- | --- | --- |
+| Cover fixed only, tarifa plana (€186/mo) | 4.4 | 2.4 | 3.4 | 1.9 | 2.9 | 1.6 |
+| Fixed + ads €300, tarifa plana (€486/mo) | 11.5 | 6.4 | 8.8 | 4.9 | 7.6 | 4.2 |
+| Fixed after tarifa plana + ads €300 (€656/mo) | 15.5 | 8.6 | 11.8 | 6.6 | 10.3 | 5.7 |
+
+Capacity: 88 pieces/month per operator.
+
+## T8. Contribution per piece and per visit (net of IVA)
+
+| Arch | Net price/piece | Contribution/piece | Contribution/visit (ppv 1.8) | Single-piece paid visit (CAC €71) | Two-piece paid visit (CAC €71) |
+| --- | --- | --- | --- | --- | --- |
+| A | 46.90 | 42.35 | 76.22 | −31.10 | 14.30 |
+| B | 59.92 | 55.36 | 99.65 | −18.08 | 40.33 |
+| C | 68.44 | 63.88 | 114.99 | −9.56 | 57.38 |
+
+## T9. Ratios (realista tracks)
+
+| Ratio | A | B | C |
+| --- | --- | --- | --- |
+| Contribution margin / piece (%) | 90.3 | 92.4 | 93.3 |
+| CAC payback (pieces per paid client) | 1.7 | 1.3 | 1.1 |
+| Result Y1 / net revenue Y1 (%) | 21.8 | 38.8 | 46.4 |
+| Ads / gross revenue Y1 (%) | 33.1 | 25.9 | 22.7 |
diff --git a/business/research/murcia-model-data.json b/business/research/murcia-model-data.json
new file mode 100644
index 0000000..323461f
--- /dev/null
+++ b/business/research/murcia-model-data.json
@@ -0,0 +1,3917 @@
+{
+  "meta": {
+    "generator": "business/research/murcia-model.mjs",
+    "month1": "Oct-2026",
+    "months": [
+      "Oct-2026",
+      "Nov-2026",
+      "Dec-2026",
+      "Jan-2027",
+      "Feb-2027",
+      "Mar-2027",
+      "Apr-2027",
+      "May-2027",
+      "Jun-2027",
+      "Jul-2027",
+      "Aug-2027",
+      "Sep-2027"
+    ],
+    "flatRateMonthsLeft": 9,
+    "startingCash": 0,
+    "loan": 0
+  },
+  "inputs": {
+    "iva": 0.21,
+    "consumablePerPiece": 1.5,
+    "capacityPieces": 88,
+    "cac": 71,
+    "operatorCostMonthly": 1860,
+    "machine": 2300,
+    "fixedFlat": 186,
+    "fixedFull": 356,
+    "travel": {
+      "central": 4.5,
+      "low": 3.5,
+      "high": 6,
+      "centralRaw": 4.41,
+      "lowRaw": 3.5,
+      "highRaw": 6.11,
+      "tiers": {
+        "near": {
+          "label": "R1 + pedanías ≤10 km",
+          "points": [
+            3.5
+          ],
+          "mean": 3.5
+        },
+        "mid": {
+          "label": "R2 at 12–13 km",
+          "points": [
+            4.38,
+            4.48
+          ],
+          "mean": 4.43
+        },
+        "far": {
+          "label": "R2 outer belt 16–27 km",
+          "points": [
+            5.81,
+            7.14,
+            7.18,
+            9.42
+          ],
+          "mean": 7.39
+        }
+      },
+      "mix": {
+        "central": {
+          "near": 0.5,
+          "mid": 0.35,
+          "far": 0.15
+        },
+        "low": {
+          "near": 1,
+          "mid": 0,
+          "far": 0
+        },
+        "high": {
+          "near": 0.1,
+          "mid": 0.3,
+          "far": 0.6
+        }
+      }
+    },
+    "parking": {
+      "perVisit": 1,
+      "raw": 0.92,
+      "serShare": 0.4,
+      "ticket": 2.3
+    },
+    "architectures": {
+      "A": {
+        "label": "A Penetración",
+        "piece": 56.75
+      },
+      "B": {
+        "label": "B Match + premium",
+        "piece": 72.5
+      },
+      "C": {
+        "label": "C Premium escalonado",
+        "piece": 82.81
+      }
+    },
+    "scenarios": {
+      "conservador": {
+        "paid": [
+          1,
+          2,
+          2,
+          2,
+          2,
+          2,
+          2,
+          2,
+          2,
+          2,
+          2,
+          2
+        ],
+        "organic": [
+          0,
+          0,
+          1,
+          1,
+          2,
+          2,
+          3,
+          3,
+          4,
+          5,
+          6,
+          7
+        ],
+        "ads": [
+          150,
+          150,
+          150,
+          150,
+          150,
+          150,
+          150,
+          150,
+          150,
+          150,
+          150,
+          150
+        ],
+        "ppv": 1.5
+      },
+      "realista": {
+        "paid": [
+          2,
+          3,
+          3,
+          4,
+          4,
+          5,
+          5,
+          5,
+          6,
+          6,
+          6,
+          6
+        ],
+        "organic": [
+          0,
+          1,
+          1,
+          2,
+          3,
+          4,
+          5,
+          6,
+          7,
+          8,
+          10,
+          12
+        ],
+        "ads": [
+          150,
+          200,
+          250,
+          300,
+          300,
+          350,
+          350,
+          350,
+          400,
+          400,
+          400,
+          400
+        ],
+        "ppv": 1.8
+      },
+      "optimista": {
+        "paid": [
+          3,
+          4,
+          5,
+          6,
+          6,
+          7,
+          8,
+          8,
+          9,
+          9,
+          10,
+          10
+        ],
+        "organic": [
+          1,
+          2,
+          3,
+          4,
+          5,
+          6,
+          8,
+          10,
+          12,
+          14,
+          16,
+          18
+        ],
+        "ads": [
+          200,
+          250,
+          300,
+          400,
+          400,
+          450,
+          500,
+          500,
+          550,
+          550,
+          600,
+          600
+        ],
+        "ppv": 2
+      }
+    },
+    "years23": {
+      "conservador": {
+        "visits": [
+          12,
+          16
+        ],
+        "ads": [
+          200,
+          250
+        ]
+      },
+      "realista": {
+        "visits": [
+          24,
+          34
+        ],
+        "ads": [
+          450,
+          500
+        ]
+      },
+      "optimista": {
+        "visits": [
+          36,
+          48
+        ],
+        "ads": [
+          650,
+          700
+        ]
+      }
+    }
+  },
+  "year1": {
+    "conservador": {
+      "A": {
+        "scenario": "conservador",
+        "arch": "A",
+        "rows": [
+          {
+            "month": "Oct-2026",
+            "visits": 1,
+            "pieces": 1.5,
+            "gross": 85,
+            "net": 70,
+            "consumables": 2,
+            "travel": 5,
+            "parking": 1,
+            "ads": 150,
+            "fixed": 186,
+            "result": -273,
+            "ivaPaid": 0,
+            "cash": -259,
+            "cumResult": -273
+          },
+          {
+            "month": "Nov-2026",
+            "visits": 2,
+            "pieces": 3,
+            "gross": 170,
+            "net": 141,
+            "consumables": 5,
+            "travel": 9,
+            "parking": 2,
+            "ads": 150,
+            "fixed": 186,
+            "result": -211,
+            "ivaPaid": 0,
+            "cash": -440,
+            "cumResult": -484
+          },
+          {
+            "month": "Dec-2026",
+            "visits": 3,
+            "pieces": 4.5,
+            "gross": 255,
+            "net": 211,
+            "consumables": 7,
+            "travel": 14,
+            "parking": 3,
+            "ads": 150,
+            "fixed": 186,
+            "result": -148,
+            "ivaPaid": 0,
+            "cash": -544,
+            "cumResult": -632
+          },
+          {
+            "month": "Jan-2027",
+            "visits": 3,
+            "pieces": 4.5,
+            "gross": 255,
+            "net": 211,
+            "consumables": 7,
+            "travel": 14,
+            "parking": 3,
+            "ads": 150,
+            "fixed": 186,
+            "result": -148,
+            "ivaPaid": 89,
+            "cash": -736,
+            "cumResult": -781
+          },
+          {
+            "month": "Feb-2027",
+            "visits": 4,
+            "pieces": 6,
+            "gross": 341,
+            "net": 281,
+            "consumables": 9,
+            "travel": 18,
+            "parking": 4,
+            "ads": 150,
+            "fixed": 186,
+            "result": -86,
+            "ivaPaid": 0,
+            "cash": -763,
+            "cumResult": -866
+          },
+          {
+            "month": "Mar-2027",
+            "visits": 4,
+            "pieces": 6,
+            "gross": 341,
+            "net": 281,
+            "consumables": 9,
+            "travel": 18,
+            "parking": 4,
+            "ads": 150,
+            "fixed": 186,
+            "result": -86,
+            "ivaPaid": 0,
+            "cash": -789,
+            "cumResult": -952
+          },
+          {
+            "month": "Apr-2027",
+            "visits": 5,
+            "pieces": 7.5,
+            "gross": 426,
+            "net": 352,
+            "consumables": 11,
+            "travel": 23,
+            "parking": 5,
+            "ads": 150,
+            "fixed": 186,
+            "result": -23,
+            "ivaPaid": 163,
+            "cash": -901,
+            "cumResult": -975
+          },
+          {
+            "month": "May-2027",
+            "visits": 5,
+            "pieces": 7.5,
+            "gross": 426,
+            "net": 352,
+            "consumables": 11,
+            "travel": 23,
+            "parking": 5,
+            "ads": 150,
+            "fixed": 186,
+            "result": -23,
+            "ivaPaid": 0,
+            "cash": -850,
+            "cumResult": -998
+          },
+          {
+            "month": "Jun-2027",
+            "visits": 6,
+            "pieces": 9,
+            "gross": 511,
+            "net": 422,
+            "consumables": 14,
+            "travel": 27,
+            "parking": 6,
+            "ads": 150,
+            "fixed": 186,
+            "result": 40,
+            "ivaPaid": 0,
+            "cash": -722,
+            "cumResult": -958
+          },
+          {
+            "month": "Jul-2027",
+            "visits": 7,
+            "pieces": 10.5,
+            "gross": 596,
+            "net": 492,
+            "consumables": 16,
+            "travel": 32,
+            "parking": 7,
+            "ads": 150,
+            "fixed": 356,
+            "result": -68,
+            "ivaPaid": 236,
+            "cash": -923,
+            "cumResult": -1026
+          },
+          {
+            "month": "Aug-2027",
+            "visits": 8,
+            "pieces": 12,
+            "gross": 681,
+            "net": 563,
+            "consumables": 18,
+            "travel": 36,
+            "parking": 8,
+            "ads": 150,
+            "fixed": 356,
+            "result": -5,
+            "ivaPaid": 0,
+            "cash": -810,
+            "cumResult": -1031
+          },
+          {
+            "month": "Sep-2027",
+            "visits": 9,
+            "pieces": 13.5,
+            "gross": 766,
+            "net": 633,
+            "consumables": 20,
+            "travel": 41,
+            "parking": 9,
+            "ads": 150,
+            "fixed": 356,
+            "result": 57,
+            "ivaPaid": 0,
+            "cash": -619,
+            "cumResult": -974
+          }
+        ],
+        "summary": {
+          "gross": 4852,
+          "net": 4010,
+          "ads": 1800,
+          "result": -974,
+          "trough": -923,
+          "troughMonth": "Jul-2027",
+          "firstPositive": "Jun-2027",
+          "cumPositive": null,
+          "ivaOwedAtYearEnd": 355,
+          "endCash": -974
+        }
+      },
+      "B": {
+        "scenario": "conservador",
+        "arch": "B",
+        "rows": [
+          {
+            "month": "Oct-2026",
+            "visits": 1,
+            "pieces": 1.5,
+            "gross": 109,
+            "net": 90,
+            "consumables": 2,
+            "travel": 5,
+            "parking": 1,
+            "ads": 150,
+            "fixed": 186,
+            "result": -254,
+            "ivaPaid": 0,
+            "cash": -235,
+            "cumResult": -254
+          },
+          {
+            "month": "Nov-2026",
+            "visits": 2,
+            "pieces": 3,
+            "gross": 218,
+            "net": 180,
+            "consumables": 5,
+            "travel": 9,
+            "parking": 2,
+            "ads": 150,
+            "fixed": 186,
+            "result": -172,
+            "ivaPaid": 0,
+            "cash": -369,
+            "cumResult": -426
+          },
+          {
+            "month": "Dec-2026",
+            "visits": 3,
+            "pieces": 4.5,
+            "gross": 326,
+            "net": 270,
+            "consumables": 7,
+            "travel": 14,
+            "parking": 3,
+            "ads": 150,
+            "fixed": 186,
+            "result": -90,
+            "ivaPaid": 0,
+            "cash": -402,
+            "cumResult": -515
+          },
+          {
+            "month": "Jan-2027",
+            "visits": 3,
+            "pieces": 4.5,
+            "gross": 326,
+            "net": 270,
+            "consumables": 7,
+            "travel": 14,
+            "parking": 3,
+            "ads": 150,
+            "fixed": 186,
+            "result": -90,
+            "ivaPaid": 113,
+            "cash": -548,
+            "cumResult": -605
+          },
+          {
+            "month": "Feb-2027",
+            "visits": 4,
+            "pieces": 6,
+            "gross": 435,
+            "net": 360,
+            "consumables": 9,
+            "travel": 18,
+            "parking": 4,
+            "ads": 150,
+            "fixed": 186,
+            "result": -7,
+            "ivaPaid": 0,
+            "cash": -480,
+            "cumResult": -612
+          },
+          {
+            "month": "Mar-2027",
+            "visits": 4,
+            "pieces": 6,
+            "gross": 435,
+            "net": 360,
+            "consumables": 9,
+            "travel": 18,
+            "parking": 4,
+            "ads": 150,
+            "fixed": 186,
+            "result": -7,
+            "ivaPaid": 0,
+            "cash": -412,
+            "cumResult": -620
+          },
+          {
+            "month": "Apr-2027",
+            "visits": 5,
+            "pieces": 7.5,
+            "gross": 544,
+            "net": 449,
+            "consumables": 11,
+            "travel": 23,
+            "parking": 5,
+            "ads": 150,
+            "fixed": 186,
+            "result": 75,
+            "ivaPaid": 208,
+            "cash": -451,
+            "cumResult": -545
+          },
+          {
+            "month": "May-2027",
+            "visits": 5,
+            "pieces": 7.5,
+            "gross": 544,
+            "net": 449,
+            "consumables": 11,
+            "travel": 23,
+            "parking": 5,
+            "ads": 150,
+            "fixed": 186,
+            "result": 75,
+            "ivaPaid": 0,
+            "cash": -282,
+            "cumResult": -471
+          },
+          {
+            "month": "Jun-2027",
+            "visits": 6,
+            "pieces": 9,
+            "gross": 653,
+            "net": 539,
+            "consumables": 14,
+            "travel": 27,
+            "parking": 6,
+            "ads": 150,
+            "fixed": 186,
+            "result": 157,
+            "ivaPaid": 0,
+            "cash": -12,
+            "cumResult": -314
+          },
+          {
+            "month": "Jul-2027",
+            "visits": 7,
+            "pieces": 10.5,
+            "gross": 761,
+            "net": 629,
+            "consumables": 16,
+            "travel": 32,
+            "parking": 7,
+            "ads": 150,
+            "fixed": 356,
+            "result": 69,
+            "ivaPaid": 302,
+            "cash": -113,
+            "cumResult": -245
+          },
+          {
+            "month": "Aug-2027",
+            "visits": 8,
+            "pieces": 12,
+            "gross": 870,
+            "net": 719,
+            "consumables": 18,
+            "travel": 36,
+            "parking": 8,
+            "ads": 150,
+            "fixed": 356,
+            "result": 151,
+            "ivaPaid": 0,
+            "cash": 189,
+            "cumResult": -94
+          },
+          {
+            "month": "Sep-2027",
+            "visits": 9,
+            "pieces": 13.5,
+            "gross": 979,
+            "net": 809,
+            "consumables": 20,
+            "travel": 41,
+            "parking": 9,
+            "ads": 150,
+            "fixed": 356,
+            "result": 233,
+            "ivaPaid": 0,
+            "cash": 592,
+            "cumResult": 139
+          }
+        ],
+        "summary": {
+          "gross": 6199,
+          "net": 5123,
+          "ads": 1800,
+          "result": 139,
+          "trough": -548,
+          "troughMonth": "Jan-2027",
+          "firstPositive": "Apr-2027",
+          "cumPositive": "Sep-2027",
+          "ivaOwedAtYearEnd": 453,
+          "endCash": 139
+        }
+      },
+      "C": {
+        "scenario": "conservador",
+        "arch": "C",
+        "rows": [
+          {
+            "month": "Oct-2026",
+            "visits": 1,
+            "pieces": 1.5,
+            "gross": 124,
+            "net": 103,
+            "consumables": 2,
+            "travel": 5,
+            "parking": 1,
+            "ads": 150,
+            "fixed": 186,
+            "result": -241,
+            "ivaPaid": 0,
+            "cash": -220,
+            "cumResult": -241
+          },
+          {
+            "month": "Nov-2026",
+            "visits": 2,
+            "pieces": 3,
+            "gross": 248,
+            "net": 205,
+            "consumables": 5,
+            "travel": 9,
+            "parking": 2,
+            "ads": 150,
+            "fixed": 186,
+            "result": -146,
+            "ivaPaid": 0,
+            "cash": -323,
+            "cumResult": -387
+          },
+          {
+            "month": "Dec-2026",
+            "visits": 3,
+            "pieces": 4.5,
+            "gross": 373,
+            "net": 308,
+            "consumables": 7,
+            "travel": 14,
+            "parking": 3,
+            "ads": 150,
+            "fixed": 186,
+            "result": -51,
+            "ivaPaid": 0,
+            "cash": -309,
+            "cumResult": -439
+          },
+          {
+            "month": "Jan-2027",
+            "visits": 3,
+            "pieces": 4.5,
+            "gross": 373,
+            "net": 308,
+            "consumables": 7,
+            "travel": 14,
+            "parking": 3,
+            "ads": 150,
+            "fixed": 186,
+            "result": -51,
+            "ivaPaid": 129,
+            "cash": -425,
+            "cumResult": -490
+          },
+          {
+            "month": "Feb-2027",
+            "visits": 4,
+            "pieces": 6,
+            "gross": 497,
+            "net": 411,
+            "consumables": 9,
+            "travel": 18,
+            "parking": 4,
+            "ads": 150,
+            "fixed": 186,
+            "result": 44,
+            "ivaPaid": 0,
+            "cash": -295,
+            "cumResult": -446
+          },
+          {
+            "month": "Mar-2027",
+            "visits": 4,
+            "pieces": 6,
+            "gross": 497,
+            "net": 411,
+            "consumables": 9,
+            "travel": 18,
+            "parking": 4,
+            "ads": 150,
+            "fixed": 186,
+            "result": 44,
+            "ivaPaid": 0,
+            "cash": -165,
+            "cumResult": -403
+          },
+          {
+            "month": "Apr-2027",
+            "visits": 5,
+            "pieces": 7.5,
+            "gross": 621,
+            "net": 513,
+            "consumables": 11,
+            "travel": 23,
+            "parking": 5,
+            "ads": 150,
+            "fixed": 186,
+            "result": 139,
+            "ivaPaid": 237,
+            "cash": -156,
+            "cumResult": -264
+          },
+          {
+            "month": "May-2027",
+            "visits": 5,
+            "pieces": 7.5,
+            "gross": 621,
+            "net": 513,
+            "consumables": 11,
+            "travel": 23,
+            "parking": 5,
+            "ads": 150,
+            "fixed": 186,
+            "result": 139,
+            "ivaPaid": 0,
+            "cash": 90,
+            "cumResult": -126
+          },
+          {
+            "month": "Jun-2027",
+            "visits": 6,
+            "pieces": 9,
+            "gross": 745,
+            "net": 616,
+            "consumables": 14,
+            "travel": 27,
+            "parking": 6,
+            "ads": 150,
+            "fixed": 186,
+            "result": 233,
+            "ivaPaid": 0,
+            "cash": 453,
+            "cumResult": 108
+          },
+          {
+            "month": "Jul-2027",
+            "visits": 7,
+            "pieces": 10.5,
+            "gross": 870,
+            "net": 719,
+            "consumables": 16,
+            "travel": 32,
+            "parking": 7,
+            "ads": 150,
+            "fixed": 356,
+            "result": 158,
+            "ivaPaid": 345,
+            "cash": 417,
+            "cumResult": 266
+          },
+          {
+            "month": "Aug-2027",
+            "visits": 8,
+            "pieces": 12,
+            "gross": 994,
+            "net": 821,
+            "consumables": 18,
+            "travel": 36,
+            "parking": 8,
+            "ads": 150,
+            "fixed": 356,
+            "result": 253,
+            "ivaPaid": 0,
+            "cash": 843,
+            "cumResult": 520
+          },
+          {
+            "month": "Sep-2027",
+            "visits": 9,
+            "pieces": 13.5,
+            "gross": 1118,
+            "net": 924,
+            "consumables": 20,
+            "travel": 41,
+            "parking": 9,
+            "ads": 150,
+            "fixed": 356,
+            "result": 348,
+            "ivaPaid": 0,
+            "cash": 1385,
+            "cumResult": 868
+          }
+        ],
+        "summary": {
+          "gross": 7080,
+          "net": 5851,
+          "ads": 1800,
+          "result": 868,
+          "trough": -425,
+          "troughMonth": "Jan-2027",
+          "firstPositive": "Feb-2027",
+          "cumPositive": "Jun-2027",
+          "ivaOwedAtYearEnd": 517,
+          "endCash": 868
+        }
+      }
+    },
+    "realista": {
+      "A": {
+        "scenario": "realista",
+        "arch": "A",
+        "rows": [
+          {
+            "month": "Oct-2026",
+            "visits": 2,
+            "pieces": 3.6,
+            "gross": 204,
+            "net": 169,
+            "consumables": 5,
+            "travel": 9,
+            "parking": 2,
+            "ads": 150,
+            "fixed": 186,
+            "result": -184,
+            "ivaPaid": 0,
+            "cash": -148,
+            "cumResult": -184
+          },
+          {
+            "month": "Nov-2026",
+            "visits": 4,
+            "pieces": 7.2,
+            "gross": 409,
+            "net": 338,
+            "consumables": 11,
+            "travel": 18,
+            "parking": 4,
+            "ads": 200,
+            "fixed": 186,
+            "result": -81,
+            "ivaPaid": 0,
+            "cash": -158,
+            "cumResult": -265
+          },
+          {
+            "month": "Dec-2026",
+            "visits": 4,
+            "pieces": 7.2,
+            "gross": 409,
+            "net": 338,
+            "consumables": 11,
+            "travel": 18,
+            "parking": 4,
+            "ads": 250,
+            "fixed": 186,
+            "result": -131,
+            "ivaPaid": 0,
+            "cash": -218,
+            "cumResult": -396
+          },
+          {
+            "month": "Jan-2027",
+            "visits": 6,
+            "pieces": 10.8,
+            "gross": 613,
+            "net": 507,
+            "consumables": 16,
+            "travel": 27,
+            "parking": 6,
+            "ads": 300,
+            "fixed": 186,
+            "result": -29,
+            "ivaPaid": 177,
+            "cash": -318,
+            "cumResult": -424
+          },
+          {
+            "month": "Feb-2027",
+            "visits": 7,
+            "pieces": 12.6,
+            "gross": 715,
+            "net": 591,
+            "consumables": 19,
+            "travel": 32,
+            "parking": 7,
+            "ads": 300,
+            "fixed": 186,
+            "result": 48,
+            "ivaPaid": 0,
+            "cash": -146,
+            "cumResult": -377
+          },
+          {
+            "month": "Mar-2027",
+            "visits": 9,
+            "pieces": 16.2,
+            "gross": 919,
+            "net": 760,
+            "consumables": 24,
+            "travel": 41,
+            "parking": 9,
+            "ads": 350,
+            "fixed": 186,
+            "result": 150,
+            "ivaPaid": 0,
+            "cash": 163,
+            "cumResult": -227
+          },
+          {
+            "month": "Apr-2027",
+            "visits": 10,
+            "pieces": 18,
+            "gross": 1022,
+            "net": 844,
+            "consumables": 27,
+            "travel": 45,
+            "parking": 10,
+            "ads": 350,
+            "fixed": 186,
+            "result": 226,
+            "ivaPaid": 390,
+            "cash": 177,
+            "cumResult": -1
+          },
+          {
+            "month": "May-2027",
+            "visits": 11,
+            "pieces": 19.8,
+            "gross": 1124,
+            "net": 929,
+            "consumables": 30,
+            "travel": 50,
+            "parking": 11,
+            "ads": 350,
+            "fixed": 186,
+            "result": 302,
+            "ivaPaid": 0,
+            "cash": 674,
+            "cumResult": 302
+          },
+          {
+            "month": "Jun-2027",
+            "visits": 13,
+            "pieces": 23.4,
+            "gross": 1328,
+            "net": 1097,
+            "consumables": 35,
+            "travel": 59,
+            "parking": 13,
+            "ads": 400,
+            "fixed": 186,
+            "result": 405,
+            "ivaPaid": 0,
+            "cash": 1309,
+            "cumResult": 707
+          },
+          {
+            "month": "Jul-2027",
+            "visits": 14,
+            "pieces": 25.2,
+            "gross": 1430,
+            "net": 1182,
+            "consumables": 38,
+            "travel": 63,
+            "parking": 14,
+            "ads": 400,
+            "fixed": 356,
+            "result": 311,
+            "ivaPaid": 603,
+            "cash": 1266,
+            "cumResult": 1018
+          },
+          {
+            "month": "Aug-2027",
+            "visits": 16,
+            "pieces": 28.8,
+            "gross": 1634,
+            "net": 1351,
+            "consumables": 43,
+            "travel": 72,
+            "parking": 16,
+            "ads": 400,
+            "fixed": 356,
+            "result": 464,
+            "ivaPaid": 0,
+            "cash": 2013,
+            "cumResult": 1481
+          },
+          {
+            "month": "Sep-2027",
+            "visits": 18,
+            "pieces": 32.4,
+            "gross": 1839,
+            "net": 1520,
+            "consumables": 49,
+            "travel": 81,
+            "parking": 18,
+            "ads": 400,
+            "fixed": 356,
+            "result": 616,
+            "ivaPaid": 0,
+            "cash": 2948,
+            "cumResult": 2097
+          }
+        ],
+        "summary": {
+          "gross": 11645,
+          "net": 9624,
+          "ads": 3850,
+          "result": 2097,
+          "trough": -318,
+          "troughMonth": "Jan-2027",
+          "firstPositive": "Feb-2027",
+          "cumPositive": "May-2027",
+          "ivaOwedAtYearEnd": 851,
+          "endCash": 2097
+        }
+      },
+      "B": {
+        "scenario": "realista",
+        "arch": "B",
+        "rows": [
+          {
+            "month": "Oct-2026",
+            "visits": 2,
+            "pieces": 3.6,
+            "gross": 261,
+            "net": 216,
+            "consumables": 5,
+            "travel": 9,
+            "parking": 2,
+            "ads": 150,
+            "fixed": 186,
+            "result": -137,
+            "ivaPaid": 0,
+            "cash": -91,
+            "cumResult": -137
+          },
+          {
+            "month": "Nov-2026",
+            "visits": 4,
+            "pieces": 7.2,
+            "gross": 522,
+            "net": 431,
+            "consumables": 11,
+            "travel": 18,
+            "parking": 4,
+            "ads": 200,
+            "fixed": 186,
+            "result": 13,
+            "ivaPaid": 0,
+            "cash": 12,
+            "cumResult": -124
+          },
+          {
+            "month": "Dec-2026",
+            "visits": 4,
+            "pieces": 7.2,
+            "gross": 522,
+            "net": 431,
+            "consumables": 11,
+            "travel": 18,
+            "parking": 4,
+            "ads": 250,
+            "fixed": 186,
+            "result": -37,
+            "ivaPaid": 0,
+            "cash": 65,
+            "cumResult": -161
+          },
+          {
+            "month": "Jan-2027",
+            "visits": 6,
+            "pieces": 10.8,
+            "gross": 783,
+            "net": 647,
+            "consumables": 16,
+            "travel": 27,
+            "parking": 6,
+            "ads": 300,
+            "fixed": 186,
+            "result": 112,
+            "ivaPaid": 226,
+            "cash": 86,
+            "cumResult": -50
+          },
+          {
+            "month": "Feb-2027",
+            "visits": 7,
+            "pieces": 12.6,
+            "gross": 914,
+            "net": 755,
+            "consumables": 19,
+            "travel": 32,
+            "parking": 7,
+            "ads": 300,
+            "fixed": 186,
+            "result": 212,
+            "ivaPaid": 0,
+            "cash": 456,
+            "cumResult": 162
+          },
+          {
+            "month": "Mar-2027",
+            "visits": 9,
+            "pieces": 16.2,
+            "gross": 1175,
+            "net": 971,
+            "consumables": 24,
+            "travel": 41,
+            "parking": 9,
+            "ads": 350,
+            "fixed": 186,
+            "result": 361,
+            "ivaPaid": 0,
+            "cash": 1021,
+            "cumResult": 523
+          },
+          {
+            "month": "Apr-2027",
+            "visits": 10,
+            "pieces": 18,
+            "gross": 1305,
+            "net": 1079,
+            "consumables": 27,
+            "travel": 45,
+            "parking": 10,
+            "ads": 350,
+            "fixed": 186,
+            "result": 461,
+            "ivaPaid": 498,
+            "cash": 1210,
+            "cumResult": 983
+          },
+          {
+            "month": "May-2027",
+            "visits": 11,
+            "pieces": 19.8,
+            "gross": 1436,
+            "net": 1186,
+            "consumables": 30,
+            "travel": 50,
+            "parking": 11,
+            "ads": 350,
+            "fixed": 186,
+            "result": 560,
+            "ivaPaid": 0,
+            "cash": 2019,
+            "cumResult": 1544
+          },
+          {
+            "month": "Jun-2027",
+            "visits": 13,
+            "pieces": 23.4,
+            "gross": 1697,
+            "net": 1402,
+            "consumables": 35,
+            "travel": 59,
+            "parking": 13,
+            "ads": 400,
+            "fixed": 186,
+            "result": 709,
+            "ivaPaid": 0,
+            "cash": 3023,
+            "cumResult": 2253
+          },
+          {
+            "month": "Jul-2027",
+            "visits": 14,
+            "pieces": 25.2,
+            "gross": 1827,
+            "net": 1510,
+            "consumables": 38,
+            "travel": 63,
+            "parking": 14,
+            "ads": 400,
+            "fixed": 356,
+            "result": 639,
+            "ivaPaid": 770,
+            "cash": 3209,
+            "cumResult": 2892
+          },
+          {
+            "month": "Aug-2027",
+            "visits": 16,
+            "pieces": 28.8,
+            "gross": 2088,
+            "net": 1726,
+            "consumables": 43,
+            "travel": 72,
+            "parking": 16,
+            "ads": 400,
+            "fixed": 356,
+            "result": 838,
+            "ivaPaid": 0,
+            "cash": 4410,
+            "cumResult": 3731
+          },
+          {
+            "month": "Sep-2027",
+            "visits": 18,
+            "pieces": 32.4,
+            "gross": 2349,
+            "net": 1941,
+            "consumables": 49,
+            "travel": 81,
+            "parking": 18,
+            "ads": 400,
+            "fixed": 356,
+            "result": 1038,
+            "ivaPaid": 0,
+            "cash": 5855,
+            "cumResult": 4768
+          }
+        ],
+        "summary": {
+          "gross": 14877,
+          "net": 12295,
+          "ads": 3850,
+          "result": 4768,
+          "trough": -91,
+          "troughMonth": "Oct-2026",
+          "firstPositive": "Nov-2026",
+          "cumPositive": "Feb-2027",
+          "ivaOwedAtYearEnd": 1087,
+          "endCash": 4768
+        }
+      },
+      "C": {
+        "scenario": "realista",
+        "arch": "C",
+        "rows": [
+          {
+            "month": "Oct-2026",
+            "visits": 2,
+            "pieces": 3.6,
+            "gross": 298,
+            "net": 246,
+            "consumables": 5,
+            "travel": 9,
+            "parking": 2,
+            "ads": 150,
+            "fixed": 186,
+            "result": -106,
+            "ivaPaid": 0,
+            "cash": -54,
+            "cumResult": -106
+          },
+          {
+            "month": "Nov-2026",
+            "visits": 4,
+            "pieces": 7.2,
+            "gross": 596,
+            "net": 493,
+            "consumables": 11,
+            "travel": 18,
+            "parking": 4,
+            "ads": 200,
+            "fixed": 186,
+            "result": 74,
+            "ivaPaid": 0,
+            "cash": 123,
+            "cumResult": -32
+          },
+          {
+            "month": "Dec-2026",
+            "visits": 4,
+            "pieces": 7.2,
+            "gross": 596,
+            "net": 493,
+            "consumables": 11,
+            "travel": 18,
+            "parking": 4,
+            "ads": 250,
+            "fixed": 186,
+            "result": 24,
+            "ivaPaid": 0,
+            "cash": 251,
+            "cumResult": -8
+          },
+          {
+            "month": "Jan-2027",
+            "visits": 6,
+            "pieces": 10.8,
+            "gross": 894,
+            "net": 739,
+            "consumables": 16,
+            "travel": 27,
+            "parking": 6,
+            "ads": 300,
+            "fixed": 186,
+            "result": 204,
+            "ivaPaid": 259,
+            "cash": 351,
+            "cumResult": 196
+          },
+          {
+            "month": "Feb-2027",
+            "visits": 7,
+            "pieces": 12.6,
+            "gross": 1043,
+            "net": 862,
+            "consumables": 19,
+            "travel": 32,
+            "parking": 7,
+            "ads": 300,
+            "fixed": 186,
+            "result": 319,
+            "ivaPaid": 0,
+            "cash": 851,
+            "cumResult": 515
+          },
+          {
+            "month": "Mar-2027",
+            "visits": 9,
+            "pieces": 16.2,
+            "gross": 1342,
+            "net": 1109,
+            "consumables": 24,
+            "travel": 41,
+            "parking": 9,
+            "ads": 350,
+            "fixed": 186,
+            "result": 499,
+            "ivaPaid": 0,
+            "cash": 1583,
+            "cumResult": 1014
+          },
+          {
+            "month": "Apr-2027",
+            "visits": 10,
+            "pieces": 18,
+            "gross": 1491,
+            "net": 1232,
+            "consumables": 27,
+            "travel": 45,
+            "parking": 10,
+            "ads": 350,
+            "fixed": 186,
+            "result": 614,
+            "ivaPaid": 569,
+            "cash": 1886,
+            "cumResult": 1628
+          },
+          {
+            "month": "May-2027",
+            "visits": 11,
+            "pieces": 19.8,
+            "gross": 1640,
+            "net": 1355,
+            "consumables": 30,
+            "travel": 50,
+            "parking": 11,
+            "ads": 350,
+            "fixed": 186,
+            "result": 729,
+            "ivaPaid": 0,
+            "cash": 2900,
+            "cumResult": 2356
+          },
+          {
+            "month": "Jun-2027",
+            "visits": 13,
+            "pieces": 23.4,
+            "gross": 1938,
+            "net": 1601,
+            "consumables": 35,
+            "travel": 59,
+            "parking": 13,
+            "ads": 400,
+            "fixed": 186,
+            "result": 909,
+            "ivaPaid": 0,
+            "cash": 4145,
+            "cumResult": 3265
+          },
+          {
+            "month": "Jul-2027",
+            "visits": 14,
+            "pieces": 25.2,
+            "gross": 2087,
+            "net": 1725,
+            "consumables": 38,
+            "travel": 63,
+            "parking": 14,
+            "ads": 400,
+            "fixed": 356,
+            "result": 854,
+            "ivaPaid": 880,
+            "cash": 4481,
+            "cumResult": 4119
+          },
+          {
+            "month": "Aug-2027",
+            "visits": 16,
+            "pieces": 28.8,
+            "gross": 2385,
+            "net": 1971,
+            "consumables": 43,
+            "travel": 72,
+            "parking": 16,
+            "ads": 400,
+            "fixed": 356,
+            "result": 1084,
+            "ivaPaid": 0,
+            "cash": 5979,
+            "cumResult": 5203
+          },
+          {
+            "month": "Sep-2027",
+            "visits": 18,
+            "pieces": 32.4,
+            "gross": 2683,
+            "net": 2217,
+            "consumables": 49,
+            "travel": 81,
+            "parking": 18,
+            "ads": 400,
+            "fixed": 356,
+            "result": 1314,
+            "ivaPaid": 0,
+            "cash": 7758,
+            "cumResult": 6517
+          }
+        ],
+        "summary": {
+          "gross": 16993,
+          "net": 14043,
+          "ads": 3850,
+          "result": 6517,
+          "trough": -54,
+          "troughMonth": "Oct-2026",
+          "firstPositive": "Nov-2026",
+          "cumPositive": "Jan-2027",
+          "ivaOwedAtYearEnd": 1242,
+          "endCash": 6517
+        }
+      }
+    },
+    "optimista": {
+      "A": {
+        "scenario": "optimista",
+        "arch": "A",
+        "rows": [
+          {
+            "month": "Oct-2026",
+            "visits": 4,
+            "pieces": 8,
+            "gross": 454,
+            "net": 375,
+            "consumables": 12,
+            "travel": 18,
+            "parking": 4,
+            "ads": 200,
+            "fixed": 186,
+            "result": -45,
+            "ivaPaid": 0,
+            "cash": 34,
+            "cumResult": -45
+          },
+          {
+            "month": "Nov-2026",
+            "visits": 6,
+            "pieces": 12,
+            "gross": 681,
+            "net": 563,
+            "consumables": 18,
+            "travel": 27,
+            "parking": 6,
+            "ads": 250,
+            "fixed": 186,
+            "result": 76,
+            "ivaPaid": 0,
+            "cash": 228,
+            "cumResult": 31
+          },
+          {
+            "month": "Dec-2026",
+            "visits": 8,
+            "pieces": 16,
+            "gross": 908,
+            "net": 750,
+            "consumables": 24,
+            "travel": 36,
+            "parking": 8,
+            "ads": 300,
+            "fixed": 186,
+            "result": 196,
+            "ivaPaid": 0,
+            "cash": 582,
+            "cumResult": 227
+          },
+          {
+            "month": "Jan-2027",
+            "visits": 10,
+            "pieces": 20,
+            "gross": 1135,
+            "net": 938,
+            "consumables": 30,
+            "travel": 45,
+            "parking": 10,
+            "ads": 400,
+            "fixed": 186,
+            "result": 267,
+            "ivaPaid": 355,
+            "cash": 691,
+            "cumResult": 494
+          },
+          {
+            "month": "Feb-2027",
+            "visits": 11,
+            "pieces": 22,
+            "gross": 1249,
+            "net": 1032,
+            "consumables": 33,
+            "travel": 50,
+            "parking": 11,
+            "ads": 400,
+            "fixed": 186,
+            "result": 352,
+            "ivaPaid": 0,
+            "cash": 1260,
+            "cumResult": 847
+          },
+          {
+            "month": "Mar-2027",
+            "visits": 13,
+            "pieces": 26,
+            "gross": 1476,
+            "net": 1219,
+            "consumables": 39,
+            "travel": 59,
+            "parking": 13,
+            "ads": 450,
+            "fixed": 186,
+            "result": 473,
+            "ivaPaid": 0,
+            "cash": 1989,
+            "cumResult": 1320
+          },
+          {
+            "month": "Apr-2027",
+            "visits": 16,
+            "pieces": 32,
+            "gross": 1816,
+            "net": 1501,
+            "consumables": 48,
+            "travel": 72,
+            "parking": 16,
+            "ads": 500,
+            "fixed": 186,
+            "result": 679,
+            "ivaPaid": 670,
+            "cash": 2314,
+            "cumResult": 1999
+          },
+          {
+            "month": "May-2027",
+            "visits": 18,
+            "pieces": 36,
+            "gross": 2043,
+            "net": 1688,
+            "consumables": 54,
+            "travel": 81,
+            "parking": 18,
+            "ads": 500,
+            "fixed": 186,
+            "result": 849,
+            "ivaPaid": 0,
+            "cash": 3518,
+            "cumResult": 2848
+          },
+          {
+            "month": "Jun-2027",
+            "visits": 21,
+            "pieces": 42,
+            "gross": 2384,
+            "net": 1970,
+            "consumables": 63,
+            "travel": 95,
+            "parking": 21,
+            "ads": 550,
+            "fixed": 186,
+            "result": 1055,
+            "ivaPaid": 0,
+            "cash": 4987,
+            "cumResult": 3903
+          },
+          {
+            "month": "Jul-2027",
+            "visits": 23,
+            "pieces": 46,
+            "gross": 2611,
+            "net": 2157,
+            "consumables": 69,
+            "travel": 104,
+            "parking": 23,
+            "ads": 550,
+            "fixed": 356,
+            "result": 1056,
+            "ivaPaid": 1083,
+            "cash": 5412,
+            "cumResult": 4959
+          },
+          {
+            "month": "Aug-2027",
+            "visits": 26,
+            "pieces": 52,
+            "gross": 2951,
+            "net": 2439,
+            "consumables": 78,
+            "travel": 117,
+            "parking": 26,
+            "ads": 600,
+            "fixed": 356,
+            "result": 1262,
+            "ivaPaid": 0,
+            "cash": 7186,
+            "cumResult": 6221
+          },
+          {
+            "month": "Sep-2027",
+            "visits": 28,
+            "pieces": 56,
+            "gross": 3178,
+            "net": 2626,
+            "consumables": 84,
+            "travel": 126,
+            "parking": 28,
+            "ads": 600,
+            "fixed": 356,
+            "result": 1432,
+            "ivaPaid": 0,
+            "cash": 9170,
+            "cumResult": 7654
+          }
+        ],
+        "summary": {
+          "gross": 20884,
+          "net": 17260,
+          "ads": 5300,
+          "result": 7654,
+          "trough": null,
+          "troughMonth": null,
+          "firstPositive": "Nov-2026",
+          "cumPositive": "Nov-2026",
+          "ivaOwedAtYearEnd": 1517,
+          "endCash": 7654
+        }
+      },
+      "B": {
+        "scenario": "optimista",
+        "arch": "B",
+        "rows": [
+          {
+            "month": "Oct-2026",
+            "visits": 4,
+            "pieces": 8,
+            "gross": 580,
+            "net": 479,
+            "consumables": 12,
+            "travel": 18,
+            "parking": 4,
+            "ads": 200,
+            "fixed": 186,
+            "result": 59,
+            "ivaPaid": 0,
+            "cash": 160,
+            "cumResult": 59
+          },
+          {
+            "month": "Nov-2026",
+            "visits": 6,
+            "pieces": 12,
+            "gross": 870,
+            "net": 719,
+            "consumables": 18,
+            "travel": 27,
+            "parking": 6,
+            "ads": 250,
+            "fixed": 186,
+            "result": 232,
+            "ivaPaid": 0,
+            "cash": 543,
+            "cumResult": 291
+          },
+          {
+            "month": "Dec-2026",
+            "visits": 8,
+            "pieces": 16,
+            "gross": 1160,
+            "net": 959,
+            "consumables": 24,
+            "travel": 36,
+            "parking": 8,
+            "ads": 300,
+            "fixed": 186,
+            "result": 405,
+            "ivaPaid": 0,
+            "cash": 1149,
+            "cumResult": 696
+          },
+          {
+            "month": "Jan-2027",
+            "visits": 10,
+            "pieces": 20,
+            "gross": 1450,
+            "net": 1198,
+            "consumables": 30,
+            "travel": 45,
+            "parking": 10,
+            "ads": 400,
+            "fixed": 186,
+            "result": 527,
+            "ivaPaid": 453,
+            "cash": 1475,
+            "cumResult": 1223
+          },
+          {
+            "month": "Feb-2027",
+            "visits": 11,
+            "pieces": 22,
+            "gross": 1595,
+            "net": 1318,
+            "consumables": 33,
+            "travel": 50,
+            "parking": 11,
+            "ads": 400,
+            "fixed": 186,
+            "result": 639,
+            "ivaPaid": 0,
+            "cash": 2391,
+            "cumResult": 1862
+          },
+          {
+            "month": "Mar-2027",
+            "visits": 13,
+            "pieces": 26,
+            "gross": 1885,
+            "net": 1558,
+            "consumables": 39,
+            "travel": 59,
+            "parking": 13,
+            "ads": 450,
+            "fixed": 186,
+            "result": 811,
+            "ivaPaid": 0,
+            "cash": 3529,
+            "cumResult": 2673
+          },
+          {
+            "month": "Apr-2027",
+            "visits": 16,
+            "pieces": 32,
+            "gross": 2320,
+            "net": 1917,
+            "consumables": 48,
+            "travel": 72,
+            "parking": 16,
+            "ads": 500,
+            "fixed": 186,
+            "result": 1095,
+            "ivaPaid": 856,
+            "cash": 4171,
+            "cumResult": 3769
+          },
+          {
+            "month": "May-2027",
+            "visits": 18,
+            "pieces": 36,
+            "gross": 2610,
+            "net": 2157,
+            "consumables": 54,
+            "travel": 81,
+            "parking": 18,
+            "ads": 500,
+            "fixed": 186,
+            "result": 1318,
+            "ivaPaid": 0,
+            "cash": 5942,
+            "cumResult": 5087
+          },
+          {
+            "month": "Jun-2027",
+            "visits": 21,
+            "pieces": 42,
+            "gross": 3045,
+            "net": 2517,
+            "consumables": 63,
+            "travel": 95,
+            "parking": 21,
+            "ads": 550,
+            "fixed": 186,
+            "result": 1602,
+            "ivaPaid": 0,
+            "cash": 8073,
+            "cumResult": 6689
+          },
+          {
+            "month": "Jul-2027",
+            "visits": 23,
+            "pieces": 46,
+            "gross": 3335,
+            "net": 2756,
+            "consumables": 69,
+            "travel": 104,
+            "parking": 23,
+            "ads": 550,
+            "fixed": 356,
+            "result": 1655,
+            "ivaPaid": 1384,
+            "cash": 8922,
+            "cumResult": 8344
+          },
+          {
+            "month": "Aug-2027",
+            "visits": 26,
+            "pieces": 52,
+            "gross": 3770,
+            "net": 3116,
+            "consumables": 78,
+            "travel": 117,
+            "parking": 26,
+            "ads": 600,
+            "fixed": 356,
+            "result": 1939,
+            "ivaPaid": 0,
+            "cash": 11515,
+            "cumResult": 10282
+          },
+          {
+            "month": "Sep-2027",
+            "visits": 28,
+            "pieces": 56,
+            "gross": 4060,
+            "net": 3355,
+            "consumables": 84,
+            "travel": 126,
+            "parking": 28,
+            "ads": 600,
+            "fixed": 356,
+            "result": 2161,
+            "ivaPaid": 0,
+            "cash": 14381,
+            "cumResult": 12444
+          }
+        ],
+        "summary": {
+          "gross": 26680,
+          "net": 22050,
+          "ads": 5300,
+          "result": 12444,
+          "trough": null,
+          "troughMonth": null,
+          "firstPositive": "Oct-2026",
+          "cumPositive": "Oct-2026",
+          "ivaOwedAtYearEnd": 1938,
+          "endCash": 12444
+        }
+      },
+      "C": {
+        "scenario": "optimista",
+        "arch": "C",
+        "rows": [
+          {
+            "month": "Oct-2026",
+            "visits": 4,
+            "pieces": 8,
+            "gross": 662,
+            "net": 548,
+            "consumables": 12,
+            "travel": 18,
+            "parking": 4,
+            "ads": 200,
+            "fixed": 186,
+            "result": 128,
+            "ivaPaid": 0,
+            "cash": 242,
+            "cumResult": 128
+          },
+          {
+            "month": "Nov-2026",
+            "visits": 6,
+            "pieces": 12,
+            "gross": 994,
+            "net": 821,
+            "consumables": 18,
+            "travel": 27,
+            "parking": 6,
+            "ads": 250,
+            "fixed": 186,
+            "result": 334,
+            "ivaPaid": 0,
+            "cash": 749,
+            "cumResult": 462
+          },
+          {
+            "month": "Dec-2026",
+            "visits": 8,
+            "pieces": 16,
+            "gross": 1325,
+            "net": 1095,
+            "consumables": 24,
+            "travel": 36,
+            "parking": 8,
+            "ads": 300,
+            "fixed": 186,
+            "result": 541,
+            "ivaPaid": 0,
+            "cash": 1520,
+            "cumResult": 1003
+          },
+          {
+            "month": "Jan-2027",
+            "visits": 10,
+            "pieces": 20,
+            "gross": 1656,
+            "net": 1369,
+            "consumables": 30,
+            "travel": 45,
+            "parking": 10,
+            "ads": 400,
+            "fixed": 186,
+            "result": 698,
+            "ivaPaid": 517,
+            "cash": 1988,
+            "cumResult": 1701
+          },
+          {
+            "month": "Feb-2027",
+            "visits": 11,
+            "pieces": 22,
+            "gross": 1822,
+            "net": 1506,
+            "consumables": 33,
+            "travel": 50,
+            "parking": 11,
+            "ads": 400,
+            "fixed": 186,
+            "result": 826,
+            "ivaPaid": 0,
+            "cash": 3130,
+            "cumResult": 2527
+          },
+          {
+            "month": "Mar-2027",
+            "visits": 13,
+            "pieces": 26,
+            "gross": 2153,
+            "net": 1779,
+            "consumables": 39,
+            "travel": 59,
+            "parking": 13,
+            "ads": 450,
+            "fixed": 186,
+            "result": 1033,
+            "ivaPaid": 0,
+            "cash": 4537,
+            "cumResult": 3560
+          },
+          {
+            "month": "Apr-2027",
+            "visits": 16,
+            "pieces": 32,
+            "gross": 2650,
+            "net": 2190,
+            "consumables": 48,
+            "travel": 72,
+            "parking": 16,
+            "ads": 500,
+            "fixed": 186,
+            "result": 1368,
+            "ivaPaid": 977,
+            "cash": 5387,
+            "cumResult": 4928
+          },
+          {
+            "month": "May-2027",
+            "visits": 18,
+            "pieces": 36,
+            "gross": 2981,
+            "net": 2464,
+            "consumables": 54,
+            "travel": 81,
+            "parking": 18,
+            "ads": 500,
+            "fixed": 186,
+            "result": 1625,
+            "ivaPaid": 0,
+            "cash": 7530,
+            "cumResult": 6552
+          },
+          {
+            "month": "Jun-2027",
+            "visits": 21,
+            "pieces": 42,
+            "gross": 3478,
+            "net": 2874,
+            "consumables": 63,
+            "travel": 95,
+            "parking": 21,
+            "ads": 550,
+            "fixed": 186,
+            "result": 1960,
+            "ivaPaid": 0,
+            "cash": 10093,
+            "cumResult": 8512
+          },
+          {
+            "month": "Jul-2027",
+            "visits": 23,
+            "pieces": 46,
+            "gross": 3809,
+            "net": 3148,
+            "consumables": 69,
+            "travel": 104,
+            "parking": 23,
+            "ads": 550,
+            "fixed": 356,
+            "result": 2047,
+            "ivaPaid": 1581,
+            "cash": 11220,
+            "cumResult": 10559
+          },
+          {
+            "month": "Aug-2027",
+            "visits": 26,
+            "pieces": 52,
+            "gross": 4306,
+            "net": 3559,
+            "consumables": 78,
+            "travel": 117,
+            "parking": 26,
+            "ads": 600,
+            "fixed": 356,
+            "result": 2382,
+            "ivaPaid": 0,
+            "cash": 14349,
+            "cumResult": 12941
+          },
+          {
+            "month": "Sep-2027",
+            "visits": 28,
+            "pieces": 56,
+            "gross": 4637,
+            "net": 3833,
+            "consumables": 84,
+            "travel": 126,
+            "parking": 28,
+            "ads": 600,
+            "fixed": 356,
+            "result": 2639,
+            "ivaPaid": 0,
+            "cash": 17792,
+            "cumResult": 15579
+          }
+        ],
+        "summary": {
+          "gross": 30474,
+          "net": 25185,
+          "ads": 5300,
+          "result": 15579,
+          "trough": null,
+          "troughMonth": null,
+          "firstPositive": "Oct-2026",
+          "cumPositive": "Oct-2026",
+          "ivaOwedAtYearEnd": 2213,
+          "endCash": 15579
+        }
+      }
+    }
+  },
+  "envelope": [
+    {
+      "arch": "A",
+      "scenario": "conservador",
+      "gross": 4852,
+      "net": 4010,
+      "ads": 1800,
+      "result": -974,
+      "trough": -923,
+      "troughMonth": "Jul-2027",
+      "firstPositive": "Jun-2027",
+      "cumPositive": null,
+      "ivaOwedAtYearEnd": 355,
+      "endCash": -974
+    },
+    {
+      "arch": "A",
+      "scenario": "realista",
+      "gross": 11645,
+      "net": 9624,
+      "ads": 3850,
+      "result": 2097,
+      "trough": -318,
+      "troughMonth": "Jan-2027",
+      "firstPositive": "Feb-2027",
+      "cumPositive": "May-2027",
+      "ivaOwedAtYearEnd": 851,
+      "endCash": 2097
+    },
+    {
+      "arch": "A",
+      "scenario": "optimista",
+      "gross": 20884,
+      "net": 17260,
+      "ads": 5300,
+      "result": 7654,
+      "trough": null,
+      "troughMonth": null,
+      "firstPositive": "Nov-2026",
+      "cumPositive": "Nov-2026",
+      "ivaOwedAtYearEnd": 1517,
+      "endCash": 7654
+    },
+    {
+      "arch": "B",
+      "scenario": "conservador",
+      "gross": 6199,
+      "net": 5123,
+      "ads": 1800,
+      "result": 139,
+      "trough": -548,
+      "troughMonth": "Jan-2027",
+      "firstPositive": "Apr-2027",
+      "cumPositive": "Sep-2027",
+      "ivaOwedAtYearEnd": 453,
+      "endCash": 139
+    },
+    {
+      "arch": "B",
+      "scenario": "realista",
+      "gross": 14877,
+      "net": 12295,
+      "ads": 3850,
+      "result": 4768,
+      "trough": -91,
+      "troughMonth": "Oct-2026",
+      "firstPositive": "Nov-2026",
+      "cumPositive": "Feb-2027",
+      "ivaOwedAtYearEnd": 1087,
+      "endCash": 4768
+    },
+    {
+      "arch": "B",
+      "scenario": "optimista",
+      "gross": 26680,
+      "net": 22050,
+      "ads": 5300,
+      "result": 12444,
+      "trough": null,
+      "troughMonth": null,
+      "firstPositive": "Oct-2026",
+      "cumPositive": "Oct-2026",
+      "ivaOwedAtYearEnd": 1938,
+      "endCash": 12444
+    },
+    {
+      "arch": "C",
+      "scenario": "conservador",
+      "gross": 7080,
+      "net": 5851,
+      "ads": 1800,
+      "result": 868,
+      "trough": -425,
+      "troughMonth": "Jan-2027",
+      "firstPositive": "Feb-2027",
+      "cumPositive": "Jun-2027",
+      "ivaOwedAtYearEnd": 517,
+      "endCash": 868
+    },
+    {
+      "arch": "C",
+      "scenario": "realista",
+      "gross": 16993,
+      "net": 14043,
+      "ads": 3850,
+      "result": 6517,
+      "trough": -54,
+      "troughMonth": "Oct-2026",
+      "firstPositive": "Nov-2026",
+      "cumPositive": "Jan-2027",
+      "ivaOwedAtYearEnd": 1242,
+      "endCash": 6517
+    },
+    {
+      "arch": "C",
+      "scenario": "optimista",
+      "gross": 30474,
+      "net": 25185,
+      "ads": 5300,
+      "result": 15579,
+      "trough": null,
+      "troughMonth": null,
+      "firstPositive": "Oct-2026",
+      "cumPositive": "Oct-2026",
+      "ivaOwedAtYearEnd": 2213,
+      "endCash": 15579
+    }
+  ],
+  "longRun": {
+    "conservador": {
+      "A": {
+        "scenario": "conservador",
+        "arch": "A",
+        "years": [
+          {
+            "year": 2,
+            "visits": 12,
+            "pieces": 18,
+            "demandPieces": 18,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 20.5,
+            "ads": 200,
+            "gross": 12258,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 2343,
+            "cashEnd": 1369,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 3,
+            "visits": 16,
+            "pieces": 24,
+            "demandPieces": 24,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 27.3,
+            "ads": 250,
+            "gross": 16344,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 4747,
+            "cashEnd": 6116,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 4,
+            "visits": 18.7,
+            "pieces": 28,
+            "demandPieces": 28,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 31.8,
+            "ads": 250,
+            "gross": 19068,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 6751,
+            "cashEnd": 12867,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 5,
+            "visits": 20.2,
+            "pieces": 30.3,
+            "demandPieces": 30.3,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 34.5,
+            "ads": 250,
+            "gross": 20657,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 7919,
+            "cashEnd": 20786,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 6,
+            "visits": 21.1,
+            "pieces": 31.6,
+            "demandPieces": 31.6,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 35.9,
+            "ads": 250,
+            "gross": 21518,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 8552,
+            "cashEnd": 29338,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 7,
+            "visits": 21.5,
+            "pieces": 32.3,
+            "demandPieces": 32.3,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 36.7,
+            "ads": 250,
+            "gross": 21966,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 8882,
+            "cashEnd": 38220,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 8,
+            "visits": 21.7,
+            "pieces": 32.6,
+            "demandPieces": 32.6,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 37,
+            "ads": 250,
+            "gross": 22195,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 9050,
+            "cashEnd": 47270,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          }
+        ],
+        "ownerYear": null
+      },
+      "B": {
+        "scenario": "conservador",
+        "arch": "B",
+        "years": [
+          {
+            "year": 2,
+            "visits": 12,
+            "pieces": 18,
+            "demandPieces": 18,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 20.5,
+            "ads": 200,
+            "gross": 15660,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 5154,
+            "cashEnd": 5293,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 3,
+            "visits": 16,
+            "pieces": 24,
+            "demandPieces": 24,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 27.3,
+            "ads": 250,
+            "gross": 20880,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 8496,
+            "cashEnd": 13789,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 4,
+            "visits": 18.7,
+            "pieces": 28,
+            "demandPieces": 28,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 31.8,
+            "ads": 250,
+            "gross": 24360,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 11124,
+            "cashEnd": 24914,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 5,
+            "visits": 20.2,
+            "pieces": 30.3,
+            "demandPieces": 30.3,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 34.5,
+            "ads": 250,
+            "gross": 26390,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 12657,
+            "cashEnd": 37571,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 6,
+            "visits": 21.1,
+            "pieces": 31.6,
+            "demandPieces": 31.6,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 35.9,
+            "ads": 250,
+            "gross": 27490,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 13488,
+            "cashEnd": 51058,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 7,
+            "visits": 21.5,
+            "pieces": 32.3,
+            "demandPieces": 32.3,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 36.7,
+            "ads": 250,
+            "gross": 28062,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 13920,
+            "cashEnd": 64979,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 8,
+            "visits": 21.7,
+            "pieces": 32.6,
+            "demandPieces": 32.6,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 37,
+            "ads": 250,
+            "gross": 28355,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 14141,
+            "cashEnd": 79119,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          }
+        ],
+        "ownerYear": null
+      },
+      "C": {
+        "scenario": "conservador",
+        "arch": "C",
+        "years": [
+          {
+            "year": 2,
+            "visits": 12,
+            "pieces": 18,
+            "demandPieces": 18,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 20.5,
+            "ads": 200,
+            "gross": 17887,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 6995,
+            "cashEnd": 7863,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 3,
+            "visits": 16,
+            "pieces": 24,
+            "demandPieces": 24,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 27.3,
+            "ads": 250,
+            "gross": 23849,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 10950,
+            "cashEnd": 18813,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 4,
+            "visits": 18.7,
+            "pieces": 28,
+            "demandPieces": 28,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 31.8,
+            "ads": 250,
+            "gross": 27824,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 13987,
+            "cashEnd": 32800,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 5,
+            "visits": 20.2,
+            "pieces": 30.3,
+            "demandPieces": 30.3,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 34.5,
+            "ads": 250,
+            "gross": 30143,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 15759,
+            "cashEnd": 48559,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 6,
+            "visits": 21.1,
+            "pieces": 31.6,
+            "demandPieces": 31.6,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 35.9,
+            "ads": 250,
+            "gross": 31399,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 16718,
+            "cashEnd": 65277,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 7,
+            "visits": 21.5,
+            "pieces": 32.3,
+            "demandPieces": 32.3,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 36.7,
+            "ads": 250,
+            "gross": 32053,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 17218,
+            "cashEnd": 82495,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 8,
+            "visits": 21.7,
+            "pieces": 32.6,
+            "demandPieces": 32.6,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 37,
+            "ads": 250,
+            "gross": 32387,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 17473,
+            "cashEnd": 99969,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          }
+        ],
+        "ownerYear": null
+      }
+    },
+    "realista": {
+      "A": {
+        "scenario": "realista",
+        "arch": "A",
+        "years": [
+          {
+            "year": 2,
+            "visits": 24,
+            "pieces": 43.2,
+            "demandPieces": 43.2,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 49.1,
+            "ads": 450,
+            "gross": 29419,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 12280,
+            "cashEnd": 14377,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 3,
+            "visits": 34,
+            "pieces": 61.2,
+            "demandPieces": 61.2,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 69.5,
+            "ads": 500,
+            "gross": 41677,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 20826,
+            "cashEnd": 35203,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 4,
+            "visits": 41.1,
+            "pieces": 74,
+            "demandPieces": 74,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 84,
+            "ads": 500,
+            "gross": 50360,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 27305,
+            "cashEnd": 62508,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": true
+          },
+          {
+            "year": 5,
+            "visits": 45.4,
+            "pieces": 81.7,
+            "demandPieces": 81.7,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 1,
+            "utilisation": 46.4,
+            "ads": 500,
+            "gross": 55606,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 2300,
+            "result": 6599,
+            "cashEnd": 69108,
+            "ownerStateResult": 6599,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 6,
+            "visits": 47.7,
+            "pieces": 85.9,
+            "demandPieces": 85.9,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 48.8,
+            "ads": 500,
+            "gross": 58502,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 11060,
+            "cashEnd": 80168,
+            "ownerStateResult": 11060,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 7,
+            "visits": 49,
+            "pieces": 88.1,
+            "demandPieces": 88.1,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 50.1,
+            "ads": 500,
+            "gross": 60025,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 12197,
+            "cashEnd": 92366,
+            "ownerStateResult": 12125,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 8,
+            "visits": 49.6,
+            "pieces": 89.3,
+            "demandPieces": 89.3,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 50.7,
+            "ads": 500,
+            "gross": 60807,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 12780,
+            "cashEnd": 105146,
+            "ownerStateResult": 12125,
+            "hireDecidedForNextYear": false
+          }
+        ],
+        "ownerYear": 5
+      },
+      "B": {
+        "scenario": "realista",
+        "arch": "B",
+        "years": [
+          {
+            "year": 2,
+            "visits": 24,
+            "pieces": 43.2,
+            "demandPieces": 43.2,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 49.1,
+            "ads": 450,
+            "gross": 37584,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 19028,
+            "cashEnd": 23796,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 3,
+            "visits": 34,
+            "pieces": 61.2,
+            "demandPieces": 61.2,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 69.5,
+            "ads": 500,
+            "gross": 53244,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 30386,
+            "cashEnd": 54181,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 4,
+            "visits": 41.1,
+            "pieces": 74,
+            "demandPieces": 74,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 84,
+            "ads": 500,
+            "gross": 64337,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 38856,
+            "cashEnd": 93037,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": true
+          },
+          {
+            "year": 5,
+            "visits": 45.4,
+            "pieces": 81.7,
+            "demandPieces": 81.7,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 1,
+            "utilisation": 46.4,
+            "ads": 500,
+            "gross": 71038,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 2300,
+            "result": 19354,
+            "cashEnd": 112391,
+            "ownerStateResult": 19354,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 6,
+            "visits": 47.7,
+            "pieces": 85.9,
+            "demandPieces": 85.9,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 48.8,
+            "ads": 500,
+            "gross": 74738,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 24479,
+            "cashEnd": 136870,
+            "ownerStateResult": 24479,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 7,
+            "visits": 49,
+            "pieces": 88.1,
+            "demandPieces": 88.1,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 50.1,
+            "ads": 500,
+            "gross": 76684,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 25965,
+            "cashEnd": 162835,
+            "ownerStateResult": 25870,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 8,
+            "visits": 49.6,
+            "pieces": 89.3,
+            "demandPieces": 89.3,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 50.7,
+            "ads": 500,
+            "gross": 77683,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 26728,
+            "cashEnd": 189562,
+            "ownerStateResult": 25870,
+            "hireDecidedForNextYear": false
+          }
+        ],
+        "ownerYear": 5
+      },
+      "C": {
+        "scenario": "realista",
+        "arch": "C",
+        "years": [
+          {
+            "year": 2,
+            "visits": 24,
+            "pieces": 43.2,
+            "demandPieces": 43.2,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 49.1,
+            "ads": 450,
+            "gross": 42929,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 23445,
+            "cashEnd": 29962,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 3,
+            "visits": 34,
+            "pieces": 61.2,
+            "demandPieces": 61.2,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 69.5,
+            "ads": 500,
+            "gross": 60816,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 36643,
+            "cashEnd": 66605,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 4,
+            "visits": 41.1,
+            "pieces": 74,
+            "demandPieces": 74,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 84,
+            "ads": 500,
+            "gross": 73486,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 46417,
+            "cashEnd": 113022,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": true
+          },
+          {
+            "year": 5,
+            "visits": 45.4,
+            "pieces": 81.7,
+            "demandPieces": 81.7,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 1,
+            "utilisation": 46.4,
+            "ads": 500,
+            "gross": 81140,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 2300,
+            "result": 27702,
+            "cashEnd": 140725,
+            "ownerStateResult": 27702,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 6,
+            "visits": 47.7,
+            "pieces": 85.9,
+            "demandPieces": 85.9,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 48.8,
+            "ads": 500,
+            "gross": 85366,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 33263,
+            "cashEnd": 173987,
+            "ownerStateResult": 33263,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 7,
+            "visits": 49,
+            "pieces": 88.1,
+            "demandPieces": 88.1,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 50.1,
+            "ads": 500,
+            "gross": 87589,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 34978,
+            "cashEnd": 208965,
+            "ownerStateResult": 34868,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 8,
+            "visits": 49.6,
+            "pieces": 89.3,
+            "demandPieces": 89.3,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 50.7,
+            "ads": 500,
+            "gross": 88730,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 35857,
+            "cashEnd": 244822,
+            "ownerStateResult": 34868,
+            "hireDecidedForNextYear": false
+          }
+        ],
+        "ownerYear": 5
+      }
+    },
+    "optimista": {
+      "A": {
+        "scenario": "optimista",
+        "arch": "A",
+        "years": [
+          {
+            "year": 2,
+            "visits": 36,
+            "pieces": 72,
+            "demandPieces": 72,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 81.8,
+            "ads": 650,
+            "gross": 49032,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 24778,
+            "cashEnd": 32432,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": true
+          },
+          {
+            "year": 3,
+            "visits": 48,
+            "pieces": 96,
+            "demandPieces": 96,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 1,
+            "utilisation": 54.5,
+            "ads": 700,
+            "gross": 65376,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 2300,
+            "result": 11842,
+            "cashEnd": 44274,
+            "ownerStateResult": 7747,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 4,
+            "visits": 56,
+            "pieces": 112,
+            "demandPieces": 112,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 63.6,
+            "ads": 700,
+            "gross": 76272,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 22331,
+            "cashEnd": 66605,
+            "ownerStateResult": 10047,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 5,
+            "visits": 60.7,
+            "pieces": 121.3,
+            "demandPieces": 121.3,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 68.9,
+            "ads": 700,
+            "gross": 82628,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 27108,
+            "cashEnd": 93712,
+            "ownerStateResult": 10047,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 6,
+            "visits": 63.2,
+            "pieces": 126.4,
+            "demandPieces": 126.4,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 71.8,
+            "ads": 700,
+            "gross": 86071,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 29695,
+            "cashEnd": 123407,
+            "ownerStateResult": 10047,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 7,
+            "visits": 64.5,
+            "pieces": 129,
+            "demandPieces": 129,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 73.3,
+            "ads": 700,
+            "gross": 87864,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 31043,
+            "cashEnd": 154450,
+            "ownerStateResult": 10047,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 8,
+            "visits": 65.2,
+            "pieces": 130.4,
+            "demandPieces": 130.4,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 74.1,
+            "ads": 700,
+            "gross": 88779,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 31731,
+            "cashEnd": 186181,
+            "ownerStateResult": 10047,
+            "hireDecidedForNextYear": false
+          }
+        ],
+        "ownerYear": null
+      },
+      "B": {
+        "scenario": "optimista",
+        "arch": "B",
+        "years": [
+          {
+            "year": 2,
+            "visits": 36,
+            "pieces": 72,
+            "demandPieces": 72,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 81.8,
+            "ads": 650,
+            "gross": 62640,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 36025,
+            "cashEnd": 48469,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": true
+          },
+          {
+            "year": 3,
+            "visits": 48,
+            "pieces": 96,
+            "demandPieces": 96,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 1,
+            "utilisation": 54.5,
+            "ads": 700,
+            "gross": 83520,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 2300,
+            "result": 26837,
+            "cashEnd": 75305,
+            "ownerStateResult": 21493,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 4,
+            "visits": 56,
+            "pieces": 112,
+            "demandPieces": 112,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 63.6,
+            "ads": 700,
+            "gross": 97440,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 39825,
+            "cashEnd": 115130,
+            "ownerStateResult": 23793,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 5,
+            "visits": 60.7,
+            "pieces": 121.3,
+            "demandPieces": 121.3,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 68.9,
+            "ads": 700,
+            "gross": 105560,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 46060,
+            "cashEnd": 161190,
+            "ownerStateResult": 23793,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 6,
+            "visits": 63.2,
+            "pieces": 126.4,
+            "demandPieces": 126.4,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 71.8,
+            "ads": 700,
+            "gross": 109958,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 49437,
+            "cashEnd": 210627,
+            "ownerStateResult": 23793,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 7,
+            "visits": 64.5,
+            "pieces": 129,
+            "demandPieces": 129,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 73.3,
+            "ads": 700,
+            "gross": 112249,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 51196,
+            "cashEnd": 261823,
+            "ownerStateResult": 23793,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 8,
+            "visits": 65.2,
+            "pieces": 130.4,
+            "demandPieces": 130.4,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 74.1,
+            "ads": 700,
+            "gross": 113418,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 52094,
+            "cashEnd": 313916,
+            "ownerStateResult": 23793,
+            "hireDecidedForNextYear": false
+          }
+        ],
+        "ownerYear": null
+      },
+      "C": {
+        "scenario": "optimista",
+        "arch": "C",
+        "years": [
+          {
+            "year": 2,
+            "visits": 36,
+            "pieces": 72,
+            "demandPieces": 72,
+            "operators": 1,
+            "hired": 0,
+            "newHire": 0,
+            "utilisation": 81.8,
+            "ads": 650,
+            "gross": 71548,
+            "fixed": 4272,
+            "operatorCost": 0,
+            "machine": 0,
+            "result": 43386,
+            "cashEnd": 58965,
+            "ownerStateResult": null,
+            "hireDecidedForNextYear": true
+          },
+          {
+            "year": 3,
+            "visits": 48,
+            "pieces": 96,
+            "demandPieces": 96,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 1,
+            "utilisation": 54.5,
+            "ads": 700,
+            "gross": 95397,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 2300,
+            "result": 36653,
+            "cashEnd": 95618,
+            "ownerStateResult": 30491,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 4,
+            "visits": 56,
+            "pieces": 112,
+            "demandPieces": 112,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 63.6,
+            "ads": 700,
+            "gross": 111297,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 51277,
+            "cashEnd": 146895,
+            "ownerStateResult": 32791,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 5,
+            "visits": 60.7,
+            "pieces": 121.3,
+            "demandPieces": 121.3,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 68.9,
+            "ads": 700,
+            "gross": 120571,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 58466,
+            "cashEnd": 205360,
+            "ownerStateResult": 32791,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 6,
+            "visits": 63.2,
+            "pieces": 126.4,
+            "demandPieces": 126.4,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 71.8,
+            "ads": 700,
+            "gross": 125595,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 62360,
+            "cashEnd": 267720,
+            "ownerStateResult": 32791,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 7,
+            "visits": 64.5,
+            "pieces": 129,
+            "demandPieces": 129,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 73.3,
+            "ads": 700,
+            "gross": 128212,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 64388,
+            "cashEnd": 332108,
+            "ownerStateResult": 32791,
+            "hireDecidedForNextYear": false
+          },
+          {
+            "year": 8,
+            "visits": 65.2,
+            "pieces": 130.4,
+            "demandPieces": 130.4,
+            "operators": 2,
+            "hired": 1,
+            "newHire": 0,
+            "utilisation": 74.1,
+            "ads": 700,
+            "gross": 129547,
+            "fixed": 4272,
+            "operatorCost": 22320,
+            "machine": 0,
+            "result": 65423,
+            "cashEnd": 397531,
+            "ownerStateResult": 32791,
+            "hireDecidedForNextYear": false
+          }
+        ],
+        "ownerYear": null
+      }
+    }
+  },
+  "breakEven": [
+    {
+      "key": "fixedY1",
+      "label": "Cover fixed only, tarifa plana (€186/mo)",
+      "cost": 186,
+      "A": {
+        "pieces": 4.4,
+        "visits": 2.4,
+        "capacityPct": 5
+      },
+      "B": {
+        "pieces": 3.4,
+        "visits": 1.9,
+        "capacityPct": 3.8
+      },
+      "C": {
+        "pieces": 2.9,
+        "visits": 1.6,
+        "capacityPct": 3.3
+      }
+    },
+    {
+      "key": "fixedAdsY1",
+      "label": "Fixed + ads €300, tarifa plana (€486/mo)",
+      "cost": 486,
+      "A": {
+        "pieces": 11.5,
+        "visits": 6.4,
+        "capacityPct": 13
+      },
+      "B": {
+        "pieces": 8.8,
+        "visits": 4.9,
+        "capacityPct": 10
+      },
+      "C": {
+        "pieces": 7.6,
+        "visits": 4.2,
+        "capacityPct": 8.6
+      }
+    },
+    {
+      "key": "fixedAdsFull",
+      "label": "Fixed after tarifa plana + ads €300 (€656/mo)",
+      "cost": 656,
+      "A": {
+        "pieces": 15.5,
+        "visits": 8.6,
+        "capacityPct": 17.6
+      },
+      "B": {
+        "pieces": 11.8,
+        "visits": 6.6,
+        "capacityPct": 13.5
+      },
+      "C": {
+        "pieces": 10.3,
+        "visits": 5.7,
+        "capacityPct": 11.7
+      }
+    }
+  ],
+  "contribution": {
+    "A": {
+      "netPrice": 46.9,
+      "perPiece": 42.35,
+      "perVisit": 76.22,
+      "marginPct": 90.3,
+      "singlePaidVisit": -31.1,
+      "twoPiecePaidVisit": 14.3,
+      "cacPaybackPieces": 1.7
+    },
+    "B": {
+      "netPrice": 59.92,
+      "perPiece": 55.36,
+      "perVisit": 99.65,
+      "marginPct": 92.4,
+      "singlePaidVisit": -18.08,
+      "twoPiecePaidVisit": 40.33,
+      "cacPaybackPieces": 1.3
+    },
+    "C": {
+      "netPrice": 68.44,
+      "perPiece": 63.88,
+      "perVisit": 114.99,
+      "marginPct": 93.3,
+      "singlePaidVisit": -9.56,
+      "twoPiecePaidVisit": 57.38,
+      "cacPaybackPieces": 1.1
+    }
+  },
+  "ratios": {
+    "A": {
+      "contributionMarginPct": 90.3,
+      "cacPaybackPieces": 1.7,
+      "resultOverNetRevenuePct": 21.8,
+      "adsOverGrossPct": 33.1
+    },
+    "B": {
+      "contributionMarginPct": 92.4,
+      "cacPaybackPieces": 1.3,
+      "resultOverNetRevenuePct": 38.8,
+      "adsOverGrossPct": 25.9
+    },
+    "C": {
+      "contributionMarginPct": 93.3,
+      "cacPaybackPieces": 1.1,
+      "resultOverNetRevenuePct": 46.4,
+      "adsOverGrossPct": 22.7
+    }
+  },
+  "market": {
+    "source": "murcia-market.md §5 (price map), §1.7 and §8.5 (rings); pricing-decision.md §4 (grids)",
+    "priceMap": [
+      {
+        "service": "Colchón individual",
+        "n": 4,
+        "murciaMedian": 52.5,
+        "murciaMedianVat": 57,
+        "murciaRange": [
+          36,
+          59
+        ],
+        "madrid": [
+          35,
+          60
+        ],
+        "valencia": [
+          25,
+          55
+        ],
+        "granada": null,
+        "granadaNote": "desde €45, no size (Happy Clean)"
+      },
+      {
+        "service": "Colchón matrimonio",
+        "n": 4,
+        "murciaMedian": 67,
+        "murciaMedianVat": 70.8,
+        "murciaRange": [
+          60,
+          100
+        ],
+        "madrid": [
+          55,
+          90
+        ],
+        "valencia": [
+          60,
+          75
+        ],
+        "granada": null,
+        "granadaNote": "Clean-Home add-on only"
+      },
+      {
+        "service": "Colchón king",
+        "n": 2,
+        "murciaMedian": null,
+        "murciaMedianVat": null,
+        "murciaRange": [
+          69,
+          120
+        ],
+        "madrid": [
+          75,
+          100
+        ],
+        "valencia": [
+          65,
+          100
+        ],
+        "granada": null,
+        "granadaNote": "Clean-Home add-on only, +€35"
+      },
+      {
+        "service": "Sofá 2 plazas",
+        "n": 5,
+        "murciaMedian": 79,
+        "murciaMedianVat": 79,
+        "murciaRange": [
+          60,
+          90
+        ],
+        "madrid": [
+          60,
+          97
+        ],
+        "valencia": [
+          69,
+          89
+        ],
+        "granada": [
+          79,
+          79
+        ],
+        "granadaNote": "Clean-Home"
+      },
+      {
+        "service": "Sofá 3 plazas",
+        "n": 5,
+        "murciaMedian": 100,
+        "murciaMedianVat": 100,
+        "murciaRange": [
+          85,
+          120
+        ],
+        "madrid": [
+          90,
+          119
+        ],
+        "valencia": [
+          85,
+          119
+        ],
+        "granada": [
+          85,
+          85
+        ],
+        "granadaNote": "Clean-Home"
+      },
+      {
+        "service": "Chaise longue / L",
+        "n": 5,
+        "murciaMedian": 110,
+        "murciaMedianVat": 110,
+        "murciaRange": [
+          89,
+          180
+        ],
+        "madrid": [
+          120,
+          175
+        ],
+        "valencia": [
+          89,
+          190
+        ],
+        "granada": [
+          89,
+          99
+        ],
+        "granadaNote": "Clean-Home"
+      },
+      {
+        "service": "Sillón / butaca",
+        "n": 3,
+        "murciaMedian": 40,
+        "murciaMedianVat": 40,
+        "murciaRange": [
+          30,
+          60
+        ],
+        "madrid": [
+          42,
+          50
+        ],
+        "valencia": null,
+        "granada": null,
+        "granadaNote": "desde €30 (Happy Clean)"
+      },
+      {
+        "service": "Silla",
+        "n": 3,
+        "murciaMedian": 10,
+        "murciaMedianVat": 10,
+        "murciaRange": [
+          5,
+          20
+        ],
+        "madrid": null,
+        "valencia": null,
+        "granada": null,
+        "granadaNote": "desde €5 (Happy Clean)"
+      }
+    ],
+    "grids": {
+      "A": {
+        "Colchón individual": 39,
+        "Colchón matrimonio": 55,
+        "Colchón king": 69,
+        "Sofá 3 plazas": 72,
+        "Sofá por plaza": 25,
+        "Pedido mínimo": 55
+      },
+      "B": {
+        "Colchón individual": 49,
+        "Colchón matrimonio": 69,
+        "Colchón king": 89,
+        "Sofá 3 plazas": 95,
+        "Sofá por plaza": 32,
+        "Pedido mínimo": 70
+      },
+      "C": {
+        "Colchón individual": [
+          49,
+          65,
+          79
+        ],
+        "Colchón matrimonio": [
+          69,
+          89,
+          109
+        ],
+        "Sofá 3 plazas": [
+          95,
+          119,
+          145
+        ],
+        "Pack Dormitorio": 149,
+        "Pack Casa": 200,
+        "Pedido mínimo": 79
+      }
+    },
+    "rings": [
+      {
+        "ring": "R1",
+        "scope": "Urban core, 24 barrios",
+        "population": 138997,
+        "households": 49600,
+        "travel": [
+          null,
+          3.5
+        ],
+        "travelNote": "core trips not routed; I6 €3.5 holds inside ≈10 km"
+      },
+      {
+        "ring": "R2",
+        "scope": "Municipality + inner belt",
+        "population": 704814,
+        "households": 250700,
+        "travel": [
+          2.8,
+          9.42
+        ],
+        "travelNote": "out-and-back at €0.175/km"
+      },
+      {
+        "ring": "R3",
+        "scope": "Outer ring (surcharge or minimum order)",
+        "population": 666428,
+        "households": 248500,
+        "travel": [
+          10.36,
+          27.55
+        ],
+        "travelNote": "out-and-back at €0.175/km"
+      }
+    ]
+  }
+}
```
