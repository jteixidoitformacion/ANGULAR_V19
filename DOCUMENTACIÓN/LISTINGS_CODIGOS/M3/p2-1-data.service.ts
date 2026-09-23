import { Injectable } from '@angular/core';
@Injectable({
providedIn: 'root' // Define que el servicio es un Singleton a nivel global
})
export class DataService {
private data: string[] = [];
getItems(): string[] {
return this.data;
}
addItem(item: string): void {
this.data.push(item);
}
}
