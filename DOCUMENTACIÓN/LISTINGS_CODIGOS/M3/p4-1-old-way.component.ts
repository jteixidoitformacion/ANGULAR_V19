import { Component } from '@angular/core';
import { DataService } from './data.service';
@Component({
selector: 'app-old-way',
standalone: true,
template: `...`
})
export class OldWayComponent {
constructor(private dataService: DataService) {
// El servicio se inyecta y se asigna implicitamente a una propiedad
}
}
