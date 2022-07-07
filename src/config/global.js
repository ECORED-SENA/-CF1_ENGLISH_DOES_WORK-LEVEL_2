export default {
  global: {
    componenteFormativo:
      '<span1><em>This is where I live</em></span1><br><span>Aquí es donde vivo</span>',
    descripcionCurso:
      'Para tener las herramientas necesarias a la hora de brindar las indicaciones sobre la ubicación de algo, se explica el tema de preposiciones de lugar; seguidamente, se hace una introducción a las <em>WH questions</em> y se profundiza en las aplicaciones de “<em>where</em>”. Por último, se indica vocabulario sobre lugares en el hogar y su contexto cercano (barrio, lugares comunes en la ciudad).',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Preposiciones de lugar',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Introducción a las <em>WH questions</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>I´m at home</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '<em>Parts of a house</em>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '<em>Places in a city</em>',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aprender Inglés Rápido y Fácil. (2014). <em>Wh Questions en inglés con ejemplos - Preguntas WH</em>. ',
      link:
        'https://www.aprenderinglesrapidoyfacil.com/2014/02/14/wh-questions-en-ingles-preguntas-wh-en-ingles',
    },
    {
      referencia:
        'Cambridge University Press (s. f.). <em>Diccionarios</em>. Cambridge Dictionary. ',
      link: 'https://dictionary.cambridge.org/es-LA/dictionary/',
    },
    {
      referencia: 'Collins. (s. f.). <em>Definición de preposition</em>. ',
      link:
        'https://www.collinsdictionary.com/es/diccionario/ingles/preposition#:~:text=A%20preposition%20is%20a%20word,sentences%20that%20contain%20a%20preposition',
    },
    {
      referencia:
        'Hesjedal, T. (2021). <em>Prepositions of Place and Movement</em>. Ndla. ',
      link: 'https://ndla.no/article/31684',
    },
    {
      referencia:
        'McLellan, C. (2020). <em>Las preposiciones in, at, on en inglés</em>. British Council España. ',
      link: 'https://www.britishcouncil.es/blog/preposiciones-in-on-at',
    },
    {
      referencia:
        'Zamora, V. (2021). <em>Guía detallada de las preposiciones en inglés</em>. British Council México. ',
      link: 'https://www.britishcouncil.org.mx/blog/preposiciones',
    },
  ],
  glosario: [
    {
      termino: '<em>Interlocutor</em> / Interlocutor',
      significado: 'persona que toma parte en un diálogo.',
    },
    {
      termino: '<em>Informative questions</em> / Preguntas informativas',
      significado:
        'también llamadas preguntas abiertas, son las preguntas que, a diferencia de las preguntas cerradas, no se pueden contestar con un simple “sí” o “no”. Las preguntas informativas interpelan y demandan un dato o información: <em>Where?</em> (¿Dónde?), <em>What?</em> (¿Qué?), <em>How?</em> (¿Cómo?), etc.',
    },
    {
      termino: '<em>Preposition</em> / Preposición',
      significado:
        'una preposición es una palabra como "<em>by</em>", "<em>for</em>", "<em>into</em>" o "<em>with</em>", que generalmente tiene un grupo de sustantivos como objeto.',
    },
    {
      termino: '<em>Prepositions of place</em> / Preposiciones de lugar',
      significado:
        'las preposiciones de lugar se utilizan para mostrar la posición o ubicación de una persona o cosa en relación con otra persona o cosa. Responden a la pregunta "¿dónde?" (<em>where?</em>).',
    },
  ],
  complementario: [
    {
      tema: 'Preposiciones de lugar',
      referencia:
        'British Council. (s. f.). <em>Prepositions of place</em>. LearnEnglish Kids.',
      tipo: 'Web',
      link:
        'https://learnenglishkids.britishcouncil.org/grammar-practice/prepositions-place',
    },
    {
      tema: 'Introducción a las <em>WH questions</em>',
      referencia:
        'Ellii (formerly ESL Library). (2021). <em>Wh- Questions</em>. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=x_4AjSwTXdc',
    },
    {
      tema: '<em>I´m at home</em>',
      referencia:
        '<em>British Council. (s.f.). <em>Places in a town</em>. LearnEnglish Teens.</em>.',
      tipo: 'Web',
      link:
        'https://learnenglishteens.britishcouncil.org/vocabulary/a1-a2-vocabulary/places-town',
    },
    {
      tema: '<em>I´m at home</em>',
      referencia: 'Agenda Web. (s. f.). <em>Places – shops</em>.',
      tipo: 'Web',
      link: 'https://agendaweb.org/vocabulary/places_city-exercises.html',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Michelle Manuela Pérez Hernández',
        cargo: 'Experta Temática',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital - CENIGRAF',
      },
      {
        nombre: 'Óscar Absalón Guevara',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - CIES - Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oleg Litvin ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lina Marcela Perez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
