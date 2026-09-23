import { Component, model } from '@angular/core';
@Component({
selector: 'app-interruptor',
standalone: true,
template: `
<button (click)="toggle()">
Estado: {{ activo() ? 'ENCENDIDO' : 'APAGADO' }}
</button>
`
})
export class InterruptorComponent {
activo = model<boolean>(false);
toggle(): void {
this.activo.update(estado => !estado);
}
}
