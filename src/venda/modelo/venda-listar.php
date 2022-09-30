<?php

include('../../conexao/conexao.php');

  
$requestData = $_REQUEST;
 
$colunas = $requestData['columns'];

$sql = "SELECT v.idvenda, c.nome AS nome_cliente, p.nome AS nome_produto, DATE_FORMAT(v.data_pedido, '%d/%m/%Y') AS pedido_data, DATE_FORMAT(v.data_entrega, '%d/%m/%Y') AS pedido_entrega FROM venda v LEFT JOIN cliente c ON v.cliente_idcliente = c.idcliente LEFT JOIN produto p ON v.produto_idproduto = p.idproduto WHERE 1=1";

  $resultado = $pdo->query($sql);
  $qtdeLinhas = $resultado->rowCount();
  
  
  $filtro = $requestData['search']['value'];
  if( !empty( $filtro ) ){
      
      $sql .= " AND (idvenda LIKE '$filtro%' ";
      $sql .= " OR nome_cliente LIKE '$filtro%' ";
      $sql .= " OR nome_produto LIKE '$filtro%' ";
      $sql .= " OR pedido_data LIKE '$filtro%' ";
      $sql .= " OR pedido_entrega LIKE '$filtro%') ";
  }
  
  
  $resultado = $pdo->query($sql);
  $totalFiltrados = $resultado->rowCount();
  
 
  $colunaOrdem = $requestData['order'][0]['column']; 
  $ordem = $colunas[$colunaOrdem]['data']; 
  $direcao = $requestData['order'][0]['dir']; 
  
  
  $inicio = $requestData['start']; 
  $tamanho = $requestData['length']; 
  
  
  $sql .= " ORDER BY $ordem $direcao LIMIT $inicio, $tamanho ";
  $resultado = $pdo->query($sql);
  $dados = array();
  while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
      $dados[] = array_map('utf8_encode', $row);
  }
  
  $json_data = array(
      "draw" => intval($requestData['draw']),
      "recordsTotal" => intval($qtdeLinhas),
      "recordsFiltered" => intval($totalFiltrados),
      "data" => $dados
  );


  
  echo json_encode($json_data);