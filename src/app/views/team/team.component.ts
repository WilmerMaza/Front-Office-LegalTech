import { Component } from '@angular/core';
import { ButtonTeamComponent } from './components/button-team/button-team.component';
import { ImgTeamComponent } from './components/img-team/img-team.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  get arrowContact(): string {
    return this.showInfo ? 'assets/img/team/abajo.png' : 'assets/img/team/arriba.png';
  }

  get arrowFormation(): string {
    return this.showEducation ? 'assets/img/team/abajo.png' : 'assets/img/team/arriba.png';
  }

  public toggleInfo(): void {
    this.showInfo = !this.showInfo;
  }

  public toggleEducation(): void {
    this.showEducation = !this.showEducation;
  }

  public toggleSignature(): void {
    this.showSignature = !this.showSignature;
  }
}
