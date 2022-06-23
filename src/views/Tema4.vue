<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF") 4
      h1 #[i Linking words]
    .row.align-items-center.bg-color78
      .col-lg-2
        figure.my-4.my-lg-0
          img(src='@/assets/curso/tema4/img1.svg', style="width: 150px").m-auto
      .col.px-4
        p.mb-0 En términos generales, las conjunciones y los conectores describen la relación entre dos cláusulas. Estas cláusulas se pueden escribir sin palabras de enlace (#[b #[i linking words]]), pero a menudo se puede transmitir más información, de manera precisa, usando estas palabras.
    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1 #[i Conjunctions versus Connectors]
    p.mb-5 Es ideal diferenciar las conjunciones de los conectores, dado que, por un lado, se unen gramaticalmente dos cláusulas, y del otro, se utiliza para dos oraciones separadas. Observe la explicación:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5 En la siguiente tabla, se muestran algunos conectores comunes y su correspondiente conjunción. Si a menudo tiene #[b problemas con las oraciones corridas, intente reemplazar la conjunción con el conector correcto].
    .row
      .col-12.col-lg-6
        .p-4.bg-color80
          .h3.text-end.text-white.me-5 #[i Conjunción]
          .row.align-items-center
            .col-lg-2
              .fig-deco6.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema4/img2.svg')
            .col-lg-10
              .tarjeta.tarjeta--blanca.p-3.p-lg-5
                SlyderE(indicadores="derecha")
                  .row(style="height: 240px").align-items-center
                    .col-12
                      p.text-center #[b.txt-color1 #[i and]] (y)
                  .row(style="height: 240px").align-items-center
                    .col-12
                      p.text-center #[b.txt-color1 #[i but]] (pero / menos / salvo / sino)
                  .row(style="height: 240px").align-items-center
                    .col-12
                      p.text-center.mb-0 #[b.txt-color1 #[i so]] (así que)
                      p.text-center.mb-0 #[b.txt-color1 #[i because]] (porque)
                      p.text-center.mb-0 #[b.txt-color1 #[i cause-effect]] (causa-efecto)
                  .row(style="height: 240px").align-items-center
                    .col-12
                      p.text-center.mb-0 #[b.txt-color1 #[i so]] (así)
                      p.text-center.mb-0 #[b.txt-color1 similarity] (semejanza)
                  .row(style="height: 240px").align-items-center
                    .col-12
                      p.text-center.mb-0 #[b.txt-color1 #[i before]] (antes de)
                  .row(style="height: 240px").align-items-center
                    .col-12
                      p.text-center.mb-0 #[b.txt-color1 #[i or]] (o)
                  .row(style="height: 240px").align-items-center
                    .col-12
                      p.text-center.mb-0 #[b.txt-color1 #[i while]] (mientras)
                      p.text-center.mb-0 #[b.txt-color1 #[i same time]] (al mismo tiempo)
      .col-12.col-lg-6
        .p-4.bg-color79
          .h3.ms-5 #[i.txt-color3 Conector correspondiente]
          .row.align-items-center
            .col-lg-10
              .tarjeta.tarjeta--blanca.p-3.p-lg-5
                SlyderE(indicadores="derecha")
                  .row(style="height: 240px").align-items-center
                    .col-12
                      p.text-center.mb-0 #[b.txt-color1 also] (también)
                      p.text-center.mb-0 #[b.txt-color1 in addition] (además)
                      p.text-center.mb-0 #[b.txt-color1 additionally] (adicionalmente)
                      p.text-center.mb-0 #[b.txt-color1 moreover] (es más)
                      p.text-center.mb-0 #[b.txt-color1 furthermore] (asimismo)
                  .row(style="height: 240px").align-items-center
                    .col-12
                      p.text-center.mb-0 #[b.txt-color1 however] (sin embargo)
                      p.text-center.mb-0 #[b.txt-color1 even so] (aun así)
                      p.text-center.mb-0 #[b.txt-color1 though] (aunque)
                      p.text-center.mb-0 #[b.txt-color1 nevertheless] (a pesar de eso)
                      p.text-center.mb-0 #[b.txt-color1 nonetheless] (no obstante)
                      p.text-center.mb-0 #[b.txt-color1 still] (a pesar de que)
                      p.text-center.mb-0 #[b.txt-color1 yet] (con todo y eso)
                      p.text-center.mb-0 #[b.txt-color1 in contrast] (a diferencia de)
                      p.text-center.mb-0 #[b.txt-color1 on the other hand] (por otro lado)
                      p.text-center.mb-0 #[b.txt-color1 on the contrary] (por el contrario)
                  .row(style="height: 240px").align-items-center
                    .col-12
                      p.text-center.mb-0 #[b.txt-color1 similarly] (similarmente)
                      p.text-center.mb-0 #[b.txt-color1 likewise] (igualmente)
                  .row(style="height: 240px").align-items-center
                    .col-12
                      p.text-center.mb-0 #[b.txt-color1 beforehand ] (de antemano)
                      p.text-center.mb-0 #[b.txt-color1 before this] (antes de esto)
                      p.text-center.mb-0 #[b.txt-color1 first] (primero)
                      p.text-center.mb-0 #[b.txt-color1 then] (entonces)
                      p.text-center.mb-0 #[b.txt-color1 next] (seguidamente)
                      p.text-center.mb-0 #[b.txt-color1 afterwards] (después)
                  .row(style="height: 240px").align-items-center
                    .col-12
                      p.text-center.mb-0 #[b.txt-color1 alternatively] (alternativamente)
                      p.text-center.mb-0 #[b.txt-color1 otherwise] (de lo contrario)
                  .row(style="height: 240px").align-items-center
                    .col-12
                      p.text-center.mb-0 #[b.txt-color1 meanwhile] (entretanto)
                      p.text-center.mb-0 #[b.txt-color1 at the same time/moment] (al mismo tiempo)
            .col-lg-2
              .fig-deco7.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/tema4/img3.svg')
    Separador
    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2 #[i How to use “and”, “or”, “but”?]
    .row.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img4.svg', style="width: 450px").m-auto
      .col-lg-7
        p Estas tres palabras, #[b.txt-color1 "and"], #[b.txt-color1 "or"] y #[b.txt-color1 "but"], son conjunciones coordinantes y se usan para conectar dos partes de oraciones que son similares y que tienen el mismo valor, gramaticalmente hablando.
        p.mb-0 Por lo general, no se usan conjunciones para comenzar oraciones cuando se escribe, pero puede ocurrir cuando se habla coloquialmente o cuando se escribe informalmente en la Internet y en las redes sociales, observe:
    .row
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="<em>And</em> / y").justify-content-center
            .col-10.bg-color11.shadow-sm
              .p-4
                p La conjunción de adición #[b #[i “and”]] es útil para agregar información y añadir elementos a una lista. Se usa igual que en el idioma español y traduce directamente #[b #[i “y”]].
                p.mb-4 #[b #[i For example, listen and repeat:]]
                .row.align-items-center.mb-4
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema4/img6.svg', style="width: 190px").m-auto
                  .col
                    TarjetaAudio.color-primario.mb-3(
                      texto="<em>I eat rice, meat and salad for lunch every day</em>."
                      :audio="require('@/assets/curso/tema4/audio1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-0.ms-3 Yo como arroz, carne #[b.txt-color1 y] ensalada para el almuerzo todos los días.
                .row.align-items-center.mb-4
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema4/img7.svg', style="width: 190px").m-auto
                  .col
                    TarjetaAudio.color-primario.mb-3(
                      texto="<em>She prays every day with her mother and her sister</em>."
                      :audio="require('@/assets/curso/tema4/audio2.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-0.ms-3 Ella reza todos los días con su madre #[b.txt-color1 y] su hermana.
                p.mb-4 En caso tal que se estén uniendo dos cláusulas y el sujeto de ambas es el mismo, se recomienda omitir el sujeto en la segunda cláusula.
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema4/img8.svg', style="width: 190px").m-auto
                  .col
                    TarjetaAudio.color-primario.mb-3(
                      texto="<em>He studies very hard and has a full-time job</em>."
                      :audio="require('@/assets/curso/tema4/audio3.mp3')"**Falta audio3
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-0.ms-3 Él estudia mucho y tiene un trabajo de tiempo completo.
          .row(titulo="<em>Or</em> / o").justify-content-center
            .col-10.bg-color11.shadow-sm
              .p-4
                p La conjunción de alternancia #[b “or”] es útil para dar alternativas y para hablar de opciones entre las que se tiene que escoger una de ellas. Hay que tener en cuenta que solo se puede emplear #[b “or”] con frases afirmativas, porque en el caso de las frases negativas se usa la conjunción #[b “nor”].
                p.mb-4 #[b #[i For example:]]
                .row.mb-4
                  .col-lg-6.mb-4.mb-lg-0
                    TarjetaAudio.color-primario.mb-3(
                      texto="<em>He can eat pasta or pizza</em>."
                      :audio="require('@/assets/curso/tema4/audio4.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-0.ms-3 Él puede comer pasta #[b.txt-color1 o] pizza.
                  .col-lg-6
                    TarjetaAudio.color-primario.mb-3(
                      texto="<em>Do you like this t-shirt in red or blue</em>?"
                      :audio="require('@/assets/curso/tema4/audio5.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-0.ms-3 ¿Te gusta esta camiseta en rojo o azul?
                p En caso tal que se estén uniendo dos cláusulas y el sujeto de ambas es el mismo, no se omite el sujeto en la segunda, aunque coincidan.
                p.mb-4 #[b #[i For example:]]
                .row.align-items-center.mb-4
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema4/img9.svg', style="width: 190px").m-auto
                  .col
                    TarjetaAudio.color-primario.mb-3(
                      texto="<em><u>We</u> can cook dinner or <u>we</u> can eat outside</em>."
                      :audio="require('@/assets/curso/tema4/audio6.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-0.ms-3 Podemos cocinar la cena #[b.txt-color1 o] podemos comer fuera.
                p Pero si coinciden en ambas cláusulas, no solo el sujeto, sino también el verbo sí se omiten.
                p.mb-4 #[b #[i For example:]]
                .row.align-items-center
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema4/img10.svg', style="width: 190px").m-auto
                  .col
                    TarjetaAudio.color-primario.mb-3(
                      texto="<em><u>We</u> can <u>cook</u> rice or pasta</em>."
                      :audio="require('@/assets/curso/tema4/audio7.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-0.ms-3 Podemos cocinar arroz #[b.txt-color1 o] pasta.
          .row(titulo="<em>But</em> / pero").justify-content-center
            .col-10.bg-color11.shadow-sm
              .p-4
                p La conjunción de contraste #[b “but”] es útil para información inesperada o diferente, para mostrar contraste entre una cosa y otra. Generalmente, se traduce como #[b “pero”], ya que este es su uso más común, pero dependiendo del contexto, puede usarse también como #[b “menos”] y #[b “salvo”], en frases afirmativas, y en frases negativas, puede usarse como #[b “sino”].
                p.mb-4 #[b #[i For example:]]
                .row.align-items-center.mb-4
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema4/img11.svg', style="width: 190px").m-auto
                  .col
                    TarjetaAudio.color-primario.mb-3(
                      texto="<em>She is an architect but works as a teacher</em>."
                      :audio="require('@/assets/curso/tema4/audio8.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-0.ms-3 Ella es arquitecta #[b.txt-color1 pero] trabaja como profesora.
                .row.align-items-center.mb-4
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema4/img12.svg', style="width: 190px").m-auto
                  .col
                    TarjetaAudio.color-primario.mb-3(
                      texto="<em>The whole store is on sale but this table</em>."
                      :audio="require('@/assets/curso/tema4/audio9.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-0.ms-3 Toda la tienda está en promoción #[b.txt-color1 menos] esta mesa.
                .row.align-items-center.mb-4
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema4/img13.svg', style="width: 190px").m-auto
                  .col
                    TarjetaAudio.color-primario.mb-3(
                      texto="<em>He is not French but Swiss</em>."
                      :audio="require('@/assets/curso/tema4/audio10.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-0.ms-3 Él no es francés #[b.txt-color1 sino] suizo.
      .col-lg-3
        figure
          img(src='@/assets/curso/tema4/img5.svg', style="width: 450px").m-auto

</template>

<script>
export default {
  name: 'Tema4',
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
