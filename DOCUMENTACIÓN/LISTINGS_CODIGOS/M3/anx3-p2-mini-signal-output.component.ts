import { Component, output } from '@angular/core';
@Component({
selector: 'app-selector-color',
standalone: true,
template: `
<button (click)="elegir('#1E75B8')">Azul</button>
<button (click)="elegir('#059669')">Verde</button>
`
})
export class SelectorColorComponent {
colorSeleccionado = output<string>();
elegir(color: string): void {
this.colorSeleccionado.emit(color);
}
}
