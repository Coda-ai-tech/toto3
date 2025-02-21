//!
//!
//! function.js
//!
//!
var mediaQuery_mobile=768,mediaQuery_tablet=1023,mediaQuery_tablet_for_kv=1024;function _scroll(t){var e=document.documentElement.scrollTop||document.body.scrollTop,a=(parseInt(e+window.innedrHeight),Array.prototype.slice.call(document.getElementsByTagName("html"))[0]);140<=e?a.classList.add("scrolledPage"):a.classList.remove("scrolledPage")}$(document).ready(function(){$(".panels__linksTitle").each(function(){var t=$(this),e=(e=t.html()).replace('<br class="for-sp">CORPORATE',"CORPORATE");t.html('<span class="panels__linksTitleStr">'+e+"</span>")}),$(".panels__linksTitle").matchHeight(),panel_link_item_margin_setting(),index_kv_height_setting(),$(".kv").length?(lad3.getCls("kv__pagerStatus").forEach(function(t,e){t.style.width="0px"}),lad3.getCls("kv__img").forEach(function(t,e){t.getAttribute("style")&&t.setAttribute("data-style",t.getAttribute("style")),t.style.opacity="0"}),setTimeout(function(){$("html").removeClass("-loading"),$("html").addClass("-loaded-kv"),lad3.getCls("kv__img").length&&doSlider()},200)):setTimeout(function(){$("html").removeClass("-loading"),$("html").addClass("-loaded-kv")},200)}),$(window).on("load",function(){init(),$(".global__slider").find("img").imagesLoaded(function(){$(".global__sliderImg").each(function(t){$src=$(this).find("img").attr("src"),$alt=$(this).find("img").attr("alt"),$img='<div class="global__thumbsItem"><span class="zoomPanel"><img src="'+$src+'" alt="'+$alt+'"></span></div>',$(".global__thumbs").append($img)}),start_global_slick()}),lad3.getQsa("button.video").forEach(function(n,t){n.getAttribute("data-target")&&""!=n.getAttribute("data-target")&&n.addEventListener("click",function(t){var e=lad3.getCls(n.getAttribute("data-target"))[0].cloneNode(!0),a=new lad3.cover(e);if(n.getAttribute("data-brightcove")){var i='<video data-video-id="'+n.getAttribute("data-brightcove")+'"';i+=' data-account="4631489730001"',i+=' data-player="BJKE2i5G"',i+=' data-embed="default"',i+=" data-application-id",i+=' class="video-js"',i+=" controls></video>",i+='<script src="//players.brightcove.net/4631489730001/BJKE2i5G_default/index.min.js"><\/script>',$(e).find(".modal-video-movie-wrap").append(i)}lad3.getCls("modal-video-close-btn",a.container)[0].addEventListener("click",function(t){lad3.getCls("modal-video",a.container)[0].classList.add("modal-video-close"),setTimeout(function(){a.clear()},300)})})})}),window.addEventListener("scroll",_scroll),_scroll();var currentWidth=window.innerWidth;function init(){_scroll(),panel_link_item_margin_setting()}function panel_link_item_margin_setting(){$(".panels__linksItem").each(function(){var t=$(this);if(-1!==t.attr("class").indexOf("-with-margin")){var e=t.find("p").length+t.index(),a=t.parents(".panels__item").prev(".panels__item").find(".panels__linksItem").eq(e).height();t.css("margin-bottom","calc( 1.25em * 2 + "+a+"px )")}})}function index_kv_height_setting(){if($(".gb-common-2019_header").length&&$(".kv").length){var t=window.innerWidth,e=window.innerHeight;screen.width,screen.height;t<=e?$("html").addClass("-verticalSize"):$("html").removeClass("-verticalSize")}}function start_global_slick(){$g_thumb_slick=$(".global__thumbs"),$g_thumb_slick.on("init",function(t,e,a){setTimeout(function(){$g_thumb_slick.addClass("-loaded")},300)}).slick({slidesToShow:5,slidesToScroll:1,variableWidth:!0,dots:!1,arrows:!1,autoplay:!1,infinite:!0,centerMode:!0,asNavFor:".global__slider"}),$(".global__thumbs .slick-slide").on("click",function(){var t=$(this).attr("data-slick-index");$g_thumb_slick.slick("slickGoTo",t,!1)}),$g_slick=$(".global__slider"),$g_slick.on("init",function(t,e,a){setTimeout(function(){$g_slick.addClass("-loaded")},300)}).slick({dots:!1,autoplay:!1,variableWidth:!0,infinite:!0,centerPadding:"10.78em",centerMode:!0,prevArrow:'<button class="slick-prev slick-arrow global__arw" type="button"><span class="arw"></span></button>',nextArrow:'<button class="slick-next slick-arrow global__arw" type="button"><span class="arw"></span></button>',asNavFor:".global__thumbs"}),$g_slick.find(".slick-arrow").hover(function(){if(screen.width>=mediaQuery_mobile){var t="20px";$(this).hasClass("slick-next")&&("next",t="-20px"),$g_slick.find(".slick-track").css("margin-left",t)}},function(){if(screen.width>=mediaQuery_mobile){$(this).hasClass("slick-next")&&("next","left"),$g_slick.find(".slick-track").css("margin-left",0)}})}window.addEventListener("resize",function(){currentWidth!=window.innerWidth&&(currentWidth=window.innerWidth,init(),index_kv_height_setting())});var g_slider_class=".carousel__slider";function start_carousel(i){$g_slick=$(i),$g_slick.on("init",function(t,e,a){setTimeout(function(){$(i).addClass("-loaded")},300)}).slick({slidesToShow:3,slidesToScroll:1,variableWidth:!0,infinite:!0,centerMode:!0,dots:!1,autoplay:!1,prevArrow:'<button class="slick-prev slick-arrow" type="button"><span class="carousel__arw"></span></button>',nextArrow:'<button class="slick-next slick-arrow" type="button"><span class="carousel__arw"></span></button>'}),$g_slick.find(".slick-arrow").hover(function(){if(screen.width>=mediaQuery_mobile){var t="20px";$(this).hasClass("slick-next")&&("next",t="-20px"),$(i).find(".slick-track").css("margin-left",t)}},function(){if(screen.width>=mediaQuery_mobile){$(this).hasClass("slick-next")&&("next","left"),$(i).find(".slick-track").css("margin-left",0)}})}function tabs(){$(".sort__btn").click(function(){tabs_toggle($(this))})}function tabs_toggle(t){var e=t,a=$("[data-sort-cat].-current").attr("data-sort-cat"),i=$("[data-sort-year].-current").attr("data-sort-year");$("[data-sort-pin].-current").attr("data-sort-pin");t||($("[data-sort-year].-current").length&&(e=$("[data-sort-year].-current")),$("[data-sort-pin].-current").length&&(e=$("[data-sort-pin].-current")));var n=e.attr("data-sort-cat"),s=e.attr("data-sort-year"),l=e.attr("data-sort-pin"),o=e.parents(".sort"),r=e.parents(".sortTabs"),d=e.parents(".sort").find(".sortList");d.addClass("-loading");var c=o.find("[data-cat]"),u=o.find("[data-year]"),h=o.find("[data-pin]"),m=o.find('[data-cat="'+n+'"]'),_=o.find('[data-year="'+s+'"]'),g=o.find('[data-pin="'+l+'"]');"all"==n&&(m=c),"all"==s&&(_=u),"all"==l&&(g=h),setTimeout(function(){if(r.find(".-current").removeClass("-current"),e.addClass("-current"),n&&("all"!=i&&(m=o.find('[data-cat="'+n+'"][data-year="'+i+'"]'),"all"==n&&(m=o.find('[data-cat][data-year="'+i+'"]'))),c.hide(),m.show()),s&&("all"!=a&&(_=o.find('[data-cat="'+a+'"][data-year="'+s+'"]'),"all"==s&&(_=o.find('[data-cat="'+a+'"][data-year]'))),u.hide(),_.show()),l&&(h.hide(),g.show()),d.find(".-empty").remove(),!m.length&&!_.length&&!g.length){d.append('<div class="infoList__item -empty">no items</div>')}},200),setTimeout(function(){d.removeClass("-loading")},400)}$(g_slider_class).length&&$(g_slider_class).each(function(t){$(this).parents(".carousel");$(this).attr("id",t);var e="#"+$(this).attr("id");$(this).find("img").imagesLoaded(function(){start_carousel(e)})}),$(".-modal-video").length&&window.addEventListener("DOMContentLoaded",function(){new ModalVideo(".-modal-video")}),$(".sort").length&&(tabs(),$(".sort").each(function(){tabs_toggle($(this).find(".sort__btn.-current"))})),$(".load__more").click(function(){var t=$(this),a=3;window.matchMedia("(max-width:767px)").matches&&(a=4),t.prev(".panels").find(".-hidden").length&&($letter=t.prev(".panels").find(".-hidden"),_.each($letter,function(t,e){TweenMax.delayedCall(.1*e,function(){e<=a&&$(t).removeClass("-hidden").addClass("-visible")})}),setTimeout(function(){t.prev(".panels").find(".-hidden").length||t.fadeOut(150)},400))});var movefun=function(t){t.preventDefault()};function getBrowserWidth(){return window.innerWidth?window.innerWidth:document.documentElement&&0!=document.documentElement.clientWidth?document.documentElement.clientWidth:document.body?document.body.clientWidth:0}$(function(){$("a[href^=#]").not(".link-modal, .menu__link").click(function(){console.log("#");var t=$(this.hash),e=$(t).offset().top;return $(".drawer-open").length&&($(".drawer").drawer("close"),window.removeEventListener("touchmove",movefun,{passive:!1})),$("html,body").animate({scrollTop:e},1200,"easeOutExpo"),!1})});


/*アクセシビリティ処理追加20230828*/
$(function(){
  $(".kvslick").slick(
    {
      fade: true,    // fedeオン
      speed: 1000,   // 画像切り替えにかかる時間（ミリ秒）
      autoplaySpeed: 5000,   // 自動スライド切り替え速度
      arrows: false,         // 矢印表示・非表示
      autoplay: true,        // 自動再生
      slidesToShow: 1,       // スライド表示数
      slidesToScroll: 1,     // スライドする数
      infinite: true,         // 無限リピート オン・オフ
      dots: true,
      pauseOnHover: true,
      pauseOnFocus:true
    }
    );
  $(".kvslick_control").addClass("play");

  $(".kvslick_control .play button").click(function(){
    $(".kvslick").slick("slickPlay");
    $(".kvslick_control").removeClass("pause");
    $(".kvslick_control").addClass("play");
  });
  $(".kvslick_control .pause button").click(function(){
    $(".kvslick").slick("slickPause");
    $(".kvslick_control").removeClass("play");
    $(".kvslick_control").addClass("pause");
  });

  $(".slick-dots li button").attr("tabindex",0);
});

/*メニューキーダウン*/
$(function () {
  $(".menu__link").keydown(function (e) {
    if (e.key === "Enter") {

      var panelName = $(this).data('control');
      //console.log(panelName);
      if($(this).hasClass("opened")){
        $(this).removeClass("opened");
        $(this).addClass("closed");
        $('#' + panelName).css("visibility","hidden");
      }else{
        /*init*/
        $(".menu__panel").css("visibility","hidden");
        $('#' + panelName).css("visibility","visible");
        $('#' + panelName).css('opacity', '.9');
        $(this).addClass("opened");
        $(this).removeClass("closed");
      }
    }
  });

});

$(document).ready(function(){
  $('body').on('click', '.transcript-toggle', function(){
      $(this).next('.transcript').fadeToggle();
  });
  $('body').on('click', '.transcript .close', function(){
    $(this).parent().fadeToggle();
  });
});