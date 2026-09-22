import { Component } from '@angular/core';
@Component({
selector: 'app-badge-estado',
standalone: true,
template: `
<span class="badge-online">Nodo Operativo</span>
`,
styles: [`
.badge-online { background: #F0FDF4; color: #059669; border: 1px solid #86EFAC; padding: 3px 8px; border-radius: 4px; font-weight: bold; font-size: 0.8rem; }
`]
})
export class BadgeEstadoComponent {}
