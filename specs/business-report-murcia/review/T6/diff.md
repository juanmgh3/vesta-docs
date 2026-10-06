class: medium

## git status --short -uall
```
 M business/reports/_src/murcia/ch-07-precios.html
 M business/reports/_src/murcia/ch-08-captacion.html
 M business/reports/_src/murcia/ch-09-costes.html
 M specs/business-report-murcia/feature.md
?? .torq-flow/active
?? .torq-flow/run
?? business/research/aids-and-eu-branding.md
?? specs/business-report-murcia/review/T6/brief.md
?? specs/business-report-murcia/review/T6/report.md
```

## git diff HEAD
```diff
diff --git a/business/reports/_src/murcia/ch-07-precios.html b/business/reports/_src/murcia/ch-07-precios.html
index 198b852..41053fa 100644
--- a/business/reports/_src/murcia/ch-07-precios.html
+++ b/business/reports/_src/murcia/ch-07-precios.html
@@ -4,4 +4,163 @@
     <p class="eyebrow">Precios</p>
     <h2 class="chapter-header__title">Precios</h2>
   </header>
+
+  <p class="lead">
+    En julio el socio fundador decidió comparar tres políticas de precios en vez de cerrar
+    una, y este capítulo las compara con los precios reales de Murcia al lado. La
+    recomendación es la del medio, igualar el mercado con una presentación premium, y la
+    razón es de caja, no de gusto.
+  </p>
+
+  <h3>Lo que condiciona cualquier precio</h3>
+  <p>
+    Tres cosas. El cliente paga el precio con IVA, y de cada 100 € que paga la empresa se
+    queda con 82,6 € <span class="chip chip--fact">Fact</span>; por eso todas las cuentas de
+    aquí en adelante van sin IVA. El material cuesta 1,5 € por pieza
+    <span class="chip chip--fact">Fact</span>, así que el coste real de cada servicio es el
+    viaje, el aparcamiento y, si el cliente viene de un anuncio, los 71 € que cuesta
+    captarlo <span class="chip chip--estimate">Estimate</span>; todo eso se paga por visita,
+    no por pieza. Y los precios de Murcia están en la banda de Madrid y Valencia o por
+    encima, con el sofá de tres plazas a 100 € y el colchón de matrimonio a 67 € de mediana
+    <span class="chip chip--estimate">Estimate</span>.
+  </p>
+
+  <h3>Tres estrategias</h3>
+  <p>
+    A es entrar por debajo del mercado, un 15 a 20 % menos, para captar rápido; es el
+    instinto inicial del socio fundador. B es igualar el precio de mercado, publicarlo y
+    envolverlo en una marca que la competencia no tiene. C es entrar por arriba, con tres
+    niveles por pieza (básico, profundo, integral) y packs que suben el ticket medio. Los
+    precios de las tres son una propuesta sobre los precios de mercado, no un dato.
+  </p>
+
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 7.1. Las tres estrategias, precio con IVA, frente a la mediana publicada en Murcia.</caption>
+    <thead>
+      <tr>
+        <th scope="col">Pieza</th>
+        <th scope="col" class="num">A · Penetración</th>
+        <th scope="col" class="num">B · Igualar mercado</th>
+        <th scope="col" class="num">C · Premium escalonado</th>
+        <th scope="col" class="num">Mediana Murcia</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr><th scope="row">Colchón individual</th><td class="num">39 €</td><td class="num">49 €</td><td class="num">49 / 65 / 79 €</td><td class="num">52,5 €</td></tr>
+      <tr><th scope="row">Colchón de matrimonio</th><td class="num">55 €</td><td class="num">69 €</td><td class="num">69 / 89 / 109 €</td><td class="num">67 €</td></tr>
+      <tr><th scope="row">Colchón king</th><td class="num">69 €</td><td class="num">89 €</td><td class="num">—</td><td class="num">sin mediana</td></tr>
+      <tr><th scope="row">Sofá, por plaza</th><td class="num">25 €</td><td class="num">32 €</td><td class="num">—</td><td class="num">—</td></tr>
+      <tr><th scope="row">Sofá de tres plazas</th><td class="num">72 €</td><td class="num">95 €</td><td class="num">95 / 119 / 145 €</td><td class="num">100 €</td></tr>
+      <tr><th scope="row">Packs</th><td class="num">—</td><td class="num">—</td><td class="num">Dormitorio ~149 €; Casa ~200 €</td><td class="num">—</td></tr>
+      <tr><th scope="row">Pedido mínimo</th><td class="num">55 €</td><td class="num">70 €</td><td class="num">79 € o un pack</td><td class="num">no publicado</td></tr>
+    </tbody>
+  </table>
+  <p>
+    Medianas <span class="chip chip--estimate">Estimate</span>. Con la mezcla de servicios
+    que usa el modelo, mitad colchones de matrimonio, un quinto individuales, un cuarto sofás
+    de tres plazas y un 5 % de king <span class="chip chip--estimate">Estimate</span>, el
+    precio medio por pieza es de 56,75 € en A, 72,50 € en B y 82,81 € en C
+    <span class="chip chip--estimate">Estimate</span>.
+  </p>
+
+  <h3>Lo que gana cada una por visita</h3>
+  <p>
+    Esta es la tabla que decide. Una pieza suelta vendida a un cliente que llega por un
+    anuncio, con el IVA, el material, 5,5 € de viaje y aparcamiento y los 71 € de captación
+    descontados, pierde dinero en las tres estrategias; con dos piezas lo gana en las tres
+    <span class="chip chip--estimate">Estimate</span>.
+  </p>
+
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 7.2. Contribución por visita, sin IVA, con la mezcla de servicios del modelo y 71 € de captación.</caption>
+    <thead>
+      <tr>
+        <th scope="col">Concepto</th>
+        <th scope="col" class="num">A</th>
+        <th scope="col" class="num">B</th>
+        <th scope="col" class="num">C</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr><th scope="row">Precio medio por pieza, sin IVA</th><td class="num">46,90 €</td><td class="num">59,92 €</td><td class="num">68,44 €</td></tr>
+      <tr><th scope="row">Contribución por pieza</th><td class="num">42,35 €</td><td class="num">55,36 €</td><td class="num">63,88 €</td></tr>
+      <tr><th scope="row">Una pieza, cliente de anuncio</th><td class="num neg">−31,10 €</td><td class="num neg">−18,08 €</td><td class="num neg">−9,56 €</td></tr>
+      <tr><th scope="row">Dos piezas, cliente de anuncio</th><td class="num pos">+14,30 €</td><td class="num pos">+40,33 €</td><td class="num pos">+57,38 €</td></tr>
+      <tr><th scope="row">Piezas de anuncio para cubrir la captación</th><td class="num">1,7</td><td class="num">1,3</td><td class="num">1,1</td></tr>
+    </tbody>
+  </table>
+  <p>
+    Todo <span class="chip chip--estimate">Estimate</span>. El estudio de precios de julio
+    hizo la misma cuenta con un colchón de matrimonio suelto y el viaje completo de un día,
+    y le salió −34 € en A, −22 € en B y −6 € en C <span class="chip chip--estimate">Estimate</span>;
+    cambia la base, no la conclusión. En A, la pieza suelta pierde 31 € y la segunda apenas
+    saca la visita de números rojos. En B pierde 18 y la segunda la deja en +40. En C casi
+    empata con una y gana 57 con dos.
+  </p>
+
+  <h3>Por qué B</h3>
+  <p>
+    A es la peor en el momento en que peor viene, el arranque sin colchón: precio más bajo
+    con el mismo coste de captación es el agujero más hondo por visita, y fija una imagen
+    de barata que luego cuesta subir <span class="chip chip--analysis">Analysis</span>.
+    Y pelea la batalla equivocada, porque el competidor de verdad en precio es el espray
+    antiácaros del supermercado, a tres euros
+    <span class="chip chip--fact">Fact</span>; a eso no se le gana bajando. A solo tiene
+    sentido si casi todos los clientes llegan gratis, por recomendación, y se renuncia a la
+    marca.
+  </p>
+  <p>
+    C es la que mejor paga la captación y la que mejor financia el objetivo de ocho años,
+    porque cada visita deja más. Su problema es de ejecución: una empresa nueva que cobra
+    por encima del mercado necesita las pruebas listas el primer día, reseñas verificadas,
+    garantía escrita, a ser posible un certificado de laboratorio, y nada de eso existe
+    todavía. Sin ellas, el precio alto frena la conversión en frío justo cuando la caja
+    menos lo aguanta <span class="chip chip--analysis">Analysis</span>.
+  </p>
+  <p>
+    B es el punto medio y el que encaja con lo que se ha construido: el precio que el
+    cliente espera, publicado y cerrado, con una presentación que nadie más tiene en Murcia.
+    No sacrifica margen y protege subidas futuras. Su debilidad es la misma que la de las
+    otras dos, la visita de una pieza pierde, y por eso B solo funciona con la disciplina de
+    dos piezas <span class="chip chip--analysis">Analysis</span>. El camino natural es
+    empezar en B y abrir los niveles de C, el "profundo" con antimanchas y el "integral" con
+    protección, cuando haya reseñas y garantía que los sostengan.
+  </p>
+
+  <h3>Packs, mantenimiento y empresas</h3>
+  <p>
+    Los packs no son un extra. La competencia ya los vende, un sofá en tres niveles a
+    97, 119 y 169 € o dos colchones individuales por 69 € <span class="chip chip--fact">Fact</span>,
+    y en Vesta son lo que convierte la captación pagada en rentable. La oferta que se anuncia
+    es siempre colchón más sofá o los colchones de la casa; la pieza suelta se vende a quien
+    llama por recomendación, con el mínimo de 70 € para que el viaje merezca la pena.
+  </p>
+  <p>
+    Una suscripción mensual no encaja: es un servicio que se contrata una o dos veces al año
+    <span class="chip chip--analysis">Analysis</span>. Lo que sí encaja es un plan de
+    mantenimiento, la primera limpieza más una revisión anual a precio preferente, que
+    convierte un servicio suelto en una relación y reserva un hueco futuro sin coste de
+    captación. Es un mecanismo de retención, no una línea de ingresos.
+  </p>
+  <p>
+    Para empresas, el menú se construye ya aunque la demanda sea una incógnita: un 15 % de
+    descuento sobre el precio por pieza a partir de 10 piezas por visita, un 25 % a partir
+    de 25, un contrato periódico por propiedad presupuestado tras una visita, y una tarifa
+    por pieza para cambios de inquilino en pisos turísticos. Nunca por horas, porque eso
+    convierte el servicio en limpieza general y hunde el margen
+    <span class="chip chip--analysis">Analysis</span>. La cuenta explica por qué merece la
+    pena tenerlo listo: un hotel con 30 colchones al precio B con el 25 % de descuento deja
+    unos 1.230 € sin IVA en una sola visita <span class="chip chip--estimate">Estimate</span>,
+    con el viaje y la captación pagados una vez. El modelo económico no cuenta con ninguna
+    venta a empresas; si llegan, solo mejoran las cifras.
+  </p>
+
+  <aside class="callout">
+    <p class="callout__label">Lo que importa de este capítulo</p>
+    <p>
+      Precio de mercado, publicado, con dos piezas por visita como oferta de entrada. No
+      bajar; subir por niveles cuando haya pruebas que lo sostengan. El menú para empresas,
+      listo desde ahora y sin contar con él.
+    </p>
+  </aside>
 </section>
diff --git a/business/reports/_src/murcia/ch-08-captacion.html b/business/reports/_src/murcia/ch-08-captacion.html
index 29b1f99..a5a4598 100644
--- a/business/reports/_src/murcia/ch-08-captacion.html
+++ b/business/reports/_src/murcia/ch-08-captacion.html
@@ -4,4 +4,130 @@
     <p class="eyebrow">Captación</p>
     <h2 class="chapter-header__title">Captación de clientes</h2>
   </header>
+
+  <p class="lead">
+    Los clientes de los primeros meses llegan por dos puertas, los anuncios de Google y la
+    recomendación, y la primera cuesta dinero mientras la segunda arranca. Este capítulo
+    dice cuánto gastar, qué esperar de cada euro y qué canales locales probar, en qué
+    orden.
+  </p>
+
+  <h3>Google: qué cuesta un cliente</h3>
+  <p>
+    Un clic en un anuncio de limpieza del hogar en España cuesta entre 1 € y 3 €, con el
+    centro de la banda en 1,5–2 € <span class="chip chip--estimate">Estimate</span>; es la
+    banda baja de los servicios para el hogar, por debajo de fontaneros (2–6 €) o
+    cerrajeros (3–7 €) <span class="chip chip--estimate">Estimate</span>. Con un cliente de
+    cada ocho visitas a la web y una de cada tres consultas que acaba en servicio, el coste
+    de captar un cliente ronda los 71 €, con una banda de 36 € a 111 €
+    <span class="chip chip--estimate">Estimate</span>. La parte más floja de esa cuenta es la
+    tasa de cierre, que nadie ha medido para este servicio en España
+    <span class="chip chip--notfound">Not found</span>. Para Murcia no existe ningún dato de
+    volumen de búsquedas ni de coste por clic <span class="chip chip--notfound">Not found</span>;
+    la única cifra con el nombre de la ciudad, 70 búsquedas al mes y 3,04 € por clic para
+    "limpieza de sofás murcia", sale de una herramienta que la marca como desactualizada
+    <span class="chip chip--fact">Fact</span> y no sirve de base. Lo que sí se sabe es que en
+    la Región el colchón pesa más que el sofá en las búsquedas, un 70 % frente a un 30 %,
+    la proporción más alta de las cuatro regiones comparadas
+    <span class="chip chip--fact">Fact</span>; los anuncios empiezan por el colchón.
+  </p>
+  <p>
+    El presupuesto de entrada es de 150 a 300 € al mes <span class="chip chip--estimate">Estimate</span>,
+    entre 5 y 10 € al día, lo que las agencias recomiendan a un negocio local para validar
+    el canal antes de escalar. El modelo arranca en 150 € en octubre y sube hasta 400 € en
+    junio en el escenario realista <span class="chip chip--estimate">Estimate</span>, y la
+    regla es que se sube cuando la caja lo paga, no antes. A 71 € por cliente, 150 € son
+    dos clientes al mes; 400 €, cinco o seis. Por eso la oferta anunciada lleva dos piezas:
+    con una, cada uno de esos clientes cuesta más de lo que deja.
+  </p>
+  <p>
+    Dos detalles de montaje. Búsqueda con concordancia de frase y geografía ajustada al
+    municipio y el cinturón, y una lista de palabras negativas para quien busca cómo
+    limpiarlo él mismo, bicarbonato, vinagre, casero, tutorial
+    <span class="chip chip--estimate">Estimate</span>. Y un número de teléfono en el propio
+    anuncio: para quien busca un servicio, la llamada convierte mejor que el formulario
+    <span class="chip chip--fact">Fact</span>. Existe un segundo formato de Google
+    para servicios locales que cobra por contacto, entre 6 € y 50 €, pero no tiene
+    categoría de colchones ni tapicería y habría que comprobar en el alta si admite el
+    negocio <span class="chip chip--notfound">Not found</span>.
+  </p>
+
+  <h3>La recomendación</h3>
+  <p>
+    Cuatro de cada diez españoles encuentran a un profesional para su casa por un familiar o
+    un amigo, y uno de cada cuatro buscando en internet
+    <span class="chip chip--fact">Fact</span>, en una encuesta de 2018 sobre reparaciones,
+    no limpieza. Cada cliente que llega por recomendación o repite cuesta cero euros
+    captarlo, así que el coste medio por cliente baja según crecen las reseñas y el boca a
+    boca <span class="chip chip--analysis">Analysis</span>. El modelo recoge eso: los
+    clientes "orgánicos" pasan de cero en octubre a doce al mes en septiembre en el
+    escenario realista, el doble que los de pago <span class="chip chip--estimate">Estimate</span>.
+    Es una estimación de cómo se ha visto arrancar a negocios parecidos, no una medida de
+    Murcia.
+  </p>
+  <p>
+    La reseña es el engranaje. Se pide al terminar cada servicio, con el cliente delante y
+    la cama limpia, y se publica en la ficha de Google, donde el competidor local con más
+    reseñas tiene 66 <span class="chip chip--fact">Fact</span>. Un cliente de cada barrio
+    satisfecho y con reseña vale, en este negocio, más que el anuncio que lo trajo.
+  </p>
+
+  <h3>Canales locales que probar, por orden</h3>
+  <p>
+    Ninguno está probado; todos son hipótesis <span class="chip chip--hypothesis">Hypothesis</span>.
+    El orden es por coste y por cercanía al racimo de renta alta del capítulo 4.
+  </p>
+  <p>
+    <strong>Primero, los barrios.</strong> El registro municipal de entidades ciudadanas
+    tiene 441 entidades, de las que unas 24 son asociaciones de vecinos
+    <span class="chip chip--estimate">Estimate</span>; entre ellas la de San
+    Lorenzo-Universidad, en pleno centro, la zona que supera el corte de renta alta
+    <span class="chip chip--fact">Fact</span>. Una charla sobre alergias y hogar, un
+    puesto en una fiesta de barrio, una nota en su boletín. Cuesta tiempo, no dinero.
+  </p>
+  <p>
+    <strong>Segundo, los grupos.</strong> Grupos de compraventa y de barrio en Facebook y
+    WhatsApp por pueblo y por pedanía. La estructura de 59 pedanías se presta a ello
+    <span class="chip chip--analysis">Analysis</span>. Sus nombres y tamaños no se han
+    podido leer sin iniciar sesión <span class="chip chip--notfound">Not found</span>.
+  </p>
+  <p>
+    <strong>Tercero, los marketplaces.</strong> Cronoshare tiene categoría de limpieza de
+    colchones y de sofás en Murcia y ya la usan dos competidores locales
+    <span class="chip chip--fact">Fact</span>. Se paga por contacto desbloqueado, entre un
+    2 % y un 15 % del valor del trabajo, un 6 % de media
+    <span class="chip chip--estimate">Estimate</span>, se gane o no, así que el coste por
+    cliente real es bastante más alto que ese 6 %. Útil para llenar huecos, no como canal
+    principal.
+  </p>
+  <p>
+    <strong>Después, los medios regionales.</strong> La radio y la televisión autonómicas
+    venden publicidad y su audiencia es mayor <span class="chip chip--fact">Fact</span>; el
+    diario regional, también. Llegan a toda la Región, y la mayor parte de la Región está
+    fuera de la zona de servicio. Tarifas no leídas <span class="chip chip--notfound">Not found</span>.
+    Para más adelante.
+  </p>
+
+  <h3>Cuándo hay más demanda</h3>
+  <p>
+    No se sabe para Murcia. Google Trends no tiene datos suficientes de la Región para
+    dibujar una curva <span class="chip chip--notfound">Not found</span>, y la de toda
+    España, que se usa como aproximación, oscila entre un mínimo en diciembre y un máximo en
+    septiembre con tan pocos datos que la diferencia no se puede dar por real
+    <span class="chip chip--estimate">Estimate</span>. Lo que sí se sabe del clima de Murcia
+    es que el secado es más rápido de junio a agosto, con máximas de 31 a 34 grados y
+    humedad baja, y más lento en diciembre y enero, con 68 % de humedad y 16,6 grados de
+    máxima <span class="chip chip--fact">Fact</span>; llueve poco, 36 días al año, así que
+    la lluvia no es un problema. Arrancar en octubre significa aprender el oficio en los
+    meses de secado lento. Ventaja: lo que funcione en noviembre funcionará en junio.
+  </p>
+
+  <aside class="callout">
+    <p class="callout__label">Lo que importa de este capítulo</p>
+    <p>
+      150 € al mes en Google para empezar, oferta de dos piezas, teléfono en el anuncio.
+      Una reseña por servicio. Barrios y grupos antes que radio. La estacionalidad de Murcia
+      se aprenderá trabajando; no hay dato previo.
+    </p>
+  </aside>
 </section>
diff --git a/business/reports/_src/murcia/ch-09-costes.html b/business/reports/_src/murcia/ch-09-costes.html
index f06403e..436c5cc 100644
--- a/business/reports/_src/murcia/ch-09-costes.html
+++ b/business/reports/_src/murcia/ch-09-costes.html
@@ -4,4 +4,149 @@
     <p class="eyebrow">Costes</p>
     <h2 class="chapter-header__title">Costes por servicio y costes fijos</h2>
   </header>
+
+  <p class="lead">
+    Vesta tiene un coste de material casi nulo y un coste de viaje que depende de a dónde
+    vaya. Este capítulo pone cifra a cada servicio y a cada mes, y es la base del modelo del
+    capítulo siguiente.
+  </p>
+
+  <h3>Lo que cuesta cada servicio</h3>
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 9.1. Coste directo de una visita, estrategia B, mezcla de servicios del modelo.</caption>
+    <thead>
+      <tr>
+        <th scope="col">Concepto</th>
+        <th scope="col" class="num">Por visita</th>
+        <th scope="col">Base</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr><th scope="row">Consumibles</th><td class="num">1,5 € por pieza</td><td>Cepillos y productos; el agua y la luz las pone el cliente</td></tr>
+      <tr><th scope="row">Desplazamiento</th><td class="num">4,5 €</td><td>Ida y vuelta a 0,175 €/km; banda 3,5–6,0 € según a dónde se vaya</td></tr>
+      <tr><th scope="row">Aparcamiento</th><td class="num">1,0 €</td><td>Un tique de zona azul en el 40 % de los trabajos</td></tr>
+      <tr><th scope="row">Captación, si viene de un anuncio</th><td class="num">71 €</td><td>Banda 36–111 €; cero si viene por recomendación</td></tr>
+    </tbody>
+  </table>
+  <p>
+    Consumibles <span class="chip chip--fact">Fact</span>; desplazamiento y aparcamiento
+    <span class="chip chip--estimate">Estimate</span>, con el reparto de trabajos por
+    distancia y la cuota de trabajos en zona azul como hipótesis
+    <span class="chip chip--hypothesis">Hypothesis</span>; captación
+    <span class="chip chip--estimate">Estimate</span>.
+  </p>
+  <p>
+    El desplazamiento merece un párrafo. El modelo antiguo contaba 3,5 € por visita, que es
+    lo que cuesta ir y volver a un punto a 10 kilómetros
+    <span class="chip chip--estimate">Estimate</span>. Eso cubre el casco, El Palmar (2,80 €)
+    y Alcantarilla (3,05 €), pero no Molina de Segura ni Sangonera (4,4–4,5 €) ni los
+    pueblos del fondo del cinturón, Ceutí, Santomera y Archena (7,1–9,4 €)
+    <span class="chip chip--estimate">Estimate</span>. El modelo nuevo supone que la mitad
+    de los trabajos caen cerca, un tercio largo en Molina y las pedanías grandes y un 15 %
+    en el fondo del cinturón <span class="chip chip--hypothesis">Hypothesis</span>, y de ahí
+    salen los 4,5 €. Si se trabaja sobre todo el casco, baja a 3,5; si se trabaja sobre todo
+    el cinturón, sube a 6. Encadenar dos trabajos en la misma zona ahorra la mitad del viaje
+    del segundo, así que la cifra es un techo por trabajo. El coste de combustible solo, a
+    los precios de octubre de 2026 en las gasolineras del municipio (1,80 € la gasolina,
+    1,89 € el gasóleo) <span class="chip chip--estimate">Estimate</span> y con un consumo
+    supuesto de 6 litros a los 100, es de 0,11 € por kilómetro
+    <span class="chip chip--hypothesis">Hypothesis</span>; el 0,175 € que usa el modelo
+    incluye el desgaste del coche.
+  </p>
+  <p>
+    El aparcamiento no estaba en el modelo antiguo. En el centro, durante las horas del
+    estacionamiento regulado, un tique cuesta hasta 1,90 € en el casco histórico y hasta
+    2,70 € en el anillo siguiente <span class="chip chip--estimate">Estimate</span>; fuera de
+    esas horas y de esos sectores es gratis. Suponiendo que cuatro de cada diez trabajos
+    caen en zona de pago, sale 1 € por visita <span class="chip chip--estimate">Estimate</span>.
+    Un trabajo largo en el casco histórico no cabe en un tique de 90 minutos; ese coste
+    extra no está calculado y se evita citando fuera del horario.
+  </p>
+
+  <h3>Lo que deja cada pieza</h3>
+  <p>
+    Un precio medio de 72,50 € con IVA son 59,92 € sin él. Quitando 1,5 € de material quedan
+    55,36 € por pieza <span class="chip chip--estimate">Estimate</span>, un 92 % del precio
+    neto. Con 1,8 piezas por visita, que es lo que supone el escenario realista, y 5,5 € de
+    viaje y aparcamiento, cada visita deja 99,65 € <span class="chip chip--estimate">Estimate</span>.
+    Ese margen tan alto es verdad y a la vez engaña, porque el dinero se va en llegar hasta
+    el servicio y en conseguir al cliente, no en producirlo. Por eso una visita de una
+    pieza a un cliente de anuncio pierde 18,08 € y una de dos gana 40,33 €
+    <span class="chip chip--estimate">Estimate</span>.
+  </p>
+
+  <h3>Los fijos, mes a mes</h3>
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 9.2. Costes fijos mensuales.</caption>
+    <thead>
+      <tr>
+        <th scope="col">Concepto</th>
+        <th scope="col" class="num">Con tarifa plana</th>
+        <th scope="col" class="num">Después</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr><th scope="row">Cuota de autónomo</th><td class="num">80 €</td><td class="num">250 €</td></tr>
+      <tr><th scope="row">Gestor</th><td class="num">30 €</td><td class="num">30 €</td></tr>
+      <tr><th scope="row">Seguro del coche</th><td class="num">50 €</td><td class="num">50 €</td></tr>
+      <tr><th scope="row">Seguro de responsabilidad civil</th><td class="num">25 €</td><td class="num">25 €</td></tr>
+      <tr><th scope="row">Web</th><td class="num">1 €</td><td class="num">1 €</td></tr>
+      <tr><th scope="row">Total</th><td class="num">186 €</td><td class="num">356 €</td></tr>
+    </tbody>
+  </table>
+  <p>
+    Cuota, gestor, seguro del coche y web <span class="chip chip--fact">Fact</span>; la
+    responsabilidad civil es una estimación a partir de las pólizas que se ofrecen a
+    autónomos de limpieza <span class="chip chip--estimate">Estimate</span>, y los totales
+    heredan esa etiqueta <span class="chip chip--estimate">Estimate</span>. La cuota de 250 € es el
+    centro de la banda de 205 a 300 € que corresponde a los tramos de ingresos bajos
+    <span class="chip chip--fact">Fact</span>. El modelo supone que la tarifa plana dura
+    hasta junio de 2027 y que la cuota sube en julio
+    <span class="chip chip--hypothesis">Hypothesis</span>; si los ingresos del primer año
+    quedan por debajo del salario mínimo, como indica el escenario realista, la tarifa plana
+    se prorroga doce meses más <span class="chip chip--fact">Fact</span> y ese salto no
+    llegaría hasta 2028. Los anuncios no son un coste fijo y van aparte, de 150 a 400 € al
+    mes en el primer año.
+  </p>
+  <p>
+    Lo que no entra. El IRPF, porque depende de la situación personal del socio fundador y
+    de otras rentas; todo lo que sigue es antes de IRPF. Las retiradas del propio fundador,
+    así que la caja del modelo es la del negocio, no la de la casa. Y el IVA, que se cobra
+    al cliente y se ingresa a Hacienda cada trimestre; el modelo lo paga en enero, abril,
+    julio y octubre, y eso tira de la caja esos meses.
+  </p>
+
+  <h3>Cuánto hay que vender para cubrirlo</h3>
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 9.3. Punto de equilibrio en piezas y visitas al mes, estrategia B, 1,8 piezas por visita.</caption>
+    <thead>
+      <tr>
+        <th scope="col">Para cubrir</th>
+        <th scope="col" class="num">€ al mes</th>
+        <th scope="col" class="num">Piezas</th>
+        <th scope="col" class="num">Visitas</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr><th scope="row">Solo los fijos, con tarifa plana</th><td class="num">186 €</td><td class="num">3,4</td><td class="num">1,9</td></tr>
+      <tr><th scope="row">Fijos y 300 € de anuncios, con tarifa plana</th><td class="num">486 €</td><td class="num">8,8</td><td class="num">4,9</td></tr>
+      <tr><th scope="row">Fijos y 300 € de anuncios, después</th><td class="num">656 €</td><td class="num">11,8</td><td class="num">6,6</td></tr>
+    </tbody>
+  </table>
+  <p>
+    Todo <span class="chip chip--estimate">Estimate</span>. Cubrir la estructura cuesta
+    menos de un día de trabajo al mes. Con anuncios, cinco visitas al mes; cuando suba la
+    cuota, siete. La capacidad son 88 piezas al mes <span class="chip chip--fact">Fact</span>,
+    así que el equilibrio está en torno al 10 % de lo que puede hacer una persona. La
+    estructura no es el problema; lo es llenar la agenda.
+  </p>
+
+  <aside class="callout">
+    <p class="callout__label">Lo que importa de este capítulo</p>
+    <p>
+      5,5 € por visita de viaje y aparcamiento, 1,5 € por pieza de material, 186 € al mes de
+      estructura y 71 € por cada cliente que llega de un anuncio. Nueve piezas al mes cubren
+      fijos y anuncios.
+    </p>
+  </aside>
 </section>
diff --git a/specs/business-report-murcia/feature.md b/specs/business-report-murcia/feature.md
index 6c43de5..2f5da90 100644
--- a/specs/business-report-murcia/feature.md
+++ b/specs/business-report-murcia/feature.md
@@ -192,7 +192,7 @@ case by someone who did the work, not as generated filler.
   "no X sino Y"; fold in `aids-and-eu-branding.md` (three alta-gated aid lines, the
   Kit Digital bono held and its NextGenerationEU logo obligation). _Verify:_ `node business/reports/_template/build-report.mjs && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-0[123]*.html; echo "exit $?"`.
   Accept: every finding F-017 to F-027 is addressed at its line; no figure outside the sources named in Constraints remains; the build runs.
-- [ ] **T5 — Chapters 4–6: mercado, competencia, público** (structural). Orchestrator
+- [x] **T5 — Chapters 4–6: mercado, competencia, público** (structural). Orchestrator
   writes `ch-04-mercado.html` (rings with population, households, drive times and
   travel cost; income and the premium sections; the segment per ring; the ring chart),
   `ch-05-competencia.html` (the 17 providers as a comparison table with price, travel
@@ -201,7 +201,15 @@ case by someone who did the work, not as generated filler.
   cues and messages per segment from `marketing-research-addendum.md` R1–R4, adapted to
   Murcia's zones and B2B pool). _Verify:_ `node business/reports/_template/build-report.mjs && grep -c "chip--" business/reports/_src/murcia/ch-04-mercado.html business/reports/_src/murcia/ch-05-competencia.html business/reports/_src/murcia/ch-06-publico.html && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-0[456]*.html; echo "exit $?"`.
   Accept: Scenario: traceable chapter — WHEN any figure in ch. 4–6 is picked THEN it appears with the same value and label in `murcia-market.md` or the addendum; every competitor named is in `murcia-market.md` §4.2; no placeholder text remains.
-- [ ] **T6 — Chapters 7–9: precios, captación, costes** (structural). Orchestrator
+- [x] **T11 — Prose fix pass on chapters 4–6** (structural). Orchestrator closes F-031 to
+  F-034 at the lines the findings record names: re-grade the 857 sum to Estimate; put the
+  income reading back on the source's conclusion (per-person is the affluence signal) and
+  fix the callout; rewrite the white-space paragraph so it claims only what the chapter
+  table supports (lab report unclaimed; guarantee by three, named method by one, published
+  per-size prices by six); chip or cut the unchipped and unsourced lines; fix the
+  Ayuntamiento aid chips in ch. 1–2. _Verify:_ `node business/reports/_template/build-report.mjs && grep -n "TODO\|TBD\|lorem" business/reports/_src/murcia/ch-0[456]*.html; echo "exit $?"`.
+  Accept: F-031 to F-034 addressed at their lines; no figure changed; the build runs.
+- [x] **T6 — Chapters 7–9: precios, captación, costes** (structural). Orchestrator
   writes `ch-07-precios.html` (three architectures with the Murcia medians beside, the
   pack imperative and the single-visit loss, B2B menu, recommendation B and why),
   `ch-08-captacion.html` (Google Ads entry budget and CAC band, the reviews flywheel,
@@ -258,6 +266,11 @@ case by someone who did the work, not as generated filler.
   summary sentences; Kit Digital logos as instruction) and F-030 raised; fixes applied in
   the same pass before commit, left `open` for the T5 reviewer to confirm. Juan's note
   `aids-and-eu-branding.md` (untracked, his) added to the allowed sources.
+- 2026-10-06 T4 + T10 committed. T5 written by the orchestrator (ch. 4–6).
+- 2026-10-06 T5 reviewed: F-027 to F-030 confirmed fixed; one Critical F-031 (857 chip),
+  F-032, F-033 Important (income reading, white-space claims), F-034 Minor. All labelling
+  or wording; fixed by the orchestrator as T11, same rule as before; run continues.
+- 2026-10-06 T6 written by the orchestrator (ch. 7–9).
 
 ## Evidence
 
@@ -269,3 +282,6 @@ case by someone who did the work, not as generated filler.
 | T3 | verify command + double-run sha256 (structural) | build scripts | model check `node business/research/murcia-model.mjs && git diff --exit-code --stat …` → `exit 0`; baseline verify `Error: Cannot find module '…\build-charts.mjs'` (exit 1) | n/a (structural) | build → `14 fragments, 8 svg`; `grep -c "<svg"` → 8; external-ref `grep -c` → 0 (grep's no-match `exit 1`) | Triangulation skipped: structural; two full runs (model + charts + report) give identical sha256 (charts `cc0e0d2a…`, report `58d8e8b4…`, json `9722af15…`, tables `257d0335…` unchanged); chapter titles diff TOC labels → exit 0; 7 captions carry a chip, 0 unfilled slots | sensitivity cells: trough text split onto two lines after a visual check showed overflow |
 | T4 | build + chip count + placeholder grep | docs | n/a (prose) | n/a | build ok; chips 19/23/15; grep exit 1 | none | none |
 | T10 | build + placeholder grep | docs | n/a (prose) | n/a | build ok; grep exit 1 | none | none |
+| T5 | build + chip count + placeholder grep | docs | n/a (prose) | n/a | build ok; grep exit 1 | none | none |
+| T11 | build + placeholder grep | docs | n/a (prose) | n/a | build ok; grep exit 1 | none | none |
+| T6 | build + chip count + placeholder grep | docs | n/a (prose) | n/a | build ok; chips 18/28/22; grep exit 1 | none | none |
```
