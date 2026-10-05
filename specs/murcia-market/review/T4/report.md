T4 está hecho. §4 y §5 de `murcia-market.md` quedan rellenos con 20 proveedores perfilados (el mínimo eran 15) y un mapa de precios por pieza. El verify da `34`, que son las 14 filas en negrita que ya había más las 20 nuevas. El grep de etiquetas sigue a 0, ningún archivo protegido ha cambiado y no he hecho commit.

Archivos cambiados:
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-market.md`: 158 líneas añadidas, ninguna borrada. §4.1 es el registro de búsquedas y la profundidad del barrido, §4.2 la tabla de proveedores, §4.3 la lectura del mercado (ANALYSIS) y §5 la tabla de precios con rango, mediana cuando hay 3 o más datos, el cluster Madrid/Valencia y la cifra de Granada al lado, más su lectura.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\murcia-market\feature.md`: T4 marcado `[x]` y fila T4 añadida a la tabla de evidencia.

Desviaciones:
- No digo que el campo esté agotado. Google Maps sin sesión enseña como mucho 8 resultados por búsqueda, así que puede haber operadores que solo estén en Maps. Como pasé de 15 proveedores, la declaración de agotamiento no hacía falta, pero dejo dicho el límite.
- Las valoraciones de Google las leí en Maps abierto en el navegador integrado, rechazando las cookies no esenciales. WebFetch no puede mostrar Maps.
- El IVA no viene igual en todos: Limpiezalto y Sercomanga publican sin IVA, Brillamu con IVA y el resto no lo dice. Para no mezclar bases, cada mediana sale dos veces: con las cifras tal como se publican y añadiendo el 21% a los dos que publican sin IVA. Las medianas apenas cambian.
- Leí el "sofá 1 plaza" de Limpiezalto como sillón, y lo dejo marcado en la fila. La silla de Biomex la dejé fuera porque la misma cifra (€12,50) aparece una vez como limpieza y otra como impermeabilización.
- Las cifras que solo vi en un resultado de búsqueda, sin poder leerlas en la página del proveedor, no entran en ningún rango ni mediana: los precios de Sofaclín, los tamaños de colchón de Happy Clean, la lista antigua de Limpiezalto, la media de Habitissimo y todo Ofihogar (su web no resuelve).

Para revisar:
- **Granada:** `granada-market.md` §3 trata Happy Clean como independiente local de Granada, pero su web da dirección en Torrevieja y cubre tres provincias. Lo apunto en §4.2 y no toco ese archivo porque está fuera de alcance.
- **Murcia no sale más barata:** con precios publicados, el sofá de 3 plazas (€100) queda por encima del cluster Madrid/Valencia (€90) y el de 2 plazas (€79) en su techo. Esto contradice la lectura de `granada-market.md` §4, "misma banda con ligera tendencia a la baja".
- **Comparación Murcia-Granada:** dos de las seis listas de precios publicadas son las mismas que en Granada (Clean-Home y Happy Clean). Comparar Murcia con Granada es en parte comparar una lista consigo misma.
- **Premium y transparente:** el dossier daba ese hueco por vacío en Madrid/Valencia. En Murcia no lo está: Limpiezalto publica la lista más cara por tamaño y tiene 4,9 con 66 reseñas.
- **Hyla y laboratorio:** no encontré ningún operador basado en Hyla ni ninguna certificación de laboratorio entre los presentes en Murcia. UrbanCleaner, el único con informe AITEX, no aparece en Murcia.
- **Datos finos:** el colchón king (2 datos) y la silla (3 datos, todos "desde") son demasiado poco para usarlos como parámetro sin otra lectura.

He guardado en memoria cómo leer valoraciones de Google Maps desde el navegador integrado.

## Verification output

$ git status --short; git diff --stat HEAD (safety net, PowerShell)
```
?? .torq-flow/
```
(diff stat empty; `Test-Path package.json` → `False`)
exit 0

$ grep -c "^| \*\*" business/research/murcia-market.md   (pre-change)
```
14
```
exit 0

$ grep -c "^| \*\*" business/research/murcia-market.md; echo "exit $?"
```
34
```
exit 0

$ grep -n "FACT (1 source" business/research/murcia-market.md | grep -v -c "FACT (1 source), provisional"; echo "exit $?"
```
0
```
exit 1

$ grep -n -i "TODO\|TBD\|lorem" business/research/murcia-market.md; echo "exit $?"
```
```
exit 1

$ grep -c "NOT FOUND" business/research/murcia-market.md; echo "exit $?"
```
33
```
exit 0

$ git diff --stat HEAD -- business/research/granada-market.md business/research/economic-model.md business/bank business/reports; echo "exit $?"
```
```
exit 0

$ git diff --numstat HEAD; echo "exit $?"
```
warning: in the working copy of 'business/research/murcia-market.md', LF will be replaced by CRLF the next time Git touches it
158	0	business/research/murcia-market.md
```
exit 0
