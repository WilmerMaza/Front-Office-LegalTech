import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/home/home.component').then((c) => c.HomeComponent),
    title: 'LegalTech - Abogados Digitales',
  },
  {
    path: 'team',
    loadComponent: () =>
      import('./views/team/team.component').then(
        (c) => c.TeamComponent
      ),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./views/home/components/nuestra-firma/nuestra-firma.component').then(
        (c) => c.NuestraFirmaComponent
      )
  }
];
