/*  Ejemplo del universo, un sistema solar, y un planeta.  */ 


// Scope es igual a, donde buscar por cosas (estás cosas son las variables), el Scope es el alcance que tienen las variables, depende de donde las declaremos y las mandamos llamar si tendremos acceso a ellas o no.

// Tenemos dos tipos de Scope, Scope Global y Scope Local.

// ===============

// Ejemplo de lo que es un Scope Global

var miNombre = "Diego"; 

function nombre() {
    miNombre = "Alonso";
    return miNombre;
}

nombre();

console.log(miNombre);

// Ejemplo de lo que es un Scope Local, el Scope local pasa al momento de crear una funcion, esto genera un ámbito diferente al global, al cual no se podrá tener acceso desde el ámbito global 

var miNombre = "Diego"

function nombre() {
    var miApellido = "De Granda"; 
    return miNombre + " " + miApellido 
}

nombre();

console.log(miNombre);
console.log(miApellido);

//  Ejemplos de como puede ayuar o crear error el tema del scope. 

// Ejemplo 1, cómo con una funcion podemos vambiar el valor de la variable global
var miNombre = "Diego"

function nombre(usuario) {
    miNombre = usuario;
    console.log(miNombre); 
}

nombre("Oscar");

console.log(`Hola ${miNombre}, cómo estás?`);


// Ejemplo 2, cómo podemos evitar reescribir el valor de una variable gracias al scope,
var miNombre = "Diego"

function nombre(usuario) {
    var miNombre = usuario;
    console.log(miNombre); 
}

nombre("Oscar");

console.log(`Hola ${miNombre}, cómo estás?`);

// Ejemplo 3, cómo si creamos un scope local, y mandamos llamar la variable fuera de la funcion, nos puede crear un problema. 

function nombre(usuario) {
    var miNombre = usuario;
    console.log(miNombre); 
}

nombre("Oscar");

console.log(`Hola ${miNombre}, cómo estás?`);

//------------- other function Scope -------------------

function greeting() {
  let userName = 'Ana'; 
  console.log(userName);

  if (userName === 'Ana') {
    console.log(`Hello ${userName}!`)
  }

}

greeting();
console.log(userName);


function fruits() {
  if (true) {
    var fruit1 = 'Apple'; // function scope
    let fruit2 = 'Kiwi'; // block scope
    const fruit3 = 'Banana'; // block scope
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
}

fruits();