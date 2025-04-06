import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-firma',
  standalone: true,
  imports: [RouterModule],
  template: `
    <article class="signature" aria-labelledby="signature-title">
      <header class="header-title">
        <h2 id="signature-title" class="signature-section-title">Nuestra Firma</h2>
      </header>

      <section class="content-text">
        <p class="signature-section-text">
          En LegalTech, nos enorgullecemos de ofrecer a nuestros clientes una representación legal excepcional respaldada
          por años de experiencia y dedicación inquebrantable. Nuestro equipo de abogados altamente calificados está
          comprometido con la defensa de los derechos y los intereses de quienes confían en nosotros para resolver sus
          asuntos legales más apremiantes.
        </p>

        <a
          class="signature-section-button"
          [routerLink]="'/about'"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          role="button"
          aria-label="Leer más sobre nuestra firma legal"
        >
          Ver más
        </a>
      </section>
    </article>
  `,
  styleUrl: './firma.component.scss',
})
export class FirmaComponent { }
