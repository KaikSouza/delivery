<?php

//Obter a nossa conexão com o banco de dados
include('../../conexao/conexao.php');
//Obter os dados enviados do formulário via $_REQUEST
$requestData = $_REQUEST;

//Verificação  de campos obrigatórios do formulário
if(empty($requestData['nome']) && empty($requestData['celular']) && empty($requestData['email']) 
&& empty($requestData['cep']) && empty($requestData['uf']) && empty($requestData['cidade']) && empty($requestData['logradouro']) && empty($requestData['bairro']) 
&& empty($requestData['numero'])){
    //Caso a variável venha vazia do formulário, retornar um erro
    $dados = array(
        "tipo" => 'error',
        "mensagem" => 'Existem campos obrigatórios não preenchidos!'
    );
} else {
    //Caso os campos obrigatórios venham preenchidos, iremos realizar o cadastro
    $ID = isset($requestData['idcliente']) ? $requestData['idcliente'] : '';
    $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

    //Verificação para cadastro ou atualização de registro
    if($operacao == 'insert'){
        //Comandos para o INSERT no banco de dados ocorram
        try{
            $stmt = $pdo->prepare('INSERT INTO cliente (nome, celular, email, cep, uf, cidade, logradouro, bairro, numero) VALUES (:a, :b, :c, :d, :e, :f, :g, :h, :i)');
            $stmt->execute(array(
                ':a' => utf8_decode($requestData['nome']),
                ':b' => $requestData['celular'],
                ':c' => $requestData['email'],
                ':d' => $requestData['cep'],
                ':e' => $requestData['uf'],
                ':f' => utf8_decode($requestData['cidade']),
                ':g' => utf8_decode($requestData['logradouro']),
                ':h' => utf8_decode($requestData['bairro']),
                ':i' => $requestData['numero']
            ));
            $dados = array(
                "tipo" => 'success',
                "mensagem" => 'Cliente cadastrado com sucesso!'
            );
         } catch(PDOException $e){
            $dados = array(
                "tipo" => 'error',
                "mensagem" => 'Não foi possível cadastrar o cliente. Erro:'.$e
            );
         }
    } else{
        //Se a nossa operação vier vazia, iremos realizar um update
        try{
            $stmt = $pdo->prepare('UPDATE cliente SET nome = :a, celular = :b, email = :c, cep = :d, uf = :e, cidade = :f, logradouro = :g, bairro = :h, numero = :i WHERE idcliente = :id');
            $stmt->execute(array(
                ':id' => $ID,
                ':a' => utf8_decode($requestData['nome']),
                ':b' => $requestData['celular'],
                ':c' => $requestData['email'],
                ':d' => $requestData['cep'],
                ':e' => $requestData['uf'],
                ':f' => utf8_decode($requestData['cidade']),
                ':g' => utf8_decode($requestData['logradouro']),
                ':h' => utf8_decode($requestData['bairro']),
                ':i' => $requestData['numero']
            ));
            $dados = array(
                "tipo" => 'success',
                "mensagem" => 'Atualizado com sucesso!'
            );
         } catch(PDOException $e){
            $dados = array(
                "tipo" => 'error',
                "mensagem" => 'Não foi possível atualizar o registro: '.$e
            );
         }
    }
}

//Converter nosso array de retorno em uma representação JSON
echo json_encode($dados);