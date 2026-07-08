# CHECK — Phase 3 marketing report (Task 13)

> Verification pass on `docs/business/reports/marketing-report.html` against
> `specs/business-report/phase-3-marketing-spec.md` §10 (the 7 checks) and §2
> (guardrails). Method per founder directive: filesystem tools only (`Grep`,
> Chrome headless `--print-to-pdf`, `pdftotext -layout`, `python`/`pypdf`) — no
> Playwright, no browser screenshots, no `computer` tool. Rendered from
> `file:///.../marketing-report.html`. Run 2026-07-07.
>
> Source-of-truth files traced against: `docs/business/research/market-dossier.md`,
> `docs/business/research/marketing-research-addendum.md`,
> `docs/business/research/pricing-decision.md`. The private calibration file
> (`founder-calibration.private.md`) was **not** read, per instruction.

**Result: DONE_WITH_CONCERNS.** Two minor issues found and fixed in place
(5 missing glossary entries; a TOC page number thrown off by the fix). One
cosmetic engine limitation noted but not fixed (see Check 6). One content
gap noted for founder awareness, not fixed (see "Other notes"). No guardrail
leak, no invented number, no boundary violation, no coherence mismatch found.

---

## 1. Numbers — spot-check against dossier/addendum/pricing

All of the brief's named load-bearing figures were located in the report and
traced to their source file/section. None is invented; every ESTIMATE shows
its derivation; ranges are used where no point figure exists.

| Figure in report | Value in report | Traces to | Verdict |
| --- | --- | --- | --- |
| CAC | "≈ 71 €" / "36–111 €" (ch1 lead, ch5, ch8, C3/C4 captions) | dossier §6.3 (central €71, range €36–111) | Match |
| CPC | "1–3 €, centro ~1,5–2 €" (ch5) | dossier §6.1 triangulation | Match |
| Ubersuggest CPC | "2,18 €" (ch5) | dossier §6.1 / addendum "Ubersuggest €2.18" | Match |
| Allergy prevalence | "~20 %" / "1 de cada 5" (ch1, ch3) | dossier §5.1 (~20%, SEPAR) | Match |
| Pet ownership | "~27 % perro / ~17 % gato" (ch1, ch3, C5) | dossier §5.2 (27% dog, 17% cat, ANFAAC) | Match |
| Madrid 45–65 population | "989.933" | dossier §5.3 (989,933) | Match |
| Valencia 45–65 population | "242.820" | dossier §5.3 (242,820) | Match |
| Madrid/Valencia ratio | "~4,1×" | dossier §5.3 (~4.1×) | Match |
| Espejo A/B/C — single visit | "−34 € / −22 € / −6 €" (ch1, ch4, ch5, ch6 — all four instances checked) | pricing-decision.md §3.6/§4.4 | Match, identical everywhere (see Check 7) |
| Espejo A/B/C — pack/2-piece | "+24 € / +54 € / +83 €" (same 4 chapters) | pricing-decision.md §3.6/§4.4 | Match, identical everywhere |
| Ads budget | "150–300 €/mes" entrada, "300–600 €/mes" establecido (ch1, ch8, C7) | addendum R5 (S51: €150–300 micro / €300–600 established) | Match |
| Reviews elasticity | "+5–9 % de ingresos" (ch5, ch7, ch8), always flagged "restaurantes de EE. UU." | dossier §6.4 + addendum R4 (Luca/HBS, US) | Match, US caveat present every time |
| Madrid CPC premium | "~+30 %" (ch5, C6, ch8) | dossier §6.1 (Madrid ~+30%) | Match |
| Madrid Trends rank | "#2, índice 63" / Valencia "fuera del top-5" | dossier §5.4 | Match |
| B2B aggregators | CEHAT >16,000 / AEHM 330 / Coperama >1,000 | addendum R6 (S61–S66) | Match |
| Financial literacy | "51 %" | addendum R2 (S25) | Match |
| Review consultation | "89 %" (Skeepers) / "88 %" (WOM, Nielsen) | addendum R4/R2 (S36, S22) — kept as two distinct single-study figures, not merged | Match — correctly not merged |
| RDL 24/2021 date | "junio 2023" no-cold-call / reviews law "desde 2022" | addendum S19 (no-call, 2023) / S46 (reviews, 2022-05-28) — **checked these are not swapped** | Match, correctly distinct |

No figure found in the report that does not trace to one of the three source
files. No range was collapsed to a false-precise point (CPC, CAC, close-rate,
search volumes all stay bands). B2B demand size correctly carries no €
figure — sized only illustratively off the B2C per-piece price, exactly as
`marketing-research-addendum.md` Gap §4 prescribes.

## 2. Labels — chip counts and consistency

Chip counts (`grep -o 'chip--<label>"' | wc -l`):

| Label | Count |
| --- | --- |
| Fact | 64 |
| Estimate | 29 |
| Hypothesis | 22 |
| Analysis | 77 |
| Proposal | 11 |
| Not found | 7 |
| **Total** | **210** |

Spot-checked ~40 individual chip placements against their source label while
reading every chapter in full (not sampled): CPC/CAC/CVR consistently
ESTIMATE; close-rate consistently HYPOTHESIS ("el eslabón más débil"); B2B
demand size consistently HYPOTHESIS/NOT FOUND, never asserted as a number;
market prices, demographics, competitor facts, CEHAT/AEHM/Coperama scale,
RDL 24/2021, and the review-consultation percentages all FACT, matching the
dossier/addendum's own grade. **No silent upgrade found** — e.g. the
Ubersuggest €2.18 point and the reviews "+5–9%/star" figure (both single-study
or off-market in the addendum) are correctly kept at ESTIMATE/FACT-with-caveat,
never promoted to a clean load-bearing FACT. The A/B/C price points and the
Ads budget are consistently PROPOSAL, never presented as decided.

## 3. Guardrails — grep sweep of the whole file

Ran targeted greps across the full HTML (not just the visible chapters) for:
personal names, ages other than the 45–65 audience band, cash/wealth of a
person, family/relocation, "Chile"/"Santiago" as a personal fact, and
Spain-only-as-limitation framing.

- `grep -i "Chile|Santiago"` → **0 hits.** (Santiago is only ever mentioned in
  the spec/addendum as "future third city", never in the report itself.)
- `grep -i "años"` → 16 hits, **all** are the 45–65 audience band or the
  5-year Trends window ("cinco años", "×2 en 5 años"). No personal age.
- `grep -i "solo en España|únicamente en España|limitad. a España"` → **0
  hits.** No Spain-only-as-limitation framing anywhere.
- `grep -i "familia"` → 5 hits, all audience/demographic ("riqueza familiar",
  "recomendación de familia o amigos", buyer-persona "familia con
  mascotas"). None references the founder's family.
- `grep -i "patrimonio|dinero|caja|ahorro"` → all business-economics usage
  (CAC/IVA arithmetic, "no hay colchón de caja" as the sanctioned impersonal
  cash-runway metaphor, "activo patrimonial de la empresa"). No personal
  cash/wealth of any individual.
- `grep "socio fundador|dirección operativa"` → 5 hits, all role-only
  ("el socio fundador", "la dirección operativa"). No name, no age attached.
- The sanctioned impersonal implications from `founder-inputs.md` **are**
  present, correctly generic: "la ciudad y la ventana de lanzamiento
  dependen de un factor externo aún no fijado" (×3, ch1/ch5/ch9) and "un
  problema de arranque en frío" / "no hay colchón de caja" (ch5) — cash/
  launch urgency stated impersonally, never tied to a person.
- Nothing traceable to `founder-calibration.private.md` (not read for this
  check, but its known-forbidden content — age, cash state, family
  relocation, Chile as personal fact — was the exact target of the greps
  above and none of it surfaced).

**Verdict: clean.** No false positives worth noting either (no "enCAJA"-style
string collisions found).

**Minor gap (not a violation, noted for founder):** the spec (§2.1) flags
"+26 años de experiencia" as a sanctioned, load-bearing founder credential
the report should use. It does not appear anywhere in the report. This is an
omission, not a leak — adding it would require integrating a sentence into
ch2 or ch3's trust narrative, which is a prose change beyond this check's
"fix minor things" scope (glossary/label/TOC-class fixes). Flagged for the
founder to decide whether it's worth a follow-up edit.

## 4. Terms — parenthetical-on-first-use vs glossary

Extracted every inline parenthetical gloss pattern (`(<em>...</em>: ...)` and
`—del inglés <em>...</em>: ...—`) and cross-checked against the `#glosario`
`<dl>`. **Found 5 terms with a first-use parenthetical but no glossary
entry** — fixed by adding the entries (see "Fixes made" below):

1. **Alcanzabilidad (reachability)** — ch3, "lo fácil que es llegar a ese
   grupo con los canales disponibles…"
2. **Biocida** — ch3/ch8/ch9, "un acaricida químico" (RD 830/2010 context).
3. **Prueba social (social proof)** — ch3, "la tendencia a fiarse de lo que
   otros ya han validado".
4. **Segmentar (segmentation)** — ch3, "dividir el mercado en grupos con
   necesidades y comportamientos afines…".
5. **ROESB** — ch3/ch9, used with **no** parenthetical at all (bare acronym
   inside the RD 830/2010 list). Added a glossary entry describing its
   function; did not invent an unverified expansion of the acronym (neither
   the dossier nor the addendum spells it out — see "Fixes made").

All other technical/marketing terms I found with a first-use parenthetical
(CPC, CAC, CVR, CPL, embudo, buyer persona, posicionamiento, prima, activo de
marketing, arquetipo, capital cultural, pattern interrupt, jobs-to-be-done,
walk-through, flywheel, foso, geo-segmentación, concordancia de frase,
palabra clave negativa, Google Business Profile, LSA, click-to-call, DIY,
tasa de cierre / close-rate, diferenciador, IVA, inyección-extracción,
AITEX) **already had** a matching glossary entry before this check.

## 5. Boundaries — no website copy, no economic projections

Read every chapter in full (not sampled).

- **No website copy.** Ch6 (mensajes) explicitly states its own boundary in
  the lead paragraph: "Es estrategia de mensaje, no el anuncio... la
  redacción literal de titulares y textos es competencia del brief de la
  web y queda fuera de este documento." Content matches that promise
  throughout — promise/proof/objection/tone framing, never a literal
  headline or ad copy line.
- **No economic projections.** Ch8 (plan) is month-by-month qualitative
  actions + a proposed Ads budget curve + trigger-based scaling rules — no
  P&L, no break-even month, no year-by-year revenue curve. Ch9 (riesgos)
  explicitly defers full risk/economic analysis to the economic report.
  CAC/ticket unit economics (the one thing marketing is allowed to state per
  spec §2.3) are present (the −34/−22/−6 → +24/+54/+83 per-visit
  contribution figures) but nothing beyond single-visit unit economics.

**Verdict: clean**, no boundary violations found.

## 6. Layout — PDF render (Chrome headless, `file:///` URL)

Rendered via `chrome.exe --headless --disable-gpu --no-pdf-header-footer
--print-to-pdf`, extracted with `pdftotext -layout`, page-mapped with a
Python script, font table inspected with `pypdf`.

- **Page count:** 60 pages (verified via `pypdf.PdfReader` — the
  authoritative count; a naive form-feed split of the `pdftotext` output
  gives 61 because of a trailing empty split artifact, not a real page).
  **The previously-known "blank trailing page" cosmetic artifact is NOT
  present in this build** — page 60 carries real content (end of ch11,
  Fuentes) and its own footer page number "60". Good news, not previously
  expected.
- **Cover:** page 1, no page number printed on it (confirmed — cover page
  text has no trailing page-number line, unlike every subsequent page).
- **TOC → actual chapter-start pages, verified 1:1** by locating each
  chapter's `<h2>` text on its own page (not the TOC's own listing) via a
  Python re-scan of the extracted pages:

  | Chapter | TOC claims | Actual PDF page |
  | --- | --- | --- |
  | 01 Resumen ejecutivo | 3 | 3 ✓ |
  | 02 La marca | 7 | 7 ✓ |
  | 03 Público objetivo | 13 | 13 ✓ |
  | 04 Competencia y posicionamiento | 21 | 21 ✓ |
  | 05 Canales de adquisición | 28 | 28 ✓ |
  | 06 Mensajes por segmento | 36 | 36 ✓ |
  | 07 Diferenciación | 41 | 41 ✓ |
  | 08 Plan de lanzamiento | 45 | 45 ✓ |
  | 09 Riesgos y supuestos | 50 | 50 ✓ |
  | 10 Glosario | 53 | 53 ✓ |
  | 11 Fuentes / anexo | 57 → **58** (fixed) | 58 ✓ |

  **Found and fixed:** adding the 5 missing glossary entries (Check 4) grew
  ch10 by one page, pushing ch11 from page 57 to 58. The TOC's `Fuentes /
  anexo` row said 57 — updated to 58 and re-rendered to confirm the new
  number is exact (table above reflects the post-fix, re-verified state).
- **Chapter headers/page numbers:** every content page carries a footer
  page number (confirmed via `pdftotext` — every non-cover page's text ends
  with its own number, matching its position); chapter pages open with the
  `01`–`11` numeral + eyebrow + title, confirmed on each chapter's start
  page in the extracted text.
- **Fonts embedded:** confirmed no external/missing-font warnings from
  Chrome's render, and `pypdf` shows every page's `/Font` resources are
  self-contained (Type3 subset programs with `Widths`/`FontDescriptor`, or
  named embedded subsets like `HankenGrotesk-Italic`) — none reference an
  unembedded system font by name. **One cosmetic note, not fixed:** a
  handful of bold table-header / bold chart-number glyphs on ~7 pages
  render via the `Arial-BoldMT`/`ArialMT` fallback named in the CSS's own
  `--font-sans` stack (`"Hanken Grotesk", Arial, Helvetica, sans-serif`),
  rather than the embedded Hanken Grotesk variable font at that weight.
  This is a documented Chrome print-to-pdf limitation with **variable-weight**
  web fonts (it doesn't always instantiate an exact bold weight from a
  100–900 variable font when rasterizing for PDF, and falls through the
  CSS's own fallback chain) — not a missing embed, not a report defect, and
  visually a very close substitute (both are humanist sans-serifs). Fixing
  it properly would mean shipping separate static-weight WOFF2 files
  instead of one variable file, which is an asset-pipeline change (see
  `_template/build-assets.mjs`) out of scope for this check. Noting it for
  the founder's visual review rather than silently accepting it.
- **No split figures/tables across pages:** the CSS applies
  `break-inside: avoid` globally to `.cmp-table` and to every `<figure>`
  (both via the shared rule and an explicit inline `style="break-inside:
  avoid"` on every chart figure), and `break-before: page` on chapter
  headers. Spot-checked the extracted page boundaries around every table
  and SVG chart (Tabla 1.1, C1–C7, Tabla 4.1, Tabla 5.1, the riesgos table,
  the glossary `<dl>`) — none straddles a page boundary in the rendered
  output.

## 7. Coherence — espejo A/B/C + Madrid/Valencia table

- **Espejo A/B/C.** The trio "−34 € / −22 € / −6 €" (single visit) and
  "+24 € / +54 € / +83 €" (pack/2-piece) appears **identically** in four
  places: ch1 (resumen, prose), ch4 (competencia, Tabla 4.1), ch5 (canales,
  prose + Figure C4), and ch6 (mensajes, prose). Matrimonio gross prices
  (55 € / 69 € / 69–109 €) and brand-effect labels (erosiona/protege/eleva)
  also match across ch1's Tabla 1.1 and ch4's Tabla 4.1 verbatim. No
  numeric drift, no re-ordering of A/B/C, no chapter recommending one
  architecture over the others (each explicitly disclaims a
  recommendation, per pricing-decision.md §6).
- **Madrid/Valencia table.** The consolidated Tabla 5.1 (ch5, end of
  "market block" per spec §6) — population 989.933/242.820, ~4.1×, Trends
  #2/outside-top-5, CPC ~+30%, near-identical prices, geography 2–3
  clusters vs one ~20 km corridor — matches every woven mention elsewhere:
  the ch3 callout ("El mercado alcanzable: Madrid pesa unas 4×"), Figure C6
  (same chapter), and the ch8 launch-geography callout. No figure in the
  table contradicts a prose mention anywhere in the document.

**Verdict: clean**, no cross-chapter mismatch found.

---

## Fixes made

1. **5 glossary entries added** (`docs/business/reports/marketing-report.html`,
   `#glosario`): Alcanzabilidad (reachability), Biocida, Prueba social
   (social proof), ROESB, Segmentar (segmentation) — each a term used with a
   first-use parenthetical in the body but missing from the glossary
   (Check 4). The ROESB entry describes its regulatory function only; it
   does **not** assert the acronym's literal expansion, since neither the
   dossier nor the addendum spells it out and inventing one would violate
   the "never invent" rule.
2. **TOC page number corrected**: `Fuentes / anexo` row updated from `57` to
   `58` to reflect the one-page shift caused by fix #1 (Check 6). Re-rendered
   and re-verified the new number against the actual PDF.

No other edits were made. No chapter prose was rewritten.

## Other notes for the founder (not fixed here)

- **Minor content gap:** "+26 años de experiencia" (the founder's sanctioned
  credential, spec §2.1) is never used in the report. Not a guardrail issue
  — an opportunity the report currently skips. Would need a prose addition
  to ch2 or ch3, which is beyond this check's scope.
- **Cosmetic font-fallback quirk** in the PDF export (Check 6): isolated bold
  table/chart glyphs on ~7 of 60 pages render via Arial instead of the
  embedded Hanken Grotesk bold weight, a Chrome print-to-pdf limitation with
  variable fonts. Worth a glance during the founder's visual review; not
  blocking.

## REQUIRES-FOUNDER items

None. No invented number, no personal-data leak, no website copy, no
economic projection was found.
