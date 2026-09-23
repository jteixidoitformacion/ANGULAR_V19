import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { interval, map, Observable } from 'rxjs';
@Component({
selector: 'app-reloj-declarativo',
standalone: true,
imports: [AsyncPipe],
template: `<p>Hora del sistema: {{ horaActual$ | async }}</p>`
})
export class RelojDeclarativoComponent {
horaActual$: Observable<string> = interval(1000).pipe(
map(() => new Date().toLocaleTimeString())
);
}
