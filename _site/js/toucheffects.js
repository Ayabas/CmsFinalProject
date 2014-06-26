(function(e) {
    if (Modernizr.touch) {
        function t(e) {
            return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }
        var n, r, i;
        if ("classList"in document.documentElement) {
            n = function(e, t) {
                return e.classList.contains(t)
            };
            r = function(e, t) {
                e.classList.add(t)
            };
            i = function(e, t) {
                e.classList.remove(t)
            }
        } else {
            n = function(e, n) {
                return t(n).test(e.className)
            };
            r = function(e, t) {
                if (!n(e, t)) {
                    e.className = e.className + " " + t
                }
            };
            i = function(e, n) {
                e.className = e.className.replace(t(n), " ")
            }
        }
        function s(e, t) {
            var s = n(e, t) ? i: r;
            s(e, t)
        }
        var o = {
            hasClass: n,
            addClass: r,
            removeClass: i,
            toggleClass: s,
            has: n,
            add: r,
            remove: i,
            toggle: s
        };
        if (typeof define === "function" && define.amd) {
            define(o)
        } else {
            e.classie = o
        }
        [].slice.call(document.querySelectorAll("ul.grid > li > figure")).forEach(function(e, t) {
            e.querySelector("figcaption > a").addEventListener("touchstart", function(e) {
                e.stopPropagation()
            }, false);
            e.addEventListener("touchstart", function(e) {
                o.toggle(this, "cs-hover")
            }, false)
        })
    }
})(window)
