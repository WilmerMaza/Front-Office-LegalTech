import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonContactoComponent } from '../../shared/button-contacto/button-contacto.component';
import { FooterPageComponent } from '../footer-page/footer-page.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterPageComponent,
    ButtonContactoComponent,
    RouterModule,
  ],
  template: `
    @defer(on idle){
    <nav class="layout-nav" aria-label="Navegación principal">
      <app-navbar></app-navbar>
      <app-button-contacto></app-button-contacto>
    </nav>
    <main role="main" class="layout-main">
      <router-outlet></router-outlet>
    </main>

    <footer role="contentinfo" class="layout-footer">
      <app-footer-page></app-footer-page>
    </footer>
    } @loading (minimum 1s) {

    <section class="loading">
      <img
        src="icons/icon.svg"
        alt="Logo LegalTech"
        class="loading-icon"
        loading="eager"
      />
      <h1 class="loading-text">LegalTech</h1>
    </section>

    }
  `,
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  constructor() {}
}
