$.get('ztips.txt', function(data) {
    var zips_dict = {}
    var n = data.split("\n");
    console.log(data);
    console.log(n);
    let counter=0;
    for(var i=0;i<n/3;i+=3){
        if(i%2==0){
            zips_dict[counter]={"date":data[i],"title":data[i+1],"tip":data[i+2]}
            counter++;
        }
    }
    console.log(counter);
    console.log(zips_dict);
});