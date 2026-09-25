import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-error-404',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="not-found-pane">
      <h2>Recurso no localizado (Error 404)</h2>
      <p>La direccion solicitada no existe en el mapa de navegacion.</p>
      <a routerLink="/dashboard" class="btn-return">Regresar al Panel</a>
    </section>
  `,
  styles: [
    `
      .not-found-pane {
        background-color: #0000ff
        padding: 2rem;
        border: 1px solid #ccc;
        text-align: center;
      }
      .btn-return {
        color: #1e75b8;
        text-decoration: underline;
        font-weight: bold;
      }
    `,
  ],
})
export class Error404Component {}
