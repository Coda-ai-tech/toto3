! function (e) {
    var t = {};

    function a(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(n.exports, n, n.exports, a), n.l = !0, n.exports
    }
    a.m = e, a.c = t, a.d = function (e, t, i) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, a.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.t = function (e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (a.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) a.d(i, n, function (t) {
                return e[t]
            }.bind(null, n));
        return i
    }, a.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return a.d(t, "a", t), t
    }, a.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, a.p = "", a(a.s = 1)
}([function (e, t, a) {
    var i;
    /*! picturefill - v3.0.2 - 2016-02-12
     * https://scottjehl.github.io/picturefill/
     * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
     */
    /*! Gecko-Picture - v1.0
     * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
     * Firefox's early picture implementation (prior to FF41) is static and does
     * not react to viewport changes. This tiny module fixes this.
     */
    /*! picturefill - v3.0.2 - 2016-02-12
     * https://scottjehl.github.io/picturefill/
     * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
     */
    /*! Gecko-Picture - v1.0
     * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
     * Firefox's early picture implementation (prior to FF41) is static and does
     * not react to viewport changes. This tiny module fixes this.
     */
    ! function (e) {
        var t, a, i, n, s, o, l, r = navigator.userAgent;
        e.HTMLPictureElement && /ecko/.test(r) && r.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (a = document.createElement("source"), i = function (e) {
            var t, i, n = e.parentNode;
            "PICTURE" === n.nodeName.toUpperCase() ? (t = a.cloneNode(), n.insertBefore(t, n.firstElementChild), setTimeout(function () {
                n.removeChild(t)
            })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, i = e.sizes, e.sizes += ",100vw", setTimeout(function () {
                e.sizes = i
            }))
        }, n = function () {
            var e, t = document.querySelectorAll("picture > img, img[srcset][sizes]");
            for (e = 0; e < t.length; e++) i(t[e])
        }, s = function () {
            clearTimeout(t), t = setTimeout(n, 99)
        }, o = e.matchMedia && matchMedia("(orientation: landscape)"), l = function () {
            s(), o && o.addListener && o.addListener(s)
        }, a.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? l() : document.addEventListener("DOMContentLoaded", l), s))
    }(window),
    /*! Picturefill - v3.0.2
     * http://scottjehl.github.io/picturefill
     * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
     *  License: MIT
     */
    function (n, s, o) {
        "use strict";
        var l, r, d;
        s.createElement("picture");
        var u = {},
            c = !1,
            f = function () {},
            h = s.createElement("img"),
            m = h.getAttribute,
            v = h.setAttribute,
            A = h.removeAttribute,
            g = s.documentElement,
            p = {},
            y = {
                algorithm: ""
            },
            w = navigator.userAgent,
            b = /rident/.test(w) || /ecko/.test(w) && w.match(/rv\:(\d+)/) && RegExp.$1 > 35,
            x = "currentSrc",
            _ = /\s+\+?\d+(e\d+)?w/,
            k = /(\([^)]+\))?\s*(.+)/,
            $ = n.picturefillCFG,
            S = "font-size:100%!important;",
            T = !0,
            P = {},
            E = {},
            C = n.devicePixelRatio,
            M = {
                px: 1,
                in: 96
            },
            O = s.createElement("a"),
            z = !1,
            R = /^[ \t\n\r\u000c]+/,
            j = /^[, \t\n\r\u000c]+/,
            B = /^[^ \t\n\r\u000c]+/,
            L = /[,]+$/,
            I = /^\d+$/,
            F = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
            U = function (e, t, a, i) {
                e.addEventListener ? e.addEventListener(t, a, i || !1) : e.attachEvent && e.attachEvent("on" + t, a)
            },
            W = function (e) {
                var t = {};
                return function (a) {
                    return a in t || (t[a] = e(a)), t[a]
                }
            };

        function G(e) {
            return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e
        }
        var Q, H, N, q, V, K, J, Y, X, Z, D, ee, te, ae, ie, ne, se = (Q = /^([\d\.]+)(em|vw|px)$/, H = W(function (e) {
                return "return " + function () {
                    for (var e = arguments, t = 0, a = e[0]; ++t in e;) a = a.replace(e[t], e[++t]);
                    return a
                }((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
            }), function (e, t) {
                var a;
                if (!(e in P))
                    if (P[e] = !1, t && (a = e.match(Q))) P[e] = a[1] * M[a[2]];
                    else try {
                        P[e] = new Function("e", H(e))(M)
                    } catch (e) {}
                return P[e]
            }),
            oe = function (e, t) {
                return e.w ? (e.cWidth = u.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e
            },
            le = function (e) {
                if (c) {
                    var t, a, i, n = e || {};
                    if (n.elements && 1 === n.elements.nodeType && ("IMG" === n.elements.nodeName.toUpperCase() ? n.elements = [n.elements] : (n.context = n.elements, n.elements = null)), i = (t = n.elements || u.qsa(n.context || s, n.reevaluate || n.reselect ? u.sel : u.selShort)).length) {
                        for (u.setupRun(n), z = !0, a = 0; a < i; a++) u.fillImg(t[a], n);
                        u.teardownRun(n)
                    }
                }
            };

        function re(e, t) {
            return e.res - t.res
        }

        function de(e, t) {
            var a, i, n;
            if (e && t)
                for (n = u.parseSet(t), e = u.makeUrl(e), a = 0; a < n.length; a++)
                    if (e === u.makeUrl(n[a].url)) {
                        i = n[a];
                        break
                    }
            return i
        }
        n.console && console.warn, x in h || (x = "src"), p["image/jpeg"] = !0, p["image/gif"] = !0, p["image/png"] = !0, p["image/svg+xml"] = s.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), u.ns = ("pf" + (new Date).getTime()).substr(0, 9), u.supSrcset = "srcset" in h, u.supSizes = "sizes" in h, u.supPicture = !!n.HTMLPictureElement, u.supSrcset && u.supPicture && !u.supSizes && (N = s.createElement("img"), h.srcset = "data:,a", N.src = "data:,a", u.supSrcset = h.complete === N.complete, u.supPicture = u.supSrcset && u.supPicture), u.supSrcset && !u.supSizes ? (q = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", V = s.createElement("img"), K = function () {
            2 === V.width && (u.supSizes = !0), r = u.supSrcset && !u.supSizes, c = !0, setTimeout(le)
        }, V.onload = K, V.onerror = K, V.setAttribute("sizes", "9px"), V.srcset = q + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", V.src = q) : c = !0, u.selShort = "picture>img,img[srcset]", u.sel = u.selShort, u.cfg = y, u.DPR = C || 1, u.u = M, u.types = p, u.setSize = f, u.makeUrl = W(function (e) {
            return O.href = e, O.href
        }), u.qsa = function (e, t) {
            return "querySelector" in e ? e.querySelectorAll(t) : []
        }, u.matchesMedia = function () {
            return n.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? u.matchesMedia = function (e) {
                return !e || matchMedia(e).matches
            } : u.matchesMedia = u.mMQ, u.matchesMedia.apply(this, arguments)
        }, u.mMQ = function (e) {
            return !e || se(e)
        }, u.calcLength = function (e) {
            var t = se(e, !0) || !1;
            return t < 0 && (t = !1), t
        }, u.supportsType = function (e) {
            return !e || p[e]
        }, u.parseSize = W(function (e) {
            var t = (e || "").match(k);
            return {
                media: t && t[1],
                length: t && t[2]
            }
        }), u.parseSet = function (e) {
            return e.cands || (e.cands = function (e, t) {
                function a(t) {
                    var a, i = t.exec(e.substring(d));
                    if (i) return a = i[0], d += a.length, a
                }
                var i, n, s, o, l, r = e.length,
                    d = 0,
                    u = [];

                function c() {
                    var e, a, s, o, l, r, d, c, f, h = !1,
                        m = {};
                    for (o = 0; o < n.length; o++) r = (l = n[o])[l.length - 1], d = l.substring(0, l.length - 1), c = parseInt(d, 10), f = parseFloat(d), I.test(d) && "w" === r ? ((e || a) && (h = !0), 0 === c ? h = !0 : e = c) : F.test(d) && "x" === r ? ((e || a || s) && (h = !0), f < 0 ? h = !0 : a = f) : I.test(d) && "h" === r ? ((s || a) && (h = !0), 0 === c ? h = !0 : s = c) : h = !0;
                    h || (m.url = i, e && (m.w = e), a && (m.d = a), s && (m.h = s), s || a || e || (m.d = 1), 1 === m.d && (t.has1x = !0), m.set = t, u.push(m))
                }

                function f() {
                    for (a(R), s = "", o = "in descriptor";;) {
                        if (l = e.charAt(d), "in descriptor" === o)
                            if (G(l)) s && (n.push(s), s = "", o = "after descriptor");
                            else {
                                if ("," === l) return d += 1, s && n.push(s), void c();
                                if ("(" === l) s += l, o = "in parens";
                                else {
                                    if ("" === l) return s && n.push(s), void c();
                                    s += l
                                }
                            }
                        else if ("in parens" === o)
                            if (")" === l) s += l, o = "in descriptor";
                            else {
                                if ("" === l) return n.push(s), void c();
                                s += l
                            }
                        else if ("after descriptor" === o)
                            if (G(l));
                            else {
                                if ("" === l) return void c();
                                o = "in descriptor", d -= 1
                            }
                        d += 1
                    }
                }
                for (;;) {
                    if (a(j), d >= r) return u;
                    i = a(B), n = [], "," === i.slice(-1) ? (i = i.replace(L, ""), c()) : f()
                }
            }(e.srcset, e)), e.cands
        }, u.getEmValue = function () {
            var e;
            if (!l && (e = s.body)) {
                var t = s.createElement("div"),
                    a = g.style.cssText,
                    i = e.style.cssText;
                t.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", g.style.cssText = S, e.style.cssText = S, e.appendChild(t), l = t.offsetWidth, e.removeChild(t), l = parseFloat(l, 10), g.style.cssText = a, e.style.cssText = i
            }
            return l || 16
        }, u.calcListLength = function (e) {
            if (!(e in E) || y.uT) {
                var t = u.calcLength(function (e) {
                    var t, a, i, n, s, o, l, r = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
                        d = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
                    for (i = (a = function (e) {
                            var t, a = "",
                                i = [],
                                n = [],
                                s = 0,
                                o = 0,
                                l = !1;

                            function r() {
                                a && (i.push(a), a = "")
                            }

                            function d() {
                                i[0] && (n.push(i), i = [])
                            }
                            for (;;) {
                                if ("" === (t = e.charAt(o))) return r(), d(), n;
                                if (l) {
                                    if ("*" === t && "/" === e[o + 1]) {
                                        l = !1, o += 2, r();
                                        continue
                                    }
                                    o += 1
                                } else {
                                    if (G(t)) {
                                        if (e.charAt(o - 1) && G(e.charAt(o - 1)) || !a) {
                                            o += 1;
                                            continue
                                        }
                                        if (0 === s) {
                                            r(), o += 1;
                                            continue
                                        }
                                        t = " "
                                    } else if ("(" === t) s += 1;
                                    else if (")" === t) s -= 1;
                                    else {
                                        if ("," === t) {
                                            r(), d(), o += 1;
                                            continue
                                        }
                                        if ("/" === t && "*" === e.charAt(o + 1)) {
                                            l = !0, o += 2;
                                            continue
                                        }
                                    }
                                    a += t, o += 1
                                }
                            }
                        }(e)).length, t = 0; t < i; t++)
                        if (s = (n = a[t])[n.length - 1], l = s, r.test(l) && parseFloat(l) >= 0 || d.test(l) || "0" === l || "-0" === l || "+0" === l) {
                            if (o = s, n.pop(), 0 === n.length) return o;
                            if (n = n.join(" "), u.matchesMedia(n)) return o
                        }
                    return "100vw"
                }(e));
                E[e] = t || M.width
            }
            return E[e]
        }, u.setRes = function (e) {
            var t;
            if (e)
                for (var a = 0, i = (t = u.parseSet(e)).length; a < i; a++) oe(t[a], e.sizes);
            return t
        }, u.setRes.res = oe, u.applySetCandidate = function (e, t) {
            if (e.length) {
                var a, i, n, s, o, l, r, d, c, f, h, m, v, A, g, p, w = t[u.ns],
                    _ = u.DPR;
                if (l = w.curSrc || t[x], (r = w.curCan || function (e, t, a) {
                        var i;
                        return !a && t && (a = (a = e[u.ns].sets) && a[a.length - 1]), (i = de(t, a)) && (t = u.makeUrl(t), e[u.ns].curSrc = t, e[u.ns].curCan = i, i.res || oe(i, i.set.sizes)), i
                    }(t, l, e[0].set)) && r.set === e[0].set && ((c = b && !t.complete && r.res - .1 > _) || (r.cached = !0, r.res >= _ && (o = r))), !o)
                    for (e.sort(re), o = e[(s = e.length) - 1], i = 0; i < s; i++)
                        if ((a = e[i]).res >= _) {
                            o = e[n = i - 1] && (c || l !== u.makeUrl(a.url)) && (f = e[n].res, h = a.res, m = _, v = e[n].cached, A = void 0, g = void 0, p = void 0, "saveData" === y.algorithm ? f > 2.7 ? p = m + 1 : (g = (h - m) * (A = Math.pow(f - .6, 1.5)), v && (g += .1 * A), p = f + g) : p = m > 1 ? Math.sqrt(f * h) : f, p > m) ? e[n] : a;
                            break
                        }
                o && (d = u.makeUrl(o.url), w.curSrc = d, w.curCan = o, d !== l && u.setSrc(t, o), u.setSize(t))
            }
        }, u.setSrc = function (e, t) {
            var a;
            e.src = t.url, "image/svg+xml" === t.set.type && (a = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = a))
        }, u.getSet = function (e) {
            var t, a, i, n = !1,
                s = e[u.ns].sets;
            for (t = 0; t < s.length && !n; t++)
                if ((a = s[t]).srcset && u.matchesMedia(a.media) && (i = u.supportsType(a.type))) {
                    "pending" === i && (a = i), n = a;
                    break
                }
            return n
        }, u.parseSets = function (e, t, a) {
            var i, n, s, o, l = t && "PICTURE" === t.nodeName.toUpperCase(),
                d = e[u.ns];
            (void 0 === d.src || a.src) && (d.src = m.call(e, "src"), d.src ? v.call(e, "data-pfsrc", d.src) : A.call(e, "data-pfsrc")), (void 0 === d.srcset || a.srcset || !u.supSrcset || e.srcset) && (i = m.call(e, "srcset"), d.srcset = i, o = !0), d.sets = [], l && (d.pic = !0, function (e, t) {
                var a, i, n, s, o = e.getElementsByTagName("source");
                for (a = 0, i = o.length; a < i; a++)(n = o[a])[u.ns] = !0, (s = n.getAttribute("srcset")) && t.push({
                    srcset: s,
                    media: n.getAttribute("media"),
                    type: n.getAttribute("type"),
                    sizes: n.getAttribute("sizes")
                })
            }(t, d.sets)), d.srcset ? (n = {
                srcset: d.srcset,
                sizes: m.call(e, "sizes")
            }, d.sets.push(n), (s = (r || d.src) && _.test(d.srcset || "")) || !d.src || de(d.src, n) || n.has1x || (n.srcset += ", " + d.src, n.cands.push({
                url: d.src,
                d: 1,
                set: n
            }))) : d.src && d.sets.push({
                srcset: d.src,
                sizes: null
            }), d.curCan = null, d.curSrc = void 0, d.supported = !(l || n && !u.supSrcset || s && !u.supSizes), o && u.supSrcset && !d.supported && (i ? (v.call(e, "data-pfsrcset", i), e.srcset = "") : A.call(e, "data-pfsrcset")), d.supported && !d.srcset && (!d.src && e.src || e.src !== u.makeUrl(d.src)) && (null === d.src ? e.removeAttribute("src") : e.src = d.src), d.parsed = !0
        }, u.fillImg = function (e, t) {
            var a, i, n, s, o, l = t.reselect || t.reevaluate;
            (e[u.ns] || (e[u.ns] = {}), a = e[u.ns], l || a.evaled !== d) && (a.parsed && !t.reevaluate || u.parseSets(e, e.parentNode, t), a.supported ? a.evaled = d : (i = e, s = u.getSet(i), o = !1, "pending" !== s && (o = d, s && (n = u.setRes(s), u.applySetCandidate(n, i))), i[u.ns].evaled = o))
        }, u.setupRun = function () {
            z && !T && C === n.devicePixelRatio || (T = !1, C = n.devicePixelRatio, P = {}, E = {}, u.DPR = C || 1, M.width = Math.max(n.innerWidth || 0, g.clientWidth), M.height = Math.max(n.innerHeight || 0, g.clientHeight), M.vw = M.width / 100, M.vh = M.height / 100, d = [M.height, M.width, C].join("-"), M.em = u.getEmValue(), M.rem = M.em)
        }, u.supPicture ? (le = f, u.fillImg = f) : (te = n.attachEvent ? /d$|^c/ : /d$|^c|^i/, ae = function () {
            var e = s.readyState || "";
            ie = setTimeout(ae, "loading" === e ? 200 : 999), s.body && (u.fillImgs(), (J = J || te.test(e)) && clearTimeout(ie))
        }, ie = setTimeout(ae, s.body ? 9 : 99), ne = g.clientHeight, U(n, "resize", (Y = function () {
            T = Math.max(n.innerWidth || 0, g.clientWidth) !== M.width || g.clientHeight !== ne, ne = g.clientHeight, T && u.fillImgs()
        }, X = 99, ee = function () {
            var e = new Date - D;
            e < X ? Z = setTimeout(ee, X - e) : (Z = null, Y())
        }, function () {
            D = new Date, Z || (Z = setTimeout(ee, X))
        })), U(s, "readystatechange", ae)), u.picturefill = le, u.fillImgs = le, u.teardownRun = f, le._ = u, n.picturefillCFG = {
            pf: u,
            push: function (e) {
                var t = e.shift();
                "function" == typeof u[t] ? u[t].apply(u, e) : (y[t] = e[0], z && u.fillImgs({
                    reselect: !0
                }))
            }
        };
        for (; $ && $.length;) n.picturefillCFG.push($.shift());
        n.picturefill = le, "object" == typeof e.exports ? e.exports = le : void 0 === (i = function () {
            return le
        }.call(t, a, t, e)) || (e.exports = i), u.supPicture || (p["image/webp"] = function (e, t) {
            var a = new n.Image;
            return a.onerror = function () {
                p[e] = !1, le()
            }, a.onload = function () {
                p[e] = 1 === a.width, le()
            }, a.src = t, "pending"
        }("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
    }(window, document)
}, function (e, t, a) {
    "use strict";
    a.r(t);
    var i = a(0);

    function n(e, t) {
        for (var a = 0; a < t.length; a++) {
            var i = t[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    a.n(i)()(), $(function () {
        setTimeout(() => {
            new s
        }, 500);
    });
    var s = function () {
        function e() {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.$win = $(window), this.$html = $("html"), this.$body = $("body"), this.spFlag = this.$win.width() < 769, this.tabsWrap = $(".js-tabs-wrap"), this.tabs = this.tabsWrap.find(".js-tabs a"), this.tabsContent = this.tabsWrap.find(".js-tabs-content"), this.time = 700, this.offsetY = this.spFlag ? 0 : $(".gb-common-2019_header").outerHeight(), this.hash = location.hash, this.loadingAnimation(), this.tabsChange(), this.kvPanelChange(), this.modalVideo()
        }
        var t, a, i;
        return t = e, (a = [{
            key: "loadingAnimation",
            value: function () {
                var e, t = this;
                (new TimelineMax).add((e = new TimelineMax, e.to(".kv__inner", 3, {
                    opacity: 1
                }), e), "scene01").add(function () {
                    var e = new TimelineMax;
                    return e.to(".kv__title", 2.5, {
                        opacity: 1,
                        ease: Power1.easeOut
                    }), e.to(".kv__text-wrap", 2.5, {
                        opacity: 1,
                        ease: Power1.easeOut
                    }, "-=2.5"), e.to(".kv__text-wrap", 1, {
                        opacity: 0,
                        ease: Power1.easeOut
                    }), t.spFlag ? e.to(".kv__title", 1, {
                        top: "5.7vw",
                        ease: Power1.easeOut
                    }, "-=1") : e.to(".kv__title", 1, {
                        top: "2.9vw",
                        ease: Power1.easeOut
                    }, "-=1"), e.set(".kv__title", {
                        className: "+=is-active"
                    }), e.to(".kv__panel__wrap", 1, {
                        opacity: 1,
                        ease: Power1.easeOut
                    }, "-=1"), e
                }(), "scene02").add(function () {
                    var e = new TimelineMax;
                    return t.spFlag ? (e.staggerTo(".kv__panel", 1.5, {
                        opacity: 1,
                        ease: Power1.easeOut
                    }, .2), e.add(TweenMax.to(".circle01", 1, {
                        "stroke-dasharray": "185 2386",
                        opacity: .6
                    }, "-=1.5")), e.add(TweenMax.to(".circle02", .1, {
                        "stroke-dasharray": "315 2386",
                        opacity: .6
                    })), e.add(TweenMax.to(".circle03", .1, {
                        "stroke-dasharray": "170 2386",
                        opacity: .6
                    })), e.add(TweenMax.to(".circle04", .1, {
                        "stroke-dasharray": "91 2386",
                        opacity: .6
                    })), e.add(TweenMax.to(".circle05", .1, {
                        "stroke-dasharray": "370 2386",
                        opacity: .6
                    })), e.add(TweenMax.to(".circle06", .1, {
                        "stroke-dasharray": "99 2386",
                        opacity: .6
                    }, "-=.8"))) : (e.set(".circle", {
                        "stroke-dasharray": "0 2386"
                    }), e.to(".kv__panel__clean-synergy", 1, {
                        opacity: 1,
                        ease: Power1.easeOut
                    }), e.to(".circle01", .6, {
                        "stroke-dasharray": "185 2386",
                        opacity: .6,
                        ease: Power1.easeOut
                    }, "-=.8"), e.to(".kv__panel__ewater-wand", .6, {
                        opacity: 1,
                        ease: Power1.easeOut
                    }, "-=.6"), e.to(".circle02", .6, {
                        "stroke-dasharray": "315 2386",
                        opacity: .6,
                        ease: Power1.easeOut
                    }), e.to(".kv__panel__ewater-bowl", .6, {
                        opacity: 1,
                        ease: Power1.easeOut
                    }, "-=.6"), e.to(".circle03", .6, {
                        "stroke-dasharray": "170 2386",
                        opacity: .6,
                        ease: Power1.easeOut
                    }), e.to(".kv__panel__cefiontect", .6, {
                        opacity: 1,
                        ease: Power1.easeOut
                    }, "-=.6"), e.to(".circle04", .6, {
                        "stroke-dasharray": "91 2386",
                        opacity: .6,
                        ease: Power1.easeOut
                    }), e.to(".kv__panel__tornado-flush", .6, {
                        opacity: 1,
                        ease: Power1.easeOut
                    }, "-=.6"), e.to(".circle05", .6, {
                        "stroke-dasharray": "370 2386",
                        opacity: .6,
                        ease: Power1.easeOut
                    }), e.to(".kv__panel__premist", .6, {
                        opacity: 1,
                        ease: Power1.easeOut
                    }, "-=.3"), e.to(".circle06", .6, {
                        "stroke-dasharray": "99 2386",
                        opacity: .6,
                        ease: Power1.easeOut
                    })), e.set(".kv", {
                        className: "+=is-loaded"
                    }), e
                }(), "scene03")
            }
        }, {
            key: "tabsChange",
            value: function () {
                var e, t = this;
                this.tabs.on("click", function (a) {
                    return $(a.currentTarget).hasClass("is-active") || (t.tabs.removeClass("is-active"), t.tabsContent.removeClass("is-active"), e = $(a.currentTarget).data("tabs-id"), $('[data-tabs-id="' + e + '"]').addClass("is-active"), t.smoothScrollFunc(t, a)), !1
                })
            }
        }, {
            key: "kvPanelChange",
            value: function () {
                var e, t = this;
                this.offsetY, this.time, this.hash;
                this.$body.on("click", ".kv__panel a.js-kv-scroll", function (a) {
                    return t.tabs.removeClass("is-active"), t.tabsContent.removeClass("is-active"), e = $(a.currentTarget).data("tabs-id"), $('[data-tabs-id="' + e + '"]').addClass("is-active"), t.smoothScrollFunc(t, a), !1
                })
            }
        }, {
            key: "smoothScrollFunc",
            value: function (e, t) {
                var a = $(t.currentTarget).attr("href"),
                    i = $(a),
                    n = i[0] && "#pagetop" !== i ? i.offset().top - e.offsetY : 0;
                $("html,body").animate({
                    scrollTop: n
                }, {
                    duration: e.time,
                    easing: "swing"
                }), $(this).blur()
            }
        }, {
            key: "smoothScroll",
            value: function () {
                var e = this;
                this.$body.on("click", ".js-scroll", function (t) {
                    return e.smoothScrollFunc(e, t), !1
                })
            }
        }, {
            key: "modalVideo",
            value: function () {
                var e, t, a, i = this;
                navigator.userAgent.toLowerCase().indexOf("ipad");
                var movid;
                return $("[data-modal-open]").on("click", function (n) {
                    n.preventDefault();
                    movid = $(this).attr("id");
                    //console.log(movid);
                    var s = $(this),
                        o = (i.$win.scrollTop(), i.$win.height(), s.attr("href"));
                    e = '<div class="modal" data-modal>                            <button data-modal-close class="modal-bg"></button>                                <div class="modal-inner">                                    <div id="player">                                        <video data-video-id                                         data-account="4631489730001"                                         data-player="BJKE2i5G"                                         data-embed="default"                                         data-application-id                                         class="video-js"                                         controls></video>                                        <script src="//players.brightcove.net/4631489730001/BJKE2i5G_default/index.min.js"></script>          <a class="transcript-toggle" href="javascript:void(0);" aria-controls="transcript-1334" aria-expanded="false" aria-label="Transcript" role="button" tabindex="0">Transcript</a><transcript id="transcript" aria-expanded="true"><a href="javascript:void(0);" class="close" role="button" tabindex="0">Close</a><h3>Description of Movie</h3><div class="transcript-text"></div></transcript>                          <button data-modal-close class="modal-close"></button>                                </div>                            </div>                        </div>'.replace("data-video-id", 'data-video-id="' + o + '"'), i.$body.append(e), $("[data-modal]").fadeIn(400, function () {
                        setTimeout(function () {
                            $("#player video").get(0).play()
                        }, 800);
                        setTimeout(function () {
                            $(".vjs-play-control").focus();
                        }, 1000);
                    }), /*setTimeout(function(){$("#player video").get(0).play()}, 800),*/ $("#player .video-js").addClass("vjs-has-started"), a = i.$win.scrollTop(), t = "top: " + -a + "px !important;", $("#body_inner").addClass("is-fixed"), $("#body_inner").css({
                        cssText: t
                    });
                    $('#transcript .transcript-text').html($(this).parent().next().html());

                    if ($(this).hasClass("no-transcript")) {
                        $('.transcript-toggle').hide();
                    } else {
                        $('.transcript-toggle').show();
                    }

                }), $(document).on("click", "[data-modal-close]", function () {
                    $("[data-modal]").fadeOut(), $("#body_inner").removeClass("is-fixed"), $("#body_inner").attr({
                        style: ""
                    }), $("html, body").prop({
                        scrollTop: a
                    }), $("#player .video-js").removeClass("vjs-has-started"), $("[data-modal]").remove(), $('#' + movid).focus();
                }), !1
            }
        }]) && n(t.prototype, a), i && n(t, i), e
    }()
}]);
//# sourceMappingURL=bundle.js.map

$(document).ready(function () {
    $('body').on('click', '.transcript-toggle', function () {
        $('#transcript').fadeToggle();
    });
    $('body').on('click', '#transcript .close', function () {
        $('#transcript').fadeToggle();
    });
});