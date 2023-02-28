const juan = {
    name:"juanito",
    age:18,
    approvedCourses: ["curso 1"],
    addCourse(newCourse){
        console.log("this", this)
        console.log("this.approvedCourses",this.approvedCourses)
        this.approvedCourses.push(newCourse)
    }
}

Object.seal()   //establese (configurable = false) en todas las propiedades
Object.freeze() //establece (configurable = false) y (writable = fasle) en todas las propiedades 

//------------------------------------------------------------------------

Object.keys(juan)   //nos devueleve una lista con todos los nombres de nuestro objeto
Object.getOwnPropertyNames(juan)     //(similar a keys) nos devueleve una lista con todos los nombres de nuestro objeto
Object.entries(juan)    //nos devuenve una array de array donde en cada array posicion 0 estara el nombre(keys) y el la posicion 1 estara el valor(value)
                        // cuando todo se mueve con entries --this-- ya no es el Objecto (tener encuenta cuando se trabaja con funicones)

Object.getOwnPropertyDescriptors(juan)  //metodo Static -- devuelve las propiedades del objetct (nombre de la propiedad: un object)
                                        //y dentro hay nuevos atributos para limitar la modificasion del objeto o atributos

Object.defineProperty(juan, "navigator",{   //crea una propiedad
    value: "Chrome", 
    enumerable: false,  //Object.keys(juan) -- no mostrara las propiedades que fueron definidas con el atributo (enumerable = false)
                        //getOwnPropertyNames(juan) --si mostrara las propiedades que fueron definidas con el atributo (enumerable = false)
    writable: true,
    configurable: true,
})

Object.defineProperty(juan, "pruebaNasa",{       //--metodo estatico del superprototipo Object 
    value: "extraterrestres",                     //--.defineProperty(nombre del objeto, nombre del nuevo atributo o propiedad que se quiere crear, lista de atributo)
    enumerable: false,
    writable: false,
    configurable: false,
})

Object.defineProperty(juan, "editor",{
    value: "VSCode",
    enumerable: true,
    writable: false,    //no se podra cambiar el valor de la propiedad,--- juan.editor = "atom"
                        //si se puede eliminar, -- delete juan.editor   true
    configurable: true,
})
Object.defineProperty(juan, "terminal",{
    value: "WSL",                  
    enumerable: true,
    writable: true, 
    configurable: false,    //--mo se puede eliminar,   delete juan.terminal    false  
})

console.log(Object.getOwnPropertyDescriptors(juan))