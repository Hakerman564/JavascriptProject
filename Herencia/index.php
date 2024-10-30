<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <?php
      include "classpersona.php";
      $objempleado = new Empleado(7818,"Luisa montero",22);

      echo $objempleado->obGetDatosPersonales();
     ?>
  </body>
</html>
