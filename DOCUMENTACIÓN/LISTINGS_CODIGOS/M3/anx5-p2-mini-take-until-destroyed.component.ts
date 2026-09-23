import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
selector: 'app-monitor-resize',
standalone: true,
template: `<p>Monitor de dimension de ventana en ejecucion</p>`
})
export class MonitorResizeComponent implements OnInit {
private destroyRef = inject(DestroyRef);
ngOnInit(): void {
fromEvent(window, 'resize')
.pipe(takeUntilDestroyed(this.destroyRef))
.subscribe(() => console.log('Resize detectado'));
}
}
