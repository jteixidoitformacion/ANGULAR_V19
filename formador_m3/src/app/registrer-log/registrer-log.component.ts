import { Component } from '@angular/core';
import { AuditLogService } from '../audit-log.service';

@Component({
  selector: 'app-registrer-log',
  standalone: true,
  templateUrl: './registrer-log.component.html',
  styleUrl: './registrer-log.component.scss'
})
export class RegistrerLogComponent {
  constructor(private auditLogService: AuditLogService) {}
  
  registrarAccion(accion: string): void {
    this.auditLogService.registrarAccion(accion);
  }
}
