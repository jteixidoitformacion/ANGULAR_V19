import { inject } from '@angular/core';
import { AuditLogService } from './audit-log.service';
export function useAuditLog() {
const auditService = inject(AuditLogService);
return {
registrar: (evento: string) => {
auditService.registrarAccion(`[Operacion UI]: ${evento}`);
}
};
}
