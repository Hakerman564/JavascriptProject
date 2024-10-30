var imagenes = [];
imagenes[1] = "1.png";
imagenes[5] = "5.png";
imagenes[10] = "10.png";
imagenes[25] = "25.png";
imagenes[50] = "50.png";
imagenes[100] = "100.png";
imagenes[200] = "200.png";
imagenes[500] = "500.png";
imagenes[1000] = "1000.png";
imagenes[2000] = "2000.png";

var iconos = [];
iconos[1] = "icon-1.png";
iconos[5] = "icon-5.png";
iconos[10] = "icon-10.png";
iconos[25] = "icon-25.png";
iconos[50] = "icon-50.png";
iconos[100] = "icon-100.png";
iconos[200] = "icon-200.png";
iconos[500] = "icon-500.png";
iconos[1000] = "icon-1000.png";
iconos[2000] = "icon-2000.png";

class Billete
{
  constructor(v, c)
  {
  this.imagen = new Image();
  this.imagen2 = new Image();
  this.valor = v;
  this.cantidad = c;

  this.imagen.src = imagenes[this.valor];
  this.imagen2.src = iconos[this.valor]
  }
}


var cajadinero = 0;
var resultado = document.getElementById("resultado");
var boton = document.getElementById("tudinero");
var audio = document.getElementById("audio");
var caja = [];
var papeles;
var div;
var entrega = [];
var money = 0;
var contex;

caja.push(new Billete(2000, 10));
caja.push(new Billete(1000, 15));
caja.push(new Billete(500, 20));
caja.push(new Billete(200, 25));
caja.push(new Billete(100, 30));
caja.push(new Billete(50, 35));
caja.push(new Billete(25, 40));
caja.push(new Billete(10, 50));
caja.push(new Billete(5, 55));
caja.push(new Billete(1, 60));

cajerot();

function cajerot() // function que anote el monto que retiene la atm
{
 cajadinero = 0
  for (c of caja)
  {
  cajadinero += c.valor * c.cantidad;
  monto.innerHTML = "Total registrado</br>" + cajadinero + "<br /> <hr />";
  }



montoDetallado.innerHTML =""
  for (v of caja)
  {
    if(v.cantidad > 0)
    {
    montoDetallado.innerHTML +="<img class src =" + v.imagen2.src + ">     " + v.cantidad;
    }
    if (v.cantidad == 0)
    {
    montoDetallado.innerHTML += "<img class src =" + v.imagen2.src + ">  <strong class = Mato>Vacio</strong>";
    }
    if(v.valor == 1)
    {
      montoDetallado.innerHTML += "<hr />";
    }
  }
}

boton.addEventListener("click", cajago);


function cajago() // entrega de dinero al patron
{
audio.play();
entrega = [];
var dinero = document.getElementById('Ctad')
money = parseInt(dinero.value);
if (cajadinero >= money)
{
  for (z of caja)
    {
    if(money >= 0)
      {
      div = Math.floor(money / z.valor);
        if(div > z.cantidad)
          {
            papeles = z.cantidad;
          }
        else
          {
            papeles = div;
          }
      }
      entrega.push(new Billete(z.valor, papeles))
      money -= (z.valor * papeles);
      cajadinero = cajadinero - money;
      z.cantidad = z.cantidad - papeles;
      console.log(money);
    }
}

 cajerot();
  if (money == 0)
  {
    resultado.innerHTML = "";
    for(var e of entrega)
      {
        if(e.cantidad > 0)
        {
          for (var d = 0; d < e.cantidad; d++)
          {
            resultado.innerHTML += "<img src =" + e.imagen.src + ">   ";
            console.log(resultado);
          }
        }
      }

  }
else
  {
    resultado.innerHTML = "lo sentimos no podemos imprimir ";
  }
   return money
   return entrega
}
