import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-contador',
  standalone: true,
  imports: [],
  templateUrl: './boton-contador.component.html',
  styleUrl: './boton-contador.component.scss'
})
export class BotonContadorComponent {
  @Input() paso: number = 1;
  @Output() cambio = new EventEmitter<number>();

  emitirCambio() {
    this.cambio.emit(this.paso);
  }
}
