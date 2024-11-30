(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7743], {
        31588: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 84242))
        },
        84242: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return p
                }
            });
            var n = r(92284),
                l = r(93222),
                s = r(78572),
                i = r(22209),
                a = r(37917),
                c = r(98237),
                o = r(64673);
            let u = () => {
                let {
                    connected: e
                } = (0, o.Z)(), {
                    data: t
                } = (0, c.a)({
                    queryKey: ["credits/balance"],
                    queryFn: () => e && fetch("/api/credits/balance").then(e => e.json())
                }), r = (0, i.usePathname)(), l = r.split("/")[1];
                return (0, n.jsx)("div", {
                    className: "sticky top-0 left-0 z-[10] w-full py-5",
                    children: (0, n.jsxs)("div", {
                        className: "flex justify-between items-center py-2 px-6",
                        children: [(0, n.jsx)("div", {
                            className: "flex-1",
                            children: (0, n.jsx)("h1", {
                                className: "text-2xl font-semibold capitalize",
                                children: l
                            })
                        }), (0, n.jsxs)("div", {
                            className: "max-md:hidden flex items-center space-x-3",
                            children: [e && t && (0, n.jsxs)("div", {
                                className: "font-bold",
                                children: ["Balance ", t.balance]
                            }), (0, n.jsx)(a.NL, {
                                showBalance: !1
                            })]
                        })]
                    })
                })
            };
            var d = e => {
                    let {
                        children: t
                    } = e, r = (0, i.usePathname)(), {
                        connected: l,
                        status: s
                    } = (0, o.Z)();
                    return r.startsWith("/manage") || "loading" === s || ("/connect-wallet" === r && l && (0, i.redirect)("/dashboard"), "/connect-wallet" === r || l || (0, i.redirect)("/connect-wallet")), (0, n.jsx)(n.Fragment, {
                        children: t
                    })
                },
                f = r(75584),
                m = r(60739);
            let h = () => {
                let [e, t] = s.useState(!1);
                return (0, n.jsxs)("div", {
                    className: "md:hidden",
                    children: [(0, n.jsx)("div", {
                        className: "absolute top-7 right-6 cursor-pointer md:hidden z-[20]",
                        children: (0, n.jsx)("div", {
                            onClick: () => {
                                t(e => !e)
                            },
                            children: e ? (0, n.jsx)(m.IOM, {
                                className: "text-white text-3xl"
                            }) : (0, n.jsx)(f.vHB, {
                                className: "text-white text-3xl"
                            })
                        })
                    }), e && (0, n.jsx)(l.Y, {
                        setOpen: t
                    })]
                })
            };
            var p = e => {
                let {
                    children: t
                } = e;
                return (0, n.jsx)("main", {
                    className: "md:container",
                    children: (0, n.jsxs)("div", {
                        className: "flex h-screen",
                        children: [(0, n.jsx)("div", {
                            className: "max-md:hidden",
                            children: (0, n.jsx)(l.Y, {})
                        }), (0, n.jsx)(h, {}), (0, n.jsxs)("div", {
                            className: "flex flex-col flex-1",
                            children: [(0, n.jsx)(u, {}), (0, n.jsx)("div", {
                                className: "p-6 overflow-y-scroll",
                                children: (0, n.jsx)(d, {
                                    children: t
                                })
                            })]
                        })]
                    })
                })
            }
        },
        58500: function(e, t, r) {
            "use strict";
            r.d(t, {
                w_: function() {
                    return u
                }
            });
            var n = r(78572),
                l = {
                    color: void 0,
                    size: void 0,
                    className: void 0,
                    style: void 0,
                    attr: void 0
                },
                s = n.createContext && n.createContext(l),
                i = ["attr", "size", "title"];

            function a() {
                return (a = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach(function(t) {
                        var n, l;
                        n = t, l = r[t], (n = function(e) {
                            var t = function(e, t) {
                                if ("object" != typeof e || !e) return e;
                                var r = e[Symbol.toPrimitive];
                                if (void 0 !== r) {
                                    var n = r.call(e, t || "default");
                                    if ("object" != typeof n) return n;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == typeof t ? t : t + ""
                        }(n)) in e ? Object.defineProperty(e, n, {
                            value: l,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = l
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function u(e) {
                return t => n.createElement(d, a({
                    attr: o({}, e.attr)
                }, t), function e(t) {
                    return t && t.map((t, r) => n.createElement(t.tag, o({
                        key: r
                    }, t.attr), e(t.child)))
                }(e.child))
            }

            function d(e) {
                var t = t => {
                    var r, {
                            attr: l,
                            size: s,
                            title: c
                        } = e,
                        u = function(e, t) {
                            if (null == e) return {};
                            var r, n, l = function(e, t) {
                                if (null == e) return {};
                                var r = {};
                                for (var n in e)
                                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                                        if (t.indexOf(n) >= 0) continue;
                                        r[n] = e[n]
                                    }
                                return r
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var s = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < s.length; n++) r = s[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r])
                            }
                            return l
                        }(e, i),
                        d = s || t.size || "1em";
                    return t.className && (r = t.className), e.className && (r = (r ? r + " " : "") + e.className), n.createElement("svg", a({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, l, u, {
                        className: r,
                        style: o(o({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: d,
                        width: d,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), c && n.createElement("title", null, c), e.children)
                };
                return void 0 !== s ? n.createElement(s.Consumer, null, e => t(e)) : t(l)
            }
        }
    },
    function(e) {
        e.O(0, [190, 9309, 7417, 8237, 7208, 3816, 4541, 1890, 3758, 9351, 4601, 3222, 7013, 6620, 1744], function() {
            return e(e.s = 31588)
        }), _N_E = e.O()
    }
]);