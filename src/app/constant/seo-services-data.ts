import { IServiceSeo } from '../views/home/interface/interfaceService';

export const SEO_SERVICE_CONFIG: Record<string, IServiceSeo> = {
  cartera: {
    title: 'Gestión de Cartera Legal | LegalTech',
    description:
      'Soluciones legales para recuperación de cartera jurídica respaldadas por tecnología.',
    keywords:
      'cartera legal, cobros jurídicos, cobranza legal, recuperación de cartera',
    serviceType: 'Gestión de Cartera Legal',
    breadcrumb: [
      { name: 'Inicio', url: 'https://abogadosdigitales.com.co/' },
      { name: 'Servicios', url: 'https://abogadosdigitales.com.co/services' },
      {
        name: 'Cobro de Cartera',
        url: 'https://abogadosdigitales.com.co/services/cartera',
      },
    ],
    faqs: [
      {
        question: '¿Qué es la gestión jurídica de cartera?',
        answer:
          'Es el proceso legal de cobro de deudas vencidas mediante requerimientos y procesos judiciales si es necesario.',
      },
      {
        question: '¿Pueden cobrar deudas de personas o empresas?',
        answer:
          'Sí, representamos tanto a personas naturales como jurídicas en procesos de recuperación de cartera.',
      },
    ],
  },
  inmobiliaria: {
    title: 'Derecho Inmobiliario | LegalTech',
    description:
      'Asesoría legal experta en compraventa, arrendamientos y propiedad horizontal.',
    keywords: 'derecho inmobiliario, asesoría legal, propiedad horizontal',
    serviceType: 'Derecho Inmobiliario',
    breadcrumb: [
      { name: 'Inicio', url: 'https://abogadosdigitales.com.co/' },
      { name: 'Servicios', url: 'https://abogadosdigitales.com.co/services' },
      {
        name: 'Derecho Inmobiliario',
        url: 'https://abogadosdigitales.com.co/services/inmobiliaria',
      },
    ],
    faqs: [
      {
        question: '¿Pueden revisar contratos de arriendo o compraventa?',
        answer:
          'Sí, ofrecemos revisión legal y redacción de contratos inmobiliarios para evitar cláusulas abusivas.',
      },
      {
        question: '¿Qué hago si tengo problemas con un inquilino?',
        answer:
          'Te asesoramos y representamos en procesos de restitución de inmueble o incumplimiento contractual.',
      },
    ],
  },
  laboral: {
    title: 'Derecho Laboral | LegalTech',
    description: 'Consultoría legal en derecho laboral individual y colectivo.',
    keywords: 'derecho laboral, contratos, liquidaciones, despidos',
    serviceType: 'Derecho Laboral',
    breadcrumb: [
      { name: 'Inicio', url: 'https://abogadosdigitales.com.co/' },
      { name: 'Servicios', url: 'https://abogadosdigitales.com.co/services' },
      {
        name: 'Derecho Laboral',
        url: 'https://abogadosdigitales.com.co/services/laboral',
      },
    ],
    faqs: [
      {
        question: '¿Asesoran tanto a empleadores como a empleados?',
        answer:
          'Sí, brindamos representación y asesoría integral para ambas partes en conflictos laborales.',
      },
      {
        question: '¿Qué pasa si tengo un despido injustificado?',
        answer:
          'Te asesoramos legalmente para presentar una reclamación y proteger tus derechos.',
      },
    ],
  },
  responsabilidad: {
    title: 'Responsabilidad Civil | LegalTech',
    description:
      'Soluciones legales por daños y perjuicios, accidentes y negligencia.',
    keywords: 'responsabilidad civil, indemnización, accidentes',
    serviceType: 'Responsabilidad Civil',
    breadcrumb: [
      { name: 'Inicio', url: 'https://abogadosdigitales.com.co/' },
      { name: 'Servicios', url: 'https://abogadosdigitales.com.co/services' },
      {
        name: 'Responsabilidad Civil',
        url: 'https://abogadosdigitales.com.co/services/responsabilidad',
      },
    ],
    faqs: [
      {
        question: '¿Qué tipo de casos cubren en responsabilidad civil?',
        answer:
          'Cubren daños y perjuicios derivados de accidentes, negligencia médica o incumplimiento de contratos.',
      },
      {
        question: '¿Cómo sé si tengo un caso de responsabilidad civil?',
        answer:
          'Te ayudamos a evaluar si existe un daño, una relación causal y un responsable legal.',
      },
    ],
  },
  'propiedad-horizontal': {
    title: 'Propiedad Horizontal | LegalTech',
    description:
      'Asistencia legal en administración, conflictos y reglamentos de propiedad horizontal.',
    keywords: 'propiedad horizontal, reglamentos, administración',
    serviceType: 'Propiedad Horizontal',
    breadcrumb: [
      { name: 'Inicio', url: 'https://abogadosdigitales.com.co/' },
      { name: 'Servicios', url: 'https://abogadosdigitales.com.co/services' },
      {
        name: 'Propiedad Horizontal',
        url: 'https://abogadosdigitales.com.co/services/propiedad-horizontal',
      },
    ],
    faqs: [
      {
        question:
          '¿Pueden resolver conflictos entre vecinos en una copropiedad?',
        answer:
          'Sí, mediamos y asesoramos jurídicamente para resolver disputas dentro de la propiedad horizontal.',
      },
      {
        question:
          '¿Ofrecen servicios de administración jurídica para conjuntos?',
        answer:
          'Sí, acompañamos jurídicamente a administradores y consejos de administración.',
      },
    ],
  },
  'derecho-comercial': {
    title: 'Derecho Comercial | LegalTech',
    description: 'Constitución de empresas, contratos y litigios comerciales.',
    keywords: 'derecho comercial, contratos, empresas, litigios',
    serviceType: 'Derecho Comercial',
    breadcrumb: [
      { name: 'Inicio', url: 'https://abogadosdigitales.com.co/' },
      { name: 'Servicios', url: 'https://abogadosdigitales.com.co/services' },
      {
        name: 'Derecho Comercial',
        url: 'https://abogadosdigitales.com.co/services/derecho-comercial',
      },
    ],
    faqs: [
      {
        question: '¿Qué servicios ofrece LegalTech en derecho comercial?',
        answer:
          'Asesoramos en la constitución de empresas, contratos mercantiles y cumplimiento normativo comercial.',
      },
      {
        question: '¿Puedo registrar mi marca con LegalTech?',
        answer:
          'Sí, ofrecemos acompañamiento legal completo en el registro de marcas y propiedad industrial.',
      },
    ],
  },
  defaul: {
    title: 'Servicios Legales Digitales | LegalTech',
    description: 'Soluciones legales innovadoras con enfoque tecnológico.',
    keywords: 'legaltech, abogados digitales, servicios legales',
    serviceType: 'Servicios Legales',
    breadcrumb: [
      { name: 'Inicio', url: 'https://abogadosdigitales.com.co/' },
      { name: 'Servicios', url: 'https://abogadosdigitales.com.co/services' },
    ],
    faqs: [
      {
        question: '¿Qué servicios ofrece LegalTech?',
        answer:
          'Brindamos asesoría jurídica en diversas áreas, incluyendo laboral, inmobiliario y más.',
      },
    ],
  },
};
