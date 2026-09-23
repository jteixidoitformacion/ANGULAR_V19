import { Component, input, computed } from '@angular/core';
@Component({
selector: 'app-precio-iva',
standalone: true,
template: `<p>Base: {{ base() }} EUR | Con IVA: {{ totalConIva() }} EUR</p>`
})
export class PrecioIvaComponent {
base = input.required<number>();
totalConIva = computed(() => (this.base() * 1.21).toFixed(2));
}
