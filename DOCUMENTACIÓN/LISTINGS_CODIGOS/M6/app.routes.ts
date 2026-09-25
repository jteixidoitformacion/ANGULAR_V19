import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
export const appRoutes: Routes = [
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{
path: 'login',
loadComponent: () => import('./features/auth/login.component')
.then(m => m.LoginComponent)
},
{
path: 'dashboard',
loadComponent: () => import('./features/dashboard/dashboard.component')
.then(m => m.DashboardComponent),
canActivate: [authGuard]
},
{
path: 'service/new',
loadComponent: () => import('./features/form/form.component')
.then(m => m.FormComponent),
canActivate: [authGuard]
},
{
path: 'service/:id',
loadComponent: () => import('./features/detail/detail.component')
.then(m => m.DetailComponent),
canActivate: [authGuard]
},
{ path: '**', redirectTo: 'login' }
];
