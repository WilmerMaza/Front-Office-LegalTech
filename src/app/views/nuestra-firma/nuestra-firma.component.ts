import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MISION, TEXT_MISION, TEXT_VISION, VISION } from 'src/app/constant/company_information';
import { LegendButtonsComponent } from './components/legend-buttons/legend-buttons.component';

@Component({
  selector: 'app-nuestra-firma',
  standalone: true,
  imports: [LegendButtonsComponent],
  templateUrl: './nuestra-firma.component.html',
  styleUrl: './nuestra-firma.component.scss',
})
export class NuestraFirmaComponent {
  public showMore = false;
  public mision: string = MISION;
  public vision: string = VISION;
  public titleMision: string[] = TEXT_MISION;
  public titleVision: string[] = TEXT_VISION;


  constructor(private router: Router) { }

  public toggleShowMore = () => (this.showMore = !this.showMore);

  public redirectToTeam = () => (this.router.navigate(['/team']).then(() => {
    window.scrollTo(0, 0); // Desplazarse al inicio de la página
  }));


}
