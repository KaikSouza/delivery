<?php

session_start();

if(!isset($_SESSION['idfuncionario'])){
    $dados = array(
        'tipo' => 'error',
        'mensagem' => 'Você não realizou o login no sistema!'
    );
}else{
    $dados = array(
        'tipo' => 'success',
        'mensagem' => 'Seja bem-vindo ao sistema'
    );
}

echo json_encode($dados);