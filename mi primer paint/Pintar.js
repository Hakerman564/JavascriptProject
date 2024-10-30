var planoC = document.getElementById("plano");
var botonR = document.getElementById("Crojo");
var botonA = document.getElementById("Cazul");
var botonG = document.getElementById("Cverde");
var botonN = document.getElementById("Cnegro");
var botonAm = document.getElementById("Camarillo");
var borra = document.getElementById("erase")
var papel = planoC.getContext("2d");
var cls = document
var inicio = 0;
var x = 0;
var y = 0;
var bcolor = "black";
var ancho = 3;
borra.addEventListener("mouseup", clen)
function clen()
{
  bcolor = "white";
  ancho = 100;
}

botonR.addEventListener("mouseup", r);
function r(){bcolor = "red";ancho = 3}

botonA.addEventListener("mouseup", a);
function a(){bcolor = "blue";ancho = 3}

botonG.addEventListener("mouseup", g);
function g(){bcolor = "green";ancho = 3}

botonN.addEventListener("mouseup", n);
function n(){bcolor = "black";ancho = 3}

botonAm.addEventListener("mouseup", am);
function am(){bcolor = "yellow";ancho = 3}

console.log(ancho);

console.log(inicio);
linear("Gray", 3, 1, 1, 1, 299, papel);
linear("Gray", 3, 1, 299, 299, 299, papel);
linear("Gray", 3, 299, 299, 299, 1, papel);
linear("Gray", 3, 299, 1, 1, 1, papel);

planoC.addEventListener("mousedown", on);
planoC.addEventListener("mousemove", mo);
planoC.addEventListener("mouseup", off);

function on()
  {
    inicio = 1
  }

  function mo(m)
  {
   x = m.layerX
   y = m.layerY
    if (inicio == 1)
    {
      linear(bcolor, ancho, x, y, x - 1, y - 1, papel);
    }

  }

  function off()
  {
   inicio = 0
  }

function linear(color, size, Ix, Iy, Fx, Fy, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = size;
  lienzo.moveTo(Ix, Iy);
  lienzo.lineTo(Fx, Fy);
  lienzo.stroke();
  lienzo.closePath();
}
