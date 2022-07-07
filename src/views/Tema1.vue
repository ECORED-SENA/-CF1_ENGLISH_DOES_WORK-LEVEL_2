<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF") 1
      h1 Preposiciones de lugar
    .row.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img1.svg', style="width: 450px").m-auto
      .col-lg-8
        p Las preposiciones de lugar son palabras que muestran la ubicación de un objeto, persona o animal. En inglés, existen diferentes tipos de preposiciones de lugar que ayudan a dar idea del lugar en el que se encuentra algo o alguien. Es importante no quedarse solo con la traducción, porque algunas, pese a traducirse de la misma forma en español, tienen diferentes usos en inglés:
        p.mb-0 A continuación, se explican las preposiciones de lugar en inglés:
    .row.p-4.bg-color1.mb-5
      .col-12
        h3.text-center.text-white.my-4 #[i Prepositions of place]
        .row.justify-content-center
          .col-9.col-lg
            .row.justify-content-center
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img2.svg', style="width: 190px").m-auto
              .col-auto.fig-position1
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span.text-center #[i IN]
                  .indicador--click(v-if="mostrarIndicador")
          .col-9.col-lg
            .row.justify-content-center
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img3.svg', style="width: 190px").m-auto
              .col-auto.fig-position1
                a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                  span.text-center #[i ON]
          .col-9.col-lg
            .row.justify-content-center
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img4.svg', style="width: 190px").m-auto
              .col-auto.fig-position1
                a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                  span.text-center #[i AT]
          .col-9.col-lg
            .row.justify-content-center
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img5.svg', style="width: 190px").m-auto
              .col-auto.fig-position1
                a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
                  span.text-center #[i BETWEEN]
          .col-9.col-lg
            .row.justify-content-center
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img6.svg', style="width: 190px").m-auto
              .col-auto.fig-position1
                a.boton.color-acento-botones.indicador__container(@click="modal5 = true")
                  span.text-center #[i NEXT TO]
        .row.justify-content-center
          .col-9.col-lg
            .row.justify-content-center
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img7.svg', style="width: 190px").m-auto
              .col-auto.fig-position1
                a.boton.color-acento-botones.indicador__container(@click="modal6 = true")
                  span.text-center #[i BEHIND]
          .col-9.col-lg
            .row.justify-content-center
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img8.svg', style="width: 190px").m-auto
              .col-auto.fig-position1
                a.boton.color-acento-botones.indicador__container(@click="modal7 = true")
                  span.text-center #[i IN FRONT OF]
          .col-9.col-lg
            .row.justify-content-center
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img9.svg', style="width: 190px").m-auto
              .col-auto.fig-position1
                a.boton.color-acento-botones.indicador__container(@click="modal8 = true")
                  span.text-center #[i UNDER]
          .col-9.col-lg
            .row.justify-content-center
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img10.svg', style="width: 190px").m-auto
              .col-auto.fig-position1
                a.boton.color-acento-botones.indicador__container(@click="modal9 = true")
                  span.text-center #[i BELOW]
          .col-9.col-lg
            .row.justify-content-center
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img11.svg', style="width: 190px").m-auto
              .col-auto.fig-position1
                a.boton.color-acento-botones.indicador__container(@click="modal10 = true")
                  span.text-center #[i AMONG]
        .row.justify-content-center
          .col-9.col-lg-3
            .row.justify-content-center
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img12.svg', style="width: 190px").m-auto
              .col-auto.fig-position1
                a.boton.color-acento-botones.indicador__container(@click="modal11 = true")
                  span.text-center #[i ABOVE]
          .col-9.col-lg-3
            .row.justify-content-center
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img14.svg', style="width: 190px").m-auto
              .col-auto.fig-position1
                a.boton.color-acento-botones.indicador__container(@click="modal12 = true")
                  span.text-center #[i AGAINST]
          .col-9.col-lg-3
            .row.justify-content-center
              .col-12
                figure
                  img(src='@/assets/curso/tema1/img13.svg', style="width: 190px").m-auto
              .col-auto.fig-position1
                a.boton.color-acento-botones.indicador__container(@click="modal13 = true")
                  span.text-center #[i FAR FROM]
    .row.justify-content-center.align-items-end
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width: 450px").m-auto
      .col-lg-4
        p.mb-0 Las preposiciones #[b #[i.txt-color1 at]], #[b #[i.txt-color1 in]], #[b #[i.txt-color1 on]] suelen generar confusión para los hablantes nativos de español, debido a que las tres se traducen como #[b.txt-color1 “en”]. Estas preposiciones son el ejemplo perfecto de por qué se debe entender cómo y en qué caso se usa una preposición en particular y no solo su traducción.
    Separador
    .titulo-segundo.color-acento-contenido
      h2 Actividad didáctica
    .row.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/completar-espacios.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 #[i Place everything correctly]. / Ubica todo correctamente
        p.mb-4 #[b Objetivo]. Identificar la preposición de lugar que identifica la ubicación del objeto, persona o animal.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar los espacios.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad1/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img15.svg', style="width: 450px").m-auto
        .col-lg-8
          h4 #[i IN]
          p Se usa para indicar que algo o alguien se encuentra dentro de un espacio delimitado, sean espacios cerrados o espacios abiertos (al aire libre); eso incluye edificaciones, lugares cerrados, espacios al aire libre pero definidos y acotados, como un jardín o un parque, y otros territorios como barrios, ciudades, países, continentes, etc.
          p.mb-4 #[b #[i For example / Por ejemplo:]]
          .row
            .col-auto   
              .row.align-items-center
                .col-3.d-none.d-lg-block
                  figure.fig-position2
                    img(src='@/assets/curso/tema1/img16.svg', style="width: 90px").m-auto
                .col-lg-9.ps-4.ps-lg-5.pe-4.py-4.bg-color2.shadow-sm
                  TarjetaAudio.color-primario.mb-3(
                    texto="The cat is <u>in</u> the box."
                    :audio="require('@/assets/curso/tema1/audio1.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.mb-0.ms-3 El gato está #[b #[u.txt-color1 en]] la caja. (Dentro de)
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center.mb-5
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img17.svg', style="width: 450px").m-auto
        .col-lg-8
          h4 #[i ON]
          p Se usa para ubicar algo o alguien que se encuentra sobre una superficie. Los objetos deben estar tocando la superficie donde se encuentran, porque si no están en contacto, se debe usar una preposición diferente. La preposición #[b #[i “on”]] también es usada para hablar de edificaciones o direcciones que se encuentran ubicadas sobre cierta vía, calle, avenida, etc.
          p.mb-4 #[b #[i For example / Por ejemplo:]]
          .row
            .col-auto   
              .row.align-items-center
                .col-3.d-none.d-lg-block
                  figure.fig-position2
                    img(src='@/assets/curso/tema1/img18.svg', style="width: 90px").m-auto
                .col-lg-9.ps-4.ps-lg-5.pe-4.py-4.bg-color2.shadow-sm
                  TarjetaAudio.color-primario.mb-3(
                    texto="The keys are <u>on</u> the table."
                    :audio="require('@/assets/curso/tema1/audio2.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.mb-0.ms-3 Las llaves están #[b #[u.txt-color1 en]] la mesa. (sobre)
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img19.svg', style="width: 450px").m-auto
        .col-lg-8
          p En inglés, los transportes se consideran superficies, excepto los coches o carros.
          p.mb-4 #[b #[i For example / Por ejemplo:]]
          .row
            .col-auto   
              .row.align-items-center
                .col-3.d-none.d-lg-block
                  figure.fig-position2
                    img(src='@/assets/curso/tema1/img20.svg', style="width: 90px").m-auto
                .col-lg-9.ps-4.ps-lg-5.pe-4.py-4.bg-color2.shadow-sm
                  TarjetaAudio.color-primario.mb-3(
                    texto="I’m <u>on</u> the bus."
                    :audio="require('@/assets/curso/tema1/audio3.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.mb-0.ms-3 Estoy #[b #[u.txt-color1 en]] el autobús.
    ModalA(:abrir-modal.sync="modal3")
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img21.svg', style="width: 250px").m-auto
        .col-lg-8
          h4 #[i AT]
          p Se utiliza para expresar la posición de algo con respecto a un punto de referencia.
          p.mb-4 #[b #[i For example / Por ejemplo:]]
          .row
            .col-auto   
              .row.align-items-center
                .col-3.d-none.d-lg-block
                  figure.fig-position2
                    img(src='@/assets/curso/tema1/img22.svg', style="width: 90px").m-auto
                .col-lg-9.ps-4.ps-lg-5.pe-4.py-4.bg-color2.shadow-sm
                  TarjetaAudio.color-primario.mb-3(
                    texto="He is <u>at</u> the door."
                    :audio="require('@/assets/curso/tema1/audio4.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.mb-0.ms-3 Él está #[b #[u.txt-color1 en]] la puerta.
    ModalA(:abrir-modal.sync="modal4")
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img23.svg', style="width: 380px").m-auto
        .col-lg-8
          h4 #[i BETWEEN]
          p Es una preposición que se usa para ubicar algo o alguien que está en medio de dos cosas o personas. Su uso es exclusivo de dos cosas o personas. Pese a poder traducirse como “en medio de”, no se puede usar cuando lo que se ubica está en medio de más de dos. En esos casos, se usa la preposición #[b #[i “among”]].
          p.mb-4 #[b #[i For example / Por ejemplo:]]
          .row
            .col-lg-8  
              .row.align-items-center
                .col-3.d-none.d-lg-block
                  figure.fig-position2
                    img(src='@/assets/curso/tema1/img24.svg', style="width: 90px").m-auto
                .col-lg-9.ps-4.ps-lg-5.pe-4.py-4.bg-color2.shadow-sm
                  TarjetaAudio.color-primario.mb-3(
                    texto="The apple is <u>between</u> the boxes."
                    :audio="require('@/assets/curso/tema1/audio5.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.mb-0.ms-3 La manzana está #[b #[u.txt-color1 entre]] las cajas.
    ModalA(:abrir-modal.sync="modal5")
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img25.svg', style="width: 300px").m-auto
        .col-lg-8
          h4 #[i NEXT TO]
          p Es una preposición que se usa para ubicar algo o alguien que se encuentra a un lado de algo o alguien. No se muestra si está al lado derecho o izquierdo, solo a un lado.
          p.mb-4 #[b #[i For example / Por ejemplo:]]
          .row
            .col-lg-8
              .row.align-items-center
                .col-3.d-none.d-lg-block
                  figure.fig-position2
                    img(src='@/assets/curso/tema1/img26.svg', style="width: 90px").m-auto
                .col-lg-9.ps-4.ps-lg-5.pe-4.py-4.bg-color2.shadow-sm
                  TarjetaAudio.color-primario.mb-3(
                    texto="The apple is <u>next to</u> the book."
                    :audio="require('@/assets/curso/tema1/audio6.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.mb-0.ms-3 La manzana está #[b #[u.txt-color1 al lado]] del libro.
    ModalA(:abrir-modal.sync="modal6")
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img27.svg', style="width: 300px").m-auto
        .col-lg-8
          h4 #[i BEHIND]
          p Es una preposición que se usa para indicar que una persona o cosa se encuentra detrás de otra. Debe tenerse en cuenta que no se trata de si está debajo, sino en la parte trasera.
          p.mb-4 #[b #[i For example / Por ejemplo:]]
          .row
            .col-lg-8
              .row.align-items-center
                .col-3.d-none.d-lg-block
                  figure.fig-position2
                    img(src='@/assets/curso/tema1/img28.svg', style="width: 90px").m-auto
                .col-lg-9.ps-4.ps-lg-5.pe-4.py-4.bg-color2.shadow-sm
                  TarjetaAudio.color-primario.mb-3(
                    texto="The apple is <u>behind</u> the book."
                    :audio="require('@/assets/curso/tema1/audio7.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.mb-0.ms-3 La manzana está #[b #[u.txt-color1 detrás]] del libro.
    ModalA(:abrir-modal.sync="modal7")
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img29.svg', style="width: 300px").m-auto
        .col-lg-8
          h4 #[i IN FRONT OF]
          p Es una preposición que se usa para indicar que una persona o cosa se encuentra delante de otra.
          p.mb-4 #[b #[i For example / Por ejemplo:]]
          .row
            .col-lg-8 
              .row.align-items-center
                .col-3.d-none.d-lg-block
                  figure.fig-position2
                    img(src='@/assets/curso/tema1/img30.svg', style="width: 90px").m-auto
                .col-lg-9.ps-4.ps-lg-5.pe-4.py-4.bg-color2.shadow-sm
                  TarjetaAudio.color-primario.mb-3(
                    texto="The apple is <u>in front</u> of the book."
                    :audio="require('@/assets/curso/tema1/audio8.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.mb-0.ms-3 La manzana está #[b #[u.txt-color1 delante]] del libro.
    ModalA(:abrir-modal.sync="modal8")
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img31.svg', style="width: 300px").m-auto
        .col-lg-8
          h4 #[i UNDER]
          p Es una preposición que se usa para indicar que una persona o cosa se encuentra debajo de otra. #[b #[i “Under”]] se usa en general para hacer referencia a un nivel inferior, con el que existe contigüidad o proximidad, y debe tenerse en cuenta la diferencia que hay con #[b #[i “below”]]. Cuando una cosa no está directamente debajo de otra se prefiere usar #[b #[i “below”]].
          p.mb-4 #[b #[i For example / Por ejemplo:]]
          .row
            .col-lg-8
              .row.align-items-center
                .col-3.d-none.d-lg-block
                  figure.fig-position2
                    img(src='@/assets/curso/tema1/img32.svg', style="width: 90px").m-auto
                .col-lg-9.ps-4.ps-lg-5.pe-4.py-4.bg-color2.shadow-sm
                  TarjetaAudio.color-primario.mb-3(
                    texto="The apple is <u>under</u> the table."
                    :audio="require('@/assets/curso/tema1/audio9.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.mb-0.ms-3 La manzana está #[b #[u.txt-color1 debajo]] de la mesa.
    ModalA(:abrir-modal.sync="modal9")
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img33.svg', style="width: 300px").m-auto
        .col-lg-8
          h4 #[i BELOW]
          p Es una preposición que se usa para indicar que una persona o cosa se encuentra debajo de otra. #[b #[i “Below”]] se usa, en general, para hacer referencia a un nivel inferior, con el que no existe contigüidad, y debe tenerse en cuenta la diferencia que hay con #[b #[i “under”]]. Cuando una cosa está directamente debajo de otra se prefiere usar #[b #[i “under”]]. En el caso de la temperatura, se utiliza #[b #[i “below”]] para indicar una temperatura bajo cero.
          p.mb-4 #[b #[i For example / Por ejemplo:]]
          .row
            .col-lg-8
              .row.align-items-center
                .col-3.d-none.d-lg-block
                  figure.fig-position2
                    img(src='@/assets/curso/tema1/img34.svg', style="width: 90px").m-auto
                .col-lg-9.ps-4.ps-lg-5.pe-4.py-4.bg-color2.shadow-sm
                  TarjetaAudio.color-primario.mb-3(
                    texto="Our apartment is <u>below</u> their."
                    :audio="require('@/assets/curso/tema1/audio10.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.mb-0.ms-3 Nuestro apartamento está #[b #[u.txt-color1 debajo]] del de ellos.
    ModalA(:abrir-modal.sync="modal10")
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img35.svg', style="width: 380px").m-auto
        .col-lg-8
          h4 #[i AMONG]
          p Es una preposición que se usa para ubicar algo o alguien que está en medio de varias cosas o personas (tres o más). Pese a poder traducirse como “en medio de”, no se puede usar cuando lo que se ubica está en medio de nada más dos objetos o personas. En esos casos, se usa la preposición #[b #[i “between”]].
          p.mb-4 #[b #[i For example / Por ejemplo:]]
          .row
            .col-lg-8
              .row.align-items-center
                .col-3.d-none.d-lg-block
                  figure.fig-position2
                    img(src='@/assets/curso/tema1/img36.svg', style="width: 90px").m-auto
                .col-lg-9.ps-4.ps-lg-5.pe-4.py-4.bg-color2.shadow-sm
                  TarjetaAudio.color-primario.mb-3(
                    texto="The red box is <u>among</u> brown boxes."
                    :audio="require('@/assets/curso/tema1/audio11.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.mb-0.ms-3 La caja roja está #[b #[u.txt-color1 entre]] cajas marrones.
    ModalA(:abrir-modal.sync="modal11")
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img37.svg', style="width: 380px").m-auto
        .col-lg-8
          h4 #[i ABOVE]
          p Es una preposición que se usa para ubicar algo o alguien que está sobre una persona o un objeto.
          p.mb-4 #[b #[i For example / Por ejemplo:]]
          .row
            .col-lg-8
              .row.align-items-center
                .col-3.d-none.d-lg-block
                  figure.fig-position2
                    img(src='@/assets/curso/tema1/img38.svg', style="width: 90px").m-auto
                .col-lg-9.ps-4.ps-lg-5.pe-4.py-4.bg-color2.shadow-sm
                  TarjetaAudio.color-primario.mb-3(
                    texto="The picture is <u>above</u> the sofa."
                    :audio="require('@/assets/curso/tema1/audio12.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.mb-0.ms-3 La fotografía está #[b #[u.txt-color1 encima]] del sofá.
    ModalA(:abrir-modal.sync="modal12")
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img39.svg', style="width: 380px").m-auto
        .col-lg-8
          h4 #[i AGAINST]
          p Es una preposición que se usa para indicar que algo o alguien se encuentra ubicado contra algo o alguien.
          p.mb-4 #[b #[i For example / Por ejemplo:]]
          .row
            .col-lg-8
              .row.align-items-center
                .col-3.d-none.d-lg-block
                  figure.fig-position2
                    img(src='@/assets/curso/tema1/img40.svg', style="width: 90px").m-auto
                .col-lg-9.ps-4.ps-lg-5.pe-4.py-4.bg-color2.shadow-sm
                  TarjetaAudio.color-primario.mb-3(
                    texto="He is leaning <u>against</u> the wall."
                    :audio="require('@/assets/curso/tema1/audio13.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.mb-0.ms-3 Él está inclinado #[b #[u.txt-color1 contra]] la pared.
    ModalA(:abrir-modal.sync="modal13")
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/img41.svg', style="width: 380px").m-auto
        .col-lg-8
          h4 #[i FAR FROM]
          p Es una preposición que se usa para indicar que una persona o cosa se encuentra lejos de otra.
          p.mb-4 #[b #[i For example / Por ejemplo:]]
          .row
            .col-lg-8
              .row.align-items-center
                .col-3.d-none.d-lg-block
                  figure.fig-position2
                    img(src='@/assets/curso/tema1/img42.svg', style="width: 90px").m-auto
                .col-lg-9.ps-4.ps-lg-5.pe-4.py-4.bg-color2.shadow-sm
                  TarjetaAudio.color-primario.mb-3(
                    texto="I’m <u>far from</u> the trees."
                    :audio="require('@/assets/curso/tema1/audio14.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.mb-0.ms-3 Estoy #[b #[u.txt-color1 lejos de]] los árboles.
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
    modal12: false,
    modal13: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
