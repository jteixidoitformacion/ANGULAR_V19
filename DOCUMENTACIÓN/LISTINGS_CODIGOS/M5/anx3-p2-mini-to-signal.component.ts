import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
selector: 'app-contador-stream',
standalone: true,
template: `<p>Contador en tiempo real: <strong>{{ ticks() }}</strong></p>`
})
export class ContadorStreamComponent {
ticks = toSignal(interval(1000), { initialValue: 0 });
}
