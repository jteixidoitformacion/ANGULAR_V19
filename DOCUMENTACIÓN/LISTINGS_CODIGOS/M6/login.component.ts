import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
@Component({
selector: 'app-login',
standalone: true,
imports: [CommonModule, FormsModule],
template: `
<div class="login-box">
<h2>ORGANIZACION TI - CLOUD SERVICES HUB</h2>
<p class="subtitle">IT Formacion - Angular v19</p>
<div class="card">
<h3>Iniciar Sesion</h3>
@if (errorMsg()) {
<div class="alert danger">{{ errorMsg() }}</div>
}
<div class="field">
<label>Usuario Tecnico:</label>
<input [(ngModel)]="usuario" placeholder="Ej: admin" class="form-control" />
</div>
<div class="field">
<label>Contrasena Corporativa:</label>
<input type="password" [(ngModel)]="clave" placeholder="admin19" class="form-control" />
</div>
<button (click)="ejecutarLogin()" class="btn btn-primary">Acceder al Sistema</button>
</div>
</div>
`,
styles: [`
.login-box { max-width: 440px; margin: 60px auto; font-family: 'Noto Sans', sans-serif; }
h2 { color: #1F2758; text-align: center; font-size: 19px; }
.subtitle { text-align: center; color: #64748B; font-size: 13px; margin-top: -8px; }
.card { background: white; padding: 24px; border-radius: 8px; border: 1px solid #CBD5E1; }
.field { margin-bottom: 14px; }
label { font-size: 12px; font-weight: bold; color: #2D3748; display: block; margin-bottom: 4px; }
.form-control { width: 100%; padding: 8px; border: 1px solid #CBD5E1; border-radius: 4px; box-sizing : border-box; }
.btn { width: 100%; padding: 10px; background: #1E75B8; color: white; border: none; border-radius: 4 px; font-weight: bold; cursor: pointer; }
.alert { background: #FEF2F2; border-left: 4px solid #DC2626; color: #991B1B; padding: 10px; fontsize: 12px; margin-bottom: 14px; }
`]
})
export class LoginComponent {
usuario = '';
clave = '';
errorMsg = signal<string | null>(null);
private authService = inject(AuthService);
private router = inject(Router);
ejecutarLogin(): void {
this.errorMsg.set(null);
const exito = this.authService.login(this.usuario, this.clave);
if (exito) {
this.router.navigate(['/dashboard']);
} else {
this.errorMsg.set('Credenciales invalidas. Ingrese usuario y clave corporativa (admin19).');
}
}
}
