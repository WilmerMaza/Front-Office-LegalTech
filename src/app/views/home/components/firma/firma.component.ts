import { Component } from '@angular/core';

@Component({
  selector: 'app-firma',
  standalone: true,
  imports: [],
  template: `
  <Section class="signature">
  <section class="header-title">
    <h2 id="signature-title" class="signature-section-title">NUESTRA FIRMA</h2>
  </section>
  <section class="content-text">
    <p class="signature-section-text">
      En LegalTech, nos enorgullecemos de ofrecer a nuestros clientes una representación legal excepcional respaldada
      por años de experiencia y dedicación inquebrantable. Nuestro equipo de abogados altamente calificados está
      comprometido con la defensa de los derechos y los intereses de quienes confían en nosotros para resolver sus
      asuntos legales más apremiantes.
    </p>
    <button class="signature-section-button" aria-label="Leer más sobre nuestra firma legal"  (click)="navigateTo('/about')">ver más</button>
  </section>
</Section>`,
  styleUrl: './firma.component.scss'
})
export class FirmaComponent {


  navigateTo(url: string): void {
    window.location.href = url;
  }


}
