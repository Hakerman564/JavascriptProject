var ruta = document.getElementById("dibujo");
var lienzo = ruta.getContext("2d");
var l = 0;
var lineas = 50;
var xf, yi;


while (l < lineas)
{
  yi = 10 * l
  xf=  10 * (l + 1)
  linear("yellow", 0, yi, xf, 500);
  console.log("linea " + l);
  l = l + 1;
}
linear("black", 1, 1, 1, 499)
linear("black", 1, 499, 499, 499)


function linear(color, Ix, Iy, Fx, Fy)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(Ix, Iy);
  lienzo.lineTo(Fx, Fy);
  lienzo.stroke();
  lienzo.closePath();
}
