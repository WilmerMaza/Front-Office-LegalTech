export interface ImgInterface {
  src: string;
  srcMovil?: string;
  alt: string;
  text?: string;
  role?: string;
  arial?: string;
  title?: string;
  name?: string;
  loading?:string;
}

export interface TeamMember {
  img: string;
  img_movil: string;
  name: string;
  position: string;
  description: string;
}

export interface TeamArray {
  img?: string;
  name?: string;
  position?: string;
  educacion?: string;
  formacion?: string;
  contacto?: string;
  experiencia?: string;
  img_movil?: string;
  description?: string;
  person?: string;
  link?: string;
}

export interface INav {
  label: string;
  link: string;
  icon: string;
  class?: string;
}
