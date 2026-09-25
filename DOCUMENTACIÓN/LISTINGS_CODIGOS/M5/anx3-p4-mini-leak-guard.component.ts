import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { interval } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
selector: 'app-reloj-protegido',
standalone: true,
template: `<p>Temporizador seguro en ejecución.</p>`
})
export class RelojProtegidoComponent implements OnInit {
private destroyRef = inject(DestroyRef);
ngOnInit(): void {
interval(1000).pipe(
takeUntilDestroyed(this.destroyRef)
).subscribe(s => console.log('Segundo transcurrido:', s));
}
}
