var vp = document.getElementById('Villaplazti');
var papel = vp.getContext("2d");
var cantidad = aleatorio(0, 25);
var ancho = 500
var anchov = 60
var nv = 0
var nc = 0
var np = 0
var mo = 5
var z = 450
var m = 250

var tecla = {
UP: 38,
DOWN: 40,
LEFT: 37,
RIGHT: 39
};
var fondo = {
  url:"tile.png" ,
  cargaOK: false
}

var vaca = {
  url: "vaca.png",
  cargaOk: false
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOk: false
};

fondo.objecto = new Image();
fondo.objecto.src = fondo.url;
fondo.objecto.addEventListener("load", cargarfondo);

vaca.objecto = new Image();
vaca.objecto.src = vaca.url;
vaca.objecto.addEventListener("load", cargarvacas);

cerdo.objecto = new Image();
cerdo.objecto.src = cerdo.url;
cerdo.objecto.addEventListener("load", cargarcerdos);

pollo.objecto = new Image();
pollo.objecto.src = pollo.url;
pollo.objecto.addEventListener("load", cargarpollos);

function cargarfondo()
  {
  fondo.cargaOK = true;
  dibujar();
  }

  function cargarvacas()
  {
    vaca.cargaOK = true;
    dibujar();
  }

  function cargarcerdos()
    {
      console.log('d');
    cerdo.cargaOK = true;
    esperar();
    }

    function cargarpollos()
      {
      pollo.cargaOK = true;
      dibujar();
      }

function dibujar()
  {
    if(fondo.cargaOK)
    {
    papel.drawImage(fondo.objecto, 0, 0);
    }
    if(vaca.cargaOK,pollo.cargaOK)
    {
      for(var v = 0; v < cantidad; v++)
      {
        var animal = aleatorio(1, 2)
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 7);
       x = x * anchov;
       y = y * anchov;

       if(animal == 1)
       {
       papel.drawImage(vaca.objecto, x, y);
       nv = 1 + nv;
       }
       else
       {
      papel.drawImage(pollo.objecto, x, y);
       }
      }
    }
  }

function esperar()
{
  if(cerdo.cargaOK == true)
  {
    console.log("hola");
   document.addEventListener("keydown", presionar);
  }
}


function presionar(evento)
{
  papel.drawImage(cerdo.objecto, 250, 450);
  switch (evento.keyCode) {
    case tecla.DOWN:
     dibujar();
     papel.drawImage(cerdo.objecto, m, z + mo);
     z = z + mo;
      break;

    case tecla.UP:
     dibujar();
     papel.drawImage(cerdo.objecto, m, z - mo);
     z = z - mo;
       break;

    case tecla.LEFT:
    dibujar();
    papel.drawImage(cerdo.objecto, m - mo , z);
    m = m - mo;
        break;
      case tecla.RIGHT:
    dibujar();
    papel.drawImage(cerdo.objecto, m + mo, z);
    m = m + mo;
        break;
    default:

  }
}



//function dibujarcerdos()
  //{
  //  papel.drawImage(cerdo, 150, 150)
  //}

  //function dibujarpollos()
    //{
    //  papel.drawImage(pollo, 100, 100)
  //  }

function aleatorio(min, max)
  {
    var resultado
    resultado = Math.floor((Math.random() * (max - min + 1)) + min);
    return resultado
  }
