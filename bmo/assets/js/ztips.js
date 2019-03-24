$.get('ztips.txt', function(data) {    
    var lines = data.split("\n");

    $.each(lines, function(n, elem) {
       //$('#myContainer').append('<div>' + elem + '</div>');
       alert(elem);
    });
    
});