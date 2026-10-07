class: medium

## git status --short -uall
```
 M business/reports/_src/murcia/ch-10-proyecciones.html
 M business/reports/_src/murcia/ch-11-crecimiento.html
 M business/reports/_src/murcia/ch-12-riesgos.html
 M business/reports/_src/murcia/ch-13-glosario-fuentes.html
?? .torq-flow/active
?? .torq-flow/run
?? business/research/aids-and-eu-branding.md
?? specs/business-report-murcia/review/T7/brief.md
?? specs/business-report-murcia/review/T7/report.md
```

## git diff HEAD
```diff
diff --git a/business/reports/_src/murcia/ch-10-proyecciones.html b/business/reports/_src/murcia/ch-10-proyecciones.html
index 59d7ae3..8787cce 100644
--- a/business/reports/_src/murcia/ch-10-proyecciones.html
+++ b/business/reports/_src/murcia/ch-10-proyecciones.html
@@ -4,9 +4,206 @@
     <p class="eyebrow">Proyecciones</p>
     <h2 class="chapter-header__title">Proyecciones</h2>
   </header>
+
+  <p class="lead">
+    El modelo recalcula el negocio mes a mes desde octubre de 2026 con los precios de la
+    estrategia B, los costes del capítulo 9 y tres curvas de demanda, una prudente, una
+    realista y una optimista. Ninguna es una previsión; son el rango honesto de cómo arranca
+    un negocio así con un solo operador <span class="chip chip--estimate">Estimate</span>.
+    No hay préstamo, no hay caja inicial y todo es antes de IRPF.
+  </p>
+
+  <h3>Cómo está montado</h3>
+  <p>
+    Cada mes entran clientes por dos vías, los de anuncios y los que llegan por
+    recomendación o repiten. En el escenario realista los de anuncios van de 2 en octubre a
+    6 en septiembre y los demás de 0 a 12, con una media de 1,8 piezas por visita; en el
+    prudente, de 1 a 2 y de 0 a 7, con 1,5 piezas; en el optimista, de 3 a 10 y de 1 a 18,
+    con 2 piezas <span class="chip chip--estimate">Estimate</span>. Esas curvas son las
+    mismas que se usaron en julio; no dependen de la ciudad y la demanda que implican está
+    muy por debajo de los 250.700 hogares del área, así que el límite no es el mercado sino
+    la captación. El gasto en anuncios sube con la caja, de 150 € en octubre a 400 € desde
+    junio en el escenario realista. El cliente paga con IVA y el IVA de cada trimestre se
+    ingresa el mes siguiente, en enero, abril, julio y octubre; por eso la caja de esos meses
+    da un tirón hacia abajo. La capacidad de 88 piezas al mes no se alcanza nunca en el
+    primer año; el mes más cargado del optimista son 56.
+  </p>
+
+  <h3>Año uno, mes a mes</h3>
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 10.1. Año uno, estrategia B, escenario realista. Euros; resultado sin IVA y antes de IRPF; caja con el IVA ingresado cada trimestre.</caption>
+    <thead>
+      <tr>
+        <th scope="col">Mes</th>
+        <th scope="col" class="num">Visitas</th>
+        <th scope="col" class="num">Piezas</th>
+        <th scope="col" class="num">Facturado</th>
+        <th scope="col" class="num">Anuncios</th>
+        <th scope="col" class="num">Resultado</th>
+        <th scope="col" class="num">Caja</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr><th scope="row">Oct 2026</th><td class="num">2</td><td class="num">3,6</td><td class="num">261</td><td class="num">150</td><td class="num neg">−137</td><td class="num neg">−91</td></tr>
+      <tr><th scope="row">Nov 2026</th><td class="num">4</td><td class="num">7,2</td><td class="num">522</td><td class="num">200</td><td class="num pos">13</td><td class="num">12</td></tr>
+      <tr><th scope="row">Dic 2026</th><td class="num">4</td><td class="num">7,2</td><td class="num">522</td><td class="num">250</td><td class="num neg">−37</td><td class="num">65</td></tr>
+      <tr><th scope="row">Ene 2027</th><td class="num">6</td><td class="num">10,8</td><td class="num">783</td><td class="num">300</td><td class="num pos">112</td><td class="num">86</td></tr>
+      <tr><th scope="row">Feb 2027</th><td class="num">7</td><td class="num">12,6</td><td class="num">914</td><td class="num">300</td><td class="num pos">212</td><td class="num">456</td></tr>
+      <tr><th scope="row">Mar 2027</th><td class="num">9</td><td class="num">16,2</td><td class="num">1.175</td><td class="num">350</td><td class="num pos">361</td><td class="num">1.021</td></tr>
+      <tr><th scope="row">Abr 2027</th><td class="num">10</td><td class="num">18,0</td><td class="num">1.305</td><td class="num">350</td><td class="num pos">461</td><td class="num">1.210</td></tr>
+      <tr><th scope="row">May 2027</th><td class="num">11</td><td class="num">19,8</td><td class="num">1.436</td><td class="num">350</td><td class="num pos">560</td><td class="num">2.019</td></tr>
+      <tr><th scope="row">Jun 2027</th><td class="num">13</td><td class="num">23,4</td><td class="num">1.697</td><td class="num">400</td><td class="num pos">709</td><td class="num">3.023</td></tr>
+      <tr><th scope="row">Jul 2027</th><td class="num">14</td><td class="num">25,2</td><td class="num">1.827</td><td class="num">400</td><td class="num pos">639</td><td class="num">3.209</td></tr>
+      <tr><th scope="row">Ago 2027</th><td class="num">16</td><td class="num">28,8</td><td class="num">2.088</td><td class="num">400</td><td class="num pos">838</td><td class="num">4.410</td></tr>
+      <tr><th scope="row">Sep 2027</th><td class="num">18</td><td class="num">32,4</td><td class="num">2.349</td><td class="num">400</td><td class="num pos">1.038</td><td class="num">5.855</td></tr>
+    </tbody>
+  </table>
+  <p>
+    Todo <span class="chip chip--estimate">Estimate</span>. El año factura 14.877 € con IVA,
+    12.295 € sin él, y deja 4.768 € de resultado <span class="chip chip--estimate">Estimate</span>.
+    Octubre pierde 137 € y es el único mes con la caja en negativo, −91 €; noviembre ya es
+    positivo y en febrero el acumulado deja de ser negativo. Los 5.855 € de caja de
+    septiembre incluyen 1.087 € de IVA del último trimestre que se ingresan en octubre; la
+    caja real del negocio al cerrar el año es la misma que el resultado, 4.768 €. En julio
+    el resultado baja aunque suba la facturación, porque ese mes la cuota de autónomo pasa
+    de 80 € a 250 € en el supuesto del modelo <span class="chip chip--hypothesis">Hypothesis</span>.
+  </p>
+
   <!-- chart:y1-result --><span class="chip chip--estimate">Estimate</span><!-- /chart -->
-  <!-- chart:cash-scenarios --><span class="chip chip--estimate">Estimate</span><!-- /chart -->
+
+  <p>
+    Con la misma demanda, la estrategia A deja 2.097 € en el año y su caja baja hasta −318 €
+    en enero; la C deja 6.517 € con un mínimo de −54 € en octubre
+    <span class="chip chip--estimate">Estimate</span>. La diferencia entre A y C son 4.400 €
+    en un año con las mismas visitas; es el coste de entrar barato.
+  </p>
+
+  <h3>Si la demanda es otra</h3>
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 10.2. Año uno según estrategia y demanda. Resultado y punto más bajo de la caja, con el ingreso del IVA de octubre de 2027 incluido.</caption>
+    <thead>
+      <tr>
+        <th scope="col">Estrategia × demanda</th>
+        <th scope="col" class="num">Facturado</th>
+        <th scope="col" class="num">Resultado</th>
+        <th scope="col" class="num">Caja mínima</th>
+        <th scope="col">Acumulado positivo</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr><th scope="row">A · prudente</th><td class="num">4.852</td><td class="num neg">−974</td><td class="num neg">−974 (oct. 2027, IVA)</td><td>No en el año uno</td></tr>
+      <tr><th scope="row">A · realista</th><td class="num">11.645</td><td class="num pos">2.097</td><td class="num neg">−318 (ene. 2027)</td><td>Mayo 2027</td></tr>
+      <tr><th scope="row">A · optimista</th><td class="num">20.884</td><td class="num pos">7.654</td><td class="num">nunca negativa</td><td>Noviembre 2026</td></tr>
+      <tr><th scope="row">B · prudente</th><td class="num">6.199</td><td class="num pos">139</td><td class="num neg">−548 (ene. 2027)</td><td>Septiembre 2027</td></tr>
+      <tr><th scope="row">B · realista</th><td class="num">14.877</td><td class="num pos">4.768</td><td class="num neg">−91 (oct. 2026)</td><td>Febrero 2027</td></tr>
+      <tr><th scope="row">B · optimista</th><td class="num">26.680</td><td class="num pos">12.444</td><td class="num">nunca negativa</td><td>Octubre 2026</td></tr>
+      <tr><th scope="row">C · prudente</th><td class="num">7.080</td><td class="num pos">868</td><td class="num neg">−425 (ene. 2027)</td><td>Junio 2027</td></tr>
+      <tr><th scope="row">C · realista</th><td class="num">16.993</td><td class="num pos">6.517</td><td class="num neg">−54 (oct. 2026)</td><td>Enero 2027</td></tr>
+      <tr><th scope="row">C · optimista</th><td class="num">30.474</td><td class="num pos">15.579</td><td class="num">nunca negativa</td><td>Octubre 2026</td></tr>
+    </tbody>
+  </table>
+
   <!-- chart:sensitivity --><span class="chip chip--estimate">Estimate</span><!-- /chart -->
+
+  <p>
+    Todo <span class="chip chip--estimate">Estimate</span>. La fila que hay que mirar es B
+    prudente: el año se salda con 139 € y la caja llega a −548 € en enero, cuando se paga el
+    IVA del primer trimestre con pocas visitas detrás. Sin colchón de caja, 548 € es lo que
+    hay que poder poner si el arranque es lento. El peor caso de la tabla, A prudente, no
+    cubre ni los fijos en el año y su punto más bajo son −974 €, que es la caja de
+    septiembre menos el IVA que se ingresa en octubre. La estrategia no cambia el signo del
+    año salvo en ese caso; lo que lo cambia es la demanda, y la demanda, en el primer año,
+    es captación.
+  </p>
+
+  <!-- chart:cash-scenarios --><span class="chip chip--estimate">Estimate</span><!-- /chart -->
+
+  <h3>Años dos y tres</h3>
+  <p>
+    A partir del segundo año el modelo pasa a cifras anuales. Con la estrategia B y demanda
+    realista, 24 visitas al mes en el año dos y 34 en el tres, 43 y 61 piezas, dan 37.584 €
+    y 53.244 € de facturación y 19.028 € y 30.386 € de resultado
+    <span class="chip chip--estimate">Estimate</span>, con la cuota ya en 250 € y 450–500 €
+    al mes de anuncios. En el prudente, 5.154 € y 8.496 €; en el optimista, 36.025 € en el
+    año dos y 26.837 € en el tres, menos que el anterior porque ese año se contrata al
+    primer operario y se paga su sueldo y su máquina
+    <span class="chip chip--estimate">Estimate</span>. En el tercer año realista el operador
+    está al 70 % de su capacidad.
+  </p>
+
+  <h3>Del año cuatro al ocho</h3>
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 10.3. Trayectoria a ocho años, estrategia B, demanda realista. Euros anuales.</caption>
+    <thead>
+      <tr>
+        <th scope="col">Año</th>
+        <th scope="col" class="num">Piezas / mes</th>
+        <th scope="col" class="num">Operarios</th>
+        <th scope="col" class="num">Facturado</th>
+        <th scope="col" class="num">Resultado</th>
+        <th scope="col">El fundador deja de operar</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr><th scope="row">2</th><td class="num">43,2</td><td class="num">1</td><td class="num">37.584</td><td class="num">19.028</td><td>—</td></tr>
+      <tr><th scope="row">3</th><td class="num">61,2</td><td class="num">1</td><td class="num">53.244</td><td class="num">30.386</td><td>—</td></tr>
+      <tr><th scope="row">4</th><td class="num">74,0</td><td class="num">1</td><td class="num">64.337</td><td class="num">38.856</td><td>Se decide contratar</td></tr>
+      <tr><th scope="row">5</th><td class="num">81,7</td><td class="num">2</td><td class="num">71.038</td><td class="num">19.354</td><td>Sí</td></tr>
+      <tr><th scope="row">6</th><td class="num">85,9</td><td class="num">2</td><td class="num">74.738</td><td class="num">24.479</td><td>Sí</td></tr>
+      <tr><th scope="row">7</th><td class="num">88,1</td><td class="num">2</td><td class="num">76.684</td><td class="num">25.965</td><td>No: la demanda supera a un operario</td></tr>
+      <tr><th scope="row">8</th><td class="num">89,3</td><td class="num">2</td><td class="num">77.683</td><td class="num">26.728</td><td>No</td></tr>
+    </tbody>
+  </table>
+
   <!-- chart:trajectory --><span class="chip chip--hypothesis">Hypothesis</span><!-- /chart -->
+
+  <p>
+    Los años dos y tres son <span class="chip chip--estimate">Estimate</span>; del cuatro
+    en adelante el crecimiento sigue una regla fijada en el modelo, la mitad del ritmo del
+    año anterior y ese ritmo a la mitad cada año, así que es una hipótesis
+    <span class="chip chip--hypothesis">Hypothesis</span>. En el cuarto año el operador
+    trabaja al 84 % de su capacidad y la caja acumulada cubre con holgura tres meses de la
+    nueva estructura, así que el modelo contrata para el quinto. Ese año el resultado baja
+    de 38.856 € a 19.354 €, porque entra un sueldo de 1.860 € al mes con cargas y una
+    segunda máquina de 2.300 € <span class="chip chip--estimate">Estimate</span>, y a cambio
+    el fundador puede dejar de hacer servicios. En el séptimo la demanda vuelve a superar
+    lo que cubre un operario contratado y habría que decidir otra vez. El capítulo 11 trata
+    esa decisión. La caja acumulada que da el modelo para esos años, 189.562 € al cierre del
+    octavo <span class="chip chip--estimate">Estimate</span>, está inflada: no descuenta ni
+    el IRPF ni lo que el fundador retire para vivir, y hay que leerla como "lo que el negocio
+    genera", no como dinero en el banco.
+  </p>
+
+  <h3>Cuánto hay que vender para no perder</h3>
   <!-- chart:break-even --><span class="chip chip--estimate">Estimate</span><!-- /chart -->
+  <p>
+    Con la estrategia B, 3,4 piezas al mes cubren los fijos con tarifa plana, 8,8 cubren
+    fijos y 300 € de anuncios, y 11,8 lo mismo cuando la cuota suba
+    <span class="chip chip--estimate">Estimate</span>; A necesita 4,4, 11,5 y 15,5, C 2,9,
+    7,6 y 10,3. Frente a 88 de capacidad, el equilibrio está en la décima parte de lo que
+    puede hacer una persona. Cuatro ratios resumen la estrategia B en el escenario
+    realista: el 92,4 % del precio neto de cada pieza es contribución, un cliente de
+    anuncio se amortiza con 1,3 piezas, el resultado es el 38,8 % de la facturación neta y
+    los anuncios se llevan el 25,9 % de la facturación bruta del primer año
+    <span class="chip chip--estimate">Estimate</span>.
+  </p>
+
+  <h3>Lo que el modelo no dice</h3>
+  <p>
+    No sabe cuántos clientes habrá; las tres curvas son el rango razonable, no una
+    medición de Murcia. No incluye ninguna venta a empresas, que solo podría mejorarlo. No
+    descuenta el IRPF ni lo que el fundador necesite retirar. Supone que la tarifa plana
+    acaba en junio de 2027, cuando lo probable es que se prorrogue. Y supone que la oferta
+    de dos piezas funciona, 1,8 piezas por visita; si se queda en 1,5, el año realista se
+    parece más a la fila prudente que a la suya.
+  </p>
+
+  <aside class="callout">
+    <p class="callout__label">Lo que importa de este capítulo</p>
+    <p>
+      Con precio de mercado y demanda realista, el primer año deja 4.768 € y solo octubre
+      está en negativo. Si el arranque es lento, hay que poder cubrir 548 € en enero. El
+      segundo año ya da para vivir de ello; el quinto, para dejar de operar.
+    </p>
+  </aside>
 </section>
diff --git a/business/reports/_src/murcia/ch-11-crecimiento.html b/business/reports/_src/murcia/ch-11-crecimiento.html
index 6c0b0e4..797fc59 100644
--- a/business/reports/_src/murcia/ch-11-crecimiento.html
+++ b/business/reports/_src/murcia/ch-11-crecimiento.html
@@ -4,4 +4,94 @@
     <p class="eyebrow">Crecimiento</p>
     <h2 class="chapter-header__title">Crecimiento: segundo operario y segunda máquina</h2>
   </header>
+
+  <p class="lead">
+    El objetivo a ocho años es que el negocio funcione sin que el socio fundador haga el
+    servicio. Este capítulo dice cuándo se cruza esa línea según el modelo, qué cuesta
+    cruzarla y qué pasa con la costa y con Cartagena.
+  </p>
+
+  <h3>Cuándo contratar</h3>
+  <p>
+    La regla del modelo tiene dos condiciones: que el operador haya trabajado de media por
+    encima del 75 % de su capacidad durante el año, y que la caja acumulada cubra tres meses
+    de la estructura nueva, el sueldo incluido <span class="chip chip--estimate">Estimate</span>.
+    Con la estrategia B y demanda realista eso ocurre al cerrar el cuarto año, con el
+    operador al 84 %, y el operario entra en el quinto. Con demanda optimista ocurre dos
+    años antes, al cerrar el segundo con un 82 %. Con demanda prudente no ocurre nunca en
+    ocho años, porque el operador no pasa del 37 % <span class="chip chip--estimate">Estimate</span>.
+  </p>
+  <p>
+    El coste de la decisión es claro. Un operario cuesta 1.860 € al mes con cargas sociales
+    <span class="chip chip--estimate">Estimate</span>, una cifra pendiente de contrastar con
+    el convenio de limpieza, y su máquina 2.300 € <span class="chip chip--fact">Fact</span>.
+    En el año de la contratación el resultado baja de 38.856 € a 19.354 €
+    <span class="chip chip--estimate">Estimate</span>; a cambio, el fundador deja de
+    limpiar. En los años cinco y seis el operario contratado cubre solo toda la demanda. En
+    el séptimo la demanda llega a 88 piezas al mes, justo la capacidad de una persona, y
+    sigue subiendo <span class="chip chip--estimate">Estimate</span>; ahí hay que elegir
+    entre volver a hacer servicios, contratar a un segundo o frenar la demanda. El modelo no
+    contrata a un segundo porque la ocupación de dos operarios queda en el 50 %, lejos del
+    75 %.
+  </p>
+  <p>
+    La máquina se paga sola rápido. A precio de mercado, 37 servicios cubren sus 2.300 €, unos
+    nueve días de trabajo a plena capacidad <span class="chip chip--estimate">Estimate</span>.
+    El sueldo es lo que pesa, y por eso la regla exige tres meses de caja antes de firmarlo.
+  </p>
+
+  <h3>Esperar o adelantarse</h3>
+  <p>
+    La regla del 75 % es prudente a propósito. Tiene dos pegas. Mide la media del año, y un
+    verano a tope seguido de un invierno flojo puede quedarse por debajo aunque haya meses
+    en que no se dé abasto. Y entre que se decide y el operario rinde pasan semanas de
+    formación en las que el fundador trabaja más, no menos. Lo que no está en ninguna fuente
+    de este informe es cuántas horas puede trabajar el socio fundador, con qué apoyo y hasta
+    cuándo; sin ese dato, el momento de contratar es una decisión suya, no un cálculo
+    <span class="chip chip--notfound">Not found</span>. Lo que el modelo sí dice es que
+    contratar antes del cuarto año con demanda realista significa pagar un sueldo con un
+    operador al 50–70 % de ocupación <span class="chip chip--analysis">Analysis</span>. Si
+    el fundador necesita bajar carga antes, la vía con menos riesgo es frenar la captación
+    pagada, no adelantar la nómina.
+  </p>
+
+  <h3>La costa y los pisos turísticos</h3>
+  <p>
+    Las viviendas turísticas están en el anillo exterior, 9.910 frente a 857 en el municipio
+    y su cinturón <span class="chip chip--estimate">Estimate</span>, y tres de cada cuatro en
+    Torrevieja, Orihuela y Cartagena. Son clientes de empresa, el gestor que lleva varios
+    pisos, no el propietario, y se les vende un contrato de mantenimiento por propiedad o
+    una tarifa por pieza en cada cambio de inquilino, con el menú del capítulo 7. La
+    ventana lógica es el invierno, cuando la oferta hotelera abierta en Cartagena baja a la
+    mitad <span class="chip chip--fact">Fact</span> y los pisos están vacíos
+    <span class="chip chip--hypothesis">Hypothesis</span>. Un día en la costa cuesta hora y
+    media de coche de ida y vuelta y entre 10 y 18 € de desplazamiento
+    <span class="chip chip--estimate">Estimate</span>, así que solo compensa con una mañana
+    llena en la misma zona, varios pisos del mismo gestor o un hotel. El modelo no cuenta
+    con nada de esto; es la primera expansión que no exige contratar a nadie
+    <span class="chip chip--analysis">Analysis</span>.
+  </p>
+
+  <h3>Cartagena</h3>
+  <p>
+    Cartagena no es un barrio lejano de Murcia; es otro mercado. Tiene 220.704 habitantes y
+    unos 81.700 hogares <span class="chip chip--estimate">Estimate</span>, está a 48,7
+    kilómetros y 39 minutos sin tráfico, y en agosto tiene 25 hoteles abiertos con 2.806
+    habitaciones <span class="chip chip--fact">Fact</span>, más que Murcia. Ya hay allí una
+    empresa de limpieza general con 56 reseñas que ofrece sofás y colchones sin recargo por
+    desplazamiento <span class="chip chip--fact">Fact</span>. Servirla desde Murcia cuesta
+    17,05 € por viaje <span class="chip chip--estimate">Estimate</span> y casi un hueco de
+    servicio; tiene sentido como jornadas agrupadas al principio y, si la demanda responde,
+    como base del segundo operario. Es la forma de que la segunda máquina abra un mercado
+    nuevo en vez de repartirse el de Murcia <span class="chip chip--analysis">Analysis</span>.
+  </p>
+
+  <aside class="callout">
+    <p class="callout__label">Lo que importa de este capítulo</p>
+    <p>
+      Contratar cuando el año cierre por encima del 75 % de ocupación y con tres meses de
+      caja; en el escenario realista, para el quinto año. Antes de eso, la costa en
+      jornadas agrupadas y Cartagena como mercado propio son crecimiento sin nómina.
+    </p>
+  </aside>
 </section>
diff --git a/business/reports/_src/murcia/ch-12-riesgos.html b/business/reports/_src/murcia/ch-12-riesgos.html
index a582bdb..df57eff 100644
--- a/business/reports/_src/murcia/ch-12-riesgos.html
+++ b/business/reports/_src/murcia/ch-12-riesgos.html
@@ -4,4 +4,160 @@
     <p class="eyebrow">Riesgos</p>
     <h2 class="chapter-header__title">Riesgos y supuestos</h2>
   </header>
+
+  <p class="lead">
+    Un informe que no dice lo que no sabe no sirve para decidir. Este capítulo reúne los
+    supuestos sobre los que se apoyan las cifras, lo que haría falta para convertir cada uno
+    en un dato, y los riesgos del primer año.
+  </p>
+
+  <h3>Datos del propio negocio que faltan</h3>
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 12.1. Lo que solo el socio fundador puede aportar, y qué cambia con ello.</caption>
+    <thead>
+      <tr>
+        <th scope="col">Dato</th>
+        <th scope="col">Qué se ha supuesto</th>
+        <th scope="col">Qué cambia</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr><th scope="row">Fecha y comunidad del alta de autónomo</th><td>Nueve meses de tarifa plana, hasta junio de 2027</td><td>170 € al mes por cada mes de diferencia; si cabe alguna ayuda</td></tr>
+      <tr><th scope="row">Si se pide la prórroga de la tarifa plana</th><td>No se cuenta con ella</td><td>Hasta 170 € al mes durante doce meses más</td></tr>
+      <tr><th scope="row">Coche: modelo, consumo, si es vehículo industrial</th><td>6 litros a los 100 y 0,175 € por kilómetro con desgaste</td><td>El coste por visita y si cabe el abono de aparcamiento de 30 € al mes</td></tr>
+      <tr><th scope="row">Horas que puede trabajar y hasta cuándo</th><td>Cuatro servicios al día, 22 días al mes</td><td>La capacidad y el momento de contratar</td></tr>
+      <tr><th scope="row">Qué pagó el bono Kit Digital</th><td>No consta</td><td>Dónde van los tres elementos NextGenerationEU</td></tr>
+      <tr><th scope="row">Seguro de responsabilidad civil</th><td>25 € al mes, no contratado todavía</td><td>El importe real; sin él, un daño en una casa lo paga el negocio</td></tr>
+    </tbody>
+  </table>
+  <p>
+    Supuestos <span class="chip chip--hypothesis">Hypothesis</span>; los 170 € y la
+    capacidad <span class="chip chip--estimate">Estimate</span>. Todos se resuelven con una
+    conversación; ninguno exige investigar.
+  </p>
+
+  <h3>Supuestos del modelo</h3>
+  <p>
+    <strong>Las curvas de demanda.</strong> Es el supuesto que más pesa. Las tres curvas
+    describen cómo arranca un negocio de un operador con anuncios y recomendación, y son
+    las mismas que se usaron en julio; no se han medido en Murcia porque no hay nada que
+    medir hasta que haya clientes <span class="chip chip--estimate">Estimate</span>. Se
+    resuelven solas: a los tres meses se sabrá en qué curva se está.
+  </p>
+  <p>
+    <strong>Dos piezas por visita.</strong> El escenario realista supone 1,8 piezas por
+    visita porque la oferta de pago lleva a dos. Si la oferta no funciona y se queda en 1,5,
+    el año se parece al prudente <span class="chip chip--estimate">Estimate</span>. Se mide
+    desde la primera semana.
+  </p>
+  <p>
+    <strong>El coste de captar un cliente.</strong> Los 71 € salen de un coste por clic
+    nacional y de una tasa de cierre que nadie ha medido para este servicio en España
+    <span class="chip chip--notfound">Not found</span>; la banda honesta es de 36 € a 111 €.
+    Si cuesta 111 €, la visita de dos piezas de la estrategia B gana 0,33 € en vez de 40
+    <span class="chip chip--estimate">Estimate</span>. Se mide en Google Ads desde el primer
+    mes.
+  </p>
+  <p>
+    <strong>A dónde se va.</strong> Los 4,5 € de viaje suponen que la mitad de los trabajos
+    caen cerca, un tercio largo en Molina y las pedanías grandes y un 15 % en el fondo del
+    cinturón; el euro de aparcamiento supone que el 40 % caen en zona azul
+    <span class="chip chip--hypothesis">Hypothesis</span>. Los tiempos de coche son sin
+    tráfico <span class="chip chip--notfound">Not found</span>. Una semana de trayectos
+    apuntados lo resuelve.
+  </p>
+  <p>
+    <strong>Del año cuatro en adelante.</strong> El crecimiento sigue una regla, la mitad
+    del ritmo anterior cada año <span class="chip chip--hypothesis">Hypothesis</span>, y el
+    sueldo del operario, 1.860 € al mes con cargas, está pendiente de contrastar con el
+    convenio <span class="chip chip--estimate">Estimate</span>. Nada de esto afecta al
+    primer año.
+  </p>
+  <p>
+    <strong>Lo que no se modela.</strong> El IRPF, las retiradas del fundador y cualquier
+    venta a empresas. Los dos primeros bajan la caja real; la tercera la sube.
+  </p>
+
+  <h3>Lo que la investigación no encontró</h3>
+  <p>
+    Ordenado por cuánto puede mover las cuentas <span class="chip chip--analysis">Analysis</span>.
+    Volumen de búsquedas y coste por clic en Murcia, que solo existen a escala nacional
+    <span class="chip chip--notfound">Not found</span>; se resuelve con la primera campaña.
+    Tiempos de coche reales y consumo del coche. Hogares del casco urbano, que se estiman
+    con el tamaño de hogar del municipio; la banda posible es de 49.600 a 53.500
+    <span class="chip chip--hypothesis">Hypothesis</span>. El recuento directo de hogares del
+    censo, que la web estadística regional no dejó leer. Competidores que solo estén en
+    Google Maps, porque la vista usada enseña ocho por búsqueda. Cuánto gasta una empresa
+    de la zona en higiene de colchones <span class="chip chip--notfound">Not found</span>.
+    Una tasa de alergia a ácaros propia de Murcia y una de mascotas por hogar
+    <span class="chip chip--notfound">Not found</span>. Si un cambio de domicilio de un alta
+    cuenta como alta para la ayuda regional <span class="chip chip--notfound">Not found</span>.
+    Ninguno de estos huecos cambia el signo del primer año; el primero es el que más mueve
+    el modelo.
+  </p>
+
+  <h3>Sobre las cifras de este informe</h3>
+  <p>
+    Casi todas las cifras marcadas como dato vienen de una sola fuente oficial, el INE, la
+    Agencia Tributaria, un boletín oficial o la web de la propia empresa, leída
+    directamente y con la fecha anotada. Dos fuentes independientes para la misma cifra casi
+    nunca existen a esta escala, así que el archivo de investigación las marca como
+    "provisionales" y las cifras que sostienen el modelo se volvieron a abrir en su fuente
+    el 5 de octubre de 2026 y coincidían <span class="chip chip--fact">Fact</span>. Una
+    cifra de otra ciudad, la renta de Madrid, está en conflicto entre dos lecturas y por eso
+    no aparece en este informe.
+  </p>
+
+  <h3>Riesgos del primer año</h3>
+  <p>
+    <strong>La caja sin colchón.</strong> En el escenario prudente la caja baja a −548 € en
+    enero de 2027, cuando se paga el IVA del primer trimestre
+    <span class="chip chip--estimate">Estimate</span>. Es poco dinero y es el riesgo más
+    probable. Se cubre teniendo esa cantidad apartada desde octubre o bajando los anuncios
+    si enero llega flojo.
+  </p>
+  <p>
+    <strong>Un solo operador.</strong> Una semana de baja es una semana sin ingresos y con
+    los fijos corriendo. No hay fuente que lo cuantifique y no hace falta: con 186 € de
+    fijos al mes, el daño es el de los servicios que no se hacen, no el de la estructura
+    <span class="chip chip--analysis">Analysis</span>.
+  </p>
+  <p>
+    <strong>Anuncios que cuestan más de lo previsto.</strong> Si el coste por cliente se va
+    al techo de la banda, la visita de dos piezas deja de ganar
+    <span class="chip chip--estimate">Estimate</span>. La defensa es la oferta de dos piezas
+    y dejar de pujar antes que bajar el precio.
+  </p>
+  <p>
+    <strong>Un daño en casa del cliente.</strong> Se trabaja con agua y máquina sobre
+    colchones y sofás que valen más que el servicio. El seguro de responsabilidad civil no
+    es obligatorio <span class="chip chip--fact">Fact</span>, y es lo primero que hay que
+    contratar.
+  </p>
+  <p>
+    <strong>El secado en invierno.</strong> Se arranca en los meses de más humedad y menos
+    temperatura <span class="chip chip--fact">Fact</span>; cuánto alarga eso el secado no lo
+    publica nadie <span class="chip chip--notfound">Not found</span>. Afecta a la
+    experiencia del cliente, no a cuántos servicios caben en un día, porque el operador no
+    espera.
+  </p>
+  <p>
+    <strong>Normas que pueden cambiar.</strong> Murcia no tiene zona de bajas emisiones en
+    vigor; hay un proyecto técnico aprobado en diciembre de 2025 sin perímetro publicado
+    <span class="chip chip--fact">Fact</span>. Molina de Segura sí la tiene, con sanciones
+    suspendidas hasta enero de 2028 <span class="chip chip--fact">Fact</span>. Si el coche no
+    tiene etiqueta, es un asunto de 2028, no de 2026. Y si algún día se usa un producto
+    biocida para "tratamiento antiácaros", la ley exige carné de aplicador y registro
+    <span class="chip chip--fact">Fact</span>; con aspiración y calor, probablemente no, sin
+    verificar <span class="chip chip--hypothesis">Hypothesis</span>.
+  </p>
+
+  <aside class="callout">
+    <p class="callout__label">Lo que importa de este capítulo</p>
+    <p>
+      Seis datos del propio negocio resuelven la mitad de los supuestos en una conversación.
+      Los otros se miden trabajando: en qué curva se está, cuántas piezas por visita, cuánto
+      cuesta cada cliente. El riesgo más probable son 548 € en enero.
+    </p>
+  </aside>
 </section>
diff --git a/business/reports/_src/murcia/ch-13-glosario-fuentes.html b/business/reports/_src/murcia/ch-13-glosario-fuentes.html
index d2718b2..42bf5f8 100644
--- a/business/reports/_src/murcia/ch-13-glosario-fuentes.html
+++ b/business/reports/_src/murcia/ch-13-glosario-fuentes.html
@@ -1,7 +1,89 @@
 <section class="chapter" id="cap-13">
   <header class="chapter-header">
     <p class="chapter-header__num">13</p>
-    <p class="eyebrow">Referencia</p>
+    <p class="eyebrow">Anexo</p>
     <h2 class="chapter-header__title">Glosario y fuentes</h2>
   </header>
+
+  <h3>Cómo leer las etiquetas</h3>
+  <p>
+    Cada cifra de este informe lleva una etiqueta que dice cuánto fiarse de ella.
+    <span class="chip chip--fact">Fact</span> es un dato leído directamente en una fuente
+    oficial o en la web de la propia empresa, con la fecha de consulta anotada; casi
+    siempre de una sola fuente, porque a esta escala rara vez hay dos.
+    <span class="chip chip--estimate">Estimate</span> es un cálculo a partir de datos, con la
+    operación a la vista. <span class="chip chip--hypothesis">Hypothesis</span> es algo que
+    se supone y no se ha comprobado, y se dice qué lo comprobaría.
+    <span class="chip chip--analysis">Analysis</span> es una lectura o una recomendación
+    hecha sobre los datos. <span class="chip chip--notfound">Not found</span> es un dato que
+    se buscó y no existe en las fuentes consultadas; nunca se rellena con una cifra
+    plausible.
+  </p>
+
+  <h3>Glosario</h3>
+  <dl class="glossary">
+    <dt class="glossary__term">Anillos R1, R2, R3</dt>
+    <dd class="glossary__def">Las tres zonas de servicio del capítulo 4: el casco urbano; el municipio con sus pedanías y los nueve pueblos del cinturón; y el anillo exterior, con la costa, Cartagena y Lorca.</dd>
+    <dt class="glossary__term">Captación (CAC)</dt>
+    <dd class="glossary__def">Lo que cuesta de media conseguir un cliente nuevo con anuncios; 71 € en este informe, con una banda de 36 € a 111 €. Cero para quien llega por recomendación.</dd>
+    <dt class="glossary__term">Coste por clic (CPC)</dt>
+    <dd class="glossary__def">Lo que se paga a Google cada vez que alguien hace clic en el anuncio.</dd>
+    <dt class="glossary__term">Contribución</dt>
+    <dd class="glossary__def">Lo que deja una pieza o una visita después de pagar el IVA, el material, el viaje y el aparcamiento, y antes de los costes fijos.</dd>
+    <dt class="glossary__term">Cuota Cero</dt>
+    <dd class="glossary__def">Ayuda de la Región de Murcia de 2.920 € a altas iniciales de autónomo, que se pide en el mes siguiente al alta.</dd>
+    <dt class="glossary__term">Estrategias A, B, C</dt>
+    <dd class="glossary__def">Las tres políticas de precio del capítulo 7: por debajo del mercado, igualar el mercado con presentación premium, y escalonar por encima con niveles y packs.</dd>
+    <dt class="glossary__term">IVA neto</dt>
+    <dd class="glossary__def">El precio sin el 21 % de IVA que se ingresa a Hacienda. De cada 100 € que paga el cliente, el negocio se queda con 82,6 €.</dd>
+    <dt class="glossary__term">Kit Digital</dt>
+    <dd class="glossary__def">Bono público para digitalizar pequeñas empresas, financiado con fondos europeos NextGenerationEU, que obliga a mostrar el emblema de la UE en la solución que pagó.</dd>
+    <dt class="glossary__term">Mediana</dt>
+    <dd class="glossary__def">El valor del medio de una lista ordenada de precios; menos sensible que la media a un precio muy alto o muy bajo.</dd>
+    <dt class="glossary__term">Piezas por visita</dt>
+    <dd class="glossary__def">Cuántos colchones o sofás se limpian en cada desplazamiento. El modelo realista supone 1,8; el prudente, 1,5; el optimista, 2.</dd>
+    <dt class="glossary__term">Punto de equilibrio</dt>
+    <dd class="glossary__def">Las piezas o visitas al mes que hacen que los ingresos cubran los costes; no incluye lo que el fundador necesite para vivir.</dd>
+    <dt class="glossary__term">Sección censal</dt>
+    <dd class="glossary__def">La unidad más pequeña para la que el INE publica renta, unas 1.000 personas; Murcia tiene 387.</dd>
+    <dt class="glossary__term">SER</dt>
+    <dd class="glossary__def">Servicio de Estacionamiento Regulado de Murcia, la antigua ORA, con sectores A, B y C y tiques de hasta 90 o 150 minutos.</dd>
+    <dt class="glossary__term">Tarifa plana</dt>
+    <dd class="glossary__def">Cuota reducida de autónomo de 80 € al mes durante los doce primeros meses desde el alta, prorrogable otros doce si los ingresos quedan por debajo del salario mínimo.</dd>
+    <dt class="glossary__term">Vivienda de uso turístico</dt>
+    <dd class="glossary__def">Piso que se alquila por días en plataformas; el INE cuenta las anunciadas, el registro regional las licenciadas.</dd>
+    <dt class="glossary__term">ZBE</dt>
+    <dd class="glossary__def">Zona de bajas emisiones, un área urbana con restricciones a los coches sin etiqueta ambiental. En Murcia no está en vigor; en Molina de Segura sí, sin multas hasta 2028.</dd>
+  </dl>
+
+  <h3>Fuentes</h3>
+  <p>
+    Las cifras de este informe se toman de los archivos de investigación del proyecto, que
+    guardan cada dato con su enlace y su fecha de consulta. A continuación, por capítulo,
+    de dónde sale cada bloque y qué organismo o empresa está detrás.
+  </p>
+  <dl class="glossary">
+    <dt class="glossary__term">Capítulos 1 a 3</dt>
+    <dd class="glossary__def">Entrevista con el socio fundador (julio y octubre de 2026): catálogo, equipo, capacidad, costes propios, horizonte. Presupuesto del seguro de responsabilidad civil (julio de 2026): Hiscox, MAPFRE, AXA, comparadores. Nota sobre ayudas y Kit Digital (octubre de 2026): BORM, sede electrónica de la CARM, SEF, Informajoven, Red.es.</dd>
+    <dt class="glossary__term">Capítulo 4 · mercado</dt>
+    <dd class="glossary__def">INE, padrón municipal a 1 de enero de 2025 y Atlas de Distribución de Renta de los Hogares 2023, tablas de municipios y secciones censales; cartografía de secciones del INE. Ayuntamiento de Murcia, padrón por barrios y pedanías (enero de 2026). Agencia Tributaria, estadística del IRPF por municipios 2023. INE, viviendas turísticas (mayo de 2026), ocupación hotelera (agosto de 2026). Informajoven, residencias de estudiantes. Tasas nacionales de alergia (SEPAR, Alergológica 2015) y mascotas (ANFAAC) del dossier de mercado de julio de 2026. Rutas y tiempos: OpenStreetMap.</dd>
+    <dt class="glossary__term">Capítulo 5 · competencia</dt>
+    <dd class="glossary__def">Páginas web de cada empresa y sus fichas de Google Maps, consultadas en octubre de 2026; Cronoshare. Precios de Madrid y Valencia del dossier de mercado de julio de 2026; precios de Granada del estudio de julio de 2026.</dd>
+    <dt class="glossary__term">Capítulo 6 · cliente</dt>
+    <dd class="glossary__def">Adenda de investigación de marketing (julio de 2026): Stallergenes, SEAIC y Fundación BBVA, estudios de Guido, Pino y Peluso y de Morales y Fitzsimons, INE, Observatorio Cetelem, BBVA Research, Skeepers, Barómetro eCommerce, IPSOS/Conficert, Funcas, Nielsen, HomeServe España, AEPD, Real Decreto-ley 24/2021, Real Decreto 830/2010, CEHAT.</dd>
+    <dt class="glossary__term">Capítulos 7 y 9 · precios y costes</dt>
+    <dd class="glossary__def">Estudio de precios de julio de 2026 y modelo económico de Murcia de octubre de 2026, con su hoja de entradas. Ordenanza del SER, BORM de 16 de junio de 2025. Geoportal de Gasolineras del Ministerio, 5 de octubre de 2026. Orden HFP/792/2023 para el kilometraje fiscal.</dd>
+    <dt class="glossary__term">Capítulo 8 · captación</dt>
+    <dd class="glossary__def">Dossier de mercado y adenda de marketing de julio de 2026 (CPC, CAC, presupuesto de entrada, Local Services Ads, Cronoshare). Google Trends y Ubersuggest, 5 de octubre de 2026. AEMET, valores climatológicos de la estación de Murcia. Registro municipal de entidades ciudadanas (noviembre de 2025). RTRM.</dd>
+    <dt class="glossary__term">Capítulos 10 y 11 · proyecciones y crecimiento</dt>
+    <dd class="glossary__def">Modelo económico de Murcia, octubre de 2026, que vuelve a producir cada tabla al ejecutarse; sus entradas y derivaciones están en su hoja de entradas.</dd>
+    <dt class="glossary__term">Capítulo 12 · riesgos</dt>
+    <dd class="glossary__def">Lista de huecos de la investigación de mercado de Murcia (octubre de 2026). Ayuntamiento de Murcia, ordenanzas y Junta de Gobierno de 30 de diciembre de 2025. Ayuntamiento de Molina de Segura, zona de bajas emisiones. Defensor del Pueblo, resolución de diciembre de 2024.</dd>
+  </dl>
+  <p>
+    Los archivos de investigación, con todos los enlaces, están en el repositorio del
+    proyecto: la investigación de mercado de Murcia, el modelo económico y sus tablas, el
+    estudio de precios, el dossier de mercado, la adenda de marketing, la entrevista al
+    socio fundador y la nota sobre ayudas.
+  </p>
 </section>
```
