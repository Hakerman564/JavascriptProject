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
  if (hora == (9, 10, 11 , 12 , 15 , 16, 17, 18, 19, 20))
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

//codiciones obligatorias de trasferencia
//cliente verificdo (v 0 f)
//destino verificado (v 0 f)
//saldo mayor al monto a trasferir mas costo de trasnsacion

//parametros del costo de transacion:
//Si el  banco destino es el scochanBack al banco del cliente  transacion es 0
//si el banco de destino es el diferente al banco del cliente costo de transacion es 100
//solo se pueden hacer trasferencia en horas de 9 a 12 0 de 15 a 20

//intentar hacer todo organisando por multiples lineas de codigo en un solo if
if (estudiante || profesor)
{
alert("Seder el paso");
}
 else if (visitante)
{
alert("Iniciar tour");
}
else if (conserje)
{
alert("Inicie labor de limpieza");
}
else
{
alert("Largese de Aqui")
}
console.log("222");
