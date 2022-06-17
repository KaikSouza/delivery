<?php 

//CARREGAR AS CREDENCIAIS DO BANCO DE DADOS

$hostname = "";
$database = "";
$username = "";
$password = "";

try{
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo 'Conexão com o banco de dados '.$database. ' foi realizada com sucesso!';
}
catch(PDOException $e){
    echo 'Erro: '.$e->getMessage();
}