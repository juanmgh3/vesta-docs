#!/usr/bin/env node
/* ==========================================================================
   build-assets.mjs — Task 3 (Grupo Vesta marketing report, Phase 3)

   Generates embedded-assets.css: a single, self-contained stylesheet that
   base64-embeds the 4 report fonts (@font-face, woff2) and 6 report
   artworks (CSS custom props, webp) so the final report HTML needs no
   external files — portable, printable, no broken links.

   Run from the repo root so `sharp` resolves from node_modules:
     node docs/business/reports/_template/build-assets.mjs

   Regenerate whenever a source font or artwork file changes. Never hand-edit
   the generated embedded-assets.css — edit this script and re-run instead.
   ========================================================================== */

import fs from "node:fs";
import path from "node:path";
import zlib from "node:zlib";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// docs/business/reports/_template -> repo root is 4 levels up.
const ROOT = path.resolve(__dirname, "..", "..", "..", "..");
const OUT_FILE = path.join(__dirname, "embedded-assets.css");

/* --------------------------------------------------------------------------
   1. Minimal WOFF2 parser — just enough to answer "what weight(s) does this
      font file actually support?" so the emitted `font-weight` descriptor is
      truthful (variable axis range vs a single static weight), never guessed.
      No fontkit/opentype.js in node_modules, so this reads the WOFF2 table
      directory + brotli-decompresses the table data stream (Node's zlib has
      built-in Brotli support) and parses the `fvar` (variable axis) and
      `OS/2` (usWeightClass) tables directly. See spec: W3C WOFF2, §5 (table
      directory) and §6 (font table data, single brotli stream).
   -------------------------------------------------------------------------- */
const KNOWN_TABLE_TAGS = [
  "cmap", "head", "hhea", "hmtx", "maxp", "name", "OS/2", "post",
  "cvt ", "fpgm", "glyf", "loca", "prep", "CFF ", "VORG", "EBDT",
  "EBLC", "gasp", "hdmx", "kern", "LTSH", "PCLT", "VDMX", "vhea",
  "vmtx", "BASE", "GDEF", "GPOS", "GSUB", "EBSC", "JSTF", "MATH",
  "CBDT", "CBLC", "COLR", "CPAL", "SVG ", "sbix", "acnt", "avar",
  "bdat", "bloc", "bsln", "cvar", "fdsc", "feat", "fmtx", "fvar",
  "gvar", "hsty", "just", "lcar", "mort", "morx", "opbd", "prop",
  "trak", "Zapf", "Silf", "Glat", "Gloc", "Feat", "Sill",
];

function inspectWoff2Weight(buf) {
  if (buf.length < 48 || buf.toString("ascii", 0, 4) !== "wOF2") {
    return { ok: false, reason: "not a WOFF2 file" };
  }
  let pos = 0;
  const readU8 = () => buf[pos++];
  const readU16 = () => {
    const v = buf.readUInt16BE(pos);
    pos += 2;
    return v;
  };
  const readU32 = () => {
    const v = buf.readUInt32BE(pos);
    pos += 4;
    return v;
  };
  const readUIntBase128 = () => {
    let result = 0;
    for (let i = 0; i < 5; i++) {
      const byte = readU8();
      result = result * 128 + (byte & 0x7f); // multiply, not <<, to dodge 32-bit overflow
      if ((byte & 0x80) === 0) return result;
    }
    throw new Error("UIntBase128 too long");
  };

  readU32(); // signature 'wOF2'
  readU32(); // flavor
  readU32(); // length
  const numTables = readU16();
  readU16(); // reserved
  readU32(); // totalSfntSize
  const totalCompressedSize = readU32();
  readU16();
  readU16(); // majorVersion, minorVersion
  readU32();
  readU32();
  readU32(); // meta offset/length/origLength
  readU32();
  readU32(); // priv offset/length

  const entries = [];
  for (let i = 0; i < numTables; i++) {
    const flags = readU8();
    const tagIndex = flags & 0x3f;
    const transformVersion = (flags >> 6) & 0x3;
    let tag;
    if (tagIndex === 63) {
      tag = buf.toString("ascii", pos, pos + 4);
      pos += 4;
    } else {
      tag = KNOWN_TABLE_TAGS[tagIndex];
    }
    const origLength = readUIntBase128();
    // Only glyf/loca carry a transformLength field (WOFF2's special glyf
    // reformatting); every other table's in-stream size equals origLength.
    const hasTransformLength = (tag === "glyf" || tag === "loca") && transformVersion === 0;
    const transformLength = hasTransformLength ? readUIntBase128() : null;
    entries.push({ tag, streamLength: hasTransformLength ? transformLength : origLength });
  }

  const compressed = buf.subarray(pos, pos + totalCompressedSize);
  const decompressed = zlib.brotliDecompressSync(compressed);

  let dpos = 0;
  const tables = {};
  for (const e of entries) {
    tables[e.tag] = decompressed.subarray(dpos, dpos + e.streamLength);
    dpos += e.streamLength;
  }

  const result = { ok: true, variable: false };

  const fvar = tables["fvar"];
  if (fvar) {
    const axesArrayOffset = fvar.readUInt16BE(4);
    const axisCount = fvar.readUInt16BE(8);
    const axisSize = fvar.readUInt16BE(10);
    const axes = [];
    for (let i = 0; i < axisCount; i++) {
      const off = axesArrayOffset + i * axisSize;
      axes.push({
        tag: fvar.toString("ascii", off, off + 4),
        min: fvar.readInt32BE(off + 4) / 65536,
        default: fvar.readInt32BE(off + 8) / 65536,
        max: fvar.readInt32BE(off + 12) / 65536,
      });
    }
    result.variable = true;
    result.axes = axes;
    const wght = axes.find((a) => a.tag === "wght");
    if (wght) result.weightRange = [Math.round(wght.min), Math.round(wght.max)];
  }

  const os2 = tables["OS/2"];
  if (os2) result.usWeightClass = os2.readUInt16BE(4);

  return result;
}

/* --------------------------------------------------------------------------
   2. Fonts — base64 the woff2 as-is (no re-subsetting), emit one @font-face
      per file with a truthful font-weight descriptor (variable axis range
      or single static weight — never a guess).
   -------------------------------------------------------------------------- */
const FONTS = [
  { file: "public/fonts/newsreader/newsreader.woff2", family: "Newsreader", style: "normal" },
  { file: "public/fonts/hanken-grotesk/hanken-grotesk.woff2", family: "Hanken Grotesk", style: "normal" },
  { file: "public/fonts/hanken-grotesk/hanken-grotesk-italic.woff2", family: "Hanken Grotesk", style: "italic" },
  { file: "public/fonts/lora/lora.woff2", family: "Lora", style: "normal" },
];

const fontFindings = [];

function buildFontFace({ file, family, style }) {
  const abs = path.join(ROOT, file);
  const buf = fs.readFileSync(abs);
  const info = inspectWoff2Weight(buf);

  let weightDescriptor;
  if (info.ok && info.variable && info.weightRange) {
    weightDescriptor = `${info.weightRange[0]} ${info.weightRange[1]}`;
  } else if (info.ok && info.usWeightClass) {
    weightDescriptor = String(info.usWeightClass);
  } else {
    weightDescriptor = "400"; // last-resort fallback; should not happen for these 4 files
  }

  fontFindings.push({
    file,
    family,
    style,
    variable: !!(info.ok && info.variable),
    weightRange: info.weightRange ?? null,
    usWeightClass: info.usWeightClass ?? null,
    weightDescriptor,
    bytes: buf.length,
  });

  const base64 = buf.toString("base64");
  return `@font-face {
  font-family: "${family}";
  font-style: ${style};
  font-weight: ${weightDescriptor};
  font-display: swap;
  src: url(data:font/woff2;base64,${base64}) format("woff2");
}`;
}

/* --------------------------------------------------------------------------
   3. Artwork — sharp resize (max width 1500px, never enlarge), webp ~82,
      base64 into `--img-*` custom props on :root.
   -------------------------------------------------------------------------- */
const ARTWORK = [
  { file: "design/assets/vacuumheadlanding.png", prop: "--img-hero" },
  { file: "design/assets/coachknight.png", prop: "--img-knight" },
  { file: "design/assets/peoplevacuumfooter.png", prop: "--img-frieze" },
  { file: "design/assets/carpetdirty.png", prop: "--img-carpet-dirty" },
  { file: "design/assets/carpetclean.png", prop: "--img-carpet-clean" },
  { file: "design/assets/hylavacuum.png", prop: "--img-hyla" },
];

async function buildImageProp({ file, prop }) {
  const abs = path.join(ROOT, file);
  const webp = await sharp(abs)
    .resize({ width: 1500, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toBuffer();
  const base64 = webp.toString("base64");
  return { line: `  ${prop}: url(data:image/webp;base64,${base64});`, bytes: webp.length, file, prop };
}

/* --------------------------------------------------------------------------
   4. Assemble + write.
   -------------------------------------------------------------------------- */
async function main() {
  const fontFaceBlocks = FONTS.map(buildFontFace);

  const imageResults = [];
  for (const art of ARTWORK) {
    imageResults.push(await buildImageProp(art)); // sequential: keeps memory bounded, fine at 6 files
  }

  const header = `/* ==========================================================================
   embedded-assets.css — GENERATED FILE, do not hand-edit.
   Produced by build-assets.mjs from public/fonts/* and design/assets/*.
   Regenerate with: node docs/business/reports/_template/build-assets.mjs
   ========================================================================== */

`;

  const fontsCss = fontFaceBlocks.join("\n\n");
  const imagesCss = `:root {\n${imageResults.map((r) => r.line).join("\n")}\n}`;

  const output = `${header}${fontsCss}\n\n${imagesCss}\n`;
  fs.writeFileSync(OUT_FILE, output, "utf8");

  const outBytes = fs.statSync(OUT_FILE).size;

  console.log("=== build-assets.mjs report ===");
  console.log(`Output: ${OUT_FILE}`);
  console.log(`Output size: ${(outBytes / 1024 / 1024).toFixed(2)} MiB (${outBytes} bytes)`);
  console.log("");
  console.log("Fonts embedded:", fontFindings.length);
  for (const f of fontFindings) {
    console.log(
      `  - ${f.family} (${f.style}): ${(f.bytes / 1024).toFixed(1)} KiB, ` +
        `variable=${f.variable}, weightRange=${JSON.stringify(f.weightRange)}, ` +
        `usWeightClass=${f.usWeightClass}, emitted font-weight="${f.weightDescriptor}"`,
    );
  }
  console.log("");
  console.log("Artwork embedded:", imageResults.length);
  for (const r of imageResults) {
    console.log(`  - ${r.prop} <- ${r.file}: ${(r.bytes / 1024).toFixed(1)} KiB (webp)`);
  }

  const newsreader = fontFindings.find((f) => f.family === "Newsreader");
  console.log("");
  console.log("=== Weight-300 craft check (cover__title font-weight:300) ===");
  if (newsreader?.variable && newsreader.weightRange) {
    const [lo, hi] = newsreader.weightRange;
    const covers300 = lo <= 300 && 300 <= hi;
    console.log(
      `Newsreader is a VARIABLE font with wght axis ${lo}-${hi}. ` +
        `Weight 300 is ${covers300 ? "COVERED — true light, no synthesis." : "NOT covered — would be synthesized/clamped."}`,
    );
  } else if (newsreader) {
    console.log(
      `Newsreader is a STATIC font, single weight ${newsreader.usWeightClass}. ` +
        `Weight 300 is ${newsreader.usWeightClass === 300 ? "an exact match." : "NOT available — the browser will synthesize or clamp to the nearest weight."}`,
    );
  } else {
    console.log("Could not determine Newsreader's weight capability.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
