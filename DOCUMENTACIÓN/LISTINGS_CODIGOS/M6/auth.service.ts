import { Injectable, signal, computed } from '@angular/core';
@Injectable({
providedIn: 'root'
})
export class AuthService {
private tokenSignal = signal<string | null>(null);
public readonly isAuthenticated = computed(() => this.tokenSignal() !== null);
public readonly activeToken = computed(() => this.tokenSignal());
login(username: string, clave: string): boolean {
if (username.trim() && clave === 'admin19') {
const fakeToken = `JWT_TOKEN_HUB_${Math.random().toString(36).substring(2)}`;
this.tokenSignal.set(fakeToken);
return true;
}
return false;
}
logout(): void {
this.tokenSignal.set(null);
}
}
