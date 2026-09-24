import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class AuditLogService {
  private logs: string[] = [];
  
  registrarAccion(accion: string): void {
    const timestamp = new Date().toISOString();
    this.logs.push(`[${timestamp}] ${accion}`);
  }
  obtenerHistorial(): readonly string[] {
    return [...this.logs];
  }
}
