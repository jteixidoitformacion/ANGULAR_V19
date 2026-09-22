import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-perf-monitor',
  imports: [],
  templateUrl: './perf-monitor.component.html',
  styleUrl: './perf-monitor.component.scss',
})
export class PerfMonitorComponent {
  latencia = signal<number>(10);
  eficiencia = computed(() => {
    const lat = this.latencia();
    if (lat  < 50) return 'Excelente (Optima reactividad)';
    if (lat >= 50 && lat < 150) return 'Regular (Zona ZoneJS)';
    return 'Peligro (Sobrecarga de renderizado)';
  });
  incrementarLatencia() {
    this.latencia.update((current) => current + 50);
  }
  restablecerLatencia() {
    this.latencia.set(20);
  }
  establecerLatencia(valor: number) {
    this.latencia.set(valor);
  }
}
