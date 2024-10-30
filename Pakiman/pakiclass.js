// definicion de la classe pakiman
class Pakiman
{
 constructor(n, v, a, ve , t) // cosntructor Es la base para poder programar la class
 {
   this.imagen = new Image();
   this.tipo = t
   this.nombre = n;
   this.vida = v;
   this.ataque = a;
   this.velocidad = ve;

   this.imagen.src = imagenes[this.nombre];
 }

 mostrar() //no es nesesario escribir function dentro de una clase 0 class
 {
  document.write("<p>");
  document.body.appendChild(this.imagen);
  document.write("<strong>" + this.nombre + "</strong><br />");
  document.write("Vida: " + this.vida + "<br />");
  document.write("  Ataque: " + this.ataque + "<br />");
  document.write("  velocidad:  " + this.velocidad + "<strong>mts/s</strong>");
  document.write("</p>");
  document.write("<p>Tipo: " + this.tipo +  "</p>")
  document.write("<hr />")
  document.write("<br />");

 }
}
