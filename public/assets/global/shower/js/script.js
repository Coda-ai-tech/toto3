// !
// !
// ! function.js
// !
// !

/*----------------------------------------------------------------------------------------*/
if ( 768 > $(window).width() ) {
    DEVICE = 'sp';
}else if ( 1025 > $(window).width() ) {
    DEVICE = 'tab';
}else {
    DEVICE = 'pc';
}


// mainslide
$('#showcase .showcase-slide').slick({
    dots: true
});

function scrollfunc(){
    win_t = $(window).scrollTop();
    fixpos = $('[data-headfix]').offset().top;

    if( win_t > fixpos ){
        $('[data-headfix]').addClass('is-sticky');
    }else{
        $('[data-headfix]').removeClass('is-sticky');
    }
}
$(window).scroll(function(){
    scrollfunc();
});

$(function () {
    // $.smoothScroll();
    $('#body_inner').addClass('is-loaded');
    var $win = $(window),
        $html = $('html'),
        $body = $('body'),
        historyFlag = false,
        transitionFlag = false,
        scrollFlag = false,
        ACTIVE = 'is-active',
        $current,windowH,heightH,uniqueElem,current_scrollY,currentData;

    var ua = navigator.userAgent.toLowerCase(),
        isiPad = (ua.indexOf('ipad') > -1);

    $('[data-menu-open]').click(function(){
        if($(this).hasClass('is-active')){
            $('[data-menu-all]').slideUp(300);
            $(this).removeClass('is-active');
        }else{
            $('[data-menu-all]').slideDown(300);
            $(this).addClass('is-active');
        }
    });

    $('.m-box-headnav .menu-drop a').click(function(){

        if(DEVICE == 'sp' || DEVICE == 'tab'){
            $('[data-menu-all]').slideUp(300);
        }
        $('[data-menu-open]').removeClass('is-active');
    });


    $('[data-menu-btn]').click(function(){
        targetmenu = $(this).data('menu-btn');
        if($(this).hasClass('is-open')){
            $('[data-menu-area="'+targetmenu+'"]').slideUp(300);
            $(this).removeClass('is-open');
        }else{
            $('[data-menu-area="'+targetmenu+'"]').slideDown(300);
            $(this).addClass('is-open');
            if(DEVICE == 'pc'){
                if($(this).hasClass('menu-hasdrop')){
                    $(this).closest('li').siblings('li').children('[data-menu-btn].is-open').click();
                }
            }
        }
    });
    $('[data-menu-close]').click(function(){
        targetbtn = $(this).data('menu-close');
        $('[data-menu-btn="'+targetbtn+'"]').click();
    });
    $('[data-menu-btn-sub]').click(function(){
        targetmenu = $(this).data('menu-btn-sub');
        if($(this).hasClass('is-open')){
            if(DEVICE == 'pc'){
                $('[data-menu-area="'+targetmenu+'"]').fadeOut(300);
                $this = $(this);
                setTimeout(function(){
                    if($this.hasClass('menu-hassub')){
                        $this.closest('.drop-menu').animate({'min-height':45}, 100);
                    }else if($this.hasClass('sub-sttl')){
                        dropheight = $this.closest('.menu-sub').height();
                        $this.closest('.drop-menu').animate({'min-height':dropheight}, 100);
                    }
                },300);
            }else{
                $('[data-menu-area="'+targetmenu+'"]').slideUp(300);
            }
            $(this).removeClass('is-open');
        }else{
            if(DEVICE == 'pc'){
                $('[data-menu-area="'+targetmenu+'"]').fadeIn(300);
                $this = $(this);
                if($this.hasClass('menu-hassub')){
                    $this.closest('li').siblings('li').children('[data-menu-btn-sub].is-open').next('.menu-sub').hide();
                    $this.closest('li').siblings('li').children('[data-menu-btn-sub].is-open').removeClass('is-open');
                }
                setTimeout(function(){
                    if($this.hasClass('menu-hassub')){
                        dropheight = $('[data-menu-area="'+targetmenu+'"]').height();
                        $this.closest('.drop-menu').animate({'min-height':dropheight}, 100);
                    }else if($this.hasClass('sub-sttl')){
                        dropheight = $this.closest('.menu-sub').height();
                        $this.closest('.drop-menu').animate({'min-height':dropheight}, 100);
                    }
                },50);
            }else{
                $('[data-menu-area="'+targetmenu+'"]').slideDown(300);
            }
            $(this).addClass('is-open');
        }
    });

    $('[data-jump-page]').on('click', function(e){
        e.preventDefault();
        jumpurl = $(this).attr('href');
        if (jumpurl !== '') {
            $('#body_inner').addClass('is-removing');
            setTimeout(function(){
                window.location = jumpurl;
            }, 500);
        }
        return false;
    });

    if(DEVICE == 'pc'){
        $('.benefit-function-list').each(function(){
            $(this).find('.item-txt').tile(4);
        });
    }

});


/**
 * メインビジュアルのスライダー
 */
$(function () {
	$(window).load(function() {
        
	});

    $slider = $('.u-top-main');
        $pagination = $slider.find('.u-top-slide__pagination');
        $pause = $slider.find('.u-top-slide__pause');
        $play = $slider.find('.u-top-slide__play');
		var swiper = new Swiper('.u-top-main', {
			speed: 700,
			effect: 'fade',
            autoHeight: true,
			allowTouchMove: true,
			autoplay: true,
			autoplay: {
				delay: 3500,
				disableOnInteraction: false,
			},
            pagination: {
                el: $pagination,
                bulletActiveClass: '-active',
                bulletElement: 'button',
				clickable: true,
            },
            on: {
                // slideChangeTransitionEnd: function () {
                //     $slider.find('.swiper-slide .area-btn a,.swiper-slide .area-btn button').attr('tabindex', '-1');
                //     $slider.find('.swiper-slide-active .area-btn a,.swiper-slide-active .area-btn button').attr('tabindex', '0');
                // }
            }
        });    
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
});


/**
 * SHOWCASEスライダー
 */
$(function() {
  var $showcase   = $('#showcase-slider');
  var $container  = $showcase.find('.swiper-container')[0];
  var $next       = $showcase.find('.showcase-slider__button-next')[0];
  var $prev       = $showcase.find('.showcase-slider__button-prev')[0];
  var $navigation = $showcase.find('.showcase-slider__pagination')[0];
  var $pause = $showcase.find('.showcase-slider__pause');
  var $play = $showcase.find('.showcase-slider__play');

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


/**
 * モーダル内のスライダー
 */
$(function() {
  var config = { childList: true };
  var observer = new MutationObserver(function(mutationsList, observer) {
    var container = document.querySelector('.lad3cover-container');
    if(container) {
      initSlider(container);
    }
  }, config);

  var body = document.getElementsByTagName('body').item(0);
  observer.observe(body, {childList: true});

  function initSlider(container) {
    var modalSlider = container.querySelector('.modal-slider');

    if(!modalSlider) return false;

    var $container  = modalSlider.querySelector('.swiper-container');
    var $next       = modalSlider.querySelector('.modal-slider__button-next');
    var $prev       = modalSlider.querySelector('.modal-slider__button-prev');
    var $navigation = modalSlider.querySelector('.modal-slider__pagination');

    var settings = {
      loop: true,
      effect: 'slide',

      pagination: {
        el: $navigation,
        bulletClass: 'modal-slider__bullet',
        bulletActiveClass: '-active',
      },

      navigation: {
        nextEl: $next,
        prevEl: $prev
      }
    }

    var swiper = new Swiper($container, settings);

    container.onanimationstart = function() {
      swiper.update();
    };
  }
});


$(window).load(function () {
    anchor  = location.hash;
    anchor = anchor.replace('#','');
    ancnum = $.isNumeric(anchor);
    if(anchor!='' && ancnum == false){
        // var anc = $('#'+anchor).offset().top - $('.headnav-area').outerHeight();
        var $anc = $('#'+anchor);
        if ($anc.length > 0) {
            var anc = $anc.offset().top;
            $('html, body').animate({scrollTop: anc}, 100, 'linear');
        }
    }
});

/*20240209アクセシビリティ改修*/
$(function () {
    $('.js-dialog-open').on('click', function(e) {
        var interval;
        interval = setInterval(function() {
            if(document.querySelector('.lad3cover-container .js-dialog-body')) {
                var dialog = document.querySelector('.lad3cover-container .js-dialog-body');
                dialog.showModal();
                $('.lad3cover-container .js-dialog-close').on('click', function(e) {
                    dialog.close();
                });
                dialog.addEventListener('keydown', function(e) {
                    if(e.key === 'Escape') {
                        $('.lad3cover-container .js-dialog-close').trigger('click');
                    }
                });
                clearInterval(interval);
            }
        },1000);
    });
});
