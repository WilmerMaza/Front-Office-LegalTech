import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media',
  imports: [],
  template: `  <section class="social-media" aria-label="Redes sociales de LegalTech" id="social_media_footer">
  <p class="social-media__text">SÍGUENOS</p>
  <ul class="social-media__list">
    <li>
      <a title="Instagram" href="https://www.instagram.com/legaltechabogadosdigitales" target="_blank"
        rel="noopener noreferrer" class="social-media__link">
        <img src="icons/instagram.svg" alt="Instagram de LegalTech" width="32" height="32" loading="lazy" />
      </a>
    </li>
    <li>
      <a title="TikTok" href="https://www.tiktok.com/@tucuenta" target="_blank" rel="noopener noreferrer"
        class="social-media__link">
        <img src="icons/tiktok.svg" alt="TikTok de LegalTech" width="44" height="44" loading="lazy" />
      </a>
    </li>
    <li>
      <a title="Facebook" href="https://www.facebook.com/tucuenta" target="_blank" rel="noopener noreferrer"
        class="social-media__link">
        <img src="icons/facebook.svg" alt="Facebook de LegalTech" width="32" height="32" loading="lazy" />
      </a>
    </li>
  </ul>
</section>`,
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {

}
