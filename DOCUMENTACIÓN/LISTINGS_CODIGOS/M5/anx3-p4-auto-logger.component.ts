import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
selector: 'app-auto-logger',
standalone: true,
template: `<p>Monitor de trazas activo con desuscripción automática.</p>`
})
export class AutoLoggerComponent implements OnInit {
private heartbeat$ = interval(1000).pipe(
takeUntilDestroyed() // Auto-configuracion contextual
);
ngOnInit() {
this.heartbeat$.subscribe(val => console.log('Heartbeat emitido:', val));
}
}
