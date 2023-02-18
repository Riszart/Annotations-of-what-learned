// Hoisting es cuando las declaraciones de variables y funciones se procesan antes de ejecutar 
//cualquier código, al momento de qe se genere el hosting, las funciones se declarán primero, y despues las variables.

// Qué resultado esperas que nos aparezca si corremos este ejemplo? "undefined"
console.log(miNombre);

var miNombre = "Diego";

// Lo que sucede con el hoisting

var miNombre = undefined;

console.log(miNombre + "soy hoisting");

miNombre = "Diego";

// ===  Hoisting con funcionts  ===

hey();

function hey() {
    console.log('Hola ' + miNombre);
};

var miNombre = 'Diego';

// Lo que sucede con hoisting 

function hey() {  //La función se declara hasta arriba, y después se declaran las variables.
    console.log('Hola ' + miNombre);
};

var miNombre = 'Diego';;

hey();

miNombre = 'Diego';

/*
Hoisting es un término para describir que las declaraciones de variables y
funciones son desplazadas a la parte superior del scope más cercano, scope global o de
función. Esto sucede solamente con las declaraciones y no con las asignaciones.
El código permanece igual, solo es una interpretación del motor de JavaScript.
En el caso de las variables solamente sucede cuando son declaradas con var.
*/
function scope() {
  var nombre = undefined
  var edad = undefined
  var i = undefined
  
  console.log(nombre) // undefined
  console.log(edad) // undefined
  console.log(i) // undefined
  
  nombre = "Andres"
  edad = 20
  for ( i = 0; i< 6; i++) {
  
  //
  }
}
/*
Hoisting con let y const
Aunque te haya dicho que el hoisting solo ocurre con declaraciones con var, no es totalmente cierto.
El hoisting hará que el intérprete de JavaScript eleve las declaraciones con let y const a la Temporal Dead Zone.
La Temporal Dead Zone es una región del código donde la variable está declarada, pero no es posible acceder a esta,
provocando un error de tipo ReferenceError.
*/

console.log(nameVar) // undefined
console.log(nameLet) // ReferenceError: nameLet is not defined

var nameVar = "myVar"
let nameLet = "myLet"
