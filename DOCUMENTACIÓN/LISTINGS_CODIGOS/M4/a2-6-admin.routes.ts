import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
export const adminRoutes: Routes = [
{
path: 'admin',
component: AdminLayoutComponent,
children: [
{ path: '', redirectTo: 'metricas', pathMatch: 'full' },
{
path: 'metricas',
loadComponent: () => import('./features/metricas.component')
.then(m => m.MetricasComponent)
}
]
}
];
