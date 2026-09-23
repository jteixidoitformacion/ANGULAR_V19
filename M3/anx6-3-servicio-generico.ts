import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class MemoryStoreService<T> {
private elementos: T[] = [];
almacenar(item: T): void {
this.elementos.push(item);
}
listar(): readonly T[] {
return [...this.elementos];
}
}
