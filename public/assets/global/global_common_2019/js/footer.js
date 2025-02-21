//!
//! footer.js
//!
jQuery.easing.jswing = jQuery.easing.swing,
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, o, a) {
        return jQuery.easing[jQuery.easing.def](e, t, n, o, a)
    },
    easeInQuad: function(e, t, n, o, a) {
        return o * (t /= a) * t + n
    },
    easeOutQuad: function(e, t, n, o, a) {
        return -o * (t /= a) * (t - 2) + n
    },
    easeInOutQuad: function(e, t, n, o, a) {
        return (t /= a / 2) < 1 ? o / 2 * t * t + n : -o / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function(e, t, n, o, a) {
        return o * (t /= a) * t * t + n
    },
    easeOutCubic: function(e, t, n, o, a) {
        return o * ((t = t / a - 1) * t * t + 1) + n
    },
    easeInOutCubic: function(e, t, n, o, a) {
        return (t /= a / 2) < 1 ? o / 2 * t * t * t + n : o / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function(e, t, n, o, a) {
        return o * (t /= a) * t * t * t + n
    },
    easeOutQuart: function(e, t, n, o, a) {
        return -o * ((t = t / a - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function(e, t, n, o, a) {
        return (t /= a / 2) < 1 ? o / 2 * t * t * t * t + n : -o / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function(e, t, n, o, a) {
        return o * (t /= a) * t * t * t * t + n
    },
    easeOutQuint: function(e, t, n, o, a) {
        return o * ((t = t / a - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function(e, t, n, o, a) {
        return (t /= a / 2) < 1 ? o / 2 * t * t * t * t * t + n : o / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function(e, t, n, o, a) {
        return -o * Math.cos(t / a * (Math.PI / 2)) + o + n
    },
    easeOutSine: function(e, t, n, o, a) {
        return o * Math.sin(t / a * (Math.PI / 2)) + n
    },
    easeInOutSine: function(e, t, n, o, a) {
        return -o / 2 * (Math.cos(Math.PI * t / a) - 1) + n
    },
    easeInExpo: function(e, t, n, o, a) {
        return 0 == t ? n : o * Math.pow(2, 10 * (t / a - 1)) + n
    },
    easeOutExpo: function(e, t, n, o, a) {
        return t == a ? n + o : o * (1 - Math.pow(2, -10 * t / a)) + n
    },
    easeInOutExpo: function(e, t, n, o, a) {
        return 0 == t ? n : t == a ? n + o : (t /= a / 2) < 1 ? o / 2 * Math.pow(2, 10 * (t - 1)) + n : o / 2 * (2 - Math.pow(2, -10 * --t)) + n
    },
    easeInCirc: function(e, t, n, o, a) {
        return -o * (Math.sqrt(1 - (t /= a) * t) - 1) + n
    },
    easeOutCirc: function(e, t, n, o, a) {
        return o * Math.sqrt(1 - (t = t / a - 1) * t) + n
    },
    easeInOutCirc: function(e, t, n, o, a) {
        return (t /= a / 2) < 1 ? -o / 2 * (Math.sqrt(1 - t * t) - 1) + n : o / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function(e, t, n, o, a) {
        var s = 1.70158
          , r = 0
          , u = o;
        if (0 == t)
            return n;
        if (1 == (t /= a))
            return n + o;
        if (r || (r = .3 * a),
        u < Math.abs(o)) {
            u = o;
            s = r / 4
        } else
            s = r / (2 * Math.PI) * Math.asin(o / u);
        return -u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * a - s) * (2 * Math.PI) / r) + n
    },
    easeOutElastic: function(e, t, n, o, a) {
        var s = 1.70158
          , r = 0
          , u = o;
        if (0 == t)
            return n;
        if (1 == (t /= a))
            return n + o;
        if (r || (r = .3 * a),
        u < Math.abs(o)) {
            u = o;
            s = r / 4
        } else
            s = r / (2 * Math.PI) * Math.asin(o / u);
        return u * Math.pow(2, -10 * t) * Math.sin((t * a - s) * (2 * Math.PI) / r) + o + n
    },
    easeInOutElastic: function(e, t, n, o, a) {
        var s = 1.70158
          , r = 0
          , u = o;
        if (0 == t)
            return n;
        if (2 == (t /= a / 2))
            return n + o;
        if (r || (r = a * (.3 * 1.5)),
        u < Math.abs(o)) {
            u = o;
            s = r / 4
        } else
            s = r / (2 * Math.PI) * Math.asin(o / u);
        return t < 1 ? u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * a - s) * (2 * Math.PI) / r) * -.5 + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * a - s) * (2 * Math.PI) / r) * .5 + o + n
    },
    easeInBack: function(e, t, n, o, a, s) {
        return null == s && (s = 1.70158),
        o * (t /= a) * t * ((s + 1) * t - s) + n
    },
    easeOutBack: function(e, t, n, o, a, s) {
        return null == s && (s = 1.70158),
        o * ((t = t / a - 1) * t * ((s + 1) * t + s) + 1) + n
    },
    easeInOutBack: function(e, t, n, o, a, s) {
        return null == s && (s = 1.70158),
        (t /= a / 2) < 1 ? o / 2 * (t * t * ((1 + (s *= 1.525)) * t - s)) + n : o / 2 * ((t -= 2) * t * ((1 + (s *= 1.525)) * t + s) + 2) + n
    },
    easeInBounce: function(e, t, n, o, a) {
        return o - jQuery.easing.easeOutBounce(e, a - t, 0, o, a) + n
    },
    easeOutBounce: function(e, t, n, o, a) {
        return (t /= a) < 1 / 2.75 ? o * (7.5625 * t * t) + n : t < 2 / 2.75 ? o * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? o * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : o * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function(e, t, n, o, a) {
        return t < a / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, o, a) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - a, 0, o, a) + .5 * o + n
    }
});
var mediaQuery_mobile = 768;
$(document).ready(function() {
    $(".kv").length,
    setTimeout(function() {
        $("html").removeClass("-loading"),
        $("html").addClass("-loaded-kv")
    }, 200)
}),
$(function(){
    showFooterMenu();
});
var currentWidth = window.innerWidth;
window.addEventListener("resize", function() {
    showFooterMenu(),
    currentWidth != window.innerWidth && (currentWidth = window.innerWidth)
});
var classOpen = "-panel-open"
  , classHtmlOpen = "-menu-open"
  , footer_class = ".gb-common-2019_footer";
function showFooterMenu() {
    getBrowserWidth() <= mediaQuery_mobile && $(footer_class + "__funcTitle").click(function() {
        var e = $(footer_class + "__funcSec")
          , t = "-opened"
          , n = $(this)
          , o = n.parent()
          , a = n.parents(footer_class);
        o.hasClass(t) ? (o.removeClass(t),
        a.removeAttr("style"),
        $("html").removeClass("-f-menu-open")) : (e.removeClass(t),
        o.addClass(t),
        n.parent(footer_class + "__funcSec").hasClass("-global") ? a.css("min-height", n.parent(footer_class + "__funcSec").find(footer_class + "__funcContent").height() + 75 + 50) : a.removeAttr("style"),
        $("html").addClass("-f-menu-open"))
    }),
    getBrowserWidth() > mediaQuery_mobile && $(document).on("click", footer_class + "__toggleBtn", function() {
        console.log("footer");
        var e = footer_class
          , t = footer_class + "__content"
          , n = "-closed"
          , o = "easeOutQuint"
          , a = $(this).parents(e)
          , s = a.find(t);
        a.hasClass(n) ? (a.removeClass(n),
        s.stop().animate({
            opacity: 0,
            height: "toggle"
        }, {
            duration: 850,
            easing: o
        }),
        $(footer_class + "__toggleBtnText").text($(footer_class + "__toggleBtn").attr("data-open"))) : (a.addClass(n),
        s.stop().animate({
            opacity: 1,
            height: "toggle"
        }, {
            duration: 850,
            easing: o
        }),
        $("html,body").stop().animate({
            scrollTop: $(document).height()
        }, 850, o),
        $(footer_class + "__toggleBtnText").text($(footer_class + "__toggleBtn").attr("data-close")))

        /*追加*/
        console.log("focus");
        $(".gb-common-2019_footer__menuText a").eq(0).focus();
    })


}
function keydown_footer(e) {
    27 == e.keyCode && closeFooterMenu()
}
function closeFooterMenu() {
    $(footer_class + "__funcSec").hasClass("-opened") && ($(footer_class + "__funcSec").removeClass("-opened"),
    $("html").removeClass("-f-menu-open"))
}
function footer_elastic(e) {
    var t = "-opened"
      , n = "easeOutQuint"
      , o = e.parent(".elastic__item")
      , a = o.find(".elastic__detail");
    o.hasClass(t) ? (o.removeClass(t),
    a.stop().animate({
        opacity: 0,
        height: "toggle"
    }, {
        duration: 350,
        easing: n
    })) : (o.addClass(t),
    a.stop().animate({
        opacity: 1,
        height: "toggle"
    }, {
        duration: 350,
        easing: n
    }))
}
function getBrowserWidth() {
    return window.innerWidth ? window.innerWidth : document.documentElement && 0 != document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body ? document.body.clientWidth : 0
}
$(document).keydown(keydown_footer),
$(document).bind("click touchstart", function(e) {
    $(e.target).parents(footer_class + "__funcSec.-opened").length || closeFooterMenu()
}),
$(function() {
    $(document).on("click",".elastic__header.gb-common-2019_footer__menuCatText",function() {
        var e = $(this);
        e.parents(".elastic").hasClass("-only-sp") ? screen.width < mediaQuery_mobile && footer_elastic(e) : footer_elastic(e)
    })
});
