T3 is done. The build runs end to end, and the report comes out with 8 inline SVGs (the 7 charts plus the cover wordmark) and no external references. The chapter headers follow the TOC order. F-009 is fixed in the model script.

**Files changed**
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-model.mjs`: fixes F-009. Each Granada price-map row now has its own label and source section from `granada-market.md`, replacing the single shared "FACT (1 source) / §4" constant:
  - colchón individual: "FACT (1 source, weak — no size split)", §4, §7 G9
  - colchón matrimonio and king: "FACT (1 source)", §3, §4
  - sofá 2 plazas: "FACT (1 source)", §4, §7 G8
  - sofá 3 plazas: "FACT (1 source; same brand FACT-graded in Valencia)", §4, §7 G7
  - chaise longue: "FACT (own site, this pass)", §3
  - sillón: "FACT (own site)", §3, §4, with a note that §4 treats it as a directional signal only
  - silla: "FACT (own site)", §3
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-model-data.json`: regenerated (only the `market.priceMap[*].granada` fields changed). `murcia-model-tables.md` is byte-identical to before.
- `C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_template\build-charts.mjs`: new. It reads the model JSON and writes 7 SVG figures to `charts.html`: year-1 monthly result B × realista, cumulative cash for B in the three demand scenarios, break-even vs capacity, sensitivity grid, years 1–8 trajectory, price map and service rings. Each caption has its source and an empty chip slot. All values come from the JSON.
- `C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_template\build-report.mjs`: new. It reads the `ch-NN-*.html` fragments in order, inlines `embedded-assets.css` and `report.css`, places the charts and writes `business-report-murcia.html`. It stops with an error on an unknown chart, an empty chip, an unclosed marker, or any external `href`/`src`/`url(`/`@import`.
- `C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\charts.html`: generated.
- `C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-00-cover-toc.html`: the cover with the brief's title, subtitle, "Documento interno · octubre 2026", the inline wordmark and a five-chip legend, plus a TOC of the 13 chapters with "—" page placeholders.
- `C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-01-resumen.html` … `ch-13-glosario-fuentes.html`: chapter headers only (ids `cap-1`…`cap-13`), plus chart markers in ch-04, ch-05 and ch-10.
- `C:\Users\juanm\Documents\dev\vesta-docs\business\reports\business-report-murcia.html`: build output.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\business-report-murcia\feature.md`: T3 marked `[x]` and its evidence row added.

**Deviations**
- **Chart markers in the fragments.** The brief says the fragments hold only their header, but the acceptance needs at least 7 inline charts. I put the markers where the charts belong: rings in ch-04, price map in ch-05, and the five model charts in ch-10. Each marker is written `<!-- chart:ID -->CHIP<!-- /chart -->`, so the fragment supplies the chip that fills the caption's slot.
- **Chips are placeholders.** I followed the economic report: Estimate for the model charts, Hypothesis for the years 1–8 trajectory (the growth rule is a hypothesis), and Fact + Estimate for the price map and the rings. The prose tasks (T4–T7) can change them.
- **Chapter titles and eyebrows are mine** (Spanish, short), and so are the Spanish names in the charts ("B · Igualar mercado", city and scope labels). They are not figures.
- **Cover legend** has the five chips the Constraints name. Proposal is left out, although the price grids are labelled PROPOSAL.
- **Wordmark** is copied from `economic-report.html` without the `xmlns` attributes, which inline SVG doesn't need.
- **F-009 is still "open" in `review/findings.md`.** That file isn't in Scope, so I didn't change it. You need to mark it fixed.

**Concerns**
- The verify command ends with `exit 1`. That is the last `grep -c` finding no matches (count `0`), which is the result we want, not a failure.
- I checked the charts visually in headless Chrome. The trough labels in the sensitivity grid overflowed their cells, so I split them onto two lines. I didn't check the full PDF layout; that is T8.
- The rings caption hard-codes "0,175 €/km". It matches `murcia-market.md` §8.5 and the JSON's travel note, but it isn't read from a numeric field.
- Numbers use Spanish format: "." for thousands only above four digits, "," for decimals, and "€" after the number.

## Verification output

$ node business/research/murcia-model.mjs && git diff --exit-code --stat -- business/research/murcia-model-tables.md business/research/murcia-model-data.json; echo "exit $?"   (safety net, before changes)
```
warning: in the working copy of 'business/research/murcia-model-data.json', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'business/research/murcia-model-tables.md', LF will be replaced by CRLF the next time Git touches it
exit 0
```

$ node business/reports/_template/build-charts.mjs && node business/reports/_template/build-report.mjs && grep -c "<svg" business/reports/business-report-murcia.html && grep -c 'href="http\|src="http\|url(http' business/reports/business-report-murcia.html; echo "exit $?"   (baseline)
```
Error: Cannot find module 'C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_template\build-charts.mjs'
...
Node.js v24.14.0
exit 1
```

$ node business/research/murcia-model.mjs && git status --short -- business/research/; echo "exit $?"
```
 M business/research/murcia-model-data.json
 M business/research/murcia-model.mjs
exit 0
```

$ node business/reports/_template/build-charts.mjs && node business/reports/_template/build-report.mjs && grep -c "<svg" business/reports/business-report-murcia.html && grep -c 'href="http\|src="http\|url(http' business/reports/business-report-murcia.html; echo "exit $?"   (final)
```
C:\Users\juanm\Documents\dev\vesta-docs\business\reports\business-report-murcia.html: 14 fragments, 8 svg, 3223356 chars
8
0
exit 1
```

$ sha256sum (before) / node business/research/murcia-model.mjs && build-charts && build-report && sha256sum (after)
```
run 1:
cc0e0d2af6f070e92556bb15c44ebba147a4d636df1423717b17adf148eec21c *business/reports/_src/murcia/charts.html
58d8e8b4396b3f1adb7d1a4497d7cceb9824070ec5d42262fd8acc15916e6daf *business/reports/business-report-murcia.html
9722af15b925dced1387c2f9dd424aec7abd021a9a8c87a49dd46a163843eda2 *business/research/murcia-model-data.json
257d03357a1e2ac01d909a1e00dd46bc6048caf9c252509d75b020283c4b6afd *business/research/murcia-model-tables.md
run 2:
cc0e0d2af6f070e92556bb15c44ebba147a4d636df1423717b17adf148eec21c *business/reports/_src/murcia/charts.html
58d8e8b4396b3f1adb7d1a4497d7cceb9824070ec5d42262fd8acc15916e6daf *business/reports/business-report-murcia.html
9722af15b925dced1387c2f9dd424aec7abd021a9a8c87a49dd46a163843eda2 *business/research/murcia-model-data.json
257d03357a1e2ac01d909a1e00dd46bc6048caf9c252509d75b020283c4b6afd *business/research/murcia-model-tables.md
```

$ grep chapter-header__title labels | diff - toc labels; echo "diff exit $?"
```
--- toc order
diff exit 0
```

$ grep -c 'figure-caption__source.*class="chip' business/reports/business-report-murcia.html; grep -c '<!-- chip -->' business/reports/business-report-murcia.html; git status --short -- business/research/murcia-model-tables.md
```
7
0
```
exit 0 (the second grep exits 1 on no matches; tables.md not modified)
