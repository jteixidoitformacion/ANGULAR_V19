import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
export interface Microservicio {
id: string;
nombre: string;
ip: string;
entorno: 'desarrollo' | 'produccion';
estado: 'saludable' | 'critico';
latencia: number;
}
@Injectable({
providedIn: 'root'
})
export class TelemetryService {
private http = inject(HttpClient);
private apiUrl = 'https://jsonplaceholder.typicode.com/todos';
private localDb: Microservicio[] = [
{ id: '1', nombre: 'API Gateway Principal', ip: '10.0.0.1', entorno: 'produccion', estado: ' saludable', latencia: 24 },
{ id: '2', nombre: 'Autenticacion IAM', ip: '10.0.0.2', entorno: 'produccion', estado: 'saludable', latencia: 12 },
{ id: '3', nombre: 'Microservicio Facturacion', ip: '10.0.1.5', entorno: 'desarrollo', estado: ' critico', latencia: 185 },
{ id: '4', nombre: 'CDN Balanceador Norte', ip: '10.0.5.1', entorno: 'produccion', estado: ' saludable', latencia: 8 }
];
getServices(): Microservicio[] {
return [...this.localDb];
}
getServiceById(id: string): Microservicio | undefined {
return this.localDb.find(m => m.id === id);
}
registerService(nuevo: Microservicio): void {
this.localDb.push(nuevo);
}
fetchRemoteData(): Observable<any> {
return this.http.get<any>(this.apiUrl).pipe(
retry(2),
catchError(this.handleError)
);
}
private handleError(error: HttpErrorResponse) {
let userMsg = 'Error de comunicacion con el cluster central.';
if (error.status === 404) {
userMsg = 'El recurso de telemetria solicitado no existe.';
}
return throwError(() => new Error(userMsg));
}
}
