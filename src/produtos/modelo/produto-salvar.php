<?php

//Obter a nossa conexão com o banco de dados
include('../../conexao/conexao.php');

//Obter os dados enviados do formulário via $_REQUEST
$requestData = $_REQUEST;

//Verificação  de campos obrigatórios do formulário
if(empty($requestData['nome']) && empty($requestData['preco']) && empty($requestData['categoria'])){
    //Caso a varável venha vazia do formulário, retornar um erro
    $dados = array(
        "tipo" => 'error',
        "mensagem" => 'Existem campos obrigatórios não preenchidos!'
    );
} else {
    //Caso os campos obrigatórios venham preenchidos, iremos realizar o cadastro
    $ID = isset($requestData['ID']) ? $requestData['ID'] : '';
    $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

    //Verificação para cadastro ou atualização de registro
    if($operacao == 'insert'){
        //Comandos para o INSERT no banco de dados ocorram
        try{
            $stmt = $pdo->prepare('INSERT INTO produto (nome, preco, categoria_idcategoria) VALUES (:a, :b, :c)');
            $stmt->execute(array(
                ':a' => utf8_decode($requestData['nome']),
                ':b' => $requestData['preco'],
                ':c' => $requestData['categoria_idcategoria']
            ));
            $dados = array(
                "tipo" => 'success',
                "mensagem" => 'Produto cadastrado com sucesso!'
            );
         } catch(PDOException $e){
            $dados = array(
                "tipo" => 'error',
                "mensagem" => 'Não foi possível cadastrar o produto! Erro:'.$e
            );
         }
    } else{
        //Se a nossa operação vier vazia, iremos realizar um update
        try{
            $stmt = $pdo->prepare('UPDATE produto SET nome = :a, preco = :b, categoria = :c WHERE idproduto = :id');
            $stmt->execute(array(
                ':id' => $ID,
                ':a' => utf8_decode($requestData['nome']),
                ':b' => $requestData['preco'],
                ':c' => $requestData['categoria_idcategoria']
            ));
            $dados = array(
                "tipo" => 'success',
                "mensagem" => 'Produto atualizado com sucesso!'
            );
         } catch(PDOException $e){
            $dados = array(
                "tipo" => 'error',
                "mensagem" => 'Não foi possível atualizar o produto! Erro:'.$e
            );
         }
    }
}

//Converter nosso array de retorno em uma representação JSON
echo json_encode($dados);