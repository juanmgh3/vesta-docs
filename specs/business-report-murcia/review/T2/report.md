T2 está hecho: el modelo de Murcia corre, genera tablas y JSON, y dos ejecuciones seguidas producen archivos idénticos. La comprobación del brief (`git diff --exit-code`) sale con exit 0, pero no demuestra nada todavía: los archivos generados son nuevos y no están en git, así que no hay nada contra qué comparar. Lo que sí prueba la reproducibilidad es haber corrido el script dos veces con el mismo sha256. El `git diff` empezará a contar cuando lo commitees.

Cifras clave de B × realista en el año 1 (oct-2026 a sep-2027): resultado €4.768, peor punto de caja −€91 en oct-2026 y acumulado en positivo desde feb-2027. Con el modelo antiguo eran €5.506; la diferencia sale del desplazamiento, del aparcamiento y de la subida de la cuota en jul-2027.

Archivos cambiados:
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-model.mjs` — nuevo. Script derivado de `economic-model-engine.mjs`; escribe las dos salidas sin depender de fecha, azar ni locale.
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-model-tables.md` — generado. Contiene:
  - T0: costes por visita derivados
  - T1–T3: año 1 mensual de B, A y C × realista
  - T4: rejilla 3×3 de sensibilidad
  - T5: años 2–3
  - T6: trayectoria Y2–Y8 de B con el hito de fundador a propietario
  - T7: punto de equilibrio
  - T8: contribución por pieza y por visita
  - T9: ratios
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-model-data.json` — generado. Mismos números; incluye el año 1 de las 9 combinaciones (para el gráfico de caja por escenario) y un bloque `market` para T3 con el mapa de precios de §5, las tarifas A/B/C y los anillos R1–R3.
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-model.md` — nuevo. §1 tiene 24 entradas, cada una con etiqueta y archivo §sección de origen; §2 las derivaciones; §3 la lista de lo que cambia frente a `economic-model.md`.
- `C:\Users\juanm\Documents\dev\vesta-docs\README.md` — cierra F-001 (añade `economic-model.md` y el engine a la lista de sustituidos) y F-002 (quita "(Madrid/Valencia)" de la línea del informe económico).
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\business-report-murcia\feature.md` — T2 marcada `[x]` y fila añadida a la tabla de evidencias.

Desviaciones:
- **Desplazamiento:** el brief daba €4,5 y la banda €3,5–6,0 sin fijar el reparto de trabajos, así que lo fijé yo como HYPOTHESIS: 50% cerca, 35% R2 a 12–13 km, 15% cinturón exterior. Sale €4,41, que redondeo a €4,5. Para el extremo alto de la banda usé un reparto 10/30/60 (€6,11, redondeado a €6,0).
- **Aparcamiento:** €0,92, redondeado a €1,0. Es un 40% de trabajos en zona SER (HYPOTHESIS) por un tique medio de €2,30, que es la media de €1,90 y €2,70.
- **Años 4–8:** el modelo antiguo dejaba la regla de crecimiento abierta. Puse esta: crecen a la mitad del ritmo Y2→Y3 y ese ritmo se reduce a la mitad cada año.
- **Contratación:** el disparador de §7 lo evalúo con la media anual en lugar de "3 meses seguidos".
- **IVA:** el engine antiguo pagaba en cada mes de liquidación también el IVA de ese mismo mes; aquí solo se paga el trimestre ya cerrado.
- **Margen de contribución:** lo calculo sobre el precio neto, como dice la nota del modelo antiguo. Por eso sale 90–93% frente al antiguo 76–78%, que en realidad dividía por el precio bruto.

Lo que debes revisar:
- **Contratar al operario 2 sale caro en realista B.** El disparador lo contrata en Y5 y el resultado cae de €38.856 (Y4, solo) a €19.354 (Y5, con el sueldo y la máquina). Ese mismo año se cumple el hito de fundador a propietario. Lo dejo tal como sale para que se razone en el cap. 11.
- **La caja de años 2–8 se infla.** Se acumula sin retiradas del fundador ni IRPF (supuesto I24), así que pasar la comprobación de caja del disparador es fácil y la caja a final de año sale muy alta. Conviene que el capítulo de proyecciones lo diga explícitamente.
- **El tope de 88 piezas del año 1 nunca se alcanza.** El máximo es 56, igual que en el modelo antiguo.

## Verification output

$ node business/research/murcia-model.mjs && git diff --exit-code --stat -- business/research/murcia-model-tables.md business/research/murcia-model-data.json; echo "exit $?"   (red de seguridad, antes de tocar nada)
```
node:internal/modules/cjs/loader:1459
  throw err;
  ^

Error: Cannot find module 'C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-model.mjs'
    at Module._resolveFilename (node:internal/modules/cjs/loader:1456:15)
    ...
  code: 'MODULE_NOT_FOUND',
  requireStack: []
}

Node.js v24.14.0
```
exit 1

$ node business/research/murcia-model.mjs; echo "exit $?"
exit 0

$ node murcia-model.mjs && sha256sum murcia-model-tables.md murcia-model-data.json && node murcia-model.mjs && sha256sum murcia-model-tables.md murcia-model-data.json; echo "exit $?"   (en business/research)
```
18129d61ad58fc726f0033d80853ebcb34588f9f57cdf3c81247032ecb6f358f *murcia-model-tables.md
88ad897d6bd8d6b9c970d188e01275248038a3565f7a5f0b0e109455b5678509 *murcia-model-data.json
18129d61ad58fc726f0033d80853ebcb34588f9f57cdf3c81247032ecb6f358f *murcia-model-tables.md
88ad897d6bd8d6b9c970d188e01275248038a3565f7a5f0b0e109455b5678509 *murcia-model-data.json
```
exit 0

$ node business/research/murcia-model.mjs && git diff --exit-code --stat -- business/research/murcia-model-tables.md business/research/murcia-model-data.json; echo "exit $?"
exit 0

$ git diff --stat HEAD -- business/research/economic-model.md business/research/economic-model-engine.mjs business/research/granada-market.md business/bank business/reports/economic-report.html business/reports/marketing-report.html; echo "exit $?"
exit 0

$ git status --short; echo "exit $?"
```
 M README.md
?? .torq-flow/
?? business/research/murcia-model-data.json
?? business/research/murcia-model-tables.md
?? business/research/murcia-model.md
?? business/research/murcia-model.mjs
```
exit 0
