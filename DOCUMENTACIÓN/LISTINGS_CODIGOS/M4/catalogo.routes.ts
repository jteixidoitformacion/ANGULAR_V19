import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards/catalogo-auth.guard';
export const appRoutes: Routes = [
{
path: '',
redirectTo: 'productos',
pathMatch: 'full'
},
{
path: 'productos',
loadComponent: () => import('./product-list.component')
.then(m => m.ProductListComponent)
},
{
path: 'productos/nuevo',
loadComponent: () => import('./product-create.component')
.then(m => m.ProductCreateComponent),
canActivate: [authGuard]
},
{
path: 'productos/:id',
loadComponent: () => import('./product-detail.component')
.then(m => m.ProductDetailComponent)
},
{
path: 'login',
loadComponent: () => import('./login.component')
.then(m => m.LoginComponent)
}
];
