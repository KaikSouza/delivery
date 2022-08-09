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
            }
        })
    })
})