import { Component } from '@angular/core';
import { ButtonTeamComponent } from './components/button-team/button-team.component';
import { ExperienceTeamComponent } from './components/experience-team/experience-team.component';
import { ImgTeamComponent } from './components/img-team/img-team.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [ImgTeamComponent, ExperienceTeamComponent, ButtonTeamComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {

}
