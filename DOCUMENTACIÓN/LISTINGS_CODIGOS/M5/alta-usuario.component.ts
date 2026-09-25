import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService, Usuario } from './usuario.service';
@Component({
selector: 'app-alta-usuario',
standalone: true,
imports: [CommonModule, ReactiveFormsModule],
template: `
<div class="panel-registro">
<h2>Registro de Nuevo Operador</h2>
@if (mensajeEstado) {
<div [class]="esError ? 'alerta alerta-error' : 'alerta alerta-exito'">
{{ mensajeEstado }}
</div>
}
<form [formGroup]="registroForm" (ngSubmit)="registrarUsuario()">
<div class="campo">
<label for="nombre">Nombre Completo:</label>
<input id="nombre" type="text" formControlName="nombre" placeholder="Mínimo 3 caracteres" />
@if (registroForm.get('nombre')?.invalid && registroForm.get('nombre')?.touched) {
<small class="error-msg">El nombre es obligatorio y debe tener al menos 3 caracteres.</small>
}
</div>
<div class="campo">
<label for="correo">Correo Electrónico:</label>
<input id="correo" type="email" formControlName="correo" placeholder="ejemplo@empresa. com" />
@if (registroForm.get('correo')?.invalid && registroForm.get('correo')?.touched) {
<small class="error-msg">Introduce una dirección de correo válida.</small>
}
</div>
<button type="submit" [disabled]="registroForm.invalid">Guardar en Base de Datos</button >
</form>
</div>
`,
styles: [`
.panel-registro { max-width: 440px; margin: 20px auto; padding: 24px; border: 1px solid # CBD5E1; border-radius: 8px; font-family: 'Noto Sans', sans-serif; background: #FFFFFF; }
h2 { color: #1F2758; margin-bottom: 16px; font-size: 1.25rem; }
.campo { margin-bottom: 14px; display: flex; flex-direction: column; gap: 4px; }
label { font-size: 13px; font-weight: bold; color: #2D3748; }
input { padding: 8px 12px; border: 1px solid #CBD5E1; border-radius: 4px; font-size: 14px; }
.error-msg { color: #DC2626; font-size: 11px; }
button { background: #1E75B8; color: #fff; border: none; padding: 10px; border-radius: 4px; font-weight: bold; cursor: pointer; width: 100%; margin-top: 10px; }
button:disabled { background: #CBD5E1; cursor: not-allowed; }
.alerta { padding: 10px; border-radius: 4px; margin-bottom: 14px; font-size: 13px; fontweight: bold; }
.alerta-exito { background: #F0FDF4; color: #059669; border: 1px solid #86EFAC; }
.alerta-error { background: #FEF2F2; color: #DC2626; border: 1px solid #FCA5A5; }
`]
})
export class AltaUsuarioComponent implements OnInit {
private fb = inject(FormBuilder);
private usuarioService = inject(UsuarioService);
registroForm!: FormGroup;
mensajeEstado = '';
esError = false;
ngOnInit(): void {
this.registroForm = this.fb.group({
nombre: ['', [Validators.required, Validators.minLength(3)]],
correo: ['', [Validators.required, Validators.email]]
});
}
registrarUsuario(): void {
if (this.registroForm.invalid) return;
const nuevoUsuario: Usuario = this.registroForm.value;
this.usuarioService.crear(nuevoUsuario).subscribe({
next: (usuarioCreado) => {
this.esError = false;
this.mensajeEstado = `Usuario ${usuarioCreado.nombre} registrado con éxito en el servidor.`;
this.registroForm.reset();
},
error: (err: Error) => {
this.esError = true;
this.mensajeEstado = `No se pudo completar el registro: ${err.message}`;
}
});
}
}
