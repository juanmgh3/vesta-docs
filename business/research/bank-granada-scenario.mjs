// Bank-dossier Granada scenario — derived from economic-model-engine.mjs
// (Phase 4 engine) with the Granada parameter set in granada-market.md and
// the founder decisions locked in specs/bank-dossier/spec.md.
//
// Differences vs the internal engine, each justified:
//  1. Single architecture: B (Match+premium) — founder decision 2026-07-08
//     for the bank dossier only. Piece price adjusted to Granada:
//     72.5 × 0.92 = 66.70 € (ESTIMATE — Clean-Home cross-city sofa delta
//     ≈ −8% and Granada household-income gap vs Valencia ≈ −8% agree;
//     granada-market.md §4, §6).
//  2. Loan quota added as a monthly fixed outflow (treasury view):
//     6,500 € at illustrative 8% TAE (same rate as economic-model.md ch.9):
//     36m → 199.20 €/mo · 60m → 131.79 €/mo (recomputed below, not copied,
//     because the internal report quoted quotas for ≈6,000 €).
//  3. Demand curves reused unchanged from the internal engine (conservador +
//     realista): they are city-agnostic captures of a one-operator ramp, and
//     Granada's reachable pool (≈97k households R1) is orders of magnitude
//     above the demand they imply. Optimista omitted — a bank dossier argues
//     prudence, not upside.
// Run: node docs/business/research/bank-granada-scenario.mjs
const IVA = 0.21;
const PIECE = 72.5 * 0.92; // 66.70 € avg gross per piece, B-Granada

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
};

const FIXED_Y1 = 80 + 30 + 50 + 25 + 1; // cuota autónomo + gestor + coche + RC + web = 186
const CONSUMABLE = 1.5;
const TRAVEL_PER_VISIT = 3.5;
const CAPACITY_PIECES = 88;

// Loan quota, French amortization, illustrative 8% TAE (nominal monthly r)
const LOAN = 6500;
const RATE = 0.08 / 12;
const quota = (months) =>
  (LOAN * RATE) / (1 - Math.pow(1 + RATE, -months));
const Q36 = quota(36);
const Q60 = quota(60);
console.log(
  `Loan 6,500 € @8% TAE ill.: 36m → ${Q36.toFixed(2)} €/mo (interest ${(Q36 * 36 - LOAN).toFixed(0)} €) · 60m → ${Q60.toFixed(2)} €/mo (interest ${(Q60 * 60 - LOAN).toFixed(0)} €)`,
);

for (const [sk, s] of Object.entries(SCEN)) {
  console.log(`\n=== B-Granada × ${sk} (piece ${PIECE.toFixed(2)} €) ===`);
  console.log(
    "m  visits pieces  netRev  varC  ads  fixed  P&L    P&L-Q60  cum(P&L-Q60)",
  );
  let cum = 0,
    cumNoLoan = 0,
    minTrough = 0,
    breakEvenMonth = null;
  for (let m = 0; m < 12; m++) {
    const visits = s.paid[m] + s.organic[m];
    const pieces = Math.min(visits * s.ppv, CAPACITY_PIECES);
    const net = (pieces * PIECE) / (1 + IVA);
    const varCost = pieces * CONSUMABLE + visits * TRAVEL_PER_VISIT;
    const result = net - varCost - s.ads[m] - FIXED_Y1;
    const withLoan = result - Q60;
    cum += withLoan;
    cumNoLoan += result;
    minTrough = Math.min(minTrough, cum);
    if (breakEvenMonth === null && result > 0) breakEvenMonth = m + 1;
    console.log(
      `${String(m + 1).padStart(2)} ${String(visits).padStart(5)} ${pieces.toFixed(1).padStart(6)} ${net.toFixed(0).padStart(7)} ${varCost.toFixed(0).padStart(5)} ${String(s.ads[m]).padStart(4)} ${String(FIXED_Y1).padStart(6)} ${result.toFixed(0).padStart(6)} ${withLoan.toFixed(0).padStart(8)} ${cum.toFixed(0).padStart(9)}`,
    );
  }
  console.log(
    `Y1: P&L sum (no loan) ${cumNoLoan.toFixed(0)} € · cum trough WITH 60m quota ${minTrough.toFixed(0)} € · first positive month (pre-quota) M${breakEvenMonth}`,
  );
  // months needed to cover each quota from monthly result
  const firstCovers = (q) => {
    for (let m = 0; m < 12; m++) {
      const visits = s.paid[m] + s.organic[m];
      const pieces = Math.min(visits * s.ppv, CAPACITY_PIECES);
      const net = (pieces * PIECE) / 1.21;
      const result =
        net - (pieces * CONSUMABLE + visits * TRAVEL_PER_VISIT) - s.ads[m] - FIXED_Y1;
      if (result >= q) return m + 1;
    }
    return ">12";
  };
  console.log(
    `Quota coverage: monthly result ≥ Q36 (${Q36.toFixed(2)}) from M${firstCovers(Q36)} · ≥ Q60 (${Q60.toFixed(2)}) from M${firstCovers(Q60)}`,
  );
}

// Break-even in pieces/month (structure only vs structure+ads+quota)
const contrib = PIECE / 1.21 - CONSUMABLE - TRAVEL_PER_VISIT / 1.8; // per piece, ppv 1.8
console.log(
  `\nContribution/piece (ppv 1.8): ${contrib.toFixed(2)} € · BE structure-only: ${(FIXED_Y1 / contrib).toFixed(1)} pz/mes · BE +ads(350)+Q60: ${((FIXED_Y1 + 350 + Q60) / contrib).toFixed(1)} pz/mes (capacity 88)`,
);

// Years 2–3, realista only (bank view), same shape as internal engine
const FIXED_Y2 = 250 + 30 + 50 + 25 + 1; // cuota general post-tarifa-plana
const cfg = { visits: [30, 38], ads: [450, 500], ppv: 1.9 };
for (const y of [0, 1]) {
  const pzs = Math.min(cfg.visits[y] * cfg.ppv, 88);
  const net = (pzs * PIECE * 12) / 1.21;
  const varCost = (pzs * CONSUMABLE + cfg.visits[y] * TRAVEL_PER_VISIT) * 12;
  const result = net - varCost - cfg.ads[y] * 12 - FIXED_Y2 * 12;
  console.log(
    `Y${y + 2} realista: ${pzs.toFixed(0)} pz/mes → resultado anual (pre-cuota) ${result.toFixed(0)} € · post Q60 ${(result - Q60 * 12).toFixed(0)} €`,
  );
}
