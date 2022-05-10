<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "ConexionBD.php";
$sentencia = $bd->query("select * from usuarios");
$usuarios = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($usuarios);

