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
      )
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./views/nuestra-firma/nuestra-firma.component').then(
        (c) => c.NuestraFirmaComponent
      )
  },
  {
    path: 'services',
    loadComponent: () =>
      import('./views/service/service.component').then(
        (c) => c.ServiceComponent
      )
  },
  {
    path: 'cartera',
    loadComponent: () =>
      import('./views/home/components/servicios/cartera/cartera.component').then(
        (c) => c.CarteraComponent
      )
  },
  {path: 'inmobiliaria',
    loadComponent: () =>
      import('./views/home/components/servicios/inmobiliaria/inmobiliaria.component').then(
        (c) => c.InmobiliariaComponent
      )
  },
  {path: 'laboral',
    loadComponent: () =>
      import('./views/home/components/servicios/laboral/labora.component').then(
        (c) => c.LaboraComercialComponent
      )
  },
  {path: 'responsabilidad',
    loadComponent: () =>
      import('./views/home/components/servicios/respondabilidad/responsabilidad_civil.component').then(
        (c) => c.ResponsabilidadCivilComponent
      )
  },
  {
    path: 'propiedad-horizontal',
    loadComponent: () =>
      import('./views/home/components/servicios/propiedad-horizontal/propiedad-horizontal.component').then(
        (c) => c.PropiedadHorizontalComponent
      )
  },
  {
    path: 'derecho-comercial',
    loadComponent: () =>
      import('./views/home/components/servicios/derecho-comercial/derecho-comercial.component').then(
        (c) => c.DerechoComercialComponent
      )
  }
];
