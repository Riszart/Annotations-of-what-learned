function inicioJuego(humano, maquina){
    var humano;
    var maquina;
    switch (true){
        case (humano === 'papel' && maquina === 'piedra'):
            console.log("gana humano");
            break;
        case (humano === "piedra" && maquina === "tijera"):
            console.log("gana humano");
            break;
        case (humano === "tijera" && maquina === "papel"):
            console.log("gana humano");
            break;
        case (humano === maquina):
            console.log("empate");  
            break;
        default:
            console.log("gana maquina");
    }
}

