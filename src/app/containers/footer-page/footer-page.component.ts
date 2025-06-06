import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { AddressComponent } from './components/address/address.component';
import { LogoNameComponent } from './components/logo-name/logo-name.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';

@Component({
  selector: 'app-footer-page',
  standalone: true,
  imports: [
    MatIconModule,
    LogoNameComponent,
    TranslateModule,
    AddressComponent,
    SocialMediaComponent,
    CommonModule,
  ],
  template: `<footer
    id="footer-content"
    class="footer-content"
    role="contentinfo"
  >
    <section [ngClass]="isMobile ? 'footer-white' : 'footer_purple'">
      <app-logo-name></app-logo-name>

      @if (!isMobile) {
      <div class="divider-footer" aria-hidden="true"></div>
      }
      <app-address></app-address>
      @if (!isMobile) {
      <div class="divider-footer" aria-hidden="true"></div>
      }
      <app-social-media></app-social-media>

      <!-- Derechos de autor -->
      <section [ngClass]="isMobile ? 'derechos-autor' : 'derechos-autor-pc'">
        <p class="text-derechos">
          © 2024 LegalTech | {{ 'FOOTER.RIGHTS' | translate }}.
        </p>
      </section>
    </section>
  </footer>`,
  styleUrl: './footer-page.component.scss',
})
export class FooterPageComponent implements OnInit {
  public isMobile: boolean = false;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  public ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth <= 770;
    }
  }
}
