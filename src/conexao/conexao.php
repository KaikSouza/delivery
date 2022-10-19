<?php
// Carregar as credenciais do banco de dados
    $hostname = "localhost:3307";
    $database = "delivery";
    $user = "root";
    $password = "usbw";

    try{
        $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        // echo 'Conexão com o banco de dados '.$database.', foi realizado com sucesso!';
    } catch (PDOException $e) {
        echo 'ERRO: '.$e->getMessage();
    }