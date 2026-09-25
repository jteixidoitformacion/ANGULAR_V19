import { Component, signal, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs';
@Component({
selector: 'app-product-details',
standalone: true,
template: `<h3>Detalles del producto ID: {{ productId() }}</h3>`
})
export class ProductDetailsComponent {
private http = inject(HttpClient);
productId = signal<number>(1);
// Convertimos a Observable para enganchar el switchMap reactivo de red
product$ = toObservable(this.productId).pipe(
switchMap(id => this.http.get(`/api/products/${id}`))
);
}
