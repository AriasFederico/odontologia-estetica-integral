import icon from '../../public/icon.png';

const CLINIC_NAME = 'Odontología';
const SECOND_NAME = 'Estética Integral';
const PHONE_NUMBER = '5491124011047';

const buildWaLink = (message) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

// profesionales

const whatsappMessages = {
  hero: `Hola!, quisiera consultar por un turno.`,
  coverage: `Hola!, quisiera consultar si atienden con mi obra social.`,
  services: `Hola!, quisiera consultar por un servicio`,
};

const clinicInfo = {
  location: 'Av centenario 5432 - Quilmes, Buenos Aires 1882',
  hours: 'Lun-Sáb: 9:00-19:00 · Dom: Urgencias',
  tel: '(011) 2401-1047',
};

export const dataOdont = {
  branding: {
    clinicName: CLINIC_NAME,
    secondName: SECOND_NAME,

    logo: {
      src: icon,
      alt: 'Odontología Estética Integral',
      href: '/',
    },
  },

  header: {
    navLinks: [
      { id: 'services', label: 'Servicios', href: '#services' },
      // { id: 'coverage', label: 'Obras sociales', href: '#coverage' },
      { id: 'location', label: 'Ubicación', href: '#location' },
      { id: 'reviews', label: 'Opiniones', href: '#reviews' },
    ],
    cta: {
      label: 'Pedir turno',
      href: buildWaLink(whatsappMessages.hero),
      variant: 'primary',
      icon: 'whatsapp',
    },
  },

  hero: {
    badge: 'Odontología · Ezpeleta',
    title: 'Cuidamos tu sonrisa con ',
    subtitle:
      'Atención odontológica personalizada y más de 12 años acompañando el cuidado de tu salud bucal.',
    cta: [
      {
        label: 'Pedir turno por WhatsApp',
        href: buildWaLink(whatsappMessages.hero),
        variant: 'primary',
        icon: 'whatsapp',
      },
      { label: 'Servicios', href: '#services', variant: 'secondary', icon: '' },
    ],
  },

  about: {
    infoAbout: {
      infoLocation: [
        {
          label: clinicInfo.location,
          icon: 'location',
        },
        { label: clinicInfo.tel, icon: 'tel' },
      ],
      cta: {
        label: 'Consultas por WhatsApp',
        href: buildWaLink(whatsappMessages.hero),
        icon: 'whatsapp',
        variant: 'primary',
      },
    },
    badge: 'quiénes somos',
    title: 'Más de 12 años acompañando el cuidado de tu sonrisa.',
    metrics: [
      { stat_number: 'Atención', stat_label: 'Personalizada' },
      { stat_number: '+12', stat_label: 'Años de experiencia' },
      { stat_number: 'Odontología', stat_label: 'Integral' },
    ],
    text_primary:
      'En Odontología Estética Integral trabajamos para brindar una atención odontológica cercana y personalizada, acompañando a cada paciente en el cuidado de su salud bucal.',
    text_secondary:
      'Contamos con atención especializada en distintas áreas de la odontología, buscando ofrecer soluciones adaptadas a las necesidades de cada paciente y una experiencia de atención profesional y humana.',
    cta: {
      label: 'Pedir turno',
      href: buildWaLink(whatsappMessages.hero),
      variant: 'primary',
      icon: 'whatsapp',
      size: 'sm',
    },
  },

  services: {
    badge: 'tratamientos',
    title: 'Cuidamos tu sonrisa',
    cta: {
      label: 'Consultar por un servicio',
      href: buildWaLink('holo'),
      icon: 'whatsapp',
      variant: 'primary',
      size: 'sm',
    },
    items: [
      {
        name: 'Extracciones',
        desc: 'Realizamos extracciones dentales de manera segura y cuidadosa, priorizando el bienestar y la comodidad de cada paciente.',
      },
      {
        name: 'Odontología estética',
        desc: 'Tratamientos orientados a mejorar la apariencia de tu sonrisa, buscando resultados naturales y acordes a cada persona.',
      },
      {
        name: 'Blanqueamiento dental',
        desc: 'Devolvé luminosidad a tu sonrisa con un tratamiento pensado para lograr dientes más blancos y una apariencia natural.',
      },
      {
        name: 'Ortodoncia',
        desc: 'Corregimos la posición de los dientes y mejoramos la mordida para lograr una sonrisa más alineada y saludable.',
      },
      {
        name: 'Implantes',
        desc: 'Una alternativa para reemplazar piezas dentales perdidas y recuperar la funcionalidad y estética de tu sonrisa.',
      },
      {
        name: 'Prótesis',
        desc: 'Soluciones personalizadas para reemplazar piezas dentales y recuperar la comodidad, funcionalidad y estética al sonreír.',
      },
    ],
  },

  team: {
    badge: 'profesional',
    title: 'Atención profesional y personalizada.',
    professionals: [
      {
        name: '[Nombre del Profesional]',
        initials: 'NP',
        title: 'Directora Clínica',
        speciality: 'Especialidad',
        message: buildWaLink(
          'Hola!, quisiera consultar con la Dra. Valentina Herrera',
        ),
      },
    ],
  },

  reviews: {
    badge: 'Reseñas',
    title: 'Lo que dicen nuestros pacientes',
    rating_card: {
      rating: '4.8',
      stars: 5,
      reviews: '5 reseñas',
    },

    items: [
      {
        name: 'Romina Avalos',
        initials: 'RA',
        rating: 5,
        text: 'Hoy fui  a sacarme una muela. La atención  fue excelente. Muy buenos profesionales.',
      },
      {
        name: 'Aylen Bravo',
        initials: 'AB',
        rating: 5,
        text: 'Me hicieron la extracción de una muela que tenía destrozada, no me dolió nada, PERO NADA😭✨ impecable la atención y muy profesionales, tengo que volver para una limpieza 🙏🏻…',
      },
      {
        name: 'Mariana Quiroga',
        initials: 'BC',
        rating: 5,
        text: 'Execelente atención El odontólogo súper bien ,apesar del miedo que teníayo, un genio .me saco una muela de juicio. Y la chica la secretaria súper amable No duden en ir Ahora a recuperarme.',
      },
      {
        name: 'Silvita Elena',
        initials: 'SE',
        rating: 5,
        text: 'El consultorio del dr. Oliver y equipo es uno de los mejores de la zona muy buena atención muy educados y muy dedicados en sus funciones son muy agradables y a medida que te están tratando te consulta en todo momento si están bien son muy cuidadosos en su materia para evitar que los pacientes tengan algún dolor, estan muy pendiente para encontrar mucha conformidad con los trabajos que realicen y resulten perfecto yo particularmente realmente estoy muy conforme con los tratamientos obtenidos por ellos . Los recomiendo sin duda. co',
      },
      {
        name: 'Rosita Irala',
        initials: 'RI',
        rating: 5,
        text: 'Excelente atención y buen servicio...estamos muy satisfechas con mi hija, seguiremos eligiendolos',
      },
      {
        name: 'Cata Romero Ramos',
        initials: 'CR',
        rating: 5,
        text: 'El 26/12/24 fuimos de urgencia con mi marido, lo encontramos por Google y no dudamos ya que había un diente con nervio expuesto, no era solamente estético, el dr súper amable, solucionó por completo el problema que había sido tratado por otro dentista de manera ineficiente. Ya pasó 1 año y medio y el arreglo está excelente.',
      },
    ],
  },

  location: {
    badge: 'cómo llegar',
    title: 'Ubicación',
    items: [
      {
        icon: 'location',
        label: 'Dirección',
        desc: clinicInfo.location,
      },
      {
        icon: 'clock',
        label: 'Horarios',
        desc: clinicInfo.hours,
      },
      { icon: 'tel', label: 'Teléfono', desc: clinicInfo.tel },
    ],

    coordenates: `-34.75493765992903, -58.23785322982126`,

    cta: {
      label: 'Cómo llegar',
      href: 'https://www.google.com/maps/place/Consultorio+Odontol%C3%B3gico+Bracket+Day/@-34.7549385,-58.2382263,19.43z/data=!4m6!3m5!1s0x95a32ee0804b003f:0x1d859840f29f9613!8m2!3d-34.7549541!4d-58.2378535!16s%2Fg%2F11lf025lyh?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D',
      size: 'sm',
      icon: 'send',
    },
  },

  coverage: {
    badge: 'convenios',
    title: 'Obras sociales',
    items: [
      'OSDE',
      'Swiss Medical',
      'IOMA',
      'PAMI',
      'Medicus',
      'Galeno',
      'Medifé',
      'OSPEDYC',
      'Sancor Salud',
      'Accord Salud',
      'OSPRERA',
      'Federada Salud',
    ],
    span: '¿No encontrás tu cobertura? Consultanos — trabajamos con más de 40 obras sociales y prepagas.',
  },

  footer: {
    clinicName: CLINIC_NAME,
    location: clinicInfo.location,
    cta: {
      label: 'Escribinos por WhatsApp',
      icon: 'whatsapp',
      href: buildWaLink(whatsappMessages.hero),
    },
    copy: `© 2026 ${CLINIC_NAME} Odontología`,
  },
};
