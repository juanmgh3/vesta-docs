T9 is done. All seven findings, F-008 to F-014, are fixed in §2–§3 of `murcia-market.md` at the lines the findings name. No Murcia figure and no Madrid cell changed. Both verify counts went up as expected: 15 → 18 "provisional" and 1 → 3 "CONFLICTING". Nothing is committed.

Files changed:
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-market.md`:
  - **F-008:** the Murcia income row is now "FACT (1 source), provisional", and it says the AEAT cross-check supports only the per-person ordering, not the per-household one.
  - **F-009:** the Madrid cell is labelled CONFLICTING. I re-read the source (INE table 53689, 2023): €48,806 per household and €18,142 per person. The note names the series and the year.
  - **F-010:** National, Granada, Valencia and all AEAT cells are now "FACT (1 source), provisional". The INE press release is called a republication, not a second source.
  - **F-011:**
    - Added a scope note: the AEAT "National" column is the common tax territory, which excludes País Vasco and Navarra, so it is not Spain.
    - Dogs per inhabitant is recomputed against an INE Spain-wide population.
  - **F-012:** one stated verdict rule, applied to all 8 zones: Premium if a zone's per-person income is at least 1.5× its own municipality's mean. Sections that pass the cut-off alone are named but do not change the zone's verdict. The analysis bullets that depended on the old wording were updated to match.
  - **F-013:** the summary sentence now says R1 population is FACT (1 source), provisional, and R2 and R3 population are ESTIMATE.
  - **F-014:** the Valencia per-person gap now reads ≈14% (−13.7%); Granada stays at −13.2%.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\murcia-market\feature.md`: T9 marked `[x]` and its row added to the evidence table.

Comparison figures that changed:
- **Spain dogs per inhabitant:** ≈0.20 → ≈0.19. The denominator was 45,678,948 (the AEAT common-territory figure) and is now 48,320,520, the Spain-wide population at 1-Jul-2023 from INE table 56940, row "Total Nacional. Todas las edades". The 9,201,109 dogs and the regional ≈0.15 are unchanged.
- **Madrid:** €48,806 and €18,142 were confirmed at the source and not changed. The same rows give €45,726 for 2022, so `market-dossier.md`'s €43,037 matches neither of the two latest years.

Deviations:
- **F-011:** the regional ratio still divides by the AEAT figure (1,571,933), so no Murcia figure moves. As a check, I added INE's 1,558,016 for the region at 1-Jul-2023, which also gives ≈0.15.
- **F-012:** the old "Upper-middle" label was a second verdict word with no rule behind it, so I replaced it with "Below the premium cut-off" plus the ratio.
- **Altorreal:** under the new rule it is no longer Premium. Its ratio is 1.494×, just under 1.5×; the old text rounded it to "≈1.5×". This changes a verdict, not a figure.

Concerns:
- **REIAC rows in §3.3:** they still say "FACT (1 source)" without "provisional". They weren't in the findings, so I didn't touch them.
- **Pet-household anchor in §3.3:** the 49% / 61% row is labelled CONFLICTING, which is one of the 3 CONFLICTING hits. It was there before this task.

## Verification output

$ ls package.json; git diff --stat HEAD; grep -c "provisional" business/research/murcia-market.md; echo "exit $?"; grep -c "CONFLICTING" business/research/murcia-market.md; echo "exit $?"   (safety net, pre-change)
```
ls: cannot access 'package.json': No such file or directory
 business/research/murcia-market.md     | 265 +++++++++++++++++++++++++++++++++
 specs/murcia-market/feature.md         |  37 ++++-
 specs/murcia-market/review/findings.md |   7 +
 3 files changed, 308 insertions(+), 1 deletion(-)
15
exit 0
1
exit 0
```

$ curl -s "https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/53689?nult=2" -o t53689.json; echo "exit $?"   (F-009 re-read, Madrid and national rows filtered with python)
```
exit 0
ADRH9974440 | Total Nacional. Dato base. Renta neta media por persona.  | [(2023, 15036.0), (2022, 14061.0)]
ADRH9974439 | Total Nacional. Dato base. Renta neta media por hogar.  | [(2023, 38326.0), (2022, 35815.0)]
ADRH9974349 | Madrid, Comunidad de. Dato base. Renta neta media por persona.  | [(2023, 18142.0), (2022, 17131.0)]
ADRH9974348 | Madrid, Comunidad de. Dato base. Renta neta media por hogar.  | [(2023, 48806.0), (2022, 45726.0)]
```

$ curl INE table 56940 (F-011), plus `PERIODO/19` and `PERIODO/21`
```
ECP320 | Total Nacional. Todas las edades. Total. Población. Número. | [(2025, 19, 49128297.0), (2024, 22, 48999880.0), (2024, 21, 48821936.0), (2024, 20, 48701130.0), (2024, 19, 48619695.0), (2023, 22, 48486865.0)]
ECP115489 | Total. Todas las edades. Murcia, Región de. Población. Número. | [... (2023, 21, 1558016.0) ...]
{"Id":19, ... "Mes_inicio":"1", ... "Nombre":"T1"}
{"Id":21, ... "Mes_inicio":"7", ... "Nombre":"T3"}
```
For the 2023 rows I read, period 21 (1-Jul-2023) is 48,320,520 in the earlier `nult=12` read of table 56934, row ECP320. That is the same series code ECP320, and table 56940 returns it as its national row.

$ python ratio check
```
centro 1.712
vist 1.372
flota 1.28
smg 1.173
jc 1.007
monte 0.897
altor 1.494
alcay 1.689
-0.13739842441535888 -0.13217673489765347 -0.07515296621441869 0.009288733496842783 0.050541810379946206 20859.0 20649.0
```

$ grep -c "provisional" business/research/murcia-market.md; echo "exit $?"
```
18
exit 0
```

$ grep -c "CONFLICTING" business/research/murcia-market.md; echo "exit $?"
```
3
exit 0
```

$ grep -n -i "TODO\|TBD\|lorem" business/research/murcia-market.md; echo "exit $?"
```
exit 1
```

$ git diff --stat HEAD -- business/research/granada-market.md business/research/market-dossier.md business/research/economic-model.md business/bank business/reports; echo "exit $?"
```
exit 0
```
