import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CAROUSELEMPRESASIMG } from '../../../../constant/carousel-empresas-img';
import { ImgInterface } from '../../interface/ImgInterface';

@Component({
  selector: 'app-empresas',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  template: `
    <section class="company-section">
  <h2 class="company-title">
    Empresas que <span class="company-title-bold">confiaron en nosotros</span>
  </h2>
  <hr class="section-divider">
  <swiper-container
    class="company-swiper"
    navigation="true"
    slides-per-view="3"
    space-between="30"
    free-mode="true"
    centered-slides="true"
    autoplay-delay="2500"
    autoplay-disable-on-interaction="false"
    aria-label="Empresas que confiaron en nosotros"
 
    
  >
    @for (img of corouselImg ; track img.src) {
    <swiper-slide  class="company-swiper-slide">
      <picture class="company-picture">
        <source srcset="{{img.srcMovil}}" crossorigin="anonymous" />
        <img [src]="img.srcMovil" [alt]="img.alt" loading="lazy" class="company-img" />
      </picture>
    </swiper-slide>
    }
  </swiper-container>
</section>

  `,
  styleUrl: './empresas.component.scss',
})
export class EmpresasComponent {
  public corouselImg: Array<ImgInterface> = CAROUSELEMPRESASIMG;

  constructor() { }

  ngOnInit(): void { }
}
