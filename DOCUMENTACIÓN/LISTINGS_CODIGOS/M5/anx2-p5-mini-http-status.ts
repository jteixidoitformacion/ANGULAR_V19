export function categorizarCodigoHttp(codigo: number): string {
if (codigo >= 200 && codigo < 300) return 'Operación completada con éxito';
if (codigo === 401 || codigo === 403) return 'Bloqueo por permisos o sesión inválida';
if (codigo === 404) return 'Recurso no localizado en el servidor';
if (codigo >= 500) return 'Incidencia técnica en el servidor remoto';
return 'Código de respuesta fuera de categoría estándar';
}
