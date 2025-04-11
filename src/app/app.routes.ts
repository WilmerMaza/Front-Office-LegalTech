import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./views/home/home.component').then(c => c.HomeComponent),
        data: {
            title: 'LegalTech | Abogados Digitales y Soluciones Legales Tecnológicas',
            description: 'Bienvenido a LegalTech. Combinamos tecnología e innovación legal para brindarte soluciones jurídicas modernas.',
            keywords: 'LegalTech, abogados digitales, tecnología legal, soluciones legales, derecho moderno'
        }
    },
    {
        path: 'team',
        loadComponent: () => import('./views/team/team.component').then(c => c.TeamComponent),
        data: {
            title: 'Nuestro Equipo | LegalTech',
            description: 'Conoce al equipo multidisciplinario de abogados expertos que lideran LegalTech.',
            keywords: 'equipo legal, abogados especialistas, profesionales jurídicos'
        }
    },
    {
        path: 'about',
        loadComponent: () => import('./views/nuestra-firma/nuestra-firma.component').then(c => c.NuestraFirmaComponent),
        data: {
            title: 'Nuestra Firma | LegalTech',
            description: 'Descubre la historia, misión y visión de LegalTech, una firma pionera en derecho y tecnología.',
            keywords: 'firma de abogados, historia LegalTech, abogados digitales'
        }
    },
    {
        path: 'services',
        loadComponent: () => import('./views/service/service.component').then(c => c.ServiceComponent),
        data: {
            title: 'Servicios Jurídicos Digitales | LegalTech',
            description: 'Ofrecemos soluciones legales personalizadas en derecho civil, comercial, laboral e inmobiliario.',
            keywords: 'servicios legales, derecho civil, derecho comercial, abogados, LegalTech'
        }
    },
    {
        path: 'cartera',
        loadComponent: () => import('./views/service/service.component').then(c => c.ServiceComponent),
        data: {
            title: 'Recuperación de Cartera | LegalTech',
            description: 'Maximiza la eficiencia en el cobro de cartera con nuestra asesoría legal especializada.',
            keywords: 'recuperación de cartera, cobranza jurídica, abogados cartera'
        }
    },
    {
        path: 'inmobiliaria',
        loadComponent: () => import('./views/service/service.component').then(c => c.ServiceComponent),
        data: {
            title: 'Asesoría Inmobiliaria Legal | LegalTech',
            description: 'Protege tus inversiones inmobiliarias con respaldo legal especializado.',
            keywords: 'derecho inmobiliario, asesoría legal inmobiliaria, contratos de arrendamiento'
        }
    },
    {
        path: 'laboral',
        loadComponent: () => import('./views/service/service.component').then(c => c.ServiceComponent),
        data: {
            title: 'Derecho Laboral | LegalTech',
            description: 'Defensa y asesoría en conflictos laborales, contratos y relaciones de trabajo.',
            keywords: 'derecho laboral, conflictos laborales, despidos, contratos de trabajo'
        }
    },
    {
        path: 'responsabilidad',
        loadComponent: () => import('./views/service/service.component').then(c => c.ServiceComponent),
        data: {
            title: 'Responsabilidad Civil | LegalTech',
            description: 'Te asesoramos y defendemos en casos de responsabilidad civil contractual y extracontractual.',
            keywords: 'responsabilidad civil, defensa jurídica, indemnización de daños'
        }
    },
    {
        path: 'propiedad-horizontal',
        loadComponent: () => import('./views/service/service.component').then(c => c.ServiceComponent),
        data: {
            title: 'Propiedad Horizontal | LegalTech',
            description: 'Gestión y solución de conflictos legales en conjuntos residenciales y edificios.',
            keywords: 'propiedad horizontal, administración de edificios, conflictos vecinales'
        }
    },
    {
        path: 'derecho-comercial',
        loadComponent: () => import('./views/service/service.component').then(c => c.ServiceComponent),
        data: {
            title: 'Derecho Comercial | LegalTech',
            description: 'Asesoría legal en sociedades, contratos mercantiles y obligaciones comerciales.',
            keywords: 'derecho comercial, sociedades, contratos mercantiles, abogados empresa'
        }
    }
];
