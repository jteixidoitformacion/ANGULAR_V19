import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
@Component({
selector: 'app-registro',
standalone: true,
imports: [ReactiveFormsModule],
templateUrl: './registro.component.html'
})
export class RegistroComponent implements OnInit {
miFormulario!: FormGroup;
ngOnInit(): void {
this.miFormulario = new FormGroup({
nombre: new FormControl('', Validators.required),
correo: new FormControl('', [Validators.required, Validators.email])
});
}
onSubmit(): void {
if (this.miFormulario.valid) {
console.log('Datos procesados:', this.miFormulario.value);
}
}
}
