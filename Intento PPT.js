
    var opt1 = "piedra";
    var opt2 = "papel";
    var opt3 = "tijeras";
    var Resultado = function (Jugador, CPU){
        if (Jugador === CPU){
            return console.log("Empate")
        }
        else if (Jugador === opt1 && CPU === opt2) 
        {
            return console.log("Gana la computadora con " + opt2)
        }
        else if (Jugador === opt2 && CPU === opt1) 
        {
            return console.log("Gana el Jugador con " + opt2)
        }
        else if (Jugador === opt3 && CPU === opt1) 
        {
            return console.log("Gana la computadora con " + opt1)
        }
        else if (Jugador === opt1 && CPU === opt3) 
        {
            return console.log("Gana el Jugador con " + opt1)
        }
        else if (Jugador === opt3 && CPU === opt2) 
        {
            return console.log("Gana el Jugador con " + opt3)
        }
        else if (Jugador === opt2 && CPU === opt3) 
        {
            return console.log("Gana la computadora con " + opt3)
        }
        else{Jugador || CPU == null
            return console.log("Sos un pete")
        }

    }