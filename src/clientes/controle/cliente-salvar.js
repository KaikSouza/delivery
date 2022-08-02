$(document).ready(function(){
   
    $('.novo-cliente').click(function(e){
        e.preventDefault()

        let dados = $('#form-cliente').serialize()

        dados += `&operacao=${$('.novo-cliente').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'JSON',
            assync: true,
            data: dados,
            url: 'src/clientes/modelo/cliente-salvar.php',
            success: function(dados) {
                Swal.fire({
                    icon: dados.tipo,
                    title: dados.mensagem,
                    showConfirmButton: true
                })
            }
        })
    })
})