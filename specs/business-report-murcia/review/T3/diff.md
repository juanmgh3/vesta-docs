class: medium

## git status --short -uall
```
 M business/research/murcia-model-data.json
 M business/research/murcia-model.mjs
 M specs/business-report-murcia/feature.md
?? .torq-flow/active
?? .torq-flow/run
?? business/reports/_src/murcia/ch-00-cover-toc.html
?? business/reports/_src/murcia/ch-01-resumen.html
?? business/reports/_src/murcia/ch-02-arranque.html
?? business/reports/_src/murcia/ch-03-empresa.html
?? business/reports/_src/murcia/ch-04-mercado.html
?? business/reports/_src/murcia/ch-05-competencia.html
?? business/reports/_src/murcia/ch-06-publico.html
?? business/reports/_src/murcia/ch-07-precios.html
?? business/reports/_src/murcia/ch-08-captacion.html
?? business/reports/_src/murcia/ch-09-costes.html
?? business/reports/_src/murcia/ch-10-proyecciones.html
?? business/reports/_src/murcia/ch-11-crecimiento.html
?? business/reports/_src/murcia/ch-12-riesgos.html
?? business/reports/_src/murcia/ch-13-glosario-fuentes.html
?? business/reports/_src/murcia/charts.html
?? business/reports/_template/build-charts.mjs
?? business/reports/_template/build-report.mjs
?? business/reports/business-report-murcia.html
?? specs/business-report-murcia/review/T3/brief.md
?? specs/business-report-murcia/review/T3/report.md
```

## git diff HEAD
```diff
diff --git a/business/research/murcia-model-data.json b/business/research/murcia-model-data.json
index f7d9c96..6d29eff 100644
--- a/business/research/murcia-model-data.json
+++ b/business/research/murcia-model-data.json
@@ -3799,8 +3799,8 @@
         },
         "granada": {
           "value": null,
-          "label": "FACT (1 source)",
-          "source": "granada-market.md §4 via murcia-market.md §5",
+          "label": "FACT (1 source, weak — no size split)",
+          "source": "granada-market.md §4, §7 G9 via murcia-market.md §5",
           "note": "desde €45, no size (Happy Clean)"
         }
       },
@@ -3844,7 +3844,7 @@
         "granada": {
           "value": null,
           "label": "FACT (1 source)",
-          "source": "granada-market.md §4 via murcia-market.md §5",
+          "source": "granada-market.md §3, §4 via murcia-market.md §5",
           "note": "Clean-Home add-on only"
         }
       },
@@ -3888,7 +3888,7 @@
         "granada": {
           "value": null,
           "label": "FACT (1 source)",
-          "source": "granada-market.md §4 via murcia-market.md §5",
+          "source": "granada-market.md §3, §4 via murcia-market.md §5",
           "note": "Clean-Home add-on only, +€35"
         }
       },
@@ -3935,7 +3935,7 @@
             79
           ],
           "label": "FACT (1 source)",
-          "source": "granada-market.md §4 via murcia-market.md §5",
+          "source": "granada-market.md §4, §7 G8 via murcia-market.md §5",
           "note": "Clean-Home"
         }
       },
@@ -3981,8 +3981,8 @@
             85,
             85
           ],
-          "label": "FACT (1 source)",
-          "source": "granada-market.md §4 via murcia-market.md §5",
+          "label": "FACT (1 source; same brand FACT-graded in Valencia)",
+          "source": "granada-market.md §4, §7 G7 via murcia-market.md §5",
           "note": "Clean-Home"
         }
       },
@@ -4028,8 +4028,8 @@
             89,
             99
           ],
-          "label": "FACT (1 source)",
-          "source": "granada-market.md §4 via murcia-market.md §5",
+          "label": "FACT (own site, this pass)",
+          "source": "granada-market.md §3 via murcia-market.md §5",
           "note": "Clean-Home"
         }
       },
@@ -4069,9 +4069,9 @@
         },
         "granada": {
           "value": null,
-          "label": "FACT (1 source)",
-          "source": "granada-market.md §4 via murcia-market.md §5",
-          "note": "desde €30 (Happy Clean)"
+          "label": "FACT (own site)",
+          "source": "granada-market.md §3, §4 via murcia-market.md §5",
+          "note": "desde €30 (Happy Clean); one data point, a directional signal only (§4)"
         }
       },
       {
@@ -4107,8 +4107,8 @@
         },
         "granada": {
           "value": null,
-          "label": "FACT (1 source)",
-          "source": "granada-market.md §4 via murcia-market.md §5",
+          "label": "FACT (own site)",
+          "source": "granada-market.md §3 via murcia-market.md §5",
           "note": "desde €5 (Happy Clean)"
         }
       }
diff --git a/business/research/murcia-model.mjs b/business/research/murcia-model.mjs
index 700933a..51a32a4 100644
--- a/business/research/murcia-model.mjs
+++ b/business/research/murcia-model.mjs
@@ -357,9 +357,8 @@ const fig = (value, label, source, extra = {}) => ({ value, label, source, ...ex
 const S5 = "murcia-market.md §5";
 const MAD = "market-dossier.md §2.1 via murcia-market.md §5";
 const VAL = "market-dossier.md §3.1 via murcia-market.md §5";
-const GRA = "granada-market.md §4 via murcia-market.md §5";
 const MAD_VAL_LABEL = "FACT — own sites";
-const GRA_LABEL = "FACT (1 source)";
+const gra = (value, note, label, sec) => ({ value, note, label, source: `granada-market.md ${sec} via murcia-market.md §5` });
 const RANGE5 = "Range FACT (5 sources)";
 const MED = "medians ESTIMATE";
 const priceRow = (service, n, rangeLabel, medianLabel, median, medianVat, range, madrid, valencia, granada) => ({
@@ -370,7 +369,7 @@ const priceRow = (service, n, rangeLabel, medianLabel, median, medianVat, range,
   murciaRange: fig(range, rangeLabel, S5),
   madrid: madrid === null ? fig(null, "NOT FOUND in dossier", S5) : fig(madrid, MAD_VAL_LABEL, MAD),
   valencia: valencia === null ? fig(null, "NOT FOUND in dossier", S5) : fig(valencia, MAD_VAL_LABEL, VAL),
-  granada: fig(granada.value, GRA_LABEL, GRA, { note: granada.note }),
+  granada: fig(granada.value, granada.label, granada.source, { note: granada.note }),
 });
 const gridFig = (value, sec, extra) => fig(value, "PROPOSAL", `pricing-decision.md ${sec}`, extra);
 const RING_SRC = "murcia-market.md §1.7";
@@ -379,14 +378,14 @@ const TRAVEL_SRC = "murcia-market.md §8.5";
 const market = {
   source: "murcia-market.md §5 (price map), §1.7 and §8.5 (rings); pricing-decision.md §4 (grids)",
   priceMap: [
-    priceRow("Colchón individual", 4, "Range FACT (4 sources)", MED, 52.5, 57.0, [36, 59], [35, 60], [25, 55], { value: null, note: "desde €45, no size (Happy Clean)" }),
-    priceRow("Colchón matrimonio", 4, "Range FACT (4 sources)", MED, 67, 70.8, [60, 100], [55, 90], [60, 75], { value: null, note: "Clean-Home add-on only" }),
-    priceRow("Colchón king", 2, "FACT (1 source), provisional per provider", "no median (n < 3)", null, null, [69, 120], [75, 100], [65, 100], { value: null, note: "Clean-Home add-on only, +€35" }),
-    priceRow("Sofá 2 plazas", 5, RANGE5, MED, 79, 79, [60, 90], [60, 97], [69, 89], { value: [79, 79], note: "Clean-Home" }),
-    priceRow("Sofá 3 plazas", 5, RANGE5, MED, 100, 100, [85, 120], [90, 119], [85, 119], { value: [85, 85], note: "Clean-Home" }),
-    priceRow("Chaise longue / L", 5, RANGE5, MED, 110, 110, [89, 180], [120, 175], [89, 190], { value: [89, 99], note: "Clean-Home" }),
-    priceRow("Sillón / butaca", 3, "Range FACT (3 sources)", MED, 40, 40, [30, 60], [42, 50], null, { value: null, note: "desde €30 (Happy Clean)" }),
-    priceRow("Silla", 3, "Range FACT (3 sources)", MED, 10, 10, [5, 20], null, null, { value: null, note: "desde €5 (Happy Clean)" }),
+    priceRow("Colchón individual", 4, "Range FACT (4 sources)", MED, 52.5, 57.0, [36, 59], [35, 60], [25, 55], gra(null, "desde €45, no size (Happy Clean)", "FACT (1 source, weak — no size split)", "§4, §7 G9")),
+    priceRow("Colchón matrimonio", 4, "Range FACT (4 sources)", MED, 67, 70.8, [60, 100], [55, 90], [60, 75], gra(null, "Clean-Home add-on only", "FACT (1 source)", "§3, §4")),
+    priceRow("Colchón king", 2, "FACT (1 source), provisional per provider", "no median (n < 3)", null, null, [69, 120], [75, 100], [65, 100], gra(null, "Clean-Home add-on only, +€35", "FACT (1 source)", "§3, §4")),
+    priceRow("Sofá 2 plazas", 5, RANGE5, MED, 79, 79, [60, 90], [60, 97], [69, 89], gra([79, 79], "Clean-Home", "FACT (1 source)", "§4, §7 G8")),
+    priceRow("Sofá 3 plazas", 5, RANGE5, MED, 100, 100, [85, 120], [90, 119], [85, 119], gra([85, 85], "Clean-Home", "FACT (1 source; same brand FACT-graded in Valencia)", "§4, §7 G7")),
+    priceRow("Chaise longue / L", 5, RANGE5, MED, 110, 110, [89, 180], [120, 175], [89, 190], gra([89, 99], "Clean-Home", "FACT (own site, this pass)", "§3")),
+    priceRow("Sillón / butaca", 3, "Range FACT (3 sources)", MED, 40, 40, [30, 60], [42, 50], null, gra(null, "desde €30 (Happy Clean); one data point, a directional signal only (§4)", "FACT (own site)", "§3, §4")),
+    priceRow("Silla", 3, "Range FACT (3 sources)", MED, 10, 10, [5, 20], null, null, gra(null, "desde €5 (Happy Clean)", "FACT (own site)", "§3")),
   ],
   grids: {
     A: {
diff --git a/specs/business-report-murcia/feature.md b/specs/business-report-murcia/feature.md
index 46e3891..63ee95f 100644
--- a/specs/business-report-murcia/feature.md
+++ b/specs/business-report-murcia/feature.md
@@ -146,7 +146,7 @@ case by someone who did the work, not as generated filler.
   source section as fields, and the pack price keeps its "~" as an `approx` flag.
   Regenerate the tables and JSON; the script stays deterministic. _Verify:_ `node business/research/murcia-model.mjs && node business/research/murcia-model.mjs && git status --short -- business/research/murcia-model-tables.md business/research/murcia-model-data.json; echo "exit $?"`.
   Accept: F-004 to F-008 are addressed; the trough row for A × conservador is ≤ −974; the B × realista year-1 result is unchanged at 4,768 unless a fix changes an input, in which case the report lists old and new values.
-- [ ] **T3 — Report skeleton, build script and charts** (structural). Write
+- [x] **T3 — Report skeleton, build script and charts** (structural). Write
   `build-report.mjs`: reads `ch-*.html` in order from `_src/murcia/`, inlines
   `report.css` and `embedded-assets.css`, inlines the chart SVGs from `charts.html` where
   a fragment has `<!-- chart:ID -->`, and writes `business-report-murcia.html`; no
@@ -236,3 +236,4 @@ case by someone who did the work, not as generated filler.
 | T1 | grep counts + numstat (structural) | docs | no package.json, no runner; baseline counts 0 / 0 (exit 1) | n/a (structural) | `grep -c "Addendum 2026-10-06"` → 2; `grep -c "business-report-murcia" README.md` → 2; numstat `20	0` | Triangulation skipped: structural docs task, verified by counts and 0-deletion numstat | none |
 | T2 | verify command + double-run sha256 (structural) | model script | no package.json, no runner; baseline verify `Error: Cannot find module '...\murcia-model.mjs'` (exit 1) | n/a (structural) | `node business/research/murcia-model.mjs && git diff --exit-code --stat -- …tables.md …data.json` → `exit 0` | Triangulation skipped: structural; outputs untracked so git diff is vacuous until commit — reproducibility shown by two runs with identical sha256 (tables `18129d61…`, json `88ad897d…`) | none |
 | T9 | verify command + double-run sha256 (structural) | model script | baseline verify on committed T2 outputs: empty `git status --short`, `exit 0` | n/a (structural) | verify → ` M …murcia-model-data.json` / ` M …murcia-model-tables.md` / `exit 0` (intended regeneration); A × conservador trough `−974 (Oct-2027)`, B × realista Y1 result `4,768` unchanged | Triangulation skipped: structural; two runs give identical sha256 (tables `257d0335…`, json `46c4e569…`) | none |
+| T3 | verify command + double-run sha256 (structural) | build scripts | model check `node business/research/murcia-model.mjs && git diff --exit-code --stat …` → `exit 0`; baseline verify `Error: Cannot find module '…\build-charts.mjs'` (exit 1) | n/a (structural) | build → `14 fragments, 8 svg`; `grep -c "<svg"` → 8; external-ref `grep -c` → 0 (grep's no-match `exit 1`) | Triangulation skipped: structural; two full runs (model + charts + report) give identical sha256 (charts `cc0e0d2a…`, report `58d8e8b4…`, json `9722af15…`, tables `257d0335…` unchanged); chapter titles diff TOC labels → exit 0; 7 captions carry a chip, 0 unfilled slots | sensitivity cells: trough text split onto two lines after a visual check showed overflow |
diff --git a/business/reports/_template/build-charts.mjs b/business/reports/_template/build-charts.mjs
new file mode 100644
index 0000000..a7b0563
--- /dev/null
+++ b/business/reports/_template/build-charts.mjs
@@ -0,0 +1,346 @@
+import { readFileSync, writeFileSync } from "node:fs";
+import { dirname, join } from "node:path";
+import { fileURLToPath } from "node:url";
+
+const HERE = dirname(fileURLToPath(import.meta.url));
+const DATA = JSON.parse(readFileSync(join(HERE, "..", "..", "research", "murcia-model-data.json"), "utf8"));
+const OUT = join(HERE, "..", "_src", "murcia", "charts.html");
+
+const W = 640;
+const MONTH_ES = { Jan: "ene", Feb: "feb", Mar: "mar", Apr: "abr", May: "may", Jun: "jun", Jul: "jul", Aug: "ago", Sep: "sep", Oct: "oct", Nov: "nov", Dec: "dic" };
+const SCEN_ES = { conservador: "Conservador", realista: "Realista", optimista: "Optimista" };
+const ARCH_ES = { A: "A · Penetración", B: "B · Igualar mercado", C: "C · Premium escalonado" };
+
+const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
+const c = (x) => +x.toFixed(1);
+const decimals = (x) => (String(x).split(".")[1] ?? "").length;
+const num = (x, d = decimals(x)) => {
+  const [int, frac] = Math.abs(x).toFixed(d).split(".");
+  const grouped = int.length > 4 ? int.replace(/\B(?=(\d{3})+(?!\d))/g, ".") : int;
+  const body = frac ? `${grouped},${frac}` : grouped;
+  return x < 0 ? `−${body}` : body;
+};
+const eur = (x) => `${num(x)} €`;
+const range = ([lo, hi]) => (lo === hi ? eur(lo) : `${num(lo)}–${num(hi)} €`);
+const month = (m) => {
+  const [mm, yy] = m.split("-");
+  return `${MONTH_ES[mm]} ${yy.slice(2)}`;
+};
+const when = (m) => (DATA.meta.months.includes(m) ? month(m) : `${month(m)}, pago IVA`);
+
+const line = (cls, x1, y1, x2, y2, attrs = "") =>
+  `<line class="${cls}" x1="${c(x1)}" y1="${c(y1)}" x2="${c(x2)}" y2="${c(y2)}"${attrs} />`;
+const rect = (cls, x, y, w, h) => `<rect class="${cls}" x="${c(x)}" y="${c(y)}" width="${c(w)}" height="${c(h)}" />`;
+const dot = (cls, x, y, r = 3.5) => `<circle class="${cls}" cx="${c(x)}" cy="${c(y)}" r="${r}" />`;
+const text = (cls, x, y, s, anchor = "start") =>
+  `<text class="${cls}" x="${c(x)}" y="${c(y)}"${anchor === "start" ? "" : ` text-anchor="${anchor}"`}>${esc(s)}</text>`;
+const polyline = (cls, pts, attrs = "") =>
+  `<polyline class="${cls}" points="${pts.map(([x, y]) => `${c(x)},${c(y)}`).join(" ")}"${attrs} />`;
+const scale = (d0, d1, r0, r1) => (v) => r0 + ((v - d0) / (d1 - d0)) * (r1 - r0);
+const ticks = (lo, hi, n = 4) => {
+  const raw = (hi - lo) / n;
+  const mag = 10 ** Math.floor(Math.log10(raw));
+  const step = [1, 2, 2.5, 5, 10].map((k) => k * mag).find((s) => s >= raw);
+  const first = Math.floor(lo / step);
+  const last = Math.ceil(hi / step);
+  const out = [];
+  for (let i = first; i <= last; i++) out.push(+(i * step).toFixed(6));
+  return out;
+};
+const yGrid = (ts, y, x0, x1) =>
+  ts.flatMap((t) => [
+    line(t === 0 ? "chart__axis" : "chart__grid", x0, y(t), x1, y(t)),
+    text("chart__axis-label", x0 - 6, y(t) + 4, num(t), "end"),
+  ]);
+
+const figure = (id, h, label, body, caption, source) =>
+  [
+    `<!-- chart:${id} -->`,
+    `<figure class="figure" id="fig-${id}">`,
+    `<svg class="chart" viewBox="0 0 ${W} ${h}" role="img" aria-label="${esc(label)}">`,
+    ...body,
+    "</svg>",
+    `<figcaption class="figure-caption">${esc(caption)} <span class="figure-caption__source">Fuente: ${esc(source)}.</span> <!-- chip --></figcaption>`,
+    "</figure>",
+    "<!-- /chart -->",
+  ].join("\n");
+
+function y1Result() {
+  const rows = DATA.year1.realista.B.rows;
+  const H = 270;
+  const L = 56;
+  const R = 12;
+  const T = 30;
+  const B = H - 34;
+  const vals = rows.map((r) => r.result);
+  const ts = ticks(Math.min(0, ...vals), Math.max(...vals));
+  const y = scale(ts[0], ts.at(-1), B, T);
+  const slot = (W - L - R) / rows.length;
+  const bw = slot * 0.6;
+  const body = [text("chart__axis-label", L, 14, "Resultado del mes, €"), ...yGrid(ts, y, L, W - R)];
+  rows.forEach((r, i) => {
+    const x = L + i * slot + (slot - bw) / 2;
+    const top = y(Math.max(0, r.result));
+    const bot = y(Math.min(0, r.result));
+    body.push(rect(r.result < 0 ? "chart__bar--neg" : "chart__bar", x, top, bw, bot - top));
+    body.push(text("chart__value", x + bw / 2, r.result < 0 ? bot + 14 : top - 5, num(r.result), "middle"));
+    body.push(text("chart__label", x + bw / 2, B + 22, month(r.month), "middle"));
+  });
+  return figure(
+    "y1-result",
+    H,
+    "Resultado mensual del año 1, arquitectura B, demanda realista",
+    body,
+    `Resultado mensual del año 1 (octubre 2026 – septiembre 2027), arquitectura B × demanda realista, sin IVA y antes de IRPF. Total del año: ${eur(DATA.year1.realista.B.summary.result)}.`,
+    "murcia-model-tables.md T1",
+  );
+}
+
+function cashScenarios() {
+  const labels = [...DATA.meta.months.map(month), "oct 27, IVA"];
+  const series = ["optimista", "realista", "conservador"].map((k) => {
+    const run = DATA.year1[k].B;
+    return { k, pts: [...run.rows.map((r) => r.cash), run.summary.endCash], s: run.summary };
+  });
+  const dash = { optimista: ' stroke-dasharray="2 4"', realista: "", conservador: ' stroke-dasharray="8 4"' };
+  const H = 300;
+  const L = 60;
+  const R = 150;
+  const T = 30;
+  const B = H - 34;
+  const all = series.flatMap((s) => s.pts);
+  const ts = ticks(Math.min(0, ...all), Math.max(...all));
+  const y = scale(ts[0], ts.at(-1), B, T);
+  const x = scale(0, labels.length - 1, L, W - R);
+  const body = [text("chart__axis-label", L, 14, "Caja acumulada, €"), ...yGrid(ts, y, L, W - R)];
+  labels.forEach((m, i) => {
+    if (i % 3 === 0 || i === labels.length - 1) body.push(text("chart__label", x(i), B + 22, m, "middle"));
+  });
+  for (const s of series) {
+    body.push(polyline("chart__line", s.pts.map((v, i) => [x(i), y(v)]), dash[s.k]));
+    const last = s.pts.at(-1);
+    body.push(text("chart__label", W - R + 8, y(last) + 4, `${SCEN_ES[s.k]}: ${eur(last)}`));
+    if (s.s.trough !== null) {
+      const i = DATA.meta.months.includes(s.s.troughMonth) ? DATA.meta.months.indexOf(s.s.troughMonth) : labels.length - 1;
+      body.push(dot("chart__bar--neg", x(i), y(s.s.trough)));
+      body.push(text("chart__value", x(i), y(s.s.trough) + 18, `mín. ${eur(s.s.trough)}`, i === 0 ? "start" : "middle"));
+    }
+  }
+  return figure(
+    "cash-scenarios",
+    H,
+    "Caja acumulada del año 1 con la arquitectura B en los tres escenarios de demanda",
+    body,
+    "Caja acumulada del año 1 con la arquitectura B en los tres escenarios de demanda, desde 0 € de caja inicial y sin préstamo. El último punto es el pago, en octubre de 2027, del IVA de julio–septiembre; los puntos rojos marcan el mínimo de caja que hay que poder cubrir.",
+    "murcia-model-data.json year1.*.B; murcia-model.md §2.4; murcia-model-tables.md T1 y T4",
+  );
+}
+
+function breakEven() {
+  const cap = DATA.inputs.capacityPieces;
+  const flat = DATA.inputs.fixedFlat;
+  const full = DATA.inputs.fixedFull;
+  const heading = {
+    fixedY1: (b) => `Solo costes fijos con tarifa plana (${b.cost} €/mes)`,
+    fixedAdsY1: (b) => `Fijos con tarifa plana + ${b.cost - flat} € de anuncios (${b.cost} €/mes)`,
+    fixedAdsFull: (b) => `Fijos sin tarifa plana + ${b.cost - full} € de anuncios (${b.cost} €/mes)`,
+  };
+  const L = 40;
+  const R = 16;
+  const T = 34;
+  const group = 18 + 3 * 17 + 10;
+  const H = T + DATA.breakEven.length * group + 26;
+  const ts = ticks(0, cap);
+  const x = scale(0, ts.at(-1), L, W - R);
+  const bottom = H - 22;
+  const body = [text("chart__axis-label", L, 14, "Piezas al mes para cubrir el coste")];
+  for (const t of ts) {
+    body.push(line(t === 0 ? "chart__axis" : "chart__grid", x(t), T - 6, x(t), bottom));
+    body.push(text("chart__axis-label", x(t), bottom + 16, num(t), "middle"));
+  }
+  body.push(line("chart__axis", x(cap), T - 10, x(cap), bottom, ' stroke-dasharray="4 3"'));
+  body.push(text("chart__label", x(cap) - 4, T - 14, `Capacidad de un operario: ${cap} piezas/mes`, "end"));
+  DATA.breakEven.forEach((b, g) => {
+    const y0 = T + g * group;
+    body.push(text("chart__value", L, y0 + 12, heading[b.key](b)));
+    ["A", "B", "C"].forEach((k, i) => {
+      const yb = y0 + 20 + i * 17;
+      body.push(text("chart__label", L - 8, yb + 10, k, "end"));
+      body.push(rect("chart__bar", x(0), yb, x(b[k].pieces) - x(0), 12));
+      body.push(text("chart__label", x(b[k].pieces) + 6, yb + 10, `${num(b[k].pieces)} piezas · ${num(b[k].visits)} visitas · ${num(b[k].capacityPct)} % de la capacidad`));
+    });
+  });
+  return figure(
+    "break-even",
+    H,
+    "Punto de equilibrio estructural en piezas al mes por arquitectura frente a la capacidad",
+    body,
+    `Punto de equilibrio estructural en piezas y visitas al mes por arquitectura (contribución a ${num(DATA.inputs.scenarios.realista.ppv)} piezas por visita), frente a la capacidad de un operario.`,
+    "murcia-model-tables.md T7",
+  );
+}
+
+function sensitivity() {
+  const env = DATA.envelope;
+  const scen = ["conservador", "realista", "optimista"];
+  const L = 150;
+  const T = 30;
+  const cw = (W - L) / 3;
+  const ch = 90;
+  const H = T + 3 * ch + 4;
+  const maxPos = Math.max(...env.map((e) => e.result), 0);
+  const maxNeg = Math.max(...env.map((e) => -e.result), 0);
+  const body = [];
+  scen.forEach((s, j) => body.push(text("chart__axis-label", L + j * cw + 10, T - 10, `Demanda ${s}`)));
+  ["A", "B", "C"].forEach((a, i) => {
+    const yc = T + i * ch;
+    body.push(text("chart__value", 0, yc + ch / 2 + 4, ARCH_ES[a]));
+    scen.forEach((s, j) => {
+      const e = env.find((v) => v.arch === a && v.scenario === s);
+      const xc = L + j * cw;
+      const span = cw - 24;
+      const zero = xc + 10 + (span * maxNeg) / (maxNeg + maxPos);
+      const w = (span * Math.abs(e.result)) / (maxNeg + maxPos);
+      body.push(rect("chart__grid", xc + 2, yc + 2, cw - 4, ch - 4));
+      body.push(text("chart__value", xc + 10, yc + 22, `Resultado ${eur(e.result)}`));
+      body.push(rect(e.result < 0 ? "chart__bar--neg" : "chart__bar", e.result < 0 ? zero - w : zero, yc + 32, w, 10));
+      body.push(line("chart__axis", zero, yc + 28, zero, yc + 46));
+      body.push(text("chart__label", xc + 10, yc + 62, e.trough === null ? "Caja ≥ 0 todo el año" : `Mínimo de caja ${eur(e.trough)}`));
+      if (e.trough !== null) body.push(text("chart__label", xc + 10, yc + 77, when(e.troughMonth)));
+    });
+  });
+  return figure(
+    "sensitivity",
+    H,
+    "Resultado del año 1 y mínimo de caja para tres arquitecturas y tres escenarios de demanda",
+    body,
+    "Resultado del año 1 y mínimo de caja sin colchón inicial, 3 arquitecturas de precio × 3 escenarios de demanda.",
+    "murcia-model-tables.md T4",
+  );
+}
+
+function trajectory() {
+  const y1 = DATA.year1.realista.B.summary;
+  const years = [
+    { year: 1, result: y1.result, operators: 1, owner: null },
+    ...DATA.longRun.realista.B.years.map((y) => ({ year: y.year, result: y.result, operators: y.operators, owner: y.ownerStateHolds })),
+  ];
+  const H = 300;
+  const L = 96;
+  const R = 12;
+  const T = 30;
+  const B = H - 70;
+  const ts = ticks(Math.min(0, ...years.map((y) => y.result)), Math.max(...years.map((y) => y.result)));
+  const y = scale(ts[0], ts.at(-1), B, T);
+  const slot = (W - L - R) / years.length;
+  const bw = slot * 0.55;
+  const body = [text("chart__axis-label", L, 14, "Resultado anual, €"), ...yGrid(ts, y, L, W - R)];
+  body.push(text("chart__label", L - 6, B + 38, "Operarios", "end"));
+  body.push(text("chart__label", L - 6, B + 56, "Propietario", "end"));
+  years.forEach((yr, i) => {
+    const xm = L + i * slot + slot / 2;
+    const top = y(Math.max(0, yr.result));
+    const bot = y(Math.min(0, yr.result));
+    body.push(rect(yr.result < 0 ? "chart__bar--neg" : "chart__bar", xm - bw / 2, top, bw, bot - top));
+    body.push(text("chart__value", xm, yr.result < 0 ? bot + 14 : top - 5, num(yr.result), "middle"));
+    body.push(text("chart__label", xm, B + 18, `Año ${yr.year}`, "middle"));
+    body.push(text("chart__label", xm, B + 38, String(yr.operators), "middle"));
+    body.push(text("chart__label", xm, B + 56, yr.owner === null ? "—" : yr.owner ? "sí" : "no", "middle"));
+  });
+  return figure(
+    "trajectory",
+    H,
+    "Resultado anual de los años 1 a 8, arquitectura B, demanda realista",
+    body,
+    "Resultado anual de los años 1 a 8, arquitectura B × demanda realista, con el número de operarios y si los operarios contratados cubren solos la demanda (estado de propietario).",
+    "murcia-model-tables.md T1 y T6; murcia-model.md §2.5",
+  );
+}
+
+function priceMap() {
+  const rows = DATA.market.priceMap;
+  const L = 150;
+  const R = 160;
+  const T = 30;
+  const group = 16 + 4 * 13 + 10;
+  const H = T + rows.length * group;
+  const ends = rows.flatMap((r) => [r.murciaRange.value, r.madrid.value, r.valencia.value, r.granada.value].filter(Boolean).map((v) => v[1]));
+  const ts = ticks(0, Math.max(...ends));
+  const x = scale(0, ts.at(-1), L, W - R);
+  const body = [];
+  for (const t of ts) {
+    body.push(line(t === 0 ? "chart__axis" : "chart__grid", x(t), T - 8, x(t), H - 6));
+    body.push(text("chart__axis-label", x(t), T - 14, `${num(t)} €`, "middle"));
+  }
+  const other = (v, yr) => {
+    if (v === null) return [text("chart__label", W - R + 8, yr + 4, "sin dato comparable")];
+    const out = [text("chart__label", W - R + 8, yr + 4, range(v))];
+    if (v[0] === v[1]) out.push(dot("chart__bar", x(v[0]), yr));
+    else out.push(line("chart__line", x(v[0]), yr, x(v[1]), yr));
+    return out;
+  };
+  rows.forEach((r, g) => {
+    const y0 = T + g * group;
+    body.push(text("chart__value", 0, y0 + 12, r.service));
+    const sub = (i) => y0 + 24 + i * 13;
+    ["Murcia", "Madrid", "Valencia", "Granada"].forEach((city, i) => body.push(text("chart__label", 12, sub(i) + 4, city)));
+    const [lo, hi] = r.murciaRange.value;
+    body.push(rect("chart__bar--aqua", x(lo), sub(0) - 4, x(hi) - x(lo), 8));
+    const med = r.murciaMedian.value;
+    if (med !== null) body.push(rect("chart__bar", x(med) - 1.25, sub(0) - 6, 2.5, 12));
+    body.push(text("chart__label", W - R + 8, sub(0) + 4, med === null ? `${range([lo, hi])} · sin mediana` : `${range([lo, hi])} · med. ${eur(med)}`));
+    body.push(...other(r.madrid.value, sub(1)));
+    body.push(...other(r.valencia.value, sub(2)));
+    body.push(...other(r.granada.value, sub(3)));
+  });
+  return figure(
+    "price-map",
+    H,
+    "Precios publicados por pieza en Murcia frente a Madrid, Valencia y Granada",
+    body,
+    "Precios publicados por pieza: rango de Murcia (barra) y mediana publicada (marca), frente a los rangos de Madrid y Valencia y las cifras de Granada. Bases de IVA mezcladas, como se publican.",
+    "murcia-market.md §5 (Madrid y Valencia: market-dossier.md §2.1 y §3.1; Granada: granada-market.md §3–§4)",
+  );
+}
+
+function rings() {
+  const scope = {
+    R1: ["Núcleo urbano,", "24 barrios"],
+    R2: ["Municipio +", "primer cinturón"],
+    R3: ["Anillo exterior:", "recargo o pedido mínimo"],
+  };
+  const rs = DATA.market.rings;
+  const T = 40;
+  const rh = 54;
+  const H = T + rs.length * rh;
+  const popX = scale(0, Math.max(...rs.map((r) => r.population.value)), 180, 350);
+  const travelX = scale(0, Math.max(...rs.map((r) => r.travel.value[1])), 440, 540);
+  const body = [
+    text("chart__axis-label", 180, 16, "Población"),
+    text("chart__axis-label", 440, 16, "Ida y vuelta, € por visita"),
+    line("chart__axis", 180, T - 8, 180, H - 4),
+    line("chart__axis", 440, T - 8, 440, H - 4),
+  ];
+  rs.forEach((r, i) => {
+    const y0 = T + i * rh;
+    body.push(text("chart__value", 0, y0 + 12, r.ring));
+    scope[r.ring].forEach((s, k) => body.push(text("chart__label", 28, y0 + 12 + k * 15, s)));
+    const pop = r.population;
+    body.push(rect(pop.label.startsWith("FACT") ? "chart__bar" : "chart__bar--estimate", 180, y0 + 2, popX(pop.value) - 180, 14));
+    body.push(text("chart__label", popX(pop.value) + 6, y0 + 13, num(pop.value)));
+    const [lo, hi] = r.travel.value;
+    body.push(rect("chart__bar--estimate", travelX(lo ?? 0), y0 + 2, travelX(hi) - travelX(lo ?? 0), 14));
+    body.push(text("chart__label", travelX(hi) + 6, y0 + 13, lo === null ? `hasta ${eur(hi)}` : range([lo, hi])));
+  });
+  return figure(
+    "rings",
+    H,
+    "Anillos de servicio: población y coste de desplazamiento por visita",
+    body,
+    "Anillos de servicio: población y coste de ida y vuelta por visita a 0,175 €/km. Verde: dato de una fuente; dorado: estimación.",
+    "murcia-market.md §1.7 y §8.5",
+  );
+}
+
+const charts = [y1Result(), cashScenarios(), breakEven(), sensitivity(), trajectory(), priceMap(), rings()];
+writeFileSync(OUT, `${charts.join("\n\n")}\n`);
diff --git a/business/reports/_template/build-report.mjs b/business/reports/_template/build-report.mjs
new file mode 100644
index 0000000..bd8e7d6
--- /dev/null
+++ b/business/reports/_template/build-report.mjs
@@ -0,0 +1,57 @@
+import { readFileSync, readdirSync, writeFileSync } from "node:fs";
+import { dirname, join } from "node:path";
+import { fileURLToPath } from "node:url";
+
+const HERE = dirname(fileURLToPath(import.meta.url));
+const REPORTS = join(HERE, "..");
+const SRC = join(REPORTS, "_src", "murcia");
+const OUT = join(REPORTS, "business-report-murcia.html");
+const BLOCK = /<!-- chart:([\w-]+) -->([\s\S]*?)<!-- \/chart -->/g;
+const EXTERNAL = /(?:href|src)\s*=\s*["']?\s*(?:https?:)?\/\/|url\(\s*["']?\s*(?:https?:)?\/\/|@import/i;
+
+const read = (p) => readFileSync(p, "utf8").replace(/\r\n/g, "\n");
+
+const charts = new Map([...read(join(SRC, "charts.html")).matchAll(BLOCK)].map((m) => [m[1], m[2].trim()]));
+
+const place = (html, file) => {
+  const out = html.replace(BLOCK, (_, id, chip) => {
+    const fig = charts.get(id);
+    if (!fig) throw new Error(`${file}: unknown chart "${id}"`);
+    if (!chip.trim()) throw new Error(`${file}: chart "${id}" has no chip`);
+    return fig.replace("<!-- chip -->", chip.trim());
+  });
+  if (out.includes("<!-- chart:")) throw new Error(`${file}: chart marker without <!-- /chart -->`);
+  return out;
+};
+
+const fragments = readdirSync(SRC)
+  .filter((f) => /^ch-\d{2}-.+\.html$/.test(f))
+  .sort()
+  .map((f) => place(read(join(SRC, f)).trim(), f));
+
+const html = `<!doctype html>
+<html lang="es">
+<head>
+<meta charset="utf-8" />
+<meta name="viewport" content="width=device-width, initial-scale=1" />
+<title>Informe de negocio — Grupo Vesta · Murcia</title>
+<style>
+${read(join(HERE, "embedded-assets.css")).trim()}
+
+${read(join(HERE, "report.css")).trim()}
+</style>
+</head>
+<body>
+<div class="running-foot">Grupo Vesta · Documento interno</div>
+<article class="report">
+${fragments.join("\n\n")}
+</article>
+</body>
+</html>
+`;
+
+const external = html.match(EXTERNAL);
+if (external) throw new Error(`external reference in output: ${external[0]}`);
+
+writeFileSync(OUT, html);
+console.log(`${OUT}: ${fragments.length} fragments, ${(html.match(/<svg/g) ?? []).length} svg, ${html.length} chars`);
diff --git a/business/reports/_src/murcia/ch-00-cover-toc.html b/business/reports/_src/murcia/ch-00-cover-toc.html
new file mode 100644
index 0000000..b1b79dc
--- /dev/null
+++ b/business/reports/_src/murcia/ch-00-cover-toc.html
@@ -0,0 +1,57 @@
+<section class="cover">
+  <p class="cover__wordmark">
+    <svg role="img" aria-label="Grupo Vesta" viewBox="0 0 2000 2000" style="fill-rule: evenodd; clip-rule: evenodd; stroke-linejoin: round; stroke-miterlimit: 2">
+      <g transform="matrix(6.172781,0,0,6.172781,-1231.25204,-375.905385)">
+        <path d="M452.42,112.136C446.49,113.98 445.99,114.399 440.341,128.429C439.688,130.051 406.029,209.678 402.771,217.607C402.239,218.901 398.656,227.622 395.921,233.696C394.409,237.053 394.324,242.417 395.877,245.324C396.458,246.413 396.845,246.344 396.597,247.538C396.351,248.721 394.761,248.2 379.499,248.355C377.719,248.373 337.18,248.376 333.5,248.377C328.786,248.377 326.719,248.535 326.509,247.497C326.088,245.414 330.867,242.596 326.638,232.447C311.601,196.353 291.314,149.167 289.079,143.669C288.62,142.54 288.464,142.619 283.131,129.644C281.198,124.94 281.069,125.01 278.735,119.41C274.979,110.398 267.964,113.041 267.055,110.705C266.688,109.76 266.594,106.154 267.389,105.374C268.039,104.736 268.224,105.036 309.505,104.915C318.482,104.888 319.575,104.729 320.349,105.613C321.445,106.865 320.076,109.439 319.921,109.731C316.687,115.811 320.751,121.314 324.909,133.367C325.247,134.348 325.39,134.28 329.477,145.509C329.97,146.864 330.085,146.818 335.877,162.358C337.134,165.732 337.9,167.364 339.658,172.442C341.861,178.803 344.729,185.669 346.987,192.351C347.425,193.644 347.584,193.578 352.933,208.353C352.961,208.43 359.537,225.61 360.447,228.527C360.502,228.704 361.026,230.385 362.21,230.042C362.742,229.888 362.328,229.566 364.358,224.446C364.796,223.341 364.667,223.298 369.458,210.484C378.98,185.023 395.926,138.901 398.215,133.375C398.685,132.242 400.556,126.826 402.318,122.428C406.697,111.495 402.736,111.137 402.454,107.502C402.265,105.052 403.849,104.978 405.501,104.936C405.861,104.926 454.071,104.869 454.461,104.949C456.253,105.318 456.235,105.692 456.254,107.508C456.256,107.74 456.28,110.075 456.148,110.408C455.667,111.626 454.904,111.751 452.42,112.136Z" style="fill: rgb(0, 125, 118)" />
+        <path d="M318.501,251.89C341.166,251.893 363.831,251.897 386.496,251.9C405.826,251.958 406.509,251.609 407.324,252.637C408.07,253.58 407.875,259.758 407.536,260.519C407.121,261.452 406.732,261.334 395.499,261.36C385.505,261.383 385.513,261.343 354.501,261.346C316.961,261.35 316.973,261.35 316.557,261.279C315.276,261.061 314.92,260.534 315.105,254.483C315.107,254.414 314.935,252.536 316.603,251.962C316.603,251.962 318.349,251.896 318.501,251.89Z" style="fill: rgb(0, 125, 118)" />
+        <g transform="matrix(1.147521,0,0,0.625856,-53.150097,106.243988)">
+          <path d="M318.501,251.89C341.166,251.893 363.831,251.897 386.496,251.9C405.826,251.958 406.509,251.609 407.324,252.637C408.07,253.58 407.875,259.758 407.536,260.519C407.121,261.452 406.732,261.334 395.499,261.36C385.505,261.383 385.513,261.343 354.501,261.346C316.961,261.35 316.973,261.35 316.557,261.279C315.276,261.061 314.92,260.534 315.105,254.483C315.107,254.414 314.935,252.536 316.603,251.962C316.603,251.962 318.349,251.896 318.501,251.89Z" style="fill: rgb(0, 125, 118)" />
+        </g>
+        <g transform="matrix(-1,0,0,1,587.233301,0)">
+          <path d="M264.384,99.657C262.284,98.023 260.966,97.348 260.759,95.475C260.235,90.733 262.586,91.212 263.498,91.197C265.096,91.17 321.697,91.177 323.506,91.195C325.153,91.212 326.372,91.192 326.526,93.498C326.764,97.052 325.154,97.764 324.896,97.986C321.159,101.203 320.571,101.14 319.477,101.215C318.65,101.271 290.336,101.291 276.506,101.234C267.226,101.196 266.97,101.592 264.384,99.657Z" style="fill: rgb(0, 125, 118)" />
+        </g>
+        <g transform="matrix(1,0,0,1,135.699249,-0.093329)">
+          <path d="M264.384,99.657C262.284,98.023 260.966,97.348 260.759,95.475C260.235,90.733 262.586,91.212 263.498,91.197C265.096,91.17 321.697,91.177 323.506,91.195C325.153,91.212 326.372,91.192 326.526,93.498C326.764,97.052 325.154,97.764 324.896,97.986C321.159,101.203 320.571,101.14 319.477,101.215C318.65,101.271 290.336,101.291 276.506,101.234C267.226,101.196 266.97,101.592 264.384,99.657Z" style="fill: rgb(0, 125, 118)" />
+        </g>
+      </g>
+      <g transform="matrix(0.949394,0,0,0.949394,-118.739024,985.829759)">
+        <text x="167.856px" y="863.007px" style="font-family: &quot;LoraRoman-Regular&quot;, &quot;Lora&quot;; font-size: 558.914px; fill: rgb(0, 125, 118)">V<tspan x="602.691px 1020.199px 1406.967px 1834.536px " y="863.007px 863.007px 863.007px 863.007px ">ESTA</tspan></text>
+      </g>
+    </svg>
+  </p>
+
+  <div class="cover__body">
+    <p class="cover__eyebrow">Documento interno</p>
+    <h1 class="cover__title">Informe de negocio — Grupo Vesta · Murcia</h1>
+    <p class="cover__subtitle">Mercado, competencia, cliente, precios, costes y proyecciones para el arranque en Murcia</p>
+    <div class="cover__flourish"><span></span></div>
+    <p class="cover__meta">Documento interno · octubre 2026</p>
+  </div>
+
+  <div class="cover__legend">
+    <span class="chip chip--fact">Fact</span>
+    <span class="chip chip--estimate">Estimate</span>
+    <span class="chip chip--hypothesis">Hypothesis</span>
+    <span class="chip chip--analysis">Analysis</span>
+    <span class="chip chip--notfound">Not found</span>
+  </div>
+</section>
+
+<nav class="toc" aria-label="Índice">
+  <h2 class="toc__title">Índice</h2>
+  <ol class="toc__list">
+    <li><a class="toc__row" href="#cap-1"><span class="toc__num">01</span><span class="toc__label">Resumen ejecutivo</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
+    <li><a class="toc__row" href="#cap-2"><span class="toc__num">02</span><span class="toc__label">Las dos primeras semanas</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
+    <li><a class="toc__row" href="#cap-3"><span class="toc__num">03</span><span class="toc__label">La empresa y el servicio</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
+    <li><a class="toc__row" href="#cap-4"><span class="toc__num">04</span><span class="toc__label">El mercado de Murcia</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
+    <li><a class="toc__row" href="#cap-5"><span class="toc__num">05</span><span class="toc__label">La competencia</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
+    <li><a class="toc__row" href="#cap-6"><span class="toc__num">06</span><span class="toc__label">El cliente y cómo llegar a él</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
+    <li><a class="toc__row" href="#cap-7"><span class="toc__num">07</span><span class="toc__label">Precios</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
+    <li><a class="toc__row" href="#cap-8"><span class="toc__num">08</span><span class="toc__label">Captación de clientes</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
+    <li><a class="toc__row" href="#cap-9"><span class="toc__num">09</span><span class="toc__label">Costes por servicio y costes fijos</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
+    <li><a class="toc__row" href="#cap-10"><span class="toc__num">10</span><span class="toc__label">Proyecciones</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
+    <li><a class="toc__row" href="#cap-11"><span class="toc__num">11</span><span class="toc__label">Crecimiento: segundo operario y segunda máquina</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
+    <li><a class="toc__row" href="#cap-12"><span class="toc__num">12</span><span class="toc__label">Riesgos y supuestos</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
+    <li><a class="toc__row" href="#cap-13"><span class="toc__num">13</span><span class="toc__label">Glosario y fuentes</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
+  </ol>
+</nav>
diff --git a/business/reports/_src/murcia/ch-01-resumen.html b/business/reports/_src/murcia/ch-01-resumen.html
new file mode 100644
index 0000000..e5797e5
--- /dev/null
+++ b/business/reports/_src/murcia/ch-01-resumen.html
@@ -0,0 +1,7 @@
+<section class="chapter" id="cap-1">
+  <header class="chapter-header">
+    <p class="chapter-header__num">01</p>
+    <p class="eyebrow">El caso</p>
+    <h2 class="chapter-header__title">Resumen ejecutivo</h2>
+  </header>
+</section>
diff --git a/business/reports/_src/murcia/ch-04-mercado.html b/business/reports/_src/murcia/ch-04-mercado.html
new file mode 100644
index 0000000..758dc25
--- /dev/null
+++ b/business/reports/_src/murcia/ch-04-mercado.html
@@ -0,0 +1,8 @@
+<section class="chapter" id="cap-4">
+  <header class="chapter-header">
+    <p class="chapter-header__num">04</p>
+    <p class="eyebrow">Mercado</p>
+    <h2 class="chapter-header__title">El mercado de Murcia</h2>
+  </header>
+  <!-- chart:rings --><span class="chip chip--fact">Fact</span> <span class="chip chip--estimate">Estimate</span><!-- /chart -->
+</section>
diff --git a/business/reports/_src/murcia/ch-10-proyecciones.html b/business/reports/_src/murcia/ch-10-proyecciones.html
new file mode 100644
index 0000000..59d7ae3
--- /dev/null
+++ b/business/reports/_src/murcia/ch-10-proyecciones.html
@@ -0,0 +1,12 @@
+<section class="chapter" id="cap-10">
+  <header class="chapter-header">
+    <p class="chapter-header__num">10</p>
+    <p class="eyebrow">Proyecciones</p>
+    <h2 class="chapter-header__title">Proyecciones</h2>
+  </header>
+  <!-- chart:y1-result --><span class="chip chip--estimate">Estimate</span><!-- /chart -->
+  <!-- chart:cash-scenarios --><span class="chip chip--estimate">Estimate</span><!-- /chart -->
+  <!-- chart:sensitivity --><span class="chip chip--estimate">Estimate</span><!-- /chart -->
+  <!-- chart:trajectory --><span class="chip chip--hypothesis">Hypothesis</span><!-- /chart -->
+  <!-- chart:break-even --><span class="chip chip--estimate">Estimate</span><!-- /chart -->
+</section>
diff --git a/business/reports/_src/murcia/charts.html b/business/reports/_src/murcia/charts.html
new file mode 100644
index 0000000..4dbdd29
--- /dev/null
+++ b/business/reports/_src/murcia/charts.html
@@ -0,0 +1,419 @@
+<!-- chart:y1-result -->
+<figure class="figure" id="fig-y1-result">
+<svg class="chart" viewBox="0 0 640 270" role="img" aria-label="Resultado mensual del año 1, arquitectura B, demanda realista">
+<text class="chart__axis-label" x="56" y="14">Resultado del mes, €</text>
+<line class="chart__grid" x1="56" y1="236" x2="628" y2="236" />
+<text class="chart__axis-label" x="50" y="240" text-anchor="end">−500</text>
+<line class="chart__axis" x1="56" y1="184.5" x2="628" y2="184.5" />
+<text class="chart__axis-label" x="50" y="188.5" text-anchor="end">0</text>
+<line class="chart__grid" x1="56" y1="133" x2="628" y2="133" />
+<text class="chart__axis-label" x="50" y="137" text-anchor="end">500</text>
+<line class="chart__grid" x1="56" y1="81.5" x2="628" y2="81.5" />
+<text class="chart__axis-label" x="50" y="85.5" text-anchor="end">1000</text>
+<line class="chart__grid" x1="56" y1="30" x2="628" y2="30" />
+<text class="chart__axis-label" x="50" y="34" text-anchor="end">1500</text>
+<rect class="chart__bar--neg" x="65.5" y="184.5" width="28.6" height="14.1" />
+<text class="chart__value" x="79.8" y="212.6" text-anchor="middle">−137</text>
+<text class="chart__label" x="79.8" y="258" text-anchor="middle">oct 26</text>
+<rect class="chart__bar" x="113.2" y="183.2" width="28.6" height="1.3" />
+<text class="chart__value" x="127.5" y="178.2" text-anchor="middle">13</text>
+<text class="chart__label" x="127.5" y="258" text-anchor="middle">nov 26</text>
+<rect class="chart__bar--neg" x="160.9" y="184.5" width="28.6" height="3.8" />
+<text class="chart__value" x="175.2" y="202.3" text-anchor="middle">−37</text>
+<text class="chart__label" x="175.2" y="258" text-anchor="middle">dic 26</text>
+<rect class="chart__bar" x="208.5" y="173" width="28.6" height="11.5" />
+<text class="chart__value" x="222.8" y="168" text-anchor="middle">112</text>
+<text class="chart__label" x="222.8" y="258" text-anchor="middle">ene 27</text>
+<rect class="chart__bar" x="256.2" y="162.7" width="28.6" height="21.8" />
+<text class="chart__value" x="270.5" y="157.7" text-anchor="middle">212</text>
+<text class="chart__label" x="270.5" y="258" text-anchor="middle">feb 27</text>
+<rect class="chart__bar" x="303.9" y="147.3" width="28.6" height="37.2" />
+<text class="chart__value" x="318.2" y="142.3" text-anchor="middle">361</text>
+<text class="chart__label" x="318.2" y="258" text-anchor="middle">mar 27</text>
+<rect class="chart__bar" x="351.5" y="137" width="28.6" height="47.5" />
+<text class="chart__value" x="365.8" y="132" text-anchor="middle">461</text>
+<text class="chart__label" x="365.8" y="258" text-anchor="middle">abr 27</text>
+<rect class="chart__bar" x="399.2" y="126.8" width="28.6" height="57.7" />
+<text class="chart__value" x="413.5" y="121.8" text-anchor="middle">560</text>
+<text class="chart__label" x="413.5" y="258" text-anchor="middle">may 27</text>
+<rect class="chart__bar" x="446.9" y="111.5" width="28.6" height="73" />
+<text class="chart__value" x="461.2" y="106.5" text-anchor="middle">709</text>
+<text class="chart__label" x="461.2" y="258" text-anchor="middle">jun 27</text>
+<rect class="chart__bar" x="494.5" y="118.7" width="28.6" height="65.8" />
+<text class="chart__value" x="508.8" y="113.7" text-anchor="middle">639</text>
+<text class="chart__label" x="508.8" y="258" text-anchor="middle">jul 27</text>
+<rect class="chart__bar" x="542.2" y="98.2" width="28.6" height="86.3" />
+<text class="chart__value" x="556.5" y="93.2" text-anchor="middle">838</text>
+<text class="chart__label" x="556.5" y="258" text-anchor="middle">ago 27</text>
+<rect class="chart__bar" x="589.9" y="77.6" width="28.6" height="106.9" />
+<text class="chart__value" x="604.2" y="72.6" text-anchor="middle">1038</text>
+<text class="chart__label" x="604.2" y="258" text-anchor="middle">sep 27</text>
+</svg>
+<figcaption class="figure-caption">Resultado mensual del año 1 (octubre 2026 – septiembre 2027), arquitectura B × demanda realista, sin IVA y antes de IRPF. Total del año: 4768 €. <span class="figure-caption__source">Fuente: murcia-model-tables.md T1.</span> <!-- chip --></figcaption>
+</figure>
+<!-- /chart -->
+
+<!-- chart:cash-scenarios -->
+<figure class="figure" id="fig-cash-scenarios">
+<svg class="chart" viewBox="0 0 640 300" role="img" aria-label="Caja acumulada del año 1 con la arquitectura B en los tres escenarios de demanda">
+<text class="chart__axis-label" x="60" y="14">Caja acumulada, €</text>
+<line class="chart__grid" x1="60" y1="266" x2="490" y2="266" />
+<text class="chart__axis-label" x="54" y="270" text-anchor="end">−5000</text>
+<line class="chart__axis" x1="60" y1="207" x2="490" y2="207" />
+<text class="chart__axis-label" x="54" y="211" text-anchor="end">0</text>
+<line class="chart__grid" x1="60" y1="148" x2="490" y2="148" />
+<text class="chart__axis-label" x="54" y="152" text-anchor="end">5000</text>
+<line class="chart__grid" x1="60" y1="89" x2="490" y2="89" />
+<text class="chart__axis-label" x="54" y="93" text-anchor="end">10.000</text>
+<line class="chart__grid" x1="60" y1="30" x2="490" y2="30" />
+<text class="chart__axis-label" x="54" y="34" text-anchor="end">15.000</text>
+<text class="chart__label" x="60" y="288" text-anchor="middle">oct 26</text>
+<text class="chart__label" x="167.5" y="288" text-anchor="middle">ene 27</text>
+<text class="chart__label" x="275" y="288" text-anchor="middle">abr 27</text>
+<text class="chart__label" x="382.5" y="288" text-anchor="middle">jul 27</text>
+<text class="chart__label" x="490" y="288" text-anchor="middle">oct 27, IVA</text>
+<polyline class="chart__line" points="60,205.1 95.8,200.6 131.7,193.4 167.5,189.6 203.3,178.8 239.2,165.4 275,157.8 310.8,136.9 346.7,111.7 382.5,101.7 418.3,71.1 454.2,37.3 490,60.2" stroke-dasharray="2 4" />
+<text class="chart__label" x="498" y="64.2">Optimista: 12.444 €</text>
+<polyline class="chart__line" points="60,208.1 95.8,206.9 131.7,206.2 167.5,206 203.3,201.6 239.2,195 275,192.7 310.8,183.2 346.7,171.3 382.5,169.1 418.3,155 454.2,137.9 490,150.7" />
+<text class="chart__label" x="498" y="154.7">Realista: 4768 €</text>
+<circle class="chart__bar--neg" cx="60" cy="208.1" r="3.5" />
+<text class="chart__value" x="60" y="226.1">mín. −91 €</text>
+<polyline class="chart__line" points="60,209.8 95.8,211.4 131.7,211.7 167.5,213.5 203.3,212.7 239.2,211.9 275,212.3 310.8,210.3 346.7,207.1 382.5,208.3 418.3,204.8 454.2,200 490,205.4" stroke-dasharray="8 4" />
+<text class="chart__label" x="498" y="209.4">Conservador: 139 €</text>
+<circle class="chart__bar--neg" cx="167.5" cy="213.5" r="3.5" />
+<text class="chart__value" x="167.5" y="231.5" text-anchor="middle">mín. −548 €</text>
+</svg>
+<figcaption class="figure-caption">Caja acumulada del año 1 con la arquitectura B en los tres escenarios de demanda, desde 0 € de caja inicial y sin préstamo. El último punto es el pago, en octubre de 2027, del IVA de julio–septiembre; los puntos rojos marcan el mínimo de caja que hay que poder cubrir. <span class="figure-caption__source">Fuente: murcia-model-data.json year1.*.B; murcia-model.md §2.4; murcia-model-tables.md T1 y T4.</span> <!-- chip --></figcaption>
+</figure>
+<!-- /chart -->
+
+<!-- chart:break-even -->
+<figure class="figure" id="fig-break-even">
+<svg class="chart" viewBox="0 0 640 297" role="img" aria-label="Punto de equilibrio estructural en piezas al mes por arquitectura frente a la capacidad">
+<text class="chart__axis-label" x="40" y="14">Piezas al mes para cubrir el coste</text>
+<line class="chart__axis" x1="40" y1="28" x2="40" y2="275" />
+<text class="chart__axis-label" x="40" y="291" text-anchor="middle">0</text>
+<line class="chart__grid" x1="186" y1="28" x2="186" y2="275" />
+<text class="chart__axis-label" x="186" y="291" text-anchor="middle">25</text>
+<line class="chart__grid" x1="332" y1="28" x2="332" y2="275" />
+<text class="chart__axis-label" x="332" y="291" text-anchor="middle">50</text>
+<line class="chart__grid" x1="478" y1="28" x2="478" y2="275" />
+<text class="chart__axis-label" x="478" y="291" text-anchor="middle">75</text>
+<line class="chart__grid" x1="624" y1="28" x2="624" y2="275" />
+<text class="chart__axis-label" x="624" y="291" text-anchor="middle">100</text>
+<line class="chart__axis" x1="553.9" y1="24" x2="553.9" y2="275" stroke-dasharray="4 3" />
+<text class="chart__label" x="549.9" y="20" text-anchor="end">Capacidad de un operario: 88 piezas/mes</text>
+<text class="chart__value" x="40" y="46">Solo costes fijos con tarifa plana (186 €/mes)</text>
+<text class="chart__label" x="32" y="64" text-anchor="end">A</text>
+<rect class="chart__bar" x="40" y="54" width="25.7" height="12" />
+<text class="chart__label" x="71.7" y="64">4,4 piezas · 2,4 visitas · 5 % de la capacidad</text>
+<text class="chart__label" x="32" y="81" text-anchor="end">B</text>
+<rect class="chart__bar" x="40" y="71" width="19.9" height="12" />
+<text class="chart__label" x="65.9" y="81">3,4 piezas · 1,9 visitas · 3,8 % de la capacidad</text>
+<text class="chart__label" x="32" y="98" text-anchor="end">C</text>
+<rect class="chart__bar" x="40" y="88" width="16.9" height="12" />
+<text class="chart__label" x="62.9" y="98">2,9 piezas · 1,6 visitas · 3,3 % de la capacidad</text>
+<text class="chart__value" x="40" y="125">Fijos con tarifa plana + 300 € de anuncios (486 €/mes)</text>
+<text class="chart__label" x="32" y="143" text-anchor="end">A</text>
+<rect class="chart__bar" x="40" y="133" width="67.2" height="12" />
+<text class="chart__label" x="113.2" y="143">11,5 piezas · 6,4 visitas · 13 % de la capacidad</text>
+<text class="chart__label" x="32" y="160" text-anchor="end">B</text>
+<rect class="chart__bar" x="40" y="150" width="51.4" height="12" />
+<text class="chart__label" x="97.4" y="160">8,8 piezas · 4,9 visitas · 10 % de la capacidad</text>
+<text class="chart__label" x="32" y="177" text-anchor="end">C</text>
+<rect class="chart__bar" x="40" y="167" width="44.4" height="12" />
+<text class="chart__label" x="90.4" y="177">7,6 piezas · 4,2 visitas · 8,6 % de la capacidad</text>
+<text class="chart__value" x="40" y="204">Fijos sin tarifa plana + 300 € de anuncios (656 €/mes)</text>
+<text class="chart__label" x="32" y="222" text-anchor="end">A</text>
+<rect class="chart__bar" x="40" y="212" width="90.5" height="12" />
+<text class="chart__label" x="136.5" y="222">15,5 piezas · 8,6 visitas · 17,6 % de la capacidad</text>
+<text class="chart__label" x="32" y="239" text-anchor="end">B</text>
+<rect class="chart__bar" x="40" y="229" width="68.9" height="12" />
+<text class="chart__label" x="114.9" y="239">11,8 piezas · 6,6 visitas · 13,5 % de la capacidad</text>
+<text class="chart__label" x="32" y="256" text-anchor="end">C</text>
+<rect class="chart__bar" x="40" y="246" width="60.2" height="12" />
+<text class="chart__label" x="106.2" y="256">10,3 piezas · 5,7 visitas · 11,7 % de la capacidad</text>
+</svg>
+<figcaption class="figure-caption">Punto de equilibrio estructural en piezas y visitas al mes por arquitectura (contribución a 1,8 piezas por visita), frente a la capacidad de un operario. <span class="figure-caption__source">Fuente: murcia-model-tables.md T7.</span> <!-- chip --></figcaption>
+</figure>
+<!-- /chart -->
+
+<!-- chart:sensitivity -->
+<figure class="figure" id="fig-sensitivity">
+<svg class="chart" viewBox="0 0 640 304" role="img" aria-label="Resultado del año 1 y mínimo de caja para tres arquitecturas y tres escenarios de demanda">
+<text class="chart__axis-label" x="160" y="20">Demanda conservador</text>
+<text class="chart__axis-label" x="323.3" y="20">Demanda realista</text>
+<text class="chart__axis-label" x="486.7" y="20">Demanda optimista</text>
+<text class="chart__value" x="0" y="79">A · Penetración</text>
+<rect class="chart__grid" x="152" y="32" width="159.3" height="86" />
+<text class="chart__value" x="160" y="52">Resultado −974 €</text>
+<rect class="chart__bar--neg" x="160" y="62" width="8.2" height="10" />
+<line class="chart__axis" x1="168.2" y1="58" x2="168.2" y2="76" />
+<text class="chart__label" x="160" y="92">Mínimo de caja −974 €</text>
+<text class="chart__label" x="160" y="107">oct 27, pago IVA</text>
+<rect class="chart__grid" x="315.3" y="32" width="159.3" height="86" />
+<text class="chart__value" x="323.3" y="52">Resultado 2097 €</text>
+<rect class="chart__bar" x="331.5" y="62" width="17.7" height="10" />
+<line class="chart__axis" x1="331.5" y1="58" x2="331.5" y2="76" />
+<text class="chart__label" x="323.3" y="92">Mínimo de caja −318 €</text>
+<text class="chart__label" x="323.3" y="107">ene 27</text>
+<rect class="chart__grid" x="478.7" y="32" width="159.3" height="86" />
+<text class="chart__value" x="486.7" y="52">Resultado 7654 €</text>
+<rect class="chart__bar" x="494.9" y="62" width="64.4" height="10" />
+<line class="chart__axis" x1="494.9" y1="58" x2="494.9" y2="76" />
+<text class="chart__label" x="486.7" y="92">Caja ≥ 0 todo el año</text>
+<text class="chart__value" x="0" y="169">B · Igualar mercado</text>
+<rect class="chart__grid" x="152" y="122" width="159.3" height="86" />
+<text class="chart__value" x="160" y="142">Resultado 139 €</text>
+<rect class="chart__bar" x="168.2" y="152" width="1.2" height="10" />
+<line class="chart__axis" x1="168.2" y1="148" x2="168.2" y2="166" />
+<text class="chart__label" x="160" y="182">Mínimo de caja −548 €</text>
+<text class="chart__label" x="160" y="197">ene 27</text>
+<rect class="chart__grid" x="315.3" y="122" width="159.3" height="86" />
+<text class="chart__value" x="323.3" y="142">Resultado 4768 €</text>
+<rect class="chart__bar" x="331.5" y="152" width="40.1" height="10" />
+<line class="chart__axis" x1="331.5" y1="148" x2="331.5" y2="166" />
+<text class="chart__label" x="323.3" y="182">Mínimo de caja −91 €</text>
+<text class="chart__label" x="323.3" y="197">oct 26</text>
+<rect class="chart__grid" x="478.7" y="122" width="159.3" height="86" />
+<text class="chart__value" x="486.7" y="142">Resultado 12.444 €</text>
+<rect class="chart__bar" x="494.9" y="152" width="104.7" height="10" />
+<line class="chart__axis" x1="494.9" y1="148" x2="494.9" y2="166" />
+<text class="chart__label" x="486.7" y="182">Caja ≥ 0 todo el año</text>
+<text class="chart__value" x="0" y="259">C · Premium escalonado</text>
+<rect class="chart__grid" x="152" y="212" width="159.3" height="86" />
+<text class="chart__value" x="160" y="232">Resultado 868 €</text>
+<rect class="chart__bar" x="168.2" y="242" width="7.3" height="10" />
+<line class="chart__axis" x1="168.2" y1="238" x2="168.2" y2="256" />
+<text class="chart__label" x="160" y="272">Mínimo de caja −425 €</text>
+<text class="chart__label" x="160" y="287">ene 27</text>
+<rect class="chart__grid" x="315.3" y="212" width="159.3" height="86" />
+<text class="chart__value" x="323.3" y="232">Resultado 6517 €</text>
+<rect class="chart__bar" x="331.5" y="242" width="54.9" height="10" />
+<line class="chart__axis" x1="331.5" y1="238" x2="331.5" y2="256" />
+<text class="chart__label" x="323.3" y="272">Mínimo de caja −54 €</text>
+<text class="chart__label" x="323.3" y="287">oct 26</text>
+<rect class="chart__grid" x="478.7" y="212" width="159.3" height="86" />
+<text class="chart__value" x="486.7" y="232">Resultado 15.579 €</text>
+<rect class="chart__bar" x="494.9" y="242" width="131.1" height="10" />
+<line class="chart__axis" x1="494.9" y1="238" x2="494.9" y2="256" />
+<text class="chart__label" x="486.7" y="272">Caja ≥ 0 todo el año</text>
+</svg>
+<figcaption class="figure-caption">Resultado del año 1 y mínimo de caja sin colchón inicial, 3 arquitecturas de precio × 3 escenarios de demanda. <span class="figure-caption__source">Fuente: murcia-model-tables.md T4.</span> <!-- chip --></figcaption>
+</figure>
+<!-- /chart -->
+
+<!-- chart:trajectory -->
+<figure class="figure" id="fig-trajectory">
+<svg class="chart" viewBox="0 0 640 300" role="img" aria-label="Resultado anual de los años 1 a 8, arquitectura B, demanda realista">
+<text class="chart__axis-label" x="96" y="14">Resultado anual, €</text>
+<line class="chart__axis" x1="96" y1="230" x2="628" y2="230" />
+<text class="chart__axis-label" x="90" y="234" text-anchor="end">0</text>
+<line class="chart__grid" x1="96" y1="180" x2="628" y2="180" />
+<text class="chart__axis-label" x="90" y="184" text-anchor="end">10.000</text>
+<line class="chart__grid" x1="96" y1="130" x2="628" y2="130" />
+<text class="chart__axis-label" x="90" y="134" text-anchor="end">20.000</text>
+<line class="chart__grid" x1="96" y1="80" x2="628" y2="80" />
+<text class="chart__axis-label" x="90" y="84" text-anchor="end">30.000</text>
+<line class="chart__grid" x1="96" y1="30" x2="628" y2="30" />
+<text class="chart__axis-label" x="90" y="34" text-anchor="end">40.000</text>
+<text class="chart__label" x="90" y="268" text-anchor="end">Operarios</text>
+<text class="chart__label" x="90" y="286" text-anchor="end">Propietario</text>
+<rect class="chart__bar" x="111" y="206.2" width="36.6" height="23.8" />
+<text class="chart__value" x="129.3" y="201.2" text-anchor="middle">4768</text>
+<text class="chart__label" x="129.3" y="248" text-anchor="middle">Año 1</text>
+<text class="chart__label" x="129.3" y="268" text-anchor="middle">1</text>
+<text class="chart__label" x="129.3" y="286" text-anchor="middle">—</text>
+<rect class="chart__bar" x="177.5" y="134.9" width="36.6" height="95.1" />
+<text class="chart__value" x="195.8" y="129.9" text-anchor="middle">19.028</text>
+<text class="chart__label" x="195.8" y="248" text-anchor="middle">Año 2</text>
+<text class="chart__label" x="195.8" y="268" text-anchor="middle">1</text>
+<text class="chart__label" x="195.8" y="286" text-anchor="middle">—</text>
+<rect class="chart__bar" x="244" y="78.1" width="36.6" height="151.9" />
+<text class="chart__value" x="262.3" y="73.1" text-anchor="middle">30.386</text>
+<text class="chart__label" x="262.3" y="248" text-anchor="middle">Año 3</text>
+<text class="chart__label" x="262.3" y="268" text-anchor="middle">1</text>
+<text class="chart__label" x="262.3" y="286" text-anchor="middle">—</text>
+<rect class="chart__bar" x="310.5" y="35.7" width="36.6" height="194.3" />
+<text class="chart__value" x="328.8" y="30.7" text-anchor="middle">38.856</text>
+<text class="chart__label" x="328.8" y="248" text-anchor="middle">Año 4</text>
+<text class="chart__label" x="328.8" y="268" text-anchor="middle">1</text>
+<text class="chart__label" x="328.8" y="286" text-anchor="middle">—</text>
+<rect class="chart__bar" x="377" y="133.2" width="36.6" height="96.8" />
+<text class="chart__value" x="395.3" y="128.2" text-anchor="middle">19.354</text>
+<text class="chart__label" x="395.3" y="248" text-anchor="middle">Año 5</text>
+<text class="chart__label" x="395.3" y="268" text-anchor="middle">2</text>
+<text class="chart__label" x="395.3" y="286" text-anchor="middle">sí</text>
+<rect class="chart__bar" x="443.5" y="107.6" width="36.6" height="122.4" />
+<text class="chart__value" x="461.8" y="102.6" text-anchor="middle">24.479</text>
+<text class="chart__label" x="461.8" y="248" text-anchor="middle">Año 6</text>
+<text class="chart__label" x="461.8" y="268" text-anchor="middle">2</text>
+<text class="chart__label" x="461.8" y="286" text-anchor="middle">sí</text>
+<rect class="chart__bar" x="510" y="100.2" width="36.6" height="129.8" />
+<text class="chart__value" x="528.3" y="95.2" text-anchor="middle">25.965</text>
+<text class="chart__label" x="528.3" y="248" text-anchor="middle">Año 7</text>
+<text class="chart__label" x="528.3" y="268" text-anchor="middle">2</text>
+<text class="chart__label" x="528.3" y="286" text-anchor="middle">no</text>
+<rect class="chart__bar" x="576.5" y="96.4" width="36.6" height="133.6" />
+<text class="chart__value" x="594.8" y="91.4" text-anchor="middle">26.728</text>
+<text class="chart__label" x="594.8" y="248" text-anchor="middle">Año 8</text>
+<text class="chart__label" x="594.8" y="268" text-anchor="middle">2</text>
+<text class="chart__label" x="594.8" y="286" text-anchor="middle">no</text>
+</svg>
+<figcaption class="figure-caption">Resultado anual de los años 1 a 8, arquitectura B × demanda realista, con el número de operarios y si los operarios contratados cubren solos la demanda (estado de propietario). <span class="figure-caption__source">Fuente: murcia-model-tables.md T1 y T6; murcia-model.md §2.5.</span> <!-- chip --></figcaption>
+</figure>
+<!-- /chart -->
+
+<!-- chart:price-map -->
+<figure class="figure" id="fig-price-map">
+<svg class="chart" viewBox="0 0 640 654" role="img" aria-label="Precios publicados por pieza en Murcia frente a Madrid, Valencia y Granada">
+<line class="chart__axis" x1="150" y1="22" x2="150" y2="648" />
+<text class="chart__axis-label" x="150" y="16" text-anchor="middle">0 €</text>
+<line class="chart__grid" x1="232.5" y1="22" x2="232.5" y2="648" />
+<text class="chart__axis-label" x="232.5" y="16" text-anchor="middle">50 €</text>
+<line class="chart__grid" x1="315" y1="22" x2="315" y2="648" />
+<text class="chart__axis-label" x="315" y="16" text-anchor="middle">100 €</text>
+<line class="chart__grid" x1="397.5" y1="22" x2="397.5" y2="648" />
+<text class="chart__axis-label" x="397.5" y="16" text-anchor="middle">150 €</text>
+<line class="chart__grid" x1="480" y1="22" x2="480" y2="648" />
+<text class="chart__axis-label" x="480" y="16" text-anchor="middle">200 €</text>
+<text class="chart__value" x="0" y="42">Colchón individual</text>
+<text class="chart__label" x="12" y="58">Murcia</text>
+<text class="chart__label" x="12" y="71">Madrid</text>
+<text class="chart__label" x="12" y="84">Valencia</text>
+<text class="chart__label" x="12" y="97">Granada</text>
+<rect class="chart__bar--aqua" x="209.4" y="50" width="37.9" height="8" />
+<rect class="chart__bar" x="235.4" y="48" width="2.5" height="12" />
+<text class="chart__label" x="488" y="58">36–59 € · med. 52,5 €</text>
+<text class="chart__label" x="488" y="71">35–60 €</text>
+<line class="chart__line" x1="207.8" y1="67" x2="249" y2="67" />
+<text class="chart__label" x="488" y="84">25–55 €</text>
+<line class="chart__line" x1="191.3" y1="80" x2="240.8" y2="80" />
+<text class="chart__label" x="488" y="97">sin dato comparable</text>
+<text class="chart__value" x="0" y="120">Colchón matrimonio</text>
+<text class="chart__label" x="12" y="136">Murcia</text>
+<text class="chart__label" x="12" y="149">Madrid</text>
+<text class="chart__label" x="12" y="162">Valencia</text>
+<text class="chart__label" x="12" y="175">Granada</text>
+<rect class="chart__bar--aqua" x="249" y="128" width="66" height="8" />
+<rect class="chart__bar" x="259.3" y="126" width="2.5" height="12" />
+<text class="chart__label" x="488" y="136">60–100 € · med. 67 €</text>
+<text class="chart__label" x="488" y="149">55–90 €</text>
+<line class="chart__line" x1="240.8" y1="145" x2="298.5" y2="145" />
+<text class="chart__label" x="488" y="162">60–75 €</text>
+<line class="chart__line" x1="249" y1="158" x2="273.8" y2="158" />
+<text class="chart__label" x="488" y="175">sin dato comparable</text>
+<text class="chart__value" x="0" y="198">Colchón king</text>
+<text class="chart__label" x="12" y="214">Murcia</text>
+<text class="chart__label" x="12" y="227">Madrid</text>
+<text class="chart__label" x="12" y="240">Valencia</text>
+<text class="chart__label" x="12" y="253">Granada</text>
+<rect class="chart__bar--aqua" x="263.9" y="206" width="84.1" height="8" />
+<text class="chart__label" x="488" y="214">69–120 € · sin mediana</text>
+<text class="chart__label" x="488" y="227">75–100 €</text>
+<line class="chart__line" x1="273.8" y1="223" x2="315" y2="223" />
+<text class="chart__label" x="488" y="240">65–100 €</text>
+<line class="chart__line" x1="257.3" y1="236" x2="315" y2="236" />
+<text class="chart__label" x="488" y="253">sin dato comparable</text>
+<text class="chart__value" x="0" y="276">Sofá 2 plazas</text>
+<text class="chart__label" x="12" y="292">Murcia</text>
+<text class="chart__label" x="12" y="305">Madrid</text>
+<text class="chart__label" x="12" y="318">Valencia</text>
+<text class="chart__label" x="12" y="331">Granada</text>
+<rect class="chart__bar--aqua" x="249" y="284" width="49.5" height="8" />
+<rect class="chart__bar" x="279.1" y="282" width="2.5" height="12" />
+<text class="chart__label" x="488" y="292">60–90 € · med. 79 €</text>
+<text class="chart__label" x="488" y="305">60–97 €</text>
+<line class="chart__line" x1="249" y1="301" x2="310" y2="301" />
+<text class="chart__label" x="488" y="318">69–89 €</text>
+<line class="chart__line" x1="263.9" y1="314" x2="296.9" y2="314" />
+<text class="chart__label" x="488" y="331">79 €</text>
+<circle class="chart__bar" cx="280.4" cy="327" r="3.5" />
+<text class="chart__value" x="0" y="354">Sofá 3 plazas</text>
+<text class="chart__label" x="12" y="370">Murcia</text>
+<text class="chart__label" x="12" y="383">Madrid</text>
+<text class="chart__label" x="12" y="396">Valencia</text>
+<text class="chart__label" x="12" y="409">Granada</text>
+<rect class="chart__bar--aqua" x="290.3" y="362" width="57.8" height="8" />
+<rect class="chart__bar" x="313.8" y="360" width="2.5" height="12" />
+<text class="chart__label" x="488" y="370">85–120 € · med. 100 €</text>
+<text class="chart__label" x="488" y="383">90–119 €</text>
+<line class="chart__line" x1="298.5" y1="379" x2="346.4" y2="379" />
+<text class="chart__label" x="488" y="396">85–119 €</text>
+<line class="chart__line" x1="290.3" y1="392" x2="346.4" y2="392" />
+<text class="chart__label" x="488" y="409">85 €</text>
+<circle class="chart__bar" cx="290.3" cy="405" r="3.5" />
+<text class="chart__value" x="0" y="432">Chaise longue / L</text>
+<text class="chart__label" x="12" y="448">Murcia</text>
+<text class="chart__label" x="12" y="461">Madrid</text>
+<text class="chart__label" x="12" y="474">Valencia</text>
+<text class="chart__label" x="12" y="487">Granada</text>
+<rect class="chart__bar--aqua" x="296.9" y="440" width="150.1" height="8" />
+<rect class="chart__bar" x="330.3" y="438" width="2.5" height="12" />
+<text class="chart__label" x="488" y="448">89–180 € · med. 110 €</text>
+<text class="chart__label" x="488" y="461">120–175 €</text>
+<line class="chart__line" x1="348" y1="457" x2="438.8" y2="457" />
+<text class="chart__label" x="488" y="474">89–190 €</text>
+<line class="chart__line" x1="296.9" y1="470" x2="463.5" y2="470" />
+<text class="chart__label" x="488" y="487">89–99 €</text>
+<line class="chart__line" x1="296.9" y1="483" x2="313.4" y2="483" />
+<text class="chart__value" x="0" y="510">Sillón / butaca</text>
+<text class="chart__label" x="12" y="526">Murcia</text>
+<text class="chart__label" x="12" y="539">Madrid</text>
+<text class="chart__label" x="12" y="552">Valencia</text>
+<text class="chart__label" x="12" y="565">Granada</text>
+<rect class="chart__bar--aqua" x="199.5" y="518" width="49.5" height="8" />
+<rect class="chart__bar" x="214.8" y="516" width="2.5" height="12" />
+<text class="chart__label" x="488" y="526">30–60 € · med. 40 €</text>
+<text class="chart__label" x="488" y="539">42–50 €</text>
+<line class="chart__line" x1="219.3" y1="535" x2="232.5" y2="535" />
+<text class="chart__label" x="488" y="552">sin dato comparable</text>
+<text class="chart__label" x="488" y="565">sin dato comparable</text>
+<text class="chart__value" x="0" y="588">Silla</text>
+<text class="chart__label" x="12" y="604">Murcia</text>
+<text class="chart__label" x="12" y="617">Madrid</text>
+<text class="chart__label" x="12" y="630">Valencia</text>
+<text class="chart__label" x="12" y="643">Granada</text>
+<rect class="chart__bar--aqua" x="158.3" y="596" width="24.8" height="8" />
+<rect class="chart__bar" x="165.3" y="594" width="2.5" height="12" />
+<text class="chart__label" x="488" y="604">5–20 € · med. 10 €</text>
+<text class="chart__label" x="488" y="617">sin dato comparable</text>
+<text class="chart__label" x="488" y="630">sin dato comparable</text>
+<text class="chart__label" x="488" y="643">sin dato comparable</text>
+</svg>
+<figcaption class="figure-caption">Precios publicados por pieza: rango de Murcia (barra) y mediana publicada (marca), frente a los rangos de Madrid y Valencia y las cifras de Granada. Bases de IVA mezcladas, como se publican. <span class="figure-caption__source">Fuente: murcia-market.md §5 (Madrid y Valencia: market-dossier.md §2.1 y §3.1; Granada: granada-market.md §3–§4).</span> <!-- chip --></figcaption>
+</figure>
+<!-- /chart -->
+
+<!-- chart:rings -->
+<figure class="figure" id="fig-rings">
+<svg class="chart" viewBox="0 0 640 202" role="img" aria-label="Anillos de servicio: población y coste de desplazamiento por visita">
+<text class="chart__axis-label" x="180" y="16">Población</text>
+<text class="chart__axis-label" x="440" y="16">Ida y vuelta, € por visita</text>
+<line class="chart__axis" x1="180" y1="32" x2="180" y2="198" />
+<line class="chart__axis" x1="440" y1="32" x2="440" y2="198" />
+<text class="chart__value" x="0" y="52">R1</text>
+<text class="chart__label" x="28" y="52">Núcleo urbano,</text>
+<text class="chart__label" x="28" y="67">24 barrios</text>
+<rect class="chart__bar" x="180" y="42" width="33.5" height="14" />
+<text class="chart__label" x="219.5" y="53">138.997</text>
+<rect class="chart__bar--estimate" x="440" y="42" width="12.7" height="14" />
+<text class="chart__label" x="458.7" y="53">hasta 3,5 €</text>
+<text class="chart__value" x="0" y="106">R2</text>
+<text class="chart__label" x="28" y="106">Municipio +</text>
+<text class="chart__label" x="28" y="121">primer cinturón</text>
+<rect class="chart__bar--estimate" x="180" y="96" width="170" height="14" />
+<text class="chart__label" x="356" y="107">704.814</text>
+<rect class="chart__bar--estimate" x="450.2" y="96" width="24" height="14" />
+<text class="chart__label" x="480.2" y="107">2,8–9,42 €</text>
+<text class="chart__value" x="0" y="160">R3</text>
+<text class="chart__label" x="28" y="160">Anillo exterior:</text>
+<text class="chart__label" x="28" y="175">recargo o pedido mínimo</text>
+<rect class="chart__bar--estimate" x="180" y="150" width="160.7" height="14" />
+<text class="chart__label" x="346.7" y="161">666.428</text>
+<rect class="chart__bar--estimate" x="477.6" y="150" width="62.4" height="14" />
+<text class="chart__label" x="546" y="161">10,36–27,55 €</text>
+</svg>
+<figcaption class="figure-caption">Anillos de servicio: población y coste de ida y vuelta por visita a 0,175 €/km. Verde: dato de una fuente; dorado: estimación. <span class="figure-caption__source">Fuente: murcia-market.md §1.7 y §8.5.</span> <!-- chip --></figcaption>
+</figure>
+<!-- /chart -->
```
