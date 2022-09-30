$(document).ready(function(){
    $.ajax({
        type: 'POST',
        dataType: 'json',
        assync: true,
        url: 'src/funcionario/modelo/validar-funcionario.php',
        success: function(dados){
            if(dados.tipo == 'success'){
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
                    title: dados.mensagem,
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
            } else if(dados.tipo == 'error'){
                $(location).attr('href', 'index.html')
            }
        }
    })
})