import { Injectable, signal } from '@angular/core';
@Injectable({
providedIn: 'root'
})
export class AuthService {
private isLoggedIn = signal<boolean>(false);
isSessionActive(): boolean {
return this.isLoggedIn();
}
login(): void {
this.isLoggedIn.set(true);
}
logout(): void {
this.isLoggedIn.set(false);
}
}
