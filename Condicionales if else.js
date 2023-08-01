if (true) {
console.log ("Hola")
} //Si true es falso entonces Hola no se ejecutara por lo que podemos usar:
else { console.log ("No hola")
}
// Tambien antes de else podemos colocar "Else if" por si lo que tratamos de validar puede suceder en más de un paso
if (edad <19) {
    console.log ("Hola")}
    else if( edad >19) {
    console.log ("Puede ser que hola")
    }
    else {
console.log ("No hay hola")
    }

    
    var edad = 16;
    if ( edad === 18) {
        console.log ("Voto obligatorio")
    }
    else if (edad >= 16){
        console.log ("Voto opcional")
    }
    else {
        console.log("No puede votar")
    }

    //Tambien algo parecido al if y else es condition ? true : false;

    var numero = 1 
    var resultado = numero === 1 ? "Si, soy un uno" : "No, no soy un uno";
    // Para evitarme confusiones, Se llama a Resultado con console.log (resultado) Si le cambiamos el valor a "Var numero = 1" a "Var numero = 2" entonces nos dara el valor de "No, no soy un uno"

