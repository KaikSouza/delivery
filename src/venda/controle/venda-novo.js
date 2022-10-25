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
                $('#all-produtos').append(`
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" value="${result.idproduto}" id="produto_idproduto" name="produto_idproduto[]">
                    <label class="form-check-label nome_produto">${result.nome}</label>
                </div>
                `)
            }
        }
    })

        $('.novo-venda').attr('data-operation', 'insert')

    })