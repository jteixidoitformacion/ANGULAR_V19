const usuario = {
  nombre: "Ana",
  edad: 30,
  profesion: "Desarrolladora"
};

// Sin desestructuración (la forma tradicional):
const nombre = usuario.nombre;
const profesion = usuario.profesion;

// Con desestructuración (la forma moderna y directa):
const { nombre, profesion, edad } = usuario;