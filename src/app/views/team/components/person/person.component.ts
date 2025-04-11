import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { HtmlTranslateService } from 'src/app/shared/services/html-translate.service';
import { TeamArray } from '../../../home/interface/ImgInterface';
import { ImgTeamComponent } from '../img-team/img-team.component';


@Component({
  selector: 'app-person',
  standalone: true,
  imports: [
    CommonModule,
    ImgTeamComponent,
    FormsModule,
    TranslateModule
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

  constructor(public htmlTranslate: HtmlTranslateService) { }


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

  // Puedes acceder directamente desde la plantilla o desde el TS
  safeContent(key?: string) {
    return this.htmlTranslate.getSanitizedHtml(key);
  }

}
