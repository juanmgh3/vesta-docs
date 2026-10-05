T12 está hecha: los dos comandos de verificación imprimen 0 y no ha cambiado ninguna cifra del archivo, aparte de los valores que piden F-053 a F-055. No he hecho commit; queda para el orquestador.

**Archivos cambiados**
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-market.md`:
  - **F-052:** la población municipal pasa a "FACT (1 source), provisional" en los cinco sitios donde se clasifica. Son la fila INE de §1.1, la fila del Ayuntamiento (ahora dice que publica el mismo padrón y que no es segunda fuente), la fila Verdict de §1.1, el pie de la tabla de anillos de §1.6 y M1 en §9.1.
  - **F-056:** la frase de §9.1 ya solo afirma la relectura de las filas marcadas "Confirmed". Nombra las excepciones: M21 y M22 no se reabrieron, y M14, M15 y M27 se usan por referencia.
  - **F-053:** G4 cita Granada tal como lo da su archivo: "≈93,000–100,000 (mid ≈97,000; ÷2.4, borrowed)".
  - **F-054:** G10 explica que los criterios son distintos y da el conteo comparable, 7 frente a 2. La delta pasa de "+4" a "+5 like-for-like".
  - **F-055:**
    - El ranking de §9.3 lleva ahora la etiqueta ANALYSIS.
    - He quitado la afirmación sin derivar de que el coste de captación pesa más que cualquier cifra de pool.
    - "A few percent" pasa a la banda 2.6–2.8, que da un R1 de ≈49,600–53,500 hogares, etiquetado HYPOTHESIS proxy.
  - **F-057:** en la fila de Biomex de §4.2 consta que "desde €55" y "desde €65" están en la página nacional de precios, no en la de Murcia.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\murcia-market\feature.md`:
  - En la fila de evidencia de T7 he acotado "every §9 FACT confirmed" igual que en §9.1.
  - T12 queda marcada `[x]` y su fila está añadida a la tabla de evidencia.

**Desviaciones**
- La frase "two publications of one register" también estaba en la fila Verdict de §1.1, que el brief no nombra. La he reetiquetado porque el grep de todo el archivo lo pide.
- La frase en prosa "They are two publications, not two measurements" (línea 41) se queda: explica el caso, no clasifica nada.
- En F-055 no he puesto el porcentaje (+7.8%) del revisor. Las cifras sin redondear dan +7.7%, así que doy solo el rango. Lo etiqueto HYPOTHESIS proxy para cumplir F-004, que solo admitía el límite superior con el 2.6 de los distritos si iba etiquetado así.

**Puntos a revisar**
- El diff de tokens numéricos solo muestra lo esperado:
  - El "1" de cada etiqueta nueva.
  - Los valores que piden F-053 a F-055.
  - Los valores citados de M21 y M22 (€3.04 y 70 al mes), que ya estaban en el archivo.
  - Referencias de fila y de sección.
- La única desaparición es el "4" de "+4" en G10, sustituido por "+5" como pide F-054.
- La fila R2 de §1.7 sigue diciendo "sum of FACT rows". No afirma más de una fuente, así que no la he tocado.

## Verification output

$ git status --short; echo "exit $?"
```
 M business/research/murcia-market.md
 M specs/murcia-market/feature.md
 M specs/murcia-market/review/findings.md
?? .torq-flow/
?? specs/murcia-market/review/T7/
exit 0
```
(Estado previo al cambio; T7 sin commit a propósito. No hay package.json, tsc ni eslint en este repo de documentación.)

$ grep -c "FACT (2nd source)\|FACT (2 publications)\|FACT — two publications" business/research/murcia-market.md; echo "exit $?"  (antes del cambio)
```
2
exit 0
```

$ grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"; echo "exit $?"  (antes del cambio)
```
0
exit 1
```

$ grep -c "FACT (2nd source)\|FACT (2 publications)\|FACT — two publications" business/research/murcia-market.md; echo "exit $?"
```
0
exit 1
```

$ grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"; echo "exit $?"
```
0
exit 1
```

$ diff before.sorted-numeric-tokens after.sorted-numeric-tokens; echo "exit $?"
```
394a395,399
> 1
> 1
> 1
> 1
> 1
462a468
> 1.3
764a771
> 100,000
932a940
> 138,997
947a956
> 14,
972a982
> 15,
1274a1285
> 2.
1320a1332
> 2.6
1355a1368
> 2.8
1839a1853
> 21
1852a1867
> 22
1989a2005
> 27
2259a2276
> 3.04
2564d2580
< 4
2608a2625
> 4.3
2779a2797
> 49,600
2835a2854
> 5
2919a2939
> 53,500
3008a3029
> 6
3037a3059
> 6.3
3211a3234,3235
> 7
> 7
3256a3281
> 70
3470a3496
> 9
3524a3551
> 93,000
exit 1
```

$ grep -n "FACT (1 source), provisional *$" business/research/murcia-market.md; echo "exit $?"
```
exit 1
```

$ grep -n -i "TODO\|TBD\|lorem" business/research/murcia-market.md; echo "exit $?"
```
exit 1
```

$ grep -c "^## [0-9]" business/research/murcia-market.md; echo "exit $?"
```
10
exit 0
```

$ git diff --stat HEAD -- business/research/granada-market.md business/research/economic-model.md business/bank business/reports; echo "exit $?"
```
exit 0
```
