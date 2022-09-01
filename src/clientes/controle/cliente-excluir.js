$(document).ready(function(){

  $('#tabela-cliente').on('click', 'button.btn-excluir', function(e){
      e.preventDefault()

      let ID = `idcliente=${$(this).attr('id')}`

      Swal.fire({
          title: 'Você tem certeza que deseja excluir o registro deste cliente?',
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
                  url: 'src/clientes/modelo/cliente-excluir.php',
                  success: function(dados){
                        Swal.fire({
                          title: dados.mensagem,
                          icon: dados.tipo,
                          confirmButtonText: 'Ok'
                        })
                        $('#tabela-cliente').DataTable().ajax.reload()
                  }
              })
          }
      })
  })
})