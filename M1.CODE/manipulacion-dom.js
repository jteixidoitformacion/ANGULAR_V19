// 1. Seleccion de elementos del DOM
const botonRecargar = document.querySelector('#btn-recargar');
const etiquetaEstado = document.querySelector('.texto-estado');
// 2. Vinculacion reactiva de evento click
botonRecargar.addEventListener('click', () => {
etiquetaEstado.textContent = 'Actualizando registros...';
etiquetaEstado.style.color = '#1E75B8';
});
