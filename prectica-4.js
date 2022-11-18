
// ----input-----
const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra'
}

function solution(obj) {
    const array = Object.entries(obj)
    let final = []
    for (let i of array) {
      final.push({id:i[0],name:i[1]})
    }
    console.log(final)
    return final
    // Tu código aquí 👈
  }

// ambos hacen lo mismo la diferencia es que uno usa menos codigo y mas compacto

function solution(obj) {
    return Object.entries(obj).map(value => {return { id: value[0], name: value[1]}})
    //crea un nuevo array con los resultados de la llamada funcion que se aplicara a cada uno de sus elementos
}
/* -------output---------
[{
    id: "123",
    name: 'Juanito Alcachofa',
},
{
    id: "456",
    name: 'Juanita Alcaparra',
}]
*/