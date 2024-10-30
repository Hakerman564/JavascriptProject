var aa = document.getElementById('x1');
var bb = document.getElementById('x2');
var cc = document.getElementById('x3');
var boton = document.getElementById("button")
var r1 = document.getElementById('resultado1');
var r2 = document.getElementById('resultado2');
var paso1 = 0;
var paso2 = 0;
var pasoa3 = 0;
var pasob3 = 0;
boton.addEventListener("click" , cal)

function cal()
{
  var a = aa.value;
  var b = bb.value;
  var c = cc.value;
 var z =(b * b) - 4 * a * c;
paso1 =  Math.sqrt(z)
paso2 = a * 2
pasoa3 = (Math.abs(b) + paso1)/ paso2
pasob3 = (Math.abs(b) - paso1)/ paso2
r1.value = pasoa3
r2.value = pasob3 
console.log(pasoa3);
console.log(pasob3);
}
