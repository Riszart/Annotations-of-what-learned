/*
Todo navegador dispone de Dev tools o herramientas de desarrollador,
que es un conjunto de características del código de la página web,
una de estas es el debugging.
*/
var a = "Hello global"

function hello() {
  let b = "Hello function"

  if(true) {
    let c = "Hello block"
    debugger // <---- Palabra reservada para debbuging, 
    		// detiene el proseso de ejeccusion de js, y lo podras avansar a tu gusto con la herramienta devtools
  }
}

hello()