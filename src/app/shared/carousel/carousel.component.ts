import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { SwiperOptions } from 'swiper/types';
import { ImgInterface } from '../../views/home/interface/ImgInterface';
import { HtmlTranslateService } from '../services/html-translate.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, TranslateModule],
  styleUrl: './carousel.component.scss',
  template: `
    <swiper-container
      #swiperRef
      init="false"
      class="swipper-custom"
      [ngClass]="{ 'swipper-big': isBig }"
    >
      <swiper-slide
        *ngFor="let img of imagesCarousel"
        [ngClass]="{ 'company-swiper-slide': isEmpresas }"
      >
        <picture
          [ngClass]="{
            'content-pictures': isBig,
            'company-picture': isEmpresas
          }"
        >
          <source
            [srcset]="img.srcMovil"
            media="(max-width: 425px)"
            type="image/webp"
          />
          <source
            [srcset]="img.src"
            media="(min-width: 600px)"
            type="image/webp"
          />

          <img
            [src]="img.src"
            [alt]="img.alt | translate"
            [title]="img.title! | translate"
            [loading]="img.loading || 'lazy'"
            decoding="async"
            style="object-fit: cover;"
            [ngClass]="{
              images: isPrincipal,
              'company-img': isEmpresas
            }"
          />
        </picture>

        <div *ngIf="textPresent" class="content-text-swiper">
          <p [innerHTML]="safeContent(img.text)" class="text-swiper"></p>
          <hr class="divider-carousel" />
        </div>
      </swiper-slide>
    </swiper-container>
  `,
})
export class CarouselComponent implements AfterViewInit {
  @Input() imagesCarousel: Array<ImgInterface> = [];
  @Input() textPresent: boolean = false;
  @Input() isBig: boolean = false;
  @Input() navigation: boolean = false;
  @Input() pagination: boolean = false;
  @Input() paginationClick: boolean = false;
  @Input() slidesPerView: number = 1;
  @Input() autoplayTime: number = 5600;
  @Input() loop: boolean = false;
  @Input() freeMode: boolean = false;
  @Input() spacebetween: number = 0;
  @Input() heightCorousel: string = '';
  @Input() centeredSlides: boolean = false;
  @Input() isEmpresas: boolean = false;
  @Input() isPrincipal: boolean = false;

  @ViewChild('swiperRef', { static: false }) swiperRef!: ElementRef;

  constructor(public htmlTranslate: HtmlTranslateService) {}

  public async ngAfterViewInit(): Promise<void> {
    const { register } = await import('swiper/element/bundle');
    register(); // inicializa solo cuando el componente ya está en DOM

    const swiperEl = this.swiperRef.nativeElement;

    const config: SwiperOptions = {
      slidesPerView: this.slidesPerView,
      pagination: this.pagination
        ? { clickable: this.paginationClick }
        : undefined,
      navigation: this.navigation,
      autoplay: { delay: this.autoplayTime },
      loop: this.loop,
      freeMode: this.freeMode,
      spaceBetween: this.spacebetween,
      centeredSlides: this.centeredSlides,
      updateOnWindowResize: true,
    };

    Object.assign(swiperEl, config);
    swiperEl.initialize?.();
  }

  public safeContent(key?: string) {
    return this.htmlTranslate.getSanitizedHtml(key);
  }
}
