"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5091], {
        55091: function(t, e, r) {
            r.d(e, {
                AM0: function() {
                    return o
                }
            });
            var n = r(58500);

            function o(t) {
                return (0, n.w_)({
                    tag: "svg",
                    attr: {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    },
                    child: [{
                        tag: "path",
                        attr: {
                            d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"
                        },
                        child: []
                    }]
                })(t)
            }
        },
        58500: function(t, e, r) {
            r.d(e, {
                w_: function() {
                    return s
                }
            });
            var n = r(78572),
                o = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                i = n.createContext && n.createContext(o),
                c = ["attr", "size", "title"];

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }).apply(this, arguments)
            }

            function l(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(r), !0).forEach(function(e) {
                        var n, o;
                        n = e, o = r[e], (n = function(t) {
                            var e = function(t, e) {
                                if ("object" != typeof t || !t) return t;
                                var r = t[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(t, e || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == typeof e ? e : e + ""
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    })
                }
                return t
            }

            function s(t) {
                return e => n.createElement(f, a({
                    attr: u({}, t.attr)
                }, e), function t(e) {
                    return e && e.map((e, r) => n.createElement(e.tag, u({
                        key: r
                    }, e.attr), t(e.child)))
                }(t.child))
            }

            function f(t) {
                var e = e => {
                    var r, {
                            attr: o,
                            size: i,
                            title: l
                        } = t,
                        s = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = function(t, e) {
                                if (null == t) return {};
                                var r = {};
                                for (var n in t)
                                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                                        if (e.indexOf(n) >= 0) continue;
                                        r[n] = t[n]
                                    }
                                return r
                            }(t, e);
                            if (Object.getOwnPropertySymbols) {
                                var i = Object.getOwnPropertySymbols(t);
                                for (n = 0; n < i.length; n++) r = i[n], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                            }
                            return o
                        }(t, c),
                        f = i || e.size || "1em";
                    return e.className && (r = e.className), t.className && (r = (r ? r + " " : "") + t.className), n.createElement("svg", a({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, e.attr, o, s, {
                        className: r,
                        style: u(u({
                            color: t.color || e.color
                        }, e.style), t.style),
                        height: f,
                        width: f,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), l && n.createElement("title", null, l), t.children)
                };
                return void 0 !== i ? n.createElement(i.Consumer, null, t => e(t)) : e(o)
            }
        }
    }
]);