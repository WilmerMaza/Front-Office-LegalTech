import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

interface ServiceContent {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  bulletPoints: string[];
}

@Component({
  selector: 'app-service-content',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <div class="service-us">
      <div class="service-content">
        <div class="service-header-text">
          <h2 class="service-title">
            <span class="strong">{{ service.title | translate }}</span>
          </h2>
          <hr class="service-divider" />
        </div>

        <div class="service-image">
          <img
            class="image"
            [src]="service.imageSrc"
            [alt]="service.imageAlt"
          />
        </div>

        <div class="service-text">
          <p class="service-text-principal">{{ service.description |  translate }}</p>
        </div>
      </div>
      <div class="services-box">
        <p *ngFor="let point of service.bulletPoints">• {{ point | translate }}</p>
      </div>
    </div>
  `,
  styleUrls: ['../shared/service-styles.scss'],
})
export class ServiceContentComponent {
  @Input() service: ServiceContent = {
    title: '',
    imageSrc: '',
    imageAlt: '',
    description: '',
    bulletPoints: [],
  };
}
