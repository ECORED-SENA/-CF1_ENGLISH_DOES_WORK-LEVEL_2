<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span(style="color: #FFF") 3
      h1 #[i I'm at home]
    .row.justify-content-center.align-items-end.bg-color3(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure.fig-position5
          img(src='@/assets/curso/tema3/img1.png', style="width: 450px").m-auto
      .col-lg-6
        .row.mb-0.mb-lg-4
          .col-auto
            figure
              img(src='@/assets/curso/tema3/img1.svg', style="width: 70px").m-auto
          .col
            p A continuación, se relacionan algunos términos que son útiles para dar indicaciones de la ubicación en la que se encuentra, bien sea en alguna estancia del hogar o en algún lugar de la ciudad.
        p.text-white Se dividen en dos partes, por un lado, las partes de la casa, tanto internas como externas; y por el otro lado, algunos lugares de la ciudad y los sitios de interés que se pueden hallar.
    Separador
    #t_3_1
    .titulo-segundo.color-acento-contenido
      h2 3.1 #[i Parts of a house]
    p.mb-5 Se entiende que cada hogar es diferente; sin embargo, es posible utilizar cierto vocabulario en inglés para reconocer las partes de la casa más comunes.
    .row.bg-color9(data-aos="fade-left")
      .col-12.p-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-3.mb-4.mb-lg-0
            TarjetaAudio.color-primario(
              texto="Exterior parts of a house"
              :audio="require('@/assets/curso/tema3/audio1.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          .col-lg-3
            p.text-center.mb-0 #[b Partes exteriores de una casa]
        figure.mb-5
          img(src='@/assets/curso/tema3/img3.svg', style="width: 650px").m-auto
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img4.svg', alt='Texto que describa la imagen')
          .tarjeta.color-acento-botones.p-3(x="15%" y="10%" numero="+")
            .row
              .col-12
                p #[b #[i House]]: casa/hogar.
                TarjetaAudio.color-primario.mb-3(
                  texto="My house is the most beautiful in the neighborhood."
                  :audio="require('@/assets/curso/tema3/audio3.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 Mi casa es la más hermosa del barrio.
          .tarjeta.color-acento-botones.p-3(x="15%" y="50%" numero="+")
            .row
              .col-12
                p #[b #[i Chimney]]: chimenea.
                TarjetaAudio.color-primario.mb-3(
                  texto="The smoke comes out of the chimney."
                  :audio="require('@/assets/curso/tema3/audio4.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 El humo sale por la chimenea.
          .tarjeta.color-acento-botones.p-3(x="15%" y="90%" numero="+")
            .row
              .col-12
                p #[b #[i Roof]]: techo.
                TarjetaAudio.color-primario.mb-3(
                  texto="My whole family lives under the same roof."
                  :audio="require('@/assets/curso/tema3/audio5.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 Toda mi familia vive bajo el mismo techo.
          .tarjeta.color-acento-botones.p-3(x="43%" y="10%" numero="+")
            .row
              .col-12
                p #[b #[i Balcony]]: balcón.
                TarjetaAudio.color-primario.mb-3(
                  texto="I can see you from the balcony."
                  :audio="require('@/assets/curso/tema3/audio6.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 Puedo verte desde el balcón.
          .tarjeta.color-acento-botones.p-3(x="43%" y="50%" numero="+")
            .row
              .col-12
                p #[b #[i Garden]]: jardín.
                TarjetaAudio.color-primario.mb-3(
                  texto="There are a lot of plants in the garden."
                  :audio="require('@/assets/curso/tema3/audio7.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 Hay muchas plantas en el jardín.
          .tarjeta.color-acento-botones.p-3(x="43%" y="90%" numero="+")
            .row
              .col-12
                p #[b #[i Front yard]]: patio delantero.
                TarjetaAudio.color-primario.mb-3(
                  texto="The house has a front yard and a backyard."
                  :audio="require('@/assets/curso/tema3/audio8.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 La casa tiene un patio delantero y un patio trasero.
          .tarjeta.color-acento-botones.p-3(x="72%" y="10%" numero="+")
            .row
              .col-12
                p #[b #[i Door]]: puerta.
                TarjetaAudio.color-primario.mb-3(
                  texto="The door of my house is red."
                  :audio="require('@/assets/curso/tema3/audio9.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 La puerta de mi casa es roja.
          .tarjeta.color-acento-botones.p-3(x="72%" y="50%" numero="+")
            .row
              .col-12
                p #[b #[i Path]]: entrada (peatonal)/sendero.
                TarjetaAudio.color-primario.mb-3(
                  texto="The grocery bags are on the path in front of the house."
                  :audio="require('@/assets/curso/tema3/audio10.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 Las bolsas de las compras están en el sendero al frente de la casa.
          .tarjeta.color-acento-botones.p-3(x="81%" y="90%" numero="+")
            .row
              .col-12
                p #[b #[i Mailbox/letterbox]]: buzón (del correo).
                TarjetaAudio.color-primario.mb-3(
                  texto="I drop my letters in the corner mailbox."
                  :audio="require('@/assets/curso/tema3/audio11.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 Dejo mis cartas en el buzón de la esquina.
          .tarjeta.color-acento-botones.p-3(x="100%" y="10%" numero="+")
            .row
              .col-12
                p #[b #[i Driveway]]: entrada (de automóviles)/calzada.
                TarjetaAudio.color-primario.mb-3(
                  texto="The visitors park their car in the driveway."
                  :audio="require('@/assets/curso/tema3/audio12.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 Los visitantes estacionan su automóvil en la entrada.
          .tarjeta.color-acento-botones.p-3(x="100%" y="50%" numero="+")
            .row
              .col-12
                p #[b Garage]: garaje.
                TarjetaAudio.color-primario.mb-3(
                  texto="The new house does not have a garage to park the car."
                  :audio="require('@/assets/curso/tema3/audio13.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 La casa nueva no tiene garaje para estacionar el carro.
          .tarjeta.color-acento-botones.p-3(x="100%" y="90%" numero="+")
            .row
              .col-12
                p #[b #[i Window]]: ventana.
                TarjetaAudio.color-primario.mb-3(
                  texto="Please, close the window."
                  :audio="require('@/assets/curso/tema3/audio14.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 Por favor, cierra la ventana.
    .row.bg-color10(data-aos="fade-right")
      .col-12.p-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-5.mb-4.mb-lg-0
            TarjetaAudio.color-primario(
              texto="Interior parts of a house: rooms and common areas"
              :audio="require('@/assets/curso/tema3/audio15.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          .col-lg-3
            p.text-center.mb-0 #[b Partes interiores de una casa: habitaciones y áreas comunes]
        figure.mb-5
          img(src='@/assets/curso/tema3/img5.svg', style="width: 650px").m-auto
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema3/img6.svg', alt='Texto que describa la imagen')
          .tarjeta.color-acento-botones.p-3(x="18%" y="10%" numero="+")
            .row
              .col-12
                p #[b #[i Nursery (room)]]: habitación del bebé.
                TarjetaAudio.color-primario.mb-3(
                  texto="We already put the cradle in the nursery."
                  :audio="require('@/assets/curso/tema3/audio16.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 Ya pusimos la cuna en el cuarto del bebé.
          .tarjeta.color-acento-botones.p-3(x="14%" y="50%" numero="+")
            .row
              .col-12
                p #[b #[i Attic]]: ático.
                TarjetaAudio.color-primario.mb-3(
                  texto="The Christmas decorations are stored in the attic."
                  :audio="require('@/assets/curso/tema3/audio17.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 Los adornos de navidad están guardados en el ático.
          .tarjeta.color-acento-botones.p-3(x="14%" y="90%" numero="+")
            .row
              .col-12
                p #[b #[i Bedroom]]: habitación/cuarto/dormitorio.
                TarjetaAudio.color-primario.mb-3(
                  texto="The main bedroom is very large and comfortable."
                  :audio="require('@/assets/curso/tema3/audio18.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 La habitación principal es muy grande y cómoda.
          .tarjeta.color-acento-botones.p-3(x="43%" y="10%" numero="+")
            .row
              .col-12
                p #[b #[i Kitchen]]: cocina.
                TarjetaAudio.color-primario.mb-3(
                  texto="Take the vegetables to the kitchen."
                  :audio="require('@/assets/curso/tema3/audio19.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 Lleva las verduras a la cocina.
          .tarjeta.color-acento-botones.p-3(x="43%" y="50%" numero="+")
            .row
              .col-12
                p #[b #[i Laundry room]]: cuarto de lavado.
                TarjetaAudio.color-primario.mb-3(
                  texto="The clothes that are folded in the laundry room are clean."
                  :audio="require('@/assets/curso/tema3/audio20.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 La ropa que está doblada en el cuarto de lavado está limpia.
          .tarjeta.color-acento-botones.p-3(x="43%" y="90%" numero="+")
            .row
              .col-12
                p #[b #[i Basement]]: sótano.
                TarjetaAudio.color-primario.mb-3(
                  texto="The moving boxes are stored in the basement."
                  :audio="require('@/assets/curso/tema3/audio21.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 Las cajas de la mudanza están guardadas en el sótano.
          .tarjeta.color-acento-botones.p-3(x="71%" y="10%" numero="+")
            .row
              .col-12
                p #[b #[i Living room]]: sala de estar.
                TarjetaAudio.color-primario.mb-3(
                  texto="Let’s watch the game in the living room."
                  :audio="require('@/assets/curso/tema3/audio22.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 Vamos a ver el partido en la sala.
          .tarjeta.color-acento-botones.p-3(x="70%" y="50%" numero="+")
            .row
              .col-12
                p #[b #[i Dining room]]: salón comedor.
                TarjetaAudio.color-primario.mb-3(
                  texto="There is not enough space for the guests in the dining room."
                  :audio="require('@/assets/curso/tema3/audio23.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 No hay suficiente espacio para los invitados en el salón comedor.
          .tarjeta.color-acento-botones.p-3(x="70%" y="90%" numero="+")
            .row
              .col-12
                p #[b #[i Garage]]: garaje.
                TarjetaAudio.color-primario.mb-3(
                  texto="The car is parked in the garage."
                  :audio="require('@/assets/curso/tema3/audio24.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 El carro está estacionado en el garaje.
          .tarjeta.color-acento-botones.p-3(x="99%" y="14%" numero="+")
            .row
              .col-12
                p #[b #[i Bathroom]]: baño.
                TarjetaAudio.color-primario.mb-3(
                  texto="Where is the women’s bathroom?"
                  :audio="require('@/assets/curso/tema3/audio25.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 ¿Dónde está el baño de mujeres?
          .tarjeta.color-acento-botones.p-3(x="100%" y="54%" numero="+")
            .row
              .col-12
                p #[b #[i Home office]]: oficina (en casa).
                TarjetaAudio.color-primario.mb-3(
                  texto="I set up a home office in the guest bedroom."
                  :audio="require('@/assets/curso/tema3/audio26.mp3')"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                p.mb-0.ms-3 Instalé una oficina en casa en el cuarto de huéspedes.
    Separador
    #t_3_2
    .titulo-segundo.color-acento-contenido
      h2 3.2 #[i Places in a city]
    p.mb-5 Los lugares en la ciudad determinan algunos términos de ubicación geográfica que ayudan a denotar dónde vivimos y que son importantes en la descripción detallada del lugar:
    .row.align-items-center.mb-5(data-aos="fade-down")
      .col-lg-5.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img2.png', style="width: 550px").m-auto
      .col-lg-7
        TabsA.color-acento-botones
          .tarjeta.color-acento-contenido.p-4(titulo="1. <em>Country</em>")
            p #[b País]
            TarjetaAudio.color-primario.mb-3(
              texto="My sister does not live in this country."
              :audio="require('@/assets/curso/tema3/audio27.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ms-3 Mi hermana no vive en este #[b #[u.txt-color1 país]].
          .tarjeta.color-acento-contenido.p-4(titulo="2. <em>State</em>")
            p #[b Estado]
            p (Entidades territoriales de un país que, en Colombia, conocemos como “departamentos”).
            TarjetaAudio.color-primario.mb-3(
              texto="Heavy rains affect the entire state."
              :audio="require('@/assets/curso/tema3/audio28.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ms-3 Fuertes lluvias afectan todo el #[b #[u.txt-color1 estado]].
          .tarjeta.color-acento-contenido.p-4(titulo="3. <em>City</em>")
            p #[b Ciudad]
            TarjetaAudio.color-primario.mb-3(
              texto="This city is bigger than the capital."
              :audio="require('@/assets/curso/tema3/audio29.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ms-3 Esta ciudad es más grande que la capital.
          .tarjeta.color-acento-contenido.p-4(titulo="4. <em>Town</em>")
            p #[b Pueblo]
            TarjetaAudio.color-primario.mb-3(
              texto="I travel to the town by bus."
              :audio="require('@/assets/curso/tema3/audio30.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ms-3 Yo viajo al pueblo en autobús.
          .tarjeta.color-acento-contenido.p-4(titulo="5. <em>Neighborhood</em>")
            p #[b Barrio/vecindario]
            TarjetaAudio.color-primario.mb-3(
              texto="This park is for the neighborhood kids."
              :audio="require('@/assets/curso/tema3/audio31.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
            p.mb-0.ms-3 Este parque es para los niños del barrio.
    p.text-center.mb-5 Para una descripción un poco más detallada, también existen términos para nombrar sitios de interés en la ciudad:
    .row.bg-color11(data-aos="fade-right")
      .col-12.p-5
        SlyderF(columnas="col-lg-6 col-xl-3").justify-content-center
          .col-11.col-lg.bg-color13
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio32.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Airport]]
                p.text-center Aeropuerto
          .col-11.col-lg.bg-color14
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio33.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Bakery]]
                p.text-center Panadería
          .col-11.col-lg.bg-color15
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio34.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Bank]]
                p.text-center Banco
          .col-11.col-lg.bg-color16
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio35.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Supermarket]]
                p.text-center Supermercado
          .col-11.col-lg.bg-color17
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio36.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Hospital]]
                p.text-center Hospital
          .col-11.col-lg.bg-color18
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio37.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Hotel]]
                p.text-center Hotel
          .col-11.col-lg.bg-color19
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio38.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Parking lot/Car park]]
                p.text-center Estacionamiento
          .col-11.col-lg.bg-color20
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio39.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Pharmacy/Drugstore]]
                p.text-center Farmacia
          .col-11.col-lg.bg-color21
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio40.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Police station]]
                p.text-center Estación de policía
          .col-11.col-lg.bg-color22
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio41.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Prison / jail]]
                p.text-center Cárcel/prisión
          .col-11.col-lg.bg-color23
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio42.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Bookstore/bookshop]]
                p.text-center Librería (donde se venden libros)
          .col-11.col-lg.bg-color24
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio43.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Bus station]]
                p.text-center Estación de autobuses
          .col-11.col-lg.bg-color25
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio44.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Cinema/Movie theater]]
                p.text-center Cine/sala de cine
          .col-11.col-lg.bg-color26
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio45.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Gym]]
                p.text-center Gimnasio
          .col-11.col-lg.bg-color27
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio46.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Museum]]
                p.text-center Museo
          .col-11.col-lg.bg-color28
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio47.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Park]]
                p.text-center Parque
          .col-11.col-lg.bg-color29
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio48.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Shopping mall]]
                p.text-center Centro comercial
          .col-11.col-lg.bg-color30
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio49.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 School]]
                p.text-center Escuela/colegio
          .col-11.col-lg.bg-color31
            .row.justify-content-center
              .col-9.col-lg-10.bg-color12.shadow-sm.p-3
                Audio.color-secundario.mx-auto.mb-4(:audio="require('@/assets/curso/tema3/audio50.mp3')")
                p.text-center.mb-0 #[b #[i.txt-color1 Restaurant]]
                p.text-center Restaurante
    Separador
    .titulo-segundo.color-acento-contenido
      h2 Actividad didáctica
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch(data-aos="fade-left")
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/seleccion-multiple.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 #[i Where do these things happen?] / ¿Dónde pasan estas cosas?
        p.mb-4 #[b Objtivo]. Identificar lugares internos y externos de la casa, así como lugares de la ciudad o sitios de interés.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Opción múltiple.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad3/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

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
