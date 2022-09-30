$(document).ready(function(){
    $('.btn-logout').click(function(e){
        e.preventDefault()

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            url: 'src/funcionario/modelo/logout-funcionario.php',
            success: function(dados){
                if(dados.tipo == 'success'){
                    $(location).attr('href', 'index.html')
                }else{
                    Swal.fire({
                      title: dados.mensagem,
                      icon: dados.tipo,
                      confirmButtonText: 'Ok'
                    })
                }
            }
        })
    })
})