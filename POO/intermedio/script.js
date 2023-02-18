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

Object.keys(juan)               
Object.getOwnPropertyNames(juan)
Object.entries(juan)

Object.defineProperty(juan, "navigator",{
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