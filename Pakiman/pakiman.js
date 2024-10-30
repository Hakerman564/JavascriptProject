//script que para escribir los documentos al document
var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tocinuro"] = "cerdo.png";
imagenes["elfet"] = "Elefante.png";

var coleccion = [];
coleccion.push(new Pakiman("cauchin", 100, 30, 10, "normal"));
coleccion.push(new Pakiman("pokacho", 80, 50, 15, "lucha"));
coleccion.push(new Pakiman("tocinuro", 120, 40, 7, "roca"));
coleccion.push(new Pakiman("elfet", 190, 90, 2, "metal"));
console.log(coleccion);

//siemprerecuerda la diferencia entre (of y in)
for(pakin of coleccion) // este solo se uctiliza al momento de uctilizar una arrays
{
  pakin.mostrar();
}
sa
