import { Component, Input, OnInit } from '@angular/core';
@Component({
selector: 'app-filtrado',
standalone: true,
template: `
<div class="filter-results">
<h2>Resultados de Busqueda</h2>
<p>Categoria activa: <strong>{{ categoria }}</strong></p>
<p>Marca seleccionada: <strong>{{ marca }}</strong></p>
</div>
`
})
export class FiltradoComponent implements OnInit {
@Input() categoria!: string; // Mapeado de :categoria
@Input() marca!: string; // Mapeado de :marca
ngOnInit() {
console.log(`Buscando ${this.categoria} filtrado por la marca ${this.marca}`);
}
}
