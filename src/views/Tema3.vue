<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF") 3
      h1 #[i What do I like and what do I not like?]
    .row.bg-color68.align-items-center
      .col-auto.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img1.svg', style="width: 150px").m-auto
      .col
        .p-4
          p.txt-color4.mb-0 A la hora de expresar gustos e interés el verbo más usado es el verbo #[b #[i.txt-color3 “to like”]] y es el primero que se debe aprender a conjugar. Pero hay otras expresiones que pueden sonar más naturales o coloquiales y son una buena alternativa al típico #[b #[i.txt-color3  “I like…”] (Me gusta…)].
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 4.1 #[i How to conjugate the verb “like” in the simple present tense]
    .row.align-items-end.mb-5
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img1.png', style="width: 380px").m-auto
      .col-lg-8
        p A veces, las personas hispano hablantes que están aprendiendo el idioma inglés tienen problemas con el verbo #[b “to like”] (gustar), debido a que en español, generalmente, se usa con un pronombre átono antes del verbo (me, te, le, nos, les) y no con un pronombre personal o un nombre propio, como en inglés, por ende, la estructura de la oración no coincide directamente entre el inglés y el español.
        p.text-center #[b #[i For example:]]
        .row.justify-content-center.mb-4
          .col-lg-6.bg-color69
            .p-4
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema3/img3.svg', style="width: 80px").m-auto
                .col
                  p.mb-0 #[b.txt-color1 Me] gusta leer libros de historia.
                  p.mb-0 #[b.txt-color1 #[u I like] to read history books.]
        p.mb-0 En este caso, lo importante es tener en cuenta que el verbo #[i “to like”] funciona como cualquier otro verbo en inglés y responde a la estructura de #[b “Sujeto + Verbo + Complemento”].
    p.text-center.mb-5 A continuación, va a ver la forma de conjugar el verbo #[i “to like”] (gustar) en el tiempo presente simple. Lea, escuche y repita:
    .row.mb-5
      .col-12
        .row
          .col-12.bg-color70
            .p-3
              p.text-center.text-white.mb-0 #[b Singular]
        .row
          .col-12.col-lg.bg-color71
            .p-3
              figure.d-none.d-lg-block.my-3
                img(src='@/assets/curso/tema3/img4.svg', style="width: 80px").m-auto
              p.text-center #[b.txt-color1 1st person]
              p.text-center #[b #[i Affirmative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>I like pizza</em>."
                :audio="require('@/assets/curso/tema3/audio1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-4.ms-3 Me gusta la pizza.
              p.text-center #[b #[i Negative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>I don’t like pizza</em>."
                :audio="require('@/assets/curso/tema3/audio2.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-4.ms-3 No me gusta la pizza.
              p.text-center #[b #[i Interrogative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Do I like pizza</em>?"
                :audio="require('@/assets/curso/tema3/audio3.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.ms-3 ¿Me gusta la pizza?
          .col-12.col-lg.bg-color71.mx-0.mx-lg-3
            .p-3
              figure.d-none.d-lg-block.my-3
                img(src='@/assets/curso/tema3/img4.svg', style="width: 80px").m-auto
              p.text-center #[b.txt-color1 2nd person]
              p.text-center #[b #[i Affirmative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>You like pizza</em>."
                :audio="require('@/assets/curso/tema3/audio4.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-4.ms-3 Te gusta la pizza.
              p.text-center #[b #[i Negative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>You don’t like pizza</em>."
                :audio="require('@/assets/curso/tema3/audio5.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-4.ms-3 No te gusta la pizza.
              p.text-center #[b #[i Interrogative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Do you like pizza</em>?"
                :audio="require('@/assets/curso/tema3/audio6.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.ms-3 ¿Te gusta la pizza?
          .col-12.col-lg.bg-color71
            .p-3
              figure.d-none.d-lg-block.my-3
                img(src='@/assets/curso/tema3/img4.svg', style="width: 80px").m-auto
              p.text-center #[b.txt-color1 3rd person]
              p.text-center #[b #[i Affirmative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>He likes pizza</em>."
                :audio="require('@/assets/curso/tema3/audio7.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-4.ms-3 Le gusta la pizza.
              p.text-center #[b #[i Negative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>He doesn’t like pizza</em>."
                :audio="require('@/assets/curso/tema3/audio8.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-4.ms-3 No le gusta la pizza.
              p.text-center #[b #[i Interrogative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Does he like pizza</em>?"
                :audio="require('@/assets/curso/tema3/audio9.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.ms-3 ¿Le gusta la pizza?
    .row.mb-5
      .col-12
        .row
          .col-12.bg-color72
            .p-3
              p.text-center.text-white.mb-0 #[b Singular]
        .row
          .col-12.col-lg.bg-color73
            .p-3
              figure.d-none.d-lg-block.my-3
                img(src='@/assets/curso/tema3/img5.svg', style="width: 80px").m-auto
              p.text-center #[b.txt-color2 1st person]
              p.text-center #[b #[i Affirmative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>We like pizza</em>."
                :audio="require('@/assets/curso/tema3/audio10.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-4.ms-3 Nos gusta la pizza.
              p.text-center #[b #[i Negative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>We don’t like pizza</em>."
                :audio="require('@/assets/curso/tema3/audio11.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-4.ms-3 No nos gusta la pizza.
              p.text-center #[b #[i Interrogative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Do we like pizza</em>?"
                :audio="require('@/assets/curso/tema3/audio12.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.ms-3 ¿Nos gusta la pizza?
          .col-12.col-lg.bg-color73.mx-0.mx-lg-3
            .p-3
              figure.d-none.d-lg-block.my-3
                img(src='@/assets/curso/tema3/img5.svg', style="width: 80px").m-auto
              p.text-center #[b.txt-color2 2nd person]
              p.text-center #[b #[i Affirmative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>You like pizza</em>."
                :audio="require('@/assets/curso/tema3/audio13.mp3')"**Falta audio13
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-4.ms-3 Les gusta la pizza.
              p.text-center #[b #[i Negative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>You don’t like pizza</em>."
                :audio="require('@/assets/curso/tema3/audio14.mp3')"**Falta audio14
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-4.ms-3 No les gusta la pizza.
              p.text-center #[b #[i Interrogative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Do you like pizza</em>?"
                :audio="require('@/assets/curso/tema3/audio15.mp3')"**Falta audio15
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.ms-3 ¿Les gusta la pizza?
          .col-12.col-lg.bg-color73
            .p-3
              figure.d-none.d-lg-block.my-3
                img(src='@/assets/curso/tema3/img5.svg', style="width: 80px").m-auto
              p.text-center #[b.txt-color2 3rd person]
              p.text-center #[b #[i Affirmative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>They like pizza</em>."
                :audio="require('@/assets/curso/tema3/audio16.mp3')"**Falta audio16
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-4.ms-3 Les gusta la pizza.
              p.text-center #[b #[i Negative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>They don’t like pizza</em>."
                :audio="require('@/assets/curso/tema3/audio17.mp3')"**Falta audio17
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.mb-4.ms-3 No les gusta la pizza.
              p.text-center #[b #[i Interrogative]]
              TarjetaAudio.color-primario.mb-3(
                texto="<em>Do they like pizza</em>?"
                :audio="require('@/assets/curso/tema3/audio18.mp3')"**Falta audio18
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
              p.ms-3 ¿Les gusta la pizza?
    .row
      .col-lg-4.p-5.bg-color8
        figure.mb-4
          img(src='@/assets/curso/tema3/img6.svg', style="width: 70px").m-auto
        p.mb-0 En el tiempo presente simple, la tercera persona singular #[b.txt-color2 #[i (he, she o it)]], a diferencia de las demás personas gramaticales, en frases afirmativas, el verbo termina en -s, y en frases negativas e interrogativas, se utiliza el auxiliar #[b #[i does]].
      .col-lg-4.bg-color66
        .fig-deco3
          figure
            img(src='@/assets/curso/tema3/img2.png', style="width: 310px")
      .col-lg-4.p-5.bg-color67
        figure.mb-4
          img(src='@/assets/curso/tema3/img7.svg', style="width: 70px").m-auto
        p.mb-0 En inglés, antes del verbo, va el sujeto de la oración, quien ejerce la acción, en este caso, la persona a la que le gusta algo, y después del verbo, va el objeto de la oración, sobre quien recae la consecuencia de la acción, o sea lo que le gusta al sujeto.
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 #[i Other expressions to express like and dislike]
    p.mb-5 Existen otras expresiones que un hablante nativo halla más naturales para expresar lo que le gusta o no le gusta y que son importantes recordar. Lea, escuche y repita:
    .row.mb-5
      .col-lg-7.p-4.ps-lg-5.pe-lg-0.py-lg-5.bg-color74
        h3.text-center.text-white.mb-5 #[i Expressing likes]
        .row
          .col-2.d-none.d-lg-block  
            .fig-deco4
              figure
                img(src='@/assets/curso/tema3/img8.svg')
          .col-lg-10.bg-text.bg-color76
            .p-2.p-lg-5
              SlyderE(indicadores="derecha")
                .row
                  .col-12
                    .row.justify-content-center
                      .col-9
                        p.text-center.mb-4 #[b #[i I like…]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I like horror movies</em>?"
                          :audio="require('@/assets/curso/tema3/audio19.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Me gustan las películas de terror.
                .row
                  .col-12
                    .row.justify-content-center
                      .col-9
                        p.text-center.mb-4 #[b #[i I enjoy…]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I enjoy listening to pop music</em>."
                          :audio="require('@/assets/curso/tema3/audio20.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Me gusta escuchar música pop.
                .row
                  .col-12
                    .row.justify-content-center
                      .col-9
                        p.text-center.mb-4 #[b #[i I love…]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I love Italian food</em>."
                          :audio="require('@/assets/curso/tema3/audio21.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Me encanta la comida italiana.
                .row
                  .col-12
                    .row.justify-content-center
                      .col-9
                        p.text-center.mb-4 #[b #[i I’m into…]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I’m into Sci-Fi movies</em>."
                          :audio="require('@/assets/curso/tema3/audio22.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Me gustan las películas de ciencia ficción.
                        p.mb-0 #[b #[i *Sci-Fi → science fiction]].
                .row
                  .col-12
                    .row.justify-content-center
                      .col-9
                        p.text-center.mb-4 #[b #[i I’m keen on…]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I’m keen on golf</em>."
                          :audio="require('@/assets/curso/tema3/audio23.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Estoy interesado en el golf.
                        p.mb-0 #[b #[i *To be keen on something]] → Estar interesado en algo o entusiasmado con algo.
                .row
                  .col-12
                    .row.justify-content-center
                      .col-9
                        p.text-center.mb-4 #[b #[i I’m a big fan of…]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I’m a big fan of going to the gym</em>."
                          :audio="require('@/assets/curso/tema3/audio24.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Soy un gran fan de ir al gimnasio.
      .col-lg-5.p-4.ps-lg-0.pe-lg-5.py-lg-5.bg-color75.bg-color76
        h3.text-center.mb-5 #[i.txt-color3 Expressing dislikes]
        .row
          .col-12.bg-text.fig-deco5
            .p-2.p-lg-5
              SlyderE(indicadores="derecha")
                .row
                  .col-12
                    .row.justify-content-center
                      .col-9
                        p.text-center.mb-4 #[b #[i I don’t like…]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I don’t like horror movies</em>?"
                          :audio="require('@/assets/curso/tema3/audio25.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 No me gustan las películas de terror.
                .row
                  .col-12
                    .row.justify-content-center
                      .col-9
                        p.text-center.mb-4 #[b #[i I dislike…]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I dislike listening to pop music</em>."
                          :audio="require('@/assets/curso/tema3/audio26.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 No me gusta escuchar música pop.
                .row
                  .col-12
                    .row.justify-content-center
                      .col-9
                        p.text-center.mb-4 #[b #[i I hate…]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I hate Italian food</em>."
                          :audio="require('@/assets/curso/tema3/audio27.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 Odio la comida italiana.
                .row
                  .col-12
                    .row.justify-content-center
                      .col-9
                        p.text-center.mb-4 #[b #[i I’m not into…]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I’m not into Sci-Fi movies</em>."
                          :audio="require('@/assets/curso/tema3/audio28.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 No me gustan las películas de ciencia ficción.
                .row
                  .col-12
                    .row.justify-content-center
                      .col-9
                        p.text-center.mb-4 #[b #[i It’s not my thing…]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>Golf is not my thing</em>."
                          :audio="require('@/assets/curso/tema3/audio29.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 El golf no es lo mío.
                .row
                  .col-12
                    .row.justify-content-center
                      .col-9
                        p.text-center.mb-4 #[b #[i I’m not a big fan of…]]
                        TarjetaAudio.color-primario.mb-3(
                          texto="<em>I’m not a big fan of going to the gym</em>."
                          :audio="require('@/assets/curso/tema3/audio30.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                        p.ms-3 No soy un gran fan de ir al gimnasio.
    p.mb-5 También se pueden agregar adverbios como #[b “really”], #[b “quite”] o #[b “just”], para hacer más énfasis en lo que nos gusta o en lo que no nos gusta.
    p.text-center.mb-5 #[b #[i For example:]]
    .row.pt-3
      .col-12.col-lg.mb-5.mb-lg-0
        .p-4.bg-color77
          .fig-deco2
            .row.justify-content-center
              .col-auto.bg-color65.px-4.py-3
                h3.text-center.text-white.mb-0 #[i Classical music]
          figure.pb-5
            img(src='@/assets/curso/tema3/img9.svg', style="width: 370px").m-auto
          TarjetaAudio.color-primario.mb-3(
            texto="<em>I’m quite keen on classical music</em>."
            :audio="require('@/assets/curso/tema3/audio31.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-2.ms-3 Estoy bastante interesada en la música clásica.
      .col-12.col-lg.mb-5.mb-lg-0
        .p-4.bg-color77
          .fig-deco2
            .row.justify-content-center
              .col-auto.bg-color65.px-4.py-3
                h3.text-center.text-white.mb-0 #[i Medieval history]
          figure.pb-5
            img(src='@/assets/curso/tema3/img10.svg', style="width: 370px").m-auto
          TarjetaAudio.color-primario.mb-3(
            texto="<em>I’m really into medieval history</em>."
            :audio="require('@/assets/curso/tema3/audio32.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-2.ms-3 Me gusta mucho la historia medieval.
      .col-12.col-lg
        .p-4.bg-color77
          .fig-deco2
            .row.justify-content-center
              .col-auto.bg-color65.px-4.py-3
                h3.text-center.text-white.mb-0 #[i Spicy food]
          figure.pb-5
            img(src='@/assets/curso/tema3/img11.svg', style="width: 370px").m-auto
          TarjetaAudio.color-primario.mb-3(
            texto="<em> I’m just not a big fan of spicy food</em>."
            :audio="require('@/assets/curso/tema3/audio33.mp3')"
            @audio-hover="mostrarIndicadorTarjetaAudio = false"
          )
          p.mb-2.ms-3 Sencillamente, no soy una gran fan de la comida picante.

</template>

<script>
export default {
  name: 'Tema3',
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
