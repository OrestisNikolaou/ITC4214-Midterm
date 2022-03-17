


$(document).ready(function(){
    // Add new row
    $("#add-row").click(function(){
        var InputSearch = $("#myInputSearch").val()
        var InputRating = $("#myInputRating").val()
        var tableSize = $(".table tbody tr").length
        if(tableSize == 0){
            $(".table tbody").append(
                '<tr class="fadetext">'+
                    '<td>'+InputSearch +'</td>'+
                    '<td>'+InputRating+'</td>'+
                    '<td>'+'<button class="remove-row" id="remove-row">'+'Delete Row'+'</button>'+'</td>'+
                '</tr>'
            )
        } else {
            $(".table tbody tr").last().after(
                '<tr class="fadetext">'+
                    '<td>'+InputSearch +'</td>'+
                    '<td>'+InputRating+'</td>'+
                   ' <td>'+ '<button class="remove-row" id="remove-row">'+'Delete Row'+'</button>'+'</td>'+
                '</tr>'
            );
        }
    })


    // Remove selected rows
    $(".table").on("click", "#remove-row", function() {
        $(this).closest("tr").remove();
     });







     $('th').click(function(){  
        const table = $(".table tbody")
        let rows = table.find('tr').toArray().sort(comparer($(this).index()))
        this.asc = !this.asc
        if (!this.asc) {
            rows = rows.reverse()
        }
        for (let i = 0; i < rows.length; i++) {
            table.append(rows[i])}
        })

    function comparer(index) {
        return function(a, b) {
            let valA = getCellValue(a, index), valB = getCellValue(b, index)
            return $.isNumeric(valA) && $.isNumeric(valB) ? valA - valB : valA.toString().localeCompare(valB)
        }
    }
    function getCellValue(row, index){ return $(row).children('td').eq(index).text() }










})