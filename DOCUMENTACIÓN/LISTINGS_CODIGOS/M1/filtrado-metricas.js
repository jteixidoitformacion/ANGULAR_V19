const latencias = [45, 120, 60, 150, 30];
const latenciasCriticas = latencias.filter(ms => ms > 100);
console.log('Nodos sobrecargados:', latenciasCriticas); // [120, 150]
