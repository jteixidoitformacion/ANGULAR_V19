import { CommonModule } from '@angular/common';
@Component({
selector: 'app-perf-monitor',
standalone: true,
imports: [CommonModule],
template: `
<div class="border border-slate-200 p-6 rounded-lg bg-slate-50">
<h3 class="text-lg font-bold text-[#1F2758]">Monitor de Rendimiento Angular 19</h3>
<p class="mt-2 text-sm">Latencia Actual: <strong>{{ latencia() }} ms</strong></p>
<p class="text-sm">Estado de Eficiencia: <strong>{{ eficiencia() }}</strong></p>
<div class="mt-4 flex gap-2">
<button (click)="incrementarLatencia()" class="bg-[#1F2758] text-white px-3 py-1.5 rounded text-xs">
Forzar Sobrecarga (+50ms)
</button>
<button (click)="restablecerLatencia()" class="bg-emerald-600 text-white px-3 py-1.5 rounded text-xs">
Optimizar Red
</button>
</div>
</div>
`
})
export class PerfMonitorComponent {
latencia = signal<number>(20);
eficiencia = computed(() => {
const lat = this.latencia();
if (lat < 50) return 'Excelente (Optima reactividad)';
if (lat >= 50 && lat < 150) return 'Regular (Zona ZoneJS)';
return 'Peligro (Sobrecarga de renderizado)';
});
incrementarLatencia() {
this.latencia.update(current => current + 50);
}
restablecerLatencia() {
this.latencia.set(20);
}
}
