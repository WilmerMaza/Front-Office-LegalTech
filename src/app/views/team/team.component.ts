import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TEAMARRAY } from '../../constant/team';
import { TeamArray } from '../home/interface/ImgInterface';
import { PersonComponent } from './components/person/person.component';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from 'src/app/shared/services/seo.service';
import { SEO_PAGE_CONFIG } from 'src/app/constant/seo-page-data';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, PersonComponent, TranslateModule],
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  public param: string = '';
  public showSignature: boolean = false;
  public team: TeamArray[] = TEAMARRAY;

  constructor(private route: ActivatedRoute, private seo: SeoService) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.param = params['member'] ?? false;
      if (!this.param) {
        this.seo.applySeoConfig(SEO_PAGE_CONFIG['team']);
      }
    });
  }

  public toggleSignature(): void {
    this.showSignature = !this.showSignature;
  }
}
