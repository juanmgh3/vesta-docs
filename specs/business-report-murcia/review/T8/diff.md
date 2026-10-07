class: medium

## git status --short -uall
```
 M business/reports/_src/murcia/ch-00-cover-toc.html
 M business/reports/_src/murcia/charts.html
 M business/reports/_template/build-charts.mjs
 M business/reports/business-report-murcia.html
 M specs/business-report-murcia/feature.md
?? .torq-flow/active
?? .torq-flow/run
?? business/reports/CHECK-murcia.md
?? business/reports/business-report-murcia.pdf
?? business/research/aids-and-eu-branding.md
?? specs/business-report-murcia/review/T8/brief.md
?? specs/business-report-murcia/review/T8/report.md
```

## git diff HEAD
```diff
diff --git a/business/reports/_src/murcia/ch-00-cover-toc.html b/business/reports/_src/murcia/ch-00-cover-toc.html
index b1b79dc..0628db3 100644
--- a/business/reports/_src/murcia/ch-00-cover-toc.html
+++ b/business/reports/_src/murcia/ch-00-cover-toc.html
@@ -40,18 +40,18 @@
 <nav class="toc" aria-label="Índice">
   <h2 class="toc__title">Índice</h2>
   <ol class="toc__list">
-    <li><a class="toc__row" href="#cap-1"><span class="toc__num">01</span><span class="toc__label">Resumen ejecutivo</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
-    <li><a class="toc__row" href="#cap-2"><span class="toc__num">02</span><span class="toc__label">Las dos primeras semanas</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
-    <li><a class="toc__row" href="#cap-3"><span class="toc__num">03</span><span class="toc__label">La empresa y el servicio</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
-    <li><a class="toc__row" href="#cap-4"><span class="toc__num">04</span><span class="toc__label">El mercado de Murcia</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
-    <li><a class="toc__row" href="#cap-5"><span class="toc__num">05</span><span class="toc__label">La competencia</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
-    <li><a class="toc__row" href="#cap-6"><span class="toc__num">06</span><span class="toc__label">El cliente y cómo llegar a él</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
-    <li><a class="toc__row" href="#cap-7"><span class="toc__num">07</span><span class="toc__label">Precios</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
-    <li><a class="toc__row" href="#cap-8"><span class="toc__num">08</span><span class="toc__label">Captación de clientes</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
-    <li><a class="toc__row" href="#cap-9"><span class="toc__num">09</span><span class="toc__label">Costes por servicio y costes fijos</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
-    <li><a class="toc__row" href="#cap-10"><span class="toc__num">10</span><span class="toc__label">Proyecciones</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
-    <li><a class="toc__row" href="#cap-11"><span class="toc__num">11</span><span class="toc__label">Crecimiento: segundo operario y segunda máquina</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
-    <li><a class="toc__row" href="#cap-12"><span class="toc__num">12</span><span class="toc__label">Riesgos y supuestos</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
-    <li><a class="toc__row" href="#cap-13"><span class="toc__num">13</span><span class="toc__label">Glosario y fuentes</span><span class="toc__dots"></span><span class="toc__page">—</span></a></li>
+    <li><a class="toc__row" href="#cap-1"><span class="toc__num">01</span><span class="toc__label">Resumen ejecutivo</span><span class="toc__dots"></span><span class="toc__page">3</span></a></li>
+    <li><a class="toc__row" href="#cap-2"><span class="toc__num">02</span><span class="toc__label">Las dos primeras semanas</span><span class="toc__dots"></span><span class="toc__page">6</span></a></li>
+    <li><a class="toc__row" href="#cap-3"><span class="toc__num">03</span><span class="toc__label">La empresa y el servicio</span><span class="toc__dots"></span><span class="toc__page">10</span></a></li>
+    <li><a class="toc__row" href="#cap-4"><span class="toc__num">04</span><span class="toc__label">El mercado de Murcia</span><span class="toc__dots"></span><span class="toc__page">12</span></a></li>
+    <li><a class="toc__row" href="#cap-5"><span class="toc__num">05</span><span class="toc__label">La competencia</span><span class="toc__dots"></span><span class="toc__page">18</span></a></li>
+    <li><a class="toc__row" href="#cap-6"><span class="toc__num">06</span><span class="toc__label">El cliente y cómo llegar a él</span><span class="toc__dots"></span><span class="toc__page">26</span></a></li>
+    <li><a class="toc__row" href="#cap-7"><span class="toc__num">07</span><span class="toc__label">Precios</span><span class="toc__dots"></span><span class="toc__page">29</span></a></li>
+    <li><a class="toc__row" href="#cap-8"><span class="toc__num">08</span><span class="toc__label">Captación de clientes</span><span class="toc__dots"></span><span class="toc__page">33</span></a></li>
+    <li><a class="toc__row" href="#cap-9"><span class="toc__num">09</span><span class="toc__label">Costes por servicio y costes fijos</span><span class="toc__dots"></span><span class="toc__page">36</span></a></li>
+    <li><a class="toc__row" href="#cap-10"><span class="toc__num">10</span><span class="toc__label">Proyecciones</span><span class="toc__dots"></span><span class="toc__page">39</span></a></li>
+    <li><a class="toc__row" href="#cap-11"><span class="toc__num">11</span><span class="toc__label">Crecimiento: segundo operario y segunda máquina</span><span class="toc__dots"></span><span class="toc__page">46</span></a></li>
+    <li><a class="toc__row" href="#cap-12"><span class="toc__num">12</span><span class="toc__label">Riesgos y supuestos</span><span class="toc__dots"></span><span class="toc__page">48</span></a></li>
+    <li><a class="toc__row" href="#cap-13"><span class="toc__num">13</span><span class="toc__label">Glosario y fuentes</span><span class="toc__dots"></span><span class="toc__page">51</span></a></li>
   </ol>
 </nav>
diff --git a/business/reports/_src/murcia/charts.html b/business/reports/_src/murcia/charts.html
index 4dbdd29..690038d 100644
--- a/business/reports/_src/murcia/charts.html
+++ b/business/reports/_src/murcia/charts.html
@@ -14,40 +14,52 @@
 <text class="chart__axis-label" x="50" y="34" text-anchor="end">1500</text>
 <rect class="chart__bar--neg" x="65.5" y="184.5" width="28.6" height="14.1" />
 <text class="chart__value" x="79.8" y="212.6" text-anchor="middle">−137</text>
-<text class="chart__label" x="79.8" y="258" text-anchor="middle">oct 26</text>
+<text class="chart__label" x="79.8" y="254" text-anchor="middle">oct.</text>
+<text class="chart__label" x="79.8" y="267" text-anchor="middle">2026</text>
 <rect class="chart__bar" x="113.2" y="183.2" width="28.6" height="1.3" />
 <text class="chart__value" x="127.5" y="178.2" text-anchor="middle">13</text>
-<text class="chart__label" x="127.5" y="258" text-anchor="middle">nov 26</text>
+<text class="chart__label" x="127.5" y="254" text-anchor="middle">nov.</text>
+<text class="chart__label" x="127.5" y="267" text-anchor="middle">2026</text>
 <rect class="chart__bar--neg" x="160.9" y="184.5" width="28.6" height="3.8" />
 <text class="chart__value" x="175.2" y="202.3" text-anchor="middle">−37</text>
-<text class="chart__label" x="175.2" y="258" text-anchor="middle">dic 26</text>
+<text class="chart__label" x="175.2" y="254" text-anchor="middle">dic.</text>
+<text class="chart__label" x="175.2" y="267" text-anchor="middle">2026</text>
 <rect class="chart__bar" x="208.5" y="173" width="28.6" height="11.5" />
 <text class="chart__value" x="222.8" y="168" text-anchor="middle">112</text>
-<text class="chart__label" x="222.8" y="258" text-anchor="middle">ene 27</text>
+<text class="chart__label" x="222.8" y="254" text-anchor="middle">ene.</text>
+<text class="chart__label" x="222.8" y="267" text-anchor="middle">2027</text>
 <rect class="chart__bar" x="256.2" y="162.7" width="28.6" height="21.8" />
 <text class="chart__value" x="270.5" y="157.7" text-anchor="middle">212</text>
-<text class="chart__label" x="270.5" y="258" text-anchor="middle">feb 27</text>
+<text class="chart__label" x="270.5" y="254" text-anchor="middle">feb.</text>
+<text class="chart__label" x="270.5" y="267" text-anchor="middle">2027</text>
 <rect class="chart__bar" x="303.9" y="147.3" width="28.6" height="37.2" />
 <text class="chart__value" x="318.2" y="142.3" text-anchor="middle">361</text>
-<text class="chart__label" x="318.2" y="258" text-anchor="middle">mar 27</text>
+<text class="chart__label" x="318.2" y="254" text-anchor="middle">mar.</text>
+<text class="chart__label" x="318.2" y="267" text-anchor="middle">2027</text>
 <rect class="chart__bar" x="351.5" y="137" width="28.6" height="47.5" />
 <text class="chart__value" x="365.8" y="132" text-anchor="middle">461</text>
-<text class="chart__label" x="365.8" y="258" text-anchor="middle">abr 27</text>
+<text class="chart__label" x="365.8" y="254" text-anchor="middle">abr.</text>
+<text class="chart__label" x="365.8" y="267" text-anchor="middle">2027</text>
 <rect class="chart__bar" x="399.2" y="126.8" width="28.6" height="57.7" />
 <text class="chart__value" x="413.5" y="121.8" text-anchor="middle">560</text>
-<text class="chart__label" x="413.5" y="258" text-anchor="middle">may 27</text>
+<text class="chart__label" x="413.5" y="254" text-anchor="middle">may.</text>
+<text class="chart__label" x="413.5" y="267" text-anchor="middle">2027</text>
 <rect class="chart__bar" x="446.9" y="111.5" width="28.6" height="73" />
 <text class="chart__value" x="461.2" y="106.5" text-anchor="middle">709</text>
-<text class="chart__label" x="461.2" y="258" text-anchor="middle">jun 27</text>
+<text class="chart__label" x="461.2" y="254" text-anchor="middle">jun.</text>
+<text class="chart__label" x="461.2" y="267" text-anchor="middle">2027</text>
 <rect class="chart__bar" x="494.5" y="118.7" width="28.6" height="65.8" />
 <text class="chart__value" x="508.8" y="113.7" text-anchor="middle">639</text>
-<text class="chart__label" x="508.8" y="258" text-anchor="middle">jul 27</text>
+<text class="chart__label" x="508.8" y="254" text-anchor="middle">jul.</text>
+<text class="chart__label" x="508.8" y="267" text-anchor="middle">2027</text>
 <rect class="chart__bar" x="542.2" y="98.2" width="28.6" height="86.3" />
 <text class="chart__value" x="556.5" y="93.2" text-anchor="middle">838</text>
-<text class="chart__label" x="556.5" y="258" text-anchor="middle">ago 27</text>
+<text class="chart__label" x="556.5" y="254" text-anchor="middle">ago.</text>
+<text class="chart__label" x="556.5" y="267" text-anchor="middle">2027</text>
 <rect class="chart__bar" x="589.9" y="77.6" width="28.6" height="106.9" />
 <text class="chart__value" x="604.2" y="72.6" text-anchor="middle">1038</text>
-<text class="chart__label" x="604.2" y="258" text-anchor="middle">sep 27</text>
+<text class="chart__label" x="604.2" y="254" text-anchor="middle">sep.</text>
+<text class="chart__label" x="604.2" y="267" text-anchor="middle">2027</text>
 </svg>
 <figcaption class="figure-caption">Resultado mensual del año 1 (octubre 2026 – septiembre 2027), arquitectura B × demanda realista, sin IVA y antes de IRPF. Total del año: 4768 €. <span class="figure-caption__source">Fuente: murcia-model-tables.md T1.</span> <!-- chip --></figcaption>
 </figure>
@@ -67,11 +79,11 @@
 <text class="chart__axis-label" x="54" y="93" text-anchor="end">10.000</text>
 <line class="chart__grid" x1="60" y1="30" x2="490" y2="30" />
 <text class="chart__axis-label" x="54" y="34" text-anchor="end">15.000</text>
-<text class="chart__label" x="60" y="288" text-anchor="middle">oct 26</text>
-<text class="chart__label" x="167.5" y="288" text-anchor="middle">ene 27</text>
-<text class="chart__label" x="275" y="288" text-anchor="middle">abr 27</text>
-<text class="chart__label" x="382.5" y="288" text-anchor="middle">jul 27</text>
-<text class="chart__label" x="490" y="288" text-anchor="middle">oct 27, IVA</text>
+<text class="chart__label" x="60" y="288" text-anchor="middle">oct. 2026</text>
+<text class="chart__label" x="167.5" y="288" text-anchor="middle">ene. 2027</text>
+<text class="chart__label" x="275" y="288" text-anchor="middle">abr. 2027</text>
+<text class="chart__label" x="382.5" y="288" text-anchor="middle">jul. 2027</text>
+<text class="chart__label" x="490" y="288" text-anchor="middle">oct. 2027, IVA</text>
 <polyline class="chart__line" points="60,205.1 95.8,200.6 131.7,193.4 167.5,189.6 203.3,178.8 239.2,165.4 275,157.8 310.8,136.9 346.7,111.7 382.5,101.7 418.3,71.1 454.2,37.3 490,60.2" stroke-dasharray="2 4" />
 <text class="chart__label" x="498" y="64.2">Optimista: 12.444 €</text>
 <polyline class="chart__line" points="60,208.1 95.8,206.9 131.7,206.2 167.5,206 203.3,201.6 239.2,195 275,192.7 310.8,183.2 346.7,171.3 382.5,169.1 418.3,155 454.2,137.9 490,150.7" />
@@ -141,59 +153,59 @@
 <!-- chart:sensitivity -->
 <figure class="figure" id="fig-sensitivity">
 <svg class="chart" viewBox="0 0 640 304" role="img" aria-label="Resultado del año 1 y mínimo de caja para tres arquitecturas y tres escenarios de demanda">
-<text class="chart__axis-label" x="160" y="20">Demanda conservador</text>
-<text class="chart__axis-label" x="323.3" y="20">Demanda realista</text>
-<text class="chart__axis-label" x="486.7" y="20">Demanda optimista</text>
+<text class="chart__axis-label" x="160" y="20">Conservador</text>
+<text class="chart__axis-label" x="323.3" y="20">Realista</text>
+<text class="chart__axis-label" x="486.7" y="20">Optimista</text>
 <text class="chart__value" x="0" y="79">A · Penetración</text>
-<rect class="chart__grid" x="152" y="32" width="159.3" height="86" />
+<line class="chart__grid" x1="152" y1="32" x2="311.3" y2="32" />
 <text class="chart__value" x="160" y="52">Resultado −974 €</text>
 <rect class="chart__bar--neg" x="160" y="62" width="8.2" height="10" />
 <line class="chart__axis" x1="168.2" y1="58" x2="168.2" y2="76" />
 <text class="chart__label" x="160" y="92">Mínimo de caja −974 €</text>
-<text class="chart__label" x="160" y="107">oct 27, pago IVA</text>
-<rect class="chart__grid" x="315.3" y="32" width="159.3" height="86" />
+<text class="chart__label" x="160" y="107">oct. 2027, pago IVA</text>
+<line class="chart__grid" x1="315.3" y1="32" x2="474.7" y2="32" />
 <text class="chart__value" x="323.3" y="52">Resultado 2097 €</text>
 <rect class="chart__bar" x="331.5" y="62" width="17.7" height="10" />
 <line class="chart__axis" x1="331.5" y1="58" x2="331.5" y2="76" />
 <text class="chart__label" x="323.3" y="92">Mínimo de caja −318 €</text>
-<text class="chart__label" x="323.3" y="107">ene 27</text>
-<rect class="chart__grid" x="478.7" y="32" width="159.3" height="86" />
+<text class="chart__label" x="323.3" y="107">ene. 2027</text>
+<line class="chart__grid" x1="478.7" y1="32" x2="638" y2="32" />
 <text class="chart__value" x="486.7" y="52">Resultado 7654 €</text>
 <rect class="chart__bar" x="494.9" y="62" width="64.4" height="10" />
 <line class="chart__axis" x1="494.9" y1="58" x2="494.9" y2="76" />
 <text class="chart__label" x="486.7" y="92">Caja ≥ 0 todo el año</text>
 <text class="chart__value" x="0" y="169">B · Igualar mercado</text>
-<rect class="chart__grid" x="152" y="122" width="159.3" height="86" />
+<line class="chart__grid" x1="152" y1="122" x2="311.3" y2="122" />
 <text class="chart__value" x="160" y="142">Resultado 139 €</text>
 <rect class="chart__bar" x="168.2" y="152" width="1.2" height="10" />
 <line class="chart__axis" x1="168.2" y1="148" x2="168.2" y2="166" />
 <text class="chart__label" x="160" y="182">Mínimo de caja −548 €</text>
-<text class="chart__label" x="160" y="197">ene 27</text>
-<rect class="chart__grid" x="315.3" y="122" width="159.3" height="86" />
+<text class="chart__label" x="160" y="197">ene. 2027</text>
+<line class="chart__grid" x1="315.3" y1="122" x2="474.7" y2="122" />
 <text class="chart__value" x="323.3" y="142">Resultado 4768 €</text>
 <rect class="chart__bar" x="331.5" y="152" width="40.1" height="10" />
 <line class="chart__axis" x1="331.5" y1="148" x2="331.5" y2="166" />
 <text class="chart__label" x="323.3" y="182">Mínimo de caja −91 €</text>
-<text class="chart__label" x="323.3" y="197">oct 26</text>
-<rect class="chart__grid" x="478.7" y="122" width="159.3" height="86" />
+<text class="chart__label" x="323.3" y="197">oct. 2026</text>
+<line class="chart__grid" x1="478.7" y1="122" x2="638" y2="122" />
 <text class="chart__value" x="486.7" y="142">Resultado 12.444 €</text>
 <rect class="chart__bar" x="494.9" y="152" width="104.7" height="10" />
 <line class="chart__axis" x1="494.9" y1="148" x2="494.9" y2="166" />
 <text class="chart__label" x="486.7" y="182">Caja ≥ 0 todo el año</text>
 <text class="chart__value" x="0" y="259">C · Premium escalonado</text>
-<rect class="chart__grid" x="152" y="212" width="159.3" height="86" />
+<line class="chart__grid" x1="152" y1="212" x2="311.3" y2="212" />
 <text class="chart__value" x="160" y="232">Resultado 868 €</text>
 <rect class="chart__bar" x="168.2" y="242" width="7.3" height="10" />
 <line class="chart__axis" x1="168.2" y1="238" x2="168.2" y2="256" />
 <text class="chart__label" x="160" y="272">Mínimo de caja −425 €</text>
-<text class="chart__label" x="160" y="287">ene 27</text>
-<rect class="chart__grid" x="315.3" y="212" width="159.3" height="86" />
+<text class="chart__label" x="160" y="287">ene. 2027</text>
+<line class="chart__grid" x1="315.3" y1="212" x2="474.7" y2="212" />
 <text class="chart__value" x="323.3" y="232">Resultado 6517 €</text>
 <rect class="chart__bar" x="331.5" y="242" width="54.9" height="10" />
 <line class="chart__axis" x1="331.5" y1="238" x2="331.5" y2="256" />
 <text class="chart__label" x="323.3" y="272">Mínimo de caja −54 €</text>
-<text class="chart__label" x="323.3" y="287">oct 26</text>
-<rect class="chart__grid" x="478.7" y="212" width="159.3" height="86" />
+<text class="chart__label" x="323.3" y="287">oct. 2026</text>
+<line class="chart__grid" x1="478.7" y1="212" x2="638" y2="212" />
 <text class="chart__value" x="486.7" y="232">Resultado 15.579 €</text>
 <rect class="chart__bar" x="494.9" y="242" width="131.1" height="10" />
 <line class="chart__axis" x1="494.9" y1="238" x2="494.9" y2="256" />
@@ -283,7 +295,7 @@
 <text class="chart__label" x="12" y="84">Valencia</text>
 <text class="chart__label" x="12" y="97">Granada</text>
 <rect class="chart__bar--aqua" x="209.4" y="50" width="37.9" height="8" />
-<rect class="chart__bar" x="235.4" y="48" width="2.5" height="12" />
+<rect class="chart__bar--estimate" x="235.4" y="48" width="2.5" height="12" />
 <text class="chart__label" x="488" y="58">36–59 € · med. 52,5 €</text>
 <text class="chart__label" x="488" y="71">35–60 €</text>
 <line class="chart__line" x1="207.8" y1="67" x2="249" y2="67" />
@@ -296,7 +308,7 @@
 <text class="chart__label" x="12" y="162">Valencia</text>
 <text class="chart__label" x="12" y="175">Granada</text>
 <rect class="chart__bar--aqua" x="249" y="128" width="66" height="8" />
-<rect class="chart__bar" x="259.3" y="126" width="2.5" height="12" />
+<rect class="chart__bar--estimate" x="259.3" y="126" width="2.5" height="12" />
 <text class="chart__label" x="488" y="136">60–100 € · med. 67 €</text>
 <text class="chart__label" x="488" y="149">55–90 €</text>
 <line class="chart__line" x1="240.8" y1="145" x2="298.5" y2="145" />
@@ -321,7 +333,7 @@
 <text class="chart__label" x="12" y="318">Valencia</text>
 <text class="chart__label" x="12" y="331">Granada</text>
 <rect class="chart__bar--aqua" x="249" y="284" width="49.5" height="8" />
-<rect class="chart__bar" x="279.1" y="282" width="2.5" height="12" />
+<rect class="chart__bar--estimate" x="279.1" y="282" width="2.5" height="12" />
 <text class="chart__label" x="488" y="292">60–90 € · med. 79 €</text>
 <text class="chart__label" x="488" y="305">60–97 €</text>
 <line class="chart__line" x1="249" y1="301" x2="310" y2="301" />
@@ -335,7 +347,7 @@
 <text class="chart__label" x="12" y="396">Valencia</text>
 <text class="chart__label" x="12" y="409">Granada</text>
 <rect class="chart__bar--aqua" x="290.3" y="362" width="57.8" height="8" />
-<rect class="chart__bar" x="313.8" y="360" width="2.5" height="12" />
+<rect class="chart__bar--estimate" x="313.8" y="360" width="2.5" height="12" />
 <text class="chart__label" x="488" y="370">85–120 € · med. 100 €</text>
 <text class="chart__label" x="488" y="383">90–119 €</text>
 <line class="chart__line" x1="298.5" y1="379" x2="346.4" y2="379" />
@@ -349,7 +361,7 @@
 <text class="chart__label" x="12" y="474">Valencia</text>
 <text class="chart__label" x="12" y="487">Granada</text>
 <rect class="chart__bar--aqua" x="296.9" y="440" width="150.1" height="8" />
-<rect class="chart__bar" x="330.3" y="438" width="2.5" height="12" />
+<rect class="chart__bar--estimate" x="330.3" y="438" width="2.5" height="12" />
 <text class="chart__label" x="488" y="448">89–180 € · med. 110 €</text>
 <text class="chart__label" x="488" y="461">120–175 €</text>
 <line class="chart__line" x1="348" y1="457" x2="438.8" y2="457" />
@@ -363,7 +375,7 @@
 <text class="chart__label" x="12" y="552">Valencia</text>
 <text class="chart__label" x="12" y="565">Granada</text>
 <rect class="chart__bar--aqua" x="199.5" y="518" width="49.5" height="8" />
-<rect class="chart__bar" x="214.8" y="516" width="2.5" height="12" />
+<rect class="chart__bar--estimate" x="214.8" y="516" width="2.5" height="12" />
 <text class="chart__label" x="488" y="526">30–60 € · med. 40 €</text>
 <text class="chart__label" x="488" y="539">42–50 €</text>
 <line class="chart__line" x1="219.3" y1="535" x2="232.5" y2="535" />
@@ -375,13 +387,13 @@
 <text class="chart__label" x="12" y="630">Valencia</text>
 <text class="chart__label" x="12" y="643">Granada</text>
 <rect class="chart__bar--aqua" x="158.3" y="596" width="24.8" height="8" />
-<rect class="chart__bar" x="165.3" y="594" width="2.5" height="12" />
+<rect class="chart__bar--estimate" x="165.3" y="594" width="2.5" height="12" />
 <text class="chart__label" x="488" y="604">5–20 € · med. 10 €</text>
 <text class="chart__label" x="488" y="617">sin dato comparable</text>
 <text class="chart__label" x="488" y="630">sin dato comparable</text>
 <text class="chart__label" x="488" y="643">sin dato comparable</text>
 </svg>
-<figcaption class="figure-caption">Precios publicados por pieza: rango de Murcia (barra) y mediana publicada (marca), frente a los rangos de Madrid y Valencia y las cifras de Granada. Bases de IVA mezcladas, como se publican. <span class="figure-caption__source">Fuente: murcia-market.md §5 (Madrid y Valencia: market-dossier.md §2.1 y §3.1; Granada: granada-market.md §3–§4).</span> <!-- chip --></figcaption>
+<figcaption class="figure-caption">Precios publicados por pieza: rango de Murcia (barra) y mediana estimada (marca dorada), frente a los rangos de Madrid y Valencia y las cifras de Granada. Bases de IVA mezcladas, como se publican. <span class="figure-caption__source">Fuente: murcia-market.md §5 (Madrid y Valencia: market-dossier.md §2.1 y §3.1; Granada: granada-market.md §3–§4).</span> <!-- chip --></figcaption>
 </figure>
 <!-- /chart -->
 
@@ -405,7 +417,7 @@
 <rect class="chart__bar--estimate" x="180" y="96" width="170" height="14" />
 <text class="chart__label" x="356" y="107">704.814</text>
 <rect class="chart__bar--estimate" x="450.2" y="96" width="24" height="14" />
-<text class="chart__label" x="480.2" y="107">2,8–9,42 €</text>
+<text class="chart__label" x="480.2" y="107">2,80–9,42 €</text>
 <text class="chart__value" x="0" y="160">R3</text>
 <text class="chart__label" x="28" y="160">Anillo exterior:</text>
 <text class="chart__label" x="28" y="175">recargo o pedido mínimo</text>
diff --git a/business/reports/_template/build-charts.mjs b/business/reports/_template/build-charts.mjs
index a7b0563..b798674 100644
--- a/business/reports/_template/build-charts.mjs
+++ b/business/reports/_template/build-charts.mjs
@@ -21,10 +21,14 @@ const num = (x, d = decimals(x)) => {
   return x < 0 ? `−${body}` : body;
 };
 const eur = (x) => `${num(x)} €`;
-const range = ([lo, hi]) => (lo === hi ? eur(lo) : `${num(lo)}–${num(hi)} €`);
+const range = ([lo, hi]) => {
+  if (lo === hi) return eur(lo);
+  const d = Number.isInteger(lo) && Number.isInteger(hi) ? 0 : 2;
+  return `${num(lo, d)}–${num(hi, d)} €`;
+};
 const month = (m) => {
   const [mm, yy] = m.split("-");
-  return `${MONTH_ES[mm]} ${yy.slice(2)}`;
+  return `${MONTH_ES[mm]}. ${yy}`;
 };
 const when = (m) => (DATA.meta.months.includes(m) ? month(m) : `${month(m)}, pago IVA`);
 
@@ -84,7 +88,9 @@ function y1Result() {
     const bot = y(Math.min(0, r.result));
     body.push(rect(r.result < 0 ? "chart__bar--neg" : "chart__bar", x, top, bw, bot - top));
     body.push(text("chart__value", x + bw / 2, r.result < 0 ? bot + 14 : top - 5, num(r.result), "middle"));
-    body.push(text("chart__label", x + bw / 2, B + 22, month(r.month), "middle"));
+    const [mm, yy] = month(r.month).split(" ");
+    body.push(text("chart__label", x + bw / 2, B + 18, mm, "middle"));
+    body.push(text("chart__label", x + bw / 2, B + 31, yy, "middle"));
   });
   return figure(
     "y1-result",
@@ -97,7 +103,7 @@ function y1Result() {
 }
 
 function cashScenarios() {
-  const labels = [...DATA.meta.months.map(month), "oct 27, IVA"];
+  const labels = [...DATA.meta.months.map(month), `${month("Oct-2027")}, IVA`];
   const series = ["optimista", "realista", "conservador"].map((k) => {
     const run = DATA.year1[k].B;
     return { k, pts: [...run.rows.map((r) => r.cash), run.summary.endCash], s: run.summary };
@@ -191,7 +197,7 @@ function sensitivity() {
   const maxPos = Math.max(...env.map((e) => e.result), 0);
   const maxNeg = Math.max(...env.map((e) => -e.result), 0);
   const body = [];
-  scen.forEach((s, j) => body.push(text("chart__axis-label", L + j * cw + 10, T - 10, `Demanda ${s}`)));
+  scen.forEach((s, j) => body.push(text("chart__axis-label", L + j * cw + 10, T - 10, SCEN_ES[s])));
   ["A", "B", "C"].forEach((a, i) => {
     const yc = T + i * ch;
     body.push(text("chart__value", 0, yc + ch / 2 + 4, ARCH_ES[a]));
@@ -201,7 +207,7 @@ function sensitivity() {
       const span = cw - 24;
       const zero = xc + 10 + (span * maxNeg) / (maxNeg + maxPos);
       const w = (span * Math.abs(e.result)) / (maxNeg + maxPos);
-      body.push(rect("chart__grid", xc + 2, yc + 2, cw - 4, ch - 4));
+      body.push(line("chart__grid", xc + 2, yc + 2, xc + cw - 2, yc + 2));
       body.push(text("chart__value", xc + 10, yc + 22, `Resultado ${eur(e.result)}`));
       body.push(rect(e.result < 0 ? "chart__bar--neg" : "chart__bar", e.result < 0 ? zero - w : zero, yc + 32, w, 10));
       body.push(line("chart__axis", zero, yc + 28, zero, yc + 46));
@@ -221,8 +227,9 @@ function sensitivity() {
 
 function trajectory() {
   const y1 = DATA.year1.realista.B.summary;
+  const y2 = DATA.longRun.realista.B.years[0];
   const years = [
-    { year: 1, result: y1.result, operators: 1, owner: null },
+    { year: 1, result: y1.result, operators: y2.operators - y2.newHire, owner: null },
     ...DATA.longRun.realista.B.years.map((y) => ({ year: y.year, result: y.result, operators: y.operators, owner: y.ownerStateHolds })),
   ];
   const H = 300;
@@ -287,7 +294,7 @@ function priceMap() {
     const [lo, hi] = r.murciaRange.value;
     body.push(rect("chart__bar--aqua", x(lo), sub(0) - 4, x(hi) - x(lo), 8));
     const med = r.murciaMedian.value;
-    if (med !== null) body.push(rect("chart__bar", x(med) - 1.25, sub(0) - 6, 2.5, 12));
+    if (med !== null) body.push(rect("chart__bar--estimate", x(med) - 1.25, sub(0) - 6, 2.5, 12));
     body.push(text("chart__label", W - R + 8, sub(0) + 4, med === null ? `${range([lo, hi])} · sin mediana` : `${range([lo, hi])} · med. ${eur(med)}`));
     body.push(...other(r.madrid.value, sub(1)));
     body.push(...other(r.valencia.value, sub(2)));
@@ -298,18 +305,20 @@ function priceMap() {
     H,
     "Precios publicados por pieza en Murcia frente a Madrid, Valencia y Granada",
     body,
-    "Precios publicados por pieza: rango de Murcia (barra) y mediana publicada (marca), frente a los rangos de Madrid y Valencia y las cifras de Granada. Bases de IVA mezcladas, como se publican.",
+    "Precios publicados por pieza: rango de Murcia (barra) y mediana estimada (marca dorada), frente a los rangos de Madrid y Valencia y las cifras de Granada. Bases de IVA mezcladas, como se publican.",
     "murcia-market.md §5 (Madrid y Valencia: market-dossier.md §2.1 y §3.1; Granada: granada-market.md §3–§4)",
   );
 }
 
 function rings() {
+  const rs = DATA.market.rings;
+  const barrios = rs[0].scope.match(/(\d+) barrios/)[1];
+  const perKm = +rs.find((r) => r.travel.note?.includes("/km")).travel.note.match(/€([\d.]+)\/km/)[1];
   const scope = {
-    R1: ["Núcleo urbano,", "24 barrios"],
+    R1: ["Núcleo urbano,", `${barrios} barrios`],
     R2: ["Municipio +", "primer cinturón"],
     R3: ["Anillo exterior:", "recargo o pedido mínimo"],
   };
-  const rs = DATA.market.rings;
   const T = 40;
   const rh = 54;
   const H = T + rs.length * rh;
@@ -337,7 +346,7 @@ function rings() {
     H,
     "Anillos de servicio: población y coste de desplazamiento por visita",
     body,
-    "Anillos de servicio: población y coste de ida y vuelta por visita a 0,175 €/km. Verde: dato de una fuente; dorado: estimación.",
+    `Anillos de servicio: población y coste de ida y vuelta por visita a ${num(perKm)} €/km. Verde: dato de una fuente; dorado: estimación.`,
     "murcia-market.md §1.7 y §8.5",
   );
 }
diff --git a/specs/business-report-murcia/feature.md b/specs/business-report-murcia/feature.md
index 23575c3..6d8b96f 100644
--- a/specs/business-report-murcia/feature.md
+++ b/specs/business-report-murcia/feature.md
@@ -245,7 +245,7 @@ case by someone who did the work, not as generated filler.
   minor wording and chip items; name the research files in ch. 13; unify "conservador".
   _Verify:_ `node business/reports/_template/build-report.mjs && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-1[0-3]*.html; echo "exit $?"`.
   Accept: F-043 to F-051 addressed at their lines; no model figure changed; the build runs.
-- [ ] **T8 — Render, check and ship** (structural). Render the PDF with the README's
+- [x] **T8 — Render, check and ship** (structural). Render the PDF with the README's
   headless-Chrome recipe (absolute `file://` URL, `--virtual-time-budget`,
   `--no-pdf-header-footer`); confirm page count ≥40 and size ≥1 MB; run a number-trace
   pass like `CHECK.md`: extract text with `pdftotext -layout`, pick every figure in ch. 1,
@@ -315,3 +315,4 @@ case by someone who did the work, not as generated filler.
 | T12 | build + placeholder grep | docs | n/a (prose) | n/a | build ok; grep exit 1 | none | none |
 | T7 | build + chip count + placeholder grep | docs | n/a (prose) | n/a | build ok; chips 20/19/27/5; grep exit 1; TOC page numbers left for T8's render pass | none | none |
 | T13 | build + placeholder grep | docs | n/a (prose) | n/a | build ok; grep exit 1 | none | none |
+| T8 | verify command + TOC/footer match + 58-row number trace (structural) | render + check | Checks run first: model and build `exit 0`, external refs `0`, placeholder grep hits only base64 font data, PDF `FileNotFoundError` (not yet rendered), superseded files unchanged | n/a (structural) | `54` pages, 1,441,364 bytes; `grep -c "Match"` → `81`; `exit 0` | Triangulation skipped: structural; 13/13 TOC entries equal the opening page and printed footer, pages 2–54 footers sequential, cover unnumbered | y1-result month labels split onto two lines after a render showed "oct. 2026" labels colliding |
diff --git a/business/reports/CHECK-murcia.md b/business/reports/CHECK-murcia.md
new file mode 100644
index 0000000..3fb3e40
--- /dev/null
+++ b/business/reports/CHECK-murcia.md
@@ -0,0 +1,162 @@
+# CHECK — Murcia business report (T8)
+
+> Verification pass on `business/reports/business-report-murcia.pdf`, rendered from
+> `business-report-murcia.html` with the template README's headless-Chrome recipe
+> (absolute `file://` URL, `--virtual-time-budget=15000`, `--no-pdf-header-footer`).
+> Text read with `pdftotext -enc UTF-8 -layout`; pages counted with `pypdf`; chart
+> pages inspected as PyMuPDF renders. Run 2026-10-07.
+>
+> Sources traced against: `murcia-market.md`, `murcia-model.md`,
+> `murcia-model-tables.md`, `murcia-model-data.json`, `pricing-decision.md`,
+> `aids-and-eu-branding.md`, `marketing-research-addendum.md`. The private calibration
+> file was not opened.
+
+**Result: DONE_WITH_CONCERNS.** 54 pages, 1.44 MB. Every traced figure matches its
+source; no transcription error found, so no prose was changed. Seven findings are
+listed at the end for the orchestrator: label or scope items, none a wrong number.
+
+---
+
+## 1. Render
+
+| Check | Expected | Observed | Verdict |
+| --- | --- | --- | --- |
+| Page count | ≥ 40 | 54 | Match |
+| File size | ≥ 1 MB | 1,441,364 bytes | Match |
+| Cover | no page number | last line of page 1 is the chip legend | Match |
+| Content pages | numbered | pages 2–54 print 2–54 in order | Match |
+| TOC placeholders | no "—" left | 0 on page 2 | Match |
+
+## 2. TOC page numbers against the PDF
+
+The cover counts as page 1 (README §2). Each chapter's first page was found by its
+numeral heading and its printed footer read.
+
+| Chapter | TOC | Opens on page | Printed footer | Verdict |
+| --- | --- | --- | --- | --- |
+| 01 Resumen ejecutivo | 3 | 3 | 3 | Match |
+| 02 Las dos primeras semanas | 6 | 6 | 6 | Match |
+| 03 La empresa y el servicio | 10 | 10 | 10 | Match |
+| 04 El mercado de Murcia | 12 | 12 | 12 | Match |
+| 05 La competencia | 18 | 18 | 18 | Match |
+| 06 El cliente y cómo llegar a él | 26 | 26 | 26 | Match |
+| 07 Precios | 29 | 29 | 29 | Match |
+| 08 Captación de clientes | 33 | 33 | 33 | Match |
+| 09 Costes por servicio y costes fijos | 36 | 36 | 36 | Match |
+| 10 Proyecciones | 39 | 39 | 39 | Match |
+| 11 Crecimiento | 46 | 46 | 46 | Match |
+| 12 Riesgos y supuestos | 48 | 48 | 48 | Match |
+| 13 Glosario y fuentes | 51 | 51 | 51 | Match |
+
+## 3. Numbers — chapters 1, 2, 7, 9 and 10
+
+Chip = the chip printed next to the figure; Source label = the label the source gives.
+
+| Ch. | Figure in report | Traces to | Chip / source label | Verdict |
+| --- | --- | --- | --- | --- |
+| 1 | 479.405 habitantes | murcia-market.md §1.1 (479,405, INE) | FACT / FACT (1 source), provisional | Match |
+| 1 | casco urbano 138.997; 59 pedanías | murcia-market.md §1.2 | FACT / FACT (1 source), provisional | Match |
+| 1 | 704.814 personas, ≈250.700 hogares; cinturón a 9–27 km | murcia-market.md §1.7 R2 row | ESTIMATE / ESTIMATE | Match |
+| 1 | costa, Cartagena y Lorca 666.428; 30–79 km | murcia-market.md §1.7 R3 row | ESTIMATE / ESTIMATE | Match |
+| 1 | medianas sofá 3 plazas 100 €, colchón matrimonio 67 € | murcia-market.md §5 (M20) | ESTIMATE / medians ESTIMATE | Match |
+| 1, 2 | grid B 49 / 69 / 89 / 95 €, mínimo 70 € | pricing-decision.md §4.2 | none (called a proposal) / PROPOSAL | Match |
+| 1 | 17 proveedores, 6 con precio por tamaño, 10 sin precio | murcia-market.md §4.1, M16 | ESTIMATE / ESTIMATE (lower bound) | Match |
+| 1, 2 | dos especialistas con más de 30 reseñas, 66 y 37 | murcia-market.md §4.3 (Limpiezalto 66, TapiClean 37) | FACT / FACT | Match |
+| 1 | Google Maps, ocho resultados por búsqueda | murcia-market.md §4 sweep method | FACT / FACT | Match |
+| 1, 2, 7, 9 | pieza suelta −18,08 €, dos piezas +40,33 € | murcia-model-tables.md T8 row B | ESTIMATE / ESTIMATE | Match |
+| 1, 2, 7, 9 | captación 71 € (banda 36–111 €) | murcia-model.md I19 | ESTIMATE / ESTIMATE | Match |
+| 1, 10 | año uno B realista: 14.877 € brutos, 4.768 € resultado | murcia-model-tables.md T1 summary, T4 | ESTIMATE / ESTIMATE | Match |
+| 1, 10 | caja mínima −91 € en octubre; primer mes positivo noviembre; acumulado positivo febrero 2027 | murcia-model-tables.md T4 B realista | ESTIMATE / ESTIMATE | Match |
+| 1, 10 | B conservador: 139 €, caja −548 € en enero | murcia-model-tables.md T4 B conservador | ESTIMATE / ESTIMATE | Match |
+| 1, 9 | 3,5 € válido hasta unos 10 km | murcia-model.md §2.1; murcia-market.md §8.5 | ESTIMATE / ESTIMATE | Match |
+| 1 | Molina 4,38 €, Santomera 7,18 €, Cartagena 17,05 € | murcia-market.md §8.5 table | ESTIMATE / ESTIMATE (M25) | Match |
+| 1, 9 | viaje 4,5 €, aparcamiento 1 € por visita | murcia-model.md I6, I7 | ESTIMATE / ESTIMATE | Match |
+| 1, 2, 9 | SER sector A 1,90 € por 90 min; sector B 2,70 € por 150 min | murcia-market.md §8.3 | ESTIMATE / VAT-incl. ESTIMATE | Match |
+| 1, 2, 9 | fijos 186 € con tarifa plana, 356 € después | murcia-model.md I8, I9; Table 9.2 sums 80+30+50+25+1 and 250+30+50+25+1 | ESTIMATE / mixed, RC part ESTIMATE | Match |
+| 1, 9, 10 | equilibrio B 3,4 / 8,8 / 11,8 piezas (186 / 486 / 656 €) | murcia-model-tables.md T7 | ESTIMATE / ESTIMATE | Match |
+| 10 | equilibrio A 4,4 / 11,5 / 15,5 y C 2,9 / 7,6 / 10,3 | murcia-model-tables.md T7 | ESTIMATE / ESTIMATE | Match |
+| 1, 10 | mes más cargado del año uno: 56 piezas | murcia-model-data.json year1 (max pieces 56, optimista × A, Sep-2027) | none / model output | Match |
+| 1, 2 | RC 25 €/mes con 150.000 € de cobertura | murcia-model.md I10 | ESTIMATE / ESTIMATE | Match |
+| 1, 2 | Cuota Cero 2.920 €, cierra 15-oct-2026 | murcia-market.md §8.1; aids-and-eu-branding.md §1 | FACT / FACT (1 source), provisional | Match |
+| 1, 2 | SEF autónomo 6.000–9.900 € | aids-and-eu-branding.md §2 | FACT / FACT | Match |
+| 2 | medianas con IVA igualado 57 € y 70,8 € | murcia-market.md §5 (M20 €67 / €70.8) | ESTIMATE / ESTIMATE | Match |
+| 2 | distancias: El Palmar 8, Alcantarilla 8,7, Molina 12,5, Archena 26,9; Cartagena 48,7, Lorca 78,7 km | murcia-market.md §1.6–§1.7, §8.5 | ESTIMATE / ESTIMATE | Match |
+| 2, 9 | ida y vuelta 2,80–9,42 € en el cinturón; Lorca 27,55 € | murcia-market.md §8.5 (M25) | ESTIMATE / ESTIMATE | Match |
+| 2 | viviendas turísticas 9.910 en R3 frente a 857 en R2 | murcia-market.md §7.3 (M23) | ESTIMATE / R2, R3 ESTIMATE (sums) | Match |
+| 2 | reseñas: 89 % (Skeepers) y 75 % (Barómetro) | marketing-research-addendum.md R2/R4 | FACT / FACT (1 source) each | Match |
+| 2 | prórroga de tarifa plana: cada mes mueve el año uno 170 € | murcia-model.md I8, I9 (356 − 186 = 170) | ESTIMATE / derived | Match |
+| 7 | de cada 100 € la empresa se queda 82,6 € | pricing-decision.md §3.2 | FACT / FACT | Match |
+| 7 | grid A 39 / 55 / 69 / 72 €, mínimo 55 €; grid C 49/65/79, 69/89/109, 95/119/145 € | pricing-decision.md §4.1, §4.3 | none (proposal) / PROPOSAL | Match |
+| 7 | mezcla 50 % matrimonio, 20 % individual, 25 % sofá 3 plazas, 5 % king | murcia-model.md M1 | ESTIMATE / ESTIMATE | Match |
+| 7 | precio medio 56,75 / 72,50 / 82,81 € | murcia-model.md I1–I3 | none (proposal) / PROPOSAL | Match |
+| 7 | T7.2: 46,90 / 59,92 / 68,44; 42,35 / 55,36 / 63,88; −31,10 / −18,08 / −9,56; +14,30 / +40,33 / +57,38 | murcia-model-tables.md T8 | ESTIMATE / ESTIMATE | Match |
+| 7, 10 | piezas para amortizar la captación 1,7 / 1,3 / 1,1 | murcia-model-tables.md T9 (ratios, CAC payback) | ESTIMATE / ESTIMATE | Match |
+| 7 | estudio de julio −34 / −22 / −6 € | pricing-decision.md §4.4 | ESTIMATE / ESTIMATE | Match |
+| 7 | packs de Madrid y Valencia 97 / 119 / 169 € | pricing-decision.md §2.2; market-dossier.md §2.1 | FACT / FACT | Match |
+| 9 | 0,175 €/km todo incluido | murcia-market.md §8.5; murcia-model-data.json market.rings travel note | none / ESTIMATE | Match |
+| 9 | 40 % de trabajos en zona de pago | murcia-model.md I7a | HYPOTHESIS / HYPOTHESIS | Match |
+| 9 | gasolina 1,80 €, gasóleo 1,89 € (medias del municipio) | murcia-market.md §8.4 (1.795 / 1.888) | ESTIMATE / means ESTIMATE | Match |
+| 9 | 0,11 €/km solo combustible a 6 l/100 | murcia-market.md §8.5 (≈0.108 / ≈0.113) | HYPOTHESIS / derived on assumed consumption | Match |
+| 9 | 58,42 € sin material; 92 % del precio neto | 59,92 − 1,5; 55,36 ÷ 59,92 = 92,4 % (murcia-model-tables.md T9) | ESTIMATE / ESTIMATE | Match |
+| 9 | cuota 250 €, centro de 205–300 € | murcia-model.md I9; pricing-decision.md §3.1 | FACT / FACT (band) | Match |
+| 10 | curvas: anuncios 2→6 y resto 0→12 (realista, 1,8 ppv); 1→2 y 0→7 (1,5); 3→10 y 1→18 (2) | murcia-model-data.json inputs.scenarios (murcia-model.md I13) | ESTIMATE / ESTIMATE | Match |
+| 10 | Tabla 10.1, los doce meses de B realista | murcia-model-tables.md T1 | ESTIMATE / ESTIMATE | Match |
+| 10 | 12.295 € sin IVA; 1.087 € de IVA pendiente; caja de septiembre 5.855 € | murcia-model-tables.md T1 summary and Sep-2027 row | ESTIMATE / ESTIMATE | Match |
+| 10 | A realista 2.097 € y −318 €; C realista 6.517 € y −54 €; diferencia 4.420 € | murcia-model-tables.md T4 (6,517 − 2,097) | ESTIMATE / ESTIMATE | Match |
+| 10 | Tabla 10.2, nueve combinaciones (p. ej. A conservador 4.852 / −974; C optimista 30.474 / 15.579) | murcia-model-tables.md T4 | ESTIMATE / ESTIMATE | Match |
+| 10 | años 2–3 B realista: 24 y 34 visitas, 43 y 61 piezas, 37.584 y 53.244 €, 19.028 y 30.386 € | murcia-model-tables.md T5 | ESTIMATE / ESTIMATE | Match |
+| 10 | conservador 5.154 y 8.496 €; optimista 36.025 y 26.837 € | murcia-model-tables.md T5 | ESTIMATE / ESTIMATE | Match |
+| 10 | utilización 70 % en el año 3 y 84 % en el año 4 | murcia-model-tables.md T6 (69.5, 84.0) | none / ESTIMATE, HYPOTHESIS | Match |
+| 10 | Tabla 10.3, años 2–8 (p. ej. año 4 38.856 €, año 8 26.728 €) | murcia-model-tables.md T6 | HYPOTHESIS / HYPOTHESIS from Y4 | Match |
+| 10 | sueldo 1.860 €/mes, segunda máquina 2.300 € | murcia-model.md I20, I21 | HYPOTHESIS / ESTIMATE, CAPTURED | Match |
+| 10 | caja acumulada 189.562 € al cierre del año 8 | murcia-model-tables.md T6 Y8 | HYPOTHESIS / HYPOTHESIS | Match |
+| 10 | ratios 92,4 %, 1,3 piezas, 38,8 %, 25,9 % | murcia-model-tables.md T9 column B | ESTIMATE / ESTIMATE | Match |
+| 10 | con 1,5 piezas por visita: unas 34 piezas y unos 2.000 € menos | 114 visits × 0.3 = 34.2 pieces; 34.2 × (59.92 − 1.5) ≈ 1,998 € | ESTIMATE / derived | Match |
+
+58 rows, every one a Match. No figure in these chapters was found without a source.
+
+## 4. Other checks
+
+| Check | Method | Result | Verdict |
+| --- | --- | --- | --- |
+| External URLs | `grep -c 'href="http\|src="http\|url(http'` on the HTML | 0 | Match |
+| Placeholders | `grep -n "TODO\|TBD\|lorem"` on `_src/murcia/*.html` | no hit (exit 1) | Match |
+| Placeholders in the built HTML | same grep on `business-report-murcia.html` | 5 hits, all inside base64 font data (lines 19, 47, 49, 50, 51) | Match (false positive, see F-7) |
+| Charts | 7 inline SVG charts plus the logo, each with caption, source and chip | 8 `<svg>` | Match |
+
+## 5. Chart fixes (F-010 to F-015)
+
+Done in `build-charts.mjs`, charts and report rebuilt, PDF re-rendered.
+
+- F-010: the sensitivity grid draws a top hairline per cell instead of a closed rect.
+- F-011: column headers are the scenario names from `SCEN_ES` (Conservador /
+  Realista / Optimista), so no "Demanda conservador".
+- F-012: the Murcia median mark uses `.chart__bar--estimate`; the caption says
+  "mediana estimada (marca dorada)".
+- F-013: a range with a cent amount prints two decimals at both ends ("2,80–9,42 €").
+- F-014: months print as "oct. 2027"; in the monthly bar chart month and year sit on
+  two lines so the twelve labels do not collide.
+- F-015: year-1 operators come from the Y2 row (`operators − newHire`), "24 barrios"
+  from `market.rings[0].scope`, and 0,175 €/km from the rings' travel note.
+
+## 6. Findings (not transcription errors; prose left as written)
+
+- F-1 ch. 2 "pólizas básicas … entre 99 € y 120 € al año" (FACT) comes from
+  `rc-insurance-quote.md`, which is not in the feature's list of number sources;
+  `murcia-model.md` I10 cites that file. The figure is right; the source is outside the list.
+- F-2 ch. 7 hotel example "unos 1.230 €" is chipped ESTIMATE; `pricing-decision.md`
+  tags the paragraph [ANALYSIS].
+- F-3 ch. 2 municipal aid 3.500 € (closed 20-jul-2026) and the 2.500 € + IVA
+  investment condition are chipped ESTIMATE; `aids-and-eu-branding.md` labels both
+  FACT (secondary). The chip is weaker than the source, not stronger.
+- F-4 ch. 9 "anuncios … de 150 a 400 € al mes en el primer año" is the realista
+  schedule; the optimista one reaches 600 € (`inputs.scenarios.optimista.ads`). The
+  scenario is not named in that sentence (ch. 10 does name it).
+- F-5 ch. 1, 7, 9 capacity 88 piezas and material 1,5 € are chipped FACT;
+  `murcia-model.md` I12 and I5 label them CAPTURED (founder input). The chip set has no
+  CAPTURED, so FACT is the nearest; noted for consistency.
+- F-6 charts print four-digit figures without the thousands point ("4768 €",
+  "2097 €") while tables and prose print "4.768 €": `num()` groups only above four
+  digits. Not in F-010 to F-015, left as is.
+- F-7 the Checks' placeholder grep matches base64 font data in the built HTML, so it
+  can never come back clean; it is meaningful only on `_src/murcia/*.html`.
```
