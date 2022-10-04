$(document).ready(function() {
    $('#tabela-cliente').DataTable({
        "processing": true,
        "serverSide": true,
        "scrollY": false,
        "ajax": {
            "url": "src/clientes/modelo/cliente-listar.php",
            "type": "POST"
        },
        "language": {
            "url": "libs/DataTables/pt_br.json"
        },
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'colvis',
                text: 'Visualizar colunas'
            },
            {
                extend: 'print',
                text: '<i class="fa-solid fa-print"></i>',
                titleAttr: 'Imprimir',
                pageSize: 'A4',
                exportOptions: {
                    columns: [0,1,2,3]
                }
            },
            {
                extend: 'pdfHtml5',
                text: '<i class="fa-solid fa-file-pdf"></i>',
                titleAttr: 'PDF',
                filename: 'Relatório de clientes cadastrados',
                pageSize: 'A4',
                exportOptions: {
                    columns: [0,1,2,3]
                },
                customize: function(doc){
                    doc['header']=(function(){
                        return{
                            columns: [
                                {
                                    aligment: 'right',
                                    italics: true,
                                    text: 'Relatório de clientes cadastrados',
                                    fontSize: 12,
                                    margin: [10,0]
                                }
                            ]
                        }
                    })
                    doc['footer']=(function(){
                        return{
                            columns: [
                                {
                                    aligment: 'left',
                                    text: 'Lins, ____________________ de __________. Assinatura: _____________________________________.'
                                }
                            ]
                        }
                })
            }
        }
        ],
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
                    <button id="${data}" class="btn btn-success btn-sm btn-pedido"><i class="fa-solid fa-plus"></i></button>
                    <button id="${data}" class="btn btn-success btn-sm btn-visualizar"><i class="fa fa-eye"></i></button>
                    <button id="${data}" class="btn btn-info btn-sm btn-editar"><i class="fa fa-pencil"></i></button>
                    <button id="${data}" class="btn btn-danger btn-sm btn-excluir"><i class="fa fa-trash"></i></button>
                    `
                }
            }
        ]
    })
  })