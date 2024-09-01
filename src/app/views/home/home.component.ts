import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CarouselComponent } from 'src/app/shared/carousel/carousel.component';
import { ButtonContactoComponent } from './components/button-contacto/button-contacto.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { FirmaComponent } from './components/firma/firma.component';
import { IdentidadComponent } from './components/identidad/identidad.component';
import { NuestroEquipoComponent } from './components/nuestro-equipo/nuestro-equipo.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { ValoresComponent } from './components/valores/valores.component';
import { CarouselEmpresasImg } from './constant/carousel-empresas-img';
import { CarouselImg } from './constant/carousel-img';
import { ImgInterface } from './interface/ImgInterface';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    CarouselComponent,
    ServiciosComponent,
    IdentidadComponent,
    ValoresComponent,
    EmpresasComponent,
    FirmaComponent,
    NuestroEquipoComponent,
    // CarouselNaviteComponent,
    ButtonContactoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {

  public carouselPrincipal: Array<ImgInterface> = CarouselImg;
  public corouselEmpresas: Array<ImgInterface> = CarouselEmpresasImg;
  public carouselHeight: string = '10';

  ngOnInit(): void {
    this.renderHeight();
  }

  ngAfterViewInit(): void {
    this.renderHeight();
  }
  renderHeight(): void {
    if (typeof window !== 'undefined') {
      this.carouselHeight = `${window.innerHeight}px`;
    }
  }
}
