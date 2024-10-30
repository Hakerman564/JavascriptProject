var planoC = document.getElementById("plano");
var papel = planoC.getContext("2d");
var cls = document
var inicio = 0;
console.log(inicio);
linear("black", 1, 1, 1, 299, papel);
linear("black", 1, 299, 299, 299, papel);
linear("black", 299, 299, 299, 1, papel);
linear("black", 299, 1, 1, 1, papel);

//planoC.addEventListener("mousemove", wx );
planoC.addEventListener('mousemove', mousemove , false);



planoC.addEventListener("mouseup", pincel );
planoC.addEventListener("mousedown", pincelD );

  function mousemove(evt)
  {
  //linear("red", mousemove.x - 6, evt.y - 78, mousemove.x - 6, evt.y - 78, papel)
  if( typeof lastX != 'undefined')
    {
    window.lastX = evt.x - 6;
    window.lastY = evt.y - 78;
    var x = window.lastX
    var y = window.lastY
      linear("black", x, y, x - 3, y - 3, papel);
      console.log(evt.x);
  }

  if (inicio == 1)
  {
    linear("black", x, y, x - 3, y - 1, papel);
    linear("black", x, y, x - 1, y - 1, papel);
  }
}

function pincelD()
{
inicio = 1 + inicio;
console.log(inicio);
}

function pincel()
{
inicio = inicio - 1;
console.log(inicio);
}

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


  var prueba = { primeraVariable: 'vaariale1', segundaVarible: 'variable2'}
  prueba.terceraVariable = 'variable3';
