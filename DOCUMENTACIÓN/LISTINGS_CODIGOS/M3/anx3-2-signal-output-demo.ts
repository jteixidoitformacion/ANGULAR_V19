import { Component, output } from '@angular/core';
@Component({
selector: 'app-accion-rapida',
standalone: true,
template: `<button (click)="ejecutar()">Lanzar Accion</button>`
})
export class AccionRapidaComponent {
onAccion = output<string>();
ejecutar(): void {
this.onAccion.emit('Operacion completada');
}
}
