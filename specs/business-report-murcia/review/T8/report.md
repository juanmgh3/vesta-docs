T8 is done. The PDF has 54 pages and is 1.44 MB. The cover has no page number, pages 2 to 54 are numbered in order, and all 13 TOC entries match the page each chapter starts on. `CHECK-murcia.md` traces 58 figures from chapters 1, 2, 7, 9 and 10, and every one matches its source. I found no transcription errors, so I didn't change any prose. Nothing is committed.

Files changed:
- `C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_template\build-charts.mjs` — fixes F-010 to F-015:
  - F-010: each sensitivity grid cell now has only a top line instead of a closed box.
  - F-011: the column headers are just Conservador / Realista / Optimista, which removes "Demanda conservador".
  - F-012: the Murcia median mark is gold (estimate colour), and the caption says "mediana estimada (marca dorada)".
  - F-013: a range with cents prints two decimals at both ends ("2,80–9,42 €").
  - F-014: months print as "oct. 2027".
  - F-015: operators in year 1, "24 barrios" and 0,175 €/km are now read from the JSON.
- `C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\charts.html` — regenerated.
- `C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-00-cover-toc.html` — the 13 TOC page numbers, taken from the render.
- `C:\Users\juanm\Documents\dev\vesta-docs\business\reports\business-report-murcia.html` — rebuilt; two builds in a row give the same hash.
- `C:\Users\juanm\Documents\dev\vesta-docs\business\reports\business-report-murcia.pdf` — new, rendered with the README's Chrome recipe.
- `C:\Users\juanm\Documents\dev\vesta-docs\business\reports\CHECK-murcia.md` — new: render checks, TOC against the PDF, the 58-row number trace, other checks, chart fixes, and 7 findings.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\business-report-murcia\feature.md` — T8 marked `[x]` and its evidence row added.

Deviations:
- F-015: the model has no field for year-1 operators. Rather than touch the model, I derive it from the year-2 row (`operators − newHire` = 1).
- F-014: once months read "oct. 2026", the 12 labels of the monthly bar chart overlapped in the PDF. I put month and year on two lines there.
- The October 2027 IVA point on the cash chart has no JSON field, so it is formatted from a fixed `"Oct-2027"`.
- I didn't update `review/findings.md` (it isn't in Scope), so F-010 to F-015 are still `open` there.

Concerns:
- The Checks line on the built HTML (regeneration diff against HEAD) returns exit 1. That's the intended regeneration, which isn't committed yet.
- The Checks placeholder grep on the built HTML can never come back clean: its 5 hits are random matches inside base64 font data. On the source fragments it finds nothing.
- Findings I reported rather than fixed (labels and scope, none a wrong number):
  1. The insurance figure "99–120 €" comes from `rc-insurance-quote.md`, which isn't in the list of allowed sources.
  2. The 1.230 € hotel example is chipped ESTIMATE, but the source tags it ANALYSIS.
  3. The 3.500 € municipal aid and the 2.500 € investment are chipped ESTIMATE; the source says FACT (secondary), so the chip is weaker than the source.
  4. Ch. 9's "150 a 400 € al mes" of ads only holds for the realistic scenario; the optimistic one reaches 600 €, and the sentence doesn't say which.
  5. Capacity (88 pieces) and material (1,5 €) are chipped FACT; the model labels them CAPTURED (founder input).
  6. Charts print "4768 €" while tables and prose print "4.768 €", because the number formatter only adds the thousands point above four digits.
- I did the chip-label check for each traced figure, not every chip in the report.

## Verification output

$ model regeneration check (safety net) → exit 0
$ charts + report regeneration check against HEAD (safety net) → exit 0 (before the chart fixes)
$ external references grep on the built HTML → 0, exit 1
$ placeholder grep on the built HTML → 5 base64 font lines (19, 47, 49, 50, 51), exit 0; on the source fragments → exit 1
$ PDF page count (safety net, before the render) → FileNotFoundError, exit 1

$ node business/reports/_template/build-charts.mjs && node business/reports/_template/build-report.mjs; echo "exit $?"   (after the chart fixes and the label split)
C:\Users\juanm\Documents\dev\vesta-docs\business\reports\business-report-murcia.html: 14 fragments, 8 svg, 3351706 chars
exit 0

$ "C:/Program Files/Google/Chrome/Application/chrome.exe" --headless --disable-gpu --no-pdf-header-footer --virtual-time-budget=15000 --print-to-pdf="C:/Users/juanm/Documents/dev/vesta-docs/business/reports/business-report-murcia.pdf" "file:///C:/Users/juanm/Documents/dev/vesta-docs/business/reports/business-report-murcia.html"; echo "exit $?"
1441364 bytes written to file C:/Users/juanm/Documents/dev/vesta-docs/business/reports/business-report-murcia.pdf
exit 0

$ TOC check (pdftotext -enc UTF-8 -layout + python: each TOC entry against the page it opens on and that page's printed footer)
TOC dashes left: 0
01 Resumen ejecutivo toc=3 pdf_index=3 printed=3 Match
02 Las dos primeras semanas toc=6 pdf_index=6 printed=6 Match
03 La empresa y el servicio toc=10 pdf_index=10 printed=10 Match
04 El mercado de Murcia toc=12 pdf_index=12 printed=12 Match
05 La competencia toc=18 pdf_index=18 printed=18 Match
06 El cliente y cómo llegar a él toc=26 pdf_index=26 printed=26 Match
07 Precios toc=29 pdf_index=29 printed=29 Match
08 Captación de clientes toc=33 pdf_index=33 printed=33 Match
09 Costes por servicio y costes fijos toc=36 pdf_index=36 printed=36 Match
10 Proyecciones toc=39 pdf_index=39 printed=39 Match
11 Crecimiento: segundo operario y segunda máqui toc=46 pdf_index=46 printed=46 Match
12 Riesgos y supuestos toc=48 pdf_index=48 printed=48 Match
13 Glosario y fuentes toc=51 pdf_index=51 printed=51 Match
mismatches 0
pages 2-54 footers numeric & sequential: True

$ python -c "import pypdf,sys;r=pypdf.PdfReader('business/reports/business-report-murcia.pdf');print(len(r.pages))" && grep -c "Match" business/reports/CHECK-murcia.md; echo "exit $?"
54
81
exit 0

$ final Checks: model regen → exit 0; charts + report regen → html differs from HEAD (intended, uncommitted), exit 1; external refs → 0; placeholder grep on fragments → exit 1; PDF pages → 54; protected files unchanged → exit 0

$ sha256sum business/reports/business-report-murcia.html business/reports/_src/murcia/charts.html | cut -c1-16   (before and after one more build)
62e46db0310387aa
56e9328ae8409eac
62e46db0310387aa
56e9328ae8409eac
