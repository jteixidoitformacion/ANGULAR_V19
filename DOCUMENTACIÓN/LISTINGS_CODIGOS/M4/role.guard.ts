import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
export const roleGuard: CanActivateFn = (route, state) => {
const authService = inject(AuthService);
const router = inject(Router);
// Comprobar la existencia del usuario y su rol administrativo
if (authService.isAuthenticated() && authService.getUserRole() === 'ADMIN') {
return true; // Permitir el transito a la ruta
}
// Redirigir de manera segura si no cumple las condiciones
return router.createUrlTree(['/acceso-denegado']);
};
