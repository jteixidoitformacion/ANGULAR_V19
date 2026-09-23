import { Injectable } from '@angular/core';
export interface Identificable {
id: number;
}
@Injectable({
providedIn: 'root'
})
export class EntidadRepositorioService<T extends Identificable> {
private datos: T[] = [];
insertar(entidad: T): void {
this.datos.push(entidad);
}
buscarPorId(id: number): T | undefined {
return this.datos.find(e => e.id === id);
}
eliminarPorId(id: number): void {
this.datos = this.datos.filter(e => e.id !== id);
}
obtenerColeccion(): readonly T[] {
return [...this.datos];
}
}
