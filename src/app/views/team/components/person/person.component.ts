import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { ImgTeamComponent } from '../img-team/img-team.component';
import { TeamArray } from 'src/app/views/home/interface/ImgInterface';

@Component({
  selector: 'app-person',
  standalone: true,
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

  public arrowContact: string = 'assets/img/team/arriba.png';
  public arrowFormation: string = 'assets/img/team/arriba.png';

public  TeamObject = input<TeamArray>();

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



}
