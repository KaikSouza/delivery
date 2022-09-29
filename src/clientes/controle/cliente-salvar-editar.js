$(document).ready(function(){
   
    $('.btn-salvar').click(function(e){
        e.preventDefault()

        let dados = $('#form-cliente-editar').serialize()

        dados += `&operacao=${$('.btn-salvar').attr('data-operation')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
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
                  $('#modal-cliente').modal('hide')
                  $('#tabela-cliente').DataTable().ajax.reload()
            }
        })
    })
})