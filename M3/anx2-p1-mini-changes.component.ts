import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
@Component({
selector: 'app-registro-cambios',
standalone: true,
template: `
<p>ID actual: {{ idRegistro }}</p>
<p>Ultimo cambio: {{ logCambio }}</p>
`
})
export class RegistroCambiosComponent implements OnChanges {
@Input() idRegistro: number = 0;
logCambio: string = 'Sin variaciones';
ngOnChanges(changes: SimpleChanges): void {
if (changes['idRegistro'] && !changes['idRegistro'].isFirstChange()) {
const prev = changes['idRegistro'].previousValue;
const curr = changes['idRegistro'].currentValue;
this.logCambio = `Transicion: ${prev} -> ${curr}`;
}
}
}
