import { Component, input } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent {
  gama = input.required<string>();
  marca = input.required<string>();
}