T3 está hecho: §2 y §3 de `murcia-market.md` están rellenos, el verify da `6` con exit 0, la tarea está marcada `[x]` y la fila de evidencia añadida. No he hecho commit.

## Archivos cambiados
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-market.md`: 265 líneas añadidas, ninguna borrada, repartidas en seis bloques.
  - **§2.1:** tabla de renta con las cinco geografías, que pide el Accept. Hay dos fuentes: INE ADRH 2023, leído directamente de las tablas del INE en todas las columnas, y AEAT IRPF 2023 como segunda fuente independiente. La AEAT mide otra cosa (renta bruta por declarante), así que solo vale para ordenar.
  - **§2.2:** las 387 secciones censales de Murcia, cruzadas con los polígonos oficiales del INE y con geocodificación de cada zona. Salen los ocho candidatos con cifra, el top‑10 de secciones con nombre, dos zonas altas que no estaban en la lista y el tamaño del pool de renta alta.
  - **§3.1:** el % de 45–64 medido para cada municipio de los anillos (Padrón 2022).
  - **§3.2:** alergia. No hay dato de ácaros para Murcia (NOT FOUND); llevo las bandas nacionales y pongo al lado dos cifras regionales y de Levante solo como contraste.
  - **§3.3:** mascotas. La cifra regional del registro REIAC no se puede pasar a hogares, así que llevo el ancla nacional de ANFAAC.
  - **§3.4:** resumen por anillo. Todos los productos están etiquetados ESTIMATE, con su tasa y su denominador.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\murcia-market\feature.md`: T3 marcada `[x]` y fila T3 añadida a la tabla de evidencia.

## Desviaciones
- **Segunda fuente de la renta municipal.** Según la regla de §1.1, que el CREM vuelva a publicar la cifra del INE no cuenta como segunda fuente. La única fuente independiente es la AEAT, que usa otra métrica. Por eso la etiqueta es "FACT (1 source for this metric; independent AEAT cross-check agrees in direction)" y no FACT con dos fuentes.
- **Dos candidatos no se confirman como zona premium:** Juan Carlos I y Montepinar. En el punto geocodificado están en la media municipal o por debajo, y ninguno tiene límites publicados. Los dejo en la tabla con su cifra y ese veredicto; no los he quitado.
- **45–64 del núcleo urbano:** no existe ese dato para el núcleo. Uso la media municipal (29,7%) como proxy y lo declaro así.

## Avisos
- **Madrid no cuadra con `market-dossier.md` §5.3.** El dossier pone 43.037 €/hogar para la Comunidad de Madrid y la tabla 53689 del INE da 48.806 € para la misma etiqueta y el mismo año. Nacional y Valencia sí coinciden exactamente. No toco el dossier porque está fuera de alcance; lo dejo marcado para T7.
- **Granada:** los 36.821 € que `granada-market.md` daba como "1 source, provisional" ya están confirmados en la tabla del INE. No edito ese archivo porque está protegido.
- **Las dos medidas de renta de Murcia van en sentidos opuestos.** Por hogar está ≈1% por encima de la media nacional; por persona, ≈7,5% por debajo y por debajo de Granada, porque los hogares de Murcia son más grandes. Esto pesa en el re-run del modelo. El modelo de Granada usaba renta por hogar.
- **Nombres de zona:** que una sección pertenezca a una zona es una estimación por geocodificación. La renta de cada sección es dato del INE.
- **Falta un contraste por zona.** Los datos de renta por código postal de la AEAT serían la segunda fuente para las zonas, pero la versión del CREM está detrás de un captcha anti‑bot y no lo he sorteado. Las páginas de la AEAT por código postal no las he leído en esta pasada.

## Verification output
$ git diff --stat HEAD; echo "exit $?"
exit 0

$ grep -c "^### [23]\." business/research/murcia-market.md; echo "exit $?"   (pre-change)
0
exit 1

$ grep -c "^### [23]\." business/research/murcia-market.md; echo "exit $?"
6
exit 0

$ grep -n -i "TODO\|TBD\|lorem" business/research/murcia-market.md; echo "exit $?"
exit 1

$ grep -c "NOT FOUND" business/research/murcia-market.md; echo "exit $?"
11
exit 0

$ git diff --numstat HEAD; echo "exit $?"
warning: in the working copy of 'business/research/murcia-market.md', LF will be replaced by CRLF the next time Git touches it
265	0	business/research/murcia-market.md
exit 0

$ git diff --stat HEAD -- business/research/granada-market.md business/research/economic-model.md business/bank business/reports; echo "exit $?"
exit 0

Triangulation skipped: structural research section, no behaviour to triangulate.
