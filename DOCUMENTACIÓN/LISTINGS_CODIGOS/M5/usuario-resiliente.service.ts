import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Usuario } from './usuario.service';
@Injectable({ providedIn: 'root' })
export class UsuarioResilienteService {
private http = inject(HttpClient);
private apiUrl = 'http://localhost:3000/usuarios';
crearConSeguridad(usuario: Usuario): Observable<Usuario> {
return this.http.post<Usuario>(this.apiUrl, usuario).pipe(
retry(2), // Reintenta la llamada hasta 2 veces antes de bifurcar a error
catchError(this.gestionarError)
);
}
private gestionarError(error: HttpErrorResponse): Observable<never> {
let mensajeUsuario = 'Ha ocurrido un error inesperado en la comunicación.';
if (error.status === 0) {
mensajeUsuario = 'Imposible conectar con el servidor. Comprueba tu conexión a red.';
} else if (error.status === 400) {
mensajeUsuario = 'Petición incorrecta o datos inválidos en el formulario.';
} else if (error.status === 404) {
mensajeUsuario = 'El recurso solicitado no fue localizado en el servidor remoto.';
} else if (error.status >= 500) {
mensajeUsuario = 'Incidencia interna en el servidor remoto. Inténtalo más tarde.';
}
return throwError(() => new Error(mensajeUsuario));
}
}
