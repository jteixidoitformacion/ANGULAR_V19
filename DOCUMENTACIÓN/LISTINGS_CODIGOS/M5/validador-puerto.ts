import { AbstractControl, ValidationErrors, FormControl, FormGroup, Validators } from '@angular/ forms';
export function puertoValido(control: AbstractControl): ValidationErrors | null {
const valor = Number(control.value);
if (control.value !== null && control.value !== '' && (isNaN(valor) || valor < 1024 || valor > 65535)) {
return {
puertoFueraDeRango: {
valorActual: control.value,
minimoPermitido: 1024,
maximoPermitido: 65535
}
};
}
return null;
}
export class ConfiguracionRedComponent {
formRed = new FormGroup({
puertoServicio: new FormControl(8080, [Validators.required, puertoValido])
});
}
