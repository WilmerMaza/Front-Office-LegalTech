import { Component } from '@angular/core';
import { ServiciosComponent } from 'src/app/views/home/components/servicios/servicios.component';
import { LEGALSERVICES } from 'src/app/constant/services';

import { ServicesArray } from 'src/app/views/home/interface/interfaceService';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    ServiciosComponent
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {

    public service: ServicesArray[] = LEGALSERVICES;



  }

