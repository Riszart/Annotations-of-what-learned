// mejorable para que sean con menos codigo 
function inicioJuego(humano, maquina){
    
    if (humano == "piedra" & maquina == "tijera" || maquina == "piedra" & humano == "tijera" ){
        if (humano == "piedra"){
            console.log("gana humano")   
        }else{
            console.log("gana maquina")  
        }
    } else if (humano == "papel" & maquina == "piedra" || maquina == "papel" & humano == "piedra"){
          if (humano == "papel"){
            console.log("gana humano")   
        }else{
            console.log("gana maquina")  
        }
    } else if (humano == "tijera" & maquina == "papel" || maquina == "tijera" & humano == "papel"){
        if (humano == "tijera"){
            console.log("gana humano")   
        }else{
            console.log("gana maquina")  
        }
    }else {
        console.log("nadie gano")
    }
}