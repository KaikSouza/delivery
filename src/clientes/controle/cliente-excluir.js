$(document).ready(function(){

  $('#tabela-cliente').on('click', 'button.cliente-excluir', function(e){
      e.preventDefault()

      let ID = `idcliente=${$(this).attr('idcliente')}`

      Swal.fire({
          title: 'Você tem certeza que deseja excluir o registro deste cliente?',
          icon: 'question',
          showCancelButton: true,
          conffirmButtonText: 'Sim',
          cancelButtonText: 'Não',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
      }).then(result => {
          if(result.value){
              $.ajax({
                  type: 'POST',
                  dataType: 'json',
                  assync: true,
                  data: dados,
                  url: 'src/clientes/modelo/cliente-excluir.php',
                  success: function(dados){
                        Swal.fire({
                          title: dados.mensagem,
                          icon: dados.tipo,
                          confirmButtonText: 'Ok',
                          showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                          },
                          hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                          }
                        })
                        $('#tabela-cliente').DataTable().ajax.reload()
                  }
              })
          }
      })
  })
})