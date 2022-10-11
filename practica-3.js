var nombre  = "riszart"
var apellido = "vergara"
let nombreDeUsuarioDePlatzi = "@gmail"
let edad = 15
let correo = "@pm.me"
let mayorDeEdad = true
let dineroAhorrado = 54522
let deuda = 464

console.log(nombre + apellido)
console.log(dineroAhorrado - deuda)

//-------------------------------------------------

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";
var nombre
function convierte(nombre, apellido){
    console.log("mi nombre es: " + nombre + " " + apellido + " prefiero que me digas: " + nickname + ".")
}

//-------------------------------------------------

function tipoDeSuscripcion(suscripcion){
    if (suscripcion == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
        return
        }
    if (suscripcion == "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return
        }
    if (suscripcion == "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return
        }
    if (suscripcion == "ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
        return
        }
        console.warn("Ese tipo de suscripcion no existe")       // console.warn muestra el mesaje en amariilo en la consola
}

//-------------------------------------------------

var i = 0

while (i < 5){
    i++;
    console.log("el valor de i es: " + i)
}

//-------------------------------------------------

var respuesta = prompt("hola la respuesta de 2 + 2 es")
if (respuesta ==! 4){
    alert("respuesta incorrecta")
}
else {
    alert("respuesta correcta")
}

let i
while (i != '4'){               // sin las comillas simples nunca dejara de preguntar esencial las comillas simples
    let respuesta = prompt("2 + 2 es") // el prompt trae lo que se introdujo pero en string no inportando si es numero
    respuesta = i
}
alert("respuesta correcta")

//-------------------------------------------------

var carros = ["susuky", "kia", "hyundai"]

function coleccion(nombre){
    console.log(nombre[0])
}

//------------------------------------------------

var marcas = ["samsung","LG","Sony","Motorola"]

function nombresDeMacas(nombre){
    for (var marquitas of nombre){
        console.log(marquitas)
    }
}

function nombres(nombre){
    for (let i = 0 ; i < nombre.length ; i++)
    console.log(nombre[i])
}

//------------------------------------------------

var colores = {
    rojo: "sangre",
    verde: "pasto",
    blanco: "leche"
}

function coloresRepresenta(nombre){
    for(var repre in nombre){
    console.log(repre + ": " + nombre[repre])
    }
}

function coloresObjeto(nombre){
    const arrayValores = Object.values(nombre)    // Objet.value() - devuelve los valores de los elementos del objeto y lo mete en un array que declares previamente
    const arraNombres = Object.keys(nombre)       // Obejet.keys) - devuelve los nombres de los elementos del objeto
    for (let i = 0; i < arrayValores.length; i++ ){ 
        console.log(arrayValores[i])
    }
    for (let i = 0; i < arraNombres.length; i++ ){
        console.log(arraNombres[i])
    }
}

//---------------------------------------

const suscripciones={
    free : 'Solo puedes tomar los cursos gratis',
    basic : 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    Expert : 'Puedes tomar casi todos los cursos de Platzi durante un año',
    ExpertPlus : 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
}
function tipoDeSuscripcion(suscripcion){
    if (suscripciones[suscripcion]){
        console.log(suscripciones[suscripcion])
        return
        }
        console.warn("Ese tipo de suscripcion no existe")
}