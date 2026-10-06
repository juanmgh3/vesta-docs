## Open findings
- F-010 — open — T10 does not touch build-charts.mjs (belongs to T8)
- F-011 — open — same
- F-012 — open — same
- F-013 — open — same
- F-014 — open — same
- F-015 — open — same
- F-016 — open — T10 does not touch ch-04-mercado.html
- F-017 — fixed — feature.md:179, :202, :211, :221 and Checks :242 (and T10's own :193) all read `grep -n "TODO\|TBD\|lorem"`. Inside bash double quotes `\|` stays literal, so GNU BRE treats it as alternation and the check works.
- F-018 — fixed — ch-02-arranque.html:65-68
- F-019 — fixed — ch-01-resumen.html:42, :81-82, :84; ch-02-arranque.html:97-98, :151-152, :155-156, :178; ch-03-empresa.html:46, :79
- F-020 — fixed — ch-01-resumen.html:43
- F-021 — fixed — ch-01-resumen.html:33-35
- F-022 — fixed — ch-02-arranque.html:130-143
- F-023 — fixed — ch-02-arranque.html:109-111
- F-024 — fixed — ch-02-arranque.html:169-171, :201-204; ch-01-resumen.html:106-109. The new defects in the same block are listed below as new findings.
- F-025 — fixed — ch-02-arranque.html:172-176
- F-026 — fixed — ch-03-empresa.html:94-96
- F-027 — open — several items listed in the verdict are still at their lines:
  - ch-01-resumen.html:47: "Google Maps muestra ocho resultados por búsqueda" still has no chip. It also drops the source's "up to 8, limited view" (murcia-market.md:549, :566).
  - ch-03-empresa.html:11 ("deja por escrito lo que la empresa es hoy") and ch-03-empresa.html:48-50 ("distinto es lo que hace falta para no competir solo en precio") are the generic lines flagged at T4 :11-12 and :49-50. The first was only trimmed; the second is unchanged.
  - ch-01-resumen.html:118-119: "El resto de este informe está al servicio de esas dos decisiones" survives from the flagged :107-108.
  - ch-03-empresa.html:68: "La capacidad no es el problema del primer año; la demanda sí" is the flagged "no X sino Y" with a semicolon in place of "sino".

## Important
- ch-02-arranque.html:185 — "Las tres ayudas tienen la misma puerta, un alta reciente y haber estado en paro el día anterior" is false for the Ayuntamiento line. The same paragraph says so at :198-199 ("sería la única sin la condición de paro previo"), and ch-01-resumen.html:105 says only "dos de ellas" carry that condition. ch-01-resumen.html:104's "todas con plazo contado desde el alta" is also wrong for the 3.500 €: that line runs on an alta date window (1-Jul-2025 to 30-Jun-2026) and a fixed close on 20-Jul-2026 (aids-and-eu-branding.md:56). How it fails: the two chapters contradict each other on the aid conditions, and ch-02 contradicts itself within one paragraph, under a Fact chip.
- ch-01-resumen.html:110 ("exige mostrar en la web") and ch-02-arranque.html:222 ("Logotipos NextGenerationEU en la web") — this turns an item the source leaves open into an instruction. aids-and-eu-branding.md:99-100 lists as open "Whether Kit Digital paid for the website … or for another solution; the logo obligation attaches to the subsidized solution either way". ch-02:209 correctly says "la solución subvencionada". How it fails: if the bono paid for something other than the site, the checklist has the founder display an EU funding statement on a site the EU did not fund.

## Minor
- ch-01-resumen.html:96 — the heading "Tres cosas antes del primer servicio" now introduces four items (seguro, ficha, fecha del alta, "Y una obligación…" Kit Digital at :109). How it fails: the count in the heading is wrong.
- ch-02-arranque.html:199-200 — "Con un alta anterior a julio de 2026, los plazos … habrían vencido" sets a narrower condition than the recorded bound at :170 (alta "ya estaba hecha en julio de 2026", captured 2026-07-07). It says nothing about an alta on 1–7 July, which is exactly the case the model's own I11 hypothesis implies (nine months left, step-up July 2027, murcia-model.md:29). Even that alta's two-month window closed by early September. This is still on the right side of eligibility. ch-01:107's "lo normal es que esos plazos hayan pasado" is also acceptable as a bound. The ch-02 conditional should simply follow the recorded date.
- ch-02-arranque.html:191-194 — Fomento line:
  - "inversión mínima de 2.500 €" drops "+ IVA" (aids:43) in a report whose prices are IVA-included. A reader takes it as 2.500 € gross.
  - That row is FACT (secondary) (FROET, "not read on the sede page"), yet it sits under a plain Fact chip.
  - The line also omits the "not in RETA in the 12 months before" condition (aids:41), the one condition that depends on the alta history, while the Cuota Cero list was completed for that very reason.
- ch-02-arranque.html:211-212 — "durante al menos doce meses" and "visibles al entrar" come from a FACT (secondary) row (aids:70, "not read in the bases") and are folded under a Fact chip.
- ch-02-arranque.html:213-214 — "Las ayudas regionales … no traen ningún logotipo europeo" carries Fact. Only Cuota Cero has a FACT row for this (aids:30). For the SEF Fomento line the claim sits in the ANALYSIS reading (aids:78-79), so the chip overclaims.
- ch-02-arranque.html:113-114 — "En la costa está casi todo el alquiler turístico … 9.910 viviendas" assigns the whole R3 count to the coast. R3 includes Lorca and Cieza (murcia-market.md:210, :938, :941). The fix is to say "en el anillo exterior".
- ch-02-arranque.html:142-143 — "pedirlas solo a clientes con servicio hecho cumple ese requisito" goes further than the source. The legal duty is to disclose whether and how reviews are verified (addendum:247); asking only completed-job clients is the process, not the disclosure (addendum:248-249).
- ch-02-arranque.html:181-182 — "Pedir la prórroga a tiempo vale más que casi cualquier ahorro del primer año" is an unsourced comparative of the same kind as the cut "mueve la caja más que cualquier anuncio".
- ch-02-arranque.html:212 — "No es un adorno que se elige; es parte de la justificación del bono" adds a new instance of the "no X; es Y" construction that F-027 asked to remove.

## Cannot verify from diff
- Whether the tarifa plana extension has to be requested ("pedir la prórroga", ch-02:181, :221). market-dossier.md:543 says only "extendable … if", so the procedure is not in any allowed source.

Clean: the placeholder grep is fixed in all five places plus the T10 line and works under bash quoting. No founder name appears in the three fragments or the rebuilt HTML. The following figures trace with matching value and label:
- 2.920 €, 6.000–9.900 €, 2 months, demandante the day before, the incompatibility, 3.500 €, the window and 20-Jul-2026, the 2027 edition as Hypothesis, the three publicity elements, and the domicile-change case as Not found;
- the tarifa plana extension (dossier §9.1);
- 75–90 min and Lorca at more than two hours (§1.7);
- 9.910 / 857 as Estimate (M23);
- 89 % / 75 % kept apart;
- 250 € / 186 € / 356 € / 170 €;
- the owner state Y5–Y6 with the lapse from Y7.

I added one lesson line to C:\Users\juanm\.claude\agent-memory\reviewer-opus\feedback_review_heuristics.md: test summary sentences about a group of items against each item, and catch source open items turned into instructions.

Files: C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\ch-01-resumen.html, ch-02-arranque.html, ch-03-empresa.html; C:\Users\juanm\Documents\dev\vesta-docs\specs\business-report-murcia\feature.md; C:\Users\juanm\Documents\dev\vesta-docs\business\research\aids-and-eu-branding.md
