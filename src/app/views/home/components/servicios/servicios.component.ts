import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServiceNavigationComponent } from './shared/service-navigation.component';
import { TranslateModule } from '@ngx-translate/core';



@Component({
  selector: 'app-servicios',
  imports: [
    CommonModule,
    RouterModule,
    ServiceNavigationComponent,
    TranslateModule
  ],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})

export class ServiciosComponent {
}



