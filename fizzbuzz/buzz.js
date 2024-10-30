var numero = 100;
var divisible = false;
for(N = 1; N <= 100; N++)
{
  divisible = false;
  if(esdibisible(N,3))
  {
    document.write("Fizz");
  }

  if(esdibisible(N,5))
  {
    document.write("Buzz");
  }

  if(!esdibisible(N,3) && !esdibisible(N,5))
   {
  document.write(N);
   }
   document.write("<br />");
}

function esdibisible(num, divisor)
{
if(num % divisor == 0)
 {
  return true;
 }
 else
 {
  return false;
 }
}
