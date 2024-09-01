import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./views/home/home.component').then((c) => c.HomeComponent),
    title: 'LegalTech - Abogados Digitales',
  },
  {
    path: 'Example',
    loadComponent: () =>
      import('./views/example/example.component').then(
        (c) => c.ExampleComponent
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
