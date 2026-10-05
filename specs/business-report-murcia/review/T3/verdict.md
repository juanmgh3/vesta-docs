## Open findings
- F-009 — fixed — business/research/murcia-model.mjs:381-388. Cada fila de Granada lleva ahora la etiqueta y la sección que da su fuente. Las comprobé contra granada-market.md: G9/G8/G7 están copiadas literalmente de §7 (líneas 277-279). Happy Clean tiene "FACT (own site)" en §3:144 y silla solo aparece en §3. Chaise longue y Clean-Home tienen "FACT (own site, this pass)" en §3:145. Los add-ons de colchón llevan "FACT (1 source)", que es el veredicto de §4:204. Sillón cita §4:186 como señal direccional.

## Minor
- ch-04-mercado.html:7, ch-05-competencia.html:7, ch-10-proyecciones.html:7-11 — los marcadores de gráfico con chip hacen que los fragmentos lleven algo más que la cabecera. Es una desviación declarada, y el Accept la obliga ("chip placeholder filled by the fragment"). El efecto secundario es que el `grep -c "chip--"` del Verify de T5 y T7 ya da >0 en ch-04, ch-05 y ch-10 antes de escribir la prosa. Ese conteo no demuestra nada hasta que la prosa exista; quien revise T5/T7 debería contar solo los chips en prosa.
- build-charts.mjs:204 — cada celda de la rejilla de sensibilidad se dibuja con un `rect` `chart__grid` de cuatro lados. El README §7 dice "Open axes (no full bounding box)". Salen nueve cajas cerradas en el único gráfico con marco.
- build-charts.mjs:194 — `Demanda ${s}` produce "Demanda conservador": falla la concordancia, debería ser "conservadora". `SCEN_ES` ni siquiera se usa aquí.
- build-charts.mjs:290 — en el mapa de precios, la marca de la mediana de Murcia (etiqueta "medians ESTIMATE") va en `chart__bar` teal. En un gráfico que mezcla FACT y ESTIMATE, el README §4/§7 reserva gold-graphic para la serie estimada; el gráfico de anillos sí aplica esta regla (línea 329). El pie (línea 301) además la llama "mediana publicada", cuando nadie la publica: es una mediana derivada de precios publicados.
- build-charts.mjs:24 (`range`) con `num` en la línea 17 — el número de decimales sale de `String(x)`. Por eso un mismo rango de euros mezcla precisiones: "2,8–9,42 €", y "hasta 3,5 €". Los importes de céntimos deberían ir con dos decimales en los dos extremos.
- build-charts.mjs:25-28 — `month()` produce "oct 27" / "ene 27". En la rejilla, "oct 27, pago IVA" se lee como "27 de octubre", y es plausible porque el IVA del tercer trimestre vence en octubre. Un lector de 45-65 años puede tomarlo por una fecha de pago. "oct. 2027" lo evita.
- build-charts.mjs:225, 308, 340 — hay cifras de los gráficos escritas a mano en el script en lugar de leídas de un campo numérico del JSON: operarios del año 1 = 1, "24 barrios" y "0,175 €/km". Las tres aparecen como texto en el JSON (tablas T1, `rings[0].scope`, `travel.note`), así que se pueden rastrear, pero si el modelo cambia se quedan desfasadas sin avisar. El executor declaró la de 0,175.

## Cannot verify from diff
- Que no se solapen etiquetas al renderizar: el título del eje de break-even frente a la etiqueta de capacidad (y=14/20, en torno a x≈290), y "C · Premium escalonado" frente a la columna de celdas en x=152. El executor dice que lo revisó en Chrome; la maquetación del PDF es de T8.

Lo comprobado y limpio:
- 8 valores cotejados contra el JSON y murcia-model-tables.md, todos correctos:
  - resultado mensual B×realista (−137 … 1038, total 4768)
  - caja: mínimos −91 en oct-26 y −548 en ene-27; extremos finales 12.444 / 4768 / 139
  - break-even T7: 4,4/2,4/5 % … 10,3/5,7/11,7 %, capacidad 88, costes 186/486/656
  - rejilla T4: las nueve celdas
  - trayectoria T6: 19.028 … 26.728, 2 operarios desde el año 5, sí/sí/no/no
  - mapa de precios: filas de Murcia, Madrid, Valencia y Granada
  - anillos: 138.997 / 704.814 / 666.428 y 2,8–9,42 / 10,36–27,55
- La celda A × conservador muestra −974 € con "oct 27, pago IVA".
- Las clases que usan los gráficos existen todas en report.css, y `.chart__grid` lleva `fill: none`.
- build-report.mjs ordena los fragmentos por nombre de archivo, con ceros a la izquierda.
- El guard de referencias externas detecta `href=`/`src=` con http o `//`, `url(http`, `@import` y `xlink:href`. En la salida no queda ningún `http`, `@import` ni marcador `<!-- chart|chip`.
- Un chip vacío o un marcador sin cerrar hacen fallar el build.
- La portada coincide con el skeleton e incluye título, subtítulo, "Documento interno · octubre 2026", los 5 chips y el wordmark inline.
- El TOC tiene 13 filas, en el mismo orden y con los mismos títulos que las cabeceras de cap-1…cap-13.
- No hay Date, random, locale ni comentarios en los dos scripts.

Archivos:
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_template\build-charts.mjs
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_template\build-report.mjs
- C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-model.mjs
- C:\Users\juanm\Documents\dev\vesta-docs\business\reports\_src\murcia\
