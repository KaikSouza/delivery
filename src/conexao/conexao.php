<?php 

//CARREGAR AS CREDENCIAIS DO BANCO DE DADOS

$hostname = "sql305.epizy.com";
$database = "epiz_31920114_delivery";
$username = "epiz_31920114";
$password = "9j49EHLcv0DGAS";

try{
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //echo 'Conexão com o banco de dados '.$database. ' foi realizada com sucesso!';
}
catch(PDOException $e){
    echo 'Erro: '.$e->getMessage();
}