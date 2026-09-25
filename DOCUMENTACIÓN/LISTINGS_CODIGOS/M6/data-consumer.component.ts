takeUntilDestroyed():
import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
selector: 'app-data-consumer',
standalone: true,
template: `<p>Consumidor de datos activos en red.</p>`
})
export class DataConsumerComponent implements OnInit {
private http = inject(HttpClient);
constructor() {
// Al invocarse dentro del constructor, deduce de forma automatica el Injection Context
this.http.get('https://api.empresa.org/data')
.pipe(takeUntilDestroyed())
.subscribe(res => console.log('Payload sincronizado:', res));
}
ngOnInit(): void {}
}
