import { Component, Injectable, inject } from '@angular/core';
@Injectable()
export class PestanaCounterService {
contador: number = 0;
incrementar(): void { this.contador++; }
}
@Component({
selector: 'app-pestana-individual',
standalone: true,
providers: [PestanaCounterService],
template: `
<div class="pestana">
<p>Valor de esta pestana: {{ srv.contador }}</p>
<button (click)="srv.incrementar()">Incrementar</button>
</div>
`,
styles: [`.pestana { border: 1px solid #1E75B8; padding: 10px; margin: 5px; }`]
})
export class PestanaIndividualComponent {
public srv = inject(PestanaCounterService);
}
