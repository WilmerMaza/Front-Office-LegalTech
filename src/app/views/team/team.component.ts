import { Component } from '@angular/core';
import { ButtonTeamComponent } from './components/button-team/button-team.component';
import { ImgTeamComponent } from './components/img-team/img-team.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    ImgTeamComponent,
    ButtonTeamComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {

  public showInfo: boolean = false;
  public showEducation: boolean = false;
  public showSignature: boolean = false;

  public arrowContact: string = 'assets/img/team/arriba.png';
  public arrowFormation: string = 'assets/img/team/arriba.png';


  public toggleInfo(): void {
    this.showInfo = !this.showInfo;
    this.arrowContact = this.showInfo ? 'assets/img/team/abajo.png' : 'assets/img/team/arriba.png';
  }

  public toggleEducation(): void {
    this.showEducation = !this.showEducation;
    this.arrowFormation = this.showEducation ? 'assets/img/team/abajo.png' : 'assets/img/team/arriba.png';
  }

  public toggleSignature(): void {
    this.showSignature = !this.showSignature;

  }
  htmlString: string = '<p> Abogada con amplia experiencia en <strong>asesoría legal y litigios</strong>, con más de <strong>21 años de experiencia</strong> en el ejercicio del derecho. En materia de derecho comercial y civil, ha asesorado empresas como Boccard Colombia SAS, Tenaris-Tubo Caribe Ltda, Hotel Casa del Coliseo, Hotel Bahía S.A.S, Vélez Gutiérrez Abogados S.A.S, Russell Bedford DSA, Igualmente, atención de procesos laborales y administrativos como abogada  corresponsal de la firma Chapman & Asociados, Vélez Gutiérrez, Baker & McKenzie S.A.S, atendiendo empresas como Royal & Sun Alliance, Ecopetrol, Coca Cola, Liberty SA, BBVA Colombia SA, ARL SURA, Corpbanca, Bancolombia, Círculo de Lectores, entre otros. </p>';
  safeHtml: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.htmlString);
}
}
