"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4541], {
        5093: function(e, t, n) {
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(78572),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                o = r.useState,
                s = r.useEffect,
                a = r.useLayoutEffect,
                u = r.useDebugValue;

            function c(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !i(e, n)
                } catch (e) {
                    return !0
                }
            }
            var l = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var n = t(),
                    r = o({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    i = r[0].inst,
                    l = r[1];
                return a(function() {
                    i.value = n, i.getSnapshot = t, c(i) && l({
                        inst: i
                    })
                }, [e, n, t]), s(function() {
                    return c(i) && l({
                        inst: i
                    }), e(function() {
                        c(i) && l({
                            inst: i
                        })
                    })
                }, [e]), u(n), n
            };
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l
        },
        11449: function(e, t, n) {
            /**
             * @license React
             * use-sync-external-store-shim/with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(78572),
                i = n(67515),
                o = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                s = i.useSyncExternalStore,
                a = r.useRef,
                u = r.useEffect,
                c = r.useMemo,
                l = r.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
                var f = a(null);
                if (null === f.current) {
                    var d = {
                        hasValue: !1,
                        value: null
                    };
                    f.current = d
                } else d = f.current;
                var h = s(e, (f = c(function() {
                    function e(e) {
                        if (!u) {
                            if (u = !0, s = e, e = r(e), void 0 !== i && d.hasValue) {
                                var t = d.value;
                                if (i(t, e)) return a = t
                            }
                            return a = e
                        }
                        if (t = a, o(s, e)) return t;
                        var n = r(e);
                        return void 0 !== i && i(t, n) ? t : (s = e, a = n)
                    }
                    var s, a, u = !1,
                        c = void 0 === n ? null : n;
                    return [function() {
                        return e(t())
                    }, null === c ? void 0 : function() {
                        return e(c())
                    }]
                }, [t, n, r, i]))[0], f[1]);
                return u(function() {
                    d.hasValue = !0, d.value = h
                }, [h]), l(h), h
            }
        },
        67515: function(e, t, n) {
            e.exports = n(5093)
        },
        54763: function(e, t, n) {
            e.exports = n(11449)
        },
        74482: function(e, t, n) {
            function r(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error(`positive integer expected, not ${e}`)
            }

            function i(e, ...t) {
                if (!(e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name)) throw Error("Uint8Array expected");
                if (t.length > 0 && !t.includes(e.length)) throw Error(`Uint8Array expected of length ${t}, not of length=${e.length}`)
            }

            function o(e) {
                if ("function" != typeof e || "function" != typeof e.create) throw Error("Hash should be wrapped by utils.wrapConstructor");
                r(e.outputLen), r(e.blockLen)
            }

            function s(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called")
            }

            function a(e, t) {
                i(e);
                let n = t.outputLen;
                if (e.length < n) throw Error(`digestInto() expects output buffer of length at least ${n}`)
            }
            n.d(t, {
                Gg: function() {
                    return s
                },
                J8: function() {
                    return a
                },
                Rx: function() {
                    return r
                },
                aI: function() {
                    return i
                },
                vp: function() {
                    return o
                }
            })
        },
        13325: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return d
                }
            });
            var r = n(74482),
                i = n(50882);
            let o = (e, t, n) => e & t ^ ~e & n,
                s = (e, t, n) => e & t ^ e & n ^ t & n;
            class a extends i.kb {
                constructor(e, t, n, r) {
                    super(), this.blockLen = e, this.outputLen = t, this.padOffset = n, this.isLE = r, this.finished = !1, this.length = 0, this.pos = 0, this.destroyed = !1, this.buffer = new Uint8Array(e), this.view = (0, i.GL)(this.buffer)
                }
                update(e) {
                    (0, r.Gg)(this);
                    let {
                        view: t,
                        buffer: n,
                        blockLen: o
                    } = this;
                    e = (0, i.O0)(e);
                    let s = e.length;
                    for (let r = 0; r < s;) {
                        let a = Math.min(o - this.pos, s - r);
                        if (a === o) {
                            let t = (0, i.GL)(e);
                            for (; o <= s - r; r += o) this.process(t, r);
                            continue
                        }
                        n.set(e.subarray(r, r + a), this.pos), this.pos += a, r += a, this.pos === o && (this.process(t, 0), this.pos = 0)
                    }
                    return this.length += e.length, this.roundClean(), this
                }
                digestInto(e) {
                    (0, r.Gg)(this), (0, r.J8)(e, this), this.finished = !0;
                    let {
                        buffer: t,
                        view: n,
                        blockLen: o,
                        isLE: s
                    } = this, {
                        pos: a
                    } = this;
                    t[a++] = 128, this.buffer.subarray(a).fill(0), this.padOffset > o - a && (this.process(n, 0), a = 0);
                    for (let e = a; e < o; e++) t[e] = 0;
                    ! function(e, t, n, r) {
                        if ("function" == typeof e.setBigUint64) return e.setBigUint64(t, n, r);
                        let i = BigInt(32),
                            o = BigInt(4294967295),
                            s = Number(n >> i & o),
                            a = Number(n & o),
                            u = r ? 4 : 0,
                            c = r ? 0 : 4;
                        e.setUint32(t + u, s, r), e.setUint32(t + c, a, r)
                    }(n, o - 8, BigInt(8 * this.length), s), this.process(n, 0);
                    let u = (0, i.GL)(e),
                        c = this.outputLen;
                    if (c % 4) throw Error("_sha2: outputLen should be aligned to 32bit");
                    let l = c / 4,
                        f = this.get();
                    if (l > f.length) throw Error("_sha2: outputLen bigger than state");
                    for (let e = 0; e < l; e++) u.setUint32(4 * e, f[e], s)
                }
                digest() {
                    let {
                        buffer: e,
                        outputLen: t
                    } = this;
                    this.digestInto(e);
                    let n = e.slice(0, t);
                    return this.destroy(), n
                }
                _cloneInto(e) {
                    e || (e = new this.constructor), e.set(...this.get());
                    let {
                        blockLen: t,
                        buffer: n,
                        length: r,
                        finished: i,
                        destroyed: o,
                        pos: s
                    } = this;
                    return e.length = r, e.pos = s, e.finished = i, e.destroyed = o, r % t && e.buffer.set(n), e
                }
            }
            let u = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]),
                c = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]),
                l = new Uint32Array(64);
            class f extends a {
                constructor() {
                    super(64, 32, 8, !1), this.A = 0 | c[0], this.B = 0 | c[1], this.C = 0 | c[2], this.D = 0 | c[3], this.E = 0 | c[4], this.F = 0 | c[5], this.G = 0 | c[6], this.H = 0 | c[7]
                }
                get() {
                    let {
                        A: e,
                        B: t,
                        C: n,
                        D: r,
                        E: i,
                        F: o,
                        G: s,
                        H: a
                    } = this;
                    return [e, t, n, r, i, o, s, a]
                }
                set(e, t, n, r, i, o, s, a) {
                    this.A = 0 | e, this.B = 0 | t, this.C = 0 | n, this.D = 0 | r, this.E = 0 | i, this.F = 0 | o, this.G = 0 | s, this.H = 0 | a
                }
                process(e, t) {
                    for (let n = 0; n < 16; n++, t += 4) l[n] = e.getUint32(t, !1);
                    for (let e = 16; e < 64; e++) {
                        let t = l[e - 15],
                            n = l[e - 2],
                            r = (0, i.np)(t, 7) ^ (0, i.np)(t, 18) ^ t >>> 3,
                            o = (0, i.np)(n, 17) ^ (0, i.np)(n, 19) ^ n >>> 10;
                        l[e] = o + l[e - 7] + r + l[e - 16] | 0
                    }
                    let {
                        A: n,
                        B: r,
                        C: a,
                        D: c,
                        E: f,
                        F: d,
                        G: h,
                        H: b
                    } = this;
                    for (let e = 0; e < 64; e++) {
                        let t = (0, i.np)(f, 6) ^ (0, i.np)(f, 11) ^ (0, i.np)(f, 25),
                            p = b + t + o(f, d, h) + u[e] + l[e] | 0,
                            g = (0, i.np)(n, 2) ^ (0, i.np)(n, 13) ^ (0, i.np)(n, 22),
                            m = g + s(n, r, a) | 0;
                        b = h, h = d, d = f, f = c + p | 0, c = a, a = r, r = n, n = p + m | 0
                    }
                    n = n + this.A | 0, r = r + this.B | 0, a = a + this.C | 0, c = c + this.D | 0, f = f + this.E | 0, d = d + this.F | 0, h = h + this.G | 0, b = b + this.H | 0, this.set(n, r, a, c, f, d, h, b)
                }
                roundClean() {
                    l.fill(0)
                }
                destroy() {
                    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0)
                }
            }
            let d = (0, i.hE)(() => new f)
        },
        50882: function(e, t, n) {
            n.d(t, {
                kb: function() {
                    return h
                },
                l1: function() {
                    return l
                },
                eV: function() {
                    return d
                },
                GL: function() {
                    return s
                },
                iA: function() {
                    return u
                },
                O6: function() {
                    return p
                },
                np: function() {
                    return a
                },
                O0: function() {
                    return f
                },
                Jq: function() {
                    return o
                },
                hE: function() {
                    return b
                }
            });
            let r = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0;
            var i = n(74482);
            let o = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4)),
                s = e => new DataView(e.buffer, e.byteOffset, e.byteLength),
                a = (e, t) => e << 32 - t | e >>> t,
                u = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0],
                c = e => e << 24 & 4278190080 | e << 8 & 16711680 | e >>> 8 & 65280 | e >>> 24 & 255;

            function l(e) {
                for (let t = 0; t < e.length; t++) e[t] = c(e[t])
            }

            function f(e) {
                return "string" == typeof e && (e = function(e) {
                    if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                    return new Uint8Array(new TextEncoder().encode(e))
                }(e)), (0, i.aI)(e), e
            }

            function d(...e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) {
                    let r = e[n];
                    (0, i.aI)(r), t += r.length
                }
                let n = new Uint8Array(t);
                for (let t = 0, r = 0; t < e.length; t++) {
                    let i = e[t];
                    n.set(i, r), r += i.length
                }
                return n
            }
            class h {
                clone() {
                    return this._cloneInto()
                }
            }

            function b(e) {
                let t = t => e().update(f(t)).digest(),
                    n = e();
                return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t
            }

            function p(e = 32) {
                if (r && "function" == typeof r.getRandomValues) return r.getRandomValues(new Uint8Array(e));
                throw Error("crypto.getRandomValues must be defined")
            }
        },
        55495: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return r
                }
            });

            function r(e) {
                let t = e.state.current,
                    n = e.state.connections.get(t),
                    r = n ? .accounts,
                    i = r ? .[0],
                    o = e.chains.find(e => e.id === n ? .chainId),
                    s = e.state.status;
                switch (s) {
                    case "connected":
                        return {
                            address: i,
                            addresses: r,
                            chain: o,
                            chainId: n ? .chainId,
                            connector: n ? .connector,
                            isConnected: !0,
                            isConnecting: !1,
                            isDisconnected: !1,
                            isReconnecting: !1,
                            status: s
                        };
                    case "reconnecting":
                        return {
                            address: i,
                            addresses: r,
                            chain: o,
                            chainId: n ? .chainId,
                            connector: n ? .connector,
                            isConnected: !!i,
                            isConnecting: !1,
                            isDisconnected: !1,
                            isReconnecting: !0,
                            status: s
                        };
                    case "connecting":
                        return {
                            address: i,
                            addresses: r,
                            chain: o,
                            chainId: n ? .chainId,
                            connector: n ? .connector,
                            isConnected: !1,
                            isConnecting: !0,
                            isDisconnected: !1,
                            isReconnecting: !1,
                            status: s
                        };
                    case "disconnected":
                        return {
                            address: void 0,
                            addresses: void 0,
                            chain: void 0,
                            chainId: void 0,
                            connector: void 0,
                            isConnected: !1,
                            isConnecting: !1,
                            isDisconnected: !0,
                            isReconnecting: !1,
                            status: s
                        }
                }
            }
        },
        22530: function(e, t, n) {
            n.d(t, {
                e: function() {
                    return u
                }
            });
            var r = n(85074),
                i = n(91847),
                o = n(92341),
                s = n(11964),
                a = n(30346);
            async function u(e, t = {}) {
                let n;
                if (t.connector) {
                    let {
                        connector: e
                    } = t, [r, i] = await Promise.all([e.getAccounts(), e.getChainId()]);
                    n = {
                        accounts: r,
                        chainId: i,
                        connector: e
                    }
                } else n = e.state.connections.get(e.state.current);
                if (!n) throw new a.aH;
                let u = t.chainId ? ? n.chainId,
                    c = await n.connector.getChainId();
                if (c !== n.chainId) throw new a.XZ({
                    connectionChainId: n.chainId,
                    connectorChainId: c
                });
                let l = n.connector;
                if (l.getClient) return l.getClient({
                    chainId: u
                });
                let f = (0, o.T)(t.account ? ? n.accounts[0]);
                f.address = (0, s.K)(f.address);
                let d = e.chains.find(e => e.id === u),
                    h = await n.connector.getProvider({
                        chainId: u
                    });
                if (t.account && !n.accounts.some(e => e.toLowerCase() === f.address.toLowerCase())) throw new a.JK({
                    address: f.address,
                    connector: l
                });
                return (0, r.e)({
                    account: f,
                    chain: d,
                    name: "Connector Client",
                    transport: e => (function(e, t = {}) {
                        let {
                            key: n = "custom",
                            name: r = "Custom Provider",
                            retryDelay: o
                        } = t;
                        return ({
                            retryCount: s
                        }) => (0, i.q)({
                            key: n,
                            name: r,
                            request: e.request.bind(e),
                            retryCount: t.retryCount ? ? s,
                            retryDelay: o,
                            type: "custom"
                        })
                    })(h)({ ...e,
                        retryCount: 0
                    })
                })
            }
        },
        94862: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return o
                }
            });
            var r = n(61286),
                i = n(55495);

            function o(e, t) {
                let {
                    onChange: n
                } = t;
                return e.subscribe(() => (0, i.D)(e), n, {
                    equalityFn(e, t) {
                        let {
                            connector: n,
                            ...i
                        } = e, {
                            connector: o,
                            ...s
                        } = t;
                        return (0, r.v)(i, s) && n ? .id === o ? .id && n ? .uid === o ? .uid
                    }
                })
            }
        },
        55240: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return u
                }
            });
            var r, i, o = n(53638);
            let s = () => `@wagmi/core@${o.i}`;
            var a = function(e, t, n, r) {
                if ("a" === n && !r) throw TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
            };
            class u extends Error {
                get docsBaseUrl() {
                    return "https://wagmi.sh/core"
                }
                get version() {
                    return s()
                }
                constructor(e, t = {}) {
                    super(), r.add(this), Object.defineProperty(this, "details", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "docsPath", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "metaMessages", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "shortMessage", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WagmiCoreError"
                    });
                    let n = t.cause instanceof u ? t.cause.details : t.cause ? .message ? t.cause.message : t.details,
                        i = t.cause instanceof u && t.cause.docsPath || t.docsPath;
                    this.message = [e || "An error occurred.", "", ...t.metaMessages ? [...t.metaMessages, ""] : [], ...i ? [`Docs: ${this.docsBaseUrl}${i}.html${t.docsSlug?`#${t.docsSlug}`:""}`] : [], ...n ? [`Details: ${n}`] : [], `Version: ${this.version}`].join("\n"), t.cause && (this.cause = t.cause), this.details = n, this.docsPath = i, this.metaMessages = t.metaMessages, this.shortMessage = e
                }
                walk(e) {
                    return a(this, r, "m", i).call(this, this, e)
                }
            }
            r = new WeakSet, i = function e(t, n) {
                return n ? .(t) ? t : t.cause ? a(this, r, "m", e).call(this, t.cause, n) : t
            }
        },
        30346: function(e, t, n) {
            n.d(t, {
                JK: function() {
                    return a
                },
                X4: function() {
                    return i
                },
                XZ: function() {
                    return u
                },
                aH: function() {
                    return s
                },
                wi: function() {
                    return o
                }
            });
            var r = n(55240);
            class i extends r.G {
                constructor() {
                    super("Chain not configured."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainNotConfiguredError"
                    })
                }
            }
            class o extends r.G {
                constructor() {
                    super("Connector already connected."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorAlreadyConnectedError"
                    })
                }
            }
            class s extends r.G {
                constructor() {
                    super("Connector not connected."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorNotConnectedError"
                    })
                }
            }
            class a extends r.G {
                constructor({
                    address: e,
                    connector: t
                }) {
                    super(`Account "${e}" not found for connector "${t.name}".`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorAccountNotFoundError"
                    })
                }
            }
            class u extends r.G {
                constructor({
                    connectionChainId: e,
                    connectorChainId: t
                }) {
                    super(`The current chain of the connector (id: ${t}) does not match the connection's chain (id: ${e}).`, {
                        metaMessages: [`Current Chain ID:  ${t}`, `Expected Chain ID: ${e}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ConnectorChainMismatchError"
                    })
                }
            }
        },
        35526: function(e, t, n) {
            n.d(t, {
                OP: function() {
                    return u
                },
                if: function() {
                    return o
                },
                kq: function() {
                    return s
                }
            });
            var r = n(7734),
                i = n(61286);

            function o(e, t) {
                return (0, i.v)(e, t) ? e : (0, r.Q$)(e, t)
            }

            function s(e) {
                return JSON.stringify(e, (e, t) => ! function(e) {
                    if (!a(e)) return !1;
                    let t = e.constructor;
                    if (void 0 === t) return !0;
                    let n = t.prototype;
                    return !!(a(n) && n.hasOwnProperty("isPrototypeOf"))
                }(t) ? "bigint" == typeof t ? t.toString() : t : Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}))
            }

            function a(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function u(e) {
                let {
                    _defaulted: t,
                    behavior: n,
                    gcTime: r,
                    initialData: i,
                    initialDataUpdatedAt: o,
                    maxPages: s,
                    meta: a,
                    networkMode: u,
                    queryFn: c,
                    queryHash: l,
                    queryKey: f,
                    queryKeyHashFn: d,
                    retry: h,
                    retryDelay: b,
                    structuralSharing: p,
                    getPreviousPageParam: g,
                    getNextPageParam: m,
                    initialPageParam: y,
                    _optimisticResults: v,
                    enabled: w,
                    notifyOnChangeProps: P,
                    placeholderData: x,
                    refetchInterval: $,
                    refetchIntervalInBackground: O,
                    refetchOnMount: G,
                    refetchOnReconnect: j,
                    refetchOnWindowFocus: I,
                    retryOnMount: E,
                    select: C,
                    staleTime: M,
                    suspense: B,
                    throwOnError: F,
                    config: A,
                    connector: k,
                    query: T,
                    ...S
                } = e;
                return S
            }
        },
        61286: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return function e(t, n) {
                        if (t === n) return !0;
                        if (t && n && "object" == typeof t && "object" == typeof n) {
                            let r, i;
                            if (t.constructor !== n.constructor) return !1;
                            if (Array.isArray(t) && Array.isArray(n)) {
                                if ((r = t.length) !== n.length) return !1;
                                for (i = r; 0 != i--;)
                                    if (!e(t[i], n[i])) return !1;
                                return !0
                            }
                            if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
                            if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
                            let o = Object.keys(t);
                            if ((r = o.length) !== Object.keys(n).length) return !1;
                            for (i = r; 0 != i--;)
                                if (!Object.prototype.hasOwnProperty.call(n, o[i])) return !1;
                            for (i = r; 0 != i--;) {
                                let r = o[i];
                                if (r && !e(t[r], n[r])) return !1
                            }
                            return !0
                        }
                        return t != t && n != n
                    }
                }
            })
        },
        53638: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return r
                }
            });
            let r = "2.11.6"
        },
        89649: function(e, t, n) {
            function r(e, t) {
                let n = e.exec(t);
                return n ? .groups
            }
            n.d(t, {
                Zw: function() {
                    return r
                },
                cN: function() {
                    return s
                },
                eL: function() {
                    return i
                },
                lh: function() {
                    return o
                }
            });
            let i = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
                o = /^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,
                s = /^\(.+?\).*?$/
        },
        92341: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return r
                }
            });

            function r(e) {
                return "string" == typeof e ? {
                    address: e,
                    type: "json-rpc"
                } : e
            }
        },
        34001: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return c
                },
                X: function() {
                    return u
                }
            });
            var r = n(62126),
                i = n(22122),
                o = n(36460),
                s = n(34654),
                a = n(79486);
            async function u(e, t) {
                return c(e, t)
            }
            async function c(e, t) {
                let {
                    block: n,
                    chain: u = e.chain,
                    request: c,
                    type: l = "eip1559"
                } = t || {}, f = await (async () => "function" == typeof u ? .fees ? .baseFeeMultiplier ? u.fees.baseFeeMultiplier({
                    block: n,
                    client: e,
                    request: c
                }) : u ? .fees ? .baseFeeMultiplier ? ? 1.2)();
                if (f < 1) throw new r.Fz;
                let d = f.toString().split(".")[1] ? .length ? ? 0,
                    h = 10 ** d,
                    b = e => e * BigInt(Math.ceil(f * h)) / BigInt(h),
                    p = n || await (0, i.s)(e, s.Q, "getBlock")({});
                if ("function" == typeof u ? .fees ? .estimateFeesPerGas) {
                    let t = await u.fees.estimateFeesPerGas({
                        block: n,
                        client: e,
                        multiply: b,
                        request: c,
                        type: l
                    });
                    if (null !== t) return t
                }
                if ("eip1559" === l) {
                    if ("bigint" != typeof p.baseFeePerGas) throw new r.e5;
                    let t = "bigint" == typeof c ? .maxPriorityFeePerGas ? c.maxPriorityFeePerGas : await (0, o.h)(e, {
                            block: p,
                            chain: u,
                            request: c
                        }),
                        n = b(p.baseFeePerGas),
                        i = c ? .maxFeePerGas ? ? n + t;
                    return {
                        maxFeePerGas: i,
                        maxPriorityFeePerGas: t
                    }
                }
                let g = c ? .gasPrice ? ? b(await (0, i.s)(e, a.o, "getGasPrice")({}));
                return {
                    gasPrice: g
                }
            }
        },
        25383: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return m
                }
            });
            var r = n(92341),
                i = n(96904),
                o = n(84426),
                s = n(83871),
                a = n(82022),
                u = n(36923);
            class c extends a.G {
                constructor(e, {
                    account: t,
                    docsPath: n,
                    chain: r,
                    data: i,
                    gas: a,
                    gasPrice: c,
                    maxFeePerGas: l,
                    maxPriorityFeePerGas: f,
                    nonce: d,
                    to: h,
                    value: b
                }) {
                    let p = (0, u.xr)({
                        from: t ? .address,
                        to: h,
                        value: void 0 !== b && `${(0,o.d)(b)} ${r?.nativeCurrency?.symbol||"ETH"}`,
                        data: i,
                        gas: a,
                        gasPrice: void 0 !== c && `${(0,s.o)(c)} gwei`,
                        maxFeePerGas: void 0 !== l && `${(0,s.o)(l)} gwei`,
                        maxPriorityFeePerGas: void 0 !== f && `${(0,s.o)(f)} gwei`,
                        nonce: d
                    });
                    super(e.shortMessage, {
                        cause: e,
                        docsPath: n,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Estimate Gas Arguments:", p].filter(Boolean)
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EstimateGasExecutionError"
                    }), this.cause = e
                }
            }
            var l = n(64458),
                f = n(58023),
                d = n(19571),
                h = n(31892),
                b = n(75983),
                p = n(49619),
                g = n(31061);
            async function m(e, t) {
                let n = t.account ? ? e.account,
                    o = n ? (0, r.T)(n) : void 0;
                try {
                    let {
                        accessList: n,
                        blobs: r,
                        blobVersionedHashes: s,
                        blockNumber: a,
                        blockTag: u,
                        data: c,
                        gas: l,
                        gasPrice: f,
                        maxFeePerBlobGas: m,
                        maxFeePerGas: y,
                        maxPriorityFeePerGas: v,
                        nonce: w,
                        to: P,
                        value: x,
                        stateOverride: $,
                        ...O
                    } = await (0, g.Z)(e, { ...t,
                        parameters: o ? .type === "local" ? void 0 : ["blobVersionedHashes"]
                    }), G = a ? (0, i.eC)(a) : void 0, j = G || u, I = (0, b.mF)($);
                    (0, p.F)(t);
                    let E = e.chain ? .formatters ? .transactionRequest ? .format,
                        C = E || h.tG,
                        M = C({ ...(0, d.K)(O, {
                                format: E
                            }),
                            from: o ? .address,
                            accessList: n,
                            blobs: r,
                            blobVersionedHashes: s,
                            data: c,
                            gas: l,
                            gasPrice: f,
                            maxFeePerBlobGas: m,
                            maxFeePerGas: y,
                            maxPriorityFeePerGas: v,
                            nonce: w,
                            to: P,
                            value: x
                        }),
                        B = await e.request({
                            method: "eth_estimateGas",
                            params: I ? [M, j ? ? "latest", I] : j ? [M, j] : [M]
                        });
                    return BigInt(B)
                } catch (n) {
                    throw function(e, {
                        docsPath: t,
                        ...n
                    }) {
                        let r = (() => {
                            let t = (0, f.k)(e, n);
                            return t instanceof l.cj ? e : t
                        })();
                        return new c(r, {
                            docsPath: t,
                            ...n
                        })
                    }(n, { ...t,
                        account: o,
                        chain: e.chain
                    })
                }
            }
        },
        36460: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return u
                },
                h: function() {
                    return c
                }
            });
            var r = n(62126),
                i = n(45194),
                o = n(22122),
                s = n(34654),
                a = n(79486);
            async function u(e, t) {
                return c(e, t)
            }
            async function c(e, t) {
                let {
                    block: n,
                    chain: u = e.chain,
                    request: c
                } = t || {};
                if ("function" == typeof u ? .fees ? .defaultPriorityFee) {
                    let t = n || await (0, o.s)(e, s.Q, "getBlock")({});
                    return u.fees.defaultPriorityFee({
                        block: t,
                        client: e,
                        request: c
                    })
                }
                if (void 0 !== u ? .fees ? .defaultPriorityFee) return u ? .fees ? .defaultPriorityFee;
                try {
                    let t = await e.request({
                        method: "eth_maxPriorityFeePerGas"
                    });
                    return (0, i.y_)(t)
                } catch {
                    let [t, i] = await Promise.all([n ? Promise.resolve(n) : (0, o.s)(e, s.Q, "getBlock")({}), (0, o.s)(e, a.o, "getGasPrice")({})]);
                    if ("bigint" != typeof t.baseFeePerGas) throw new r.e5;
                    let u = i - t.baseFeePerGas;
                    if (u < 0 n) return 0 n;
                    return u
                }
            }
        },
        34654: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return s
                }
            });
            var r = n(32755),
                i = n(96904),
                o = n(20455);
            async function s(e, {
                blockHash: t,
                blockNumber: n,
                blockTag: s,
                includeTransactions: a
            } = {}) {
                let u = a ? ? !1,
                    c = void 0 !== n ? (0, i.eC)(n) : void 0,
                    l = null;
                if (!(l = t ? await e.request({
                        method: "eth_getBlockByHash",
                        params: [t, u]
                    }, {
                        dedupe: !0
                    }) : await e.request({
                        method: "eth_getBlockByNumber",
                        params: [c || (s ? ? "latest"), u]
                    }, {
                        dedupe: !!c
                    }))) throw new r.f({
                    blockHash: t,
                    blockNumber: n
                });
                let f = e.chain ? .formatters ? .block ? .format || o.Z;
                return f(l)
            }
        },
        16958: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return i
                }
            });
            var r = n(45194);
            async function i(e) {
                let t = await e.request({
                    method: "eth_chainId"
                }, {
                    dedupe: !0
                });
                return (0, r.ly)(t)
            }
        },
        79486: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return r
                }
            });
            async function r(e) {
                let t = await e.request({
                    method: "eth_gasPrice"
                });
                return BigInt(t)
            }
        },
        98247: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return o
                }
            });
            var r = n(45194),
                i = n(96904);
            async function o(e, {
                address: t,
                blockTag: n = "latest",
                blockNumber: o
            }) {
                let s = await e.request({
                    method: "eth_getTransactionCount",
                    params: [t, o ? (0, i.eC)(o) : n]
                }, {
                    dedupe: !!o
                });
                return (0, r.ly)(s)
            }
        },
        31061: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return O
                },
                Z: function() {
                    return G
                }
            });
            var r = n(92341),
                i = n(34001),
                o = n(25383),
                s = n(34654),
                a = n(98247),
                u = n(62126),
                c = n(93749),
                l = n(96904);

            function f(e) {
                let {
                    kzg: t
                } = e, n = e.to ? ? ("string" == typeof e.blobs[0] ? "hex" : "bytes"), r = "string" == typeof e.blobs[0] ? e.blobs.map(e => (0, c.nr)(e)) : e.blobs, i = [];
                for (let e of r) i.push(Uint8Array.from(t.blobToKzgCommitment(e)));
                return "bytes" === n ? i : i.map(e => (0, l.ci)(e))
            }

            function d(e) {
                let {
                    kzg: t
                } = e, n = e.to ? ? ("string" == typeof e.blobs[0] ? "hex" : "bytes"), r = "string" == typeof e.blobs[0] ? e.blobs.map(e => (0, c.nr)(e)) : e.blobs, i = "string" == typeof e.commitments[0] ? e.commitments.map(e => (0, c.nr)(e)) : e.commitments, o = [];
                for (let e = 0; e < r.length; e++) {
                    let n = r[e],
                        s = i[e];
                    o.push(Uint8Array.from(t.computeBlobKzgProof(n, s)))
                }
                return "bytes" === n ? o : o.map(e => (0, l.ci)(e))
            }
            var h = n(13325),
                b = n(37016),
                p = n(82022);
            class g extends p.G {
                constructor({
                    maxSize: e,
                    size: t
                }) {
                    super("Blob size is too large.", {
                        metaMessages: [`Max: ${e} bytes`, `Given: ${t} bytes`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "BlobSizeTooLargeError"
                    })
                }
            }
            class m extends p.G {
                constructor() {
                    super("Blob data must not be empty."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EmptyBlobError"
                    })
                }
            }
            var y = n(84335),
                v = n(6803),
                w = n(22122),
                P = n(49619),
                x = n(36923),
                $ = n(16958);
            let O = ["blobVersionedHashes", "chainId", "fees", "gas", "nonce", "type"];
            async function G(e, t) {
                let n, p;
                let {
                    account: G = e.account,
                    blobs: j,
                    chain: I,
                    gas: E,
                    kzg: C,
                    nonce: M,
                    parameters: B = O,
                    type: F
                } = t, A = G ? (0, r.T)(G) : void 0, k = { ...t,
                    ...A ? {
                        from: A ? .address
                    } : {}
                };
                async function T() {
                    return n || (n = await (0, w.s)(e, s.Q, "getBlock")({
                        blockTag: "latest"
                    }))
                }
                async function S() {
                    if (p) return p;
                    if (I) return I.id;
                    if (void 0 !== t.chainId) return t.chainId;
                    let n = await (0, w.s)(e, $.L, "getChainId")({});
                    return p = n
                }
                if ((B.includes("blobVersionedHashes") || B.includes("sidecars")) && j && C) {
                    let e = f({
                        blobs: j,
                        kzg: C
                    });
                    if (B.includes("blobVersionedHashes")) {
                        let t = function(e) {
                            let {
                                commitments: t,
                                version: n
                            } = e, r = e.to ? ? ("string" == typeof t[0] ? "hex" : "bytes"), i = [];
                            for (let e of t) i.push(function(e) {
                                let {
                                    commitment: t,
                                    version: n = 1
                                } = e, r = e.to ? ? ("string" == typeof t ? "hex" : "bytes"), i = function(e, t) {
                                    let n = (0, h.J)((0, b.v)(e, {
                                        strict: !1
                                    }) ? (0, c.O0)(e) : e);
                                    return "bytes" === (t || "hex") ? n : (0, l.NC)(n)
                                }(t, "bytes");
                                return i.set([n], 0), "bytes" === r ? i : (0, l.ci)(i)
                            }({
                                commitment: e,
                                to: r,
                                version: n
                            }));
                            return i
                        }({
                            commitments: e,
                            to: "hex"
                        });
                        k.blobVersionedHashes = t
                    }
                    if (B.includes("sidecars")) {
                        let t = d({
                                blobs: j,
                                commitments: e,
                                kzg: C
                            }),
                            n = function(e) {
                                let {
                                    data: t,
                                    kzg: n,
                                    to: r
                                } = e, i = e.blobs ? ? function(e) {
                                    let t = e.to ? ? ("string" == typeof e.data ? "hex" : "bytes"),
                                        n = "string" == typeof e.data ? (0, c.nr)(e.data) : e.data,
                                        r = (0, v.d)(n);
                                    if (!r) throw new m;
                                    if (r > 761855) throw new g({
                                        maxSize: 761855,
                                        size: r
                                    });
                                    let i = [],
                                        o = !0,
                                        s = 0;
                                    for (; o;) {
                                        let e = (0, y.q)(new Uint8Array(131072)),
                                            t = 0;
                                        for (; t < 4096;) {
                                            let r = n.slice(s, s + 31);
                                            if (e.pushByte(0), e.pushBytes(r), r.length < 31) {
                                                e.pushByte(128), o = !1;
                                                break
                                            }
                                            t++, s += 31
                                        }
                                        i.push(e)
                                    }
                                    return "bytes" === t ? i.map(e => e.bytes) : i.map(e => (0, l.ci)(e.bytes))
                                }({
                                    data: t,
                                    to: r
                                }), o = e.commitments ? ? f({
                                    blobs: i,
                                    kzg: n,
                                    to: r
                                }), s = e.proofs ? ? d({
                                    blobs: i,
                                    commitments: o,
                                    kzg: n,
                                    to: r
                                }), a = [];
                                for (let e = 0; e < i.length; e++) a.push({
                                    blob: i[e],
                                    commitment: o[e],
                                    proof: s[e]
                                });
                                return a
                            }({
                                blobs: j,
                                commitments: e,
                                proofs: t,
                                to: "hex"
                            });
                        k.sidecars = n
                    }
                }
                if (B.includes("chainId") && (k.chainId = await S()), B.includes("nonce") && void 0 === M && A) {
                    if (A.nonceManager) {
                        let t = await S();
                        k.nonce = await A.nonceManager.consume({
                            address: A.address,
                            chainId: t,
                            client: e
                        })
                    } else k.nonce = await (0, w.s)(e, a.K, "getTransactionCount")({
                        address: A.address,
                        blockTag: "pending"
                    })
                }
                if ((B.includes("fees") || B.includes("type")) && void 0 === F) try {
                    k.type = function(e) {
                        if (e.type) return e.type;
                        if (void 0 !== e.blobs || void 0 !== e.blobVersionedHashes || void 0 !== e.maxFeePerBlobGas || void 0 !== e.sidecars) return "eip4844";
                        if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas) return "eip1559";
                        if (void 0 !== e.gasPrice) return void 0 !== e.accessList ? "eip2930" : "legacy";
                        throw new x.j3({
                            transaction: e
                        })
                    }(k)
                } catch {
                    let e = await T();
                    k.type = "bigint" == typeof e ? .baseFeePerGas ? "eip1559" : "legacy"
                }
                if (B.includes("fees")) {
                    if ("legacy" !== k.type && "eip2930" !== k.type) {
                        if (void 0 === k.maxFeePerGas || void 0 === k.maxPriorityFeePerGas) {
                            let n = await T(),
                                {
                                    maxFeePerGas: r,
                                    maxPriorityFeePerGas: o
                                } = await (0, i.C)(e, {
                                    block: n,
                                    chain: I,
                                    request: k
                                });
                            if (void 0 === t.maxPriorityFeePerGas && t.maxFeePerGas && t.maxFeePerGas < o) throw new u.ld({
                                maxPriorityFeePerGas: o
                            });
                            k.maxPriorityFeePerGas = o, k.maxFeePerGas = r
                        }
                    } else {
                        if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas) throw new u.e5;
                        let n = await T(),
                            {
                                gasPrice: r
                            } = await (0, i.C)(e, {
                                block: n,
                                chain: I,
                                request: k,
                                type: "legacy"
                            });
                        k.gasPrice = r
                    }
                }
                return B.includes("gas") && void 0 === E && (k.gas = await (0, w.s)(e, o.Q, "estimateGas")({ ...k,
                    account: A ? {
                        address: A.address,
                        type: "json-rpc"
                    } : void 0
                })), (0, P.F)(k), delete k.parameters, k
            }
        },
        71376: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return r
                }
            });
            async function r(e, {
                serializedTransaction: t
            }) {
                return e.request({
                    method: "eth_sendRawTransaction",
                    params: [t]
                }, {
                    retryCount: 0
                })
            }
        },
        76381: function(e, t, n) {
            n.d(t, {
                l: function() {
                    return s
                }
            });
            var r = n(92341),
                i = n(30507),
                o = n(96904);
            async function s(e, {
                account: t = e.account,
                message: n
            }) {
                if (!t) throw new i.o({
                    docsPath: "/docs/actions/wallet/signMessage"
                });
                let s = (0, r.T)(t);
                if ("local" === s.type) return s.signMessage({
                    message: n
                });
                let a = "string" == typeof n ? (0, o.$G)(n) : n.raw instanceof Uint8Array ? (0, o.NC)(n.raw) : n.raw;
                return e.request({
                    method: "personal_sign",
                    params: [a, s.address]
                }, {
                    retryCount: 0
                })
            }
        },
        85074: function(e, t, n) {
            n.d(t, {
                e: function() {
                    return o
                }
            });
            var r = n(92341),
                i = n(29784);

            function o(e) {
                let {
                    batch: t,
                    cacheTime: n = e.pollingInterval ? ? 4e3,
                    ccipRead: o,
                    key: s = "base",
                    name: a = "Base Client",
                    pollingInterval: u = 4e3,
                    type: c = "base"
                } = e, l = e.chain, f = e.account ? (0, r.T)(e.account) : void 0, {
                    config: d,
                    request: h,
                    value: b
                } = e.transport({
                    chain: l,
                    pollingInterval: u
                }), p = { ...d,
                    ...b
                }, g = {
                    account: f,
                    batch: t,
                    cacheTime: n,
                    ccipRead: o,
                    chain: l,
                    key: s,
                    name: a,
                    pollingInterval: u,
                    request: h,
                    transport: p,
                    type: c,
                    uid: (0, i.h)()
                };
                return Object.assign(g, {
                    extend: function e(t) {
                        return n => {
                            let r = n(t);
                            for (let e in g) delete r[e];
                            let i = { ...t,
                                ...r
                            };
                            return Object.assign(i, {
                                extend: e(i)
                            })
                        }
                    }(g)
                })
            }
        },
        91847: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return h
                }
            });
            var r = n(82022),
                i = n(11997),
                o = n(41913),
                s = n(96904),
                a = n(68178),
                u = n(71878);
            let c = new u.k(8192);
            var l = n(55056),
                f = n(94518),
                d = n(29784);

            function h({
                key: e,
                name: t,
                request: n,
                retryCount: u = 3,
                retryDelay: h = 150,
                timeout: b,
                type: p
            }, g) {
                let m = (0, d.h)();
                return {
                    config: {
                        key: e,
                        name: t,
                        request: n,
                        retryCount: u,
                        retryDelay: h,
                        timeout: b,
                        type: p
                    },
                    request: function(e, t = {}) {
                        return async (n, u = {}) => {
                            let {
                                dedupe: d = !1,
                                retryDelay: h = 150,
                                retryCount: b = 3,
                                uid: p
                            } = { ...t,
                                ...u
                            }, g = d ? (0, a.w)((0, s.$G)(`${p}.${(0,f.P)(n)}`)) : void 0;
                            return function(e, {
                                enabled: t = !0,
                                id: n
                            }) {
                                if (!t || !n) return e();
                                if (c.get(n)) return c.get(n);
                                let r = e().finally(() => c.delete(n));
                                return c.set(n, r), r
                            }(() => (0, l.J)(async () => {
                                try {
                                    return await e(n)
                                } catch (e) {
                                    switch (e.code) {
                                        case o.s7.code:
                                            throw new o.s7(e);
                                        case o.B.code:
                                            throw new o.B(e);
                                        case o.LX.code:
                                            throw new o.LX(e);
                                        case o.nY.code:
                                            throw new o.nY(e);
                                        case o.XS.code:
                                            throw new o.XS(e);
                                        case o.yR.code:
                                            throw new o.yR(e);
                                        case o.Og.code:
                                            throw new o.Og(e);
                                        case o.pT.code:
                                            throw new o.pT(e);
                                        case o.KB.code:
                                            throw new o.KB(e);
                                        case o.gS.code:
                                            throw new o.gS(e);
                                        case o.Pv.code:
                                            throw new o.Pv(e);
                                        case o.GD.code:
                                            throw new o.GD(e);
                                        case o.ab.code:
                                            throw new o.ab(e);
                                        case o.PE.code:
                                            throw new o.PE(e);
                                        case o.Ts.code:
                                            throw new o.Ts(e);
                                        case o.u5.code:
                                            throw new o.u5(e);
                                        case o.I0.code:
                                            throw new o.I0(e);
                                        case o.x3.code:
                                            throw new o.x3(e);
                                        case 5e3:
                                            throw new o.ab(e);
                                        default:
                                            if (e instanceof r.G) throw e;
                                            throw new o.ir(e)
                                    }
                                }
                            }, {
                                delay: ({
                                    count: e,
                                    error: t
                                }) => {
                                    if (t && t instanceof i.Gg) {
                                        let e = t ? .headers ? .get("Retry-After");
                                        if (e ? .match(/\d/)) return 1e3 * Number.parseInt(e)
                                    }
                                    return ~~(1 << e) * h
                                },
                                retryCount: b,
                                shouldRetry: ({
                                    error: e
                                }) => "code" in e && "number" == typeof e.code ? -1 === e.code || e.code === o.Pv.code || e.code === o.XS.code : !(e instanceof i.Gg) || !e.status || 403 === e.status || 408 === e.status || 413 === e.status || 429 === e.status || 500 === e.status || 502 === e.status || 503 === e.status || 504 === e.status
                            }), {
                                enabled: d,
                                id: g
                            })
                        }
                    }(n, {
                        retryCount: u,
                        retryDelay: h,
                        uid: m
                    }),
                    value: g
                }
            }
        },
        43849: function(e, t, n) {
            n.d(t, {
                Bd: function() {
                    return o
                },
                Zn: function() {
                    return i
                },
                ez: function() {
                    return r
                }
            });
            let r = {
                    gwei: 9,
                    wei: 18
                },
                i = {
                    ether: -9,
                    wei: 9
                },
                o = {
                    ether: -18,
                    gwei: -9
                }
        },
        79495: function(e, t, n) {
            n.d(t, {
                CI: function() {
                    return O
                },
                FM: function() {
                    return b
                },
                Gy: function() {
                    return x
                },
                KY: function() {
                    return w
                },
                M4: function() {
                    return f
                },
                MX: function() {
                    return y
                },
                S4: function() {
                    return v
                },
                SM: function() {
                    return P
                },
                cO: function() {
                    return a
                },
                dh: function() {
                    return $
                },
                fM: function() {
                    return s
                },
                fs: function() {
                    return d
                },
                gr: function() {
                    return l
                },
                hn: function() {
                    return G
                },
                lC: function() {
                    return p
                },
                mv: function() {
                    return g
                },
                wM: function() {
                    return j
                },
                wb: function() {
                    return c
                },
                xB: function() {
                    return u
                },
                xL: function() {
                    return m
                },
                yP: function() {
                    return h
                }
            });
            var r = n(84971),
                i = n(6803),
                o = n(82022);
            class s extends o.G {
                constructor({
                    docsPath: e
                }) {
                    super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.", {
                        docsPath: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiConstructorNotFoundError"
                    })
                }
            }
            class a extends o.G {
                constructor({
                    docsPath: e
                }) {
                    super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.", {
                        docsPath: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiConstructorParamsNotFoundError"
                    })
                }
            }
            class u extends o.G {
                constructor({
                    data: e,
                    params: t,
                    size: n
                }) {
                    super(`Data size of ${n} bytes is too small for given parameters.`, {
                        metaMessages: [`Params: (${(0,r.h)(t,{includeName:!0})})`, `Data:   ${e} (${n} bytes)`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiDecodingDataSizeTooSmallError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "params", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "size", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = e, this.params = t, this.size = n
                }
            }
            class c extends o.G {
                constructor() {
                    super('Cannot decode zero data ("0x") with ABI parameters.'), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiDecodingZeroDataError"
                    })
                }
            }
            class l extends o.G {
                constructor({
                    expectedLength: e,
                    givenLength: t,
                    type: n
                }) {
                    super(`ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEncodingArrayLengthMismatchError"
                    })
                }
            }
            class f extends o.G {
                constructor({
                    expectedSize: e,
                    value: t
                }) {
                    super(`Size of bytes "${t}" (bytes${(0,i.d)(t)}) does not match expected size (bytes${e}).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEncodingBytesSizeMismatchError"
                    })
                }
            }
            class d extends o.G {
                constructor({
                    expectedLength: e,
                    givenLength: t
                }) {
                    super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEncodingLengthMismatchError"
                    })
                }
            }
            class h extends o.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiErrorSignatureNotFoundError"
                    }), Object.defineProperty(this, "signature", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.signature = e
                }
            }
            class b extends o.G {
                constructor({
                    docsPath: e
                }) {
                    super("Cannot extract event signature from empty topics.", {
                        docsPath: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEventSignatureEmptyTopicsError"
                    })
                }
            }
            class p extends o.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEventSignatureNotFoundError"
                    })
                }
            }
            class g extends o.G {
                constructor(e, {
                    docsPath: t
                } = {}) {
                    super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEventNotFoundError"
                    })
                }
            }
            class m extends o.G {
                constructor(e, {
                    docsPath: t
                } = {}) {
                    super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiFunctionNotFoundError"
                    })
                }
            }
            class y extends o.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiFunctionOutputsNotFoundError"
                    })
                }
            }
            class v extends o.G {
                constructor(e, t) {
                    super("Found ambiguous types in overloaded ABI items.", {
                        metaMessages: [`\`${e.type}\` in \`${(0,r.t)(e.abiItem)}\`, and`, `\`${t.type}\` in \`${(0,r.t)(t.abiItem)}\``, "", "These types encode differently and cannot be distinguished at runtime.", "Remove one of the ambiguous items in the ABI."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiItemAmbiguityError"
                    })
                }
            }
            class w extends o.G {
                constructor({
                    expectedSize: e,
                    givenSize: t
                }) {
                    super(`Expected bytes${e}, got bytes${t}.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "BytesSizeMismatchError"
                    })
                }
            }
            class P extends o.G {
                constructor({
                    abiItem: e,
                    data: t,
                    params: n,
                    size: i
                }) {
                    super(`Data size of ${i} bytes is too small for non-indexed event parameters.`, {
                        metaMessages: [`Params: (${(0,r.h)(n,{includeName:!0})})`, `Data:   ${t} (${i} bytes)`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "DecodeLogDataMismatch"
                    }), Object.defineProperty(this, "abiItem", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "params", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "size", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.abiItem = e, this.data = t, this.params = n, this.size = i
                }
            }
            class x extends o.G {
                constructor({
                    abiItem: e,
                    param: t
                }) {
                    super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,r.t)(e,{includeName:!0})}".`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "DecodeLogTopicsMismatch"
                    }), Object.defineProperty(this, "abiItem", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.abiItem = e
                }
            }
            class $ extends o.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAbiEncodingType"
                    })
                }
            }
            class O extends o.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAbiDecodingType"
                    })
                }
            }
            class G extends o.G {
                constructor(e) {
                    super(`Value "${e}" is not a valid array.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidArrayError"
                    })
                }
            }
            class j extends o.G {
                constructor(e) {
                    super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidDefinitionTypeError"
                    })
                }
            }
        },
        30507: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return i
                }
            });
            var r = n(82022);
            class i extends r.G {
                constructor({
                    docsPath: e
                } = {}) {
                    super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.", {
                        docsPath: e,
                        docsSlug: "account"
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AccountNotFoundError"
                    })
                }
            }
        },
        76021: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return i
                }
            });
            var r = n(82022);
            class i extends r.G {
                constructor({
                    address: e
                }) {
                    super(`Address "${e}" is invalid.`, {
                        metaMessages: ["- Address must be a hex value of 20 bytes (40 hex characters).", "- Address must match its checksum counterpart."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAddressError"
                    })
                }
            }
        },
        82022: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return i
                }
            });
            var r = n(97609);
            class i extends Error {
                constructor(e, t = {}) {
                    super(), Object.defineProperty(this, "details", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "docsPath", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "metaMessages", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "shortMessage", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ViemError"
                    }), Object.defineProperty(this, "version", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: (0, r.bo)()
                    });
                    let n = t.cause instanceof i ? t.cause.details : t.cause ? .message ? t.cause.message : t.details,
                        o = t.cause instanceof i && t.cause.docsPath || t.docsPath;
                    this.message = [e || "An error occurred.", "", ...t.metaMessages ? [...t.metaMessages, ""] : [], ...o ? [`Docs: ${t.docsBaseUrl??"https://viem.sh"}${o}${t.docsSlug?`#${t.docsSlug}`:""}`] : [], ...n ? [`Details: ${n}`] : [], `Version: ${this.version}`].join("\n"), t.cause && (this.cause = t.cause), this.details = n, this.docsPath = o, this.metaMessages = t.metaMessages, this.shortMessage = e
                }
                walk(e) {
                    return function e(t, n) {
                        return n ? .(t) ? t : t && "object" == typeof t && "cause" in t ? e(t.cause, n) : n ? null : t
                    }(this, e)
                }
            }
        },
        32755: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return i
                }
            });
            var r = n(82022);
            class i extends r.G {
                constructor({
                    blockHash: e,
                    blockNumber: t
                }) {
                    let n = "Block";
                    e && (n = `Block at hash "${e}"`), t && (n = `Block at number "${t}"`), super(`${n} could not be found.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "BlockNotFoundError"
                    })
                }
            }
        },
        24113: function(e, t, n) {
            n.d(t, {
                Bk: function() {
                    return s
                },
                Yl: function() {
                    return o
                },
                mm: function() {
                    return i
                },
                pZ: function() {
                    return a
                }
            });
            var r = n(82022);
            class i extends r.G {
                constructor({
                    blockNumber: e,
                    chain: t,
                    contract: n
                }) {
                    super(`Chain "${t.name}" does not support contract "${n.name}".`, {
                        metaMessages: ["This could be due to any of the following:", ...e && n.blockCreated && n.blockCreated > e ? [`- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`] : [`- The chain does not have the contract "${n.name}" configured.`]]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainDoesNotSupportContract"
                    })
                }
            }
            class o extends r.G {
                constructor({
                    chain: e,
                    currentChainId: t
                }) {
                    super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`, {
                        metaMessages: [`Current Chain ID:  ${t}`, `Expected Chain ID: ${e.id} – ${e.name}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainMismatchError"
                    })
                }
            }
            class s extends r.G {
                constructor() {
                    super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainNotFoundError"
                    })
                }
            }
            class a extends r.G {
                constructor() {
                    super("No chain was provided to the Client."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ClientChainNotConfiguredError"
                    })
                }
            }
        },
        84617: function(e, t, n) {
            n.d(t, {
                KD: function() {
                    return s
                },
                T_: function() {
                    return i
                },
                lQ: function() {
                    return o
                }
            });
            var r = n(82022);
            class i extends r.G {
                constructor({
                    offset: e
                }) {
                    super(`Offset \`${e}\` cannot be negative.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "NegativeOffsetError"
                    })
                }
            }
            class o extends r.G {
                constructor({
                    length: e,
                    position: t
                }) {
                    super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "PositionOutOfBoundsError"
                    })
                }
            }
            class s extends r.G {
                constructor({
                    count: e,
                    limit: t
                }) {
                    super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "RecursiveReadLimitExceededError"
                    })
                }
            }
        },
        42791: function(e, t, n) {
            n.d(t, {
                $s: function() {
                    return o
                },
                W_: function() {
                    return s
                },
                mV: function() {
                    return i
                }
            });
            var r = n(82022);
            class i extends r.G {
                constructor({
                    offset: e,
                    position: t,
                    size: n
                }) {
                    super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${n}).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SliceOffsetOutOfBoundsError"
                    })
                }
            }
            class o extends r.G {
                constructor({
                    size: e,
                    targetSize: t,
                    type: n
                }) {
                    super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SizeExceedsPaddingSizeError"
                    })
                }
            }
            class s extends r.G {
                constructor({
                    size: e,
                    targetSize: t,
                    type: n
                }) {
                    super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} is expected to be ${t} ${n} long, but is ${e} ${n} long.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidBytesLengthError"
                    })
                }
            }
        },
        34569: function(e, t, n) {
            n.d(t, {
                J5: function() {
                    return i
                },
                M6: function() {
                    return s
                },
                yr: function() {
                    return o
                }
            });
            var r = n(82022);
            class i extends r.G {
                constructor({
                    max: e,
                    min: t,
                    signed: n,
                    size: r,
                    value: i
                }) {
                    super(`Number "${i}" is not in safe ${r?`${8*r}-bit ${n?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "IntegerOutOfRangeError"
                    })
                }
            }
            class o extends r.G {
                constructor(e) {
                    super(`Bytes value "${e}" is not a valid boolean. The bytes array must contain a single byte of either a 0 or 1 value.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidBytesBooleanError"
                    })
                }
            }
            class s extends r.G {
                constructor({
                    givenSize: e,
                    maxSize: t
                }) {
                    super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SizeOverflowError"
                    })
                }
            }
        },
        62126: function(e, t, n) {
            n.d(t, {
                Fz: function() {
                    return o
                },
                e5: function() {
                    return s
                },
                ld: function() {
                    return a
                }
            });
            var r = n(83871),
                i = n(82022);
            class o extends i.G {
                constructor() {
                    super("`baseFeeMultiplier` must be greater than 1."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "BaseFeeScalarError"
                    })
                }
            }
            class s extends i.G {
                constructor() {
                    super("Chain does not support EIP-1559 fees."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "Eip1559FeesNotSupportedError"
                    })
                }
            }
            class a extends i.G {
                constructor({
                    maxPriorityFeePerGas: e
                }) {
                    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,r.o)(e)} gwei).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "MaxFeePerGasTooLowError"
                    })
                }
            }
        },
        64458: function(e, t, n) {
            n.d(t, {
                C_: function() {
                    return f
                },
                G$: function() {
                    return a
                },
                Hh: function() {
                    return s
                },
                M_: function() {
                    return o
                },
                WF: function() {
                    return d
                },
                ZI: function() {
                    return u
                },
                cj: function() {
                    return g
                },
                cs: function() {
                    return p
                },
                dR: function() {
                    return h
                },
                pZ: function() {
                    return b
                },
                se: function() {
                    return l
                },
                vU: function() {
                    return c
                }
            });
            var r = n(83871),
                i = n(82022);
            class o extends i.G {
                constructor({
                    cause: e,
                    message: t
                } = {}) {
                    let n = t ? .replace("execution reverted: ", "") ? .replace("execution reverted", "");
                    super(`Execution reverted ${n?`with reason: ${n}`:"for an unknown reason"}.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ExecutionRevertedError"
                    })
                }
            }
            Object.defineProperty(o, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 3
            }), Object.defineProperty(o, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /execution reverted/
            });
            class s extends i.G {
                constructor({
                    cause: e,
                    maxFeePerGas: t
                } = {}) {
                    super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,r.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "FeeCapTooHigh"
                    })
                }
            }
            Object.defineProperty(s, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
            });
            class a extends i.G {
                constructor({
                    cause: e,
                    maxFeePerGas: t
                } = {}) {
                    super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,r.o)(t)}`:""} gwei) cannot be lower than the block base fee.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "FeeCapTooLow"
                    })
                }
            }
            Object.defineProperty(a, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
            });
            class u extends i.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "NonceTooHighError"
                    })
                }
            }
            Object.defineProperty(u, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce too high/
            });
            class c extends i.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "NonceTooLowError"
                    })
                }
            }
            Object.defineProperty(c, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce too low|transaction already imported|already known/
            });
            class l extends i.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "NonceMaxValueError"
                    })
                }
            }
            Object.defineProperty(l, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce has max value/
            });
            class f extends i.G {
                constructor({
                    cause: e
                } = {}) {
                    super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.", {
                        cause: e,
                        metaMessages: ["This error could arise when the account does not have enough funds to:", " - pay for the total gas fee,", " - pay for the value to send.", " ", "The cost of the transaction is calculated as `gas * gas fee + value`, where:", " - `gas` is the amount of gas needed for transaction to execute,", " - `gas fee` is the gas fee,", " - `value` is the amount of ether to send to the recipient."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InsufficientFundsError"
                    })
                }
            }
            Object.defineProperty(f, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /insufficient funds/
            });
            class d extends i.G {
                constructor({
                    cause: e,
                    gas: t
                } = {}) {
                    super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "IntrinsicGasTooHighError"
                    })
                }
            }
            Object.defineProperty(d, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /intrinsic gas too high|gas limit reached/
            });
            class h extends i.G {
                constructor({
                    cause: e,
                    gas: t
                } = {}) {
                    super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "IntrinsicGasTooLowError"
                    })
                }
            }
            Object.defineProperty(h, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /intrinsic gas too low/
            });
            class b extends i.G {
                constructor({
                    cause: e
                }) {
                    super("The transaction type is not supported for this chain.", {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionTypeNotSupportedError"
                    })
                }
            }
            Object.defineProperty(b, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /transaction type not valid/
            });
            class p extends i.G {
                constructor({
                    cause: e,
                    maxPriorityFeePerGas: t,
                    maxFeePerGas: n
                } = {}) {
                    super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,r.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n?` = ${(0,r.o)(n)} gwei`:""}).`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TipAboveFeeCapError"
                    })
                }
            }
            Object.defineProperty(p, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
            });
            class g extends i.G {
                constructor({
                    cause: e
                }) {
                    super(`An error occurred while executing: ${e?.shortMessage}`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownNodeError"
                    })
                }
            }
        },
        11997: function(e, t, n) {
            n.d(t, {
                Gg: function() {
                    return s
                },
                W5: function() {
                    return u
                },
                bs: function() {
                    return a
                }
            });
            var r = n(94518),
                i = n(82022),
                o = n(97609);
            class s extends i.G {
                constructor({
                    body: e,
                    cause: t,
                    details: n,
                    headers: i,
                    status: s,
                    url: a
                }) {
                    super("HTTP request failed.", {
                        cause: t,
                        details: n,
                        metaMessages: [s && `Status: ${s}`, `URL: ${(0,o.Gr)(a)}`, e && `Request body: ${(0,r.P)(e)}`].filter(Boolean)
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "HttpRequestError"
                    }), Object.defineProperty(this, "body", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "headers", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "status", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "url", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.body = e, this.headers = i, this.status = s, this.url = a
                }
            }
            class a extends i.G {
                constructor({
                    body: e,
                    error: t,
                    url: n
                }) {
                    super("RPC Request failed.", {
                        cause: t,
                        details: t.message,
                        metaMessages: [`URL: ${(0,o.Gr)(n)}`, `Request body: ${(0,r.P)(e)}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "RpcRequestError"
                    }), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.code = t.code
                }
            }
            class u extends i.G {
                constructor({
                    body: e,
                    url: t
                }) {
                    super("The request took too long to respond.", {
                        details: "The request timed out.",
                        metaMessages: [`URL: ${(0,o.Gr)(t)}`, `Request body: ${(0,r.P)(e)}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TimeoutError"
                    })
                }
            }
        },
        41913: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return u
                },
                GD: function() {
                    return y
                },
                I0: function() {
                    return $
                },
                KB: function() {
                    return p
                },
                LX: function() {
                    return c
                },
                Og: function() {
                    return h
                },
                PE: function() {
                    return w
                },
                Pv: function() {
                    return m
                },
                Ts: function() {
                    return P
                },
                XS: function() {
                    return f
                },
                ab: function() {
                    return v
                },
                gS: function() {
                    return g
                },
                ir: function() {
                    return G
                },
                nY: function() {
                    return l
                },
                pT: function() {
                    return b
                },
                s7: function() {
                    return a
                },
                u5: function() {
                    return x
                },
                x3: function() {
                    return O
                },
                yR: function() {
                    return d
                }
            });
            var r = n(82022),
                i = n(11997);
            class o extends r.G {
                constructor(e, {
                    code: t,
                    docsPath: n,
                    metaMessages: r,
                    shortMessage: o
                }) {
                    super(o, {
                        cause: e,
                        docsPath: n,
                        metaMessages: r || e ? .metaMessages
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "RpcError"
                    }), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.name = e.name, this.code = e instanceof i.bs ? e.code : t ? ? -1
                }
            }
            class s extends o {
                constructor(e, t) {
                    super(e, t), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ProviderRpcError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = t.data
                }
            }
            class a extends o {
                constructor(e) {
                    super(e, {
                        code: a.code,
                        shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ParseRpcError"
                    })
                }
            }
            Object.defineProperty(a, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32700
            });
            class u extends o {
                constructor(e) {
                    super(e, {
                        code: u.code,
                        shortMessage: "JSON is not a valid request object."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidRequestRpcError"
                    })
                }
            }
            Object.defineProperty(u, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32600
            });
            class c extends o {
                constructor(e) {
                    super(e, {
                        code: c.code,
                        shortMessage: "The method does not exist / is not available."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "MethodNotFoundRpcError"
                    })
                }
            }
            Object.defineProperty(c, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32601
            });
            class l extends o {
                constructor(e) {
                    super(e, {
                        code: l.code,
                        shortMessage: "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidParamsRpcError"
                    })
                }
            }
            Object.defineProperty(l, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32602
            });
            class f extends o {
                constructor(e) {
                    super(e, {
                        code: f.code,
                        shortMessage: "An internal error was received."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InternalRpcError"
                    })
                }
            }
            Object.defineProperty(f, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32603
            });
            class d extends o {
                constructor(e) {
                    super(e, {
                        code: d.code,
                        shortMessage: "Missing or invalid parameters.\nDouble check you have provided the correct parameters."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidInputRpcError"
                    })
                }
            }
            Object.defineProperty(d, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32e3
            });
            class h extends o {
                constructor(e) {
                    super(e, {
                        code: h.code,
                        shortMessage: "Requested resource not found."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ResourceNotFoundRpcError"
                    })
                }
            }
            Object.defineProperty(h, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32001
            });
            class b extends o {
                constructor(e) {
                    super(e, {
                        code: b.code,
                        shortMessage: "Requested resource not available."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ResourceUnavailableRpcError"
                    })
                }
            }
            Object.defineProperty(b, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32002
            });
            class p extends o {
                constructor(e) {
                    super(e, {
                        code: p.code,
                        shortMessage: "Transaction creation failed."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionRejectedRpcError"
                    })
                }
            }
            Object.defineProperty(p, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32003
            });
            class g extends o {
                constructor(e) {
                    super(e, {
                        code: g.code,
                        shortMessage: "Method is not implemented."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "MethodNotSupportedRpcError"
                    })
                }
            }
            Object.defineProperty(g, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32004
            });
            class m extends o {
                constructor(e) {
                    super(e, {
                        code: m.code,
                        shortMessage: "Request exceeds defined limit."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "LimitExceededRpcError"
                    })
                }
            }
            Object.defineProperty(m, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32005
            });
            class y extends o {
                constructor(e) {
                    super(e, {
                        code: y.code,
                        shortMessage: "Version of JSON-RPC protocol is not supported."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "JsonRpcVersionUnsupportedError"
                    })
                }
            }
            Object.defineProperty(y, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32006
            });
            class v extends s {
                constructor(e) {
                    super(e, {
                        code: v.code,
                        shortMessage: "User rejected the request."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UserRejectedRequestError"
                    })
                }
            }
            Object.defineProperty(v, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4001
            });
            class w extends s {
                constructor(e) {
                    super(e, {
                        code: w.code,
                        shortMessage: "The requested method and/or account has not been authorized by the user."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnauthorizedProviderError"
                    })
                }
            }
            Object.defineProperty(w, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4100
            });
            class P extends s {
                constructor(e) {
                    super(e, {
                        code: P.code,
                        shortMessage: "The Provider does not support the requested method."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnsupportedProviderMethodError"
                    })
                }
            }
            Object.defineProperty(P, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4200
            });
            class x extends s {
                constructor(e) {
                    super(e, {
                        code: x.code,
                        shortMessage: "The Provider is disconnected from all chains."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ProviderDisconnectedError"
                    })
                }
            }
            Object.defineProperty(x, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4900
            });
            class $ extends s {
                constructor(e) {
                    super(e, {
                        code: $.code,
                        shortMessage: "The Provider is not connected to the requested chain."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainDisconnectedError"
                    })
                }
            }
            Object.defineProperty($, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4901
            });
            class O extends s {
                constructor(e) {
                    super(e, {
                        code: O.code,
                        shortMessage: "An error occurred when attempting to switch chain."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SwitchChainError"
                    })
                }
            }
            Object.defineProperty(O, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4902
            });
            class G extends o {
                constructor(e) {
                    super(e, {
                        shortMessage: "An unknown RPC error occurred."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownRpcError"
                    })
                }
            }
        },
        21965: function(e, t, n) {
            n.d(t, {
                Bj: function() {
                    return a
                },
                Nc: function() {
                    return i
                },
                Z8: function() {
                    return o
                }
            });
            var r = n(82022);
            class i extends r.G {
                constructor({
                    address: e
                }) {
                    super(`State for account "${e}" is set multiple times.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AccountStateConflictError"
                    })
                }
            }
            class o extends r.G {
                constructor() {
                    super("state and stateDiff are set on the same account."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "StateAssignmentConflictError"
                    })
                }
            }

            function s(e) {
                return e.reduce((e, {
                    slot: t,
                    value: n
                }) => `${e}        ${t}: ${n}
`, "")
            }

            function a(e) {
                return e.reduce((e, {
                    address: t,
                    ...n
                }) => {
                    let r = `${e}    ${t}:
`;
                    return n.nonce && (r += `      nonce: ${n.nonce}
`), n.balance && (r += `      balance: ${n.balance}
`), n.code && (r += `      code: ${n.code}
`), n.state && (r += "      state:\n" + s(n.state)), n.stateDiff && (r += "      stateDiff:\n" + s(n.stateDiff)), r
                }, "  State Override:\n").slice(0, -1)
            }
        },
        36923: function(e, t, n) {
            n.d(t, {
                Bh: function() {
                    return l
                },
                Yb: function() {
                    return f
                },
                j3: function() {
                    return u
                },
                mc: function() {
                    return d
                },
                mk: function() {
                    return c
                },
                xY: function() {
                    return a
                },
                xr: function() {
                    return s
                }
            });
            var r = n(84426),
                i = n(83871),
                o = n(82022);

            function s(e) {
                let t = Object.entries(e).map(([e, t]) => void 0 === t || !1 === t ? null : [e, t]).filter(Boolean),
                    n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
                return t.map(([e, t]) => `  ${`${e}:`.padEnd(n+1)}  ${t}`).join("\n")
            }
            class a extends o.G {
                constructor() {
                    super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "FeeConflictError"
                    })
                }
            }
            class u extends o.G {
                constructor({
                    transaction: e
                }) {
                    super("Cannot infer a transaction type from provided transaction.", {
                        metaMessages: ["Provided Transaction:", "{", s(e), "}", "", "To infer the type, either provide:", "- a `type` to the Transaction, or", "- an EIP-1559 Transaction with `maxFeePerGas`, or", "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or", "- an EIP-4844 Transaction with `blobs`, `blobVersionedHashes`, `sidecars`, or", "- a Legacy Transaction with `gasPrice`"]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidSerializableTransactionError"
                    })
                }
            }
            class c extends o.G {
                constructor(e, {
                    account: t,
                    docsPath: n,
                    chain: o,
                    data: a,
                    gas: u,
                    gasPrice: c,
                    maxFeePerGas: l,
                    maxPriorityFeePerGas: f,
                    nonce: d,
                    to: h,
                    value: b
                }) {
                    let p = s({
                        chain: o && `${o?.name} (id: ${o?.id})`,
                        from: t ? .address,
                        to: h,
                        value: void 0 !== b && `${(0,r.d)(b)} ${o?.nativeCurrency?.symbol||"ETH"}`,
                        data: a,
                        gas: u,
                        gasPrice: void 0 !== c && `${(0,i.o)(c)} gwei`,
                        maxFeePerGas: void 0 !== l && `${(0,i.o)(l)} gwei`,
                        maxPriorityFeePerGas: void 0 !== f && `${(0,i.o)(f)} gwei`,
                        nonce: d
                    });
                    super(e.shortMessage, {
                        cause: e,
                        docsPath: n,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Request Arguments:", p].filter(Boolean)
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionExecutionError"
                    }), this.cause = e
                }
            }
            class l extends o.G {
                constructor({
                    blockHash: e,
                    blockNumber: t,
                    blockTag: n,
                    hash: r,
                    index: i
                }) {
                    let o = "Transaction";
                    n && void 0 !== i && (o = `Transaction at block time "${n}" at index "${i}"`), e && void 0 !== i && (o = `Transaction at block hash "${e}" at index "${i}"`), t && void 0 !== i && (o = `Transaction at block number "${t}" at index "${i}"`), r && (o = `Transaction with hash "${r}"`), super(`${o} could not be found.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionNotFoundError"
                    })
                }
            }
            class f extends o.G {
                constructor({
                    hash: e
                }) {
                    super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionReceiptNotFoundError"
                    })
                }
            }
            class d extends o.G {
                constructor({
                    hash: e
                }) {
                    super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WaitForTransactionReceiptTimeoutError"
                    })
                }
            }
        },
        97609: function(e, t, n) {
            n.d(t, {
                CR: function() {
                    return r
                },
                Gr: function() {
                    return i
                },
                bo: function() {
                    return o
                }
            });
            let r = e => e,
                i = e => e,
                o = () => "viem@2.16.5"
        },
        74743: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return d
                },
                S: function() {
                    return b
                }
            });
            var r = n(79495),
                i = n(76021),
                o = n(82022),
                s = n(43936),
                a = n(99786),
                u = n(82742),
                c = n(6803),
                l = n(46386),
                f = n(96904);

            function d(e, t) {
                if (e.length !== t.length) throw new r.fs({
                    expectedLength: e.length,
                    givenLength: t.length
                });
                let n = function({
                        params: e,
                        values: t
                    }) {
                        let n = [];
                        for (let d = 0; d < e.length; d++) n.push(function e({
                            param: t,
                            value: n
                        }) {
                            let d = b(t.type);
                            if (d) {
                                let [i, o] = d;
                                return function(t, {
                                    length: n,
                                    param: i
                                }) {
                                    let o = null === n;
                                    if (!Array.isArray(t)) throw new r.hn(t);
                                    if (!o && t.length !== n) throw new r.gr({
                                        expectedLength: n,
                                        givenLength: t.length,
                                        type: `${i.type}[${n}]`
                                    });
                                    let s = !1,
                                        u = [];
                                    for (let n = 0; n < t.length; n++) {
                                        let r = e({
                                            param: i,
                                            value: t[n]
                                        });
                                        r.dynamic && (s = !0), u.push(r)
                                    }
                                    if (o || s) {
                                        let e = h(u);
                                        if (o) {
                                            let t = (0, f.eC)(u.length, {
                                                size: 32
                                            });
                                            return {
                                                dynamic: !0,
                                                encoded: u.length > 0 ? (0, a.zo)([t, e]) : t
                                            }
                                        }
                                        if (s) return {
                                            dynamic: !0,
                                            encoded: e
                                        }
                                    }
                                    return {
                                        dynamic: !1,
                                        encoded: (0, a.zo)(u.map(({
                                            encoded: e
                                        }) => e))
                                    }
                                }(n, {
                                    length: i,
                                    param: { ...t,
                                        type: o
                                    }
                                })
                            }
                            if ("tuple" === t.type) return function(t, {
                                param: n
                            }) {
                                let r = !1,
                                    i = [];
                                for (let o = 0; o < n.components.length; o++) {
                                    let s = n.components[o],
                                        a = Array.isArray(t) ? o : s.name,
                                        u = e({
                                            param: s,
                                            value: t[a]
                                        });
                                    i.push(u), u.dynamic && (r = !0)
                                }
                                return {
                                    dynamic: r,
                                    encoded: r ? h(i) : (0, a.zo)(i.map(({
                                        encoded: e
                                    }) => e))
                                }
                            }(n, {
                                param: t
                            });
                            if ("address" === t.type) return function(e) {
                                if (!(0, s.U)(e)) throw new i.b({
                                    address: e
                                });
                                return {
                                    dynamic: !1,
                                    encoded: (0, u.gc)(e.toLowerCase())
                                }
                            }(n);
                            if ("bool" === t.type) return function(e) {
                                if ("boolean" != typeof e) throw new o.G(`Invalid boolean value: "${e}" (type: ${typeof e}). Expected: \`true\` or \`false\`.`);
                                return {
                                    dynamic: !1,
                                    encoded: (0, u.gc)((0, f.C4)(e))
                                }
                            }(n);
                            if (t.type.startsWith("uint") || t.type.startsWith("int")) {
                                let e = t.type.startsWith("int");
                                return function(e, {
                                    signed: t
                                }) {
                                    return {
                                        dynamic: !1,
                                        encoded: (0, f.eC)(e, {
                                            size: 32,
                                            signed: t
                                        })
                                    }
                                }(n, {
                                    signed: e
                                })
                            }
                            if (t.type.startsWith("bytes")) return function(e, {
                                param: t
                            }) {
                                let [, n] = t.type.split("bytes"), i = (0, c.d)(e);
                                if (!n) {
                                    let t = e;
                                    return i % 32 != 0 && (t = (0, u.gc)(t, {
                                        dir: "right",
                                        size: 32 * Math.ceil((e.length - 2) / 2 / 32)
                                    })), {
                                        dynamic: !0,
                                        encoded: (0, a.zo)([(0, u.gc)((0, f.eC)(i, {
                                            size: 32
                                        })), t])
                                    }
                                }
                                if (i !== Number.parseInt(n)) throw new r.M4({
                                    expectedSize: Number.parseInt(n),
                                    value: e
                                });
                                return {
                                    dynamic: !1,
                                    encoded: (0, u.gc)(e, {
                                        dir: "right"
                                    })
                                }
                            }(n, {
                                param: t
                            });
                            if ("string" === t.type) return function(e) {
                                let t = (0, f.$G)(e),
                                    n = Math.ceil((0, c.d)(t) / 32),
                                    r = [];
                                for (let e = 0; e < n; e++) r.push((0, u.gc)((0, l.tP)(t, 32 * e, (e + 1) * 32), {
                                    dir: "right"
                                }));
                                return {
                                    dynamic: !0,
                                    encoded: (0, a.zo)([(0, u.gc)((0, f.eC)((0, c.d)(t), {
                                        size: 32
                                    })), ...r])
                                }
                            }(n);
                            throw new r.dh(t.type, {
                                docsPath: "/docs/contract/encodeAbiParameters"
                            })
                        }({
                            param: e[d],
                            value: t[d]
                        }));
                        return n
                    }({
                        params: e,
                        values: t
                    }),
                    d = h(n);
                return 0 === d.length ? "0x" : d
            }

            function h(e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) {
                    let {
                        dynamic: r,
                        encoded: i
                    } = e[n];
                    r ? t += 32 : t += (0, c.d)(i)
                }
                let n = [],
                    r = [],
                    i = 0;
                for (let o = 0; o < e.length; o++) {
                    let {
                        dynamic: s,
                        encoded: a
                    } = e[o];
                    s ? (n.push((0, f.eC)(t + i, {
                        size: 32
                    })), r.push(a), i += (0, c.d)(a)) : n.push(a)
                }
                return (0, a.zo)([...n, ...r])
            }

            function b(e) {
                let t = e.match(/^(.*)\[(\d+)?\]$/);
                return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
            }
        },
        66053: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return a
                }
            });
            var r = n(79495),
                i = n(99786),
                o = n(74743);
            let s = "/docs/contract/encodeDeployData";

            function a(e) {
                let {
                    abi: t,
                    args: n,
                    bytecode: a
                } = e;
                if (!n || 0 === n.length) return a;
                let u = t.find(e => "type" in e && "constructor" === e.type);
                if (!u) throw new r.fM({
                    docsPath: s
                });
                if (!("inputs" in u) || !u.inputs || 0 === u.inputs.length) throw new r.cO({
                    docsPath: s
                });
                let c = (0, o.E)(u.inputs, n);
                return (0, i.SM)([a, c])
            }
        },
        12693: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return l
                }
            });
            var r = n(99786),
                i = n(74743),
                o = n(79495),
                s = n(61662),
                a = n(84971),
                u = n(27342);
            let c = "/docs/contract/encodeFunctionData";

            function l(e) {
                let {
                    args: t
                } = e, {
                    abi: n,
                    functionName: l
                } = 1 === e.abi.length && e.functionName ? .startsWith("0x") ? e : function(e) {
                    let {
                        abi: t,
                        args: n,
                        functionName: r
                    } = e, i = t[0];
                    if (r) {
                        let e = (0, u.mE)({
                            abi: t,
                            args: n,
                            name: r
                        });
                        if (!e) throw new o.xL(r, {
                            docsPath: c
                        });
                        i = e
                    }
                    if ("function" !== i.type) throw new o.xL(void 0, {
                        docsPath: c
                    });
                    return {
                        abi: [i],
                        functionName: (0, s.C)((0, a.t)(i))
                    }
                }(e), f = n[0], d = "inputs" in f && f.inputs ? (0, i.E)(f.inputs, t ? ? []) : void 0;
                return (0, r.SM)([l, d ? ? "0x"])
            }
        },
        84971: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return o
                },
                t: function() {
                    return i
                }
            });
            var r = n(79495);

            function i(e, {
                includeName: t = !1
            } = {}) {
                if ("function" !== e.type && "event" !== e.type && "error" !== e.type) throw new r.wM(e.type);
                return `${e.name}(${o(e.inputs,{includeName:t})})`
            }

            function o(e, {
                includeName: t = !1
            } = {}) {
                return e ? e.map(e => (function(e, {
                    includeName: t
                }) {
                    return e.type.startsWith("tuple") ? `(${o(e.components,{includeName:t})})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "")
                })(e, {
                    includeName: t
                })).join(t ? ", " : ",") : ""
            }
        },
        27342: function(e, t, n) {
            n.d(t, {
                mE: function() {
                    return u
                }
            });
            var r = n(79495),
                i = n(37016),
                o = n(43936),
                s = n(8100),
                a = n(61662);

            function u(e) {
                let t;
                let {
                    abi: n,
                    args: u = [],
                    name: c
                } = e, l = (0, i.v)(c, {
                    strict: !1
                }), f = n.filter(e => l ? "function" === e.type ? (0, a.C)(e) === c : "event" === e.type && (0, s.n)(e) === c : "name" in e && e.name === c);
                if (0 !== f.length) {
                    if (1 === f.length) return f[0];
                    for (let e of f) {
                        if (!("inputs" in e)) continue;
                        if (!u || 0 === u.length) {
                            if (!e.inputs || 0 === e.inputs.length) return e;
                            continue
                        }
                        if (!e.inputs || 0 === e.inputs.length || e.inputs.length !== u.length) continue;
                        let n = u.every((t, n) => {
                            let r = "inputs" in e && e.inputs[n];
                            return !!r && function e(t, n) {
                                let r = typeof t,
                                    i = n.type;
                                switch (i) {
                                    case "address":
                                        return (0, o.U)(t, {
                                            strict: !1
                                        });
                                    case "bool":
                                        return "boolean" === r;
                                    case "function":
                                    case "string":
                                        return "string" === r;
                                    default:
                                        if ("tuple" === i && "components" in n) return Object.values(n.components).every((n, r) => e(Object.values(t)[r], n));
                                        if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i)) return "number" === r || "bigint" === r;
                                        if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i)) return "string" === r || t instanceof Uint8Array;
                                        if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i)) return Array.isArray(t) && t.every(t => e(t, { ...n,
                                            type: i.replace(/(\[[0-9]{0,}\])$/, "")
                                        }));
                                        return !1
                                }
                            }(t, r)
                        });
                        if (n) {
                            if (t && "inputs" in t && t.inputs) {
                                let n = function e(t, n, r) {
                                    for (let i in t) {
                                        let s = t[i],
                                            a = n[i];
                                        if ("tuple" === s.type && "tuple" === a.type && "components" in s && "components" in a) return e(s.components, a.components, r[i]);
                                        let u = [s.type, a.type],
                                            c = !!(u.includes("address") && u.includes("bytes20")) || !!(u.includes("address") && u.includes("string") || u.includes("address") && u.includes("bytes")) && (0, o.U)(r[i], {
                                                strict: !1
                                            });
                                        if (c) return u
                                    }
                                }(e.inputs, t.inputs, u);
                                if (n) throw new r.S4({
                                    abiItem: e,
                                    type: n[0]
                                }, {
                                    abiItem: t,
                                    type: n[1]
                                })
                            }
                            t = e
                        }
                    }
                    return t || f[0]
                }
            }
        },
        11964: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return l
                },
                x: function() {
                    return c
                }
            });
            var r = n(76021),
                i = n(93749),
                o = n(68178),
                s = n(71878),
                a = n(43936);
            let u = new s.k(8192);

            function c(e, t) {
                if (u.has(`${e}.${t}`)) return u.get(`${e}.${t}`);
                let n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
                    r = (0, o.w)((0, i.qX)(n), "bytes"),
                    s = (t ? n.substring(`${t}0x`.length) : n).split("");
                for (let e = 0; e < 40; e += 2) r[e >> 1] >> 4 >= 8 && s[e] && (s[e] = s[e].toUpperCase()), (15 & r[e >> 1]) >= 8 && s[e + 1] && (s[e + 1] = s[e + 1].toUpperCase());
                let a = `0x${s.join("")}`;
                return u.set(`${e}.${t}`, a), a
            }

            function l(e, t) {
                if (!(0, a.U)(e, {
                        strict: !1
                    })) throw new r.b({
                    address: e
                });
                return c(e, t)
            }
        },
        43936: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return a
                }
            });
            var r = n(71878),
                i = n(11964);
            let o = /^0x[a-fA-F0-9]{40}$/,
                s = new r.k(8192);

            function a(e, t) {
                let {
                    strict: n = !0
                } = t ? ? {}, r = `${e}.${n}`;
                if (s.has(r)) return s.get(r);
                let a = !!o.test(e) && (e.toLowerCase() === e || !n || (0, i.x)(e) === e);
                return s.set(r, a), a
            }
        },
        84335: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return o
                }
            });
            var r = n(84617);
            let i = {
                bytes: new Uint8Array,
                dataView: new DataView(new ArrayBuffer(0)),
                position: 0,
                positionReadCount: new Map,
                recursiveReadCount: 0,
                recursiveReadLimit: Number.POSITIVE_INFINITY,
                assertReadLimit() {
                    if (this.recursiveReadCount >= this.recursiveReadLimit) throw new r.KD({
                        count: this.recursiveReadCount + 1,
                        limit: this.recursiveReadLimit
                    })
                },
                assertPosition(e) {
                    if (e < 0 || e > this.bytes.length - 1) throw new r.lQ({
                        length: this.bytes.length,
                        position: e
                    })
                },
                decrementPosition(e) {
                    if (e < 0) throw new r.T_({
                        offset: e
                    });
                    let t = this.position - e;
                    this.assertPosition(t), this.position = t
                },
                getReadCount(e) {
                    return this.positionReadCount.get(e || this.position) || 0
                },
                incrementPosition(e) {
                    if (e < 0) throw new r.T_({
                        offset: e
                    });
                    let t = this.position + e;
                    this.assertPosition(t), this.position = t
                },
                inspectByte(e) {
                    let t = e ? ? this.position;
                    return this.assertPosition(t), this.bytes[t]
                },
                inspectBytes(e, t) {
                    let n = t ? ? this.position;
                    return this.assertPosition(n + e - 1), this.bytes.subarray(n, n + e)
                },
                inspectUint8(e) {
                    let t = e ? ? this.position;
                    return this.assertPosition(t), this.bytes[t]
                },
                inspectUint16(e) {
                    let t = e ? ? this.position;
                    return this.assertPosition(t + 1), this.dataView.getUint16(t)
                },
                inspectUint24(e) {
                    let t = e ? ? this.position;
                    return this.assertPosition(t + 2), (this.dataView.getUint16(t) << 8) + this.dataView.getUint8(t + 2)
                },
                inspectUint32(e) {
                    let t = e ? ? this.position;
                    return this.assertPosition(t + 3), this.dataView.getUint32(t)
                },
                pushByte(e) {
                    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
                },
                pushBytes(e) {
                    this.assertPosition(this.position + e.length - 1), this.bytes.set(e, this.position), this.position += e.length
                },
                pushUint8(e) {
                    this.assertPosition(this.position), this.bytes[this.position] = e, this.position++
                },
                pushUint16(e) {
                    this.assertPosition(this.position + 1), this.dataView.setUint16(this.position, e), this.position += 2
                },
                pushUint24(e) {
                    this.assertPosition(this.position + 2), this.dataView.setUint16(this.position, e >> 8), this.dataView.setUint8(this.position + 2, 255 & e), this.position += 3
                },
                pushUint32(e) {
                    this.assertPosition(this.position + 3), this.dataView.setUint32(this.position, e), this.position += 4
                },
                readByte() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectByte();
                    return this.position++, e
                },
                readBytes(e, t) {
                    this.assertReadLimit(), this._touch();
                    let n = this.inspectBytes(e);
                    return this.position += t ? ? e, n
                },
                readUint8() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint8();
                    return this.position += 1, e
                },
                readUint16() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint16();
                    return this.position += 2, e
                },
                readUint24() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint24();
                    return this.position += 3, e
                },
                readUint32() {
                    this.assertReadLimit(), this._touch();
                    let e = this.inspectUint32();
                    return this.position += 4, e
                },
                get remaining() {
                    return this.bytes.length - this.position
                },
                setPosition(e) {
                    let t = this.position;
                    return this.assertPosition(e), this.position = e, () => this.position = t
                },
                _touch() {
                    if (this.recursiveReadLimit === Number.POSITIVE_INFINITY) return;
                    let e = this.getReadCount();
                    this.positionReadCount.set(this.position, e + 1), e > 0 && this.recursiveReadCount++
                }
            };

            function o(e, {
                recursiveReadLimit: t = 8192
            } = {}) {
                let n = Object.create(i);
                return n.bytes = e, n.dataView = new DataView(e.buffer, e.byteOffset, e.byteLength), n.positionReadCount = new Map, n.recursiveReadLimit = t, n
            }
        },
        99786: function(e, t, n) {
            function r(e) {
                return "string" == typeof e[0] ? i(e) : function(e) {
                    let t = 0;
                    for (let n of e) t += n.length;
                    let n = new Uint8Array(t),
                        r = 0;
                    for (let t of e) n.set(t, r), r += t.length;
                    return n
                }(e)
            }

            function i(e) {
                return `0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`
            }
            n.d(t, {
                SM: function() {
                    return i
                },
                zo: function() {
                    return r
                }
            })
        },
        37016: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return r
                }
            });

            function r(e, {
                strict: t = !0
            } = {}) {
                return !!e && "string" == typeof e && (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
            }
        },
        82742: function(e, t, n) {
            n.d(t, {
                gc: function() {
                    return o
                },
                vk: function() {
                    return i
                }
            });
            var r = n(42791);

            function i(e, {
                dir: t,
                size: n = 32
            } = {}) {
                return "string" == typeof e ? o(e, {
                    dir: t,
                    size: n
                }) : function(e, {
                    dir: t,
                    size: n = 32
                } = {}) {
                    if (null === n) return e;
                    if (e.length > n) throw new r.$s({
                        size: e.length,
                        targetSize: n,
                        type: "bytes"
                    });
                    let i = new Uint8Array(n);
                    for (let r = 0; r < n; r++) {
                        let o = "right" === t;
                        i[o ? r : n - r - 1] = e[o ? r : e.length - r - 1]
                    }
                    return i
                }(e, {
                    dir: t,
                    size: n
                })
            }

            function o(e, {
                dir: t,
                size: n = 32
            } = {}) {
                if (null === n) return e;
                let i = e.replace("0x", "");
                if (i.length > 2 * n) throw new r.$s({
                    size: Math.ceil(i.length / 2),
                    targetSize: n,
                    type: "hex"
                });
                return `0x${i["right"===t?"padEnd":"padStart"](2*n,"0")}`
            }
        },
        6803: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return i
                }
            });
            var r = n(37016);

            function i(e) {
                return (0, r.v)(e, {
                    strict: !1
                }) ? Math.ceil((e.length - 2) / 2) : e.length
            }
        },
        46386: function(e, t, n) {
            n.d(t, {
                T4: function() {
                    return c
                },
                p5: function() {
                    return l
                },
                tP: function() {
                    return s
                }
            });
            var r = n(42791),
                i = n(37016),
                o = n(6803);

            function s(e, t, n, {
                strict: r
            } = {}) {
                return (0, i.v)(e, {
                    strict: !1
                }) ? l(e, t, n, {
                    strict: r
                }) : c(e, t, n, {
                    strict: r
                })
            }

            function a(e, t) {
                if ("number" == typeof t && t > 0 && t > (0, o.d)(e) - 1) throw new r.mV({
                    offset: t,
                    position: "start",
                    size: (0, o.d)(e)
                })
            }

            function u(e, t, n) {
                if ("number" == typeof t && "number" == typeof n && (0, o.d)(e) !== n - t) throw new r.mV({
                    offset: n,
                    position: "end",
                    size: (0, o.d)(e)
                })
            }

            function c(e, t, n, {
                strict: r
            } = {}) {
                a(e, t);
                let i = e.slice(t, n);
                return r && u(i, t, n), i
            }

            function l(e, t, n, {
                strict: r
            } = {}) {
                a(e, t);
                let i = `0x${e.replace("0x","").slice((t??0)*2,(n??e.length)*2)}`;
                return r && u(i, t, n), i
            }
        },
        48630: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return r
                }
            });

            function r(e, {
                dir: t = "left"
            } = {}) {
                let n = "string" == typeof e ? e.replace("0x", "") : e,
                    r = 0;
                for (let e = 0; e < n.length - 1 && "0" === n["left" === t ? e : n.length - e - 1].toString(); e++) r++;
                return (n = "left" === t ? n.slice(r) : n.slice(0, n.length - r), "string" == typeof e) ? (1 === n.length && "right" === t && (n = `${n}0`), `0x${n.length%2==1?`0${n}`:n}`) : n
            }
        },
        45194: function(e, t, n) {
            n.d(t, {
                Yf: function() {
                    return a
                },
                ly: function() {
                    return c
                },
                rR: function() {
                    return l
                },
                y_: function() {
                    return u
                }
            });
            var r = n(34569),
                i = n(6803),
                o = n(48630),
                s = n(93749);

            function a(e, {
                size: t
            }) {
                if ((0, i.d)(e) > t) throw new r.M6({
                    givenSize: (0, i.d)(e),
                    maxSize: t
                })
            }

            function u(e, t = {}) {
                let {
                    signed: n
                } = t;
                t.size && a(e, {
                    size: t.size
                });
                let r = BigInt(e);
                if (!n) return r;
                let i = (e.length - 2) / 2,
                    o = (1 n << 8 n * BigInt(i) - 1 n) - 1 n;
                return r <= o ? r : r - BigInt(`0x${"f".padStart(2*i,"f")}`) - 1 n
            }

            function c(e, t = {}) {
                return Number(u(e, t))
            }

            function l(e, t = {}) {
                let n = (0, s.nr)(e);
                return t.size && (a(n, {
                    size: t.size
                }), n = (0, o.f)(n, {
                    dir: "right"
                })), new TextDecoder().decode(n)
            }
        },
        93749: function(e, t, n) {
            n.d(t, {
                O0: function() {
                    return c
                },
                nr: function() {
                    return d
                },
                qX: function() {
                    return h
                }
            });
            var r = n(82022),
                i = n(37016),
                o = n(82742),
                s = n(45194),
                a = n(96904);
            let u = new TextEncoder;

            function c(e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e ? function(e, t) {
                    let n = (0, a.eC)(e, t);
                    return d(n)
                }(e, t) : "boolean" == typeof e ? function(e, t = {}) {
                    let n = new Uint8Array(1);
                    return (n[0] = Number(e), "number" == typeof t.size) ? ((0, s.Yf)(n, {
                        size: t.size
                    }), (0, o.vk)(n, {
                        size: t.size
                    })) : n
                }(e, t) : (0, i.v)(e) ? d(e, t) : h(e, t)
            }
            let l = {
                zero: 48,
                nine: 57,
                A: 65,
                F: 70,
                a: 97,
                f: 102
            };

            function f(e) {
                return e >= l.zero && e <= l.nine ? e - l.zero : e >= l.A && e <= l.F ? e - (l.A - 10) : e >= l.a && e <= l.f ? e - (l.a - 10) : void 0
            }

            function d(e, t = {}) {
                let n = e;
                t.size && ((0, s.Yf)(n, {
                    size: t.size
                }), n = (0, o.vk)(n, {
                    dir: "right",
                    size: t.size
                }));
                let i = n.slice(2);
                i.length % 2 && (i = `0${i}`);
                let a = i.length / 2,
                    u = new Uint8Array(a);
                for (let e = 0, t = 0; e < a; e++) {
                    let n = f(i.charCodeAt(t++)),
                        o = f(i.charCodeAt(t++));
                    if (void 0 === n || void 0 === o) throw new r.G(`Invalid byte sequence ("${i[t-2]}${i[t-1]}" in "${i}").`);
                    u[e] = 16 * n + o
                }
                return u
            }

            function h(e, t = {}) {
                let n = u.encode(e);
                return "number" == typeof t.size ? ((0, s.Yf)(n, {
                    size: t.size
                }), (0, o.vk)(n, {
                    dir: "right",
                    size: t.size
                })) : n
            }
        },
        96904: function(e, t, n) {
            n.d(t, {
                $G: function() {
                    return d
                },
                C4: function() {
                    return u
                },
                NC: function() {
                    return a
                },
                ci: function() {
                    return c
                },
                eC: function() {
                    return l
                }
            });
            var r = n(34569),
                i = n(82742),
                o = n(45194);
            let s = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));

            function a(e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e ? l(e, t) : "string" == typeof e ? d(e, t) : "boolean" == typeof e ? u(e, t) : c(e, t)
            }

            function u(e, t = {}) {
                let n = `0x${Number(e)}`;
                return "number" == typeof t.size ? ((0, o.Yf)(n, {
                    size: t.size
                }), (0, i.vk)(n, {
                    size: t.size
                })) : n
            }

            function c(e, t = {}) {
                let n = "";
                for (let t = 0; t < e.length; t++) n += s[e[t]];
                let r = `0x${n}`;
                return "number" == typeof t.size ? ((0, o.Yf)(r, {
                    size: t.size
                }), (0, i.vk)(r, {
                    dir: "right",
                    size: t.size
                })) : r
            }

            function l(e, t = {}) {
                let n;
                let {
                    signed: o,
                    size: s
                } = t, a = BigInt(e);
                s ? n = o ? (1 n << 8 n * BigInt(s) - 1 n) - 1 n : 2 n ** (8 n * BigInt(s)) - 1 n : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
                let u = "bigint" == typeof n && o ? -n - 1 n : 0;
                if (n && a > n || a < u) {
                    let t = "bigint" == typeof e ? "n" : "";
                    throw new r.J5({
                        max: n ? `${n}${t}` : void 0,
                        min: `${u}${t}`,
                        signed: o,
                        size: s,
                        value: `${e}${t}`
                    })
                }
                let c = `0x${(o&&a<0?(1n<<BigInt(8*s))+BigInt(a):a).toString(16)}`;
                return s ? (0, i.vk)(c, {
                    size: s
                }) : c
            }
            let f = new TextEncoder;

            function d(e, t = {}) {
                let n = f.encode(e);
                return c(n, t)
            }
        },
        58023: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return o
                }
            });
            var r = n(82022),
                i = n(64458);

            function o(e, t) {
                let n = (e.details || "").toLowerCase(),
                    o = e instanceof r.G ? e.walk(e => e.code === i.M_.code) : e;
                return o instanceof r.G ? new i.M_({
                    cause: e,
                    message: o.details
                }) : i.M_.nodeMessage.test(n) ? new i.M_({
                    cause: e,
                    message: e.details
                }) : i.Hh.nodeMessage.test(n) ? new i.Hh({
                    cause: e,
                    maxFeePerGas: t ? .maxFeePerGas
                }) : i.G$.nodeMessage.test(n) ? new i.G$({
                    cause: e,
                    maxFeePerGas: t ? .maxFeePerGas
                }) : i.ZI.nodeMessage.test(n) ? new i.ZI({
                    cause: e,
                    nonce: t ? .nonce
                }) : i.vU.nodeMessage.test(n) ? new i.vU({
                    cause: e,
                    nonce: t ? .nonce
                }) : i.se.nodeMessage.test(n) ? new i.se({
                    cause: e,
                    nonce: t ? .nonce
                }) : i.C_.nodeMessage.test(n) ? new i.C_({
                    cause: e
                }) : i.WF.nodeMessage.test(n) ? new i.WF({
                    cause: e,
                    gas: t ? .gas
                }) : i.dR.nodeMessage.test(n) ? new i.dR({
                    cause: e,
                    gas: t ? .gas
                }) : i.pZ.nodeMessage.test(n) ? new i.pZ({
                    cause: e
                }) : i.cs.nodeMessage.test(n) ? new i.cs({
                    cause: e,
                    maxFeePerGas: t ? .maxFeePerGas,
                    maxPriorityFeePerGas: t ? .maxPriorityFeePerGas
                }) : new i.cj({
                    cause: e
                })
            }
        },
        20455: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(25259);

            function i(e) {
                let t = e.transactions ? .map(e => "string" == typeof e ? e : r.Tr(e));
                return { ...e,
                    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
                    blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
                    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
                    excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
                    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
                    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
                    hash: e.hash ? e.hash : null,
                    logsBloom: e.logsBloom ? e.logsBloom : null,
                    nonce: e.nonce ? e.nonce : null,
                    number: e.number ? BigInt(e.number) : null,
                    size: e.size ? BigInt(e.size) : void 0,
                    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
                    transactions: t,
                    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
                }
            }
        },
        19571: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return r
                }
            });

            function r(e, {
                format: t
            }) {
                if (!t) return {};
                let n = {},
                    r = t(e || {});
                return ! function t(r) {
                    let i = Object.keys(r);
                    for (let o of i) o in e && (n[o] = e[o]), r[o] && "object" == typeof r[o] && !Array.isArray(r[o]) && t(r[o])
                }(r), n
            }
        },
        25259: function(e, t, n) {
            n.d(t, {
                Tr: function() {
                    return o
                },
                c8: function() {
                    return i
                }
            });
            var r = n(45194);
            let i = {
                "0x0": "legacy",
                "0x1": "eip2930",
                "0x2": "eip1559",
                "0x3": "eip4844"
            };

            function o(e) {
                let t = { ...e,
                    blockHash: e.blockHash ? e.blockHash : null,
                    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                    chainId: e.chainId ? (0, r.ly)(e.chainId) : void 0,
                    gas: e.gas ? BigInt(e.gas) : void 0,
                    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
                    maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
                    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
                    maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
                    nonce: e.nonce ? (0, r.ly)(e.nonce) : void 0,
                    to: e.to ? e.to : null,
                    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
                    type: e.type ? i[e.type] : void 0,
                    typeHex: e.type ? e.type : void 0,
                    value: e.value ? BigInt(e.value) : void 0,
                    v: e.v ? BigInt(e.v) : void 0
                };
                return t.yParity = (() => {
                    if (e.yParity) return Number(e.yParity);
                    if ("bigint" == typeof t.v) {
                        if (0 n === t.v || 27 n === t.v) return 0;
                        if (1 n === t.v || 28 n === t.v) return 1;
                        if (t.v >= 35 n) return t.v % 2 n === 0 n ? 1 : 0
                    }
                })(), "legacy" === t.type && (delete t.accessList, delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, delete t.yParity), "eip2930" === t.type && (delete t.maxFeePerBlobGas, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), "eip1559" === t.type && delete t.maxFeePerBlobGas, t
            }
        },
        31892: function(e, t, n) {
            n.d(t, {
                tG: function() {
                    return o
                }
            });
            var r = n(96904);
            let i = {
                legacy: "0x0",
                eip2930: "0x1",
                eip1559: "0x2",
                eip4844: "0x3"
            };

            function o(e) {
                let t = {};
                return void 0 !== e.accessList && (t.accessList = e.accessList), void 0 !== e.blobVersionedHashes && (t.blobVersionedHashes = e.blobVersionedHashes), void 0 !== e.blobs && ("string" != typeof e.blobs[0] ? t.blobs = e.blobs.map(e => (0, r.ci)(e)) : t.blobs = e.blobs), void 0 !== e.data && (t.data = e.data), void 0 !== e.from && (t.from = e.from), void 0 !== e.gas && (t.gas = (0, r.eC)(e.gas)), void 0 !== e.gasPrice && (t.gasPrice = (0, r.eC)(e.gasPrice)), void 0 !== e.maxFeePerBlobGas && (t.maxFeePerBlobGas = (0, r.eC)(e.maxFeePerBlobGas)), void 0 !== e.maxFeePerGas && (t.maxFeePerGas = (0, r.eC)(e.maxFeePerGas)), void 0 !== e.maxPriorityFeePerGas && (t.maxPriorityFeePerGas = (0, r.eC)(e.maxPriorityFeePerGas)), void 0 !== e.nonce && (t.nonce = (0, r.eC)(e.nonce)), void 0 !== e.to && (t.to = e.to), void 0 !== e.type && (t.type = i[e.type]), void 0 !== e.value && (t.value = (0, r.eC)(e.value)), t
            }
        },
        22122: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return r
                }
            });

            function r(e, t, n) {
                let r = e[t.name];
                if ("function" == typeof r) return r;
                let i = e[n];
                return "function" == typeof i ? i : n => t(e, n)
            }
        },
        68178: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return C
                }
            });
            var r = n(74482);
            let i = BigInt(4294967296 - 1),
                o = BigInt(32),
                s = (e, t, n) => e << n | t >>> 32 - n,
                a = (e, t, n) => t << n | e >>> 32 - n,
                u = (e, t, n) => t << n - 32 | e >>> 64 - n,
                c = (e, t, n) => e << n - 32 | t >>> 64 - n;
            var l = n(50882);
            let f = [],
                d = [],
                h = [],
                b = BigInt(0),
                p = BigInt(1),
                g = BigInt(2),
                m = BigInt(7),
                y = BigInt(256),
                v = BigInt(113);
            for (let e = 0, t = p, n = 1, r = 0; e < 24; e++) {
                [n, r] = [r, (2 * n + 3 * r) % 5], f.push(2 * (5 * r + n)), d.push((e + 1) * (e + 2) / 2 % 64);
                let i = b;
                for (let e = 0; e < 7; e++)(t = (t << p ^ (t >> m) * v) % y) & g && (i ^= p << (p << BigInt(e)) - p);
                h.push(i)
            }
            let [w, P] = function(e, t = !1) {
                let n = new Uint32Array(e.length),
                    r = new Uint32Array(e.length);
                for (let s = 0; s < e.length; s++) {
                    let {
                        h: a,
                        l: u
                    } = function(e, t = !1) {
                        return t ? {
                            h: Number(e & i),
                            l: Number(e >> o & i)
                        } : {
                            h: 0 | Number(e >> o & i),
                            l: 0 | Number(e & i)
                        }
                    }(e[s], t);
                    [n[s], r[s]] = [a, u]
                }
                return [n, r]
            }(h, !0), x = (e, t, n) => n > 32 ? u(e, t, n) : s(e, t, n), $ = (e, t, n) => n > 32 ? c(e, t, n) : a(e, t, n);
            class O extends l.kb {
                constructor(e, t, n, i = !1, o = 24) {
                    if (super(), this.blockLen = e, this.suffix = t, this.outputLen = n, this.enableXOF = i, this.rounds = o, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, (0, r.Rx)(n), 0 >= this.blockLen || this.blockLen >= 200) throw Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = (0, l.Jq)(this.state)
                }
                keccak() {
                    l.iA || (0, l.l1)(this.state32),
                        function(e, t = 24) {
                            let n = new Uint32Array(10);
                            for (let r = 24 - t; r < 24; r++) {
                                for (let t = 0; t < 10; t++) n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                                for (let t = 0; t < 10; t += 2) {
                                    let r = (t + 8) % 10,
                                        i = (t + 2) % 10,
                                        o = n[i],
                                        s = n[i + 1],
                                        a = x(o, s, 1) ^ n[r],
                                        u = $(o, s, 1) ^ n[r + 1];
                                    for (let n = 0; n < 50; n += 10) e[t + n] ^= a, e[t + n + 1] ^= u
                                }
                                let t = e[2],
                                    i = e[3];
                                for (let n = 0; n < 24; n++) {
                                    let r = d[n],
                                        o = x(t, i, r),
                                        s = $(t, i, r),
                                        a = f[n];
                                    t = e[a], i = e[a + 1], e[a] = o, e[a + 1] = s
                                }
                                for (let t = 0; t < 50; t += 10) {
                                    for (let r = 0; r < 10; r++) n[r] = e[t + r];
                                    for (let r = 0; r < 10; r++) e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10]
                                }
                                e[0] ^= w[r], e[1] ^= P[r]
                            }
                            n.fill(0)
                        }(this.state32, this.rounds), l.iA || (0, l.l1)(this.state32), this.posOut = 0, this.pos = 0
                }
                update(e) {
                    (0, r.Gg)(this);
                    let {
                        blockLen: t,
                        state: n
                    } = this;
                    e = (0, l.O0)(e);
                    let i = e.length;
                    for (let r = 0; r < i;) {
                        let o = Math.min(t - this.pos, i - r);
                        for (let t = 0; t < o; t++) n[this.pos++] ^= e[r++];
                        this.pos === t && this.keccak()
                    }
                    return this
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    let {
                        state: e,
                        suffix: t,
                        pos: n,
                        blockLen: r
                    } = this;
                    e[n] ^= t, (128 & t) != 0 && n === r - 1 && this.keccak(), e[r - 1] ^= 128, this.keccak()
                }
                writeInto(e) {
                    (0, r.Gg)(this, !1), (0, r.aI)(e), this.finish();
                    let t = this.state,
                        {
                            blockLen: n
                        } = this;
                    for (let r = 0, i = e.length; r < i;) {
                        this.posOut >= n && this.keccak();
                        let o = Math.min(n - this.posOut, i - r);
                        e.set(t.subarray(this.posOut, this.posOut + o), r), this.posOut += o, r += o
                    }
                    return e
                }
                xofInto(e) {
                    if (!this.enableXOF) throw Error("XOF is not possible for this instance");
                    return this.writeInto(e)
                }
                xof(e) {
                    return (0, r.Rx)(e), this.xofInto(new Uint8Array(e))
                }
                digestInto(e) {
                    if ((0, r.J8)(e, this), this.finished) throw Error("digest() was already called");
                    return this.writeInto(e), this.destroy(), e
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen))
                }
                destroy() {
                    this.destroyed = !0, this.state.fill(0)
                }
                _cloneInto(e) {
                    let {
                        blockLen: t,
                        suffix: n,
                        outputLen: r,
                        rounds: i,
                        enableXOF: o
                    } = this;
                    return e || (e = new O(t, n, r, o, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = r, e.enableXOF = o, e.destroyed = this.destroyed, e
                }
            }
            let G = (0, l.hE)(() => new O(136, 1, 32));
            var j = n(37016),
                I = n(93749),
                E = n(96904);

            function C(e, t) {
                let n = G((0, j.v)(e, {
                    strict: !1
                }) ? (0, I.O0)(e) : e);
                return "bytes" === (t || "hex") ? n : (0, E.NC)(n)
            }
        },
        8100: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return i
                }
            });
            var r = n(60565);
            let i = r.r
        },
        61662: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return o
                }
            });
            var r = n(46386),
                i = n(60565);
            let o = e => (0, r.tP)((0, i.r)(e), 0, 4)
        },
        60565: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return f
                }
            });
            var r = n(93749),
                i = n(68178);
            let o = e => (0, i.w)((0, r.O0)(e));
            var s = n(89649);
            let a = /^tuple(?<array>(\[(\d*)\])*)$/;

            function u(e) {
                let t = "",
                    n = e.length;
                for (let r = 0; r < n; r++) {
                    let i = e[r];
                    t += function e(t) {
                        let n = t.type;
                        if (a.test(t.type) && "components" in t) {
                            n = "(";
                            let r = t.components.length;
                            for (let i = 0; i < r; i++) {
                                let o = t.components[i];
                                n += e(o), i < r - 1 && (n += ", ")
                            }
                            let i = (0, s.Zw)(a, t.type);
                            return n += `)${i?.array??""}`, e({ ...t,
                                type: n
                            })
                        }
                        return ("indexed" in t && t.indexed && (n = `${n} indexed`), t.name) ? `${n} ${t.name}` : n
                    }(i), r !== n - 1 && (t += ", ")
                }
                return t
            }
            var c = n(82022);
            let l = e => {
                let t = "string" == typeof e ? e : "function" === e.type ? `function ${e.name}(${u(e.inputs)})${e.stateMutability&&"nonpayable"!==e.stateMutability?` ${e.stateMutability}`:""}${e.outputs.length?` returns (${u(e.outputs)})`:""}` : "event" === e.type ? `event ${e.name}(${u(e.inputs)})` : "error" === e.type ? `error ${e.name}(${u(e.inputs)})` : "constructor" === e.type ? `constructor(${u(e.inputs)})${"payable"===e.stateMutability?" payable":""}` : "fallback" === e.type ? "fallback()" : "receive() external payable";
                return function(e) {
                    let t = !0,
                        n = "",
                        r = 0,
                        i = "",
                        o = !1;
                    for (let s = 0; s < e.length; s++) {
                        let a = e[s];
                        if (["(", ")", ","].includes(a) && (t = !0), "(" === a && r++, ")" === a && r--, t) {
                            if (0 === r) {
                                if (" " === a && ["event", "function", ""].includes(i)) i = "";
                                else if (i += a, ")" === a) {
                                    o = !0;
                                    break
                                }
                                continue
                            }
                            if (" " === a) {
                                "," !== e[s - 1] && "," !== n && ",(" !== n && (n = "", t = !1);
                                continue
                            }
                            i += a, n += a
                        }
                    }
                    if (!o) throw new c.G("Unable to normalize signature.");
                    return i
                }(t)
            };

            function f(e) {
                return o(l(e))
            }
        },
        71878: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return r
                }
            });
            class r extends Map {
                constructor(e) {
                    super(), Object.defineProperty(this, "maxSize", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.maxSize = e
                }
                set(e, t) {
                    return super.set(e, t), this.maxSize && this.size > this.maxSize && this.delete(this.keys().next().value), this
                }
            }
        },
        55056: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return i
                }
            });
            var r = n(66637);

            function i(e, {
                delay: t = 100,
                retryCount: n = 2,
                shouldRetry: i = () => !0
            } = {}) {
                return new Promise((o, s) => {
                    let a = async ({
                        count: u = 0
                    } = {}) => {
                        let c = async ({
                            error: e
                        }) => {
                            let n = "function" == typeof t ? t({
                                count: u,
                                error: e
                            }) : t;
                            n && await (0, r.D)(n), a({
                                count: u + 1
                            })
                        };
                        try {
                            let t = await e();
                            o(t)
                        } catch (e) {
                            if (u < n && await i({
                                    count: u,
                                    error: e
                                })) return c({
                                error: e
                            });
                            s(e)
                        }
                    };
                    a()
                })
            }
        },
        75983: function(e, t, n) {
            n.d(t, {
                mF: function() {
                    return c
                }
            });
            var r = n(76021),
                i = n(42791),
                o = n(21965),
                s = n(43936),
                a = n(96904);

            function u(e) {
                if (e && 0 !== e.length) return e.reduce((e, {
                    slot: t,
                    value: n
                }) => {
                    if (66 !== t.length) throw new i.W_({
                        size: t.length,
                        targetSize: 66,
                        type: "hex"
                    });
                    if (66 !== n.length) throw new i.W_({
                        size: n.length,
                        targetSize: 66,
                        type: "hex"
                    });
                    return e[t] = n, e
                }, {})
            }

            function c(e) {
                if (!e) return;
                let t = {};
                for (let {
                        address: n,
                        ...i
                    } of e) {
                    if (!(0, s.U)(n, {
                            strict: !1
                        })) throw new r.b({
                        address: n
                    });
                    if (t[n]) throw new o.Nc({
                        address: n
                    });
                    t[n] = function(e) {
                        let {
                            balance: t,
                            nonce: n,
                            state: r,
                            stateDiff: i,
                            code: s
                        } = e, c = {};
                        if (void 0 !== s && (c.code = s), void 0 !== t && (c.balance = (0, a.eC)(t)), void 0 !== n && (c.nonce = (0, a.eC)(n)), void 0 !== r && (c.state = u(r)), void 0 !== i) {
                            if (c.state) throw new o.Z8;
                            c.stateDiff = u(i)
                        }
                        return c
                    }(i)
                }
                return t
            }
        },
        94518: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return r
                }
            });
            let r = (e, t, n) => JSON.stringify(e, (e, n) => {
                let r = "bigint" == typeof n ? n.toString() : n;
                return "function" == typeof t ? t(e, r) : r
            }, n)
        },
        49619: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return u
                }
            });
            var r = n(92341),
                i = n(76021),
                o = n(64458),
                s = n(36923),
                a = n(43936);

            function u(e) {
                let {
                    account: t,
                    gasPrice: n,
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: c,
                    to: l
                } = e, f = t ? (0, r.T)(t) : void 0;
                if (f && !(0, a.U)(f.address)) throw new i.b({
                    address: f.address
                });
                if (l && !(0, a.U)(l)) throw new i.b({
                    address: l
                });
                if (void 0 !== n && (void 0 !== u || void 0 !== c)) throw new s.xY;
                if (u && u > 2 n ** 256 n - 1 n) throw new o.Hh({
                    maxFeePerGas: u
                });
                if (c && u && c > u) throw new o.cs({
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: c
                })
            }
        },
        72185: function(e, t, n) {
            n.d(t, {
                cj: function() {
                    return h
                },
                H6: function() {
                    return f
                },
                iC: function() {
                    return d
                }
            });
            var r = n(79495),
                i = n(76021),
                o = n(43936),
                s = n(6803),
                a = n(96904);
            let u = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
                c = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
            var l = n(94518);

            function f(e) {
                let {
                    domain: t,
                    message: n,
                    primaryType: r,
                    types: i
                } = e, o = (e, t) => {
                    let n = { ...t
                    };
                    for (let t of e) {
                        let {
                            name: e,
                            type: r
                        } = t;
                        "address" === r && (n[e] = n[e].toLowerCase())
                    }
                    return n
                }, s = i.EIP712Domain && t ? o(i.EIP712Domain, t) : {}, a = (() => {
                    if ("EIP712Domain" !== r) return o(i[r], n)
                })();
                return (0, l.P)({
                    domain: s,
                    message: a,
                    primaryType: r,
                    types: i
                })
            }

            function d(e) {
                let {
                    domain: t,
                    message: n,
                    primaryType: l,
                    types: f
                } = e, d = (e, t) => {
                    for (let n of e) {
                        let {
                            name: e,
                            type: l
                        } = n, h = t[e], b = l.match(c);
                        if (b && ("number" == typeof h || "bigint" == typeof h)) {
                            let [e, t, n] = b;
                            (0, a.eC)(h, {
                                signed: "int" === t,
                                size: Number.parseInt(n) / 8
                            })
                        }
                        if ("address" === l && "string" == typeof h && !(0, o.U)(h)) throw new i.b({
                            address: h
                        });
                        let p = l.match(u);
                        if (p) {
                            let [e, t] = p;
                            if (t && (0, s.d)(h) !== Number.parseInt(t)) throw new r.KY({
                                expectedSize: Number.parseInt(t),
                                givenSize: (0, s.d)(h)
                            })
                        }
                        let g = f[l];
                        g && d(g, h)
                    }
                };
                f.EIP712Domain && t && d(f.EIP712Domain, t), "EIP712Domain" !== l && d(f[l], n)
            }

            function h({
                domain: e
            }) {
                return ["string" == typeof e ? .name && {
                    name: "name",
                    type: "string"
                }, e ? .version && {
                    name: "version",
                    type: "string"
                }, "number" == typeof e ? .chainId && {
                    name: "chainId",
                    type: "uint256"
                }, e ? .verifyingContract && {
                    name: "verifyingContract",
                    type: "address"
                }, e ? .salt && {
                    name: "salt",
                    type: "bytes32"
                }].filter(Boolean)
            }
        },
        29784: function(e, t, n) {
            let r;
            n.d(t, {
                h: function() {
                    return o
                }
            });
            let i = 256;

            function o(e = 11) {
                if (!r || i + e > 512) {
                    r = "", i = 0;
                    for (let e = 0; e < 256; e++) r += (256 + 256 * Math.random() | 0).toString(16).substring(1)
                }
                return r.substring(i, i++ + e)
            }
        },
        84426: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return o
                }
            });
            var r = n(43849),
                i = n(58763);

            function o(e, t = "wei") {
                return (0, i.b)(e, r.ez[t])
            }
        },
        83871: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return o
                }
            });
            var r = n(43849),
                i = n(58763);

            function o(e, t = "wei") {
                return (0, i.b)(e, r.Zn[t])
            }
        },
        58763: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return r
                }
            });

            function r(e, t) {
                let n = e.toString(),
                    r = n.startsWith("-");
                r && (n = n.slice(1));
                let [i, o] = [(n = n.padStart(t, "0")).slice(0, n.length - t), n.slice(n.length - t)];
                return o = o.replace(/(0+)$/, ""), `${r?"-":""}${i||"0"}${o?`.${o}`:""}`
            }
        },
        66637: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return r
                }
            });
            async function r(e) {
                return new Promise(t => setTimeout(t, e))
            }
        },
        63102: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return a
                },
                F: function() {
                    return u
                }
            });
            var r = n(78572);
            let i = !1;
            async function o(e, t = {}) {
                let n;
                if (i) return [];
                i = !0, e.setState(e => ({ ...e,
                    status: e.current ? "reconnecting" : "connecting"
                }));
                let r = [];
                if (t.connectors ? .length)
                    for (let n of t.connectors) {
                        let t;
                        t = "function" == typeof n ? e._internal.connectors.setup(n) : n, r.push(t)
                    } else r.push(...e.connectors);
                try {
                    n = await e.storage ? .getItem("recentConnectorId")
                } catch {}
                let o = {};
                for (let [, t] of e.state.connections) o[t.connector.id] = 1;
                n && (o[n] = 0);
                let s = Object.keys(o).length > 0 ? [...r].sort((e, t) => (o[e.id] ? ? 10) - (o[t.id] ? ? 10)) : r,
                    a = !1,
                    u = [],
                    c = [];
                for (let t of s) {
                    let n = await t.getProvider().catch(() => void 0);
                    if (!n || c.some(e => e === n)) continue;
                    let r = await t.isAuthorized();
                    if (!r) continue;
                    let i = await t.connect({
                        isReconnecting: !0
                    }).catch(() => null);
                    i && (t.emitter.off("connect", e._internal.events.connect), t.emitter.on("change", e._internal.events.change), t.emitter.on("disconnect", e._internal.events.disconnect), e.setState(e => {
                        let n = new Map(a ? e.connections : new Map).set(t.uid, {
                            accounts: i.accounts,
                            chainId: i.chainId,
                            connector: t
                        });
                        return { ...e,
                            current: a ? e.current : t.uid,
                            connections: n
                        }
                    }), u.push({
                        accounts: i.accounts,
                        chainId: i.chainId,
                        connector: t
                    }), c.push(n), a = !0)
                }
                return ("reconnecting" === e.state.status || "connecting" === e.state.status) && (a ? e.setState(e => ({ ...e,
                    status: "connected"
                })) : e.setState(e => ({ ...e,
                    connections: new Map,
                    current: null,
                    status: "disconnected"
                }))), i = !1, u
            }

            function s(e) {
                let {
                    children: t,
                    config: n,
                    initialState: i,
                    reconnectOnMount: s = !0
                } = e, {
                    onMount: a
                } = function(e, t) {
                    let {
                        initialState: n,
                        reconnectOnMount: r
                    } = t;
                    return n && !e._internal.store.persist.hasHydrated() && e.setState({ ...n,
                        chainId: e.chains.some(e => e.id === n.chainId) ? n.chainId : e.chains[0].id,
                        connections: r ? n.connections : new Map,
                        status: r ? "reconnecting" : "disconnected"
                    }), {
                        async onMount() {
                            if (e._internal.ssr) {
                                await e._internal.store.persist.rehydrate();
                                let t = e._internal.mipd ? .getProviders().map(e._internal.connectors.providerDetailToConnector).map(e._internal.connectors.setup);
                                e._internal.connectors.setState(e => [...e, ...t ? ? []])
                            }
                            r ? o(e) : e.storage && e.setState(e => ({ ...e,
                                connections: new Map
                            }))
                        }
                    }
                }(n, {
                    initialState: i,
                    reconnectOnMount: s
                });
                n._internal.ssr || a();
                let u = (0, r.useRef)(!0);
                return (0, r.useEffect)(() => {
                    if (u.current && n._internal.ssr) return a(), () => {
                        u.current = !1
                    }
                }, []), t
            }
            let a = (0, r.createContext)(void 0);

            function u(e) {
                let {
                    children: t,
                    config: n
                } = e;
                return (0, r.createElement)(s, e, (0, r.createElement)(a.Provider, {
                    value: n
                }, t))
            }
        },
        66997: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return l
                }
            });
            var r = n(94862),
                i = n(55495),
                o = n(72585),
                s = n(61286),
                a = n(78572),
                u = n(54763);
            let c = e => "object" == typeof e && !Array.isArray(e);

            function l(e = {}) {
                let t = (0, o.Z)(e);
                return function(e, t, n = t, r = s.v) {
                    let i = (0, a.useRef)([]),
                        o = (0, u.useSyncExternalStoreWithSelector)(e, t, n, e => e, (e, t) => {
                            if (c(e) && c(t) && i.current.length) {
                                for (let n of i.current) {
                                    let i = r(e[n], t[n]);
                                    if (!i) return !1
                                }
                                return !0
                            }
                            return r(e, t)
                        });
                    if (c(o)) {
                        let e = { ...o
                            },
                            t = {};
                        for (let [n, r] of Object.entries(e)) t = { ...t,
                            [n]: {
                                configurable: !1,
                                enumerable: !0,
                                get: () => (i.current.includes(n) || i.current.push(n), r)
                            }
                        };
                        return Object.defineProperties(e, t), e
                    }
                    return o
                }(e => (0, r.u)(t, {
                    onChange: e
                }), () => (0, i.D)(t))
            }
        },
        66991: function(e, t, n) {
            function r(e) {
                return e.state.chainId
            }
            n.d(t, {
                x: function() {
                    return s
                }
            });
            var i = n(78572),
                o = n(72585);

            function s(e = {}) {
                let t = (0, o.Z)(e);
                return (0, i.useSyncExternalStore)(e => (function(e, t) {
                    let {
                        onChange: n
                    } = t;
                    return e.subscribe(e => e.chainId, n)
                })(t, {
                    onChange: e
                }), () => r(t), () => r(t))
            }
        },
        72585: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var r = n(78572),
                i = n(63102),
                o = n(55240);
            let s = () => "wagmi@2.10.9";
            class a extends o.G {
                constructor() {
                    super(...arguments), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WagmiError"
                    })
                }
                get docsBaseUrl() {
                    return "https://wagmi.sh/react"
                }
                get version() {
                    return s()
                }
            }
            class u extends a {
                constructor() {
                    super("`useConfig` must be used within `WagmiProvider`.", {
                        docsPath: "/api/WagmiProvider"
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WagmiProviderNotFoundError"
                    })
                }
            }

            function c(e = {}) {
                let t = e.config ? ? (0, r.useContext)(i.V);
                if (!t) throw new u;
                return t
            }
        },
        53319: function(e, t, n) {
            n.d(t, {
                aM: function() {
                    return o
                }
            });
            var r = n(98237),
                i = n(35526);

            function o(e) {
                let t = (0, r.a)({ ...e,
                    queryKeyHashFn: i.kq
                });
                return t.queryKey = e.queryKey, t
            }
        }
    }
]);