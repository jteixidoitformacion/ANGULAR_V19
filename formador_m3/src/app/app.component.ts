import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';
import { ManagerLogsComponent } from './manager-logs/manager-logs.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContadorComponent, ManagerLogsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'formador_m3';
}
