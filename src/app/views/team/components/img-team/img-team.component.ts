import { Component, input } from '@angular/core';

import { TeamArray } from 'src/app/views/home/interface/ImgInterface';

@Component({
  selector: 'app-img-team',
  standalone: true,
  imports: [],
  templateUrl: './img-team.component.html',
  styleUrl: './img-team.component.scss'
})
export class ImgTeamComponent {
  public  TeamObject = input<TeamArray>();
}
