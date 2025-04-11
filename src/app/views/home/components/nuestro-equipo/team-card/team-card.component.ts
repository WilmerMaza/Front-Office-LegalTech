import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TeamArray } from '../../../interface/ImgInterface';



@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './team-card.component.html',
  styleUrl: './team-card.component.scss'
})
export class TeamCardComponent {

  public member = input.required<TeamArray>();

  constructor(private router: Router) { }

  public memberInfo(member?: string): void {
    // Navegar con queryParams

    this.router.navigate(['/team'], { queryParams: { member } });
  }
}
