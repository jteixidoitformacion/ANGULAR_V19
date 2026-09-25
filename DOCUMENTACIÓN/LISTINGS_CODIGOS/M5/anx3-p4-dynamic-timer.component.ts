import { Component, inject, OnInit, DestroyRef } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
selector: 'app-dynamic-timer',
standalone: true,
template: `<p>Temporizador dinámico protegido.</p>`
})
export class DynamicTimerComponent implements OnInit {
private destroyRef = inject(DestroyRef);
ngOnInit() {
interval(3000).pipe(
takeUntilDestroyed(this.destroyRef)
).subscribe(tick => console.log('Tick seguro fuera de inyección:', tick));
}
}
