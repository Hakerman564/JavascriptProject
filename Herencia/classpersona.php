<?php
  class Person{
    public $dpi;
    public $name;
    public $edad;

      function __construct(int $ldpi, string $lname,int $ledad)
      {
        $this->dpi = $ldpi;
        $this->name = $lname;
        $this->edad = $ledad;
      }//end contruction
    public function GetDatosPersonales()
    {
      "
      <h2> Datos Personales</h2>
      DPI: {$this->dpi}<br />
      Nombre: {$this->name}<br />
      Edad: {$this->edad}<br />
      "
    }
  }//end
 ?>
