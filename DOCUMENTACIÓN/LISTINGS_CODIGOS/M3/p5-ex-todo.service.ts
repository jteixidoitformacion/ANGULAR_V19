import { Injectable } from '@angular/core';
export interface Task {
id: number;
title: string;
completed: boolean;
}
@Injectable({
providedIn: 'root'
})
export class TodoService {
private tasks: Task[] = [
{ id: 1, title: 'Configurar entorno Angular 19', completed: true },
{ id: 2, title: 'Dominar la inyeccion con inject()', completed: false }
];
getTasks(): Task[] {
return this.tasks;
}
addTask(title: string): void {
const newTask: Task = {
id: Date.now(),
title,
completed: false
};
this.tasks.push(newTask);
}
removeTask(id: number): void {
this.tasks = this.tasks.filter(task => task.id !== id);
}
toggleTask(id: number): void {
const task = this.tasks.find(t => t.id === id);
if (task) {
task.completed = !task.completed;
}
}
}
