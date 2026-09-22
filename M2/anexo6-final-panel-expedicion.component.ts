import { Component, signal, computed } from '@angular/core';
interface Cuadrante {
id: number;
nombre: string;
explorado: boolean;
}
@Component({
selector: 'app-panel-expedicion',
standalone: true,
template: `
<div class="panel-expedicion">
<header>
<h3>Control de Vuelo: {{ liderMision() }}</h3>
<span class="badge">Cuadrantes Totales: {{ totalCuadrantes() }}</span>
</header>
<section class="lista-sectores">
@for (item of sectores(); track item.id) {
<div class="fila-sector">
<span>#{{ $index + 1 }} {{ item.nombre }}</span>
<span [class]="item.explorado ? 'tag-ok' : 'tag-pending'">
{{ item.explorado ? 'Explorado' : 'Pendiente' }}
</span>
</div>
} @empty {
<p class="sin-rutas">No se han registrado rutas de navegación.</p>
}
</section>
<button (click)="registrarNuevoSector()">Añadir Coordenada</button>
</div>
`,
styles: [`
.panel-expedicion { background: #FFFFFF; border: 1px solid #CBD5E1; padding: 1.25rem; border -radius: 8px; max-width: 420px; font-family: 'Noto Sans', sans-serif; }
header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #1E75B8; padding-bottom: 0.5rem; margin-bottom: 1rem; }
h3 { margin: 0; color: #1F2758; font-size: 1.1rem; }
.badge { background: #1F2758; color: white; padding: 2px 8px; border-radius: 12px; font-size : 0.75rem; }
.fila-sector { display: flex; justify-content: space-between; padding: 0.4rem 0; borderbottom: 1px solid #F1F5F9; font-size: 0.85rem; }
.tag-ok { color: #059669; font-weight: bold; }
.tag-pending { color: #D97706; font-weight: bold; }
.sin-rutas { color: #64748B; font-style: italic; text-align: center; }
button { margin-top: 1rem; background: #1E75B8; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; width: 100%; font-weight: bold; }
`]
})
export class PanelExpedicionComponent {
liderMision = signal<string>('Buzz Lightyear');
sectores = signal<Cuadrante[]>([
{ id: 1, nombre: 'Nebulosa Orión Alfa', explorado: true },
{ id: 2, nombre: 'Cinturón de Asteroides Zeta', explorado: false }
]);
totalCuadrantes = computed(() => this.sectores().length);
registrarNuevoSector() {
const nuevoId = this.sectores().length + 1;
const nuevo: Cuadrante = {
id: nuevoId,
nombre: `Sector Profundo 0${nuevoId}`,
explorado: false
};
this.sectores.update(lista => [...lista, nuevo]);
}
}
