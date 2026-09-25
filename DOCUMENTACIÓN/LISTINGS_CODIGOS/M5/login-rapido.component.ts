import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
selector: 'app-login-rapido',
standalone: true,
imports: [ReactiveFormsModule],
template: `
<div class="login-container">
<form [formGroup]="loginForm" (ngSubmit)="iniciarSesion()" class="login-card">
<h3>Acceso al Sistema</h3>
<div class="form-field">
<label>Identificador de Usuario:</label>
<input type="text" formControlName="usuario" placeholder="Ej. admin_01" />
</div>
<div class="form-field">
<label>Clave Secreta:</label>
<input type="password" formControlName="password" placeholder="Mínimo 6 caracteres" />
</div>
<button type="submit" [disabled]="loginForm.invalid">Acceder al Panel</button>
</form>
</div>
`,
styles: [`
.login-container { max-width: 360px; margin: 10px auto; }
.login-card { background: #FFFFFF; border: 1px solid #CBD5E1; padding: 18px; border-radius: 8px; }
h3 { color: #1F2758; margin-top: 0; }
.form-field { margin-bottom: 12px; display: flex; flex-direction: column; gap: 4px; fontsize: 12px; }
input { padding: 6px 10px; border: 1px solid #CBD5E1; border-radius: 4px; }
button { background: #1E75B8; color: #fff; border: none; padding: 8px 14px; border-radius: 4 px; cursor: pointer; font-weight: bold; width: 100%; }
button:disabled { background: #CBD5E1; cursor: not-allowed; }
`]
})
export class LoginRapidoComponent implements OnInit {
loginForm!: FormGroup;
ngOnInit(): void {
this.loginForm = new FormGroup({
usuario: new FormControl('', Validators.required),
password: new FormControl('', [Validators.required, Validators.minLength(6)])
});
}
iniciarSesion(): void {
if (this.loginForm.valid) {
console.log('Credenciales verificadas y listas para emisión:', this.loginForm.value);
}
}
}
