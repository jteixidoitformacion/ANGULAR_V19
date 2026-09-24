import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
selector: 'app-product-list',
standalone: true,
imports: [RouterLink],
template: `
<div class="container">
<h2>Catalogo de Productos Profesionales</h2>
<button class="btn btn-primary" routerLink="/productos/nuevo">
Agregar Nuevo Producto
</button>
<ul class="product-grid">
@for (product of products; track product.id) {
<li class="product-card">
<h4>{{ product.nombre }}</h4>
<p>Precio: {{ product.precio }} EUR</p>
<button class="btn-detail" (click)="verDetalle(product.id)">
Ver Detalles Ficha
</button>
</li>
}
</ul>
</div>
`
})
export class ProductListComponent {
private router = inject(Router);
products = [
{ id: 'p01', nombre: 'Servidor Computacion Cloud', precio: 1200 },
{ id: 'p02', nombre: 'Switch de Red Gestionable', precio: 340 },
{ id: 'p03', nombre: 'Terminal de Operario IoT', precio: 150 }
];
verDetalle(id: string): void {
this.router.navigate(['/productos', id]);
}
}
