/*
const obj2 = {}
//se copia el ementos pero se mantendra enlasado el objeto dentro de otro objeto
// si se cambia el el c del obj1 o obj3 tambien cambiara al obj3 o obj1
for(prop in obj1){
    obj2[prop] = obj1[prop]
}

const obj3 = Object.assign({}, obj1)    //funciona similar al siclo for

const obj4 = Object.create(obj1)    // se crea el objeto y copia pero no se modifica al obj1 si se le cambia el valor al obj4, pero si alreves
                                    // y si se modificara los objetos dentro de otro objeto si se le cambia a obj1 o obj4
*/

const obj1 = {
    a: "a",
    b: [1,8,9,158],
    c:{
        d: "d",
        e: ['s','po','ff'],
    },

    editA(){}

}
const stringfiedComplexObj = JSON.stringify(obj1)   //convierte un objeto o valor de JavaScript en una string.
// "{\"a\":\"a\",\"b\":\"b\",\"c\":{\"d\":\"d\",\"e\":\"e\"},\"f\":[1,\"2\",3]}"
const obj2 = JSON.parse(stringfiedComplexObj)   //analiza una cadena de texto (string), transformando opcionalmente el valor producido por el análisis.
// {a: "a", b: "b", c: {d: "d", e: "e"}}
//no se pueden copiar metodos dentro de objeto, porque no saben trabajar con metodos de objetos y o funciones

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

//--------------------no funcion recursiva--------------------------------------

let numerito = 0
while(numerito < 5){
    console.log(numerito)
    numerito++
}

//--------------------funcion recursiva--------------------------------------

function recursiva(numerito){
    console.log(numerito)
    if(numerito < 5){
        return recursiva(numerito + 1)
    }else{
        return 5
    }
}
//------
//----------------ejercicio de Playgrounds--------------
function deepFreeze(obj) {
Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object') deepFreeze(obj[prop])});
    return Object.freeze(obj);
}

//--------    o    ------------
function deepFreeze(obj) {
    if( typeof(obj)!=="object") return Object.freeze(obj); 

    for(let key in obj){
        deepFreeze(obj[key]) 
    }
} 
console.log(Object.getOwnPropertyDescriptors(obj))
