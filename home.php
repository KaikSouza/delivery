<?php
include('src/conexao/conexao.php');
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="img/icone site.png" type="image/x-icon">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="libs/fontawesome/css/all.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="stylecliente.css">
    <link rel="stylesheet" href="styleproduto.css">
    <link rel="stylesheet" href="stylevenda.css">
    <link rel="stylesheet" href="libs/DataTables/datatables.css">
    <link rel="stylesheet" href="libs/DataTables/Buttons/css/buttons.dataTables.css">
    <title>Michelly Presentes</title>
</head>

<body>

    <nav class="navbar navbar-expand-lg fixed-top">
            <img src="img/nav.png" width="150" alt="e-icone">
        <button class="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    <div id="my-nav" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a href="home.php" class="nav-link text-white"><i class="fa-solid fa-chart-line"></i> Dashboard</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="navdropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa-solid fa-plus"></i> Cadastrar</a>
                   <div class="dropdown-menu dropdown-primary" aria-label="navdropdown">
                    <a href="src/clientes/visao/cliente-cadastrar.html" class="dropdown-item"><i class="fa-solid fa-user"></i> Cliente</a>
                    <a href="src/produtos/visao/produto-cadastrar.html" class="dropdown-item"><i class="fa-solid fa-tags"></i> Produto</a>
                    <div class="dropdown-divider"></div>
                    <h2 class="dropdown-header">Pedido</h2>
                    <a href="src/venda/visao/venda-cadastrar.html" class="dropdown-item"><i class="fa-solid fa-user"></i> Realizar pedido</a>
                    <div class="dropdown-divider"></div>
                    <h2 class="dropdown-header">Funcionário</h2>
                    <a href="src/funcionario/visao/funcionario-cadastrar.html" class="dropdown-item"><i class="fa-solid fa-user-tie"></i> Cadastrar funcionário</a>
                   </div>
            </li>
            <li class="nav-item">
                <a href="src/produtos/visao/produtos.html" class="nav-link text-white linknav"><i class="fa-solid fa-tags"></i> Produtos</a>
            </li>
            <li class="nav-item">
                <a href="src/clientes/visao/clientes.html" class="nav-link text-white linknav"><i class="fa-solid fa-users"></i> Clientes</a>
            </li>
            <li class="nav-item">
                <a href="src/venda/visao/venda.html" class="nav-link text-white linknav"><i class="fa-solid fa-receipt"></i> Pedidos</a>
            </li>
        </ul>
        <a class="text-white btn-logout"><i class="fa-solid fa-power-off"></i> Sair</a>
    </div>
</nav>

    <div id="content" class="principal">

        <div class="informacao">

            <div class="card-cliente">
                <img src="https://img.icons8.com/fluency/96/undefined/user-group-man-woman.png"/>
                <div class="quantidade-cliente">
                <span>
                    <?php
                      $query_cliente = "SELECT COUNT(idcliente) AS qtd_cliente FROM cliente where 1=1";
                      $result_cliente = $pdo->prepare($query_cliente);
                      $result_cliente->execute();
                        
                      $row_cliente = $result_cliente->fetch(PDO::FETCH_ASSOC);                      
                      echo $row_cliente['qtd_cliente'];
                    ?>
                    </span>
                </div>
                <div class="texto-cliente">
                    <span>clientes cadastrados</span>
                </div>
            </div>
            <div class="card-produto">
                <img src="https://img.icons8.com/fluency/96/000000/price-tag.png"/>
                <div class="quantidade-produto">
                <span>
                    <?php
                      $query_produto = "SELECT COUNT(idproduto) AS qtd_produto FROM produto where 1=1";
                      $result_produto = $pdo->prepare($query_produto);
                      $result_produto->execute();
                        
                      $row_produto = $result_produto->fetch(PDO::FETCH_ASSOC);                      
                      echo $row_produto['qtd_produto'];
                    ?>
                    </span>
                </div>
                <div class="texto-produto">
                    <span>produtos cadastrados</span>
                </div>
            </div>
            <div class="card-pedido">
                <img src="https://img.icons8.com/fluency/96/000000/in-transit.png"/>
                <div class="quantidade-pedido">
                <span>
                    <?php
                      $query_pedido = "SELECT COUNT(idvenda) AS qtd_pedido FROM venda where 1=1";
                      $result_pedido = $pdo->prepare($query_pedido);
                      $result_pedido->execute();
                        
                      $row_pedido = $result_pedido->fetch(PDO::FETCH_ASSOC);                      
                      echo $row_pedido['qtd_pedido'];
                    ?>
                    </span>
                </div>
                <div class="texto-pedido">
                    <span>pedidos realizados</span>
                </div>
            </div>
            <div class="card-faturamento">
                <img src="https://img.icons8.com/fluency/96/undefined/stocks-growth.png"/>
                <div class="quantidade-faturamento">
                    <span>
                         <?php
                           // $query_pedido = "SELECT SUM(preco) AS precototal_pedidos FROM pedido where 1=1";
                           // $result_pedido = $pdo->prepare($query_pedido);
                           // $result_pedido->execute();
                        
                           // $row_pedido = $result_pedido->fetch(PDO::FETCH_ASSOC);
                            // var_dump($row_fornecedor);
                           // echo 'R$'.$row_pedido['precototal_pedidos'];
                            ?>
                    </span>
                </div>
            </div>
    
        </div>
    </div>

    <script src="js/jquery-3.6.0.js"></script>
    <script src="js/jquery.mask.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="libs/sweetAlert/dist/sweetalert2.all.js"></script>
    <script src="js/menu.js"></script>
    <script src="libs/DataTables/datatables.js"></script>
    <script src="libs/DataTables/Buttons/js/dataTables.buttons.js"></script>
    <script src="libs/DataTables/Buttons/js/buttons.print.js"></script>
    <script src="libs/DataTables/Buttons/js/buttons.html5.js"></script>
    <script src="libs/DataTables/Buttons/js/buttons.dataTables.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script src="libs/DataTables/Buttons/js/buttons.colVis.js"></script>
    <script src="src/funcionario/controle/logout-funcionario.js"></script>
    <!-- <script src="src/funcionario/controle/validar-funcionario.js"></script> -->

</body>

</html>