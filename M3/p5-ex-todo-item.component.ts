import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './todo.service';
@Component({
selector: 'app-todo-item',
standalone: true,
template: `
<div class="todo-item" [style.text-decoration]="task.completed ? 'line-through' : 'none'">
<span>{{ task.title }}</span>
<button (click)="onToggle()">Cambiar Estado</button>
<button (click)="onDelete()" style="color: red;">Eliminar</button>
</div>
`,
styles: [`
.todo-item {
display: flex;
justify-content: space-between;
padding: 8px;
border-bottom: 1px solid #ddd;
}
`]
})
export class TodoItemComponent {
@Input() task!: Task;
@Output() toggle = new EventEmitter<number>();
@Output() delete = new EventEmitter<number>();
onToggle(): void {
this.toggle.emit(this.task.id);
}
onDelete(): void {
this.delete.emit(this.task.id);
}
}
