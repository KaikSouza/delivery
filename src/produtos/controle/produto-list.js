$(document).ready(function(){
    $('#tabela-produto').DataTable({
        "processing": true,
        "serverSide": true,
        "language":{
            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Portuguese-Brasil.json"
        },
        "ajax": {
            "url": "src/produtos/modelo/produto-list.php",
            "type": "POST"
        },
        "columns": [{
            "data": 'id',
            "classname": 'text-center'
        },
        {
        "data": 'nome',
        "classname": 'text-center'
        },
        {
        "data": 'preco',
        "classname": 'text-center'
        },
        {
            "data": 'id',
            "classname": 'text-center',
            "orderable": false,
            "searchable": false,
            "render": function(data, type, row, meta){
                return `
                <button id ="${data}" class = "btn btn-success btn-visualizar"><i class="fa-solid fa-eye"></i></button>
                <button id ="${data}" class = "btn btn-info btn-editar"><i class="fa-solid fa-pen"></i></button>
                <button id ="${data}" class = "btn btn-danger excluir-produto"><i class="fa-solid fa-trash-can"></i></button>
                `
            }
        }
    ]
    })
})