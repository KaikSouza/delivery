$(document).ready(function(){
    $('.btn-login').click(function(e){
        e.preventDefault()

        let dados = $('#form-login').serialize()

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: dados,
            url: 'src/funcionario/modelo/login-funcionario.php',
            success: function(dados){
                if(dados.tipo == 'success'){
                    $(location).attr('href', 'home.php')
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