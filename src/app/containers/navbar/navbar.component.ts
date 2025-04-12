import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from "../../shared/language-switcher/language-switcher.component";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, CommonModule, TranslateModule, FormsModule, RouterModule, LanguageSwitcherComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  public navbar: any[] = [
    {
      label: 'NAV.HOME',
      link: '/',
      icon: "icons/add_home.svg",
      class: "fixed-style"
    },
    {
      label: 'NAV.SERVICES',
      link: '/services',
      icon: "icons/concierge.svg"
    },
    {
      label: 'NAV.FIRM',
      link: '/about',
      icon: "icons/assured_workload.svg",
      class: "fixed-style"
    },
    {
      label: 'NAV.CONTACT',
      link: '/contas',
      icon: "icons/forward_to_inbox.svg"
    }
  ];


  public closeMenu(): void {
    const menuToggle = document.getElementById('menu-toggle') as HTMLInputElement;
    if (menuToggle?.checked) {
      menuToggle.checked = false;
      console.log('Menu closed ✔️');
    }
  }

}
