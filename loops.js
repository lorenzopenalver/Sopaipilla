var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
function saludarest(estudiante) {
    console.log(`Hola, ${estudiante}`);
    
}
for(var i = 0; i < estudiantes.length; i++){
    saludarest(estudiantes[i]);
}
//Lo que hace for(var i = 0 ; i < estudiantes.length; i++){} es que si el largo de estudiantes es más grande que I entonces se hace el loop, lo que está dentro de las llaves es que llamas a la funcion saludarest y a la variante estudiantes , el array i lo que hace es formar un saludo para cada nombre.



var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
function saludarest(estudiante) {
    console.log(`Hola, ${estudiante}`);
    
}
for(var estudiante of estudiantes){
    saludarest(estudiante);
}

//For of, basicamente lo que hace el for of hace que el of trae todas las unidades dentro de estudiantes


var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];
function saludarest(estudiante) {
    console.log(`Hola, ${estudiante}`);
    
}
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarest(estudiante);
}
//Saca los elementos del array hasta que la length del array es igual a 0 y rompe el loop