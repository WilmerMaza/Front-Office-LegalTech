import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CarteraComponent } from './cartera/cartera.component';
import { InmobiliariaComponent } from './inmobiliaria/inmobiliaria.component';
import { ResponsabilidadCivilComponent } from './respondabilidad/responsabilidad_civil.component';
import { LaboraComercialComponent } from './laboral/labora.component';
import { ServicesArray } from '../../interface/interfaceService';
import { LEGALSERVICES } from 'src/app/constant/services';

// ✅ Importa los componentes de cada servicio


@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent {


    public service: ServicesArray[] = LEGALSERVICES;



  }


