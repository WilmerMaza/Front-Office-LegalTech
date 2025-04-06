import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { TeamArray } from '../../../home/interface/ImgInterface';
import { ImgTeamComponent } from '../img-team/img-team.component';


@Component({
  selector: 'app-person',
  imports: [
    CommonModule,
    ImgTeamComponent,
    FormsModule,
  ],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {
  public showInfo: boolean = false;
  public showEducation: boolean = false;
  public showSignature: boolean = false;

  public arrowContact: string = 'img/team/arriba.png';
  public arrowFormation: string = 'img/team/arriba.png';

  public teamObject = input<TeamArray>();

  constructor(private sanitizer: DomSanitizer) { }


  public toggleInfo(): void {
    this.showInfo = !this.showInfo;
    this.arrowContact = this.showInfo ? 'img/team/abajo.png' : 'img/team/arriba.png';
  }

  public toggleEducation(): void {
    this.showEducation = !this.showEducation;
    this.arrowFormation = this.showEducation ? 'img/team/abajo.png' : 'img/team/arriba.png';
  }

  public toggleSignature(): void {
    this.showSignature = !this.showSignature;
  }

  public getSanitizerHtml(html?: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html ?? '');
  }

}
