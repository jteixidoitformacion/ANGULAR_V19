import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
export const appConfig: ApplicationConfig = {
providers: [
provideZoneChangeDetection({ eventCoalescing: true }), // Agrupacion de eventos de ZoneJS
provideRouter(routes), // Inyeccion de rutas de navegacion
provideClientHydration() // Soporte de hidratacion para SSR
]
};
