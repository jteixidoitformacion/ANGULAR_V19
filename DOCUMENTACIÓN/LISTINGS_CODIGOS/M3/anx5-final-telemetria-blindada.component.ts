import { Component, inject } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
selector: 'app-monitor-telemetria',
standalone: true,
template: `
<div class="telemetria-box">
<h3>Monitor de Telemetria en Vivo</h3>
<p>Paquetes recibidos: <strong>{{ totalPaquetes }}</strong></p>
</div>
`,
styles: [`
.telemetria-box { border: 2px solid #059669; background: #F0FDF4; padding: 15px; borderradius: 8px; }
`]
})
export class MonitorTelemetriaComponent {
totalPaquetes: number = 0;
constructor() {
interval(500)
.pipe(takeUntilDestroyed())
.subscribe(() => {
this.totalPaquetes++;
});
}
}
