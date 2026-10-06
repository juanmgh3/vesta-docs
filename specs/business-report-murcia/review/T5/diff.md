class: medium

## git status --short -uall
```
 M business/reports/_src/murcia/ch-04-mercado.html
 M business/reports/_src/murcia/ch-05-competencia.html
 M business/reports/_src/murcia/ch-06-publico.html
 M business/reports/business-report-murcia.html
 M specs/business-report-murcia/feature.md
?? .torq-flow/active
?? .torq-flow/run
?? business/research/aids-and-eu-branding.md
?? specs/business-report-murcia/review/T5/brief.md
?? specs/business-report-murcia/review/T5/report.md
```

## git diff HEAD
```diff
diff --git a/business/reports/_src/murcia/ch-04-mercado.html b/business/reports/_src/murcia/ch-04-mercado.html
index 758dc25..8f02d07 100644
--- a/business/reports/_src/murcia/ch-04-mercado.html
+++ b/business/reports/_src/murcia/ch-04-mercado.html
@@ -4,5 +4,248 @@
     <p class="eyebrow">Mercado</p>
     <h2 class="chapter-header__title">El mercado de Murcia</h2>
   </header>
+
+  <p class="lead">
+    Murcia no es una ciudad compacta con afueras. Es un municipio de 479.405 habitantes
+    <span class="chip chip--fact">Fact</span> donde siete de cada diez viven fuera del casco,
+    repartidos en 59 pedanías de tamaño muy desigual, y con nueve pueblos pegados que suman
+    otros 225.000. Eso cambia qué significa "la zona de servicio" y cuánto cuesta cada viaje.
+  </p>
+
+  <h3>Tres anillos</h3>
+  <p>
+    El casco urbano, 24 barrios, tiene 138.997 habitantes <span class="chip chip--fact">Fact</span>
+    y unos 49.600 hogares <span class="chip chip--estimate">Estimate</span>. Las pedanías
+    suman 340.494 <span class="chip chip--fact">Fact</span>; las seis mayores, El Palmar
+    (25.339), Puente Tocinos (16.976), Cabezo de Torres (14.350), La Alberca (13.263),
+    Espinardo (12.792) y Sangonera la Verde (12.726), reúnen 95.446 personas, y las otras 53
+    rondan las 4.600 cada una <span class="chip chip--fact">Fact</span>. El municipio entero
+    más los nueve pueblos del cinturón da 704.814 personas y unos 250.700 hogares
+    <span class="chip chip--estimate">Estimate</span>. El anillo exterior, con Cartagena,
+    Orihuela, el Mar Menor, Torrevieja, Lorca y Cieza, añade 666.428 personas y unos 248.500
+    hogares <span class="chip chip--estimate">Estimate</span>, aunque en la costa el padrón
+    cuenta a muchos residentes de segunda vivienda, así que esos hogares no son comparables
+    con los del cinturón.
+  </p>
+
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 4.1. Los tres anillos de servicio desde la Glorieta de España.</caption>
+    <thead>
+      <tr>
+        <th scope="col">Anillo</th>
+        <th scope="col">Qué incluye</th>
+        <th scope="col" class="num">Población</th>
+        <th scope="col" class="num">Hogares</th>
+        <th scope="col">Distancia y tiempo sin tráfico</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr>
+        <th scope="row">R1 · casco</th>
+        <td>24 barrios del centro</td>
+        <td class="num">138.997</td>
+        <td class="num">≈49.600</td>
+        <td>Trayectos urbanos cortos</td>
+      </tr>
+      <tr>
+        <th scope="row">R2 · municipio + cinturón</th>
+        <td>Casco, 59 pedanías y Alcantarilla, Molina de Segura, Las Torres de Cotillas, Santomera, Beniel, Alguazas, Ceutí, Lorquí, Archena</td>
+        <td class="num">704.814</td>
+        <td class="num">≈250.700</td>
+        <td>Pueblos a 9–27 km, 10–22 min; pedanías grandes a 8–13 km</td>
+      </tr>
+      <tr>
+        <th scope="row">R3 · anillo exterior</th>
+        <td>Orihuela, Cartagena, Torre-Pacheco, San Javier, San Pedro del Pinatar, Los Alcázares, Torrevieja, Lorca, Cieza</td>
+        <td class="num">666.428</td>
+        <td class="num">≈248.500</td>
+        <td>30–79 km, 32–66 min solo ida</td>
+      </tr>
+    </tbody>
+  </table>
+
+  <p>
+    Población <span class="chip chip--fact">Fact</span> (INE, padrón a 1 de enero de 2025),
+    hogares y tiempos <span class="chip chip--estimate">Estimate</span>. Los tiempos son de
+    un calculador de rutas sin tráfico, así que en hora punta son más largos.
+  </p>
+
   <!-- chart:rings --><span class="chip chip--fact">Fact</span> <span class="chip chip--estimate">Estimate</span><!-- /chart -->
+
+  <p>
+    Con cuatro servicios al día, R2 es el área de trabajo diaria sin discusión. Ningún
+    pueblo del cinturón está a más de 22 minutos sin tráfico, y una jornada de cuatro
+    trabajos con sus saltos entre ellos suma entre una y dos horas de coche
+    <span class="chip chip--analysis">Analysis</span>. R3 no funciona como área diaria. Ir y
+    volver de Cartagena o del Mar Menor son 75 a 90 minutos antes de empezar a trabajar,
+    casi el hueco de un servicio; Lorca o Torrevieja, más. Solo tiene sentido con varios
+    trabajos agrupados en la misma zona o con un suplemento por desplazamiento.
+  </p>
+
+  <h3>Los pueblos del cinturón</h3>
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 4.2. Cinturón de Murcia: población, hogares y distancia por carretera desde la Glorieta.</caption>
+    <thead>
+      <tr>
+        <th scope="col">Municipio</th>
+        <th scope="col" class="num">Población</th>
+        <th scope="col" class="num">Hogares</th>
+        <th scope="col" class="num">Km</th>
+        <th scope="col" class="num">Min</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr><th scope="row">Molina de Segura</th><td class="num">78.458</td><td class="num">≈28.000</td><td class="num">12,5</td><td class="num">12</td></tr>
+      <tr><th scope="row">Alcantarilla</th><td class="num">43.876</td><td class="num">≈15.700</td><td class="num">8,7</td><td class="num">10</td></tr>
+      <tr><th scope="row">Las Torres de Cotillas</th><td class="num">22.676</td><td class="num">≈8.100</td><td class="num">16,6</td><td class="num">15</td></tr>
+      <tr><th scope="row">Archena</th><td class="num">20.908</td><td class="num">≈7.200</td><td class="num">26,9</td><td class="num">22</td></tr>
+      <tr><th scope="row">Santomera</th><td class="num">16.443</td><td class="num">≈5.700</td><td class="num">20,5</td><td class="num">16</td></tr>
+      <tr><th scope="row">Ceutí</th><td class="num">13.089</td><td class="num">≈4.700</td><td class="num">20,4</td><td class="num">22</td></tr>
+      <tr><th scope="row">Beniel</th><td class="num">11.582</td><td class="num">≈3.700</td><td class="num">16,6</td><td class="num">19</td></tr>
+      <tr><th scope="row">Alguazas</th><td class="num">10.431</td><td class="num">≈3.500</td><td class="num">15,0</td><td class="num">16</td></tr>
+      <tr><th scope="row">Lorquí</th><td class="num">7.946</td><td class="num">≈2.900</td><td class="num">17,8</td><td class="num">19</td></tr>
+    </tbody>
+  </table>
+  <p>
+    Población <span class="chip chip--fact">Fact</span>; hogares, kilómetros y minutos
+    <span class="chip chip--estimate">Estimate</span>. Molina de Segura sola tiene más
+    hogares que medio casco urbano de Murcia y está a doce minutos. Es el primer pueblo en el
+    que pensar.
+  </p>
+
+  <h3>Cómo son los hogares</h3>
+  <p>
+    El hogar medio de Murcia tiene 2,8 personas <span class="chip chip--fact">Fact</span>,
+    frente a 2,49 en España <span class="chip chip--fact">Fact</span>; de ahí los 171.200
+    hogares del municipio <span class="chip chip--estimate">Estimate</span>. Una de cada
+    cuatro viviendas es unipersonal (25,2 %) <span class="chip chip--fact">Fact</span>. La
+    edad media es de 41,3 años, el 16,7 % tiene 65 o más y el 29,7 % está entre 45 y 64
+    <span class="chip chip--fact">Fact</span>, que es la franja a la que se dirige Vesta.
+    Hogares más grandes significan más colchones por casa, y eso favorece la venta de dos
+    piezas por visita <span class="chip chip--analysis">Analysis</span>.
+  </p>
+
+  <h3>Renta: dos lecturas que no coinciden</h3>
+  <p>
+    Por hogar, Murcia ingresa 38.682 € netos al año <span class="chip chip--fact">Fact</span>,
+    algo por encima de la media española (38.326 €) y de Granada (36.821 €), y por debajo de
+    Valencia (40.058 €) <span class="chip chip--fact">Fact</span>. Por persona la foto se da
+    la vuelta, 13.906 € frente a 15.036 € de media nacional, 16.024 € en Granada y 16.121 €
+    en Valencia <span class="chip chip--fact">Fact</span>. La razón es el tamaño del hogar.
+    Para un servicio que se contrata por casa, la renta por hogar es la que importa, y ahí
+    Murcia está en la media; para medir cuánta holgura tiene cada persona, es un mercado
+    algo más ajustado que Granada o Valencia <span class="chip chip--analysis">Analysis</span>.
+    La estadística de la Agencia Tributaria, que mide otra cosa, apunta en la misma
+    dirección que la segunda lectura <span class="chip chip--analysis">Analysis</span>.
+  </p>
+
+  <h3>Dónde está la renta alta</h3>
+  <p>
+    El INE publica la renta de cada una de las 387 secciones censales del municipio
+    <span class="chip chip--fact">Fact</span>. Asignar cada sección a un barrio es una
+    aproximación <span class="chip chip--estimate">Estimate</span>, y el criterio para
+    llamar "premium" a una zona es que su renta por persona supere en un 50 % la media
+    municipal, es decir, 20.859 €. Con ese criterio solo una zona lo cumple entera.
+  </p>
+
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 4.3. Renta neta por persona de las zonas candidatas (INE 2023, media ponderada de las secciones alrededor del punto).</caption>
+    <thead>
+      <tr>
+        <th scope="col">Zona</th>
+        <th scope="col" class="num">€ por persona</th>
+        <th scope="col" class="num">Sobre la media</th>
+        <th scope="col">Lectura</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr><th scope="row">Centro (Santo Domingo, Catedral, San Lorenzo, San Miguel, Santa Catalina)</th><td class="num">23.808</td><td class="num">1,71×</td><td>Premium; el núcleo más rico del municipio</td></tr>
+      <tr><th scope="row">Vistalegre</th><td class="num">19.079</td><td class="num">1,37×</td><td>Por debajo del corte; su tramo de Avenida de Europa lo supera por sí solo (28.078 €)</td></tr>
+      <tr><th scope="row">La Flota</th><td class="num">17.806</td><td class="num">1,28×</td><td>Por debajo del corte; una sección lo supera</td></tr>
+      <tr><th scope="row">Santa María de Gracia</th><td class="num">16.316</td><td class="num">1,17×</td><td>Por debajo; su borde sur, pegado al centro, lo supera</td></tr>
+      <tr><th scope="row">Juan Carlos I</th><td class="num">14.002</td><td class="num">1,01×</td><td>En la media; la avenida es larga y su extremo sur sube</td></tr>
+      <tr><th scope="row">La Alcayna (Molina de Segura)</th><td class="num">23.255</td><td class="num">1,69×</td><td>Premium sobre la media de Molina; pequeña</td></tr>
+      <tr><th scope="row">Altorreal (Molina de Segura)</th><td class="num">20.567</td><td class="num">1,49×</td><td>Justo bajo el corte de Molina; una sección lo supera</td></tr>
+      <tr><th scope="row">Montepinar (El Esparragal)</th><td class="num">12.468</td><td class="num">0,90×</td><td>Por debajo de la media en el punto medido; límite sin confirmar</td></tr>
+    </tbody>
+  </table>
+  <p>
+    Renta de las secciones <span class="chip chip--fact">Fact</span>; medias por zona y
+    veredictos <span class="chip chip--estimate">Estimate</span>. Las diez secciones más
+    ricas del municipio están todas en el centro y su primer anillo, con San Miguel a la
+    cabeza (33.082 € por persona en la calle Jaime I el Conquistador)
+    <span class="chip chip--fact">Fact</span>. En total, 34 de las 387 secciones superan el
+    corte; viven en ellas 32.488 personas, unos 12.200 hogares, y 29 de esas 34 están en el
+    casco antiguo y su primer anillo <span class="chip chip--estimate">Estimate</span>. En
+    Molina de Segura son otros 1.560 hogares, en La Alcayna y Altorreal
+    <span class="chip chip--estimate">Estimate</span>.
+  </p>
+  <p>
+    La lectura práctica es que la renta alta de Murcia es un único racimo compacto, centro,
+    Vistalegre, La Flota y el borde sur de Santa María de Gracia, a kilómetro y medio unos
+    de otros y todo dentro del casco <span class="chip chip--analysis">Analysis</span>. Los
+    dos bolsillos del cinturón, La Alcayna y Altorreal, están al norte, a un cuarto de hora,
+    y valen una jornada agrupada, no una base. Dos de las zonas que sonaban a premium, Juan
+    Carlos I y Montepinar, no lo son en el punto medido; no se descartan, porque no tienen
+    límite oficial, pero no hay que contar con ellas.
+  </p>
+
+  <h3>Cuánta gente encaja en el perfil</h3>
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 4.4. Tamaño del segmento por anillo. Tasas nacionales aplicadas a la población local; los segmentos se solapan y no se suman.</caption>
+    <thead>
+      <tr>
+        <th scope="col">Anillo</th>
+        <th scope="col" class="num">45–64 años</th>
+        <th scope="col" class="num">Alergia respiratoria</th>
+        <th scope="col" class="num">De ellos, sensibles a ácaros</th>
+        <th scope="col" class="num">Hogares con mascota</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr><th scope="row">R1 · casco</th><td class="num">≈41.300</td><td class="num">≈27.800</td><td class="num">≤≈13.900</td><td class="num">≈24.300</td></tr>
+      <tr><th scope="row">R2 · municipio + cinturón</th><td class="num">≈207.600</td><td class="num">≈141.000</td><td class="num">≤≈70.500</td><td class="num">≈122.800</td></tr>
+      <tr><th scope="row">R3 · anillo exterior</th><td class="num">≈192.600</td><td class="num">≈133.300</td><td class="num">≤≈66.600</td><td class="num">≈121.800</td></tr>
+    </tbody>
+  </table>
+  <p>
+    Todo <span class="chip chip--estimate">Estimate</span>. La franja de edad es la medida
+    en cada municipio; la alergia respiratoria usa el 20 % nacional y la sensibilidad a
+    ácaros el "hasta el 50 %" de los alérgicos, ambos de ámbito español
+    <span class="chip chip--fact">Fact</span>; las mascotas usan el 49 % de hogares de la
+    asociación del sector, un dato que otra fuente eleva al 61 % y que aquí se toma por lo
+    bajo. Un dato propio de Murcia sobre alergia a ácaros no existe en las fuentes
+    consultadas <span class="chip chip--notfound">Not found</span>; lo más cercano es que el
+    23 % de los adultos de la Región declara alguna alergia
+    <span class="chip chip--fact">Fact</span>, en línea con el conjunto de España. El núcleo
+    estrecho del objetivo, personas de 45 a 64 años que se declaran alérgicas a los ácaros,
+    son unas 6.600 en R2 <span class="chip chip--estimate">Estimate</span>, con un dato de
+    2001 que marca un suelo, no la cifra actual.
+  </p>
+
+  <h3>El mercado de empresas</h3>
+  <p>
+    El alquiler turístico no está donde está Vesta. El municipio tiene 777 viviendas de uso
+    turístico en las grandes plataformas y el cinturón 80 más, 857 en total
+    <span class="chip chip--fact">Fact</span>; el anillo exterior tiene 9.910, y tres de
+    cada cuatro están en Torrevieja, Orihuela y Cartagena <span class="chip chip--estimate">Estimate</span>.
+    En Murcia hay 32 hoteles abiertos con 2.488 habitaciones <span class="chip chip--fact">Fact</span>
+    y al menos 794 plazas en residencias de estudiantes con cifra publicada
+    <span class="chip chip--estimate">Estimate</span>. En la costa la demanda hotelera cae a
+    la mitad en invierno, Cartagena pasa de 6.186 plazas abiertas en agosto a 3.012 en enero
+    <span class="chip chip--fact">Fact</span>, así que, si algún día se trabaja la costa, la
+    ventana lógica para limpiezas a fondo es de octubre a mayo
+    <span class="chip chip--hypothesis">Hypothesis</span>. Lo que una empresa de la zona
+    gasta hoy en higiene de colchones y tapicería no está publicado en ninguna parte
+    <span class="chip chip--notfound">Not found</span>; el capítulo 11 trata el canal.
+  </p>
+
+  <aside class="callout">
+    <p class="callout__label">Lo que importa de este capítulo</p>
+    <p>
+      250.700 hogares a menos de media hora, con un hogar más grande que la media española
+      y una renta por hogar en la media. La renta alta cabe en un paseo por el centro. La
+      costa es otro mercado, a hora y media de ida y vuelta.
+    </p>
+  </aside>
 </section>
diff --git a/business/reports/_src/murcia/ch-05-competencia.html b/business/reports/_src/murcia/ch-05-competencia.html
index 000344b..8fad4d0 100644
--- a/business/reports/_src/murcia/ch-05-competencia.html
+++ b/business/reports/_src/murcia/ch-05-competencia.html
@@ -4,5 +4,163 @@
     <p class="eyebrow">Competencia</p>
     <h2 class="chapter-header__title">La competencia</h2>
   </header>
+
+  <p class="lead">
+    En octubre de 2026 se buscaron empresas que limpien colchones y tapicería a domicilio en
+    Murcia, en su cinturón y en Cartagena, en Google, en Google Maps y en los dos
+    marketplaces de servicios. Salieron 17 que se pudieron perfilar
+    <span class="chip chip--estimate">Estimate</span>. No son todas las que hay, porque la
+    vista de Maps que se usó enseña como mucho ocho resultados por búsqueda
+    <span class="chip chip--fact">Fact</span>, pero sí las que un cliente encuentra cuando
+    busca.
+  </p>
+
+  <h3>Quién es quién</h3>
+  <p>
+    Los precios son los que cada empresa publica en su propia web, tal cual los publica,
+    "desde" incluido; donde dice "presupuesto" es que no publica ninguno. Las reseñas son las
+    de su ficha de Google Maps, que la propia ficha advierte que no verifica. Cada fila es
+    un dato de una sola fuente <span class="chip chip--fact">Fact</span>.
+  </p>
+
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 5.1. Proveedores presentes en Murcia, octubre de 2026.</caption>
+    <thead>
+      <tr>
+        <th scope="col">Empresa</th>
+        <th scope="col">Qué es</th>
+        <th scope="col">Precios publicados</th>
+        <th scope="col">Desplazamiento</th>
+        <th scope="col">Google</th>
+        <th scope="col">Método y garantía</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr><th scope="row">Clean-Home.es</th><td>Cadena regional (también en Valencia y Granada)</td><td>Colchón individual 59 €, 135 cm 65 €, matrimonio 69 €, king 69 € (una cara); sofá 2 pl 79 €, 3 pl 85 €, 4 pl 89 €; chaise 89–99 €</td><td>Gratis en toda la provincia</td><td>4,9 (1.632), ficha nacional</td><td>Inyección-extracción con vapor; garantía con revisita gratis; sin certificación</td></tr>
+      <tr><th scope="row">Happy Clean</th><td>Independiente regional con sede en Torrevieja; sirve Alicante, Murcia y Granada</td><td>Sofá 2 pl 70–90 €, 3 pl 100–120 €, chaise 110–130 €; sillón desde 30 €; silla desde 5 €; colchón desde 45 € sin tamaño</td><td>No lo dice</td><td>5,0 (105), ficha de Torrevieja</td><td>"Limpieza en seco", 5–7 h de secado; 10 % de descuento al primer pedido</td></tr>
+      <tr><th scope="row">Limpiezalto</th><td>Independiente local, Murcia</td><td>Sin IVA: colchón 90 cm 50 €, 135–160 cm 100 €, 180–200 cm 120 €; sofá 1 pl 60 €, 2 pl 80 €, 3 pl 100 €, 4 pl 110 €; L 120–160 €; U 180 €</td><td>Lo cobra fuera de la capital</td><td>4,9 (66)</td><td>No nombra método; avisa de que no garantiza manchas antiguas</td></tr>
+      <tr><th scope="row">Brillamu</th><td>Empresa de limpieza local con línea de tapicería</td><td>Con IVA, desde: sofá 2 pl 80 €, 3 pl 100 €, rinconera 110 €; sillón 40 €; silla 20 €; colchón 55 € sin tamaño</td><td>Incluido en capital, pedanías y pueblos cercanos</td><td>Ficha sin reseñas</td><td>Inyección-extracción y vapor; 2–4 h de secado</td></tr>
+      <tr><th scope="row">Sercomanga</th><td>Limpieza general (oficinas, comunidades) con línea de tapicería</td><td>Más IVA: sofá 2 pl 60 €, 3 pl 85 €; chaise 108–155 €; colchón 90 cm 36 €, 135 cm 50 €, 150 cm 60 €</td><td>Según distancia; Murcia y Cartagena</td><td>4,8 (23)</td><td>No nombra método; descuento por varias piezas</td></tr>
+      <tr><th scope="row">Biomex</th><td>Cadena nacional; Murcia entre sus zonas, sin base local</td><td>Colchón individual desde 55 €, matrimonio desde 65 € (en su página nacional); sofá sin precio</td><td>Incluido</td><td>Sin ficha en Murcia</td><td>Revisa incidencias; sin certificación</td></tr>
+      <tr><th scope="row">Sofaclín</th><td>Marca nacional con páginas por ciudad</td><td>Presupuesto (su página de Murcia no da cifra)</td><td>Sin recargo en el área metropolitana</td><td>Sin ficha en Murcia</td><td>Inyección-extracción; 3–6 h de secado; sin dirección</td></tr>
+      <tr><th scope="row">TapiClean Services Murcia</th><td>Especialista local</td><td>Presupuesto (solo Instagram)</td><td>No lo dice</td><td>5,0 (37)</td><td>No consta</td></tr>
+      <tr><th scope="row">FJ Limpieza Móvil</th><td>Independiente local, El Raal</td><td>Presupuesto</td><td>Murcia y Alicante</td><td>5,0 (12)</td><td>Inyección-extracción con enzimáticos; menciona hostelería</td></tr>
+      <tr><th scope="row">Limpieza de Tapicerías Amo</th><td>Independiente, Molina de Segura</td><td>Presupuesto</td><td>Molina y alrededores</td><td>5,0 (4)</td><td>Extracción y desinfección; nombra hoteles y casas rurales</td></tr>
+      <tr><th scope="row">LavaYa Tapizados</th><td>Especialista local</td><td>Desde: sofá 60 €, colchón 40 €, silla 10 €, sin tamaños</td><td>Toda la Región, sin recargo mencionado</td><td>5,0 (3)</td><td>Inyección-extracción, productos eco; secado por pieza</td></tr>
+      <tr><th scope="row">Limpieza Villalba</th><td>Limpieza general, Cartagena</td><td>Presupuesto</td><td>Sin coste adicional; Cartagena y comarca</td><td>4,9 (56), sobre todo por limpieza de hogar y de obra</td><td>Inyección-extracción</td></tr>
+      <tr><th scope="row">Tapinet</th><td>Red nacional de sitios regionales</td><td>Presupuesto (su página de Murcia no carga)</td><td>No consta</td><td>No consta</td><td>Aspiración por turbina y espuma desinfectante; 1–2 h de secado</td></tr>
+      <tr><th scope="row">Hidrokleen</th><td>Independiente local (perfil en Cronoshare)</td><td>Presupuesto</td><td>Murcia, Alicante, Almería</td><td>Sin ficha; Cronoshare 9,5 (4)</td><td>No consta</td></tr>
+      <tr><th scope="row">Limpiezas Murcia</th><td>Limpieza general e industrial</td><td>Presupuesto</td><td>Toda la Región</td><td>No consta</td><td>Varios métodos; "resultados garantizados"; nombra empresas y flotas</td></tr>
+      <tr><th scope="row">EcoCleans</th><td>Franquicia nacional; en Murcia solo un publirreportaje de 2022</td><td>Presupuesto</td><td>No consta</td><td>No consta</td><td>Ozono; certificaciones autodeclaradas</td></tr>
+      <tr><th scope="row">Limpiezas Hermanas</th><td>Limpieza local, Lorquí (perfil en Cronoshare)</td><td>Presupuesto</td><td>No consta</td><td>Cronoshare 8,6 (18), 81 contrataciones</td><td>No consta</td></tr>
+    </tbody>
+  </table>
+
+  <h3>Lo que dice la tabla</h3>
+  <p>
+    Seis de las 17 publican al menos un precio por tamaño en su web; una más publica cifras
+    "desde" sin tamaño; diez no publican nada <span class="chip chip--estimate">Estimate</span>.
+    En Madrid publican 10 de 15 y en Valencia 5 de 16 con un criterio más laxo
+    <span class="chip chip--fact">Fact</span>, así que Murcia está en medio. De las seis
+    listas transparentes, dos son de empresas de fuera: la de Clean-Home es la misma que
+    usa en Granada y la de Happy Clean se publica desde Torrevieja
+    <span class="chip chip--fact">Fact</span>.
+  </p>
+  <p>
+    La reputación es poca y reciente. Solo dos especialistas en tapicería pasan de 30 reseñas
+    en una ficha local, Limpiezalto con 66 y TapiClean con 37
+    <span class="chip chip--fact">Fact</span>; las 105 de Happy Clean están en Torrevieja y
+    las 1.632 de Clean-Home en una ficha nacional. En Valencia, la misma Clean-Home acumula
+    1.300 en su ficha local y Centauro 160 <span class="chip chip--fact">Fact</span>. En
+    Murcia nadie ha construido todavía ese capital.
+  </p>
+  <p>
+    El método que declaran casi todos es inyección-extracción, el mismo que en Madrid y
+    Valencia <span class="chip chip--analysis">Analysis</span>. Lo más parecido a una
+    limpieza por aspiración es la fase de turbina de Tapinet y la "limpieza en seco" de
+    Happy Clean; ningún operador con equipo Hyla apareció en Murcia, Cartagena ni Alicante
+    con las búsquedas hechas <span class="chip chip--analysis">Analysis</span>. Nadie
+    presente en Murcia enseña una certificación de laboratorio; la única empresa del
+    conjunto nacional que la tiene no se encontró aquí <span class="chip chip--analysis">Analysis</span>.
+    Tres nombran a empresas o a hostelería entre sus clientes, ninguna con una página
+    dedicada. Garantía declaran Clean-Home, Biomex y Limpiezas Murcia; Limpiezalto declara
+    lo contrario para manchas antiguas <span class="chip chip--fact">Fact</span>.
+  </p>
+  <p>
+    El viaje gratis dentro de la capital es la norma entre quienes lo dicen; Limpiezalto lo
+    cobra fuera de la capital y Sercomanga lo cobra según la distancia
+    <span class="chip chip--analysis">Analysis</span>. Nadie publica un pedido mínimo,
+    salvo Clean-Home, cuyo servicio base es un colchón <span class="chip chip--fact">Fact</span>.
+  </p>
+
+  <h3>Precios</h3>
+  <p>
+    La tabla toma, de cada empresa que publica, el precio de cada pieza y tamaño, y lo pone
+    al lado de lo que se cobra en Madrid, Valencia y Granada. Los rangos son datos
+    <span class="chip chip--fact">Fact</span>; las medianas son un cálculo
+    <span class="chip chip--estimate">Estimate</span> y solo se dan con tres o más datos.
+    Dos empresas publican sin IVA, una con IVA y las demás no lo dicen; la segunda mediana
+    corrige las dos primeras.
+  </p>
+
+  <table class="cmp-table cmp-table--zebra">
+    <caption>Tabla 5.2. Precios publicados por pieza. Murcia frente a Madrid, Valencia y Granada.</caption>
+    <thead>
+      <tr>
+        <th scope="col">Pieza</th>
+        <th scope="col" class="num">Murcia, rango</th>
+        <th scope="col" class="num">Mediana / con IVA</th>
+        <th scope="col" class="num">Madrid</th>
+        <th scope="col" class="num">Valencia</th>
+        <th scope="col" class="num">Granada</th>
+      </tr>
+    </thead>
+    <tbody>
+      <tr><th scope="row">Colchón individual</th><td class="num">36–59 €</td><td class="num">52,5 / 57,0 €</td><td class="num">35–60 €</td><td class="num">25–55 €</td><td class="num">desde 45 €</td></tr>
+      <tr><th scope="row">Colchón de matrimonio</th><td class="num">60–100 €</td><td class="num">67 / 70,8 €</td><td class="num">55–90 €</td><td class="num">60–75 €</td><td class="num">+25 / +29 € (añadido a un sofá)</td></tr>
+      <tr><th scope="row">Colchón king</th><td class="num">69–120 €</td><td class="num">sin mediana</td><td class="num">75–100 €</td><td class="num">65–100 €</td><td class="num">+35 € (añadido)</td></tr>
+      <tr><th scope="row">Sofá de dos plazas</th><td class="num">60–90 €</td><td class="num">79 / 79 €</td><td class="num">60–97 €</td><td class="num">69–89 €</td><td class="num">79 €</td></tr>
+      <tr><th scope="row">Sofá de tres plazas</th><td class="num">85–120 €</td><td class="num">100 / 100 €</td><td class="num">90–119 €</td><td class="num">85–119 €</td><td class="num">85 €</td></tr>
+      <tr><th scope="row">Chaise longue</th><td class="num">89–180 €</td><td class="num">110 / 110 €</td><td class="num">120–175 €</td><td class="num">89–190 €</td><td class="num">89–99 €</td></tr>
+      <tr><th scope="row">Sillón</th><td class="num">30–60 €</td><td class="num">40 / 40 €</td><td class="num">42–50 €</td><td class="num">sin dato</td><td class="num">desde 30 €</td></tr>
+      <tr><th scope="row">Silla</th><td class="num">5–20 €</td><td class="num">10 / 10 €</td><td class="num">sin dato</td><td class="num">sin dato</td><td class="num">desde 5 €</td></tr>
+    </tbody>
+  </table>
+
   <!-- chart:price-map --><span class="chip chip--fact">Fact</span> <span class="chip chip--estimate">Estimate</span><!-- /chart -->
+
+  <p>
+    Murcia no es un mercado barato. El sofá de tres plazas, a 100 €, está por encima de lo
+    habitual en Madrid y Valencia, que es 90 €; el de dos plazas, a 79 €, en el techo de
+    Valencia y por encima de Madrid; el colchón de matrimonio, a 67–71 €, dentro del rango
+    de Madrid y por encima del punto de Valencia (65 €)
+    <span class="chip chip--analysis">Analysis</span>. La idea de que las ciudades medianas
+    del sur son más baratas, que se apuntó en su día para Granada, aquí no se cumple. Los
+    extremos no los marca una sola empresa, en los precios bajos están Sercomanga y
+    Clean-Home y en los altos Limpiezalto y Happy Clean, así que no hay un competidor al que
+    "ganar" en precio <span class="chip chip--analysis">Analysis</span>. El colchón king y
+    la silla tienen tan pocos datos que no sirven de referencia.
+  </p>
+
+  <h3>El hueco</h3>
+  <p>
+    Con todo lo anterior, lo que nadie ofrece en Murcia en este barrido es la combinación
+    de precio publicado, presentación cuidada y prueba verificable de lo que se promete
+    <span class="chip chip--analysis">Analysis</span>. La lista más cara que se publica es la
+    de Limpiezalto, con buena nota, pero sin nombrar método y avisando de lo que no garantiza;
+    el resto de los que publican compiten en cifra. Un informe de laboratorio sobre el
+    resultado, una garantía escrita y un método distinto del de todos los demás son tres
+    cosas que ningún competidor local enseña. Lo que no hay que hacer es bajar el precio,
+    porque nadie está ganando con eso y el cliente que compara por precio acaba en el espray
+    del supermercado, no en otra empresa <span class="chip chip--analysis">Analysis</span>.
+  </p>
+
+  <aside class="callout">
+    <p class="callout__label">Lo que importa de este capítulo</p>
+    <p>
+      Diecisiete competidores visibles, seis con precios, dos con reputación. Los precios
+      publicados están en la banda de Madrid y Valencia o por encima. Nadie enseña método
+      propio ni prueba de resultado.
+    </p>
+  </aside>
 </section>
diff --git a/business/reports/_src/murcia/ch-06-publico.html b/business/reports/_src/murcia/ch-06-publico.html
index b41757d..1431eb6 100644
--- a/business/reports/_src/murcia/ch-06-publico.html
+++ b/business/reports/_src/murcia/ch-06-publico.html
@@ -4,4 +4,144 @@
     <p class="eyebrow">Público</p>
     <h2 class="chapter-header__title">El cliente y cómo llegar a él</h2>
   </header>
+
+  <p class="lead">
+    El cliente de Vesta tiene entre 45 y 65 años, vive en casa propia, y compra tranquilidad
+    más que limpieza. Este capítulo recoge lo que se sabe de cómo decide esa persona y qué
+    hay que decirle, y lo separa de lo que solo se supone.
+  </p>
+
+  <h3>Quién compra</h3>
+  <p>
+    En el municipio y su cinturón hay unas 207.600 personas de 45 a 64 años, unos 141.000
+    adultos con alergia respiratoria, de los que hasta la mitad pueden ser sensibles a los
+    ácaros, y unos 122.800 hogares con mascota <span class="chip chip--estimate">Estimate</span>.
+    Se solapan, y la casa que reúne las tres cosas es el cliente ideal. La franja de 55 años
+    en adelante pesa económicamente más que su tamaño: en España, los hogares encabezados
+    por mayores de 55 concentran más del 40 % de la riqueza familiar
+    <span class="chip chip--fact">Fact</span> y los mayores de 55 gastan un 14 % más que la
+    media <span class="chip chip--fact">Fact</span>, los dos datos de una sola fuente cada uno.
+  </p>
+
+  <h3>Por qué compra</h3>
+  <p>
+    La alergia a los ácaros es frecuente en España y está poco diagnosticada; en eso
+    coinciden dos fuentes independientes <span class="chip chip--fact">Fact</span>. Las
+    cifras que las acompañan, un 60 % de personas con síntomas y solo un 15 % de ellas con
+    diagnóstico, salen de una encuesta pagada por un fabricante de tratamientos
+    <span class="chip chip--estimate">Estimate</span>, así que se usa la idea y no el número.
+    Lo que no se puede decir es cuántos ácaros hay en un colchón. El "entre cien mil y diez
+    millones" que repite el sector no tiene ninguna fuente científica detrás
+    <span class="chip chip--hypothesis">Hypothesis</span>; Vesta no debe darlo.
+  </p>
+  <p>
+    Lo que el cliente valora, a juzgar por las reseñas de los competidores, no es cuántos
+    ácaros se eliminan, que no puede comprobar, sino volver a dormir tranquilo
+    <span class="chip chip--fact">Fact</span>. Dos estudios sobre el asco como motor de
+    compra apuntan a lo mismo desde otro lado: enseñar solo lo sucio hace que el proveedor
+    herede el rechazo, así que el mensaje tiene que enseñar el estado resuelto, la cama
+    limpia, no el colchón manchado <span class="chip chip--analysis">Analysis</span>. La
+    demostración de lo invisible, una lámpara ultravioleta que saca a la luz lo que queda en
+    el tejido, existe y la usan empresas del sector <span class="chip chip--fact">Fact</span>;
+    que convierta más clientes no está medido <span class="chip chip--hypothesis">Hypothesis</span>.
+  </p>
+  <p>
+    La limpieza del hogar en España no se compra por estatus; se ha vuelto un servicio
+    corriente, a 12–15 € la hora <span class="chip chip--fact">Fact</span>. Por eso el
+    premium de Vesta tiene que apoyarse en salud, alivio y control, no en distinción social
+    <span class="chip chip--analysis">Analysis</span>.
+  </p>
+
+  <h3>En qué confía una persona de 45 a 65 años</h3>
+  <p>
+    En hablar con alguien. Que el cliente de esta edad prefiera el teléfono o WhatsApp a un
+    formulario o a un bot es una hipótesis sin estudio detrás
+    <span class="chip chip--hypothesis">Hypothesis</span>, pero la ley sí es un hecho: desde
+    junio de 2023 está prohibido llamar a un particular para vender sin su consentimiento,
+    con multas de hasta dos millones de euros <span class="chip chip--fact">Fact</span>. Así
+    que un número visible al que llamar, y ninguna llamada de salida.
+  </p>
+  <p>
+    En las reseñas, con matices. La gran mayoría de los compradores españoles las consulta
+    <span class="chip chip--fact">Fact</span>; que el comprador mayor necesite pocas y
+    creíbles, y no cientos, es una hipótesis razonable
+    <span class="chip chip--hypothesis">Hypothesis</span>. Decir que las reseñas son
+    verificadas obliga por ley a explicar cómo se verifican <span class="chip chip--fact">Fact</span>.
+  </p>
+  <p>
+    En los sellos, pero pocos. Tres de cada cuatro españoles prefieren productos
+    certificados y dos de cada tres pagarían más por ellos, y a la vez dos de cada tres
+    quieren menos sellos y más control sobre ellos <span class="chip chip--fact">Fact</span>.
+    Uno o dos sellos explicados, qué garantizan y quién lo dice, valen más que una fila de
+    logotipos <span class="chip chip--analysis">Analysis</span>. Solo la mitad de los
+    españoles responde bien a una pregunta básica de cultura financiera
+    <span class="chip chip--fact">Fact</span>; quien no compara atributos decide por
+    autoridad y por familiaridad, una marca que parece de siempre, una recomendación, un
+    sello conocido <span class="chip chip--analysis">Analysis</span>.
+  </p>
+  <p>
+    Y en la recomendación. El 40 % de los españoles encuentra a un profesional para su casa
+    por un familiar o un amigo, y solo el 25 % buscando en internet, según una encuesta de
+    2018 sobre reparaciones del hogar <span class="chip chip--fact">Fact</span>; un estudio
+    mundial da un 88 % de confianza en la recomendación de conocidos
+    <span class="chip chip--fact">Fact</span>. Para un servicio dentro de casa, el boca a
+    boca es el canal que más pesa, y el primer cliente satisfecho de cada barrio vale más que
+    el anuncio que lo trajo <span class="chip chip--analysis">Analysis</span>.
+  </p>
+
+  <h3>Qué decirle a cada uno</h3>
+  <p>
+    <strong>Al hogar de 45 a 65 años.</strong> Dormir mejor, respirar mejor, una casa que
+    se cuida. El resultado, no el proceso. Precio publicado y cerrado, sin "desde".
+  </p>
+  <p>
+    <strong>A quien tiene alergia.</strong> Que la alergia a los ácaros es más común de lo
+    que se diagnostica, que el colchón y el sofá son donde viven, y que hay una forma de
+    tratarlos sin productos químicos. Sin cifras de ácaros ni promesas médicas; Vesta limpia,
+    no cura.
+  </p>
+  <p>
+    <strong>A quien tiene mascota.</strong> El sofá es donde duerme el perro. Pelo, olor y
+    lo que no se ve. Es el segmento con el motivo más visible y el que menos explicación
+    necesita <span class="chip chip--analysis">Analysis</span>.
+  </p>
+  <p>
+    <strong>Al centro de Murcia.</strong> El racimo de renta alta del capítulo 4 cabe en un
+    paseo. Ahí el argumento es la seriedad: horario cumplido, precio dicho de antemano, el
+    operador que viene es el dueño, la reseña del vecino. Un precio por barrio no lo hace
+    nadie en el mercado y no conviene empezar por ahí <span class="chip chip--analysis">Analysis</span>.
+  </p>
+  <p>
+    <strong>A las empresas.</strong> Los hoteles externalizan la limpieza a fondo de forma
+    habitual, y la higiene de colchones y tapicería suele ir dentro del mantenimiento, no
+    como partida aparte <span class="chip chip--estimate">Estimate</span>. Al director del
+    hotel o al gestor de pisos turísticos, no a la propiedad, y con una propuesta de
+    mantenimiento periódico, no de servicio suelto. Una cosa a comprobar antes de ofrecer
+    "tratamiento antiácaros": si se usa un biocida, la ley exige carné de aplicador y
+    registro <span class="chip chip--fact">Fact</span>; si el método es solo aspiración y
+    calor, probablemente no, pero eso no se ha verificado con un asesor
+    <span class="chip chip--hypothesis">Hypothesis</span>.
+  </p>
+
+  <h3>El nombre</h3>
+  <p>
+    Once de las trece marcas del conjunto nacional se llaman alguna variante de "clean",
+    "limpi" o "tapi" con un prefijo <span class="chip chip--fact">Fact</span>; son
+    intercambiables entre sí y con el término que se busca en Google. Sus lemas se agolpan
+    en la higiene clínica; el eje emocional, cómo se siente la casa y no qué hace la
+    máquina, está casi vacío <span class="chip chip--fact">Fact</span>. Un nombre que no
+    describe nada, con raíz en el hogar y la protección, y una presentación que parece de
+    una marca con años es territorio libre en este sector
+    <span class="chip chip--hypothesis">Hypothesis</span>; es una interpretación, no una
+    medida, pero coincide con el hueco que deja la competencia local del capítulo 5.
+  </p>
+
+  <aside class="callout">
+    <p class="callout__label">Lo que importa de este capítulo</p>
+    <p>
+      Se vende alivio y control a una persona que decide por confianza, no por comparación.
+      Teléfono visible, pocas reseñas creíbles, uno o dos sellos explicados, ningún número de
+      ácaros, y enseñar siempre la cama limpia.
+    </p>
+  </aside>
 </section>
diff --git a/specs/business-report-murcia/feature.md b/specs/business-report-murcia/feature.md
index 6c43de5..376ece0 100644
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
@@ -258,6 +258,7 @@ case by someone who did the work, not as generated filler.
   summary sentences; Kit Digital logos as instruction) and F-030 raised; fixes applied in
   the same pass before commit, left `open` for the T5 reviewer to confirm. Juan's note
   `aids-and-eu-branding.md` (untracked, his) added to the allowed sources.
+- 2026-10-06 T4 + T10 committed. T5 written by the orchestrator (ch. 4–6).
 
 ## Evidence
 
@@ -269,3 +270,4 @@ case by someone who did the work, not as generated filler.
 | T3 | verify command + double-run sha256 (structural) | build scripts | model check `node business/research/murcia-model.mjs && git diff --exit-code --stat …` → `exit 0`; baseline verify `Error: Cannot find module '…\build-charts.mjs'` (exit 1) | n/a (structural) | build → `14 fragments, 8 svg`; `grep -c "<svg"` → 8; external-ref `grep -c` → 0 (grep's no-match `exit 1`) | Triangulation skipped: structural; two full runs (model + charts + report) give identical sha256 (charts `cc0e0d2a…`, report `58d8e8b4…`, json `9722af15…`, tables `257d0335…` unchanged); chapter titles diff TOC labels → exit 0; 7 captions carry a chip, 0 unfilled slots | sensitivity cells: trough text split onto two lines after a visual check showed overflow |
 | T4 | build + chip count + placeholder grep | docs | n/a (prose) | n/a | build ok; chips 19/23/15; grep exit 1 | none | none |
 | T10 | build + placeholder grep | docs | n/a (prose) | n/a | build ok; grep exit 1 | none | none |
+| T5 | build + chip count + placeholder grep | docs | n/a (prose) | n/a | build ok; grep exit 1 | none | none |
```
