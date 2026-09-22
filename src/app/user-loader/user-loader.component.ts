import { Component, resource, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-user-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-loader.component.html',
  styleUrl: './user-loader.component.scss',
})
export class UserLoaderComponent {
  userId = signal<number>(1);
  userResource = resource({
    request: () => ({ id: this.userId() }),
    loader: async ({ request }) => {
      const url = `https://jsonplaceholder.typicode.com/users/${request.id}`;
      const response = await fetch(url);
      if (!response.ok) throw new Error('Usuario inexistente');
      return (await response.json()) as User;
    },
  });
  actualizarId(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = parseInt(input.value, 10);
    if (!isNaN(value)) {
      this.userId.set(value);
    }
  }
}
