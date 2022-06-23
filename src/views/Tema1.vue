<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF") 1
      h1 #[i Adjectives: describe and show objects and people]
    .row.align-items-center.p-3.bg-color1
      .col-auto
        figure
          img(src='@/assets/curso/tema1/img1.svg', style="width: 120px")
      .col
        p.mb-0 Los adjetivos son una de las cuatro principales clases de palabras gramaticales, junto con los sustantivos, los verbos y los adverbios. Son palabras que dan más información sobre personas, animales o cosas representadas por sustantivos y pronombres (pueden describir las cualidades, indicar la cantidad, su ubicación en un tiempo o espacio determinado, etc.), y pueden ir en diferentes posiciones en una oración.
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido
      h2 1.1 #[i Qualifying adjectives]
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img1.png', style="width: 450px").m-auto
      .col-lg-8
        p Existen diferentes tipos de adjetivos, como son: calificativos, demostrativos, posesivos, etc. Los que verá a continuación son los #[b adjetivos calificativos] que son los que indican características físicas y/o de personalidad de personas, animales y cosas.
        p.mb-4 En esta categoría, se tienen tres tipos:
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 1]. Tipos de adjetivos
            figure
              img(src='@/assets/curso/tema1/img2.svg', style="width: 500px")
    .row.bg-color2.mb-5
      .col-12.p-5
        p.mb-5 Los comparativos y superlativos se verán en un nivel superior de aprendizaje de inglés, pero es importante que pueda reconocerlos. Inicialmente, #[b se aborda el uso de los adjetivos absolutos]:
        p.text-center.mb-5 #[b #[i.txt-color2 Listen and repeat:]]
        .row.justify-content-center
          .col-10.col-lg-4.bg-color3.p-4
            figure.mb-3
              img(src='@/assets/curso/tema1/img3.svg', style="width: 100px").m-auto
            TarjetaAudio.color-primario.mb-3(
              texto="<em>She is a cool girl</em>."
              :audio="require('@/assets/curso/tema1/audio1.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ms-3 Ella es una chica genial.
          .col-10.col-lg-4.bg-color3.p-4
            figure.mb-3
              img(src='@/assets/curso/tema1/img4.svg', style="width: 275px").m-auto
            TarjetaAudio.color-primario.mb-3(
              texto="<em>Firulais is a mischievous dog</em>."
              :audio="require('@/assets/curso/tema1/audio2.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ms-3 Firulais es un perro travieso.
    .row.justify-content-center.mb-5
      .col-lg-10
        .row.align-items-center
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img5.svg', style="width: 500px").m-auto
          .col-lg-8
            p.mb-0 En español, los adjetivos calificativos varían en género y número. En inglés, los adjetivos calificativos tienen una sola forma, que es invariable (no varían ni en número ni en género).
    p.text-center.mb-5 #[b #[i.txt-color1 Listen and repeat:]]
    .row.justify-content-center.mb-5
      .col-10.col-lg.p-4
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema1/img2.png', style="width: 500px").m-auto
        .row.bg-color4
          .col-12.p-4
            TarjetaAudio.color-primario.mb-3(
              texto="<em>She is sick</em>."
              :audio="require('@/assets/curso/tema1/audio3.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ms-3 Ella está enferma.
      .col-10.col-lg.p-4
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema1/img3.png', style="width: 500px").m-auto
        .row.bg-color4
          .col-12.p-4
            TarjetaAudio.color-primario.mb-3(
              texto="<em>He is sick</em>."
              :audio="require('@/assets/curso/tema1/audio4.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ms-3 Él está enfermo.
      .col-10.col-lg.p-4
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema1/img4.png', style="width: 500px").m-auto
        .row.bg-color4
          .col-12.p-4
            TarjetaAudio.color-primario.mb-3(
              texto="<em>The girls are sick</em>."
              :audio="require('@/assets/curso/tema1/audio5.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ms-3 Las niñas están enfermas.
      .col-10.col-lg.p-4
        .row
          .col-12.px-0
            figure
              img(src='@/assets/curso/tema1/img5.png', style="width: 500px").m-auto
        .row.bg-color4
          .col-12.p-4
            TarjetaAudio.color-primario.mb-3(
              texto="<em>The boys are sick</em>."
              :audio="require('@/assets/curso/tema1/audio6.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ms-3 Los niños están enfermos.
    p.mb-4 #[b #[i Where adjectives go in a sentence.]]
    p.mb-5 En inglés y español, usamos adjetivos para describir sustantivos. La mayoría de los adjetivos se pueden usar delante de un sustantivo, sin embargo, se deben tener en cuenta dos recomendaciones:
    .titulo-sexto.color-acento-contenido.mb-5
      p.mb-0 #[b Tabla 1]. Adjetivos para describir sustantivos
    .row.mb-4
      .col-lg-4.bg-color5.p-3
        figure
          img(src='@/assets/curso/tema1/img6.png', style="width: 300px").m-auto
      .col-lg-8.bg-color6.p-3
        p.mb-4 A diferencia del español, donde primero nombramos el sustantivo (lo que estamos describiendo) y luego los adjetivos (sus características), en inglés es al revés, primero nombramos los adjetivos y por último el sustantivo.
        p #[b #[i For example:]]
        .row.justify-content-center
          .col-10.col-lg.p-4
            TarjetaAudio.color-primario.mb-3(
              texto="<em>They have a new car</em>."
              :audio="require('@/assets/curso/tema1/audio7.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ms-3 Ellos tienen un carro nuevo.
          .col-10.col-lg.p-4
            TarjetaAudio.color-primario.mb-3(
              texto="<em>We prepared a delicious meal last night</em>."
              :audio="require('@/assets/curso/tema1/audio8.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ms-3 Nosotros preparamos una comida deliciosa anoche.
    .row.mb-5
      .col-lg-4.bg-color7.p-3
        figure
          img(src='@/assets/curso/tema1/img7.png', style="width: 300px").m-auto
      .col-lg-8.bg-color8.p-3
        p.mb-4 Usamos adjetivos después de un verbo de enlace como be, look o feel. Es decir, se sigue describiendo un sustantivo, pero para esto se usa el verbo de enlace y por eso cambia el orden de las palabras.
        p #[b #[i For example:]]
        .row.justify-content-center
          .col-10.col-lg.p-4
            TarjetaAudio.color-primario.mb-3(
              texto="<em>Their car <span>is</span> new</em>."
              :audio="require('@/assets/curso/tema1/audio9.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ms-3 Su carro #[b.txt-color1 es] nuevo.
          .col-10.col-lg.p-4
            TarjetaAudio.color-primario.mb-3(
              texto="<em>The food <span>looks</span> delicious</em>."
              :audio="require('@/assets/curso/tema1/audio10.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ms-3 La comida #[b.txt-color1 se ve] deliciosa.
    p.mb-4 #[b #[i Adjective order.]]
    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p.mb-4 En inglés, cuando antes de un sustantivo viene más de un adjetivo, los adjetivos normalmente están en un orden particular. Los adjetivos calificativos que describen opiniones o actitudes (por ejemplo, #[i “beautiful”], hermoso) suelen ir primero, antes de otros más neutrales y fácticos (por ejemplo, #[i “black”], negro):
        p.mb-4 #[b #[i For example:]]
        .row.mb-5
          .col-lg-5.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img6.svg', style="width: 300px").m-auto
          .col-lg-7
            TarjetaAudio.color-primario.mb-3(
              texto="<em>She bought a beautiful black <span>dress</span></em>."
              :audio="require('@/assets/curso/tema1/audio11.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-2.ms-3 Ella compró un #[b.txt-color1 vestido] negro hermoso.
            .row.align-items-center.ms-3
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img7.svg', style="width: 20px").m-auto
              .col
                p.mb-0.txt-color1 No: … black beautiful dress.
        .tarjeta.color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2
              img(src="@/assets/curso/tema1/img8.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Secuencia adjetivos
                  p.text-small Si no se quiere enfatizar ninguno de los adjetivos, la secuencia de adjetivos más habitual que puede seguir se muestra a continuación:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/Anexo1.pdf')" target="_blank")
                    span(style="color: black !important") Descargar
                    i.fas.fa-file-download(style="color: black !important")
      .col-lg-5
        figure
          img(src='@/assets/curso/tema1/img8.png', style="width: 500px").m-auto
    p.mb-5 De acuerdo con la tabla de secuencia, revise algunos ejemplos:
    .row.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img9.png', style="width: 500px").m-auto
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones.p-4(titulo="<em>Example 1</em>")
            h4 #[i Example 1]
            .row.align-items-center
              .col-lg-8.mb-4.mb-lg-0
                TarjetaAudio.color-primario.mb-3(
                  texto="It is made of a <span>rare, gray, plastic</span> material."
                  :audio="require('@/assets/curso/tema1/audio12.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-4.ms-3 Está hecho de un #[b.txt-color1 material] #[b.txt-color2 plástico, gris y raro].
                p.mb-0.ms-3 #[b #[i Rare]]: 1 → opinión.
                p.mb-0.ms-3 #[b #[i Gray]]: 6 → color.
                p.mb-0.ms-3 #[b #[i Plastic]]: 8 → material.
              .col-lg-4
                figure
                    img(src='@/assets/curso/tema1/img9.svg', style="width: 180px").m-auto
          .tarjeta.color-acento-botones.p-4(titulo="<em>Example 2</em>")
            h4 #[i Example 2]
            .row.align-items-center
              .col-lg-8.mb-4.mb-lg-0
                TarjetaAudio.color-primario.mb-3(
                  texto="It’s a <span>short, square, metallic</span> chair."
                  :audio="require('@/assets/curso/tema1/audio13.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-4.ms-3 Es una #[b.txt-color1 silla] #[b.txt-color2 metálica, pequeña y cuadrada].
                p.mb-0.ms-3 #[b #[i short]]: 2 → tamaño o talla.
                p.mb-0.ms-3 #[b #[i square]]: 4 → forma.
                p.mb-0.ms-3 #[b #[i metallic]]: 8 → material.
              .col-lg-4
                figure
                    img(src='@/assets/curso/tema1/img10.svg', style="width: 180px").m-auto
          .tarjeta.color-acento-botones.p-4(titulo="<em>Example 3</em>")
            h4 #[i Example 3]
            .row.align-items-center
              .col-lg-8.mb-4.mb-lg-0
                TarjetaAudio.color-primario.mb-3(
                  texto="Fugazzeta is an <span>Argentinian, pizza-like</span> dish."
                  :audio="require('@/assets/curso/tema1/audio14.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-4.ms-3 La fugazzeta es un #[b.txt-color1 plato] #[b.txt-color2 argentino, parecido a la pizza].
                p.mb-0.ms-3 #[b #[i Argentinian]]: 7 → origen o nacionalidad.
                p.mb-0.ms-3 #[b #[i pizza-like]]: 9 → tipo.
              .col-lg-4
                figure
                    img(src='@/assets/curso/tema1/img11.svg', style="width: 180px").m-auto
          .tarjeta.color-acento-botones.p-4(titulo="<em>Example 4</em>")
            h4 #[i Example 4]
            .row.align-items-center
              .col-lg-8.mb-4.mb-lg-0
                TarjetaAudio.color-primario.mb-3(
                  texto="He was a <span>handsome, tall, well-built, young, blond, French</span> man."
                  :audio="require('@/assets/curso/tema1/audio15.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-4.ms-3 Él era un #[b.txt-color1 hombre] #[b.txt-color2 francés, guapo, alto, fornido, joven y rubio].
                p.mb-0.ms-3 #[b #[i handsome]]: 1 → opinión.
                p.mb-0.ms-3 #[b #[i tall]]: 2 → tamaño o talla.
                p.mb-0.ms-3 #[b #[i well-built]]: 3 → cualidad física.
                p.mb-0.ms-3 #[b #[i young]]: 5 → edad o antigüedad.
                p.mb-0.ms-3 #[b #[i blond]]: 6 → color.
                p.mb-0.ms-3 #[b #[i French]]: 7 → origen o nacionalidad.
              .col-lg-4
                figure
                    img(src='@/assets/curso/tema1/img12.svg', style="width: 180px").m-auto
          .tarjeta.color-acento-botones.p-4(titulo="<em>Example 5</em>")
            h4 #[i Example 5]
            .row.align-items-center
              .col-lg-8.mb-4.mb-lg-0
                TarjetaAudio.color-primario.mb-3(
                  texto="This is an <span>amazing, big, old, English</span> teapot."
                  :audio="require('@/assets/curso/tema1/audio15.mp3')" **Falta audio16
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-4.ms-3 Esta es una #[b.txt-color2 increíble] #[b.txt-color1 tetera] #[b.txt-color2 inglesa, grande y antigua].
                p.mb-0.ms-3 #[b #[i amazing]]: 1 → opinión.
                p.mb-0.ms-3 #[b #[i big]]: 2 → tamaño o talla.
                p.mb-0.ms-3 #[b #[i old]]: 5 → edad o antigüedad.
                p.mb-0.ms-3 #[b #[i English]]: 7 → origen o nacionalidad.
              .col-lg-4
                figure
                    img(src='@/assets/curso/tema1/img12.svg', style="width: 180px").m-auto
    .row.mb-5
      .col-lg-4.bg-color7
        figure.mt-2
          img(src='@/assets/curso/tema1/img10.png', style="width: 250px").m-auto
      .col-lg-8.bg-color8.p-5
        .row.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/tema1/img14.svg', style="width: 40px").m-auto
          .col
            p.my-0.my-lg-5 A menudo, se agregan dos adjetivos delante de un sustantivo. En los ejemplos 4 y 5, hay frases con más adjetivos calificativos. Una frase que incluya todos los tipos de adjetivos calificativos es extremadamente rara.
    .row.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p En el orden de los adjetivos, se suele pensar como en español, que es normal cuando se describe un sustantivo que primero vaya este y después los adjetivos separados por comas, y antes del último adjetivo se ponga la conjunción "y".
        .row.justify-content-center.mb-4
          .col-lg-7.bg-color8.p-3
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img15.svg', style="width: 30px").m-auto
              .col
                p.mb-0 Tengo una #[b mesa grande, plateada y metálica].
        p Pero en inglés la norma es que se escriben primero los adjetivos, todos separados por comas, y al final el sustantivo. Sin la conjunción “y” (en inglés, #[i “and”])
        .row.justify-content-center
          .col-lg-7.bg-color8.p-3
            .row.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/img16.svg', style="width: 30px").m-auto
              .col
                p.mb-0 I have a #[b big, silver, metallic table].
      .col-lg-4.px-0
        figure
          img(src='@/assets/curso/tema1/img11.png', style="width: 550px").m-auto
    p.text-center.mb-5 Aun así, hay casos en los que en inglés sí se usa la conjunción #[b #[i “and”]] (y) para unir adjetivos calificativos:
    .row.justify-content-center.mb-5
      .col-10.col-lg.m-2.p-4.bg-color9
        figure.my-3
          img(src='@/assets/curso/tema1/img17.svg', style="width: 140px").m-auto
        p.text-white Cuando aparece más de un adjetivo después de un verbo como el verbo #[b #[i "to be"]] (un verbo de enlace). En este caso, el penúltimo adjetivo normalmente se conecta al último adjetivo por #[b #[i "and"]]:
        p.text-white.mb-4 #[b #[i For example:]]
        TarjetaAudio.color-primario.mb-3(
          texto="School was a warm, fun place. Now it is <span>depressing, gloomy</span> and <span>cold</span>."
          :audio="require('@/assets/curso/tema1/audio17.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
        p.text-white.mb-4.ms-3 La escuela era un lugar cálido y divertido. Ahora es #[b.txt-color3 deprimente, lúgubre y frío].
      .col-10.col-lg.m-2.p-4.bg-color10
        figure.my-3
          img(src='@/assets/curso/tema1/img18.svg', style="width: 140px").m-auto
        p #[i “And”] es menos común cuando más de un adjetivo viene antes del sustantivo (por ejemplo, #[i “a warm, welcoming place”], que significa “un lugar cálido y acogedor”). Sin embargo, es posible usar #[i “and”] cuando hay dos o más adjetivos del mismo tipo, o cuando los adjetivos se refieren a diferentes partes de la misma cosa:
        p.mb-4 #[b #[i For example:]]
        TarjetaAudio.color-primario.mb-3(
          texto="It is a <span>black</span> and <span>white, leather bag</span>."
          :audio="require('@/assets/curso/tema1/audio18.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
        p.mb-4.ms-3 Es un #[b.txt-color2 bolso] de #[b.txt-color2 cuero, blanco y negros].
    p.mb-4 #[b #[i Adjectives with ‘-ing’ and ‘-ed’.]]
    p.mb-5 Muchos adjetivos se forman a partir de verbos más las terminaciones -ing o –ed. Revise las características para cada uno de ellos:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Adjetivos terminados en <em>-ing</em>")
        .col-12
          .bg-color11.p-4
            p.mb-5 Algunos adjetivos terminados en #[i -ing] son: #[i boring] (aburrido), #[i disappointing] (decepcionante), #[i exciting] (emocionante), #[i interesting] (interesante), #[i terrifying] (aterrorizante), etc. Son adjetivos que, en español, generalmente se usarían para describir lo que es algo.
            .row.justify-content-center
              .col-lg-10
                .row
                  .col-lg-6
                    .row
                      .col-12.p-4.bg-color12
                        p.mb-0.text-center #[b Verbo]
                      .col-12.p-4.bg-color13
                        p.mb-4 #[i To interest] (interesar)
                        TarjetaAudio.color-primario.mb-3(
                          texto="This book <span>interests</span> me."
                          :audio="require('@/assets/curso/tema1/audio19.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Este libro me #[b.txt-color2 interesa].
                      .col-12.p-4.bg-color13
                        p.mb-4 #[i To terrify] (aterrorizar)
                        TarjetaAudio.color-primario.mb-3(
                          texto="This movie <span>terrifies</span> me."
                          :audio="require('@/assets/curso/tema1/audio21.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Esta película me #[b.txt-color2 aterroriza].
                      .col-12.p-4.bg-color13
                        p.mb-4 #[i To bore] (aburrir)
                        TarjetaAudio.color-primario.mb-3(
                          texto="This class <span>bores</span> me."
                          :audio="require('@/assets/curso/tema1/audio23.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Esta clase me #[b.txt-color2 aburre].
                  .col-lg-6
                    .row
                      .col-12.p-4.bg-color12
                        p.mb-0.text-center #[b Adjetivo]
                      .col-12.p-4.bg-color13
                        p.mb-4 #[i Interesting] (interesante)
                        TarjetaAudio.color-primario.mb-3(
                          texto="This book is <span>interesting</span>."
                          :audio="require('@/assets/curso/tema1/audio20.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Este libro es #[b.txt-color2 interesante].
                      .col-12.p-4.bg-color13
                        p.mb-4 #[i Terrifying] (aterrorizante)
                        TarjetaAudio.color-primario.mb-3(
                          texto="This movie is <span>terrifying</span>."
                          :audio="require('@/assets/curso/tema1/audio22.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Esta película es #[b.txt-color2 aterrorizante].
                      .col-12.p-4.bg-color13
                        p.mb-4 #[i Boring] (aburrido)
                        TarjetaAudio.color-primario.mb-3(
                          texto="This class is <span>boring</span>."
                          :audio="require('@/assets/curso/tema1/audio24.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Esta clase es #[b.txt-color2 aburrida].
      .row(titulo="Adjetivos terminados en <em>-ed</em>")
        .col-12
          .bg-color11.p-4
            p.mb-5 Algunos adjetivos terminados en #[i -ed] son: #[i bored] (aburrido), #[i disappointed] (decepcionado), #[i excited] (emocionado), #[i interested] (interesado), #[i terrified] (aterrorizado), etc. Son adjetivos que, en español, generalmente se usarían para describir el estado en el cual está algo.
            .row.justify-content-center
              .col-lg-10
                .row
                  .col-lg-6
                    .row
                      .col-12.p-4.bg-color12
                        p.mb-0.text-center #[b Verbo]
                      .col-12.p-4.bg-color13
                        p.mb-4 #[i To interest] (interesar)
                        TarjetaAudio.color-primario.mb-3(
                          texto="This book <span>interests</span> me."
                          :audio="require('@/assets/curso/tema1/audio25.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Este libro me #[b.txt-color2 interesa].
                      .col-12.p-4.bg-color13
                        p.mb-4 #[i To terrify] (aterrorizar)
                        TarjetaAudio.color-primario.mb-3(
                          texto="This movie <span>terrifies</span> me."
                          :audio="require('@/assets/curso/tema1/audio25.mp3')"  **Falta audio27
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Esta película me #[b.txt-color2 aterroriza].
                      .col-12.p-4.bg-color13
                        p.mb-4 #[i To bore] (aburrir)
                        TarjetaAudio.color-primario.mb-3(
                          texto="This class <span>bores</span> me."
                          :audio="require('@/assets/curso/tema1/audio25.mp3')"  **Falta audio29
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Esta clase me #[b.txt-color2 aburre].
                  .col-lg-6
                    .row
                      .col-12.p-4.bg-color12
                        p.mb-0.text-center #[b Adjetivo]
                      .col-12.p-4.bg-color13
                        p.mb-4 #[i Interested] (interesado)
                        TarjetaAudio.color-primario.mb-3(
                          texto="I am interested in this book."
                          :audio="require('@/assets/curso/tema1/audio26.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Estoy #[b.txt-color2 interesado] en este libro.
                      .col-12.p-4.bg-color13
                        p.mb-4 #[i Terrified] (aterrorizado)
                        TarjetaAudio.color-primario.mb-3(
                          texto="I am terrified because of this movie."
                          :audio="require('@/assets/curso/tema1/audio28.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Estoy #[b.txt-color2 aterrorizado] por esta película.
                      .col-12.p-4.bg-color13
                        p.mb-4 #[i Bored] (aburrido)
                        TarjetaAudio.color-primario.mb-3(
                          texto="I’m <span>bored</span> in this class."
                          :audio="require('@/assets/curso/tema1/audio30.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Estoy #[b.txt-color2 aburrido] en esta clase.
    p.mb-4 #[b #[i Vocabulary: physical appearance and personality. ]]
    p.mb-5 En español, los adjetivos calificativos varían en género y número; en inglés, los adjetivos calificativos tienen una sola forma, que es invariable (no varían ni en número ni en género). En la lista de términos, se va a interpretar cada uno en español en su #[b forma masculina-singular], pero se debe tener en cuenta que en español hay más formas.
    .row.justify-content-center.mb-5
      .col-10.col-lg.bg-color14.p-4
        figure.mb-3
          img(src='@/assets/curso/tema1/img19.svg', style="width: 275px").m-auto
        TarjetaAudio.color-primario.mb-3(
          texto="Sandra is a tall woman."
          :audio="require('@/assets/curso/tema1/audio31.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
        p.mb-0.ms-3 Sandra es una mujer #[b.txt-color1 alta].
      .col-10.col-lg.bg-color14.p-4
        figure.mb-3
          img(src='@/assets/curso/tema1/img20.svg', style="width: 275px").m-auto
        TarjetaAudio.color-primario.mb-3(
          texto="He is a tall man."
          :audio="require('@/assets/curso/tema1/audio32.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
        p.mb-0.ms-3 Él es un hombre #[b.txt-color1 alto].
      .col-10.col-lg.bg-color14.p-4
        figure.mb-3
          img(src='@/assets/curso/tema1/img21.svg', style="width: 275px").m-auto
        TarjetaAudio.color-primario.mb-3(
          texto="The girls are tall."
          :audio="require('@/assets/curso/tema1/audio33.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
        p.mb-0.ms-3 Las niñas son #[b.txt-color1 altas].
      .col-10.col-lg.bg-color14.p-4
        figure.mb-3
          img(src='@/assets/curso/tema1/img22.svg', style="width: 275px").m-auto
        TarjetaAudio.color-primario.mb-3(
          texto="The boys are tall."
          :audio="require('@/assets/curso/tema1/audio34.mp3')"
          @audio-hover="mostrarIndicadorTarjetaAudio = false"
        )
        p.mb-0.ms-3 Los niños son #[b.txt-color1 altos].
    p.mb-5 Ahora, revise cada uno de los términos para describir la apariencia física y la personalidad:
    .row.bg-color15.mb-5
      .col-12.px-5.py-3
        SlyderE(indicadores="derecha")
          .row.align-items-center.px-2
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0.text-white #[b Características corporales]
              p.mb-4.text-white #[b (#[i body features]):]
              p.mb-0.text-white #[i According to height]
              p.mb-0.text-white Según la altura
            .col-lg-6
              .row.justify-content-end
                .col-11.col-lg-5.bg-color16
                  .row.justify-content-center
                    .col-lg-8.bg-color11.p-4
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio35.mp3')")
                      p.text-center.mb-0 #[b #[i.txt-color1 Tall]]
                      p.text-center Alto
                .col-11.col-lg-5.bg-color17
                  .row.justify-content-center
                    .col-lg-8.bg-color11.p-4
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio36.mp3')")
                      p.text-center.mb-0 #[b #[i.txt-color1 Short]]
                      p.text-center Bajo
          .row.align-items-center.px-2
            .col-lg-4.mb-4.mb-lg-0
              p.mb-4.text-white #[b Características corporales (#[i body features]):]
              p.mb-0.text-white #[i According to attractiveness]
              p.mb-0.text-white Según el atractivo
            .col-lg-8
              .row.justify-content-end
                .col-11.col-lg-3.bg-color18
                  .row.justify-content-center
                    .col-lg-10.bg-color11.p-2
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio37.mp3')")
                      p.text-center.mb-0 #[b #[i.txt-color1 Pretty]]
                      p.text-center Lindo
                .col-11.col-lg-3.bg-color19
                  .row.justify-content-center
                    .col-lg-10.bg-color11.p-2
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio38.mp3')")
                      p.text-center.mb-0 #[b #[i.txt-color1 Handsome]]
                      p.text-center Guapo (usualmente, para describir a un hombre)
                .col-11.col-lg-3.bg-color20
                  .row.justify-content-center
                    .col-lg-10.bg-color11.p-2
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio39.mp3')")
                      p.text-center.mb-0 #[b #[i.txt-color1 Ugly]]
                      p.text-center Feo
          .row.align-items-center.px-2
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0.text-white #[b Características corporales]
              p.mb-4.text-white #[b (#[i body features]):]
              p.mb-0.text-white #[i According to age]
              p.mb-0.text-white Según la edad
            .col-lg-6
              .row.justify-content-end
                .col-11.col-lg-5.bg-color21
                  .row.justify-content-center
                    .col-lg-8.bg-color11.p-4
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio40.mp3')")
                      p.text-center.mb-0 #[b #[i.txt-color1 Young]]
                      p.text-center Joven
                .col-11.col-lg-5.bg-color22
                  .row.justify-content-center
                    .col-lg-8.bg-color11.p-4
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio36.mp3')"**Falta audio41)
                      p.text-center.mb-0 #[b #[i.txt-color1 Old]]
                      p.text-center Viejo
          .row.align-items-center.px-2
            .col-lg-6.mb-4.mb-lg-0
              p.mb-0.text-white #[b Características corporales]
              p.mb-4.text-white #[b (#[i body features]):]
              p.mb-0.text-white #[i According to weight]
              p.mb-0.text-white Según la peso
            .col-lg-6
              .row.justify-content-end
                .col-11.col-lg-5.bg-color23
                  .row.justify-content-center
                    .col-lg-8.bg-color11.p-4
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio41.mp3')")
                      p.text-center.mb-0 #[b #[i.txt-color1 Fat]]
                      p.text-center Gordo
                .col-11.col-lg-5.bg-color24
                  .row.justify-content-center
                    .col-lg-8.bg-color11.p-4
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio42.mp3')")
                      p.text-center.mb-0 #[b #[i.txt-color1 Thin]]
                      p.text-center Flaco
          .row.align-items-center.px-2
            .col-lg-4.mb-4.mb-lg-0
              p.mb-4.text-white #[b Características corporales (#[i body features]):]
              p.mb-0.text-white #[i According to hair type]
              p.mb-0.text-white Según el tipo de cabello
            .col-lg-8
              .row.justify-content-end
                .col-11.col-lg-3.bg-color25
                  .row.justify-content-center
                    .col-lg-10.bg-color11.p-2
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio43.mp3')")
                      p.text-center.mb-0 #[b #[i.txt-color1 Straight]]
                      p.text-center Liso
                .col-11.col-lg-3.bg-color26
                  .row.justify-content-center
                    .col-lg-10.bg-color11.p-2
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio44.mp3')")
                      p.text-center.mb-0 #[b #[i.txt-color1 Wavy]]
                      p.text-center Ondulado
                .col-11.col-lg-3.bg-color27
                  .row.justify-content-center
                    .col-lg-10.bg-color11.p-2
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio45.mp3')")
                      p.text-center.mb-0 #[b #[i.txt-color1 Curly]]
                      p.text-center Rizado
          .row.align-items-center.px-2
            .col-lg-4.mb-4.mb-lg-0
              p.mb-4.text-white #[b Características corporales (#[i body features]):]
              p.mb-0.text-white #[i According to hair color]
              p.mb-0.text-white Según el color de cabello
            .col-lg-8
              .row.justify-content-end
                .col-11.col-lg.bg-color28
                  .row.justify-content-center
                    .col-lg-10.bg-color11.p-2
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio46.mp3')")
                      p.text-center.mb-0 #[b #[i.txt-color1 Black haired]]
                      p.text-center De cabello negro
                .col-11.col-lg.bg-color29
                  .row.justify-content-center
                    .col-lg-10.bg-color11.p-2
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio47.mp3')")
                      p.text-center.mb-0 #[b #[i.txt-color1 Brunette]]
                      p.text-center Castaño
                .col-11.col-lg.bg-color30
                  .row.justify-content-center
                    .col-lg-10.bg-color11.p-2
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio48.mp3')")
                      p.text-center.mb-0 #[b #[i.txt-color1 Blond]]
                      p.text-center Rubio
                .col-11.col-lg.bg-color31
                  .row.justify-content-center
                    .col-lg-10.bg-color11.p-2
                      Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio49.mp3')")
                      p.text-center.mb-0 #[b #[i.txt-color1 Red haired]]
                      p.text-center Pelirrojo
    p.mb-4 #[b Describir la personalidad]
    p.mb-5 A continuación, se enuncian términos para describir comportamiento (#[i behavior]), carácter (#[i character]) y estado de ánimo (#[i mood]):
    SlyderF(columnas="col-lg-6 col-xl-3").justify-content-center
      .col-11.col-lg.bg-color32
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio50.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Friendly]]
            p.text-center Amistoso
      .col-11.col-lg.bg-color33
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio51.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Unfriendly]]
            p.text-center Antipático
      .col-11.col-lg.bg-color34
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio52.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Nice]]
            p.text-center Amable / agradable
      .col-11.col-lg.bg-color35
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio49.mp3')"**Falta audio53)
            p.text-center.mb-0 #[b #[i.txt-color1 Unpleasant]]
            p.text-center Desagradable
      .col-11.col-lg.bg-color36
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio54.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Responsible]]
            p.text-center Responsable
      .col-11.col-lg.bg-color37
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio54.mp3')"**Falta audio55)
            p.text-center.mb-0 #[b #[i.txt-color1 Irresponsible]]
            p.text-center Irresponsable
      .col-11.col-lg.bg-color38
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio56.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Humble]]
            p.text-center Humilde
      .col-11.col-lg.bg-color39
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio56.mp3')"**Falta audio57)
            p.text-center.mb-0 #[b #[i.txt-color1 Responsible]]
            p.text-center Responsable
      .col-11.col-lg.bg-color40
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio58.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Arrogant]]
            p.text-center Arrogante
      .col-11.col-lg.bg-color41
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio59.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Patient]]
            p.text-center Paciente
      .col-11.col-lg.bg-color42
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio60.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Impatient]]
            p.text-center Impaciente
      .col-11.col-lg.bg-color43
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio61.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Calm]]
            p.text-center Tranquilo
      .col-11.col-lg.bg-color44
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio62.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Nervous]]
            p.text-center Nervioso
      .col-11.col-lg.bg-color45
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio63.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Brave]]
            p.text-center Valiente
      .col-11.col-lg.bg-color46
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio64.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Coward]]
            p.text-center Cobarde
      .col-11.col-lg.bg-color47
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio65.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Generous]]
            p.text-center Generoso
      .col-11.col-lg.bg-color48
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio66.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Stingy]]
            p.text-center Tacaño
      .col-11.col-lg.bg-color49
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio67.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Greedy]]
            p.text-center Avaro
      .col-11.col-lg.bg-color50
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio68.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Charitable]]
            p.text-center Caritativo
      .col-11.col-lg.bg-color51
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio69.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Unpretentious]]
            p.text-center Modesto / sin pretensiones
      .col-11.col-lg.bg-color52
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio70.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Vain]]
            p.text-center Vanidoso
      .col-11.col-lg.bg-color53
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio71.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Happy]]
            p.text-center Feliz
      .col-11.col-lg.bg-color54
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio72.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Sad]]
            p.text-center Triste
      .col-11.col-lg.bg-color55
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio73.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Energetic]]
            p.text-center Enérgico
      .col-11.col-lg.bg-color56
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio73.mp3')"**Falta audio74)
            p.text-center.mb-0 #[b #[i.txt-color1 Tired]]
            p.text-center Cansado
      .col-11.col-lg.bg-color57
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio75.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Awake]]
            p.text-center Despierto
      .col-11.col-lg.bg-color58
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio76.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Sleepy]]
            p.text-center Somnoliento
      .col-11.col-lg.bg-color59
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio77.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Relaxed]]
            p.text-center Relajado
      .col-11.col-lg.bg-color60
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio78.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Stressed]]
            p.text-center Estresado
      .col-11.col-lg.bg-color61
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio79.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Outgoing]]
            p.text-center Extrovertido
      .col-11.col-lg.bg-color62
        .row.justify-content-center
          .col-lg-10.bg-color11.p-2
            Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema1/audio80.mp3')")
            p.text-center.mb-0 #[b #[i.txt-color1 Introvert]]
            p.text-center Introvertido
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido
      h2 1.2 #[i Demonstrative adjectives]
    p Un adjetivo demostrativo es un adjetivo que se usa para señalar específicamente la posición de algo o alguien en el espacio o en el tiempo. Los adjetivos demostrativos más utilizados son #[i this], #[i that], #[i these] y #[i those].
    p.mb-5 Revise a continuación las particularidades de uso, ejemplos y gramática:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
