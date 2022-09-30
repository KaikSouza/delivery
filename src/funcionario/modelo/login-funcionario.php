<?php

include('../../conexao/conexao.php');

$sql = $pdo->query("SELECT *, count(idfuncionario) as qtde FROM funcionario WHERE login = '".$_REQUEST['login']."' AND senha = '".md5($_REQUEST['senha'])."'");

while($resultado = $sql->fetch(PDO::FETCH_ASSOC)){
    if($resultado ['qtde'] == 1){
        session_start();
        $_SESSION['idfuncionario'] = $resultado['idfuncionario'];
        $dados = array(
            'tipo' => 'success',
            'mensagem' => 'Login efetuado com sucesso!'
        );
    }else{
        $dados = array(
            'tipo' => 'error',
            'mensagem' => 'Credenciais incorretas. Tente novamente!'
        );
    }
}

echo json_encode($dados);

