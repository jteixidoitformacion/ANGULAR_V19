import { Component, signal } from '@angular/core';
@Component({
selector: 'app-text-input',
standalone: true,
template: `
<div class="input-container">
<input
[value]="username()"
(input)="username.set($any($event.target).value)"
placeholder="Escribe tu nombre">
<p>El nombre de usuario actual es: {{ username() }}</p>
</div>
`
})
export class TextInputComponent {
username = signal<string>('');
}
