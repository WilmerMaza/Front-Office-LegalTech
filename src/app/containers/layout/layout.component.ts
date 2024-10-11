import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { filter, Subject, switchMap } from 'rxjs';
import { FooterPageComponent } from '../footer-page/footer-page.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavbarComponent, FooterPageComponent, RouterModule, MatProgressSpinnerModule],
  template: `
 @defer(on idle){
  <nav class="layout-nav" aria-label="Navegación principal">
      <app-navbar></app-navbar>
    </nav>
    <main role="main" class="h-100 w-100 min-vh-100 min-vw-100">
      <router-outlet></router-outlet>
    </main>
    <footer role="contentinfo">
      <app-footer-page></app-footer-page>
    </footer>
}  @loading (minimum 5s) { 


<section class="loading">
    <img src="assets/icons/icon.svg" alt="Logo LegalTech" class="loading-icon" loading="eager">
    <h1 class="loading-text">LegalTech</h1>
</section>


}
  `,
  styleUrl: './layout.component.scss',
})
export class LayoutComponent implements OnInit {
  private updateAvailableSubject = new Subject<void>();
  private updateActivatedSubject = new Subject<void>();
  constructor(private swUpdate: SwUpdate) { }



  isLoading: boolean = true;


  ngOnInit(): void {

    if (this.swUpdate.isEnabled) {
      // Check for updates manually
      this.swUpdate.checkForUpdate().then(() => {
        console.log('Checked for updates');
      });

      // Listen for version updates
      this.swUpdate.versionUpdates
        .pipe(
          filter(event => event.type === 'VERSION_READY'), // Filter for version ready updates
          switchMap(() => {
            // Notify the user about the new version
            const userConfirmed = confirm('A new version of the app is available. Do you want to update?');
            if (userConfirmed) {
              return this.swUpdate.activateUpdate().then(() => {
                document.location.reload();
              });
            } else {
              return [];
            }
          })
        )
        .subscribe();
    }
  }


}
