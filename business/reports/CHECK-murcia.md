# CHECK — Murcia business report (T8)

> Verification pass on `business/reports/business-report-murcia.pdf`, rendered from
> `business-report-murcia.html` with the template README's headless-Chrome recipe
> (absolute `file://` URL, `--virtual-time-budget=15000`, `--no-pdf-header-footer`).
> Text read with `pdftotext -enc UTF-8 -layout`; pages counted with `pypdf`; chart
> pages inspected as PyMuPDF renders. Run 2026-10-07.
>
> Sources traced against: `murcia-market.md`, `murcia-model.md`,
> `murcia-model-tables.md`, `murcia-model-data.json`, `pricing-decision.md`,
> `aids-and-eu-branding.md`, `marketing-research-addendum.md`. The private calibration
> file was not opened.

**Result: DONE_WITH_CONCERNS.** 54 pages, 1.44 MB. Every figure in the §3 table matches its
source; six label or scope items that do not match are listed in §6, not in the table;
no transcription error found, so no prose was changed. Seven findings are
listed at the end for the orchestrator: label or scope items, none a wrong number.

---

## 1. Render

| Check | Expected | Observed | Verdict |
| --- | --- | --- | --- |
| Page count | ≥ 40 | 54 | Match |
| File size | ≥ 1 MB | 1,441,364 bytes | Match |
| Cover | no page number | last line of page 1 is the chip legend | Match |
| Content pages | numbered | pages 2–54 print 2–54 in order | Match |
| TOC placeholders | no "—" left | 0 on page 2 | Match |

## 2. TOC page numbers against the PDF

The cover counts as page 1 (README §2). Each chapter's first page was found by its
numeral heading and its printed footer read.

| Chapter | TOC | Opens on page | Printed footer | Verdict |
| --- | --- | --- | --- | --- |
| 01 Resumen ejecutivo | 3 | 3 | 3 | Match |
| 02 Las dos primeras semanas | 6 | 6 | 6 | Match |
| 03 La empresa y el servicio | 10 | 10 | 10 | Match |
| 04 El mercado de Murcia | 12 | 12 | 12 | Match |
| 05 La competencia | 18 | 18 | 18 | Match |
| 06 El cliente y cómo llegar a él | 26 | 26 | 26 | Match |
| 07 Precios | 29 | 29 | 29 | Match |
| 08 Captación de clientes | 33 | 33 | 33 | Match |
| 09 Costes por servicio y costes fijos | 36 | 36 | 36 | Match |
| 10 Proyecciones | 39 | 39 | 39 | Match |
| 11 Crecimiento | 46 | 46 | 46 | Match |
| 12 Riesgos y supuestos | 48 | 48 | 48 | Match |
| 13 Glosario y fuentes | 51 | 51 | 51 | Match |

## 3. Numbers — chapters 1, 2, 7, 9 and 10

Chip = the chip printed next to the figure; Source label = the label the source gives.

| Ch. | Figure in report | Traces to | Chip / source label | Verdict |
| --- | --- | --- | --- | --- |
| 1 | 479.405 habitantes | murcia-market.md §1.1 (479,405, INE) | FACT / FACT (1 source), provisional | Match |
| 1 | casco urbano 138.997; 59 pedanías | murcia-market.md §1.2 | FACT / FACT (1 source), provisional | Match |
| 1 | 704.814 personas, ≈250.700 hogares; cinturón a 9–27 km | murcia-market.md §1.7 R2 row | ESTIMATE / ESTIMATE | Match |
| 1 | costa, Cartagena y Lorca 666.428; 30–79 km | murcia-market.md §1.7 R3 row | ESTIMATE / ESTIMATE | Match |
| 1 | medianas sofá 3 plazas 100 €, colchón matrimonio 67 € | murcia-market.md §5 (M20) | ESTIMATE / medians ESTIMATE | Match |
| 1, 2 | grid B 49 / 69 / 89 / 95 €, mínimo 70 € | pricing-decision.md §4.2 | none (called a proposal) / PROPOSAL | Match |
| 1 | 17 proveedores, 6 con precio por tamaño, 10 sin precio | murcia-market.md §4.1, M16 | ESTIMATE / ESTIMATE (lower bound) | Match |
| 1, 2 | dos especialistas con más de 30 reseñas, 66 y 37 | murcia-market.md §4.3 (Limpiezalto 66, TapiClean 37) | FACT / FACT | Match |
| 1 | Google Maps, ocho resultados por búsqueda | murcia-market.md §4 sweep method | FACT / FACT | Match |
| 1, 2, 7, 9 | pieza suelta −18,08 €, dos piezas +40,33 € | murcia-model-tables.md T8 row B | ESTIMATE / ESTIMATE | Match |
| 1, 2, 7, 9 | captación 71 € (banda 36–111 €) | murcia-model.md I19 | ESTIMATE / ESTIMATE | Match |
| 1, 10 | año uno B realista: 14.877 € brutos, 4.768 € resultado | murcia-model-tables.md T1 summary, T4 | ESTIMATE / ESTIMATE | Match |
| 1, 10 | caja mínima −91 € en octubre; primer mes positivo noviembre; acumulado positivo febrero 2027 | murcia-model-tables.md T4 B realista | ESTIMATE / ESTIMATE | Match |
| 1, 10 | B conservador: 139 €, caja −548 € en enero | murcia-model-tables.md T4 B conservador | ESTIMATE / ESTIMATE | Match |
| 1, 9 | 3,5 € válido hasta unos 10 km | murcia-model.md §2.1; murcia-market.md §8.5 | ESTIMATE / ESTIMATE | Match |
| 1 | Molina 4,38 €, Santomera 7,18 €, Cartagena 17,05 € | murcia-market.md §8.5 table | ESTIMATE / ESTIMATE (M25) | Match |
| 1, 9 | viaje 4,5 €, aparcamiento 1 € por visita | murcia-model.md I6, I7 | ESTIMATE / ESTIMATE | Match |
| 1, 2, 9 | SER sector A 1,90 € por 90 min; sector B 2,70 € por 150 min | murcia-market.md §8.3 | ESTIMATE / VAT-incl. ESTIMATE | Match |
| 1, 2, 9 | fijos 186 € con tarifa plana, 356 € después | murcia-model.md I8, I9; Table 9.2 sums 80+30+50+25+1 and 250+30+50+25+1 | ESTIMATE / mixed, RC part ESTIMATE | Match |
| 1, 9, 10 | equilibrio B 3,4 / 8,8 / 11,8 piezas (186 / 486 / 656 €) | murcia-model-tables.md T7 | ESTIMATE / ESTIMATE | Match |
| 10 | equilibrio A 4,4 / 11,5 / 15,5 y C 2,9 / 7,6 / 10,3 | murcia-model-tables.md T7 | ESTIMATE / ESTIMATE | Match |
| 1, 10 | mes más cargado del año uno: 56 piezas | murcia-model-data.json year1 (max pieces 56, optimista × A, Sep-2027) | none / model output | Match |
| 1, 2 | RC 25 €/mes con 150.000 € de cobertura | murcia-model.md I10 | ESTIMATE / ESTIMATE | Match |
| 1, 2 | Cuota Cero 2.920 €, cierra 15-oct-2026 | murcia-market.md §8.1; aids-and-eu-branding.md §1 | FACT / FACT (1 source), provisional | Match |
| 1, 2 | SEF autónomo 6.000–9.900 € | aids-and-eu-branding.md §2 | FACT / FACT | Match |
| 2 | medianas con IVA igualado 57 € y 70,8 € | murcia-market.md §5 (M20 €67 / €70.8) | ESTIMATE / ESTIMATE | Match |
| 2 | distancias: El Palmar 8, Alcantarilla 8,7, Molina 12,5, Archena 26,9; Cartagena 48,7, Lorca 78,7 km | murcia-market.md §1.6–§1.7, §8.5 | ESTIMATE / ESTIMATE | Match |
| 2, 9 | ida y vuelta 2,80–9,42 € en el cinturón; Lorca 27,55 € | murcia-market.md §8.5 (M25) | ESTIMATE / ESTIMATE | Match |
| 2 | viviendas turísticas 9.910 en R3 frente a 857 en R2 | murcia-market.md §7.3 (M23) | ESTIMATE / R2, R3 ESTIMATE (sums) | Match |
| 2 | reseñas: 89 % (Skeepers) y 75 % (Barómetro) | marketing-research-addendum.md R2/R4 | FACT / FACT (1 source) each | Match |
| 2 | prórroga de tarifa plana: cada mes mueve el año uno 170 € | murcia-model.md I8, I9 (356 − 186 = 170) | ESTIMATE / derived | Match |
| 7 | de cada 100 € la empresa se queda 82,6 € | pricing-decision.md §3.2 | FACT / FACT | Match |
| 7 | grid A 39 / 55 / 69 / 72 €, mínimo 55 €; grid C 49/65/79, 69/89/109, 95/119/145 € | pricing-decision.md §4.1, §4.3 | none (proposal) / PROPOSAL | Match |
| 7 | mezcla 50 % matrimonio, 20 % individual, 25 % sofá 3 plazas, 5 % king | murcia-model.md M1 | ESTIMATE / ESTIMATE | Match |
| 7 | precio medio 56,75 / 72,50 / 82,81 € | murcia-model.md I1–I3 | none (proposal) / PROPOSAL | Match |
| 7 | T7.2: 46,90 / 59,92 / 68,44; 42,35 / 55,36 / 63,88; −31,10 / −18,08 / −9,56; +14,30 / +40,33 / +57,38 | murcia-model-tables.md T8 | ESTIMATE / ESTIMATE | Match |
| 7, 10 | piezas para amortizar la captación 1,7 / 1,3 / 1,1 | murcia-model-tables.md T9 (ratios, CAC payback) | ESTIMATE / ESTIMATE | Match |
| 7 | estudio de julio −34 / −22 / −6 € | pricing-decision.md §4.4 | ESTIMATE / ESTIMATE | Match |
| 7 | packs de Madrid y Valencia 97 / 119 / 169 € | pricing-decision.md §2.2; market-dossier.md §2.1 | FACT / FACT | Match |
| 9 | 0,175 €/km todo incluido | murcia-market.md §8.5; murcia-model-data.json market.rings travel note | none / ESTIMATE | Match |
| 9 | 40 % de trabajos en zona de pago | murcia-model.md I7a | HYPOTHESIS / HYPOTHESIS | Match |
| 9 | gasolina 1,80 €, gasóleo 1,89 € (medias del municipio) | murcia-market.md §8.4 (1.795 / 1.888) | ESTIMATE / means ESTIMATE | Match |
| 9 | 0,11 €/km solo combustible a 6 l/100 | murcia-market.md §8.5 (≈0.108 / ≈0.113) | HYPOTHESIS / derived on assumed consumption | Match |
| 9 | 58,42 € sin material; 92 % del precio neto | 59,92 − 1,5; 55,36 ÷ 59,92 = 92,4 % (murcia-model-tables.md T9) | ESTIMATE / ESTIMATE | Match |
| 9 | cuota 250 €, centro de 205–300 € | murcia-model.md I9; pricing-decision.md §3.1 | FACT / FACT (band) | Match |
| 10 | curvas: anuncios 2→6 y resto 0→12 (realista, 1,8 ppv); 1→2 y 0→7 (1,5); 3→10 y 1→18 (2) | murcia-model-data.json inputs.scenarios (murcia-model.md I13) | ESTIMATE / ESTIMATE | Match |
| 10 | Tabla 10.1, los doce meses de B realista | murcia-model-tables.md T1 | ESTIMATE / ESTIMATE | Match |
| 10 | 12.295 € sin IVA; 1.087 € de IVA pendiente; caja de septiembre 5.855 € | murcia-model-tables.md T1 summary and Sep-2027 row | ESTIMATE / ESTIMATE | Match |
| 10 | A realista 2.097 € y −318 €; C realista 6.517 € y −54 €; diferencia 4.420 € | murcia-model-tables.md T4 (6,517 − 2,097) | ESTIMATE / ESTIMATE | Match |
| 10 | Tabla 10.2, nueve combinaciones (p. ej. A conservador 4.852 / −974; C optimista 30.474 / 15.579) | murcia-model-tables.md T4 | ESTIMATE / ESTIMATE | Match |
| 10 | años 2–3 B realista: 24 y 34 visitas, 43 y 61 piezas, 37.584 y 53.244 €, 19.028 y 30.386 € | murcia-model-tables.md T5 | ESTIMATE / ESTIMATE | Match |
| 10 | conservador 5.154 y 8.496 €; optimista 36.025 y 26.837 € | murcia-model-tables.md T5 | ESTIMATE / ESTIMATE | Match |
| 10 | utilización 70 % en el año 3 y 84 % en el año 4 | murcia-model-tables.md T6 (69.5, 84.0) | none / ESTIMATE, HYPOTHESIS | Match |
| 10 | Tabla 10.3, años 2–8 (p. ej. año 4 38.856 €, año 8 26.728 €) | murcia-model-tables.md T6 | HYPOTHESIS / HYPOTHESIS from Y4 | Match |
| 10 | sueldo 1.860 €/mes, segunda máquina 2.300 € | murcia-model.md I20, I21 | HYPOTHESIS / ESTIMATE, CAPTURED | Match |
| 10 | caja acumulada 189.562 € al cierre del año 8 | murcia-model-tables.md T6 Y8 | HYPOTHESIS / HYPOTHESIS | Match |
| 10 | ratios 92,4 %, 1,3 piezas, 38,8 %, 25,9 % | murcia-model-tables.md T9 column B | ESTIMATE / ESTIMATE | Match |
| 10 | con 1,5 piezas por visita: unas 34 piezas y unos 2.000 € menos | 114 visits × 0.3 = 34.2 pieces; 34.2 × (59.92 − 1.5) ≈ 1,998 € | ESTIMATE / derived | Match |

58 rows, every one a Match. No figure in these chapters was found without a source.

## 4. Other checks

| Check | Method | Result | Verdict |
| --- | --- | --- | --- |
| External URLs | `grep -c 'href="http\|src="http\|url(http'` on the HTML | 0 | Match |
| Placeholders | `grep -n "TODO\|TBD\|lorem"` on `_src/murcia/*.html` | no hit (exit 1) | Match |
| Placeholders in the built HTML | same grep on `business-report-murcia.html` | 5 hits, all inside base64 font data (lines 19, 47, 49, 50, 51) | Match (false positive, see F-7) |
| Charts | 7 inline SVG charts plus the logo, each with caption, source and chip | 8 `<svg>` | Match |

## 5. Chart fixes (F-010 to F-015)

Done in `build-charts.mjs`, charts and report rebuilt, PDF re-rendered.

- F-010: the sensitivity grid draws a top hairline per cell instead of a closed rect.
- F-011: column headers are the scenario names from `SCEN_ES` (Conservador /
  Realista / Optimista), so no "Demanda conservador".
- F-012: the Murcia median mark uses `.chart__bar--estimate`; the caption says
  "mediana estimada (marca dorada)".
- F-013: a range with a cent amount prints two decimals at both ends ("2,80–9,42 €").
- F-014: months print as "oct. 2027"; in the monthly bar chart month and year sit on
  two lines so the twelve labels do not collide.
- F-015: year-1 operators come from the Y2 row (`operators − newHire`), "24 barrios"
  from `market.rings[0].scope`, and 0,175 €/km from the rings' travel note.

## 6. Findings (not transcription errors; prose left as written)

- F-1 ch. 2 "pólizas básicas … entre 99 € y 120 € al año" (FACT) comes from
  `rc-insurance-quote.md`, which is not in the feature's list of number sources;
  `murcia-model.md` I10 cites that file. The figure is right; the source is outside the list.
- F-2 ch. 7 hotel example "unos 1.230 €" is chipped ESTIMATE; `pricing-decision.md`
  tags the paragraph [ANALYSIS].
- F-3 ch. 2 municipal aid 3.500 € (closed 20-jul-2026) and the 2.500 € + IVA
  investment condition are chipped ESTIMATE; `aids-and-eu-branding.md` labels both
  FACT (secondary). The chip is weaker than the source, not stronger.
- F-4 ch. 9 "anuncios … de 150 a 400 € al mes en el primer año" is the realista
  schedule; the optimista one reaches 600 € (`inputs.scenarios.optimista.ads`). The
  scenario is not named in that sentence (ch. 10 does name it).
- F-5 ch. 1, 7, 9 capacity 88 piezas and material 1,5 € are chipped FACT;
  `murcia-model.md` I12 and I5 label them CAPTURED (founder input). The chip set has no
  CAPTURED, so FACT is the nearest; noted for consistency.
- F-6 charts print four-digit figures without the thousands point ("4768 €",
  "2097 €") while tables and prose print "4.768 €": `num()` groups only above four
  digits. Not in F-010 to F-015, left as is.
- F-7 the Checks' placeholder grep matches base64 font data in the built HTML, so it
  can never come back clean; it is meaningful only on `_src/murcia/*.html`.

## 7. Post-review fixes (T14, 2026-10-07)

- Chart thousands separator: `int.length > 3` in `build-charts.mjs`, so four-digit euro figures print as "4.768 €" like the prose.
- `rc-insurance-quote.md` added to the allowed sources in the feature document; the 99–120 € figure stands.
- Ch. 9 ads sentence scoped to the realista scenario (finding 4).
- Ch. 13 legend: Fact also covers figures declared by the founder (finding 5).
- Findings 2 and 3 of §6 need no change (Estimate for a calculation; the secondary-source aid rows were downgraded on purpose at F-030).
- The 71 € CAC row's source label is "ESTIMATE / HYPOTHESIS" (murcia-model.md I19); the report keeps the Estimate chip and states the unsourced close rate in ch. 8 and ch. 12.
- The §4 placeholder grep over the built HTML hits base64 data URIs (one font, four webp images); the Checks now strip data URIs first.
- Re-rendered after these edits; TOC re-checked against the PDF (see the log in the feature document).
