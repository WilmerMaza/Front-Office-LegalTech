import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HtmlTranslateService } from 'src/app/shared/services/html-translate.service';
import { TeamArray } from '../../../home/interface/ImgInterface';

@Component({
  selector: 'app-img-team',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './img-team.component.html',
  styleUrl: './img-team.component.scss'
})
export class ImgTeamComponent {
  public tamObject = input<TeamArray>();

  constructor(public htmlTranslate: HtmlTranslateService) { }


  public safeContent(key?: string) {
    return this.htmlTranslate.getSanitizedHtml(key);
  }
}
