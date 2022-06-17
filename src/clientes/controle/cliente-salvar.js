$(document).ready(function(){
   
    $('.novo-cliente').click(function(e){
        e.preventDefault()

        Swal.fire({
            icon: 'success',
            title: 'Cliente cadastrado com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
    })
})