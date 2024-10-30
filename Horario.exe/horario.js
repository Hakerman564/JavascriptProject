class Tarea
{
  constructor(t, pr, d, tl, te, tr, tn, tns, tc, c)
  {
    this.tarea = t;
    this.probablidad = pr;
    this.descripcion = d;
    this.legen = tl;
    this.epic = te;
    this.raro = tr;
    this.normi = tn;
    this.snormi = tns;
    this.castigo = tc;
    this.cantidad = c;
  }
}

var atras = document.getElementById("quitar")
var pot = document.getElementById("canvat");
var reloja = pot.getContext("2d");
var pot2 = document.getElementById("canvar");
var reloja2 = pot2.getContext("2d");
var up = 0;
var comienzo = document.getElementById("go");
var hora = document.getElementById("tiempo");
var borrar = document.getElementById("reset");
var aa = document.getElementById("a");
var ee = document.getElementById("b");
var ii = document.getElementById("c");
var oo = document.getElementById("d");
var uu = document.getElementById("e");
var bb = document.getElementById("f");
var y = 0;
var h = 0 ;
var k = 0;
var hora1;
var horaz;
var minutoz;
var cronomt = 0;
var timeptotal = 480;
var familia = 0;
var fa
var entretenimiento = [];
entretenimiento.push(new Tarea("<p>hora del minecraft</p>", 7, "tienes la oportunidad de ugar minecraft por x minutos disfrutalo mientras puedas",120 ,60 ,40 ,25 , 15, 2, 5));
entretenimiento.push(new Tarea("<p>roblox te espera</p>", 10,"hora de propinar uno siertos tiros en tu juego faborito",150 ,75 ,45 ,30 , 15, 5, 5));
entretenimiento.push(new Tarea("<p>Age of civiiztion</p>", 3,"hora de probocar una guerra mundial y destruir todo a su paso",180 ,90 ,50 ,35 ,20, 10, 2));
entretenimiento.push(new Tarea("<p>NINTENDO 64</p>",5 ,"hora de un ciclo de juego entretienete en esto x minutos",60 ,40 ,25 ,15 , 10, 5, 2));
entretenimiento.push(new Tarea("<p>Pokemmo</p>",15 ,"Atrapalos a todos mira y no te pases del tiempo tienes x minutos",90 ,75 ,60 ,45 , 30, 5, 5));
entretenimiento.push(new Tarea("<p>Juegos In-online</p>", 10, "Juega caulquier juegos que puedas enctontrar en una pagina de internet recuerda que solo tienes x minutos",60 ,45 ,25 ,15 , 5, 1, 10));
entretenimiento.push(new Tarea("<p>mobil o table</p>", 10, "Puedes entrar a Facebook, Youtube, Instragam entre otras alimañas",180 ,150 ,70 ,45 , 20, 10, 5));
entretenimiento.push(new Tarea("<p>Mobil o table game</p>", 7,"Puedes jugar Cualquier juego de movil dsfruta tus x minutos de juego",90 ,75 ,50 ,25 , 5, 1, 5));
entretenimiento.push(new Tarea("<p>San Adrea</p>",3, "Como su nombre lo aplica puedes jugar Gta San adrea por x tiempo" ,60 ,45 ,30 ,15 , 10, 5, 5));
entretenimiento.push(new Tarea("<p>Hora de pelicula</p>", 10,"puede ver un pelicula eligue la pelicula con sabiduria tienes promedio tun tiempo entre x y x minutos",270 ,180 ,120 ,90 , 45, 15, 5));
entretenimiento.push(new Tarea("<p>TV Time</p>",15,"Que la flojera se apodere de ti Disfruta de un momento de fojera y ve television" ,180 ,120 ,60 ,30 , 20, 11, 5));
entretenimiento.push(new Tarea("<p>Ganmo manzo</p>", 5, "es hora de mostra le a la nutria quien manda",120 ,80 ,40 ,20 , 15, 5, 1));


var estudio = [];
estudio.push(new Tarea("<p>Baken time</p>", 10, "hora de estudiar bakeind entrena tu mente y mejora",10 ,20 ,30 ,60 ,90, 120, 1));
estudio.push(new Tarea("<p>fronter time</p>", 15,"Hora de perfecionar tu modo frotent y pasarlo a un nuevo Nivel",5 ,15 ,25 ,50 , 60, 180, 1));
estudio.push(new Tarea("<p>Mejora tu programacion</p>",15,  "puede estudiar programacion basica o javascript definitivo no tiene que ser las dos juntas",5 ,15 ,25 ,45 , 60, 120, 3));
estudio.push(new Tarea("<p>Itcs</p>",30 ,"reservado para estudios, presentaciones ect",95 ,100 ,110 ,300 , 330, 360, 1));
estudio.push(new Tarea("<p>lectura Especializada</p>",10, "relajate y lee algun artculo cientifico",10 ,20 ,30 ,45 , 60, 90, 2));
estudio.push(new Tarea("<p>lectura General</p>",5 ,"Lee cualquier libro que quieres no importa de que lo importante es leer",2 ,10 ,20 ,30 ,45, 60, 1));
estudio.push(new Tarea("<p>PintaMania</p>",15 ,"que empiesen tus dias como pintor profesional",20 ,25 ,30 ,40 , 60, 90, 1));


var limpieza = [];
limpieza.push(new Tarea("<p>Trapear Total</p>", 10, "te toca trapiar toda la casa por x tiempo parte de la casa recuerda que debes barrer primero",85 ,70 ,40 ,45, 60, 30, 1));
limpieza.push(new Tarea("<p>Fregar</p>", 10, "Frega todo los traste limpia la losa y la estufa",120 ,90 ,85 ,65 , 45, 30, 1));
limpieza.push(new Tarea("<p>barrer 1/2 </p>", 5, "te toca barrer x parte en x tiempo de la casa",90 ,60 ,45 ,30, 20, 15, 1));
limpieza.push(new Tarea("<p>barrer 1/3 </p>", 4, "te toca barrer x parte en x tiempo de la casa",85 ,60 ,45 ,30, 20, 10, 1));
limpieza.push(new Tarea("<p>barrer 1/6 </p>", 1, "te toca barrer x parte en x tiempo de la casa",40 ,30 ,20 ,15, 10, 3, 1));
limpieza.push(new Tarea("<p>barrer Total</p>", 10, "te toca barrer x parte en x tiempo de la casa",110 ,85 ,60 ,45, 30, 20, 1));
limpieza.push(new Tarea("<p>recoger Total</p>", 10,"recoge la casa total mente si dejar rastro de desolden",90 ,75 ,60 ,45 ,30, 20, 1));
limpieza.push(new Tarea("<p>recoger 1/2 </p>", 5,"recoger x parte en x tiempo de la casa",90 ,75 ,40 ,25 , 15, 10, 1));
limpieza.push(new Tarea("<p>recoger 1/3 </p>", 4,"recoger x parte en x tiempo de la casa",80 ,50 ,35 ,20, 10, 5, 1));
limpieza.push(new Tarea("<p>recoger 1/6 </p>", 1,"recoger x parte en x tiempo de la casa",60 ,30 ,23 ,15 , 8, 3, 1));
limpieza.push(new Tarea("<p>limpiesa de ventanas</p>", 4, "Tendras el objectivo de haciar todas las ventanas",120 ,100 ,80 ,60 , 45, 35, 1));
limpieza.push(new Tarea("<p>lava la ropa</p>", 3,"tiempo guardado para lavar la ropa",360 ,300 ,300 ,240 , 180, 60, 1));
limpieza.push(new Tarea("<p>lavar sabanas y corchas</p>", 5,"lava las sabanas y tuallas de tu habitacion",75 ,60 ,45 ,35 , 25, 20, 1));
limpieza.push(new Tarea("<p>Paredes New</p>", 5,"lava las paredes de una habitacion",240 ,180 ,150 ,120 , 80, 45, 1));
limpieza.push(new Tarea("<p>Pateo</p>", 2,"lava y hacea el patio y extirpar los olores malos",120 ,90 ,75 ,45 , 40, 30, 1));
limpieza.push(new Tarea("<p>limpiea de baño ultra</p>", 2,"limpieza extrema del baño Objectivo dejar el lavamanos, inidorso y losetas relucientes, botar todo lo inesesario",180 ,150 ,120 ,90 , 65, 40, 1));
limpieza.push(new Tarea("<p>limpieza de la cocina ultra</p>", 3, "limpiar cada centimetro de la cocina Objectivo: Fregar, ordenar los utencilios barrer y trapero darle un buen olor y nevera limpia",200 ,180 ,150 ,120 , 110, 65, 1));
limpieza.push(new Tarea("<p>Carzado</p>", 5,"lavar los sapato o tenis , almenos lava 2 o 3 pares de zapatos de tu hermano tuyos o de tu papa",60 ,50 ,45 ,35 , 20, 10, 1));
limpieza.push(new Tarea("<p>duchate</p>", 3,"bañate en a ducha hasta sentirte limpio",10 ,9 ,8 ,5 , 5, 0, 3));
limpieza.push(new Tarea("<p>sepillate</p>", 3,"lavate los dientes hasta sentirlos relucientes",5 ,3 ,3 ,3 , 3, 3, 5));
limpieza.push(new Tarea("<p>trata tu cabello y tu rostro</p>", 5,  "el titulo lo dice todo no tienes que estar obligado a hacer las dos",20 ,15 ,10 ,10 , 5, 2, 5));



var ejercicio = [];
ejercicio.push(new Tarea("<p>3 Palos</p>", 15, "Empieza con una sesion sensilla, 10 adominales, 10 santadillas y 10 pechadas con el tiempo esta cifra aumentara",75 ,60 ,45 ,30 , 15, 1, 1));
ejercicio.push(new Tarea("<p>Jercicio de Extiramiento</p>", 25,  "Comienza tu ciclo de extiraminto basico",60 ,45 ,40 ,20 , 17, 1, 1));
ejercicio.push(new Tarea("<p>PVp</p>", 10,  "que empiese tu entrenamiento cuelpo a cuelpo",80 ,65 ,60 ,45 , 30, 1, 1));
ejercicio.push(new Tarea("<p>Kegel</p>", 15,  "Cominza con tu ejercicios de kegel para aumentar tu resistencia",60 ,50 ,40 ,30 , 20, 10, 1));
ejercicio.push(new Tarea("<p>Trotar suave</p>", 20, "sal a corre y completa 4 vueltas al parque",150 ,120 ,90 ,60 , 30, 1, 1));
ejercicio.push(new Tarea("<p>trote intensivo</p>", 10, "sal a corre con trotes y sprines momentanio para mejorar tu resistencia",75 ,60 ,45 ,30 , 15, 1, 1));


var estrabagante = [];
estrabagante.push(new Tarea("<p>aplaudir</p>", 5,"aplaude sin cansarte por x minutos",5 ,4 ,3 ,2 , 1, 0, 10));
estrabagante.push(new Tarea("<p>2 ganzoladas</p>", 5,"tiene que hacerte dos ganzoladas en un limite de tiempo",120 ,90 ,60 ,30 , 15, 0, 1));
estrabagante.push(new Tarea("<p>No Parpades</p>", 5,"tienes que evitar parpadir por x tiempor",0 ,0 ,0 ,2 , 1, 5, 15));
estrabagante.push(new Tarea("<p>Frozen</p>", 5,"No te puedes mover hasta que el tiempo limte termine",1 ,3 ,5 ,10 , 15, 30, 3));
estrabagante.push(new Tarea("<p>ve al inodoro</p>", 5,"sientate en el trono sin  aunque no tengas ganas de evacuar",1 ,2 ,5 ,8 , 10, 20, 5));
estrabagante.push(new Tarea("<p>dormir</p>", 5,"duerme por x tiempo ve a gozar bago dormilon",120 ,60 ,30 ,20 , 15, 0, 2));
estrabagante.push(new Tarea("<p>salir a respirar</p>", 5,"es bueno aveces salir a la superficie a consumir sol y oxigeno en buen estado",20 ,15 ,18 ,10 , 8, 0, 5));
estrabagante.push(new Tarea("<p>apagar todo</p>", 5,"medida extrañas lleva a mentalidad extraña",1 ,1 ,1 ,1 , 1, 1, 3));
estrabagante.push(new Tarea("<p>beber agua</p>", 5,"250mililitros para ser exato ten cuidado es muy difisil",1 ,1 ,1 ,1 , 1, 1, 5));
estrabagante.push(new Tarea("<p>Duchate :V </p>", 5,"._. No pregutes solo aslo",20 ,20 ,10 ,5 , 5, 0, 4));
estrabagante.push(new Tarea("<p>escribe una hermosa historia</p>", 5,"tu objectivo de vida es ser admirador este es el primer paso",45 ,40 ,35 ,30 , 20, 0, 1));
estrabagante.push(new Tarea("<p>sientate</p>", 5,"ve a sentarte en una silla y no te levantes hasta que acabe el tiempo",1 ,3 ,5 ,8 , 15, 30, 4));
estrabagante.push(new Tarea("<p>Ganzito</p>", 5,"una galada de ganzo con la mente",40 ,35 ,25 ,20 , 15, 0, 1));
estrabagante.push(new Tarea("<p>acouestate</p>", 5,"duerme temporlmente y disfrtuta de la bagancia",180 ,120 ,60 ,30 , 15, 0, 1));
estrabagante.push(new Tarea("<p>come</p>", 5,"siente te libre de comerte algo",10 ,10 ,10 ,10 , 10, 10, 6));
estrabagante.push(new Tarea("<p>pega lo todo</p>", 5,"Compra pegamento y paga lo que sea pegable a la parede",25 ,20 ,15 ,10 , 5, 0, 3));
estrabagante.push(new Tarea("<p>compra y venta</p>", 5,"Ve al cormado u compra algo aslo rapido se los quiere de este lado",15 ,10 ,8 ,7 , 6, 0, 3));
estrabagante.push(new Tarea("<p>El yo</p>", 5,"medita y respira por x tiempo ayuda a tus pulmones tus huesos y tus musculos",8 ,7 ,20 ,15 , 10,0, 4));
estrabagante.push(new Tarea("<p>Intentalo de nuevo</p>", 5,"Error Fatal 002 Intentalo otra ves seguro funcona",0 ,0 ,0 ,0 , 0,0, 4));
estrabagante.push(new Tarea("<p>rascate la esparda</p>", 5,"rascate al espalda hasta que termine el tiempo",0 ,0 ,0 ,1 , 2,10, 4));


cuadro(reloja);
cuadro(reloja2);

var momentoactual;
var Nreloj;


function Goreloj()
{
  momentoactual  =  new Date();
   var hora = momentoactual.getHours();
   var minuto = momentoactual.getMinutes();
   var segundo = momentoactual.getSeconds();
  Nreloj = hora + ":" + minuto  +":" + segundo
  document.form_reloj.reloj.value = Nreloj;
  setTimeout("Goreloj()",1000)
}





var tipotiempo;

atras.addEventListener("click", quitarz);
borrar.addEventListener("click", borra);
comienzo.addEventListener("click", pis);

function pis()
{
  while (cronomt < 841)
  {
    if (aa.checked == true)
    {
      familia = 1
    }
    else if (ee.checked == true)
    {
      familia = 2
    }
    else if (ii.checked == true)
    {
      familia = 3
    }
    else if (oo.checked == true)
    {
      familia = 4
    }
    else if (uu.checked == true)
    {
      familia = 5
    }
    else if (bb.checked == true)
    {
      familia = 6
    }

    pis0();
    console.log(cronomt);
  }
}

function pis0 ()
{

  var tarea;
  if (familia == 1)
  {
    Creadordetareas(entretenimiento);
  }

    else if (familia == 2)
    {
      Creadordetareas(estudio);
    }

    if (familia == 3)
    {
      Creadordetareas(limpieza);
    }

    if (familia == 4)
    {
      Creadordetareas(ejercicio);
    }

    else if (familia == 5)
    {
      Creadordetareas(estrabagante);
    }
    else if (familia == 6)
    {
      var pon = 0
      pon = aleatorio(1, 100)
      if (pon >=1 && pon <=20 ) //20%
      {
        familia = 1;
        pis0();
      }
      else if (pon >=21 && pon <=56 ) //35%
      {
        familia = 2;
        pis0();
      }
      else if (pon >=57 && pon <=82 )//25%
      {
        familia = 3;
        pis0();
      }
      else if (pon >=83 && pon <=96 )//15%
      {
        familia = 4;
        pis0();
      }
      else if (pon >=97 && pon <=100 )//5%
      {
        familia = 5;
        pis0();
      }

    }
    return y = 0;
  }




function pis2()
{
  var v = 1000;
  var l = 0;
  var e = 0;
  var r = 0;
  var no = 0;
  var sn = 0;
  var cs = 0;
  var a = 0;
  console.log("s");
for (var i = 0; i < v; i++)
  {
    var tips = aleatorio(1, 100);
    var tipo;
    if (tips >= 1 ,tips <=2)
    {
      tipo = "legend";
      //realsados.innerHTML += "<p class=legend >legendario</p>"
      l += 1;
    }
    else if (tips >= 3 ,tips <=8)
    {
      tipo = "epic";
      //realsados.innerHTML += "<p class=epic >epico</p>"
      e += 1;
    }
    else if (tips >= 9 ,tips <=18)
    {
      tipo = "raro";
    //  realsados.innerHTML += "<p class=raro >Rarisimo</p>"
      r += 1;
    }
    else if (tips >= 19 ,tips <=78)
    {
      tipo = "normal";
      //realsados.innerHTML += "<p class=normal >normal</p>"
      no += 1;
    }
    else if (tips >= 79 ,tips <=96)
    {
      tipo = "supernormal";
      //realsados.innerHTML += "<p class=supernormal >S-normal</p>"
      sn += 1;
    }
    else if (tips >= 97 ,tips <=100)
    {
      tipo = "castigo";
      //realsados.innerHTML += "<p class=castigo >Castigo</p>"
      cs += 1;
    }
    a += 1
  }
    var dl = (100 * l) / v
    var de = (100 * e) / v
    var dr = (100 * r) / v
    var dno = (100 * no) / v
    var dsn = (100 * sn) / v
    var dcs = (100 * cs) / v

  realsados.innerHTML += "<p class=legend >Legendarios = ["+ l +"] porciento =%"+ dl +" </p><p class=epic >Epicos = ["+ e +"] porciento =%"+ de +" </p><p class=raro >Raros = ["+ r +"] porciento =%"+ dr +" </p><p class=normal >Normales = ["+ no +"] porciento =%"+ dno +" </p><p class=supernormal >SNormis = ["+ sn +"] porciento =%"+ dsn +" </p><p class=castigo >Castigos = ["+ cs +"] porciento =%"+ dcs +" </p><hr />"
    console.log(a);
}


function pis3()
  {
    var pon = 0;
    var a = 0 ;
    var b = 0 ;
    var v = 50
    for (var i = 0; i < v; i++)
      {
        pon = aleatorio(1, 100);
        //console.log(pon);
        if (pon >= 1 && pon <= 80)
          {
            //console.log("A");
            //realsados.innerHTML += "<p>1</p>"
            a += 1
          }
        else if ((pon >= 81) && (pon <= 100))
          {
          //  console.log("B");
          //  realsados.innerHTML += "<p>2</p>"
            b += 1
          }
        }
        console.log(a + "A");
        console.log(b + "B");
        var az = (100 * a) / v
        var zb = (100 * b) / v
        console.log("a" + az + "%   " + "b" + zb +"%");
    }

    function pis4()
      {
        console.clear()
        var pon = 0;
        var a = 0 ;
        var b = 0 ;
        var c = 0 ;
        var d = 0 ;
        var e = 0 ;
        var f = 0 ;
        var g = 0 ;
        var h = 0 ;
        var ix = 0 ;
        var j = 0 ;
        var v = 1000;
        for (var i = 0; i < v; i++)
          {
            pon = aleatorio(1, 10);
            //console.log(pon);
            if (pon == 1)
            {
              a += 1;
            }
            if (pon == 2)
            {
              b += 1;
            }
            if (pon == 3)
            {
              c += 1;
            }
            if (pon == 4)
            {
              d += 1;
            }
            if (pon == 5)
            {
              e += 1;
            }
            if (pon == 6)
            {
              f += 1;
            }
            if (pon == 7)
            {
              g += 1;
            }
            if (pon == 8)
            {
              h += 1;
            }
            if (pon == 9)
            {
              ix += 1;
            }
            if (pon == 10)
            {
              j += 1;
            }
          }
            console.log(a + "=A|1");
            console.log(b + "=B|2");
            console.log(c + "=C|3");
            console.log(d + "=D|4");
            console.log(e + "=E|5");
            console.log(f + "=F|6");
            console.log(g + "=G|7");
            console.log(h + "=H|8");
            console.log(ix+ "=I|9");
            console.log(j + "=J|10");
            var az = (100 * a) / v
            var bz = (100 * b) / v
            var cz = (100 * c) / v
            var dz = (100 * d) / v
            var ez = (100 * e) / v
            var fz = (100 * f) / v
            var gz = (100 * g) / v
            var hz = (100 * h) / v
            var iz = (100 * ix) / v
            var jz = (100 * j) / v
            console.log("1|" + az + "%   " + "2|" + bz +"%   " + "3|" + cz + "%   " + "4|" + dz + "%   " + "5|" + ez + "%   " + "6|" + fz + "%   " + "7|" + gz + "%   " + "8|" + hz + "%   " + "9|" + iz + "%   " + "10|" + jz +"%");
        }

        function aleatorio(min, max)
          {
            var resultado
            resultado = Math.floor((Math.random() * (max - min + 1)) + min);
            return resultado
          }

          function tipos()
        {
          var tips = aleatorio(1, 100);
          //console.log(tips);
          if (tips >= 41 && tips <=44)
          {
            tipo2 = "legend";
            tipotiempo = x.legen;
            //realsados.innerHTML += "<p class=legend >legendario</p>"
          }
          else if (tips >= 45 &&  tips <=52)
          {
            tipo2 = "epic";
            tipotiempo = x.epic;
            //realsados.innerHTML += "<p class=epic >epico</p>"
          }
          else if (tips >= 1 && tips <=18)
          {
            tipo2 = "raro";
            tipotiempo = x.raro;
          //  realsados.innerHTML += "<p class=raro >Rarisimo</p>"
          }
          else if (tips >= 53 && tips <=96)
          {
            tipo2 = "normal";
            tipotiempo = x.normi;
            //realsados.innerHTML += "<p class=normal >normal</p>"
          }
          else if (tips >= 19 && tips <=40)
          {
            tipo2 = "supernormal";
            tipotiempo = x.snormi;
            //realsados.innerHTML += "<p class=supernormal >S-normal</p>"
          }
          else if (tips >= 97 && tips <=100)
          {
            tipo2 = "castigo";
            tipotiempo = x.castigo;
            //realsados.innerHTML += "<p class=castigo >Castigo</p>"
          }
        }

function completo()
{
  horaz = Math.trunc(timeptotal/ 60);
  minutoz = timeptotal % 60
  hora1 = horaz + ":" + minutoz;
  llenar();
  des.innerHTML = x.descripcion
  realsados.innerHTML += "<p class=" + tipo2 +" >tipo /" + tipo2 + "/ tarea /"+ x.tarea +"/ tiempo /" + tipotiempo + "/ minutos </p><p> Familia > " + fa + "  "+hora1 + "</p> <hr />"
}

function Creadordetareas(lista)
{
  var pon = 0
  pon = aleatorio(1, 100)
  var n = 0
  for (x of lista)
    {
    var yy = 0;
    var m = 0;
    m = y + 1;
    yy = m + x.probablidad - 1;
    y = yy;
    n += 1;
    if (pon >= m && pon <= yy && x.cantidad > 0)
      {
        var tipo2;
        tipos();
        familia2();
        completo();
        x.cantidad = x.cantidad - 1
      }
    }
}

function llenar()
{
  var como = tipotiempo;
  if (como >= 1 && como < 3 )
  {
   como = 4;
  }

  k = h;
  h += como;

if (h >= 840)
{
tipotiempo = h - 840;
 up += 1;
}

 if (up == 2)
 {
   linear("#e7e7e7", 0, 15, 840, 15, reloja, 25);
   linear("#e7e7e7", 0, 15, 840, 15, reloja2, 25);
   h = 0;
   k = 0;
   up = 0;
 }

  if (familia == 1)
  {
    linear("#A54545", k, 15, h, 15, reloja, 25);
  }
  else if (familia == 2)
  {
    linear("#4577A5", k, 15, h, 15, reloja, 25);
  }
  else if (familia == 3)
  {
    linear("#F05594", k, 15, h, 15, reloja, 25);
  }
  else if (familia == 4)
  {
    linear("#C1F04E", k, 15, h, 15, reloja, 25);
  }
  else if (familia == 5)
  {
    linear("#F0C855", k, 15, h, 15, reloja, 25);
  }

  if (tipo2 == "legend")
  {
    linear("#F7ED24", k, 15, h, 15, reloja2, 25);
  }
  else if (tipo2 == "epic")
  {
    linear("#DD30EB", k, 15, h, 15, reloja2, 25);
  }
  else if (tipo2 == "raro")
  {
    linear("#F8BB0A", k, 15, h, 15, reloja2, 25);
  }
  else if (tipo2 == "normal")
  {
    linear("#63AF1F", k, 15, h, 15, reloja2, 25);
  }
  else if (tipo2 == "supernormal")
  {
    linear("#E3F570", k, 15, h, 15, reloja2, 25);
  }
  else if (tipo2 == "castigo")
  {
    linear("#E34419", k, 15, h, 15, reloja2, 25);
  }
 cronomt = cronomt + tipotiempo;
 timeptotal = timeptotal + tipotiempo;
}


function quitarz()
{
  if (h >= 1)
  {
    linear("#e7e7e7", k, 15, h, 15, reloja, 25);
    linear("#e7e7e7", k, 15, h, 15, reloja2, 25);
    h =  h - tipotiempo;
    k =  h;
    cuadro(reloja);
    cuadro(reloja2);
  }
}

function borra()
{
  if (h >= 1)
  {
    linear("#e7e7e7", 0, 15, 700, 15, reloja, 25);
    linear("#e7e7e7", 0, 15, 700, 15, reloja2, 25);
    h = 0;
    k = 0;
    cuadro(reloja);
    cuadro(reloja2);
    realsados.innerHTML = "<p></p>"
  }
}

function cuadro(canva)
{
  linear("#e7e7e7", 0, 15, 700, 15, reloja, 25);
  linear("#e7e7e7", 0, 15, 700, 15, reloja2, 25);
}


function familia2()
  {
    if (familia == 1)
    {
      fa ="Entreteimiento"
    }
    else if (familia == 2)
    {
      fa = "Estudio"
    }
    else if (familia == 3)
    {
      fa = "Limpieza"
    }
    else if (familia == 4)
    {
      fa = "ejercicio"
    }
    else if (familia == 5)
    {
      fa = "Extrabagantes"
    }

  }


function linear(color, Ix, Iy, Fx, Fy, lienzo, pincel)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = pincel;
  lienzo.moveTo(Ix, Iy);
  lienzo.lineTo(Fx, Fy);
  lienzo.stroke();
  lienzo.closePath();
}
