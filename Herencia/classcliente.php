<?php
//  require_once ("classpersona.php");
  class Cliente extends Person
{
  protected $fltSaldo;
  function __construct(int $ldpi, string $lname,int $ledad)
  {
    parent::__construct($ldpi, $lname,$ledad);
  }//the constrution

  public function setsaldo(string $lsaldo)
  {
    $this->fltSaldo = $lsaldo;
  }//the set

  public function getsaldo()//float
  {
    return $this->fltSaldo;
  }//the get
}//the end
 ?>
