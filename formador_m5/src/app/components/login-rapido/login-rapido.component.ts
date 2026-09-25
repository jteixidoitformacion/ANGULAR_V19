import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login-rapido',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="login-container">
      <form
        [formGroup]="loginForm"
        (ngSubmit)="iniciarSesion()"
        class="login-card"
      >
        <h3>Acceso al Sistema</h3>
        <div class="form-field">
          <label for="usuario">Identificador de Usuario: </label>
          <input
            id="usuario"
            type="text"
            formControlName="usuario"
            placeholder="Ej. admin_01"
          />
          @if (
            loginForm.get('usuario')?.invalid &&
            loginForm.get('usuario')?.touched
          ) {
            <small class="error-text"
              >El identificador de usuario es obligatorio.</small
            >
          }
        </div>
        <div class="form-field">
          <label for="password">Clave Secreta: </label>
          <input
            id="password"
            type="password"
            formControlName="password"
            placeholder="Mínimo 6 caracteres"
          />
          @if (
            loginForm.get('password')?.invalid &&
            loginForm.get('password')?.touched
          ) {
            <small class="error-text"
              >La clave debe contener al menos 6 caracteres.</small
            >
          }
        </div>
        <button type="submit" [disabled]="loginForm.invalid">
          Acceder al Panel
        </button>
      </form>
    </div>
  `,
  styles: ``,
})
export class LoginRapidoComponent {
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      usuario: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }
  iniciarSesion(): void {
    if (this.loginForm.valid) {
      console.log(
        'Credenciales verificadas y listas para emisión:',
        this.loginForm.value,
      );
      this.loginForm.reset();
    }
  }
}
