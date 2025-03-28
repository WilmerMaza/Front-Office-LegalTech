import { Component } from '@angular/core';
import { ServicesButtonsComponent } from '../shared/services-buttons.component';

@Component({
  selector: 'app-cartera',
  standalone: true,
  imports: [ServicesButtonsComponent],

  templateUrl: './cartera.html',
  styleUrls: ['../shared/service-styles.scss']
})
export class CarteraComponent { }
