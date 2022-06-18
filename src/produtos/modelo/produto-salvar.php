<?php

//Obter a nossa conexão com o banco de dados
include('../../conexao/conexao.php');

//Obter os dados enviados do formulário via $_REQUEST
$requestData = $_REQUEST;

//Verificação  de campos obrigatórios do formulário
if(empty($requestData['NOME'])){
    //Caso a varável venha vazia do formulário, retornar um erro
    $dados = array(
        "tipo" => 'error',
        "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s)!'
    );
} else {
    //Caso os campos obrigatórios venham preenchidos, iremos realizar o cadastro
    $ID = isset($requestData['ID']) ? $requestData['ID'] : '';
    $operacao = isset($requestdata['operacao']) ? $requestData['operacao'] : '';

    //Verificação para cadastro ou atualização de registro
    if($operacao == 'insert'){
        //Comandos para o INSERT no banco de dados ocorram
        try{
            $stmt = $pdo->prepare('INSERT INTO TIPO (NOME) VALUES (:a)');
            $stmt->execute(array(
                ':a' => utf8_decode($requestData['NOME'])
            ));
            $dados = array(
                "tipo" => 'success',
                "mensagem" => 'Registro salvo com sucesso!'
            );
         } catch(PDOException $e){
            $dados = array(
                "tipo" => 'error',
                "mensagem" => 'Não foi possível salvar o registro: '.$e
            );
         }
    } else{
        //Se a nossa operação vier vazia, iremos realizar um update
        try{
            $stmt = $pdo->prepare('UPDATE TIPO SET NOME = :a WHERE ID = :id');
            $stmt->execute(array(
                ':id' => $ID,
                ':a' => utf8_decode($requestData['NOME'])
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