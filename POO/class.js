/* ------------prototipos con la sintaxis clases----------*/

class Student2 {
    constructor({
        name,
        age,
        email,
        cursosAprobados=[]
        }){
        this.name = name
        this.age = age
        this.cursosAprobados = cursosAprobados
    /*  
        this.aprobarCurso = function(nuevoCursito){       //otra manera de crear metodos del prototipo
            this.cursosAprobados.push(nuevoCursito)
        }
    */
    }
    
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }
}

const miguelito = new Student2({
    age:25,
    cursosAprobados:[
        "Curso Analisis de negocias para ciencia de datos",
        "curso de principios de visualisacion de datos para BI"
    ],
    name:"miguel",
}) 