"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8237], {
        91867: function(t, e, s) {
            s.d(e, {
                j: function() {
                    return n
                }
            });
            var i = s(53137),
                r = s(7734),
                n = new class extends i.l {#
                    t;#
                    e;#
                    s;
                    constructor() {
                        super(), this.#s = t => {
                            if (!r.sk && window.addEventListener) {
                                let e = () => t();
                                return window.addEventListener("visibilitychange", e, !1), () => {
                                    window.removeEventListener("visibilitychange", e)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.#e || this.setEventListener(this.#s)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || (this.#e ? .(), this.#e = void 0)
                    }
                    setEventListener(t) {
                        this.#s = t, this.#e ? .(), this.#e = t(t => {
                            "boolean" == typeof t ? this.setFocused(t) : this.onFocus()
                        })
                    }
                    setFocused(t) {
                        let e = this.#t !== t;
                        e && (this.#t = t, this.onFocus())
                    }
                    onFocus() {
                        let t = this.isFocused();
                        this.listeners.forEach(e => {
                            e(t)
                        })
                    }
                    isFocused() {
                        return "boolean" == typeof this.#t ? this.#t : globalThis.document ? .visibilityState !== "hidden"
                    }
                }
        },
        61489: function(t, e, s) {
            s.d(e, {
                V: function() {
                    return i
                }
            });
            var i = function() {
                let t = [],
                    e = 0,
                    s = t => {
                        t()
                    },
                    i = t => {
                        t()
                    },
                    r = t => setTimeout(t, 0),
                    n = i => {
                        e ? t.push(i) : r(() => {
                            s(i)
                        })
                    },
                    u = () => {
                        let e = t;
                        t = [], e.length && r(() => {
                            i(() => {
                                e.forEach(t => {
                                    s(t)
                                })
                            })
                        })
                    };
                return {
                    batch: t => {
                        let s;
                        e++;
                        try {
                            s = t()
                        } finally {
                            --e || u()
                        }
                        return s
                    },
                    batchCalls: t => (...e) => {
                        n(() => {
                            t(...e)
                        })
                    },
                    schedule: n,
                    setNotifyFunction: t => {
                        s = t
                    },
                    setBatchNotifyFunction: t => {
                        i = t
                    },
                    setScheduler: t => {
                        r = t
                    }
                }
            }()
        },
        61912: function(t, e, s) {
            s.d(e, {
                N: function() {
                    return n
                }
            });
            var i = s(53137),
                r = s(7734),
                n = new class extends i.l {#
                    i = !0;#
                    e;#
                    s;
                    constructor() {
                        super(), this.#s = t => {
                            if (!r.sk && window.addEventListener) {
                                let e = () => t(!0),
                                    s = () => t(!1);
                                return window.addEventListener("online", e, !1), window.addEventListener("offline", s, !1), () => {
                                    window.removeEventListener("online", e), window.removeEventListener("offline", s)
                                }
                            }
                        }
                    }
                    onSubscribe() {
                        this.#e || this.setEventListener(this.#s)
                    }
                    onUnsubscribe() {
                        this.hasListeners() || (this.#e ? .(), this.#e = void 0)
                    }
                    setEventListener(t) {
                        this.#s = t, this.#e ? .(), this.#e = t(this.setOnline.bind(this))
                    }
                    setOnline(t) {
                        let e = this.#i !== t;
                        e && (this.#i = t, this.listeners.forEach(e => {
                            e(t)
                        }))
                    }
                    isOnline() {
                        return this.#i
                    }
                }
        },
        14159: function(t, e, s) {
            s.d(e, {
                A: function() {
                    return o
                },
                z: function() {
                    return a
                }
            });
            var i = s(7734),
                r = s(61489),
                n = s(21997),
                u = s(58031),
                o = class extends u.F {#
                    r;#
                    n;#
                    u;#
                    o;#
                    a;#
                    c;
                    constructor(t) {
                        super(), this.#c = !1, this.#a = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.#u = t.cache, this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.#r = t.state || function(t) {
                            let e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
                                s = void 0 !== e,
                                i = s ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
                            return {
                                data: e,
                                dataUpdateCount: 0,
                                dataUpdatedAt: s ? i ? ? Date.now() : 0,
                                error: null,
                                errorUpdateCount: 0,
                                errorUpdatedAt: 0,
                                fetchFailureCount: 0,
                                fetchFailureReason: null,
                                fetchMeta: null,
                                isInvalidated: !1,
                                status: s ? "success" : "pending",
                                fetchStatus: "idle"
                            }
                        }(this.options), this.state = this.#r, this.scheduleGc()
                    }
                    get meta() {
                        return this.options.meta
                    }
                    get promise() {
                        return this.#o ? .promise
                    }
                    setOptions(t) {
                        this.options = { ...this.#a,
                            ...t
                        }, this.updateGcTime(this.options.gcTime)
                    }
                    optionalRemove() {
                        this.observers.length || "idle" !== this.state.fetchStatus || this.#u.remove(this)
                    }
                    setData(t, e) {
                        let s = (0, i.oE)(this.state.data, t, this.options);
                        return this.#h({
                            data: s,
                            type: "success",
                            dataUpdatedAt: e ? .updatedAt,
                            manual: e ? .manual
                        }), s
                    }
                    setState(t, e) {
                        this.#h({
                            type: "setState",
                            state: t,
                            setStateOptions: e
                        })
                    }
                    cancel(t) {
                        let e = this.#o ? .promise;
                        return this.#o ? .cancel(t), e ? e.then(i.ZT).catch(i.ZT) : Promise.resolve()
                    }
                    destroy() {
                        super.destroy(), this.cancel({
                            silent: !0
                        })
                    }
                    reset() {
                        this.destroy(), this.setState(this.#r)
                    }
                    isActive() {
                        return this.observers.some(t => !1 !== (0, i.Nc)(t.options.enabled, this))
                    }
                    isDisabled() {
                        return this.getObserversCount() > 0 && !this.isActive()
                    }
                    isStale() {
                        return !!this.state.isInvalidated || (this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : void 0 === this.state.data)
                    }
                    isStaleByTime(t = 0) {
                        return this.state.isInvalidated || void 0 === this.state.data || !(0, i.Kp)(this.state.dataUpdatedAt, t)
                    }
                    onFocus() {
                        let t = this.observers.find(t => t.shouldFetchOnWindowFocus());
                        t ? .refetch({
                            cancelRefetch: !1
                        }), this.#o ? .continue()
                    }
                    onOnline() {
                        let t = this.observers.find(t => t.shouldFetchOnReconnect());
                        t ? .refetch({
                            cancelRefetch: !1
                        }), this.#o ? .continue()
                    }
                    addObserver(t) {
                        this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.#u.notify({
                            type: "observerAdded",
                            query: this,
                            observer: t
                        }))
                    }
                    removeObserver(t) {
                        this.observers.includes(t) && (this.observers = this.observers.filter(e => e !== t), this.observers.length || (this.#o && (this.#c ? this.#o.cancel({
                            revert: !0
                        }) : this.#o.cancelRetry()), this.scheduleGc()), this.#u.notify({
                            type: "observerRemoved",
                            query: this,
                            observer: t
                        }))
                    }
                    getObserversCount() {
                        return this.observers.length
                    }
                    invalidate() {
                        this.state.isInvalidated || this.#h({
                            type: "invalidate"
                        })
                    }
                    fetch(t, e) {
                        if ("idle" !== this.state.fetchStatus) {
                            if (void 0 !== this.state.data && e ? .cancelRefetch) this.cancel({
                                silent: !0
                            });
                            else if (this.#o) return this.#o.continueRetry(), this.#o.promise
                        }
                        if (t && this.setOptions(t), !this.options.queryFn) {
                            let t = this.observers.find(t => t.options.queryFn);
                            t && this.setOptions(t.options)
                        }
                        let s = new AbortController,
                            r = t => {
                                Object.defineProperty(t, "signal", {
                                    enumerable: !0,
                                    get: () => (this.#c = !0, s.signal)
                                })
                            },
                            u = {
                                fetchOptions: e,
                                options: this.options,
                                queryKey: this.queryKey,
                                state: this.state,
                                fetchFn: () => {
                                    let t = (0, i.cG)(this.options, e),
                                        s = {
                                            queryKey: this.queryKey,
                                            meta: this.meta
                                        };
                                    return (r(s), this.#c = !1, this.options.persister) ? this.options.persister(t, s, this) : t(s)
                                }
                            };
                        r(u), this.options.behavior ? .onFetch(u, this), this.#n = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== u.fetchOptions ? .meta) && this.#h({
                            type: "fetch",
                            meta: u.fetchOptions ? .meta
                        });
                        let o = t => {
                            (0, n.DV)(t) && t.silent || this.#h({
                                type: "error",
                                error: t
                            }), (0, n.DV)(t) || (this.#u.config.onError ? .(t, this), this.#u.config.onSettled ? .(this.state.data, t, this)), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                        };
                        return this.#o = (0, n.Mz)({
                            initialPromise: e ? .initialPromise,
                            fn: u.fetchFn,
                            abort: s.abort.bind(s),
                            onSuccess: t => {
                                if (void 0 === t) {
                                    o(Error(`${this.queryHash} data is undefined`));
                                    return
                                }
                                this.setData(t), this.#u.config.onSuccess ? .(t, this), this.#u.config.onSettled ? .(t, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                            },
                            onError: o,
                            onFail: (t, e) => {
                                this.#h({
                                    type: "failed",
                                    failureCount: t,
                                    error: e
                                })
                            },
                            onPause: () => {
                                this.#h({
                                    type: "pause"
                                })
                            },
                            onContinue: () => {
                                this.#h({
                                    type: "continue"
                                })
                            },
                            retry: u.options.retry,
                            retryDelay: u.options.retryDelay,
                            networkMode: u.options.networkMode,
                            canRun: () => !0
                        }), this.#o.start()
                    }#
                    h(t) {
                        this.state = (e => {
                            switch (t.type) {
                                case "failed":
                                    return { ...e,
                                        fetchFailureCount: t.failureCount,
                                        fetchFailureReason: t.error
                                    };
                                case "pause":
                                    return { ...e,
                                        fetchStatus: "paused"
                                    };
                                case "continue":
                                    return { ...e,
                                        fetchStatus: "fetching"
                                    };
                                case "fetch":
                                    return { ...e,
                                        ...a(e.data, this.options),
                                        fetchMeta: t.meta ? ? null
                                    };
                                case "success":
                                    return { ...e,
                                        data: t.data,
                                        dataUpdateCount: e.dataUpdateCount + 1,
                                        dataUpdatedAt: t.dataUpdatedAt ? ? Date.now(),
                                        error: null,
                                        isInvalidated: !1,
                                        status: "success",
                                        ...!t.manual && {
                                            fetchStatus: "idle",
                                            fetchFailureCount: 0,
                                            fetchFailureReason: null
                                        }
                                    };
                                case "error":
                                    let s = t.error;
                                    if ((0, n.DV)(s) && s.revert && this.#n) return { ...this.#n,
                                        fetchStatus: "idle"
                                    };
                                    return { ...e,
                                        error: s,
                                        errorUpdateCount: e.errorUpdateCount + 1,
                                        errorUpdatedAt: Date.now(),
                                        fetchFailureCount: e.fetchFailureCount + 1,
                                        fetchFailureReason: s,
                                        fetchStatus: "idle",
                                        status: "error"
                                    };
                                case "invalidate":
                                    return { ...e,
                                        isInvalidated: !0
                                    };
                                case "setState":
                                    return { ...e,
                                        ...t.state
                                    }
                            }
                        })(this.state), r.V.batch(() => {
                            this.observers.forEach(t => {
                                t.onQueryUpdate()
                            }), this.#u.notify({
                                query: this,
                                type: "updated",
                                action: t
                            })
                        })
                    }
                };

            function a(t, e) {
                return {
                    fetchFailureCount: 0,
                    fetchFailureReason: null,
                    fetchStatus: (0, n.Kw)(e.networkMode) ? "fetching" : "paused",
                    ...void 0 === t && {
                        error: null,
                        status: "pending"
                    }
                }
            }
        },
        58031: function(t, e, s) {
            s.d(e, {
                F: function() {
                    return r
                }
            });
            var i = s(7734),
                r = class {#
                    l;
                    destroy() {
                        this.clearGcTimeout()
                    }
                    scheduleGc() {
                        this.clearGcTimeout(), (0, i.PN)(this.gcTime) && (this.#l = setTimeout(() => {
                            this.optionalRemove()
                        }, this.gcTime))
                    }
                    updateGcTime(t) {
                        this.gcTime = Math.max(this.gcTime || 0, t ? ? (i.sk ? 1 / 0 : 3e5))
                    }
                    clearGcTimeout() {
                        this.#l && (clearTimeout(this.#l), this.#l = void 0)
                    }
                }
        },
        21997: function(t, e, s) {
            s.d(e, {
                DV: function() {
                    return c
                },
                Kw: function() {
                    return o
                },
                Mz: function() {
                    return h
                }
            });
            var i = s(91867),
                r = s(61912),
                n = s(7734);

            function u(t) {
                return Math.min(1e3 * 2 ** t, 3e4)
            }

            function o(t) {
                return (t ? ? "online") !== "online" || r.N.isOnline()
            }
            var a = class {
                constructor(t) {
                    this.revert = t ? .revert, this.silent = t ? .silent
                }
            };

            function c(t) {
                return t instanceof a
            }

            function h(t) {
                let e, s, c, h = !1,
                    l = 0,
                    d = !1,
                    f = new Promise((t, e) => {
                        s = t, c = e
                    }),
                    p = () => i.j.isFocused() && ("always" === t.networkMode || r.N.isOnline()) && t.canRun(),
                    y = () => o(t.networkMode) && t.canRun(),
                    v = i => {
                        d || (d = !0, t.onSuccess ? .(i), e ? .(), s(i))
                    },
                    b = s => {
                        d || (d = !0, t.onError ? .(s), e ? .(), c(s))
                    },
                    m = () => new Promise(s => {
                        e = t => {
                            (d || p()) && s(t)
                        }, t.onPause ? .()
                    }).then(() => {
                        e = void 0, d || t.onContinue ? .()
                    }),
                    R = () => {
                        let e;
                        if (d) return;
                        let s = 0 === l ? t.initialPromise : void 0;
                        try {
                            e = s ? ? t.fn()
                        } catch (t) {
                            e = Promise.reject(t)
                        }
                        Promise.resolve(e).then(v).catch(e => {
                            if (d) return;
                            let s = t.retry ? ? (n.sk ? 0 : 3),
                                i = t.retryDelay ? ? u,
                                r = "function" == typeof i ? i(l, e) : i,
                                o = !0 === s || "number" == typeof s && l < s || "function" == typeof s && s(l, e);
                            if (h || !o) {
                                b(e);
                                return
                            }
                            l++, t.onFail ? .(l, e), (0, n._v)(r).then(() => p() ? void 0 : m()).then(() => {
                                h ? b(e) : R()
                            })
                        })
                    };
                return {
                    promise: f,
                    cancel: e => {
                        d || (b(new a(e)), t.abort ? .())
                    },
                    continue: () => (e ? .(), f),
                    cancelRetry: () => {
                        h = !0
                    },
                    continueRetry: () => {
                        h = !1
                    },
                    canStart: y,
                    start: () => (y() ? R() : m().then(R), f)
                }
            }
        },
        53137: function(t, e, s) {
            s.d(e, {
                l: function() {
                    return i
                }
            });
            var i = class {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(t) {
                    return this.listeners.add(t), this.onSubscribe(), () => {
                        this.listeners.delete(t), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
        },
        7734: function(t, e, s) {
            s.d(e, {
                CN: function() {
                    return F
                },
                Ht: function() {
                    return C
                },
                KC: function() {
                    return a
                },
                Kp: function() {
                    return o
                },
                Nc: function() {
                    return c
                },
                PN: function() {
                    return u
                },
                Q$: function() {
                    return y
                },
                Rm: function() {
                    return d
                },
                SE: function() {
                    return n
                },
                VS: function() {
                    return v
                },
                VX: function() {
                    return S
                },
                X7: function() {
                    return l
                },
                Ym: function() {
                    return f
                },
                ZT: function() {
                    return r
                },
                _v: function() {
                    return g
                },
                _x: function() {
                    return h
                },
                cG: function() {
                    return w
                },
                oE: function() {
                    return O
                },
                sk: function() {
                    return i
                },
                to: function() {
                    return p
                }
            });
            var i = "undefined" == typeof window || "Deno" in globalThis;

            function r() {}

            function n(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function u(t) {
                return "number" == typeof t && t >= 0 && t !== 1 / 0
            }

            function o(t, e) {
                return Math.max(t + (e || 0) - Date.now(), 0)
            }

            function a(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function c(t, e) {
                return "function" == typeof t ? t(e) : t
            }

            function h(t, e) {
                let {
                    type: s = "all",
                    exact: i,
                    fetchStatus: r,
                    predicate: n,
                    queryKey: u,
                    stale: o
                } = t;
                if (u) {
                    if (i) {
                        if (e.queryHash !== d(u, e.options)) return !1
                    } else if (!p(e.queryKey, u)) return !1
                }
                if ("all" !== s) {
                    let t = e.isActive();
                    if ("active" === s && !t || "inactive" === s && t) return !1
                }
                return ("boolean" != typeof o || e.isStale() === o) && (!r || r === e.state.fetchStatus) && (!n || !!n(e))
            }

            function l(t, e) {
                let {
                    exact: s,
                    status: i,
                    predicate: r,
                    mutationKey: n
                } = t;
                if (n) {
                    if (!e.options.mutationKey) return !1;
                    if (s) {
                        if (f(e.options.mutationKey) !== f(n)) return !1
                    } else if (!p(e.options.mutationKey, n)) return !1
                }
                return (!i || e.state.status === i) && (!r || !!r(e))
            }

            function d(t, e) {
                let s = e ? .queryKeyHashFn || f;
                return s(t)
            }

            function f(t) {
                return JSON.stringify(t, (t, e) => m(e) ? Object.keys(e).sort().reduce((t, s) => (t[s] = e[s], t), {}) : e)
            }

            function p(t, e) {
                return t === e || typeof t == typeof e && !!t && !!e && "object" == typeof t && "object" == typeof e && !Object.keys(e).some(s => !p(t[s], e[s]))
            }

            function y(t, e) {
                if (t === e) return t;
                let s = b(t) && b(e);
                if (s || m(t) && m(e)) {
                    let i = s ? t : Object.keys(t),
                        r = i.length,
                        n = s ? e : Object.keys(e),
                        u = n.length,
                        o = s ? [] : {},
                        a = 0;
                    for (let r = 0; r < u; r++) {
                        let u = s ? r : n[r];
                        (!s && i.includes(u) || s) && void 0 === t[u] && void 0 === e[u] ? (o[u] = void 0, a++) : (o[u] = y(t[u], e[u]), o[u] === t[u] && void 0 !== t[u] && a++)
                    }
                    return r === u && a === r ? t : o
                }
                return e
            }

            function v(t, e) {
                if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
                for (let s in t)
                    if (t[s] !== e[s]) return !1;
                return !0
            }

            function b(t) {
                return Array.isArray(t) && t.length === Object.keys(t).length
            }

            function m(t) {
                if (!R(t)) return !1;
                let e = t.constructor;
                if (void 0 === e) return !0;
                let s = e.prototype;
                return !!(R(s) && s.hasOwnProperty("isPrototypeOf")) && Object.getPrototypeOf(t) === Object.prototype
            }

            function R(t) {
                return "[object Object]" === Object.prototype.toString.call(t)
            }

            function g(t) {
                return new Promise(e => {
                    setTimeout(e, t)
                })
            }

            function O(t, e, s) {
                return "function" == typeof s.structuralSharing ? s.structuralSharing(t, e) : !1 !== s.structuralSharing ? y(t, e) : e
            }

            function S(t, e, s = 0) {
                let i = [...t, e];
                return s && i.length > s ? i.slice(1) : i
            }

            function C(t, e, s = 0) {
                let i = [e, ...t];
                return s && i.length > s ? i.slice(0, -1) : i
            }
            var F = Symbol(),
                w = (t, e) => !t.queryFn && e ? .initialPromise ? () => e.initialPromise : t.queryFn && t.queryFn !== F ? t.queryFn : () => Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))
        },
        45350: function(t, e, s) {
            s.d(e, {
                NL: function() {
                    return u
                },
                aH: function() {
                    return o
                }
            });
            var i = s(78572),
                r = s(92284),
                n = i.createContext(void 0),
                u = t => {
                    let e = i.useContext(n);
                    if (t) return t;
                    if (!e) throw Error("No QueryClient set, use QueryClientProvider to set one");
                    return e
                },
                o = ({
                    client: t,
                    children: e
                }) => (i.useEffect(() => (t.mount(), () => {
                    t.unmount()
                }), [t]), (0, r.jsx)(n.Provider, {
                    value: t,
                    children: e
                }))
        },
        98237: function(t, e, s) {
            let i;
            s.d(e, {
                a: function() {
                    return E
                }
            });
            var r = s(7734),
                n = s(61489),
                u = s(91867),
                o = s(53137),
                a = s(14159),
                c = class extends o.l {
                    constructor(t, e) {
                        super(), this.options = e, this.#d = t, this.#f = null, this.bindMethods(), this.setOptions(e)
                    }#
                    d;#
                    p = void 0;#
                    y = void 0;#
                    v = void 0;#
                    b;#
                    m;#
                    f;#
                    R;#
                    g;#
                    O;#
                    S;#
                    C;#
                    F;#
                    w = new Set;
                    bindMethods() {
                        this.refetch = this.refetch.bind(this)
                    }
                    onSubscribe() {
                        1 === this.listeners.size && (this.#p.addObserver(this), h(this.#p, this.options) ? this.#Q() : this.updateResult(), this.#E())
                    }
                    onUnsubscribe() {
                        this.hasListeners() || this.destroy()
                    }
                    shouldFetchOnReconnect() {
                        return l(this.#p, this.options, this.options.refetchOnReconnect)
                    }
                    shouldFetchOnWindowFocus() {
                        return l(this.#p, this.options, this.options.refetchOnWindowFocus)
                    }
                    destroy() {
                        this.listeners = new Set, this.#T(), this.#I(), this.#p.removeObserver(this)
                    }
                    setOptions(t, e) {
                        let s = this.options,
                            i = this.#p;
                        if (this.options = this.#d.defaultQueryOptions(t), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled && "function" != typeof this.options.enabled && "boolean" != typeof(0, r.Nc)(this.options.enabled, this.#p)) throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
                        this.#D(), this.#p.setOptions(this.options), s._defaulted && !(0, r.VS)(this.options, s) && this.#d.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.#p,
                            observer: this
                        });
                        let n = this.hasListeners();
                        n && d(this.#p, i, this.options, s) && this.#Q(), this.updateResult(e), n && (this.#p !== i || (0, r.Nc)(this.options.enabled, this.#p) !== (0, r.Nc)(s.enabled, this.#p) || (0, r.KC)(this.options.staleTime, this.#p) !== (0, r.KC)(s.staleTime, this.#p)) && this.#U();
                        let u = this.#k();
                        n && (this.#p !== i || (0, r.Nc)(this.options.enabled, this.#p) !== (0, r.Nc)(s.enabled, this.#p) || u !== this.#F) && this.#P(u)
                    }
                    getOptimisticResult(t) {
                        let e = this.#d.getQueryCache().build(this.#d, t),
                            s = this.createResult(e, t);
                        return (0, r.VS)(this.getCurrentResult(), s) || (this.#v = s, this.#m = this.options, this.#b = this.#p.state), s
                    }
                    getCurrentResult() {
                        return this.#v
                    }
                    trackResult(t, e) {
                        let s = {};
                        return Object.keys(t).forEach(i => {
                            Object.defineProperty(s, i, {
                                configurable: !1,
                                enumerable: !0,
                                get: () => (this.trackProp(i), e ? .(i), t[i])
                            })
                        }), s
                    }
                    trackProp(t) {
                        this.#w.add(t)
                    }
                    getCurrentQuery() {
                        return this.#p
                    }
                    refetch({ ...t
                    } = {}) {
                        return this.fetch({ ...t
                        })
                    }
                    fetchOptimistic(t) {
                        let e = this.#d.defaultQueryOptions(t),
                            s = this.#d.getQueryCache().build(this.#d, e);
                        return s.isFetchingOptimistic = !0, s.fetch().then(() => this.createResult(s, e))
                    }
                    fetch(t) {
                        return this.#Q({ ...t,
                            cancelRefetch: t.cancelRefetch ? ? !0
                        }).then(() => (this.updateResult(), this.#v))
                    }#
                    Q(t) {
                        this.#D();
                        let e = this.#p.fetch(this.options, t);
                        return t ? .throwOnError || (e = e.catch(r.ZT)), e
                    }#
                    U() {
                        this.#T();
                        let t = (0, r.KC)(this.options.staleTime, this.#p);
                        if (r.sk || this.#v.isStale || !(0, r.PN)(t)) return;
                        let e = (0, r.Kp)(this.#v.dataUpdatedAt, t);
                        this.#S = setTimeout(() => {
                            this.#v.isStale || this.updateResult()
                        }, e + 1)
                    }#
                    k() {
                        return ("function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.#p) : this.options.refetchInterval) ? ? !1
                    }#
                    P(t) {
                        this.#I(), this.#F = t, !r.sk && !1 !== (0, r.Nc)(this.options.enabled, this.#p) && (0, r.PN)(this.#F) && 0 !== this.#F && (this.#C = setInterval(() => {
                            (this.options.refetchIntervalInBackground || u.j.isFocused()) && this.#Q()
                        }, this.#F))
                    }#
                    E() {
                        this.#U(), this.#P(this.#k())
                    }#
                    T() {
                        this.#S && (clearTimeout(this.#S), this.#S = void 0)
                    }#
                    I() {
                        this.#C && (clearInterval(this.#C), this.#C = void 0)
                    }
                    createResult(t, e) {
                        let s;
                        let i = this.#p,
                            n = this.options,
                            u = this.#v,
                            o = this.#b,
                            c = this.#m,
                            l = t !== i,
                            p = l ? t.state : this.#y,
                            {
                                state: y
                            } = t,
                            v = { ...y
                            },
                            b = !1;
                        if (e._optimisticResults) {
                            let s = this.hasListeners(),
                                r = !s && h(t, e),
                                u = s && d(t, i, e, n);
                            (r || u) && (v = { ...v,
                                ...(0, a.z)(y.data, t.options)
                            }), "isRestoring" === e._optimisticResults && (v.fetchStatus = "idle")
                        }
                        let {
                            error: m,
                            errorUpdatedAt: R,
                            status: g
                        } = v;
                        if (e.select && void 0 !== v.data) {
                            if (u && v.data === o ? .data && e.select === this.#R) s = this.#g;
                            else try {
                                this.#R = e.select, s = e.select(v.data), s = (0, r.oE)(u ? .data, s, e), this.#g = s, this.#f = null
                            } catch (t) {
                                this.#f = t
                            }
                        } else s = v.data;
                        if (void 0 !== e.placeholderData && void 0 === s && "pending" === g) {
                            let t;
                            if (u ? .isPlaceholderData && e.placeholderData === c ? .placeholderData) t = u.data;
                            else if (t = "function" == typeof e.placeholderData ? e.placeholderData(this.#O ? .state.data, this.#O) : e.placeholderData, e.select && void 0 !== t) try {
                                t = e.select(t), this.#f = null
                            } catch (t) {
                                this.#f = t
                            }
                            void 0 !== t && (g = "success", s = (0, r.oE)(u ? .data, t, e), b = !0)
                        }
                        this.#f && (m = this.#f, s = this.#g, R = Date.now(), g = "error");
                        let O = "fetching" === v.fetchStatus,
                            S = "pending" === g,
                            C = "error" === g,
                            F = S && O,
                            w = void 0 !== s,
                            Q = {
                                status: g,
                                fetchStatus: v.fetchStatus,
                                isPending: S,
                                isSuccess: "success" === g,
                                isError: C,
                                isInitialLoading: F,
                                isLoading: F,
                                data: s,
                                dataUpdatedAt: v.dataUpdatedAt,
                                error: m,
                                errorUpdatedAt: R,
                                failureCount: v.fetchFailureCount,
                                failureReason: v.fetchFailureReason,
                                errorUpdateCount: v.errorUpdateCount,
                                isFetched: v.dataUpdateCount > 0 || v.errorUpdateCount > 0,
                                isFetchedAfterMount: v.dataUpdateCount > p.dataUpdateCount || v.errorUpdateCount > p.errorUpdateCount,
                                isFetching: O,
                                isRefetching: O && !S,
                                isLoadingError: C && !w,
                                isPaused: "paused" === v.fetchStatus,
                                isPlaceholderData: b,
                                isRefetchError: C && w,
                                isStale: f(t, e),
                                refetch: this.refetch
                            };
                        return Q
                    }
                    updateResult(t) {
                        let e = this.#v,
                            s = this.createResult(this.#p, this.options);
                        if (this.#b = this.#p.state, this.#m = this.options, void 0 !== this.#b.data && (this.#O = this.#p), (0, r.VS)(s, e)) return;
                        this.#v = s;
                        let i = {};
                        t ? .listeners !== !1 && (() => {
                            if (!e) return !0;
                            let {
                                notifyOnChangeProps: t
                            } = this.options, s = "function" == typeof t ? t() : t;
                            if ("all" === s || !s && !this.#w.size) return !0;
                            let i = new Set(s ? ? this.#w);
                            return this.options.throwOnError && i.add("error"), Object.keys(this.#v).some(t => {
                                let s = this.#v[t] !== e[t];
                                return s && i.has(t)
                            })
                        })() && (i.listeners = !0), this.#q({ ...i,
                            ...t
                        })
                    }#
                    D() {
                        let t = this.#d.getQueryCache().build(this.#d, this.options);
                        if (t === this.#p) return;
                        let e = this.#p;
                        this.#p = t, this.#y = t.state, this.hasListeners() && (e ? .removeObserver(this), t.addObserver(this))
                    }
                    onQueryUpdate() {
                        this.updateResult(), this.hasListeners() && this.#E()
                    }#
                    q(t) {
                        n.V.batch(() => {
                            t.listeners && this.listeners.forEach(t => {
                                t(this.#v)
                            }), this.#d.getQueryCache().notify({
                                query: this.#p,
                                type: "observerResultsUpdated"
                            })
                        })
                    }
                };

            function h(t, e) {
                return !1 !== (0, r.Nc)(e.enabled, t) && void 0 === t.state.data && !("error" === t.state.status && !1 === e.retryOnMount) || void 0 !== t.state.data && l(t, e, e.refetchOnMount)
            }

            function l(t, e, s) {
                if (!1 !== (0, r.Nc)(e.enabled, t)) {
                    let i = "function" == typeof s ? s(t) : s;
                    return "always" === i || !1 !== i && f(t, e)
                }
                return !1
            }

            function d(t, e, s, i) {
                return (t !== e || !1 === (0, r.Nc)(i.enabled, t)) && (!s.suspense || "error" !== t.state.status) && f(t, s)
            }

            function f(t, e) {
                return !1 !== (0, r.Nc)(e.enabled, t) && t.isStaleByTime((0, r.KC)(e.staleTime, t))
            }
            var p = s(78572);
            s(92284);
            var y = p.createContext((i = !1, {
                    clearReset: () => {
                        i = !1
                    },
                    reset: () => {
                        i = !0
                    },
                    isReset: () => i
                })),
                v = () => p.useContext(y),
                b = s(45350),
                m = p.createContext(!1),
                R = () => p.useContext(m);
            m.Provider;
            var g = s(79315),
                O = (t, e) => {
                    (t.suspense || t.throwOnError) && !e.isReset() && (t.retryOnMount = !1)
                },
                S = t => {
                    p.useEffect(() => {
                        t.clearReset()
                    }, [t])
                },
                C = ({
                    result: t,
                    errorResetBoundary: e,
                    throwOnError: s,
                    query: i
                }) => t.isError && !e.isReset() && !t.isFetching && i && (0, g.L)(s, [t.error, i]),
                F = t => {
                    t.suspense && "number" != typeof t.staleTime && (t.staleTime = 1e3)
                },
                w = (t, e) => t ? .suspense && e.isPending,
                Q = (t, e, s) => e.fetchOptimistic(t).catch(() => {
                    s.clearReset()
                });

            function E(t, e) {
                return function(t, e, s) {
                    let i = (0, b.NL)(s),
                        r = R(),
                        u = v(),
                        o = i.defaultQueryOptions(t);
                    i.getDefaultOptions().queries ? ._experimental_beforeQuery ? .(o), o._optimisticResults = r ? "isRestoring" : "optimistic", F(o), O(o, u), S(u);
                    let [a] = p.useState(() => new e(i, o)), c = a.getOptimisticResult(o);
                    if (p.useSyncExternalStore(p.useCallback(t => {
                            let e = r ? () => void 0 : a.subscribe(n.V.batchCalls(t));
                            return a.updateResult(), e
                        }, [a, r]), () => a.getCurrentResult(), () => a.getCurrentResult()), p.useEffect(() => {
                            a.setOptions(o, {
                                listeners: !1
                            })
                        }, [o, a]), w(o, c)) throw Q(o, a, u);
                    if (C({
                            result: c,
                            errorResetBoundary: u,
                            throwOnError: o.throwOnError,
                            query: i.getQueryCache().get(o.queryHash)
                        })) throw c.error;
                    return i.getDefaultOptions().queries ? ._experimental_afterQuery ? .(o, c), o.notifyOnChangeProps ? c : a.trackResult(c)
                }(t, c, e)
            }
        },
        79315: function(t, e, s) {
            function i(t, e) {
                return "function" == typeof t ? t(...e) : !!t
            }

            function r() {}
            s.d(e, {
                L: function() {
                    return i
                },
                Z: function() {
                    return r
                }
            })
        }
    }
]);