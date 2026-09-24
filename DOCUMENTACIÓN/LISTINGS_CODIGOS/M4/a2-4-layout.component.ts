import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
selector: 'app-layout',
standalone: true,
imports: [RouterOutlet, RouterLink],
template: `
<header class="app-header">
<nav class="navigation-bar">
<a routerLink="/inicio" class="nav-link">Inicio</a>
</nav>
</header>
<main class="content-area">
<router-outlet></router-outlet>
</main>
`
})
export class LayoutComponent {}
