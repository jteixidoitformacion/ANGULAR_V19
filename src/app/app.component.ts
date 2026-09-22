import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfMonitorComponent } from './perf-monitor/perf-monitor.component';
import { UserLoaderComponent } from './user-loader/user-loader.component';
import { DashboardIntegradorComponent } from './dashboard-integrador/dashboard-integrador.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PerfMonitorComponent, UserLoaderComponent, DashboardIntegradorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto_m1';
}
