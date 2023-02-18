class Banda {
    constructor({ nombre, generos = [] }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
      let instrumento = integranteNuevo.instrumento.toLowerCase().trim()        // toLowerCase() comvierte la cadena de texto en minuscula
  
      function tenemosUnBateria(integrantes) {
        return integrantes.some((element) => {
          return element.instrumento.toLowerCase().trim() === "bateria"     
        });
      }
  
      if (instrumento === "bateria" && tenemosUnBateria(this.integrantes)) {
        return false;
      }
  
      return this.integrantes.push(integranteNuevo);
    }
  }
  
  //Crear clase Integrante
  class Integrante {
    constructor({ nombre, instrumento }) {
      this.nombre = nombre;
      this.instrumento = instrumento;
    }
  }

  //-------------------------------------------------------------------------------

  class Course {
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name
    }
  
    set name(nuevoNombrecito) {
      if (typeof (nuevoNombrecito) === 'string') {
        let arrayWord = nuevoNombrecito.split(" ")
        if (arrayWord.length !== 0) {
          let a = arrayWord.map((element) => {
            let c = element.charAt(0).toUpperCase()
            return c + element.slice(1)
          })
          this._name = a.join(" ")
        }
      }
    }
  }
  
  const courseName = "curso de programación básica"
  const nombreMaysuculas = new Course({
      name: courseName,
  })
  nombreMaysuculas.name
  
  //----------------------------
  
  /*class Course {
    constructor({
      name,
      classes = [],
    }) {
      this.name = name;
      this.classes = classes;
    }
  
    get name() {
      return this._name;
    }
  
    set name(nuevoNombrecito) {
      if (typeof nuevoNombrecito === "string") {
        nuevoNombrecito = nuevoNombrecito.trim()
        if (nuevoNombrecito.length !== 0) {           // el null tambien lo puede intepretar que es null (buscar para asegurar)
          let words = nuevoNombrecito.split(" ")
          let nuevoNombrecitoMayusculas = words.map((word) => {
            return word[0]?.toUpperCase() + word.substring(1);
          }).join(" ")
          this._name = nuevoNombrecitoMayusculas
        }
      }
    }
  }*/