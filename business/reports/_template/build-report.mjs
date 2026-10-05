import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const REPORTS = join(HERE, "..");
const SRC = join(REPORTS, "_src", "murcia");
const OUT = join(REPORTS, "business-report-murcia.html");
const BLOCK = /<!-- chart:([\w-]+) -->([\s\S]*?)<!-- \/chart -->/g;
const EXTERNAL = /(?:href|src)\s*=\s*["']?\s*(?:https?:)?\/\/|url\(\s*["']?\s*(?:https?:)?\/\/|@import/i;

const read = (p) => readFileSync(p, "utf8").replace(/\r\n/g, "\n");

const charts = new Map([...read(join(SRC, "charts.html")).matchAll(BLOCK)].map((m) => [m[1], m[2].trim()]));

const place = (html, file) => {
  const out = html.replace(BLOCK, (_, id, chip) => {
    const fig = charts.get(id);
    if (!fig) throw new Error(`${file}: unknown chart "${id}"`);
    if (!chip.trim()) throw new Error(`${file}: chart "${id}" has no chip`);
    return fig.replace("<!-- chip -->", chip.trim());
  });
  if (out.includes("<!-- chart:")) throw new Error(`${file}: chart marker without <!-- /chart -->`);
  return out;
};

const fragments = readdirSync(SRC)
  .filter((f) => /^ch-\d{2}-.+\.html$/.test(f))
  .sort()
  .map((f) => place(read(join(SRC, f)).trim(), f));

const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Informe de negocio — Grupo Vesta · Murcia</title>
<style>
${read(join(HERE, "embedded-assets.css")).trim()}

${read(join(HERE, "report.css")).trim()}
</style>
</head>
<body>
<div class="running-foot">Grupo Vesta · Documento interno</div>
<article class="report">
${fragments.join("\n\n")}
</article>
</body>
</html>
`;

const external = html.match(EXTERNAL);
if (external) throw new Error(`external reference in output: ${external[0]}`);

writeFileSync(OUT, html);
console.log(`${OUT}: ${fragments.length} fragments, ${(html.match(/<svg/g) ?? []).length} svg, ${html.length} chars`);
