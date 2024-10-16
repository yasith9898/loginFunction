<?php 



$name = $_POST["n"];
$email = $_POST["e"];
$password = $_POST["p"];

$connection = new mysqli("localhost","root","yasith123","nova1234","3306");

$q = "INSERT INTO `student1` (`name`,`email`,`password`) VALUES 
    ('".$name."','".$email."','".$password."')";

    $connection->query($q);

    echo("sucess");

?>