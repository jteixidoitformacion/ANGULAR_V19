import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class CarritoService {
private articulos: string[] = [];
agregar(articulo: string): void {
this.articulos.push(articulo);
}
obtenerArticulos(): readonly string[] {
return [...this.articulos];
}
}
