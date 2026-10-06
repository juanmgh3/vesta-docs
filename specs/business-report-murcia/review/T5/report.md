T5 done by the orchestrator (main thread): chapters 4–6 written as fragments, build runs, every load-bearing figure carries its chip. The fixes for F-027 to F-030 (ch. 1–3, applied after the T10 review) are in the committed tree for the reviewer to confirm.

Files changed:
- `business/reports/_src/murcia/ch-04-mercado.html` — three rings (table 4.1 and the rings chart), the belt towns (table 4.2), household size and age, income per household vs per person, income by census section and the premium criterion (table 4.3, 1.5× the municipal per-person mean), the high-income pool (34 of 387 sections, ≈12,200 households; Molina ≈1,560), segment per ring (table 4.4), the B2B pool (tourist dwellings, hotels, residences, the seasonal hypothesis). 44 chips.
- `business/reports/_src/murcia/ch-05-competencia.html` — the 17 providers (table 5.1: type, published prices as published, travel, Google reviews, method and guarantee), the reading of the field (transparency 6 of 17, two multi-province lists, reputation two specialists ≥30, method norm, no lab certification found, guarantees, travel policy, no published minimum), the price map (table 5.2 and the price-map chart) with the "not a cheaper market" reading and who sets the range ends, the white space. 21 chips.
- `business/reports/_src/murcia/ch-06-publico.html` — who buys (segment sizes, 55+ wealth and spending), why (under-diagnosis as a two-source qualitative fact with the sponsored figures as Estimate, mite counts as Hypothesis to be dropped, relief over elimination, show the resolved state, UV-C as mechanism Fact / conversion Hypothesis, no status motive), what the 45–65 buyer trusts (inbound phone and the no-cold-call law, reviews with the few-credible hypothesis and the verified-reviews duty, seals, financial literacy, word of mouth 40 % / 25 %, 88 % global), messages per segment (45–65, allergy, pets, the centre, B2B with the biocide caveat), the name (11 of 13 generic names, empty emotional axis, Vesta's white space as Hypothesis). 32 chips.
- `business/reports/business-report-murcia.html` — rebuilt.
- `specs/business-report-murcia/feature.md` — T5 marked `[x]`, evidence row, Progress line.

Sources by chapter: ch. 4 → `murcia-market.md` §1.1–§1.7, §2.1–§2.2, §3.1–§3.4, §7.1–§7.3; ch. 5 → `murcia-market.md` §4.1–§4.3, §5, `market-dossier.md` §2–§3 as cited there; ch. 6 → `murcia-market.md` §3.4, `marketing-research-addendum.md` R1, R2, R4, R6, R7 and its load-bearing table, `market-dossier.md` §6.4, `pricing-decision.md` §4.1 (DIY spray) and §5.3 (zone pricing).

Deviations:
- Madrid's income figure is left out of ch. 4 because `murcia-market.md` §2.1 labels it CONFLICTING against the old dossier and the template has no chip for that; Granada, Valencia and the national figures are shown.
- The "any allergy 23 %" regional figure is shown as what exists, with the Murcia dust-mite rate marked Not found.
- Provider table rows are compressed (six columns); figures are as published, "desde" kept, VAT basis stated where the provider states it; Limpiezalto's cuna price is omitted.
- The B2B outsourcing pattern (dossier §6.4 "qualitative, MODERATE") is chipped Estimate, a downgrade, because the template has no MODERATE chip.

## Verification output

$ node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-04-mercado.html business/reports/_src/murcia/ch-05-competencia.html business/reports/_src/murcia/ch-06-publico.html && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-0[456]*.html; echo "exit $?"
C:\Users\juanm\Documents\dev\vesta-docs\business\reports\business-report-murcia.html: 14 fragments, 8 svg, 3285783 chars
business/reports/_src/murcia/ch-04-mercado.html:44
business/reports/_src/murcia/ch-05-competencia.html:21
business/reports/_src/murcia/ch-06-publico.html:32
exit 1
(exit 1 is the placeholder grep finding nothing)

$ grep -c "<tr>" business/reports/_src/murcia/ch-05-competencia.html
27   (17 provider rows + 8 price rows + 2 header rows)

$ grep -n -i "cabe destacar\|es importante\|en este sentido\|por otro lado\|además\|sin embargo\|por tanto\|sino " business/reports/_src/murcia/ch-0[456]*.html
ch-06-publico.html:39 — one "sino", kept (single use)
