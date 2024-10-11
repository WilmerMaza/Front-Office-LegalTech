import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TEAMARRAY } from "../../constant/team";
import { TeamArray } from '../home/interface/ImgInterface';
import { PersonComponent } from "./components/person/person.component";
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
export class TeamComponent implements OnInit {
  public param: string = '';
  public showSignature: boolean = false;
  public team: TeamArray[] = TEAMARRAY


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
     

      this.param = params['member'] ?? false;
    });
  }


  public toggleSignature(): void {
    this.showSignature = !this.showSignature;
  }
}
