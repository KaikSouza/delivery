<?php
// Carregar as credenciais do banco de dados
    $hostname = "sql305.epizy.com";
    $database = "epiz_31920114_delivery";
    $user = "epiz_31920114";
    $password = "9j49EHLcv0DGAS";

    try{
        $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // echo 'Conexão com o banco de dados '.$database.', foi realizado com sucesso!';
    } catch (PDOException $e) {
        echo 'ERRO: '.$e->getMessage();
    }