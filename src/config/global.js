export default {
  global: {
    componenteFormativo:
      '<em>These are the things that are around me</em><br><span>Estas son las cosas que están a mi alrededor</span>',
    descripcionCurso:
      'Este componente brinda herramientas para nombrar cualidades de personas con adjetivos calificativos, intercambiar información acerca de lugares y objetos ubicándolos en un tiempo o espacio determinado con adjetivos demostrativos; para brindar aún más información con respecto a lo que se habla usando adverbios, y enseguida hablar de gustos y disgustos con las expresiones correctas para pronunciar adecuadamente los <em>linking sounds</em> en el inglés americano.',
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
        titulo: '<em>Adjectives: describe and show objects and people</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>Qualifying adjectives</em>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '<em>Demonstrative adjectives</em>',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>What is an adverb?</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<em>Adverbs of intensity</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<em>Use and differences between "really" and "very"</em>',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>What do I like and what do I not like?</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              '<em>How to conjugate the verb "like" in the simple present tense</em>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '<em>Other expressions to express like and dislike</em>',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<em>Linking words</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: '<em>Conjunctions versus Connectors</em>',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: '<em>How to use "and", "or", "but"?</em>',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: '<em>Pronunciation of the linking sounds</em>',
        desarrolloContenidos: true,
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
        'Collins. (s. f.). <em>Demonstrative adjectives - Easy Learning Grammar Spanish</em>. ',
      link:
        'https://grammar.collinsdictionary.com/es/gramatica-de-aprendizaje-espanol/demonstrative-adjectives',
    },
    {
      referencia:
        'Collins. (s. f.). <em>What is a verb in English? - Easy Learning Grammar</em>. ',
      link:
        'https://grammar.collinsdictionary.com/es/gramatica-de-aprendizaje/what-is-a-verb-in-english',
    },
    {
      referencia:
        'Cambridge University Press. (s. f.). <em>Intensifiers (very, at all). Cambridge Dictionary</em>. ',
      link:
        'https://dictionary.cambridge.org/es-LA/grammar/british-grammar/intensifiers-very-at-all',
    },
    {
      referencia:
        'Cambridge University Press. (s. f.). <em>Adjectives: order. Cambridge Dictionary</em>. ',
      link:
        'https://dictionary.cambridge.org/es-LA/grammar/british-grammar/adjectives-order',
    },
    {
      referencia:
        'Graduate Writing Center. (s. f.). <em>Linking Words (Conjunctions and Connectors). Yale Center for Teaching and Learning</em>. ',
      link:
        'https://ctl.yale.edu/sites/default/files/files/GWC_LinkingWords-1.pdf',
    },
    {
      referencia:
        'Arango, M. y Herranz, A. (2015). <em>Diferencia entre oración, cláusula y proposición</em>. Centro Virtual Cervantes. ',
      link: 'https://cvc.cervantes.es/foros/leer_asunto1.asp?vCodigo=50911',
    },
    {
      referencia:
        'British Council. <em>Adjectives</em>. British Council LearnEnglish. ',
      link:
        'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/adjectives',
    },
  ],
  glosario: [
    {
      termino: 'Adjetivo / <em>Adjective</em>',
      significado:
        'los adjetivos son una de las cuatro clases principales de palabras gramaticales, junto con los sustantivos, los verbos y los adverbios. Son palabras que dan más información sobre personas, animales o cosas representadas por sustantivos y pronombres (pueden describir las cualidades, indicar la cantidad, etc.), y pueden ir en diferentes posiciones en una oración. Por ejemplo: <em>huge, silly, yellow, many, few,</em> etc.',
    },
    {
      termino: 'Adjetivo demostrativo / <em>Demonstrative adjective</em>',
      significado:
        'un adjetivo demostrativo es un adjetivo que se usa para señalar específicamente la posición de algo o alguien en el espacio o en el tiempo. Los adjetivos demostrativos más utilizados son <em>this, that, these</em> y <em>those</em>.',
    },
    {
      termino: 'Adverbio / <em>Adverb</em>',
      significado:
        'los adverbios son una de las cuatro clases principales de palabras gramaticales, junto con los sustantivos, los verbos y los adjetivos. Son palabras que usamos dentro de una oración para modificar verbos, adjetivos y otros adverbios. Su labor es brindar más información acerca del elemento que califican.',
    },
    {
      termino: 'Cláusula / <em>Clause</em>',
      significado:
        'el término cláusula se usa con un sentido predominantemente gramatical, usado para referirse a una oración que forma parte de una oración compuesta más grande.',
    },
    {
      termino: 'Conector / <em>Connector</em>',
      significado:
        'las conjunciones (<em>conjunctions</em>) y los conectores (<em>connectors</em>) describen la relación entre dos declaraciones. Las conjunciones unen gramaticalmente dos cláusulas (independientes o dependientes, dependiendo de la conjunción) para que se lean como una sola oración. Los conectores se utilizan entre dos oraciones separadas. Ejemplos de conjunciones: <em>And</em> (y), <em>or</em> (o), <em>but</em> (pero), <em>yet</em> (a pesar de que), <em>nor</em> (ni).<br>Ejemplos de conectores: <em>also</em> (además), <em>however</em> (sin embargo), <em>otherwise</em> (de lo contrario), <em>therefore</em> (por lo tanto), <em>meanwhile</em> (entretanto).',
    },
    {
      termino: 'Sonidos conectados / <em>Linking sounds</em>',
      significado:
        'es la vinculación que ocurre cuando el final de una palabra se mezcla con otra. Esto puede pasar cuando el último sonido de una palabra es una consonante y el primer sonido de la siguiente palabra es una vocal (consonante con vocal), cuando el último sonido de una palabra es una consonante y el primer sonido de la siguiente palabra es la misma consonante (consonante con consonante), o cuando el último sonido de una palabra es una vocal y el primer sonido de la siguiente palabra es una vocal (vocal con vocal); en todos estos casos, se obtiene un enlace que conecta la pronunciación de las palabras y suenan como si fueran una sola. Por ejemplo, <em>Hold on</em> - suena / <em>wholedon</em> /.',
    },
    {
      termino: 'Verbo / <em>Verb</em>',
      significado:
        'los verbos son una de las cuatro clases principales de palabras gramaticales, junto con los sustantivos, los adverbios y los adjetivos. Nos permiten hablar de actividades, procesos, estados del ser y estados de ánimo. Palabras como "cantar" (<em>to sing</em>), "sentir" (<em>to feel</em>) o "beber" (<em>to drink</em>) son verbos, y se usan con un sujeto para decir lo que alguien o algo hace o lo que les sucede, o para dar información sobre ellos.',
    },
  ],
  complementario: [
    {
      tema: '<em>Adjectives: describe and show objects and people</em>',
      referencia:
        'British Council. (s. f.). <em>Adjectives. LearnEnglish Kids</em>.',
      tipo: 'Práctica online',
      link:
        'https://learnenglishkids.britishcouncil.org/grammar-practice/adjectives',
    },
    {
      tema: '<em>Adjectives: describe and show objects and people</em>',
      referencia:
        'British Council. (s. f.). <em>Adverbs. LearnEnglish Kids</em>.',
      tipo: 'Práctica online',
      link:
        'https://learnenglishkids.britishcouncil.org/grammar-practice/adverbs',
    },
    {
      tema: '<em>Linking words</em>',
      referencia:
        'Agenda Web. (s. f.). <em>Conjunctions - Exercises: basic conjunctions</em>.',
      tipo: 'Práctica online',
      link: 'https://agendaweb.org/grammar/conjunctions-exercises.html',
    },
    {
      tema: '<em>Linking words</em>',
      referencia:
        'Castellanos, P. (2017). <em>Practicing linking sounds through listening. Rosario English Area</em>.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo2.pdf',
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
        nombre: 'Nombre',
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
        nombre: 'Nombre',
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
