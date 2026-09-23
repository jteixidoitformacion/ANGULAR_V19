import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class PilaOperacionesService<T> {
private pila: T[] = [];
apilar(elemento: T): void {
this.pila.push(elemento);
}
desapilar(): T | undefined {
return this.pila.pop();
}
}
