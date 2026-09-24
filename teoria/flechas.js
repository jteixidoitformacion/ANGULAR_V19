
/*
    Funciones flecha

    Una función flecha es una forma abreviada de declarar funciones en
    JavaScript. Su estructura es: (argumentos) => resultado.
*/

// 1. La forma tradicional usa la palabra clave function y return.
function sumarTradicional(arg1, arg2) {
    return arg1 + arg2;
}

console.log(sumarTradicional(2, 3));

// 2. Con una sola expresión, la flecha devuelve el resultado implícitamente.
const sumar = (arg1, arg2) => arg1 + arg2;
console.log(sumar(2, 3));

// 3. Sin parámetros se conservan los paréntesis.
const obtenerCuatro = () => 4;
console.log(obtenerCuatro());

// 4. Con un único parámetro, los paréntesis son opcionales.
const multiplicarPorCinco = (numero) => numero * 5;
const multiplicarPorSiete = numero => numero * 7;
console.log(multiplicarPorCinco(2), multiplicarPorSiete(2));

// 5. Con varios parámetros, los paréntesis son obligatorios.
const sumarDosNumeros = (a, b) => a + b;
console.log(sumarDosNumeros(1, 3));

// 6. Si hay varias instrucciones, se usan llaves y return explícito.
const describirSuma = (a, b) => {
    const resultado = a + b;
    return `La suma es ${resultado}`;
};
console.log(describirSuma(4, 6));

// 7. Una función flecha también puede ejecutarse inmediatamente.
const x = 5;
const sumaInmediata = ((a, b) => a + b)(x, 5);
console.log(sumaInmediata);

/*
    Diferencia importante: una función flecha no crea su propio this; usa el
    this del contexto donde se declara. Por ello es útil en callbacks, pero no
    suele ser la mejor elección para métodos que necesiten su propio this.

    En PHP y Python se declararía una función equivalente con function y def,
    respectivamente. La sintaxis => es propia de JavaScript.
*/



