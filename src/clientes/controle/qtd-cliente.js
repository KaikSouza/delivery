$(document).ready(function(){

         $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            url: 'src/clientes/modelo/qtd-cliente.php',
            success: function(dado){
                if(dado.tipo == 'success'){
                    $('#content').load(function(){
                        $('.qtd-cliente').val(dado.dados.qtd_cliente)
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