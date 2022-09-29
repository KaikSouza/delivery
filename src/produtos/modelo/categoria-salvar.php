<?php

    include('../../conexao/conexao.php');

    $requestData = $_REQUEST;

    if(empty($requestData['categoria'])){
        $dados = array(
            "tipo" => 'error',
            "mensagem" => 'Existem campos obrigatórios não preenchidos!'
        );
    }else{
        $ID = isset($requestData['ID']) ? $requestData['ID'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        if($operacao == 'insert'){
            try{
                $stmt = $pdo->prepare("INSERT INTO categoria (categoria) VALUES (:a)");
                $stmt->execute(array(
                    ':a' => utf8_decode($requestData['categoria']),
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Categoria cadastrada com sucesso!'
                );
            }catch (PDOException $error){
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível realizar o cadastro da categoria! Erro: '.$error
                );
            }
        }else{
            try{
                $stmt = $pdo->prepare("UPDATE categoria SET categoria = :a WHERE  idcategoria = :id");
                $stmt->execute(array(
                    ':id' => $ID,
                    ':a' => utf8_decode($requestData['categoria']),
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Categoria atualizada com sucesso!'
                );
            }catch (PDOException $error){
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível realizar a atualização da categoria! Erro: '.$error
                );
            }
        }
    }
    echo json_encode($dados);