import { Component, inject } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
selector: 'app-reloj-seguro',
standalone: true,
template: `<p>Reloj funcionando de forma segura</p>`
})
export class RelojSeguroComponent {
constructor() {
interval(1000)
.pipe(takeUntilDestroyed()) // Detecta el Injection Context actual
.subscribe(tick => console.log('Tick:', tick));
}
}
