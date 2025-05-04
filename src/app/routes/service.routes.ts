import { Routes } from '@angular/router';

export const serviceRoutes: Routes = [
  {
    path: 'services',
    loadComponent: () =>
      import('../views/service/service.component').then(
        (m) => m.ServiceComponent
      ),

    children: [
      {
        path: 'cartera',
        loadComponent: () =>
          import('../views/service/service.component').then(
            (m) => m.ServiceComponent
          ),
      },
      {
        path: 'inmobiliaria',
        loadComponent: () =>
          import('../views/service/service.component').then(
            (m) => m.ServiceComponent
          ),
      },
      {
        path: 'laboral',
        loadComponent: () =>
          import('../views/service/service.component').then(
            (m) => m.ServiceComponent
          ),
      },
      {
        path: 'responsabilidad',
        loadComponent: () =>
          import('../views/service/service.component').then(
            (m) => m.ServiceComponent
          ),
      },
      {
        path: 'propiedad-horizontal',
        loadComponent: () =>
          import('../views/service/service.component').then(
            (m) => m.ServiceComponent
          ),
      },
      {
        path: 'derecho-comercial',
        loadComponent: () =>
          import('../views/service/service.component').then(
            (m) => m.ServiceComponent
          ),
      },
    ],
  },
];
