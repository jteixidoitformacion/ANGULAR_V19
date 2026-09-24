/*
    Operador ternario

    El operador ternario elige entre dos valores según una condición. Su forma
    es: condicion ? valorSiEsVerdadera : valorSiEsFalsa.
*/

const x = 5;

// 1. Un if/else asigna un valor en función de una condición.
let yConIf;
if (x === 5) {
    yConIf = 10;
} else {
    yConIf = 20;
}
console.log(yConIf);

// 2. El ternario expresa la misma decisión cuando solo se elige un valor.
const yConTernario = x === 5 ? 10 : 20;
console.log(yConTernario);

// 3. La condición puede estar guardada en una variable booleana.
const condicion = true;
const z = condicion ? 100 : 200;
console.log(z);

// 4. También puede evaluar propiedades de un objeto.
class User {
    constructor(nombre, edad, apellido) {
        this.nombre = nombre;
        this.edad = edad;
        this.apellido = apellido;
    }
}

const user = new User("Juan", 30, "Pérez");
const { nombre, edad } = user;
const tipoDeUsuario = edad >= 18 ? "adulto" : "menor de edad";
console.log(nombre, tipoDeUsuario);

// 5. Se pueden encadenar ternarios, aunque un if/else suele ser más legible.
const nota = 8;
const calificacion = nota >= 9
    ? "sobresaliente"
    : nota >= 5
        ? "aprobado"
        : "suspenso";
console.log(calificacion);

// Úsalo para elegir valores; para ejecutar varios pasos, prefiere if/else.
