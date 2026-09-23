import { Injectable } from '@angular/core';
@Injectable({
providedIn: 'root'
})
export class NotificacionGlobalService {
emitirAlerta(msg: string): void {
console.info(`[ALERTA GLOBAL]: ${msg}`);
}
}
