# Vesta report template — "The certified dossier"

The reusable shell every Grupo Vesta business report inherits: the **marketing
report**, the future **economic report**, and a future **third city (Santiago)**.
Build one report by copying this skeleton, not by starting from scratch — so the
whole series reads as one system.

Files in this folder (`docs/business/reports/_template/`):

| File            | Role                                                                      |
| --------------- | ------------------------------------------------------------------------- |
| `report.css`    | Canonical print + screen CSS: tokens, `@page`, components, chips, charts. |
| `skeleton.html` | Minimal document that exercises **every** class once. Copy this to start. |
| `README.md`     | This file — how to reuse + the design system reference.                   |

---

## 1. How to build a report from this template

1. **Copy the skeleton.** `cp skeleton.html ../marketing-report.html` (or
   `economic-report.html`, `santiago-report.html`). Keep it **Spanish**;
   `lang="es"` is already set.
2. **Fill the chapters.** Replace the dummy cover / TOC / chapters with real
   content, reusing the exact classes documented in §3–§6 below. Do not invent
   new component classes — extend `report.css` if a genuinely new component is
   needed, and document it here.
3. **Author the charts** as inline SVG using the `.chart*` house-style classes
   (§7). No chart library; palette-driven; print-safe.
4. **Generate embedded assets.** Task 3's `build-assets.mjs` produces
   `embedded-assets.css` — the base64 WOFF2 `@font-face` rules (Newsreader,
   Hanken Grotesk, Lora) and any base64 images / the inline Vesta wordmark SVG.
   Until that step runs, fonts fall back to Georgia / Arial (expected).
5. **Inline everything into the final file.** Each shipped report is **one
   self-contained HTML file** in `docs/business/reports/`: inline `report.css`
   and `embedded-assets.css` into `<style>` blocks, inline the SVGs. The
   `_template/` sources stay modular; the deliverable is portable and renders
   identically on any machine. (Web perf rules do NOT apply — this is a
   document, not the landing.)
6. **Render the PDF** (§2) once the founder gives the visual OK in the browser.

---

## 2. Rendering to PDF (headless Chrome) — the verified recipe

```bash
"C:/Program Files/Google/Chrome/Application/chrome.exe" \
  --headless --disable-gpu --no-pdf-header-footer \
  --virtual-time-budget=15000 \
  --print-to-pdf="OUT.pdf" "file:///C:/absolute/path/to/REPORT.html"
```

- **Absolute `file://` URL + `--virtual-time-budget` are required** (verified
  2026-07-08): with a relative path or without the budget, current Chrome
  headless prints a single blank page (~49 KB) instead of the document. A good
  render of a full report is ~1+ MB and 40+ pages — check the page count
  before trusting the output.
- **`--no-pdf-header-footer` is required.** Without it Chrome stamps its own
  date/URL header onto every page (including the cover). With it, the only page
  chrome is our CSS `@page` margin box. (Verified on this machine; the flag
  suppresses Chrome's chrome but keeps the CSS margin-box page number.)
- Any Chromium print engine works (Chrome / Edge `msedge.exe`). A true
  Paged-Media engine (Prince, WeasyPrint, Paged.js) also honours everything here,
  including the running header.
- Screen view is styled to read well too (the founder reviews in the browser
  first) — a centered cream A4-width sheet on a soft `--cream-deep` desk.

### Page numbers — two strategies, both shipped

- **(a) Primary — CSS `@page` margin box:** `@bottom-center { content: counter(page) }`.
  Verified to render in current Chrome print **and** in Prince/WeasyPrint/Paged.js.
  The cover uses a named `@page cover { margin:0 }` with the box set to `none`, so
  it carries no number.
- **(b) Fallback — `.running-foot` fixed element:** a fixed div, **hidden by
  default**, that repeats on every page for any engine that ignores margin boxes.
  Enable it by adding `class="has-running-foot"` to `<body>`. It **cannot
  auto-count**, so it carries a document label (`Grupo Vesta · Documento
interno`), not the number. Left off in Chrome so the on-design output is the
  centered page number only.
- **Running header:** the chapter title feeds the `@top-center` box via
  `string-set: chaptertitle content(text)` on `.chapter-header__title`. Honoured
  by Paged-Media engines and recent Chrome; degrades to nothing if unsupported.
- **TOC page numbers are manual.** Chrome does not support `target-counter()`
  cross-references, so fill the TOC `.toc__page` values by hand after a render
  pass. The cover counts as page 1 (unnumbered); content follows.

---

## 3. The design system (concept)

**Editorial classical gravitas meeting evidentiary rigor.** Warm, quiet,
precise; hairline-ruled like a certificate/ledger. The document embodies Vesta
(hearth, purity, guardianship, permanence) **and** its own number-verification
thesis: every load-bearing claim wears its evidence grade.

Premium through **restraint + one signature**, never decoration.

- **The signature is the chip system** (§5). Keep everything else quiet.
- **Flat only: no `box-shadow`, no `linear-gradient`, ever.**
- **Gold (`--gold #b8934a`) is for thin hairlines/rules ONLY — never text.**
- The visual language is **inherited from `src/styles/global.css`** (the brand).
  `report.css` mirrors those tokens as plain custom props so a report file is
  self-contained. Keep the hex values in lockstep with `global.css`.

---

## 4. Palette & type (tokens in `report.css :root`)

### Palette (mirror of `global.css`)

| Token            | Hex                  | Use                                         |
| ---------------- | -------------------- | ------------------------------------------- |
| `--cream`        | `#f5f1e8`            | page background                             |
| `--cream-deep`   | `#ede7d9`            | wells, callout fill, faint table zebra      |
| `--paper`        | `#fbf9f2`            | near-white cards                            |
| `--teal`         | `#1b5252`            | brand / heading accents / **FACT** chip     |
| `--aqua`         | `#a8cfc9`            | soft accent, chart series                   |
| `--aqua-tint`    | `#dfebe7`            | highlight tints                             |
| `--gold`         | `#b8934a`            | **hairlines / rules ONLY — never text**     |
| `--gold-graphic` | `#af8b45`            | **ESTIMATE** chip + "estimate" chart series |
| `--ink`          | `#1a1a1a`            | primary text                                |
| `--ink-soft`     | `#45443e`            | secondary text                              |
| `--ink-muted`    | `#4d4b45`            | tertiary text, captions                     |
| `--brick`        | `#863927`            | **HYPOTHESIS** chip + below-zero bars       |
| `--success`      | `#275a42`            | positive contribution numbers               |
| `--line`         | `rgba(26,26,26,.16)` | neutral hairline                            |

### Type

- **Display — Newsreader** (serif): cover title, chapter titles, big numerals.
  Light/regular weight at large sizes; optical sizing on; italics for
  subtitles/pull-quotes.
- **Body/data/chips/captions — Hanken Grotesk** (sans). Tabular figures for all
  numbers (`font-variant-numeric: tabular-nums`).
- **Logotype — Lora**: the Vesta wordmark ONLY, nowhere else.
- **Scale:** body **16.5px / 1.55** (audience 45–65, never below 16); caption/chip
  ~13; h3 (subsection, sans 600) ~20; h2 (chapter title, serif) ~30–34; eyebrow
  12 uppercase, `.18em`, teal; cover title ~44–60 light. Prose measure ~68ch.

---

## 5. The chip system (THE signature) — evidence grade on every claim

Small uppercase pills, `letter-spacing:.08em`, `border-radius:999px`, ~13px
Hanken. Used **inline right after a load-bearing claim**, inside **every figure
caption**, and as a **legend on the cover**. The document visibly grades its own
evidence — unique to this report; no generic business report does it.

| Class               | Meaning                                       | Style                                 |
| ------------------- | --------------------------------------------- | ------------------------------------- |
| `.chip--fact`       | **FACT** — sourced (2nd independent source)   | teal fill, cream text                 |
| `.chip--estimate`   | **ESTIMATE** — derived (show the derivation)  | gold-graphic fill, **ink** text (AA+) |
| `.chip--hypothesis` | **HYPOTHESIS** — unverified, needs validation | brick fill, cream text                |
| `.chip--analysis`   | **ANALYSIS** — a judgement/reading            | outline only, ink hairline, no fill   |
| `.chip--notfound`   | **NOT FOUND** — no source; modelled as range  | outline only, faint hairline, no fill |

The three filled variants are three genuinely distinct colours (verified by
pixel sample: `#1b5252` / `#af8b45` / `#863927`). ESTIMATE uses **ink** text, not
cream — cream on mid-gold fails contrast for a 45–65 audience. Labels are
**carried verbatim from the dossier/pricing files**; the build never re-grades a
label.

---

## 6. Components (classes in `report.css`)

- **`.report`** — the document wrapper (centered cream sheet on screen).
- **`.cover`** — full-bleed page, named `@page cover`, no page number. Certificate
  motif: double gold-hairline frame (flat, two `::before/::after` rules), Lora
  wordmark (`.cover__wordmark`; real report inlines
  `design/assets/vestalogofull1007D76color.svg`), Newsreader title
  (`.cover__title`, weight 300), `.cover__subtitle`, `.cover__meta`
  (_Documento interno · [fecha]_), one classical `.cover__flourish`, and the chip
  `.cover__legend`.
- **`.toc`** — editorial index: `.toc__row` (clickable anchor) with `.toc__num`
  (Newsreader numeral), `.toc__label`, `.toc__dots` (dot leaders), `.toc__page`,
  gold hairline separators.
- **`.chapter`** — starts on a new page (`break-before:page`). Opens with
  **`.chapter-header`**: `.chapter-header__num` (big Newsreader numeral),
  `.eyebrow` (uppercase teal), `.chapter-header__title` (serif; also feeds the
  running header via `string-set`), and one thin gold hairline rule under it.
- **`.figure` + `.figure-caption`** — `break-inside:avoid`; caption carries the
  data source (`.figure-caption__source`, italic) **and** the relevant chip.
- **`.callout`** — key insight / operator steer: left gold-hairline accent,
  `--cream-deep` fill, flat. Optional `.callout__label` eyebrow.
- **`.cmp-table`** (add `.cmp-table--zebra` for faint zebra) — hairline rules,
  teal header row (cream text), tabular numbers; `.num` right-aligns, `.pos`
  (success green) / `.neg` (brick) colour money cues. Used for the pricing
  "espejo de los 3" and the Madrid/Valencia comparison.
- **`.glossary` + `.glossary__term`** — two-column grid: term (Hanken 600, teal)
  - `.glossary__def` (ink).

---

## 7. Chart house-style (all inline SVG)

All charts are **hand-authored inline SVG** — no chart library, no default
styling — using the `.chart*` classes so the whole set reads as one system:

- **Open axes** (no full bounding box); baseline = `.chart__axis`, gridlines =
  `.chart__grid` (both gold hairline, low opacity).
- Fills: `.chart__bar` (teal), `.chart__bar--aqua`, `.chart__bar--estimate`
  (gold-graphic), `.chart__bar--neg` (**brick**, below-zero). Lines:
  `.chart__line` (teal).
- **Direct labels** (`.chart__label` / `.chart__value`) preferred over legends;
  `.chart__axis-label` for axis titles. Tabular Hanken numerals throughout.
- Consistent stroke widths and label sizes across all charts. **No shadows, no
  gradients, no 3D.** Each chart lives in a `.figure` with caption + source + chip.

Match the dataviz skill for form/colour discipline when authoring each chart.

---

## 8. Reuse notes — economic report & a third city (Santiago)

- **Economic report (Phase 4):** same shell, same chips (the FACT/ESTIMATE/
  HYPOTHESIS standard is shared across the series). Its heavier tables/charts
  (P&L, break-even curves) use the same `.cmp-table` and `.chart*` classes.
  Change only the cover title/eyebrow and the chapter set.
- **Third city (Santiago de Chile):** the template is city-agnostic. Duplicate a
  report, swap the city-sensitive facts, and add the city into any comparison
  `.cmp-table` (the Madrid/Valencia table is built to take a third column). No
  CSS change needed. If a locale change is needed (currency/date), adjust the
  content, not the shell.
- **Keep tokens in lockstep with `src/styles/global.css`.** If the brand palette
  is finalised there, mirror the change into `report.css :root` so every report
  updates from one edit.
- **Condensed executive version** (a shorter cut floated by the founder) is a
  future deliverable — it would reuse these same components at lower page count.
