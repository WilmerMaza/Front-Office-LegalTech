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
          title: 'Gestión de cartera',
          imageSrc: 'img/servicios/service_cartera_legaltech.png',
          imageAlt: 'Cobro de Cartera',
          description: 'Nos enfocamos en la gestión y recuperación de deudas de manera eficiente, realizando acciones legales y extrajudiciales para recuperar los montos adeudados.',
          bulletPoints: [
            'Comunicaciones a través de medios digitales para obtener el pago o requerimientos formales',
            'Negociación con los deudores para establecer planes de pago',
            'Presentación de procesos ejecutivos y procesos hipotecarios',
            'Ejecución de sentencias y seguimiento de la recuperación de las sumas adeudadas'
          ]
        };
        break;
      case '/inmobiliaria':
        this.currentService = {
          title: 'Derecho Inmobiliario',
          imageSrc: 'img/servicios/service_inmobiliaria_legaltech.png',
          imageAlt: 'Derecho Inmobiliario',
          description: 'Ofrecemos asesoramiento legal en todas las fases de operaciones inmobiliarias, garantizando seguridad jurídica en cada transacción:',
          bulletPoints: [
            'Asesoramiento en la compra, venta, alquiler y arrendamiento de propiedades',
            'Redacción, revisión y negociación de contratos inmobiliarios',
            'Resolución de conflictos relacionados con la propiedad',
            'Asistencia en la tramitación de documentos ante autoridades competentes',
            'Análisis de procesos hipotecarios en etapa de remate'
          ]
        };
        break;
      case '/responsabilidad':
        this.currentService = {
          title: 'Responsabilidad Civil',
          imageSrc: 'img/servicios/service_responsabilidad_legaltech.png',
          imageAlt: 'Responsabilidad Civil',
          description: 'Brindamos asesoría especializada en casos de responsabilidad civil contractual y extracontractual:',
          bulletPoints: [
            'Representación en casos de daños y perjuicios',
            'Asesoramiento en reclamaciones por responsabilidad profesional',
            'Defensa en casos de responsabilidad por productos defectuosos',
            'Negociación y resolución de conflictos extrajudiciales'
          ]
        };
        break;
      case '/laboral':
        this.currentService = {
          title: 'Derecho Laboral',
          imageSrc: 'img/servicios/service_laboral_legaltech.png',
          imageAlt: 'Derecho Laboral',
          description: 'Ofrecemos asesoría integral en asuntos laborales para empresas y trabajadores:',
          bulletPoints: [
            'Redacción y revisión de contratos laborales',
            'Representación en procesos disciplinarios y despidos',
            'Asesoramiento en negociaciones colectivas',
            'Defensa en litigios laborales',
            'Consultoría en cumplimiento normativo laboral'
          ]
        };
        break;
      case '/propiedad-horizontal':
        this.currentService = {
          title: 'Propiedad Horizontal',
          imageSrc: 'img/servicios/service_propiedad_horizontal_legaltech.png',
          imageAlt: 'Propiedad Horizontal',
          description: 'Especialistas en la gestión legal de comunidades de propietarios y edificios:',
          bulletPoints: [
            'Asesoramiento en la constitución y modificación de regímenes de propiedad horizontal',
            'Resolución de conflictos entre propietarios',
            'Representación en juntas de propietarios',
            'Consultoría en normativa de propiedad horizontal',
            'Gestión de impagos de cuotas comunitarias'
          ]
        };
        break;
      case '/derecho-comercial':
        this.currentService = {
          title: 'Derecho Comercial',
          imageSrc: 'img/servicios/service_comercial_legaltech.png',
          imageAlt: 'Derecho Comercial',
          description: 'Brindamos asesoría legal especializada para empresas y emprendedores:',
          bulletPoints: [
            'Constitución y reestructuración de sociedades',
            'Redacción y negociación de contratos mercantiles',
            'Asesoramiento en operaciones comerciales',
            'Protección de propiedad intelectual e industrial',
            'Representación en litigios comerciales'
          ]
        };
        break;
      default:
        // Servicio por defecto o redirección
        this.currentService = {
          title: 'Nuestros Servicios',
          imageSrc: 'img/servicios/service_default_legaltech.png',
          imageAlt: 'Servicios Legales',
          description: 'Ofrecemos una amplia gama de servicios legales especializados para particulares y empresas.',
          bulletPoints: []
        };
    }
  }
}

