class: medium

## git status --short -uall
```
 M business/reports/_src/murcia/ch-01-resumen.html
 M business/reports/_src/murcia/ch-02-arranque.html
 M business/reports/_src/murcia/ch-03-empresa.html
 M business/reports/business-report-murcia.html
 M specs/business-report-murcia/feature.md
?? .torq-flow/active
?? .torq-flow/run
?? business/research/aids-and-eu-branding.md
?? specs/business-report-murcia/review/T4/brief.md
?? specs/business-report-murcia/review/T4/report.md
```

## git diff HEAD
```diff
diff --git a/business/reports/_src/murcia/ch-01-resumen.html b/business/reports/_src/murcia/ch-01-resumen.html
index e5797e5..3c4c718 100644
--- a/business/reports/_src/murcia/ch-01-resumen.html
+++ b/business/reports/_src/murcia/ch-01-resumen.html
@@ -4,4 +4,108 @@
     <p class="eyebrow">El caso</p>
     <h2 class="chapter-header__title">Resumen ejecutivo</h2>
   </header>
+
+  <p class="lead">
+    Grupo Vesta arranca en Murcia a mediados de octubre de 2026 con la máquina pagada, sin
+    préstamo y sin colchón de caja. Este documento reúne lo que se sabe del mercado, de la
+    competencia y de las cuentas, y lo que no se sabe todavía. Ocho cosas resumen el caso.
+  </p>
+
+  <h3>1. El mercado no es la ciudad, es el municipio y su cinturón</h3>
+  <p>
+    Murcia tiene 479.405 habitantes <span class="chip chip--fact">Fact</span>, pero el casco
+    urbano son 138.997 <span class="chip chip--fact">Fact</span>; el resto vive en 59
+    pedanías. Sumando los nueve pueblos pegados (Molina de Segura, Alcantarilla, Las Torres de
+    Cotillas, Santomera, Beniel, Alguazas, Ceutí, Lorquí y Archena) se llega a 704.814
+    personas y unos 250.700 hogares, todos a menos de 27 kilómetros de la Glorieta
+    <span class="chip chip--estimate">Estimate</span>. Esa es la zona de servicio que
+    recomendamos, con el desplazamiento incluido en el precio. La costa, Cartagena y Lorca
+    suman otras 666.428 personas <span class="chip chip--estimate">Estimate</span>, pero a
+    entre 30 y 79 kilómetros; se atienden solo con recargo o con pedido mínimo.
+  </p>
+
+  <h3>2. Murcia no es un mercado barato</h3>
+  <p>
+    En los precios publicados por los competidores, un sofá de tres plazas tiene una mediana
+    de 100 € y un colchón de matrimonio de 67 € <span class="chip chip--estimate">Estimate</span>,
+    igual o por encima de Madrid y Valencia. No hay motivo para salir por debajo del mercado.
+    Recomendamos la estrategia B, igualar el precio de mercado con una presentación premium y
+    precios publicados, con un colchón de matrimonio a 69 €, uno individual a 49 €, un king a
+    89 € y un sofá de tres plazas a 95 €, con un pedido mínimo de 70 €
+    <span class="chip chip--estimate">Estimate</span>. Las otras dos estrategias, entrar por
+    debajo o escalonar por encima, se comparan en el capítulo 7.
+  </p>
+
+  <h3>3. Hay competencia, y deja un hueco concreto</h3>
+  <p>
+    Se perfilaron 17 proveedores presentes en Murcia; seis publican precios por tamaño y diez
+    no publican ningún precio <span class="chip chip--fact">Fact</span>. Solo dos tienen más de 30
+    reseñas en una ficha local de Google. En este barrido no apareció ningún operador que
+    trabaje con un método de aspiración como el de Vesta ni ninguno con un informe de
+    laboratorio que respalde lo que promete <span class="chip chip--analysis">Analysis</span>.
+    El barrido no agota el campo, porque Google Maps muestra ocho resultados por búsqueda,
+    pero el hueco está ahí.
+  </p>
+
+  <h3>4. Una visita de una sola pieza captada con anuncios pierde dinero</h3>
+  <p>
+    Con la estrategia B, una pieza suelta a un cliente que llega por un anuncio deja −18,08 €
+    una vez pagados el IVA, los consumibles, el viaje, el aparcamiento y los 71 € que cuesta
+    captarlo <span class="chip chip--estimate">Estimate</span>. Con dos piezas en la misma
+    visita quedan +40,33 €. Por eso toda la oferta de pago lleva a dos piezas o a un pack, y el
+    pedido mínimo protege el viaje. Es la regla que más afecta a la caja desde el primer día.
+  </p>
+
+  <h3>5. El primer año sale, pero ajustado</h3>
+  <p>
+    Con la estrategia B y una demanda realista, el año uno (octubre de 2026 a septiembre de
+    2027) factura 14.877 € brutos y deja 4.768 € de resultado antes de IRPF
+    <span class="chip chip--estimate">Estimate</span>. El peor momento de caja es el propio
+    octubre, con −91 €; el primer mes positivo es noviembre y el acumulado pasa a positivo en
+    febrero de 2027. En el escenario conservador el año deja 139 € y la caja baja hasta −548 €
+    en enero <span class="chip chip--estimate">Estimate</span>. Sin colchón, esa es la cifra
+    que hay que poder cubrir.
+  </p>
+
+  <h3>6. El viaje y el aparcamiento cuestan más de lo que contaba el modelo anterior</h3>
+  <p>
+    Los 3,5 € por visita del modelo antiguo solo valen hasta unos 10 kilómetros de la base
+    <span class="chip chip--estimate">Estimate</span>. Un trabajo en Molina de Segura cuesta
+    4,38 € de ida y vuelta, uno en Santomera 7,18 € y uno en Cartagena 17,05 €. El modelo
+    nuevo cuenta 4,5 € de viaje y 1 € de aparcamiento por visita
+    <span class="chip chip--estimate">Estimate</span>, porque en el centro el
+    estacionamiento regulado cobra hasta 1,90 € por 90 minutos
+    <span class="chip chip--fact">Fact</span>. Los fijos son 186 € al mes mientras dure la
+    tarifa plana de autónomo y 356 € después <span class="chip chip--fact">Fact</span>.
+  </p>
+
+  <h3>7. El punto de equilibrio está cerca</h3>
+  <p>
+    Con la estrategia B, 3,4 piezas al mes cubren los fijos de la tarifa plana; 8,8 piezas,
+    unas cinco visitas, cubren fijos y 300 € de anuncios; cuando la cuota suba, hacen falta
+    11,8 piezas <span class="chip chip--estimate">Estimate</span>. La capacidad de un operador
+    es de 88 piezas al mes <span class="chip chip--fact">Fact</span>, y en el año uno nunca se
+    pasa de 56 en ningún escenario.
+  </p>
+
+  <h3>8. Tres cosas antes del primer servicio</h3>
+  <p>
+    Contratar el seguro de responsabilidad civil, que no es obligatorio pero se trabaja dentro
+    de casas ajenas; unos 25 € al mes con 150.000 € de cobertura
+    <span class="chip chip--estimate">Estimate</span>. Abrir la ficha de Google del negocio
+    el primer día, porque las reseñas son el activo de confianza más barato que existe y
+    ningún competidor local pasa de 66. Y comprobar la fecha del alta de autónomo. Si fue
+    hace menos de un mes, la Región de Murcia paga 2.920 € de una vez a las altas iniciales
+    <span class="chip chip--fact">Fact</span>, y la convocatoria cierra el 15 de octubre de
+    2026. Este documento no sabe esa fecha, así que no afirma que la ayuda corresponda.
+  </p>
+
+  <aside class="callout">
+    <p class="callout__label">Lo que decide el primer año</p>
+    <p>
+      No es el precio ni el mercado, que son razonables, sino dos piezas por visita y gastar
+      en anuncios solo lo que la caja aguanta. El resto de este informe está al servicio de
+      esas dos decisiones.
+    </p>
+  </aside>
 </section>
diff --git a/business/reports/_src/murcia/ch-02-arranque.html b/business/reports/_src/murcia/ch-02-arranque.html
index 23805b4..2b12b88 100644
--- a/business/reports/_src/murcia/ch-02-arranque.html
+++ b/business/reports/_src/murcia/ch-02-arranque.html
@@ -4,4 +4,186 @@
     <p class="eyebrow">Arranque</p>
     <h2 class="chapter-header__title">Las dos primeras semanas</h2>
   </header>
+
+  <p class="lead">
+    Este capítulo es el que hace falta tener leído antes del primer servicio. Qué precio
+    decir por teléfono, hasta dónde ir sin cobrar el viaje, qué tener resuelto antes de
+    entrar en la primera casa y una fecha que conviene mirar hoy. Todo lo demás, el
+    porqué de cada cifra, está en los capítulos siguientes.
+  </p>
+
+  <h3>Precios de salida</h3>
+  <p>
+    La propuesta es la estrategia B, igualar el mercado con una presentación premium y
+    los precios a la vista. La tabla pone cada precio junto a la mediana de lo que publican
+    los competidores en Murcia <span class="chip chip--estimate">Estimate</span>, para que se
+    vea que no se sale ni barato ni caro.
+  </p>
+
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 2.1. Precios de salida propuestos (estrategia B, IVA incluido) frente a la mediana publicada en Murcia.</caption>
+    <thead>
+      <tr>
+        <th scope="col">Pieza</th>
+        <th scope="col" class="num">Precio Vesta</th>
+        <th scope="col" class="num">Mediana Murcia</th>
+        <th scope="col">Lectura</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr>
+        <th scope="row">Colchón individual</th>
+        <td class="num">49 €</td>
+        <td class="num">52,5 €</td>
+        <td>Ligeramente por debajo</td>
+      </tr>
+      <tr>
+        <th scope="row">Colchón de matrimonio</th>
+        <td class="num">69 €</td>
+        <td class="num">67 €</td>
+        <td>En la mediana</td>
+      </tr>
+      <tr>
+        <th scope="row">Colchón king</th>
+        <td class="num">89 €</td>
+        <td class="num">69–120 €</td>
+        <td>Solo dos competidores publican; sin mediana</td>
+      </tr>
+      <tr>
+        <th scope="row">Sofá de dos plazas</th>
+        <td class="num">64 €</td>
+        <td class="num">79 €</td>
+        <td>Por debajo; 32 € por plaza</td>
+      </tr>
+      <tr>
+        <th scope="row">Sofá de tres plazas</th>
+        <td class="num">95 €</td>
+        <td class="num">100 €</td>
+        <td>Ligeramente por debajo</td>
+      </tr>
+      <tr>
+        <th scope="row">Pedido mínimo</th>
+        <td class="num">70 €</td>
+        <td class="num">60–70 €</td>
+        <td>La norma del mercado</td>
+      </tr>
+    </tbody>
+  </table>
+
+  <p>
+    Dos cosas sobre esta tabla. Los precios de Vesta son una propuesta, no un dato; se
+    pueden tocar, y el capítulo 7 explica qué pasa si se bajan o se suben. Y las medianas
+    mezclan bases de IVA, porque dos competidores publican sin él
+    <span class="chip chip--fact">Fact</span>; corregido eso, la mediana del colchón
+    individual sube a 57 € y la del de matrimonio a 70,8 €, así que la propuesta queda, si
+    acaso, algo más por debajo de lo que parece.
+  </p>
+
+  <h3>Dos piezas por visita</h3>
+  <p>
+    La cifra que manda en el primer año es esta. Una pieza suelta a un cliente captado con
+    anuncios deja −18,08 € <span class="chip chip--estimate">Estimate</span>; dos piezas en
+    la misma visita dejan +40,33 €. La diferencia no está en el precio sino en que el
+    viaje, el aparcamiento y sobre todo los 71 € de captación se pagan una vez por visita,
+    no por pieza. Por eso la oferta que se anuncia es siempre de dos piezas o de pack, el
+    colchón con el sofá o los dos colchones de la casa, y el pedido mínimo de 70 € hace que
+    una pieza sola solo llegue por recomendación, donde no hay coste de captación.
+  </p>
+
+  <h3>Hasta dónde se va sin cobrar el viaje</h3>
+  <p>
+    El municipio entero y los nueve pueblos del cinturón, con el desplazamiento incluido en
+    el precio, como hace la mayoría de la competencia que lo dice
+    <span class="chip chip--fact">Fact</span>. Desde la Glorieta, El Palmar está a 8
+    kilómetros, Alcantarilla a 8,7, Molina de Segura a 12,5, Las Torres de Cotillas y Beniel
+    a 16,6, Ceutí y Santomera a unos 20 y Archena a 26,9
+    <span class="chip chip--estimate">Estimate</span>. En coste de ida y vuelta, de 2,80 € a
+    9,42 € por trabajo. Los puntos más lejanos del cinturón conviene agruparlos en un mismo
+    día, porque dos idas y vueltas sueltas a 20 kilómetros ya son 80.
+  </p>
+  <p>
+    Fuera de ahí, Orihuela a 29,6 kilómetros, Cartagena a 48,7, Torrevieja a 50,1 y Lorca a
+    78,7 <span class="chip chip--estimate">Estimate</span>. Un viaje a Cartagena cuesta
+    17,05 € y uno a Lorca 27,55 €, y la ida y vuelta se lleva entre 74 y 90 minutos de coche
+    <span class="chip chip--estimate">Estimate</span>. Esos trabajos se
+    aceptan con un suplemento presupuestado, no publicado, o con un mínimo que llene la
+    mañana, y se dejan para cuando haya varios en la misma zona. La costa es sobre todo
+    mercado de alquiler turístico, y eso se trata en el capítulo 11.
+  </p>
+
+  <h3>Antes de entrar en la primera casa</h3>
+
+  <p>
+    <strong>El seguro de responsabilidad civil.</strong> No es obligatorio para esta
+    actividad <span class="chip chip--fact">Fact</span>, pero se trabaja con agua y máquina
+    dentro de casas ajenas, sobre colchones y sofás que valen más que el servicio. Las
+    pólizas básicas para autónomos arrancan entre 99 € y 120 € al año
+    <span class="chip chip--fact">Fact</span>; el modelo cuenta 25 € al mes, unos 300 € al
+    año, con 150.000 € de cobertura <span class="chip chip--estimate">Estimate</span>, que
+    es el tramo habitual para un operador solo. Es el único gasto nuevo antes de empezar.
+  </p>
+
+  <p>
+    <strong>La ficha de Google.</strong> Entre el 75 % y el 89 % de los compradores
+    españoles consultan reseñas antes de contratar, según dos estudios independientes
+    <span class="chip chip--fact">Fact</span>. En Murcia solo dos especialistas superan las
+    30 reseñas en una ficha local, con 66 y 37 <span class="chip chip--fact">Fact</span>. Con
+    una reseña por cada servicio bien hecho, Vesta estaría entre los más valorados de la
+    ciudad antes del verano <span class="chip chip--analysis">Analysis</span>. La ficha se abre
+    el primer día, con la dirección fiscal y el teléfono, y se pide la reseña al terminar
+    cada trabajo, no por mensaje al día siguiente.
+  </p>
+
+  <p>
+    <strong>Aparcar en el centro.</strong> La antigua ORA es ahora el SER. Funciona de lunes
+    a sábado de 9 a 14 y de lunes a viernes de 16:30 a 20:30; no se cobra los domingos,
+    festivos, los sábados de julio ni en todo agosto <span class="chip chip--fact">Fact</span>.
+    En el casco histórico (sector A) el máximo son 90 minutos en una misma zona, 1,90 €; en
+    el anillo siguiente (sector B) 150 minutos, 2,70 € <span class="chip chip--fact">Fact</span>.
+    Un trabajo largo en el sector A no cabe en un tique, así que en el centro conviene
+    citar a primera hora de la tarde, antes de las 16:30, o a última, y en los barrios de
+    fuera del sector B no hay problema. Existe un abono para autónomos de 30 € al mes, pero
+    exige un vehículo clasificado como industrial <span class="chip chip--fact">Fact</span>;
+    si el coche actual no lo es, no aplica.
+  </p>
+
+  <p>
+    <strong>El guion de la llamada.</strong> Precio por pieza, segunda pieza en la misma
+    visita, y la hora pensando en dónde se aparca. Lo que se dice al cliente al terminar
+    es lo que se publica en la web, y la reseña se pide ahí mismo. Nada de esto cuesta
+    dinero y todo ello mueve la caja del primer año más que cualquier anuncio.
+  </p>
+
+  <h3>Una fecha que mirar hoy</h3>
+  <p>
+    La fecha del alta como autónomo no consta en los datos recogidos para este informe, y
+    de ella dependen dos cosas. La primera es el coste fijo. La tarifa plana de 80 € al mes
+    dura doce meses desde el alta <span class="chip chip--fact">Fact</span>, no desde que se
+    empieza a trabajar; después la cuota pasa a unos 250 € y los fijos de 186 € a 356 € al
+    mes <span class="chip chip--fact">Fact</span>. El modelo supone que quedan nueve meses de
+    tarifa plana, hasta junio de 2027 <span class="chip chip--hypothesis">Hypothesis</span>;
+    si quedan menos, el año uno pierde 170 € por cada mes de diferencia
+    <span class="chip chip--estimate">Estimate</span>.
+  </p>
+  <p>
+    La segunda es una ayuda. La Región de Murcia paga 2.920 € de una vez a quien se da de
+    alta inicial en autónomos, o no ha estado de alta en los dos años anteriores, estaba
+    desempleado el día anterior, tiene la actividad y el domicilio fiscal en la Región y lo
+    pide en el plazo de un mes desde el alta
+    <span class="chip chip--fact">Fact</span>. La convocatoria admite altas desde el 1 de
+    noviembre de 2025 y cierra el 15 de octubre de 2026 <span class="chip chip--fact">Fact</span>.
+    Si el alta es reciente, hay que pedirla esta semana. Si el alta es antigua o se hizo en
+    otra comunidad, lo más probable es que no corresponda; si no se cumplen las
+    condiciones, este informe no puede decirlo <span class="chip chip--notfound">Not found</span>.
+  </p>
+
+  <aside class="callout">
+    <p class="callout__label">Lista para la primera semana</p>
+    <p>
+      Seguro de responsabilidad civil contratado. Ficha de Google abierta. Fecha de alta
+      comprobada y, si procede, ayuda regional solicitada antes del día 15. Precios de la
+      tabla 2.1 publicados en la web y la oferta de dos piezas como entrada. Agenda del
+      centro fuera de las horas del SER o en tramos de menos de 90 minutos.
+    </p>
+  </aside>
 </section>
diff --git a/business/reports/_src/murcia/ch-03-empresa.html b/business/reports/_src/murcia/ch-03-empresa.html
index 293407f..f6da5e8 100644
--- a/business/reports/_src/murcia/ch-03-empresa.html
+++ b/business/reports/_src/murcia/ch-03-empresa.html
@@ -4,4 +4,104 @@
     <p class="eyebrow">Empresa</p>
     <h2 class="chapter-header__title">La empresa y el servicio</h2>
   </header>
+
+  <p class="lead">
+    Vesta limpia en profundidad colchones, sofás y muebles tapizados en casa del cliente, con
+    un equipo de aspiración profesional que ya está pagado y un único operador, que es el
+    socio fundador. Este capítulo deja por escrito lo que la empresa es hoy, porque sobre eso
+    se calcula todo lo demás.
+  </p>
+
+  <h3>Qué se vende</h3>
+  <p>
+    El catálogo de salida es el textil del hogar, colchones, sofás y tapicería de muebles
+    <span class="chip chip--fact">Fact</span>. Las alfombras quedan fuera de la oferta
+    principal por su margen bajo y porque algunas son difíciles de trabajar; los coches
+    quedan fuera del todo. El servicio a hoteles, alquileres turísticos y empresas se
+    contempla desde el principio, pero su tamaño real en Murcia es una hipótesis hasta que
+    haya un primer contrato, y el modelo económico no cuenta con él.
+  </p>
+  <p>
+    No es un negocio nuevo para quien lo opera. El socio fundador ya lo ha explotado en
+    Chile, donde un colchón de dos plazas se cobraba a 40.000 pesos y uno de una plaza a
+    28.000 <span class="chip chip--fact">Fact</span>, unos 38 a 40 € y 27 a 28 € al cambio
+    aproximado. Ese dato sirve de contraste de método, no de referencia de precio, porque
+    el poder adquisitivo y la competencia son otros; en Murcia los precios publicados son
+    más altos.
+  </p>
+
+  <h3>Con qué se hace</h3>
+  <p>
+    Un equipo Hyla con sus accesorios y un taladro para el proceso, un pack completo de unos
+    2.300 € que ya está pagado <span class="chip chip--fact">Fact</span>. Hyla es el
+    proveedor de la máquina, no un franquiciador ni un distribuidor con comisión. Una
+    máquina da para un operador; cuando haya un segundo, hará falta otra al mismo precio.
+    El agua y la electricidad las pone el cliente, porque se trabaja en su casa, y los
+    consumibles, cepillos y productos, cuestan alrededor de 1,5 € por servicio
+    <span class="chip chip--fact">Fact</span>. El coste directo de cada pieza es el tiempo
+    del operador y el viaje, no el material.
+  </p>
+  <p>
+    El método importa para el posicionamiento. La norma en Murcia, como en Madrid y
+    Valencia, es la inyección-extracción <span class="chip chip--fact">Fact</span>, y en
+    el barrido de competidores no apareció ninguno que trabaje con un equipo de aspiración
+    como este <span class="chip chip--analysis">Analysis</span>. Eso no lo convierte en
+    mejor por sí solo, pero sí en distinto, y distinto es lo que hace falta para no competir
+    solo en precio.
+  </p>
+
+  <h3>Cuánto se tarda y cuánto cabe en un día</h3>
+  <p>
+    Un servicio dura alrededor de una hora de media, con un rango que va del cuarto de hora
+    de una pieza pequeña poco sucia a la hora y media de un colchón king o un sofá grande
+    <span class="chip chip--fact">Fact</span>. El secado es natural y depende de la
+    estación, mucho más rápido en verano, pero el operador no se queda a esperar, así que el
+    secado no limita cuántos trabajos caben en un día, solo la experiencia del cliente. Con
+    el tiempo, unos ventiladores profesionales podrían venderse como extra.
+  </p>
+  <p>
+    La capacidad de salida son cuatro servicios al día por operador
+    <span class="chip chip--fact">Fact</span>, cuatro colchones o cuatro sofás grandes; a
+    22 días laborables, 88 piezas al mes. Es el techo que usa el modelo, y en el primer año
+    no se toca, ya que el mes más cargado del escenario optimista llega a 56 piezas
+    <span class="chip chip--estimate">Estimate</span>. La capacidad no es el problema del
+    primer año; la demanda sí.
+  </p>
+
+  <h3>Quién hace qué</h3>
+  <p>
+    El socio fundador opera solo, limpia y gestiona, dado de alta como autónomo. El
+    responsable de la web lleva la web y el marketing digital. No hay nómina. Los gastos
+    fijos de la estructura son la cuota de autónomo, el gestor a 90 € el trimestre, el seguro
+    del coche a 50 € al mes <span class="chip chip--fact">Fact</span>, el seguro de
+    responsabilidad civil que se contrata ahora y el alojamiento de la web, que para una
+    web estática es casi cero <span class="chip chip--fact">Fact</span>. En total, 186 € al
+    mes con tarifa plana <span class="chip chip--fact">Fact</span>. El coche es el que ya se
+    tiene y no se compra otro.
+  </p>
+
+  <h3>A dónde se quiere llegar</h3>
+  <p>
+    El horizonte que fija el socio fundador es de ocho años <span class="chip chip--fact">Fact</span>,
+    y el objetivo no es limpiar más colchones sino dejar de limpiarlos. El negocio tiene
+    que pasar de "el fundador es el operador" a "el fundador es el propietario", con
+    operarios contratados y la operación delegada. El modelo marca cuándo se cruza esa
+    línea. Con la estrategia B y una demanda realista, el primer operario se contrata para
+    el quinto año, cuando la ocupación del año anterior pasa del 75 % de la capacidad y la
+    caja cubre tres meses de la nueva estructura
+    <span class="chip chip--estimate">Estimate</span>. Ese año el resultado baja de
+    38.856 € a 19.354 €, porque entra un sueldo cargado de 1.860 € al mes y la segunda
+    máquina <span class="chip chip--estimate">Estimate</span>, y el fundador puede dejar de
+    hacer el servicio él mismo. El capítulo 11 discute si conviene esperar a ese punto o
+    adelantarlo.
+  </p>
+
+  <aside class="callout">
+    <p class="callout__label">En una frase</p>
+    <p>
+      Una empresa de una persona, con la herramienta pagada, un coste por pieza casi nulo y
+      un coste por visita que depende de a dónde se vaya; su límite no es lo que puede hacer
+      sino cuántos clientes consigue y a qué precio los consigue.
+    </p>
+  </aside>
 </section>
diff --git a/specs/business-report-murcia/feature.md b/specs/business-report-murcia/feature.md
index 3de9c87..520c73a 100644
--- a/specs/business-report-murcia/feature.md
+++ b/specs/business-report-murcia/feature.md
@@ -164,7 +164,7 @@ case by someone who did the work, not as generated filler.
   `ch-NN-*.html` fragments each containing only its `.chapter` header (numeral, eyebrow,
   title) so the build runs end to end before prose exists. _Verify:_ `node business/reports/_template/build-charts.mjs && node business/reports/_template/build-report.mjs && grep -c "<svg" business/reports/business-report-murcia.html && grep -c 'href="http\|src="http\|url(http' business/reports/business-report-murcia.html; echo "exit $?"`.
   Accept: the build runs without error, the output has ≥7 inline SVG charts, zero external URL references, and the chapter headers appear in TOC order; every chart carries a `.figure-caption` with source and chip placeholder filled by the fragment.
-- [ ] **T4 — Chapters 1–3: resumen, arranque, empresa** (structural). Orchestrator
+- [x] **T4 — Chapters 1–3: resumen, arranque, empresa** (structural). Orchestrator
   writes `ch-01-resumen.html`, `ch-02-arranque.html`, `ch-03-empresa.html`. Ch. 1: the
   eight things the founder must know, each with its figure and chip, one page or two.
   Ch. 2: the first fortnight — opening prices per piece under the recommended
@@ -174,7 +174,7 @@ case by someone who did the work, not as generated filler.
   first offer, minimum order); the alta-date check and the Cuota Cero window. Ch. 3:
   the company and the service (catalogue, equipment owned, capacity, duration range,
   drying, operator solo, the path from operator to owner), from `founder-inputs.md`.
-  _Verify:_ `node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-01-resumen.html business/reports/_src/murcia/ch-02-arranque.html business/reports/_src/murcia/ch-03-empresa.html && grep -n -i "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-0[123]*.html; echo "exit $?"`.
+  _Verify:_ `node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-01-resumen.html business/reports/_src/murcia/ch-02-arranque.html business/reports/_src/murcia/ch-03-empresa.html && grep -n "TODO|TBD|lorem"\|grep -n "TODO|TBD|lorem"\|grep -n "TODO|TBD|lorem" business/reports/_src/murcia/ch-0[123]*.html; echo "exit $?"`.
   Accept: Scenario: traceable chapter — WHEN any figure in ch. 1–3 is picked THEN it appears with the same value and label in one of the source files named in Constraints; no placeholder text remains; the build still runs.
 - [ ] **T5 — Chapters 4–6: mercado, competencia, público** (structural). Orchestrator
   writes `ch-04-mercado.html` (rings with population, households, drive times and
@@ -183,7 +183,7 @@ case by someone who did the work, not as generated filler.
   policy, reviews and trust signals; the price map chart; what is missing in Murcia and
   what is not, with the sweep caveat), `ch-06-publico.html` (45–65, allergy, pets, trust
   cues and messages per segment from `marketing-research-addendum.md` R1–R4, adapted to
-  Murcia's zones and B2B pool). _Verify:_ `node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-04-mercado.html business/reports/_src/murcia/ch-05-competencia.html business/reports/_src/murcia/ch-06-publico.html && grep -n -i "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-0[456]*.html; echo "exit $?"`.
+  Murcia's zones and B2B pool). _Verify:_ `node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-04-mercado.html business/reports/_src/murcia/ch-05-competencia.html business/reports/_src/murcia/ch-06-publico.html && grep -n "TODO|TBD|lorem"\|grep -n "TODO|TBD|lorem"\|grep -n "TODO|TBD|lorem" business/reports/_src/murcia/ch-0[456]*.html; echo "exit $?"`.
   Accept: Scenario: traceable chapter — WHEN any figure in ch. 4–6 is picked THEN it appears with the same value and label in `murcia-market.md` or the addendum; every competitor named is in `murcia-market.md` §4.2; no placeholder text remains.
 - [ ] **T6 — Chapters 7–9: precios, captación, costes** (structural). Orchestrator
   writes `ch-07-precios.html` (three architectures with the Murcia medians beside, the
@@ -192,7 +192,7 @@ case by someone who did the work, not as generated filler.
   local channels as hypotheses to test in order, the Spain-proxy seasonality caveat),
   `ch-09-costes.html` (cost per service: consumables, travel by ring, parking; fixed
   costs timeline with the tarifa plana assumption; contribution per piece and per visit;
-  the IVA wedge; IRPF not modelled). _Verify:_ `node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-07-precios.html business/reports/_src/murcia/ch-08-captacion.html business/reports/_src/murcia/ch-09-costes.html && grep -n -i "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-0[789]*.html; echo "exit $?"`.
+  the IVA wedge; IRPF not modelled). _Verify:_ `node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-07-precios.html business/reports/_src/murcia/ch-08-captacion.html business/reports/_src/murcia/ch-09-costes.html && grep -n "TODO|TBD|lorem"\|grep -n "TODO|TBD|lorem"\|grep -n "TODO|TBD|lorem" business/reports/_src/murcia/ch-0[789]*.html; echo "exit $?"`.
   Accept: Scenario: traceable chapter — WHEN any figure in ch. 7–9 is picked THEN it appears with the same value and label in `pricing-decision.md`, `murcia-model.md` / tables or `murcia-market.md`; no placeholder text remains.
 - [ ] **T7 — Chapters 10–13: proyecciones, crecimiento, riesgos, glosario** (structural).
   Orchestrator writes `ch-10-proyecciones.html` (year 1 month by month from October 2026
@@ -202,7 +202,7 @@ case by someone who did the work, not as generated filler.
   separate market), `ch-12-riesgos.html` (assumptions list with what resolves each,
   gaps from `murcia-market.md` §9.3, RC, alta date, single-source figures), and
   `ch-13-glosario-fuentes.html` (terms; sources by chapter pointing to the research
-  files and their URLs). Fill the TOC page numbers after a render pass. _Verify:_ `node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-10-proyecciones.html business/reports/_src/murcia/ch-11-crecimiento.html business/reports/_src/murcia/ch-12-riesgos.html && grep -n -i "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-1[0-3]*.html; echo "exit $?"`.
+  files and their URLs). Fill the TOC page numbers after a render pass. _Verify:_ `node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-10-proyecciones.html business/reports/_src/murcia/ch-11-crecimiento.html business/reports/_src/murcia/ch-12-riesgos.html && grep -n "TODO|TBD|lorem"\|grep -n "TODO|TBD|lorem"\|grep -n "TODO|TBD|lorem" business/reports/_src/murcia/ch-1[0-3]*.html; echo "exit $?"`.
   Accept: Scenario: traceable chapter — WHEN any figure in ch. 10–11 is picked THEN it appears in `murcia-model-tables.md`; every assumption in ch. 12 names what would resolve it; the TOC has no "—" placeholder left.
 - [ ] **T8 — Render, check and ship** (structural). Render the PDF with the README's
   headless-Chrome recipe (absolute `file://` URL, `--virtual-time-budget`,
@@ -223,7 +223,7 @@ case by someone who did the work, not as generated filler.
 - `node business/research/murcia-model.mjs && git diff --exit-code --stat -- business/research/murcia-model-tables.md business/research/murcia-model-data.json`
 - `node business/reports/_template/build-charts.mjs && node business/reports/_template/build-report.mjs && git diff --exit-code --stat -- business/reports/business-report-murcia.html`
 - `grep -c 'href="http\|src="http\|url(http' business/reports/business-report-murcia.html`
-- `grep -n -i "TODO\|TBD\|lorem" business/reports/business-report-murcia.html`
+- `grep -n "TODO|TBD|lorem"\|grep -n "TODO|TBD|lorem"\|grep -n "TODO|TBD|lorem" business/reports/business-report-murcia.html`
 - `python -c "import pypdf;r=pypdf.PdfReader('business/reports/business-report-murcia.pdf');print(len(r.pages))"`
 - `git diff --stat HEAD -- business/research/economic-model.md business/research/economic-model-engine.mjs business/research/granada-market.md business/bank business/reports/economic-report.html business/reports/marketing-report.html`
 
@@ -231,6 +231,9 @@ case by someone who did the work, not as generated filler.
 
 - 2026-10-06 ungated (Juan's word). Decisions carried: launch mid-October 2026, no
   financing, no purchases; prose written by the orchestrator per CLAUDE.md.
+- 2026-10-06 T1 (adbb06f), T2 (32f7420), T9 (1c7dc66), T3 committed; no Critical so far.
+- 2026-10-06 T4 written by the orchestrator (ch. 1–3). Verify greps made case-sensitive
+  because `-i` matched the Spanish word "todo".
 
 ## Evidence
 
@@ -240,3 +243,4 @@ case by someone who did the work, not as generated filler.
 | T2 | verify command + double-run sha256 (structural) | model script | no package.json, no runner; baseline verify `Error: Cannot find module '...\murcia-model.mjs'` (exit 1) | n/a (structural) | `node business/research/murcia-model.mjs && git diff --exit-code --stat -- …tables.md …data.json` → `exit 0` | Triangulation skipped: structural; outputs untracked so git diff is vacuous until commit — reproducibility shown by two runs with identical sha256 (tables `18129d61…`, json `88ad897d…`) | none |
 | T9 | verify command + double-run sha256 (structural) | model script | baseline verify on committed T2 outputs: empty `git status --short`, `exit 0` | n/a (structural) | verify → ` M …murcia-model-data.json` / ` M …murcia-model-tables.md` / `exit 0` (intended regeneration); A × conservador trough `−974 (Oct-2027)`, B × realista Y1 result `4,768` unchanged | Triangulation skipped: structural; two runs give identical sha256 (tables `257d0335…`, json `46c4e569…`) | none |
 | T3 | verify command + double-run sha256 (structural) | build scripts | model check `node business/research/murcia-model.mjs && git diff --exit-code --stat …` → `exit 0`; baseline verify `Error: Cannot find module '…\build-charts.mjs'` (exit 1) | n/a (structural) | build → `14 fragments, 8 svg`; `grep -c "<svg"` → 8; external-ref `grep -c` → 0 (grep's no-match `exit 1`) | Triangulation skipped: structural; two full runs (model + charts + report) give identical sha256 (charts `cc0e0d2a…`, report `58d8e8b4…`, json `9722af15…`, tables `257d0335…` unchanged); chapter titles diff TOC labels → exit 0; 7 captions carry a chip, 0 unfilled slots | sensitivity cells: trough text split onto two lines after a visual check showed overflow |
+| T4 | build + chip count + placeholder grep | docs | n/a (prose) | n/a | build ok; chips 19/23/15; grep exit 1 | none | none |
```
