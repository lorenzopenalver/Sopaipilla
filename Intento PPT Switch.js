var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";

function resultado(user, cpu){
    switch (true){
        case user === cpu: 
        console.log("Empate")
        break;
        case (user === piedra && cpu === papel) || user === papel && cpu === tijeras || user === tijeras && cpu === piedra:
            console.log("Perdiste")
            break;
            default: console.log ("Ganaste") 
    }
}
resultado (piedra, papel)
