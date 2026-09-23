import { Component, input } from '@angular/core';
@Component({
selector: 'app-etiqueta-alerta',
standalone: true,
template: `<span>{{ mensaje() }} - Criticidad: {{ nivel() }}</span>`
})
export class EtiquetaAlertaComponent {
// Entrada opcional con valor por defecto
mensaje = input<string>('Sin alertas');
// Entrada obligatoria validada por el compilador
nivel = input.required<number>();
}
