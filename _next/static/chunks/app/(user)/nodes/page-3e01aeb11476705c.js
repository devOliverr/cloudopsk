(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8195], {
        71051: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 11192))
        },
        11192: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(92284);
            r(78572);
            var o = r(98237),
                i = r(75305),
                a = r(29017),
                s = r(44818),
                c = r(24009);
            t.default = () => {
                let {
                    isPending: e,
                    data: t
                } = (0, o.a)({
                    queryKey: ["nodes/user"],
                    queryFn: () => fetch("/api/nodes/user").then(e => e.json())
                });
                return e ? (0, n.jsxs)("div", {
                    className: "grid items-center grid-cols-1 gap-8 pt-2 md:grid-cols-3",
                    children: [(0, n.jsx)(i.O, {
                        className: "rounded-lg w-[220] h-[320px] mr-2 block"
                    }), (0, n.jsx)(i.O, {
                        className: "rounded-lg w-[220] h-[320px] mr-2 block"
                    }), (0, n.jsx)(i.O, {
                        className: "rounded-lg w-[220] h-[320px] mr-2 block"
                    })]
                }) : Array.isArray(t) ? (0, n.jsx)("div", {
                    className: "grid items-center grid-cols-1 gap-8 md:grid-cols-3",
                    children: null == t ? void 0 : t.map((e, t) => (0, n.jsx)(s.O, {
                        id: e.id,
                        name: e.blockchain.name,
                        payType: e.blockchain.payType,
                        created: (0, c.p6)(e.createdAt),
                        description: e.blockchain.description,
                        status: e.status,
                        expireInDays: e.blockchain.payType === a.PAY_TYPE.FULL ? e.payments.reduce((e, t) => e += t.duration, 0) - (0, c.sZ)(e.createdAt) : void 0
                    }, t))
                }) : (0, n.jsx)(n.Fragment, {
                    children: "No data"
                })
            }
        },
        44818: function(e, t, r) {
            "use strict";
            r.d(t, {
                O: function() {
                    return b
                }
            });
            var n = r(92284),
                o = r(20615),
                i = r.n(o);
            r(78572);
            var a = r(95168),
                s = r(86897),
                c = r(89131),
                l = r.n(c),
                u = r(73918),
                d = r(24009);
            let f = (0, u.j)("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
                variants: {
                    variant: {
                        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
                        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
                        outline: "text-foreground"
                    }
                },
                defaultVariants: {
                    variant: "default"
                }
            });

            function p(e) {
                let {
                    className: t,
                    variant: r,
                    ...o
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, d.cn)(f({
                        variant: r
                    }), t),
                    ...o
                })
            }
            var m = r(29017);
            let b = e => {
                let {
                    id: t,
                    name: r,
                    created: o,
                    description: c,
                    disabled: u,
                    status: d,
                    expireInDays: f,
                    payType: b,
                    isComing: v,
                    noCapacity: g,
                    onBuy: h
                } = e;
                return (0, n.jsxs)("div", {
                    className: "col-span-1 p-4 rounded-[16px] backdrop:blur-[100px] overflow-hidden flex flex-col gap-4 border border-zinc-600 h-full",
                    children: [(0, n.jsx)("div", {
                        className: "flex bg-[url(/image/node.png)] rounded-[16px] bg-center bg-cover bg-no-repeat h-[172px] justify-center items-center ",
                        children: (0, n.jsx)(i(), {
                            src: "/icons/blockchain/".concat(r.toLowerCase().replace(/ /g, "-"), ".png"),
                            alt: "",
                            width: 120,
                            height: 120,
                            className: "object-contain pt-3 m-auto"
                        })
                    }), (0, n.jsxs)("div", {
                        className: "flex flex-col gap-2 flex-1",
                        children: [(0, n.jsxs)("div", {
                            className: "flex justify-between items-center",
                            children: [(0, n.jsx)("h1", {
                                className: "text-white font-[600] text-[16px]",
                                children: r
                            }), (0, n.jsxs)("div", {
                                className: "flex space-x-2",
                                children: [void 0 !== f && f < Number("10") && (0, n.jsxs)(p, {
                                    children: [f, " days left"]
                                }), b === m.PAY_TYPE.PARTIAL && (0, n.jsx)(p, {
                                    children: "PARTIAL"
                                }), d && (0, n.jsx)(p, {
                                    children: d
                                })]
                            })]
                        }), (0, n.jsx)("p", {
                            className: "text-[#BDBDBD] font-[500] text-[12px] line-clamp-2",
                            children: c
                        }), (0, n.jsx)("p", {
                            className: "text-[#BDBDBD] font-[500] text-[12px]",
                            children: o
                        })]
                    }), u ? (0, n.jsx)(a.z, {
                        type: "button",
                        variant: "custom",
                        disabled: !0,
                        children: "Sold out"
                    }) : v ? (0, n.jsx)(a.z, {
                        type: "button",
                        variant: "custom",
                        disabled: !0,
                        children: "Coming Soon"
                    }) : h ? (0, n.jsxs)(a.z, {
                        type: "button",
                        variant: "custom",
                        onClick: h,
                        disabled: g,
                        children: ["Deploy", (0, n.jsx)(s.dhL, {
                            className: "ml-2 font-[300]"
                        })]
                    }) : void 0 !== t && (0, n.jsx)(a.z, {
                        asChild: !0,
                        variant: "custom",
                        children: (0, n.jsxs)(l(), {
                            href: "nodes/".concat(t),
                            children: ["Details", (0, n.jsx)(s.dhL, {
                                className: "ml-2 font-[300]"
                            })]
                        })
                    })]
                })
            }
        },
        95168: function(e, t, r) {
            "use strict";
            r.d(t, {
                z: function() {
                    return l
                }
            });
            var n = r(92284),
                o = r(78572),
                i = r(1985),
                a = r(73918),
                s = r(24009);
            let c = (0, a.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
                    variants: {
                        variant: {
                            default: "bg-primary text-primary-foreground hover:bg-primary/90",
                            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            ghost: "hover:bg-accent hover:text-accent-foreground",
                            link: "text-primary underline-offset-4 hover:underline",
                            custom: "text-white font-[600] text-[16px] bg-[#F44336] hover:bg-[#fe3b2d] rounded-[12px] w-full"
                        },
                        size: {
                            default: "h-10 px-4 py-2",
                            sm: "h-9 rounded-md px-3",
                            lg: "h-11 rounded-md px-8",
                            icon: "h-10 w-10"
                        }
                    },
                    defaultVariants: {
                        variant: "default",
                        size: "default"
                    }
                }),
                l = o.forwardRef((e, t) => {
                    let {
                        className: r,
                        variant: o,
                        size: a,
                        asChild: l = !1,
                        ...u
                    } = e, d = l ? i.g7 : "button";
                    return (0, n.jsx)(d, {
                        className: (0, s.cn)(c({
                            variant: o,
                            size: a,
                            className: r
                        })),
                        ref: t,
                        ...u
                    })
                });
            l.displayName = "Button"
        },
        75305: function(e, t, r) {
            "use strict";
            r.d(t, {
                O: function() {
                    return i
                }
            });
            var n = r(92284),
                o = r(24009);

            function i(e) {
                let {
                    className: t,
                    ...r
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, o.cn)("animate-pulse rounded-md bg-primary/10", t),
                    ...r
                })
            }
        },
        24009: function(e, t, r) {
            "use strict";
            r.d(t, {
                cn: function() {
                    return i
                },
                p6: function() {
                    return c
                },
                sZ: function() {
                    return l
                },
                vh: function() {
                    return u
                },
                zs: function() {
                    return a
                }
            });
            var n = r(62856),
                o = r(63278);

            function i() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, o.m6)((0, n.W)(t))
            }
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                        t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                        r = "";
                    for (let n = 0; n < e; n++) r += t.charAt(Math.floor(Math.random() * t.length));
                    return r
                },
                s = new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                    timeStyle: "medium"
                }),
                c = e => s.format(new Date(e)).toString(),
                l = e => Math.round((Date.now() - new Date(e).getTime()) / 864e5),
                u = e => e.length <= 10 ? e : e.slice(0, 5) + "..." + e.slice(-5)
        },
        58500: function(e, t, r) {
            "use strict";
            r.d(t, {
                w_: function() {
                    return u
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
                a = ["attr", "size", "title"];

            function s() {
                return (s = Object.assign ? Object.assign.bind() : function(e) {
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

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(r), !0).forEach(function(t) {
                        var n, o;
                        n = t, o = r[t], (n = function(e) {
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
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = o
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function u(e) {
                return t => n.createElement(d, s({
                    attr: l({}, e.attr)
                }, t), function e(t) {
                    return t && t.map((t, r) => n.createElement(t.tag, l({
                        key: r
                    }, t.attr), e(t.child)))
                }(e.child))
            }

            function d(e) {
                var t = t => {
                    var r, {
                            attr: o,
                            size: i,
                            title: c
                        } = e,
                        u = function(e, t) {
                            if (null == e) return {};
                            var r, n, o = function(e, t) {
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
                                var i = Object.getOwnPropertySymbols(e);
                                for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r])
                            }
                            return o
                        }(e, a),
                        d = i || t.size || "1em";
                    return t.className && (r = t.className), e.className && (r = (r ? r + " " : "") + e.className), n.createElement("svg", s({
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0"
                    }, t.attr, o, u, {
                        className: r,
                        style: l(l({
                            color: e.color || t.color
                        }, t.style), e.style),
                        height: d,
                        width: d,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), c && n.createElement("title", null, c), e.children)
                };
                return void 0 !== i ? n.createElement(i.Consumer, null, e => t(e)) : t(o)
            }
        }
    },
    function(e) {
        e.O(0, [2188, 7846, 8237, 7208, 3758, 9017, 7013, 6620, 1744], function() {
            return e(e.s = 71051)
        }), _N_E = e.O()
    }
]);