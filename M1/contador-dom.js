const btn = document.querySelector('#btn-sumar');
const display = document.querySelector('#valor-contador');
let cuenta = 0;
btn.addEventListener('click', () => {
cuenta++;
display.textContent = cuenta;
});
