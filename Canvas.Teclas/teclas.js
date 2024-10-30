var canva = document.getElementById("plato");
var papel = canva.getContext("2d");
var tecla = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

var x = 10;
var y = 10;
linear("red", x-1, y-1, x+1, y+1, papel)

linear("black", 1, 1, 1, 399, papel);
linear("black", 1, 399, 399, 399, papel);
linear("black", 399, 399, 399, 1, papel);
linear("black", 399, 1, 1, 1, papel);


function linear(color, Ix, Iy, Fx, Fy, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(Ix, Iy);
  lienzo.lineTo(Fx, Fy);
  lienzo.stroke();
  lienzo.closePath();
}

document.addEventListener("keydown", dibujoTeclado);

function dibujoTeclado(evento)
  {
    var co = "blue";
    var mo = 9;
    switch(evento.keyCode)
    {
      case tecla.DOWN:
      linear(co, x, y, x, y + mo, papel);
      y = y + mo;
      console.log(y);
        break;
      case tecla.UP:
      linear(co, x, y, x, y - mo , papel);
      y = y - mo;
        break;
      case tecla.LEFT:
      linear(co, x, y, x - mo, y, papel);
      x = x - mo;
        break;
      case tecla.RIGHT:
      linear(co, x, y, x + mo, y, papel);
      x = x + mo;
        break;
      default:
      console.log("no es una flecha");
        break;
    }
  }
