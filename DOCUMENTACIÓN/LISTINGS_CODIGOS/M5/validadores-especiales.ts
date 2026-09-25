import { AbstractControl, ValidationErrors } from '@angular/forms';
export class ValidadoresEspeciales {
static esDominioEmpresa(control: AbstractControl): ValidationErrors | null {
const email = control.value as string;
if (email && !email.endsWith('@itformacion.com')) {
return { dominioInvalido: true };
}
return null;
}
}
