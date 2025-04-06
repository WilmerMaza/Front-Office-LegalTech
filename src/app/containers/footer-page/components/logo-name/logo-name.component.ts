import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-name',
  imports: [],
  standalone: true,
  template: ` <section class="logo" aria-label="Logo LegalTech" #logo_footer id="logo_footer">
  <picture>
    <source srcset="icons/icon_legal_purple.svg" media="(max-width: 775px)" type="image/svg+xml" />
    <source srcset="icons/icon_legal_white.svg" media="(min-width: 770px)" type="image/svg+xml" />
    <img src="icons/icon_legal_white.svg" alt="Logo de LegalTech, Abogados Digitales SAS" loading="eager"
      width="200" height="200" class="logo_img" />
  </picture>

  <div class="divider-footer" aria-hidden="true"></div>

  <div class="text-container">
    <h2 class="company-name">LEGALTECH</h2>
    <p class="company-desc">ABOGADOS DIGITALES</p>
  </div>
</section>`,
  styleUrl: './logo-name.component.scss'
})
export class LogoNameComponent {

}
