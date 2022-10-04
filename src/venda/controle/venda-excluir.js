$(document).ready(function(){

    $('#tabela-venda').on('click', 'button.btn-excluir', function(e){
        e.preventDefault()
  
        let ID = `idvenda=${$(this).attr('id')}`
  
        Swal.fire({
            title: 'Você tem certeza que deseja excluir este pedido?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim',
            cancelButtonText: 'Não',
            showClass: {
              popup: 'animate__animated animate__zoomIn'
          },
          hideClass: {
              popup: 'animate__animated animate__zoomOut'
          }
        }).then((result) => {
            if(result.value){
                $.ajax({
                    type: 'POST',
                    dataType: 'JSON',
                    assync: true,
                    data: ID,
                    url: 'src/venda/modelo/venda-excluir.php',
                    success: function(dados){
                          Swal.fire({
                            title: dados.mensagem,
                            icon: dados.tipo,
                            confirmButtonText: 'Ok',
                            hideClass: {
                              popup: 'animate__animated animate__zoomOut'
                          }
                          })
                          $('#tabela-venda').DataTable().ajax.reload()
                    }
                })
            }
        })
    })
  })