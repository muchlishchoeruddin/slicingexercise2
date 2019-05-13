$(document).ready(function(){
	$('[data-toggle="collap"]').click(function(){
		$('.collapse').toggleClass('show');
	});
	if ($(window).scrollTop()>100) {
			$('.navbar').css({
				'padding-top':'1em',
				'padding-bottom':'1em',
				'background-color':'#c4ae69',
				'color':'white',
			});
			$('.nav-link').css('color','white');
			$('.medsos a').css({
				'color':'white'
			}).hover(function(){
				$(this).css("color", "#ddd");
				}, function(){
				$(this).css("color", "white");
				});
			$('.navbar-nav .active .nav-link').css('color','black');
			$('.medsos').css({
				'margin-top':'1.8em',
			});
			$('.navbar-toggler').css({
				'color':'white'
			});
		}else{
			$('.navbar').css({
				'padding-top':'2em',
				'padding-bottom':'2em',
				'background-color':'transparent'
			});
			$('.nav-link').css('color','#777');
			$('.medsos a').css({
				'color':'#777',
			}).hover(function(){
				$(this).css("color", "#b59f5b");
				}, function(){
				$(this).css("color", "#777");
				});
			$('.navbar-nav .active .nav-link').css('color','#b59f5b');
			$('.medsos').css({
				'margin-top':'2.4em',
			});
			$('.navbar-toggler').css({
				'color':'#777',
			});
		}
	$(window).scroll(function(){
		if ($(this).scrollTop()>100) {
			$('.navbar').css({
				'padding-top':'1em',
				'padding-bottom':'1em',
				'background-color':'#c4ae69',
				'color':'white',
			});
			$('.nav-link').css('color','white');
			$('.navbar-nav .active .nav-link').css('color','black');
			$('.medsos').css({
				'margin-top':'1.3em',
			});
			$('.medsos a').css({
				'color':'white'
			}).hover(function(){
				$(this).css("color", "#ddd");
				}, function(){
				$(this).css("color", "white");
				});
			$('.navbar-toggler').css({
				'color':'white'
			});
		}else{
			$('.navbar').css({
				'padding-top':'2em',
				'padding-bottom':'2em',
				'background-color':'transparent'
			});
			$('.nav-link').css('color','#777');
			$('.navbar-nav .active .nav-link').css('color','#b59f5b');
			$('.medsos').css({
				'margin-top':'2em',
			});
			$('.medsos a').css({
				'color':'#777',
			}).hover(function(){
				$(this).css("color", "#b59f5b");
				}, function(){
				$(this).css("color", "#777");
				});
			$('.navbar-toggler').css({
				'color':'#777',
			});
		}
	});
});