import { Component, signal, computed, effect } from '@angular/core';
@Component({
selector: 'app-carrito',
standalone: true,
template: `<div>Total Compra: {{ total() }} EUR</div>`
})
export class CarritoComprasComponent {
items = signal<{ precio: number; cantidad: number }[]>([
{ precio: 40, cantidad: 2 }
]);
subtotal = computed(() => this.items().reduce((acc, i) => acc + (i.precio * i.cantidad), 0));
total = computed(() => this.subtotal() * 1.21);
private persistir = effect(() => {
localStorage.setItem('cart', JSON.stringify(this.items()));
});
}
