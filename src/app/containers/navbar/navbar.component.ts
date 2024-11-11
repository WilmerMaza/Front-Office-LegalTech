import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
// In your component.ts file

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  public navbar: any[] = [{
    label: 'Inicio',
    link: '#',
    icon: "assets/icons/add_home.svg",
    class: "fixed-style"
  }, {
    label: 'Servicios',
    link: '#',
    icon: "assets/icons/concierge.svg"
  }, {
    label: 'Nuestra firma',
    link: '/about',
    icon: "assets/icons/assured_workload.svg",
    class: "fixed-style"
  }, {
    label: 'Contactos',
    link: '#',
    icon: "assets/icons/forward_to_inbox.svg"
  }]


  public isMenuOpen: boolean = false;
  menuOpen = false;

  closeMenu(): void {
    this.menuOpen = false;
  }


}
