import { Component } from '@angular/core';

@Component({
  selector: 'app-nuestra-firma',
  standalone: true,
  imports: [],
  templateUrl: './nuestra-firma.component.html',
  styleUrl: './nuestra-firma.component.scss'
})
export class NuestraFirmaComponent {
  public showMore = false;
  showInfo: boolean = false;
  showEducation: boolean = false;
  showSignature: boolean = false;
  arrowContact: string = 'assets/img/team/arriba.png';
  arrowFormation: string = 'assets/img/team/arriba.png';
  public toggleShowMore(): void {
    this.showMore = !this.showMore;
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;

    this.arrowContact = this.showInfo ? 'assets/img/team/abajo.png' : 'assets/img/team/arriba.png';
  }

  toggleEducation() {
    this.showEducation = !this.showEducation;

    this.arrowFormation = this.showEducation ? 'assets/img/team/abajo.png' : 'assets/img/team/arriba.png';
  }

  toggleSignature() {
    this.showSignature = !this.showSignature;
  }
}
