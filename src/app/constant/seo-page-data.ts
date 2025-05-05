import { environment } from 'environment/environment';
import { IServiceSeo } from '../views/home/interface/interfaceService';

export const SEO_PAGE_CONFIG: Record<string, IServiceSeo> = {
  home: {
    title: 'LegalTech | Abogados Digitales y Soluciones Legales Tecnológicas',
    description:
      'Descubre cómo LegalTech transforma el acceso a la justicia combinando innovación tecnológica con asesoría legal de alta calidad. Servicios para empresas y personas en toda Colombia.',
    keywords:
      'LegalTech, abogados digitales, servicios jurídicos, asesoría legal, derecho y tecnología, soluciones legales, derecho online, firma legal Colombia',
    faqs: [
      {
        question: '¿Qué es LegalTech?',
        answer:
          'LegalTech es una firma de abogados digitales que combina tecnología e innovación para ofrecer servicios legales más eficientes y accesibles.',
      },
      {
        question: '¿Qué servicios ofrece LegalTech?',
        answer:
          'Ofrecemos servicios en derecho comercial, laboral, propiedad horizontal, responsabilidad civil, cartera e inmobiliario.',
      },
      {
        question: '¿Dónde opera LegalTech?',
        answer:
          'LegalTech ofrece servicios legales en toda Colombia con enfoque digital y atención personalizada.',
      },
    ],
    organization: {
      '@context': 'https://schema.org',
      '@type': 'LegalService',
      name: 'LegalTech',
      url: environment.url_legal,
      logo: `${environment.url_legal}/icons/icon-192x192.png`,
      description:
        'Firma de abogados digitales especializada en soluciones legales integradas con tecnología.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Boca Grande',
        addressLocality: 'Cartagena',
        addressRegion: 'Bolívar',
        postalCode: '130001',
        addressCountry: 'CO',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+57-316-6912248',
        contactType: 'customer service',
        areaServed: 'CO',
        availableLanguage: ['Spanish', 'English'],
      },
      sameAs: ['https://www.instagram.com/legaltechabogadosdigitales'],
    },
    breadcrumb: [
      {
        name: 'Inicio',
        url: `${environment.url_legal}/`,
      },
    ],
    serviceType: 'Servicios Jurídicos Digitales para Empresas y Personas',
  },
  about: {
    title: 'Nuestra Firma | LegalTech Abogados Digitales',
    description:
      'Conoce el equipo y la trayectoria de LegalTech, una firma de abogados digitales comprometida con la innovación y la excelencia jurídica.',
    keywords:
      'abogados digitales, firma legal, equipo jurídico, LegalTech Colombia, derecho innovador, bufete de abogados, expertos legales',
    serviceType: 'Firma Legal',

    breadcrumb: [
      { name: 'Inicio', url: `${environment.url_legal}/` },
      {
        name: 'Nuestra Firma',
        url: `${environment.url_legal}/about`,
      },
    ],
    faqs: [
      {
        question: '¿Qué servicios ofrece LegalTech como firma legal?',
        answer:
          'Ofrecemos soluciones legales innovadoras en áreas como derecho laboral, comercial, civil e inmobiliario, integrando herramientas digitales.',
      },
      {
        question: '¿Dónde se encuentra ubicada la firma?',
        answer:
          'Nuestra oficina principal se encuentra en Bocagrande, Cartagena, pero ofrecemos asesorías en toda Colombia.',
      },
      {
        question: '¿Qué diferencia a LegalTech de otras firmas?',
        answer:
          'Somos pioneros en combinar derecho con tecnología para ofrecer servicios más eficientes, seguros y transparentes.',
      },
    ],
  },
  team: {
    title: 'Nuestro Equipo | LegalTech',
    description:
      'Conoce al equipo de abogados y profesionales detrás de LegalTech. Especialistas en derecho y tecnología, comprometidos con tu tranquilidad legal.',
    keywords:
      'equipo legal, abogados LegalTech, profesionales del derecho, expertos legales, equipo jurídico, abogados digitales',
    serviceType: 'Equipo Legal',
    breadcrumb: [
      { name: 'Inicio', url: `${environment.url_legal}/` },
      {
        name: 'Nuestro Equipo',
        url: `${environment.url_legal}/team`,
      },
    ],
    faqs: [
      {
        question: '¿Quiénes conforman el equipo de LegalTech?',
        answer:
          'Nuestro equipo está formado por abogados especialistas en derecho civil, comercial, laboral y nuevas tecnologías, apoyados por profesionales en ingeniería y diseño legal.',
      },
      {
        question: '¿Cuál es la experiencia del equipo?',
        answer:
          'Contamos con más de 20 años combinados de experiencia en el ejercicio del derecho y asesoría tecnológica aplicada al sector jurídico.',
      },
      {
        question: '¿Dónde se encuentra el equipo de LegalTech?',
        answer:
          'Nuestro equipo está ubicado en Cartagena, Colombia, pero ofrecemos servicios legales digitales en todo el país.',
      },
    ],
  },
};
