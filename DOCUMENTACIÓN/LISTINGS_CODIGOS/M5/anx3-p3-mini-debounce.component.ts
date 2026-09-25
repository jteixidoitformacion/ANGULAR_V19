import { Component, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged } from 'rxjs';
@Component({
selector: 'app-filtro-controlado',
standalone: true,
template: `<input (input)="filtro.set($any($event.target).value)" placeholder="Filtrar..." />`
})
export class FiltroControladoComponent {
filtro = signal<string>('');
constructor() {
toObservable(this.filtro).pipe(
debounceTime(300),
distinctUntilChanged()
).subscribe(valor => console.log('Filtro estabilizado:', valor));
}
}
