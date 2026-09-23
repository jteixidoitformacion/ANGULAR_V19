import { Component, Output, EventEmitter } from '@angular/core';
@Component({
selector: 'app-todo-item',
standalone: true,
template: `<button (click)="notifyParent()">Completar</button>`
})
export class TodoItemComponent {
@Output() completed = new EventEmitter<void>();
notifyParent(): void {
this.completed.emit();
}
}
