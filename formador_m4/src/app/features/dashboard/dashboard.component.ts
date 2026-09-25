import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `
    <section class="dashboard-pane">
      <h2>Panel de Control Principal Operativo (del usuario : {{ name }})</h2>
      <p>
        Estado del sistema: Todos los servicios en linea. Este es el contenido
        de Dashboard.
      </p>
      <button (click)="cambiarRuta()">  
        Cambiar de ruta
      </button> 
    </section>
  `,
  styles: [
    `
      .dashboard-pane {
        background-color: #ff0000;
        padding: 2rem;
        border: 1px solid #ccc;
        padding: 1.5rem;
        border-radius: 6px;
      }
    `,
  ],
})
export class DashboardComponent {
  router = inject(Router);
  @Input() name = 'usuario sin nombre';

  cambiarRuta(): void {
    this.router.navigate(['/dashboard'], {
            queryParams: { name: 'Anastasio' }
    });
  }
}
