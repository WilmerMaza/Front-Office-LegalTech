import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
    <select (change)="handleLangChange($event)" [value]="currentLang" aria-label="Cambiar idioma">
      <option value="es">Español</option>
      <option value="en">English</option>
    </select>
    <span class="custom-arrow">▾</span>
  </div>
</div>
`,
  styleUrl: './language-switcher.scss',
})
export class LanguageSwitcherComponent {
  currentLang: string;

  constructor(private translate: TranslateService) {
    this.currentLang = localStorage.getItem('lang') || translate.getDefaultLang();
    this.translate.use(this.currentLang);
  }

  handleLangChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.switchLang(select.value);
  }


  switchLang(lang: string): void {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('lang', lang);
  }
}
