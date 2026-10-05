## Open findings
- F-007 — open — this diff only appends §6–§7 after line 688; §1.3:91 and §1.6:193-195 are untouched
- F-019 — open — murcia-market.md:61-63 still read "FACT (2 publications)"
- F-020 — open — :119 still plain FACT, :120 "FACT (2nd source)", :123 verdict unchanged
- F-021 — open — §4.3 not touched
- F-022 — open — §4.3 not touched
- F-023 — open — §5 not touched
- F-024 — open — §5 not touched
- F-025 — open — §5 not touched
- F-026 — open — §5 not touched
- F-027 — open — §4 not touched
- F-028 — open — §4 not touched
- F-029 — open — §5 not touched

(The line numbers for F-007 and F-019 to F-029 are unchanged, because the hunk starts at line 688.)

## Important
- business/research/murcia-market.md:923 — The neighbourhood-association row says it reaches "the premium cluster of §2.2 (Santa María de Gracia, El Carmen, San Lorenzo)". §2.2 does not support that. Its cluster is centro, Vistalegre, La Flota and only the southern edge of Santa María de Gracia (:388-391). Santa María de Gracia as a zone is "Below the premium cut-off (1.17×)" (:350). El Carmen does not appear in §2.2's zones, its top-ten sections or its cluster. How it fails: the verdict word "premium" is used against the file's own criterion. The test ordering at :927-928 ("reach the premium cluster directly") then rests on the wrong barrios.
- business/research/murcia-market.md:706-709 — The split column and the two index columns cannot all come from the one request :696 cites. Both are per-region shares of the same pull, so (index colchones / index sofás) ÷ (split colchones / split sofás) must be the same in every region. Taking the rounding bounds of each cell, that quotient is 1.18–1.35 for Murcia and 1.26–1.39 for Andalucía, but 1.00–1.07 for Madrid and 1.01–1.10 for Valencia. The ranges do not overlap. How it fails: the label at :712 says every cell is a FACT from that single tool, geo and date read, and the arithmetic says otherwise. Either one column comes from a different read (for example single-term requests) or a cell is mis-transcribed. The conclusion at :729-730 ("highest mattress share") still holds on either column, but the provenance has to be re-read or stated.
- business/research/murcia-market.md:821-822 and :908 — The Spain search curve slides into Murcia demand. In a Murcia-specific climate reading, ":822 the mattress search high (§6.2) falls in July–September" never says it is Spain-wide. :908 then calls §6.2 "the household curve" and builds the B2B "reverse" window on it. How it fails: §6.2's own heading (:736) and :753-754 say no Murcia curve exists and Spain is only a proxy. Both later uses present the proxy as measured Murcia household demand. Each needs "(Spain proxy)", and :908 should not call it a household curve.

## Minor
- business/research/murcia-market.md:756-761 — "Peak over trough ≈1.7×" and "highest quarter is July–September" take the max and min of 12 means. Each mean is built from 3–5 values on a scale that only runs 5–17, and no spread is shown. How it fails: the reading claims to "agree with" market-dossier §5.4, which says no clean annual cycle (:347-351), then adds a seasonal peak that this data cannot separate from noise. Either state the spread or drop "adds one thing".
- business/research/murcia-market.md:802 — The Year row does not follow from the 12 monthly rows. Sunshine sums to 2,953, not 2,967; the 14 h gap is more than the 6 h rounding of 12 integers can produce. Mean daily min averages 12.21, not 12.3; rounding allows 12.16–12.26. Rainfall sums to 295, not 297, which is within rounding. How it fails: either a monthly cell is mis-transcribed or the row is AEMET's own published annual value, and the text does not say which.
- business/research/murcia-market.md:813-814 — "Least favourable month (December)" is not singled out by the criterion stated on the line before (warm and low humidity). January is colder (16.6 °C max, 10.6 mean) while December is more humid, so neither is worse on both counts. "Mild" and "moderately humid" are verdict words with no criterion.
- business/research/murcia-market.md:773 — "FACT (displayed band)" is not the exact label wording the Constraints require. The executor's label grep cannot catch it because it only searches the "FACT (1 source" stem. The carried band also drops the addendum's unresolved conflict: for "limpieza de sofás", Ubersuggest shows 1.3K and Ahrefs shows under 100 (trends-keywords-addendum.md:186, :232).
- business/research/murcia-market.md:925 — "Category existence FACT (1 source), provisional (§4.1 sources)" has no URL and no "Retrieved 2026-10", which the Constraints require on every FACT row.
- business/research/murcia-market.md:921 — "Largest daily of the region" is a verdict word with no source and no criterion.
- business/research/murcia-market.md:924 — It says word of mouth is "the dominant channel" and cites market-dossier §6.4. The dossier says "a dominant channel" (:458), rated MODERATE, from a 2019 Spain survey about home repairs, not cleaning.
- business/research/murcia-market.md:696 — The brief asks for "the core terms". Only 2 of the addendum's 9 are read, and nothing says why the other 7 were dropped. That includes "ácaros", the term the dossier (§5.4) used as its growth signal.

## Cannot verify from diff
- business/research/murcia-market.md:866 — The register cross-check gives San Javier 940 dwellings / 4,779 plazas, against INE's 940 / 4,778 at :853. A 2026 count of platform listings and a 2024 count of licensed dwellings matching exactly on dwellings, and within 1 plaza, is unlikely. One row may have been copied from the other; it needs re-reading at the source.
- All the Trends, Ubersuggest, AEMET, INE (tables 39363, 2076, 2072), Informajoven, register-PDF ("24 vecin-") and core-address (:893) values could only be checked for internal consistency.

Checks that came out clean:
- R2 belt: 80 dwellings and 430 plazas. R2 total: 857 dwellings and 4,120 plazas. R3: 9,910 dwellings and 48,177 plazas.
- 7,284 of 9,910 = 73.5%, which rounds to the 74% claimed. 9,910 ÷ 857 = 11.6×.
- Every municipality in §7.1 sits in the ring §1.6 puts it in, and "30–79 km" matches §1.7.
- The 7 residence figures sum to 794.
- Climate rows: mean 18.6, max 24.9, humidity 58 and rain days 36.5 all agree with their Year values.
- §6.2: the peak is Sep 12.0, the trough Dec 7.2, the ratio 1.67, and the data counts are 59 and 50 out of 60. The tables mix no geographies, the evidence row's numbers match the final run, and no private individuals or personal data appear.

Memory: I added two lines to C:\Users\juanm\.claude\agent-memory\reviewer-opus\feedback_review_heuristics.md. One is the index-vs-split consistency check for Trends tables; the other is to check back-references to an earlier verdict set against the section that defined it.
