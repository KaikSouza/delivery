$(document).ready(function(){

    $('#cep').blur(function(e){
    
        var cep = $('#cep').val().replace(/\D/g, '');
    
        var url = "https://viacep.com.br/ws/"+cep+"/json/"
    
        if(cep != ""){

            var validacep = /^[0-9]{8}$/

            if(validacep.test(cep)){
                $('#uf').val("Carregando...")
                $('#cidade').val("Carregando...")
                $('#bairro').val("Carregando...")
                $('#logradouro').val("Carregando...")
                $.ajax({
                    url: url,
                    type: 'GET',
                    dataType: 'json',
                    success: function(dados){
                        if(!("erro" in dados)){
                            $('#uf').val(dados.uf)
                            $('#cidade').val(dados.localidade)
                            $('#bairro').val(dados.bairro)
                            $('#logradouro').val(dados.logradouro)
                        }else{
                            Swal.fire({
                                title: 'CEP não encontrado!',
                                icon: "error",
                                confirmButtonText: 'OK'
                            })
                            $('#cep').val("")
                            $('#uf').val("")
                            $('#cidade').val("")
                            $('#bairro').val("")
                            $('#logradouro').val("")
                        } //final else cep não encontrado
                    } //final success
                }) //final ajax
            } // final segundo if 
            else{
                Swal.fire({
                    title: 'O CEP é inválido',
                    icon: "error",
                    confirmButtonText: 'OK'
                })
                $('#cep').val("")
                $('#uf').val("")
                $('#cidade').val("")
                $('#bairro').val("")
                $('#logradouro').val("")
            } // final else cep inválido
        } //final primeiro if
        else{
            Swal.fire({
                title: 'O campo não pode estar em branco!',
                icon: "error",
                confirmButtonText: 'OK'
            })
            $('#cep').val("")
            $('#uf').val("")
            $('#cidade').val("")
            $('#bairro').val("")
            $('#logradouro').val("")
        } //final else cep em branco
        }) //final blur #cep
    })