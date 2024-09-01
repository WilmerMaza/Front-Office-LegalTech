import { Component, input, OnInit } from '@angular/core';
import { ImgInterface } from 'src/app/views/home/interface/ImgInterface';

@Component({
  selector: 'app-carousel-navite',
  standalone: true,
  imports: [],
  template: `<section role="region" aria-label="Carrusel de imágenes" class="content-carousel">
    
    <div class="slider" role="group" aria-roledescription="Carrusel">
    @for (img of imagesCarousel(); track $index) {
      <a name="{{img.name}}" role="listitem">
        <picture>
        <source srcset="{{img.srcMovil}}" media="(max-width: 425px)" />
        <source srcset="{{img.src}}" media="(min-width: 600px)" />
        <img
          [src]="img.src"
          [alt]="img.alt"
          loading="lazy"
          [title]="img.title"
          class="images"
        />
      </picture>
      </a>

    }
    </div>

    <div
      style="background: radial-gradient(ellipse 80% 80% at 50% -20%,#7877c64d,#fff0); position: absolute; top: 0; width: 100%; height: 100%; left:0; z-index: -1"
    ></div>

    <ul class="markers">
      @for (item of imagesCarousel(); track $index) {
      <li><a href="#{{item.name}}"></a></li>
      }
    </ul>
  </section>`,
  styleUrl: './carousel-navite.component.scss',
})
export class CarouselNaviteComponent implements OnInit {
  imagesCarousel = input.required<Array<ImgInterface>>();


  ngOnInit(): void {
    const slider = document.querySelector('.slider');
    if (slider) {
      slider.addEventListener('wheel', this.handleWheelEvent as EventListener);
    }
  }

  handleWheelEvent(event: WheelEvent): void {
    const slider = event.currentTarget as HTMLElement;
    if (event.deltaY !== 0) {
      slider.scrollLeft += event.deltaY;
      event.preventDefault();
    }
  }
}
