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
            "url": "/Payment/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "paymentID", "name": "paymentID", "autoWidth": true },            
           
            {
                "data": "recieptDate", "name": "recieptDate", 

                "render": function (data, type, full, meta) {
                    return  ConvertToDDMMYYYY(full.recieptDate);
                },
                "orderable": false,
                "searchable": false
            },
            { "data": "firmName", "name": "firmName", "autoWidth": true },           
            { "data": "paymentType", "name": "paymentType", "autoWidth": true },   
            { "data": "paymentMode", "name": "paymentMode", "autoWidth": true },  
            
            {
                "data": "amount", "name": "amount", className: "text-right",
                "render": function (data, type, full, meta) {
                    return ConvertToIndian(full.amount);
                },
                "orderable": false,
                "searchable": false
            },

            { "data": "remark", "name": "remark", "autoWidth": true },  
            
            {
                "render": function (data, type, full)
                {
                    return "<a href='Payment/Edit/" + full.paymentID + "' class='btn btn-success btn-mini btn-outline-primary'><i class='icofont icofont-ui-edit'></i></a>";                        
                }
            },
            {
                "render": function (data, type, full)
                {
                    return "<a href='Payment/Delete/" + full.paymentID + "' class='btn btn-danger btn-mini btn-outline-primary'><i class='icofont icofont-ui-close'></i></a>";        
                }
            },           
        ]
    });    
    
});  

function ConvertToDDMMYYYY(dateString) {
    date = new Date(dateString);
    year = date.getFullYear();
    month = date.getMonth() + 1;
    dt = date.getDate();

    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }
    var result = dt + '-' + month + '-' + year;
    return result;
}
function ConvertToIndian(num) {
    result = new Number(num).toLocaleString("hi-IN", { maximumFractionDigits: 2, style: 'currency', currency: 'INR' });
    return result;
}


