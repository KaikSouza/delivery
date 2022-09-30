<?php

//Obter a nossa conexão com o banco de dados
include('../../conexao/conexao.php');

//Obter os dados enviados do formulário via $_REQUEST
$requestData = $_REQUEST;

//Verificação  de campos obrigatórios do formulário
if(empty($requestData['cliente_idcliente']) && empty($requestData['produto_idproduto']) && empty($requestData['data_pedido']) && empty($requestData['data_entrega'])){
    //Caso a varável venha vazia do formulário, retornar um erro
    $dados = array(
        "tipo" => 'error',
        "mensagem" => 'Existem campos obrigatórios não preenchidos!'
    );
} else {
    //Caso os campos obrigatórios venham preenchidos, iremos realizar o cadastro
    $ID = isset($requestData['idvenda']) ? $requestData['idvenda'] : '';
    $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

    //Verificação para cadastro ou atualização de registro
    if($operacao == 'insert'){
        //Comandos para o INSERT no banco de dados ocorram
        try{
            $stmt = $pdo->prepare('INSERT INTO venda (cliente_idcliente, produto_idproduto, data_pedido, data_entrega) VALUES (:a, :b, :c, :d)');
            $stmt->execute(array(
                ':a' => $requestData['cliente_idcliente'],
                ':b' => $requestData['produto_idproduto'],
                ':c' => $requestData['data_pedido'],
                ':d' => $requestData['data_entrega']
            ));
            $dados = array(
                "tipo" => 'success',
                "mensagem" => 'Pedido realizado com sucesso!'
            );
         } catch(PDOException $e){
            $dados = array(
                "tipo" => 'error',
                "mensagem" => 'Não foi possível realizar o pedido! Erro:'.$e
            );
         }
    } else{
        //Se a nossa operação vier vazia, iremos realizar um update
        try{
            $stmt = $pdo->prepare('UPDATE pedido SET cliente_idcliente = :a, produto_idproduto = :b, data_pedido = :c, data_entrega = :d WHERE idvenda = :id');
            $stmt->execute(array(
                ':id' => $ID,
                ':a' => $requestData['cliente_idcliente'],
                ':b' => $requestData['produto_idproduto'],
                ':c' => $requestData['data_pedido'],
                ':d' => $requestData['data_entrega']
            ));
            $dados = array(
                "tipo" => 'success',
                "mensagem" => 'Pedido atualizado com sucesso!'
            );
         } catch(PDOException $e){
            $dados = array(
                "tipo" => 'error',
                "mensagem" => 'Não foi possível atualizar o pedido! Erro:'.$e
            );
         }
    }
}

//Converter nosso array de retorno em uma representação JSON
echo json_encode($dados);