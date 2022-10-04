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
                aligment: 'center',
                exportOptions: {
                    columns: [0,1,2,3,4]
                }
            },
            {
                extend: 'pdfHtml5',
                text: '<i class="fa-solid fa-file-pdf"></i>',
                titleAttr: 'PDF',
                filename: 'Relatório de pedidos',
                pageSize: 'A4',
                aligment: 'left',
                exportOptions: {
                    columns: [0,1,2,3,4]
                },
                customize: function(doc){
                    doc['header']=(function(){
                        return{
                            columns: [
                                {
                                    aligment: 'right',
                                    italics: true,
                                    text: 'Relatório de pedidos',
                                    fontSize: 12,
                                    margin: [10,0]
                                },
                                {
                                    aligment: 'left',
                                    italics: true,
                                    text: 'Michelly Presentes',
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
                                    text: 'Lins, ____________________ de __________. Assinatura: _____________________________________.',
                                    margin: [10,0]
                                }
                            ]
                        }
                })
            }
        }
        ],
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