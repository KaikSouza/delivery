$(document).ready(function(){
    $.ajax({
        type: 'POST',
        dataType: 'json',
        assync: true,
        url: 'src/funcionario/modelo/validar-funcionario.php',
        success: function(dados){
            if(dados.tipo == 'success'){
                Swal.fire({
                  title: dados.mensagem,
                  icon: dados.tipo,
                  confirmButtonText: 'Ok'
                })
            } else if(dados.tipo == 'error'){
                $(location).attr('href', 'index.html')
            }
        }
    })
})