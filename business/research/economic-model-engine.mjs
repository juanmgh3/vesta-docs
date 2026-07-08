// Economic model engine — Phase 4 (Grupo Vesta). All inputs sourced; see
// docs/business/research/economic-model.md for labels & derivations.
const IVA = 0.21;

// Avg gross price per piece by architecture (service mix: 50% matrimonio,
// 20% individual, 25% sofá 3pz, 5% king; C = tier blend 60/30/10)
const ARCH = {
  A: { label: "A Penetración", piece: 56.75 },
  B: { label: "B Match+premium", piece: 72.5 },
  C: { label: "C Premium escalonado", piece: 82.81 },
};

// Demand scenarios: monthly visits (paid, organic) + ads budget, year 1
const SCEN = {
  conservador: {
    paid: [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    organic: [0, 0, 1, 1, 2, 2, 3, 3, 4, 5, 6, 7],
    ads: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
    ppv: 1.5, // pieces per visit
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

const FIXED_Y1 = 80 + 30 + 50 + 25 + 1; // cuota tarifa plana + gestor + coche + RC + web = 186
const CONSUMABLE = 1.5; // per piece
const TRAVEL_PER_VISIT = 3.5; // €7/day trip ÷ ~2 visits/day early-stage ESTIMATE
const CAPACITY_PIECES = 88; // 4/day × 22 days, one operator

function run(scenKey, archKey) {
  const s = SCEN[scenKey],
    a = ARCH[archKey];
  let cash = 0,
    ivaOwed = 0,
    trough = 0,
    troughM = 0,
    cum = [];
  let firstPosMonth = null,
    cumPosMonth = null,
    cumResult = 0;
  const rows = [];
  for (let m = 0; m < 12; m++) {
    const visits = s.paid[m] + s.organic[m];
    const pieces = Math.min(visits * s.ppv, CAPACITY_PIECES);
    const gross = pieces * a.piece;
    const net = gross / (1 + IVA);
    const ivaMonth = gross - net;
    const varCost = pieces * CONSUMABLE + visits * TRAVEL_PER_VISIT;
    const result = net - varCost - s.ads[m] - FIXED_Y1; // net-of-IVA P&L
    cumResult += result;
    if (firstPosMonth === null && result >= 0) firstPosMonth = m + 1;
    if (cumPosMonth === null && cumResult >= 0) cumPosMonth = m + 1;
    // cash: collect gross, pay costs now; remit accrued IVA in m+1 of each quarter (months 4,7,10 => idx 3,6,9)
    cash += gross - varCost - s.ads[m] - FIXED_Y1;
    ivaOwed += ivaMonth;
    if ((m + 1) % 3 === 1 && m > 0) {
      cash -= ivaOwed;
      ivaOwed = 0;
    } // remit in months 4,7,10 (idx 3,6,9)
    if (cash < trough) {
      trough = cash;
      troughM = m + 1;
    }
    cum.push(cash);
    rows.push({
      m: m + 1,
      visits,
      pieces: +pieces.toFixed(1),
      gross: Math.round(gross),
      net: Math.round(net),
      varCost: Math.round(varCost),
      ads: s.ads[m],
      result: Math.round(result),
      cash: Math.round(cash),
    });
  }
  const y1 = {
    grossRev: rows.reduce((t, r) => t + r.gross, 0),
    netResult: Math.round(cumResult),
    trough: Math.round(trough),
    troughM,
    firstPosMonth,
    cumPosMonth,
    endCash: Math.round(cash - ivaOwed), // net of IVA still owed at year end
  };
  return { rows, y1 };
}

for (const sk of Object.keys(SCEN)) {
  console.log(
    `\n===== ESCENARIO ${sk.toUpperCase()} (ppv ${SCEN[sk].ppv}) =====`,
  );
  for (const ak of Object.keys(ARCH)) {
    const { rows, y1 } = run(sk, ak);
    console.log(`\n--- Arquitectura ${ARCH[ak].label} ---`);
    console.log(
      "M | vis | pzs | ingr.bruto | ingr.neto | var | ads | resultado | caja",
    );
    for (const r of rows)
      console.log(
        `${r.m} | ${r.visits} | ${r.pieces} | ${r.gross} | ${r.net} | ${r.varCost} | ${r.ads} | ${r.result} | ${r.cash}`,
      );
    console.log(
      `AÑO1: ingresos brutos ${y1.grossRev} | resultado neto ${y1.netResult} | valle caja ${y1.trough} (mes ${y1.troughM}) | 1er mes positivo M${y1.firstPosMonth} | acumulado positivo M${y1.cumPosMonth} | caja fin (neta IVA pendiente) ${y1.endCash}`,
    );
  }
}

// Break-even structural: pieces/month to cover fixed (no ads) and fixed+ads(150)
console.log("\n===== PUNTO DE EQUILIBRIO ESTRUCTURAL (piezas/mes) =====");
for (const ak of Object.keys(ARCH)) {
  const a = ARCH[ak];
  const contribPerPiece = a.piece / 1.21 - CONSUMABLE - TRAVEL_PER_VISIT / 1.8; // travel per piece at ppv 1.8
  console.log(
    `${a.label}: contribución neta/pieza ≈ ${contribPerPiece.toFixed(2)} € | BE solo fijos (186) = ${(FIXED_Y1 / contribPerPiece).toFixed(1)} pzs | BE fijos+ads 300 = ${((FIXED_Y1 + 300) / contribPerPiece).toFixed(1)} pzs | BE año2+ (356+ads300) = ${((356 + 300) / contribPerPiece).toFixed(1)} pzs`,
  );
}

// ===== Years 2-3 (annual, avg visits/month; fixed = 356 €/mo post tarifa plana central 250) =====
const FIXED_Y2 = 250 + 30 + 50 + 25 + 1; // 356
const Y23 = {
  // avg visits/month [year2, year3], ads €/mo [y2, y3], ppv held
  conservador: { visits: [12, 16], ads: [200, 250], ppv: 1.5 },
  realista: { visits: [24, 34], ads: [450, 500], ppv: 1.8 },
  optimista: { visits: [36, 48], ads: [650, 700], ppv: 2.0 }, // y3 assumes operator 2 (capacity 176)
};
console.log("\n===== AÑOS 2-3 (anual, neto de IVA, pre-IRPF) =====");
for (const [sk, cfg] of Object.entries(Y23)) {
  for (const ak of Object.keys(ARCH)) {
    const a = ARCH[ak];
    const line = [0, 1]
      .map((y) => {
        const pzs = cfg.visits[y] * cfg.ppv;
        const capped = Math.min(pzs, sk === "optimista" && y === 1 ? 176 : 88);
        const gross = capped * a.piece * 12;
        const net = gross / 1.21;
        const varCost =
          (capped * CONSUMABLE + cfg.visits[y] * TRAVEL_PER_VISIT) * 12;
        const result = net - varCost - cfg.ads[y] * 12 - FIXED_Y2 * 12;
        return `Y${y + 2}: ${Math.round(capped)}pzs/mes, ingr.bruto ${Math.round(gross)}, resultado ${Math.round(result)}`;
      })
      .join(" | ");
    console.log(`${sk} × ${a.label} → ${line}`);
  }
}
