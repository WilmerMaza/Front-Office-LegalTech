import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-firma',
  standalone: true,
  imports: [RouterModule, TranslateModule],
  template: `
    <article class="signature" aria-labelledby="signature-title">
      <header class="header-title">
        <h2 id="signature-title" class="signature-section-title">{{ "OUR_FIRM.TITLE" | translate}}</h2>
      </header>

      <section class="content-text">
        <p class="signature-section-text">
        {{ "OUR_FIRM.INITIAL_TEXT" | translate}}
        </p>

        <a
          class="signature-section-button"
          [routerLink]="'/about'"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          role="button"
          aria-label="Leer más sobre nuestra firma legal"
        >
        {{ "OUR_FIRM.SEE_MORE" | translate}}
        </a>
      </section>
    </article>
  `,
  styleUrl: './firma.component.scss',
})
export class FirmaComponent { }
