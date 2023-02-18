/*
El modo estricto es una funcionalidad que le permite al motor de JavaScript
cambiar la manera en que ejecuta el código. En este modo, se reduce las cosas que podemos hacer,
esto es bueno porque permite manejar errores que son poco perceptibles o que el motor de JavaScript
sobreentiende y ayuda a su compilación para corregirlos.
*/
"use strict";

function myFunction(){
    return pi = 3.14
}

console.log(myFunction()) // ReferenceError: pi is not defined

// ejemplo modo estricto

"use strict";

nombre = "Andres"
console.log(nombre) // ReferenceError: nombre is not defined

// sim modo estricto

nombre = "Andres"
console.log(nombre) // "Andres"

//----------------------------------- closure ------------------------------------------

// ------------ejecutalo para ver mejor el funcionamiento
function moneyBox(){
    let saveCoins = 0
    console.log(saveCoins, 'inicio')
    function countCoins(coins){
    console.log(saveCoins, 'dos')
    console.log(coins , 'coin')
        saveCoins += coins
        console.log('MoneyBox' + saveCoins)
    }
    console.log(saveCoins, 'extra')
    return countCoins
}
const myMoneyBox = moneyBox()
myMoneyBox(5)
myMoneyBox(5)
myMoneyBox(15)
 
const moneyBoxAna = moneyBox()
moneyBoxAna(10)
moneyBoxAna(20)
moneyBoxAna(5)

//-----------------ejercicio--------

function sumWithClosure(firstNum) {
  return function (secondNum) {
    if (secondNum) {
      return secondNum + firstNum;
    }
    return firstNum;
  };
}

sumWithClosure(2)(3);
sumWithClosure(90)();

//----------------- ejecicio----------

 function createPetList() {
  const petList = []
  return function(pet){
      if(pet){
        petList.push(pet)
        return petList
      }
      return petList
  }
}
const myPetList = createPetList();
myPetList("michi");
myPetList("firulais");
myPetList();

//--- ejemplo 01 -----------------------------

const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() { // function interna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

myFunction();

//---- ejemplo 02----------------

const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() { // function interna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

myFunction();