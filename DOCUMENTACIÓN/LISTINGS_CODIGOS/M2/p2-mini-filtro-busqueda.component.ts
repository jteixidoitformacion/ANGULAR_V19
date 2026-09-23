import { Component, signal } from '@angular/core';
@Component({
selector: 'app-filtro-busqueda',
standalone: true,
template: `
<input
[value]="termino()"
(input)="actualizarTermino($event)"
placeholder="Buscar servicio...">
<button (click)="limpiar()">Restablecer</button>
<span>Filtro actual: {{ termino() }}</span>
`
})
export class FiltroBusquedaComponent {
termino = signal<string>('');
actualizarTermino(event: Event) {
const input = event.target as HTMLInputElement;
this.termino.set(input.value);
}
limpiar() {
this.termino.set('');
}
}
