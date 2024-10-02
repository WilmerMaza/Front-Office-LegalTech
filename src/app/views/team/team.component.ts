import { Component } from '@angular/core';
import { ButtonTeamComponent } from './components/button-team/button-team.component';
import { ExperienceTeamComponent } from './components/experience-team/experience-team.component';
import { ImgTeamComponent } from './components/img-team/img-team.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    ImgTeamComponent,
    ExperienceTeamComponent,
    ButtonTeamComponent,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  showInfo: boolean = false;
  showEducation: boolean = false;
  showSignature: boolean = false;


  arrowContact: string = 'assets/img/team/arriba.png';
  arrowFormation: string = 'assets/img/team/arriba.png';

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

