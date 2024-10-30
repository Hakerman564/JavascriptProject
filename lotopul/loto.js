
var boton = document.getElementById("M");
var b1 = document.getElementById("bolo1");
var b2 = document.getElementById("bolo2");
var b3 = document.getElementById("bolo3");
var b4 = document.getElementById("bolo4");
var b5 = document.getElementById("bolo5");
var b6 = document.getElementById("bolo6");
var especial = document.getElementById("boloex1");
var extrella = document.getElementById("boloex2");

var bolo1 = 100 ;
var bolo2 = 200 ;
var bolo3 = 300 ;
var bolo4 = 400 ;
var bolo5 = 500 ;
var bolo6 = 600 ;
var bolox1 = 0 ;
var bolox2 = 0 ;

var tbolo1;
var tbolo2;
var tbolo3;
var tbolo4;
var tbolo5;
var tbolo6;
var tbolox1;
var tbolox2;

boton.addEventListener("click", parte );

function aleatorio(min, max)
  {
    var resultado;
    resultado = Math.floor((Math.random() * (max - min + 1)) + min);
    return resultado;
  }

  function eleccionbolos(mas, mik)
  {
  var resultado = aleatorio(mas, mik);
    while ((bolo1 == resultado) || ( bolo2 == resultado) || (bolo3 == resultado) || (bolo4 == resultado) || (bolo5 == resultado) || (bolo6 == resultado))
    {
      resultado = aleatorio(mas, mik);
    }
    return resultado;
  }

function parte()
  {
    bolo1 =  eleccionbolos(1, 38);
    bolo2 =  eleccionbolos(1, 38);
    bolo3 =  eleccionbolos(1, 38);
    bolo4 =  eleccionbolos(1, 38);
    bolo5 =  eleccionbolos(1, 38);
    bolo6 =  eleccionbolos(1, 38);
    bolox1 =  aleatorio(1, 9);
    bolox2 =  aleatorio(1, 9);

if (bolo1 == b1.value)
{
 tbolo1 = "verdoso"
}
else
{
tblo1 = "error";
}

if (bolo2 == b2.value)
{
 tbolo2 = "verdoso"
}
else
{
tblo1 = 0;
}

if (bolo3 == b3.value)
{
 tbolo3 = "verdoso"
}
else
{
tblo1 = 0;
}

if (bolo4 == b4.value)
{
 tbolo4 = "verdoso"
}
else
{
tblo1 = 0;
}

if (bolo5 == b5.value)
{
 tbolo5 = "verdoso"
}
else
{
tblo1 = 0;
}

if (bolo6 == b6.value)
{
 tbolo6 = "verdoso"
}
else
{
tblo1 = 0;
}

if (bolox1 == especial.value)
{
 tbolox1 = "verdoso"
}
else
{
tblo1 = 0;
}

if (bolox2 == extrella.value)
{
 tbolox2 = "verdoso"
}
else
{
tblo1 = 0;
}

coms.innerHTML = "<table><tr><td class = "+tbolo1+" >"+bolo1+"</td><td class = "+tbolo2+" >"+bolo2+"</td><td class = "+tbolo3+">"+bolo3+"</td><td class = "+tbolo4+">"+bolo4+"</td><td class = "+tbolo5+" >"+bolo5+"</td><td class = "+tbolo6+" >"+bolo6+"</td><td class = "+tbolox1+" >"+bolox1+"</td><td class = "+tbolox2+"> "+bolox2+"</td></tr></table>"
  }


  var d = new Date();
  document.write(d.getDate());
