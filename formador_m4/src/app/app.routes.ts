import { Routes } from '@angular/router';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';

export const routes: Routes = [
	{
		path: '',
		component: BaseLayoutComponent,
		children: [
			{ path: 'clientes', component: ClientesComponent },
			{ path: 'servicios', component: ServiciosComponent },
			{ path: 'productos/:gama/:marca', component: ProductosComponent }
		]
	}
];
