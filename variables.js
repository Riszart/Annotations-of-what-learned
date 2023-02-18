var nombre //declaracion
var apellido = "daryl";   //declara y asigna
apellido = 'bb' //reasignacion
var nombre = "aa";   //redeclaracion
//declarar
var edad;
//inicializar 
edad = 30;

var elementos = ["pc", "cell"];

var persona = [
    nombre = "daryl",
    edad = 26
]

//  ------------------- Reasignación y redeclaración --------------------

/*
    Una variable declarada con var puede ser redeclarada y reasignada.
    Una variable declarada con let puede ser reasignada, pero no redeclarada.
    Una variable declarada con const no puede ser redeclarada, ni reasignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.
*/

var firstName; // Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = "David"; // declarar / asignar
lastName = 'Ana'; // reasignar
console.log(lastName); 

var secondName = 'David'; // declarando / asignando
var secondName = 'Ana'; // reasignado
console.log(secondName);

// Let
let fruit = 'Apple' // declara y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit);

let fruit = 'Banana';
console.log(fruit);

// const
const animal = 'dog'; // declara y asigna
// animal = 'cat'; // reasignado
const animal = 'Snake';
console.log(animal);

const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);