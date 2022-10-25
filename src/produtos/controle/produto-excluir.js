$(document).ready(function(){

  $('#tabela-produto').on('click', 'button.btn-excluir', function(e){
      e.preventDefault()

      let ID = `idproduto=${$(this).attr('id')}`

      Swal.fire({
          title: 'Você tem certeza que deseja excluir o registro deste produto?',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Sim',
          cancelButtonText: 'Não'
      }).then((result) => {
          if(result.value){
              $.ajax({
                  type: 'POST',
                  dataType: 'JSON',
                  assync: true,
                  data: ID,
                  url: 'src/produtos/modelo/produto-excluir.php',
                  success: function(dados){
                        Swal.fire({
                          title: dados.mensagem,
                          icon: dados.tipo,
                          confirmButtonText: 'Ok',
                          hideClass: {
                            popup: 'animate__animated animate__zoomOut'
                        }
                        })
                        $('#tabela-produto').DataTable().ajax.reload()
                  }
              })
          }
      })
  })
})