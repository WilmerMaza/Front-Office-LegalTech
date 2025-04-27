import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceNavigationComponent } from '../home/components/servicios/shared/service-navigation.component';
import { ServiceContentComponent } from '../home/components/servicios/shared/service-content.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    CommonModule,
    ServiceNavigationComponent,
    ServiceContentComponent
  ],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  currentRoute: string;
  currentService: any = {};

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
    // Suscribirse a los cambios de ruta para actualizar currentRoute
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
      this.setCurrentService(this.currentRoute);
    });
  }

  ngOnInit() {
    // Configurar el servicio actual basado en la ruta
    this.setCurrentService(this.currentRoute);
  }

  setCurrentService(route: string) {
    switch (route) {
      case '/cartera':
        this.currentService = {
          title: 'SERVICE.CARTERA.TITLE',
          imageSrc: 'img/servicios/service_cartera_legaltech.png',
          imageAlt: 'Cobro de Cartera',
          description:'SERVICE.CARTERA.DESCRIPTION',
          bulletPoints: ['SERVICE.CARTERA.BULLETS' ]
        };
        break;
      case '/inmobiliaria':
        this.currentService = {
          title: 'SERVICE.INMOBILIARIA.TITLE',
          imageSrc: 'img/servicios/service_inmobiliaria_legaltech.png',
          imageAlt: 'Derecho Inmobiliario',
          description: 'SERVICE.INMOBILIARIA.DESCRIPTION',
          bulletPoints: ['SERVICE.INMOBILIARIA.DESCRIPTION']
        };
        break;
      case '/responsabilidad':
        this.currentService = {
          title: 'SERVICE.RESPONSABILIDAD.TITLE',
          imageSrc: '/icons/responsabilidad_civil.svg',
          imageAlt: 'Responsabilidad Civil',
          description: 'SERVICE.RESPONSABILIDAD.DESCRIPTION',
          bulletPoints: ['SERVICE.RESPONSABILIDAD.BULLETS' ]
        };
        break;
      case '/laboral':
        this.currentService = {
          title: 'SERVICE.LABORAL.TITLE',
          imageSrc: '/icons/derecho_laboral.svg',
          imageAlt: 'Derecho Laboral',
          description: 'SERVICE.LABORAL.DESCRIPTION',
          bulletPoints: ['SERVICE.LABORAL.BULLETS']
        };
        break;
      case '/propiedad-horizontal':
        this.currentService = {
          title: 'SERVICE.PROPIEDAD.TITLE',
          imageSrc: '/icons/propiedad_horizontal.svg',
          imageAlt: 'Propiedad Horizontal',
          description: 'SERVICE.PROPIEDAD.DESCRIPTION',
          bulletPoints: ['SERVICE.PROPIEDAD.BULLETS']
        };
        break;
      case '/derecho-comercial':
        this.currentService = {
          title: 'SERVICE.COMERCIAL.TITLE',
          imageSrc: '/icons/derecho_laboral.svg',
          imageAlt: 'Derecho Comercial',
          description: 'SERVICE.COMERCIAL.DESCRIPTION',
          bulletPoints: ['SERVICE.COMERCIAL.BULLETS']
        };
        break;
      default:
        // Servicio por defecto o redirección
        this.currentService = {
          title: 'SERVICE.DEFAULT.TITLE',
          imageSrc: 'img/servicios/service_default_legaltech.png',
          imageAlt: 'Servicios Legales',
          description: 'SERVICE.DEFAULT.DESCRIPTION',
          bulletPoints: []
        };
    }
  }
}

