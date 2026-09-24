// Desde el componente emisor
this.router.navigate(['/resumen'], {
state: { transaccionExitosa: true, hashOperativo: '0x992B' }
});
// Desde el componente receptor
const navegacion = this.router.getCurrentNavigation();
const estado = navegacion?.extras.state as { transaccionExitosa: boolean; hashOperativo: string };
