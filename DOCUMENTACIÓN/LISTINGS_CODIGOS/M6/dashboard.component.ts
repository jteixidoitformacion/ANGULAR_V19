import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TelemetryService, Microservicio } from '../../core/services/telemetry.service';
import { AuthService } from '../../core/services/auth.service';
@Component({
selector: 'app-dashboard',
standalone: true,
imports: [CommonModule, RouterLink],
template: `
<div class="dashboard-wrap">
<header class="main-head">
<div>
<h1>Servidor Central de Telemetria</h1>
<p class="user-info">Sesion activa: <span class="badge">Operador de Infraestructura</span></p>
</div>
<button (click)="salir()" class="btn-logout">Desconectar</button>
</header>
<section class="overview">
<div class="metric-card bg-primary">
<h4>Latencia Media Global</h4>
<h2>{{ latenciaMedia() }} ms</h2>
</div>
<div class="metric-card" [class.stable]="sistemaEstable()" [class.warning]="!sistemaEstable()">
<h4>Diagnostico de SLA</h4>
<h2>{{ estadoSistema() }}</h2>
</div>
</section>
<div class="actions-bar">
<h3>Lista de Control de Nodos</h3>
<button routerLink="/service/new" class="btn-add">+ Registrar Microservicio</button>
</div>
<div class="table-container">
<table class="data-table">
<thead>
<tr>
<th>ID</th>
<th>Nombre de Servicio</th>
<th>Direccion IP</th>
<th>Entorno</th>
<th>Latencia</th>
<th>Estado</th>
<th>Accion</th>
</tr>
</thead>
<tbody>
@for (ms of listaMicroservicios(); track ms.id) {
<tr>
<td>#{{ ms.id }}</td>
<td class="bold">{{ ms.nombre }}</td>
<td class="font-mono">{{ ms.ip }}</td>
<td><span class="env-tag" [class]="ms.entorno">{{ ms.entorno | uppercase }}</span></td>
<td><strong [class.lag]="ms.latencia > 100">{{ ms.latencia }} ms</strong></td>
<td>
<span class="dot" [class.green]="ms.estado === 'saludable'" [class.red]="ms.estado === 'critico'"></span>
{{ ms.estado | uppercase }}
</td>
<td>
<button (click)="navegarDetalle(ms.id)" class="btn-view">Ver Detalles</button>
</td>
</tr>
} @empty {
<tr>
<td colspan="7" class="empty-state">No se registran nodos de infraestructura activos.</ td>
</tr>
}
</tbody>
</table>
</div>
</div>
`,
styles: [`
.dashboard-wrap { max-width: 1000px; margin: 30px auto; font-family: 'Noto Sans', sans-serif; }
.main-head { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #1E75B8; padding-bottom: 12px; margin-bottom: 24px; }
h1 { color: #1F2758; margin: 0; font-size: 22px; }
.badge { background: #1F2758; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px; }
.btn-logout { background: #DC2626; color: white; border: none; padding: 6px 14px; border-radius: 4px; cursor: pointer; }
.overview { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px; }
.metric-card { background: white; padding: 18px; border-radius: 8px; border: 1px solid #E2E8F0; text -align: center; }
.metric-card.bg-primary { background: #1E75B8; color: white; border: none; }
.metric-card h4 { margin: 0; font-size: 11px; text-transform: uppercase; }
.metric-card h2 { margin: 8px 0 0 0; font-size: 26px; }
.stable { background: #F0FDF4; color: #059669; border-color: #86EFAC; }
.warning { background: #FEF2F2; color: #DC2626; border-color: #FCA5A5; }
.actions-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12 px; }
.btn-add { background: #1F2758; color: white; border: none; padding: 8px 14px; border-radius: 4px; cursor: pointer; font-weight: bold; }
.table-container { background: white; border-radius: 8px; border: 1px solid #CBD5E1; overflow: hidden; }
.data-table { width: 100%; border-collapse: collapse; }
.data-table th, .data-table td { padding: 10px 12px; text-align: left; border-bottom: 1px solid # F1F5F9; font-size: 13px; }
.data-table th { background: #F8FBFE; color: #1F2758; font-weight: bold; }
.env-tag { padding: 2px 6px; border-radius: 3px; font-size: 10px; font-weight: bold; }
.env-tag.produccion { background: #EFF6FF; color: #1E75B8; }
.env-tag.desarrollo { background: #FEF3C7; color: #D97706; }
.dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 4px; }
.dot.green { background: #059669; }
.dot.red { background: #DC2626; }
.lag { color: #DC2626; }
.btn-view { background: #F1F5F9; border: 1px solid #CBD5E1; padding: 4px 10px; border-radius: 4px; cursor: pointer; }
.empty-state { text-align: center; color: #64748B; padding: 20px; font-style: italic; }
`]
})
export class DashboardComponent implements OnInit {
private telemetryService = inject(TelemetryService);
private authService = inject(AuthService);
private router = inject(Router);
listaMicroservicios = signal<Microservicio[]>([]);
latenciaMedia = computed(() => {
const list = this.listaMicroservicios();
if (list.length === 0) return 0;
const sum = list.reduce((acc, curr) => acc + curr.latencia, 0);
return Math.round(sum / list.length);
});
sistemaEstable = computed(() => this.latenciaMedia() < 80);
estadoSistema = computed(() => this.sistemaEstable() ? 'Optimo (SLA Garantizado)' : 'Alerta de Retardo ');
ngOnInit(): void {
this.listaMicroservicios.set(this.telemetryService.getServices());
}
navegarDetalle(id: string): void {
this.router.navigate(['/service', id]);
}
salir(): void {
this.authService.logout();
this.router.navigate(['/login']);
}
}
