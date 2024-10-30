var estudiante = true
var profesor = true
var visitante = false
var conserje = false
var bancocliente = true;
var cuentacliente= true;
var saldocliente =1300000 ;
var bancodestino =false;
var cuentadestino= false;
var ct;
var hora = 9;
//hora de trasferencia [0-24]

var trasferir = 1000000

if (bancocliente)
{
  if (cuentacliente)
  {
    if (bancodestino)
      {
        ct = 0
        di();
      }
    else
      {
        ct =100
      di();
      }
  }
  else
    {
    console.log("Que esta haciendo señor");
    }
}
else
{
console.log("hay un problema");
}

  function di()
  {
    if ((hora) >= 9 && (hora) <= 12)
    {
      saldocliente = saldocliente + ct
      if (saldocliente > trasferir)
      {
        console.log("Trasferencia completada");
      }
      else
      {
        console.log("es monto muy alto");
      }
    }
    else
    {
    console.log("no se puede");
    }
    console.log("222");
  }
