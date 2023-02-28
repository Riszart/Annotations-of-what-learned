//--nos ayudara a crear moldes de objetos con funciones

function requiereParam(param){
  throw new Error(param + " es obligatotio")           // nos manda un error a la consola que detendra el proseso
}

//------------------------------------------------fabrica de objetos (factory function) -------------------------------------------
//  RORO -- recibe un objeto y retorna otro objeto              ({  })

function createStudent({            // crea un objeto con parametros
  name = requiereParam('name'),       //  cuando no se manda el parametro name - llamara a reuiereParam(mandara el error)
  age = requiereParam('email'),       /*----esto pasa porque al enviar un nombre cambia y ya no sera la funcion----*/
  email,        // si no se envia nada se mostrara como undefined
  twitter,      // solo se envia twitter- no socialmedia 
  instagram,
  facebook,
  approvedCourse = [],
  learningPaths = []      //por defecto va a ser un array
} = {}){        //ponemos por defecto para que sea un objeto vacio-- evitamos que salga cuando se llama mal a la funcion createStudent()
  return {        //retorna el objeto donde tendremos a los estudiantes
      name,       // es igual a name:name -- lo ponemos para que cuando enviamos nada no salga error-porque no ayuda el arror a la pogramacion
      changeName(newName){this.name = newName}, // metodo
      email,
      age,
      approvedCourse,
      learningPaths,
      socialMedia:{     // lo meteremos dentro de socialmedia 
          twitter,
          instagram,
          facebook,
      },
  }
}

const juan = createStudent({
  name: "juanito",
  age: 18,
  email: "juianito@mail.com",
  twitter: "juanDC"
})

createStudent()         //mada el error de que es obligatorio el nombre y email
createStudent({})       //mada el error de que es obligatorio el nombre y email
createStudent({name: "juanito"})       //mada el error de que es obligatorio el email
createStudent({email: "juanito@mail.com",name: "juanito"})      // no hay error

/*------------------------------------------------fabrica de objetos (factory function) siguiente del primero----------------------------------------*/

function createStudent({            
  name = requiereParam('name'),     
  age = requiereParam('email'),
  email,
  twitter,
  instagram,
  facebook,
  approvedCourse = [],
  learningPaths = []      
} = {}){    
  
  const private = {   // cuando se le aplica ( juan._name = "patata" ) no se cambiar de nombre
      "_name": name,
  }

  const public = {  
      email,
      age,
      approvedCourse,
      learningPaths,
      socialMedia: {
          twitter,
          instagram,
          facebook,
      },
 //---------------------una manera de realisarlo privado----------------------
      readName(){                       // en la consola se pueden sobrescribir al metodo readName le aplicamos Objeck.defineProperty()
          return private["_name"]       // solo mostrara el nombre
      },                                // el incombeniente seria que no se le podra aplicar el polimorfismo
      changeName(newName){              // configurable - writetable = false
        private["_name"] = newName
      },

 //---------------------otra manera de realisarlo privado----------------------
      get name(){                     // cambiando a get y set, dado y nos ponemos a ver las propiedades 
          return private["_name"]     //notaremos que el objeto ya no tiene el -- value -- , ni el -- writable --
      },
      
      set name(newName){              //y si lo modificamos con defineProperty() no tendremos que cambiar el value
          if(newName.length != 0){    //  y el writable, porque no hay, -- pero modificando a falso el writable para evitar editarlo
              private["_name"] = newName      // (Object.defineProperty(juan, "name",{value:"Roberto"}))
          }else{                              // crea una propiedad falsa para que podamos llamar a propiedades privadas y se quita la propiedad de que se pueda ediatr
              console.warn("tu nombre debe tener almenos 1 caráter")  // ya no hay get a set
          }
      }

  }
  //-------
  /*
  Object.defineProperty(public, "readMame", {         //de esta manero evitaremos que lo puedan sobrescribir al metodo readName (lo protegemos)
      configurable: false,                        // el desventaja sera que no se podra aplicar polimorfismo
      writable: false
  })
  Object.defineProperty(public, "changeName", {         //de esta manero evitaremos que lo puedan sobrescribir al metodo readName (lo protegemos)
      configurable: false,                        // el desventaja sera que no se podra aplicar polimorfismo
      writable: false
  })
  */
  //-------

  return public
}