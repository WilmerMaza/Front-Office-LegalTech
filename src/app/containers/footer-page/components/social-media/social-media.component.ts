import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-social-media',
  imports: [TranslateModule],
  template: `  <section class="social-media" aria-label="Redes sociales de LegalTech" id="social_media_footer">
  <p class="social-media__text">{{ "FOOTER.SOCIAL" | translate}}</p>
  <ul class="social-media__list">
    <li>
      <a title="Instagram" href="https://www.instagram.com/legaltechabogadosdigitales" target="_blank"
        rel="noopener noreferrer" class="social-media__link">
        <img src="icons/instagram.svg" alt="Instagram de LegalTech" width="32" height="32" loading="lazy" />
      </a>
    </li>
   
  </ul>
</section>`,
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {

}
