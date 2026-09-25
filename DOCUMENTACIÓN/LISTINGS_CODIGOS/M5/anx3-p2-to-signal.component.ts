import { inject, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
selector: 'app-users',
standalone: true,
template: `
<ul>
@for (user of users(); track user.id) {
<li>{{ user.name }}</li>
}
</ul>
`
})
export class UsersComponent {
private http = inject(HttpClient);
// toSignal requiere un valor inicial si el Observable no emite sincronamente
users = toSignal(
this.http.get<any[]>('/api/users'),
{ initialValue: [] }
);
}
