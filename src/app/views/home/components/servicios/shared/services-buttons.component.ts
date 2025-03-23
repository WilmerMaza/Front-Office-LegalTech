import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services-buttons',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="button-container">
      <article class="service-item" *ngIf="currentService !== '/cartera'">
        <button class="button-item" [routerLink]="['/cartera']">
          <h3 class="service-title">Cartera</h3>
          <img class="service-image" src="assets/icons/Mayor.svg" alt="Icono de cartera" loading="lazy">
        </button>
        <div class="icon-container">
          <svg class="icon" width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 7H32L30 26H4L2 7Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9 7V4C9 2.34315 10.3431 1 12 1H22C23.6569 1 25 2.34315 25 4V7" stroke="white" stroke-width="3"/>
          </svg>
        </div>
      </article>

      <article class="service-item" *ngIf="currentService !== '/responsabilidad'">
        <button class="button-item" [routerLink]="['/responsabilidad']">
          <h3 class="service-title">Responsabilidad Civil</h3>
          <img class="service-image" src="assets/icons/Mayor.svg" alt="Icono de responsabilidad" loading="lazy">
        </button>
        <div class="icon-container">
          <svg class="icon" width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 1L2 26H32L17 1Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17 18V10M17 22V20" stroke="white" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </div>
      </article>

      <article class="service-item" *ngIf="currentService !== '/inmobiliaria'">
        <button class="button-item" [routerLink]="['/inmobiliaria']">
          <h3 class="service-title">Inmobiliario</h3>
          <img class="service-image" src="assets/icons/Mayor.svg" alt="Icono de inmobiliario" loading="lazy">
        </button>
        <div class="icon-container">
          <svg class="icon" width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.62646 10.149L17.9559 1.86169L33.2854 10.149" stroke="white" stroke-width="3.55203" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M29.879 15.4225V25.0659C29.879 25.5653 29.4215 25.97 28.8571 25.97H7.05517C6.49075 25.97 6.0332 25.5653 6.0332 25.0659V15.4225" stroke="white" stroke-width="3.55203" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </article>

      <article class="service-item" *ngIf="currentService !== '/laboral'">
        <button class="button-item" [routerLink]="['/laboral']">
          <h3 class="service-title">Laboral</h3>
          <img class="service-image" src="assets/icons/Mayor.svg" alt="Icono de laboral" loading="lazy">
        </button>
        <div class="icon-container">
          <svg class="icon" width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 14C20.866 14 24 10.866 24 7C24 3.13401 20.866 0 17 0C13.134 0 10 3.13401 10 7C10 10.866 13.134 14 17 14Z" fill="white"/>
            <path d="M32 28C32 20.268 25.732 14 18 14H16C8.26801 14 2 20.268 2 28" stroke="white" stroke-width="3"/>
          </svg>
        </div>
      </article>

      <article class="service-item" *ngIf="currentService !== '/propiedad-horizontal'">
        <button class="button-item" [routerLink]="['/propiedad-horizontal']">
          <h3 class="service-title">Propiedad Horizontal</h3>
          <img class="service-image" src="assets/icons/Mayor.svg" alt="Icono de propiedad horizontal" loading="lazy">
        </button>
        <div class="icon-container">
          <svg class="icon" width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 26H32M6 26V8L17 2L28 8V26" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 12H22M12 17H22M12 22H22" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </article>

      <article class="service-item" *ngIf="currentService !== '/derecho-comercial'">
        <button class="button-item" [routerLink]="['/derecho-comercial']">
          <h3 class="service-title">Derecho Comercial</h3>
          <img class="service-image" src="assets/icons/Mayor.svg" alt="Icono de derecho comercial" loading="lazy">
        </button>
        <div class="icon-container">
          <svg class="icon" width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 14H30M4 7H30M4 21H30" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M10 3V25M24 3V25" stroke="white" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </div>
      </article>
    </div>
  `,
  styleUrls: ['../servicios.component.scss']
})
export class ServicesButtonsComponent {
  @Input() currentService: string = '';
}