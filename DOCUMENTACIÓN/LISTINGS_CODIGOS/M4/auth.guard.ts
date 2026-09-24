import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
export const authGuard: CanActivateFn = (route, state) => {
const authService = inject(AuthService);
const router = inject(Router);
if (authService.isSessionActive()) {
return true; // Acceso concedido
}
// Redireccion segura a la pantalla de Login retornando un UrlTree
return router.createUrlTree(['/login'], {
queryParams: { returnUrl: state.url }
});
};
