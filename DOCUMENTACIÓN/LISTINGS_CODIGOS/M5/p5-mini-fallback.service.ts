import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class AvisosService {
private http = inject(HttpClient);
cargarAvisosSeguros(): Observable<string[]> {
return this.http.get<string[]>('/api/avisos-urgentes').pipe(
catchError((error) => {
console.warn('Fallo al recuperar avisos, aplicando fallback local:', error.status);
return of([]); // Retorna un flujo con arreglo vacio para evitar caida de UI
})
);
}
}
