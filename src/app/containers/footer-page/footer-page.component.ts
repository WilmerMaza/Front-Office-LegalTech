import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AddressComponent } from './components/address/address.component';
import { LogoNameComponent } from './components/logo-name/logo-name.component';
import { SocialMediaComponent } from "./components/social-media/social-media.component";

@Component({
  selector: 'app-footer-page',
  standalone: true,
  imports: [MatIconModule, LogoNameComponent, AddressComponent, SocialMediaComponent, CommonModule],
  template: `<footer id="footer-content" class="footer-content" role="contentinfo">

  <section [ngClass]="isMobile ? 'footer-white':'footer_purple' ">
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
    <section [ngClass]="isMobile ? 'derechos-autor':'derechos-autor-pc' ">
      <p class="text-derechos">© 2024 LegalTech | Todos los derechos reservados.</p>
    </section>
  </section>

</footer>`,
  styleUrl: './footer-page.component.scss',
})
export class FooterPageComponent implements OnInit {
  public isMobile: boolean = false;

  public ngOnInit(): void {
    this.isMobile = window.innerWidth <= 770;
  }

}
