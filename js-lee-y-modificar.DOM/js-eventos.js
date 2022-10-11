const h1 = document.querySelector('h1')
const input1 = document.querySelector('#calcular1')
const input2 = document.querySelector('#calcular2')
const btn = document.querySelector('#btncalcular')
const pResult = document.querySelector('#result')

btn.addEventListener('click', btnOnClick)   // escucha el evento que se mesiono en el parametro y ejecuto la funcion ...

function btnOnClick(){
    const sumaInputs = input1.value + input2.value
    pResult.innerText = "Resultado " + sumaInputs 
}

