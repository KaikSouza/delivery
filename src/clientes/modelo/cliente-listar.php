<?php

//Realizar conexão como banco de dados
include("../../conexao/conexao.php");

//Obter a requisição para a geração da nossa tabela
$requestData = $_REQUEST;

//Obter as colunas que estão sendo requeridas
$colunas = $requestData['colunas'];

//Preparar o comando SQL para obtenção dos registros existentes no banco de dados
$sql = "SELECT idcliente, nome, celular, email FROM cliente WHERE 1=1 ";

//Obter o total de registros exixstentes na tabela do banco de dados
$resultado = $pdo->query($sql);
$qtddeLinhas = $resultado->rowCount();

//Verificar se existe algum filtro determinado pelo usuário
$filtro = $requestData['search']['value'];
if(!empty($filtro)){
    //Montar a expressão lógico em sql para filtrar a nossa tabela
    $sql .= " AND (idcliente LIKE '$filtro%'";
    $sql .= " OR nome LIKE '$filtro%'";
    $sql .= " OR celular LIKE '$filtro%' ";
    $sql .= " OR email LIKE '$filtro%') ";
}

//Obter o total de registros exixstentes na tabela do banco de dados de acordo com o filtro
$resultado = $pdo->query($sql);
$totalFiltrados = $resultado->rowCount();

//Obter o valores para ordenação
$colunaOrdem = $requestData['order'][0]['column'];
$ordem = $colunas[$colunaOrdem]['data'];
$direcao = $requestData['order'][0]['dir'];

//Obter os valores para o LIMIT
$inicio = $requestData['start'];
$tamanho = $requestData['length'];

//Gerando a nossa ordenação na consulta sql
$sql .= "ORDER BY $ordem $direcao LIMIT $inicio, $tamanho";
$dados = array();
while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
    $dados[] = array_map('utf8_encode', $row);
}

//Construir o nosso objeto json no padrão data table
$json_data = array(
    "draw" => intval($requestData['draw']),
    "recordsTotal" => intval($qtddeLinhas),
    "recordsFiltered" => intval($totalFiltrados),
    "data" => $dados
);

echo json_encode($json_data);