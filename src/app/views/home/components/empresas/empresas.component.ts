import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CAROUSELEMPRESASIMG } from '../../../../constant/carousel-empresas-img';
import { CarouselComponent } from '../../../../shared/carousel/carousel.component';
import { ImgInterface } from '../../interface/ImgInterface';

@Component({
  selector: 'app-empresas',
  imports: [CommonModule, CarouselComponent, TranslateModule],
  standalone: true,
  template: `
    <section class="company-section">
  <h2 class="company-title">
  {{'ENTERPRISES.TITLE_PART_ONE' | translate}} <span class="company-title-bold"> {{'ENTERPRISES.TITLE_PART_TWO' | translate}}</span>
  </h2>
  <hr class="section-divider">

  <app-carousel [isEmpresas]="true" [loop]="true"
   [imagesCarousel]="corouselImg" [centeredSlides]="true"
    [slidesPerView]="3" [isBig]="false"  [navigation]="true" 
    [spacebetween]="30" [autoplayTime]="2500" [freeMode]="true"></app-carousel>
</section>

  `,
  styleUrl: './empresas.component.scss',
})
export class EmpresasComponent {
  public corouselImg: Array<ImgInterface> = CAROUSELEMPRESASIMG;

  constructor() { }

}
