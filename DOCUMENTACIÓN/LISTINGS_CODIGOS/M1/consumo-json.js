async function contarUsuariosRemotos() {
const res = await fetch('https://jsonplaceholder.typicode.com/users');
const usuarios = await res.json();
return usuarios.length;
}
