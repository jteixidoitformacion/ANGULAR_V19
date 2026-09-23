import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
selector: 'app-boton-contador',
standalone: true,
template: `
<button (click)="incrementar()" class="btn-step">
Incrementar (Valor recibido: {{ paso }})
</button>
`,
styles: [`
.btn-step { background: #1E75B8; color: #fff; padding: 6px 12px; border: none; border-radius : 4px; }
`]
})
export class BotonContadorComponent {
@Input() paso: number = 1;
@Output() incremento = new EventEmitter<number>();
incrementar(): void {
this.incremento.emit(this.paso);
}
}
