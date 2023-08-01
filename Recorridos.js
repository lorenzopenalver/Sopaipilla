var articulos = [
    {nombre: "Bici", Costo: 3000},
    {nombre: "TV", Costo:2500},
    {nombre: "Libro", Costo:320},
    {nombre: "Celular", Costo:10000},
    {nombre: "Laptop", Costo:20000},
    {nombre: "Teclado", Costo:500},
    {nombre: "Audifonos", Costo:1700}];

    var nombreArticulos = articulos.map(function(articulos) {
        return articulos.nombre
    });
   
    var articulosfiltrados = articulos.filter(function (articulos) {
        return articulos.Costo <=500
    });

    articulos.forEach(function (articulo) {
        console.log(articulo.Costo);
    });

    var articulosBaratos = articulos.some(function (articulo) {
        return articulo.Costo <=700;
    });

    