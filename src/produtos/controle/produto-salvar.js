$(document).ready(function(){
   
    $('.novo-produto').click(function(e){
        e.preventDefault()

        Swal.fire({
            icon: 'success',
            title: 'Produto salvo com sucesso!',
            showConfirmButton: false,
            timer: 1500
          })
    })
})