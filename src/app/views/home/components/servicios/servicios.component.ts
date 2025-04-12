import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ServicesArray } from '../../interface/interfaceService';
import { ServiceNavigationComponent } from './shared/service-navigation.component';


@Component({
  selector: 'app-servicios',
  imports: [
    CommonModule,
    RouterModule,
    ServiceNavigationComponent
  ],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})

export class ServiciosComponent {
}



