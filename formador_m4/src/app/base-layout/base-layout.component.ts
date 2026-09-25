import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './base-layout.component.html'
})
export class BaseLayoutComponent {}