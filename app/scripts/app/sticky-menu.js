$(window).on('scroll', function() {
	var scroll     = $(window).scrollTop(),
		feature    = $('#feature'),
		primaryNav = $('#primaryNav');
	
	if (scroll >= feature.outerHeight())
		primaryNav.addClass('sticky');
	else
		primaryNav.removeClass('sticky');
});