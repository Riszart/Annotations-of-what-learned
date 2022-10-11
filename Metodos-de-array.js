var articulos = [
    {nombre :"bici" ,costo: 3000},
    {nombre :"Tv" ,costo: 2500},
    {nombre :"libre" ,costo: 320},
    {nombre :"Celular" ,costo: 1000},
    {nombre :"Laptop" ,costo: 20000},
    {nombre :"teclado" ,costo: 500},
    {nombre :"Audifono" ,costo: 1700},
];

//.filter()   (crea un nuevo array) ayuda a filtrar, valida si es verdad o falso y lo mete en un nuevo array
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500        // regresa el costo del articulo que sea menor o igual  a 500
});

// .map()     (crea un nuevo array) ayuda a mapear los articulos y lo mete en un nuevo array
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre      //regresa todos los nombres de los obejtos del array
})

// .find()     (crea un nuevo array) nos ayudara a encontrar algo dentro del array y lo mete en un nuevo
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop" // regresa el objeto por el nombre extrictamente igual a Laptop
})

//.forEach()    (no crea nuevo array) va hacer el filtrado sobre el mismo array sin modificar y regresa un objeto
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

//.some()       (crea un nuevo array) nos regresa una validacion de true y false a los que cumplan con la validacion
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700    //regresa true o false al encontrar un articulo menor o igual a 700
})

