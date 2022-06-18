$(document).ready(function(){
   
        $('.novo-produto').click(function(e){
            e.preventDefault()

            let dados = $('#form-produto').serialize()

            dados += `&operacao=${$('.novo-produto').attr('data-operation')}`

            $.ajax({
                type: 'POST',
                dataType: 'JSON',
                assync: true,
                data: dados,
                url: 'src/produtos/modelo/produto-salvar.php',
                success: function(dados) {

            Swal.fire({
                icon: dados.tipo,
                text: dados.mensagem,
                confirmButtonText: 'OK'
            })
            $('#tabela-produto').DataTable().ajax.reload()
            }
        })
    })
})