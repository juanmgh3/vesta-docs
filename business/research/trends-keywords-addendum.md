# Google Trends and keyword anchors addendum

**Research date:** 2026-07-07  
**Market:** Spain  
**Business:** the business  
**Evidence rule:** `FACT` means the cited tool displayed the item directly. `ESTIMATE` would mean a calculation from cited inputs. No estimates are reported because the necessary Google Trends indices could not be retrieved. `NOT AVAILABLE` means the requested value could not be verified without inventing it or crossing a login/payment wall.

> **Reader note (added during integration, 2026-07-07):** this addendum documents Codex's
> session, which hit HTTP 429 on Google Trends. A *separate* Opus session reached Trends
> directly (via session-warming: loading the Trends home first to seed cookies) and its
> read — seasonality, Madrid vs Valencia subregion, related queries — lives in
> `market-dossier.md` §5.4. So "Trends NOT AVAILABLE" below is true of *this* session only.
> The keyword-band and CPC evidence in §4 here is the unique contribution and has been
> folded into the dossier (§5.4, §6.1).

## 1) Trends — seasonality

**Requested Google Trends scope:** Spain (`geo=ES`), web search, last five years.  
**Source URL opened:** [Google Trends — “limpieza de sofás”, Spain, last five years](https://trends.google.es/trends/explore?date=today%205-y&geo=ES&q=limpieza%20de%20sof%C3%A1s)  
**Date checked:** 2026-07-07.

The actual Google Trends page returned **HTTP 429 (Too Many Requests)** in the browser. A separate direct HTTP request to the same URL also returned **429**. The global-domain equivalent at `trends.google.com` returned the same 429 response.

An official alternative was also checked: the [Google Trends API alpha](https://developers.google.com/search/apis/trends). Google states that it can provide five years of data, periodic aggregation including monthly intervals, and region/subregion data. However, access is limited to approved alpha testers and requires an application. No API data were therefore available during this research session.

| Requested output | Result | Label |
|---|---:|---|
| Five-year time series / CSV | NOT AVAILABLE — Google Trends returned HTTP 429 before rendering data | NOT AVAILABLE |
| Month-by-month pattern (January–December) | NOT AVAILABLE — no time-series values were exposed | NOT AVAILABLE |
| Peak month(s) | NOT AVAILABLE | NOT AVAILABLE |
| Trough month(s) | NOT AVAILABLE | NOT AVAILABLE |

No curve description is supplied because it would be unverified.

## 2) Trends — Madrid vs Valencia regional index

The requested “Interest by subregion” panel did not render because Google Trends returned HTTP 429.

| Requested comparison | Result | Label |
|---|---:|---|
| Comunidad de Madrid index and rank | NOT AVAILABLE | NOT AVAILABLE |
| Comunitat Valenciana index and rank | NOT AVAILABLE | NOT AVAILABLE |
| Top Spanish region and index | NOT AVAILABLE | NOT AVAILABLE |
| Madrid vs Valencia ordering | NOT AVAILABLE | NOT AVAILABLE |

No regional ranking or index is inferred from population, search results, or any third-party proxy.

## 3) Trends — related/rising queries per term

### Google Trends result

Related queries, rising queries, and rising percentages are **NOT AVAILABLE** for every core term because the Google Trends results page did not render. No percentage is reconstructed from another source.

### Verified fallback: Google Search “related searches”

The lists below are a separate fallback signal, not Google Trends data. Each item is a **FACT** because it appeared verbatim in the Google Search related-search block on 2026-07-07. The session disclosed IP-based localization as **18008 Granada**, so these lists are not a nationally neutral Spain sample and should not be treated as national rankings. Google Search supplied no rising percentages; all percentages are **NOT AVAILABLE**.

#### “limpieza de colchones”

Source: [Google Search](https://www.google.es/search?q=limpieza%20de%20colchones) — 2026-07-07 — **FACT**

- Limpieza de colchones a domicilio
- Limpieza de colchones precio
- Limpieza de colchones con bicarbonato
- Spray para limpiar colchones casero
- Limpia colchones Mercadona
- Como limpiar un colchón muy sucio
- Productos para limpieza de colchones
- Limpiar colchón con plancha

#### “limpieza de colchones a domicilio”

Source: [Google Search](https://www.google.es/search?q=limpieza%20de%20colchones%20a%20domicilio) — 2026-07-07 — **FACT**

- limpieza de colchones a domicilio cerca de zaidín, granada
- Limpieza de sofás a domicilio Granada
- Tapinet Granada
- Precio limpieza sofá a domicilio
- Limpieza de sofa granada
- Servicio limpieza sofá
- Limpieza de sofás a domicilio

#### “limpieza de sofás”

Source: [Google Search](https://www.google.es/search?q=limpieza%20de%20sof%C3%A1s) — 2026-07-07 — **FACT**

- Limpieza de sofás a domicilio Granada
- Limpieza de sofás en granada
- Precio limpieza sofá a domicilio
- Limpieza de sofás a domicilio
- Tapinet Granada
- Servicio limpieza sofá
- Tapicero Granada a domicilio

#### “limpieza de sofás a domicilio”

Source: [Google Search](https://www.google.es/search?q=limpieza%20de%20sof%C3%A1s%20a%20domicilio) — 2026-07-07 — **FACT**

- limpieza de sofás a domicilio cerca de zaidín, granada
- Limpieza de sofás a domicilio Granada
- Limpieza de sofás en granada
- Precio limpieza sofá a domicilio
- Tapinet Granada
- Servicio limpieza sofá
- Tapicero Granada a domicilio
- Limpieza colchones granada

#### “higienización de colchones”

Source: [Google Search](https://www.google.es/search?q=higienizaci%C3%B3n%20de%20colchones) — 2026-07-07 — **FACT**

- Sanytol colchones mercadona
- Desinfectante para colchones Mercadona
- Spray para limpiar colchones casero
- Desinfectar colchón
- Limpiar colchón con bicarbonato
- Spray para desinfectar colchones
- Desinfectar colchon con plancha
- Limpiar colchón con bicarbonato y vinagre

#### “limpiar colchón ácaros”

Source: [Google Search](https://www.google.es/search?q=limpiar%20colch%C3%B3n%20%C3%A1caros) — 2026-07-07 — **FACT**

- Remedio casero para eliminar ácaros del colchón
- Como eliminar ácaros del cuerpo
- Como eliminar los ácaros del colchón con bicarbonato
- Productos para eliminar ácaros del colchón
- Como saber si mi colchón tiene ácaros
- Eliminar ácaros Mercadona
- Ácaros en colchones fotos
- Los acaros del colchon pican

#### “ácaros colchón”

Source: [Google Search](https://www.google.es/search?q=%C3%A1caros%20colch%C3%B3n) — 2026-07-07 — **FACT**

- Ácaros en la cama como eliminarlos
- Ácaros en colchones fotos
- Ácaros en la cama: síntomas
- Remedio casero para eliminar ácaros del colchón
- Como saber si mi colchón tiene ácaros
- Como eliminar ácaros del cuerpo
- Como eliminar los ácaros de la casa
- Mejor producto para eliminar ácaros colchón Mercadona

#### “eliminar ácaros”

Source: [Google Search](https://www.google.es/search?q=eliminar%20%C3%A1caros) — 2026-07-07 — **FACT**

- Como eliminar ácaros del cuerpo
- Como eliminar ácaros en casa
- Productos para eliminar ácaros
- Eliminar ácaros en la cama
- Eliminar ácaros Mercadona
- Remedio casero para eliminar ácaros del colchón
- Productos para eliminar ácaros en la cama
- Como eliminar los ácaros de la ropa

#### “limpieza de tapicería”

Source: [Google Search](https://www.google.es/search?q=limpieza%20de%20tapicer%C3%ADa) — 2026-07-07 — **FACT**

- Limpia tapicerías mercadona
- Limpieza de sofás a domicilio Granada
- Limpia tapicería Lidl
- Limpia tapicerías sofá
- Limpia tapicerías leroy merlin
- Limpia tapicerías máquina
- Limpia tapicerías coche
- MediaMarkt Limpia tapicerías

## 4) Keyword volume + CPC table

Two free surfaces produced usable evidence:

- Ubersuggest was configured to **Spanish / Spain** (`locId=2724`) and displayed one point estimate and CPC.
- Ahrefs Free Keyword Generator was configured to **Spain** (`country=es`) and displayed a volume band (`>100` or `<100`) for every exact core phrase. The bands are retained verbatim; they are not converted to point estimates.

Ahrefs treats some accented and unaccented spellings as separate rows. The table below uses the exact accented core phrase requested. For example, Ahrefs displayed `>100` for unaccented “limpieza de sofas” but `<100` for exact “limpieza de sofás”; the unaccented row was not silently substituted.

| Keyword | Monthly volume (Spain) | CPC € | Tool | URL | Date | Label |
|---|---:|---:|---|---|---|---|
| limpieza de colchones | **`>100` band** | NOT AVAILABLE | Ahrefs Free Keyword Generator, Spain | [Ahrefs result](https://ahrefs.com/keyword-generator/?country=es&input=limpieza%20de%20colchones) | 2026-07-07 | **FACT (displayed band)** |
| limpieza de colchones a domicilio | **`>100` band** | NOT AVAILABLE | Ahrefs Free Keyword Generator, Spain | [Ahrefs result](https://ahrefs.com/keyword-generator/?country=es&input=limpieza%20de%20colchones%20a%20domicilio) | 2026-07-07 | **FACT (displayed band)** |
| limpieza de sofás | **Ubersuggest: `1.3K`; Ahrefs exact accented phrase: `<100` band** | **2.18** (Ubersuggest) | Ubersuggest + Ahrefs, both set to Spain | [Ubersuggest](https://app.neilpatel.com/en/ubersuggest/keyword_ideas?keyword=limpieza%20de%20sof%C3%A1s&lang=es&locId=2724); [Ahrefs](https://ahrefs.com/keyword-generator/?country=es&input=limpieza%20de%20sof%C3%A1s) | 2026-07-07 | **FACT (source-specific; conflict unresolved)** |
| limpieza de sofás a domicilio | **`>100` band** | NOT AVAILABLE | Ahrefs Free Keyword Generator, Spain | [Ahrefs result](https://ahrefs.com/keyword-generator/?country=es&input=limpieza%20de%20sof%C3%A1s%20a%20domicilio) | 2026-07-07 | **FACT (displayed band)** |
| higienización de colchones | **`<100` band** | NOT AVAILABLE | Ahrefs Free Keyword Generator, Spain | [Ahrefs result](https://ahrefs.com/keyword-generator/?country=es&input=higienizaci%C3%B3n%20de%20colchones) | 2026-07-07 | **FACT (displayed band)** |
| limpiar colchón ácaros | **`<100` band** | NOT AVAILABLE | Ahrefs Free Keyword Generator, Spain | [Ahrefs result](https://ahrefs.com/keyword-generator/?country=es&input=limpiar%20colch%C3%B3n%20%C3%A1caros) | 2026-07-07 | **FACT (displayed band)** |
| ácaros colchón | **`<100` band** | NOT AVAILABLE | Ahrefs Free Keyword Generator, Spain | [Ahrefs result](https://ahrefs.com/keyword-generator/?country=es&input=%C3%A1caros%20colch%C3%B3n) | 2026-07-07 | **FACT (displayed band)** |
| eliminar ácaros | **`<100` band** | NOT AVAILABLE | Ahrefs Free Keyword Generator, Spain | [Ahrefs result](https://ahrefs.com/keyword-generator/?country=es&input=eliminar%20%C3%A1caros) | 2026-07-07 | **FACT (displayed band)** |
| limpieza de tapicería | **`<100` band** | NOT AVAILABLE | Ahrefs Free Keyword Generator, Spain | [Ahrefs result](https://ahrefs.com/keyword-generator/?country=es&input=limpieza%20de%20tapicer%C3%ADa) | 2026-07-07 | **FACT (displayed band)** |

The Ubersuggest/Ahrefs disagreement for exact “limpieza de sofás” is material: `1.3K` versus `<100`. Both are direct tool facts, but they cannot both be the same underlying monthly series. Possible causes include provider databases, update timing, match/normalization rules, and accent handling; these are explanations, not verified resolutions. The dossier should not use either number as a precise forecast without a first-party planner check.

Madrid-level and Valencia-level absolute volumes/CPCs were not exposed by any accessible free surface and are **NOT AVAILABLE**. Ahrefs did expose several Madrid-containing suggestions, but those were keyword phrases in the Spain database—not city-filtered market totals—and are not reported as Madrid volume.

No calibration estimates were made. The proposed calculation would require a verified absolute anchor and verified, jointly normalized Google Trends indices for every term. Although the Ubersuggest anchor exists, the Trends indices are unavailable, so there is no defensible arithmetic to show.

## 5) Methods log

| Method / tool | What was tried | Outcome on 2026-07-07 |
|---|---|---|
| Google Trends (`trends.google.es`) | Opened the requested Spain / five-year exploration URL in the live browser; also issued a direct HTTP request to the same URL | **WALLED BY RATE LIMIT:** both returned HTTP 429 before any chart, regional panel, related queries, or CSV became available |
| Google Trends (`trends.google.com`) | Opened the equivalent global-domain URL | **WALLED BY RATE LIMIT:** HTTP 429 |
| Official Google Trends API alpha | Opened the [official API page](https://developers.google.com/search/apis/trends) | **LEGITIMATE FUTURE ROUTE, NOT IMMEDIATE ACCESS:** Google documents five years of data, monthly aggregation, and subregions, but access requires acceptance as an alpha tester |
| Ahrefs Free Keyword Generator | Selected Spain and queried every core phrase | **WORKED FOR BANDS:** displayed `<100` or `>100` for every exact phrase without login. It did not display CPC. Accented/unaccented variants sometimes received different bands |
| Ubersuggest free version | Queried “limpieza de sofás” with language Spanish and location Spain (`locId=2724`) | **WORKED PARTIALLY:** displayed `1.3K` volume and `€2,18` CPC for the seed. Copy/export opened a seven-day-trial wall; it was not bypassed. No Madrid/Valencia metrics were exposed |
| Ubersuggest six-month history control | Opened the visible row control associated with “Over 6 months” | **WALLED:** prompted account creation; no month-level history was exposed |
| Keyword Tool | Selected Spain (Country) and Spanish; queried “limpieza de sofás” | **WORKED FOR IDEAS ONLY:** returned 241 suggestions, including “limpieza de sofás a domicilio”, but Search Volume, Trend, Top of Page Bid, and Competition were visibly blurred behind “Unlock All Metrics” / Pro |
| WordStream Free Keyword Tool | Opened [the free tool](https://www.wordstream.com/keywords), rejected non-essential cookies, and submitted “limpieza de sofás” | **FAILED:** the page returned “There was a problem with your submission” and exposed no volume/CPC results or Spain selector |
| SISTRIX free tools / Ask SISTRIX | Opened the [Spanish free-tools directory](https://www.sistrix.es/free-tools/) and the linked Ask SISTRIX area | **NO MATCHING FREE LOOKUP:** the opened directory exposed other free utilities, while the keyword database remained part of the login/trial product; no Spain volume/CPC figure was shown |
| Microsoft Advertising Keyword Planner | The older planner host failed DNS; the current route was then found through Microsoft’s own Tools menu and opened at [Microsoft Advertising Keyword Planner](https://about.ads.microsoft.com/en/tools/planning/keyword-planner) | **OFFICIAL ROUTE FOUND, ACCOUNT-WALLED:** the page only offered Sign up / Sign in before planner use. No account was created and no figures were exposed |
| Semrush Keyword Overview | Opened the Spain database (`db=es`) for “limpieza de sofás” | **ACCOUNT-WALLED:** the page required registration for free requests and showed volume/CPC as `n/a` before registration |
| SiteWorthIt Keyword Checker | Submitted “limpieza de colchones” without login | **BROKEN PROVIDER CONNECTION:** the result page displayed “Authentication failed. Please check DataForSEO credentials.” No figure was used |
| SEO Review Tools | Opened its free keyword research tool and inspected the country selector | **GEOGRAPHY MISMATCH:** only United States and Canada were offered; no Spain query was made |
| SearchVolume.io | Opened the free bulk tool and inspected its country list | **GEOGRAPHY MISMATCH:** Spain was not offered; no figure was used |
| KeySearch free tools | Opened the current free-tools directory after its older keyword-tool URL returned 404 | **NO VOLUME/CPC TOOL:** only niche, difficulty, and long-tail utilities were listed |
| Google Search related searches | Opened one Spain-domain search page per core term and read the bottom related-search block | **WORKED:** verbatim related queries were visible. The page disclosed IP localization to 18008 Granada, and it supplied neither volume/CPC nor rising percentages |
| Calibration trick | Considered scaling other terms from the verified Ubersuggest seed | **NOT USABLE:** Google Trends relative indices were unavailable, so any scaling would be fabricated |

**Screenshot handling:** live browser screenshots were inspected for the Ubersuggest row, Ahrefs results, Keyword Tool metric blur, Semrush registration wall, the current Microsoft planner page, and the broken SiteWorthIt result. Screenshot path is **NOT AVAILABLE** because the instruction to create only this addendum precluded persisting additional screenshot files.

## 6) GAPS / NOT AVAILABLE

- Google Trends five-year CSV/time series: **NOT AVAILABLE** (HTTP 429).
- Month-by-month seasonality, peak months, and trough months: **NOT AVAILABLE**.
- Comunidad de Madrid and Comunitat Valenciana indices/ranks relative to the top region: **NOT AVAILABLE**.
- Google Trends related/rising queries and rising percentages for all nine core terms: **NOT AVAILABLE**.
- Spain volume bands for all nine exact phrases: **AVAILABLE as Ahrefs FACTS**, but exact point volumes remain **NOT AVAILABLE** for eight phrases.
- CPC for eight of the nine core terms: **NOT AVAILABLE**.
- “limpieza de sofás” source conflict (`1.3K` Ubersuggest vs `<100` Ahrefs): **UNRESOLVED**; neither value should be silently preferred.
- Absolute Madrid and Valencia volume/CPC for all nine terms: **NOT AVAILABLE**.
- Cross-keyword calibrated estimates: **NOT AVAILABLE** because Trends indices were not verified.
- Persisted screenshot paths: **NOT AVAILABLE** due to the one-file output constraint.

No hypothesis is presented as market data, and no number from a search-result summary or the previously identified untrustworthy blog was used.
