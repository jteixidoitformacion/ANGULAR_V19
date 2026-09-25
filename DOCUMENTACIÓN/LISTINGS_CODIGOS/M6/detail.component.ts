linkedSignal:
import { Component, Input, OnInit, inject, signal, linkedSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TelemetryService, Microservicio } from '../../core/services/telemetry.service';
@Component({
selector: 'app-detail',
standalone: true,
imports: [CommonModule, RouterLink],
template: `
<div class="detail-wrap">
<h2>Telemetria Quirurgica del Nodo</h2>
<p class="desc">Parametros de red recuperados mediante Component Input Binding.</p>
@if (microservicio()) {
<div class="card">
<header class="card-head">
<h3>{{ microservicio()?.nombre }}</h3>
<span class="badge" [class]="microservicio()?.estado">{{ microservicio()?.estado | uppercase}}</span>
</header>
<table class="detail-table">
<tr>
<td><strong>Identificador:</strong></td>
<td class="font-mono">UUID-NODO-{{ microservicio()?.id }}</td>
</tr>
<tr>
<td><strong>Direccion IP:</strong></td>
<td class="font-mono">{{ microservicio()?.ip }}</td>
</tr>
<tr>
<td><strong>Entorno Tecnologico:</strong></td>
<td>{{ microservicio()?.entorno | uppercase }}</td>
</tr>
<tr>
<td><strong>Latencia de Respuesta:</strong></td>
<td><strong>{{ microservicio()?.latencia }} ms</strong></td>
</tr>
<tr>
<td><strong>Asignacion de Memoria (linkedSignal):</strong></td>
<td>{{ limiteConsumo() }}</td>
</tr>
</table>
<div class="sandbox">
<p class="text-xs"><strong>Simulacion Reactiva:</strong> Modifica la latencia para comprobar la respuesta de linkedSignal.</p>
<div class="flex gap-2">
<button (click)="degradarNodo()" class="btn btn-warn">Forzar Sobrecarga (+50ms)</button>
<button (click)="restaurarNodo()" class="btn btn-ok">Estabilizar Nodo (10ms)</button>
</div>
</div>
<button routerLink="/dashboard" class="btn-back">Regresar al Catalogo</button>
</div>
} @else {
<div class="alert danger">
El microservicio con identificador <strong>#{{ id }}</strong> no se encuentra en el cluster activo.
</div>
<button routerLink="/dashboard" class="btn-back">Regresar al Catalogo</button>
}
</div>
`,
styles: [`
.detail-wrap { max-width: 600px; margin: 30px auto; font-family: 'Noto Sans', sans-serif; }
h2 { color: #1F2758; margin: 0; }
.desc { color: #64748B; font-size: 13px; margin: 6px 0 20px 0; }
.card { background: white; padding: 24px; border-radius: 8px; border: 1px solid #CBD5E1; }
.card-head { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #F1F5F9; padding-bottom: 10px; margin-bottom: 16px; }
.card-head h3 { margin: 0; color: #1F2758; }
.badge { padding: 3px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; color: white; }
.badge.saludable { background: #059669; }
.badge.critico { background: #DC2626; }
.detail-table { width: 100%; margin-bottom: 20px; }
.detail-table td { padding: 8px 0; border-bottom: 1px dashed #E2E8F0; font-size: 13px; }
.font-mono { font-family: monospace; }
.sandbox { background: #FFFBEB; border: 1px solid #FDE68A; padding: 12px; border-radius: 6px; margin -bottom: 16px; }
.text-xs { font-size: 12px; color: #92400E; margin-top: 0; }
.flex { display: flex; gap: 8px; }
.btn { padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; font-size: 12px; fontweight: bold; }
.btn-warn { background: #D97706; color: white; }
.btn-ok { background: #059669; color: white; }
.btn-back { background: #1F2758; color: white; border: none; padding: 8px 14px; border-radius: 4px; cursor: pointer; text-decoration: none; font-size: 12px; }
.alert { background: #FEF2F2; border-left: 4px solid #DC2626; color: #991B1B; padding: 12px; fontsize: 13px; margin-bottom: 14px; }
`]
})
export class DetailComponent implements OnInit {
@Input() id!: string;
private telemetryService = inject(TelemetryService);
microservicio = signal<Microservicio | undefined>(undefined);
limiteConsumo = linkedSignal({
source: this.microservicio,
computation: (servicio) => {
if (!servicio) return 'No determinado';
return servicio.entorno === 'produccion' ? 'Ilimitado (Alta Demanda)' : 'Restringido (512MB RAM)';
}
});
ngOnInit(): void {
const ms = this.telemetryService.getServiceById(this.id);
this.microservicio.set(ms);
}
degradarNodo(): void {
const act = this.microservicio();
if (act) {
this.microservicio.set({ ...act, latencia: act.latencia + 50, estado: 'critico' });
this.limiteConsumo.set('Estrangulado a 128MB RAM (Medida de Contingencia)');
}
}
restaurarNodo(): void {
const act = this.microservicio();
if (act) {
this.microservicio.set({ ...act, latencia: 10, estado: 'saludable' });
}
}
}
