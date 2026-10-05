## Open findings
- F-007 — open — the diff only adds §8 (from line 969 on) and does not touch line 91 or lines 193-195
- F-019 — open — line 61 untouched
- F-020 — open — lines 119-123 untouched
- F-041 — open — line 690 untouched
- F-042 — open — line 718 untouched
- F-043 — open — line 943 untouched
- F-044 — open — line 795 untouched
- F-045 — open — line 962 untouched (sits before the hunk at 968)

## Minor
- business/research/murcia-market.md:1029-1030 — the parking reading says "€0 to €2.70 per visit inside Sectors A–B during SER hours", but the zona verde row at :1024 (Sectors B and C) lists a full day at €2.80. The upper bound also leaves out the case the same paragraph raises: a job longer than 90 or 150 min, which needs more than one ticket. How it fails: a 2–3 h job in Sector B zona verde costs €2.80, above the stated ceiling. Either drop the ceiling or say it only covers one zona azul ticket.
- business/research/murcia-market.md:1022, :1024, :1025 — the Sector B, zona verde and "empresas o autónomos" rows are labelled "Base FACT (1 source), provisional; VAT-incl. ESTIMATE" but give no base figure. Sector A (:1021) and Sector C (:1023) do give one. How it fails: the FACT the label grades is not in the row, so the ×1.21 cannot be recomputed. The concessionaire cross-check at :1013-1015 covers Sectors A and B only, so nothing backs the zona verde and autónomo-pass figures at all. I recomputed A and C and they are exact: 0.2479→0.30, 0.9504→1.15, 1.5702→1.90, 2.4793→3.00.
- business/research/murcia-market.md:1062, :1067, :1068, :1070, :1072 — some cells in the €0.175 column round a half cent down and others round it up. Alcantarilla 3.045→€3.04, Santomera 7.175→€7.17, Archena 9.415→€9.41, Cartagena 17.045→€17.04 and Lorca 27.545→€27.54 go down, while Molina 4.375→€4.38 (:1063) and Torrevieja 17.535→€17.54 (:1071) go up. This is a floating-point artefact. How it fails: the cents don't change any reading, but the column cannot be reproduced under a single rounding rule. Every other cell checks: all km match §1.6 lines 161-177 and 184-185, out-and-back is 2 × one-way, and the €0.26 column is exact.
- business/research/murcia-market.md:1086 — "the outer belt towns (Ceutí, Santomera, Archena)". §1.6 (:164, :167, :169) and the R2 definition at :203 class all three as **inner** belt, and "outer" is §1.7's word for R3. How it fails: a reader maps "outer belt" to R3 and gets the cost/ring reading wrong. Use "the farther inner-belt towns".
- business/research/murcia-market.md:1107 — ICO's amount cell reads "Up to 100% of the financing need", which is a share, not the amount range the brief asks for. How it fails: the bank dossier gets no euro ceiling for this line. The Accept counts conditions, not amounts, so it is still met: six instruments with issuer-page conditions.
- business/research/murcia-market.md:1113-1114 — "written for autónomos at the small amounts a launch needs" uses a verdict word ("small") with no criterion. ICREF's cell goes up to €500,000 and ICO's cell has no euro figure. How it fails: this breaks the Constraint that a verdict word needs a stated criterion. Reword to "open to autónomos".

## Cannot verify from diff
- business/research/murcia-market.md:998-999 — the ordinance list dates the mobility ordinance 25-Apr-2024 (BORM 95), but the linked PDF is `2026…/2025-02/aprobac-definitiva-ordenanza-movilidad-2025.pdf`, a file named "definitive approval … 2025" uploaded in Feb 2025. It could be a later re-upload, or a 2025 definitive approval of a text initially approved in 2024. T7 should confirm which BORM publication is the one in force.
- business/research/murcia-market.md:1025 — the autónomo-pass tariffs (€250/yr, €30/month, €7.50/week, €2.05/day) and the "vehículo industrial" condition can only be checked against the BORM text.
- The web-read conditions themselves (Cuota Cero, ICREF, CIMM, Aválam, ENISA, ICO, MicroBank, Molina ZBE, the 30-Dec-2025 Junta de Gobierno extract) cannot be opened from here.

Checked and clean, so not listed above:
- The €3.5 = €7/day ÷ 2 split, 40 km × €0.175 and the "all-in" basis all match economic-model.md:20 and pricing-decision.md:187.
- Fuel per km is correct: 6 × 1.795 = 0.108 and 6 × 1.888 = 0.113. The 6 l/100 km consumption is labelled HYPOTHESIS.
- The §8.6 multiples hold: 2.96× and 7.87× match "three to eight times".
- The cuota figures carried at §8.1 match market-dossier.md:543-553.
- No sentence concludes the founder's eligibility. The alta is placed in Block 2 without a date or region, which is correct (founder-inputs.md:69-72), and the car's type, consumption and base are all declared as not recorded.
- The ZBE technical project is not presented as a rule in force: perimeter and requirements are NOT FOUND.
- No private names appear.
- The "none" in the feature.md T6 row sits under the Refactor column, which is correct.

No Critical or Important findings. The diff meets the brief and the Accept.
