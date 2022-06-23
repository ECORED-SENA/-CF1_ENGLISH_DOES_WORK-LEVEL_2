<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF") 2
      h1 #[i What is an adverb?]
    .row
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img1.png', style="width: 450px").m-auto
      .col-lg-8
        p Los adverbios son una de las cuatro clases principales de palabras gramaticales, junto con los sustantivos, los verbos y los adjetivos. Son palabras que usamos dentro de una oración para modificar verbos, adjetivos y otros adverbios. Su labor es ofrecer más información acerca del elemento que acompañan y modifican.
        .row.justify-content-center
          .col-lg-10
            p #[b #[i.txt-color1 For example:]]
            .row
              .col-11.bg-color63
                .p-4
                  p.mb-0 #[b #[i.txt-color1 She reads slowly at school.]]
                  p.mb-5 Ella lee despacio en la escuela.
                  p.mb-0 #[b * #[i “slowly”]] es el adverbio que califica al verbo #[b #[i “read”]].
              .col-1
                .fig-deco1.d-none.d-lg-block
                  figure
                    img(src='@/assets/curso/tema2/img1.svg').m-auto
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.1 #[i Adverbs of intensity]
    p.mb-5 Los adverbios de intensidad (#[i adverbs of intensity]), también llamados adverbios de grado (#[i adverbs of degree]) o intensificadores (#[i intensifiers]) nos hablan de la intensidad de algo. Los adverbios de intensidad suelen colocarse antes de la palabra gramatical (sea un adjetivo, un adverbio o un verbo) que modifican, aunque hay ciertas excepciones.
    .row.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img2.png', style="width: 550px").m-auto
      .col-lg-7
        p Las palabras #[b #[i “too”]], #[b #[i “enough”]], #[b #[i “very”]], y #[b #[i “extremely”]] son ejemplos de adverbios de grado.
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 2]. Intensidad de adverbios
        figure
          img(src='@/assets/curso/tema2/img2.svg', style="width: 480px")
    p.mb-5 A continuación, verifique el adverbio con un ejemplo. Escuche y repita:
    .tarjeta.tarjeta--azul.p-4
      SlyderA(tipo="b")
        .row.px-2.justify-content-center
          .col-12
            .row.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/img3.png', style="width: 360px").m-auto
              .col-lg-8
                .bg-color11.shadow-sm.p-4
                  .row.align-items-center
                    .col-lg-7.p-4
                      p.text-center #[i Adverb of degree] / Adverbio de grado
                      p.text-center #[b.txt-color1 #[i really]]
                      p.text-center #[i Meaning] / Significado
                      p.text-center #[b.txt-color1 #[i realmente]]
                      p.text-center #[i Example] / Ejemplo
                      TarjetaAudio.color-primario.mb-3(
                        texto="<em>This restaurant is really elegant</em>."
                        :audio="require('@/assets/curso/tema2/audio1.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ms-3 Este restaurante es #[b.txt-color1 realmente] elegante.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema2/img3.svg', style="width: 220px").m-auto
        .row.px-2.justify-content-center
          .col-12
            .row.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/img3.png', style="width: 360px").m-auto
              .col-lg-8
                .bg-color11.shadow-sm.p-4
                  .row.align-items-center
                    .col-lg-7.p-4
                      p.text-center #[i Adverb of degree] / Adverbio de grado
                      p.text-center #[b.txt-color1 #[i very]]
                      p.text-center #[i Meaning] / Significado
                      p.text-center #[b.txt-color1 #[i muy]]
                      p.text-center #[i Example] / Ejemplo
                      TarjetaAudio.color-primario.mb-3(
                        texto="<em>He is very thin</em>."
                        :audio="require('@/assets/curso/tema2/audio2.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ms-3 Él es #[b.txt-color1 muy] flaco.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema2/img4.svg', style="width: 220px").m-auto
        .row.px-2.justify-content-center
          .col-12
            .row.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/img3.png', style="width: 360px").m-auto
              .col-lg-8
                .bg-color11.shadow-sm.p-4
                  .row.align-items-center
                    .col-lg-7.p-4
                      p.text-center #[i Adverb of degree] / Adverbio de grado
                      p.text-center #[b.txt-color1 #[i extremely]]
                      p.text-center #[i Meaning] / Significado
                      p.text-center #[b.txt-color1 #[i extremadamente]]
                      p.text-center #[i Example] / Ejemplo
                      TarjetaAudio.color-primario.mb-3(
                        texto="<em>The coffee was extremely hot</em>."
                        :audio="require('@/assets/curso/tema2/audio3.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ms-3 El café estaba #[b.txt-color1 extremadamente] caliente.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema2/img5.svg', style="width: 220px").m-auto
        .row.px-2.justify-content-center
          .col-12
            .row.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/img3.png', style="width: 360px").m-auto
              .col-lg-8
                .bg-color11.shadow-sm.p-4
                  .row.align-items-center
                    .col-lg-7.p-4
                      p.text-center #[i Adverb of degree] / Adverbio de grado
                      p.text-center #[b.txt-color1 #[i quite]]
                      p.text-center #[i Meaning] / Significado
                      p.text-center #[b.txt-color1 #[i bastante]]
                      p.text-center #[i Example] / Ejemplo
                      TarjetaAudio.color-primario.mb-3(
                        texto="<em>That book is quite different</em>."
                        :audio="require('@/assets/curso/tema2/audio4.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ms-3 Ese libro es #[b.txt-color1 bastante] diferente.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema2/img6.svg', style="width: 220px").m-auto
        .row.px-2.justify-content-center
          .col-12
            .row.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/img3.png', style="width: 360px").m-auto
              .col-lg-8
                .bg-color11.shadow-sm.p-4
                  .row.align-items-center
                    .col-lg-7.p-4
                      p.text-center #[i Adverb of degree] / Adverbio de grado
                      p.text-center #[b.txt-color1 #[i a bit]]
                      p.text-center #[i Meaning] / Significado
                      p.text-center #[b.txt-color1 #[i un poco]]
                      p.text-center #[i Example] / Ejemplo
                      TarjetaAudio.color-primario.mb-3(
                        texto="<em>The hall is a bit narrow</em>."
                        :audio="require('@/assets/curso/tema2/audio5.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ms-3 El pasillo es #[b.txt-color1 un poco] estrecho.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema2/img7.svg', style="width: 220px").m-auto
        .row.px-2.justify-content-center
          .col-12
            .row.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/img3.png', style="width: 360px").m-auto
              .col-lg-8
                .bg-color11.shadow-sm.p-4
                  .row.align-items-center
                    .col-lg-7.p-4
                      p.text-center #[i Adverb of degree] / Adverbio de grado
                      p.text-center #[b.txt-color1 #[i almost]]
                      p.text-center #[i Meaning] / Significado
                      p.text-center #[b.txt-color1 #[i casi]]
                      p.text-center #[i Example] / Ejemplo
                      TarjetaAudio.color-primario.mb-3(
                        texto="<em>The suitcase weighs almost 10 kilograms</em>."
                        :audio="require('@/assets/curso/tema2/audio6.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ms-3 La maleta pesa #[b.txt-color1 casi] 10 kilogramos.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema2/img8.svg', style="width: 220px").m-auto
        .row.px-2.justify-content-center
          .col-12
            .row.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/img3.png', style="width: 360px").m-auto
              .col-lg-8
                .bg-color11.shadow-sm.p-4
                  .row.align-items-center
                    .col-lg-7.p-4
                      p.text-center #[i Adverb of degree] / Adverbio de grado
                      p.text-center #[b.txt-color1 #[i too]]
                      p.text-center #[i Meaning] / Significado
                      p.text-center #[b.txt-color1 #[i Demasiado]]
                      p.text-center #[i Example] / Ejemplo
                      TarjetaAudio.color-primario.mb-3(
                        texto="<em>He is too friendly</em>."
                        :audio="require('@/assets/curso/tema2/audio7.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ms-3 Ella es #[b.txt-color1 demasiado] amigable.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema2/img9.svg', style="width: 220px").m-auto
        .row.px-2.justify-content-center
          .col-12
            .row.align-items-center
              .col-lg-4.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema2/img3.png', style="width: 360px").m-auto
              .col-lg-8
                .bg-color11.shadow-sm.p-4
                  .row.align-items-center
                    .col-lg-7.p-4
                      p.text-center #[i Adverb of degree] / Adverbio de grado
                      p.text-center #[b.txt-color1 #[i enough]]
                      p.text-center #[i Meaning] / Significado
                      p.text-center #[b.txt-color1 #[i suficiente]]
                      p.text-center #[i Example] / Ejemplo
                      TarjetaAudio.color-primario.mb-3(
                        texto="<em>Fast food is not good enough for them</em>."
                        :audio="require('@/assets/curso/tema2/audio8.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ms-3 La comida rápida no es lo #[b.txt-color1 suficientemente] buena para ellos.
                    .col-lg-5
                      figure
                        img(src='@/assets/curso/tema2/img10.svg', style="width: 220px").m-auto
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido
      h2 2.2 #[i Use and differences between “really” and “very”]
    p.mb-5 Tanto #[i “really”] como #[i “very”] son adverbios de intensidad y ambos se usan para enfatizar, para intensificar lo que se está diciendo. Revise cada caso:
    .row.pt-3.mb-5
      .col-12.col-lg.mb-5.mb-lg-0
        .p-4.bg-color8
          .fig-deco2
            .row.justify-content-center
              .col-6.bg-color65.px-4.py-3
                h3.text-center.text-white.mb-0 #[i Really]
          figure.pb-5
            img(src='@/assets/curso/tema2/img11.svg', style="width: 370px").m-auto
          p Se usa para modificar adjetivos, verbos u otros adverbios.
          p.mb-5 #[b #[i For example, listen and repeat]]:
          TarjetaAudio.color-primario.mb-3(
            texto="<em>We think this job is <span>really</span> interesting</em>."
            :audio="require('@/assets/curso/tema2/audio9.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-2.ms-3 Nosotros creemos que este trabajo es #[b.txt-color2 realmente] #[b.txt-color1 #[u interesante]].
          .row.align-items-center.ms-3.mb-5
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img13.svg', style="width: 20px").m-auto
            .col
              p.mb-0 #[b Modifica un adjetivo]
          TarjetaAudio.color-primario.mb-3(
            texto="<em>She walks <span>really</span> slowly</em>."
            :audio="require('@/assets/curso/tema2/audio10.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-2.ms-3 Ella camina #[b.txt-color2 realmente] #[b.txt-color1 #[u despacio]].
          .row.align-items-center.ms-3.mb-5
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img13.svg', style="width: 20px").m-auto
            .col
              p.mb-0 #[b Modifica un adverbio]
          TarjetaAudio.color-primario.mb-3(
            texto="<em>You <span>really</span> enjoy Sundays</em>."
            :audio="require('@/assets/curso/tema2/audio11.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-2.ms-3 Tú #[b.txt-color2 realmente] #[b.txt-color1 #[u disfrutas]] los domingos.
          .row.align-items-center.ms-3
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img13.svg', style="width: 20px").m-auto
            .col
              p.mb-0 #[b Modifica un verbo]
      .col-12.col-lg
        .p-4.bg-color64
          .fig-deco2
            .row.justify-content-center
              .col-6.bg-color65.px-4.py-3
                h3.text-center.text-white.mb-0 #[i Very]
          figure.pb-5
            img(src='@/assets/curso/tema2/img12.svg', style="width: 370px").m-auto
          p.text-white Se usa para modificar adjetivos y adverbios (¡pero no verbos!):
          p.mb-5.text-white #[b #[i For example, listen and repeat]]:
          TarjetaAudio.color-primario.mb-3(
            texto="<em>We think this job is <span>very</span> interesting</em>."
            :audio="require('@/assets/curso/tema2/audio12.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-2.ms-3.text-white Creemos que este trabajo es #[b.txt-color3 muy interesante].
          .row.align-items-center.ms-3.mb-5
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img13.svg', style="width: 20px").m-auto
            .col
              p.mb-0.text-white #[b Modifica un adjetivo]
          TarjetaAudio.color-primario.mb-3(
            texto="<em>She walks <span>very</span> slowly</em>."
            :audio="require('@/assets/curso/tema2/audio13.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-2.ms-3.text-white Ella camina #[b.txt-color3 muy despacio].
          .row.align-items-center.ms-3.mb-5
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img13.svg', style="width: 20px").m-auto
            .col
              p.mb-0.text-white #[b Modifica un adverbio]
          TarjetaAudio.color-primario.mb-3(
            texto="<em>I <span>very</span> enjoy my job</em>."
            :audio="require('@/assets/curso/tema2/audio14.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-2.ms-3.text-white (Esta oración no tiene sentido si se usa #[b.txt-color3 “very”] antes del verbo).
          .row.align-items-center.ms-3
            .col-auto
              figure
                img(src='@/assets/curso/tema2/img14.svg', style="width: 20px").m-auto
            .col
              p.mb-0.text-white #[b NO modifica un verbo]
    .row
      .col-lg-4.p-5.bg-color8
        figure.mb-4
          img(src='@/assets/curso/tema2/img15.svg', style="width: 70px").m-auto
        p.mb-0 Si se está hablando de una acción, ¡se debe evitar usar #[b “very”]!
      .col-lg-4.bg-color66
        .fig-deco3
          figure
            img(src='@/assets/curso/tema2/img4.png', style="width: 310px")
      .col-lg-4.p-5.bg-color67
        figure.mb-4
          img(src='@/assets/curso/tema2/img16.svg', style="width: 70px").m-auto
        p.mb-0 Después de un pronombre personal (#[i I, you, he, she, it, we, they]) o un sustantivo que funcione como sujeto, no es posible usar #[b #[i “very”]], se debe usar #[b #[i “really”]].
      .col-12.bg-color6.p-4
        p.text-center.mb-5 #[b #[i For example:]]
        .row.justify-content-center
          .col-10
            .row
              .col-12.col-lg
                TarjetaAudio.color-primario.mb-3(
                  texto="<em>I really <span>love</span> singing</em>."
                  :audio="require('@/assets/curso/tema2/audio15.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-5.ms-3 Yo realmente #[b.txt-color1 amo] cantar.
              .col-12.col-lg
                TarjetaAudio.color-primario.mb-3(
                  texto="<em>They really <span>want</span> to drink wine</em>."
                  :audio="require('@/assets/curso/tema2/audio16.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-5.ms-3 Ellos realmente #[b.txt-color1 quieren] beber vino.
              .col-12.col-lg
                TarjetaAudio.color-primario.mb-3(
                  texto="<em>Sandra really <span>enjoys</span> her job</em>."
                  :audio="require('@/assets/curso/tema2/audio17.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 Sandra realmente #[b.txt-color1 disfruta] su trabajo.

</template>

<script>
export default {
  name: 'Tema2',
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
