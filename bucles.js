//ejemplos 01
var estudientes = ["maria", "sergio", "rosa", "daniel"];
function saludarEstudiantes(estudiente){
    console.log('hola, ${estudiante}')
}

// primera forma
for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudientes[i])
}

// segunda forma
for( var estudiente of estudientes){
    saludarEstudiantes(estudiente);
}



//ejemplos 02
var estudiantes = ["Maria", "sergio","Rosa", "daniel"];
function saludarEstudiantes(estudiante){
    console.log('hola, ${estudiante}')
}

while(estudiantes.length > 0){
    console.log(estudiantes) // poder visualizar los elemntos del array en los momentos que se va quedando sin elementos
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}

