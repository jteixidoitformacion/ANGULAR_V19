async function consultarDatosServicio(idServicio) {
try {
const respuesta = await fetch(`https://api.servicios-cloud.org/nodos/${idServicio}`);
if (!respuesta.ok) {
throw new Error(`Error en comunicacion HTTP: ${respuesta.status}`);
}
const datos = await respuesta.json();
console.log('Datos procesados:', datos);
} catch (error) {
console.error('Fallo en la sincronizacion:', error.message);
}
}
