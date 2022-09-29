<?php 

//incluindo nossa conexão com o banco de dados
include('../../conexao/conexao.php');

//recepção do id a ser buscado no banco 
$ID = $_REQUEST['idproduto'];

//gerar nossa consulta sql no banco de dados
$sql = "SELECT * FROM produto WHERE idproduto = $ID";

//executar a nossa query de consulta ao banco de dados
$resultado = $pdo->query($sql);

//testar nossa consulta ao banco de dados
if($resultado){
    $result = array();
    while($row = $resultado->fetch(PDO::FETCH_ASSOC)){
        $result = array_map('utf8_encode', $row);
    }
    $dados = array(
        'tipo' => 'success',
        'mensagem' => '',
        'dados' => $result
    );
}else{
    $dados = array(
        'tipo' => 'error',
        'mensagem' => 'Não foi possível obter o registro solicitado!',
        'dados' => array()
    );
}

echo json_encode($dados);