import { Component, signal } from '@angular/core';
interface Proyecto {
id: number;
nombre: string;
prioridad: 'baja' | 'media' | 'alta';
completado: boolean;
}
@Component({
selector: 'app-mini-dashboard',
standalone: true,
template: `
<div class="dashboard-container">
<header class="db-header">
<h2>Panel de Control Técnico</h2>
<span class="badge-version">Angular 19 Standalone</span>
</header>
<!-- Sección de Formulario Reactivo con Signals -->
<section class="form-section">
<h3>Agregar Nuevo Proyecto</h3>
<div class="input-group">
<input
[value]="nuevoNombre()"
(input)="nuevoNombre.set($any($event.target).value)"
placeholder="Nombre del proyecto..." />
<select
[value]="nuevaPrioridad()"
(change)="nuevaPrioridad.set($any($event.target).value)">
<option value="baja">Baja Prioridad</option>
<option value="media">Media Prioridad</option>
<option value="alta">Prioridad Crítica</option>
</select>
<button (click)="agregarProyecto()">Insertar</button>
</div>
</section>
<!-- Estadísticas Dinámicas con @if -->
<section class="stats-section">
@if (listaProyectos().length > 0) {
<p>Total de proyectos activos: <strong>{{ listaProyectos().length }}</strong></p>
} @else {
<div class="alert warn">Ningún proyecto listado. Comienza rellenando el formulario.</ div>
}
</section>
<!-- Listado con @for e índices de contexto -->
<section class="list-section">
<h3>Lista de Control</h3>
@for (proy of listaProyectos(); track proy.id) {
<div class="proyecto-item" [class.alta-prioridad]="proy.prioridad === 'alta'">
<div class="info">
<span class="index">#{{ $index + 1 }}</span>
<span class="nombre">{{ proy.nombre }}</span>
<span class="tag" [class]="proy.prioridad">{{ proy.prioridad.toUpperCase() }}</ span>
</div>
<div class="actions">
<button (click)="eliminarProyecto(proy.id)">Eliminar</button>
</div>
</div>
} @empty {
<div class="empty-state">
<p>La lista de proyectos se encuentra limpia en este momento.</p>
</div>
}
</section>
<!-- Carga Diferida con @defer -->
<section class="defer-section">
@defer (on interaction; prefetch on idle) {
<div class="telemetria-box">
<h4>Módulo de Auditoría y Telemetría</h4>
<p>Datos analíticos cargados diferidamente bajo demanda del operador.</p>
</div>
} @placeholder (minimum 300ms) {
<button class="btn-defer">Haga clic para inicializar la consola de auditoría</button>
} @loading {
<p class="loading-text">Descargando módulo de telemetría...</p>
} @error {
<p class="error-text">Fallo de conexión al transferir el artefacto analítico.</p>
}
</section>
</div>
`,
styles: [`
.dashboard-container { font-family: 'Noto Sans', sans-serif; max-width: 650px; margin: 0 auto; padding: 20px; border: 1px solid #CBD5E1; border-radius: 8px; background: #ffffff;}
.db-header { display: flex; justify-content: space-between; align-items: center; borderbottom: 2px solid #1E75B8; padding-bottom: 10px; margin-bottom: 20px; }
.db-header h2 { color: #1F2758; margin: 0; font-size: 1.3rem; }
.badge-version { background: #1F2758; color: white; padding: 2px 8px; border-radius: 12px; font-size: 0.75rem; font-weight: bold; }
.form-section { background: #F8FBFE; padding: 15px; border-radius: 6px; margin-bottom: 20px; border: 1px solid #E2E8F0; }
.input-group { display: flex; gap: 10px; }
.input-group input { flex: 2; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
.input-group select { flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
.input-group button { background: #1E75B8; color: #fff; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.proyecto-item { display: flex; justify-content: space-between; align-items: center; padding : 10px; border-bottom: 1px solid #eee; }
.proyecto-item.alta-prioridad { background-color: #FEF2F2; border-left: 4px solid #DC2626; }
.info { display: flex; align-items: center; gap: 10px; }
.index { color: #95a5a6; font-weight: bold; }
.tag { font-size: 11px; padding: 2px 6px; border-radius: 3px; font-weight: bold; }
.tag.alta { background: #DC2626; color: white; }
.tag.media { background: #D97706; color: white; }
.tag.baja { background: #059669; color: white; }
.empty-state { text-align: center; color: #7f8c8d; padding: 20px; border: 2px dashed #CBD5E1; border-radius: 6px; }
.defer-section { margin-top: 20px; padding-top: 15px; border-top: 1px solid #E2E8F0; }
.btn-defer { width: 100%; padding: 10px; background: #F8FBFE; border: 1px dashed #1E75B8; color: #1E75B8; font-weight: bold; border-radius: 6px; cursor: pointer; }
.telemetria-box { background: #F0FDF4; border: 1px solid #86EFAC; padding: 12px; borderradius: 6px; color: #065F46; }
.loading-text { color: #1E75B8; text-align: center; font-style: italic; }
.error-text { color: #DC2626; text-align: center; }
`]
})
export class MiniDashboardComponent {
listaProyectos = signal<Proyecto[]>([
{ id: 1, nombre: 'Migración a Angular 19', prioridad: 'alta', completado: false },
{ id: 2, nombre: 'Refactorización de módulo Auth', prioridad: 'media', completado: true }
]);
nuevoNombre = signal<string>('');
nuevaPrioridad = signal<'baja' | 'media' | 'alta'>('baja');
agregarProyecto() {
const nombre = this.nuevoNombre().trim();
if (!nombre) return;
const nuevo: Proyecto = {
id: Date.now(),
nombre,
prioridad: this.nuevaPrioridad(),
completado: false
};
this.listaProyectos.update(proyectos => [...proyectos, nuevo]);
this.nuevoNombre.set('');
this.nuevaPrioridad.set('baja');
}
eliminarProyecto(id: number) {
this.listaProyectos.update(proyectos => proyectos.filter(p => p.id !== id));
}
}
