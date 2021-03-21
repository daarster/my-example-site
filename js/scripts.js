$(document).ready(function () {

	// sticky menu
	$(window).scroll(function() {
		if ($(this).scrollTop() > 300){  
			$('header').addClass("sticky");
		}
		else{
			$('header').removeClass("sticky");
		}
	});

	// Submenu Show
	$('.dropdown').click(function (e) {
		$('.dropdown').toggleClass('submenu-active');
		e.stopPropagation();
	});
	/* Submenu Hide */
	// Hide on click outside of element
	$('body').click(function (event) {
		$('.submenu-active').removeClass('submenu-active');
	});
	// responsive menu
	$('.responsive-menu-btn').click(function (e) {
		$('.nav-plate').toggleClass('nav-visible');
		e.stopPropagation();
	});

	// page menu display
	$(function() {
		var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
			$(".top-nav > li > a").each(function(){
				if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
				$(this).addClass("active");
			})
	});
});
