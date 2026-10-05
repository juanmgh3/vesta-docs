## Open findings
- F-007 — fixed — business/research/murcia-market.md:91-97 (re-read of 60134, "highest in Spain" corrected to the highest of the 50 provinces, with Ceuta and Melilla above it) and :196-200 (ADRH one-person rows re-read)
- F-019 — fixed — business/research/murcia-market.md:61-63
- F-020 — fixed — business/research/murcia-market.md:122, :123 (now called a consistency check), :126 (verdict reworded)
- F-041 — fixed — business/research/murcia-market.md:695-697 (I recounted the eight §5 rows: low ends Sercomanga 3 + tie, Clean-Home 2, Happy Clean 2; high ends Limpiezalto 4, Happy Clean 2, Clean-Home 1, Brillamu 1. Matches.)
- F-042 — fixed — business/research/murcia-market.md:724-725
- F-043 — fixed — business/research/murcia-market.md:949-950
- F-044 — fixed — business/research/murcia-market.md:800-805
- F-045 — fixed — business/research/murcia-market.md:966
- F-046 — fixed — business/research/murcia-market.md:1033-1036, :1101-1102
- F-047 — fixed — business/research/murcia-market.md:1026, :1028, :1029 (every base × 1.21 recomputes to the cent)
- F-048 — fixed — business/research/murcia-market.md:1067-1080 (I recomputed every cell in both columns, half-up, and all are correct)
- F-049 — fixed — business/research/murcia-market.md:1093
- F-050 — fixed — business/research/murcia-market.md:1115
- F-051 — fixed — business/research/murcia-market.md:1121

## Critical
- business/research/murcia-market.md:1138 (M1), with :34, :35 and :183 — The label on the headline population row breaks the Constraints' exact-wording rule, and the file contradicts itself. M1 reads "FACT — two publications of one register". Its own second-source cell says the Ayuntamiento figure is "same Padrón, not an independent measurement", and :39-41 says "two publications, not two measurements". The label standard needs a second *independent* source, otherwise "FACT (1 source), provisional". By the file's own admission there is none.
  - :34 keeps plain "FACT" on 479,405.
  - :35 labels the Ayuntamiento press release, a single source, "FACT (2nd source)". That is non-standard wording, and it claims the very second source that :39-41 denies.
  - :183 repeats "FACT (two publications of one register)".
  - How it fails: the bank dossier and the model take M1 as a graded two-source FACT when it is one register. This is the same inflation F-019 and F-020 were raised for on the pedanía and 45–64 rows, left on the most load-bearing row.
  - On the executor's declared doubt: the strict reading applies. Relabel :34, :35, :183 and M1 to "FACT (1 source), provisional", and keep the Ayuntamiento figure as an agreeing publication of the same register.

## Minor
- business/research/murcia-market.md:1183 (G4) — The Granada value is quoted as "≈97,000", but granada-market.md:274 states "≈93,000–100,000 (mid ≈97,000)". §9.2's own rule (:1176, "carried as that file states them") is broken. The ratios (0.51× / 1.76×) are right on the mid, but the swap drops Granada's band.
- business/research/murcia-market.md:1189 (G10) — The delta "+4" compares two different criteria:
  - Granada's "2 with real published prices" (granada-market.md:280) counts Happy Clean's no-size "desde €45" (G9).
  - Murcia's 6 counts only per-size lists (:619-622).
  - On Granada's criterion Murcia has 7, since LavaYa publishes "desde" figures, so the like-for-like delta is +5. The note should name the criterion difference.
- business/research/murcia-market.md:1200 and :1212 — The §9.3 ranking states effects the file does not derive.
  - :1200: "Acquisition cost drives the margin more than any pool figure" is unlabelled and nothing in §1–§8 computes it.
  - :1212: "Moves R1 by a few percent" understates the file's own range. The district sizes run 2.6–2.8 (:104-111), and the old city sits at 2.6 (:386). 138,997 ÷ 2.6 ≈ 53,500 against 49,600 is +7.8%.
  - Fix: label the ranking ANALYSIS and give the 2.6–2.8 band instead of "a few percent".
- business/research/murcia-market.md:1132 — "Every FACT in the table was re-opened at its source" is false for the FACT figures carried in M21/M22 (Ubersuggest €3.04 and 70/month, explicitly "Not re-opened"). The same overclaim is in specs/murcia-market/feature.md:271 ("every §9 FACT confirmed unchanged"). Scope both to "every FACT behind a model input", or list the exceptions.
- business/research/murcia-market.md:592 — M19 (:1156) records that Biomex's "desde €55" is no longer on its Murcia page, only on its national prices page. The §4.2 row was not updated and still presents the figure under both links as a Murcia-page price. The figure is unchanged, but the provenance in its home section is now stale.

## Cannot verify from diff
- Every "Confirmed" re-read in the last §9.1 column (M1–M29), the 60134 ranking (Ceuta 3.07, Melilla 3.13), and the BORM no. 95 page headers. These rest on live sources, and the report is the only evidence.
- Of the executor's declared doubts, M1 is judged under Critical. M16 as ESTIMATE / lower bound is defensible: it is weaker than Granada's G10 FACT, consistent with :564-566, and not stronger than its home section. No finding.

The rest of the requested checks found nothing:
- Traceability: every other M row matches its cited section in value, unit, geography and label.
- Recomputed sums and ratios all match: M3 225,409, M5 666,428, ≈79,500 / ≈248,500 households, the 857 / 9,910 / 48,177 B2B sums, every median, and each G-row ratio.
- Gaps: every listed gap maps to a real NOT FOUND, HYPOTHESIS or CONFLICTING item in §1–§8.
- §10 covers §1–§8 and the load-bearing URLs.
- Stale values: none remain. The only "€3.04" left is the legitimate Ubersuggest CPC at :795/:807/:1158.
- Constraints: no price decision, no report copy, no personal names.
