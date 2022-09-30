<?php

    include('../../conexao/conexao.php');

    $ID = $_REQUEST['idvenda'];

    $sql = "DELETE FROM venda WHERE idvenda = $ID";

    $resultado = $pdo->query($sql);

    if($resultado){
        $dados = array(
            'tipo' => 'success',
            'mensagem' => 'Pedido excluído com sucesso!'
        );
    }else{
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Não foi possível excluir o pedido!'
        );
    }

    echo json_encode($dados);