$(document).ready(function() {
    $('#tabela-venda').DataTable({
        "serverSide": true,
        "processing": true,
        "ajax": {
            "url": "src/venda/modelo/venda-listar.php",
            "type": "POST"
        },
        "language": {
            "url": "libs/DataTables/pt_br.json"
        },
        dom: 'Bfrtip',
        buttons: ['print', 'pdf'],
        "columns": [{
                "data": 'idvenda',
                "className": 'text-center'
            },
            {
                "data": 'nome_cliente',
                "className": 'text-center'
            },
            {
                "data": 'nome_produto',
                "className": 'text-center'
            },
            {
                "data": 'pedido_data',
                "className": 'text-center'
            },
            {
                "data": 'pedido_entrega',
                "className": 'text-center'
            },
            {
                "data": 'idvenda',
                "orderable": false,
                "searchable": false,
                "className": 'text-center',
                "render": function(data, type, row, meta) {
                    return `
                    <button id="${data}" class="btn btn-danger btn-sm btn-excluir"><i class="fa fa-trash"></i></button>
                    `
                }
            }
        ]
    })
  })