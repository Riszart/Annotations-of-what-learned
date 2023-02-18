class Comment {
    constructor({
        content,
        studentName,
        studentRole = "estudiante",
    }){
        this.content = content
        this.studentName = studentName
        this.studentRole = studentRole
        this.likes = 0

    }
    publicar(){
        console.log(this.studentName + " (" + this.studentRole +")")
        console.log(this.likes + "likes")
        console.log(this.content)
    }
}


class Course{
    constructor({name, classes = [],isFree = false, lang = "spanish",}){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree
        this.lang = lang
    }

    get name(){
        return this._name
    }

    set name(nuevoNombresito){
        if(nuevoNombresito === "curso malo de programador"){
            console.error("WEB... No")
        }else{
            this._name = nuevoNombresito
        } 
    }
}

const cursoProgBasica = new Course({
    name:"curso gratis de programacion Basica",
    isFree: true,
})

const cursoDefinitivoHTML = new Course({
    name:"curso definitivo de HTML y CSS"
})

const cursoPracticoHTML = new Course({
    name:"curso practico de HTML y CSS",
    lang:"english",
})

class Student{
    constructor({
        name,
        email,
        username,
        twitter = undefined,        //si es obsional ponerle undefined
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
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

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
        })
        comment.publicar()
    }
}

class FreeStudent extends Student{
    constructor(props){
        super(props)
    }

    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse)
        }else{
            console.warn("lo sentimos" + this.name + "solo puedes tomar cursos gratis")
        }
    }

}

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

class BasicStudent extends Student{
    constructor(props){
        super(props)
    }

    approveCourse(newCourse){
        if(newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse)
        }else{
            console.warn("lo sentimos" + this.name + "no puedes tomar cursos de ingles")
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props)
    }

    approveCourse(newCourse){
            this.approvedCourses.push(newCourse)
    }
}

class TeacherStudent extends Student{
    constructor(props){
        super(props)
    }

    approveCourse(newCourse){
            this.approvedCourses.push(newCourse)
    }

    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studentRole: "profesor"
        })
        comment.publicar()
    }
}

const daryl = new FreeStudent({
    name:"daryl",
    username: "darylvc",
    email: "daryl.com",
    twitter: "twdaryl",
    learningPaths:[
        escuelaWeb,
        escuelaVgs
    ]
})
const riszart = new BasicStudent({
    name:"riszart",
    username: "riszartvc",
    email: "riszart.com",
    twitter: "fariszart",
    learningPaths:[
        escuelaWeb,
        escuelaDataSciense
    ]
})
const freddy = new TeacherStudent({
    name:"freddy vega",
    username: "f@sdfsd.com",
    email: "fredier.com",
    instagram: "fredier",
})

//-------------------otra forma pero con prototipos

/*function FreeStudent(props) {
    Student.call(this, props);
  }

  FreeStudent.prototype = Object.create(Student.prototype);

  FreeStudent.prototype.approveCourse = function (newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(`Lo sentimos, ${this.name}, sólo puedes tomar cursos gratis`);
    }
  }*/