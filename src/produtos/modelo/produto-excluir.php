<?php

    include('../../conexao/conexao.php');

    $ID = $_REQUEST['idproduto'];

    $sql = "DELETE FROM produto WHERE idproduto = $ID";

    $resultado = $pdo->query($sql);

    if($resultado){
        $dados = array(
            'tipo' => 'success',
            'mensagem' => 'Registro do produto excluído com sucesso!'
        );
    }else{
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Não foi possível excluir o registro do produto!'
        );
    }

    echo json_encode($dados);