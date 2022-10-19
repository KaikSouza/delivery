<?php

//Obter a nossa conexão com o banco de dados
include('../../conexao/conexao.php');

//Obter os dados enviados do formulário via $_REQUEST
$requestData = $_REQUEST;

//Verificação  de campos obrigatórios do formulário
if(empty($requestData['cliente_idcliente']) && empty($requestData['produto_idproduto']) && empty($requestData['datavenda'])){
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
            $stmt = $pdo->prepare('INSERT INTO venda (datavenda) VALUES (:a)');
                $stmt->execute(array(
                    ':a' => $requestData['datavenda'],
                ));
            
                $sql = $pdo->query('SELECT * FROM venda ORDER BY idvenda DESC LIMIT 1');

                while($resultado = $sql->fetch(PDO::FETCH_ASSOC)){
                    $idvenda = $resultado['idvenda'];
                }

            $produtos = count(array_filter($requestData['produto_idproduto']));

            for($i=0; $i < $produtos; $i++) {
                $stmt = $pdo->prepare('INSERT INTO produto_has_cliente (produto_idproduto, cliente_idcliente, venda_idvenda) VALUES (:a, :b, :c)');
                $stmt->execute(array(
                    ':a' => $requestData['produto_idproduto'][$i],
                    ':b' => $requestData['cliente_idcliente'],
                    ':c' => $idvenda,
                ));
            }
            $dados = array(
                "tipo" => 'success',
                "mensagem" => 'Pedido realizado com sucesso!'
            );
         } catch(PDOException $e){
            $dados = array(
                "tipo" => 'error',
                "mensagem" => 'Não foi possível realizar o pedido! Erro: '.$e
            );
         }
    } else{
        //Se a nossa operação vier vazia, iremos realizar um update
        try{
            $stmt = $pdo->prepare('UPDATE venda SET cliente_idcliente = :a WHERE idvenda = :id');
            $stmt->execute(array(
                ':id' => $ID,
                ':a' => $requestData['cliente_idcliente'],
                ':b' => $requestData['produto_idproduto']
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