import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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
  constructor(private readonly seo: SeoService, private translate: TranslateService) {
    this.translateOnIni(translate)
  }

  private translateOnIni(translate: TranslateService) {
    const browserLang = translate.getBrowserLang();
    const defaultLang = browserLang?.match(/en|es/) ? browserLang : 'es';

    this.translate.setDefaultLang('es');

    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang');
      this.translate.use(savedLang || defaultLang);
    } else {
      this.translate.use(defaultLang);
    }
  }

  title = 'LegalTech | Abogados Digitales y Soluciones Legales Tecnológicas';
}
