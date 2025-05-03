import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IServices } from '../../../interface/interfaceService';
import { services } from 'src/app/constant/services';

@Component({
  selector: 'app-service-navigation',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  template: `
    <div class="button-container">
      <article
        class="service-item"
        *ngFor="let service of services; let i = index"
        [class.hidden]="isCurrentService('/services/' + service.route)"
      >
        <button
          class="button-item button-effect"
          [routerLink]="['/services', service.route]"
          [attr.data-value]="service.dataValue"
          [attr.aria-labelledby]="'service-label-' + i"
        >
          <h3 class="service-title" [id]="'service-label-' + i">
            {{ service.name | translate }}
          </h3>
          <div class="icon-container">
            <img
              [attr.width]="service.iconWidth"
              [attr.height]="service.iconHeight"
              [src]="service.iconSrc"
              [alt]=""
              role="presentation"
              loading="lazy"
            />
          </div>
        </button>
      </article>
    </div>
  `,
  styleUrls: ['./service-navigation.component.scss'],
})
export class ServiceNavigationComponent {
  @Input() currentService: string = '';

  public services: IServices[] = services;

  public isCurrentService(serviceRoute: string): boolean {
    const currentPath = this.currentService.startsWith('/')
      ? this.currentService
      : '/' + this.currentService;

    return currentPath === serviceRoute;
  }
}
