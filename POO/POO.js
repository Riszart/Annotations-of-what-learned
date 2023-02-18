/*---------objeto literal--------------*/
const natalia = {
    name: "nataia",
    age: 20,
    cursosAprobados: [
        "Curso Defnitivo de HTML y css",
        "Curso Practico de HTML y css"
    ],
    aprobarCurso: function(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }
/*
    aprobarCurso(nuevoCursito){                     //otra manejo de crear metodo de un objeto literal
        this.cursosAprobados.push(nuevoCursito)
    }
*/
}  

// hacer que natalia apruebe otro curso
natalia.cursosAprobados.push("Curso de Responsive Desine")

natalia.aprobarCurso("Curso de CSS Grid")

/*------------prototipo con las sintaxis function-------------*/

function Student(name, age, cursosAprobados){
    this.name = name
    this.age = age
    this.cursosAprobados = cursosAprobados
/*  
    this.aprobarCurso = function(nuevoCursito){       //otra manera de crear metodos del prototipo
        this.cursosAprobados.push(nuevoCursito)
    }
*/
}
Student.prototype.aprobarCurso = function(nuevoCursito){        // metodo del prototipo
    this.cursosAprobados.push(nuevoCursito)
}

const juanita = new Student(        // instancia del prototipo
    "juanita Alejandra",
    15,
    ["curso de introduccion a los videojuegos",
    "curso de creasion de personajes"]
)       