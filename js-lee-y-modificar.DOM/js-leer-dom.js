const h1 = document.querySelector('h1')   // pide que lea la etiqueta h1 de HTML
const p = document.querySelectorAll('p')    // pide que lea todas las p de HTML y se guarda en una lista
const parrafito = document.querySelector('.parrafito')  // pide que lea la clase parrafito de HTML
const parrafito2 = document.getElementsByClass('parrafito')
const pid = document.querySelector('#pid')   // pide que lea el id pid de HTML
const pid2 = document.getElementById('pid2')
const input = document.querySelector('input')   // pide que lea el input de HTML

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

// .inner nos permite modificar el contenido de la etiqueta del html 

h1.innerHTML = 'Patito <br> feo'    // interpreta todo como codigo html
h1.innerText = 'Patito <br> feo'    // interpreta todo solo como texto

console.log(h1.getAttribute('class'))     // .getAttribute() ayuda a leer los atributos que contiene.
h1.setAttribute('class', 'azul')          // .setAttribute('', '') cambio el valor de la clase

h1.classList.add('amarillo')        // .classList.add() agrega una nueva clase  
h1.classList.remove('se-remuebe')   // .classList.remove() remueve la clase mensionada
//h1.classList.toggle('')           pone o remueve la clase con eventos
//h1.classList.contains('')         nos debuelve true o false dependiendo si el elemento tiene la clase que se pregunta

input.value = '456'     // modifica su valor del atributo
input.placeholder ='modificar'  // modifica su placeholder del atributo

// insertar imagen
const img = document.createElement('img')       //document.createElement('') crea elemento html que se quiere
img.setAttribute('src', 'https://cdn.pixabay.com/photo/2013/06/24/09/17/abstract-140898_960_720.jpg')
pid.append(img)             // append y appendChild agregan el contenido sin eliminar lo existente
//  .replaceWith()      remplasa el contenido (buscar mas)