import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="button-container">
      <article class="service-item" *ngFor="let service of services" [class.hidden]="isCurrentService(service.route)">
        <button class="button-item button-effect" [routerLink]="[service.route]" [attr.data-value]="service.dataValue" [attr.aria-label]="service.ariaLabel">
          <h3 class="service-title">{{service.name}}</h3>
          <div class="icon-container" [innerHTML]="service.icon"></div>
        </button>
      </article>
    </div>
  `,
  styleUrls: ['./service-navigation.component.scss']
})
export class ServiceNavigationComponent {
  @Input() currentService: string = '';

  isCurrentService(serviceRoute: string): boolean {
    const currentPath = this.currentService.startsWith('/') ? this.currentService : '/' + this.currentService;
    return currentPath === serviceRoute;
  }

  services = [
    {
      name: 'Cartera',
      route: '/cartera',
      dataValue: 'Portfolio',
      ariaLabel: 'Portfolio',
      icon: '<img class="icon" width="34" height="28" src="/icons/cartera.webp" alt="cartera" loading="lazy">'
    },
    {
      name: 'Responsabilidad Civil',
      route: '/responsabilidad',
      dataValue: 'Liability',
      ariaLabel: 'Civil Liability',
      icon: '<img class="icon" width="34" height="28" src="icons/igroup.webp" alt="Responsabilidad Civil" loading="lazy">'
    },
    {
      name: 'Inmobiliario',
      route: '/inmobiliaria',
      dataValue: 'RealEstate',
      ariaLabel: 'Real Estate',
      icon: '<img class="icon" width="34" height="28" src="/icons/home.webp" alt="inmobiliario" loading="lazy">'
    },
    {
      name: 'Laboral',
      route: '/laboral',
      dataValue: 'SmallBusiness',
      ariaLabel: 'Labor and Commercial',
      icon: '<img class="icon" width="34" height="28" src="/icons/bolso.webp" alt="laboral" loading="lazy">'
    },
    {
      name: 'Propiedad Horizontal',
      route: '/propiedad-horizontal',
      dataValue: 'PropertyManagement',
      ariaLabel: 'Property Management',
      icon: '<img class="icon" width="41" height="50" src="/icons/icon-edificio.svg" alt="propiedad horizontal" loading="lazy">'
    },
    {
      name: 'Derecho Comercial',
      route: '/derecho-comercial',
      dataValue: 'Commercial',
      ariaLabel: 'Commercial Law',
      icon: '<img class="icon" width="41" height="50" src="/icons/icon-peso-blanco.svg" alt="derecho comercial" loading="lazy">'
    }

  ];
}
