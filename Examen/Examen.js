//clases del programa
var resultadoA;
var resultadoB;
var resultadoC;
var resultadoD;
var ar = 0;
var br = 0;
var cr = 0;
var dr = 0;

class Pregunta { //class recreadora de preguntas.
  constructor(sa, sb, sc, sd, da, db, dc, dd , p) //erro datos de selecio nan no exiten
  {
    this.selecionA = sa;
    this.selecionB = sb;
    this.selecionC = sc;
    this.selecionD = sd;
    this.definira  = da;
    this.definirb  = db;
    this.definirc  = dc;
    this.definird  = dd;
    this.pregunta = p;
    ar = this.selecionA;
    br = this.selecionB;
    cr = this.selecionC;
    dr = this.selecionD;
  }
  Contex()
  {
    var resultadoA = document.getElementById("A");
    var resultadoB = document.getElementById("B");
    var resultadoC = document.getElementById("C");
    var resultadoD = document.getElementById("D");

resultadoA.addEventListener("mouseup", calculoa );

resultadoB.addEventListener("mouseup", calculob );

resultadoC.addEventListener("mouseup", calculoc );

resultadoD.addEventListener("mouseup", calculod );

    function calculoa()
    {
     ar = ar - 1;
      console.log("A Escogida");
      calculo2()
    }

    function calculob()
    {
      br = br - 1;
      console.log("B Escogida");
      calculo2()
    }

    function calculoc()
    {
      cr = cr - 1;
      console.log("C Escogida");
      calculo2()
    }

  function calculod()
  {
    dr = dr - 1;
    console.log("D Escogida");
    calculo2()
  }

function calculo2()
  {
   var resultados = 0
   var multi = (ar * br * cr * dr)
console.log(multi);
      if(multi == 1)
      {
        resultados = resultados + 10;
        console.log(resultados);
        console.log("correcto");
        return resultados
      }
      else
      {
        console.log("Incorrecto");
      }
    }
  }

  mostrar()
  {
    hola.innerHTML = "<p>" + this.pregunta + "<br /> <input id=A type=button value=A)></input>  " + this.definira + "<br /><br /> <input id=B type=button value=B)></input>  " + this.definirb + "<br /><br /> <input id=C type=button value=C)  ></input>" + this.definirc + "<br /><br /> <input id=D type=button value=D)  ></input>" + this.definird + "<br />" +"</p>";
  }
}

var preguntas = [];

preguntas.push(new Pregunta(1, 1, 1, 2, "20", "3", "2", "4" ,"Cuantos es 2 + 2"));

for (past of preguntas)
{
 past.mostrar();
 past.Contex();
}
