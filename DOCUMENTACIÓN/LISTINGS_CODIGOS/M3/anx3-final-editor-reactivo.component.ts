import { Component, input, model, output } from '@angular/core';
@Component({
selector: 'app-editor-tarjeta',
standalone: true,
template: `
<div class="tarjeta-box">
<small>ID: {{ tarjetaId() }}</small>
<input
[value]="titulo()"
(input)="actualizarTitulo($event)"
placeholder="Titulo de la tarjeta" />
<button (click)="guardarCambios()">Confirmar</button>
</div>
`,
styles: [`
.tarjeta-box { border: 1px solid #CBD5E1; padding: 12px; border-radius: 6px; background: # fff; }
input { margin: 0 8px; padding: 4px; }
`]
})
export class EditorTarjetaComponent {
tarjetaId = input.required<string>();
titulo = model<string>('');
guardado = output<void>();
actualizarTitulo(event: Event): void {
const input = event.target as HTMLInputElement;
this.titulo.set(input.value);
}
guardarCambios(): void {
this.guardado.emit();
}
}
