import { Component, inject } from '@angular/core';
export abstract class AnalyticsService {
abstract enviar(tag: string): void;
}
@Component({
selector: 'app-boton-rastreador',
standalone: true,
template: `<button (click)="clickRastreado()">Pulsar Accion</button>`
})
export class BotonRastreadorComponent {
private analytics = inject(AnalyticsService, { optional: true });
clickRastreado(): void {
if (this.analytics) {
this.analytics.enviar('btn_click');
}
}
}
