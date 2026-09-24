import { Component, Input, OnInit } from '@angular/core';
@Component({
selector: 'app-detalle-cliente',
standalone: true,
template: `<p>Visualizando datos del cliente con ID: {{ id }}</p>`
})
export class DetalleClienteComponent implements OnInit {
@Input() id!: string; // Se asigna automaticamente desde la URL clientes/:id
ngOnInit() {
console.log('ID cargado de forma automatica:', this.id);
}
}
