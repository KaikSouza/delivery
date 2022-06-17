$(document).ready(function(){
   
    $('.excluir-cliente').click(function(e){
        e.preventDefault()

        Swal.fire({
            title: 'Você tem certeza?',
            text: "Você está prestes a excluir o cadastro de um cliente!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, quero excluir!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Excluído!',
                'O cliente foi excluído com sucesso',
                'success'
              )
            }
          })
    })
})