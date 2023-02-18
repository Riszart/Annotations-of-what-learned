class Course{                               //------------aplicasion la adstraccion
    constructor({
        name,classes=[]
    }){
        this.name = name
        this.classes = classes
    }
}

const cursoProgBasica = new Course({
    name:"curso gratis de programacion Basica"
})

const cursoDefinitivoHTML = new Course({
    name:"curso definitivo de HTML y CSS"
})

const cursoPracticoHTML = new Course({
    name:"curso practico de HTML y CSS"
})

class LearningPaths{
    constructor({name, courses = []}){
        this.name = name
        this.courses = courses
    }
}

const escuelaWeb = new LearningPaths({
    name:"escuela de desarrollo web",
    couses:[
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ]
}
)
const escuelaDataSciense = new LearningPaths({
    name:"escuela de DataSciense",
    couses:[
        cursoProgBasica,
        "curso DataViz",
        "curso Tableau",
    ]
}
)
const escuelaVgs = new LearningPaths({
    name:"escuela de videojuegos",
    couses:[
        cursoProgBasica,
        "curso de Unreal Engine",
        "curso de Unioty 3d ",
    ]
}
)

class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,        //si es obsional ponerle undefined
        instagram = undefined,
        facebook = undefined,
        learningPaths = [],
    }){
        this.name = name
        this.email = email
        this.username = username
        this.socialMedia = {
            twitter: twitter,
            instagram,              //  como se repite se puede obiarlo ponerlo denuevo
            facebook: facebook,
        }
        this.approvedCourses = approvedCourses
        this.learningPaths = learningPaths
    }
}

const juan = new Student({
    name:"daryl",
    username: "riszart",
    email: "daryl.com",
    twitter: "tdaryl",
    learningPaths:[
        escuelaWeb,
        escuelaVgs
    ]
})
const juan2 = new Student({
    name:"juan",
    username: "juanito",
    email: "juan.com",
    twitter: "fjuan",
    learningPaths:[
        escuelaWeb,
        escuelaDataSciense
    ]
})