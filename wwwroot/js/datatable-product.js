$(document).ready(function () {
    $("#cbtn-selectors").DataTable({
        //
        dom: 'Bfrtip',
        buttons: [{
            extend: 'copyHtml5',
            exportOptions: {
                columns: [0, ':visible']
            }
        }, {
            extend: 'excelHtml5',
            exportOptions: {
                columns: ':visible'
            }
        }, {
            extend: 'pdfHtml5',
            exportOptions: {
                columns: [0, 1, 2, 5]
            }
        }, 'colvis'],
        //
        "processing": true,
        "serverSide": true,
        "filter": true,
        "ajax": {
            "url": "/Product/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "productID", "name": "productID", "autoWidth": true },            
            {
                "data": "picture", "name": "picture",
               
                "render": function (data, type, full, meta) {
                    return "<img src='UploadFiles/" + full.picture+"' height='50'/>";
                },                
                "orderable": false,
                "searchable": false
            },
            { "data": "productName", "name": "productName", "autoWidth": true },
            { "data": "description", "name": "description", "autoWidth": true },
            { "data": "firmName", "name": "firmName", "autoWidth": true },   
            
            {
                "render": function (data, type, full)
                {
                    return "<a href='Product/Edit/" + full.productID + "' class='btn btn-success btn-mini btn-outline-primary'><i class='icofont icofont-ui-edit'></i></a>";                        
                }
            },
            {
                "render": function (data, type, full) {
                    return "<a href='Product/Edit/" + full.productID + "' class='btn btn-danger btn-mini btn-outline-primary'><i class='icofont icofont-ui-close'></i></a>";        
                }
            },
           
        ]
    });
});  

