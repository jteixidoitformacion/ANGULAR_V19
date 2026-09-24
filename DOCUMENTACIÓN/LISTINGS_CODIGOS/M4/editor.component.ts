import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({ ... })
export class EditorComponent {
private router = inject(Router);
private activeRoute = inject(ActivatedRoute);
cancelarEdicion() {
// Retorna una seccion atras relativo a la ruta activa actual
this.router.navigate(['../'], { relativeTo: this.activeRoute });
}
}
