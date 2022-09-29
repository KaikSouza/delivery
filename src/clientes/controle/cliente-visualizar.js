$(document).ready(function(){

    $('#tabela-cliente').on('click', 'button.btn-visualizar', function(e){
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
                    $('#content').load('src/clientes/visao/cliente-visualizar.html', function(){
                        $('#nome').val(dado.dados.nome)
                        $('#celular').val(dado.dados.celular)
                        $('#email').val(dado.dados.email)
                        $('#cep').val(dado.dados.cep)
                        $('#uf').val(dado.dados.uf)
                        $('#cidade').val(dado.dados.cidade)
                        $('#bairro').val(dado.dados.bairro)
                        $('#numero').val(dado.dados.numero)
                        $('#logradouro').val(dado.dados.logradouro)
                        $('#nome').attr('readonly', 'true')
                        $('#celular').attr('readonly', 'true')
                        $('#email').attr('readonly', 'true')
                        $('#cep').attr('readonly', 'true')
                        $('#uf').attr('readonly', 'true')
                        $('#cidade').attr('readonly', 'true')
                        $('#bairro').attr('readonly', 'true')
                        $('#numero').attr('readonly', 'true')
                        $('#logradouro').attr('readonly', 'true')
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