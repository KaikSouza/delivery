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
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  Toast.fire({
                    icon: dados.tipo,
                    title: dados.mensagem
                  })
                  $('#login').val("")
                  $('#senha').val("")
            }
        })
    })
})