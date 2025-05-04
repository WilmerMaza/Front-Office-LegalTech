import { Routes } from '@angular/router';

export const coreRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../views/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'team',
    loadComponent: () =>
      import('../views/team/team.component').then((c) => c.TeamComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../views/nuestra-firma/nuestra-firma.component').then(
        (c) => c.NuestraFirmaComponent
      ),
  },
];
