import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
@Component({
selector: 'app-user-profile',
standalone: true,
imports: [MatButtonModule],
template: `
<div class="profile-card">
<h2>Perfil del Usuario</h2>
<button mat-raised-button color="primary">Ver Detalle</button>
</div>
`,
styles: [`
.profile-card { padding: 20px; border: 1px solid #ccc; border-radius: 8px; }
`]
})
export class UserProfileComponent {
// Lógica del componente
}
