var ruta = document.getElementById("dibujo");
var lienzo = ruta.getContext("2d");
var l = 50;
var lineas =0;
var xf, yi;
var xi, yf;


for (var lineas = 0;lineas < l; l = l - 1)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  xi = 10 * l;
  yf = 500 - 10 * (l + 1);
  linear("blue", 500, yi, xf, 0);
  linear("red", 0, yi, xf, 500);
  linear("yellow", xi, 500, 500, yf);
  linear("pink", xi, 0, 0, yf);
  console.log("linea " + l);
}

linear("black", 1, 1, 1, 499);
linear("black", 1, 499, 499, 499);
linear("black", 499, 499, 499, 1);
linear("black", 499, 1, 1, 1);


function linear(color, Ix, Iy, Fx, Fy)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(Ix, Iy);
  lienzo.lineTo(Fx, Fy);
  lienzo.stroke();
  lienzo.closePath();
}
