import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { TelemetryService, Microservicio } from '../../core/services/telemetry.service';
@Component({
selector: 'app-form',
standalone: true,
imports: [CommonModule, ReactiveFormsModule, RouterLink],
template: `
<div class="form-wrapper">
<h2>Alta de Nueva Pasarela de Red</h2>
<p class="desc">Asegura los parametros de conectividad antes de incorporarlos al cluster.</p>
<form [formGroup]="registroForm" (ngSubmit)="guardar()">
<div class="card">
<div class="form-group">
<label>Nombre del Microservicio:</label>
<input formControlName="nombre" class="form-control" placeholder="Ej. Servicio Pasarela" />
@if (registroForm.get('nombre')?.touched && registroForm.get('nombre')?.invalid) {
<div class="err-text">El nombre es mandatorio y exige al menos 4 caracteres.</div>
}
</div>
<div class="form-group">
<label>Direccion IP (Subred 10.0.x.x):</label>
<input formControlName="ip" class="form-control" placeholder="10.0.1.10" />
@if (registroForm.get('ip')?.touched && registroForm.get('ip')?.invalid) {
<div class="err-text">La IP debe cumplir el formato de subred privada corporativa (10.0.x. x).</div>
}
</div>
<div class="grid">
<div class="form-group">
<label>Entorno:</label>
<select formControlName="entorno" class="form-control">
<option value="desarrollo">Desarrollo (Sandbox)</option>
<option value="produccion">Produccion (Live)</option>
</select>
</div>
<div class="form-group">
<label>Latencia Estimada (ms):</label>
<input type="number" formControlName="latencia" class="form-control" />
</div>
</div>
@if (registroForm.errors?.['prefijoReservado']) {
<div class="alert danger">
<strong>Regla de Seguridad:</strong> No se admiten nombres con prefijo "prod-" en entornos de desarrollo.
</div>
}
<div class="btn-group">
<button type="submit" [disabled]="registroForm.invalid" class="btn btn-save">Confirmar Registro</button>
<button type="button" routerLink="/dashboard" class="btn btn-cancel">Cancelar</button>
</div>
</div>
</form>
</div>
`,
styles: [`
.form-wrapper { max-width: 600px; margin: 30px auto; font-family: 'Noto Sans', sans-serif; }
h2 { color: #1F2758; margin: 0; }
.desc { color: #64748B; font-size: 13px; margin: 6px 0 20px 0; }
.card { background: white; padding: 24px; border-radius: 8px; border: 1px solid #CBD5E1; }
.form-group { margin-bottom: 16px; }
label { font-size: 12px; font-weight: bold; color: #2D3748; display: block; margin-bottom: 4px; }
.form-control { width: 100%; padding: 8px; border: 1px solid #CBD5E1; border-radius: 4px; box-sizing : border-box; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
.err-text { color: #DC2626; font-size: 11px; margin-top: 4px; }
.btn-group { display: flex; gap: 10px; margin-top: 20px; }
.btn { padding: 9px 16px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; }
.btn-save { background: #1E75B8; color: white; }
.btn-save:disabled { background: #CBD5E1; cursor: not-allowed; }
.btn-cancel { background: #F1F5F9; color: #475569; border: 1px solid #CBD5E1; }
.alert { background: #FEF2F2; border-left: 4px solid #DC2626; color: #991B1B; padding: 10px; fontsize: 12px; margin-top: 14px; }
`]
})
export class FormComponent implements OnInit {
private telemetryService = inject(TelemetryService);
private router = inject(Router);
registroForm!: FormGroup;
ngOnInit(): void {
this.registroForm = new FormGroup({
nombre: new FormControl('', [Validators.required, Validators.minLength(4)]),
ip: new FormControl('', [Validators.required, Validators.pattern(/^10\.0\.\d{1,3}\.\d{1,3}$/)]),
entorno: new FormControl('desarrollo', Validators.required),
latencia: new FormControl(10, [Validators.required, Validators.min(1)])
}, {
validators: [this.validadorPrefijoEntorno]
});
}
validadorPrefijoEntorno(control: AbstractControl): ValidationErrors | null {
const nombre = control.get('nombre')?.value as string;
const entorno = control.get('entorno')?.value as string;
if (nombre && entorno === 'desarrollo' && nombre.toLowerCase().startsWith('prod-')) {
return { prefijoReservado: true };
}
return null;
}
guardar(): void {
if (this.registroForm.invalid) return;
const val = this.registroForm.value;
const nuevo: Microservicio = {
id: (this.telemetryService.getServices().length + 1).toString(),
nombre: val.nombre,
ip: val.ip,
entorno: val.entorno,
estado: val.latencia > 100 ? 'critico' : 'saludable',
latencia: val.latencia
};
this.telemetryService.registerService(nuevo);
this.router.navigate(['/dashboard']);
}
}
