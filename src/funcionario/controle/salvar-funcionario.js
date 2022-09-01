$(document).ready(function(){

    $('.novo-funcionario').click(function(e){
        e.preventDefault()

        let dados = $('#form-funcionario').serialize()

        dados += `&operacao=${$('.novo-funcionario').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/funcionario/modelo/salvar-funcionario.php',
            success: function(dados){
                  Swal.fire({
                    title: dados.mensagem,
                    icon: dados.tipo,
                    confirmButtonText: 'Ok'
                  })
            }
        })
    })
})