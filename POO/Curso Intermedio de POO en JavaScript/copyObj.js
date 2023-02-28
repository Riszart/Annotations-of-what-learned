const juanita = {
  age: 15,
  email: "juanita@juanita.com"
}
const natalia = juanita   // compiamos las propiedades de juanita a natalia
console.log(natalia, juanita)
natalia.age = 20    // juanita tambien cambia a la hora de cambiar el de natalia

//----------------------------------shallow copy---------------------------------------------------------------------

const obj1 = {
  a: "a",
  b: [1,8,9,158],
  c:{
      d: "d",
      e: ['s','po','ff'],
  },
  editA(){}
}


const obj2 = {}
                           
for(prop in obj1){              
    obj2[prop] = obj1[prop]     //se copia el elentos pero se mantendra enlasado el objeto dentro de otro objeto
}                               // si se cambia el "c" del obj1 o obj3 tambien cambiara al obj3 o obj1
                                // no funciona bien con objetos dentros de otros porque tambien se modificara el objeto dentro de otro objeto del obj1
                                // si cambia el obj2

const obj3 = Object.assign({}, obj1)    //funciona similar al siclo for

const obj4 = Object.create(obj1)    // se crea el objeto y copia pero no se modifica al obj1 si se le cambia el valor al obj4, pero si el original
                                    //cambia tambien cambiara la copia
                                    //si se modificara los objetos dentro de otro objeto si se le cambia a obj1 o obj4
                                    //

//----------------------------copia con JSON --------------------------------------------------

const stringfiedComplexObj = JSON.stringify(obj1)   //convierte un objeto o valor de JavaScript en una string.
                                                    // "{\"a\":\"a\",\"b\":\"b\",\"c\":{\"d\":\"d\",\"e\":\"e\"},\"f\":[1,\"2\",3]}"
const obj2Copy = JSON.parse(stringfiedComplexObj)   //analiza una cadena de texto (string), transformando opcionalmente el valor producido por el análisis.
                                                // {a: "a", b: "b", c: {d: "d", e: "e"}}
                                                //no se pueden copiar metodos dentro de objeto, porque no saben trabajar con metodos de objetos y o funciones
//---------------------------recursividad ------------------------------------------------------
/*
  function recursiva(){
    if(validacion){
      llamados recursivos
    }else {
      llamados normales, sin recursividad
    }
  }
*/

//--------------------no funcion recursiva--------------------------------------

const numeritos = [0,1,2,3,4,5,6,,7,8,9,35,56,32,1,]
let numerito = 0
while(numerito < 5){
  console.log(numerito)
  numerito++
}
//--- o ---
for(let index = 0; index < numeritos.length; index++){
  numerito = numeritos[index]
  console.log({index,numerito})
}

//--------------------funcion recursiva--------------------------------------

const arrays = [0,1,2,3,"@",4,5,6,,7,8,"dsf",32,1,]
function recursiva(arrays){
  if(arrays.length != 0){
    const firstNum = numberArray[0]
    console.log(firstNum)
    numberArray.shift()
    recursiva(numberArray)
  }
}
//---------------------------------deep copy -----------------------------
function deepCopy(subject){             //  {} es un objecto    y   [] es un objeto literal
  let copySubject

  const subjectIsArray = isArray(subject)         // [] es array o objeto literal
  const subjectIsObject = isObject(subject)       // {}  es un objeto

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


//---------------------- validaciones --------------------
function isObject(subject){
  return typeof subject == "object"   //typeof -- el tipoo de la variable es igual al = (a lo que queramos)
}
function isArray(subject){
  return Array.isArray(subject )      //Array ----super prototipo array - metodo static (isArray())
}

