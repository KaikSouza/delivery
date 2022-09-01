$(document).ready(function() {
    $('#tabela-cliente').DataTable({
        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "src/clientes/modelo/cliente-listar.php",
            "type": "POST"
        },
        "language": {
            "processing": "<div class='loader'></div>",
            "url": "libs/DataTables/pt_br.json"
        },
        "columns": [{
                "data": 'idcliente',
                "className": 'text-center'
            },
            {
                "data": 'nome',
                "className": 'text-center'
            },
            {
                "data": 'celular',
                "className": 'text-center'
            },
            {
                "data": 'email',
                "className": 'text-center'
            },
            {
                "data": 'idcliente',
                "orderable": false,
                "searchable": false,
                "className": 'text-center',
                "render": function(data, type, row, meta) {
                    return `
                    <button id="${data}" class="btn btn-success btn-sm btn-visualizar"><i class="fa fa-eye"></i></button>
                    <button id="${data}" class="btn btn-info btn-sm btn-editar"><i class="fa fa-pencil"></i></button>
                    <button id="${data}" class="btn btn-danger btn-sm btn-excluir"><i class="fa fa-trash"></i></button>
                    `
                }
            }
        ]
    })
  })