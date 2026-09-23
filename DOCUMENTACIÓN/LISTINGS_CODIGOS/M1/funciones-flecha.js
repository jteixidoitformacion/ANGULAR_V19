// Declaracion formal de funcion flecha compacta
const calcularIva = (importe, tasa = 0.21) => importe * tasa;
const total = 100 + calcularIva(100);
console.log(`Total con impuesto: ${total} EUR`);
