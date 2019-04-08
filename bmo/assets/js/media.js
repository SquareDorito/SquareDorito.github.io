$(window).on('resize', function() {
    setTimeout(function(){CMSSpace.changeFBPagePlugin()}, 500);
 });
  
 $(window).on('load', function() {
    setTimeout(function(){CMSSpace.changeFBPagePlugin()}, 1500);
 });

 CMSSpace.changeFBPagePlugin = function () {
    //getting parent box width
    var container_width = (Number($('.fb-column').width()) - Number($('.fb-column').css('padding-left').replace("px", ""))).toFixed(0);
    //getting parent box height
    var container_height = (Number($('.fb-column').height()) - (Number($('.fb-column-header').height()) + Number($('.fb-column-   header').css('margin-bottom').replace("px", "")) + Number(($('.fb-column').css('padding-top').replace("px", "")*2)))).toFixed(0);
    if (!isNaN(container_width) && !isNaN(container_height)) {
       $(".fb-page").attr("data-width", container_width).attr("data-height", container_height);
    }
    if (typeof FB !== 'undefined' ) {
       FB.XFBML.parse();
    }
 }