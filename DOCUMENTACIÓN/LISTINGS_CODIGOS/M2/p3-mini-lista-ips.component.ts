import { Component } from '@angular/core';
@Component({
selector: 'app-lista-ips',
standalone: true,
template: `
@for (ip of ips; track ip) {
<div class="fila-ip">
<span>#{{ $index + 1 }} - {{ ip }}</span>
@if ($first) { <strong class="badge-primary">[Gateway Principal]</strong> }
</div>
} @empty {
<p>No se registran direcciones asignadas.</p>
}
`
})
export class ListaIpsComponent {
ips: string[] = ['192.168.1.1', '192.168.1.10', '192.168.1.25'];
}
