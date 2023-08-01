var numero = 1
switch (numero) {
    case 1: 
        console.log("Soy uno");
        break;
    case 10:
        console.log(" Soy un 10")
        break;
    case 100:
        console.log("SI soy un 100")
        break;
    default:
        console.log("NO SOY NADAAAA")
}

//Switch permite hacer algo parecido a los condicionales, se selecciona un caso, si este caso se cumple (Dando true) entonces se produce el break evitando que se siga tomando los casos siguientes, si ninguno de los casos se cumple (false) entonces se envia el resultado de "default". Sin el BREAK seguira cumpliendo los casos o default.
numero