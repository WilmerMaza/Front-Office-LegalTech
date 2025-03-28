import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarteraComponent } from '../home/components/servicios/cartera/cartera.component';
import { InmobiliariaComponent } from '../home/components/servicios/inmobiliaria/inmobiliaria.component';
import { ResponsabilidadCivilComponent } from '../home/components/servicios/respondabilidad/responsabilidad_civil.component';
import { LaboraComercialComponent } from '../home/components/servicios/laboral/labora.component';
import { PropiedadHorizontalComponent } from '../home/components/servicios/propiedad-horizontal/propiedad-horizontal.component';
import { DerechoComercialComponent } from '../home/components/servicios/derecho-comercial/derecho-comercial.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    CommonModule,
    CarteraComponent,
    InmobiliariaComponent,
    ResponsabilidadCivilComponent,
    LaboraComercialComponent,
    PropiedadHorizontalComponent,
    DerechoComercialComponent
  ],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }
}

