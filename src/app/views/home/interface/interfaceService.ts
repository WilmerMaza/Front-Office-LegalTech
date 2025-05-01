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
