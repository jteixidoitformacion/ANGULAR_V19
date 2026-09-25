import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { Error404Component } from './features/error-404/error-404.component';
export const routes: Routes = [
  // Ruta por defecto con coincidencia total
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Componentes aislados importados directamente
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:name', component: DashboardComponent },
  { path: 'panel', component: DashboardComponent },
  // Comodin para capturar cualquier ruta invalida
  { path: '**', component: Error404Component },
];
