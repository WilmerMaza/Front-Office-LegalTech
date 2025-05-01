import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayoutComponent } from './containers/layout/layout.component';
import { SeoService } from './shared/services/seo.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  standalone: true,
  template: `<app-layout></app-layout>`,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public title: string =
    'LegalTech | Abogados Digitales y Soluciones Legales Tecnológicas';

  constructor(
    private readonly seo: SeoService,
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  public ngOnInit(): void {
    this.translateOnIni(this.translate);
  }

  private translateOnIni(translate: TranslateService): void {
    const browserLang = this.translate.getBrowserLang();
    const defaultLang = browserLang?.match(/en|es/) ? browserLang : 'es';

    translate.setDefaultLang('es');

    const savedLang = isPlatformBrowser(this.platformId)
      ? localStorage.getItem('lang')
      : null;

    const lang = savedLang || defaultLang;
    translate.use(lang);

    // ✅ Actualizar el lang del HTML al iniciar (solo en browser)
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.lang = lang;
    }

    // ✅ Escuchar cambios de idioma y actualizar el <html lang="">
    translate.onLangChange.subscribe((event) => {
      if (isPlatformBrowser(this.platformId)) {
        document.documentElement.lang = event.lang;
      }
    });
  }
}
