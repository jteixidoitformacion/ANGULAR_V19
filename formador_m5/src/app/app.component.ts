import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginRapidoComponent } from './components/login-rapido/login-rapido.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RegistroComponent, LoginRapidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'formador_m5';
}
