import { Component } from '@angular/core';
import { BotonContadorComponent } from '../boton-contador/boton-contador.component';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [BotonContadorComponent],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.scss'
})
export class ContadorComponent {
  contador: number = 0;

  cambiar(paso: number) {
    this.contador += paso;
  }
}
