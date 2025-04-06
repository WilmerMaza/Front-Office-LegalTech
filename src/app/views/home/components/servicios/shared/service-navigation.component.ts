import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="button-container">
      <article class="service-item" *ngFor="let service of services" [class.hidden]="currentService === service.route">
        <button class="button-item" [routerLink]="[service.route]" [attr.data-value]="service.dataValue" [attr.aria-label]="service.ariaLabel">
          <h3 class="service-title">{{service.name}}</h3>
          <img class="service-image" src="icons/Mayor.svg" [alt]="'Icono de ' + service.name" loading="lazy">
        </button>
        <div class="icon-container" [innerHTML]="service.icon"></div>
      </article>
    </div>
  `,
  styleUrls: ['../servicios.component.scss']
})
export class ServiceNavigationComponent {
  @Input() currentService: string = '';

  services = [
    {
      name: 'Cartera',
      route: '/cartera',
      dataValue: 'Portfolio',
      ariaLabel: 'Portfolio',
      icon: '<!-- SVG for Cartera -->'
    },
    {
      name: 'Responsabilidad Civil',
      route: '/responsabilidad',
      dataValue: 'Liability',
      ariaLabel: 'Civil Liability',
      icon: '<!-- SVG for Responsabilidad -->'
    },
    {
      name: 'Inmobiliario',
      route: '/inmobiliaria',
      dataValue: 'RealEstate',
      ariaLabel: 'Real Estate',
      icon: '<!-- SVG for Inmobiliario -->'
    },
    {
      name: 'Laboral',
      route: '/laboral',
      dataValue: 'SmallBusiness',
      ariaLabel: 'Labor and Commercial',
      icon: '<!-- SVG for Laboral -->'
    },
    {
      name: 'Propiedad Horizontal',
      route: '/propiedad-horizontal',
      dataValue: 'PropertyManagement',
      ariaLabel: 'Property Management',
      icon: '<svg class="icon" width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 26H32M6 26V8L17 2L28 8V26" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 12H22M12 17H22M12 22H22" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>'
    },
    {
      name: 'Derecho Comercial',
      route: '/derecho-comercial',
      dataValue: 'Commercial',
      ariaLabel: 'Commercial Law',
      icon: '<svg class="icon" width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 14H30M4 7H30M4 21H30" stroke="white" stroke-width="3" stroke-linecap="round"/><path d="M10 3V25M24 3V25" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>'
    }
  ];
}