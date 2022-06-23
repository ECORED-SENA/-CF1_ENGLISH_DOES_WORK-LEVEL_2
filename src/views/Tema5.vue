<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #FFF") 5
      h1 #[i Pronunciation of the linking sounds]
    .row.bg-color82.mb-5
      .col-lg-5.mb-4.mb-lg-0
        .fig-deco8
          figure
            img(src='@/assets/curso/tema5/img1.png', style="width: 370px").m-auto
      .col-lg-7
        p.mb-4 Los linking sounds son la vinculación que ocurre cuando el final de una palabra se mezcla con el inicio de la siguiente, por ende, los sonidos se unen y ambas palabras suenan como si fueran una sola, a veces afectándose entre ellas (puede que algunos sonidos de las palabras suenen diferentes cuando se pronuncian juntas o por separado).
        p.text-white.mb-0 Esto puede hacer que sea confuso entenderles a los hablantes nativos, porque suena como si hablaran muy rápido o como si pronunciaran palabras desconocidas o inexistentes, todo debido a que ellos no pronuncian palabra por palabra, ni separándolas #[b.txt-color3 “debidamente”].
    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="<em>Consonant and<br>vowel catenation</em>")
        .row
          .col-12.p-4
            p #[b.txt-color1 #[i Consonant and vowel catenation]]
            p.mb-4 Esto puede pasar cuando el último sonido de una palabra es una consonante y el primer sonido de la siguiente palabra es una vocal (C+V).
            p.text-center #[b.txt-color2 #[i For example:]]
            .row.justify-content-center
              .col-lg-10
                .row.mb-3
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema5/img6.svg', style="width: 450px").m-auto
                  .col-lg-6
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img
                        img(src='@/assets/curso/tema5/img2.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--azul1
                        .p-4
                          p.mb-1 #[i Hold on!] →  #[i Hol#[s #[b.bg-color83 d] #[b.bg-color84 o]]n!] →  / #[i Hol#[b.bg-color83 d]#[b.bg-color84 o]n!] /
                          p ¡Espera!.
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img
                        img(src='@/assets/curso/tema5/img3.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--azul1
                        .p-4
                          p.mb-1 #[i An egg] →  #[i A#[s #[b.bg-color83 n] #[b.bg-color84 e]]gg] →  / #[i A#[b.bg-color83 n]#[b.bg-color84 e]gg] /
                          p Un huevo.
                    .tarjeta-avatar-b
                      .tarjeta-avatar-b__img
                        img(src='@/assets/curso/tema5/img4.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--azul1
                        .p-4
                          p.mb-1 #[i To sleep in] →  #[i To slee#[s #[b.bg-color83 p] #[b.bg-color84 i]]n] →  / #[i To slee#[b.bg-color83 p]#[b.bg-color84 i]n] /
                          p Dormir hasta tarde.
              .col-lg-8
                .tarjeta-avatar-b
                  .tarjeta-avatar-b__img
                    img(src='@/assets/curso/tema5/img5.svg' alt='AvatarTop')
                  .tarjeta.tarjeta--azul1
                    .p-4
                      p.mb-1 Hold on a second! Can you pick up some milk for us at the store?
                      p.mb-1 → Hol#[s #[b.bg-color83 d] #[b.bg-color84 o]#[b.bg-color83 n] #[b.bg-color84 a] ]second! Can you pi#[b ck up] some milk fo#[s #[b.bg-color83 r] #[b.bg-color84 u]#[b.bg-color83 s] #[b.bg-color84 a]]t the store?  
                      p.mb-4 →  / Hol#[b.bg-color83 d]#[b.bg-color84 o]#[b.bg-color83 n]#[b.bg-color84 a] second! Can you pi#[b ckup] some milk fo#[b.bg-color83 r]#[b.bg-color84 u]#[b.bg-color83 s]#[b.bg-color84 a]t the store? /
                      p ¡Espera un segundo! ¿Puedes recoger un poco de leche para nosotros en la tienda?
      .py-3.py-md-4(titulo="<em>Geminate<br>consonants</em>")
        .row
          .col-12.p-4
            p #[b.txt-color1 #[i Geminate consonants]]
            p.mb-4 Esto puede pasar cuando el último sonido de una palabra es una consonante y el primer sonido de la siguiente palabra es la misma consonante (C+C). En este caso, el sonido de la consonante se pronuncia un poco más largo al unirse las palabras.
            p.text-center #[b.txt-color2 #[i For example:]]
            .row.justify-content-center
              .col-lg-10
                .row.mb-3
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema5/img10.svg', style="width: 450px").m-auto
                  .col-lg-6
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img
                        img(src='@/assets/curso/tema5/img7.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--azul1
                        .p-4
                          p.mb-1 This style →  Thi#[s #[b.bg-color83 s] #[b.bg-color84 s]]tyle →  / Thi#[b.bg-color83 s]tyle /
                          p Este estilo.
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img
                        img(src='@/assets/curso/tema5/img8.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--azul1
                        .p-4
                          p.mb-1 At ten →  A#[s #[b.bg-color83 t] #[b.bg-color84 t]]en →  / A#[b.bg-color83 t]en /
                          p A las diez.
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img
                        img(src='@/assets/curso/tema5/img9.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--azul1
                        .p-4
                          p.mb-1 A big garden →  A bi#[s #[b.bg-color83 g] #[b.bg-color84 g]]arden →  / A bi#[b.bg-color83 g]arden /
                          p Un gran jardín. ¡Espera!.
      .py-3.py-md-4(titulo="<em>Intrusion in<br>vowels</em>")
        .row
          .col-12.p-4
            p #[b.txt-color1 #[i Intrusion in vowels]]
            p.mb-4 Esto puede pasar cuando el último sonido de una palabra es una vocal y el primer sonido de la siguiente palabra es otra vocal (V+V). Se le llama intrusión, ya que es un sonido adicional que “se entromete” o se inserta entre otros. A menudo, es un sonido como una / #[b.txt-color1 j] /, una / #[b.txt-color1 y] /, una / #[b.txt-color1 w] /, o una / #[b.txt-color1 r] / entre otros dos sonidos vocálicos.
            p.text-center #[b.txt-color2 #[i For example:]]
            .row.justify-content-center
              .col-lg-10
                .row.mb-3
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/tema5/img14.svg', style="width: 450px").m-auto
                  .col-lg-6
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img
                        img(src='@/assets/curso/tema5/img11.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--azul1
                        .p-4
                          p.mb-1 To go out →  To g#[s #[b.bg-color83 o] #[b.bg-color84 o]]ut →  / To g#[b.bg-color83 o]#[b.txt-color1 w]#[b.bg-color84 o]ut /
                          p Salir.
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img
                        img(src='@/assets/curso/tema5/img12.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--azul1
                        .p-4
                          p.mb-1 I am happy →  #[s #[b.bg-color83 I] #[b.bg-color84 a]]m happy →  / #[b.bg-color83 I]#[b.txt-color1 y]#[b.bg-color84 a]m happy /
                          p Soy feliz.
                    .tarjeta-avatar-b.mb-3
                      .tarjeta-avatar-b__img
                        img(src='@/assets/curso/tema5/img13.svg' alt='AvatarTop')
                      .tarjeta.tarjeta--azul1
                        .p-4
                          p.mb-1 I have a shoe on →  I have a sho#[s #[b.bg-color83 e] #[b.bg-color84 o]]n →  / I have a sho#[b.bg-color83 e]#[b.txt-color1 w]#[b.bg-color84 o]n /
                          p Tengo un zapato puesto.
    p.mb-5 En todos estos casos, se obtiene un enlace que conecta la pronunciación de las palabras y suenan como si fueran una sola. Y por esto, los #[b.txt-color1 #[i linking sounds]] son importantes, porque nos pueden ayudar a sonar más como un hablante nativo. Escuche y preste atención a los siguientes recursos para mejorar su pronunciación:
    .row.bg-color86
      .col-12
        .row
          .col-lg-7.mb-4.mb-lg-0
            .row.justify-content-end
              .col-10.bg-color85.mb-3
                .row.align-items-center.p-4
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema5/img15.svg', style="width: 70px").m-auto
                  .col
                    a.anexo.mb-lg-0(href="https://www.youtube.com/watch?v=mV_CEIroJs8" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p #[b Enlace web]. #[i Pronunciation: Consonant - vowel linking]
              .col-10.bg-color85
                .row.align-items-center.p-4
                  .col-auto
                    figure
                      img(src='@/assets/curso/tema5/img15.svg', style="width: 70px").m-auto
                  .col
                    a.anexo.mb-lg-0(href="https://www.youtube.com/watch?v=uzlIcTJyJ1s" target="_blank")
                      .anexo__icono
                        img(src="@/assets/template/icono-link.svg")
                      .anexo__texto
                        p #[b Enlace web]. #[i Mini English Lessons: Connected Speech (part 2)]
          .col-lg-5
            figure
              img(src='@/assets/curso/tema5/img16.svg', style="width: 380px").m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
