<?php

session_start();

session_destroy();

$dados = array(
    'tipo' => 'success',
    "mensagem" => 'Sessão encerrada com sucesso!'
);

echo json_encode($dados);