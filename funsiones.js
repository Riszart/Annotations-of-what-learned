// declarativa (function declaration/ function statement)

function mifunsion() {
    return 3;
}

mifunsion();

//expresion (function expression/ funciones anonimas)

var mifunsion = function(a,b){
    return a + b;
}

mifunsion();


//ejemplo 1
function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}

// ejemplo 2
function saludarEstudiante(estudiante){
    console.log('hola ${estudiante');
}

