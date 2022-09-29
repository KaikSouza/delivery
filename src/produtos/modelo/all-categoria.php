<?php

include('../../conexao/conexao.php');

$sql = "SELECT * FROM categoria ORDER BY categoria ASC";

$resultado = $pdo->query($sql);

if($resultado){
    while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
        $dados[] = array_map('utf8_encode', $row);
    }
}

echo json_encode($dados);