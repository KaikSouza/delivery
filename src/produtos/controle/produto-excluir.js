$(document).ready(function(){
   
    $('.excluir-produto').click(function(e){
        e.preventDefault()

        Swal.fire({
            title: 'Você tem certeza?',
            text: "Você está prestes a excluir o cadastro de um produto!",
            icon: 'question',
            iconColor: '#fff',
            showCancelButton: true,
            background: '#B21E35',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, quero excluir!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Excluído!',
                'O produto foi excluído com sucesso',
                'success'
              )
            }
          })
    })
})