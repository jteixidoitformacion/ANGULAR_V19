import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Metrica {
id: string;
nodo: string;
temperatura: number;
}
@Injectable({ providedIn: 'root' })
export class SensorService {
private http = inject(HttpClient);
private endpoint = 'https://api.empresa.org/v1/metricas';
obtenerMetricas(): Observable<Metrica[]> {
return this.http.get<Metrica[]>(this.endpoint);
}
}
