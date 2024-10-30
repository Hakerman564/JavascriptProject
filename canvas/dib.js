var ruta = document.getElementById("dibujo");
var txt = document.getElementById("caja_text");
var bttn = document.getElementById("boton");
var bttn2 = document.getElementById("boton2");
var lienzo = ruta.getContext("2d");
var ancho = ruta.width;
bttn.addEventListener("click", Dibujo_clik );
bttn2.addEventListener("click", iniciar );
var resetedor =
{
  url: "reset.png",
  ok: false
}

iniciar();

linear("black", 1, 1, 1, 499);
linear("black", 1, 499, 499, 499);
linear("black", 499, 499, 499, 1);
linear("black", 499, 1, 1, 1);

function iniciar()
{
resetedor.imagen = new Image();
resetedor.imagen.src = resetedor.url;
resetedor.imagen.addEventListener("load", cargareset);
}

function cargareset()
{
resetedor.ok = true;
go();
}

function linear(color, Ix, Iy, Fx, Fy)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(Ix, Iy);
  lienzo.lineTo(Fx, Fy);
  lienzo.stroke();
  lienzo.closePath();
}

function Dibujo_clik()
{
  var l = 0;
  var lineas = parseInt(txt.value);
  var xf, yi;
  var r = ancho / lineas;
  var espacio = parseInt(r);
  //document.write("<p>" + "espacio: " + espacio + "</p>");


  while (l < lineas)
  {
    yi = espacio * l;
    xf=  espacio * (l + 1);
    linear("yellow", 0, yi, xf, 500);
    console.log("linea " + l);
    l = l + 1;
  }
}
function go()
{
 if(resetedor.ok)
 {
   lienzo.drawImage(resetedor.imagen, 0, 0);
   linear("black", 1, 1, 1, 499);
   linear("black", 1, 499, 499, 499);
   linear("black", 499, 499, 499, 1);
   linear("black", 499, 1, 1, 1);
 }
}
