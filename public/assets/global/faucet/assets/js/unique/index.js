$(function () {
	// var swiper;
	$(window).load(function() {
		

	});

	var swiper = new Swiper('.swiper-container', {
		speed: 700,
		effect: 'fade',
		allowTouchMove: false,
		autoplay: true,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		pagination: {
			el: $('.swiper-container .u-top-slide__pagination'),
			bulletActiveClass: '-active',
			bulletElement: 'button',
			clickable: true,
		}
	});
	$pause = $('.u-top-main .u-top-slide__pause');
	$play = $('.u-top-main .u-top-slide__play');
	$pause.on('click', function () {
		swiper.autoplay.stop();
		$pause.toggleClass("is-active");
		$play.toggleClass("is-active");
	});
	$play.on('click', function () {
		swiper.autoplay.start();
		$pause.toggleClass("is-active");
		$play.toggleClass("is-active");
	});

	// アンカーありで遷移してきた場合、mainvisualが表示されなくなる不具合の回避のため
	if (window.location.search) {
		var qstr = (window.location.search + '').substr(1);
		var params = {};
		qstr.split('&').map(function(p) {
			var param = p.split('=');
			params[param[0]] = param[1];
		});

		if (params['anc']) {
			var $anc = $('#' + params['anc']);
			if ($anc.length > 0) {
				var top = $anc.offset().top;
				$('html, body').animate({scrollTop: top}, 100, 'linear');
			}
		}
	}

	//CHOOSE YOUR REGION
	// var $mapBtn = $('[data-js-map]:not(.item-disable) .item-btn'),
	// 	$mapClose = $('[data-js-map-close]'),
	// 	ACTIVE = 'is-active';
	// $mapBtn.on('click', function(e){
	// 	e.preventDefault();
	// 	var $this = $(this),
	// 		$parent = $this.closest('[data-js-map]'),
	// 		$target = $parent.find('[data-js-map-list]');
	// 	if ( DEVICE == 'pc' ) {
	// 		$('.area-item').removeClass(ACTIVE);
	// 		$parent.addClass(ACTIVE);
	// 		TweenLite.to($('[data-js-map-list]') , .5, {
	// 			autoAlpha: 0,
	// 			scale: .5,
	// 			ease: Power2.easeOut,
	// 		}),
	// 		TweenLite.set($target, {
	// 			visibility: "visible",
	// 			scale: .5
	// 		}),
	// 		TweenLite.to($target , .5, {
	// 			autoAlpha: 1,
	// 			scale: 1,
	// 			ease: Power2.easeOut
	// 		});
	// 	}
	// 	else {
	// 		if ( $this.hasClass(ACTIVE) ) {
	// 			$target.slideUp();
	// 			$this.removeClass(ACTIVE);
	// 		}
	// 		else {
	// 			$this.addClass(ACTIVE);
	// 			$target.slideDown();
	// 		}
	// 	}
	// });
	// $mapClose.on('click', function(e){
	// 	e.preventDefault();
	// 	if ( DEVICE == 'pc' ) {
	// 		var $target = $('.area-item.is-active [data-js-map-list]');
	// 		TweenLite.to($target , .5, {
	// 			autoAlpha: 0,
	// 			scale: .5,
	// 			ease: Power2.easeOut
	// 		});
	// 	}
	// });
	
});

/**
 * SHOWCASEスライダー
 */
 $(function() {
  var $showcase   = $('#showcase-slider');
  var $container  = $showcase.find('.swiper-bnr-container')[0];
  var $next       = $showcase.find('.showcase-slider__button-next')[0];
  var $prev       = $showcase.find('.showcase-slider__button-prev')[0];
  var $navigation = $showcase.find('.showcase-slider__pagination')[0];
	var $pause = $('#showcase-slider .showcase-slider__pause');
	var $play = $('#showcase-slider .showcase-slider__play');

  var settings = {
    loop: true,
    speed: 1500,

    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },

		on: {
			slideChangeTransitionEnd: function () {
				$('.swiper-slide a').attr('tabindex', '-1');
				$('.swiper-slide-active a').attr('tabindex', '0');
			}
		},

    pagination: {
      el: $navigation,
      bulletClass: 'showcase-slider__bullet',
      bulletActiveClass: '-active',
			bulletElement: 'button',
			clickable: true,
    },

    navigation: {
      nextEl: $next,
      prevEl: $prev
    }
  }

  var swiper = new Swiper($container, settings);

	$pause.on('click', function () {
		swiper.autoplay.stop();
		$pause.toggleClass("is-active");
		$play.toggleClass("is-active");
	});
	$play.on('click', function () {
		swiper.autoplay.start();
		$pause.toggleClass("is-active");
		$play.toggleClass("is-active");
	});
	
});