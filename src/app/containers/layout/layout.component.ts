import { Component, inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { ButtonContactoComponent } from '../../shared/button-contacto/button-contacto.component';
import { FooterPageComponent } from '../footer-page/footer-page.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterPageComponent,
    ButtonContactoComponent,
    RouterModule,
    CommonModule,
  ],
  template: `
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

    <section class="loading" *ngIf="loading$ | async">
      <img
        src="icons/icon.svg"
        alt="Logo LegalTech"
        class="loading-icon"
        loading="eager"
      />
      <h1 class="loading-text">LegalTech</h1>
    </section>
  `,
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  private platformId = inject(PLATFORM_ID);
  public loading$ = inject(LoadingService).loading$;
  private loadingService = inject(LoadingService);
  private router = inject(Router);

  public ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          this.loadingService.showLoader(700); // Mínimo 700 ms para percepción visual
        });
    }
  }
}
