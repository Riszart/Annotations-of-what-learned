
function requiereParam(param){
    throw new Error(param + " es obligatotio")           // nos manda un error a la consola y detiene el proseso
}


//  RORO -- recibe un objeto y retorna otro objeto              ({  })
function createStudent({            // crea un objeto con parametros
    name = requiereParam('name'),       //  cuando no se manda el parametro name llamara a reuiereParam(madara el error)
    age = requiereParam('email'),
    email,
    twitter,
    instagram,
    facebook,
    approvedCourse = [],
    learningPaths = []      //por defecto va a ser un array
} = {}){        //ponemos por defecto que sea un objeto
    return {        //retorna el objeto donde tendremos a los estudiantes
        name,       // es igual a name:name -- lo ponemos para que cuando enviamos nada no salga error-porque no ayuda el arror a la pogramacion
        email,
        age,
        approvedCourse,
        learningPaths,
        socialMedia:{
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

/*---------------------------------------------------------------------------------------------------------*/

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
    
    const private = {   // cuando se le aplica juan.name = "patata" no se cambiar de nombre
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
        /*
        readName(){         // en la consola se pueden sobrescribir el metodo readName
            return private["_name"] //  solo mostrara el nombre
        },
        */
        get name(){                     // cambiando a get y set, dado y nos ponemos a ver las propiedades 
            return private["_name"]     //notaremos que el objeto ya no tiene el -- value -- , ni el -- writable --
        },
        /*
        changeName(newName){
            private["_name"] = name
        }
        */
        set name(newName){              //y si lo modificamos con defineProperty no taremos que al cambiar le agrego el value
            if(newName.length != 0){    //  y el writable, pero modificando a falso el writable
                private["_name"] = newName
            }else{
                console.warn("tu nombre debe tener almenos 1 caráter")
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