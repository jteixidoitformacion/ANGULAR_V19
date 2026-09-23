// app.component.ts - Componente Autonomo
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
selector: 'app-root',
standalone: true, // Definicion explicita (por defecto en Angular 19)
imports: [CommonModule, MatButtonModule], // Dependencias directas
template: `
<main class="p-4">
<h1>Bienvenido a Angular 19</h1>
<button mat-raised-button color="primary">Accion Autonoma</button>
</main>
`,
styles: [`
h1 { font-family: 'Tahoma', sans-serif; color: #1F2758; }
`]
})
export class AppComponent {}
