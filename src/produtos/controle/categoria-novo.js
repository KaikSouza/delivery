$(document).ready(function() {

    $('.novo-categoria').click(function(e) {
        e.preventDefault()

        //Limpar todas as informações existentes na nossa modal
        $('.modal-title').empty()
        $('.modal-body').empty()

        //Incluir novos textos no cabeçalho da minha janela modal
        $('.modal-title').append('Adicionar nova categoria')

        //Incluir nosso formulário dentro do corpo da nossa janela modal
        $('.modal-body').load('src/produtos/visao/categoria-cadastrar.html')

        //Iremos incluir uma função no botão slavar para demonstrar que é um novo registro
        $('.btn-salvar').attr('data-operation', 'insert')

        //Abrir nossa janela modal
        $('#modal-categoria').modal('show')
    })

})