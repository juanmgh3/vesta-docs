import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));

const IVA = 0.21;
const CONSUMABLE = 1.5;
const CAPACITY = 88;
const CAC = 71;
const OPERATOR_COST = 1860;
const MACHINE = 2300;
const FLAT_RATE_MONTHS_LEFT = 9;
const FIXED_FLAT = 80 + 30 + 50 + 25 + 1;
const FIXED_FULL = 250 + 30 + 50 + 25 + 1;
const TRIGGER_SHARE = 0.75;
const CASH_COVER_MONTHS = 3;
const MAX_YEAR = 8;

const halfEuro = (x) => Math.round(x * 2) / 2;
const mean = (xs) => xs.reduce((t, x) => t + x, 0) / xs.length;

const TRAVEL_TIERS = {
  near: { label: "R1 + pedanías ≤10 km", points: [3.5] },
  mid: { label: "R2 at 12–13 km", points: [4.38, 4.48] },
  far: { label: "R2 outer belt 16–27 km", points: [5.81, 7.14, 7.18, 9.42] },
};
const TRAVEL_MIX = {
  central: { near: 0.5, mid: 0.35, far: 0.15 },
  low: { near: 1, mid: 0, far: 0 },
  high: { near: 0.1, mid: 0.3, far: 0.6 },
};
const travelRaw = (mix) =>
  Object.keys(TRAVEL_TIERS).reduce(
    (t, k) => t + mix[k] * mean(TRAVEL_TIERS[k].points),
    0,
  );
const TRAVEL = {
  centralRaw: travelRaw(TRAVEL_MIX.central),
  lowRaw: travelRaw(TRAVEL_MIX.low),
  highRaw: travelRaw(TRAVEL_MIX.high),
};
TRAVEL.central = halfEuro(TRAVEL.centralRaw);
TRAVEL.low = halfEuro(TRAVEL.lowRaw);
TRAVEL.high = halfEuro(TRAVEL.highRaw);

const SER_SHARE = 0.4;
const SER_TICKET = mean([1.9, 2.7]);
const PARKING_RAW = SER_SHARE * SER_TICKET;
const PARKING = halfEuro(PARKING_RAW);
const PER_VISIT = TRAVEL.central + PARKING;

const ARCH = {
  A: { label: "A Penetración", piece: 56.75 },
  B: { label: "B Match + premium", piece: 72.5 },
  C: { label: "C Premium escalonado", piece: 82.81 },
};

const SCEN = {
  conservador: {
    paid: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    organic: [0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7],
    ads: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
    ppv: 1.5,
  },
  realista: {
    paid: [2, 3, 3, 4, 4, 5, 5, 5, 6, 6, 6, 6],
    organic: [0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12],
    ads: [150, 200, 250, 300, 300, 350, 350, 350, 400, 400, 400, 400],
    ppv: 1.8,
  },
  optimista: {
    paid: [3, 4, 5, 6, 6, 7, 8, 8, 9, 9, 10, 10],
    organic: [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 16, 18],
    ads: [200, 250, 300, 400, 400, 450, 500, 500, 550, 550, 600, 600],
    ppv: 2.0,
  },
};

const Y23 = {
  conservador: { visits: [12, 16], ads: [200, 250] },
  realista: { visits: [24, 34], ads: [450, 500] },
  optimista: { visits: [36, 48], ads: [650, 700] },
};

const MONTHS = [
  "Oct-2026",
  "Nov-2026",
  "Dec-2026",
  "Jan-2027",
  "Feb-2027",
  "Mar-2027",
  "Apr-2027",
  "May-2027",
  "Jun-2027",
  "Jul-2027",
  "Aug-2027",
  "Sep-2027",
];

const fixedForMonth = (m) => (m <= FLAT_RATE_MONTHS_LEFT ? FIXED_FLAT : FIXED_FULL);
const fixedForYear = (y) => {
  let total = 0;
  for (let m = 12 * (y - 1) + 1; m <= 12 * y; m++) total += fixedForMonth(m);
  return total;
};

function year1(scenKey, archKey) {
  const s = SCEN[scenKey];
  const price = ARCH[archKey].piece;
  let cash = 0;
  let cum = 0;
  let accrued = 0;
  let trough = 0;
  let troughMonth = null;
  let firstPositive = null;
  let cumPositive = null;
  let grossTotal = 0;
  let netTotal = 0;
  let adsTotal = 0;
  const rows = [];
  for (let i = 0; i < 12; i++) {
    const visits = s.paid[i] + s.organic[i];
    const pieces = Math.min(visits * s.ppv, CAPACITY);
    const gross = pieces * price;
    const net = gross / (1 + IVA);
    const consumables = pieces * CONSUMABLE;
    const travel = visits * TRAVEL.central;
    const parking = visits * PARKING;
    const fixed = fixedForMonth(i + 1);
    const result = net - consumables - travel - parking - s.ads[i] - fixed;
    let ivaPaid = 0;
    if (i > 0 && i % 3 === 0) {
      ivaPaid = accrued;
      accrued = 0;
    }
    accrued += gross - net;
    cash += gross - consumables - travel - parking - s.ads[i] - fixed - ivaPaid;
    cum += result;
    grossTotal += gross;
    netTotal += net;
    adsTotal += s.ads[i];
    if (firstPositive === null && result >= 0) firstPositive = MONTHS[i];
    if (cumPositive === null && cum >= 0) cumPositive = MONTHS[i];
    if (cash < trough) {
      trough = cash;
      troughMonth = MONTHS[i];
    }
    rows.push({
      month: MONTHS[i],
      visits,
      pieces: +pieces.toFixed(1),
      gross: Math.round(gross),
      net: Math.round(net),
      consumables: Math.round(consumables),
      travel: Math.round(travel),
      parking: Math.round(parking),
      ads: s.ads[i],
      fixed,
      result: Math.round(result),
      ivaPaid: Math.round(ivaPaid),
      cash: Math.round(cash),
      cumResult: Math.round(cum),
    });
  }
  return {
    scenario: scenKey,
    arch: archKey,
    rows,
    summary: {
      gross: Math.round(grossTotal),
      net: Math.round(netTotal),
      ads: adsTotal,
      result: Math.round(cum),
      trough: troughMonth === null ? null : Math.round(trough),
      troughMonth,
      firstPositive,
      cumPositive,
      ivaOwedAtYearEnd: Math.round(accrued),
      endCash: Math.round(cash - accrued),
    },
  };
}

function yearResult(price, served, servedVisits, ads, year, hired, newHire) {
  const gross = served * price * 12;
  const net = gross / (1 + IVA);
  const variable = (served * CONSUMABLE + servedVisits * PER_VISIT) * 12;
  const operators = hired * OPERATOR_COST * 12;
  const machine = newHire * MACHINE;
  const fixed = fixedForYear(year);
  return {
    gross,
    result: net - variable - ads * 12 - fixed - operators - machine,
    fixed,
    operators,
    machine,
  };
}

function longRun(scenKey, archKey, endCashY1) {
  const cfg = Y23[scenKey];
  const ppv = SCEN[scenKey].ppv;
  const price = ARCH[archKey].piece;
  let cash = endCashY1;
  let hired = 0;
  let hireNext = false;
  let visits = 0;
  let growth = (cfg.visits[1] / cfg.visits[0] - 1) / 2;
  let ownerYear = null;
  const years = [];
  for (let y = 2; y <= MAX_YEAR; y++) {
    if (y === 2) visits = cfg.visits[0];
    else if (y === 3) visits = cfg.visits[1];
    else {
      visits = visits * (1 + growth);
      growth = growth / 2;
    }
    const ads = y === 2 ? cfg.ads[0] : cfg.ads[1];
    const newHire = hireNext ? 1 : 0;
    hired += newHire;
    hireNext = false;
    const capacity = (1 + hired) * CAPACITY;
    const demand = visits * ppv;
    const served = Math.min(demand, capacity);
    const r = yearResult(
      price,
      served,
      (visits * served) / demand,
      ads,
      y,
      hired,
      newHire,
    );
    cash += r.result;
    let ownerResult = null;
    if (hired > 0) {
      const ownerServed = Math.min(demand, hired * CAPACITY);
      ownerResult = yearResult(
        price,
        ownerServed,
        (visits * ownerServed) / demand,
        ads,
        y,
        hired,
        newHire,
      ).result;
      if (ownerYear === null && hired * CAPACITY >= demand) ownerYear = y;
    }
    const utilisation = served / capacity;
    const cashNeed =
      CASH_COVER_MONTHS * (FIXED_FULL + OPERATOR_COST * (hired + 1) + ads);
    if (utilisation >= TRIGGER_SHARE && cash >= cashNeed) hireNext = true;
    years.push({
      year: y,
      visits: +visits.toFixed(1),
      pieces: +served.toFixed(1),
      demandPieces: +demand.toFixed(1),
      operators: 1 + hired,
      hired,
      newHire,
      utilisation: +(utilisation * 100).toFixed(1),
      ads,
      gross: Math.round(r.gross),
      fixed: r.fixed,
      operatorCost: r.operators,
      machine: r.machine,
      result: Math.round(r.result),
      cashEnd: Math.round(cash),
      ownerStateResult: ownerResult === null ? null : Math.round(ownerResult),
      hireDecidedForNextYear: hireNext,
    });
  }
  return { scenario: scenKey, arch: archKey, years, ownerYear };
}

const contribution = {};
for (const [k, a] of Object.entries(ARCH)) {
  const ppv = SCEN.realista.ppv;
  const netPiece = a.piece / (1 + IVA);
  const perVisit = ppv * netPiece - ppv * CONSUMABLE - PER_VISIT;
  const perPiece = perVisit / ppv;
  contribution[k] = {
    netPrice: +netPiece.toFixed(2),
    perPiece: +perPiece.toFixed(2),
    perVisit: +perVisit.toFixed(2),
    marginPct: +((perPiece / netPiece) * 100).toFixed(1),
    singlePaidVisit: +(netPiece - CONSUMABLE - PER_VISIT - CAC).toFixed(2),
    twoPiecePaidVisit: +(2 * netPiece - 2 * CONSUMABLE - PER_VISIT - CAC).toFixed(2),
    cacPaybackPieces: +(CAC / perPiece).toFixed(1),
  };
}

const BE_THRESHOLDS = [
  { key: "fixedY1", label: `Cover fixed only, tarifa plana (€${FIXED_FLAT}/mo)`, cost: FIXED_FLAT },
  { key: "fixedAdsY1", label: `Fixed + ads €300, tarifa plana (€${FIXED_FLAT + 300}/mo)`, cost: FIXED_FLAT + 300 },
  { key: "fixedAdsFull", label: `Fixed after tarifa plana + ads €300 (€${FIXED_FULL + 300}/mo)`, cost: FIXED_FULL + 300 },
];
const breakEven = BE_THRESHOLDS.map((t) => {
  const row = { key: t.key, label: t.label, cost: t.cost };
  for (const k of Object.keys(ARCH)) {
    const pieces = t.cost / contribution[k].perPiece;
    row[k] = {
      pieces: +pieces.toFixed(1),
      visits: +(pieces / SCEN.realista.ppv).toFixed(1),
      capacityPct: +((pieces / CAPACITY) * 100).toFixed(1),
    };
  }
  return row;
});

const runs = {};
for (const sk of Object.keys(SCEN)) {
  runs[sk] = {};
  for (const ak of Object.keys(ARCH)) runs[sk][ak] = year1(sk, ak);
}

const envelope = [];
for (const ak of Object.keys(ARCH))
  for (const sk of Object.keys(SCEN)) {
    const s = runs[sk][ak].summary;
    envelope.push({ arch: ak, scenario: sk, ...s });
  }

const long = {};
for (const sk of Object.keys(SCEN)) {
  long[sk] = {};
  for (const ak of Object.keys(ARCH))
    long[sk][ak] = longRun(sk, ak, runs[sk][ak].summary.endCash);
}

const ratios = {};
for (const ak of Object.keys(ARCH)) {
  const s = runs.realista[ak].summary;
  ratios[ak] = {
    contributionMarginPct: contribution[ak].marginPct,
    cacPaybackPieces: contribution[ak].cacPaybackPieces,
    resultOverNetRevenuePct: +((s.result / s.net) * 100).toFixed(1),
    adsOverGrossPct: +((s.ads / s.gross) * 100).toFixed(1),
  };
}

const market = {
  source: "murcia-market.md §5 (price map), §1.7 and §8.5 (rings); pricing-decision.md §4 (grids)",
  priceMap: [
    { service: "Colchón individual", n: 4, murciaMedian: 52.5, murciaMedianVat: 57.0, murciaRange: [36, 59], madrid: [35, 60], valencia: [25, 55], granada: null, granadaNote: "desde €45, no size (Happy Clean)" },
    { service: "Colchón matrimonio", n: 4, murciaMedian: 67, murciaMedianVat: 70.8, murciaRange: [60, 100], madrid: [55, 90], valencia: [60, 75], granada: null, granadaNote: "Clean-Home add-on only" },
    { service: "Colchón king", n: 2, murciaMedian: null, murciaMedianVat: null, murciaRange: [69, 120], madrid: [75, 100], valencia: [65, 100], granada: null, granadaNote: "Clean-Home add-on only, +€35" },
    { service: "Sofá 2 plazas", n: 5, murciaMedian: 79, murciaMedianVat: 79, murciaRange: [60, 90], madrid: [60, 97], valencia: [69, 89], granada: [79, 79], granadaNote: "Clean-Home" },
    { service: "Sofá 3 plazas", n: 5, murciaMedian: 100, murciaMedianVat: 100, murciaRange: [85, 120], madrid: [90, 119], valencia: [85, 119], granada: [85, 85], granadaNote: "Clean-Home" },
    { service: "Chaise longue / L", n: 5, murciaMedian: 110, murciaMedianVat: 110, murciaRange: [89, 180], madrid: [120, 175], valencia: [89, 190], granada: [89, 99], granadaNote: "Clean-Home" },
    { service: "Sillón / butaca", n: 3, murciaMedian: 40, murciaMedianVat: 40, murciaRange: [30, 60], madrid: [42, 50], valencia: null, granada: null, granadaNote: "desde €30 (Happy Clean)" },
    { service: "Silla", n: 3, murciaMedian: 10, murciaMedianVat: 10, murciaRange: [5, 20], madrid: null, valencia: null, granada: null, granadaNote: "desde €5 (Happy Clean)" },
  ],
  grids: {
    A: { "Colchón individual": 39, "Colchón matrimonio": 55, "Colchón king": 69, "Sofá 3 plazas": 72, "Sofá por plaza": 25, "Pedido mínimo": 55 },
    B: { "Colchón individual": 49, "Colchón matrimonio": 69, "Colchón king": 89, "Sofá 3 plazas": 95, "Sofá por plaza": 32, "Pedido mínimo": 70 },
    C: { "Colchón individual": [49, 65, 79], "Colchón matrimonio": [69, 89, 109], "Sofá 3 plazas": [95, 119, 145], "Pack Dormitorio": 149, "Pack Casa": 200, "Pedido mínimo": 79 },
  },
  rings: [
    { ring: "R1", scope: "Urban core, 24 barrios", population: 138997, households: 49600, travel: [null, 3.5], travelNote: "core trips not routed; I6 €3.5 holds inside ≈10 km" },
    { ring: "R2", scope: "Municipality + inner belt", population: 704814, households: 250700, travel: [2.8, 9.42], travelNote: "out-and-back at €0.175/km" },
    { ring: "R3", scope: "Outer ring (surcharge or minimum order)", population: 666428, households: 248500, travel: [10.36, 27.55], travelNote: "out-and-back at €0.175/km" },
  ],
};

const data = {
  meta: {
    generator: "business/research/murcia-model.mjs",
    month1: MONTHS[0],
    months: MONTHS,
    flatRateMonthsLeft: FLAT_RATE_MONTHS_LEFT,
    startingCash: 0,
    loan: 0,
  },
  inputs: {
    iva: IVA,
    consumablePerPiece: CONSUMABLE,
    capacityPieces: CAPACITY,
    cac: CAC,
    operatorCostMonthly: OPERATOR_COST,
    machine: MACHINE,
    fixedFlat: FIXED_FLAT,
    fixedFull: FIXED_FULL,
    travel: {
      central: TRAVEL.central,
      low: TRAVEL.low,
      high: TRAVEL.high,
      centralRaw: +TRAVEL.centralRaw.toFixed(2),
      lowRaw: +TRAVEL.lowRaw.toFixed(2),
      highRaw: +TRAVEL.highRaw.toFixed(2),
      tiers: Object.fromEntries(
        Object.entries(TRAVEL_TIERS).map(([k, t]) => [
          k,
          { label: t.label, points: t.points, mean: +mean(t.points).toFixed(2) },
        ]),
      ),
      mix: TRAVEL_MIX,
    },
    parking: {
      perVisit: PARKING,
      raw: +PARKING_RAW.toFixed(2),
      serShare: SER_SHARE,
      ticket: SER_TICKET,
    },
    architectures: ARCH,
    scenarios: SCEN,
    years23: Y23,
  },
  year1: runs,
  envelope,
  longRun: long,
  breakEven,
  contribution,
  ratios,
  market,
};

const fmt = (x, d = 0) => {
  if (x === null || x === undefined) return "—";
  const neg = x < 0;
  const [int, dec] = Math.abs(x).toFixed(d).split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const body = dec ? `${grouped}.${dec}` : grouped;
  return neg ? `−${body}` : body;
};
const eur = (x) => (x < 0 ? `−€${fmt(-x)}` : `€${fmt(x)}`);
const table = (headers, rows) =>
  [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((r) => `| ${r.join(" | ")} |`),
  ].join("\n");

const out = [];
out.push("# Murcia model — generated tables");
out.push("");
out.push(
  "Generated by `murcia-model.mjs`; do not edit by hand. Inputs and derivations: `murcia-model.md`. Euros; P&L net of IVA, pre-IRPF; cash gross with IVA remitted the month after each calendar quarter; starting cash €0, no loan.",
);
out.push("");
out.push("## T0. Derived per-visit inputs");
out.push("");
out.push(
  table(
    ["Input", "Raw", "Carried (nearest €0.5)"],
    [
      ["Travel per visit, central mix", fmt(TRAVEL.centralRaw, 2), fmt(TRAVEL.central, 1)],
      ["Travel per visit, band low (all near)", fmt(TRAVEL.lowRaw, 2), fmt(TRAVEL.low, 1)],
      ["Travel per visit, band high (belt-heavy mix)", fmt(TRAVEL.highRaw, 2), fmt(TRAVEL.high, 1)],
      ["Parking per visit (SER share × ticket)", fmt(PARKING_RAW, 2), fmt(PARKING, 1)],
      ["Per-visit cost carried (travel + parking)", "—", fmt(PER_VISIT, 1)],
    ],
  ),
);

let n = 1;
for (const ak of ["B", "A", "C"]) {
  const r = runs.realista[ak];
  const s = r.summary;
  out.push("");
  out.push(`## T${n}. Year 1 — ${ARCH[ak].label} × realista`);
  out.push("");
  out.push(
    table(
      ["Month", "Visits", "Pieces", "Gross", "Net", "Consum.", "Travel", "Parking", "Ads", "Fixed", "Result", "IVA paid", "Cash"],
      r.rows.map((x) => [
        x.month,
        x.visits,
        fmt(x.pieces, 1),
        fmt(x.gross),
        fmt(x.net),
        fmt(x.consumables),
        fmt(x.travel),
        fmt(x.parking),
        fmt(x.ads),
        fmt(x.fixed),
        fmt(x.result),
        fmt(x.ivaPaid),
        fmt(x.cash),
      ]),
    ),
  );
  out.push("");
  out.push(
    `Year 1: gross ${eur(s.gross)} · net revenue ${eur(s.net)} · result ${eur(s.result)} · cash trough ${s.troughMonth === null ? "none (≥0 all year)" : `${eur(s.trough)} (${s.troughMonth})`} · first positive month ${s.firstPositive ?? "none"} · cumulative positive ${s.cumPositive ?? "not within year 1"} · IVA owed at year end ${eur(s.ivaOwedAtYearEnd)} · year-end cash net of it ${eur(s.endCash)}.`,
  );
  n++;
}

out.push("");
out.push(`## T${n}. Sensitivity envelope — year 1, 3 architectures × 3 demand bands`);
out.push("");
out.push(
  table(
    ["Arch × demand", "Gross Y1", "Result Y1", "Cash trough (month)", "First positive", "Cumulative positive", "Year-end cash"],
    envelope.map((e) => [
      `${e.arch} ${e.scenario}`,
      fmt(e.gross),
      fmt(e.result),
      e.troughMonth === null ? "none (≥0 all year)" : `${fmt(e.trough)} (${e.troughMonth})`,
      e.firstPositive ?? "none",
      e.cumPositive ?? "not within year 1",
      fmt(e.endCash),
    ]),
  ),
);
n++;

out.push("");
out.push(`## T${n}. Years 2–3 — annual`);
out.push("");
const y23Rows = [];
for (const sk of Object.keys(SCEN))
  for (const ak of Object.keys(ARCH)) {
    const [y2, y3] = long[sk][ak].years;
    y23Rows.push([
      `${sk} × ${ak}`,
      fmt(y2.pieces, 1),
      y2.operators,
      fmt(y2.gross),
      fmt(y2.result),
      fmt(y3.pieces, 1),
      y3.operators,
      fmt(y3.gross),
      fmt(y3.result),
    ]);
  }
out.push(
  table(
    ["Scenario × arch", "Y2 pieces/mo", "Y2 operators", "Y2 gross", "Y2 result", "Y3 pieces/mo", "Y3 operators", "Y3 gross", "Y3 result"],
    y23Rows,
  ),
);
n++;

out.push("");
out.push(`## T${n}. Years 2–8 — strategic trajectory, architecture B`);
out.push("");
for (const sk of Object.keys(SCEN)) {
  const lr = long[sk].B;
  out.push(`### ${sk} × B`);
  out.push("");
  out.push(
    table(
      ["Year", "Visits/mo", "Pieces/mo", "Operators", "Utilisation %", "Gross", "Operator cost", "Machine", "Result", "Cash end", "Owner-state result", "Hire for next year"],
      lr.years.map((y) => [
        `Y${y.year}`,
        fmt(y.visits, 1),
        fmt(y.pieces, 1),
        y.operators,
        fmt(y.utilisation, 1),
        fmt(y.gross),
        fmt(y.operatorCost),
        fmt(y.machine),
        fmt(y.result),
        fmt(y.cashEnd),
        fmt(y.ownerStateResult),
        y.hireDecidedForNextYear ? "yes" : "no",
      ]),
    ),
  );
  out.push("");
  out.push(
    `Founder→owner milestone (hired operators alone carry demand): ${lr.ownerYear === null ? "not within Y8" : `Y${lr.ownerYear}`}.`,
  );
  out.push("");
}
n++;

out.push(`## T${n}. Structural break-even (contribution at ppv ${SCEN.realista.ppv})`);
out.push("");
out.push(
  table(
    ["Threshold", "A pieces/mo", "A visits/mo", "B pieces/mo", "B visits/mo", "C pieces/mo", "C visits/mo"],
    breakEven.map((b) => [
      b.label,
      fmt(b.A.pieces, 1),
      fmt(b.A.visits, 1),
      fmt(b.B.pieces, 1),
      fmt(b.B.visits, 1),
      fmt(b.C.pieces, 1),
      fmt(b.C.visits, 1),
    ]),
  ),
);
out.push("");
out.push(`Capacity: ${CAPACITY} pieces/month per operator.`);
n++;

out.push("");
out.push(`## T${n}. Contribution per piece and per visit (net of IVA)`);
out.push("");
out.push(
  table(
    ["Arch", "Net price/piece", "Contribution/piece", "Contribution/visit (ppv 1.8)", "Single-piece paid visit (CAC €71)", "Two-piece paid visit (CAC €71)"],
    Object.entries(contribution).map(([k, c]) => [
      k,
      fmt(c.netPrice, 2),
      fmt(c.perPiece, 2),
      fmt(c.perVisit, 2),
      fmt(c.singlePaidVisit, 2),
      fmt(c.twoPiecePaidVisit, 2),
    ]),
  ),
);
n++;

out.push("");
out.push(`## T${n}. Ratios (realista tracks)`);
out.push("");
out.push(
  table(
    ["Ratio", "A", "B", "C"],
    [
      ["Contribution margin / piece (%)", ...["A", "B", "C"].map((k) => fmt(ratios[k].contributionMarginPct, 1))],
      ["CAC payback (pieces per paid client)", ...["A", "B", "C"].map((k) => fmt(ratios[k].cacPaybackPieces, 1))],
      ["Result Y1 / net revenue Y1 (%)", ...["A", "B", "C"].map((k) => fmt(ratios[k].resultOverNetRevenuePct, 1))],
      ["Ads / gross revenue Y1 (%)", ...["A", "B", "C"].map((k) => fmt(ratios[k].adsOverGrossPct, 1))],
    ],
  ),
);
out.push("");

writeFileSync(join(HERE, "murcia-model-tables.md"), out.join("\n"));
writeFileSync(join(HERE, "murcia-model-data.json"), `${JSON.stringify(data, null, 2)}\n`);
