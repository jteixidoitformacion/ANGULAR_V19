let x=5;
let y;


if (x==5)
{
    y = 10;
}   
else {
    y = 20;
}

y = x == 5 ? 10 : 20;

let condicion = true; 

let z = condicion  ? 100 : 200;


class User {
    nombre: string;
    edad: number;
    apellido: string;
}


    let user = new User();
    user.nombre = "Juan";
    user.edad = 30;
    user.apellido = "Pérez";

let nombre;
let edad; 

nombre = user.nombre;
edad = user.edad;

({nombre, edad} = user);
