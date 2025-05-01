import { Routes } from '@angular/router';

export const coreRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../views/home/home.component').then((c) => c.HomeComponent),
    data: {
      title: 'LegalTech | Abogados Digitales y Soluciones Legales Tecnológicas',
      description:
        'Bienvenido a LegalTech. Combinamos tecnología e innovación legal para brindarte soluciones jurídicas modernas.',
      keywords:
        'LegalTech, abogados digitales, tecnología legal, soluciones legales, derecho moderno',
    },
  },
  {
    path: 'team',
    loadComponent: () =>
      import('../views/team/team.component').then((c) => c.TeamComponent),
    data: {
      title: 'Nuestro Equipo | LegalTech',
      description:
        'Conoce al equipo multidisciplinario de abogados expertos que lideran LegalTech.',
      keywords: 'equipo legal, abogados especialistas, profesionales jurídicos',
    },
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../views/nuestra-firma/nuestra-firma.component').then(
        (c) => c.NuestraFirmaComponent
      ),
    data: {
      title: 'Nuestra Firma | LegalTech',
      description:
        'Descubre la historia, misión y visión de LegalTech, una firma pionera en derecho y tecnología.',
      keywords: 'firma de abogados, historia LegalTech, abogados digitales',
    },
  },
];
