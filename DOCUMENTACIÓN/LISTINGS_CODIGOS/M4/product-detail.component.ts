import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
selector: 'app-product-detail',
standalone: true,
imports: [RouterLink],
template: `
<div class="container detail-container">
<h2>Ficha del Producto</h2>
<p>Buscando especificaciones del codigo de producto: <strong>{{ id }}</strong></p>
<div class="mock-data">
<p>Estado de inventario: <span style="color: green;">Disponible</span></p>
<p>Certificaciones tecnicas: CE, FCC, RoHS</p>
</div>
<a routerLink="/productos" class="btn-back">Regresar al catalogo</a>
</div>
`
})
export class ProductDetailComponent implements OnInit {
@Input() id!: string;
ngOnInit() {
console.log(`Cargando informacion del producto: ${this.id}`);
}
}
