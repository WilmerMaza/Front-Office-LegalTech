import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss'
})
export class TeamCardComponent {
  @Input() member: { img: any, name: string, position: string, description: string }= {
    img: '',
    name: '',
    position: '',
    description: ''
};
}
