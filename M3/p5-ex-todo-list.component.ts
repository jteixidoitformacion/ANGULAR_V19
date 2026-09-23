import { Component, inject } from '@angular/core';
import { TodoService, Task } from './todo.service';
import { TodoItemComponent } from './todo-item.component';
@Component({
selector: 'app-todo-list',
standalone: true,
imports: [TodoItemComponent],
template: `
<div class="todo-container">
<h2>Mi Lista de Tareas</h2>
<div class="input-group">
<input #newTaskInput placeholder="Nueva tarea..." />
<button (click)="addNewTask(newTaskInput.value); newTaskInput.value=''">
Agregar Tarea
</button>
</div>
<div class="list-wrapper">
@for (t of todoService.getTasks(); track t.id) {
<app-todo-item
[task]="t"
(toggle)="onToggleTask($event)"
(delete)="onDeleteTask($event)">
</app-todo-item>
} @empty {
<p class="empty-msg">No hay tareas pendientes en la lista.</p>
}
</div>
</div>
`,
styles: [`
.todo-container { max-width: 500px; margin: 0 auto; padding: 20px; }
.input-group { margin-bottom: 15px; display: flex; gap: 10px; }
.input-group input { flex-grow: 1; padding: 8px; }
.input-group button { background-color: #2980b9; color: white; border: none; padding: 8px 12 px; cursor: pointer; }
.empty-msg { color: #64748B; font-style: italic; text-align: center; }
`]
})
export class TodoListComponent {
public todoService = inject(TodoService);
addNewTask(title: string): void {
if (title.trim()) {
this.todoService.addTask(title);
}
}
onToggleTask(id: number): void {
this.todoService.toggleTask(id);
}
onDeleteTask(id: number): void {
this.todoService.removeTask(id);
}
}
