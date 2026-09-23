import { inject } from '@angular/core';
import { Router } from '@angular/router';
export function useNavigationHelper() {
const router = inject(Router);
return {
irAInicio: () => router.navigate(['/'])
};
}
