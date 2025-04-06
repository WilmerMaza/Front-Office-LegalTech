import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LEGALSERVICES } from '../../../../constant/services';
import { ServicesArray } from '../../interface/interfaceService';


@Component({
  selector: 'app-servicios',
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


