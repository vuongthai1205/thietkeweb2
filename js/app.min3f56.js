var project = {};
(project.window = $(window)),
    (project.document = $(document)),
    (project.body = $("body")),
    (project.header = $("header")),
    (project.menuBtn = $(".menu-btn", "header")),
    (project.mobile = 900);
var App = {
    pageInit: function () {
        App.Global.init(),
            $(window).resize(onResize),
            $("html").addClass("loaded");
    },
    Global: {
        init: function () {
            const e = window.window.location.href.split("index.html")[4],
                t = window.location.href.split("index.html")[3];
            if (
                (e && $("body").addClass("page-" + e),
                $("#countdown").length &&
                    ("cn" === t
                        ? $("#countdown").countdown(
                              "2021/07/06 18:00:00",
                              function (e) {
                                  $(this).html(
                                      e.strftime(
                                          '<div class="number days"><div>%D</div><span>天</span></div> <div class="number"><div>%H</div><span>时</span></div><div class="dot">:</div><div class="number"><div>%M</div><span>分</span></div><div class="dot">:</div><div class="number"><div>%S</div><span>秒</span></div>'
                                      )
                                  );
                              }
                          )
                        : $("#countdown").countdown(
                              "2021/07/06 18:00:00",
                              function (e) {
                                  $(this).html(
                                      e.strftime(
                                          '<div class="number days"><div>%D</div><span>Days</span></div> <div class="number"><div>%H</div><span>Hours</span></div><div class="dot">:</div><div class="number"><div>%M</div><span>Minutes</span></div><div class="dot">:</div><div class="number"><div>%S</div><span>Seconds</span></div>'
                                      )
                                  );
                              }
                          )),
                $(".prev-phases .item").on("click", function () {
                    const e = $(this).find(".item--content");
                    e.hasClass("visible")
                        ? (e.removeClass("visible"),
                          $(this).find(".plus").text("+"))
                        : (e.addClass("visible"),
                          $(this).find(".plus").text("-"));
                }),
                $(".section--hero"))
            ) {
                const e = $(".section--hero"),
                    t =
                        '<img src="./assets/layout/elon_sperm_2.gif" class="elon_sperm sperm1" />',
                    n =
                        '<img src="./assets/layout/elon_sperm_2.gif" class="elon_sperm sperm2" />',
                    o =
                        '<img src="./assets/layout/elon_sperm_2.gif" class="elon_sperm sperm3" />';
                setTimeout(function () {
                    e.append(t), animateSperm(".elon_sperm.sperm1");
                }, 2e3),
                    setTimeout(function () {
                        e.append(n), animateSperm(".elon_sperm.sperm2");
                    }, 2500),
                    setTimeout(function () {
                        e.append(o), animateSperm(".elon_sperm.sperm3");
                    }, 3500);
            }
        },
    },
};
function onResize(e) {}
function makeNewPosition() {
    var e = $(window).height() + 50,
        t = $(window).width() - 50;
    return [Math.floor(Math.random() * e), Math.floor(Math.random() * t)];
}
function animateSperm(e) {
    var t,
        n = ["left", "right", "rotate"],
        o = n[Math.floor(Math.random() * n.length)],
        r = $(e);
    switch ((r.each(function (e) {}), r.removeClass("flip rotate"), o)) {
        case "left":
            r.css({ left: " -200px" }).addClass("flip"),
                (t = $(window).width());
            break;
        case "rotate":
            r.css({ left: " -200px" }).addClass("flip rotate"),
                (t = $(window).width());
            break;
        case "right":
            r.css({ left: " " + $(window).width() + "px" }), (t = -200);
    }
    var i = getRndInteger(0, 95);
    r.css({ top: getRndInteger(30, 90) + "%" }),
        r.animate(
            { top: i + "%", left: t },
            getRndInteger(12e3, 16e3),
            function () {
                setTimeout(function () {
                    animateSperm(e);
                }, 1e4 * Math.random());
            }
        );
}
function getRndInteger(e, t) {
    return Math.floor(Math.random() * (t - e)) + e;
}
$(function () {
    App.pageInit();
});
const Loader = {
    _loader:
        '<div class="loader"><div class="spinner">\n  <div class="double-bounce1"></div>\n  <div class="double-bounce2"></div>\n</div></div>',
    init: function (e) {
        var t = this.getLoader();
        $(e).append(t);
    },
    showLoader: function (e) {
        $(e).find(".loader").addClass("visible");
    },
    hideLoader: function (e) {
        $(e).find(".loader").removeClass("visible");
    },
    getLoader: function () {
        return this._loader;
    },
};
$(function () {
    Loader.init("body");
});
const RANK = {
        1: { title: "Memembryo", tube: 1 },
        2: { title: "Mr. Sluggish", tube: 2 },
        3: { title: "Ejack", tube: 3 },
        4: { title: "Spunky", tube: 4 },
        5: { title: "Speedy", tube: 5 },
        6: { title: "Phelps", tube: 6 },
        7: { title: "Sperm Daddy", tube: 7 },
        8: { title: "Lord of Sperm", tube: 7 },
    },
    Profile = {
        formatProfile: function (e) {
            const t = document.querySelector(".current_rank"),
                n = document.querySelector(".next_rank"),
                o = document.querySelector(".remain_sperms"),
                r = document.querySelector(".tube"),
                i = document.querySelector(".ribbon"),
                a = document.querySelector(".nextRankString");
            let s,
                l = 0;
            e < 1e5
                ? ((s = 1), (l = 1e6))
                : e > 1e5 && e <= 1e6
                ? ((s = 2), (l = 1e7))
                : e > 1e6 && e <= 1e7
                ? ((s = 3), (l = 1e8))
                : e > 1e7 && e <= 1e8
                ? ((s = 4), (l = 1e9))
                : e > 1e8 && e <= 1e9
                ? ((s = 5), (l = 5e9))
                : e > 1e9 && e <= 5e9
                ? ((s = 6), (l = 1e10))
                : e > 5e9 && e < 1e10
                ? ((s = 7), (l = 1e10))
                : e >= 1e10 && (s = 8),
                console.log(e),
                (t.textContent = RANK[s].title),
                (r.src = `./assets/tube/${RANK[s].tube}.png`),
                "Lord of Sperm" === RANK[s].title
                    ? (i.classList.add("final"),
                      (a.style.display = "none"),
                      (t.textContent = RANK[8].title))
                    : ((n.textContent = RANK[s + 1].title),
                      (o.textContent = numeral(l - e).format(",")));
        },
    };
!(function (e, t) {
    "function" == typeof define && define.amd
        ? define(t)
        : "object" == typeof module && module.exports
        ? (module.exports = t())
        : (e.numeral = t());
})(this, function () {
    function e(e, t) {
        (this._input = e), (this._value = t);
    }
    var t,
        n,
        o = {},
        r = {},
        i = {
            currentLocale: "en",
            zeroFormat: null,
            nullFormat: null,
            defaultFormat: "0,0",
            scalePercentBy100: !0,
        },
        a = {
            currentLocale: i.currentLocale,
            zeroFormat: i.zeroFormat,
            nullFormat: i.nullFormat,
            defaultFormat: i.defaultFormat,
            scalePercentBy100: i.scalePercentBy100,
        };
    return (
        ((t = function (r) {
            var i, s, l, c;
            if (t.isNumeral(r)) i = r.value();
            else if (0 === r || void 0 === r) i = 0;
            else if (null === r || n.isNaN(r)) i = null;
            else if ("string" == typeof r)
                if (a.zeroFormat && r === a.zeroFormat) i = 0;
                else if (
                    (a.nullFormat && r === a.nullFormat) ||
                    !r.replace(/[^0-9]+/g, "").length
                )
                    i = null;
                else {
                    for (s in o)
                        if (
                            (c =
                                "function" == typeof o[s].regexps.unformat
                                    ? o[s].regexps.unformat()
                                    : o[s].regexps.unformat) &&
                            r.match(c)
                        ) {
                            l = o[s].unformat;
                            break;
                        }
                    i = (l = l || t._.stringToNumber)(r);
                }
            else i = Number(r) || null;
            return new e(r, i);
        }).version = "2.0.6"),
        (t.isNumeral = function (t) {
            return t instanceof e;
        }),
        (t._ = n =
            {
                numberToFormat: function (e, n, o) {
                    var i,
                        a,
                        s,
                        l,
                        c,
                        u,
                        d,
                        f,
                        h = r[t.options.currentLocale],
                        m = !1,
                        p = !1,
                        b = "",
                        v = 1e12,
                        g = "",
                        w = !1;
                    if (
                        ((e = e || 0),
                        (a = Math.abs(e)),
                        t._.includes(n, "(")
                            ? ((m = !0), (n = n.replace(/[\(|\)]/g, "")))
                            : (t._.includes(n, "+") || t._.includes(n, "-")) &&
                              ((c = t._.includes(n, "+")
                                  ? n.indexOf("+")
                                  : 0 > e
                                  ? n.indexOf("-")
                                  : -1),
                              (n = n.replace(/[\+|\-]/g, ""))),
                        t._.includes(n, "a") &&
                            ((i = !!(i = n.match(/a(k|m|b|t)?/)) && i[1]),
                            t._.includes(n, " a") && (b = " "),
                            (n = n.replace(new RegExp(b + "a[kmbt]?"), "")),
                            (a >= v && !i) || "t" === i
                                ? ((b += h.abbreviations.trillion), (e /= v))
                                : (v > a && a >= 1e9 && !i) || "b" === i
                                ? ((b += h.abbreviations.billion), (e /= 1e9))
                                : (1e9 > a && a >= 1e6 && !i) || "m" === i
                                ? ((b += h.abbreviations.million), (e /= 1e6))
                                : ((1e6 > a && a >= 1e3 && !i) || "k" === i) &&
                                  ((b += h.abbreviations.thousand),
                                  (e /= 1e3))),
                        t._.includes(n, "[.]") &&
                            ((p = !0), (n = n.replace("[.]", "."))),
                        (s = e.toString().split(".")[0]),
                        (l = n.split(".")[1]),
                        (u = n.indexOf(",")),
                        (f = (n.split(".")[0].split(",")[0].match(/0/g) || [])
                            .length),
                        l
                            ? (t._.includes(l, "[")
                                  ? ((l = (l = l.replace("]", "")).split("[")),
                                    (g = t._.toFixed(
                                        e,
                                        l[0].length + l[1].length,
                                        o,
                                        l[1].length
                                    )))
                                  : (g = t._.toFixed(e, l.length, o)),
                              (s = g.split(".")[0]),
                              (g = t._.includes(g, ".")
                                  ? h.delimiters.decimal + g.split(".")[1]
                                  : ""),
                              p && 0 === Number(g.slice(1)) && (g = ""))
                            : (s = t._.toFixed(e, 0, o)),
                        b &&
                            !i &&
                            Number(s) >= 1e3 &&
                            b !== h.abbreviations.trillion)
                    )
                        switch (((s = String(Number(s) / 1e3)), b)) {
                            case h.abbreviations.thousand:
                                b = h.abbreviations.million;
                                break;
                            case h.abbreviations.million:
                                b = h.abbreviations.billion;
                                break;
                            case h.abbreviations.billion:
                                b = h.abbreviations.trillion;
                        }
                    if (
                        (t._.includes(s, "-") && ((s = s.slice(1)), (w = !0)),
                        s.length < f)
                    )
                        for (var y = f - s.length; y > 0; y--) s = "0" + s;
                    return (
                        u > -1 &&
                            (s = s
                                .toString()
                                .replace(
                                    /(\d)(?=(\d{3})+(?!\d))/g,
                                    "$1" + h.delimiters.thousands
                                )),
                        0 === n.indexOf(".") && (s = ""),
                        (d = s + g + (b || "")),
                        m
                            ? (d =
                                  (m && w ? "(" : "") + d + (m && w ? ")" : ""))
                            : c >= 0
                            ? (d =
                                  0 === c
                                      ? (w ? "-" : "+") + d
                                      : d + (w ? "-" : "+"))
                            : w && (d = "-" + d),
                        d
                    );
                },
                stringToNumber: function (e) {
                    var t,
                        n,
                        o,
                        i = r[a.currentLocale],
                        s = e,
                        l = {
                            thousand: 3,
                            million: 6,
                            billion: 9,
                            trillion: 12,
                        };
                    if (a.zeroFormat && e === a.zeroFormat) n = 0;
                    else if (
                        (a.nullFormat && e === a.nullFormat) ||
                        !e.replace(/[^0-9]+/g, "").length
                    )
                        n = null;
                    else {
                        for (t in ((n = 1),
                        "." !== i.delimiters.decimal &&
                            (e = e
                                .replace(/\./g, "")
                                .replace(i.delimiters.decimal, ".")),
                        l))
                            if (
                                ((o = new RegExp(
                                    "[^a-zA-Z]" +
                                        i.abbreviations[t] +
                                        "(?:\\)|(\\" +
                                        i.currency.symbol +
                                        ")?(?:\\))?)?$"
                                )),
                                s.match(o))
                            ) {
                                n *= Math.pow(10, l[t]);
                                break;
                            }
                        (n *=
                            (e.split("-").length +
                                Math.min(
                                    e.split("(").length - 1,
                                    e.split(")").length - 1
                                )) %
                            2
                                ? 1
                                : -1),
                            (e = e.replace(/[^0-9\.]+/g, "")),
                            (n *= Number(e));
                    }
                    return n;
                },
                isNaN: function (e) {
                    return "number" == typeof e && isNaN(e);
                },
                includes: function (e, t) {
                    return -1 !== e.indexOf(t);
                },
                insert: function (e, t, n) {
                    return e.slice(0, n) + t + e.slice(n);
                },
                reduce: function (e, t) {
                    if (null === this)
                        throw new TypeError(
                            "Array.prototype.reduce called on null or undefined"
                        );
                    if ("function" != typeof t)
                        throw new TypeError(t + " is not a function");
                    var n,
                        o = Object(e),
                        r = o.length >>> 0,
                        i = 0;
                    if (3 === arguments.length) n = arguments[2];
                    else {
                        for (; r > i && !(i in o); ) i++;
                        if (i >= r)
                            throw new TypeError(
                                "Reduce of empty array with no initial value"
                            );
                        n = o[i++];
                    }
                    for (; r > i; i++) i in o && (n = t(n, o[i], i, o));
                    return n;
                },
                multiplier: function (e) {
                    var t = e.toString().split(".");
                    return t.length < 2 ? 1 : Math.pow(10, t[1].length);
                },
                correctionFactor: function () {
                    return Array.prototype.slice
                        .call(arguments)
                        .reduce(function (e, t) {
                            var o = n.multiplier(t);
                            return e > o ? e : o;
                        }, 1);
                },
                toFixed: function (e, t, n, o) {
                    var r,
                        i,
                        a,
                        s,
                        l = e.toString().split("."),
                        c = t - (o || 0);
                    return (
                        (r =
                            2 === l.length
                                ? Math.min(Math.max(l[1].length, c), t)
                                : c),
                        (a = Math.pow(10, r)),
                        (s = (n(e + "e+" + r) / a).toFixed(r)),
                        o > t - r &&
                            ((i = new RegExp(
                                "\\.?0{1," + (o - (t - r)) + "}$"
                            )),
                            (s = s.replace(i, ""))),
                        s
                    );
                },
            }),
        (t.options = a),
        (t.formats = o),
        (t.locales = r),
        (t.locale = function (e) {
            return e && (a.currentLocale = e.toLowerCase()), a.currentLocale;
        }),
        (t.localeData = function (e) {
            if (!e) return r[a.currentLocale];
            if (((e = e.toLowerCase()), !r[e]))
                throw new Error("Unknown locale : " + e);
            return r[e];
        }),
        (t.reset = function () {
            for (var e in i) a[e] = i[e];
        }),
        (t.zeroFormat = function (e) {
            a.zeroFormat = "string" == typeof e ? e : null;
        }),
        (t.nullFormat = function (e) {
            a.nullFormat = "string" == typeof e ? e : null;
        }),
        (t.defaultFormat = function (e) {
            a.defaultFormat = "string" == typeof e ? e : "0.0";
        }),
        (t.register = function (e, t, n) {
            if (((t = t.toLowerCase()), this[e + "s"][t]))
                throw new TypeError(t + " " + e + " already registered.");
            return (this[e + "s"][t] = n), n;
        }),
        (t.validate = function (e, n) {
            var o, r, i, a, s, l, c, u;
            if (
                ("string" != typeof e &&
                    ((e += ""),
                    console.warn &&
                        console.warn(
                            "Numeral.js: Value is not string. It has been co-erced to: ",
                            e
                        )),
                (e = e.trim()).match(/^\d+$/))
            )
                return !0;
            if ("" === e) return !1;
            try {
                c = t.localeData(n);
            } catch (e) {
                c = t.localeData(t.locale());
            }
            return (
                (i = c.currency.symbol),
                (s = c.abbreviations),
                (o = c.delimiters.decimal),
                (r =
                    "." === c.delimiters.thousands
                        ? "\\."
                        : c.delimiters.thousands),
                (null === (u = e.match(/^[^\d]+/)) ||
                    ((e = e.substr(1)), u[0] === i)) &&
                    (null === (u = e.match(/[^\d]+$/)) ||
                        ((e = e.slice(0, -1)),
                        u[0] === s.thousand ||
                            u[0] === s.million ||
                            u[0] === s.billion ||
                            u[0] === s.trillion)) &&
                    ((l = new RegExp(r + "{2}")),
                    !e.match(/[^\d.,]/g) &&
                        !((a = e.split(o)).length > 2) &&
                        (a.length < 2
                            ? !!a[0].match(/^\d+.*\d$/) && !a[0].match(l)
                            : 1 === a[0].length
                            ? !!a[0].match(/^\d+$/) &&
                              !a[0].match(l) &&
                              !!a[1].match(/^\d+$/)
                            : !!a[0].match(/^\d+.*\d$/) &&
                              !a[0].match(l) &&
                              !!a[1].match(/^\d+$/)))
            );
        }),
        (t.fn = e.prototype =
            {
                clone: function () {
                    return t(this);
                },
                format: function (e, n) {
                    var r,
                        i,
                        s,
                        l = this._value,
                        c = e || a.defaultFormat;
                    if (
                        ((n = n || Math.round),
                        0 === l && null !== a.zeroFormat)
                    )
                        i = a.zeroFormat;
                    else if (null === l && null !== a.nullFormat)
                        i = a.nullFormat;
                    else {
                        for (r in o)
                            if (c.match(o[r].regexps.format)) {
                                s = o[r].format;
                                break;
                            }
                        i = (s = s || t._.numberToFormat)(l, c, n);
                    }
                    return i;
                },
                value: function () {
                    return this._value;
                },
                input: function () {
                    return this._input;
                },
                set: function (e) {
                    return (this._value = Number(e)), this;
                },
                add: function (e) {
                    var t = n.correctionFactor.call(null, this._value, e);
                    return (
                        (this._value =
                            n.reduce(
                                [this._value, e],
                                function (e, n, o, r) {
                                    return e + Math.round(t * n);
                                },
                                0
                            ) / t),
                        this
                    );
                },
                subtract: function (e) {
                    var t = n.correctionFactor.call(null, this._value, e);
                    return (
                        (this._value =
                            n.reduce(
                                [e],
                                function (e, n, o, r) {
                                    return e - Math.round(t * n);
                                },
                                Math.round(this._value * t)
                            ) / t),
                        this
                    );
                },
                multiply: function (e) {
                    return (
                        (this._value = n.reduce(
                            [this._value, e],
                            function (e, t, o, r) {
                                var i = n.correctionFactor(e, t);
                                return (
                                    (Math.round(e * i) * Math.round(t * i)) /
                                    Math.round(i * i)
                                );
                            },
                            1
                        )),
                        this
                    );
                },
                divide: function (e) {
                    return (
                        (this._value = n.reduce(
                            [this._value, e],
                            function (e, t, o, r) {
                                var i = n.correctionFactor(e, t);
                                return Math.round(e * i) / Math.round(t * i);
                            }
                        )),
                        this
                    );
                },
                difference: function (e) {
                    return Math.abs(t(this._value).subtract(e).value());
                },
            }),
        t.register("locale", "en", {
            delimiters: { thousands: ",", decimal: "." },
            abbreviations: {
                thousand: "k",
                million: "m",
                billion: "b",
                trillion: "t",
            },
            ordinal: function (e) {
                var t = e % 10;
                return 1 == ~~((e % 100) / 10)
                    ? "th"
                    : 1 === t
                    ? "st"
                    : 2 === t
                    ? "nd"
                    : 3 === t
                    ? "rd"
                    : "th";
            },
            currency: { symbol: "$" },
        }),
        t.register("format", "bps", {
            regexps: { format: /(BPS)/, unformat: /(BPS)/ },
            format: function (e, n, o) {
                var r,
                    i = t._.includes(n, " BPS") ? " " : "";
                return (
                    (e *= 1e4),
                    (n = n.replace(/\s?BPS/, "")),
                    (r = t._.numberToFormat(e, n, o)),
                    t._.includes(r, ")")
                        ? ((r = r.split("")).splice(-1, 0, i + "BPS"),
                          (r = r.join("")))
                        : (r = r + i + "BPS"),
                    r
                );
            },
            unformat: function (e) {
                return +(1e-4 * t._.stringToNumber(e)).toFixed(15);
            },
        }),
        (function () {
            var e = {
                    base: 1e3,
                    suffixes: [
                        "B",
                        "KB",
                        "MB",
                        "GB",
                        "TB",
                        "PB",
                        "EB",
                        "ZB",
                        "YB",
                    ],
                },
                n = {
                    base: 1024,
                    suffixes: [
                        "B",
                        "KiB",
                        "MiB",
                        "GiB",
                        "TiB",
                        "PiB",
                        "EiB",
                        "ZiB",
                        "YiB",
                    ],
                },
                o = e.suffixes
                    .concat(
                        n.suffixes.filter(function (t) {
                            return e.suffixes.indexOf(t) < 0;
                        })
                    )
                    .join("|");
            (o = "(" + o.replace("B", "B(?!PS)") + ")"),
                t.register("format", "bytes", {
                    regexps: { format: /([0\s]i?b)/, unformat: new RegExp(o) },
                    format: function (o, r, i) {
                        var a,
                            s,
                            l,
                            c = t._.includes(r, "ib") ? n : e,
                            u =
                                t._.includes(r, " b") || t._.includes(r, " ib")
                                    ? " "
                                    : "";
                        for (
                            r = r.replace(/\s?i?b/, ""), a = 0;
                            a <= c.suffixes.length;
                            a++
                        )
                            if (
                                ((s = Math.pow(c.base, a)),
                                (l = Math.pow(c.base, a + 1)),
                                null === o || 0 === o || (o >= s && l > o))
                            ) {
                                (u += c.suffixes[a]), s > 0 && (o /= s);
                                break;
                            }
                        return t._.numberToFormat(o, r, i) + u;
                    },
                    unformat: function (o) {
                        var r,
                            i,
                            a = t._.stringToNumber(o);
                        if (a) {
                            for (r = e.suffixes.length - 1; r >= 0; r--) {
                                if (t._.includes(o, e.suffixes[r])) {
                                    i = Math.pow(e.base, r);
                                    break;
                                }
                                if (t._.includes(o, n.suffixes[r])) {
                                    i = Math.pow(n.base, r);
                                    break;
                                }
                            }
                            a *= i || 1;
                        }
                        return a;
                    },
                });
        })(),
        t.register("format", "currency", {
            regexps: { format: /(\$)/ },
            format: function (e, n, o) {
                var r,
                    i,
                    a = t.locales[t.options.currentLocale],
                    s = {
                        before: n.match(/^([\+|\-|\(|\s|\$]*)/)[0],
                        after: n.match(/([\+|\-|\)|\s|\$]*)$/)[0],
                    };
                for (
                    n = n.replace(/\s?\$\s?/, ""),
                        r = t._.numberToFormat(e, n, o),
                        e >= 0
                            ? ((s.before = s.before.replace(/[\-\(]/, "")),
                              (s.after = s.after.replace(/[\-\)]/, "")))
                            : 0 > e &&
                              !t._.includes(s.before, "-") &&
                              !t._.includes(s.before, "(") &&
                              (s.before = "-" + s.before),
                        i = 0;
                    i < s.before.length;
                    i++
                )
                    switch (s.before[i]) {
                        case "$":
                            r = t._.insert(r, a.currency.symbol, i);
                            break;
                        case " ":
                            r = t._.insert(
                                r,
                                " ",
                                i + a.currency.symbol.length - 1
                            );
                    }
                for (i = s.after.length - 1; i >= 0; i--)
                    switch (s.after[i]) {
                        case "$":
                            r =
                                i === s.after.length - 1
                                    ? r + a.currency.symbol
                                    : t._.insert(
                                          r,
                                          a.currency.symbol,
                                          -(s.after.length - (1 + i))
                                      );
                            break;
                        case " ":
                            r =
                                i === s.after.length - 1
                                    ? r + " "
                                    : t._.insert(
                                          r,
                                          " ",
                                          -(
                                              s.after.length -
                                              (1 + i) +
                                              a.currency.symbol.length -
                                              1
                                          )
                                      );
                    }
                return r;
            },
        }),
        t.register("format", "exponential", {
            regexps: { format: /(e\+|e-)/, unformat: /(e\+|e-)/ },
            format: function (e, n, o) {
                var r = (
                    "number" != typeof e || t._.isNaN(e)
                        ? "0e+0"
                        : e.toExponential()
                ).split("e");
                return (
                    (n = n.replace(/e[\+|\-]{1}0/, "")),
                    t._.numberToFormat(Number(r[0]), n, o) + "e" + r[1]
                );
            },
            unformat: function (e) {
                var n = t._.includes(e, "e+") ? e.split("e+") : e.split("e-"),
                    o = Number(n[0]),
                    r = Number(n[1]);
                return (
                    (r = t._.includes(e, "e-") ? (r *= -1) : r),
                    t._.reduce(
                        [o, Math.pow(10, r)],
                        function (e, n, o, r) {
                            var i = t._.correctionFactor(e, n);
                            return (e * i * (n * i)) / (i * i);
                        },
                        1
                    )
                );
            },
        }),
        t.register("format", "ordinal", {
            regexps: { format: /(o)/ },
            format: function (e, n, o) {
                var r = t.locales[t.options.currentLocale],
                    i = t._.includes(n, " o") ? " " : "";
                return (
                    (n = n.replace(/\s?o/, "")),
                    (i += r.ordinal(e)),
                    t._.numberToFormat(e, n, o) + i
                );
            },
        }),
        t.register("format", "percentage", {
            regexps: { format: /(%)/, unformat: /(%)/ },
            format: function (e, n, o) {
                var r,
                    i = t._.includes(n, " %") ? " " : "";
                return (
                    t.options.scalePercentBy100 && (e *= 100),
                    (n = n.replace(/\s?\%/, "")),
                    (r = t._.numberToFormat(e, n, o)),
                    t._.includes(r, ")")
                        ? ((r = r.split("")).splice(-1, 0, i + "%"),
                          (r = r.join("")))
                        : (r = r + i + "%"),
                    r
                );
            },
            unformat: function (e) {
                var n = t._.stringToNumber(e);
                return t.options.scalePercentBy100 ? 0.01 * n : n;
            },
        }),
        t.register("format", "time", {
            regexps: { format: /(:)/, unformat: /(:)/ },
            format: function (e, t, n) {
                var o = Math.floor(e / 60 / 60),
                    r = Math.floor((e - 60 * o * 60) / 60),
                    i = Math.round(e - 60 * o * 60 - 60 * r);
                return (
                    o +
                    ":" +
                    (10 > r ? "0" + r : r) +
                    ":" +
                    (10 > i ? "0" + i : i)
                );
            },
            unformat: function (e) {
                var t = e.split(":"),
                    n = 0;
                return (
                    3 === t.length
                        ? ((n += 60 * Number(t[0]) * 60),
                          (n += 60 * Number(t[1])),
                          (n += Number(t[2])))
                        : 2 === t.length &&
                          ((n += 60 * Number(t[0])), (n += Number(t[1]))),
                    Number(n)
                );
            },
        }),
        t
    );
});
("use strict");
const Web3Modal = window.Web3Modal.default,
    WalletConnectProvider = window.WalletConnectProvider.default,
    evmChains = window.evmChains,
    tokenABI = window.human_standard_token_abi;
let web3Modal, provider, selectedAccount;
const lang = "/" + window.location.href.split("index.html")[3];
function init() {
    console.log("Initializing example Web3Modal"),
        console.log("WalletConnectProvider is", WalletConnectProvider),
        console.log(
            "window.web3 is",
            window.web3,
            "window.ethereum is",
            window.ethereum
        );
    const e = localStorage.getItem("walletconnect")
            ? JSON.parse(localStorage.getItem("walletconnect"))
            : null,
        t = localStorage.getItem("elonsperm_token")
            ? localStorage.getItem("elonsperm_token")
            : null;
    let n;
    ((e && e.connected && e.accounts[0]) || t) &&
        ((n = e && e.accounts[0] ? e.accounts[0] : t),
        (document.querySelector("#btn-profile").href = lang + "/profile/" + n),
        (document.querySelector("#btn-connected").href =
            lang + "/profile/" + n),
        document.querySelector("#btn-fertility") &&
            (document.querySelector("#btn-fertility").href =
                lang + "/profile/" + n),
        (document.querySelector("#btn-connect").style.display = "none"),
        document.querySelector("#btn-connected").classList.add("visible"),
        document.querySelector("#btn-profile").classList.add("visible")),
        (web3Modal = new Web3Modal({
            cacheProvider: !1,
            providerOptions: {
                walletconnect: {
                    package: WalletConnectProvider,
                    options: {
                        rpc: { 56: "https://bsc-dataseed.binance.org/" },
                        chainId: 56,
                        infuraId: "aee58f9eb0e041c88efe5c7d20067a44",
                    },
                },
            },
            disableInjectedProvider: !1,
        })),
        console.log("Web3Modal instance is", web3Modal);
    const o = window.location.href.split("index.html");
    o[5] && (Loader.showLoader("body"), getProfile(o[5]));
}
async function getProfile(e) {
    const t = new Web3("https://bsc-dataseed1.binance.org:443/"),
        n = await t.eth.getBalance(e),
        o = t.utils.fromWei(n, "ether");
    var r = parseFloat(o).toFixed(4);
    new t.eth.Contract(
        tokenABI,
        "0x7Abf7f54F30a45c7c43D728A75d6741440d7c591"
    ).methods
        .balanceOf(e)
        .call()
        .then(function (t) {
            (r = parseFloat(t).toFixed(0)),
                Profile.formatProfile(parseFloat(r / 1e9).toFixed(0));
            const n = numeral(r / 1e9).format(",");
            (document.querySelector(".username").textContent =
                e.substring(0, 14) +
                "..." +
                e.substring(e.length - 5, e.length)),
                (document.querySelector(".balance").textContent = n),
                Loader.hideLoader("body");
        });
}
async function fetchAccountData() {
    const e = new Web3(provider);
    console.log("Web3 instance is", e);
    const t = await e.eth.getChainId(),
        n = (evmChains.getChain(t), await e.eth.getAccounts());
    console.log("Got accounts", n),
        (selectedAccount = n[0]),
        (document.querySelector("#btn-profile").href =
            lang + "/profile/" + selectedAccount),
        (document.querySelector("#btn-connected").href =
            lang + "/profile/" + selectedAccount),
        document.querySelector("#btn-fertility") &&
            (document.querySelector("#btn-fertility").href =
                lang + "/profile/" + selectedAccount);
    const o = n.map(async (t) => {
        const n = await e.eth.getBalance(t),
            o = e.utils.fromWei(n, "ether");
        parseFloat(o).toFixed(4);
        new e.eth.Contract(
            tokenABI,
            "0x7Abf7f54F30a45c7c43D728A75d6741440d7c591"
        ).methods
            .balanceOf(t)
            .call()
            .then(function (e) {
                parseFloat(e).toFixed(0),
                    localStorage.setItem("elonsperm_token", t),
                    (window.location.href = `${lang}/profile/${t}`);
            });
    });
    await Promise.all(o),
        (document.querySelector("#btn-connect").style.display = "none"),
        document.querySelector("#btn-connected").classList.add("visible"),
        document.querySelector("#btn-profile").classList.add("visible");
}
async function refreshAccountData() {
    document.querySelector("#btn-connected").classList.remove("visible"),
        document.querySelector("#btn-profile").classList.remove("visible"),
        (document.querySelector("#btn-connect").style.display = "none"),
        await fetchAccountData(provider);
}
async function onConnect() {
    console.log("Opening a dialog", web3Modal);
    try {
        provider = await web3Modal.connect();
    } catch (e) {
        return void console.log("Could not get a wallet connection", e);
    }
    provider.on("accountsChanged", (e) => {
        fetchAccountData();
    }),
        provider.on("chainChanged", (e) => {
            fetchAccountData();
        }),
        provider.on("networkChanged", (e) => {
            fetchAccountData();
        }),
        await refreshAccountData();
}
async function onDisconnect() {
    console.log("Killing the wallet connection", provider),
        provider.close &&
            (await provider.close(),
            await web3Modal.clearCachedProvider(),
            (provider = null)),
        (selectedAccount = null);
}
window.addEventListener("load", async () => {
    init(),
        document
            .querySelector("#btn-connect")
            .addEventListener("click", onConnect);
}),
    (function (e) {
        "function" == typeof define && define.amd
            ? define(["jquery"], e)
            : e(jQuery);
    })(function (e) {
        var t = [],
            n = [],
            o = { precision: 100, elapse: !1, defer: !1 };
        n.push(/^[0-9]*$/.source),
            n.push(
                /([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source
            ),
            n.push(
                /[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/
                    .source
            ),
            (n = new RegExp(n.join("|")));
        var r = {
            Y: "years",
            m: "months",
            n: "daysToMonth",
            d: "daysToWeek",
            w: "weeks",
            W: "weeksToMonth",
            H: "hours",
            M: "minutes",
            S: "seconds",
            D: "totalDays",
            I: "totalHours",
            N: "totalMinutes",
            T: "totalSeconds",
        };
        function i(e, t) {
            var n = "s",
                o = "";
            return (
                e &&
                    (1 === (e = e.replace(/(:|;|\s)/gi, "").split(/\,/)).length
                        ? (n = e[0])
                        : ((o = e[0]), (n = e[1]))),
                Math.abs(t) > 1 ? n : o
            );
        }
        var a = function (n, r, i) {
            (this.el = n),
                (this.$el = e(n)),
                (this.interval = null),
                (this.offset = {}),
                (this.options = e.extend({}, o)),
                (this.instanceNumber = t.length),
                t.push(this),
                this.$el.data("countdown-instance", this.instanceNumber),
                i &&
                    ("function" == typeof i
                        ? (this.$el.on("update.countdown", i),
                          this.$el.on("stoped.countdown", i),
                          this.$el.on("finish.countdown", i))
                        : (this.options = e.extend({}, o, i))),
                this.setFinalDate(r),
                !1 === this.options.defer && this.start();
        };
        e.extend(a.prototype, {
            start: function () {
                null !== this.interval && clearInterval(this.interval);
                var e = this;
                this.update(),
                    (this.interval = setInterval(function () {
                        e.update.call(e);
                    }, this.options.precision));
            },
            stop: function () {
                clearInterval(this.interval),
                    (this.interval = null),
                    this.dispatchEvent("stoped");
            },
            toggle: function () {
                this.interval ? this.stop() : this.start();
            },
            pause: function () {
                this.stop();
            },
            resume: function () {
                this.start();
            },
            remove: function () {
                this.stop.call(this),
                    (t[this.instanceNumber] = null),
                    delete this.$el.data().countdownInstance;
            },
            setFinalDate: function (e) {
                this.finalDate = (function (e) {
                    if (e instanceof Date) return e;
                    if (String(e).match(n))
                        return (
                            String(e).match(/^[0-9]*$/) && (e = Number(e)),
                            String(e).match(/\-/) &&
                                (e = String(e).replace(/\-/g, "index.html")),
                            new Date(e)
                        );
                    throw new Error(
                        "Couldn't cast `" + e + "` to a date object."
                    );
                })(e);
            },
            update: function () {
                if (0 !== this.$el.closest("html").length) {
                    var t,
                        n = void 0 !== e._data(this.el, "events"),
                        o = new Date();
                    (t = this.finalDate.getTime() - o.getTime()),
                        (t = Math.ceil(t / 1e3)),
                        (t = !this.options.elapse && t < 0 ? 0 : Math.abs(t)),
                        this.totalSecsLeft !== t &&
                            n &&
                            ((this.totalSecsLeft = t),
                            (this.elapsed = o >= this.finalDate),
                            (this.offset = {
                                seconds: this.totalSecsLeft % 60,
                                minutes:
                                    Math.floor(this.totalSecsLeft / 60) % 60,
                                hours:
                                    Math.floor(this.totalSecsLeft / 60 / 60) %
                                    24,
                                days:
                                    Math.floor(
                                        this.totalSecsLeft / 60 / 60 / 24
                                    ) % 7,
                                daysToWeek:
                                    Math.floor(
                                        this.totalSecsLeft / 60 / 60 / 24
                                    ) % 7,
                                daysToMonth: Math.floor(
                                    (this.totalSecsLeft / 60 / 60 / 24) %
                                        30.4368
                                ),
                                weeks: Math.floor(
                                    this.totalSecsLeft / 60 / 60 / 24 / 7
                                ),
                                weeksToMonth:
                                    Math.floor(
                                        this.totalSecsLeft / 60 / 60 / 24 / 7
                                    ) % 4,
                                months: Math.floor(
                                    this.totalSecsLeft / 60 / 60 / 24 / 30.4368
                                ),
                                years: Math.abs(
                                    this.finalDate.getFullYear() -
                                        o.getFullYear()
                                ),
                                totalDays: Math.floor(
                                    this.totalSecsLeft / 60 / 60 / 24
                                ),
                                totalHours: Math.floor(
                                    this.totalSecsLeft / 60 / 60
                                ),
                                totalMinutes: Math.floor(
                                    this.totalSecsLeft / 60
                                ),
                                totalSeconds: this.totalSecsLeft,
                            }),
                            this.options.elapse || 0 !== this.totalSecsLeft
                                ? this.dispatchEvent("update")
                                : (this.stop(), this.dispatchEvent("finish")));
                } else this.remove();
            },
            dispatchEvent: function (t) {
                var n,
                    o = e.Event(t + ".countdown");
                (o.finalDate = this.finalDate),
                    (o.elapsed = this.elapsed),
                    (o.offset = e.extend({}, this.offset)),
                    (o.strftime =
                        ((n = this.offset),
                        function (e) {
                            var t,
                                o,
                                a = e.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                            if (a)
                                for (var s = 0, l = a.length; s < l; ++s) {
                                    var c = a[s].match(
                                            /%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/
                                        ),
                                        u =
                                            ((t = c[0]),
                                            (o = t
                                                .toString()
                                                .replace(
                                                    /([.?*+^$[\]\\(){}|-])/g,
                                                    "\\$1"
                                                )),
                                            new RegExp(o)),
                                        d = c[1] || "",
                                        f = c[3] || "",
                                        h = null;
                                    (c = c[2]),
                                        r.hasOwnProperty(c) &&
                                            ((h = r[c]), (h = Number(n[h]))),
                                        null !== h &&
                                            ("!" === d && (h = i(f, h)),
                                            "" === d &&
                                                h < 10 &&
                                                (h = "0" + h.toString()),
                                            (e = e.replace(u, h.toString())));
                                }
                            return (e = e.replace(/%%/, "%"));
                        })),
                    this.$el.trigger(o);
            },
        }),
            (e.fn.countdown = function () {
                var n = Array.prototype.slice.call(arguments, 0);
                return this.each(function () {
                    var o = e(this).data("countdown-instance");
                    if (void 0 !== o) {
                        var r = t[o],
                            i = n[0];
                        a.prototype.hasOwnProperty(i)
                            ? r[i].apply(r, n.slice(1))
                            : null === String(i).match(/^[$A-Z_][0-9A-Z_$]*$/i)
                            ? (r.setFinalDate.call(r, i), r.start())
                            : e.error(
                                  "Method %s does not exist on jQuery.countdown".replace(
                                      /\%s/gi,
                                      i
                                  )
                              );
                    } else new a(this, n[0], n[1]);
                });
            });
    });
