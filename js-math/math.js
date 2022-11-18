console.group('cuadrado')  /* muestra los console en grupos, se abre el contenedor del grupo */
const ladoCuadrado = 5
const perimetroCuadrado = ladoCuadrado * 4
const areaCuadrado = ladoCuadrado * ladoCuadrado

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
})

function calcularCuadrado(lado){
    return{
        perimetro: lado*4,
        area: lado * lado,
    }
}

console.groupEnd('cuadrado')/* se sierra el grupo */
console.group('circle')

const radioCirculo = 3
const diametroCirculo = radioCirculo * 2
const PI = 3.1415

const circunferencia = diametroCirculo * PI
const areaCirculo = (radioCirculo**2) * PI /* ..................**2 - es la potencia de dos*/

console.log({
    radioCirculo,
    diametroCirculo,
    PI,
    circunferencia,
    areaCirculo,
})
function calcularCirculo(){
    const diametro = radio * 2
    const radioAlCuadrado = Math.pow(radio,2) /* Math.pow potenciar un valor (buscar mas)*/

    return {
        circunferencia: diametro * Math.PI, /* Math.PI -- valor de pi */
        area: radioAlCuadrado * Math.PI.toFixed(5) /* cantidad de desimales de pi */
    }
}

console.groupEnd('circle')
console.group('triangulo')
function calcularAlturaTriangulo(lado1, base){
    if(lado1 == base){
        console.warn('este no es un triangulo isoseles')
    }
    else{
        //h = raizcuadrada(lado1 **2 - (b**2)/4)
        return Math.sqrt((lado1 ** 2) - (base**2)/4) // Math.sqrt es la raiz
    }
}
console.groupEnd('triangulo')
console.group('escaleno')
function calcularAlturaTrianguloEscaleno(lado1, lado2, lado3){
    let semiPerimetro = (lado1 + lado2 + lado3) / 2
    return{
        altura: Math.floor(2/lado1 * Math.sqrt(semiPerimetro *(semiPerimetro - lado1)*(semiPerimetro - lado2)*(semiPerimetro - lado3)))
    }

}
console.groupEnd('escaleno')
console.group('shop')
function descuento(precio, descuentoPor){
    const precioConDescuento = (precio * (100 - descuentoPor))/2
}
console.groupEnd('shop')
