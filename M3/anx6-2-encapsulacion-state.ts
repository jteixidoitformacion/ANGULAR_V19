import { Injectable, signal } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class SesionService {
private _usuarioActivo = signal<string | null>(null);
// Exposicion de solo lectura para los componentes
public readonly usuarioActivo = this._usuarioActivo.asReadonly();
iniciarSesion(nombre: string): void {
this._usuarioActivo.set(nombre);
}
}
