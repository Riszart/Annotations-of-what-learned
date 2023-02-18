class Course{
    constructor({name, classes = []}){
        this._name = name;
        this.classes = classes;
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

const cursoProgramacionBasico = new Course({
    name:"curso gratis de programacion basica"
})

cursoProgramacionBasico.name                 //     llamamos al nombre para saber su valor, con el get
cursoProgramacionBasico.name = "lalala"      //     cambiamos el nombre del curso con set

//--------------------------------------otra forma-------------------------------

class Course {
    #name;                          //# solo sera modificado con el set que se le da
  
    constructor({
      name,
      classes = []
    }) {
      this.#name = name;
      this.classes = classes;
    }
  
    get name() {
      return this.#name;
    }
  
    set name(nuevoNombrecito) {
      if (nuevoNombrecito === 'Curso Malito de Programación Básica') {
        console.error('Web... no');
      } else {
        this.#name = nuevoNombrecito;
      }
    }
  }