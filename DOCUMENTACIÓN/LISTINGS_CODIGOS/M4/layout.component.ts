import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
@Component({
selector: 'app-layout',
standalone: true,
imports: [RouterOutlet, RouterLink],
template: `
<header class="main-header">
<nav>
<a routerLink="/inicio">Inicio</a>
</nav>
</header>
<main class="content-container">
<router-outlet></router-outlet>
</main>
`
})
export class LayoutComponent {}
