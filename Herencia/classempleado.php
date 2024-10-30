<?php
  include "classpersona.php";
  class Empleado extends Person
  {
    protected $Puesto;
    function __construct(int $ldpi, string $lname,int $ledad)
    {
      parent::__construct($ldpi, $lname,$ledad);
    }//the constrution

    public function setpuesto(string $lpuesto)
    {
      $this->Puesto = $lpuesto;
    }//the set

    public function getpuesto()
    {
      return $this->Puesto;
    }//the get
  }//the end
 ?>
