<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonUsuario = json_decode(file_get_contents("php://input"));
$bd = include_once "ConexionBD.php";
$sentencia = $bd->prepare("select * from usuarios where email = ? and password = ?");
$sentencia->execute([$jsonUsuario->email, $jsonUsuario->password]);
$usuario = $sentencia->fetchObject();
echo json_encode($usuario);

