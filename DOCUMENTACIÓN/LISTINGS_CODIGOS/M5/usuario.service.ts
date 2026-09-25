import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Usuario {
id?: number | string;
nombre: string;
correo: string;
}
@Injectable({
providedIn: 'root'
})
export class UsuarioService {
private http = inject(HttpClient);
private apiUrl = 'http://localhost:3000/usuarios';
// 1. Lectura global (GET)
obtenerTodos(): Observable<Usuario[]> {
return this.http.get<Usuario[]>(this.apiUrl);
}
// 2. Creación de registro (POST)
crear(usuario: Usuario): Observable<Usuario> {
return this.http.post<Usuario>(this.apiUrl, usuario);
}
// 3. Actualización total (PUT)
actualizar(id: number | string, usuario: Usuario): Observable<Usuario> {
return this.http.put<Usuario>(`${this.apiUrl}/${id}`, usuario);
}
// 4. Eliminación física (DELETE)
eliminar(id: number | string): Observable<void> {
return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
}
