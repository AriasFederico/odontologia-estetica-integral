const CLINIC_NAME = 'SONRISA+';
const SECOND_NAME = 'ODONTOLOGÍA';
const PHONE_NUMBER = '5491112345678';

const buildWaLink = (message) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

// profesionales

const whatsappMessages = {
  hero: `Hola ${CLINIC_NAME}!, quisiera consultar por un turno.`,
  coverage: `Hola ${CLINIC_NAME}!, quisiera consultar si atienden con mi obra social.`,
  services: `Hola ${CLINIC_NAME}!, quisiera consultar por un servicio`,
};

const clinicInfo = {
  location: 'Av. Corrientes 1234, Piso 3 — CABA',
  hours: 'Lun-Vie: 9:00-20:00 · Sáb: 9:00-14:00',
  tel: '(011) 1234-5678',
};

export const dataOdont = {
  branding: {
    clinicName: CLINIC_NAME,
    secondName: SECOND_NAME,

    logo: {
      // src:'imagen',
      // alt:''
      href: '/',
    },
  },

  header: {
    navLinks: [
      { id: 'services', label: 'Servicios', href: '#services' },
      { id: 'coverage', label: 'Obras sociales', href: '#coverage' },
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
    badge: 'Odontología · Buenos Aires',
    title: 'Tu sonrisa,',
    subtitle:
      'Atención personalizada con tecnología de vanguardia. Más de 15 años cuidando la salud bucal de tu familia.',
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
    title: 'Creemos que cada sonrisa cuenta una historia única.',
    metrics: [
      { stat_number: '+2.400', stat_label: 'Pacientes atendidos' },
      { stat_number: '15', stat_label: 'Años de experiencia' },
      { stat_number: '40+', stat_label: 'Obras sociales' },
    ],
    text_primary:
      'Somos un equipo de odontólogos comprometidos con la salud y el bienestar de nuestros pacientes. Desde 2009 brindamos atención personalizada en el corazón de Buenos Aires.',
    text_secondary:
      'Combinamos tecnología de vanguardia con un trato cercano y humano. Nuestro consultorio está diseñado para que cada visita sea una experiencia tranquila y confortable.',
    cta: {
      label: 'Pedir turno',
      href: buildWaLink(whatsappMessages.hero),
      variant: 'primary',
      icon: 'whatsapp',
      size: 'sm',
    },
  },

  services: {
    badge: 'lo que ofrecemos',
    title: 'Servicios',
    cta: {
      label: 'Consultar por un servicio',
      href: buildWaLink('holo'),
      icon: 'whatsapp',
      variant: 'primary',
      size: 'sm',
    },
    items: [
      {
        name: 'Odontología General',
        desc: 'Diagnóstico, prevención y tratamiento integral para el cuidado de tu salud bucal.',
      },
      {
        name: 'Estética Dental',
        desc: 'Carillas, blanqueamiento y diseño de sonrisa con resultados naturales y duraderos.',
      },
      {
        name: 'Implantes Dentales',
        desc: 'Soluciones permanentes para la recuperación funcional y estética de piezas perdidas.',
      },
      {
        name: 'Ortodoncia',
        desc: 'Tratamientos con brackets y alineadores invisibles para corregir la posición dental.',
      },
      {
        name: 'Endodoncia',
        desc: 'Tratamiento de conducto con tecnología de última generación y mínima incomodidad.',
      },
      {
        name: 'Odontopediatría',
        desc: 'Atención especializada para niños en un entorno cálido, amigable y seguro.',
      },
    ],
  },

  team: {
    badge: 'nuestro equipo',
    title: 'Profesionales',
    professionals: [
      {
        name: 'Dra. Valentina Herrera',
        initials: 'VH',
        title: 'Directora Clínica',
        speciality: 'Ortodoncia',
        message: buildWaLink(
          'Hola!, quisiera consultar con la Dra. Valentina Herrera',
        ),
      },
      {
        name: 'Dr. Martín Rodríguez',
        initials: 'MR',
        title: 'Especialista',
        speciality: 'Implantología · Cirugía Oral',
        message: buildWaLink(
          'Hola!, quisiera consultar con el Dr. Martín Rodríguez',
        ),
      },
      {
        name: 'Dra. Camila Soto',
        initials: 'CS',
        title: 'Especialista',
        speciality: 'Estética Dental · Blanqueamiento',
        message: buildWaLink(
          'Hola!, quisiera consultar con la Dra. Camila Soto',
        ),
      },
    ],
  },

  reviews: {
    badge: 'Reseñas',
    title: 'Lo que dicen nuestros pacientes',
    rating_card: {
      rating: '5.0',
      stars: 5,
      reviews: '148 reseñas',
    },

    items: [
      {
        name: 'Marcela Ríos',
        initials: 'MR',
        rating: 5,
        text: 'Excelente atención desde el primer momento. La Dra. Herrera es muy profesional y explica todo con claridad. El consultorio es moderno y limpio. 100% recomendado.',
      },
      {
        name: 'Gonzalo Pereyra',
        initials: 'GP',
        rating: 5,
        text: 'Me realizaron un implante y quedé muy conforme. El Dr. Rodríguez es muy cuidadoso y el postoperatorio fue mucho más llevadero de lo que esperaba.',
      },
      {
        name: 'Sofía Blanco',
        initials: 'SB',
        rating: 5,
        text: 'Vine por el blanqueamiento y no podría estar más feliz. La Dra. Soto es increíble, muy atenta y profesional. Ya agendé el turno para mi marido también.',
      },
      {
        name: 'Tomás Aguirre',
        initials: 'TA',
        rating: 5,
        text: 'Llevé a mis hijos y la atención fue excelente. Los chicos salieron contentos, que no es poco. Muy buen equipo y trato humano.',
      },
      {
        name: 'Lucía Ferreyra',
        initials: 'LF',
        rating: 5,
        text: 'Empecé ortodoncia hace 4 meses y los cambios ya son notables. Muy conformes con los resultados y con la atención personalizada.',
      },
      {
        name: 'Diego Méndez',
        initials: 'DM',
        rating: 5,
        text: 'Fui con mucho miedo y me fui tranquilo. El equipo hace todo para que la experiencia sea lo más cómoda posible. Gran profesionalismo.',
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

    coordenates: ``,

    cta: {
      label: 'Cómo llegar',
      href: 'https://www.google.com/maps',
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
