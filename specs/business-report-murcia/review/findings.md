# business-report-murcia — findings
- F-001 Important fixed T2 README.md:49 — the superseded list leaves out economic-model.md and economic-model-engine.mjs, which the Constraints say the README must mark superseded
- F-002 Minor fixed T2 README.md:53 — economic-report labelled "(Madrid/Valencia)" though that report is city-agnostic; the city comparison lives in the marketing report
- F-003 Minor fixed T2 README.md:45 — lists murcia-model.mjs before T2 creates it (resolves itself when T2 lands)
- F-004 Important fixed T9 business/research/murcia-model.mjs:145 — cash trough looks only at the 12 month-ends and excludes the Oct-2027 payment of Jul–Sep IVA; A × conservador trough −923 understates the year-end cash net of IVA owed (−974)
- F-005 Minor fixed T9 business/research/murcia-model.md:118 — §3 "what changed" omits the hire-trigger change (annual average) and does not say troughs are no longer comparable with the old reports because of the IVA timing
- F-006 Minor fixed T9 business/research/murcia-model.md:108 — "single-piece paid visit" basis not stated; pricing-decision §4.2 gives −€22.48 for the same notion on another basis, the model gives −18.08
- F-007 Minor fixed T9 business/research/murcia-model.mjs:248 — founder→owner milestone marked at Y5 and never re-checked; in Y7–Y8 demand exceeds hired capacity and the state lapses
- F-008 Minor fixed T9 business/research/murcia-model.mjs:343 — JSON `market` block hand-copies price map, grids and rings with no per-figure label or source; "~€149" stored as 149
- F-009 Minor open business/research/murcia-model.mjs:360 — Granada price-map rows all carry "FACT (1 source)" and "granada-market.md §4" from one constant; the Happy Clean anchors (colchón individual, sillón, silla) are graded differently in the source and silla appears only in §3
