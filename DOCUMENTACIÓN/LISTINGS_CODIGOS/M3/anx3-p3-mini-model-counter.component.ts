import { Component, model } from '@angular/core';
@Component({
selector: 'app-control-volumen',
standalone: true,
template: `
<button (click)="bajar()">-</button>
<span>Volumen: {{ volumen() }}%</span>
<button (click)="subir()">+</button>
`
})
export class ControlVolumenComponent {
volumen = model<number>(50);
subir(): void {
this.volumen.update(v => Math.min(100, v + 5));
}
bajar(): void {
this.volumen.update(v => Math.max(0, v - 5));
}
}
