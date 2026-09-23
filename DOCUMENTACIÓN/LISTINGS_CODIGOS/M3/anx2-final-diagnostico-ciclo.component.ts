import { Component, OnInit, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { AuditLogService } from './audit-log.service';
@Component({
selector: 'app-consola-diagnostico',
standalone: true,
template: `
<div class="consola-card">
<h4>Eventos Registrados de Ciclo de Vida</h4>
<ul>
@for (evento of historial; track evento) {
<li>{{ evento }}</li>
}
</ul>
</div>
`,
styles: [`
.consola-card { background: #F8FBFE; border: 1px solid #1E75B8; padding: 15px; border-radius : 6px; }
`]
})
export class ConsolaDiagnosticoComponent implements OnInit, AfterViewInit, OnDestroy {
private audit = inject(AuditLogService);
historial: string[] = [];
ngOnInit(): void {
this.registrar('Fase 1: ngOnInit ejecutado exitosamente');
}
ngAfterViewInit(): void {
this.registrar('Fase 2: ngAfterViewInit completado (Vistas renderizadas)');
}
ngOnDestroy(): void {
this.audit.registrarAccion('Fase 3: ngOnDestroy invocado (Liberacion completada)');
}
private registrar(mensaje: string): void {
this.historial.push(`[${new Date().toLocaleTimeString()}] ${mensaje}`);
this.audit.registrarAccion(mensaje);
}
}
