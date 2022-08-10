<?php

    include('../../conexao/conexao.php');

    $ID = $_REQUEST['idcliente'];

    $sql = "DELETE FROM cliente WHERE idcliente = $ID";

    $resultado = $pdo->query($sql);

    if($resultado){
        $dados = array(
            'tipo' => 'success',
            'mensagem' => 'Registro do cliente excluído com sucesso!'
        );
    }else{
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Não foi possível excluir o registro do cliente!'
        );
    }

    echo json_encode($dados);