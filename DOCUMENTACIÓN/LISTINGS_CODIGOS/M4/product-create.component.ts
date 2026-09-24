import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
selector: 'app-product-create',
standalone: true,
template: `
<div class="container form-container">
<h2>Registrar Nuevo Producto en Catalogo</h2>
<form (submit)="guardarProducto($event)">
<div class="form-group">
<label for="name">Nombre del Producto: </label>
<input type="text" id="name" required placeholder="Ej. Hub RJ45">
</div>
<div class="form-group">
<label for="price">Precio (EUR): </label>
<input type="number" id="price" required placeholder="Ej. 199">
</div>
<button type="submit" class="btn btn-save">Confirmar Guardado</button>
</form>
</div>
`
})
export class ProductCreateComponent {
private router = inject(Router);
guardarProducto(event: Event): void {
event.preventDefault();
console.log('Persistiendo producto en base de datos...');
this.router.navigate(['/productos'], {
state: { mensaje: 'Producto registrado exitosamente en el catalogo.' }
});
}
}
