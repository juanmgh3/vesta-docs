T1 está hecho. La comprobación da `10` secciones `## ` en `murcia-market.md` y la cadena del addendum aparece 4 veces en `founder-inputs.md`. El diff de `founder-inputs.md` son 15 líneas añadidas y 0 borradas.

Archivos cambiados:
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\murcia-market.md` (nuevo): la cabecera va en blockquote, igual que en `granada-market.md`, con propósito, estándar de etiquetas, método y lo que se reutiliza de `market-dossier.md`. Debajo, las diez secciones numeradas vacías, de `## 1.` a `## 10.`, con los nombres que dan T2–T7.
- `C:\Users\juanm\Documents\dev\vesta-docs\business\research\founder-inputs.md`: al final está la sección `## Addendum 2026-10-05 — operating city resolved`. Recoge la base en Murcia capital, el área de servicio "Murcia and surroundings", que los radios los propone `murcia-market.md` §1, y que el lanzamiento ya no depende de la mudanza; los tres puntos van como CAPTURED. Marqué como SUPERSEDED el Block 4 y los ítems 2 y 4 de UNDECIDED, cada uno con una línea nueva que apunta al addendum.
- `C:\Users\juanm\Documents\dev\vesta-docs\specs\murcia-market\feature.md`: T1 marcado `[x]` y fila añadida a la tabla de evidencias.

Desviaciones:
- No hay red de seguridad que ejecutar: es un repo de documentos, sin `package.json`, tsc ni eslint. Como referencia dejé el árbol versionado limpio antes de tocar nada (`git diff --stat HEAD` vacío) y pasé las dos comprobaciones antes del cambio.
- Las marcas de superseded son líneas nuevas debajo de los ítems, no texto añadido dentro de las líneas que ya existían. Así el diff tiene solo adiciones, que es lo que pide el criterio de aceptación.
- Las secciones del esqueleto están vacías, sin texto de relleno, para no disparar la comprobación de TODO/TBD.
- Toda la cabecera va dentro del blockquote. Por eso `grep -c "^## "` da exactamente 10.

Pendientes:
- Dos líneas de `founder-inputs.md` quedan sin marcar porque la tarea no las nombra, y las dos contradicen el addendum. La de Block 5 "Launch window" dice todavía que el lanzamiento depende de la mudanza. FLAG-RESEARCH D sigue hablando de zonas para Madrid y Valencia. Si se quieren marcar también, son dos líneas de una tarea posterior.
- Git avisa de que convertirá LF a CRLF la próxima vez que toque `founder-inputs.md`. El índice está en LF y el contenido no cambia, pero conviene vigilarlo al hacer el commit.

## Verification output

$ grep -c "^## " business/research/murcia-market.md; echo "exit $?"   (antes del cambio)
grep: business/research/murcia-market.md: No such file or directory
exit 2

$ grep -c "Addendum 2026-10-05" business/research/founder-inputs.md; echo "exit $?"   (antes del cambio)
0
exit 1

$ git diff --stat HEAD; echo "exit $?"   (antes del cambio)
exit 0

$ grep -c "^## " business/research/murcia-market.md; echo "exit $?"
10
exit 0

$ grep -c "Addendum 2026-10-05" business/research/founder-inputs.md; echo "exit $?"
4
exit 0

$ git diff --numstat HEAD -- business/research/founder-inputs.md; echo "exit $?"
warning: in the working copy of 'business/research/founder-inputs.md', LF will be replaced by CRLF the next time Git touches it
15	0	business/research/founder-inputs.md
exit 0

$ git diff HEAD -- business/research/founder-inputs.md | grep "^-[^-]"; echo "exit $?"
warning: in the working copy of 'business/research/founder-inputs.md', LF will be replaced by CRLF the next time Git touches it
exit 1

$ grep -n -i "TODO\|TBD\|lorem" business/research/murcia-market.md; echo "exit $?"
exit 1
