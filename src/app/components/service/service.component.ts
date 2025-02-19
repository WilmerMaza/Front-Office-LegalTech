import { Component } from '@angular/core';
import { ServiciosComponent } from 'src/app/views/home/components/servicios/servicios.component';
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

}
