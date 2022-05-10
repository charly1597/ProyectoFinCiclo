<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonUsuario = json_decode(file_get_contents("php://input"));
if (!$jsonUsuario) {
    exit("No hay datos");
}
$bd = include_once "ConexionBD.php";
$sentencia = $bd->prepare("insert into datos(localidad, direccion, cp, id_usuario) values (?,?,?,?)");
$resultado = $sentencia->execute([$jsonUsuario->localidad, $jsonUsuario->direccion, $jsonUsuario->cp, $jsonUsuario->id_usuario->id]);
echo json_encode([
    "resultado" => $resultado,
]);

