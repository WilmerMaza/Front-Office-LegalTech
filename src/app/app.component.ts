import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LayoutComponent } from './containers/layout/layout.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LayoutComponent, RouterLink],
  template: '<app-layout/>',
})
export class AppComponent {
  title = 'LegalTech';
}
