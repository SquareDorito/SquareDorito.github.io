
function populate_html(zips_dict) {
    for(var i=0;i<36;i++){
        $('#tips-col1').append('<p><a href="#" class="button style2 ztip-button">'+zips_dict[i]['title']+'</a></p>')
    }
}

$(document).ready(function () {

    $.get('ztips.txt', function (data) {
        var zips_dict = {}
        data = data.split("\n");
        n = data.length;
        let counter = 0;
        for (var i = 0; i < n; i += 3) {
            if (i % 2 == 0) {
                zips_dict[counter] = { "date": data[i], "title": data[i + 1], "tip": data[i + 2] }
                counter++;
            }
        }
        console.log(counter);
        console.log(zips_dict);
        populate_html(zips_dict);
    });

});
