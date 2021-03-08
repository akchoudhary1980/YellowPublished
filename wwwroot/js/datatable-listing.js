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
            "url": "/Listing/GetIndex",
            "type": "POST",
            "datatype": "json"
        },
        "columnDefs": [{
            "targets": [0],            
            "visible": false,
            "searchable": false
        }],
        "columns": [
            { "data": "listingID", "name": "listingID", "autoWidth": true },            
            {
                "data": "mainPicture", "name": "mainPicture",
               
                "render": function (data, type, full, meta) {
                    return "<img src='UploadFiles/" + full.mainPicture+"' height='50'/>";
                },                
                "orderable": false,
                "searchable": false
            },
            { "data": "firmName", "name": "firmName", "autoWidth": true },
            { "data": "dealIn", "name": "dealIn", "autoWidth": true },
            { "data": "area", "name": "area", "autoWidth": true },   
            { "data": "subcriptionName", "name": "subcriptionName", "autoWidth": true },   
            {
                "render": function (data, type, full)
                {
                    return "<div class='dropdown float-right'>"+
                        "<button class='btn btn-success btn-outline-primary dropdown-toggle theme-toggle' type='button' id='btn" + full.listingID+"' data-toggle='dropdown'>Action</button>"+
                        "<div class='dropdown-menu' aria-labelledby='btn" + full.listingID+"'>"+
                            "<div class='dropdown-menu-content'>"+
                                "<a href='Listing/Edit/" + full.listingID + "' class='dropdown-item'><span class='icofont icofont-ui-edit'></span> Edit</a>" +
                                "<a href='Listing/Delete/" + full.listingID +"' class='dropdown-item'><span class='icofont icofont-ui-close'></span> Delete</a>" +                        
                                "<a href='Listing/Location/" + full.listingID + "' class='dropdown-item'><span class='icofont icofont-location-pin'></span> Location</a>" +
                                "<a href='Listing/Payment/" + full.listingID + "' class='dropdown-item'><span class='icofont icofont-cur-rupee'></span> Payment</a>" +
                                "<a href='Listing/Package/" + full.listingID + "' class='dropdown-item'><span class='icofont icofont-plus-circle'></span> Package</a>" +
                               
                                "<a href='Listing/Product/" + full.listingID + "' class='dropdown-item'><span class='icofont icofont-list'></span> Product</a>" +
                                "<a href='Listing/Advertiesment/" + full.listingID + "' class='dropdown-item'><span class='icofont icofont-money-bag'></span> Advertiesment</a>" +
                        "</div>" +
                    "</div>";}
            },
           
        ]
    });
});  

