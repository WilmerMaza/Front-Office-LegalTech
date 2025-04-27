import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceNavigationComponent } from '../home/components/servicios/shared/service-navigation.component';
import { ServiceContentComponent } from '../home/components/servicios/shared/service-content.component';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, ServiceNavigationComponent, ServiceContentComponent],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
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

  public ngOnInit(): void {
    // Configurar el servicio actual basado en la ruta
    this.setCurrentService(this.currentRoute);
  }

  private setCurrentService(route: string) {
    switch (route) {
      case '/cartera':
        this.currentService = {
          title: 'SERVICE.CARTERA.TITLE',
          imageSrc: 'img/servicios/service_cartera_legaltech.png',
          imageAlt: 'Cobro de Cartera',
          description: 'SERVICE.CARTERA.DESCRIPTION',
          bulletPoints: [
            'SERVICE.CARTERA.BULLETS.ONE',
            'SERVICE.CARTERA.BULLETS.TWO',
            'SERVICE.CARTERA.BULLETS.THREE',
            'SERVICE.CARTERA.BULLETS.FOUR',
          ],
        };
        break;
      case '/inmobiliaria':
        this.currentService = {
          title: 'SERVICE.INMOBILIARIA.TITLE',
          imageSrc: 'img/servicios/service_inmobiliaria_legaltech.png',
          imageAlt: 'Derecho Inmobiliario',
          description: 'SERVICE.INMOBILIARIA.DESCRIPTION',
          bulletPoints: [
            'SERVICE.INMOBILIARIA.BULLETS.ONE',
            'SERVICE.INMOBILIARIA.BULLETS.TWO',
            'SERVICE.INMOBILIARIA.BULLETS.THREE',
            'SERVICE.INMOBILIARIA.BULLETS.FOUR',
            'SERVICE.INMOBILIARIA.BULLETS.FIVE',
          ],
        };
        break;
      case '/responsabilidad':
        this.currentService = {
          title: 'SERVICE.RESPONSABILIDAD.TITLE',
          imageSrc: '/icons/responsabilidad_civil.svg',
          imageAlt: 'Responsabilidad Civil',
          description: 'SERVICE.RESPONSABILIDAD.DESCRIPTION',
          bulletPoints: [
            'SERVICE.RESPONSABILIDAD.BULLETS.ONE',
            'SERVICE.RESPONSABILIDAD.BULLETS.TWO',
            'SERVICE.RESPONSABILIDAD.BULLETS.THREE',
            'SERVICE.RESPONSABILIDAD.BULLETS.FOUR',
          ],
        };
        break;
      case '/laboral':
        this.currentService = {
          title: 'SERVICE.LABORAL.TITLE',
          imageSrc: '/icons/derecho_laboral.svg',
          imageAlt: 'Derecho Laboral',
          description: 'SERVICE.LABORAL.DESCRIPTION',
          bulletPoints: [
            'SERVICE.LABORAL.BULLETS.ONE',
            'SERVICE.LABORAL.BULLETS.TWO',
            'SERVICE.LABORAL.BULLETS.THREE',
            'SERVICE.LABORAL.BULLETS.FOUR',
            'SERVICE.LABORAL.BULLETS.FIVE',
          ],
        };
        break;
      case '/propiedad-horizontal':
        this.currentService = {
          title: 'SERVICE.PROPIEDAD.TITLE',
          imageSrc: '/icons/propiedad_horizontal.svg',
          imageAlt: 'Propiedad Horizontal',
          description: 'SERVICE.PROPIEDAD.DESCRIPTION',
          bulletPoints: [
            'SERVICE.PROPIEDAD.BULLETS.ONE',
            'SERVICE.PROPIEDAD.BULLETS.TWO',
            'SERVICE.PROPIEDAD.BULLETS.THREE',
            'SERVICE.PROPIEDAD.BULLETS.FOUR',
            'SERVICE.PROPIEDAD.BULLETS.FIVE',
          ],
        };
        break;
      case '/derecho-comercial':
        this.currentService = {
          title: 'SERVICE.COMERCIAL.TITLE',
          imageSrc: '/icons/derecho_laboral.svg',
          imageAlt: 'Derecho Comercial',
          description: 'SERVICE.COMERCIAL.DESCRIPTION',
          bulletPoints: [
            'SERVICE.COMERCIAL.BULLETS.ONE',
            'SERVICE.COMERCIAL.BULLETS.TWO',
            'SERVICE.COMERCIAL.BULLETS.THREE',
            'SERVICE.COMERCIAL.BULLETS.FOUR',
            'SERVICE.COMERCIAL.BULLETS.FIVE',
          ],
        };
        break;
      default:
        // Servicio por defecto o redirección
        this.currentService = {
          title: 'SERVICE.DEFAULT.TITLE',
          imageSrc: 'img/servicios/service_cartera_legaltech.png',
          imageAlt: 'Servicios Legales',
          description: 'SERVICE.DEFAULT.DESCRIPTION',
          bulletPoints: [],
        };
    }
  }
}
