<?php

    include('../../conexao/conexao.php');

    $requestData = $_REQUEST;

    if(empty($requestData['login']) && empty($requestData['senha'])){
        $dados = array(
            "tipo" => 'error',
            "mensagem" => 'Existe(m) campo(s) obrigatório(s) não preenchido(s)!'
        );
    }else{
        $ID = isset($requestData['ID']) ? $requestData['ID'] : '';
        $operacao = isset($requestData['operacao']) ? $requestData['operacao'] : '';

        if($operacao == 'insert'){
            try{
                $stmt = $pdo->prepare("INSERT INTO funcionario (login, senha) VALUES (:a, :b)");
                $stmt->execute(array(
                    ':a' => $requestData['login'],
                    ':b' => md5($requestData['senha'])
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Funcionário cadastrado com sucesso!'
                );
            }catch (PDOException $error){
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível realizar o cadastro do funcionário! Erro: '.$error
                );
            }
        }else{
            try{
                $stmt = $pdo->prepare("UPDATE funcionario SET login = :a, senha = :b WHERE  idfuncionario = :id");
                $stmt->execute(array(
                    ':id' => $ID,
                    ':a' => utf8_decode($requestData['login']),
                    ':b' => md5($requestData['senha'])
                ));
                $dados = array(
                    "tipo" => 'success',
                    "mensagem" => 'Funcionário atualizado com sucesso!'
                );
            }catch (PDOException $error){
                $dados = array(
                    "tipo" => 'error',
                    "mensagem" => 'Não foi possível realizar a atualização da funcionário! Erro: '.$error
                );
            }
        }
    }
    echo json_encode($dados);