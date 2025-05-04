import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  MISION,
  TEXT_MISION,
  TEXT_VISION,
  VISION,
} from '../../constant/company_information';
import { LegendButtonsComponent } from './components/legend-buttons/legend-buttons.component';
import { TranslateModule } from '@ngx-translate/core';
import { SeoService } from 'src/app/shared/services/seo.service';
import { SEO_PAGE_CONFIG } from 'src/app/constant/seo-page-data';

@Component({
  selector: 'app-nuestra-firma',
  imports: [LegendButtonsComponent, TranslateModule],
  standalone: true,
  templateUrl: './nuestra-firma.component.html',
  styleUrl: './nuestra-firma.component.scss',
})
export class NuestraFirmaComponent implements OnInit {
  public showMore = false;
  public mision: string = MISION;
  public vision: string = VISION;
  public titleMision: string[] = TEXT_MISION;
  public titleVision: string[] = TEXT_VISION;

  constructor(private router: Router, private seo: SeoService) {}

  public ngOnInit(): void {
    this.seo.applySeoConfig(SEO_PAGE_CONFIG['about']);
  }

  public toggleShowMore = () => (this.showMore = !this.showMore);

  public redirectToTeam = () =>
    this.router.navigate(['/team']).then(() => {
      window.scrollTo(0, 0); // Desplazarse al inicio de la página
    });
}
