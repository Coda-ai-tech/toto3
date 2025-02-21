$(function() {
    var fix = $('#sec02 .fixed_box', parent.document);
    var fixTop = fix.offset().top - 200;
    var fix_img03 = $('#sec02 .img03', parent.document).offset().top - 500;

    var sec03_fix = $('#sec03 .fixed_box', parent.document);
    var sec03_fixTop = sec03_fix.offset().top - 200;
    var sec03_fix_img03 = $('#sec03 .img03', parent.document).offset().top + 2500;

    $(".btn01 a", parent.document).keypress(function(e) {
        if (e.keyCode == 13) {
            modal_open($(this));
        }
    });

    // 「.modal_open」をクリックしたらモーダルと黒い背景を表示する
    $('.modal_open', parent.document).click(function () {
        window.scrollBy({ top: 200, behavior: "smooth" });
        setTimeout(() => {
            modal_open($(this));
        }, 1000);
    });

    function modal_open($elem){
        // 黒い背景をbody内に追加
        $('body', parent.document).append('');
        $('html', parent.document).addClass('no_scroll');
        $('.modal_bg', parent.document).fadeIn();

        // data-targetの内容をIDにしてmodalに代入
        var modal = '#' + $elem.attr('data-target');

        // モーダルをウィンドウの中央に配置する
        function modalResize() {
            var w = $(window.top).width();
            var h = $(window.top).height();
            var x = (w - $(modal, parent.document).outerWidth(true)) / 2;
            var y = (h - $(modal, parent.document).outerHeight(true)) / 2;
            // var y = 100;

            $(modal, parent.document).css({ 'left': x + 'px', 'top': y + 'px', 'max-height': (h * 0.9) + 'px' });
        }

        // modalをフェードインで表示
        $(modal, parent.document).fadeIn();

        setTimeout(function () {
            $(modal+" .modal_contents").focus();
        }, 800);

        // modalResizeを実行
        modalResize();


        $(modal, parent.document).find('.slide', parent.document).slick('unslick');
        $(modal, parent.document).find('.slide', parent.document).slick({
            slidesToShow: 1,
            initialSlide: 0,
            autoplay: false,
            dots: true,
            arrows: true,
            speed: 500,
            centerMode: true,
            centerPadding: '0px',
            variableWidth: true,
            infinite: true,
        });

        // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
        $('.modal_bg, .modal_close', parent.document).off().click(function () {
            $('.modal_box', parent.document).fadeOut();
            $('.modal_bg', parent.document).fadeOut('slow');
            $('html', parent.document).removeClass('no_scroll');
            isOpenDrawer = false;
        });

        $(".modal_close", parent.document).keypress(function(e) {
            if (e.keyCode == 13) {
                $('.modal_box', parent.document).fadeOut();
                $('.modal_bg', parent.document).fadeOut('slow');
                $('html', parent.document).removeClass('no_scroll');
                isOpenDrawer = false;
            }
        });

        // ウィンドウがリサイズされたらモーダルの位置を再計算する
        $(window.top).resize(function () {
            modalResize();
            $(modal, parent.document).find('.slide', parent.document).slick('unslick');
            $(modal, parent.document).find('.slide', parent.document).slick({
                slidesToShow: 1,
                initialSlide: 0,
                autoplay: false,
                dots: true,
                arrows: true,
                speed: 500,
                centerMode: true,
                centerPadding: '0px',
                variableWidth: true,
                infinite: true,
            });
        });
    }

    //fadein
    $(window.top).scroll(function() {
        var w = $(window.top).width();

        $('.fadeIn', parent.document).each(function() {
            var position = $(this).offset().top;
            var scroll = $(window.top).scrollTop();
            var windowHeight = $(window.top).height();
            if (scroll > position - windowHeight + 200) {
                $(this).addClass('faded');
            }
        });

        if(fixTop > 1000){
            if($(window.top).scrollTop() >= fixTop && w >= 1070) {
                fix.css("position","sticky");
                fix.css("top","20%");
            } 
            if($(window.top).scrollTop() >= fix_img03) {
                $("#sec02 .img03 .view01", parent.document).addClass("view");
            }else{
                $("#sec02 .img03 .view01", parent.document).removeClass("view");
            }
            if($(window.top).scrollTop() >= fix_img03 + 1000) {
                $("#sec02 .img03 .view02", parent.document).addClass("view");
            }else{
                $("#sec02 .img03 .view02", parent.document).removeClass("view");
            }
            if($(window.top).scrollTop() >= fix_img03 + 2000) {
                $("#sec02 .img03 .view03", parent.document).addClass("view");
            }else{
                $("#sec02 .img03 .view03", parent.document).removeClass("view");
            }

            if($(window.top).scrollTop() >= sec03_fixTop && w >= 1070) {
                sec03_fix.css("position","sticky");
                sec03_fix.css("top","20%");
            } 
            if($(window.top).scrollTop() >= sec03_fix_img03) {
                $("#sec03 .img03 .view01", parent.document).addClass("view");
            }else{
                $("#sec03 .img03 .view01", parent.document).removeClass("view");
            }
            if($(window.top).scrollTop() >= sec03_fix_img03 + 1000) {
                $("#sec03 .img03 .view02", parent.document).addClass("view");
            }else{
                $("#sec03 .img03 .view02", parent.document).removeClass("view");
            }
            if($(window.top).scrollTop() >= sec03_fix_img03 + 2000) {
                $("#sec03 .img03 .view03", parent.document).addClass("view");
            }else{
                $("#sec03 .img03 .view03", parent.document).removeClass("view");
            }
        }
    });


    /* アコーディオン */
    $(function() {
        $(".accordion_ttl", parent.document).keypress(function(e) {
            if (e.keyCode == 13) {
                $(this).toggleClass("open");
                $(this).next('.accordion_content').stop().slideToggle();
                $(this).next('.accordion_content').find('.slide', parent.document).slick('unslick');
                $(this).next('.accordion_content').find('.slide', parent.document).slick({
                    slidesToShow: 1,
                    initialSlide: 0,
                    autoplay: false,
                    dots: true,
                    arrows: true,
                    speed: 500,
                    variableWidth: true,
                    infinite: true,
                    centerMode: true,
                });
            }
          });

        $(".accordion_ttl", parent.document).on("click", function() {
            $(this).toggleClass("open");
            $(this).next('.accordion_content', parent.document).stop().slideToggle();
            $(this).next('.accordion_content', parent.document).find('.slide', parent.document).slick('unslick');
            $(this).next('.accordion_content', parent.document).find('.slide', parent.document).slick({
                slidesToShow: 1,
                initialSlide: 0,
                autoplay: false,
                dots: true,
                arrows: true,
                speed: 500,
                variableWidth: true,
                infinite: true,
                centerMode: true,
            });
        });

        $('.kvslick_control .pause', parent.document).on("click", function() {
            const videoElement_pc = $('#video_pc').get(0);
            const videoElement_sp = $('#video_sp').get(0);
            videoElement_pc.pause();
            videoElement_sp.pause();
            $('.kvslick_control .pause').hide();
            $('.kvslick_control .play').show();
        });

        $('.kvslick_control .play', parent.document).on("click", function() {
            const videoElement_pc = $('#video_pc').get(0);
            const videoElement_sp = $('#video_sp').get(0);
            videoElement_pc.play();
            videoElement_sp.play();
            $('.kvslick_control .pause').show();
            $('.kvslick_control .play').hide();
        });
    });


    $('.slide', parent.document).slick({
        slidesToShow: 1,
        initialSlide: 0,
        autoplay: false,
        dots: true,
        arrows: true,
        speed: 500,
        variableWidth: true,
        infinite: true,
        centerMode: true,
    });

    $('.page_link .btn', parent.document).hover(function(){
        $(this).parent().parent().find('.bgImage').addClass("over");
    },function(){
        $(this).parent().parent().find('.bgImage').removeClass("over");
    });

});
