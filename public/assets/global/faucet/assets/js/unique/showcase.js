$(function () {
	// thumbnail
	thumbnum = $('[data-slide-scthumb] .slide-item').length;
	firstslide = $('[data-slide-scthumb]').data('slideScthumb');
	firstslide = firstslide -1;
	if(thumbnum > 6){
		firstslidepc = firstslide;
	}else{
		firstslidepc = 0;
	}
	$('[data-slide-scthumb]').slick({
		infinite: false,
		initialSlide: firstslidepc,
		slidesToShow: 6,
		swipeToSlide: true,
		touchThreshold: 25,
		arrows: true,
		responsive: [
			{
				breakpoint: 640,
				settings: {
					initialSlide: firstslide,
					slidesToShow: 2
				}
			}
		]
	});
	$('[data-slide-thumbclose]').click(function(){
		if($(this).hasClass('is-close')){
			$(this).prev('.thumb-area').slideDown(300);
			$(this).removeClass('is-close');
		}else{
			$(this).prev('.thumb-area').slideUp(300);
			$(this).addClass('is-close');
		}
	});
	$('[data-slide-scmain]').slick({
		dots: true
	});
});