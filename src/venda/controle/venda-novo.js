$(document).ready(function() {

    $.ajax({
        dataType: 'json',
        type: 'POST',
        assync: true,
        url: 'src/clientes/modelo/all-cliente.php',
        success: function(dados){
            for(const result of dados){
                $('#cliente_idcliente').append(`<option value="${result.idcliente}">${result.nome}</option>`)
            }
        }
    })

    $.ajax({
        dataType: 'json',
        type: 'POST',
        assync: true,
        url: 'src/produtos/modelo/all-produto.php',
        success: function(dados){
            for(const result of dados){
                $('#produto_idproduto').append(`<option value="${result.idproduto}">${result.nome}</option>`)
            }
        }
    })

        $('.novo-venda').attr('data-operation', 'insert')

    })