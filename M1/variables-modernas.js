const puertoServicio = 8080;
let usuariosConectados = 14;
// Mutacion permitida sobre variable declarada con let
usuariosConectados = usuariosConectados + 1;
console.log(`Puerto: ${puertoServicio}, Conectados: ${usuariosConectados}`);
