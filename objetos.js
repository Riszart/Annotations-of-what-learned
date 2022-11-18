// ejemplo 01
var miAuto = {
    marca: "Toyota",
    modelo: "Corrola",
    annio: 2020             // se usa nn, la ñ es caracter especial que en el lenguaje no se entiende
};

// ** objeto.palabraClave ** para poder acceder al los objetos
miAuto.marca        // devuelve toyota
miAuto.annio        // devuelve 2020


// ejemplo 02
var miAuto = {
    marca: "Toyota",
    modelo: "Corrola",
    annio: 2020,
    detalleDelAuto: function(){                    //propiedad que lleva una funcion como valor ** metodo de objetos**
        console.log('Auto ${this.modelo} ${this.annio}')    
        // this -- es una variable que hace una referencia al objeto - se podria leer ** miAuto.modelo ** o ** miAuto.annio ** 
    }
};

// se lo manda a llamar como si fuera una funcion
miAuto.detalleDelAuto();



// generar muchos objetos automaticamente -- funcion constructora --
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio
}
// agregamos un objeto 
var autoNuevo = new auto("tesla", "Model 3", 2020) //new genera una nueva instancia en la funcion contructora auto()
var autoNuevo2 = new auto("Tesla", "Model X", 2018)
var autoNuevo3 = new auto("toyota", "corolla", 2020)
// Object.keys(array) combierte los nombres de un objeto en arrays de nombres
// Object.values(array) combierte los valores de un objeto en arrays de valores
// Object.entries(array) combierte en un array de nombre y valor a cada uno, y lo situa dentro de un arrays 