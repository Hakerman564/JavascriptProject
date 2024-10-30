var lienzo = document.getElementById("Dibujojs");
var text = document.getElementById("ctxt");
var boton = document.getElementById("B");
var boton2 = document.getElementById("B2")
var ancho = lienzo.width;


var lienzo2 = lienzo.getContext("2d");
boton.addEventListener("click", rayado );
boton2.addEventListener("click", borrado );
console.log(document.input);

function P()
{
rayas("black", 1, 1, 1, 299);
rayas("black", 1, 299, 299, 299);
rayas("black", 299, 299, 299, 1);
rayas("black", 299, 1, 1, 1);
}

P();

function rayas(color, xi, yi, xf, yf)
{
  lienzo2.beginPath();
  lienzo2.strokeStyle = color;
  lienzo2.moveTo(xi, yi);
  lienzo2.lineTo(xf, yf);
  lienzo2.stroke();
  lienzo2.closePath();
}

function rayado()
{
var texto = parseInt(text.value);
var limlineas = texto;
var l = 0;
var espacio = 0 + ancho/limlineas;
var xx, yy, xx1, yy2;

if(espacio == 0)
  {
  alert("Debes introducir solo numero \nIntentelo otra vez ");
  }
  else
  {
    while (l < limlineas)
    {
      xx = 300 - (l * espacio);
      yy = 0 + (l * espacio);
      xx1 = 300 - (l * espacio);
      yy2 = 0 + (l * espacio);

      rayas("blue", 150, 150, 0, xx);
      rayas("red", 150, 150, 300, yy);
      rayas("pink", 150, 150, xx1, 300);
      rayas("green", 150, 150, yy2, 0);
      l = l + 1
    }
    P();
  }
}


function borrado()
  {
    var limlineast = 600;
    var lt = 0;
    var espaciot = 0 + ancho/limlineast;
    var xx, yy, xx1, yy2;

    while (lt < limlineast)
    {
      xx = 300 - (lt * espaciot);
      yy = 0 + (lt * espaciot);
      xx1 = 300 - (lt * espaciot);
      yy2 = 0 + (lt * espaciot);

      rayas("white", 150, 150, 0, xx);
      rayas("white", 150, 150, 300, yy);
      rayas("white", 150, 150, xx1, 300);
      rayas("white", 150, 150, yy2, 0);
      lt = lt + 1
    }
    P();
  }
