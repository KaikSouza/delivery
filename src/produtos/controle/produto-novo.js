$(document).ready(function() {

    $.ajax({
        dataType: 'json',
        type: 'POST',
        assync: true,
        url: 'src/produtos/modelo/all-categoria.php',
        success: function(dados){
            for(const result of dados){
                $('#categoria_produto').append(`<option value="${result.idcategoria}">${result.categoria}</option>`)
            }
        }
    })

        $('.novo-produto').attr('data-operation', 'insert')

    })