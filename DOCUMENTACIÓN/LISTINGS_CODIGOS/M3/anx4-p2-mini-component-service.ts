import { Component, Injectable, inject } from '@angular/core';
@Injectable()
export class BorradorService {
public textoBorrador = '';
}
@Component({
selector: 'app-ficha-cliente',
standalone: true,
providers: [BorradorService],
template: `<p>Borrador activo: {{ borrador.textoBorrador }}</p>`
})
export class FichaClienteComponent {
public borrador = inject(BorradorService);
}
