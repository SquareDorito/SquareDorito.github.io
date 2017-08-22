$(document).ready(function(){
			
	$(window).resize(function(){
		var $valoreScroll = $(window).scrollTop();
		var $valoreDiv = $('#intro').height();
	}).resize();
	
	$(window).scroll(function(){
		var $valoreScroll = $(window).scrollTop();
		var $valoreDiv = $('#intro').height();
		var $controllo = $valoreDiv - $valoreScroll;
		if($controllo <= 3){
			$('#header').stop().animate({top: "0px"}, 500);
			$('#scrollTop').stop().animate({bottom: "20px"}, 500);
		}else if($controllo > 0){
			$('#header').stop().animate({top: "-100px"}, 500);
			$('#scrollTop').stop().animate({bottom: "-60px"}, 500);
		};
	});


	$('img.scrollTop').click(
		function(){
			$.scrollTo('#intro', 1500, {easing:'easeInOutExpo'});
	});
	$('img.scrollAbout, li.aboutLink').click(
		function(){
			$.scrollTo('#about', 1500, {easing:'easeInOutExpo'});
	});
	$('li.experienceLink').click(
		function(){
			$.scrollTo('#experience', 1500, {easing:'easeInOutExpo'});
	});
	$('li.contactLink').click(
		function(){
			$.scrollTo('#contact', 1500, {easing:'easeInOutExpo'});
	});
	
	
	/*/ --- TIMELINE --- /*/
	$('ul.flaTimeline').flaTimeline({
		color: '#3dd0ac'
	});

	
				
});