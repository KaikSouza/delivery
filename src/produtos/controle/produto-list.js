$(document).ready(function(){
    $('#table-tipo').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/tipo/modelo/list-tipo.php",
            "type": "POST"
        },
        "columns": [{
            "data": 'ID',
            "classname": 'text-center'
        },
        {
        "data": 'NOME',
        "classname": 'text-center'
        },
        {
            "data": 'ID',
            "classname": 'text-center',
            "orderable": false,
            "searchable": false,
            "render": function(data, type, row, meta){
                return `
                <button id ="${data}" class = "btn btn-success btn-view">Visualizar</button>
                <button id ="${data}" class = "btn btn-info btn-view">Editar</button>
                <button id ="${data}" class = "btn btn-danger btn-view">Excluir</button>
                `
            }
        }
    ]
    })
})