$(document).ready(function(){

    $('#tabela-cliente').on('click', 'button.btn-editar', function(e){
        e.preventDefault()

         //Limpar todas as informações existentes na nossa modal
         $('.modal-title').empty()
         $('.modal-body').empty()
 
         //Incluir novos textos no cabeçalho da minha janela modal
         $('.modal-title').append('Editar cliente')
 
         let ID = `idcliente=${$(this).attr('id')}`

         $('.btn-salvar').removeAttr('data-operation')

         $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: ID,
            url: 'src/clientes/modelo/cliente-visualizar.php',
            success: function(dado){
                if(dado.tipo == 'success'){
                    $('.modal-body').load('src/clientes/visao/cliente-editar.html', function(){
                        $('#nome').val(dado.dados.nome)
                        $('#celular').val(dado.dados.celular)
                        $('#email').val(dado.dados.email)
                        $('#cep').val(dado.dados.cep)
                        $('#uf').val(dado.dados.uf)
                        $('#cidade').val(dado.dados.cidade)
                        $('#bairro').val(dado.dados.bairro)
                        $('#numero').val(dado.dados.numero)
                        $('#logradouro').val(dado.dados.logradouro)
                        $('#idcliente').val(dado.dados.idcliente)
                    })
                    $('.btn-salvar').show()
                    $('#modal-cliente').modal('show')
                }else{
                    Swal.fire({
                        title: dados.mensagem,
                        icon: dados.tipo,
                        confirmButtonText: 'OK'
                    })
                }
            }
         })
    })
})