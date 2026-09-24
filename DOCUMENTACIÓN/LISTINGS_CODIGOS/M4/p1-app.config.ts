import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding, Routes } from '@angular/router';
const routes: Routes = [
{ path: '', redirectTo: 'inicio', pathMatch: 'full' }
];
export const appConfig: ApplicationConfig = {
providers: [
provideRouter(routes, withComponentInputBinding())
]
};
