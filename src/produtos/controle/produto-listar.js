$(document).ready(function() {
    $('#tabela-produto').DataTable({
        "serverSide": true,
        "processing": true,
        "scrollY": false,
        "ajax": {
            "url": "src/produtos/modelo/produto-listar.php",
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
                exportOptions: {
                    columns: [0,1,2,3]
                }
            },
            {
                extend: 'pdfHtml5',
                text: '<i class="fa-solid fa-file-pdf"></i>',
                titleAttr: 'PDF',
                filename: 'Relatório de produtos cadastrados',
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
                                    text: 'Relatório de produtos cadastrados',
                                    fontSize: 12,
                                    margin: [10,0]
                                }
                            ]
                        }
                    })
                }
            }
        ],
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
                    <button id="${data}" class="btn btn-primary btn-sm btn-editar"><i class="fa fa-pencil"></i></button>
                    <button id="${data}" class="btn btn-danger btn-sm btn-excluir"><i class="fa fa-trash"></i></button>
                    `
                }
            }
        ]
    })
  })