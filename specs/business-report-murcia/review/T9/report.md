T9 está hecho: F-004 a F-008 quedan resueltos en `murcia-model.mjs` y `murcia-model.md`, y las tablas y el JSON regenerados salen idénticos al ejecutar el script dos veces. Los dos criterios de aceptación se cumplen: la caja mínima de A × conservador queda en −974 (Oct-2027) y el resultado del año 1 de B × realista sigue en 4,768, porque ningún input ha cambiado.

Ficheros cambiados:
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-model.mjs`
  - F-004: la caja mínima ahora incluye el punto Oct-2027, cuando se paga el IVA de jul–sep.
  - F-007: el hito founder→owner se comprueba cada año. Hay una columna nueva "Owner state holds" y la línea del hito dice en qué años se cumple y en cuáles decae.
  - F-008: cada cifra del bloque `market` es `{ value, label, source }`. Los precios con "~" y los hogares con "≈" llevan `approx: true`, y las celdas vacías llevan `value: null` con la etiqueta que da la fuente.
  - El encabezado de las tablas explica que una caja mínima fechada en Oct-2027 es ese pago de IVA.
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-model.md`
  - I22 lleva la advertencia de que el disparador usa la media anual.
  - §2.4 define la caja mínima con el punto Oct-2027 (F-004).
  - §2.5 explica la nueva comprobación anual del hito: en realista × B se cumple en Y5–Y6 y decae en Y7–Y8 (F-007).
  - §2.6 explica de dónde sale el −18.08 de la visita de pago de una sola pieza y de dónde sale el −22.48 de pricing-decision §4.2 (F-006).
  - §2.7 documenta el nuevo formato de las cifras del bloque `market` (F-008).
  - §3 añade los puntos 11 (disparador por media anual) y 12 (las cajas mínimas no son comparables con los informes antiguos por cómo se paga el IVA) (F-005).
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-model-tables.md` y `murcia-model-data.json`: regenerados.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\business-report-murcia\feature.md`: T9 marcada `[x]` y fila añadida a la tabla de evidencias.

Desviaciones:
- F-007 pedía comprobar el hito en Y5–Y8; lo compruebo en todos los años en que hay un operario contratado, que incluye Y5–Y8. En optimista × B el operario entra en Y3 pero la demanda (96 piezas) ya supera las 88 de capacidad, así que el hito no se alcanza en ningún año, igual que antes.
- F-008: Madrid y Valencia van con la etiqueta "FACT — own sites", que es la de los encabezados de market-dossier §2.1 y §3.1. Granada va con "FACT (1 source)", que es lo que dice granada-market §4 de las cifras de Clean-Home. Los hogares de los anillos también llevan `approx: true` porque la fuente los da con "≈"; no lo pedía la tarea, pero aplica la misma regla que el "~" de los packs.
- El punto Oct-2027 solo cuenta el pago de IVA, no lo que se facture en ese mes. Lo dice §2.4.

Pendiente para ti:
- El cambio de forma del bloque `market` (cifras convertidas en objetos) lo verá `build-charts.mjs` en T3; ese script aún no existe, así que no rompe nada todavía.
- No he tocado `specs/business-report-murcia/review/findings.md` porque no está en el Scope. F-004 a F-008 siguen marcados como "open" ahí.
- El `_Verify:_` de T9 termina en `git status --short` y sale con exit 0 aunque haya cambios, así que el exit no prueba nada. La reproducibilidad la demuestra el doble sha256 de abajo.

## Verification output

$ node business/research/murcia-model.mjs && node business/research/murcia-model.mjs && git status --short -- business/research/murcia-model-tables.md business/research/murcia-model-data.json; echo "exit $?"   (safety net, antes de los cambios)
exit 0

$ node business/research/murcia-model.mjs && node business/research/murcia-model.mjs && git status --short -- business/research/murcia-model-tables.md business/research/murcia-model-data.json; echo "exit $?"   (después de los cambios)
 M business/research/murcia-model-data.json
 M business/research/murcia-model-tables.md
exit 0

$ node business/research/murcia-model.mjs; sha256sum business/research/murcia-model-tables.md business/research/murcia-model-data.json; node business/research/murcia-model.mjs; sha256sum business/research/murcia-model-tables.md business/research/murcia-model-data.json; echo "exit $?"
257d03357a1e2ac01d909a1e00dd46bc6048caf9c252509d75b020283c4b6afd *business/research/murcia-model-tables.md
46c4e569bb408ba52028abceaaca1225fe9ddaf75aaa2aa66cf6e80bd4a582e0 *business/research/murcia-model-data.json
257d03357a1e2ac01d909a1e00dd46bc6048caf9c252509d75b020283c4b6afd *business/research/murcia-model-tables.md
46c4e569bb408ba52028abceaaca1225fe9ddaf75aaa2aa66cf6e80bd4a582e0 *business/research/murcia-model-data.json
exit 0

$ node -e "...spot check market.grids.C['Pack Casa'], priceMap[2].murciaMedian, B realista result, realista B ownerYears"
{"value":200,"label":"PROPOSAL","source":"pricing-decision.md §4.3","approx":true} {"value":null,"label":"no median (n < 3)","source":"murcia-market.md §5"} 4768 [5,6]
exit 0

Línea de T4 en la tabla regenerada (sacada del diff):
| A conservador | 4,852 | −974 | −974 (Oct-2027) | Jun-2027 | not within year 1 | −974 |

Triangulation skipped: tarea estructural, no hay ejecutor de tests (no hay package.json); la evidencia es la regeneración determinista más las comprobaciones puntuales.
