# Business report — per-phase starter prompts

> Companion to `docs/briefs/business-report.md`. One executor session per
> phase: open a NEW Claude Code session in this repo, set the model to
> **Opus** (`/model opus`), and paste the prompt for the phase you are at.
> Each phase reads the previous phases' outputs from the repo, so nothing
> depends on chat history. Prompts are in Spanish (founder's voice);
> commit outputs at the end of each phase so the next session finds them.

## Fase 0 — Entrevista

```
Lee docs/briefs/business-report.md entero antes de hacer nada. Vas a
ejecutar SOLO la Fase 0 (entrevista al founder). Hazme las preguntas de
los 5 bloques una a una, en español; registra UNDECIDED donde no tenga
respuesta, sin asumir nada. Al terminar, escribe
docs/business/research/founder-inputs.md, commitea, y para: la Fase 1 se
ejecuta en otra sesión.
```

## Fase 1 — Investigación de mercado

```
Lee docs/briefs/business-report.md y
docs/business/research/founder-inputs.md antes de hacer nada. Vas a
ejecutar SOLO la Fase 1 (investigación de mercado, Madrid y Valencia).
Recolección de fuentes en fan-out con subagentes Sonnet; la síntesis la
haces tú a effort max. Cada afirmación con fuente y etiqueta
FACT/ESTIMATE/HYPOTHESIS según el estándar del brief. Deja el dossier en
docs/business/research/, commitea, y para: presenta un resumen de
hallazgos y espera mi OK antes de dar la fase por cerrada.
```

## Fase 2 — Estudio de pricing

```
Lee docs/briefs/business-report.md, founder-inputs.md y el dossier de
mercado de docs/business/research/ antes de hacer nada. Vas a ejecutar
SOLO la Fase 2 (estudio de pricing) a effort max: mapa de precios reales
por zona y servicio, modos de cobro (servicio único, packs, bonos,
contratos B2B), simulación de márgenes con mis costes de la entrevista,
y 2–3 arquitecturas de precio propuestas con trade-offs (incluida
"igualar mercado con look premium"). Termina presentándome las opciones
para que YO decida — no elijas por mí. Registra la decisión en
docs/business/research/pricing-decision.md, commitea, y para.
```

## Fase 3 — Informe de marketing

```
Lee docs/briefs/business-report.md y todo docs/business/research/
(founder-inputs, dossier de mercado, pricing-decision) antes de hacer
nada. Vas a ejecutar SOLO la Fase 3: el informe de marketing completo,
siguiendo el índice y los guardarraíles del brief (tono impersonal,
glosario, paréntesis en primer uso, cifras etiquetadas). Flujo SDD: spec
(max) → tasks (medium) → redacción y maquetación HTML (xhigh) → check
(max), parando en cada frontera para mi OK. Gráficos SVG a mano con el
skill de dataviz. Cuando el HTML esté listo lo reviso yo en navegador
antes del export a PDF. Deja todo en docs/business/reports/ y commitea.
```

## Fase 4 — Informe económico

```
Lee docs/briefs/business-report.md, todo docs/business/research/ y el
informe de marketing terminado en docs/business/reports/ antes de hacer
nada. Vas a ejecutar SOLO la Fase 4: el informe económico completo según
el índice del brief — capítulo comparativo Madrid/Valencia, modelo
económico con la arquitectura de precio decidida, escenarios
conservador/realista/optimista por ciudad (supuestos explícitos y
justificados, nunca ±20% al azar), riesgos, hoja de ruta operativa y
glosario. Flujo SDD: spec (max) → tasks (medium) → construcción del
modelo, redacción y gráficos (xhigh) → verificación de cifras (max),
parando en cada frontera para mi OK. Reviso el HTML en navegador antes
del PDF. Deja todo en docs/business/reports/ y commitea.
```

## Fase 5 — Cierre

```
Lee docs/briefs/business-report.md y los dos informes terminados en
docs/business/reports/ antes de hacer nada. Vas a ejecutar SOLO la Fase
5 (cierre) a effort max: re-verifica las cifras estructurales contra sus
fuentes (segunda fuente independiente para las que sostienen los
escenarios), comprueba la coherencia entre ambos informes (que ninguna
cifra se contradiga), repasa tono impersonal y guardarraíles de marca, y
genera los PDF definitivos. Preséntame un checklist de verificación con
el resultado de cada punto y espera mi OK final.
```
