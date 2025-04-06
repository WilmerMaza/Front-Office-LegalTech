import { Component, input } from '@angular/core';
import { TeamArray } from '../../../home/interface/ImgInterface';

@Component({
  selector: 'app-img-team',
  imports: [],
  templateUrl: './img-team.component.html',
  styleUrl: './img-team.component.scss'
})
export class ImgTeamComponent {
  public tamObject = input<TeamArray>();
}
