import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../../shared/language-switcher/language-switcher.component';
import { nav } from 'src/app/constant/nav';
import { INav } from 'src/app/views/home/interface/ImgInterface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule,
    TranslateModule,
    FormsModule,
    RouterModule,
    LanguageSwitcherComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public navbar: INav[] = nav;

  public closeMenu(): void {
    const menuToggle = document.getElementById(
      'menu-toggle'
    ) as HTMLInputElement;
    if (menuToggle?.checked) {
      menuToggle.checked = false;
    }
  }
}
