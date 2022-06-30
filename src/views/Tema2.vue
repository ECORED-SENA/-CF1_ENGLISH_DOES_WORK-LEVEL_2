<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF") 2
      h1 Introducción a las #[i WH questions]
    .row.align-items-end.bg-color3.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure.fig-position3
          img(src='@/assets/curso/tema2/img1.png', style="width: 450px").m-auto
      .col-lg-8
        p Las WH questions son palabras que piden información al interlocutor o al lector, según el caso. Se caracterizan porque incluyen en su construcción las letras W, H (todas empiezan por Wh-, a excepción de #[b #[i.txt-color1 “How?”]] -¿Cómo?).
        p.mb-lg-5 A diferencia de las preguntas cerradas, de las cuales solo se espera como respuesta  “sí” o “no”, las #[b #[i.txt-color1 WH- questions]] exigen a quien responde una información o dato en particular.
        p.mb-4.txt-color4 Se pueden encontrar diferentes WH questions en inglés y cada una de ellas va a pedir información específica (como en el caso de #[b #[i.txt-color3 “Where?”]], -¿Dónde?-, que pide una ubicación) dependiendo de cuál se use en la pregunta.
    p.mb-5.text-center #[b #[i Las Wh- questions son:]]
    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1]. #[i Wh- questions]
    .row.justify-content-center.mb-5
      .col-lg-6.p-4.bg-color4
        .row
          .col-lg-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema2/img2.svg', style="width: 350px").m-auto 
          .col-lg-8
            table(style="border:hidden")
              thead
                tr
                  th(style="border:hidden")
                    figure.ms-4
                      img(src='@/assets/curso/tema2/img3.svg', style="width: 30px")
                  th(style="border:hidden")
                    figure.ms-4
                      img(src='@/assets/curso/tema2/img4.svg', style="width: 30px")
              tbody
                tr(style="background-color: white")
                  td #[b #[i.txt-color1 When? /wen/]]
                  td(style="border:hidden") ¿Cuándo?
                tr
                  td #[b #[i.txt-color1 What? /wɒt/]]
                  td(style="border:hidden") ¿Qué / Cuál?
                tr(style="background-color: white")
                  td #[b #[i.txt-color1 Who? /huː/]]
                  td(style="border:hidden") ¿Quién?
                tr
                  td #[b #[i.txt-color1 Where? /wɛər/]]
                  td(style="border:hidden") ¿Dónde?
                tr(style="background-color: white")
                  td #[b #[i.txt-color1 Why? /waɪ/]]
                  td(style="border:hidden") ¿Por qué?
                tr
                  td #[b #[i.txt-color1 Which? /wɪtʃ/]]
                  td(style="border:hidden") ¿Cuál / Cuáles?
                tr(style="background-color: white")
                  td #[b #[i.txt-color1 Whose? /huːz/]]
                  td(style="border:hidden") ¿De quién?
                tr
                  td #[b #[i.txt-color1 How? /haʊ/]]
                  td(style="border:hidden") ¿Cómo?
          .col-12
            TarjetaAudio.color-primario.mt-4(
              texto="When?, What?, Who?, Where?, Why?, Which?, Whose?, How?"
              :audio="require('@/assets/curso/tema2/audio7.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
    .row.bg-color5.mb-5
      .col-lg-8.mb-4.mb-lg-0
        p.mb-4 En general, la estructura de las preguntas informativas es la siguiente:
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 2]. Estructura básica
        .tabla1
          table(style="min-width: 700px;")
            thead
              tr.tablat
                th.text-center WH word
                th.text-center Auxiliar
                th.text-center Sujeto
                th.text-center Verbo
                th.text-center Complemento
                th.text-center ?
                th
            tbody
              tr.tablar
                td.text-center #[b #[i.txt-color1 What]]
                td.text-center #[b #[i.txt-color1 do]]
                td.text-center #[b #[i.txt-color1 you]]
                td.text-center #[b #[i.txt-color1 buy]]
                td.text-center #[b #[i.txt-color1 in the mall]]
                td.text-center #[b #[i.txt-color1 ?]]
                td.text-center
                  Audio.color-primario.mx-3(
                    :audio="require('@/assets/curso/tema2/audio1.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
              tr.tablar
                td.text-center #[b #[i.txt-color1 Where]]
                td.text-center #[b #[i.txt-color1 does]]
                td.text-center #[b #[i.txt-color1 she]]
                td.text-center #[b #[i.txt-color1 go]]
                td.text-center #[b #[i.txt-color1 on weekends]]
                td.text-center #[b #[i.txt-color1 ?]]
                td.text-center
                  Audio.color-primario.mx-3(
                    :audio="require('@/assets/curso/tema2/audio2.mp3')"
                    @audio-hover="mostrarIndicadorAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorAudio")
      .col-lg-4 
        figure
          img(src='@/assets/curso/tema2/img5.svg', style="width: 350px").m-auto
    p.text-center.mb-4 Ahora, revise el uso de #[i “Where”] como pregunta por un #[b #[u.txt-color1 lugar]] o una #[b #[u.txt-color1 ubicación]] según el contexto de la pregunta.
    p.text-center.mb-5 Hacer la pregunta ¿dónde?
    .row.bg-color6
      .col-12.px-5
        .row.align-items-end
          .col-lg-4.mb-4.mb-lg-0
            figure.d-none.d-lg-block
              img(src='@/assets/curso/tema2/img2.png', style="width: 470px").m-auto
            figure.mt-4.mt-lg-0.d-block.d-lg-none
              img(src='@/assets/curso/tema2/img3.png', style="width: 350px").m-auto
          .col-lg-8
            p.text-center.txt-color5.mb-4.mb-lg-5 #[b #[i For example:]]
            .row.justify-content-center
              .col-11.col-lg-6.mb-4
                .tarjeta-avatar
                  img(src='@/assets/curso/tema2/img7.svg' alt='AvatarTop').m-auto
                  .tarjeta.color-primario
                    .p-4.mt-4
                      TarjetaAudio.color-primario.mb-3(
                        texto="Where do you put your shoes?"
                        :audio="require('@/assets/curso/tema2/audio3.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ms-3 ¿Dónde pones tus zapatos?
              .col-11.col-lg-6.mb-4
                .tarjeta-avatar
                  img(src='@/assets/curso/tema2/img8.svg' alt='AvatarTop').m-auto
                  .tarjeta.color-primario
                    .p-4.mt-4
                      TarjetaAudio.color-primario.mb-3(
                        texto="Where do you go on vacation?"
                        :audio="require('@/assets/curso/tema2/audio4.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ms-3 ¿Dónde vas de vacaciones?
              .col-11.col-lg-6.mb-4
                .tarjeta-avatar
                  img(src='@/assets/curso/tema2/img9.svg' alt='AvatarTop').m-auto
                  .tarjeta.color-primario
                    .p-4.mt-4
                      TarjetaAudio.color-primario.mb-3(
                        texto="Where do you study?"
                        :audio="require('@/assets/curso/tema2/audio5.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ms-3 ¿Dónde estudias?
              .col-11.col-lg-6.mb-4
                .tarjeta-avatar
                  img(src='@/assets/curso/tema2/img10.svg' alt='AvatarTop').m-auto
                  .tarjeta.color-primario
                    .p-4.mt-4
                      TarjetaAudio.color-primario.mb-3(
                        texto="Where is the apple?"
                        :audio="require('@/assets/curso/tema2/audio6.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                      p.mb-0.ms-3 ¿Dónde está la manzana?
    .row.bg-color7
      .col-12.px-5
        .p-4
          .row.align-items-center.justify-content-center
            .col-lg-3
              p.text-white #[b En este caso, la respuesta para la última pregunta sería:]
            .col-lg-6.p-4
              .row.align-items-center
                .col-lg.bg-color8.p-4.me-0.me-lg-5
                  TarjetaAudio.color-primario.mb-3.me-lg-5(
                    texto="The apple is between the boxes."
                    :audio="require('@/assets/curso/tema2/audio6.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  p.mb-0.ms-3 La manzana está entre las cajas.
                .col-lg-auto.d-none.d-lg-block
                  .fig-position4
                    figure
                      img(src='@/assets/curso/tema2/img11.svg', style="width: 70px").m-auto

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
