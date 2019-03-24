
function populate_html(zips_dict) {
    style_string = 'style="text-transform: none;font-weight:400;letter-spacing:0.015em;width:100%;text-align:center;"';
    for(var i=0;i<48;i++){
        $('#tips-col1').append('<a href="#" class="button style2 ztips" '+style_string+'>'+zips_dict[i]['title']+'</a>')
    }
    for(var i=48;i<96;i++){
        $('#tips-col2').append('<a href="#" class="button style2 ztips" '+style_string+'>'+zips_dict[i]['title']+'</a>')
    }
    for(var i=96;i<142;i++){
        $('#tips-col3').append('<a href="#" class="button style2 ztips" '+style_string+'>'+zips_dict[i]['title']+'</a>')
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
