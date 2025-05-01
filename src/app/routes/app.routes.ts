import { Routes } from '@angular/router';
import { coreRoutes } from './core.routes';
import { serviceRoutes } from './service.routes';

export const routes: Routes = [...coreRoutes, ...serviceRoutes];
