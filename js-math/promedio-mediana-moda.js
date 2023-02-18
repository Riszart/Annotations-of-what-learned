const PromedioMedianaModa = {}
PromedioMedianaModa.esPar =  function esPar(lista){
    return !(lista.length % 2)
    // --%-- este simbolo debuelve el residuo de una divicion se puede usar para saber si es par o impar
}
PromedioMedianaModa.esImpar = function esImpar(lista){
    return lista.length % 2
}
PromedioMedianaModa.calcularMediana = function calcularMediana(listaDesordenada){
    const lista = PromedioMedianaModa.ordenarLista(listaDesordenada);
    const listaEsPar = PromedioMedianaModa.esPar(lista)
    if(listaEsPar){
        const indexMitad1ListaPar = (lista.length / 2) - 1
        const indexMitad2ListaPar = lista.length / 2
        const listaMitades = []

        listaMitades.push(lista[indexMitad1ListaPar])
        listaMitades.push(lista[indexMitad2ListaPar])
        
        return PromedioMedianaModa.calcularPromedioConReduce(listaMitades)
    }
    else{
        indexMitadListaImpar = Math.floor(lista.length/2) // Math.floor() -- les quita los desimales a los numeros sin redondear
        console.log(indexMitadListaImpar)
        return lista[indexMitadListaImpar]
    }
}
//---------------------------------------------------------------

PromedioMedianaModa.calcularModa = function calcularModa(lista){
    const listaCount = {}
    
    for (let i = 0; i < lista.length ; i++){    //lo convierte en un objeto deacuerdo a cuanto se esta repitiendo
        const elemento = lista[i]
        if(listaCount[elemento]){
            listaCount[elemento] += 1
        }
        else{
            listaCount[elemento] = 1
        }
    }

    const listaArrays = Object.entries(listaCount)  //combierte en un array de nombre y valor a cada uno, y lo situa dentro de un arrays, array bidimencional 
    const listaOrdenada = ordenarListaBidimencional(listaArrays)
//  const listaOrdenada = ordenarListaBidimencional(listaArrays, 1)

    const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1]  //ubica el elemento que mas se repitio que en este caso esta en el ultimo por el orden que se dio
    //console.log('la moda es:' + listaOrdenada[0])
    const moda = listaMaxNumber[0]
    return moda
}
PromedioMedianaModa.ordenarListaBidimencional = function ordenarListaBidimencional(listaDesordenada){
//  function ordenarListaBidimencional(listaDesordenada, (i)indice) ---------
    function ordenarListaSortBidimencional(valorAcumulado, nuevoValor){
    return valorAcumulado[1] - nuevoValor[1]
//      return valorAcumulado[i] - nuevoValor[i] ------
    }
    const listalistaOrdenadaBidimencional = listaDesordenada.sort(ordenarListaSortBidimencional)
    return listalistaOrdenadaBidimencional
}
//-------------------------------------------------------------------------------------

PromedioMedianaModa.calcularPromedioConReduce = function calcularPromedioConReduce(lista){
    // si no se pone las llaves se interpreta que esta haciendo un --return--
    const sumaLista = lista.reduce((acumulador, nuevoValor)=>acumulador + nuevoValor)  
    // reduce, pasara por todo el array aplicando la funcion con dos parametros obligatorios acumulador y nuevoValor 
    // se le puede ponder otros parametros mas como el indice y otros
    const promedio = sumaLista / lista.length
    return promedio
}

PromedioMedianaModa.calcularPromedioConFor = function calcularPromedioConFor(lista){
    let sumaLista = 0
    for (let i =0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i]
    }
    const promedio = sumaLista / lista.length
    return promedio
}
//------------------------------------------------------------
PromedioMedianaModa.ordenarLista = function ordenarLista(listaDesordenada){
    function ordenarListaSort(valorAcumulado, nuevoValor){
    /*
        if (valorAcumulado > nuevoValor){
            return 1
        }else if(valorAcumulado == nuevoValor){
            return 0
        }else if(valorAcumulado < nuevoValor){
            return -1
        }
    */
    return valorAcumulado - nuevoValor
    }
    const lista = listaDesordenada.sort(ordenarListaSort) // const lista = listaDesordenada.sort((a,b) => a-b)
    // .sort() -- ordena los elementos de un array resive valores 1 , 0 y -1. para saber si cambiar de posicion o no
    return lista
}
//-----------------------------------promedio ponderado----------[{1,5},{10,5},{8,4}]
PromedioMedianaModa.promedioPonderado = function promedioPonderado(arrayNotaCredito){
    let suma = 0
    let sumaPromedio = 0
    for(let i of arrayNotaCredito){
        suma += Object.keys(i)[0]*Object.values(i)[0]
        sumaPromedio += Object.values(i)[0]
    }
    return suma/sumaPromedio
}