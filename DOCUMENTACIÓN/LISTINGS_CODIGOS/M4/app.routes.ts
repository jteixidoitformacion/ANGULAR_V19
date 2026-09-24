import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
export const appRoutes: Routes = [
{
path: '',
component: LayoutComponent,
children: [
{
path: 'inicio',
loadComponent: () => import('./features/home/home.component')
.then(m => m.HomeComponent)
}
]
}
];
