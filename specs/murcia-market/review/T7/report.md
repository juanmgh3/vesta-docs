T7 está hecha. El §9 tiene 29 filas M (M1–M29) y la tabla de deltas cubre G1–G13 de Granada. Volví a abrir en su fuente cada FACT del §9 y todas siguen dando la misma cifra. No hice commit.

**Archivos cambiados**
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-market.md`:
  - **§9.1**: tabla M1–M29 con sección, etiqueta, estado de segunda fuente y resultado de la relectura.
  - **§9.2**: deltas Murcia vs Granada, una fila por cada G1–G13.
  - **§9.3**: once lagunas ordenadas por cuánto mueven el modelo.
  - **§10**: fuentes por sección, con "(re-read)" en las que releí.
  - **Hallazgos abiertos**: cerrados F-007, F-019, F-020 y F-041 a F-051 en las líneas que indican.
  - **§8.2**: corregida la fila de la ordenanza de movilidad.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\murcia-market\feature.md`: T7 marcada `[x]` y fila de evidencia añadida.

**Desviaciones**
- **`findings.md` sin tocar.** `specs/murcia-market/review/findings.md` no está en el Scope, así que no marqué F-007, F-019, F-020 ni F-041 a F-051 como `fixed T7` ahí. Toca hacerlo al orquestador.
- **F-007 cambió una afirmación, no una cifra.** La tabla 60134 de INE ordena provincias. El 2.7 de Murcia es el más alto de las 50 provincias, pero Ceuta (3.07) y Melilla (3.13) están por encima, así que "highest in Spain" era falso. Lo corregí en el texto del §1.3. Los porcentajes unipersonales de Torrevieja (34.9%) y Los Alcázares (30.6%) salen tal cual en las tablas.
- **F-047 pedía releer la ordenanza del SER.** Añadí las tarifas sin IVA del BORM 136/2025 (art. 29.1(b), 29.1(g) y 29.6). Todas dan la cifra con IVA que ya figuraba al multiplicar por 1,21.
- **F-048 cambió cinco celdas por redondeo**, aplicando media hacia arriba en la columna de €0,175/km:

| Celda | Antes | Después |
| --- | --- | --- |
| Alcantarilla | €3,04 | €3,05 |
| Santomera | €7,17 | €7,18 |
| Archena | €9,41 | €9,42 |
| Cartagena | €17,04 | €17,05 |
| Lorca | €27,54 | €27,55 |

- **§8.2, ordenanza de movilidad.** El PDF enlazado es el propio BORM nº 95 del 25-abr-2024 (aprobación definitiva del Pleno el 21-mar-2024). El "2025" del nombre y la carpeta no corresponde a otra publicación posterior. La fila sigue citando 25-abr-2024; solo añadí esa aclaración.
- **Biomex.** El "desde €55 / €65" ya no aparece en su página de Murcia, solo en su página de precios. Así lo dice M19; la cifra no cambia.
- **Lo que no volví a leer:** el CPC y el volumen de Ubersuggest (la búsqueda sin registro permite una sola consulta y ya se usó en el §6.3) y las tasas nacionales que se reutilizan por referencia (M14, M15, M27). Cada fila lo indica.

**Dudas para revisión**
- **Etiqueta de M1.** Dice "FACT — two publications of one register", igual que el veredicto del §1.1 que ya pasó revisión. Un revisor estricto podría pedir "FACT (1 source), provisional", y lo mismo pasa con la fila "FACT (2nd source)" del §1.1 (línea 35), que dejé como estaba.
- **M16** (17 proveedores) lo etiqueté ESTIMATE como cota inferior, porque el barrido no se da por agotado. Granada etiquetó la cifra equivalente (G10) como FACT.

## Verification output

$ git diff --stat HEAD
(sin salida)
exit 0

$ grep -c "^| M[0-9]" business/research/murcia-market.md   (antes del cambio)
0
exit 1

$ grep -c "^| M[0-9]" business/research/murcia-market.md   (después)
29
exit 0

$ grep -c "^## [0-9]" business/research/murcia-market.md
10
exit 0

$ grep -c "NOT FOUND" business/research/murcia-market.md
67
exit 0

$ grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"
0
exit 1

$ grep -c "https\?://" business/research/murcia-market.md
203
exit 0

$ grep -n -i "TODO\|TBD\|lorem" business/research/murcia-market.md
(sin salida)
exit 1

$ git diff --stat HEAD -- business/research/granada-market.md business/research/economic-model.md business/bank business/reports
(sin salida)
exit 0

$ grep -n -E "FACT( \(1 source\)?)?$" business/research/murcia-market.md
(sin salida)
exit 1

$ grep -c "FACT (2 publications)\|FACT (2nd source)" business/research/murcia-market.md
1
exit 0

$ git diff --numstat HEAD
warning: in the working copy of 'business/research/murcia-market.md', LF will be replaced by CRLF the next time Git touches it
272	40	business/research/murcia-market.md
exit 0
