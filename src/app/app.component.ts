import { Component } from '@angular/core';
import { LayoutComponent } from './containers/layout/layout.component';
import { SeoService } from './shared/services/seo.service';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  standalone: true,
  template: `<app-layout></app-layout>`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private readonly seo: SeoService) { }
  title = 'LegalTech | Abogados Digitales y Soluciones Legales Tecnológicas';
}
