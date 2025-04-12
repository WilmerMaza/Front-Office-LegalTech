import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/home/home.component').then(c => c.HomeComponent),
    data: {
      title: 'LegalTech | Abogados Digitales y Soluciones Legales Tecnológicas',
      description:
        'Bienvenido a LegalTech. Combinamos tecnología e innovación legal para brindarte soluciones jurídicas modernas.',
      keywords:
        'LegalTech, abogados digitales, tecnología legal, soluciones legales, derecho moderno'
    }
  },
  {
    path: 'team',
    loadComponent: () => import('./views/team/team.component').then(c => c.TeamComponent),
    data: {
      title: 'Nuestro Equipo | LegalTech',
      description:
        'Conoce al equipo multidisciplinario de abogados expertos que lideran LegalTech.',
      keywords: 'equipo legal, abogados especialistas, profesionales jurídicos'
    }
  },
  {
    path: 'about',
    loadComponent: () => import('./views/nuestra-firma/nuestra-firma.component').then(c => c.NuestraFirmaComponent),
    data: {
      title: 'Nuestra Firma | LegalTech',
      description:
        'Descubre la historia, misión y visión de LegalTech, una firma pionera en derecho y tecnología.',
      keywords: 'firma de abogados, historia LegalTech, abogados digitales'
    }
  },
  {
    path: 'services',
    loadComponent: () => import('./views/service/service.component').then(c => c.ServiceComponent),
    data: {
      title: 'Servicios Jurídicos Digitales | LegalTech',
      description:
        'Ofrecemos soluciones legales personalizadas en derecho civil, comercial, laboral e inmobiliario.',
      keywords: 'servicios legales, derecho civil, derecho comercial, abogados, LegalTech'
    }
  },
  {
    path: 'cartera',
    loadComponent: () => import('./views/service/service.component').then(c => c.ServiceComponent),
    data: {
      title: 'Recuperación de Cartera | LegalTech',
      description:
        'Optimizamos la gestión de cobranza mediante estrategias legales efectivas y asesoría especializada en recuperación de cartera.',
      keywords:
        'recuperación de cartera, cobranza jurídica, abogados expertos en cobros, gestión legal de deudas'
    }
  },
  {
    path: 'inmobiliaria',
    loadComponent: () => import('./views/service/service.component').then(c => c.ServiceComponent),
    data: {
      title: 'Asesoría Inmobiliaria Legal | LegalTech',
      description:
        'Brindamos respaldo jurídico completo para operaciones inmobiliarias, protegiendo tus inversiones en arrendamientos y compraventas.',
      keywords:
        'derecho inmobiliario, asesoría legal inmobiliaria, contratos de arrendamiento, inversiones inmobiliarias'
    }
  },
  {
    path: 'laboral',
    loadComponent: () => import('./views/service/service.component').then(c => c.ServiceComponent),
    data: {
      title: 'Derecho Laboral | LegalTech',
      description:
        'Ofrecemos defensa integral y asesoría legal en relaciones laborales, despidos, contratos y conflictos entre empleador y trabajador.',
      keywords:
        'derecho laboral, conflictos laborales, despidos, contratos de trabajo, relaciones laborales'
    }
  },
  {
    path: 'responsabilidad',
    loadComponent: () => import('./views/service/service.component').then(c => c.ServiceComponent),
    data: {
      title: 'Responsabilidad Civil | LegalTech',
      description:
        'Especialistas en responsabilidad civil contractual y extracontractual, ofrecemos representación y defensa legal en casos de daños.',
      keywords:
        'responsabilidad civil, defensa jurídica, indemnización de daños, responsabilidad extracontractual'
    }
  },
  {
    path: 'propiedad-horizontal',
    loadComponent: () => import('./views/service/service.component').then(c => c.ServiceComponent),
    data: {
      title: 'Propiedad Horizontal | LegalTech',
      description:
        'Soluciones jurídicas eficaces para la administración de edificios y conjuntos, incluyendo conflictos vecinales y normativas de copropiedad.',
      keywords:
        'propiedad horizontal, administración de edificios, conflictos vecinales, régimen de copropiedad'
    }
  },
  {
    path: 'derecho-comercial',
    loadComponent: () => import('./views/service/service.component').then(c => c.ServiceComponent),
    data: {
      title: 'Derecho Comercial | LegalTech',
      description:
        'Asesoramos empresas en la constitución de sociedades, contratos mercantiles y cumplimiento de obligaciones comerciales.',
      keywords:
        'derecho comercial, sociedades, contratos mercantiles, abogados empresa, asesoría comercial'
    }
  }
];
