import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatFormFieldModule],
  template: `<div class="lang-toggle">
    <span class="lang-icon">🌐</span>
    <div class="select-wrapper">
      <select
        (change)="handleLangChange($event)"
        [value]="currentLang"
        aria-label="Cambiar idioma"
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
      <span class="custom-arrow">▾</span>
    </div>
  </div> `,
  styleUrl: './language-switcher.scss',
})
export class LanguageSwitcherComponent {
  public currentLang: string;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    // ✅ Verificar si estamos en navegador
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang');
      this.currentLang = savedLang || translate.getDefaultLang();
      translate.use(this.currentLang);
    } else {
      // ✅ En SSR, usar el idioma por defecto (no hay localStorage)
      this.currentLang = translate.getDefaultLang();
    }
  }

  public handleLangChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.switchLang(select.value);
  }

  private switchLang(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
    }
  }
}
