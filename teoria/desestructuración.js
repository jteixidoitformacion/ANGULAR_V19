/*
  Desestructuración de objetos

  Permite extraer propiedades de un objeto y guardarlas en variables de una
  forma compacta. Es especialmente útil cuando se necesitan varias
  propiedades del mismo objeto.
*/

const usuario = {
  nombre: "Ana",
  edad: 30,
  profesion: "Desarrolladora",
  direccion: {
    ciudad: "Madrid",
    pais: "España"
  }
};

// 1. Acceso tradicional: se indica el objeto en cada propiedad.
const nombreTradicional = usuario.nombre;
const profesionTradicional = usuario.profesion;
console.log(nombreTradicional, profesionTradicional);

// 2. Desestructuración básica: los nombres deben coincidir con las propiedades.
const { nombre, profesion, edad } = usuario;
console.log(nombre, profesion, edad);

// 3. Alias: se puede crear una variable con otro nombre.
const { nombre: nombreUsuario } = usuario;
console.log(nombreUsuario);

// 4. Valor por defecto: se usa solo si la propiedad no existe o vale undefined.
const { idioma = "es" } = usuario;
console.log(idioma);

// 5. Desestructuración anidada: extrae datos de objetos dentro de otros objetos.
const {
  direccion: { ciudad, pais }
} = usuario;
console.log(ciudad, pais);