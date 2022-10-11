var marca = ["Hyundai", "Toyota"]
var modelo = ["Accent","ioniq","Elantra","Tucson"]
var annio = [2019, 2018, 2020, 2021, 2022]

var automobil = []

function autos(marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio  = annio;
}

for (i = 0; i < marca.length ;i++){
    for (a = 0; a < modelo.length ;a++){
        for (b = 0; b < annio.length ; b++){
            automobil.push(new autos(marca[i], modelo[a], annio[b]))
        }
    }
}