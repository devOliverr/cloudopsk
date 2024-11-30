(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7694], {
        51369: function(e, s, r) {
            Promise.resolve().then(r.bind(r, 66631))
        },
        66631: function(e, s, r) {
            "use strict";
            r.r(s), r.d(s, {
                default: function() {
                    return C
                }
            });
            var n = r(92284),
                t = r(78572),
                l = r(24009);
            let a = t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, n.jsx)("div", {
                    ref: s,
                    className: (0, l.cn)("rounded-xl border bg-card text-card-foreground shadow", r),
                    ...t
                })
            });
            a.displayName = "Card";
            let i = t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, n.jsx)("div", {
                    ref: s,
                    className: (0, l.cn)("flex flex-col space-y-1.5 p-6", r),
                    ...t
                })
            });
            i.displayName = "CardHeader";
            let c = t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, n.jsx)("h3", {
                    ref: s,
                    className: (0, l.cn)("font-semibold leading-none tracking-tight", r),
                    ...t
                })
            });
            c.displayName = "CardTitle";
            let o = t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, n.jsx)("p", {
                    ref: s,
                    className: (0, l.cn)("text-sm text-muted-foreground", r),
                    ...t
                })
            });
            o.displayName = "CardDescription";
            let d = t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, n.jsx)("div", {
                    ref: s,
                    className: (0, l.cn)("p-6 pt-0", r),
                    ...t
                })
            });
            d.displayName = "CardContent";
            let u = t.forwardRef((e, s) => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, n.jsx)("div", {
                    ref: s,
                    className: (0, l.cn)("flex items-center p-6 pt-0", r),
                    ...t
                })
            });
            u.displayName = "CardFooter";
            var x = r(75305),
                h = r(98237),
                f = r(20615),
                m = r.n(f);

            function p() {
                let {
                    isPending: e,
                    data: s
                } = (0, h.a)({
                    queryKey: ["blockchain/list"],
                    queryFn: () => fetch("/api/blockchains/list").then(e => e.json())
                });
                return (0, n.jsxs)(a, {
                    children: [(0, n.jsxs)(i, {
                        children: [(0, n.jsx)(c, {
                            children: "Blockchains"
                        }), (0, n.jsx)(o, {
                            children: "Available chains for deployment"
                        })]
                    }), (0, n.jsx)(d, {
                        children: e ? (0, n.jsxs)("div", {
                            className: "flex flex-row w-full",
                            children: [(0, n.jsx)(x.O, {
                                className: "rounded-lg w-[32px] h-[32px] mr-2"
                            }), (0, n.jsx)(x.O, {
                                className: "rounded-lg w-[32px] h-[32px] mr-2"
                            }), (0, n.jsx)(x.O, {
                                className: "rounded-lg w-[32px] h-[32px] mr-2"
                            }), (0, n.jsx)(x.O, {
                                className: "rounded-lg w-[32px] h-[32px]"
                            })]
                        }) : (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)("div", {
                                className: "flex flex-row w-full",
                                children: Array.isArray(s) && (null == s ? void 0 : s.map((e, s) => (0, n.jsx)("a", {
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: null == e ? void 0 : e.url,
                                    className: "".concat(0 !== s ? "ml-[-8px]" : "", " "),
                                    children: (0, n.jsx)(m(), {
                                        src: "/icons/blockchain/".concat(null == e ? void 0 : e.name.toLowerCase().replace(/ /g, "-"), ".png"),
                                        alt: null == e ? void 0 : e.name,
                                        width: 32,
                                        height: 32,
                                        className: "rounded-[5px]"
                                    })
                                }, s)))
                            }), (0, n.jsxs)("p", {
                                className: "mt-6 text-xs text-muted-foreground",
                                children: ["on ", null == s ? void 0 : s.length, " blockchains"]
                            })]
                        })
                    })]
                })
            }
            var g = r(95168),
                v = r(55091),
                j = r(89131),
                N = r.n(j),
                b = e => {
                    let {
                        title: s,
                        activeCount: r,
                        totalCount: t,
                        chainCount: l,
                        link: u,
                        className: h
                    } = e;
                    return (0, n.jsxs)(a, {
                        className: h,
                        children: [(0, n.jsxs)(i, {
                            children: [(0, n.jsx)(c, {
                                children: s
                            }), (0, n.jsx)(o, {
                                children: "Currently running nodes"
                            })]
                        }), (0, n.jsxs)(d, {
                            children: [void 0 === t ? (0, n.jsxs)("div", {
                                className: "flex flex-row w-full",
                                children: [(0, n.jsx)(x.O, {
                                    className: "rounded-lg w-[32px] h-[32px] mr-2"
                                }), (0, n.jsx)(x.O, {
                                    className: "rounded-lg w-[32px] h-[32px] mr-2"
                                }), (0, n.jsx)(x.O, {
                                    className: "rounded-lg w-[32px] h-[32px] mr-2"
                                }), (0, n.jsx)(x.O, {
                                    className: "rounded-lg w-[32px] h-[32px]"
                                })]
                            }) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("div", {
                                    className: "text-4xl font-bold",
                                    children: r === t ? t : (0, n.jsxs)(n.Fragment, {
                                        children: [r, (0, n.jsx)("span", {
                                            className: "text-xl mx-4",
                                            children: "/"
                                        }), t]
                                    })
                                }), (0, n.jsxs)("p", {
                                    className: "text-xs text-muted-foreground",
                                    children: ["on ", l, " blockchains"]
                                })]
                            }), u && (0, n.jsx)(g.z, {
                                asChild: !0,
                                variant: "custom",
                                className: "mt-6 w-full items-center",
                                children: (0, n.jsxs)(N(), {
                                    href: u,
                                    children: [(0, n.jsx)(v.AM0, {
                                        className: "mr-2"
                                    }), "View"]
                                })
                            })]
                        })]
                    })
                };
            r(47252);
            let y = () => {
                    let e = (0, t.useRef)(null),
                        s = (0, t.useRef)(null),
                        {
                            isPending: r,
                            data: l
                        } = (0, h.a)({
                            queryKey: ["dashboard/server/list"],
                            queryFn: () => fetch("/api/server/list").then(e => e.json())
                        }),
                        [a, i] = (0, t.useState)(0);
                    return (0, t.useEffect)(() => {
                        l && i(Math.min(100, Math.floor(100 * (l.total - l.capacity) / l.total)))
                    }, [l]), (0, t.useEffect)(() => {
                        s.current && e.current && (s.current.textContent = a.toString(), e.current.style.setProperty("--progress-value", a.toString()), e.current.dataset.value = a.toString(), a > 50 ? e.current.classList.add("progress--upper-half-value") : e.current.classList.contains("progress--upper-half-value") && e.current.classList.remove("progress--upper-half-value"))
                    }, [a]), (0, n.jsxs)("div", {
                        className: "progress",
                        role: "progressbar",
                        ref: e,
                        children: [(0, n.jsx)("div", {
                            className: "absolute z-10 w-full font-semibold leading-none tracking-tight text-left top-4 left-4",
                            children: "Capacity"
                        }), (0, n.jsxs)("div", {
                            className: "progress-inner",
                            children: [(0, n.jsx)("div", {
                                className: "progress-indicator"
                            }), (0, n.jsx)("div", {
                                className: "progress-indicator"
                            })]
                        }), (0, n.jsx)("span", {
                            className: "text-xs progress-label md:text-base",
                            children: r ? (0, n.jsx)(x.O, {
                                className: "rounded-lg w-[32px] h-[32px] m-auto"
                            }) : (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)("strong", {
                                    ref: s,
                                    children: a
                                }), (0, n.jsx)("span", {
                                    children: "%"
                                })]
                            })
                        })]
                    })
                },
                w = e => {
                    let {
                        value: s,
                        className: r
                    } = e;
                    return (0, n.jsxs)(a, {
                        className: r,
                        children: [(0, n.jsxs)(i, {
                            children: [(0, n.jsx)(c, {
                                children: "Treasury"
                            }), (0, n.jsx)(o, {
                                children: "Total value locked"
                            })]
                        }), (0, n.jsx)(d, {
                            children: (0, n.jsx)("p", {
                                className: "text-4xl font-bold blur-[5px]",
                                children: s.toLocaleString()
                            })
                        })]
                    })
                };
            var C = () => {
                var e;
                let {
                    isPending: s,
                    data: r
                } = (0, h.a)({
                    queryKey: ["nodes/user"],
                    queryFn: () => fetch("/api/nodes/user").then(e => e.json()).then(e => e.filter(e => "EXPIRED" !== e.status))
                }), {
                    isPending: l,
                    data: a
                } = (0, h.a)({
                    queryKey: ["nodes/count"],
                    queryFn: () => fetch("/api/nodes/count").then(e => e.json())
                }), i = (0, t.useMemo)(() => {
                    let e = [];
                    return Array.isArray(r) ? (r.forEach(s => {
                        e.includes(s.blockchain.id) || e.push(s.blockchain.id)
                    }), e.length) : 0
                }, [r]);
                return (0, n.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0, n.jsx)("div", {
                        className: "pb-6",
                        children: (0, n.jsxs)("div", {
                            className: "w-full flex px-[20px] md:px-[34px] py-6 rounded-[24px] justify-end flex-col bg-[url(/backgrounds/dashboard.png)] bg-center bg-cover bg-no-repeat h-[172px]",
                            children: [(0, n.jsx)("h1", {
                                className: "uppercase text-[28px] font-[300]",
                                children: "Welcome"
                            }), (0, n.jsxs)("h1", {
                                className: "uppercase text-[28px] font-[300]",
                                children: ["To ", (0, n.jsx)("span", {
                                    className: "font-[900]",
                                    children: "OPSEC CLOUDVERSE"
                                })]
                            })]
                        })
                    }), (0, n.jsx)("div", {
                        className: "py-6 pt-0",
                        children: (0, n.jsxs)("div", {
                            className: "grid grid-cols-2 gap-6 md:grid-cols-6",
                            children: [(0, n.jsx)("div", {
                                className: "col-span-3 md:col-span-2",
                                children: (0, n.jsx)(b, {
                                    title: "Your Nodes",
                                    activeCount: s ? void 0 : null == r ? void 0 : null === (e = r.filter(e => "FAILED" !== e.status)) || void 0 === e ? void 0 : e.length,
                                    totalCount: s ? void 0 : null == r ? void 0 : r.length,
                                    chainCount: s ? void 0 : i,
                                    link: "/nodes",
                                    className: "h-full"
                                })
                            }), (0, n.jsx)("div", {
                                className: "col-span-3",
                                children: (0, n.jsx)(b, {
                                    title: "All Nodes",
                                    activeCount: l ? void 0 : null == a ? void 0 : a.count,
                                    totalCount: l ? void 0 : null == a ? void 0 : a.count,
                                    chainCount: l ? void 0 : null == a ? void 0 : a.chainCount,
                                    className: "h-full"
                                })
                            }), (0, n.jsx)("div", {
                                className: "col-span-3 row-span-2 md:col-span-1",
                                children: (0, n.jsx)("div", {
                                    className: "flex items-center justify-center h-full",
                                    children: (0, n.jsx)(y, {})
                                })
                            }), (0, n.jsx)("div", {
                                className: "col-span-3",
                                children: (0, n.jsx)(p, {})
                            }), (0, n.jsx)("div", {
                                className: "col-span-3 md:col-span-2",
                                children: (0, n.jsx)(w, {
                                    className: "h-full",
                                    value: 3454772
                                })
                            })]
                        })
                    })]
                })
            }
        },
        95168: function(e, s, r) {
            "use strict";
            r.d(s, {
                z: function() {
                    return o
                }
            });
            var n = r(92284),
                t = r(78572),
                l = r(1985),
                a = r(73918),
                i = r(24009);
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
                o = t.forwardRef((e, s) => {
                    let {
                        className: r,
                        variant: t,
                        size: a,
                        asChild: o = !1,
                        ...d
                    } = e, u = o ? l.g7 : "button";
                    return (0, n.jsx)(u, {
                        className: (0, i.cn)(c({
                            variant: t,
                            size: a,
                            className: r
                        })),
                        ref: s,
                        ...d
                    })
                });
            o.displayName = "Button"
        },
        75305: function(e, s, r) {
            "use strict";
            r.d(s, {
                O: function() {
                    return l
                }
            });
            var n = r(92284),
                t = r(24009);

            function l(e) {
                let {
                    className: s,
                    ...r
                } = e;
                return (0, n.jsx)("div", {
                    className: (0, t.cn)("animate-pulse rounded-md bg-primary/10", s),
                    ...r
                })
            }
        },
        24009: function(e, s, r) {
            "use strict";
            r.d(s, {
                cn: function() {
                    return l
                },
                p6: function() {
                    return c
                },
                sZ: function() {
                    return o
                },
                vh: function() {
                    return d
                },
                zs: function() {
                    return a
                }
            });
            var n = r(62856),
                t = r(63278);

            function l() {
                for (var e = arguments.length, s = Array(e), r = 0; r < e; r++) s[r] = arguments[r];
                return (0, t.m6)((0, n.W)(s))
            }
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
                        s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                        r = "";
                    for (let n = 0; n < e; n++) r += s.charAt(Math.floor(Math.random() * s.length));
                    return r
                },
                i = new Intl.DateTimeFormat("en-US", {
                    dateStyle: "medium",
                    timeStyle: "medium"
                }),
                c = e => i.format(new Date(e)).toString(),
                o = e => Math.round((Date.now() - new Date(e).getTime()) / 864e5),
                d = e => e.length <= 10 ? e : e.slice(0, 5) + "..." + e.slice(-5)
        },
        47252: function() {}
    },
    function(e) {
        e.O(0, [7846, 8237, 7208, 3758, 5091, 7013, 6620, 1744], function() {
            return e(e.s = 51369)
        }), _N_E = e.O()
    }
]);