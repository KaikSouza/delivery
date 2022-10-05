<?php
include('../conexao/conexao.php');

 $query_cliente = "SELECT COUNT(idcliente) AS qtd_cliente FROM cliente WHERE 1=1";
 $result_cliente = $pdo->prepare($query_cliente);
 $result_cliente->execute();

 $row_cliente = $result_cliente->fetch(PDO::FETCH_ASSOC);
 $dados[] = array_map('utf8_encode', $row_cliente);

 echo json_encode($dados);