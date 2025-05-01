import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceNavigationComponent } from '../home/components/servicios/shared/service-navigation.component';
import { ServiceContentComponent } from '../home/components/servicios/shared/service-content.component';
import { SERVICE_DATA } from 'src/app/constant/services';
import { IServiceConfig } from '../home/interface/interfaceService';
import { filter } from 'rxjs';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule, ServiceNavigationComponent, ServiceContentComponent],
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  public currentService!: IServiceConfig;
  public currentRoute: string = '';

  private readonly defaultService: IServiceConfig = SERVICE_DATA['defaul'];

  constructor(private router: Router) {}

  public ngOnInit(): void {
    // Inicializa inmediatamente con la ruta actual
    this.setCurrentService(this.router.url);

    // Se actualiza si hay navegación (cuando se usa el mismo componente)
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.setCurrentService(event.urlAfterRedirects);
      });
  }

  private setCurrentService(route: string): void {
    this.currentRoute = route;
    const keyRoute = route.split('/')[2];
    this.currentService = SERVICE_DATA[keyRoute] ?? this.defaultService;
  }
}
