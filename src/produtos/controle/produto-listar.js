$(document).ready(function() {
    $('#tabela-produto').DataTable({
        "serverSide": true,
        "processing": true,
        "ajax": {
            "url": "src/produtos/modelo/produto-listar.php",
            "type": "POST"
        },
        "language": {
            "url": "libs/DataTables/pt_br.json"
        },
        dom: 'Bfrtip',
        buttons: ['print', 'pdf'],
        "columns": [{
                "data": 'idproduto',
                "className": 'text-center'
            },
            {
                "data": 'nome',
                "className": 'text-center'
            },
            {
                "data": 'novo_preco',
                "className": 'text-center'
            },
            {
                "data": 'categoria',
                "className": 'text-center'
            },
            {
                "data": 'idproduto',
                "orderable": false,
                "searchable": false,
                "className": 'text-center',
                "render": function(data, type, row, meta) {
                    return `
                    <button id="${data}" class="btn btn-success btn-sm btn-visualizar"><i class="fa fa-eye"></i></button>
                    <button id="${data}" class="btn btn-primary btn-sm btn-editar"><i class="fa fa-pencil"></i></button>
                    <button id="${data}" class="btn btn-danger btn-sm btn-excluir"><i class="fa fa-trash"></i></button>
                    `
                }
            }
        ]
    })
  })