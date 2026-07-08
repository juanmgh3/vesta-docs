# Business report brief — assignment for a future session

> Written 2026-07-07 as a ready-to-execute assignment, designed with the
> founder in this session. The executor session produces TWO polished
> deliverables: a **marketing report** and a **full economic report** for
> Grupo Vesta, in that order (marketing feeds the economic model).
> Deliverables are written in Spanish; repo files and commits in English.

## Why this runs inside vesta-web

You are in the landing-page repo ON PURPOSE: look at the built product
(`pnpm dev`), `design/`, and the visual direction to calibrate the premium
positioning the reports will argue for. But be explicit about which repo
rules apply to you:

- **Apply:** effort policy (below), never invent (marked placeholder +
  ask), SDD phase boundaries (stop and wait for founder OK at each one),
  all UI-facing report text in Spanish, files/commits in English.
- **Do NOT apply:** motion rules, performance budget, design-token rules —
  those are web rules. You are writing business documents.
- **Ignore any earlier economic report entirely.** The founder has one from
  a previous effort; this work starts 100% from scratch and must not ask
  for it, read it, or inherit anything from it.

## Where work lives

- This brief: `docs/briefs/business-report.md`
- SDD artifacts (spec, plan, tasks): `specs/business-report/`
- Research + interview outputs: `docs/business/research/`
- Final reports (HTML + PDF): `docs/business/reports/`

## Effort policy (explicit, no skill may degrade it)

| Work type                                                                | Model / effort                                                                                 |
| ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Reasoning (spec, scenario design, number verification, check, synthesis) | **Fable, low effort** — orchestrator/advisor role                                              |
| Building (report writing, HTML layout, charts)                           | **Sonnet subagents, medium effort** (low for mechanical tasks), directed and reviewed by Fable |
| Mechanical source-gathering fan-out                                      | **Sonnet subagents** (cheap, parallel), synthesis always back at Fable                         |

Never degrade a verification ritual to save tokens.
**UPDATED (founder decision 2026-07-08, supersedes the 2026-07-07 "no Fable" rule):**
Phase 4+ runs the orchestrator pattern — Fable plans, delegates chapter writing to
Sonnet workers, and personally verifies all numbers. Phases 0–3 ran on Opus
(max/xhigh) as originally specified.

## Brand & tone guardrails (hard rules for every deliverable)

- The brand is **Grupo Vesta**. The documents never reveal that the
  operation is Spain-only, and never contain personal names or personal
  data. Refer to people by role: "el socio fundador" (26+ years of sector
  experience — a load-bearing asset, use it), "la dirección operativa".
- Tone: fully professional and impersonal throughout — internal audience
  does not mean casual. Presentation quality is a requirement, not a
  bonus: these documents must look as premium as the landing does.
- Every technical term gets a brief parenthetical explanation on first
  use, and each report ends with its own glossary chapter.

## Phase plan (each phase ends at a founder checkpoint)

| #   | Phase                                                                                                            | Deliverable                                                                                                                                                                                                                               | Boundary                                                                                 |
| --- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| 0   | **Founder interview** (Opus max)                                                                                 | `docs/business/research/founder-inputs.md` — every non-inventable input, `UNDECIDED` recorded where unanswered                                                                                                                            | Founder OK                                                                               |
| 1   | **Market research** (Sonnet fan-out + Opus max synthesis)                                                        | Market dossier: competitors, demand, channels, seasonality for Madrid & Valencia — every claim sourced                                                                                                                                    | Founder OK                                                                               |
| 2   | **Pricing study** (Opus max — pure reasoning)                                                                    | Zone/service price map, payment models (one-off, packs, bonos/subscription, B2B contracts), margin simulation from interview costs, **2–3 proposed price architectures with trade-offs** (include "match market price with premium look") | **Founder DECISION**: a price architecture is chosen before anything downstream uses one |
| 3   | **Marketing report**: spec (max) → tasks (medium) → build (xhigh) → check (max)                                  | Marketing report, HTML → PDF                                                                                                                                                                                                              | Founder OK                                                                               |
| 4   | **Economic report**: spec (max) → tasks (medium) → build model + scenarios + charts (xhigh) → number check (max) | Economic report, HTML → PDF                                                                                                                                                                                                               | Founder OK                                                                               |
| 5   | **Close** (max)                                                                                                  | Final number verification against sources, cross-report coherence check, definitive PDF export                                                                                                                                            | Final founder checkpoint                                                                 |

## Phase 0 — interview the founder FIRST (inputs research cannot invent)

Ask one question at a time. If an answer is "not decided", record it as
`UNDECIDED` and research the options space instead of assuming one.
Interview blocks:

1. **The service.** Exact services (mattresses, sofas, upholstery; cars?
   B2B hotels/short-term rentals?), duration of one service, daily
   capacity of one operator.
2. **Own numbers.** Starting capital, equipment cost and the exact
   commercial relationship with Hyla, cost per service (consumables,
   travel), legal structure (autónomo/SL), who else participates in the
   operation.
3. **Price posture.** Tentative stance, and what the founder charges in
   his current Chilean business as an experience reference.
4. **City context.** Which areas of Madrid / Valencia are plausible to
   live and operate in — the service radius changes the reachable market.
5. **Horizon.** Projection span (default proposal: 3 years, month-by-month
   for year 1) and target launch window.

## City handling

One report, two location scenarios: everything location-independent is
written once; every location-sensitive figure (reachable market,
competition, zone prices, scenario projections) is computed for **Madrid
and Valencia side by side** in a comparative chapter. When the city is
decided, a short addendum deepens that city. A future assignment reuses
this exact template for **Santiago de Chile** — structure the model and
the HTML template with that reuse in mind.

## Economic report — required contents (~20+ content pages)

1. **Executive summary** — 1–2 pages, readable standalone.
2. **The business** — what Grupo Vesta is, the service, the edge (26+
   years of founder experience, premium positioning, brand/web above
   sector standard).
3. **Market** — who it serves (45–65 B2C, allergy households, pets; B2B:
   hotels, short-term rentals, companies), reachable size.
4. **Madrid / Valencia comparative chapter** — reachable market,
   competition, demand, side by side.
5. **Economic model** — chosen price architecture (from Phase 2), costs,
   margin per service, capacity ceiling.
6. **Scenario projections** — conservative / realistic / optimistic, per
   city: monthly recurring revenue, clients/month, break-even point,
   year 1 month-by-month + years 2–3. With charts.
7. **Risks & assumptions** — every key figure with its FACT / ESTIMATE /
   HYPOTHESIS label and what would invalidate it.
8. **Operating roadmap** — concrete steps for the leadership: launch,
   first clients, when to hire, when to scale, and the milestone that
   triggers each step.
9. **Glossary.**

## Marketing report — required contents (separate, produced FIRST)

1. **Executive summary.**
2. **Target audience** — prioritized segments (B2C 45–65 / B2B), each
   segment's pains, the words they search with.
3. **Competition & positioning** — competitor map, what they communicate,
   Vesta's premium gap.
4. **Channels** — Google Ads as the main entry (estimated cost per click
   and per acquired client), plus reviews, word of mouth, B2B alliances.
5. **Messages** — what to communicate to each segment. Do NOT write the
   website copy — that belongs to `docs/briefs/research-brief.md`.
6. **Launch action plan** — months 1–3, with an orientative budget.
7. **Glossary.**

## Number verification standard (non-negotiable)

- Every figure carries a source and a label: **FACT** (sourced) /
  **ESTIMATE** (derived — show the full derivation, e.g. clients/month =
  searches × CTR × conversion, with a source per factor) /
  **HYPOTHESIS** (unverified — needs founder validation or a real test).
- Load-bearing figures (the ones scenarios stand on: average market
  price, cost per click, audience size) need a **second independent
  source** before graduating to FACT.
- If a number does not exist, say so and model it as a range with
  explicit assumptions. Never invent.
- Spanish-language, Spanish-market sources take priority.
- The three scenarios differ by **explicit, justified assumptions**
  (e.g. pessimistic vs optimistic conversion rate) — never by an
  arbitrary ±20%.

## Visual & output requirements

- Print-optimized HTML → PDF via Chrome. Cover page, navigable table of
  contents, page numbers, chapter headers.
- Inherit Vesta's visual language: Newsreader for display type, the
  repo's sober palette — the reports must look like the same brand as
  the web.
- Charts as hand-crafted SVG (scenario curves, break-even, competitor
  price map, market funnel) using the **dataviz skill** — no default
  library styling.
- The founder reviews the HTML in the browser and gives a visual OK
  before the final PDF export.
