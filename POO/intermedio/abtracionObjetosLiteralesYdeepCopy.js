function isObject(subject){
    return typeof subject == "object"
}
function isArray(subject){
    return Array.isArray(subject )      //Array ----super prototipo array - metodo static (isArray())
}

function deepCopy(subject){             //  {} es un objecto    y   [] es un objeto literal
    let copySubject

    const subjectIsArray = isArray(subject)         // [] es array
    const subjectIsObject = isObject(subject)       // [] es un objeto literal

    if(subjectIsArray){         // primero lo de declara como array y ya no hace el else-if
        copySubject = []
    }else if(subjectIsObject){
        copySubject = {}
    }else{
        return subject
    }
    
    for(let key in subject){
        const keyIsObject = isObject(subject[key])      // si es [] o {} a ambos lo declara como objeto por eso hace la recursiva isObject = true
        if(keyIsObject){
            copySubject[key] = deepCopy(subject[key])   //  vuelve a llamar a la funcion deepcopy
        }else{
            if(subjectIsArray){
                copySubject.push(subject[key])
            }else{
                copySubject[key] = subject[key]
            }
        }
    }
    return copySubject
} 

const studentBase = {
    name: undefined,
    email: undefined,
    age: undefined,
    approvedCourse: undefined,
    learningPaths: undefined,
    socialMedia: {
        twitter: undefined,
        instagram: undefined,
        facebook: undefined,
    }
}

const juan = deepCopy(studentBase)
Object.defineProperty(juan, "name", {
    value: "juanito",
    configurable: false
})
/*-------- o ---------*/
Object.seal(juan)
/*-------- isSealed() ---------*/
Object.isSealed(juan)       //  verifica si todas las propiedades del objeto tinene el configurable: false