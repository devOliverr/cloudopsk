(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4601], {
        86997: function(e, t, n) {
            "use strict";

            function r(e) {
                var t = e.match(/^var\((.*)\)$/);
                return t ? t[1] : e
            }

            function o(e, t) {
                var n = {};
                if ("object" == typeof t) ! function e(t, n) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        o = {};
                    for (var i in t) {
                        var a = t[i],
                            s = [...r, i];
                        "string" == typeof a || "number" == typeof a || null == a ? o[i] = n(a, s) : "object" != typeof a || Array.isArray(a) ? console.warn('Skipping invalid key "'.concat(s.join("."), '". Should be a string, number, null or object. Received: "').concat(Array.isArray(a) ? "Array" : typeof a, '"')) : o[i] = e(a, n, s)
                    }
                    return o
                }(t, (t, o) => {
                    null != t && (n[r(function(e, t) {
                        var n = e;
                        for (var r of t) {
                            if (!(r in n)) throw Error("Path ".concat(t.join(" -> "), " does not exist in object"));
                            n = n[r]
                        }
                        return n
                    }(e, o))] = String(t))
                });
                else
                    for (var o in e) {
                        var i = e[o];
                        null != i && (n[r(o)] = i)
                    }
                return Object.defineProperty(n, "toString", {
                    value: function() {
                        return Object.keys(this).map(e => "".concat(e, ":").concat(this[e])).join(";")
                    },
                    writable: !1
                }), n
            }
            n.d(t, {
                L: function() {
                    return o
                }
            })
        },
        81950: function(e, t, n) {
            "use strict";

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), n.push.apply(n, r)
                }
                return n
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(n), !0).forEach(function(t) {
                        ! function(e, t, n) {
                            var r;
                            (t = "symbol" == typeof(r = function(e, t) {
                                if ("object" != typeof e || null === e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, t || "default");
                                    if ("object" != typeof r) return r;
                                    throw TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(t, "string")) ? r : String(r)) in e ? Object.defineProperty(e, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = n
                        }(e, t, n[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
                }
                return e
            }
            n.d(t, {
                $: function() {
                    return s
                }
            });
            var i = e => function() {
                    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var i = Object.assign({}, ...n.map(e => e.styles)),
                        a = Object.keys(i),
                        s = a.filter(e => "mappings" in i[e]);
                    return Object.assign(t => {
                        var n = [],
                            r = {},
                            a = o({}, t),
                            c = !1;
                        for (var l of s) {
                            var u = t[l];
                            if (null != u)
                                for (var d of (c = !0, i[l].mappings)) r[d] = u, null == a[d] && delete a[d]
                        }
                        var p = c ? o(o({}, r), a) : t;
                        for (var h in p)
                            if ("continue" === function() {
                                    var e = p[h],
                                        t = i[h];
                                    try {
                                        if (t.mappings) return "continue";
                                        if ("string" == typeof e || "number" == typeof e) n.push(t.values[e].defaultClass);
                                        else if (Array.isArray(e))
                                            for (var r = 0; r < e.length; r++) {
                                                var o = e[r];
                                                if (null != o) {
                                                    var a = t.responsiveArray[r];
                                                    n.push(t.values[o].conditions[a])
                                                }
                                            } else
                                                for (var s in e) {
                                                    var c = e[s];
                                                    null != c && n.push(t.values[c].conditions[s])
                                                }
                                    } catch (e) {
                                        throw e
                                    }
                                }()) continue;
                        return e(n.join(" "))
                    }, {
                        properties: new Set(a)
                    })
                },
                a = e => e,
                s = function() {
                    return i(a)(...arguments)
                }
        },
        49561: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return i
                },
                M: function() {
                    return o
                }
            });
            var r = function(e, t) {
                return Object.defineProperty(e, "__recipe__", {
                    value: t,
                    writable: !1
                }), e
            };

            function o(e) {
                var {
                    conditions: t
                } = e;
                if (!t) throw Error("Styles have no conditions");
                return r(function(e) {
                    if ("string" == typeof e || "number" == typeof e || "boolean" == typeof e) {
                        if (!t.defaultCondition) throw Error("No default condition");
                        return {
                            [t.defaultCondition]: e
                        }
                    }
                    if (Array.isArray(e)) {
                        if (!("responsiveArray" in t)) throw Error("Responsive arrays are not supported");
                        var n = {};
                        for (var r in t.responsiveArray) null != e[r] && (n[t.responsiveArray[r]] = e[r]);
                        return n
                    }
                    return e
                }, {
                    importPath: "@vanilla-extract/sprinkles/createUtils",
                    importName: "createNormalizeValueFn",
                    args: [{
                        conditions: e.conditions
                    }]
                })
            }

            function i(e) {
                var {
                    conditions: t
                } = e;
                if (!t) throw Error("Styles have no conditions");
                var n = o(e);
                return r(function(e, r) {
                    if ("string" == typeof e || "number" == typeof e || "boolean" == typeof e) {
                        if (!t.defaultCondition) throw Error("No default condition");
                        return r(e, t.defaultCondition)
                    }
                    var o = Array.isArray(e) ? n(e) : e,
                        i = {};
                    for (var a in o) null != o[a] && (i[a] = r(o[a], a));
                    return i
                }, {
                    importPath: "@vanilla-extract/sprinkles/createUtils",
                    importName: "createMapValueFn",
                    args: [{
                        conditions: e.conditions
                    }]
                })
            }
        },
        13526: function(e) {
            "use strict";
            var t = {
                single_source_shortest_paths: function(e, n, r) {
                    var o, i, a, s, c, l, u, d = {},
                        p = {};
                    p[n] = 0;
                    var h = t.PriorityQueue.make();
                    for (h.push(n, 0); !h.empty();)
                        for (a in i = (o = h.pop()).value, s = o.cost, c = e[i] || {}) c.hasOwnProperty(a) && (l = s + c[a], u = p[a], (void 0 === p[a] || u > l) && (p[a] = l, h.push(a, l), d[a] = i));
                    if (void 0 !== r && void 0 === p[r]) throw Error(["Could not find a path from ", n, " to ", r, "."].join(""));
                    return d
                },
                extract_shortest_path_from_predecessor_list: function(e, t) {
                    for (var n = [], r = t; r;) n.push(r), e[r], r = e[r];
                    return n.reverse(), n
                },
                find_path: function(e, n, r) {
                    var o = t.single_source_shortest_paths(e, n, r);
                    return t.extract_shortest_path_from_predecessor_list(o, r)
                },
                PriorityQueue: {
                    make: function(e) {
                        var n, r = t.PriorityQueue,
                            o = {};
                        for (n in e = e || {}, r) r.hasOwnProperty(n) && (o[n] = r[n]);
                        return o.queue = [], o.sorter = e.sorter || r.default_sorter, o
                    },
                    default_sorter: function(e, t) {
                        return e.cost - t.cost
                    },
                    push: function(e, t) {
                        this.queue.push({
                            value: e,
                            cost: t
                        }), this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            e.exports = t
        },
        62981: function(e) {
            "use strict";
            e.exports = function(e) {
                for (var t = [], n = e.length, r = 0; r < n; r++) {
                    var o = e.charCodeAt(r);
                    if (o >= 55296 && o <= 56319 && n > r + 1) {
                        var i = e.charCodeAt(r + 1);
                        i >= 56320 && i <= 57343 && (o = (o - 55296) * 1024 + i - 56320 + 65536, r += 1)
                    }
                    if (o < 128) {
                        t.push(o);
                        continue
                    }
                    if (o < 2048) {
                        t.push(o >> 6 | 192), t.push(63 & o | 128);
                        continue
                    }
                    if (o < 55296 || o >= 57344 && o < 65536) {
                        t.push(o >> 12 | 224), t.push(o >> 6 & 63 | 128), t.push(63 & o | 128);
                        continue
                    }
                    if (o >= 65536 && o <= 1114111) {
                        t.push(o >> 18 | 240), t.push(o >> 12 & 63 | 128), t.push(o >> 6 & 63 | 128), t.push(63 & o | 128);
                        continue
                    }
                    t.push(239, 191, 189)
                }
                return new Uint8Array(t).buffer
            }
        },
        71100: function(e) {
            "use strict";
            var t = Object.prototype.hasOwnProperty,
                n = "~";

            function r() {}

            function o(e, t, n) {
                this.fn = e, this.context = t, this.once = n || !1
            }

            function i(e, t, r, i, a) {
                if ("function" != typeof r) throw TypeError("The listener must be a function");
                var s = new o(r, i || e, a),
                    c = n ? n + t : t;
                return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], s] : e._events[c].push(s) : (e._events[c] = s, e._eventsCount++), e
            }

            function a(e, t) {
                0 == --e._eventsCount ? e._events = new r : delete e._events[t]
            }

            function s() {
                this._events = new r, this._eventsCount = 0
            }
            Object.create && (r.prototype = Object.create(null), new r().__proto__ || (n = !1)), s.prototype.eventNames = function() {
                var e, r, o = [];
                if (0 === this._eventsCount) return o;
                for (r in e = this._events) t.call(e, r) && o.push(n ? r.slice(1) : r);
                return Object.getOwnPropertySymbols ? o.concat(Object.getOwnPropertySymbols(e)) : o
            }, s.prototype.listeners = function(e) {
                var t = n ? n + e : e,
                    r = this._events[t];
                if (!r) return [];
                if (r.fn) return [r.fn];
                for (var o = 0, i = r.length, a = Array(i); o < i; o++) a[o] = r[o].fn;
                return a
            }, s.prototype.listenerCount = function(e) {
                var t = n ? n + e : e,
                    r = this._events[t];
                return r ? r.fn ? 1 : r.length : 0
            }, s.prototype.emit = function(e, t, r, o, i, a) {
                var s = n ? n + e : e;
                if (!this._events[s]) return !1;
                var c, l, u = this._events[s],
                    d = arguments.length;
                if (u.fn) {
                    switch (u.once && this.removeListener(e, u.fn, void 0, !0), d) {
                        case 1:
                            return u.fn.call(u.context), !0;
                        case 2:
                            return u.fn.call(u.context, t), !0;
                        case 3:
                            return u.fn.call(u.context, t, r), !0;
                        case 4:
                            return u.fn.call(u.context, t, r, o), !0;
                        case 5:
                            return u.fn.call(u.context, t, r, o, i), !0;
                        case 6:
                            return u.fn.call(u.context, t, r, o, i, a), !0
                    }
                    for (l = 1, c = Array(d - 1); l < d; l++) c[l - 1] = arguments[l];
                    u.fn.apply(u.context, c)
                } else {
                    var p, h = u.length;
                    for (l = 0; l < h; l++) switch (u[l].once && this.removeListener(e, u[l].fn, void 0, !0), d) {
                        case 1:
                            u[l].fn.call(u[l].context);
                            break;
                        case 2:
                            u[l].fn.call(u[l].context, t);
                            break;
                        case 3:
                            u[l].fn.call(u[l].context, t, r);
                            break;
                        case 4:
                            u[l].fn.call(u[l].context, t, r, o);
                            break;
                        default:
                            if (!c)
                                for (p = 1, c = Array(d - 1); p < d; p++) c[p - 1] = arguments[p];
                            u[l].fn.apply(u[l].context, c)
                    }
                }
                return !0
            }, s.prototype.on = function(e, t, n) {
                return i(this, e, t, n, !1)
            }, s.prototype.once = function(e, t, n) {
                return i(this, e, t, n, !0)
            }, s.prototype.removeListener = function(e, t, r, o) {
                var i = n ? n + e : e;
                if (!this._events[i]) return this;
                if (!t) return a(this, i), this;
                var s = this._events[i];
                if (s.fn) s.fn !== t || o && !s.once || r && s.context !== r || a(this, i);
                else {
                    for (var c = 0, l = [], u = s.length; c < u; c++)(s[c].fn !== t || o && !s[c].once || r && s[c].context !== r) && l.push(s[c]);
                    l.length ? this._events[i] = 1 === l.length ? l[0] : l : a(this, i)
                }
                return this
            }, s.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = n ? n + e : e, this._events[t] && a(this, t)) : (this._events = new r, this._eventsCount = 0), this
            }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = n, s.EventEmitter = s, e.exports = s
        },
        20102: function(e, t, n) {
            let r = n(5364),
                o = n(63865),
                i = n(52503),
                a = n(99104);

            function s(e, t, n, i, a) {
                let s = [].slice.call(arguments, 1),
                    c = s.length,
                    l = "function" == typeof s[c - 1];
                if (!l && !r()) throw Error("Callback required as last argument");
                if (l) {
                    if (c < 2) throw Error("Too few arguments provided");
                    2 === c ? (a = n, n = t, t = i = void 0) : 3 === c && (t.getContext && void 0 === a ? (a = i, i = void 0) : (a = i, i = n, n = t, t = void 0))
                } else {
                    if (c < 1) throw Error("Too few arguments provided");
                    return 1 === c ? (n = t, t = i = void 0) : 2 !== c || t.getContext || (i = n, n = t, t = void 0), new Promise(function(r, a) {
                        try {
                            let a = o.create(n, i);
                            r(e(a, t, i))
                        } catch (e) {
                            a(e)
                        }
                    })
                }
                try {
                    let r = o.create(n, i);
                    a(null, e(r, t, i))
                } catch (e) {
                    a(e)
                }
            }
            t.create = o.create, t.toCanvas = s.bind(null, i.render), t.toDataURL = s.bind(null, i.renderToDataURL), t.toString = s.bind(null, function(e, t, n) {
                return a.render(e, n)
            })
        },
        5364: function(e) {
            e.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        75428: function(e, t, n) {
            let r = n(49210).getSymbolSize;
            t.getRowColCoords = function(e) {
                if (1 === e) return [];
                let t = Math.floor(e / 7) + 2,
                    n = r(e),
                    o = 145 === n ? 26 : 2 * Math.ceil((n - 13) / (2 * t - 2)),
                    i = [n - 7];
                for (let e = 1; e < t - 1; e++) i[e] = i[e - 1] - o;
                return i.push(6), i.reverse()
            }, t.getPositions = function(e) {
                let n = [],
                    r = t.getRowColCoords(e),
                    o = r.length;
                for (let e = 0; e < o; e++)
                    for (let t = 0; t < o; t++)(0 !== e || 0 !== t) && (0 !== e || t !== o - 1) && (e !== o - 1 || 0 !== t) && n.push([r[e], r[t]]);
                return n
            }
        },
        60051: function(e, t, n) {
            let r = n(20608),
                o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function i(e) {
                this.mode = r.ALPHANUMERIC, this.data = e
            }
            i.getBitsLength = function(e) {
                return 11 * Math.floor(e / 2) + 6 * (e % 2)
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(e) {
                let t;
                for (t = 0; t + 2 <= this.data.length; t += 2) {
                    let n = 45 * o.indexOf(this.data[t]);
                    n += o.indexOf(this.data[t + 1]), e.put(n, 11)
                }
                this.data.length % 2 && e.put(o.indexOf(this.data[t]), 6)
            }, e.exports = i
        },
        69873: function(e) {
            function t() {
                this.buffer = [], this.length = 0
            }
            t.prototype = {
                get: function(e) {
                    return (this.buffer[Math.floor(e / 8)] >>> 7 - e % 8 & 1) == 1
                },
                put: function(e, t) {
                    for (let n = 0; n < t; n++) this.putBit((e >>> t - n - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(e) {
                    let t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            }, e.exports = t
        },
        54813: function(e) {
            function t(e) {
                if (!e || e < 1) throw Error("BitMatrix size must be defined and greater than 0");
                this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
            }
            t.prototype.set = function(e, t, n, r) {
                let o = e * this.size + t;
                this.data[o] = n, r && (this.reservedBit[o] = !0)
            }, t.prototype.get = function(e, t) {
                return this.data[e * this.size + t]
            }, t.prototype.xor = function(e, t, n) {
                this.data[e * this.size + t] ^= n
            }, t.prototype.isReserved = function(e, t) {
                return this.reservedBit[e * this.size + t]
            }, e.exports = t
        },
        75112: function(e, t, n) {
            let r = n(62981),
                o = n(20608);

            function i(e) {
                this.mode = o.BYTE, "string" == typeof e && (e = r(e)), this.data = new Uint8Array(e)
            }
            i.getBitsLength = function(e) {
                return 8 * e
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(e) {
                for (let t = 0, n = this.data.length; t < n; t++) e.put(this.data[t], 8)
            }, e.exports = i
        },
        58045: function(e, t, n) {
            let r = n(6084),
                o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            t.getBlocksCount = function(e, t) {
                switch (t) {
                    case r.L:
                        return o[(e - 1) * 4 + 0];
                    case r.M:
                        return o[(e - 1) * 4 + 1];
                    case r.Q:
                        return o[(e - 1) * 4 + 2];
                    case r.H:
                        return o[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }, t.getTotalCodewordsCount = function(e, t) {
                switch (t) {
                    case r.L:
                        return i[(e - 1) * 4 + 0];
                    case r.M:
                        return i[(e - 1) * 4 + 1];
                    case r.Q:
                        return i[(e - 1) * 4 + 2];
                    case r.H:
                        return i[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }
        },
        6084: function(e, t) {
            t.L = {
                bit: 1
            }, t.M = {
                bit: 0
            }, t.Q = {
                bit: 3
            }, t.H = {
                bit: 2
            }, t.isValid = function(e) {
                return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
            }, t.from = function(e, n) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" != typeof e) throw Error("Param is not a string");
                        let n = e.toLowerCase();
                        switch (n) {
                            case "l":
                            case "low":
                                return t.L;
                            case "m":
                            case "medium":
                                return t.M;
                            case "q":
                            case "quartile":
                                return t.Q;
                            case "h":
                            case "high":
                                return t.H;
                            default:
                                throw Error("Unknown EC Level: " + e)
                        }
                    }(e)
                } catch (e) {
                    return n
                }
            }
        },
        2379: function(e, t, n) {
            let r = n(49210).getSymbolSize;
            t.getPositions = function(e) {
                let t = r(e);
                return [
                    [0, 0],
                    [t - 7, 0],
                    [0, t - 7]
                ]
            }
        },
        88566: function(e, t, n) {
            let r = n(49210),
                o = r.getBCHDigit(1335);
            t.getEncodedBits = function(e, t) {
                let n = e.bit << 3 | t,
                    i = n << 10;
                for (; r.getBCHDigit(i) - o >= 0;) i ^= 1335 << r.getBCHDigit(i) - o;
                return (n << 10 | i) ^ 21522
            }
        },
        88201: function(e, t) {
            let n = new Uint8Array(512),
                r = new Uint8Array(256);
            ! function() {
                let e = 1;
                for (let t = 0; t < 255; t++) n[t] = e, r[e] = t, 256 & (e <<= 1) && (e ^= 285);
                for (let e = 255; e < 512; e++) n[e] = n[e - 255]
            }(), t.log = function(e) {
                if (e < 1) throw Error("log(" + e + ")");
                return r[e]
            }, t.exp = function(e) {
                return n[e]
            }, t.mul = function(e, t) {
                return 0 === e || 0 === t ? 0 : n[r[e] + r[t]]
            }
        },
        26250: function(e, t, n) {
            let r = n(20608),
                o = n(49210);

            function i(e) {
                this.mode = r.KANJI, this.data = e
            }
            i.getBitsLength = function(e) {
                return 13 * e
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(e) {
                let t;
                for (t = 0; t < this.data.length; t++) {
                    let n = o.toSJIS(this.data[t]);
                    if (n >= 33088 && n <= 40956) n -= 33088;
                    else if (n >= 57408 && n <= 60351) n -= 49472;
                    else throw Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                    n = (n >>> 8 & 255) * 192 + (255 & n), e.put(n, 13)
                }
            }, e.exports = i
        },
        61760: function(e, t) {
            t.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            let n = {
                N1: 3,
                N2: 3,
                N3: 40,
                N4: 10
            };
            t.isValid = function(e) {
                return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
            }, t.from = function(e) {
                return t.isValid(e) ? parseInt(e, 10) : void 0
            }, t.getPenaltyN1 = function(e) {
                let t = e.size,
                    r = 0,
                    o = 0,
                    i = 0,
                    a = null,
                    s = null;
                for (let c = 0; c < t; c++) {
                    o = i = 0, a = s = null;
                    for (let l = 0; l < t; l++) {
                        let t = e.get(c, l);
                        t === a ? o++ : (o >= 5 && (r += n.N1 + (o - 5)), a = t, o = 1), (t = e.get(l, c)) === s ? i++ : (i >= 5 && (r += n.N1 + (i - 5)), s = t, i = 1)
                    }
                    o >= 5 && (r += n.N1 + (o - 5)), i >= 5 && (r += n.N1 + (i - 5))
                }
                return r
            }, t.getPenaltyN2 = function(e) {
                let t = e.size,
                    r = 0;
                for (let n = 0; n < t - 1; n++)
                    for (let o = 0; o < t - 1; o++) {
                        let t = e.get(n, o) + e.get(n, o + 1) + e.get(n + 1, o) + e.get(n + 1, o + 1);
                        (4 === t || 0 === t) && r++
                    }
                return r * n.N2
            }, t.getPenaltyN3 = function(e) {
                let t = e.size,
                    r = 0,
                    o = 0,
                    i = 0;
                for (let n = 0; n < t; n++) {
                    o = i = 0;
                    for (let a = 0; a < t; a++) o = o << 1 & 2047 | e.get(n, a), a >= 10 && (1488 === o || 93 === o) && r++, i = i << 1 & 2047 | e.get(a, n), a >= 10 && (1488 === i || 93 === i) && r++
                }
                return r * n.N3
            }, t.getPenaltyN4 = function(e) {
                let t = 0,
                    r = e.data.length;
                for (let n = 0; n < r; n++) t += e.data[n];
                let o = Math.abs(Math.ceil(100 * t / r / 5) - 10);
                return o * n.N4
            }, t.applyMask = function(e, n) {
                let r = n.size;
                for (let o = 0; o < r; o++)
                    for (let i = 0; i < r; i++) n.isReserved(i, o) || n.xor(i, o, function(e, n, r) {
                        switch (e) {
                            case t.Patterns.PATTERN000:
                                return (n + r) % 2 == 0;
                            case t.Patterns.PATTERN001:
                                return n % 2 == 0;
                            case t.Patterns.PATTERN010:
                                return r % 3 == 0;
                            case t.Patterns.PATTERN011:
                                return (n + r) % 3 == 0;
                            case t.Patterns.PATTERN100:
                                return (Math.floor(n / 2) + Math.floor(r / 3)) % 2 == 0;
                            case t.Patterns.PATTERN101:
                                return n * r % 2 + n * r % 3 == 0;
                            case t.Patterns.PATTERN110:
                                return (n * r % 2 + n * r % 3) % 2 == 0;
                            case t.Patterns.PATTERN111:
                                return (n * r % 3 + (n + r) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + e)
                        }
                    }(e, i, o))
            }, t.getBestMask = function(e, n) {
                let r = Object.keys(t.Patterns).length,
                    o = 0,
                    i = 1 / 0;
                for (let a = 0; a < r; a++) {
                    n(a), t.applyMask(a, e);
                    let r = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
                    t.applyMask(a, e), r < i && (i = r, o = a)
                }
                return o
            }
        },
        20608: function(e, t, n) {
            let r = n(80789),
                o = n(80347);
            t.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, t.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, t.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, t.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, t.MIXED = {
                bit: -1
            }, t.getCharCountIndicator = function(e, t) {
                if (!e.ccBits) throw Error("Invalid mode: " + e);
                if (!r.isValid(t)) throw Error("Invalid version: " + t);
                return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
            }, t.getBestModeForData = function(e) {
                return o.testNumeric(e) ? t.NUMERIC : o.testAlphanumeric(e) ? t.ALPHANUMERIC : o.testKanji(e) ? t.KANJI : t.BYTE
            }, t.toString = function(e) {
                if (e && e.id) return e.id;
                throw Error("Invalid mode")
            }, t.isValid = function(e) {
                return e && e.bit && e.ccBits
            }, t.from = function(e, n) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" != typeof e) throw Error("Param is not a string");
                        let n = e.toLowerCase();
                        switch (n) {
                            case "numeric":
                                return t.NUMERIC;
                            case "alphanumeric":
                                return t.ALPHANUMERIC;
                            case "kanji":
                                return t.KANJI;
                            case "byte":
                                return t.BYTE;
                            default:
                                throw Error("Unknown mode: " + e)
                        }
                    }(e)
                } catch (e) {
                    return n
                }
            }
        },
        98163: function(e, t, n) {
            let r = n(20608);

            function o(e) {
                this.mode = r.NUMERIC, this.data = e.toString()
            }
            o.getBitsLength = function(e) {
                return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(e) {
                let t, n;
                for (t = 0; t + 3 <= this.data.length; t += 3) n = parseInt(this.data.substr(t, 3), 10), e.put(n, 10);
                let r = this.data.length - t;
                r > 0 && (n = parseInt(this.data.substr(t), 10), e.put(n, 3 * r + 1))
            }, e.exports = o
        },
        60466: function(e, t, n) {
            let r = n(88201);
            t.mul = function(e, t) {
                let n = new Uint8Array(e.length + t.length - 1);
                for (let o = 0; o < e.length; o++)
                    for (let i = 0; i < t.length; i++) n[o + i] ^= r.mul(e[o], t[i]);
                return n
            }, t.mod = function(e, t) {
                let n = new Uint8Array(e);
                for (; n.length - t.length >= 0;) {
                    let e = n[0];
                    for (let o = 0; o < t.length; o++) n[o] ^= r.mul(t[o], e);
                    let o = 0;
                    for (; o < n.length && 0 === n[o];) o++;
                    n = n.slice(o)
                }
                return n
            }, t.generateECPolynomial = function(e) {
                let n = new Uint8Array([1]);
                for (let o = 0; o < e; o++) n = t.mul(n, new Uint8Array([1, r.exp(o)]));
                return n
            }
        },
        63865: function(e, t, n) {
            let r = n(49210),
                o = n(6084),
                i = n(69873),
                a = n(54813),
                s = n(75428),
                c = n(2379),
                l = n(61760),
                u = n(58045),
                d = n(14196),
                p = n(87667),
                h = n(88566),
                f = n(20608),
                w = n(22844);

            function g(e, t, n) {
                let r, o;
                let i = e.size,
                    a = h.getEncodedBits(t, n);
                for (r = 0; r < 15; r++) o = (a >> r & 1) == 1, r < 6 ? e.set(r, 8, o, !0) : r < 8 ? e.set(r + 1, 8, o, !0) : e.set(i - 15 + r, 8, o, !0), r < 8 ? e.set(8, i - r - 1, o, !0) : r < 9 ? e.set(8, 15 - r - 1 + 1, o, !0) : e.set(8, 15 - r - 1, o, !0);
                e.set(i - 8, 8, 1, !0)
            }
            t.create = function(e, t) {
                let n, h;
                if (void 0 === e || "" === e) throw Error("No input text");
                let A = o.M;
                return void 0 !== t && (A = o.from(t.errorCorrectionLevel, o.M), n = p.from(t.version), h = l.from(t.maskPattern), t.toSJISFunc && r.setToSJISFunction(t.toSJISFunc)),
                    function(e, t, n, o) {
                        let h;
                        if (Array.isArray(e)) h = w.fromArray(e);
                        else if ("string" == typeof e) {
                            let r = t;
                            if (!r) {
                                let t = w.rawSplit(e);
                                r = p.getBestVersionForData(t, n)
                            }
                            h = w.fromString(e, r || 40)
                        } else throw Error("Invalid data");
                        let A = p.getBestVersionForData(h, n);
                        if (!A) throw Error("The amount of data is too big to be stored in a QR Code");
                        if (t) {
                            if (t < A) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + A + ".\n")
                        } else t = A;
                        let m = function(e, t, n) {
                                let o = new i;
                                n.forEach(function(t) {
                                    o.put(t.mode.bit, 4), o.put(t.getLength(), f.getCharCountIndicator(t.mode, e)), t.write(o)
                                });
                                let a = r.getSymbolTotalCodewords(e),
                                    s = u.getTotalCodewordsCount(e, t),
                                    c = (a - s) * 8;
                                for (o.getLengthInBits() + 4 <= c && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(0);
                                let l = (c - o.getLengthInBits()) / 8;
                                for (let e = 0; e < l; e++) o.put(e % 2 ? 17 : 236, 8);
                                return function(e, t, n) {
                                    let o, i;
                                    let a = r.getSymbolTotalCodewords(t),
                                        s = u.getTotalCodewordsCount(t, n),
                                        c = a - s,
                                        l = u.getBlocksCount(t, n),
                                        p = a % l,
                                        h = l - p,
                                        f = Math.floor(a / l),
                                        w = Math.floor(c / l),
                                        g = w + 1,
                                        A = f - w,
                                        m = new d(A),
                                        b = 0,
                                        y = Array(l),
                                        C = Array(l),
                                        v = 0,
                                        k = new Uint8Array(e.buffer);
                                    for (let e = 0; e < l; e++) {
                                        let t = e < h ? w : g;
                                        y[e] = k.slice(b, b + t), C[e] = m.encode(y[e]), b += t, v = Math.max(v, t)
                                    }
                                    let E = new Uint8Array(a),
                                        B = 0;
                                    for (o = 0; o < v; o++)
                                        for (i = 0; i < l; i++) o < y[i].length && (E[B++] = y[i][o]);
                                    for (o = 0; o < A; o++)
                                        for (i = 0; i < l; i++) E[B++] = C[i][o];
                                    return E
                                }(o, e, t)
                            }(t, n, h),
                            b = r.getSymbolSize(t),
                            y = new a(b);
                        return function(e, t) {
                                let n = e.size,
                                    r = c.getPositions(t);
                                for (let t = 0; t < r.length; t++) {
                                    let o = r[t][0],
                                        i = r[t][1];
                                    for (let t = -1; t <= 7; t++)
                                        if (!(o + t <= -1) && !(n <= o + t))
                                            for (let r = -1; r <= 7; r++) i + r <= -1 || n <= i + r || (t >= 0 && t <= 6 && (0 === r || 6 === r) || r >= 0 && r <= 6 && (0 === t || 6 === t) || t >= 2 && t <= 4 && r >= 2 && r <= 4 ? e.set(o + t, i + r, !0, !0) : e.set(o + t, i + r, !1, !0))
                                }
                            }(y, t),
                            function(e) {
                                let t = e.size;
                                for (let n = 8; n < t - 8; n++) {
                                    let t = n % 2 == 0;
                                    e.set(n, 6, t, !0), e.set(6, n, t, !0)
                                }
                            }(y),
                            function(e, t) {
                                let n = s.getPositions(t);
                                for (let t = 0; t < n.length; t++) {
                                    let r = n[t][0],
                                        o = n[t][1];
                                    for (let t = -2; t <= 2; t++)
                                        for (let n = -2; n <= 2; n++) - 2 === t || 2 === t || -2 === n || 2 === n || 0 === t && 0 === n ? e.set(r + t, o + n, !0, !0) : e.set(r + t, o + n, !1, !0)
                                }
                            }(y, t), g(y, n, 0), t >= 7 && function(e, t) {
                                let n, r, o;
                                let i = e.size,
                                    a = p.getEncodedBits(t);
                                for (let t = 0; t < 18; t++) n = Math.floor(t / 3), r = t % 3 + i - 8 - 3, o = (a >> t & 1) == 1, e.set(n, r, o, !0), e.set(r, n, o, !0)
                            }(y, t),
                            function(e, t) {
                                let n = e.size,
                                    r = -1,
                                    o = n - 1,
                                    i = 7,
                                    a = 0;
                                for (let s = n - 1; s > 0; s -= 2)
                                    for (6 === s && s--;;) {
                                        for (let n = 0; n < 2; n++)
                                            if (!e.isReserved(o, s - n)) {
                                                let r = !1;
                                                a < t.length && (r = (t[a] >>> i & 1) == 1), e.set(o, s - n, r), -1 == --i && (a++, i = 7)
                                            }
                                        if ((o += r) < 0 || n <= o) {
                                            o -= r, r = -r;
                                            break
                                        }
                                    }
                            }(y, m), isNaN(o) && (o = l.getBestMask(y, g.bind(null, y, n))), l.applyMask(o, y), g(y, n, o), {
                                modules: y,
                                version: t,
                                errorCorrectionLevel: n,
                                maskPattern: o,
                                segments: h
                            }
                    }(e, n, A, h)
            }
        },
        14196: function(e, t, n) {
            let r = n(60466);

            function o(e) {
                this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
            }
            o.prototype.initialize = function(e) {
                this.degree = e, this.genPoly = r.generateECPolynomial(this.degree)
            }, o.prototype.encode = function(e) {
                if (!this.genPoly) throw Error("Encoder not initialized");
                let t = new Uint8Array(e.length + this.degree);
                t.set(e);
                let n = r.mod(t, this.genPoly),
                    o = this.degree - n.length;
                if (o > 0) {
                    let e = new Uint8Array(this.degree);
                    return e.set(n, o), e
                }
                return n
            }, e.exports = o
        },
        80347: function(e, t) {
            let n = "[0-9]+",
                r = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
            r = r.replace(/u/g, "\\u");
            let o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + r + ")(?:.|[\r\n]))+";
            t.KANJI = RegExp(r, "g"), t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = RegExp(o, "g"), t.NUMERIC = RegExp(n, "g"), t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
            let i = RegExp("^" + r + "$"),
                a = RegExp("^" + n + "$"),
                s = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            t.testKanji = function(e) {
                return i.test(e)
            }, t.testNumeric = function(e) {
                return a.test(e)
            }, t.testAlphanumeric = function(e) {
                return s.test(e)
            }
        },
        22844: function(e, t, n) {
            let r = n(20608),
                o = n(98163),
                i = n(60051),
                a = n(75112),
                s = n(26250),
                c = n(80347),
                l = n(49210),
                u = n(13526);

            function d(e) {
                return unescape(encodeURIComponent(e)).length
            }

            function p(e, t, n) {
                let r;
                let o = [];
                for (; null !== (r = e.exec(n));) o.push({
                    data: r[0],
                    index: r.index,
                    mode: t,
                    length: r[0].length
                });
                return o
            }

            function h(e) {
                let t, n;
                let o = p(c.NUMERIC, r.NUMERIC, e),
                    i = p(c.ALPHANUMERIC, r.ALPHANUMERIC, e);
                l.isKanjiModeEnabled() ? (t = p(c.BYTE, r.BYTE, e), n = p(c.KANJI, r.KANJI, e)) : (t = p(c.BYTE_KANJI, r.BYTE, e), n = []);
                let a = o.concat(i, t, n);
                return a.sort(function(e, t) {
                    return e.index - t.index
                }).map(function(e) {
                    return {
                        data: e.data,
                        mode: e.mode,
                        length: e.length
                    }
                })
            }

            function f(e, t) {
                switch (t) {
                    case r.NUMERIC:
                        return o.getBitsLength(e);
                    case r.ALPHANUMERIC:
                        return i.getBitsLength(e);
                    case r.KANJI:
                        return s.getBitsLength(e);
                    case r.BYTE:
                        return a.getBitsLength(e)
                }
            }

            function w(e, t) {
                let n;
                let c = r.getBestModeForData(e);
                if ((n = r.from(t, c)) !== r.BYTE && n.bit < c.bit) throw Error('"' + e + '" cannot be encoded with mode ' + r.toString(n) + ".\n Suggested mode is: " + r.toString(c));
                switch (n !== r.KANJI || l.isKanjiModeEnabled() || (n = r.BYTE), n) {
                    case r.NUMERIC:
                        return new o(e);
                    case r.ALPHANUMERIC:
                        return new i(e);
                    case r.KANJI:
                        return new s(e);
                    case r.BYTE:
                        return new a(e)
                }
            }
            t.fromArray = function(e) {
                return e.reduce(function(e, t) {
                    return "string" == typeof t ? e.push(w(t, null)) : t.data && e.push(w(t.data, t.mode)), e
                }, [])
            }, t.fromString = function(e, n) {
                let o = h(e, l.isKanjiModeEnabled()),
                    i = function(e) {
                        let t = [];
                        for (let n = 0; n < e.length; n++) {
                            let o = e[n];
                            switch (o.mode) {
                                case r.NUMERIC:
                                    t.push([o, {
                                        data: o.data,
                                        mode: r.ALPHANUMERIC,
                                        length: o.length
                                    }, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case r.ALPHANUMERIC:
                                    t.push([o, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case r.KANJI:
                                    t.push([o, {
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: d(o.data)
                                    }]);
                                    break;
                                case r.BYTE:
                                    t.push([{
                                        data: o.data,
                                        mode: r.BYTE,
                                        length: d(o.data)
                                    }])
                            }
                        }
                        return t
                    }(o),
                    a = function(e, t) {
                        let n = {},
                            o = {
                                start: {}
                            },
                            i = ["start"];
                        for (let a = 0; a < e.length; a++) {
                            let s = e[a],
                                c = [];
                            for (let e = 0; e < s.length; e++) {
                                let l = s[e],
                                    u = "" + a + e;
                                c.push(u), n[u] = {
                                    node: l,
                                    lastCount: 0
                                }, o[u] = {};
                                for (let e = 0; e < i.length; e++) {
                                    let a = i[e];
                                    n[a] && n[a].node.mode === l.mode ? (o[a][u] = f(n[a].lastCount + l.length, l.mode) - f(n[a].lastCount, l.mode), n[a].lastCount += l.length) : (n[a] && (n[a].lastCount = l.length), o[a][u] = f(l.length, l.mode) + 4 + r.getCharCountIndicator(l.mode, t))
                                }
                            }
                            i = c
                        }
                        for (let e = 0; e < i.length; e++) o[i[e]].end = 0;
                        return {
                            map: o,
                            table: n
                        }
                    }(i, n),
                    s = u.find_path(a.map, "start", "end"),
                    c = [];
                for (let e = 1; e < s.length - 1; e++) c.push(a.table[s[e]].node);
                return t.fromArray(c.reduce(function(e, t) {
                    let n = e.length - 1 >= 0 ? e[e.length - 1] : null;
                    return n && n.mode === t.mode ? e[e.length - 1].data += t.data : e.push(t), e
                }, []))
            }, t.rawSplit = function(e) {
                return t.fromArray(h(e, l.isKanjiModeEnabled()))
            }
        },
        49210: function(e, t) {
            let n;
            let r = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            t.getSymbolSize = function(e) {
                if (!e) throw Error('"version" cannot be null or undefined');
                if (e < 1 || e > 40) throw Error('"version" should be in range from 1 to 40');
                return 4 * e + 17
            }, t.getSymbolTotalCodewords = function(e) {
                return r[e]
            }, t.getBCHDigit = function(e) {
                let t = 0;
                for (; 0 !== e;) t++, e >>>= 1;
                return t
            }, t.setToSJISFunction = function(e) {
                if ("function" != typeof e) throw Error('"toSJISFunc" is not a valid function.');
                n = e
            }, t.isKanjiModeEnabled = function() {
                return void 0 !== n
            }, t.toSJIS = function(e) {
                return n(e)
            }
        },
        80789: function(e, t) {
            t.isValid = function(e) {
                return !isNaN(e) && e >= 1 && e <= 40
            }
        },
        87667: function(e, t, n) {
            let r = n(49210),
                o = n(58045),
                i = n(6084),
                a = n(20608),
                s = n(80789),
                c = r.getBCHDigit(7973);

            function l(e, t) {
                return a.getCharCountIndicator(e, t) + 4
            }
            t.from = function(e, t) {
                return s.isValid(e) ? parseInt(e, 10) : t
            }, t.getCapacity = function(e, t, n) {
                if (!s.isValid(e)) throw Error("Invalid QR Code version");
                void 0 === n && (n = a.BYTE);
                let i = r.getSymbolTotalCodewords(e),
                    c = o.getTotalCodewordsCount(e, t),
                    u = (i - c) * 8;
                if (n === a.MIXED) return u;
                let d = u - l(n, e);
                switch (n) {
                    case a.NUMERIC:
                        return Math.floor(d / 10 * 3);
                    case a.ALPHANUMERIC:
                        return Math.floor(d / 11 * 2);
                    case a.KANJI:
                        return Math.floor(d / 13);
                    case a.BYTE:
                    default:
                        return Math.floor(d / 8)
                }
            }, t.getBestVersionForData = function(e, n) {
                let r;
                let o = i.from(n, i.M);
                if (Array.isArray(e)) {
                    if (e.length > 1) return function(e, n) {
                        for (let r = 1; r <= 40; r++) {
                            let o = function(e, t) {
                                let n = 0;
                                return e.forEach(function(e) {
                                    let r = l(e.mode, t);
                                    n += r + e.getBitsLength()
                                }), n
                            }(e, r);
                            if (o <= t.getCapacity(r, n, a.MIXED)) return r
                        }
                    }(e, o);
                    if (0 === e.length) return 1;
                    r = e[0]
                } else r = e;
                return function(e, n, r) {
                    for (let o = 1; o <= 40; o++)
                        if (n <= t.getCapacity(o, r, e)) return o
                }(r.mode, r.getLength(), o)
            }, t.getEncodedBits = function(e) {
                if (!s.isValid(e) || e < 7) throw Error("Invalid QR Code version");
                let t = e << 12;
                for (; r.getBCHDigit(t) - c >= 0;) t ^= 7973 << r.getBCHDigit(t) - c;
                return e << 12 | t
            }
        },
        52503: function(e, t, n) {
            let r = n(86957);
            t.render = function(e, t, n) {
                var o;
                let i = n,
                    a = t;
                void 0 !== i || t && t.getContext || (i = t, t = void 0), t || (a = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (e) {
                        throw Error("You need to specify a canvas element")
                    }
                }()), i = r.getOptions(i);
                let s = r.getImageWidth(e.modules.size, i),
                    c = a.getContext("2d"),
                    l = c.createImageData(s, s);
                return r.qrToImageData(l.data, e, i), o = a, c.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = s, o.width = s, o.style.height = s + "px", o.style.width = s + "px", c.putImageData(l, 0, 0), a
            }, t.renderToDataURL = function(e, n, r) {
                let o = r;
                void 0 !== o || n && n.getContext || (o = n, n = void 0), o || (o = {});
                let i = t.render(e, n, o),
                    a = o.type || "image/png",
                    s = o.rendererOpts || {};
                return i.toDataURL(a, s.quality)
            }
        },
        99104: function(e, t, n) {
            let r = n(86957);

            function o(e, t) {
                let n = e.a / 255,
                    r = t + '="' + e.hex + '"';
                return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r
            }

            function i(e, t, n) {
                let r = e + t;
                return void 0 !== n && (r += " " + n), r
            }
            t.render = function(e, t, n) {
                let a = r.getOptions(t),
                    s = e.modules.size,
                    c = e.modules.data,
                    l = s + 2 * a.margin,
                    u = a.color.light.a ? "<path " + o(a.color.light, "fill") + ' d="M0 0h' + l + "v" + l + 'H0z"/>' : "",
                    d = "<path " + o(a.color.dark, "stroke") + ' d="' + function(e, t, n) {
                        let r = "",
                            o = 0,
                            a = !1,
                            s = 0;
                        for (let c = 0; c < e.length; c++) {
                            let l = Math.floor(c % t),
                                u = Math.floor(c / t);
                            l || a || (a = !0), e[c] ? (s++, c > 0 && l > 0 && e[c - 1] || (r += a ? i("M", l + n, .5 + u + n) : i("m", o, 0), o = 0, a = !1), l + 1 < t && e[c + 1] || (r += i("h", s), s = 0)) : o++
                        }
                        return r
                    }(c, s, a.margin) + '"/>',
                    p = a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "",
                    h = '<svg xmlns="http://www.w3.org/2000/svg" ' + p + ('viewBox="0 0 ' + l) + " " + l + '" shape-rendering="crispEdges">' + u + d + "</svg>\n";
                return "function" == typeof n && n(null, h), h
            }
        },
        86957: function(e, t) {
            function n(e) {
                if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw Error("Color should be defined as hex string");
                let t = e.slice().replace("#", "").split("");
                if (t.length < 3 || 5 === t.length || t.length > 8) throw Error("Invalid hex color: " + e);
                (3 === t.length || 4 === t.length) && (t = Array.prototype.concat.apply([], t.map(function(e) {
                    return [e, e]
                }))), 6 === t.length && t.push("F", "F");
                let n = parseInt(t.join(""), 16);
                return {
                    r: n >> 24 & 255,
                    g: n >> 16 & 255,
                    b: n >> 8 & 255,
                    a: 255 & n,
                    hex: "#" + t.slice(0, 6).join("")
                }
            }
            t.getOptions = function(e) {
                e || (e = {}), e.color || (e.color = {});
                let t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
                    r = e.width && e.width >= 21 ? e.width : void 0,
                    o = e.scale || 4;
                return {
                    width: r,
                    scale: r ? 4 : o,
                    margin: t,
                    color: {
                        dark: n(e.color.dark || "#000000ff"),
                        light: n(e.color.light || "#ffffffff")
                    },
                    type: e.type,
                    rendererOpts: e.rendererOpts || {}
                }
            }, t.getScale = function(e, t) {
                return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
            }, t.getImageWidth = function(e, n) {
                let r = t.getScale(e, n);
                return Math.floor((e + 2 * n.margin) * r)
            }, t.qrToImageData = function(e, n, r) {
                let o = n.modules.size,
                    i = n.modules.data,
                    a = t.getScale(o, r),
                    s = Math.floor((o + 2 * r.margin) * a),
                    c = r.margin * a,
                    l = [r.color.light, r.color.dark];
                for (let t = 0; t < s; t++)
                    for (let n = 0; n < s; n++) {
                        let u = (t * s + n) * 4,
                            d = r.color.light;
                        if (t >= c && n >= c && t < s - c && n < s - c) {
                            let e = Math.floor((t - c) / a),
                                r = Math.floor((n - c) / a);
                            d = l[i[e * o + r] ? 1 : 0]
                        }
                        e[u++] = d.r, e[u++] = d.g, e[u++] = d.b, e[u] = d.a
                    }
            }
        },
        12778: function(e, t, n) {
            var r;
            ! function(o, i) {
                "use strict";
                var a = "function",
                    s = "undefined",
                    c = "object",
                    l = "string",
                    u = "major",
                    d = "model",
                    p = "name",
                    h = "type",
                    f = "vendor",
                    w = "version",
                    g = "architecture",
                    A = "console",
                    m = "mobile",
                    b = "tablet",
                    y = "smarttv",
                    C = "wearable",
                    v = "embedded",
                    k = "Amazon",
                    E = "Apple",
                    B = "ASUS",
                    I = "BlackBerry",
                    x = "Browser",
                    M = "Chrome",
                    N = "Firefox",
                    S = "Google",
                    D = "Huawei",
                    Q = "Microsoft",
                    R = "Motorola",
                    P = "Opera",
                    O = "Samsung",
                    W = "Sharp",
                    U = "Sony",
                    F = "Xiaomi",
                    T = "Zebra",
                    L = "Facebook",
                    q = "Chromium OS",
                    K = "Mac OS",
                    j = function(e, t) {
                        var n = {};
                        for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                        return n
                    },
                    H = function(e) {
                        for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                        return t
                    },
                    z = function(e, t) {
                        return typeof e === l && -1 !== J(t).indexOf(J(e))
                    },
                    J = function(e) {
                        return e.toLowerCase()
                    },
                    G = function(e, t) {
                        if (typeof e === l) return e = e.replace(/^\s\s*/, ""), typeof t === s ? e : e.substring(0, 500)
                    },
                    V = function(e, t) {
                        for (var n, r, o, s, l, u, d = 0; d < t.length && !l;) {
                            var p = t[d],
                                h = t[d + 1];
                            for (n = r = 0; n < p.length && !l && p[n];)
                                if (l = p[n++].exec(e))
                                    for (o = 0; o < h.length; o++) u = l[++r], typeof(s = h[o]) === c && s.length > 0 ? 2 === s.length ? typeof s[1] == a ? this[s[0]] = s[1].call(this, u) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== a || s[1].exec && s[1].test ? this[s[0]] = u ? u.replace(s[1], s[2]) : i : this[s[0]] = u ? s[1].call(this, u, s[2]) : i : 4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : i) : this[s] = u || i;
                            d += 2
                        }
                    },
                    Y = function(e, t) {
                        for (var n in t)
                            if (typeof t[n] === c && t[n].length > 0) {
                                for (var r = 0; r < t[n].length; r++)
                                    if (z(t[n][r], e)) return "?" === n ? i : n
                            } else if (z(t[n], e)) return "?" === n ? i : n;
                        return e
                    },
                    Z = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        "8.1": "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    X = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [w, [p, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [w, [p, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [p, w],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [w, [p, P + " Mini"]],
                            [/\bop(?:rg)?x\/([\w\.]+)/i],
                            [w, [p, P + " GX"]],
                            [/\bopr\/([\w\.]+)/i],
                            [w, [p, P]],
                            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                            [w, [p, "Baidu"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [p, w],
                            [/\bddg\/([\w\.]+)/i],
                            [w, [p, "DuckDuckGo"]],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [w, [p, "UC" + x]],
                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                            [w, [p, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [w, [p, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [w, [p, "IE"]],
                            [/ya(?:search)?browser\/([\w\.]+)/i],
                            [w, [p, "Yandex"]],
                            [/slbrowser\/([\w\.]+)/i],
                            [w, [p, "Smart Lenovo " + x]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [p, /(.+)/, "$1 Secure " + x], w
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [w, [p, N + " Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [w, [p, P + " Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [w, [p, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [w, [p, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [w, [p, P + " Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [w, [p, "MIUI " + x]],
                            [/fxios\/([-\w\.]+)/i],
                            [w, [p, N]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [p, "360 " + x]
                            ],
                            [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                            [
                                [p, /(.+)/, "$1 " + x], w
                            ],
                            [/samsungbrowser\/([\w\.]+)/i],
                            [w, [p, O + " Internet"]],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [p, /_/g, " "], w
                            ],
                            [/metasr[\/ ]?([\d\.]+)/i],
                            [w, [p, "Sogou Explorer"]],
                            [/(sogou)mo\w+\/([\d\.]+)/i],
                            [
                                [p, "Sogou Mobile"], w
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [p, w],
                            [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                            [p],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [p, L], w
                            ],
                            [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(twitter)(?:and| f.+e\/([\w\.]+))/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                            [p, w],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [w, [p, "GSA"]],
                            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                            [w, [p, "TikTok"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [w, [p, M + " Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [p, M + " WebView"], w
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [w, [p, "Android " + x]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [p, w],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [w, [p, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [w, p],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [p, [w, Y, {
                                "1.0": "/8",
                                "1.2": "/1",
                                "1.3": "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [p, w],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [p, "Netscape"], w
                            ],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [w, [p, N + " Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                            [p, w],
                            [/(cobalt)\/([\w\.]+)/i],
                            [p, [w, /master.|lts./, ""]]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [g, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [g, J]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [g, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [g, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [g, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [g, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [g, /ower/, "", J]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [g, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [g, J]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [d, [f, O],
                                [h, b]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                            [d, [f, O],
                                [h, m]
                            ],
                            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                            [d, [f, E],
                                [h, m]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [d, [f, E],
                                [h, b]
                            ],
                            [/(macintosh);/i],
                            [d, [f, E]],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [d, [f, W],
                                [h, m]
                            ],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [d, [f, D],
                                [h, b]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [d, [f, D],
                                [h, m]
                            ],
                            [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                            [
                                [d, /_/g, " "],
                                [f, F],
                                [h, m]
                            ],
                            [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [d, /_/g, " "],
                                [f, F],
                                [h, b]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [d, [f, "OPPO"],
                                [h, m]
                            ],
                            [/\b(opd2\d{3}a?) bui/i],
                            [d, [f, "OPPO"],
                                [h, b]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [d, [f, "Vivo"],
                                [h, m]
                            ],
                            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                            [d, [f, "Realme"],
                                [h, m]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [d, [f, R],
                                [h, m]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [d, [f, R],
                                [h, b]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [d, [f, "LG"],
                                [h, b]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [d, [f, "LG"],
                                [h, m]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [d, [f, "Lenovo"],
                                [h, b]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [d, /_/g, " "],
                                [f, "Nokia"],
                                [h, m]
                            ],
                            [/(pixel c)\b/i],
                            [d, [f, S],
                                [h, b]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [d, [f, S],
                                [h, m]
                            ],
                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [d, [f, U],
                                [h, m]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [d, "Xperia Tablet"],
                                [f, U],
                                [h, b]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [d, [f, "OnePlus"],
                                [h, m]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [d, [f, k],
                                [h, b]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [d, /(.+)/g, "Fire Phone $1"],
                                [f, k],
                                [h, m]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [d, f, [h, b]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [d, [f, I],
                                [h, m]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [d, [f, B],
                                [h, b]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [d, [f, B],
                                [h, m]
                            ],
                            [/(nexus 9)/i],
                            [d, [f, "HTC"],
                                [h, b]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [f, [d, /_/g, " "],
                                [h, m]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [d, [f, "Acer"],
                                [h, b]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [d, [f, "Meizu"],
                                [h, m]
                            ],
                            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                            [d, [f, "Ulefone"],
                                [h, m]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [f, d, [h, m]],
                            [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [f, d, [h, b]],
                            [/(surface duo)/i],
                            [d, [f, Q],
                                [h, b]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [d, [f, "Fairphone"],
                                [h, m]
                            ],
                            [/(u304aa)/i],
                            [d, [f, "AT&T"],
                                [h, m]
                            ],
                            [/\bsie-(\w*)/i],
                            [d, [f, "Siemens"],
                                [h, m]
                            ],
                            [/\b(rct\w+) b/i],
                            [d, [f, "RCA"],
                                [h, b]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [d, [f, "Dell"],
                                [h, b]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [d, [f, "Verizon"],
                                [h, b]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [d, [f, "Barnes & Noble"],
                                [h, b]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [d, [f, "NuVision"],
                                [h, b]
                            ],
                            [/\b(k88) b/i],
                            [d, [f, "ZTE"],
                                [h, b]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [d, [f, "ZTE"],
                                [h, m]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [d, [f, "Swiss"],
                                [h, m]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [d, [f, "Swiss"],
                                [h, b]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [d, [f, "Zeki"],
                                [h, b]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [f, "Dragon Touch"], d, [h, b]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [d, [f, "Insignia"],
                                [h, b]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [d, [f, "NextBook"],
                                [h, b]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [f, "Voice"], d, [h, m]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [f, "LvTel"], d, [h, m]
                            ],
                            [/\b(ph-1) /i],
                            [d, [f, "Essential"],
                                [h, m]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [d, [f, "Envizen"],
                                [h, b]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [d, [f, "MachSpeed"],
                                [h, b]
                            ],
                            [/\btu_(1491) b/i],
                            [d, [f, "Rotor"],
                                [h, b]
                            ],
                            [/(shield[\w ]+) b/i],
                            [d, [f, "Nvidia"],
                                [h, b]
                            ],
                            [/(sprint) (\w+)/i],
                            [f, d, [h, m]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [d, /\./g, " "],
                                [f, Q],
                                [h, m]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [d, [f, T],
                                [h, b]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [d, [f, T],
                                [h, m]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [f, [h, y]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [d, /^/, "SmartTV"],
                                [f, O],
                                [h, y]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [f, "LG"],
                                [h, y]
                            ],
                            [/(apple) ?tv/i],
                            [f, [d, E + " TV"],
                                [h, y]
                            ],
                            [/crkey/i],
                            [
                                [d, M + "cast"],
                                [f, S],
                                [h, y]
                            ],
                            [/droid.+aft(\w+)( bui|\))/i],
                            [d, [f, k],
                                [h, y]
                            ],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [d, [f, W],
                                [h, y]
                            ],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [d, [f, U],
                                [h, y]
                            ],
                            [/(mitv-\w{5}) bui/i],
                            [d, [f, F],
                                [h, y]
                            ],
                            [/Hbbtv.*(technisat) (.*);/i],
                            [f, d, [h, y]],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                            [
                                [f, G],
                                [d, G],
                                [h, y]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [h, y]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [f, d, [h, A]],
                            [/droid.+; (shield) bui/i],
                            [d, [f, "Nvidia"],
                                [h, A]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [d, [f, U],
                                [h, A]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [d, [f, Q],
                                [h, A]
                            ],
                            [/((pebble))app/i],
                            [f, d, [h, C]],
                            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                            [d, [f, E],
                                [h, C]
                            ],
                            [/droid.+; (glass) \d/i],
                            [d, [f, S],
                                [h, C]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [d, [f, T],
                                [h, C]
                            ],
                            [/(quest( \d| pro)?)/i],
                            [d, [f, L],
                                [h, C]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [f, [h, v]],
                            [/(aeobc)\b/i],
                            [d, [f, k],
                                [h, v]
                            ],
                            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                            [d, [h, m]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [d, [h, b]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [h, b]
                            ],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [
                                [h, m]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [d, [f, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [w, [p, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [w, [p, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                            [p, w],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [w, p]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [p, w],
                            [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                            [p, [w, Y, Z]],
                            [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [w, Y, Z],
                                [p, "Windows"]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                            [
                                [w, /_/g, "."],
                                [p, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [p, K],
                                [w, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [w, p],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [p, w],
                            [/\(bb(10);/i],
                            [w, [p, I]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [w, [p, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [w, [p, N + " OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [w, [p, "webOS"]],
                            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                            [w, [p, "watchOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [w, [p, M + "cast"]],
                            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                            [
                                [p, q], w
                            ],
                            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [p, w],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [p, "Solaris"], w
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                            [p, w]
                        ]
                    },
                    _ = function(e, t) {
                        if (typeof e === c && (t = e, e = i), !(this instanceof _)) return new _(e, t).getResult();
                        var n = typeof o !== s && o.navigator ? o.navigator : i,
                            r = e || (n && n.userAgent ? n.userAgent : ""),
                            A = n && n.userAgentData ? n.userAgentData : i,
                            y = t ? j(X, t) : X,
                            C = n && n.userAgent == r;
                        return this.getBrowser = function() {
                            var e, t = {};
                            return t[p] = i, t[w] = i, V.call(t, r, y.browser), t[u] = typeof(e = t[w]) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : i, C && n && n.brave && typeof n.brave.isBrave == a && (t[p] = "Brave"), t
                        }, this.getCPU = function() {
                            var e = {};
                            return e[g] = i, V.call(e, r, y.cpu), e
                        }, this.getDevice = function() {
                            var e = {};
                            return e[f] = i, e[d] = i, e[h] = i, V.call(e, r, y.device), C && !e[h] && A && A.mobile && (e[h] = m), C && "Macintosh" == e[d] && n && typeof n.standalone !== s && n.maxTouchPoints && n.maxTouchPoints > 2 && (e[d] = "iPad", e[h] = b), e
                        }, this.getEngine = function() {
                            var e = {};
                            return e[p] = i, e[w] = i, V.call(e, r, y.engine), e
                        }, this.getOS = function() {
                            var e = {};
                            return e[p] = i, e[w] = i, V.call(e, r, y.os), C && !e[p] && A && A.platform && "Unknown" != A.platform && (e[p] = A.platform.replace(/chrome os/i, q).replace(/macos/i, K)), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return r
                        }, this.setUA = function(e) {
                            return r = typeof e === l && e.length > 500 ? G(e, 500) : e, this
                        }, this.setUA(r), this
                    };
                _.VERSION = "1.0.38", _.BROWSER = H([p, w, u]), _.CPU = H([g]), _.DEVICE = H([d, f, h, A, m, y, b, C, v]), _.ENGINE = _.OS = H([p, w]), typeof t !== s ? (e.exports && (t = e.exports = _), t.UAParser = _) : n.amdO ? i !== (r = (function() {
                    return _
                }).call(t, n, t, e)) && (e.exports = r) : typeof o !== s && (o.UAParser = _);
                var $ = typeof o !== s && (o.jQuery || o.Zepto);
                if ($ && !$.ua) {
                    var ee = new _;
                    $.ua = ee.getResult(), $.ua.get = function() {
                        return ee.getUA()
                    }, $.ua.set = function(e) {
                        ee.setUA(e);
                        var t = ee.getResult();
                        for (var n in t) $.ua[n] = t[n]
                    }
                }
            }("object" == typeof window ? window : this)
        },
        15812: function(e, t, n) {
            "use strict";
            n.d(t, {
                W: function() {
                    return a
                }
            });
            var r = n(16454),
                o = {
                    blue: {
                        accentColor: "#0E76FD",
                        accentColorForeground: "#FFF"
                    },
                    green: {
                        accentColor: "#1DB847",
                        accentColorForeground: "#FFF"
                    },
                    orange: {
                        accentColor: "#FF801F",
                        accentColorForeground: "#FFF"
                    },
                    pink: {
                        accentColor: "#FF5CA0",
                        accentColorForeground: "#FFF"
                    },
                    purple: {
                        accentColor: "#5F5AFA",
                        accentColorForeground: "#FFF"
                    },
                    red: {
                        accentColor: "#FA423C",
                        accentColorForeground: "#FFF"
                    }
                },
                i = o.blue,
                a = ({
                    accentColor: e = i.accentColor,
                    accentColorForeground: t = i.accentColorForeground,
                    ...n
                } = {}) => ({ ...(0, r.w)(n),
                    colors: {
                        accentColor: e,
                        accentColorForeground: t,
                        actionButtonBorder: "rgba(0, 0, 0, 0.04)",
                        actionButtonBorderMobile: "rgba(0, 0, 0, 0.06)",
                        actionButtonSecondaryBackground: "rgba(0, 0, 0, 0.06)",
                        closeButton: "rgba(60, 66, 66, 0.8)",
                        closeButtonBackground: "rgba(0, 0, 0, 0.06)",
                        connectButtonBackground: "#FFF",
                        connectButtonBackgroundError: "#FF494A",
                        connectButtonInnerBackground: "linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",
                        connectButtonText: "#25292E",
                        connectButtonTextError: "#FFF",
                        connectionIndicator: "#30E000",
                        downloadBottomCardBackground: "linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",
                        downloadTopCardBackground: "linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",
                        error: "#FF494A",
                        generalBorder: "rgba(0, 0, 0, 0.06)",
                        generalBorderDim: "rgba(0, 0, 0, 0.03)",
                        menuItemBackground: "rgba(60, 66, 66, 0.1)",
                        modalBackdrop: "rgba(0, 0, 0, 0.3)",
                        modalBackground: "#FFF",
                        modalBorder: "transparent",
                        modalText: "#25292E",
                        modalTextDim: "rgba(60, 66, 66, 0.3)",
                        modalTextSecondary: "rgba(60, 66, 66, 0.6)",
                        profileAction: "#FFF",
                        profileActionHover: "rgba(255, 255, 255, 0.5)",
                        profileForeground: "rgba(60, 66, 66, 0.06)",
                        selectedOptionBorder: "rgba(60, 66, 66, 0.1)",
                        standby: "#FFD641"
                    },
                    shadows: {
                        connectButton: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        dialog: "0px 8px 32px rgba(0, 0, 0, 0.32)",
                        profileDetailsAction: "0px 2px 6px rgba(37, 41, 46, 0.04)",
                        selectedOption: "0px 2px 6px rgba(0, 0, 0, 0.24)",
                        selectedWallet: "0px 2px 6px rgba(0, 0, 0, 0.12)",
                        walletLogo: "0px 2px 16px rgba(0, 0, 0, 0.16)"
                    }
                });
            a.accentColors = o
        },
        16454: function(e, t, n) {
            "use strict";
            n.d(t, {
                w: function() {
                    return s
                }
            });
            var r = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                o = {
                    rounded: `SFRounded, ui-rounded, "SF Pro Rounded", ${r}`,
                    system: r
                },
                i = {
                    large: {
                        actionButton: "9999px",
                        connectButton: "12px",
                        modal: "24px",
                        modalMobile: "28px"
                    },
                    medium: {
                        actionButton: "10px",
                        connectButton: "8px",
                        modal: "16px",
                        modalMobile: "18px"
                    },
                    none: {
                        actionButton: "0px",
                        connectButton: "0px",
                        modal: "0px",
                        modalMobile: "0px"
                    },
                    small: {
                        actionButton: "4px",
                        connectButton: "4px",
                        modal: "8px",
                        modalMobile: "8px"
                    }
                },
                a = {
                    large: {
                        modalOverlay: "blur(20px)"
                    },
                    none: {
                        modalOverlay: "blur(0px)"
                    },
                    small: {
                        modalOverlay: "blur(4px)"
                    }
                },
                s = ({
                    borderRadius: e = "large",
                    fontStack: t = "rounded",
                    overlayBlur: n = "none"
                }) => ({
                    blurs: {
                        modalOverlay: a[n].modalOverlay
                    },
                    fonts: {
                        body: o[t]
                    },
                    radii: {
                        actionButton: i[e].actionButton,
                        connectButton: i[e].connectButton,
                        menuButton: i[e].connectButton,
                        modal: i[e].modal,
                        modalMobile: i[e].modalMobile
                    }
                })
        },
        72663: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return r
                }
            });
            var r = `{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "Put Argent on your home screen for faster access to your wallet.",
          "title": "Open the Argent app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "compass": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Compass Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Open the Kraken Wallet app",
          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "magicEden": {
      "extension": {
        "step1": {
          "title": "Install the Magic Eden extension",
          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Install the NestWallet extension",
          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "xdefi": {
      "extension": {
        "step1": {
          "title": "Install the XDEFI Wallet extension",
          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    }
  }
}
`
        },
        88255: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return s
                },
                m: function() {
                    return a
                }
            });
            var r = n(61489),
                o = n(58031),
                i = n(21997),
                a = class extends o.F {#
                    e;#
                    t;#
                    n;
                    constructor(e) {
                        super(), this.mutationId = e.mutationId, this.#t = e.mutationCache, this.#e = [], this.state = e.state || s(), this.setOptions(e.options), this.scheduleGc()
                    }
                    setOptions(e) {
                        this.options = e, this.updateGcTime(this.options.gcTime)
                    }
                    get meta() {
                        return this.options.meta
                    }
                    addObserver(e) {
                        this.#e.includes(e) || (this.#e.push(e), this.clearGcTimeout(), this.#t.notify({
                            type: "observerAdded",
                            mutation: this,
                            observer: e
                        }))
                    }
                    removeObserver(e) {
                        this.#e = this.#e.filter(t => t !== e), this.scheduleGc(), this.#t.notify({
                            type: "observerRemoved",
                            mutation: this,
                            observer: e
                        })
                    }
                    optionalRemove() {
                        this.#e.length || ("pending" === this.state.status ? this.scheduleGc() : this.#t.remove(this))
                    }
                    continue () {
                        return this.#n ? .continue() ? ? this.execute(this.state.variables)
                    }
                    async execute(e) {
                        this.#n = (0, i.Mz)({
                            fn: () => this.options.mutationFn ? this.options.mutationFn(e) : Promise.reject(Error("No mutationFn found")),
                            onFail: (e, t) => {
                                this.#r({
                                    type: "failed",
                                    failureCount: e,
                                    error: t
                                })
                            },
                            onPause: () => {
                                this.#r({
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                this.#r({
                                    type: "continue"
                                })
                            },
                            retry: this.options.retry ? ? 0,
                            retryDelay: this.options.retryDelay,
                            networkMode: this.options.networkMode,
                            canRun: () => this.#t.canRun(this)
                        });
                        let t = "pending" === this.state.status,
                            n = !this.#n.canStart();
                        try {
                            if (!t) {
                                this.#r({
                                    type: "pending",
                                    variables: e,
                                    isPaused: n
                                }), await this.#t.config.onMutate ? .(e, this);
                                let t = await this.options.onMutate ? .(e);
                                t !== this.state.context && this.#r({
                                    type: "pending",
                                    context: t,
                                    variables: e,
                                    isPaused: n
                                })
                            }
                            let r = await this.#n.start();
                            return await this.#t.config.onSuccess ? .(r, e, this.state.context, this), await this.options.onSuccess ? .(r, e, this.state.context), await this.#t.config.onSettled ? .(r, null, this.state.variables, this.state.context, this), await this.options.onSettled ? .(r, null, e, this.state.context), this.#r({
                                type: "success",
                                data: r
                            }), r
                        } catch (t) {
                            try {
                                throw await this.#t.config.onError ? .(t, e, this.state.context, this), await this.options.onError ? .(t, e, this.state.context), await this.#t.config.onSettled ? .(void 0, t, this.state.variables, this.state.context, this), await this.options.onSettled ? .(void 0, t, e, this.state.context), t
                            } finally {
                                this.#r({
                                    type: "error",
                                    error: t
                                })
                            }
                        } finally {
                            this.#t.runNext(this)
                        }
                    }#
                    r(e) {
                        this.state = (t => {
                            switch (e.type) {
                                case "failed":
                                    return { ...t,
                                        failureCount: e.failureCount,
                                        failureReason: e.error
                                    };
                                case "pause":
                                    return { ...t,
                                        isPaused: !0
                                    };
                                case "continue":
                                    return { ...t,
                                        isPaused: !1
                                    };
                                case "pending":
                                    return { ...t,
                                        context: e.context,
                                        data: void 0,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        isPaused: e.isPaused,
                                        status: "pending",
                                        variables: e.variables,
                                        submittedAt: Date.now()
                                    };
                                case "success":
                                    return { ...t,
                                        data: e.data,
                                        failureCount: 0,
                                        failureReason: null,
                                        error: null,
                                        status: "success",
                                        isPaused: !1
                                    };
                                case "error":
                                    return { ...t,
                                        data: void 0,
                                        error: e.error,
                                        failureCount: t.failureCount + 1,
                                        failureReason: e.error,
                                        isPaused: !1,
                                        status: "error"
                                    }
                            }
                        })(this.state), r.V.batch(() => {
                            this.#e.forEach(t => {
                                t.onMutationUpdate(e)
                            }), this.#t.notify({
                                mutation: this,
                                type: "updated",
                                action: e
                            })
                        })
                    }
                };

            function s() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0,
                    submittedAt: 0
                }
            }
        },
        95245: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return u
                }
            });
            var r = n(78572),
                o = n(88255),
                i = n(61489),
                a = n(53137),
                s = n(7734),
                MutationObserver = class extends a.l {#
                    o;#
                    i = void 0;#
                    a;#
                    s;
                    constructor(e, t) {
                        super(), this.#o = e, this.setOptions(t), this.bindMethods(), this.#c()
                    }
                    bindMethods() {
                        this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                    }
                    setOptions(e) {
                        let t = this.options;
                        this.options = this.#o.defaultMutationOptions(e), (0, s.VS)(this.options, t) || this.#o.getMutationCache().notify({
                            type: "observerOptionsUpdated",
                            mutation: this.#a,
                            observer: this
                        }), t ? .mutationKey && this.options.mutationKey && (0, s.Ym)(t.mutationKey) !== (0, s.Ym)(this.options.mutationKey) ? this.reset() : this.#a ? .state.status === "pending" && this.#a.setOptions(this.options)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.#a ? .removeObserver(this)
                    }
                    onMutationUpdate(e) {
                        this.#c(), this.#l(e)
                    }
                    getCurrentResult() {
                        return this.#i
                    }
                    reset() {
                        this.#a ? .removeObserver(this), this.#a = void 0, this.#c(), this.#l()
                    }
                    mutate(e, t) {
                        return this.#s = t, this.#a ? .removeObserver(this), this.#a = this.#o.getMutationCache().build(this.#o, this.options), this.#a.addObserver(this), this.#a.execute(e)
                    }#
                    c() {
                        let e = this.#a ? .state ? ? (0, o.R)();
                        this.#i = { ...e,
                            isPending: "pending" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        }
                    }#
                    l(e) {
                        i.V.batch(() => {
                            if (this.#s && this.hasListeners()) {
                                let t = this.#i.variables,
                                    n = this.#i.context;
                                e ? .type === "success" ? (this.#s.onSuccess ? .(e.data, t, n), this.#s.onSettled ? .(e.data, null, t, n)) : e ? .type === "error" && (this.#s.onError ? .(e.error, t, n), this.#s.onSettled ? .(void 0, e.error, t, n))
                            }
                            this.listeners.forEach(e => {
                                e(this.#i)
                            })
                        })
                    }
                },
                c = n(45350),
                l = n(79315);

            function u(e, t) {
                let n = (0, c.NL)(t),
                    [o] = r.useState(() => new MutationObserver(n, e));
                r.useEffect(() => {
                    o.setOptions(e)
                }, [o, e]);
                let a = r.useSyncExternalStore(r.useCallback(e => o.subscribe(i.V.batchCalls(e)), [o]), () => o.getCurrentResult(), () => o.getCurrentResult()),
                    s = r.useCallback((e, t) => {
                        o.mutate(e, t).catch(l.Z)
                    }, [o]);
                if (a.error && (0, l.L)(o.options.throwOnError, [a.error])) throw a.error;
                return { ...a,
                    mutate: s,
                    mutateAsync: a.mutate
                }
            }
        },
        31568: function(e, t, n) {
            "use strict";
            n.d(t, {
                D: function() {
                    return c
                }
            });
            var r = n(21759),
                o = n(30346),
                i = n(11964),
                a = n(41913),
                s = n(96904);

            function c(e = {}) {
                let t, l, u, d, p, h, f, w, g;
                return "3" === e.version || e.headlessMode ? (0, r.K)(r => ({
                    id: "coinbaseWalletSDK",
                    name: "Coinbase Wallet",
                    supportsSimulation: !0,
                    type: c.type,
                    async connect({
                        chainId: e
                    } = {}) {
                        try {
                            let t = await this.getProvider(),
                                n = (await t.request({
                                    method: "eth_requestAccounts"
                                })).map(e => (0, i.K)(e));
                            u || (u = this.onAccountsChanged.bind(this), t.on("accountsChanged", u)), d || (d = this.onChainChanged.bind(this), t.on("chainChanged", d)), p || (p = this.onDisconnect.bind(this), t.on("disconnect", p));
                            let r = await this.getChainId();
                            if (e && r !== e) {
                                let t = await this.switchChain({
                                    chainId: e
                                }).catch(e => {
                                    if (e.code === a.ab.code) throw e;
                                    return {
                                        id: r
                                    }
                                });
                                r = t ? .id ? ? r
                            }
                            return {
                                accounts: n,
                                chainId: r
                            }
                        } catch (e) {
                            if (/(user closed modal|accounts received is empty|user denied account)/i.test(e.message)) throw new a.ab(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let e = await this.getProvider();
                        u && (e.removeListener("accountsChanged", u), u = void 0), d && (e.removeListener("chainChanged", d), d = void 0), p && (e.removeListener("disconnect", p), p = void 0), e.disconnect(), e.close()
                    },
                    async getAccounts() {
                        let e = await this.getProvider();
                        return (await e.request({
                            method: "eth_accounts"
                        })).map(e => (0, i.K)(e))
                    },
                    async getChainId() {
                        let e = await this.getProvider(),
                            t = await e.request({
                                method: "eth_chainId"
                            });
                        return Number(t)
                    },
                    async getProvider() {
                        if (!l) {
                            let o = await (async () => {
                                let {
                                    default: e
                                } = await Promise.all([n.e(1900), n.e(6550), n.e(206), n.e(4855)]).then(n.t.bind(n, 30206, 19));
                                return "function" != typeof e && "function" == typeof e.default ? e.default : e
                            })();
                            t = new o({
                                reloadOnDisconnect: !1,
                                ...e
                            });
                            let i = t.walletExtension ? .getChainId(),
                                a = r.chains.find(t => e.chainId ? t.id === e.chainId : t.id === i) || r.chains[0],
                                s = e.chainId || a ? .id,
                                c = e.jsonRpcUrl || a ? .rpcUrls.default.http[0];
                            l = t.makeWeb3Provider(c, s)
                        }
                        return l
                    },
                    async isAuthorized() {
                        try {
                            let e = await this.getAccounts();
                            return !!e.length
                        } catch {
                            return !1
                        }
                    },
                    async switchChain({
                        addEthereumChainParameter: e,
                        chainId: t
                    }) {
                        let n = r.chains.find(e => e.id === t);
                        if (!n) throw new a.x3(new o.X4);
                        let i = await this.getProvider();
                        try {
                            return await i.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, s.eC)(n.id)
                                }]
                            }), n
                        } catch (r) {
                            if (4902 === r.code) try {
                                let r, o;
                                r = e ? .blockExplorerUrls ? e.blockExplorerUrls : n.blockExplorers ? .default.url ? [n.blockExplorers ? .default.url] : [], o = e ? .rpcUrls ? .length ? e.rpcUrls : [n.rpcUrls.default ? .http[0] ? ? ""];
                                let a = {
                                    blockExplorerUrls: r,
                                    chainId: (0, s.eC)(t),
                                    chainName: e ? .chainName ? ? n.name,
                                    iconUrls: e ? .iconUrls,
                                    nativeCurrency: e ? .nativeCurrency ? ? n.nativeCurrency,
                                    rpcUrls: o
                                };
                                return await i.request({
                                    method: "wallet_addEthereumChain",
                                    params: [a]
                                }), n
                            } catch (e) {
                                throw new a.ab(e)
                            }
                            throw new a.x3(r)
                        }
                    },
                    onAccountsChanged(e) {
                        0 === e.length ? this.onDisconnect() : r.emitter.emit("change", {
                            accounts: e.map(e => (0, i.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let t = Number(e);
                        r.emitter.emit("change", {
                            chainId: t
                        })
                    },
                    async onDisconnect(e) {
                        r.emitter.emit("disconnect");
                        let t = await this.getProvider();
                        u && (t.removeListener("accountsChanged", u), u = void 0), d && (t.removeListener("chainChanged", d), d = void 0), p && (t.removeListener("disconnect", p), p = void 0)
                    }
                })) : (0, r.K)(t => ({
                    id: "coinbaseWalletSDK",
                    name: "Coinbase Wallet",
                    supportsSimulation: !0,
                    type: c.type,
                    async connect({
                        chainId: e
                    } = {}) {
                        try {
                            let t = await this.getProvider(),
                                n = (await t.request({
                                    method: "eth_requestAccounts"
                                })).map(e => (0, i.K)(e));
                            f || (f = this.onAccountsChanged.bind(this), t.on("accountsChanged", f)), w || (w = this.onChainChanged.bind(this), t.on("chainChanged", w)), g || (g = this.onDisconnect.bind(this), t.on("disconnect", g));
                            let r = await this.getChainId();
                            if (e && r !== e) {
                                let t = await this.switchChain({
                                    chainId: e
                                }).catch(e => {
                                    if (e.code === a.ab.code) throw e;
                                    return {
                                        id: r
                                    }
                                });
                                r = t ? .id ? ? r
                            }
                            return {
                                accounts: n,
                                chainId: r
                            }
                        } catch (e) {
                            if (/(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(e.message)) throw new a.ab(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let e = await this.getProvider();
                        f && (e.removeListener("accountsChanged", f), f = void 0), w && (e.removeListener("chainChanged", w), w = void 0), g && (e.removeListener("disconnect", g), g = void 0), e.disconnect(), e.close ? .()
                    },
                    async getAccounts() {
                        let e = await this.getProvider();
                        return (await e.request({
                            method: "eth_accounts"
                        })).map(e => (0, i.K)(e))
                    },
                    async getChainId() {
                        let e = await this.getProvider(),
                            t = await e.request({
                                method: "eth_chainId"
                            });
                        return Number(t)
                    },
                    async getProvider() {
                        if (!h) {
                            let r = await (async () => {
                                let {
                                    default: e
                                } = await Promise.all([n.e(1900), n.e(6550), n.e(8796), n.e(9016)]).then(n.t.bind(n, 78796, 19));
                                return "function" != typeof e && "function" == typeof e.default ? e.default : e
                            })();
                            h = new r({ ...e,
                                appChainIds: t.chains.map(e => e.id)
                            }).makeWeb3Provider({ ...e,
                                options: e.preference ? ? "all"
                            })
                        }
                        return h
                    },
                    async isAuthorized() {
                        try {
                            let e = await this.getAccounts();
                            return !!e.length
                        } catch {
                            return !1
                        }
                    },
                    async switchChain({
                        addEthereumChainParameter: e,
                        chainId: n
                    }) {
                        let r = t.chains.find(e => e.id === n);
                        if (!r) throw new a.x3(new o.X4);
                        let i = await this.getProvider();
                        try {
                            return await i.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, s.eC)(r.id)
                                }]
                            }), r
                        } catch (t) {
                            if (4902 === t.code) try {
                                let t, o;
                                t = e ? .blockExplorerUrls ? e.blockExplorerUrls : r.blockExplorers ? .default.url ? [r.blockExplorers ? .default.url] : [], o = e ? .rpcUrls ? .length ? e.rpcUrls : [r.rpcUrls.default ? .http[0] ? ? ""];
                                let a = {
                                    blockExplorerUrls: t,
                                    chainId: (0, s.eC)(n),
                                    chainName: e ? .chainName ? ? r.name,
                                    iconUrls: e ? .iconUrls,
                                    nativeCurrency: e ? .nativeCurrency ? ? r.nativeCurrency,
                                    rpcUrls: o
                                };
                                return await i.request({
                                    method: "wallet_addEthereumChain",
                                    params: [a]
                                }), r
                            } catch (e) {
                                throw new a.ab(e)
                            }
                            throw new a.x3(t)
                        }
                    },
                    onAccountsChanged(e) {
                        0 === e.length ? this.onDisconnect() : t.emitter.emit("change", {
                            accounts: e.map(e => (0, i.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let n = Number(e);
                        t.emitter.emit("change", {
                            chainId: n
                        })
                    },
                    async onDisconnect(e) {
                        t.emitter.emit("disconnect");
                        let n = await this.getProvider();
                        f && (n.removeListener("accountsChanged", f), f = void 0), w && (n.removeListener("chainChanged", w), w = void 0), g && (n.removeListener("disconnect", g), g = void 0)
                    }
                }))
            }
            c.type = "coinbaseWallet"
        },
        57528: function(e, t, n) {
            "use strict";
            n.d(t, {
                a: function() {
                    return l
                }
            });
            var r = n(21759),
                o = n(36238),
                i = n(30346),
                a = n(11964),
                s = n(41913),
                c = n(96904);

            function l(e) {
                let t, u, d, p, h, f, w, g;
                let A = e.isNewChainsStale ? ? !0;
                return (0, r.K)(r => ({
                    id: "walletConnect",
                    name: "WalletConnect",
                    type: l.type,
                    async setup() {
                        let e = await this.getProvider().catch(() => null);
                        e && (h || (h = this.onConnect.bind(this), e.on("connect", h)), w || (w = this.onSessionDelete.bind(this), e.on("session_delete", w)))
                    },
                    async connect({
                        chainId: e,
                        ...t
                    } = {}) {
                        try {
                            let n = await this.getProvider();
                            if (!n) throw new o.M;
                            f || (f = this.onDisplayUri, n.on("display_uri", f));
                            let i = e;
                            if (!i) {
                                let e = await r.storage ? .getItem("state") ? ? {},
                                    t = r.chains.some(t => t.id === e.chainId);
                                i = t ? e.chainId : r.chains[0] ? .id
                            }
                            if (!i) throw Error("No chains found on connector.");
                            let s = await this.isChainsStale();
                            if (n.session && s && await n.disconnect(), !n.session || s) {
                                let e = r.chains.filter(e => e.id !== i).map(e => e.id);
                                await n.connect({
                                    optionalChains: [i, ...e],
                                    ..."pairingTopic" in t ? {
                                        pairingTopic: t.pairingTopic
                                    } : {}
                                }), this.setRequestedChainsIds(r.chains.map(e => e.id))
                            }
                            let c = (await n.enable()).map(e => (0, a.K)(e)),
                                l = await this.getChainId();
                            return f && (n.removeListener("display_uri", f), f = void 0), h && (n.removeListener("connect", h), h = void 0), d || (d = this.onAccountsChanged.bind(this), n.on("accountsChanged", d)), p || (p = this.onChainChanged.bind(this), n.on("chainChanged", p)), g || (g = this.onDisconnect.bind(this), n.on("disconnect", g)), w || (w = this.onSessionDelete.bind(this), n.on("session_delete", w)), {
                                accounts: c,
                                chainId: l
                            }
                        } catch (e) {
                            if (/(user rejected|connection request reset)/i.test(e ? .message)) throw new s.ab(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let e = await this.getProvider();
                        try {
                            await e ? .disconnect()
                        } catch (e) {
                            if (!/No matching key/i.test(e.message)) throw e
                        } finally {
                            p && (e ? .removeListener("chainChanged", p), p = void 0), g && (e ? .removeListener("disconnect", g), g = void 0), h || (h = this.onConnect.bind(this), e ? .on("connect", h)), d && (e ? .removeListener("accountsChanged", d), d = void 0), w && (e ? .removeListener("session_delete", w), w = void 0), this.setRequestedChainsIds([])
                        }
                    },
                    async getAccounts() {
                        let e = await this.getProvider();
                        return e.accounts.map(e => (0, a.K)(e))
                    },
                    async getProvider({
                        chainId: o
                    } = {}) {
                        async function i() {
                            let t = r.chains.map(e => e.id);
                            if (!t.length) return;
                            let {
                                EthereumProvider: o
                            } = await Promise.all([n.e(7721), n.e(1900), n.e(9790), n.e(6671), n.e(985)]).then(n.bind(n, 93453));
                            return await o.init({ ...e,
                                disableProviderPing: !0,
                                optionalChains: t,
                                projectId: e.projectId,
                                rpcMap: Object.fromEntries(r.chains.map(e => [e.id, e.rpcUrls.default.http[0]])),
                                showQrModal: e.showQrModal ? ? !0
                            })
                        }
                        return t || (u || (u = i()), t = await u, t ? .events.setMaxListeners(Number.POSITIVE_INFINITY)), o && await this.switchChain ? .({
                            chainId: o
                        }), t
                    },
                    async getChainId() {
                        let e = await this.getProvider();
                        return e.chainId
                    },
                    async isAuthorized() {
                        try {
                            let [e, t] = await Promise.all([this.getAccounts(), this.getProvider()]);
                            if (!e.length) return !1;
                            let n = await this.isChainsStale();
                            if (n && t.session) return await t.disconnect().catch(() => {}), !1;
                            return !0
                        } catch {
                            return !1
                        }
                    },
                    async switchChain({
                        addEthereumChainParameter: e,
                        chainId: t
                    }) {
                        let n = await this.getProvider();
                        if (!n) throw new o.M;
                        let a = r.chains.find(e => e.id === t);
                        if (!a) throw new s.x3(new i.X4);
                        try {
                            await Promise.all([new Promise(e => {
                                let n = ({
                                    chainId: o
                                }) => {
                                    o === t && (r.emitter.off("change", n), e())
                                };
                                r.emitter.on("change", n)
                            }), n.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, c.eC)(t)
                                }]
                            })]);
                            let e = await this.getRequestedChainsIds();
                            return this.setRequestedChainsIds([...e, t]), a
                        } catch (r) {
                            if (/(user rejected)/i.test(r.message)) throw new s.ab(r);
                            try {
                                let r, o;
                                r = e ? .blockExplorerUrls ? e.blockExplorerUrls : a.blockExplorers ? .default.url ? [a.blockExplorers ? .default.url] : [], o = e ? .rpcUrls ? .length ? e.rpcUrls : [...a.rpcUrls.default.http];
                                let i = {
                                    blockExplorerUrls: r,
                                    chainId: (0, c.eC)(t),
                                    chainName: e ? .chainName ? ? a.name,
                                    iconUrls: e ? .iconUrls,
                                    nativeCurrency: e ? .nativeCurrency ? ? a.nativeCurrency,
                                    rpcUrls: o
                                };
                                await n.request({
                                    method: "wallet_addEthereumChain",
                                    params: [i]
                                });
                                let s = await this.getRequestedChainsIds();
                                return this.setRequestedChainsIds([...s, t]), a
                            } catch (e) {
                                throw new s.ab(e)
                            }
                        }
                    },
                    onAccountsChanged(e) {
                        0 === e.length ? this.onDisconnect() : r.emitter.emit("change", {
                            accounts: e.map(e => (0, a.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let t = Number(e);
                        r.emitter.emit("change", {
                            chainId: t
                        })
                    },
                    async onConnect(e) {
                        let t = Number(e.chainId),
                            n = await this.getAccounts();
                        r.emitter.emit("connect", {
                            accounts: n,
                            chainId: t
                        })
                    },
                    async onDisconnect(e) {
                        this.setRequestedChainsIds([]), r.emitter.emit("disconnect");
                        let t = await this.getProvider();
                        d && (t.removeListener("accountsChanged", d), d = void 0), p && (t.removeListener("chainChanged", p), p = void 0), g && (t.removeListener("disconnect", g), g = void 0), w && (t.removeListener("session_delete", w), w = void 0), h || (h = this.onConnect.bind(this), t.on("connect", h))
                    },
                    onDisplayUri(e) {
                        r.emitter.emit("message", {
                            type: "display_uri",
                            data: e
                        })
                    },
                    onSessionDelete() {
                        this.onDisconnect()
                    },
                    getNamespaceChainsIds() {
                        if (!t) return [];
                        let e = t.session ? .namespaces.eip155 ? .accounts ? .map(e => Number.parseInt(e.split(":")[1] || ""));
                        return e ? ? []
                    },
                    async getRequestedChainsIds() {
                        return await r.storage ? .getItem(this.requestedChainsStorageKey) ? ? []
                    },
                    async isChainsStale() {
                        if (!A) return !1;
                        let e = r.chains.map(e => e.id),
                            t = this.getNamespaceChainsIds();
                        if (t.length && !t.some(t => e.includes(t))) return !1;
                        let n = await this.getRequestedChainsIds();
                        return !e.every(e => n.includes(e))
                    },
                    async setRequestedChainsIds(e) {
                        await r.storage ? .setItem(this.requestedChainsStorageKey, e)
                    },
                    get requestedChainsStorageKey() {
                        return `${this.id}.requestedChains`
                    }
                }))
            }
            l.type = "walletConnect"
        },
        21759: function(e, t, n) {
            "use strict";

            function r(e) {
                return e
            }
            n.d(t, {
                K: function() {
                    return r
                }
            })
        },
        90100: function(e, t, n) {
            "use strict";
            n.d(t, {
                L: function() {
                    return h
                }
            });
            var r = n(11964),
                o = n(41913),
                i = n(21696),
                a = n(55056),
                s = n(96904),
                c = n(30346),
                l = n(36238),
                u = n(21759);
            let d = /(rabby|trustwallet)/,
                p = {
                    coinbaseWallet: {
                        id: "coinbaseWallet",
                        name: "Coinbase Wallet",
                        provider: e => e ? .coinbaseWalletExtension ? e.coinbaseWalletExtension : f(e, "isCoinbaseWallet")
                    },
                    metaMask: {
                        id: "metaMask",
                        name: "MetaMask",
                        provider: e => f(e, e => {
                            if (!e.isMetaMask || e.isBraveWallet && !e._events && !e._state) return !1;
                            for (let t of ["isApexWallet", "isAvalanche", "isBitKeep", "isBlockWallet", "isKuCoinWallet", "isMathWallet", "isOkxWallet", "isOKExWallet", "isOneInchIOSWallet", "isOneInchAndroidWallet", "isOpera", "isPortal", "isRabby", "isTokenPocket", "isTokenary", "isZerion"])
                                if (e[t]) return !1;
                            return !0
                        })
                    },
                    phantom: {
                        id: "phantom",
                        name: "Phantom",
                        provider: e => e ? .phantom ? .ethereum ? e.phantom ? .ethereum : f(e, "isPhantom")
                    }
                };

            function h(e = {}) {
                let t, n, w, g;
                let {
                    shimDisconnect: A = !0,
                    unstable_shimAsyncInject: m
                } = e;

                function b() {
                    let t = e.target;
                    if ("function" == typeof t) {
                        let e = t();
                        if (e) return e
                    }
                    return "object" == typeof t ? t : "string" == typeof t ? { ...p[t] ? ? {
                            id: t,
                            name: `${t[0].toUpperCase()}${t.slice(1)}`,
                            provider: `is${t[0].toUpperCase()}${t.slice(1)}`
                        }
                    } : {
                        id: "injected",
                        name: "Injected",
                        provider: e => e ? .ethereum
                    }
                }
                return (0, u.K)(u => ({
                    get icon() {
                        return b().icon
                    },
                    get id() {
                        return b().id
                    },
                    get name() {
                        return b().name
                    },
                    get supportsSimulation() {
                        return d.test(this.id.toLowerCase())
                    },
                    type: h.type,
                    async setup() {
                        let n = await this.getProvider();
                        n && e.target && (w || (w = this.onConnect.bind(this), n.on("connect", w)), t || (t = this.onAccountsChanged.bind(this), n.on("accountsChanged", t)))
                    },
                    async connect({
                        chainId: i,
                        isReconnecting: a
                    } = {}) {
                        let s = await this.getProvider();
                        if (!s) throw new l.M;
                        let c = [];
                        if (a) c = await this.getAccounts().catch(() => []);
                        else if (A) try {
                            let e = await s.request({
                                method: "wallet_requestPermissions",
                                params: [{
                                    eth_accounts: {}
                                }]
                            });
                            c = e[0] ? .caveats ? .[0] ? .value ? .map(e => r.K(e))
                        } catch (e) {
                            if (e.code === o.ab.code) throw new o.ab(e);
                            if (e.code === o.pT.code) throw e
                        }
                        try {
                            if (!c ? .length && !a) {
                                let e = await s.request({
                                    method: "eth_requestAccounts"
                                });
                                c = e.map(e => (0, r.K)(e))
                            }
                            w && (s.removeListener("connect", w), w = void 0), t || (t = this.onAccountsChanged.bind(this), s.on("accountsChanged", t)), n || (n = this.onChainChanged.bind(this), s.on("chainChanged", n)), g || (g = this.onDisconnect.bind(this), s.on("disconnect", g));
                            let l = await this.getChainId();
                            if (i && l !== i) {
                                let e = await this.switchChain({
                                    chainId: i
                                }).catch(e => {
                                    if (e.code === o.ab.code) throw e;
                                    return {
                                        id: l
                                    }
                                });
                                l = e ? .id ? ? l
                            }
                            return A && await u.storage ? .removeItem(`${this.id}.disconnected`), e.target || await u.storage ? .setItem("injected.connected", !0), {
                                accounts: c,
                                chainId: l
                            }
                        } catch (e) {
                            if (e.code === o.ab.code) throw new o.ab(e);
                            if (e.code === o.pT.code) throw new o.pT(e);
                            throw e
                        }
                    },
                    async disconnect() {
                        let t = await this.getProvider();
                        if (!t) throw new l.M;
                        n && (t.removeListener("chainChanged", n), n = void 0), g && (t.removeListener("disconnect", g), g = void 0), w || (w = this.onConnect.bind(this), t.on("connect", w));
                        try {
                            await (0, i.F)(() => t.request({
                                method: "wallet_revokePermissions",
                                params: [{
                                    eth_accounts: {}
                                }]
                            }), {
                                timeout: 100
                            })
                        } catch {}
                        A && await u.storage ? .setItem(`${this.id}.disconnected`, !0), e.target || await u.storage ? .removeItem("injected.connected")
                    },
                    async getAccounts() {
                        let e = await this.getProvider();
                        if (!e) throw new l.M;
                        let t = await e.request({
                            method: "eth_accounts"
                        });
                        return t.map(e => (0, r.K)(e))
                    },
                    async getChainId() {
                        let e = await this.getProvider();
                        if (!e) throw new l.M;
                        let t = await e.request({
                            method: "eth_chainId"
                        });
                        return Number(t)
                    },
                    async getProvider() {
                        let e;
                        if ("undefined" == typeof window) return;
                        let t = b();
                        return (e = "function" == typeof t.provider ? t.provider(window) : "string" == typeof t.provider ? f(window, t.provider) : t.provider) && !e.removeListener && ("off" in e && "function" == typeof e.off ? e.removeListener = e.off : e.removeListener = () => {}), e
                    },
                    async isAuthorized() {
                        try {
                            let t = A && await u.storage ? .getItem(`${this.id}.disconnected`);
                            if (t) return !1;
                            if (!e.target) {
                                let e = await u.storage ? .getItem("injected.connected");
                                if (!e) return !1
                            }
                            let n = await this.getProvider();
                            if (!n) {
                                if (void 0 !== m && !1 !== m) {
                                    let e = async () => {
                                            "undefined" != typeof window && window.removeEventListener("ethereum#initialized", e);
                                            let t = await this.getProvider();
                                            return !!t
                                        },
                                        t = "number" == typeof m ? m : 1e3,
                                        n = await Promise.race([..."undefined" != typeof window ? [new Promise(t => window.addEventListener("ethereum#initialized", () => t(e()), {
                                            once: !0
                                        }))] : [], new Promise(n => setTimeout(() => n(e()), t))]);
                                    if (n) return !0
                                }
                                throw new l.M
                            }
                            let r = await (0, a.J)(() => this.getAccounts());
                            return !!r.length
                        } catch {
                            return !1
                        }
                    },
                    async switchChain({
                        addEthereumChainParameter: e,
                        chainId: t
                    }) {
                        let n = await this.getProvider();
                        if (!n) throw new l.M;
                        let r = u.chains.find(e => e.id === t);
                        if (!r) throw new o.x3(new c.X4);
                        try {
                            return await Promise.all([n.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, s.eC)(t)
                                }]
                            }).then(async () => {
                                let e = await this.getChainId();
                                e === t && u.emitter.emit("change", {
                                    chainId: t
                                })
                            }), new Promise(e => u.emitter.once("change", ({
                                chainId: n
                            }) => {
                                n === t && e()
                            }))]), r
                        } catch (i) {
                            if (4902 === i.code || i ? .data ? .originalError ? .code === 4902) try {
                                let i, a;
                                let {
                                    default: c,
                                    ...l
                                } = r.blockExplorers ? ? {};
                                e ? .blockExplorerUrls ? i = e.blockExplorerUrls : c && (i = [c.url, ...Object.values(l).map(e => e.url)]), a = e ? .rpcUrls ? .length ? e.rpcUrls : [r.rpcUrls.default ? .http[0] ? ? ""];
                                let u = {
                                    blockExplorerUrls: i,
                                    chainId: (0, s.eC)(t),
                                    chainName: e ? .chainName ? ? r.name,
                                    iconUrls: e ? .iconUrls,
                                    nativeCurrency: e ? .nativeCurrency ? ? r.nativeCurrency,
                                    rpcUrls: a
                                };
                                await n.request({
                                    method: "wallet_addEthereumChain",
                                    params: [u]
                                });
                                let d = await this.getChainId();
                                if (d !== t) throw new o.ab(Error("User rejected switch after adding network."));
                                return r
                            } catch (e) {
                                throw new o.ab(e)
                            }
                            if (i.code === o.ab.code) throw new o.ab(i);
                            throw new o.x3(i)
                        }
                    },
                    async onAccountsChanged(e) {
                        if (0 === e.length) this.onDisconnect();
                        else if (u.emitter.listenerCount("connect")) {
                            let e = (await this.getChainId()).toString();
                            this.onConnect({
                                chainId: e
                            }), A && await u.storage ? .removeItem(`${this.id}.disconnected`)
                        } else u.emitter.emit("change", {
                            accounts: e.map(e => (0, r.K)(e))
                        })
                    },
                    onChainChanged(e) {
                        let t = Number(e);
                        u.emitter.emit("change", {
                            chainId: t
                        })
                    },
                    async onConnect(e) {
                        let r = await this.getAccounts();
                        if (0 === r.length) return;
                        let o = Number(e.chainId);
                        u.emitter.emit("connect", {
                            accounts: r,
                            chainId: o
                        });
                        let i = await this.getProvider();
                        i && (w && (i.removeListener("connect", w), w = void 0), t || (t = this.onAccountsChanged.bind(this), i.on("accountsChanged", t)), n || (n = this.onChainChanged.bind(this), i.on("chainChanged", n)), g || (g = this.onDisconnect.bind(this), i.on("disconnect", g)))
                    },
                    async onDisconnect(e) {
                        let t = await this.getProvider();
                        e && 1013 === e.code && t && (await this.getAccounts()).length || (u.emitter.emit("disconnect"), t && (n && (t.removeListener("chainChanged", n), n = void 0), g && (t.removeListener("disconnect", g), g = void 0), w || (w = this.onConnect.bind(this), t.on("connect", w))))
                    }
                }))
            }

            function f(e, t) {
                function n(e) {
                    return "function" == typeof t ? t(e) : "string" != typeof t || e[t]
                }
                let r = e.ethereum;
                return r ? .providers ? r.providers.find(e => n(e)) : r && n(r) ? r : void 0
            }
            h.type = "injected"
        },
        78118: function(e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                _: function() {
                    return k
                }
            });
            var o = n(85074);
            let i = e => (t, n, r) => {
                    let o = r.subscribe;
                    r.subscribe = (e, t, n) => {
                        let i = e;
                        if (t) {
                            let o = (null == n ? void 0 : n.equalityFn) || Object.is,
                                a = e(r.getState());
                            i = n => {
                                let r = e(n);
                                if (!o(a, r)) {
                                    let e = a;
                                    t(a = r, e)
                                }
                            }, (null == n ? void 0 : n.fireImmediately) && t(a, a)
                        }
                        return o(i)
                    };
                    let i = e(t, n, r);
                    return i
                },
                a = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => a(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => a(t)(e)
                        }
                    }
                },
                s = (e, t) => (n, r, o) => {
                    let i, s, c = {
                            getStorage: () => localStorage,
                            serialize: JSON.stringify,
                            deserialize: JSON.parse,
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({ ...t,
                                ...e
                            }),
                            ...t
                        },
                        l = !1,
                        u = new Set,
                        d = new Set;
                    try {
                        i = c.getStorage()
                    } catch (e) {}
                    if (!i) return e((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${c.name}', the given storage is currently unavailable.`), n(...e)
                    }, r, o);
                    let p = a(c.serialize),
                        h = () => {
                            let e;
                            let t = c.partialize({ ...r()
                                }),
                                n = p({
                                    state: t,
                                    version: c.version
                                }).then(e => i.setItem(c.name, e)).catch(t => {
                                    e = t
                                });
                            if (e) throw e;
                            return n
                        },
                        f = o.setState;
                    o.setState = (e, t) => {
                        f(e, t), h()
                    };
                    let w = e((...e) => {
                            n(...e), h()
                        }, r, o),
                        g = () => {
                            var e;
                            if (!i) return;
                            l = !1, u.forEach(e => e(r()));
                            let t = (null == (e = c.onRehydrateStorage) ? void 0 : e.call(c, r())) || void 0;
                            return a(i.getItem.bind(i))(c.name).then(e => {
                                if (e) return c.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === c.version) return e.state;
                                    if (c.migrate) return c.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(s = c.merge(e, null != (t = r()) ? t : w), !0), h()
                            }).then(() => {
                                null == t || t(s, void 0), l = !0, d.forEach(e => e(s))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return o.persist = {
                        setOptions: e => {
                            c = { ...c,
                                ...e
                            }, e.getStorage && (i = e.getStorage())
                        },
                        clearStorage: () => {
                            null == i || i.removeItem(c.name)
                        },
                        getOptions: () => c,
                        rehydrate: () => g(),
                        hasHydrated: () => l,
                        onHydrate: e => (u.add(e), () => {
                            u.delete(e)
                        }),
                        onFinishHydration: e => (d.add(e), () => {
                            d.delete(e)
                        })
                    }, g(), s || w
                },
                c = (e, t) => (n, r, o) => {
                    let i, s = {
                            storage: function(e, t) {
                                let n;
                                try {
                                    n = e()
                                } catch (e) {
                                    return
                                }
                                return {
                                    getItem: e => {
                                        var r;
                                        let o = e => null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver),
                                            i = null != (r = n.getItem(e)) ? r : null;
                                        return i instanceof Promise ? i.then(o) : o(i)
                                    },
                                    setItem: (e, r) => n.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
                                    removeItem: e => n.removeItem(e)
                                }
                            }(() => localStorage),
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({ ...t,
                                ...e
                            }),
                            ...t
                        },
                        c = !1,
                        l = new Set,
                        u = new Set,
                        d = s.storage;
                    if (!d) return e((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), n(...e)
                    }, r, o);
                    let p = () => {
                            let e = s.partialize({ ...r()
                            });
                            return d.setItem(s.name, {
                                state: e,
                                version: s.version
                            })
                        },
                        h = o.setState;
                    o.setState = (e, t) => {
                        h(e, t), p()
                    };
                    let f = e((...e) => {
                            n(...e), p()
                        }, r, o),
                        w = () => {
                            var e, t;
                            if (!d) return;
                            c = !1, l.forEach(e => {
                                var t;
                                return e(null != (t = r()) ? t : f)
                            });
                            let o = (null == (t = s.onRehydrateStorage) ? void 0 : t.call(s, null != (e = r()) ? e : f)) || void 0;
                            return a(d.getItem.bind(d))(s.name).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === s.version) return e.state;
                                    if (s.migrate) return s.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(i = s.merge(e, null != (t = r()) ? t : f), !0), p()
                            }).then(() => {
                                null == o || o(i, void 0), i = r(), c = !0, u.forEach(e => e(i))
                            }).catch(e => {
                                null == o || o(void 0, e)
                            })
                        };
                    return o.persist = {
                        setOptions: e => {
                            s = { ...s,
                                ...e
                            }, e.storage && (d = e.storage)
                        },
                        clearStorage: () => {
                            null == d || d.removeItem(s.name)
                        },
                        getOptions: () => s,
                        rehydrate: () => w(),
                        hasHydrated: () => c,
                        onHydrate: e => (l.add(e), () => {
                            l.delete(e)
                        }),
                        onFinishHydration: e => (u.add(e), () => {
                            u.delete(e)
                        })
                    }, s.skipHydration || w(), i || f
                },
                l = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), s(e, t)) : c(e, t),
                u = e => {
                    let t;
                    let n = new Set,
                        r = (e, r) => {
                            let o = "function" == typeof e ? e(t) : e;
                            if (!Object.is(o, t)) {
                                let e = t;
                                t = (null != r ? r : "object" != typeof o) ? o : Object.assign({}, t, o), n.forEach(n => n(t, e))
                            }
                        },
                        o = () => t,
                        i = {
                            setState: r,
                            getState: o,
                            subscribe: e => (n.add(e), () => n.delete(e)),
                            destroy: () => {
                                console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear()
                            }
                        };
                    return t = e(r, o, i), i
                },
                d = e => e ? u(e) : u;
            var p = n(90100),
                h = n(71100);
            class f {
                constructor(e) {
                    Object.defineProperty(this, "uid", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    }), Object.defineProperty(this, "_emitter", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: new h
                    })
                }
                on(e, t) {
                    this._emitter.on(e, t)
                }
                once(e, t) {
                    this._emitter.once(e, t)
                }
                off(e, t) {
                    this._emitter.off(e, t)
                }
                emit(e, ...t) {
                    let n = t[0];
                    this._emitter.emit(e, {
                        uid: this.uid,
                        ...n
                    })
                }
                listenerCount(e) {
                    return this._emitter.listenerCount(e)
                }
            }

            function w(e, t) {
                return JSON.parse(e, (e, n) => {
                    let r = n;
                    return r ? .__type === "bigint" && (r = BigInt(r.value)), r ? .__type === "Map" && (r = new Map(r.value)), t ? .(e, r) ? ? r
                })
            }

            function g(e, t) {
                return e.slice(0, t).join(".") || "."
            }

            function A(e, t) {
                let {
                    length: n
                } = e;
                for (let r = 0; r < n; ++r)
                    if (e[r] === t) return r + 1;
                return 0
            }

            function m(e, t, n, r) {
                return JSON.stringify(e, function(e, t) {
                    let n = "function" == typeof e,
                        r = "function" == typeof t,
                        o = [],
                        i = [];
                    return function(a, s) {
                        if ("object" == typeof s) {
                            if (o.length) {
                                let e = A(o, this);
                                0 === e ? o[o.length] = this : (o.splice(e), i.splice(e)), i[i.length] = a;
                                let n = A(o, s);
                                if (0 !== n) return r ? t.call(this, a, s, g(i, n)) : `[ref=${g(i,n)}]`
                            } else o[0] = s, i[0] = a
                        }
                        return n ? e.call(this, a, s) : s
                    }
                }((e, n) => {
                    let r = n;
                    return "bigint" == typeof r && (r = {
                        __type: "bigint",
                        value: n.toString()
                    }), r instanceof Map && (r = {
                        __type: "Map",
                        value: Array.from(n.entries())
                    }), t ? .(e, r) ? ? r
                }, r), n ? ? void 0)
            }
            let b = {
                getItem: () => null,
                setItem: () => {},
                removeItem: () => {}
            };
            var y = n(30346);
            let C = 256;
            var v = n(53638);

            function k(e) {
                let t;
                let {
                    multiInjectedProviderDiscovery: n = !0,
                    storage: a = function(e) {
                        let {
                            deserialize: t = w,
                            key: n = "wagmi",
                            serialize: r = m,
                            storage: o = b
                        } = e;

                        function i(e) {
                            return e instanceof Promise ? e.then(e => e).catch(() => null) : e
                        }
                        return { ...o,
                            key: n,
                            async getItem(e, r) {
                                let a = o.getItem(`${n}.${e}`),
                                    s = await i(a);
                                return s ? t(s) ? ? null : r ? ? null
                            },
                            async setItem(e, t) {
                                let a = `${n}.${e}`;
                                null === t ? await i(o.removeItem(a)) : await i(o.setItem(a, r(t)))
                            },
                            async removeItem(e) {
                                await i(o.removeItem(`${n}.${e}`))
                            }
                        }
                    }({
                        storage: "undefined" != typeof window && window.localStorage ? window.localStorage : b
                    }),
                    syncConnectedChain: s = !0,
                    ssr: c,
                    ...u
                } = e, h = "undefined" != typeof window && n ? function() {
                    let e = new Set,
                        t = [],
                        n = () => (function(e) {
                            let t = t => e(t.detail);
                            return window.addEventListener("eip6963:announceProvider", t), window.dispatchEvent(new CustomEvent("eip6963:requestProvider")), () => window.removeEventListener("eip6963:announceProvider", t)
                        })(n => {
                            t.some(({
                                info: e
                            }) => e.uuid === n.info.uuid) || (t = [...t, n], e.forEach(e => e(t, {
                                added: [n]
                            })))
                        }),
                        r = n();
                    return {
                        _listeners: () => e,
                        clear() {
                            e.forEach(e => e([], {
                                removed: [...t]
                            })), t = []
                        },
                        destroy() {
                            this.clear(), e.clear(), r()
                        },
                        findProvider: ({
                            rdns: e
                        }) => t.find(t => t.info.rdns === e),
                        getProviders: () => t,
                        reset() {
                            this.clear(), r(), r = n()
                        },
                        subscribe: (n, {
                            emitImmediately: r
                        } = {}) => (e.add(n), r && n(t, {
                            added: t
                        }), () => e.delete(n))
                    }
                }() : void 0, g = d(() => u.chains), A = d(() => [...u.connectors ? ? [], ...c ? [] : h ? .getProviders().map(E) ? ? []].map(k));

                function k(e) {
                    let t = new f(function(e = 11) {
                            if (!r || C + e > 512) {
                                r = "", C = 0;
                                for (let e = 0; e < 256; e++) r += (256 + 256 * Math.random() | 0).toString(16).substring(1)
                            }
                            return r.substring(C, C++ + e)
                        }()),
                        n = { ...e({
                                emitter: t,
                                chains: g.getState(),
                                storage: a
                            }),
                            emitter: t,
                            uid: t.uid
                        };
                    return t.on("connect", S), n.setup ? .(), n
                }

                function E(e) {
                    let {
                        info: t
                    } = e, n = e.provider;
                    return (0, p.L)({
                        target: { ...t,
                            id: t.rdns,
                            provider: n
                        }
                    })
                }
                let B = new Map;

                function I() {
                    return {
                        chainId: g.getState()[0].id,
                        connections: new Map,
                        current: null,
                        status: "disconnected"
                    }
                }
                let x = "0.0.0-canary-";
                t = v.i.startsWith(x) ? Number.parseInt(v.i.replace(x, "")) : Number.parseInt(v.i.split(".")[0] ? ? "0");
                let M = d(i(a ? l(I, {
                    migrate(e, n) {
                        if (n === t) return e;
                        let r = I(),
                            o = e && "object" == typeof e && "chainId" in e && "number" == typeof e.chainId && g.getState().some(t => t.id === e.chainId) ? e.chainId : r.chainId;
                        return { ...r,
                            chainId: o
                        }
                    },
                    name: "store",
                    partialize: e => ({
                        connections: {
                            __type: "Map",
                            value: Array.from(e.connections.entries()).map(([e, t]) => {
                                let {
                                    id: n,
                                    name: r,
                                    type: o,
                                    uid: i
                                } = t.connector;
                                return [e, { ...t,
                                    connector: {
                                        id: n,
                                        name: r,
                                        type: o,
                                        uid: i
                                    }
                                }]
                            })
                        },
                        chainId: e.chainId,
                        current: e.current
                    }),
                    skipHydration: c,
                    storage: a,
                    version: t
                }) : I));

                function N(e) {
                    M.setState(t => {
                        let n = t.connections.get(e.uid);
                        return n ? { ...t,
                            connections: new Map(t.connections).set(e.uid, {
                                accounts: e.accounts ? ? n.accounts,
                                chainId: e.chainId ? ? n.chainId,
                                connector: n.connector
                            })
                        } : t
                    })
                }

                function S(e) {
                    "connecting" !== M.getState().status && "reconnecting" !== M.getState().status && M.setState(t => {
                        let n = A.getState().find(t => t.uid === e.uid);
                        return n ? (n.emitter.listenerCount("connect") && n.emitter.off("connect", N), n.emitter.listenerCount("change") || n.emitter.on("change", N), n.emitter.listenerCount("disconnect") || n.emitter.on("disconnect", D), { ...t,
                            connections: new Map(t.connections).set(e.uid, {
                                accounts: e.accounts,
                                chainId: e.chainId,
                                connector: n
                            }),
                            current: e.uid,
                            status: "connected"
                        }) : t
                    })
                }

                function D(e) {
                    M.setState(t => {
                        let n = t.connections.get(e.uid);
                        if (n) {
                            let e = n.connector;
                            e.emitter.listenerCount("change") && n.connector.emitter.off("change", N), e.emitter.listenerCount("disconnect") && n.connector.emitter.off("disconnect", D), e.emitter.listenerCount("connect") || n.connector.emitter.on("connect", S)
                        }
                        if (t.connections.delete(e.uid), 0 === t.connections.size) return { ...t,
                            connections: new Map,
                            current: null,
                            status: "disconnected"
                        };
                        let r = t.connections.values().next().value;
                        return { ...t,
                            connections: new Map(t.connections),
                            current: r.connector.uid
                        }
                    })
                }
                return s && M.subscribe(({
                    connections: e,
                    current: t
                }) => t ? e.get(t) ? .chainId : void 0, e => {
                    let t = g.getState().some(t => t.id === e);
                    if (t) return M.setState(t => ({ ...t,
                        chainId: e ? ? t.chainId
                    }))
                }), h ? .subscribe(e => {
                    let t = new Map;
                    for (let e of A.getState()) t.set(e.id, !0);
                    let n = [];
                    for (let r of e) {
                        let e = k(E(r));
                        t.has(e.id) || n.push(e)
                    }(!a || M.persist.hasHydrated()) && A.setState(e => [...e, ...n], !0)
                }), {
                    get chains() {
                        return g.getState()
                    },
                    get connectors() {
                        return A.getState()
                    },
                    storage: a,
                    getClient: function(e = {}) {
                        let t;
                        let n = e.chainId ? ? M.getState().chainId,
                            r = g.getState().find(e => e.id === n);
                        if (e.chainId && !r) throw new y.X4; {
                            let e = B.get(M.getState().chainId);
                            if (e && !r) return e;
                            if (!r) throw new y.X4
                        } {
                            let e = B.get(n);
                            if (e) return e
                        }
                        if (u.client) t = u.client({
                            chain: r
                        });
                        else {
                            let e = r.id,
                                n = g.getState().map(e => e.id),
                                i = {},
                                a = Object.entries(u);
                            for (let [t, r] of a)
                                if ("chains" !== t && "client" !== t && "connectors" !== t && "transports" !== t) {
                                    if ("object" == typeof r) {
                                        if (e in r) i[t] = r[e];
                                        else {
                                            let e = n.some(e => e in r);
                                            if (e) continue;
                                            i[t] = r
                                        }
                                    } else i[t] = r
                                }
                            t = (0, o.e)({ ...i,
                                chain: r,
                                batch: i.batch ? ? {
                                    multicall: !0
                                },
                                transport: t => u.transports[e]({ ...t,
                                    connectors: A
                                })
                            })
                        }
                        return B.set(n, t), t
                    },
                    get state() {
                        return M.getState()
                    },
                    setState(e) {
                        let t;
                        t = "function" == typeof e ? e(M.getState()) : e;
                        let n = I();
                        "object" != typeof t && (t = n);
                        let r = Object.keys(n).some(e => !(e in t));
                        r && (t = n), M.setState(t, !0)
                    },
                    subscribe: (e, t, n) => M.subscribe(e, t, n ? { ...n,
                        fireImmediately: n.emitImmediately
                    } : void 0),
                    _internal: {
                        mipd: h,
                        store: M,
                        ssr: !!c,
                        syncConnectedChain: s,
                        transports: u.transports,
                        chains: {
                            setState(e) {
                                let t = "function" == typeof e ? e(g.getState()) : e;
                                if (0 !== t.length) return g.setState(t, !0)
                            },
                            subscribe: e => g.subscribe(e)
                        },
                        connectors: {
                            providerDetailToConnector: E,
                            setup: k,
                            setState: e => A.setState("function" == typeof e ? e(A.getState()) : e, !0),
                            subscribe: e => A.subscribe(e)
                        },
                        events: {
                            change: N,
                            connect: S,
                            disconnect: D
                        }
                    }
                }
            }
        },
        36238: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return o
                },
                O: function() {
                    return i
                }
            });
            var r = n(55240);
            class o extends r.G {
                constructor() {
                    super("Provider not found."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ProviderNotFoundError"
                    })
                }
            }
            class i extends r.G {
                constructor({
                    connector: e
                }) {
                    super(`"${e.name}" does not support programmatic chain switching.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SwitchChainNotSupportedError"
                    })
                }
            }
        },
        54457: function(e, t, n) {
            "use strict";
            t.Z = function() {
                for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)(e = arguments[n]) && (t = function e(t) {
                    var n, r, o = "";
                    if ("string" == typeof t || "number" == typeof t) o += t;
                    else if ("object" == typeof t) {
                        if (Array.isArray(t)) {
                            var i = t.length;
                            for (n = 0; n < i; n++) t[n] && (r = e(t[n])) && (o && (o += " "), o += r)
                        } else
                            for (r in t) t[r] && (o && (o += " "), o += r)
                    }
                    return o
                }(e)) && (r && (r += " "), r += t);
                return r
            }
        },
        6622: function(e, t, n) {
            "use strict";
            let r, o, i, a, s, c, l, u, d, p, h, f, w, g, A;
            n.d(t, {
                F: function() {
                    return z
                }
            });
            let m = new Map([
                [8217, "apostrophe"],
                [8260, "fraction slash"],
                [12539, "middle dot"]
            ]);

            function b(e) {
                var t;
                let n;
                return t = function(e) {
                    let t = 0;

                    function n() {
                        return e[t++] << 8 | e[t++]
                    }
                    let r = n(),
                        o = 1,
                        i = [0, 1];
                    for (let e = 1; e < r; e++) i.push(o += n());
                    let a = n(),
                        s = t;
                    t += a;
                    let c = 0,
                        l = 0;

                    function u() {
                        return 0 == c && (l = l << 8 | e[t++], c = 8), l >> --c & 1
                    }
                    let d = 2147483648 - 1,
                        p = 0;
                    for (let e = 0; e < 31; e++) p = p << 1 | u();
                    let h = [],
                        f = 0,
                        w = 2147483648;
                    for (;;) {
                        let e = Math.floor(((p - f + 1) * o - 1) / w),
                            t = 0,
                            n = r;
                        for (; n - t > 1;) {
                            let r = t + n >>> 1;
                            e < i[r] ? n = r : t = r
                        }
                        if (0 == t) break;
                        h.push(t);
                        let a = f + Math.floor(w * i[t] / o),
                            s = f + Math.floor(w * i[t + 1] / o) - 1;
                        for (;
                            ((a ^ s) & 1073741824) == 0;) p = p << 1 & d | u(), a = a << 1 & d, s = s << 1 & d | 1;
                        for (; a & ~s & 536870912;) p = 1073741824 & p | p << 1 & d >>> 1 | u(), a = a << 1 ^ 1073741824, s = (1073741824 ^ s) << 1 | 1073741825;
                        f = a, w = 1 + s - a
                    }
                    let g = r - 4;
                    return h.map(t => {
                        switch (t - g) {
                            case 3:
                                return g + 65792 + (e[s++] << 16 | e[s++] << 8 | e[s++]);
                            case 2:
                                return g + 256 + (e[s++] << 8 | e[s++]);
                            case 1:
                                return g + e[s++];
                            default:
                                return t - 1
                        }
                    })
                }(function(e) {
                    let t = [];
                    [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((e, n) => t[e.charCodeAt(0)] = n);
                    let n = e.length,
                        r = new Uint8Array(6 * n >> 3);
                    for (let o = 0, i = 0, a = 0, s = 0; o < n; o++) s = s << 6 | t[e.charCodeAt(o)], (a += 6) >= 8 && (r[i++] = s >> (a -= 8));
                    return r
                }(e)), n = 0, () => t[n++]
            }

            function y(e, t = 0) {
                let n = [];
                for (;;) {
                    let r = e(),
                        o = e();
                    if (!o) break;
                    t += r;
                    for (let e = 0; e < o; e++) n.push(t + e);
                    t += o + 1
                }
                return n
            }

            function C(e) {
                return k(() => {
                    let t = y(e);
                    if (t.length) return t
                })
            }

            function v(e) {
                let t = [];
                for (;;) {
                    let n = e();
                    if (0 == n) break;
                    t.push(function(e, t) {
                        let n = 1 + t(),
                            r = t(),
                            o = k(t);
                        return E(o.length, 1 + e, t).flatMap((e, t) => {
                            let [i, ...a] = e;
                            return Array(o[t]).fill().map((e, t) => {
                                let o = t * r;
                                return [i + t * n, a.map(e => e + o)]
                            })
                        })
                    }(n, e))
                }
                for (;;) {
                    let n = e() - 1;
                    if (n < 0) break;
                    t.push(E(1 + e(), 1 + n, e).map(e => [e[0], e.slice(1)]))
                }
                return t.flat()
            }

            function k(e) {
                let t = [];
                for (;;) {
                    let n = e(t.length);
                    if (!n) break;
                    t.push(n)
                }
                return t
            }

            function E(e, t, n) {
                let r = Array(e).fill().map(() => []);
                for (let o = 0; o < t; o++)(function(e, t) {
                    let n = Array(e);
                    for (let o = 0, i = 0; o < e; o++) {
                        var r;
                        n[o] = i += 1 & (r = t()) ? ~r >> 1 : r >> 1
                    }
                    return n
                })(e, n).forEach((e, t) => r[t].push(e));
                return r
            }

            function B(e) {
                return `{${e.toString(16).toUpperCase().padStart(2,"0")}}`
            }

            function I(e) {
                let t = e.length;
                if (t < 4096) return String.fromCodePoint(...e);
                let n = [];
                for (let r = 0; r < t;) n.push(String.fromCodePoint(...e.slice(r, r += 4096)));
                return n.join("")
            }

            function x(e, t) {
                let n = e.length,
                    r = n - t.length;
                for (let o = 0; 0 == r && o < n; o++) r = e[o] - t[o];
                return r
            }

            function M(e) {
                return e >> 24 & 255
            }

            function N(e) {
                return 16777215 & e
            }

            function S(e) {
                return e >= 44032 && e < 55204
            }

            function D(e) {
                r || function() {
                    let e = b("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");
                    for (let [t, n] of (r = new Map(C(e).flatMap((e, t) => e.map(e => [e, t + 1 << 24]))), o = new Set(y(e)), i = new Map, a = new Map, v(e))) {
                        if (!o.has(t) && 2 == n.length) {
                            let [e, r] = n, o = a.get(e);
                            o || (o = new Map, a.set(e, o)), o.set(r, t)
                        }
                        i.set(t, n.reverse())
                    }
                }();
                let t = [],
                    n = [],
                    s = !1;

                function c(e) {
                    let n = r.get(e);
                    n && (s = !0, e |= n), t.push(e)
                }
                for (let r of e)
                    for (;;) {
                        if (r < 128) t.push(r);
                        else if (S(r)) {
                            let e = r - 44032,
                                t = e / 588 | 0,
                                n = e % 588 / 28 | 0,
                                o = e % 28;
                            c(4352 + t), c(4449 + n), o > 0 && c(4519 + o)
                        } else {
                            let e = i.get(r);
                            e ? n.push(...e) : c(r)
                        }
                        if (!n.length) break;
                        r = n.pop()
                    }
                if (s && t.length > 1) {
                    let e = M(t[0]);
                    for (let n = 1; n < t.length; n++) {
                        let r = M(t[n]);
                        if (0 == r || e <= r) {
                            e = r;
                            continue
                        }
                        let o = n - 1;
                        for (;;) {
                            let n = t[o + 1];
                            if (t[o + 1] = t[o], t[o] = n, !o || (e = M(t[--o])) <= r) break
                        }
                        e = M(t[n])
                    }
                }
                return t
            }

            function Q(e) {
                return function(e) {
                    let t = [],
                        n = [],
                        r = -1,
                        o = 0;
                    for (let i of e) {
                        let e = M(i),
                            s = N(i);
                        if (-1 == r) 0 == e ? r = s : t.push(s);
                        else if (o > 0 && o >= e) 0 == e ? (t.push(r, ...n), n.length = 0, r = s) : n.push(s), o = e;
                        else {
                            let i = function(e, t) {
                                if (e >= 4352 && e < 4371 && t >= 4449 && t < 4470) return 44032 + (e - 4352) * 588 + (t - 4449) * 28;
                                if (S(e) && t > 4519 && t < 4547 && (e - 44032) % 28 == 0) return e + (t - 4519); {
                                    let n = a.get(e);
                                    return n && (n = n.get(t)) ? n : -1
                                }
                            }(r, s);
                            i >= 0 ? r = i : 0 == o && 0 == e ? (t.push(r), r = s) : (n.push(s), o = e)
                        }
                    }
                    return r >= 0 && t.push(r, ...n), t
                }(D(e))
            }
            let R = e => Array.from(e);

            function P(e, t) {
                return e.P.has(t) || e.Q.has(t)
            }
            class O extends Array {
                get is_emoji() {
                    return !0
                }
            }

            function W() {
                let e, t;
                if (s) return;
                let n = b("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"),
                    r = () => y(n),
                    o = () => new Set(r());
                s = new Map(v(n)), c = o(), l = r(), u = new Set(r().map(e => l[e])), l = new Set(l), d = o(), o();
                let i = C(n),
                    a = n(),
                    m = () => new Set(r().flatMap(e => i[e]).concat(r()));
                p = k(e => {
                    let t = k(n).map(e => e + 96);
                    if (t.length) {
                        let r = e >= a;
                        return t[0] -= 32, t = I(t), r && (t = `Restricted[${t}]`), {
                            N: t,
                            P: m(),
                            Q: m(),
                            M: !n(),
                            R: r
                        }
                    }
                }), h = o(), f = new Map;
                let E = r().concat(R(h)).sort((e, t) => e - t);
                for (let {
                        V: e,
                        M: t
                    } of (E.forEach((e, t) => {
                        let r = n(),
                            o = E[t] = r ? E[t - r] : {
                                V: [],
                                M: new Map
                            };
                        o.V.push(e), h.has(e) || f.set(e, o)
                    }), new Set(f.values()))) {
                    let n = [];
                    for (let t of e) {
                        let e = p.filter(e => P(e, t)),
                            r = n.find(({
                                G: t
                            }) => e.some(e => t.has(e)));
                        r || (r = {
                            G: new Set,
                            V: []
                        }, n.push(r)), r.V.push(t), e.forEach(e => r.G.add(e))
                    }
                    let r = n.flatMap(e => R(e.G));
                    for (let {
                            G: e,
                            V: o
                        } of n) {
                        let n = new Set(r.filter(t => !e.has(t)));
                        for (let e of o) t.set(e, n)
                    }
                }
                let B = new Set,
                    M = new Set,
                    S = e => B.has(e) ? M.add(e) : B.add(e);
                for (let e of p) {
                    for (let t of e.P) S(t);
                    for (let t of e.Q) S(t)
                }
                for (let e of B) f.has(e) || M.has(e) || f.set(e, 1);
                for (let r of (w = new Set(R(B).concat(R(D(B).map(N)))), g = (e = [], t = y(n), function t({
                        S: n,
                        B: r
                    }, o, i) {
                        if (!(4 & n) || i !== o[o.length - 1])
                            for (let a of (2 & n && (i = o[o.length - 1]), 1 & n && e.push(o), r))
                                for (let e of a.Q) t(a, [...o, e], i)
                    }(function e(r) {
                        return {
                            S: n(),
                            B: k(() => {
                                let r = y(n).map(e => t[e]);
                                if (r.length) return e(r)
                            }),
                            Q: r
                        }
                    }([]), []), e).map(e => O.from(e)).sort(x), A = new Map, g)) {
                    let e = [A];
                    for (let t of r) {
                        let n = e.map(e => {
                            let n = e.get(t);
                            return n || (n = new Map, e.set(t, n)), n
                        });
                        65039 === t ? e.push(...n) : e = n
                    }
                    for (let t of e) t.V = r
                }
            }

            function U(e) {
                return (L(e) ? "" : `${F(T([e]))} `) + B(e)
            }

            function F(e) {
                return `"${e}"\u200E`
            }

            function T(e, t = B) {
                var n;
                let r = [];
                n = e[0], W(), l.has(n) && r.push("◌");
                let o = 0,
                    i = e.length;
                for (let n = 0; n < i; n++) {
                    let i = e[n];
                    L(i) && (r.push(I(e.slice(o, n))), r.push(t(i)), o = n + 1)
                }
                return r.push(I(e.slice(o, i))), r.join("")
            }

            function L(e) {
                return W(), d.has(e)
            }

            function q(e) {
                return Error(`disallowed character: ${U(e)}`)
            }

            function K(e, t) {
                let n = U(t),
                    r = p.find(e => e.P.has(t));
                return r && (n = `${r.N} ${n}`), Error(`illegal mixture: ${e.N} + ${n}`)
            }

            function j(e) {
                return Error(`illegal placement: ${e}`)
            }

            function H(e) {
                return e.filter(e => 65039 != e)
            }

            function z(e) {
                var t;
                return (t = function(e, t, n) {
                    if (!e) return [];
                    W();
                    let r = 0;
                    return e.split(".").map(e => {
                        let o = function(e) {
                                let t = [];
                                for (let n = 0, r = e.length; n < r;) {
                                    let r = e.codePointAt(n);
                                    n += r < 65536 ? 1 : 2, t.push(r)
                                }
                                return t
                            }(e),
                            i = {
                                input: o,
                                offset: r
                            };
                        r += o.length + 1;
                        try {
                            let e, r = i.tokens = function(e, t, n) {
                                    let r = [],
                                        o = [];
                                    for (e = e.slice().reverse(); e.length;) {
                                        let i = function(e, t) {
                                            let n, r = A,
                                                o = e.length;
                                            for (; o && (r = r.get(e[--o]));) {
                                                let {
                                                    V: i
                                                } = r;
                                                i && (n = i, t && t.push(...e.slice(o).reverse()), e.length = o)
                                            }
                                            return n
                                        }(e);
                                        if (i) o.length && (r.push(t(o)), o = []), r.push(n(i));
                                        else {
                                            let t = e.pop();
                                            if (w.has(t)) o.push(t);
                                            else {
                                                let e = s.get(t);
                                                if (e) o.push(...e);
                                                else if (!c.has(t)) throw q(t)
                                            }
                                        }
                                    }
                                    return o.length && r.push(t(o)), r
                                }(o, t, n),
                                a = r.length;
                            if (!a) throw Error("empty label");
                            let d = i.output = r.flat();
                            if (! function(e) {
                                    for (let t = e.lastIndexOf(95); t > 0;)
                                        if (95 !== e[--t]) throw Error("underscore allowed only at start")
                                }(d), !(i.emoji = a > 1 || r[0].is_emoji) && d.every(e => e < 128)) ! function(e) {
                                if (e.length >= 4 && 45 == e[2] && 45 == e[3]) throw Error(`invalid label extension: "${I(e.slice(0,4))}"`)
                            }(d), e = "ASCII";
                            else {
                                let t = r.flatMap(e => e.is_emoji ? [] : e);
                                if (t.length) {
                                    if (l.has(d[0])) throw j("leading combining mark");
                                    for (let e = 1; e < a; e++) {
                                        let t = r[e];
                                        if (!t.is_emoji && l.has(t[0])) throw j(`emoji + combining mark: "${I(r[e-1])} + ${T([t[0]])}"`)
                                    }! function(e) {
                                        let t = e[0],
                                            n = m.get(t);
                                        if (n) throw j(`leading ${n}`);
                                        let r = e.length,
                                            o = -1;
                                        for (let i = 1; i < r; i++) {
                                            t = e[i];
                                            let r = m.get(t);
                                            if (r) {
                                                if (o == i) throw j(`${n} + ${r}`);
                                                o = i + 1, n = r
                                            }
                                        }
                                        if (o == r) throw j(`trailing ${n}`)
                                    }(d);
                                    let n = R(new Set(t)),
                                        [o] = function(e) {
                                            let t = p;
                                            for (let n of e) {
                                                let e = t.filter(e => P(e, n));
                                                if (!e.length) {
                                                    if (p.some(e => P(e, n))) throw K(t[0], n);
                                                    throw q(n)
                                                }
                                                if (t = e, 1 == e.length) break
                                            }
                                            return t
                                        }(n);
                                    (function(e, t) {
                                        for (let n of t)
                                            if (!P(e, n)) throw K(e, n);
                                        if (e.M) {
                                            let e = D(t).map(N);
                                            for (let t = 1, n = e.length; t < n; t++)
                                                if (u.has(e[t])) {
                                                    let r = t + 1;
                                                    for (let o; r < n && u.has(o = e[r]); r++)
                                                        for (let n = t; n < r; n++)
                                                            if (e[n] == o) throw Error(`duplicate non-spacing marks: ${U(o)}`);
                                                    if (r - t > 4) throw Error(`excessive non-spacing marks: ${F(T(e.slice(t-1,r)))} (${r-t}/4)`);
                                                    t = r
                                                }
                                        }
                                    })(o, t),
                                    function(e, t) {
                                        let n;
                                        let r = [];
                                        for (let e of t) {
                                            let t = f.get(e);
                                            if (1 === t) return;
                                            if (t) {
                                                let r = t.M.get(e);
                                                if (!(n = n ? n.filter(e => r.has(e)) : R(r)).length) return
                                            } else r.push(e)
                                        }
                                        if (n) {
                                            for (let t of n)
                                                if (r.every(e => P(t, e))) throw Error(`whole-script confusable: ${e.N}/${t.N}`)
                                        }
                                    }(o, n), e = o.N
                                } else e = "Emoji"
                            }
                            i.type = e
                        } catch (e) {
                            i.error = e
                        }
                        return i
                    })
                }(e, Q, H)).map(({
                    input: e,
                    error: n,
                    output: r
                }) => {
                    if (n) {
                        let r = n.message;
                        throw Error(1 == t.length ? r : `Invalid label ${F(T(e))}: ${r}`)
                    }
                    return I(r)
                }).join(".")
            }
        },
        36921: function(e, t, n) {
            "use strict";
            n.d(t, {
                E: function() {
                    return a
                }
            });
            var r = n(94862),
                o = n(78572),
                i = n(72585);

            function a(e = {}) {
                let {
                    onConnect: t,
                    onDisconnect: n
                } = e, a = (0, i.Z)(e);
                (0, o.useEffect)(() => (0, r.u)(a, {
                    onChange(e, r) {
                        if (("reconnecting" === r.status || "connecting" === r.status && void 0 === r.address) && "connected" === e.status) {
                            let {
                                address: n,
                                addresses: o,
                                chain: i,
                                chainId: a,
                                connector: s
                            } = e, c = "reconnecting" === r.status || void 0 === r.status;
                            t ? .({
                                address: n,
                                addresses: o,
                                chain: i,
                                chainId: a,
                                connector: s,
                                isReconnected: c
                            })
                        } else "connected" === r.status && "disconnected" === e.status && n ? .()
                    }
                }), [a, t, n])
            }
        },
        82767: function(e, t, n) {
            "use strict";
            n.d(t, {
                K: function() {
                    return C
                }
            });
            var r = n(24948),
                o = n(45194),
                i = n(48630),
                a = n(58763),
                s = n(60121),
                c = n(12607),
                l = n(43849);

            function u(e) {
                return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(l.Bd[e])
            }
            var d = n(45808);
            async function p(e, t) {
                let {
                    allowFailure: n = !0,
                    chainId: r,
                    contracts: o,
                    ...i
                } = t, a = e.getClient({
                    chainId: r
                }), s = (0, c.s)(a, d.A, "multicall");
                return s({
                    allowFailure: n,
                    contracts: o,
                    ...i
                })
            }
            var h = n(96123);
            async function f(e, t) {
                let {
                    allowFailure: n = !0,
                    blockNumber: o,
                    blockTag: i,
                    ...a
                } = t, s = t.contracts;
                try {
                    let t = {};
                    for (let [n, r] of s.entries()) {
                        let o = r.chainId ? ? e.state.chainId;
                        t[o] || (t[o] = []), t[o] ? .push({
                            contract: r,
                            index: n
                        })
                    }
                    let r = (await Promise.all(Object.entries(t).map(([t, r]) => p(e, { ...a,
                            allowFailure: n,
                            blockNumber: o,
                            blockTag: i,
                            chainId: Number.parseInt(t),
                            contracts: r.map(({
                                contract: e
                            }) => e)
                        })))).flat(),
                        c = Object.values(t).flatMap(e => e.map(({
                            index: e
                        }) => e));
                    return r.reduce((e, t, n) => (e && (e[c[n]] = t), e), [])
                } catch (a) {
                    if (a instanceof r.uq) throw a;
                    let t = () => s.map(t => (0, h.L)(e, { ...t,
                        blockNumber: o,
                        blockTag: i
                    }));
                    if (n) return (await Promise.allSettled(t())).map(e => "fulfilled" === e.status ? {
                        result: e.value,
                        status: "success"
                    } : {
                        error: e.reason,
                        result: void 0,
                        status: "failure"
                    });
                    return await Promise.all(t())
                }
            }
            async function w(e, t) {
                let {
                    address: n,
                    blockNumber: l,
                    blockTag: d,
                    chainId: p,
                    token: h,
                    unit: f = "ether"
                } = t;
                if (h) try {
                    return g(e, {
                        balanceAddress: n,
                        chainId: p,
                        symbolType: "string",
                        tokenAddress: h
                    })
                } catch (t) {
                    if (t instanceof r.uq) {
                        let t = await g(e, {
                                balanceAddress: n,
                                chainId: p,
                                symbolType: "bytes32",
                                tokenAddress: h
                            }),
                            r = (0, o.rR)((0, i.f)(t.symbol, {
                                dir: "right"
                            }));
                        return { ...t,
                            symbol: r
                        }
                    }
                    throw t
                }
                let w = e.getClient({
                        chainId: p
                    }),
                    A = (0, c.s)(w, s.s, "getBalance"),
                    m = await A(l ? {
                        address: n,
                        blockNumber: l
                    } : {
                        address: n,
                        blockTag: d
                    }),
                    b = e.chains.find(e => e.id === p) ? ? w.chain;
                return {
                    decimals: b.nativeCurrency.decimals,
                    formatted: (0, a.b)(m, u(f)),
                    symbol: b.nativeCurrency.symbol,
                    value: m
                }
            }
            async function g(e, t) {
                let {
                    balanceAddress: n,
                    chainId: r,
                    symbolType: o,
                    tokenAddress: i,
                    unit: s
                } = t, c = {
                    abi: [{
                        type: "function",
                        name: "balanceOf",
                        stateMutability: "view",
                        inputs: [{
                            type: "address"
                        }],
                        outputs: [{
                            type: "uint256"
                        }]
                    }, {
                        type: "function",
                        name: "decimals",
                        stateMutability: "view",
                        inputs: [],
                        outputs: [{
                            type: "uint8"
                        }]
                    }, {
                        type: "function",
                        name: "symbol",
                        stateMutability: "view",
                        inputs: [],
                        outputs: [{
                            type: o
                        }]
                    }],
                    address: i
                }, [l, d, p] = await f(e, {
                    allowFailure: !1,
                    contracts: [{ ...c,
                        functionName: "balanceOf",
                        args: [n],
                        chainId: r
                    }, { ...c,
                        functionName: "decimals",
                        chainId: r
                    }, { ...c,
                        functionName: "symbol",
                        chainId: r
                    }]
                }), h = (0, a.b)(l ? ? "0", u(s ? ? d));
                return {
                    decimals: d,
                    formatted: h,
                    symbol: p,
                    value: l
                }
            }
            var A = n(35526),
                m = n(53319),
                b = n(66991),
                y = n(72585);

            function C(e = {}) {
                let {
                    address: t,
                    query: n = {}
                } = e, r = (0, y.Z)(e), o = (0, b.x)({
                    config: r
                }), i = function(e, t = {}) {
                    return {
                        async queryFn({
                            queryKey: t
                        }) {
                            let {
                                address: n,
                                scopeKey: r,
                                ...o
                            } = t[1];
                            if (!n) throw Error("address is required");
                            let i = await w(e, { ...o,
                                address: n
                            });
                            return i ? ? null
                        },
                        queryKey: function(e = {}) {
                            return ["balance", (0, A.OP)(e)]
                        }(t)
                    }
                }(r, { ...e,
                    chainId: e.chainId ? ? o
                }), a = !!(t && (n.enabled ? ? !0));
                return (0, m.aM)({ ...n,
                    ...i,
                    enabled: a
                })
            }
        },
        63279: function(e, t, n) {
            "use strict";
            n.d(t, {
                $: function() {
                    return d
                }
            });
            var r = n(95245),
                o = n(30346);
            async function i(e, t) {
                let n;
                if ((n = "function" == typeof t.connector ? e._internal.connectors.setup(t.connector) : t.connector).uid === e.state.current) throw new o.wi;
                try {
                    e.setState(e => ({ ...e,
                        status: "connecting"
                    })), n.emitter.emit("message", {
                        type: "connecting"
                    });
                    let r = await n.connect({
                            chainId: t.chainId
                        }),
                        o = r.accounts;
                    return n.emitter.off("connect", e._internal.events.connect), n.emitter.on("change", e._internal.events.change), n.emitter.on("disconnect", e._internal.events.disconnect), await e.storage ? .setItem("recentConnectorId", n.id), e.setState(e => ({ ...e,
                        connections: new Map(e.connections).set(n.uid, {
                            accounts: o,
                            chainId: r.chainId,
                            connector: n
                        }),
                        current: n.uid,
                        status: "connected"
                    })), {
                        accounts: o,
                        chainId: r.chainId
                    }
                } catch (t) {
                    throw e.setState(e => ({ ...e,
                        status: e.current ? "connected" : "disconnected"
                    })), t
                }
            }
            var a = n(78572),
                s = n(72585),
                c = n(61286);
            let l = [];

            function u(e) {
                let t = e.connectors;
                return (0, c.v)(l, t) ? l : (l = t, t)
            }

            function d(e = {}) {
                let {
                    mutation: t
                } = e, n = (0, s.Z)(e), {
                    mutate: o,
                    mutateAsync: c,
                    ...l
                } = (0, r.D)({ ...t,
                    mutationFn: e => i(n, e),
                    mutationKey: ["connect"]
                });
                return (0, a.useEffect)(() => n.subscribe(({
                    status: e
                }) => e, (e, t) => {
                    "connected" === t && "disconnected" === e && l.reset()
                }), [n, l.reset]), { ...l,
                    connect: o,
                    connectAsync: c,
                    connectors: function(e = {}) {
                        let t = (0, s.Z)(e);
                        return (0, a.useSyncExternalStore)(e => (function(e, t) {
                            let {
                                onChange: n
                            } = t;
                            return e._internal.connectors.subscribe((e, t) => {
                                n(Object.values(e), t)
                            })
                        })(t, {
                            onChange: e
                        }), () => u(t), () => u(t))
                    }({
                        config: n
                    })
                }
            }
        },
        62849: function(e, t, n) {
            "use strict";
            n.d(t, {
                q: function() {
                    return u
                }
            });
            var r = n(95245);
            async function o(e, t = {}) {
                let n;
                if (t.connector) n = t.connector;
                else {
                    let {
                        connections: t,
                        current: r
                    } = e.state, o = t.get(r);
                    n = o ? .connector
                }
                let r = e.state.connections;
                n && (await n.disconnect(), n.emitter.off("change", e._internal.events.change), n.emitter.off("disconnect", e._internal.events.disconnect), n.emitter.on("connect", e._internal.events.connect), r.delete(n.uid)), e.setState(e => {
                    if (0 === r.size) return { ...e,
                        connections: new Map,
                        current: null,
                        status: "disconnected"
                    };
                    let t = r.values().next().value;
                    return { ...e,
                        connections: new Map(r),
                        current: t.connector.uid
                    }
                }); {
                    let t = e.state.current;
                    if (!t) return;
                    let n = e.state.connections.get(t) ? .connector;
                    if (!n) return;
                    await e.storage ? .setItem("recentConnectorId", n.id)
                }
            }
            var i = n(72585),
                a = n(61286);
            let s = [];

            function c(e) {
                let t = [...e.state.connections.values()];
                return "reconnecting" === e.state.status || (0, a.v)(s, t) ? s : (s = t, t)
            }
            var l = n(78572);

            function u(e = {}) {
                let {
                    mutation: t
                } = e, n = (0, i.Z)(e), {
                    mutate: s,
                    mutateAsync: u,
                    ...d
                } = (0, r.D)({ ...t,
                    mutationFn: e => o(n, e),
                    mutationKey: ["disconnect"]
                });
                return { ...d,
                    connectors: (function(e = {}) {
                        let t = (0, i.Z)(e);
                        return (0, l.useSyncExternalStore)(e => (function(e, t) {
                            let {
                                onChange: n
                            } = t;
                            return e.subscribe(() => c(e), n, {
                                equalityFn: a.v
                            })
                        })(t, {
                            onChange: e
                        }), () => c(t), () => c(t))
                    })({
                        config: n
                    }).map(e => e.connector),
                    disconnect: s,
                    disconnectAsync: u
                }
            }
        },
        68199: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return l
                }
            });
            var r = n(1007),
                o = n(12607),
                i = n(35526),
                a = n(53319),
                s = n(66991),
                c = n(72585);

            function l(e = {}) {
                let {
                    name: t,
                    query: n = {}
                } = e, l = (0, c.Z)(e), u = (0, s.x)({
                    config: l
                }), d = function(e, t = {}) {
                    return {
                        async queryFn({
                            queryKey: t
                        }) {
                            let {
                                name: n,
                                scopeKey: i,
                                ...a
                            } = t[1];
                            if (!n) throw Error("name is required");
                            return function(e, t) {
                                let {
                                    chainId: n,
                                    ...i
                                } = t, a = e.getClient({
                                    chainId: n
                                }), s = (0, o.s)(a, r.r, "getEnsAvatar");
                                return s(i)
                            }(e, { ...a,
                                name: n
                            })
                        },
                        queryKey: function(e = {}) {
                            return ["ensAvatar", (0, i.OP)(e)]
                        }(t)
                    }
                }(l, { ...e,
                    chainId: e.chainId ? ? u
                }), p = !!(t && (n.enabled ? ? !0));
                return (0, a.aM)({ ...n,
                    ...d,
                    enabled: p
                })
            }
        },
        62528: function(e, t, n) {
            "use strict";
            n.d(t, {
                F: function() {
                    return l
                }
            });
            var r = n(43822),
                o = n(12607),
                i = n(35526),
                a = n(53319),
                s = n(66991),
                c = n(72585);

            function l(e = {}) {
                let {
                    address: t,
                    query: n = {}
                } = e, l = (0, c.Z)(e), u = (0, s.x)({
                    config: l
                }), d = function(e, t = {}) {
                    return {
                        async queryFn({
                            queryKey: t
                        }) {
                            let {
                                address: n,
                                scopeKey: i,
                                ...a
                            } = t[1];
                            if (!n) throw Error("address is required");
                            return function(e, t) {
                                let {
                                    chainId: n,
                                    ...i
                                } = t, a = e.getClient({
                                    chainId: n
                                }), s = (0, o.s)(a, r.w, "getEnsName");
                                return s(i)
                            }(e, { ...a,
                                address: n
                            })
                        },
                        queryKey: function(e = {}) {
                            return ["ensName", (0, i.OP)(e)]
                        }(t)
                    }
                }(l, { ...e,
                    chainId: e.chainId ? ? u
                }), p = !!(t && (n.enabled ? ? !0));
                return (0, a.aM)({ ...n,
                    ...d,
                    enabled: p
                })
            }
        },
        80528: function(e, t, n) {
            "use strict";
            n.d(t, {
                t: function() {
                    return s
                }
            });
            var r = n(52598);

            function o(e, t = {}) {
                let n = function(e, t = {}) {
                    let n;
                    try {
                        n = e.getClient(t)
                    } catch {}
                    return n
                }(e, t);
                return n ? .extend(r.I)
            }
            var i = n(54763),
                a = n(72585);

            function s(e = {}) {
                let t = (0, a.Z)(e);
                return (0, i.useSyncExternalStoreWithSelector)(e => (function(e, t) {
                    let {
                        onChange: n
                    } = t;
                    return e.subscribe(() => o(e), n, {
                        equalityFn: (e, t) => e ? .uid === t ? .uid
                    })
                })(t, {
                    onChange: e
                }), () => o(t, e), () => o(t, e), e => e, (e, t) => e ? .uid === t ? .uid)
            }
        },
        80448: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return l
                }
            });
            var r = n(95245),
                o = n(76381),
                i = n(12607),
                a = n(22530);
            async function s(e, t) {
                let n;
                let {
                    account: r,
                    connector: s,
                    ...c
                } = t;
                n = "object" == typeof r && "local" === r.type ? e.getClient() : await (0, a.e)(e, {
                    account: r,
                    connector: s
                });
                let l = (0, i.s)(n, o.l, "signMessage");
                return l({ ...c,
                    ...r ? {
                        account: r
                    } : {}
                })
            }
            var c = n(72585);

            function l(e = {}) {
                let {
                    mutation: t
                } = e, n = (0, c.Z)(e), {
                    mutate: o,
                    mutateAsync: i,
                    ...a
                } = (0, r.D)({ ...t,
                    mutationFn: e => s(n, e),
                    mutationKey: ["signMessage"]
                });
                return { ...a,
                    signMessage: o,
                    signMessageAsync: i
                }
            }
        },
        94073: function(e, t, n) {
            "use strict";
            n.d(t, {
                o: function() {
                    return p
                }
            });
            var r = n(95245),
                o = n(30346),
                i = n(36238);
            async function a(e, t) {
                let {
                    addEthereumChainParameter: n,
                    chainId: r
                } = t, a = e.state.connections.get(t.connector ? .uid ? ? e.state.current);
                if (a) {
                    let e = a.connector;
                    if (!e.switchChain) throw new i.O({
                        connector: e
                    });
                    let t = await e.switchChain({
                        addEthereumChainParameter: n,
                        chainId: r
                    });
                    return t
                }
                let s = e.chains.find(e => e.id === r);
                if (!s) throw new o.X4;
                return e.setState(e => ({ ...e,
                    chainId: r
                })), s
            }
            var s = n(61286);
            let c = [];

            function l(e) {
                let t = e.chains;
                return (0, s.v)(c, t) ? c : (c = t, t)
            }
            var u = n(78572),
                d = n(72585);

            function p(e = {}) {
                let {
                    mutation: t
                } = e, n = (0, d.Z)(e), {
                    mutate: o,
                    mutateAsync: i,
                    ...s
                } = (0, r.D)({ ...t,
                    mutationFn: e => a(n, e),
                    mutationKey: ["switchChain"]
                });
                return { ...s,
                    chains: function(e = {}) {
                        let t = (0, d.Z)(e);
                        return (0, u.useSyncExternalStore)(e => (function(e, t) {
                            let {
                                onChange: n
                            } = t;
                            return e._internal.chains.subscribe((e, t) => {
                                n(e, t)
                            })
                        })(t, {
                            onChange: e
                        }), () => l(t), () => l(t))
                    }({
                        config: n
                    }),
                    switchChain: o,
                    switchChainAsync: i
                }
            }
        }
    }
]);