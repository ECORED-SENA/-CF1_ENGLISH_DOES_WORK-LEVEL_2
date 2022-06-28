<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info(style="color: #FFF")
      h1 Introducción
    p.mb-5 Bienvenido al componente formativo #[b #[span.txt-color1 This is where I live] / Aquí es donde vivo]. Lo invitamos a ver el siguiente video, el cual presenta, de forma general, la temática a estudiar.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/R6bCtP3bQes" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
