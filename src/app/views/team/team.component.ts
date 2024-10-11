import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from "./components/person/person.component";
import{TEAMARRAY} from "../../constant/team";
@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    CommonModule,
    PersonComponent
],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  public showSignature: boolean = false;
team= TEAMARRAY
public toggleSignature(): void {
  this.showSignature = !this.showSignature;
}
}
