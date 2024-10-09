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


  htmlStringInfo: string = `
    <p><strong>Correo:</strong> sucete&#64;gmail.com</p>
    <p><strong>Número:</strong> 123-456-7890</p>
  `;

  htmlStringEducation: string = `
    <p>
      Abogada, graduada de la Universidad del Norte en Barranquilla en 1998.
      Continué mis estudios en la Universidad Externado de Colombia en Bogotá entre 2001 y 2002.
      Además, completé un programa de American Legal English en EF Chicago de 2016 a 2017.
      Finalmente, obtuve mi título en Law School en la University of Pennsylvania en abril de 2020.
    </p>
  `;


  htmlString: string = '<p> Abogada con amplia experiencia en <strong>asesoría legal y litigios</strong>, con más de <strong>21 años de experiencia</strong> en el ejercicio del derecho. En materia de derecho comercial y civil, ha asesorado empresas como Boccard Colombia SAS, Tenaris-Tubo Caribe Ltda, Hotel Casa del Coliseo, Hotel Bahía S.A.S, Vélez Gutiérrez Abogados S.A.S, Russell Bedford DSA, Igualmente, atención de procesos laborales y administrativos como abogada corresponsal de la firma Chapman & Asociados, Vélez Gutiérrez, Baker & McKenzie S.A.S, atendiendo empresas como Royal & Sun Alliance, Ecopetrol, Coca Cola, Liberty SA, BBVA Colombia SA, ARL SURA, Corpbanca, Bancolombia, Círculo de Lectores, entre otros. </p>';

  htmlStringExperience: string = `
    <h3><strong>Experiencia</strong></h3>
    <p>• Gerente y socia fundadora. Legal Tech Abogados Digitales 2012 - presente.</p>
    <p>• Abogada Litigante y asesora legal externa – Julio de 2005 - Actualmente. Cartagena.</p>
    <p>• Corresponsal para la ciudad de Cartagena. Vélez Gutiérrez. Agosto 2011 hasta la fecha.</p>
    <p>• Corresponsal para la ciudad de Cartagena. CHAPMAN & ASOCIADOS. Agosto 2005 hasta febrero de 2016.</p>
    <p>• Abogada - Colombia Telecomunicaciones SA ES P – 23 de Noviembre de 2004 – 30 de Junio de 2005. Cartagena.</p>
    <p>• Abogada. ELECTRICARIBE S. A E. S. P. - Gerencia Legal Corporativa- Barranquilla. Julio de 2002- Noviembre de 2004. Barranquilla.</p>
    <p>• Abogada Asociada. Borda, Castañeda y Valderrama Asociados Ltda. Febrero de 2002 - Julio de 2002 – Bogotá.</p>
    <p>• Abogada – Área Legal - ENERGÍA CONFIABLE S.A. E.S.P. Julio de 1999 - Agosto de 2001. Barranquilla.</p>
    <p>• Asistente Jurídica - Federación Nacional de Comerciantes- Seccional Atlántico. Julio de 1998 a julio de 1999. Barranquilla.</p>
    <p>• Cámara de Comercio de Barranquilla. Junio – Julio de 1998.</p>
  `;

  safeHtml: SafeHtml;
  safeHtmlExperience: SafeHtml;
  safeHtmlInfo: SafeHtml;
  safeHtmlEducation: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.htmlString);
    this.safeHtmlExperience = this.sanitizer.bypassSecurityTrustHtml(this.htmlStringExperience);
    this.safeHtmlInfo = this.sanitizer.bypassSecurityTrustHtml(this.htmlStringInfo);
    this.safeHtmlEducation = this.sanitizer.bypassSecurityTrustHtml(this.htmlStringEducation);
  }
}
