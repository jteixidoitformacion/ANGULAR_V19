import { Component } from '@angular/core';
@Component({
selector: 'app-boton-accion',
standalone: true,
template: `
<button class="btn-corporativo"><ng-content></ng-content></button>
`,
styles: [`
.btn-corporativo { background: #1E75B8; color: white; border: none; padding: 8px 16px; border -radius: 4px; font-weight: bold; cursor: pointer; }
`]
})
export class BotonAccionComponent {}
