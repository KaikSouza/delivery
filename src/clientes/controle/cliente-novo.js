$(document).ready(function() {

    $('.btn-novo-cliente').click(function(e){

        e.preventDefault()

        $('#content').empty()
        $('#content').load('src/visao/clientes/cliente-cadastrar.html')

        //Iremos incluir uma função no botão slavar para demonstrar que é um novo registro
        $('.novo-produto').attr('data-operation', 'insert')
    })

})