import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TEAMARRAY } from 'src/app/constant/team';
import { TeamArray } from '../../interface/ImgInterface';
import { TeamCardComponent } from './team-card/team-card.component';

@Component({
  selector: 'app-nuestro-equipo',
  templateUrl: './nuestro-equipo.component.html',
  styleUrls: ['./nuestro-equipo.component.scss'],
  imports: [CommonModule, TeamCardComponent, FormsModule],
  standalone: true
})
export class NuestroEquipoComponent {
  public teamMembers: TeamArray[] = TEAMARRAY;

}
