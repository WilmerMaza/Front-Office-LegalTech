export interface ServicesArray {
  id: string;
  title: string;
  description: string;
}

export interface IServices {
  name: string;
  route: string;
  dataValue: string;
  ariaLabel: string;
  iconSrc: string;
  iconAlt: string;
  iconWidth?: number; // opcional
  iconHeight?: number; // opcional
}

export interface IServiceConfig {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  bulletPoints: string[];
}

export interface IServiceSeo {
  title: string;
  description: string;
  keywords: string;
  serviceType: string;
  faqs?: IServiceFaqSeo[];
  breadcrumb?: IServiceBreadSeo[];
  organization?: ISeoOrganization;
}

export interface ISeoOrganization {
  '@context': 'https://schema.org';
  '@type': 'LegalService';
  name: string;
  url: string;
  logo?: string;
  description: string;
  address: {
    '@type': 'PostalAddress';
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    '@type': 'ContactPoint';
    telephone: string;
    contactType: string;
    areaServed?: string;
    availableLanguage?: string[]; // e.g., ["Spanish", "English"]
  };
  sameAs?: string[]; // redes sociales u otras URLs públicas
}

export interface IServiceFaqSeo {
  question: string;
  answer: string;
}
export interface IServiceBreadSeo {
  name: string;
  url: string;
}
