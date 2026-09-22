import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-saludo',
  imports: [],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.scss'
})
export class SaludoComponent {
  saludo = signal('Hola, bienvenido!');
  saludo2 = this.saludo();
}
