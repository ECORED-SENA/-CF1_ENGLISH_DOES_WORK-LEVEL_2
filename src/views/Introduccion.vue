<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info(style="color: #FFF")
      h1 Introducción
    p.mb-5 Bienvenido al componente formativo #[b #[span.txt-color1 These are the things that are around me] / Estas son las cosas que están a mi alrededor], correspondiente al Level 2 de #[i English Does Work]. Lo invitamos a ver el siguiente video, el cual presenta la temática a estudiar de forma general.
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
