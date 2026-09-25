import { Component, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, switchMap, of, catchError } from 'rxjs';
@Component({
selector: 'app-search',
standalone: true,
template: `
<input (input)="onInputChange($any($event.target).value)" placeholder="Buscar elementos..." />
<ul>
@for (item of results(); track item.id) {
<li>{{ item.name }}</li>
}
</ul>
`
})
export class SearchComponent {
private http = inject(HttpClient);
query = signal<string>('');
results = toSignal(
toObservable(this.query).pipe(
debounceTime(400), // Regula rafagas rapidas de escritura
distinctUntilChanged(), // Emite unicamente si el texto cambio
switchMap(term => {
if (!term.trim()) return of([]);
return this.http.get<any[]>(`/api/search?q=${term}`).pipe(
catchError(() => of([])) // Previene la caida del flujo ante errores
);
})
),
{ initialValue: [] }
);
onInputChange(val: string) {
this.query.set(val);
}
}
