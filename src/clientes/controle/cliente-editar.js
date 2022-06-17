$(document).ready(function() {

    $('.editar-cliente').click(function(e) {
        e.preventDefault()

        //Limpar todas as informações existentes na nossa modal
        $('.modal-title').empty()
        $('.modal-body').empty()

        //Incluir novos textos no cabeçalho da minha janela modal
        $('.modal-title').append('Editar cliente')

        //Incluir nosso formulário dentro do corpo da nossa janela modal
        $('.modal-body').load('src/clientes/visao/cliente-editar.html')

        //Iremos incluir uma função no botão slavar para demonstrar que é um novo registro
        $('.btn-salvar').attr('data-operation', 'update')

        //Abrir nossa janela modal
        $('#modal-clientes').modal('show')
    })

})