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
                      $('#nome').val("")
                      $('#preco').val("")
                      $('#categoria_idcategoria').val("")
            }
        })
    })
})