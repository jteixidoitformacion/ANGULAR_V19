import { Component, signal } from '@angular/core';
@Component({
selector: 'app-heroe-profile',
standalone: true,
template: `
<article class="perfil-card">
<header>
<h2>{{ personaje() }}</h2>
<span class="badge-rol">{{ categoria() }}</span>
</header>
<p class="estado">Nivel de Operatividad: <strong>{{ energia() }}%</strong></p>
<button (click)="incrementarEnergia()">Recargar Escudos</button>
</article>
`,
styles: [`
.perfil-card { background: #FFFFFF; border: 1px solid #CBD5E1; border-radius: 8px; padding: 1.25rem; max-width: 320px; }
header { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #E2E8F0; padding-bottom: 0.5rem; margin-bottom: 0.75rem; }
h2 { margin: 0; color: #1F2758; font-size: 1.15rem; }
.badge-rol { background: #F0FDF4; color: #059669; font-size: 0.75rem; padding: 2px 8px; borderradius: 4px; font-weight: bold; }
.estado { color: #475569; font-size: 0.9rem; margin-bottom: 1rem; }
button { background: #1E75B8; color: white; border: none; padding: 0.5rem 1rem; border-radius: 4px; cursor: pointer; font-weight: bold; width: 100%; }
`]
})
export class HeroeProfileComponent {
personaje = signal<string>('Elsa de Arendelle');
categoria = signal<string>('Realeza Mágica');
energia = signal<number>(85);
incrementarEnergia() {
this.energia.update(valor => Math.min(100, valor + 5));
}
}
