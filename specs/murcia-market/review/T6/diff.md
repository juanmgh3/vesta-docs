class: medium

## git status --short -uall
```
 M business/research/murcia-market.md
 M specs/murcia-market/feature.md
?? .torq-flow/active
?? specs/murcia-market/review/T6/brief.md
?? specs/murcia-market/review/T6/report.md
```

## git diff HEAD
```diff
diff --git a/business/research/murcia-market.md b/business/research/murcia-market.md
index 7018216..f51f6c3 100644
--- a/business/research/murcia-market.md
+++ b/business/research/murcia-market.md
@@ -968,6 +968,154 @@ R2. This is an ordering for testing, not a channel decision.
 
 ## 8. Local operating costs, access rules and financing landscape
 
+Every row is read on the issuing body's own page or bulletin. No row decides whether the
+founder qualifies for anything: conditions are quoted, eligibility is not concluded.
+
+### 8.1 Autónomo cuota and the regional "Cuota Cero"
+
+The RETA cuota is set by national rules and is carried by reference from
+`market-dossier.md` §9.1 (tarifa plana €80/month for 12 months, extendable; afterwards
+by net-income bracket, ≈€205–300/month in the low-income phase). No regional modifier to
+the cuota itself was found: the regional instrument is a subsidy paid on top, below.
+
+| Figure | Value | Label | Source |
+| --- | --- | --- | --- |
+| Cuota Cero Ampliada — aid amount | One payment of **€2,920**, by bank transfer (Servicio Regional de Empleo y Formación, CARM) | FACT (1 source), provisional | CARM sede electrónica, *Programa de subvenciones Cuota Cero ampliada* ([sede.carm.es](https://sede.carm.es/web/pagina?IDCONTENIDO=4091&IDTIPO=240&RASTRO=c672%24m)); page updated 5-Oct-2026. Retrieved 2026-10. |
+| Who can apply | Persons "que causen alta inicial en RETA", or not registered in RETA in the two preceding years; also women returning to self-employment within two years of ceasing for birth, adoption or foster care | FACT (1 source), provisional | Same page. Retrieved 2026-10. |
+| Unemployment condition | "Estar desempleado no ocupado, al menos en el día inmediatamente anterior a la del alta en RETA" | FACT (1 source), provisional | Same page. Retrieved 2026-10. |
+| Location condition | Economic activity and domicilio fiscal in the Región de Murcia; registered in the IAE census | FACT (1 source), provisional | Same page. Retrieved 2026-10. |
+| Exclusion | Having been registered in RETA in the two years immediately before the date of effect of the application | FACT (1 source), provisional | Same page. Retrieved 2026-10. |
+| Deadline | 1 month from the RETA alta; convocatoria 25-Feb-2026 to 15-Oct-2026; altas from 1-Nov-2025 admitted | FACT (1 source), provisional | Same page; the 1-Nov-2025 date from the CARM autónomos portal ([autonomos.carm.es](https://autonomos.carm.es/-/01-03-cuota-cero-ampliada)), same body, not a second source. Retrieved 2026-10. |
+| Whether a domicile change of an existing alta counts as an alta for this aid | **NOT FOUND** — both CARM pages speak only of an initial alta or of no RETA registration in the two prior years | NOT FOUND | — |
+
+The founder's alta is recorded as done in `founder-inputs.md` Block 2 without its date or
+its region; whether the conditions above are met is not concluded here.
+
+### 8.2 Low-emission zone (ZBE)
+
+| Figure | Value | Label | Source |
+| --- | --- | --- | --- |
+| ZBE ordinance in force, Murcia municipality | **NOT FOUND** — the Ayuntamiento's ordinance list carries a mobility ordinance (25-Apr-2024) and the parking ordinance (16-Jun-2025), no ZBE ordinance | NOT FOUND | Ayuntamiento de Murcia, *Ordenanzas municipales* ([web.murcia.es](https://web.murcia.es/institucional/ordenanzas)), read 2026-10-05. |
+| What the mobility ordinance says | Art. 7: the Ayuntamiento "implantará progresivamente zonas bajas emisiones conforme a la normativa vigente"; no perimeter, schedule or vehicle rule | FACT (1 source), provisional | *Ordenanza de movilidad*, BORM no. 95, 25-Apr-2024 ([web.murcia.es](https://web.murcia.es/sites/default/files/2025-02/aprobac-definitiva-ordenanza-movilidad-2025.pdf)). Retrieved 2026-10. |
+| Technical project | Junta de Gobierno Local, 30-Dec-2025, item 9: approves the "Proyecto técnico para la implementación de una Zona de Bajas Emisiones (ZBE) en el municipio de Murcia", drafted by a Universidad Politécnica de Cartagena R&D group (expte. 2025/035/002293) | FACT (1 source), provisional | Extract of the session ([web.murcia.es](https://web.murcia.es/sites/default/files/2026-01/extracto_jgl_30xii2025.pdf)). Retrieved 2026-10. |
+| Status cross-check, earlier date (does not upgrade any label) | Defensor del Pueblo resolution of 3-Dec-2024: no ZBE approved in Murcia; the Ayuntamiento had not answered the Defensor's request | FACT (1 source), provisional | [defensordelpueblo.es](https://www.defensordelpueblo.es/resoluciones/declaracion-de-zonas-de-bajas-emisiones-en-murcia/). Retrieved 2026-10. |
+| Perimeter | **NOT FOUND** — the technical project document was not found published; press guesses (centre, El Carmen, Infante, from 2023) are not used | NOT FOUND | — |
+| What a ZBE requires of a private car used for work in Murcia | **NOT FOUND** — no ZBE rule in force was found, so none can be stated | NOT FOUND | — |
+| Molina de Segura (inner belt) | ZBE in force since 23-Dec-2024 (ordinance in BORM 27-Nov-2024), city centre; vehicles without the appropriate DGT label restricted; sanctions suspended until 3-Jan-2028; no exemption for professionals stated on the page | FACT (1 source), provisional | Ayuntamiento de Molina de Segura, *Zona de Bajas Emisiones* ([movilidad.molinadesegura.es](https://movilidad.molinadesegura.es/zona-de-bajas-emisiones/)). Retrieved 2026-10. |
+
+### 8.3 Regulated street parking (SER, formerly ORA)
+
+The ORA was replaced by the *Servicio de Estacionamiento Regulado* (SER): ordinance
+approved definitively and published in BORM no. 136, 16-Jun-2025
+([web.murcia.es](https://web.murcia.es/sites/default/files/2025-06/borm_orde_ser_estacionamientos.pdf));
+retrieved 2026-10. The ordinance states base tariffs "más I.V.A."; the VAT-included
+figures below are ESTIMATE (base × 1.21, rounded to the cent) and equal the figures the
+concessionaire publishes for Sectors A and B
+([aparcamurcia.com](https://aparcamurcia.com/adios-ora-hola-ser/)), a republication of the
+same ordinance, not a second source.
+
+| Figure | Value | Label | Source |
+| --- | --- | --- | --- |
+| Hours | Mon–Sat 9:00–14:00 and Mon–Fri 16:30–20:30; not applied on Sundays and holidays, Holy Saturday, the afternoons of 24 and 31 Dec, Saturdays in July and the whole of August (art. 7) | FACT (1 source), provisional | BORM 16-Jun-2025, link above. Retrieved 2026-10. |
+| Where | Sector A ("muy alta rotación"): the historic centre inside a polygon including Av. Primo de Rivera, Ronda de Levante, Paseo Garay, Paseo Marqués de Corvera, C/ Floridablanca and Plano de San Francisco. Sector B: from there out to a polygon including Ronda Norte, Av. Juan de Borbón, Av. de la Fama and Av. Ciudad de Almería. Sector C: out to a polygon including the A-30, Ronda Sur and Av. Juan Carlos I (Anexo I). The SER is implemented initially in Sectors A and B only | FACT (1 source), provisional | Same. Retrieved 2026-10. |
+| Zona azul, Sector A (max 90 min, no extension in the same area) | 30 min €0.30 · 60 min €1.15 · 90 min €1.90 | Base FACT (1 source), provisional; VAT-incl. ESTIMATE | Same, art. 29.1(a): base €0.2479 / €0.9504 / €1.5702. Retrieved 2026-10. |
+| Zona azul, Sector B (max 150 min) | 30 min €0.25 · 60 min €0.70 · 90 min €1.00 · 120 min €1.70 · 150 min €2.70 | Base FACT (1 source), provisional; VAT-incl. ESTIMATE | Same, art. 29.1(b). Retrieved 2026-10. |
+| Zona azul, Sector C (max 300 min) | 300 min €3.00 | Base FACT (1 source), provisional; VAT-incl. ESTIMATE | Same, art. 29.1(c): base €2.4793. Retrieved 2026-10. |
+| Zona verde (Sectors B and C) | Morning €2.05 · afternoon €1.45 · full day €2.80 | Base FACT (1 source), provisional; VAT-incl. ESTIMATE | Same, art. 29.1(g). Retrieved 2026-10. |
+| "Empresas o autónomos" modality | Up to 5 h/day in any zone without the sector's maximum stay; per vehicle €250/year, €30/month, €7.50/week or €2.05/day; digital ticket only. Conditions: natural or legal person holding a business, domicilio fiscal in the municipality of Murcia, no debts with the local treasury, and a vehicle that is "vehículo industrial" of ≤3,500 kg MMA and ≤7 m (art. 23.4, art. 29.6) | Base FACT (1 source), provisional; VAT-incl. ESTIMATE | Same. Retrieved 2026-10. |
+
+Reading (ANALYSIS): a job in Sector A during SER hours can be parked for at most 90
+minutes in one area (€1.90) and in Sector B for 150 minutes (€2.70); a job longer than
+that cannot be covered by one rotation ticket in the same area. Parking is a per-visit
+cost of €0 to €2.70 inside Sectors A–B during SER hours and €0 outside them, and it is
+not part of the model's travel input I6. Whether the operator's car is a "vehículo
+industrial" for the autónomo modality is not recorded in `founder-inputs.md` and is not
+concluded here.
+
+### 8.4 Fuel price reference
+
+Spanish government fuel-price service (*Geoportal de Gasolineras*, REST API,
+[sedeaplicaciones.minetur.gob.es](https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/FiltroCCAA/14)),
+snapshot timestamped 05/10/2026 20:06; retrieved 2026-10. Station prices are
+FACT (1 source), provisional — one snapshot of one service; the means and medians are
+ESTIMATE (computed over the stations listed).
+
+| Geography | Fuel | Stations | Mean €/l | Median €/l | Range €/l |
+| --- | --- | --- | --- | --- | --- |
+| Murcia municipality | Gasolina 95 E5 | 107 | 1.795 | 1.819 | 1.619–1.949 |
+| Murcia municipality | Gasóleo A | 108 | 1.888 | 1.939 | 1.733–1.999 |
+| Región de Murcia | Gasolina 95 E5 | 432 | 1.803 | 1.814 | 1.619–2.299 |
+| Región de Murcia | Gasóleo A | 454 | 1.896 | 1.929 | 1.700–2.349 |
+
+### 8.5 Travel per visit — model input I6 (€3.5) against the radii
+
+The model's I6 is €3.5 per visit: €7/day ÷ ≈2 visits/day, where €7/day is ≈40 km at
+≈€0.175/km all-in (fuel and wear) (`economic-model.md` I6; `pricing-decision.md` cost
+table). Revalidation below is ESTIMATE throughout. Base point: Glorieta de España, as in
+§1.6 (the operator's real base is not in this file). Distances are the §1.6 / §1.7 OSRM
+one-way road km (free-flow ESTIMATE). Per-visit cost is an out-and-back trip to one job
+at €0.175/km — an upper bound, since chaining two jobs in one day shares the legs.
+
+| Destination | Ring | One-way km | Out-and-back km | At €0.175/km | At €0.26/km |
+| --- | --- | --- | --- | --- | --- |
+| El Palmar | R2 (pedanía) | 8.0 | 16.0 | €2.80 | €4.16 |
+| Alcantarilla | R2 (belt) | 8.7 | 17.4 | €3.04 | €4.52 |
+| Molina de Segura | R2 (belt) | 12.5 | 25.0 | €4.38 | €6.50 |
+| Sangonera la Verde | R2 (pedanía) | 12.8 | 25.6 | €4.48 | €6.66 |
+| Las Torres de Cotillas / Beniel | R2 (belt) | 16.6 | 33.2 | €5.81 | €8.63 |
+| Ceutí | R2 (belt) | 20.4 | 40.8 | €7.14 | €10.61 |
+| Santomera | R2 (belt) | 20.5 | 41.0 | €7.17 | €10.66 |
+| Archena | R2 (belt) | 26.9 | 53.8 | €9.41 | €13.99 |
+| Orihuela | R3 | 29.6 | 59.2 | €10.36 | €15.39 |
+| Cartagena | R3 | 48.7 | 97.4 | €17.04 | €25.32 |
+| Torrevieja | R3 | 50.1 | 100.2 | €17.54 | €26.05 |
+| Lorca | R3 | 78.7 | 157.4 | €27.54 | €40.92 |
+
+The €0.26/km column is the IRPF tax-exempt mileage allowance for a private vehicle,
+Orden HFP/792/2023 ([boe.es](https://www.boe.es/buscar/doc.php?id=BOE-A-2023-16461));
+FACT (1 source), provisional, retrieved 2026-10. It is a fiscal reference ceiling, not a
+measured cost. Fuel-only cost per km at the §8.4 means and a consumption of 6 l/100 km
+(HYPOTHESIS: the car's model and consumption are not recorded in `founder-inputs.md`) is
+≈€0.108/km (petrol) and ≈€0.113/km (diesel), inside the model's €0.175 all-in figure.
+
+Reading (ANALYSIS):
+
+- **€3.5 holds inside ≈10 km of the base.** At €0.175/km, €3.5 pays an out-and-back of
+  20 km, i.e. a job up to 10 km away: the core, El Palmar and Alcantarilla fit; the
+  12–13 km pedanías and Molina de Segura cost €4.4–4.6; the outer belt towns (Ceutí,
+  Santomera, Archena) €7.1–9.4.
+- **The model's 40 km/day is an R2 day with chaining**, not an out-and-back day: two
+  separate out-and-backs to 12–13 km points already use ≈50 km. For an R2 base case
+  that works the whole belt, I6 is low; for an R1 plus near-pedanía case it holds. The
+  €0.175/km rate itself is the model's own figure and is not re-derived here.
+- **R3 costs €10–28 per visit out-and-back**, three to eight times I6, which is the cost
+  side of §1.7's "batched days or surcharge" reading.
+- Parking (§8.3, €0–2.70 per visit in Sectors A–B during SER hours) is a separate cost
+  the model does not carry.
+
+### 8.6 Financing landscape
+
+Instruments a new autónomo in Murcia can look at, read on the issuer's page. Conditions
+are as published; whether the founder meets them is not assessed.
+
+| Instrument | Issuer | Type | Amount | Conditions read | Label / source |
+| --- | --- | --- | --- | --- | --- |
+| **ICREF Financia 100** | Instituto de Crédito y Finanzas de la Región de Murcia (CARM) with partner banks | Bank loan with 100% Aválam guarantee | Up to €500,000 | Beneficiaries "autónomos y empresas"; investment or working capital; Euribor 1 year + 1–2% (set by the bank); 3–5 years for working capital, up to 12 for investment, possible 2-year grace; opening fee up to 0.5%; one-off guarantee fee 0.5%; line €68 M (€34 M banks + €34 M ICREF); page undated | FACT (1 source), provisional — [icref.carm.es](https://icref.carm.es/jsp/linea-autonomos.jsp). Retrieved 2026-10. |
+| **CIMM-Emprende 2026** (sub-line of ICREF) | Ayuntamiento de Murcia, with ICREF and Aválam | Bank loan, 100% Aválam guarantee, plus a subsidy | €15,000–30,000; subsidy up to €1,500 | For autónomos and pymes that are members of the CIMM (what membership requires: NOT FOUND); "tipos de interés bonificados" (rate not stated on the page); no opening or cancellation fees; allocation €300,000 in loans and €30,000 in subsidies; the subsidy covers costs such as the first two years' interest, notary fees or the guarantee fee; published 6-Apr-2026 | FACT (1 source), provisional — [web.murcia.es](https://web.murcia.es/noticia/autonomos-y-pymes-vinculados-al-cimm-podran-acceder-financiacion-de-hasta-30000-euros-con). Retrieved 2026-10. |
+| **Aválam SGR** (formerly UNDEMUR) | Regional mutual guarantee society, Banco de España supervised, re-guaranteed by CERSA | Guarantee before a bank | Amounts and guarantee fee **NOT FOUND** on the pages read | Viable project, up to date with public bodies, not in default registers; membership compulsory when the financing is signed, by at least one share of €300.51, refundable only after the guaranteed risk ends; project study free of charge; a project can be assessed before the alta as autónomo | FACT (1 source), provisional — [avalam.es](https://avalam.es/somos-avalam/), [FAQ](https://avalam.es/productos-y-servicios/preguntas-frecuentes/). Retrieved 2026-10. |
+| **ENISA Startups y pymes** (national reference) | ENISA | Participatory loan, no guarantees | €25,000–1,500,000 | Company "con personalidad jurídica propia" and domicilio fiscal in Spain, SME; natural persons are outside the condition; own funds at least equal to the loan; innovative business model; up to 7 years, up to 2 years' grace; real estate and finance excluded | FACT (1 source), provisional — [enisa.es](https://www.enisa.es/servicios/financiacion/startups-y-pymes). Retrieved 2026-10. |
+| **ICO Empresas y Emprendedores 2026** (national reference) | Instituto de Crédito Oficial, through banks | Loan, leasing, renting or credit line | Up to 100% of the financing need | Autónomos and entrepreneurs included; investment and liquidity; 1–20 years, up to 3 years' grace on principal; fixed or variable rate plus the bank's margin; the bank takes the credit risk and decides; valid in 2026 | FACT (1 source), provisional — [ico.es](https://www.ico.es/en/ico-empresas-y-emprendedores). Retrieved 2026-10. |
+| **MicroBank Microcrédito Negocios Convenio Entidades** | MicroBank | Microcredit | Up to €30,000 (natural persons), up to 100% of the project | Entrepreneurs, autónomos and microenterprises up to 9 employees and €2 M turnover; business plan and a viability report from a collaborating entity, both compulsory; up to 6 years, optional 6-month grace; fixed rate (figure not stated); no real guarantee | FACT (1 source), provisional — [microbank.com](https://www.microbank.com/es/productos/negocios-convenio.html). Retrieved 2026-10. |
+| **Cuota Cero Ampliada** | CARM, SEF | Non-repayable aid | €2,920 | See §8.1 | §8.1 |
+| INFO Murcia (Instituto de Fomento) — a line for a solo autónomo starting a service business | INFO | — | **NOT FOUND** | The open-calls list (read 2026-10-05) carries fairs, trade missions and vouchers for innovation, investment rounds and internationalisation, none aimed at starting a small service business; the FAIIP loan fund it lists excludes autónomos; its 2010 liquidity line for autónomos is closed. The *Incentivos Regionales* page on the CARM autónomos portal returned a bot-check page and was not read | NOT FOUND — [institutofomentomurcia.es](https://www.institutofomentomurcia.es/convocatorias-activas), read 2026-10-05 |
+| Cajamar — current entrepreneur or microcredit line | Cajamar Caja Rural | — | **NOT FOUND** | Only an expired 2018 conditions sheet was found on its site; no current line read | NOT FOUND |
+
+Reading (ANALYSIS): four of the instruments are written for autónomos at the small
+amounts a launch needs — ICO (bank decides), MicroBank (needs a collaborating entity's
+report), ICREF Financia 100 (Aválam guarantee and its €300.51 share) and CIMM-Emprende
+(needs CIMM membership); ENISA is written for companies, not natural persons. This is
+a list for the bank dossier, not a choice of instrument.
+
 ## 9. Headline parameter set, Granada deltas and gaps
 
 ## 10. Sources appendix
diff --git a/specs/murcia-market/feature.md b/specs/murcia-market/feature.md
index e26c118..07bded1 100644
--- a/specs/murcia-market/feature.md
+++ b/specs/murcia-market/feature.md
@@ -186,7 +186,7 @@ and no local keyword or CPC data.
   arithmetic on rows already in the file: no provider, price or count is added.
   Where a finding offers two fixes, take the one that claims less. _Verify:_ `grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"` (must print 0) and `grep -c "Spain proxy" business/research/murcia-market.md`.
   Accept: each of F-021 to F-040 is addressed; every changed figure is listed in the report with old value, new value and the source read; §1–§3 are untouched.
-- [ ] **T6 — Local operating costs, access rules and financing landscape** (structural).
+- [x] **T6 — Local operating costs, access rules and financing landscape** (structural).
   Fill §8. Autónomo cuota for an existing alta moved to Región de Murcia, and whether
   the regional "cuota cero" aid applies to this case (state the eligibility condition
   read on the CARM source; do not conclude eligibility); Murcia low-emission zone (ZBE)
@@ -261,6 +261,7 @@ and no local keyword or CPC data.
 | T4 | structural — `grep -c "^\| \*\*" business/research/murcia-market.md` (Scenario: sweep depth) | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `14` exit 0 (bold rows of §1–§3) | `34` exit 0 (14 + 20 provider rows); `git diff --numstat HEAD`: `158	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; label grep `0` exit 1; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `33`; protected-files diff stat empty | none |
 | T5 | structural — `grep -c "^### [67]\." business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `0` exit 1 | `8` exit 0; `git diff --numstat HEAD`: `239	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; label grep `0` exit 1; no FACT label ends a line; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `46`; protected-files diff stat empty | none |
 | T11 | structural — `grep -n "FACT (1 source" business/research/murcia-market.md \| grep -v -c "FACT (1 source), provisional"`; `grep -c "Spain proxy" business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural) | `0` exit 1 (grep -c on zero matches); `3` exit 0; `git diff --numstat HEAD`: `89	52	business/research/murcia-market.md`, first hunk at line 556 (§1–§3 untouched) | Triangulation skipped: text fix pass; re-reads: Trends split cells 69/31 → 70/30 (Murcia), 62/38 → 63/37 (Andalucía), 51/49 → 50/50 (Valencia), index columns confirmed; AEMET 12 monthly rows confirmed, Year row is AEMET's published "Año" row; San Javier CREM 940 / 4,779 and INE 940 / 4,778 both confirmed; counts 20 → 17 profiled, 6 of 20 → 6 of 17, 13 → 10 quote-only, reputation 3 → 2; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `48`; protected-files diff stat empty | none |
+| T6 | structural — `grep -c "^### 8\." business/research/murcia-market.md` | docs | n/a — docs repo, no package.json / tsc / eslint; tracked tree clean (`git diff --stat HEAD` empty) | n/a (structural); pre-change: `0` exit 1 | `6` exit 0; `git diff --numstat HEAD`: `148	0	business/research/murcia-market.md` | Triangulation skipped: structural research section, no behaviour; label grep `0` exit 1; no FACT label ends a line; TODO/TBD/lorem grep empty (exit 1); `NOT FOUND` count `56`; protected-files diff stat empty; 6 financing instruments with issuer-page conditions (ICREF Financia 100, CIMM-Emprende, Aválam, ENISA, ICO, MicroBank) plus Cuota Cero | none |
 
 ## Briefing
 
```
