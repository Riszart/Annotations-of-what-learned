console.log(salarios)
// analisis personal para juanita

function encontrarPersona(personaEnBusqueda){
    return salarios.find((persona)=>persona.name == personaEnBusqueda)

    /*const personaEnBusqueda = 'Juanita'
    const persona = salarios.find((persona)=> persona.name == personaEnBusqueda)*/
}
function medianaPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos
    const salarios = trabajos.map((element) => element.salario)
    const medianaSalario = PromedioMedianaModa.calcularMediana(salarios)

    return medianaSalario
}
function proyeccionPorPersona(nombrePersona){
    const trabajos = encontrarPersona(nombrePersona).trabajos
    let porcentajesCrecimiento = []

    for(let i = 1; i < trabajos.length; i++){
        const salarioActual = trabajos[i].salario
        const salarioPasado = trabajos[i - 1].salario
        const crecimiento = salarioActual - salarioPasado
        const porcentajeDeCrecimiento = crecimiento / salarioPasado
        porcentajesCrecimiento.push(porcentajeDeCrecimiento)
    }

    const medianaPorcentajesCrecimientos = PromedioMedianaModa.calcularMediana(porcentajesCrecimiento)
    const ultimoSalario = trabajos[trabajos.length - 1].salario
    const aumento = ultimoSalario * medianaPorcentajesCrecimientos
    const nuevoSalario = ultimoSalario + aumento
    return nuevoSalario 
}

// Analisis empresarial
const business = {}
for (i of salarios){
    for (a of i.trabajos){
        if(!business[a.empresa]){
            business[a.empresa] = {}
        }
        if(!business[a.empresa][a.year]){
            business[a.empresa][a.year] = []
        }
        business[a.empresa][a.year].push(a.salario)
    }
}
console.log(business)
function medianaEmpresaYear(nombre, year){
    if(!business[nombre]){
        console.warn('la empresa no existe')
    } else if(!business[nombre][year]){
        console.warn('la empresa no dio salario')
    } else{
        return PromedioMedianaModa.calcularMediana(business[nombre][year])
    }
    
}
function  proyeccionPorEmpresa(nombre){
    if(!business[nombre]){
        console.warn('la empresa no existe')
    }else {
        const empresaYear = Object.keys(business[nombre])
        const listaMedianaYear = empresaYear.map((year)=>{return medianaEmpresaYear(nombre, year)})
        let porcentajesCrecimiento = []
        for(let i = 1; i < listaMedianaYear.length ; i++){
            const salarioActual = listaMedianaYear[i]
            const salarioPasado = listaMedianaYear[i - 1]
            const crecimiento = salarioActual - salarioPasado
            const porcentajeCrecimiento = crecimiento / salarioPasado
            porcentajesCrecimiento.push(porcentajeCrecimiento)
        }
        const medianaPorcentajesCrecimientos = PromedioMedianaModa.calcularMediana(porcentajesCrecimiento)
        const ultimaMediana = listaMedianaYear[listaMedianaYear.length - 1]
        const aumento = ultimaMediana * medianaPorcentajesCrecimientos
        const nuevoMediana = ultimaMediana + aumento
        return nuevoMediana
    } 
}

// analisis general

function medianaGeneral(){
    const listaMedianas = salarios.map((persona)=>{return medianaPorPersona(persona.name)})
    const mediana = PromedioMedianaModa.calcularMediana(listaMedianas)
    return mediana
}

function medianaTop10(){
    const listaMedianas = salarios.map(persona => medianaPorPersona(persona.name))
    const medianasOrdenadas = PromedioMedianaModa.ordenarLista(listaMedianas)
    const cantidad = listaMedianas.length / 10
    const limite = listaMedianas.length - cantidad
    const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length)
// slice ------ (crea un areglo sin alterar el arreglo inicial) corta el areglo en donde se establese -- requiere un valor de donde comiensa el corete 
// y el valor donde se termina podiendo ser establecido o no
// splice ----- elimina espesificamente elementos o no dependiendo del segundo valor, requiere dos valores importantes que es el index de inicio
// y el valor de remover o no ( 0 o negativo no remueve - 1 o mayor remueve) el tercer valor es opcional (se le introduce en el array un estring)
    const medianaTop10 = PromedioMedianaModa.calcularMediana(top10)
    return medianaTop10
}