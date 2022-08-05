$(document).ready(function(){
    $('#tabela-cliente').DataTable({
        serverSide: true,
        scrollY: '40vh',
        scrollCollapse: true,
        paging: false,
        "language":{
            "url": "libs/DataTables/pt_br.json"
        },
        "ajax": {
            "url": "src/clientes/modelo/cliente-listar.php",
            "type": "POST"
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
            "className": 'text-center',
            "orderable": false,
            "searchable": false,
            "render": function(data, type, row, meta){
                return `
                <button id ="${data}" class = "btn btn-success cliente-pedido-novo"><i class="fa-solid fa-plus"></i></button>
                `
            }
        },
        {
            "data": 'idcliente',
            "className": 'text-center',
            "orderable": false,
            "searchable": false,
            "render": function(data, type, row, meta){
                return `
                <button id ="${data}" class = "btn btn-info cliente-editar"><i class="fa-solid fa-pen"></i></button>
                `
            }
        },
        {
            "data": 'idcliente',
            "className": 'text-center',
            "orderable": false,
            "searchable": false,
            "render": function(data, type, row, meta){
                return `
                <button id ="${data}" class = "btn btn-danger cliente-excluir"><i class="fa-solid fa-trash"></i></button>
                `
            }
        }
    ]
    })
})