$(document).ready(function(){

    $('#tabela-produto').on('click', 'button.btn-visualizar', function(e){
        e.preventDefault()

         $('#content').empty()
 
         let ID = `idproduto=${$(this).attr('id')}`

         $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: ID,
            url: 'src/produtos/modelo/produto-visualizar.php',
            success: function(dado){
                if(dado.tipo == 'success'){
                    $('#content').load('src/produtos/visao/produto-visualizar.html', function(){
                        $('#nome').val(dado.dados.nome)
                        $('#preco').val(dado.dados.preco)
                        $('#nome').attr('readonly', 'true')
                        $('#preco').attr('readonly', 'true')
                        $('#categoria_produto').empty()
                        var ID = dado.dados.categoria_produto
                        $.ajax({
                            dataType: 'json',
                            type: 'POST',
                            assync: true,
                            url: 'src/produtos/modelo/all-categoria.php',
                            success: function(dados){
                                for(const result of dados){
                                    if(ID == result.idproduto){
                                        $('#categoria_produto').append(`<option value="${result.idproduto}" selected disabled>${result.categoria}</option>`)
                                    }
                                }
                            }
                        })
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