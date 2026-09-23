import { Component, inject } from '@angular/core';
import { DataService } from './data.service';
@Component({
selector: 'app-modern-way',
standalone: true,
template: `...`
})
export class ModernWayComponent {
private dataService = inject(DataService);
// Propiedad tipada e inicializada directamente de forma limpia
}
