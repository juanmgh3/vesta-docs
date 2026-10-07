import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const DATA = JSON.parse(readFileSync(join(HERE, "..", "..", "research", "murcia-model-data.json"), "utf8"));
const OUT = join(HERE, "..", "_src", "murcia", "charts.html");

const W = 640;
const MONTH_ES = { Jan: "ene", Feb: "feb", Mar: "mar", Apr: "abr", May: "may", Jun: "jun", Jul: "jul", Aug: "ago", Sep: "sep", Oct: "oct", Nov: "nov", Dec: "dic" };
const SCEN_ES = { conservador: "Conservador", realista: "Realista", optimista: "Optimista" };
const ARCH_ES = { A: "A · Penetración", B: "B · Igualar mercado", C: "C · Premium escalonado" };

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const c = (x) => +x.toFixed(1);
const decimals = (x) => (String(x).split(".")[1] ?? "").length;
const num = (x, d = decimals(x)) => {
  const [int, frac] = Math.abs(x).toFixed(d).split(".");
  const grouped = int.length > 3 ? int.replace(/\B(?=(\d{3})+(?!\d))/g, ".") : int;
  const body = frac ? `${grouped},${frac}` : grouped;
  return x < 0 ? `−${body}` : body;
};
const eur = (x) => `${num(x)} €`;
const range = ([lo, hi]) => {
  if (lo === hi) return eur(lo);
  const d = Number.isInteger(lo) && Number.isInteger(hi) ? 0 : 2;
  return `${num(lo, d)}–${num(hi, d)} €`;
};
const month = (m) => {
  const [mm, yy] = m.split("-");
  return `${MONTH_ES[mm]}. ${yy}`;
};
const when = (m) => (DATA.meta.months.includes(m) ? month(m) : `${month(m)}, pago IVA`);

const line = (cls, x1, y1, x2, y2, attrs = "") =>
  `<line class="${cls}" x1="${c(x1)}" y1="${c(y1)}" x2="${c(x2)}" y2="${c(y2)}"${attrs} />`;
const rect = (cls, x, y, w, h) => `<rect class="${cls}" x="${c(x)}" y="${c(y)}" width="${c(w)}" height="${c(h)}" />`;
const dot = (cls, x, y, r = 3.5) => `<circle class="${cls}" cx="${c(x)}" cy="${c(y)}" r="${r}" />`;
const text = (cls, x, y, s, anchor = "start") =>
  `<text class="${cls}" x="${c(x)}" y="${c(y)}"${anchor === "start" ? "" : ` text-anchor="${anchor}"`}>${esc(s)}</text>`;
const polyline = (cls, pts, attrs = "") =>
  `<polyline class="${cls}" points="${pts.map(([x, y]) => `${c(x)},${c(y)}`).join(" ")}"${attrs} />`;
const scale = (d0, d1, r0, r1) => (v) => r0 + ((v - d0) / (d1 - d0)) * (r1 - r0);
const ticks = (lo, hi, n = 4) => {
  const raw = (hi - lo) / n;
  const mag = 10 ** Math.floor(Math.log10(raw));
  const step = [1, 2, 2.5, 5, 10].map((k) => k * mag).find((s) => s >= raw);
  const first = Math.floor(lo / step);
  const last = Math.ceil(hi / step);
  const out = [];
  for (let i = first; i <= last; i++) out.push(+(i * step).toFixed(6));
  return out;
};
const yGrid = (ts, y, x0, x1) =>
  ts.flatMap((t) => [
    line(t === 0 ? "chart__axis" : "chart__grid", x0, y(t), x1, y(t)),
    text("chart__axis-label", x0 - 6, y(t) + 4, num(t), "end"),
  ]);

const figure = (id, h, label, body, caption, source) =>
  [
    `<!-- chart:${id} -->`,
    `<figure class="figure" id="fig-${id}">`,
    `<svg class="chart" viewBox="0 0 ${W} ${h}" role="img" aria-label="${esc(label)}">`,
    ...body,
    "</svg>",
    `<figcaption class="figure-caption">${esc(caption)} <span class="figure-caption__source">Fuente: ${esc(source)}.</span> <!-- chip --></figcaption>`,
    "</figure>",
    "<!-- /chart -->",
  ].join("\n");

function y1Result() {
  const rows = DATA.year1.realista.B.rows;
  const H = 270;
  const L = 56;
  const R = 12;
  const T = 30;
  const B = H - 34;
  const vals = rows.map((r) => r.result);
  const ts = ticks(Math.min(0, ...vals), Math.max(...vals));
  const y = scale(ts[0], ts.at(-1), B, T);
  const slot = (W - L - R) / rows.length;
  const bw = slot * 0.6;
  const body = [text("chart__axis-label", L, 14, "Resultado del mes, €"), ...yGrid(ts, y, L, W - R)];
  rows.forEach((r, i) => {
    const x = L + i * slot + (slot - bw) / 2;
    const top = y(Math.max(0, r.result));
    const bot = y(Math.min(0, r.result));
    body.push(rect(r.result < 0 ? "chart__bar--neg" : "chart__bar", x, top, bw, bot - top));
    body.push(text("chart__value", x + bw / 2, r.result < 0 ? bot + 14 : top - 5, num(r.result), "middle"));
    const [mm, yy] = month(r.month).split(" ");
    body.push(text("chart__label", x + bw / 2, B + 18, mm, "middle"));
    body.push(text("chart__label", x + bw / 2, B + 31, yy, "middle"));
  });
  return figure(
    "y1-result",
    H,
    "Resultado mensual del año 1, arquitectura B, demanda realista",
    body,
    `Resultado mensual del año 1 (octubre 2026 – septiembre 2027), arquitectura B × demanda realista, sin IVA y antes de IRPF. Total del año: ${eur(DATA.year1.realista.B.summary.result)}.`,
    "murcia-model-tables.md T1",
  );
}

function cashScenarios() {
  const labels = [...DATA.meta.months.map(month), `${month("Oct-2027")}, IVA`];
  const series = ["optimista", "realista", "conservador"].map((k) => {
    const run = DATA.year1[k].B;
    return { k, pts: [...run.rows.map((r) => r.cash), run.summary.endCash], s: run.summary };
  });
  const dash = { optimista: ' stroke-dasharray="2 4"', realista: "", conservador: ' stroke-dasharray="8 4"' };
  const H = 300;
  const L = 60;
  const R = 150;
  const T = 30;
  const B = H - 34;
  const all = series.flatMap((s) => s.pts);
  const ts = ticks(Math.min(0, ...all), Math.max(...all));
  const y = scale(ts[0], ts.at(-1), B, T);
  const x = scale(0, labels.length - 1, L, W - R);
  const body = [text("chart__axis-label", L, 14, "Caja acumulada, €"), ...yGrid(ts, y, L, W - R)];
  labels.forEach((m, i) => {
    if (i % 3 === 0 || i === labels.length - 1) body.push(text("chart__label", x(i), B + 22, m, "middle"));
  });
  for (const s of series) {
    body.push(polyline("chart__line", s.pts.map((v, i) => [x(i), y(v)]), dash[s.k]));
    const last = s.pts.at(-1);
    body.push(text("chart__label", W - R + 8, y(last) + 4, `${SCEN_ES[s.k]}: ${eur(last)}`));
    if (s.s.trough !== null) {
      const i = DATA.meta.months.includes(s.s.troughMonth) ? DATA.meta.months.indexOf(s.s.troughMonth) : labels.length - 1;
      body.push(dot("chart__bar--neg", x(i), y(s.s.trough)));
      body.push(text("chart__value", x(i), y(s.s.trough) + 18, `mín. ${eur(s.s.trough)}`, i === 0 ? "start" : "middle"));
    }
  }
  return figure(
    "cash-scenarios",
    H,
    "Caja acumulada del año 1 con la arquitectura B en los tres escenarios de demanda",
    body,
    "Caja acumulada del año 1 con la arquitectura B en los tres escenarios de demanda, desde 0 € de caja inicial y sin préstamo. El último punto es el pago, en octubre de 2027, del IVA de julio–septiembre; los puntos rojos marcan el mínimo de caja que hay que poder cubrir.",
    "murcia-model-data.json year1.*.B; murcia-model.md §2.4; murcia-model-tables.md T1 y T4",
  );
}

function breakEven() {
  const cap = DATA.inputs.capacityPieces;
  const flat = DATA.inputs.fixedFlat;
  const full = DATA.inputs.fixedFull;
  const heading = {
    fixedY1: (b) => `Solo costes fijos con tarifa plana (${b.cost} €/mes)`,
    fixedAdsY1: (b) => `Fijos con tarifa plana + ${b.cost - flat} € de anuncios (${b.cost} €/mes)`,
    fixedAdsFull: (b) => `Fijos sin tarifa plana + ${b.cost - full} € de anuncios (${b.cost} €/mes)`,
  };
  const L = 40;
  const R = 16;
  const T = 34;
  const group = 18 + 3 * 17 + 10;
  const H = T + DATA.breakEven.length * group + 26;
  const ts = ticks(0, cap);
  const x = scale(0, ts.at(-1), L, W - R);
  const bottom = H - 22;
  const body = [text("chart__axis-label", L, 14, "Piezas al mes para cubrir el coste")];
  for (const t of ts) {
    body.push(line(t === 0 ? "chart__axis" : "chart__grid", x(t), T - 6, x(t), bottom));
    body.push(text("chart__axis-label", x(t), bottom + 16, num(t), "middle"));
  }
  body.push(line("chart__axis", x(cap), T - 10, x(cap), bottom, ' stroke-dasharray="4 3"'));
  body.push(text("chart__label", x(cap) - 4, T - 14, `Capacidad de un operario: ${cap} piezas/mes`, "end"));
  DATA.breakEven.forEach((b, g) => {
    const y0 = T + g * group;
    body.push(text("chart__value", L, y0 + 12, heading[b.key](b)));
    ["A", "B", "C"].forEach((k, i) => {
      const yb = y0 + 20 + i * 17;
      body.push(text("chart__label", L - 8, yb + 10, k, "end"));
      body.push(rect("chart__bar", x(0), yb, x(b[k].pieces) - x(0), 12));
      body.push(text("chart__label", x(b[k].pieces) + 6, yb + 10, `${num(b[k].pieces)} piezas · ${num(b[k].visits)} visitas · ${num(b[k].capacityPct)} % de la capacidad`));
    });
  });
  return figure(
    "break-even",
    H,
    "Punto de equilibrio estructural en piezas al mes por arquitectura frente a la capacidad",
    body,
    `Punto de equilibrio estructural en piezas y visitas al mes por arquitectura (contribución a ${num(DATA.inputs.scenarios.realista.ppv)} piezas por visita), frente a la capacidad de un operario.`,
    "murcia-model-tables.md T7",
  );
}

function sensitivity() {
  const env = DATA.envelope;
  const scen = ["conservador", "realista", "optimista"];
  const L = 150;
  const T = 30;
  const cw = (W - L) / 3;
  const ch = 90;
  const H = T + 3 * ch + 4;
  const maxPos = Math.max(...env.map((e) => e.result), 0);
  const maxNeg = Math.max(...env.map((e) => -e.result), 0);
  const body = [];
  scen.forEach((s, j) => body.push(text("chart__axis-label", L + j * cw + 10, T - 10, SCEN_ES[s])));
  ["A", "B", "C"].forEach((a, i) => {
    const yc = T + i * ch;
    body.push(text("chart__value", 0, yc + ch / 2 + 4, ARCH_ES[a]));
    scen.forEach((s, j) => {
      const e = env.find((v) => v.arch === a && v.scenario === s);
      const xc = L + j * cw;
      const span = cw - 24;
      const zero = xc + 10 + (span * maxNeg) / (maxNeg + maxPos);
      const w = (span * Math.abs(e.result)) / (maxNeg + maxPos);
      body.push(line("chart__grid", xc + 2, yc + 2, xc + cw - 2, yc + 2));
      body.push(text("chart__value", xc + 10, yc + 22, `Resultado ${eur(e.result)}`));
      body.push(rect(e.result < 0 ? "chart__bar--neg" : "chart__bar", e.result < 0 ? zero - w : zero, yc + 32, w, 10));
      body.push(line("chart__axis", zero, yc + 28, zero, yc + 46));
      body.push(text("chart__label", xc + 10, yc + 62, e.trough === null ? "Caja ≥ 0 todo el año" : `Mínimo de caja ${eur(e.trough)}`));
      if (e.trough !== null) body.push(text("chart__label", xc + 10, yc + 77, when(e.troughMonth)));
    });
  });
  return figure(
    "sensitivity",
    H,
    "Resultado del año 1 y mínimo de caja para tres arquitecturas y tres escenarios de demanda",
    body,
    "Resultado del año 1 y mínimo de caja sin colchón inicial, 3 arquitecturas de precio × 3 escenarios de demanda.",
    "murcia-model-tables.md T4",
  );
}

function trajectory() {
  const y1 = DATA.year1.realista.B.summary;
  const y2 = DATA.longRun.realista.B.years[0];
  const years = [
    { year: 1, result: y1.result, operators: y2.operators - y2.newHire, owner: null },
    ...DATA.longRun.realista.B.years.map((y) => ({ year: y.year, result: y.result, operators: y.operators, owner: y.ownerStateHolds })),
  ];
  const H = 300;
  const L = 96;
  const R = 12;
  const T = 30;
  const B = H - 70;
  const ts = ticks(Math.min(0, ...years.map((y) => y.result)), Math.max(...years.map((y) => y.result)));
  const y = scale(ts[0], ts.at(-1), B, T);
  const slot = (W - L - R) / years.length;
  const bw = slot * 0.55;
  const body = [text("chart__axis-label", L, 14, "Resultado anual, €"), ...yGrid(ts, y, L, W - R)];
  body.push(text("chart__label", L - 6, B + 38, "Operarios", "end"));
  body.push(text("chart__label", L - 6, B + 56, "Propietario", "end"));
  years.forEach((yr, i) => {
    const xm = L + i * slot + slot / 2;
    const top = y(Math.max(0, yr.result));
    const bot = y(Math.min(0, yr.result));
    body.push(rect(yr.result < 0 ? "chart__bar--neg" : "chart__bar", xm - bw / 2, top, bw, bot - top));
    body.push(text("chart__value", xm, yr.result < 0 ? bot + 14 : top - 5, num(yr.result), "middle"));
    body.push(text("chart__label", xm, B + 18, `Año ${yr.year}`, "middle"));
    body.push(text("chart__label", xm, B + 38, String(yr.operators), "middle"));
    body.push(text("chart__label", xm, B + 56, yr.owner === null ? "—" : yr.owner ? "sí" : "no", "middle"));
  });
  return figure(
    "trajectory",
    H,
    "Resultado anual de los años 1 a 8, arquitectura B, demanda realista",
    body,
    "Resultado anual de los años 1 a 8, arquitectura B × demanda realista, con el número de operarios y si los operarios contratados cubren solos la demanda (estado de propietario).",
    "murcia-model-tables.md T1 y T6; murcia-model.md §2.5",
  );
}

function priceMap() {
  const rows = DATA.market.priceMap;
  const L = 150;
  const R = 160;
  const T = 30;
  const group = 16 + 4 * 13 + 10;
  const H = T + rows.length * group;
  const ends = rows.flatMap((r) => [r.murciaRange.value, r.madrid.value, r.valencia.value, r.granada.value].filter(Boolean).map((v) => v[1]));
  const ts = ticks(0, Math.max(...ends));
  const x = scale(0, ts.at(-1), L, W - R);
  const body = [];
  for (const t of ts) {
    body.push(line(t === 0 ? "chart__axis" : "chart__grid", x(t), T - 8, x(t), H - 6));
    body.push(text("chart__axis-label", x(t), T - 14, `${num(t)} €`, "middle"));
  }
  const other = (v, yr) => {
    if (v === null) return [text("chart__label", W - R + 8, yr + 4, "sin dato comparable")];
    const out = [text("chart__label", W - R + 8, yr + 4, range(v))];
    if (v[0] === v[1]) out.push(dot("chart__bar", x(v[0]), yr));
    else out.push(line("chart__line", x(v[0]), yr, x(v[1]), yr));
    return out;
  };
  rows.forEach((r, g) => {
    const y0 = T + g * group;
    body.push(text("chart__value", 0, y0 + 12, r.service));
    const sub = (i) => y0 + 24 + i * 13;
    ["Murcia", "Madrid", "Valencia", "Granada"].forEach((city, i) => body.push(text("chart__label", 12, sub(i) + 4, city)));
    const [lo, hi] = r.murciaRange.value;
    body.push(rect("chart__bar--aqua", x(lo), sub(0) - 4, x(hi) - x(lo), 8));
    const med = r.murciaMedian.value;
    if (med !== null) body.push(rect("chart__bar--estimate", x(med) - 1.25, sub(0) - 6, 2.5, 12));
    body.push(text("chart__label", W - R + 8, sub(0) + 4, med === null ? `${range([lo, hi])} · sin mediana` : `${range([lo, hi])} · med. ${eur(med)}`));
    body.push(...other(r.madrid.value, sub(1)));
    body.push(...other(r.valencia.value, sub(2)));
    body.push(...other(r.granada.value, sub(3)));
  });
  return figure(
    "price-map",
    H,
    "Precios publicados por pieza en Murcia frente a Madrid, Valencia y Granada",
    body,
    "Precios publicados por pieza: rango de Murcia (barra) y mediana estimada (marca dorada), frente a los rangos de Madrid y Valencia y las cifras de Granada. Bases de IVA mezcladas, como se publican.",
    "murcia-market.md §5 (Madrid y Valencia: market-dossier.md §2.1 y §3.1; Granada: granada-market.md §3–§4)",
  );
}

function rings() {
  const rs = DATA.market.rings;
  const barrios = rs[0].scope.match(/(\d+) barrios/)[1];
  const perKm = +rs.find((r) => r.travel.note?.includes("/km")).travel.note.match(/€([\d.]+)\/km/)[1];
  const scope = {
    R1: ["Núcleo urbano,", `${barrios} barrios`],
    R2: ["Municipio +", "primer cinturón"],
    R3: ["Anillo exterior:", "recargo o pedido mínimo"],
  };
  const T = 40;
  const rh = 54;
  const H = T + rs.length * rh;
  const popX = scale(0, Math.max(...rs.map((r) => r.population.value)), 180, 350);
  const travelX = scale(0, Math.max(...rs.map((r) => r.travel.value[1])), 440, 540);
  const body = [
    text("chart__axis-label", 180, 16, "Población"),
    text("chart__axis-label", 440, 16, "Ida y vuelta, € por visita"),
    line("chart__axis", 180, T - 8, 180, H - 4),
    line("chart__axis", 440, T - 8, 440, H - 4),
  ];
  rs.forEach((r, i) => {
    const y0 = T + i * rh;
    body.push(text("chart__value", 0, y0 + 12, r.ring));
    scope[r.ring].forEach((s, k) => body.push(text("chart__label", 28, y0 + 12 + k * 15, s)));
    const pop = r.population;
    body.push(rect(pop.label.startsWith("FACT") ? "chart__bar" : "chart__bar--estimate", 180, y0 + 2, popX(pop.value) - 180, 14));
    body.push(text("chart__label", popX(pop.value) + 6, y0 + 13, num(pop.value)));
    const [lo, hi] = r.travel.value;
    body.push(rect("chart__bar--estimate", travelX(lo ?? 0), y0 + 2, travelX(hi) - travelX(lo ?? 0), 14));
    body.push(text("chart__label", travelX(hi) + 6, y0 + 13, lo === null ? `hasta ${eur(hi)}` : range([lo, hi])));
  });
  return figure(
    "rings",
    H,
    "Anillos de servicio: población y coste de desplazamiento por visita",
    body,
    `Anillos de servicio: población y coste de ida y vuelta por visita a ${num(perKm)} €/km. Verde: dato de una fuente; dorado: estimación.`,
    "murcia-market.md §1.7 y §8.5",
  );
}

const charts = [y1Result(), cashScenarios(), breakEven(), sensitivity(), trajectory(), priceMap(), rings()];
writeFileSync(OUT, `${charts.join("\n\n")}\n`);
