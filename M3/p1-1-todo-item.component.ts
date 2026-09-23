import { Component, Input } from '@angular/core';
@Component({
selector: 'app-todo-item',
standalone: true,
template: `<p>Tarea: {{ taskName }}</p>`
})
export class TodoItemComponent {
@Input() taskName: string = '';
}
