import { Component,input } from '@angular/core';
import { TeamMember } from '../../interface/ImgInterface';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss'
})
export class TeamCardComponent {
member =input.required<TeamMember>();
}
