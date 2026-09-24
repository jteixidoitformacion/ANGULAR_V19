import { Component, inject, OnInit } from '@angular/core';
import { AuditLogService } from '../audit-log.service';

@Component({
  selector: 'app-reader-logs',
  standalone: true,
  templateUrl: './reader-logs.component.html',
  styleUrl: './reader-logs.component.scss'
})
export class ReaderLogsComponent implements OnInit {
  logs: readonly string[] = [];
  private auditLogService = inject(AuditLogService);

  ngOnInit(): void {
    this.logs = this.auditLogService.obtenerHistorial();  
  }
 

  
  

}
