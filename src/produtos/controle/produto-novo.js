$(document).ready(function() {

    $('.novo-produto').click(function(e) {
        e.preventDefault()

        //Iremos incluir uma função no botão slavar para demonstrar que é um novo registro
        $('.novo-produto').attr('data-operation', 'insert')

    })

})