var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];


console.log(frutas.length);
// .length te indica cuantos elementos hay en el arrays

var masfrutas = frutas.push("Uvas");
// .push agrega al final del arrays un elemento llamado Uvas

var ultima = frutas.pop();
// .pop elimmina el ultimo elemento del arrays frutas

var nuevalongitud = frutas.unshift("Durazno");
// .unshift agrega un elemento pero no al final del arrays sino al inicio

var borrarfruta = fruta.shift()
// .shift borra al primer elemento que se encuentra en el arrays

var posicion = frutas.indexOf("Cereza")
// .indexOf llama la posion del elemnto que se esta llamando