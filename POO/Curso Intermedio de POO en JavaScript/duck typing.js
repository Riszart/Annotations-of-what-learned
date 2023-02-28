function isArray(subject){
  return Array.isArray(subject )
}

function requiereParam(param){
  throw new Error(param + " es obligatotio")
}
//-------------------------------------------------- fabrica de objetos ----------------------------

function createLearningPath({
  name = requiereParam("name"),
  courses = []
}){
  const private = {
      "_name": name,
      "_courses": courses,
  }

  const public = {
    
    get name(){
        return private["_name"]
    },
    
    set name(newName){
        if(newName.length != 0){
            private["_name"] = newName
        }else{
            console.warn("tu nombre debe tener almenos 1 caráter")
        }
    },
    
    get courses(){
        return private["_courses"]
    },
  }
}

function createStudent({            
  name = requiereParam('name'),     
  age ,
  email,
  twitter,
  instagram,
  facebook,
  approvedCourse = [],
  learningPaths = []      
} = {}){    
  
  const private = {
      "_name": name,
      "_learningPaths": learningPaths
  }

  const public = {  
      email,
      age,
      approvedCourse,
      socialMedia: {
          twitter,
          instagram,
          facebook,
      },

      get name(){
          return private["_name"]
      },

      set name(newName){
          if(newName.length != 0){
              private["_name"] = newName
          }else{
              console.warn("tu nombre debe tener almenos 1 caráter")
          }
      },

      get learningPaths(){
          return private["learningPaths"]
      },

      set learningPaths(newLP){
          if(!newLP.name){
              console.warn("tu lp no tiene la propiedad name")
              return
          }
          if(!newLP.courses){
              console.warn("tu lp no tiene curso")
              return
          }
          if(!isArray(newLP.courses)){
              console.warn("tu lp no es una lista(*de cursos)")
              return
          }
          private["_learningPaths"].push(newLP)
      }
  }
  return public
}

const juanito = createStudent({email: "juanito@frijolito.co", name: "juanito"})


//------------------------------------------------- prototipo objeto ------------instanceof--------------------------

function LearningPath({
  name = requiereParam("name"),
  courses = []
}){
  this.name = name
  this.courses = courses
}

function Student({            
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],    
} = {}){    
  this.name = name;
  this.email = email;
  this.age = age;
  this.approvedCourses = approvedCourses;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  };

  if(isArray(learningPaths)){
      this.learningPaths = []

      for(learningPathIndex in learningPaths){
          if(learningPaths[learningPathIndex] instanceof LearningPath){  //--instanceof --verifica si es una instancia del objeto en este caso LearningPath
              this.learningPaths.push(learningPaths[learningPathIndex])
          }
      }
  }
}
const escuelaWeb = new LearningPath({name: "escuela de webDev",})
const escuelaData = new LearningPath({name: "escuela de Data Science",})
const juan = new Student({
  email: "juanito@frijolito.co",
  name: "juanito",
  learningPaths: [
      escuelaWeb,
      escuelaData,
      {
          name: "escuela del inpostor",       //no entra a learningPaths por no se intancia de LearningPath
          courses: []
      }
  ]
})
//-----------------------------------------------------privado con prototipos--------------------------------

function Student({            
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],    
} = {}){ 
  
  const private = {         //se crea y se guarda en un objeto private para que no puedan modificar
      "_learningPaths": []
  }
  Object.defineProperty(this, "learningPaths",{       //se crea un nuevo atributo dentro de this - con defineproperty donde se le asigna un get y un set
      get(){                                  // this hace referencia a Student.prototype
          return private['_learningPaths']
      },
      set(newLp){
          if(newLp instanceof LearningPath){    //verifica que sea una un learning path que haya sido instanciado de LearningPath
              private["_learningPaths"].push(newLp)
          }else{
              console.warn("alguno de los learningPath no es instancia de los prototipos learningPath")
          }
      }
  })
  //this.learningPaths = function(){}
  for(learningPathIndex in learningPaths){      //verificamos si se encuantra dentro de la propiedad privada "_learningPaths":
      this.learningPaths = learningPaths[learningPathIndex]
  }

}


