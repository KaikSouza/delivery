$(document).ready(function(){

    $('#tabela-cliente').on('click', 'button.btn-pedido', function(e){
        e.preventDefault()

    $('#content').empty()

    let ID = `idcliente=${$(this).attr('id')}`

    $.ajax({
        type: 'POST',
        dataType: 'json',
        assync: true,
        data: ID,
        url: 'src/clientes/modelo/cliente-visualizar.php',
        success: function(dado){
            if(dado.tipo == 'success'){
                $('#content').load('src/venda/visao/venda-cadastrar-cliente.html', function(){
                    $('#idcliente').val(dado.dados.idcliente)
                    $('#nome').val(dado.dados.nome)
                    $('#idcliente').attr('readonly', 'true')
                    $('#nome').attr('readonly', 'true')
                })
            }else{
                Swal.fire({
                    title: 'Gerenciamento de Rifas',
                    text: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'OK'
                })
            }
        }
    })
})
})