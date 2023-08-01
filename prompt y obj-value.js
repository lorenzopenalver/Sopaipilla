let respuesta;


while (respuesta != "4"){
    let pregunta = prompt ("¿Cuánto es 2 más 2?")
    respuesta = pregunta
}

//Prompt genera un cuadro que no va a desaparecer hasta que la respuesta sea 4, el != 4 hace que si la respuesta es otra cosa que no sea 4 entonces dará false



//Object.values hace que los objetos: Nombre, localidad y color se vuelvan arrays

var amby = {
    nombre: "Achoque",
    localidad: "Michoacán",
    color: ["Verde Oscuro", "Café", "Moteado"]
  }
  
  function imprimirAmbys(arr){
    const achoques = Object.values(amby);
    achoques.forEach(function(element){
      console.log(element);
    })
  }


 
 //En este caso creas objetos dentro de una const "TiposSuscripcionesObj" la cual vamos a llamar luego en la funcion, gracias a esto se puede optimizar el codigo, al llamar obtenerSuscripcion (Valor deseado: Free,basic, expert, etc) te da como resultado los strings de cada objeto.
  const tipoSuscripcionesObj = {
    "Free": "Solo puedes tomar los cursos gratis",
    "Basic": "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Expert": "Puedes tomar casi todos los cursos de Platzi durante un año",
    "ExpertDuo": "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
}
function obtenerSuscripcion(suscripcion){
    console.log(tipoSuscripcionesObj[suscripcion])
    
}


// Otras maneras de llegar al mismo resultado con un solo if
const tiposDeSuscripciones = {
  free: "Solo puedes tomar los cursos gratis",
  basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
  expertduo:
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
};
//usando for in
function conseguirTipoSuscripcion(suscripcion) {
  for (let key in tiposDeSuscripciones) {
    //el bucle for in se itera sobre las propiedades del objeto tiposDeSuscripciones y las representa en una variable que se denominó key
    if (key === suscripcion) {
      //se compara la propiedad del objeto tiposDeSuscripciones (key) con el argunmento de la función (suscripcion)
      console.log(
        `Tienes una suscripcion ${key} y ${tiposDeSuscripciones[key]}`
      ); //si key es igual a suscripcion se imprime en consola la propiedad correspodiente al objeto (key) y el valor de la propiedad accediendo directamente a ella con el método de corchetes para poder utilizar la variable key
      break; // para terminar con el bucle
    };
  };
};

conseguirTipoSuscripcion('free')

