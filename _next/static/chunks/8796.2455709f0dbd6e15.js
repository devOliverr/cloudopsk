(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8796], {
        35459: function(e, t, r) {
            "use strict";
            var s = this && this.__rest || function(e, t) {
                    var r = {};
                    for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && 0 > t.indexOf(s) && (r[s] = e[s]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var n = 0, s = Object.getOwnPropertySymbols(e); n < s.length; n++) 0 > t.indexOf(s[n]) && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (r[s[n]] = e[s[n]]);
                    return r
                },
                n = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CoinbaseWalletProvider = void 0;
            let i = n(r(71100)),
                a = r(90250),
                o = r(23301),
                d = r(93239),
                c = r(48967),
                l = r(58271),
                h = r(20135),
                u = r(29337),
                p = r(81657),
                g = r(80874);
            class m extends i.default {
                constructor(e) {
                    var t, r, {
                            metadata: n
                        } = e,
                        i = e.preference,
                        {
                            keysUrl: o
                        } = i,
                        p = s(i, ["keysUrl"]);
                    super(), this.accounts = [], this.handlers = {
                        handshake: async e => {
                            try {
                                if (this.connected) return this.emit("connect", {
                                    chainId: (0, c.hexStringFromIntNumber)((0, d.IntNumber)(this.chain.id))
                                }), this.accounts;
                                let e = await this.requestSignerSelection(),
                                    t = this.initSigner(e),
                                    r = await t.handshake();
                                return this.signer = t, (0, l.storeSignerType)(e), this.emit("connect", {
                                    chainId: (0, c.hexStringFromIntNumber)((0, d.IntNumber)(this.chain.id))
                                }), r
                            } catch (e) {
                                throw this.handleUnauthorizedError(e), e
                            }
                        },
                        sign: async e => {
                            if (!this.connected || !this.signer) throw a.standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods");
                            try {
                                return await this.signer.request(e)
                            } catch (e) {
                                throw this.handleUnauthorizedError(e), e
                            }
                        },
                        fetch: e => (0, h.fetchRPCRequest)(e, this.chain),
                        state: e => {
                            let t = () => {
                                if (this.connected) return this.accounts;
                                throw a.standardErrors.provider.unauthorized("Must call 'eth_requestAccounts' before other methods")
                            };
                            switch (e.method) {
                                case "eth_chainId":
                                    return (0, c.hexStringFromIntNumber)((0, d.IntNumber)(this.chain.id));
                                case "net_version":
                                    return this.chain.id;
                                case "eth_accounts":
                                    return t();
                                case "eth_coinbase":
                                    return t()[0];
                                default:
                                    return this.handlers.unsupported(e)
                            }
                        },
                        deprecated: ({
                            method: e
                        }) => {
                            throw a.standardErrors.rpc.methodNotSupported(`Method ${e} is deprecated.`)
                        },
                        unsupported: ({
                            method: e
                        }) => {
                            throw a.standardErrors.rpc.methodNotSupported(`Method ${e} is not supported.`)
                        }
                    }, this.isCoinbaseWallet = !0, this.updateListener = {
                        onAccountsUpdate: ({
                            accounts: e,
                            source: t
                        }) => {
                            (0, c.areAddressArraysEqual)(this.accounts, e) || (this.accounts = e, "storage" !== t && this.emit("accountsChanged", this.accounts))
                        },
                        onChainUpdate: ({
                            chain: e,
                            source: t
                        }) => {
                            (e.id !== this.chain.id || e.rpcUrl !== this.chain.rpcUrl) && (this.chain = e, "storage" !== t && this.emit("chainChanged", (0, c.hexStringFromIntNumber)((0, d.IntNumber)(e.id))))
                        }
                    }, this.metadata = n, this.preference = p, this.communicator = new u.Communicator(o), this.chain = {
                        id: null !== (r = null === (t = n.appChainIds) || void 0 === t ? void 0 : t[0]) && void 0 !== r ? r : 1
                    };
                    let g = (0, l.loadSignerType)();
                    this.signer = g ? this.initSigner(g) : null
                }
                get connected() {
                    return this.accounts.length > 0
                }
                async request(e) {
                    var t;
                    try {
                        let r = (0, h.checkErrorForInvalidRequestArgs)(e);
                        if (r) throw r;
                        let s = null !== (t = (0, p.determineMethodCategory)(e.method)) && void 0 !== t ? t : "fetch";
                        return this.handlers[s](e)
                    } catch (t) {
                        return Promise.reject((0, o.serializeError)(t, e.method))
                    }
                }
                handleUnauthorizedError(e) {
                    e.code === a.standardErrorCodes.provider.unauthorized && this.disconnect()
                }
                async enable() {
                    return console.warn('.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async disconnect() {
                    this.accounts = [], this.chain = {
                        id: 1
                    }, g.ScopedLocalStorage.clearAll(), this.emit("disconnect", a.standardErrors.provider.disconnected("User initiated disconnection"))
                }
                requestSignerSelection() {
                    return (0, l.fetchSignerType)({
                        communicator: this.communicator,
                        preference: this.preference,
                        metadata: this.metadata
                    })
                }
                initSigner(e) {
                    return (0, l.createSigner)({
                        signerType: e,
                        metadata: this.metadata,
                        communicator: this.communicator,
                        updateListener: this.updateListener
                    })
                }
            }
            t.CoinbaseWalletProvider = m
        },
        76643: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CoinbaseWalletSDK = void 0;
            let s = r(51889),
                n = r(35459),
                i = r(80874),
                a = r(44794),
                o = r(48967),
                d = r(20135);
            class c {
                constructor(e) {
                    this.metadata = {
                        appName: e.appName || "Dapp",
                        appLogoUrl: e.appLogoUrl || (0, o.getFavicon)(),
                        appChainIds: e.appChainIds || []
                    }, this.storeLatestVersion()
                }
                makeWeb3Provider(e = {
                    options: "all"
                }) {
                    var t;
                    let r = {
                        metadata: this.metadata,
                        preference: e
                    };
                    return null !== (t = (0, d.getCoinbaseInjectedProvider)(r)) && void 0 !== t ? t : new n.CoinbaseWalletProvider(r)
                }
                getCoinbaseWalletLogo(e, t = 240) {
                    return (0, s.walletLogo)(e, t)
                }
                storeLatestVersion() {
                    let e = new i.ScopedLocalStorage("CBWSDK");
                    e.setItem("VERSION", a.LIB_VERSION)
                }
            }
            t.CoinbaseWalletSDK = c
        },
        51889: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.walletLogo = void 0, t.walletLogo = (e, t) => {
                let r;
                switch (e) {
                    case "standard":
                    default:
                        return r = t, `data:image/svg+xml,%3Csvg width='${t}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
                    case "circle":
                        return r = t, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${t}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
                    case "text":
                        return r = (.1 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
                    case "textWithLogo":
                        return r = (.25 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
                    case "textLight":
                        return r = (.1 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
                    case "textWithLogoLight":
                        return r = (.25 * t).toFixed(2), `data:image/svg+xml,%3Csvg width='${t}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
                }
            }
        },
        29337: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Communicator = void 0;
            let s = r(44794),
                n = r(65086),
                i = r(36815),
                a = r(90250);
            class o {
                constructor(e = i.CB_KEYS_URL) {
                    this.popup = null, this.listeners = new Map, this.postMessage = async e => {
                        let t = await this.waitForPopupLoaded();
                        t.postMessage(e, this.url.origin)
                    }, this.postRequestAndWaitForResponse = async e => {
                        let t = this.onMessage(({
                            requestId: t
                        }) => t === e.id);
                        return this.postMessage(e), await t
                    }, this.onMessage = async e => new Promise((t, r) => {
                        let s = r => {
                            if (r.origin !== this.url.origin) return;
                            let n = r.data;
                            e(n) && (t(n), window.removeEventListener("message", s), this.listeners.delete(s))
                        };
                        window.addEventListener("message", s), this.listeners.set(s, {
                            reject: r
                        })
                    }), this.disconnect = () => {
                        (0, n.closePopup)(this.popup), this.popup = null, this.listeners.forEach(({
                            reject: e
                        }, t) => {
                            e(a.standardErrors.provider.userRejectedRequest("Request rejected")), window.removeEventListener("message", t)
                        }), this.listeners.clear()
                    }, this.waitForPopupLoaded = async () => this.popup && !this.popup.closed ? (this.popup.focus(), this.popup) : (this.popup = (0, n.openPopup)(this.url), this.onMessage(({
                        event: e
                    }) => "PopupUnload" === e).then(this.disconnect).catch(() => {}), this.onMessage(({
                        event: e
                    }) => "PopupLoaded" === e).then(e => {
                        this.postMessage({
                            requestId: e.id,
                            data: {
                                version: s.LIB_VERSION
                            }
                        })
                    }).then(() => {
                        if (!this.popup) throw a.standardErrors.rpc.internal();
                        return this.popup
                    })), this.url = new URL(e)
                }
            }
            t.Communicator = o
        },
        65086: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.closePopup = t.openPopup = void 0;
            let s = r(90250);
            t.openPopup = function(e) {
                let t = (window.innerWidth - 420) / 2 + window.screenX,
                    r = (window.innerHeight - 540) / 2 + window.screenY,
                    n = window.open(e, "Smart Wallet", `width=420, height=540, left=${t}, top=${r}`);
                if (null == n || n.focus(), !n) throw s.standardErrors.rpc.internal("Pop up window failed to open");
                return n
            }, t.closePopup = function(e) {
                e && !e.closed && e.close()
            }
        },
        36815: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.CBW_MOBILE_DEEPLINK_URL = t.WALLETLINK_URL = t.CB_KEYS_URL = void 0, t.CB_KEYS_URL = "https://keys.coinbase.com/connect", t.WALLETLINK_URL = "https://www.walletlink.org", t.CBW_MOBILE_DEEPLINK_URL = "https://go.cb-w.com/walletlink"
        },
        99027: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.errorValues = t.standardErrorCodes = void 0, t.standardErrorCodes = {
                rpc: {
                    invalidInput: -32e3,
                    resourceNotFound: -32001,
                    resourceUnavailable: -32002,
                    transactionRejected: -32003,
                    methodNotSupported: -32004,
                    limitExceeded: -32005,
                    parse: -32700,
                    invalidRequest: -32600,
                    methodNotFound: -32601,
                    invalidParams: -32602,
                    internal: -32603
                },
                provider: {
                    userRejectedRequest: 4001,
                    unauthorized: 4100,
                    unsupportedMethod: 4200,
                    disconnected: 4900,
                    chainDisconnected: 4901,
                    unsupportedChain: 4902
                }
            }, t.errorValues = {
                "-32700": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                },
                "-32600": {
                    standard: "JSON RPC 2.0",
                    message: "The JSON sent is not a valid Request object."
                },
                "-32601": {
                    standard: "JSON RPC 2.0",
                    message: "The method does not exist / is not available."
                },
                "-32602": {
                    standard: "JSON RPC 2.0",
                    message: "Invalid method parameter(s)."
                },
                "-32603": {
                    standard: "JSON RPC 2.0",
                    message: "Internal JSON-RPC error."
                },
                "-32000": {
                    standard: "EIP-1474",
                    message: "Invalid input."
                },
                "-32001": {
                    standard: "EIP-1474",
                    message: "Resource not found."
                },
                "-32002": {
                    standard: "EIP-1474",
                    message: "Resource unavailable."
                },
                "-32003": {
                    standard: "EIP-1474",
                    message: "Transaction rejected."
                },
                "-32004": {
                    standard: "EIP-1474",
                    message: "Method not supported."
                },
                "-32005": {
                    standard: "EIP-1474",
                    message: "Request limit exceeded."
                },
                4001: {
                    standard: "EIP-1193",
                    message: "User rejected the request."
                },
                4100: {
                    standard: "EIP-1193",
                    message: "The requested account and/or method has not been authorized by the user."
                },
                4200: {
                    standard: "EIP-1193",
                    message: "The requested method is not supported by this Ethereum provider."
                },
                4900: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from all chains."
                },
                4901: {
                    standard: "EIP-1193",
                    message: "The provider is disconnected from the specified chain."
                },
                4902: {
                    standard: "EIP-3085",
                    message: "Unrecognized chain ID."
                }
            }
        },
        6872: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.standardErrors = void 0;
            let s = r(99027),
                n = r(4778);

            function i(e, t) {
                let [r, s] = o(t);
                return new d(e, r || (0, n.getMessageFromCode)(e), s)
            }

            function a(e, t) {
                let [r, s] = o(t);
                return new c(e, r || (0, n.getMessageFromCode)(e), s)
            }

            function o(e) {
                if (e) {
                    if ("string" == typeof e) return [e];
                    if ("object" == typeof e && !Array.isArray(e)) {
                        let {
                            message: t,
                            data: r
                        } = e;
                        if (t && "string" != typeof t) throw Error("Must specify string message.");
                        return [t || void 0, r]
                    }
                }
                return []
            }
            t.standardErrors = {
                rpc: {
                    parse: e => i(s.standardErrorCodes.rpc.parse, e),
                    invalidRequest: e => i(s.standardErrorCodes.rpc.invalidRequest, e),
                    invalidParams: e => i(s.standardErrorCodes.rpc.invalidParams, e),
                    methodNotFound: e => i(s.standardErrorCodes.rpc.methodNotFound, e),
                    internal: e => i(s.standardErrorCodes.rpc.internal, e),
                    server: e => {
                        if (!e || "object" != typeof e || Array.isArray(e)) throw Error("Ethereum RPC Server errors must provide single object argument.");
                        let {
                            code: t
                        } = e;
                        if (!Number.isInteger(t) || t > -32005 || t < -32099) throw Error('"code" must be an integer such that: -32099 <= code <= -32005');
                        return i(t, e)
                    },
                    invalidInput: e => i(s.standardErrorCodes.rpc.invalidInput, e),
                    resourceNotFound: e => i(s.standardErrorCodes.rpc.resourceNotFound, e),
                    resourceUnavailable: e => i(s.standardErrorCodes.rpc.resourceUnavailable, e),
                    transactionRejected: e => i(s.standardErrorCodes.rpc.transactionRejected, e),
                    methodNotSupported: e => i(s.standardErrorCodes.rpc.methodNotSupported, e),
                    limitExceeded: e => i(s.standardErrorCodes.rpc.limitExceeded, e)
                },
                provider: {
                    userRejectedRequest: e => a(s.standardErrorCodes.provider.userRejectedRequest, e),
                    unauthorized: e => a(s.standardErrorCodes.provider.unauthorized, e),
                    unsupportedMethod: e => a(s.standardErrorCodes.provider.unsupportedMethod, e),
                    disconnected: e => a(s.standardErrorCodes.provider.disconnected, e),
                    chainDisconnected: e => a(s.standardErrorCodes.provider.chainDisconnected, e),
                    unsupportedChain: e => a(s.standardErrorCodes.provider.unsupportedChain, e),
                    custom: e => {
                        if (!e || "object" != typeof e || Array.isArray(e)) throw Error("Ethereum Provider custom errors must provide single object argument.");
                        let {
                            code: t,
                            message: r,
                            data: s
                        } = e;
                        if (!r || "string" != typeof r) throw Error('"message" must be a nonempty string');
                        return new c(t, r, s)
                    }
                }
            };
            class d extends Error {
                constructor(e, t, r) {
                    if (!Number.isInteger(e)) throw Error('"code" must be an integer.');
                    if (!t || "string" != typeof t) throw Error('"message" must be a nonempty string.');
                    super(t), this.code = e, void 0 !== r && (this.data = r)
                }
            }
            class c extends d {
                constructor(e, t, r) {
                    if (!(Number.isInteger(e) && e >= 1e3 && e <= 4999)) throw Error('"code" must be an integer such that: 1000 <= code <= 4999');
                    super(e, t, r)
                }
            }
        },
        90250: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.standardErrors = t.standardErrorCodes = void 0;
            var s = r(99027);
            Object.defineProperty(t, "standardErrorCodes", {
                enumerable: !0,
                get: function() {
                    return s.standardErrorCodes
                }
            });
            var n = r(6872);
            Object.defineProperty(t, "standardErrors", {
                enumerable: !0,
                get: function() {
                    return n.standardErrors
                }
            })
        },
        23301: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.serializeError = void 0;
            let s = r(98043),
                n = r(44794),
                i = r(99027),
                a = r(4778);
            t.serializeError = function(e, t) {
                let r = (0, a.serialize)("string" == typeof e ? {
                        message: e,
                        code: i.standardErrorCodes.rpc.internal
                    } : (0, s.isErrorResponse)(e) ? Object.assign(Object.assign({}, e), {
                        message: e.errorMessage,
                        code: e.errorCode,
                        data: {
                            method: e.method
                        }
                    }) : e, {
                        shouldIncludeStack: !0
                    }),
                    o = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
                o.searchParams.set("version", n.LIB_VERSION), o.searchParams.set("code", r.code.toString());
                let d = function(e, t) {
                    let r = null == e ? void 0 : e.method;
                    if (r) return r;
                    if (void 0 === t);
                    else if ("string" == typeof t) return t;
                    else if (!Array.isArray(t)) return t.method;
                    else if (t.length > 0) return t[0].method
                }(r.data, t);
                return d && o.searchParams.set("method", d), o.searchParams.set("message", r.message), Object.assign(Object.assign({}, r), {
                    docUrl: o.href
                })
            }
        },
        4778: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.serialize = t.getErrorCode = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
            let s = r(99027),
                n = "Unspecified error message.";

            function i(e, r = n) {
                if (e && Number.isInteger(e)) {
                    let r = e.toString();
                    if (d(s.errorValues, r)) return s.errorValues[r].message;
                    if (e >= -32099 && e <= -32e3) return t.JSON_RPC_SERVER_ERROR_MESSAGE
                }
                return r
            }

            function a(e) {
                if (!Number.isInteger(e)) return !1;
                let t = e.toString();
                return !!(s.errorValues[t] || e >= -32099 && e <= -32e3)
            }

            function o(e) {
                return e && "object" == typeof e && !Array.isArray(e) ? Object.assign({}, e) : e
            }

            function d(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function c(e, t) {
                return "object" == typeof e && null !== e && t in e && "string" == typeof e[t]
            }
            t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", t.getMessageFromCode = i, t.isValidCode = a, t.getErrorCode = function(e) {
                var t;
                return "number" == typeof e ? e : "object" == typeof e && null !== e && ("number" == typeof e.code || "number" == typeof e.errorCode) ? null !== (t = e.code) && void 0 !== t ? t : e.errorCode : void 0
            }, t.serialize = function(e, {
                shouldIncludeStack: t = !1
            } = {}) {
                let r = {};
                return e && "object" == typeof e && !Array.isArray(e) && d(e, "code") && a(e.code) ? (r.code = e.code, e.message && "string" == typeof e.message ? (r.message = e.message, d(e, "data") && (r.data = e.data)) : (r.message = i(r.code), r.data = {
                    originalError: o(e)
                })) : (r.code = s.standardErrorCodes.rpc.internal, r.message = c(e, "message") ? e.message : n, r.data = {
                    originalError: o(e)
                }), t && (r.stack = c(e, "stack") ? e.stack : void 0), r
            }
        },
        81657: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.determineMethodCategory = void 0;
            let r = {
                handshake: ["eth_requestAccounts"],
                sign: ["eth_ecRecover", "personal_sign", "personal_ecRecover", "eth_signTransaction", "eth_sendTransaction", "eth_signTypedData_v1", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_signTypedData", "wallet_addEthereumChain", "wallet_switchEthereumChain", "wallet_watchAsset", "wallet_getCapabilities", "wallet_sendCalls", "wallet_showCallsStatus"],
                state: ["eth_chainId", "eth_accounts", "eth_coinbase", "net_version"],
                deprecated: ["eth_sign", "eth_signTypedData_v2"],
                unsupported: ["eth_subscribe", "eth_unsubscribe"],
                fetch: []
            };
            t.determineMethodCategory = function(e) {
                for (let t in r)
                    if (r[t].includes(e)) return t
            }
        },
        93239: function(e, t) {
            "use strict";

            function r() {
                return e => e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RegExpString = t.IntNumber = t.BigIntString = t.AddressString = t.HexString = t.OpaqueType = void 0, t.OpaqueType = r, t.HexString = r(), t.AddressString = r(), t.BigIntString = r(), t.IntNumber = function(e) {
                return Math.floor(e)
            }, t.RegExpString = r()
        },
        48967: function(e, t, r) {
            "use strict";
            var s = r(61900).Buffer;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.areAddressArraysEqual = t.getFavicon = t.range = t.isBigNumber = t.ensureParsedJSONObject = t.ensureBigInt = t.ensureRegExpString = t.ensureIntNumber = t.ensureBuffer = t.ensureAddressString = t.ensureEvenLengthHexString = t.ensureHexString = t.isHexString = t.prepend0x = t.strip0x = t.has0xPrefix = t.hexStringFromIntNumber = t.intNumberFromHexString = t.bigIntStringFromBigInt = t.hexStringFromBuffer = t.hexStringToUint8Array = t.uint8ArrayToHex = t.randomBytesHex = void 0;
            let n = r(90250),
                i = r(93239),
                a = /^[0-9]*$/,
                o = /^[a-f0-9]*$/;

            function d(e) {
                return [...e].map(e => e.toString(16).padStart(2, "0")).join("")
            }

            function c(e) {
                return e.startsWith("0x") || e.startsWith("0X")
            }

            function l(e) {
                return c(e) ? e.slice(2) : e
            }

            function h(e) {
                return c(e) ? `0x${e.slice(2)}` : `0x${e}`
            }

            function u(e) {
                if ("string" != typeof e) return !1;
                let t = l(e).toLowerCase();
                return o.test(t)
            }

            function p(e, t = !1) {
                if ("string" == typeof e) {
                    let r = l(e).toLowerCase();
                    if (o.test(r)) return (0, i.HexString)(t ? `0x${r}` : r)
                }
                throw n.standardErrors.rpc.invalidParams(`"${String(e)}" is not a hexadecimal string`)
            }

            function g(e, t = !1) {
                let r = p(e, !1);
                return r.length % 2 == 1 && (r = (0, i.HexString)(`0${r}`)), t ? (0, i.HexString)(`0x${r}`) : r
            }

            function m(e) {
                if ("number" == typeof e && Number.isInteger(e)) return (0, i.IntNumber)(e);
                if ("string" == typeof e) {
                    if (a.test(e)) return (0, i.IntNumber)(Number(e));
                    if (u(e)) return (0, i.IntNumber)(Number(BigInt(g(e, !0))))
                }
                throw n.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
            }

            function f(e) {
                if (null == e || "function" != typeof e.constructor) return !1;
                let {
                    constructor: t
                } = e;
                return "function" == typeof t.config && "number" == typeof t.EUCLID
            }
            t.randomBytesHex = function(e) {
                return d(crypto.getRandomValues(new Uint8Array(e)))
            }, t.uint8ArrayToHex = d, t.hexStringToUint8Array = function(e) {
                return new Uint8Array(e.match(/.{1,2}/g).map(e => parseInt(e, 16)))
            }, t.hexStringFromBuffer = function(e, t = !1) {
                let r = e.toString("hex");
                return (0, i.HexString)(t ? `0x${r}` : r)
            }, t.bigIntStringFromBigInt = function(e) {
                return (0, i.BigIntString)(e.toString(10))
            }, t.intNumberFromHexString = function(e) {
                return (0, i.IntNumber)(Number(BigInt(g(e, !0))))
            }, t.hexStringFromIntNumber = function(e) {
                return (0, i.HexString)(`0x${BigInt(e).toString(16)}`)
            }, t.has0xPrefix = c, t.strip0x = l, t.prepend0x = h, t.isHexString = u, t.ensureHexString = p, t.ensureEvenLengthHexString = g, t.ensureAddressString = function(e) {
                if ("string" == typeof e) {
                    let t = l(e).toLowerCase();
                    if (u(t) && 40 === t.length) return (0, i.AddressString)(h(t))
                }
                throw n.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(e)}`)
            }, t.ensureBuffer = function(e) {
                if (s.isBuffer(e)) return e;
                if ("string" == typeof e) {
                    if (u(e)) {
                        let t = g(e, !1);
                        return s.from(t, "hex")
                    }
                    return s.from(e, "utf8")
                }
                throw n.standardErrors.rpc.invalidParams(`Not binary data: ${String(e)}`)
            }, t.ensureIntNumber = m, t.ensureRegExpString = function(e) {
                if (e instanceof RegExp) return (0, i.RegExpString)(e.toString());
                throw n.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(e)}`)
            }, t.ensureBigInt = function(e) {
                if (null !== e && ("bigint" == typeof e || f(e))) return BigInt(e.toString(10));
                if ("number" == typeof e) return BigInt(m(e));
                if ("string" == typeof e) {
                    if (a.test(e)) return BigInt(e);
                    if (u(e)) return BigInt(g(e, !0))
                }
                throw n.standardErrors.rpc.invalidParams(`Not an integer: ${String(e)}`)
            }, t.ensureParsedJSONObject = function(e) {
                if ("string" == typeof e) return JSON.parse(e);
                if ("object" == typeof e) return e;
                throw n.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(e)}`)
            }, t.isBigNumber = f, t.range = function(e, t) {
                return Array.from({
                    length: t - e
                }, (t, r) => e + r)
            }, t.getFavicon = function() {
                let e = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'),
                    {
                        protocol: t,
                        host: r
                    } = document.location,
                    s = e ? e.getAttribute("href") : null;
                return !s || s.startsWith("javascript:") || s.startsWith("vbscript:") ? null : s.startsWith("http://") || s.startsWith("https://") || s.startsWith("data:") ? s : s.startsWith("//") ? t + s : `${t}//${r}${s}`
            }, t.areAddressArraysEqual = function(e, t) {
                return e.length === t.length && e.every((e, r) => e === t[r])
            }
        },
        78796: function(e, t, r) {
            "use strict";
            let s = r(76643);
            t.default = s.CoinbaseWalletSDK, r(76643)
        },
        55349: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SCWKeyManager = void 0;
            let s = r(92325),
                n = r(80874),
                i = {
                    storageKey: "ownPrivateKey",
                    keyType: "private"
                },
                a = {
                    storageKey: "ownPublicKey",
                    keyType: "public"
                },
                o = {
                    storageKey: "peerPublicKey",
                    keyType: "public"
                };
            class d {
                constructor() {
                    this.storage = new n.ScopedLocalStorage("CBWSDK", "SCWKeyManager"), this.ownPrivateKey = null, this.ownPublicKey = null, this.peerPublicKey = null, this.sharedSecret = null
                }
                async getOwnPublicKey() {
                    return await this.loadKeysIfNeeded(), this.ownPublicKey
                }
                async getSharedSecret() {
                    return await this.loadKeysIfNeeded(), this.sharedSecret
                }
                async setPeerPublicKey(e) {
                    this.sharedSecret = null, this.peerPublicKey = e, await this.storeKey(o, e), await this.loadKeysIfNeeded()
                }
                async clear() {
                    this.ownPrivateKey = null, this.ownPublicKey = null, this.peerPublicKey = null, this.sharedSecret = null, this.storage.removeItem(a.storageKey), this.storage.removeItem(i.storageKey), this.storage.removeItem(o.storageKey)
                }
                async generateKeyPair() {
                    let e = await (0, s.generateKeyPair)();
                    this.ownPrivateKey = e.privateKey, this.ownPublicKey = e.publicKey, await this.storeKey(i, e.privateKey), await this.storeKey(a, e.publicKey)
                }
                async loadKeysIfNeeded() {
                    null === this.ownPrivateKey && (this.ownPrivateKey = await this.loadKey(i)), null === this.ownPublicKey && (this.ownPublicKey = await this.loadKey(a)), (null === this.ownPrivateKey || null === this.ownPublicKey) && await this.generateKeyPair(), null === this.peerPublicKey && (this.peerPublicKey = await this.loadKey(o)), null === this.sharedSecret && null !== this.ownPrivateKey && null !== this.peerPublicKey && (this.sharedSecret = await (0, s.deriveSharedSecret)(this.ownPrivateKey, this.peerPublicKey))
                }
                async loadKey(e) {
                    let t = this.storage.getItem(e.storageKey);
                    return t ? (0, s.importKeyFromHexString)(e.keyType, t) : null
                }
                async storeKey(e, t) {
                    let r = await (0, s.exportKeyToHexString)(e.keyType, t);
                    this.storage.setItem(e.storageKey, r)
                }
            }
            t.SCWKeyManager = d
        },
        59694: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SCWSigner = void 0;
            let s = r(55349),
                n = r(12617),
                i = r(90250),
                a = r(48967),
                o = r(92325);
            class d {
                constructor(e) {
                    this.metadata = e.metadata, this.communicator = e.communicator, this.keyManager = new s.SCWKeyManager, this.stateManager = new n.SCWStateManager({
                        appChainIds: this.metadata.appChainIds,
                        updateListener: e.updateListener
                    }), this.handshake = this.handshake.bind(this), this.request = this.request.bind(this), this.createRequestMessage = this.createRequestMessage.bind(this), this.decryptResponseMessage = this.decryptResponseMessage.bind(this)
                }
                async handshake() {
                    let e = await this.createRequestMessage({
                            handshake: {
                                method: "eth_requestAccounts",
                                params: this.metadata
                            }
                        }),
                        t = await this.communicator.postRequestAndWaitForResponse(e);
                    if ("failure" in t.content) throw t.content.failure;
                    let r = await (0, o.importKeyFromHexString)("public", t.sender);
                    await this.keyManager.setPeerPublicKey(r);
                    let s = await this.decryptResponseMessage(t);
                    this.updateInternalState({
                        method: "eth_requestAccounts"
                    }, s);
                    let n = s.result;
                    if ("error" in n) throw n.error;
                    return this.stateManager.accounts
                }
                async request(e) {
                    let t = this.tryLocalHandling(e);
                    if (void 0 !== t) {
                        if (t instanceof Error) throw t;
                        return t
                    }
                    await this.communicator.waitForPopupLoaded();
                    let r = await this.sendEncryptedRequest(e),
                        s = await this.decryptResponseMessage(r);
                    this.updateInternalState(e, s);
                    let n = s.result;
                    if ("error" in n) throw n.error;
                    return n.value
                }
                async disconnect() {
                    this.stateManager.clear(), await this.keyManager.clear()
                }
                tryLocalHandling(e) {
                    var t;
                    switch (e.method) {
                        case "wallet_switchEthereumChain":
                            {
                                let r = e.params;
                                if (!r || !(null === (t = r[0]) || void 0 === t ? void 0 : t.chainId)) throw i.standardErrors.rpc.invalidParams();
                                let s = (0, a.ensureIntNumber)(r[0].chainId),
                                    n = this.stateManager.switchChain(s);
                                return n ? null : void 0
                            }
                        case "wallet_getCapabilities":
                            {
                                let e = this.stateManager.walletCapabilities;
                                if (!e) throw i.standardErrors.provider.unauthorized("No wallet capabilities found, please disconnect and reconnect");
                                return e
                            }
                        default:
                            return
                    }
                }
                async sendEncryptedRequest(e) {
                    let t = await this.keyManager.getSharedSecret();
                    if (!t) throw i.standardErrors.provider.unauthorized("No valid session found, try requestAccounts before other methods");
                    let r = await (0, o.encryptContent)({
                            action: e,
                            chainId: this.stateManager.activeChain.id
                        }, t),
                        s = await this.createRequestMessage({
                            encrypted: r
                        });
                    return this.communicator.postRequestAndWaitForResponse(s)
                }
                async createRequestMessage(e) {
                    let t = await (0, o.exportKeyToHexString)("public", await this.keyManager.getOwnPublicKey());
                    return {
                        id: crypto.randomUUID(),
                        sender: t,
                        content: e,
                        timestamp: new Date
                    }
                }
                async decryptResponseMessage(e) {
                    let t = e.content;
                    if ("failure" in t) throw t.failure;
                    let r = await this.keyManager.getSharedSecret();
                    if (!r) throw i.standardErrors.provider.unauthorized("Invalid session");
                    return (0, o.decryptContent)(t.encrypted, r)
                }
                updateInternalState(e, t) {
                    var r, s;
                    let n = null === (r = t.data) || void 0 === r ? void 0 : r.chains;
                    n && this.stateManager.updateAvailableChains(n);
                    let i = null === (s = t.data) || void 0 === s ? void 0 : s.capabilities;
                    i && this.stateManager.updateWalletCapabilities(i);
                    let o = t.result;
                    if (!("error" in o)) switch (e.method) {
                        case "eth_requestAccounts":
                            {
                                let e = o.value;this.stateManager.updateAccounts(e);
                                break
                            }
                        case "wallet_switchEthereumChain":
                            {
                                if (null !== o.value) return;
                                let t = e.params,
                                    r = (0, a.ensureIntNumber)(t[0].chainId);this.stateManager.switchChain(r)
                            }
                    }
                }
            }
            t.SCWSigner = d
        },
        12617: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SCWStateManager = void 0;
            let s = r(80874),
                n = "accounts",
                i = "activeChain",
                a = "availableChains",
                o = "walletCapabilities";
            class d {
                get accounts() {
                    return this._accounts
                }
                get activeChain() {
                    return this._activeChain
                }
                get walletCapabilities() {
                    return this._walletCapabilities
                }
                constructor(e) {
                    var t, r;
                    this.storage = new s.ScopedLocalStorage("CBWSDK", "SCWStateManager"), this.updateListener = e.updateListener, this.availableChains = this.loadItemFromStorage(a), this._walletCapabilities = this.loadItemFromStorage(o);
                    let d = this.loadItemFromStorage(n),
                        c = this.loadItemFromStorage(i);
                    d && this.updateListener.onAccountsUpdate({
                        accounts: d,
                        source: "storage"
                    }), c && this.updateListener.onChainUpdate({
                        chain: c,
                        source: "storage"
                    }), this._accounts = d || [], this._activeChain = c || {
                        id: null !== (r = null === (t = e.appChainIds) || void 0 === t ? void 0 : t[0]) && void 0 !== r ? r : 1
                    }
                }
                updateAccounts(e) {
                    this._accounts = e, this.storeItemToStorage(n, e), this.updateListener.onAccountsUpdate({
                        accounts: e,
                        source: "wallet"
                    })
                }
                switchChain(e) {
                    var t;
                    let r = null === (t = this.availableChains) || void 0 === t ? void 0 : t.find(t => t.id === e);
                    return !!r && (r === this._activeChain || (this._activeChain = r, this.storeItemToStorage(i, r), this.updateListener.onChainUpdate({
                        chain: r,
                        source: "wallet"
                    }), !0))
                }
                updateAvailableChains(e) {
                    if (!e || 0 === Object.keys(e).length) return;
                    let t = Object.entries(e).map(([e, t]) => ({
                        id: Number(e),
                        rpcUrl: t
                    }));
                    this.availableChains = t, this.storeItemToStorage(a, t), this.switchChain(this._activeChain.id)
                }
                updateWalletCapabilities(e) {
                    this._walletCapabilities = e, this.storeItemToStorage(o, e)
                }
                storeItemToStorage(e, t) {
                    this.storage.setItem(e, JSON.stringify(t))
                }
                loadItemFromStorage(e) {
                    let t = this.storage.getItem(e);
                    return t ? JSON.parse(t) : void 0
                }
                clear() {
                    this.storage.clear()
                }
            }
            t.SCWStateManager = d
        },
        58271: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createSigner = t.fetchSignerType = t.storeSignerType = t.loadSignerType = void 0;
            let s = r(59694),
                n = r(55479),
                i = r(90250),
                a = r(20135),
                o = r(80874),
                d = "SignerType",
                c = new o.ScopedLocalStorage("CBWSDK", "SignerConfigurator");
            async function l(e) {
                let {
                    communicator: t,
                    metadata: r
                } = e;
                h(t, r).catch(() => {});
                let s = {
                        id: crypto.randomUUID(),
                        event: "selectSignerType",
                        data: e.preference
                    },
                    {
                        data: n
                    } = await t.postRequestAndWaitForResponse(s);
                return n
            }
            async function h(e, t) {
                await e.onMessage(({
                    event: e
                }) => "WalletLinkSessionRequest" === e);
                let r = new n.WalletLinkSigner({
                    metadata: t
                });
                e.postMessage({
                    event: "WalletLinkUpdate",
                    data: {
                        session: r.getSession()
                    }
                }), await r.handshake(), e.postMessage({
                    event: "WalletLinkUpdate",
                    data: {
                        connected: !0
                    }
                })
            }
            t.loadSignerType = function() {
                return c.getItem(d)
            }, t.storeSignerType = function(e) {
                c.setItem(d, e)
            }, t.fetchSignerType = l, t.createSigner = function(e) {
                let {
                    signerType: t,
                    metadata: r,
                    communicator: o,
                    updateListener: d
                } = e;
                switch (t) {
                    case "scw":
                        return new s.SCWSigner({
                            metadata: r,
                            updateListener: d,
                            communicator: o
                        });
                    case "walletlink":
                        return new n.WalletLinkSigner({
                            metadata: r,
                            updateListener: d
                        });
                    case "extension":
                        {
                            let e = (0, a.getCoinbaseInjectedSigner)();
                            if (!e) throw i.standardErrors.rpc.internal("injected signer not found");
                            return e
                        }
                }
            }
        },
        55479: function(e, t, r) {
            "use strict";
            var s = r(61900).Buffer,
                n = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkSigner = void 0;
            let i = n(r(6681)),
                a = r(54861),
                o = r(76237),
                d = r(98043),
                c = r(95643),
                l = r(36815),
                h = r(90250),
                u = r(48967),
                p = r(80874),
                g = "DefaultChainId",
                m = "DefaultJsonRpcUrl";
            class f {
                constructor(e) {
                    var t, r;
                    this._relay = null, this._addresses = [], this.hasMadeFirstChainChangedEmission = !1;
                    let {
                        appName: s,
                        appLogoUrl: n
                    } = e.metadata;
                    this._appName = s, this._appLogoUrl = n, this._storage = new p.ScopedLocalStorage("walletlink", l.WALLETLINK_URL), this.updateListener = e.updateListener, this._relayEventManager = new o.RelayEventManager, this._jsonRpcUrlFromOpts = "";
                    let i = this._storage.getItem(a.LOCAL_STORAGE_ADDRESSES_KEY);
                    if (i) {
                        let e = i.split(" ");
                        "" !== e[0] && (this._addresses = e.map(e => (0, u.ensureAddressString)(e)), null === (t = this.updateListener) || void 0 === t || t.onAccountsUpdate({
                            accounts: this._addresses,
                            source: "storage"
                        }))
                    }
                    let d = this._storage.getItem(g);
                    d && (null === (r = this.updateListener) || void 0 === r || r.onChainUpdate({
                        chain: {
                            id: this.getChainId(),
                            rpcUrl: this.jsonRpcUrl
                        },
                        source: "storage"
                    }), this.hasMadeFirstChainChangedEmission = !0), this.initializeRelay()
                }
                getSession() {
                    let e = this.initializeRelay(),
                        {
                            id: t,
                            secret: r
                        } = e.getWalletLinkSession();
                    return {
                        id: t,
                        secret: r
                    }
                }
                async handshake() {
                    let e = await this.request({
                        method: "eth_requestAccounts"
                    });
                    return e
                }
                get selectedAddress() {
                    return this._addresses[0] || void 0
                }
                get jsonRpcUrl() {
                    var e;
                    return null !== (e = this._storage.getItem(m)) && void 0 !== e ? e : this._jsonRpcUrlFromOpts
                }
                set jsonRpcUrl(e) {
                    this._storage.setItem(m, e)
                }
                updateProviderInfo(e, t) {
                    var r;
                    this.jsonRpcUrl = e;
                    let s = this.getChainId();
                    this._storage.setItem(g, t.toString(10));
                    let n = (0, u.ensureIntNumber)(t) !== s;
                    (n || !this.hasMadeFirstChainChangedEmission) && (null === (r = this.updateListener) || void 0 === r || r.onChainUpdate({
                        chain: {
                            id: t,
                            rpcUrl: e
                        },
                        source: "wallet"
                    }), this.hasMadeFirstChainChangedEmission = !0)
                }
                async watchAsset(e, t, r, s, n, i) {
                    let a = this.initializeRelay(),
                        o = await a.watchAsset(e, t, r, s, n, null == i ? void 0 : i.toString());
                    return !(0, d.isErrorResponse)(o) && !!o.result
                }
                async addEthereumChain(e, t, r, s, n, i) {
                    var a, o;
                    if ((0, u.ensureIntNumber)(e) === this.getChainId()) return !1;
                    let c = this.initializeRelay();
                    this._isAuthorized() || await c.requestEthereumAccounts();
                    let l = await c.addEthereumChain(e.toString(), t, n, r, s, i);
                    return !(0, d.isErrorResponse)(l) && ((null === (a = l.result) || void 0 === a ? void 0 : a.isApproved) === !0 && this.updateProviderInfo(t[0], e), (null === (o = l.result) || void 0 === o ? void 0 : o.isApproved) === !0)
                }
                async switchEthereumChain(e) {
                    let t = this.initializeRelay(),
                        r = await t.switchEthereumChain(e.toString(10), this.selectedAddress || void 0);
                    if ((0, d.isErrorResponse)(r)) {
                        if (!r.errorCode) return;
                        if (r.errorCode === h.standardErrorCodes.provider.unsupportedChain) throw h.standardErrors.provider.unsupportedChain();
                        throw h.standardErrors.provider.custom({
                            message: r.errorMessage,
                            code: r.errorCode
                        })
                    }
                    let s = r.result;
                    s.isApproved && s.rpcUrl.length > 0 && this.updateProviderInfo(s.rpcUrl, e)
                }
                async disconnect() {
                    this._relay && this._relay.resetAndReload(), this._storage.clear()
                }
                async request(e) {
                    try {
                        return this._request(e).catch(e => {
                            throw e
                        })
                    } catch (e) {
                        return Promise.reject(e)
                    }
                }
                async _request(e) {
                    if (!e || "object" != typeof e || Array.isArray(e)) throw h.standardErrors.rpc.invalidRequest({
                        message: "Expected a single, non-array, object argument.",
                        data: e
                    });
                    let {
                        method: t,
                        params: r
                    } = e;
                    if ("string" != typeof t || 0 === t.length) throw h.standardErrors.rpc.invalidRequest({
                        message: "'args.method' must be a non-empty string.",
                        data: e
                    });
                    if (void 0 !== r && !Array.isArray(r) && ("object" != typeof r || null === r)) throw h.standardErrors.rpc.invalidRequest({
                        message: "'args.params' must be an object or array if provided.",
                        data: e
                    });
                    let s = this._relayEventManager.makeRequestId(),
                        n = await this._sendRequestAsync({
                            method: t,
                            params: void 0 === r ? [] : r,
                            jsonrpc: "2.0",
                            id: s
                        });
                    return n.result
                }
                _setAddresses(e, t) {
                    var r;
                    if (!Array.isArray(e)) throw Error("addresses is not an array");
                    let s = e.map(e => (0, u.ensureAddressString)(e));
                    JSON.stringify(s) !== JSON.stringify(this._addresses) && (this._addresses = s, null === (r = this.updateListener) || void 0 === r || r.onAccountsUpdate({
                        accounts: s,
                        source: "wallet"
                    }), this._storage.setItem(a.LOCAL_STORAGE_ADDRESSES_KEY, s.join(" ")))
                }
                _sendRequestAsync(e) {
                    return new Promise((t, r) => {
                        try {
                            let r = this._handleSynchronousMethods(e);
                            if (void 0 !== r) return t({
                                jsonrpc: "2.0",
                                id: e.id,
                                result: r
                            })
                        } catch (e) {
                            return r(e)
                        }
                        this._handleAsynchronousMethods(e).then(r => r && t(Object.assign(Object.assign({}, r), {
                            id: e.id
                        }))).catch(e => r(e))
                    })
                }
                _handleSynchronousMethods(e) {
                    let {
                        method: t
                    } = e;
                    switch (t) {
                        case "eth_accounts":
                            return this._eth_accounts();
                        case "eth_coinbase":
                            return this._eth_coinbase();
                        case "net_version":
                            return this._net_version();
                        case "eth_chainId":
                            return this._eth_chainId();
                        default:
                            return
                    }
                }
                async _handleAsynchronousMethods(e) {
                    let {
                        method: t
                    } = e, r = e.params || [];
                    switch (t) {
                        case "eth_requestAccounts":
                            return this._eth_requestAccounts();
                        case "eth_sign":
                            return this._eth_sign(r);
                        case "eth_ecRecover":
                            return this._eth_ecRecover(r);
                        case "personal_sign":
                            return this._personal_sign(r);
                        case "personal_ecRecover":
                            return this._personal_ecRecover(r);
                        case "eth_signTransaction":
                            return this._eth_signTransaction(r);
                        case "eth_sendRawTransaction":
                            return this._eth_sendRawTransaction(r);
                        case "eth_sendTransaction":
                            return this._eth_sendTransaction(r);
                        case "eth_signTypedData_v1":
                            return this._eth_signTypedData_v1(r);
                        case "eth_signTypedData_v2":
                        default:
                            return this._throwUnsupportedMethodError();
                        case "eth_signTypedData_v3":
                            return this._eth_signTypedData_v3(r);
                        case "eth_signTypedData_v4":
                        case "eth_signTypedData":
                            return this._eth_signTypedData_v4(r);
                        case "wallet_addEthereumChain":
                            return this._wallet_addEthereumChain(r);
                        case "wallet_switchEthereumChain":
                            return this._wallet_switchEthereumChain(r);
                        case "wallet_watchAsset":
                            return this._wallet_watchAsset(r)
                    }
                }
                _isKnownAddress(e) {
                    try {
                        let t = (0, u.ensureAddressString)(e),
                            r = this._addresses.map(e => (0, u.ensureAddressString)(e));
                        return r.includes(t)
                    } catch (e) {}
                    return !1
                }
                _ensureKnownAddress(e) {
                    if (!this._isKnownAddress(e)) throw Error("Unknown Ethereum address")
                }
                _prepareTransactionParams(e) {
                    let t = e.from ? (0, u.ensureAddressString)(e.from) : this.selectedAddress;
                    if (!t) throw Error("Ethereum address is unavailable");
                    this._ensureKnownAddress(t);
                    let r = e.to ? (0, u.ensureAddressString)(e.to) : null,
                        n = null != e.value ? (0, u.ensureBigInt)(e.value) : BigInt(0),
                        i = e.data ? (0, u.ensureBuffer)(e.data) : s.alloc(0),
                        a = null != e.nonce ? (0, u.ensureIntNumber)(e.nonce) : null,
                        o = null != e.gasPrice ? (0, u.ensureBigInt)(e.gasPrice) : null,
                        d = null != e.maxFeePerGas ? (0, u.ensureBigInt)(e.maxFeePerGas) : null,
                        c = null != e.maxPriorityFeePerGas ? (0, u.ensureBigInt)(e.maxPriorityFeePerGas) : null,
                        l = null != e.gas ? (0, u.ensureBigInt)(e.gas) : null,
                        h = e.chainId ? (0, u.ensureIntNumber)(e.chainId) : this.getChainId();
                    return {
                        fromAddress: t,
                        toAddress: r,
                        weiValue: n,
                        data: i,
                        nonce: a,
                        gasPriceInWei: o,
                        maxFeePerGas: d,
                        maxPriorityFeePerGas: c,
                        gasLimit: l,
                        chainId: h
                    }
                }
                _isAuthorized() {
                    return this._addresses.length > 0
                }
                _requireAuthorization() {
                    if (!this._isAuthorized()) throw h.standardErrors.provider.unauthorized({})
                }
                _throwUnsupportedMethodError() {
                    throw h.standardErrors.provider.unsupportedMethod({})
                }
                async _signEthereumMessage(e, t, r, s) {
                    this._ensureKnownAddress(t);
                    try {
                        let n = this.initializeRelay(),
                            i = await n.signEthereumMessage(e, t, r, s);
                        if ((0, d.isErrorResponse)(i)) throw Error(i.errorMessage);
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: i.result
                        }
                    } catch (e) {
                        if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i)) throw h.standardErrors.provider.userRejectedRequest("User denied message signature");
                        throw e
                    }
                }
                async _ethereumAddressFromSignedMessage(e, t, r) {
                    let s = this.initializeRelay(),
                        n = await s.ethereumAddressFromSignedMessage(e, t, r);
                    if ((0, d.isErrorResponse)(n)) throw Error(n.errorMessage);
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: n.result
                    }
                }
                _eth_accounts() {
                    return [...this._addresses]
                }
                _eth_coinbase() {
                    return this.selectedAddress || null
                }
                _net_version() {
                    return this.getChainId().toString(10)
                }
                _eth_chainId() {
                    return (0, u.hexStringFromIntNumber)(this.getChainId())
                }
                getChainId() {
                    let e = this._storage.getItem(g);
                    if (!e) return (0, u.ensureIntNumber)(1);
                    let t = parseInt(e, 10);
                    return (0, u.ensureIntNumber)(t)
                }
                async _eth_requestAccounts() {
                    let e;
                    if (this._isAuthorized()) return Promise.resolve({
                        jsonrpc: "2.0",
                        id: 0,
                        result: this._addresses
                    });
                    try {
                        let t = this.initializeRelay();
                        if (e = await t.requestEthereumAccounts(), (0, d.isErrorResponse)(e)) throw Error(e.errorMessage)
                    } catch (e) {
                        if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i)) throw h.standardErrors.provider.userRejectedRequest("User denied account authorization");
                        throw e
                    }
                    if (!e.result) throw Error("accounts received is empty");
                    return this._setAddresses(e.result), {
                        jsonrpc: "2.0",
                        id: 0,
                        result: this._addresses
                    }
                }
                _eth_sign(e) {
                    this._requireAuthorization();
                    let t = (0, u.ensureAddressString)(e[0]),
                        r = (0, u.ensureBuffer)(e[1]);
                    return this._signEthereumMessage(r, t, !1)
                }
                _eth_ecRecover(e) {
                    let t = (0, u.ensureBuffer)(e[0]),
                        r = (0, u.ensureBuffer)(e[1]);
                    return this._ethereumAddressFromSignedMessage(t, r, !1)
                }
                _personal_sign(e) {
                    this._requireAuthorization();
                    let t = (0, u.ensureBuffer)(e[0]),
                        r = (0, u.ensureAddressString)(e[1]);
                    return this._signEthereumMessage(t, r, !0)
                }
                _personal_ecRecover(e) {
                    let t = (0, u.ensureBuffer)(e[0]),
                        r = (0, u.ensureBuffer)(e[1]);
                    return this._ethereumAddressFromSignedMessage(t, r, !0)
                }
                async _eth_signTransaction(e) {
                    this._requireAuthorization();
                    let t = this._prepareTransactionParams(e[0] || {});
                    try {
                        let e = this.initializeRelay(),
                            r = await e.signEthereumTransaction(t);
                        if ((0, d.isErrorResponse)(r)) throw Error(r.errorMessage);
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: r.result
                        }
                    } catch (e) {
                        if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i)) throw h.standardErrors.provider.userRejectedRequest("User denied transaction signature");
                        throw e
                    }
                }
                async _eth_sendRawTransaction(e) {
                    let t = (0, u.ensureBuffer)(e[0]),
                        r = this.initializeRelay(),
                        s = await r.submitEthereumTransaction(t, this.getChainId());
                    if ((0, d.isErrorResponse)(s)) throw Error(s.errorMessage);
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: s.result
                    }
                }
                async _eth_sendTransaction(e) {
                    this._requireAuthorization();
                    let t = this._prepareTransactionParams(e[0] || {});
                    try {
                        let e = this.initializeRelay(),
                            r = await e.signAndSubmitEthereumTransaction(t);
                        if ((0, d.isErrorResponse)(r)) throw Error(r.errorMessage);
                        return {
                            jsonrpc: "2.0",
                            id: 0,
                            result: r.result
                        }
                    } catch (e) {
                        if ("string" == typeof e.message && e.message.match(/(denied|rejected)/i)) throw h.standardErrors.provider.userRejectedRequest("User denied transaction signature");
                        throw e
                    }
                }
                async _eth_signTypedData_v1(e) {
                    this._requireAuthorization();
                    let t = (0, u.ensureParsedJSONObject)(e[0]),
                        r = (0, u.ensureAddressString)(e[1]);
                    this._ensureKnownAddress(r);
                    let s = i.default.hashForSignTypedDataLegacy({
                            data: t
                        }),
                        n = JSON.stringify(t, null, 2);
                    return this._signEthereumMessage(s, r, !1, n)
                }
                async _eth_signTypedData_v3(e) {
                    this._requireAuthorization();
                    let t = (0, u.ensureAddressString)(e[0]),
                        r = (0, u.ensureParsedJSONObject)(e[1]);
                    this._ensureKnownAddress(t);
                    let s = i.default.hashForSignTypedData_v3({
                            data: r
                        }),
                        n = JSON.stringify(r, null, 2);
                    return this._signEthereumMessage(s, t, !1, n)
                }
                async _eth_signTypedData_v4(e) {
                    this._requireAuthorization();
                    let t = (0, u.ensureAddressString)(e[0]),
                        r = (0, u.ensureParsedJSONObject)(e[1]);
                    this._ensureKnownAddress(t);
                    let s = i.default.hashForSignTypedData_v4({
                            data: r
                        }),
                        n = JSON.stringify(r, null, 2);
                    return this._signEthereumMessage(s, t, !1, n)
                }
                async _wallet_addEthereumChain(e) {
                    var t, r, s, n;
                    let i = e[0];
                    if ((null === (t = i.rpcUrls) || void 0 === t ? void 0 : t.length) === 0) return {
                        jsonrpc: "2.0",
                        id: 0,
                        error: {
                            code: 2,
                            message: "please pass in at least 1 rpcUrl"
                        }
                    };
                    if (!i.chainName || "" === i.chainName.trim()) throw h.standardErrors.rpc.invalidParams("chainName is a required field");
                    if (!i.nativeCurrency) throw h.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
                    let a = parseInt(i.chainId, 16),
                        o = await this.addEthereumChain(a, null !== (r = i.rpcUrls) && void 0 !== r ? r : [], null !== (s = i.blockExplorerUrls) && void 0 !== s ? s : [], i.chainName, null !== (n = i.iconUrls) && void 0 !== n ? n : [], i.nativeCurrency);
                    return o ? {
                        jsonrpc: "2.0",
                        id: 0,
                        result: null
                    } : {
                        jsonrpc: "2.0",
                        id: 0,
                        error: {
                            code: 2,
                            message: "unable to add ethereum chain"
                        }
                    }
                }
                async _wallet_switchEthereumChain(e) {
                    let t = e[0];
                    return await this.switchEthereumChain(parseInt(t.chainId, 16)), {
                        jsonrpc: "2.0",
                        id: 0,
                        result: null
                    }
                }
                async _wallet_watchAsset(e) {
                    let t = Array.isArray(e) ? e[0] : e;
                    if (!t.type) throw h.standardErrors.rpc.invalidParams("Type is required");
                    if ((null == t ? void 0 : t.type) !== "ERC20") throw h.standardErrors.rpc.invalidParams(`Asset of type '${t.type}' is not supported`);
                    if (!(null == t ? void 0 : t.options)) throw h.standardErrors.rpc.invalidParams("Options are required");
                    if (!(null == t ? void 0 : t.options.address)) throw h.standardErrors.rpc.invalidParams("Address is required");
                    let r = this.getChainId(),
                        {
                            address: s,
                            symbol: n,
                            image: i,
                            decimals: a
                        } = t.options,
                        o = await this.watchAsset(t.type, s, n, a, i, r);
                    return {
                        jsonrpc: "2.0",
                        id: 0,
                        result: o
                    }
                }
                initializeRelay() {
                    if (!this._relay) {
                        let e = new c.WalletLinkRelay({
                            linkAPIUrl: l.WALLETLINK_URL,
                            storage: this._storage
                        });
                        e.setAppInfo(this._appName, this._appLogoUrl), e.attachUI(), e.setAccountsCallback((e, t) => this._setAddresses(e, t)), e.setChainCallback((e, t) => {
                            this.updateProviderInfo(t, parseInt(e, 10))
                        }), this._relay = e
                    }
                    return this._relay
                }
            }
            t.WalletLinkSigner = f
        },
        76237: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RelayEventManager = void 0;
            let s = r(48967);
            class n {
                constructor() {
                    this._nextRequestId = 0, this.callbacks = new Map
                }
                makeRequestId() {
                    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
                    let e = this._nextRequestId,
                        t = (0, s.prepend0x)(e.toString(16)),
                        r = this.callbacks.get(t);
                    return r && this.callbacks.delete(t), e
                }
            }
            t.RelayEventManager = n
        },
        95643: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkRelay = void 0;
            let s = r(86403),
                n = r(54861),
                i = r(76237),
                a = r(64752),
                o = r(98043),
                d = r(38773),
                c = r(5025),
                l = r(84399),
                h = r(90250),
                u = r(48967),
                p = r(80874);
            class g {
                constructor(e) {
                    this.accountsCallback = null, this.chainCallbackParams = {
                        chainId: "",
                        jsonRpcUrl: ""
                    }, this.chainCallback = null, this.dappDefaultChain = 1, this.isMobileWeb = (0, d.isMobileWeb)(), this.appName = "", this.appLogoUrl = null, this.linkedUpdated = e => {
                        this.isLinked = e;
                        let t = this.storage.getItem(n.LOCAL_STORAGE_ADDRESSES_KEY);
                        if (e && (this._session.linked = e), this.isUnlinkedErrorState = !1, t) {
                            let r = t.split(" "),
                                s = "true" === this.storage.getItem("IsStandaloneSigning");
                            "" === r[0] || e || !this._session.linked || s || (this.isUnlinkedErrorState = !0)
                        }
                    }, this.metadataUpdated = (e, t) => {
                        this.storage.setItem(e, t)
                    }, this.chainUpdated = (e, t) => {
                        (this.chainCallbackParams.chainId !== e || this.chainCallbackParams.jsonRpcUrl !== t) && (this.chainCallbackParams = {
                            chainId: e,
                            jsonRpcUrl: t
                        }, this.chainCallback && this.chainCallback(e, t))
                    }, this.accountUpdated = e => {
                        this.accountsCallback && this.accountsCallback([e]), g.accountRequestCallbackIds.size > 0 && (Array.from(g.accountRequestCallbackIds.values()).forEach(t => {
                            this.invokeCallback(Object.assign(Object.assign({}, {
                                type: "WEB3_RESPONSE",
                                id: t,
                                response: {
                                    method: "requestEthereumAccounts",
                                    result: [e]
                                }
                            }), {
                                id: t
                            }))
                        }), g.accountRequestCallbackIds.clear())
                    }, this.resetAndReload = this.resetAndReload.bind(this), this.linkAPIUrl = e.linkAPIUrl, this.storage = e.storage;
                    let {
                        session: t,
                        ui: r,
                        connection: s
                    } = this.subscribe();
                    this._session = t, this.connection = s, this.relayEventManager = new i.RelayEventManager, this.ui = r
                }
                subscribe() {
                    let e = a.WalletLinkSession.load(this.storage) || new a.WalletLinkSession(this.storage).save(),
                        {
                            linkAPIUrl: t
                        } = this,
                        r = new s.WalletLinkConnection({
                            session: e,
                            linkAPIUrl: t,
                            listener: this
                        }),
                        n = this.isMobileWeb ? new l.WLMobileRelayUI : new c.WalletLinkRelayUI;
                    return r.connect(), {
                        session: e,
                        ui: n,
                        connection: r
                    }
                }
                attachUI() {
                    this.ui.attach()
                }
                resetAndReload() {
                    Promise.race([this.connection.setSessionMetadata("__destroyed", "1"), new Promise(e => setTimeout(() => e(null), 1e3))]).then(() => {
                        this.connection.destroy();
                        let e = a.WalletLinkSession.load(this.storage);
                        (null == e ? void 0 : e.id) === this._session.id && p.ScopedLocalStorage.clearAll(), document.location.reload()
                    }).catch(e => {})
                }
                setAppInfo(e, t) {
                    this.appName = e, this.appLogoUrl = t
                }
                getStorageItem(e) {
                    return this.storage.getItem(e)
                }
                setStorageItem(e, t) {
                    this.storage.setItem(e, t)
                }
                signEthereumMessage(e, t, r, s) {
                    return this.sendRequest({
                        method: "signEthereumMessage",
                        params: {
                            message: (0, u.hexStringFromBuffer)(e, !0),
                            address: t,
                            addPrefix: r,
                            typedDataJson: s || null
                        }
                    })
                }
                ethereumAddressFromSignedMessage(e, t, r) {
                    return this.sendRequest({
                        method: "ethereumAddressFromSignedMessage",
                        params: {
                            message: (0, u.hexStringFromBuffer)(e, !0),
                            signature: (0, u.hexStringFromBuffer)(t, !0),
                            addPrefix: r
                        }
                    })
                }
                signEthereumTransaction(e) {
                    return this.sendRequest({
                        method: "signEthereumTransaction",
                        params: {
                            fromAddress: e.fromAddress,
                            toAddress: e.toAddress,
                            weiValue: (0, u.bigIntStringFromBigInt)(e.weiValue),
                            data: (0, u.hexStringFromBuffer)(e.data, !0),
                            nonce: e.nonce,
                            gasPriceInWei: e.gasPriceInWei ? (0, u.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                            maxFeePerGas: e.gasPriceInWei ? (0, u.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                            maxPriorityFeePerGas: e.gasPriceInWei ? (0, u.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                            gasLimit: e.gasLimit ? (0, u.bigIntStringFromBigInt)(e.gasLimit) : null,
                            chainId: e.chainId,
                            shouldSubmit: !1
                        }
                    })
                }
                signAndSubmitEthereumTransaction(e) {
                    return this.sendRequest({
                        method: "signEthereumTransaction",
                        params: {
                            fromAddress: e.fromAddress,
                            toAddress: e.toAddress,
                            weiValue: (0, u.bigIntStringFromBigInt)(e.weiValue),
                            data: (0, u.hexStringFromBuffer)(e.data, !0),
                            nonce: e.nonce,
                            gasPriceInWei: e.gasPriceInWei ? (0, u.bigIntStringFromBigInt)(e.gasPriceInWei) : null,
                            maxFeePerGas: e.maxFeePerGas ? (0, u.bigIntStringFromBigInt)(e.maxFeePerGas) : null,
                            maxPriorityFeePerGas: e.maxPriorityFeePerGas ? (0, u.bigIntStringFromBigInt)(e.maxPriorityFeePerGas) : null,
                            gasLimit: e.gasLimit ? (0, u.bigIntStringFromBigInt)(e.gasLimit) : null,
                            chainId: e.chainId,
                            shouldSubmit: !0
                        }
                    })
                }
                submitEthereumTransaction(e, t) {
                    return this.sendRequest({
                        method: "submitEthereumTransaction",
                        params: {
                            signedTransaction: (0, u.hexStringFromBuffer)(e, !0),
                            chainId: t
                        }
                    })
                }
                scanQRCode(e) {
                    return this.sendRequest({
                        method: "scanQRCode",
                        params: {
                            regExp: e
                        }
                    })
                }
                getWalletLinkSession() {
                    return this._session
                }
                genericRequest(e, t) {
                    return this.sendRequest({
                        method: "generic",
                        params: {
                            action: t,
                            data: e
                        }
                    })
                }
                sendGenericMessage(e) {
                    return this.sendRequest(e)
                }
                sendRequest(e) {
                    let t = null,
                        r = (0, u.randomBytesHex)(8),
                        s = s => {
                            this.publishWeb3RequestCanceledEvent(r), this.handleErrorResponse(r, e.method, s), null == t || t()
                        };
                    return new Promise((n, i) => {
                        t = this.ui.showConnecting({
                            isUnlinkedErrorState: this.isUnlinkedErrorState,
                            onCancel: s,
                            onResetConnection: this.resetAndReload
                        }), this.relayEventManager.callbacks.set(r, e => {
                            if (null == t || t(), (0, o.isErrorResponse)(e)) return i(Error(e.errorMessage));
                            n(e)
                        }), this.publishWeb3RequestEvent(r, e)
                    })
                }
                setAccountsCallback(e) {
                    this.accountsCallback = e
                }
                setChainCallback(e) {
                    this.chainCallback = e
                }
                setDappDefaultChainCallback(e) {
                    this.dappDefaultChain = e
                }
                publishWeb3RequestEvent(e, t) {
                    let r = {
                        type: "WEB3_REQUEST",
                        id: e,
                        request: t
                    };
                    this.publishEvent("Web3Request", r, !0).then(e => {}).catch(e => {
                        this.handleWeb3ResponseMessage({
                            type: "WEB3_RESPONSE",
                            id: r.id,
                            response: {
                                method: t.method,
                                errorMessage: e.message
                            }
                        })
                    }), this.isMobileWeb && this.openCoinbaseWalletDeeplink(t.method)
                }
                openCoinbaseWalletDeeplink(e) {
                    if (this.ui instanceof l.WLMobileRelayUI) switch (e) {
                        case "requestEthereumAccounts":
                        case "switchEthereumChain":
                            return;
                        default:
                            window.addEventListener("blur", () => {
                                window.addEventListener("focus", () => {
                                    this.connection.checkUnseenEvents()
                                }, {
                                    once: !0
                                })
                            }, {
                                once: !0
                            }), this.ui.openCoinbaseWalletDeeplink()
                    }
                }
                publishWeb3RequestCanceledEvent(e) {
                    this.publishEvent("Web3RequestCanceled", {
                        type: "WEB3_REQUEST_CANCELED",
                        id: e
                    }, !1).then()
                }
                publishEvent(e, t, r) {
                    return this.connection.publishEvent(e, t, r)
                }
                handleWeb3ResponseMessage(e) {
                    let {
                        response: t
                    } = e;
                    if ("requestEthereumAccounts" === t.method) {
                        g.accountRequestCallbackIds.forEach(t => this.invokeCallback(Object.assign(Object.assign({}, e), {
                            id: t
                        }))), g.accountRequestCallbackIds.clear();
                        return
                    }
                    this.invokeCallback(e)
                }
                handleErrorResponse(e, t, r) {
                    var s;
                    let n = null !== (s = null == r ? void 0 : r.message) && void 0 !== s ? s : "Unspecified error message.";
                    this.handleWeb3ResponseMessage({
                        type: "WEB3_RESPONSE",
                        id: e,
                        response: {
                            method: t,
                            errorMessage: n
                        }
                    })
                }
                invokeCallback(e) {
                    let t = this.relayEventManager.callbacks.get(e.id);
                    t && (t(e.response), this.relayEventManager.callbacks.delete(e.id))
                }
                requestEthereumAccounts() {
                    let e = {
                            method: "requestEthereumAccounts",
                            params: {
                                appName: this.appName,
                                appLogoUrl: this.appLogoUrl || null
                            }
                        },
                        t = (0, u.randomBytesHex)(8);
                    return new Promise((r, s) => {
                        this.relayEventManager.callbacks.set(t, e => {
                            if ((0, o.isErrorResponse)(e)) return s(Error(e.errorMessage));
                            r(e)
                        }), g.accountRequestCallbackIds.add(t), this.publishWeb3RequestEvent(t, e)
                    })
                }
                watchAsset(e, t, r, s, n, i) {
                    let a = {
                            method: "watchAsset",
                            params: {
                                type: e,
                                options: {
                                    address: t,
                                    symbol: r,
                                    decimals: s,
                                    image: n
                                },
                                chainId: i
                            }
                        },
                        d = null,
                        c = (0, u.randomBytesHex)(8);
                    return d = this.ui.showConnecting({
                        isUnlinkedErrorState: this.isUnlinkedErrorState,
                        onCancel: e => {
                            this.publishWeb3RequestCanceledEvent(c), this.handleErrorResponse(c, a.method, e), null == d || d()
                        },
                        onResetConnection: this.resetAndReload
                    }), new Promise((e, t) => {
                        this.relayEventManager.callbacks.set(c, r => {
                            if (null == d || d(), (0, o.isErrorResponse)(r)) return t(Error(r.errorMessage));
                            e(r)
                        }), this.publishWeb3RequestEvent(c, a)
                    })
                }
                addEthereumChain(e, t, r, s, n, i) {
                    let a = {
                            method: "addEthereumChain",
                            params: {
                                chainId: e,
                                rpcUrls: t,
                                blockExplorerUrls: s,
                                chainName: n,
                                iconUrls: r,
                                nativeCurrency: i
                            }
                        },
                        d = null,
                        c = (0, u.randomBytesHex)(8);
                    return d = this.ui.showConnecting({
                        isUnlinkedErrorState: this.isUnlinkedErrorState,
                        onCancel: e => {
                            this.publishWeb3RequestCanceledEvent(c), this.handleErrorResponse(c, a.method, e), null == d || d()
                        },
                        onResetConnection: this.resetAndReload
                    }), new Promise((e, t) => {
                        this.relayEventManager.callbacks.set(c, r => {
                            if (null == d || d(), (0, o.isErrorResponse)(r)) return t(Error(r.errorMessage));
                            e(r)
                        }), this.publishWeb3RequestEvent(c, a)
                    })
                }
                switchEthereumChain(e, t) {
                    let r = {
                            method: "switchEthereumChain",
                            params: Object.assign({
                                chainId: e
                            }, {
                                address: t
                            })
                        },
                        s = (0, u.randomBytesHex)(8);
                    return new Promise((e, t) => {
                        this.relayEventManager.callbacks.set(s, r => (0, o.isErrorResponse)(r) && r.errorCode ? t(h.standardErrors.provider.custom({
                            code: r.errorCode,
                            message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
                        })) : (0, o.isErrorResponse)(r) ? t(Error(r.errorMessage)) : void e(r)), this.publishWeb3RequestEvent(s, r)
                    })
                }
            }
            t.WalletLinkRelay = g, g.accountRequestCallbackIds = new Set
        },
        33402: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkCipher = void 0;
            let s = r(48967);
            class n {
                constructor(e) {
                    this.secret = e
                }
                async encrypt(e) {
                    let t = this.secret;
                    if (64 !== t.length) throw Error("secret must be 256 bits");
                    let r = crypto.getRandomValues(new Uint8Array(12)),
                        n = await crypto.subtle.importKey("raw", (0, s.hexStringToUint8Array)(t), {
                            name: "aes-gcm"
                        }, !1, ["encrypt", "decrypt"]),
                        i = new TextEncoder,
                        a = await window.crypto.subtle.encrypt({
                            name: "AES-GCM",
                            iv: r
                        }, n, i.encode(e)),
                        o = a.slice(a.byteLength - 16),
                        d = a.slice(0, a.byteLength - 16),
                        c = new Uint8Array(o),
                        l = new Uint8Array(d),
                        h = new Uint8Array([...r, ...c, ...l]);
                    return (0, s.uint8ArrayToHex)(h)
                }
                async decrypt(e) {
                    let t = this.secret;
                    if (64 !== t.length) throw Error("secret must be 256 bits");
                    return new Promise((r, n) => {
                        !async function() {
                            let i = await crypto.subtle.importKey("raw", (0, s.hexStringToUint8Array)(t), {
                                    name: "aes-gcm"
                                }, !1, ["encrypt", "decrypt"]),
                                a = (0, s.hexStringToUint8Array)(e),
                                o = a.slice(0, 12),
                                d = a.slice(12, 28),
                                c = a.slice(28),
                                l = new Uint8Array([...c, ...d]),
                                h = {
                                    name: "AES-GCM",
                                    iv: new Uint8Array(o)
                                };
                            try {
                                let e = await window.crypto.subtle.decrypt(h, i, l),
                                    t = new TextDecoder;
                                r(t.decode(e))
                            } catch (e) {
                                n(e)
                            }
                        }()
                    })
                }
            }
            t.WalletLinkCipher = n
        },
        86403: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkConnection = void 0;
            let s = r(54861),
                n = r(33402),
                i = r(4898),
                a = r(46752),
                o = r(93239);
            class d {
                constructor({
                    session: e,
                    linkAPIUrl: t,
                    listener: r,
                    WebSocketClass: d = WebSocket
                }) {
                    this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = (0, o.IntNumber)(1), this._connected = !1, this._linked = !1, this.shouldFetchUnseenEventsOnConnect = !1, this.requestResolutions = new Map, this.handleSessionMetadataUpdated = e => {
                        if (!e) return;
                        let t = new Map([
                            ["__destroyed", this.handleDestroyed],
                            ["EthereumAddress", this.handleAccountUpdated],
                            ["WalletUsername", this.handleWalletUsernameUpdated],
                            ["AppVersion", this.handleAppVersionUpdated],
                            ["ChainId", t => e.JsonRpcUrl && this.handleChainUpdated(t, e.JsonRpcUrl)]
                        ]);
                        t.forEach((t, r) => {
                            let s = e[r];
                            void 0 !== s && t(s)
                        })
                    }, this.handleDestroyed = e => {
                        var t;
                        "1" === e && (null === (t = this.listener) || void 0 === t || t.resetAndReload())
                    }, this.handleAccountUpdated = async e => {
                        var t; {
                            let r = await this.cipher.decrypt(e);
                            null === (t = this.listener) || void 0 === t || t.accountUpdated(r)
                        }
                    }, this.handleMetadataUpdated = async (e, t) => {
                        var r; {
                            let s = await this.cipher.decrypt(t);
                            null === (r = this.listener) || void 0 === r || r.metadataUpdated(e, s)
                        }
                    }, this.handleWalletUsernameUpdated = async e => {
                        this.handleMetadataUpdated(s.WALLET_USER_NAME_KEY, e)
                    }, this.handleAppVersionUpdated = async e => {
                        this.handleMetadataUpdated(s.APP_VERSION_KEY, e)
                    }, this.handleChainUpdated = async (e, t) => {
                        var r; {
                            let s = await this.cipher.decrypt(e),
                                n = await this.cipher.decrypt(t);
                            null === (r = this.listener) || void 0 === r || r.chainUpdated(s, n)
                        }
                    }, this.session = e, this.cipher = new n.WalletLinkCipher(e.secret), this.listener = r;
                    let c = new a.WalletLinkWebSocket(`${t}/rpc`, d);
                    c.setConnectionStateListener(async e => {
                        let t = !1;
                        switch (e) {
                            case a.ConnectionState.DISCONNECTED:
                                if (!this.destroyed) {
                                    let e = async () => {
                                        await new Promise(e => setTimeout(e, 5e3)), this.destroyed || c.connect().catch(() => {
                                            e()
                                        })
                                    };
                                    e()
                                }
                                break;
                            case a.ConnectionState.CONNECTED:
                                try {
                                    await this.authenticate(), this.sendIsLinked(), this.sendGetSessionConfig(), t = !0
                                } catch (e) {}
                                this.updateLastHeartbeat(), setInterval(() => {
                                    this.heartbeat()
                                }, 1e4), this.shouldFetchUnseenEventsOnConnect && this.fetchUnseenEventsAPI();
                            case a.ConnectionState.CONNECTING:
                        }
                        this.connected !== t && (this.connected = t)
                    }), c.setIncomingDataListener(e => {
                        var t;
                        switch (e.type) {
                            case "Heartbeat":
                                this.updateLastHeartbeat();
                                return;
                            case "IsLinkedOK":
                            case "Linked":
                                {
                                    let t = "IsLinkedOK" === e.type ? e.linked : void 0;this.linked = t || e.onlineGuests > 0;
                                    break
                                }
                            case "GetSessionConfigOK":
                            case "SessionConfigUpdated":
                                this.handleSessionMetadataUpdated(e.metadata);
                                break;
                            case "Event":
                                this.handleIncomingEvent(e)
                        }
                        void 0 !== e.id && (null === (t = this.requestResolutions.get(e.id)) || void 0 === t || t(e))
                    }), this.ws = c, this.http = new i.WalletLinkHTTP(t, e.id, e.key)
                }
                connect() {
                    if (this.destroyed) throw Error("instance is destroyed");
                    this.ws.connect()
                }
                destroy() {
                    this.destroyed = !0, this.ws.disconnect(), this.listener = void 0
                }
                get isDestroyed() {
                    return this.destroyed
                }
                get connected() {
                    return this._connected
                }
                set connected(e) {
                    var t;
                    this._connected = e, e && (null === (t = this.onceConnected) || void 0 === t || t.call(this))
                }
                setOnceConnected(e) {
                    return new Promise(t => {
                        this.connected ? e().then(t) : this.onceConnected = () => {
                            e().then(t), this.onceConnected = void 0
                        }
                    })
                }
                get linked() {
                    return this._linked
                }
                set linked(e) {
                    var t, r;
                    this._linked = e, e && (null === (t = this.onceLinked) || void 0 === t || t.call(this)), null === (r = this.listener) || void 0 === r || r.linkedUpdated(e)
                }
                setOnceLinked(e) {
                    return new Promise(t => {
                        this.linked ? e().then(t) : this.onceLinked = () => {
                            e().then(t), this.onceLinked = void 0
                        }
                    })
                }
                async handleIncomingEvent(e) {
                    var t;
                    if ("Event" === e.type && "Web3Response" === e.event) {
                        let r = await this.cipher.decrypt(e.data),
                            s = JSON.parse(r);
                        if ("WEB3_RESPONSE" !== s.type) return;
                        null === (t = this.listener) || void 0 === t || t.handleWeb3ResponseMessage(s)
                    }
                }
                async checkUnseenEvents() {
                    if (!this.connected) {
                        this.shouldFetchUnseenEventsOnConnect = !0;
                        return
                    }
                    await new Promise(e => setTimeout(e, 250));
                    try {
                        await this.fetchUnseenEventsAPI()
                    } catch (e) {
                        console.error("Unable to check for unseen events", e)
                    }
                }
                async fetchUnseenEventsAPI() {
                    this.shouldFetchUnseenEventsOnConnect = !1;
                    let e = await this.http.fetchUnseenEvents();
                    e.forEach(e => this.handleIncomingEvent(e))
                }
                async setSessionMetadata(e, t) {
                    let r = {
                        type: "SetSessionConfig",
                        id: (0, o.IntNumber)(this.nextReqId++),
                        sessionId: this.session.id,
                        metadata: {
                            [e]: t
                        }
                    };
                    return this.setOnceConnected(async () => {
                        let e = await this.makeRequest(r);
                        if ("Fail" === e.type) throw Error(e.error || "failed to set session metadata")
                    })
                }
                async publishEvent(e, t, r = !1) {
                    let s = await this.cipher.encrypt(JSON.stringify(Object.assign(Object.assign({}, t), {
                            origin: location.origin,
                            relaySource: "coinbaseWalletExtension" in window && window.coinbaseWalletExtension ? "injected_sdk" : "sdk"
                        }))),
                        n = {
                            type: "PublishEvent",
                            id: (0, o.IntNumber)(this.nextReqId++),
                            sessionId: this.session.id,
                            event: e,
                            data: s,
                            callWebhook: r
                        };
                    return this.setOnceLinked(async () => {
                        let e = await this.makeRequest(n);
                        if ("Fail" === e.type) throw Error(e.error || "failed to publish event");
                        return e.eventId
                    })
                }
                sendData(e) {
                    this.ws.sendData(JSON.stringify(e))
                }
                updateLastHeartbeat() {
                    this.lastHeartbeatResponse = Date.now()
                }
                heartbeat() {
                    if (Date.now() - this.lastHeartbeatResponse > 2e4) {
                        this.ws.disconnect();
                        return
                    }
                    try {
                        this.ws.sendData("h")
                    } catch (e) {}
                }
                async makeRequest(e, t = 6e4) {
                    let r;
                    let s = e.id;
                    return this.sendData(e), Promise.race([new Promise((e, n) => {
                        r = window.setTimeout(() => {
                            n(Error(`request ${s} timed out`))
                        }, t)
                    }), new Promise(e => {
                        this.requestResolutions.set(s, t => {
                            clearTimeout(r), e(t), this.requestResolutions.delete(s)
                        })
                    })])
                }
                async authenticate() {
                    let e = {
                            type: "HostSession",
                            id: (0, o.IntNumber)(this.nextReqId++),
                            sessionId: this.session.id,
                            sessionKey: this.session.key
                        },
                        t = await this.makeRequest(e);
                    if ("Fail" === t.type) throw Error(t.error || "failed to authenticate")
                }
                sendIsLinked() {
                    let e = {
                        type: "IsLinked",
                        id: (0, o.IntNumber)(this.nextReqId++),
                        sessionId: this.session.id
                    };
                    this.sendData(e)
                }
                sendGetSessionConfig() {
                    let e = {
                        type: "GetSessionConfig",
                        id: (0, o.IntNumber)(this.nextReqId++),
                        sessionId: this.session.id
                    };
                    this.sendData(e)
                }
            }
            t.WalletLinkConnection = d
        },
        4898: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkHTTP = void 0;
            class r {
                constructor(e, t, r) {
                    this.linkAPIUrl = e, this.sessionId = t;
                    let s = `${t}:${r}`;
                    this.auth = `Basic ${btoa(s)}`
                }
                async markUnseenEventsAsSeen(e) {
                    return Promise.all(e.map(e => fetch(`${this.linkAPIUrl}/events/${e.eventId}/seen`, {
                        method: "POST",
                        headers: {
                            Authorization: this.auth
                        }
                    }))).catch(e => console.error("Unabled to mark event as failed:", e))
                }
                async fetchUnseenEvents() {
                    var e;
                    let t = await fetch(`${this.linkAPIUrl}/events?unseen=true`, {
                        headers: {
                            Authorization: this.auth
                        }
                    });
                    if (t.ok) {
                        let {
                            events: r,
                            error: s
                        } = await t.json();
                        if (s) throw Error(`Check unseen events failed: ${s}`);
                        let n = null !== (e = null == r ? void 0 : r.filter(e => "Web3Response" === e.event).map(e => ({
                            type: "Event",
                            sessionId: this.sessionId,
                            eventId: e.id,
                            event: e.event,
                            data: e.data
                        }))) && void 0 !== e ? e : [];
                        return this.markUnseenEventsAsSeen(n), n
                    }
                    throw Error(`Check unseen events failed: ${t.status}`)
                }
            }
            t.WalletLinkHTTP = r
        },
        46752: function(e, t) {
            "use strict";
            var r, s;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkWebSocket = t.ConnectionState = void 0, (s = r || (t.ConnectionState = r = {}))[s.DISCONNECTED = 0] = "DISCONNECTED", s[s.CONNECTING = 1] = "CONNECTING", s[s.CONNECTED = 2] = "CONNECTED";
            class n {
                setConnectionStateListener(e) {
                    this.connectionStateListener = e
                }
                setIncomingDataListener(e) {
                    this.incomingDataListener = e
                }
                constructor(e, t = WebSocket) {
                    this.WebSocketClass = t, this.webSocket = null, this.pendingData = [], this.url = e.replace(/^http/, "ws")
                }
                async connect() {
                    if (this.webSocket) throw Error("webSocket object is not null");
                    return new Promise((e, t) => {
                        var s;
                        let n;
                        try {
                            this.webSocket = n = new this.WebSocketClass(this.url)
                        } catch (e) {
                            t(e);
                            return
                        }
                        null === (s = this.connectionStateListener) || void 0 === s || s.call(this, r.CONNECTING), n.onclose = e => {
                            var s;
                            this.clearWebSocket(), t(Error(`websocket error ${e.code}: ${e.reason}`)), null === (s = this.connectionStateListener) || void 0 === s || s.call(this, r.DISCONNECTED)
                        }, n.onopen = t => {
                            var s;
                            if (e(), null === (s = this.connectionStateListener) || void 0 === s || s.call(this, r.CONNECTED), this.pendingData.length > 0) {
                                let e = [...this.pendingData];
                                e.forEach(e => this.sendData(e)), this.pendingData = []
                            }
                        }, n.onmessage = e => {
                            var t, r;
                            if ("h" === e.data) null === (t = this.incomingDataListener) || void 0 === t || t.call(this, {
                                type: "Heartbeat"
                            });
                            else try {
                                let t = JSON.parse(e.data);
                                null === (r = this.incomingDataListener) || void 0 === r || r.call(this, t)
                            } catch (e) {}
                        }
                    })
                }
                disconnect() {
                    var e;
                    let {
                        webSocket: t
                    } = this;
                    if (t) {
                        this.clearWebSocket(), null === (e = this.connectionStateListener) || void 0 === e || e.call(this, r.DISCONNECTED), this.connectionStateListener = void 0, this.incomingDataListener = void 0;
                        try {
                            t.close()
                        } catch (e) {}
                    }
                }
                sendData(e) {
                    let {
                        webSocket: t
                    } = this;
                    if (!t) {
                        this.pendingData.push(e), this.connect();
                        return
                    }
                    t.send(e)
                }
                clearWebSocket() {
                    let {
                        webSocket: e
                    } = this;
                    e && (this.webSocket = null, e.onclose = null, e.onerror = null, e.onmessage = null, e.onopen = null)
                }
            }
            t.WalletLinkWebSocket = n
        },
        54861: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.APP_VERSION_KEY = t.LOCAL_STORAGE_ADDRESSES_KEY = t.WALLET_USER_NAME_KEY = void 0, t.WALLET_USER_NAME_KEY = "walletUsername", t.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses", t.APP_VERSION_KEY = "AppVersion"
        },
        64752: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkSession = void 0;
            let s = r(21670),
                n = r(48967),
                i = "session:id",
                a = "session:secret",
                o = "session:linked";
            class d {
                constructor(e, t, r, i) {
                    this._storage = e, this._id = t || (0, n.randomBytesHex)(16), this._secret = r || (0, n.randomBytesHex)(32), this._key = new s.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex"), this._linked = !!i
                }
                static load(e) {
                    let t = e.getItem(i),
                        r = e.getItem(o),
                        s = e.getItem(a);
                    return t && s ? new d(e, t, s, "1" === r) : null
                }
                get id() {
                    return this._id
                }
                get secret() {
                    return this._secret
                }
                get key() {
                    return this._key
                }
                get linked() {
                    return this._linked
                }
                set linked(e) {
                    this._linked = e, this.persistLinked()
                }
                save() {
                    return this._storage.setItem(i, this._id), this._storage.setItem(a, this._secret), this.persistLinked(), this
                }
                persistLinked() {
                    this._storage.setItem(o, this._linked ? "1" : "0")
                }
            }
            t.WalletLinkSession = d
        },
        98043: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isErrorResponse = void 0, t.isErrorResponse = function(e) {
                return void 0 !== e.errorMessage
            }
        },
        84399: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WLMobileRelayUI = void 0;
            let s = r(33500),
                n = r(38773),
                i = r(36815);
            class a {
                constructor() {
                    this.attached = !1, this.redirectDialog = new s.RedirectDialog
                }
                attach() {
                    if (this.attached) throw Error("Coinbase Wallet SDK UI is already attached");
                    this.redirectDialog.attach(), this.attached = !0
                }
                redirectToCoinbaseWallet(e) {
                    let t = new URL(i.CBW_MOBILE_DEEPLINK_URL);
                    t.searchParams.append("redirect_url", (0, n.getLocation)().href), e && t.searchParams.append("wl_url", e);
                    let r = document.createElement("a");
                    r.target = "cbw-opener", r.href = t.href, r.rel = "noreferrer noopener", r.click()
                }
                openCoinbaseWalletDeeplink(e) {
                    this.redirectDialog.present({
                        title: "Redirecting to Coinbase Wallet...",
                        buttonText: "Open",
                        onButtonClick: () => {
                            this.redirectToCoinbaseWallet(e)
                        }
                    }), setTimeout(() => {
                        this.redirectToCoinbaseWallet(e)
                    }, 99)
                }
                showConnecting(e) {
                    return () => {
                        this.redirectDialog.clear()
                    }
                }
            }
            t.WLMobileRelayUI = a
        },
        5025: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.WalletLinkRelayUI = void 0;
            let s = r(29429),
                n = r(79004);
            class i {
                constructor() {
                    this.attached = !1, this.snackbar = new n.Snackbar
                }
                attach() {
                    if (this.attached) throw Error("Coinbase Wallet SDK UI is already attached");
                    let e = document.documentElement,
                        t = document.createElement("div");
                    t.className = "-cbwsdk-css-reset", e.appendChild(t), this.snackbar.attach(t), this.attached = !0, (0, s.injectCssReset)()
                }
                showConnecting(e) {
                    let t;
                    return t = e.isUnlinkedErrorState ? {
                        autoExpand: !0,
                        message: "Connection lost",
                        menuItems: [{
                            isRed: !1,
                            info: "Reset connection",
                            svgWidth: "10",
                            svgHeight: "11",
                            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                            defaultFillRule: "evenodd",
                            defaultClipRule: "evenodd",
                            onClick: e.onResetConnection
                        }]
                    } : {
                        message: "Confirm on phone",
                        menuItems: [{
                            isRed: !0,
                            info: "Cancel transaction",
                            svgWidth: "11",
                            svgHeight: "11",
                            path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                            defaultFillRule: "inherit",
                            defaultClipRule: "inherit",
                            onClick: e.onCancel
                        }, {
                            isRed: !1,
                            info: "Reset connection",
                            svgWidth: "10",
                            svgHeight: "11",
                            path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                            defaultFillRule: "evenodd",
                            defaultClipRule: "evenodd",
                            onClick: e.onResetConnection
                        }]
                    }, this.snackbar.presentItem(t)
                }
            }
            t.WalletLinkRelayUI = i
        },
        50239: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}"
        },
        33500: function(e, t, r) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.RedirectDialog = void 0;
            let n = s(r(35209)),
                i = r(10013),
                a = r(29429),
                o = r(79004),
                d = r(38773),
                c = s(r(50239));
            class l {
                constructor() {
                    this.root = null, this.darkMode = (0, d.isDarkMode)()
                }
                attach() {
                    let e = document.documentElement;
                    this.root = document.createElement("div"), this.root.className = "-cbwsdk-css-reset", e.appendChild(this.root), (0, a.injectCssReset)()
                }
                present(e) {
                    this.render(e)
                }
                clear() {
                    this.render(null)
                }
                render(e) {
                    this.root && ((0, i.render)(null, this.root), e && (0, i.render)((0, i.h)(h, Object.assign({}, e, {
                        onDismiss: () => {
                            this.clear()
                        },
                        darkMode: this.darkMode
                    })), this.root))
                }
            }
            t.RedirectDialog = l;
            let h = ({
                title: e,
                buttonText: t,
                darkMode: r,
                onButtonClick: s,
                onDismiss: a
            }) => (0, i.h)(o.SnackbarContainer, {
                darkMode: r
            }, (0, i.h)("div", {
                class: "-cbwsdk-redirect-dialog"
            }, (0, i.h)("style", null, c.default), (0, i.h)("div", {
                class: "-cbwsdk-redirect-dialog-backdrop",
                onClick: a
            }), (0, i.h)("div", {
                class: (0, n.default)("-cbwsdk-redirect-dialog-box", r ? "dark" : "light")
            }, (0, i.h)("p", null, e), (0, i.h)("button", {
                onClick: s
            }, t))))
        },
        79877: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}"
        },
        79004: function(e, t, r) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0;
            let n = s(r(35209)),
                i = r(10013),
                a = r(13211),
                o = r(38773),
                d = s(r(79877));
            class c {
                constructor() {
                    this.items = new Map, this.nextItemKey = 0, this.root = null, this.darkMode = (0, o.isDarkMode)()
                }
                attach(e) {
                    this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", e.appendChild(this.root), this.render()
                }
                presentItem(e) {
                    let t = this.nextItemKey++;
                    return this.items.set(t, e), this.render(), () => {
                        this.items.delete(t), this.render()
                    }
                }
                clear() {
                    this.items.clear(), this.render()
                }
                render() {
                    this.root && (0, i.render)((0, i.h)("div", null, (0, i.h)(t.SnackbarContainer, {
                        darkMode: this.darkMode
                    }, Array.from(this.items.entries()).map(([e, r]) => (0, i.h)(t.SnackbarInstance, Object.assign({}, r, {
                        key: e
                    }))))), this.root)
                }
            }
            t.Snackbar = c, t.SnackbarContainer = e => (0, i.h)("div", {
                class: (0, n.default)("-cbwsdk-snackbar-container")
            }, (0, i.h)("style", null, d.default), (0, i.h)("div", {
                class: "-cbwsdk-snackbar"
            }, e.children)), t.SnackbarInstance = ({
                autoExpand: e,
                message: t,
                menuItems: r
            }) => {
                let [s, o] = (0, a.useState)(!0), [d, c] = (0, a.useState)(null != e && e);
                return (0, a.useEffect)(() => {
                    let e = [window.setTimeout(() => {
                        o(!1)
                    }, 1), window.setTimeout(() => {
                        c(!0)
                    }, 1e4)];
                    return () => {
                        e.forEach(window.clearTimeout)
                    }
                }), (0, i.h)("div", {
                    class: (0, n.default)("-cbwsdk-snackbar-instance", s && "-cbwsdk-snackbar-instance-hidden", d && "-cbwsdk-snackbar-instance-expanded")
                }, (0, i.h)("div", {
                    class: "-cbwsdk-snackbar-instance-header",
                    onClick: () => {
                        c(!d)
                    }
                }, (0, i.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
                    class: "-cbwsdk-snackbar-instance-header-cblogo"
                }), " ", (0, i.h)("div", {
                    class: "-cbwsdk-snackbar-instance-header-message"
                }, t), (0, i.h)("div", {
                    class: "-gear-container"
                }, !d && (0, i.h)("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, i.h)("circle", {
                    cx: "12",
                    cy: "12",
                    r: "12",
                    fill: "#F5F7F8"
                })), (0, i.h)("img", {
                    src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
                    class: "-gear-icon",
                    title: "Expand"
                }))), r && r.length > 0 && (0, i.h)("div", {
                    class: "-cbwsdk-snackbar-instance-menu"
                }, r.map((e, t) => (0, i.h)("div", {
                    class: (0, n.default)("-cbwsdk-snackbar-instance-menu-item", e.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"),
                    onClick: e.onClick,
                    key: t
                }, (0, i.h)("svg", {
                    width: e.svgWidth,
                    height: e.svgHeight,
                    viewBox: "0 0 10 11",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, i.h)("path", {
                    "fill-rule": e.defaultFillRule,
                    "clip-rule": e.defaultClipRule,
                    d: e.path,
                    fill: "#AAAAAA"
                })), (0, i.h)("span", {
                    class: (0, n.default)("-cbwsdk-snackbar-instance-menu-item-info", e.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red")
                }, e.info)))))
            }
        },
        67816: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}'
        },
        29429: function(e, t, r) {
            "use strict";
            var s = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.injectCssReset = void 0;
            let n = s(r(67816));
            t.injectCssReset = function() {
                let e = document.createElement("style");
                e.type = "text/css", e.appendChild(document.createTextNode(n.default)), document.documentElement.appendChild(e)
            }
        },
        38773: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isDarkMode = t.isMobileWeb = t.getLocation = t.createQrUrl = void 0, t.createQrUrl = function(e, t, r, s, n, i) {
                let a = new URLSearchParams({
                        [s ? "parent-id" : "id"]: e,
                        secret: t,
                        server: r,
                        v: n,
                        chainId: i.toString()
                    }).toString(),
                    o = `${r}/#/link?${a}`;
                return o
            }, t.getLocation = function() {
                try {
                    if (function() {
                            try {
                                return null !== window.frameElement
                            } catch (e) {
                                return !1
                            }
                        }() && window.top) return window.top.location;
                    return window.location
                } catch (e) {
                    return window.location
                }
            }, t.isMobileWeb = function() {
                var e;
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(null === (e = null == window ? void 0 : window.navigator) || void 0 === e ? void 0 : e.userAgent)
            }, t.isDarkMode = function() {
                var e, t;
                return null !== (t = null === (e = null == window ? void 0 : window.matchMedia) || void 0 === e ? void 0 : e.call(window, "(prefers-color-scheme: dark)").matches) && void 0 !== t && t
            }
        },
        80874: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ScopedLocalStorage = void 0;
            class r {
                constructor(e, t) {
                    this.scope = e, this.module = t
                }
                setItem(e, t) {
                    localStorage.setItem(this.scopedKey(e), t)
                }
                getItem(e) {
                    return localStorage.getItem(this.scopedKey(e))
                }
                removeItem(e) {
                    localStorage.removeItem(this.scopedKey(e))
                }
                clear() {
                    let e = this.scopedKey(""),
                        t = [];
                    for (let r = 0; r < localStorage.length; r++) {
                        let s = localStorage.key(r);
                        "string" == typeof s && s.startsWith(e) && t.push(s)
                    }
                    t.forEach(e => localStorage.removeItem(e))
                }
                scopedKey(e) {
                    return `-${this.scope}${this.module?`:${this.module}`:""}:${e}`
                }
                static clearAll() {
                    new r("CBWSDK").clear(), new r("walletlink").clear()
                }
            }
            t.ScopedLocalStorage = r
        },
        92325: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.decryptContent = t.encryptContent = t.importKeyFromHexString = t.exportKeyToHexString = t.decrypt = t.encrypt = t.deriveSharedSecret = t.generateKeyPair = void 0;
            let s = r(48967);
            async function n() {
                return crypto.subtle.generateKey({
                    name: "ECDH",
                    namedCurve: "P-256"
                }, !0, ["deriveKey"])
            }
            async function i(e, t) {
                return crypto.subtle.deriveKey({
                    name: "ECDH",
                    public: t
                }, e, {
                    name: "AES-GCM",
                    length: 256
                }, !1, ["encrypt", "decrypt"])
            }
            async function a(e, t) {
                let r = crypto.getRandomValues(new Uint8Array(12)),
                    s = await crypto.subtle.encrypt({
                        name: "AES-GCM",
                        iv: r
                    }, e, new TextEncoder().encode(t));
                return {
                    iv: r,
                    cipherText: s
                }
            }
            async function o(e, {
                iv: t,
                cipherText: r
            }) {
                let s = await crypto.subtle.decrypt({
                    name: "AES-GCM",
                    iv: t
                }, e, r);
                return new TextDecoder().decode(s)
            }

            function d(e) {
                switch (e) {
                    case "public":
                        return "spki";
                    case "private":
                        return "pkcs8"
                }
            }
            async function c(e, t) {
                let r = d(e),
                    n = await crypto.subtle.exportKey(r, t);
                return (0, s.uint8ArrayToHex)(new Uint8Array(n))
            }
            async function l(e, t) {
                let r = d(e),
                    n = (0, s.hexStringToUint8Array)(t).buffer;
                return await crypto.subtle.importKey(r, n, {
                    name: "ECDH",
                    namedCurve: "P-256"
                }, !0, "private" === e ? ["deriveKey"] : [])
            }
            async function h(e, t) {
                let r = JSON.stringify(e, (e, t) => t instanceof Error ? Object.assign(Object.assign({}, t.code ? {
                    code: t.code
                } : {}), {
                    message: t.message
                }) : t);
                return a(t, r)
            }
            async function u(e, t) {
                return JSON.parse(await o(t, e))
            }
            t.generateKeyPair = n, t.deriveSharedSecret = i, t.encrypt = a, t.decrypt = o, t.exportKeyToHexString = c, t.importKeyFromHexString = l, t.encryptContent = h, t.decryptContent = u
        },
        20135: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.checkErrorForInvalidRequestArgs = t.getCoinbaseInjectedProvider = t.getCoinbaseInjectedSigner = t.fetchRPCRequest = void 0;
            let s = r(44794),
                n = r(90250);
            async function i(e, t) {
                if (!t.rpcUrl) throw n.standardErrors.rpc.internal("No RPC URL set for chain");
                let r = Object.assign(Object.assign({}, e), {
                        jsonrpc: "2.0",
                        id: crypto.randomUUID()
                    }),
                    i = await window.fetch(t.rpcUrl, {
                        method: "POST",
                        body: JSON.stringify(r),
                        mode: "cors",
                        headers: {
                            "Content-Type": "application/json",
                            "X-Cbw-Sdk-Version": s.LIB_VERSION
                        }
                    }),
                    a = await i.json();
                return a.result
            }

            function a() {
                let e = globalThis;
                return e.coinbaseWalletSigner
            }
            t.fetchRPCRequest = i, t.getCoinbaseInjectedSigner = a, t.getCoinbaseInjectedProvider = function({
                metadata: e,
                preference: t
            }) {
                var r;
                if ("smartWalletOnly" !== t.options) {
                    let t = a();
                    if (t) return;
                    let s = function() {
                        let e = globalThis;
                        return e.coinbaseWalletExtension
                    }();
                    if (s) {
                        let {
                            appName: t,
                            appLogoUrl: n,
                            appChainIds: i
                        } = e;
                        return null === (r = s.setAppInfo) || void 0 === r || r.call(s, t, n, i), s
                    }
                }
                let s = function() {
                    var e, t;
                    try {
                        let r = globalThis;
                        return null !== (e = r.ethereum) && void 0 !== e ? e : null === (t = r.top) || void 0 === t ? void 0 : t.ethereum
                    } catch (e) {
                        return
                    }
                }();
                if (null == s ? void 0 : s.isCoinbaseBrowser) return s
            }, t.checkErrorForInvalidRequestArgs = function(e) {
                if (!e || "object" != typeof e || Array.isArray(e)) return n.standardErrors.rpc.invalidParams({
                    message: "Expected a single, non-array, object argument.",
                    data: e
                });
                let {
                    method: t,
                    params: r
                } = e;
                return "string" != typeof t || 0 === t.length ? n.standardErrors.rpc.invalidParams({
                    message: "'args.method' must be a non-empty string.",
                    data: e
                }) : void 0 === r || Array.isArray(r) || "object" == typeof r && null !== r ? void 0 : n.standardErrors.rpc.invalidParams({
                    message: "'args.params' must be an object or array if provided.",
                    data: e
                })
            }
        },
        47533: function(e, t, r) {
            var s = r(61900).Buffer;
            let n = r(2888);

            function i(e) {
                if (e.startsWith("int[")) return "int256" + e.slice(3);
                if ("int" === e) return "int256";
                if (e.startsWith("uint[")) return "uint256" + e.slice(4);
                if ("uint" === e) return "uint256";
                if (e.startsWith("fixed[")) return "fixed128x128" + e.slice(5);
                if ("fixed" === e) return "fixed128x128";
                if (e.startsWith("ufixed[")) return "ufixed128x128" + e.slice(6);
                else if ("ufixed" === e) return "ufixed128x128";
                return e
            }

            function a(e) {
                return parseInt(/^\D+(\d+)$/.exec(e)[1], 10)
            }

            function o(e) {
                var t = /^\D+(\d+)x(\d+)$/.exec(e);
                return [parseInt(t[1], 10), parseInt(t[2], 10)]
            }

            function d(e) {
                var t = e.match(/(.*)\[(.*?)\]$/);
                return t ? "" === t[2] ? "dynamic" : parseInt(t[2], 10) : null
            }

            function c(e) {
                var t = typeof e;
                if ("string" === t || "number" === t) return BigInt(e);
                if ("bigint" === t) return e;
                throw Error("Argument is not a number")
            }

            function l(e, t) {
                if ("address" === e) return l("uint160", c(t));
                if ("bool" === e) return l("uint8", t ? 1 : 0);
                if ("string" === e) return l("bytes", new s(t, "utf8"));
                if ((p = e).lastIndexOf("]") === p.length - 1) {
                    if (void 0 === t.length) throw Error("Not an array?");
                    if ("dynamic" !== (r = d(e)) && 0 !== r && t.length > r) throw Error("Elements exceed array size: " + r);
                    for (u in h = [], e = e.slice(0, e.lastIndexOf("[")), "string" == typeof t && (t = JSON.parse(t)), t) h.push(l(e, t[u]));
                    if ("dynamic" === r) {
                        var r, i, h, u, p, g = l("uint256", t.length);
                        h.unshift(g)
                    }
                    return s.concat(h)
                }
                if ("bytes" === e) return t = new s(t), h = s.concat([l("uint256", t.length), t]), t.length % 32 != 0 && (h = s.concat([h, n.zeros(32 - t.length % 32)])), h;
                if (e.startsWith("bytes")) {
                    if ((r = a(e)) < 1 || r > 32) throw Error("Invalid bytes<N> width: " + r);
                    return n.setLengthRight(t, 32)
                } else if (e.startsWith("uint")) {
                    if ((r = a(e)) % 8 || r < 8 || r > 256) throw Error("Invalid uint<N> width: " + r);
                    i = c(t);
                    let s = n.bitLengthFromBigInt(i);
                    if (s > r) throw Error("Supplied uint exceeds width: " + r + " vs " + s);
                    if (i < 0) throw Error("Supplied uint is negative");
                    return n.bufferBEFromBigInt(i, 32)
                } else if (e.startsWith("int")) {
                    if ((r = a(e)) % 8 || r < 8 || r > 256) throw Error("Invalid int<N> width: " + r);
                    i = c(t);
                    let s = n.bitLengthFromBigInt(i);
                    if (s > r) throw Error("Supplied int exceeds width: " + r + " vs " + s);
                    let o = n.twosFromBigInt(i, 256);
                    return n.bufferBEFromBigInt(o, 32)
                } else if (e.startsWith("ufixed")) {
                    if (r = o(e), (i = c(t)) < 0) throw Error("Supplied ufixed is negative");
                    return l("uint256", i * BigInt(2) ** BigInt(r[1]))
                } else if (e.startsWith("fixed")) return r = o(e), l("int256", c(t) * BigInt(2) ** BigInt(r[1]));
                throw Error("Unsupported or invalid type: " + e)
            }

            function h(e, t) {
                if (e.length !== t.length) throw Error("Number of types are not matching the values");
                for (var r, o, d = [], l = 0; l < e.length; l++) {
                    var h = i(e[l]),
                        u = t[l];
                    if ("bytes" === h) d.push(u);
                    else if ("string" === h) d.push(new s(u, "utf8"));
                    else if ("bool" === h) d.push(new s(u ? "01" : "00", "hex"));
                    else if ("address" === h) d.push(n.setLength(u, 20));
                    else if (h.startsWith("bytes")) {
                        if ((r = a(h)) < 1 || r > 32) throw Error("Invalid bytes<N> width: " + r);
                        d.push(n.setLengthRight(u, r))
                    } else if (h.startsWith("uint")) {
                        if ((r = a(h)) % 8 || r < 8 || r > 256) throw Error("Invalid uint<N> width: " + r);
                        o = c(u);
                        let e = n.bitLengthFromBigInt(o);
                        if (e > r) throw Error("Supplied uint exceeds width: " + r + " vs " + e);
                        d.push(n.bufferBEFromBigInt(o, r / 8))
                    } else if (h.startsWith("int")) {
                        if ((r = a(h)) % 8 || r < 8 || r > 256) throw Error("Invalid int<N> width: " + r);
                        o = c(u);
                        let e = n.bitLengthFromBigInt(o);
                        if (e > r) throw Error("Supplied int exceeds width: " + r + " vs " + e);
                        let t = n.twosFromBigInt(o, r);
                        d.push(n.bufferBEFromBigInt(t, r / 8))
                    } else throw Error("Unsupported or invalid type: " + h)
                }
                return s.concat(d)
            }
            e.exports = {
                rawEncode: function(e, t) {
                    var r = [],
                        n = [],
                        a = 32 * e.length;
                    for (var o in e) {
                        var c = i(e[o]),
                            h = l(c, t[o]);
                        "string" === c || "bytes" === c || "dynamic" === d(c) ? (r.push(l("uint256", a)), n.push(h), a += h.length) : r.push(h)
                    }
                    return s.concat(r.concat(n))
                },
                solidityPack: h,
                soliditySHA3: function(e, t) {
                    return n.keccak(h(e, t))
                }
            }
        },
        6681: function(e, t, r) {
            var s = r(61900).Buffer;
            let n = r(2888),
                i = r(47533),
                a = {
                    type: "object",
                    properties: {
                        types: {
                            type: "object",
                            additionalProperties: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string"
                                        },
                                        type: {
                                            type: "string"
                                        }
                                    },
                                    required: ["name", "type"]
                                }
                            }
                        },
                        primaryType: {
                            type: "string"
                        },
                        domain: {
                            type: "object"
                        },
                        message: {
                            type: "object"
                        }
                    },
                    required: ["types", "primaryType", "domain", "message"]
                },
                o = {
                    encodeData(e, t, r, a = !0) {
                        let o = ["bytes32"],
                            d = [this.hashType(e, r)];
                        if (a) {
                            let c = (e, t, o) => {
                                if (void 0 !== r[t]) return ["bytes32", null == o ? "0x0000000000000000000000000000000000000000000000000000000000000000" : n.keccak(this.encodeData(t, o, r, a))];
                                if (void 0 === o) throw Error(`missing value for field ${e} of type ${t}`);
                                if ("bytes" === t) return ["bytes32", n.keccak(o)];
                                if ("string" === t) return "string" == typeof o && (o = s.from(o, "utf8")), ["bytes32", n.keccak(o)];
                                if (t.lastIndexOf("]") === t.length - 1) {
                                    let r = t.slice(0, t.lastIndexOf("[")),
                                        s = o.map(t => c(e, r, t));
                                    return ["bytes32", n.keccak(i.rawEncode(s.map(([e]) => e), s.map(([, e]) => e)))]
                                }
                                return [t, o]
                            };
                            for (let s of r[e]) {
                                let [e, r] = c(s.name, s.type, t[s.name]);
                                o.push(e), d.push(r)
                            }
                        } else
                            for (let i of r[e]) {
                                let e = t[i.name];
                                if (void 0 !== e) {
                                    if ("bytes" === i.type) o.push("bytes32"), e = n.keccak(e), d.push(e);
                                    else if ("string" === i.type) o.push("bytes32"), "string" == typeof e && (e = s.from(e, "utf8")), e = n.keccak(e), d.push(e);
                                    else if (void 0 !== r[i.type]) o.push("bytes32"), e = n.keccak(this.encodeData(i.type, e, r, a)), d.push(e);
                                    else if (i.type.lastIndexOf("]") === i.type.length - 1) throw Error("Arrays currently unimplemented in encodeData");
                                    else o.push(i.type), d.push(e)
                                }
                            }
                        return i.rawEncode(o, d)
                    },
                    encodeType(e, t) {
                        let r = "",
                            s = this.findTypeDependencies(e, t).filter(t => t !== e);
                        for (let n of s = [e].concat(s.sort())) {
                            let e = t[n];
                            if (!e) throw Error("No type definition specified: " + n);
                            r += n + "(" + t[n].map(({
                                name: e,
                                type: t
                            }) => t + " " + e).join(",") + ")"
                        }
                        return r
                    },
                    findTypeDependencies(e, t, r = []) {
                        if (e = e.match(/^\w*/)[0], r.includes(e) || void 0 === t[e]) return r;
                        for (let s of (r.push(e), t[e]))
                            for (let e of this.findTypeDependencies(s.type, t, r)) r.includes(e) || r.push(e);
                        return r
                    },
                    hashStruct(e, t, r, s = !0) {
                        return n.keccak(this.encodeData(e, t, r, s))
                    },
                    hashType(e, t) {
                        return n.keccak(this.encodeType(e, t))
                    },
                    sanitizeData(e) {
                        let t = {};
                        for (let r in a.properties) e[r] && (t[r] = e[r]);
                        return t.types && (t.types = Object.assign({
                            EIP712Domain: []
                        }, t.types)), t
                    },
                    hash(e, t = !0) {
                        let r = this.sanitizeData(e),
                            i = [s.from("1901", "hex")];
                        return i.push(this.hashStruct("EIP712Domain", r.domain, r.types, t)), "EIP712Domain" !== r.primaryType && i.push(this.hashStruct(r.primaryType, r.message, r.types, t)), n.keccak(s.concat(i))
                    }
                };
            e.exports = {
                TYPED_MESSAGE_SCHEMA: a,
                TypedDataUtils: o,
                hashForSignTypedDataLegacy: function(e) {
                    return function(e) {
                        let t = Error("Expect argument to be non-empty array");
                        if ("object" != typeof e || !e.length) throw t;
                        let r = e.map(function(e) {
                                return "bytes" === e.type ? n.toBuffer(e.value) : e.value
                            }),
                            s = e.map(function(e) {
                                return e.type
                            }),
                            a = e.map(function(e) {
                                if (!e.name) throw t;
                                return e.type + " " + e.name
                            });
                        return i.soliditySHA3(["bytes32", "bytes32"], [i.soliditySHA3(Array(e.length).fill("string"), a), i.soliditySHA3(s, r)])
                    }(e.data)
                },
                hashForSignTypedData_v3: function(e) {
                    return o.hash(e.data, !1)
                },
                hashForSignTypedData_v4: function(e) {
                    return o.hash(e.data)
                }
            }
        },
        2888: function(e, t, r) {
            var s = r(61900).Buffer;
            let n = r(1525);

            function i(e) {
                return s.allocUnsafe(e).fill(0)
            }

            function a(e, t) {
                let r = e.toString(16);
                r.length % 2 != 0 && (r = "0" + r);
                let n = r.match(/.{1,2}/g).map(e => parseInt(e, 16));
                for (; n.length < t;) n.unshift(0);
                return s.from(n)
            }

            function o(e, t, r) {
                let s = i(t);
                return (e = d(e), r) ? e.length < t ? (e.copy(s), s) : e.slice(0, t) : e.length < t ? (e.copy(s, t - e.length), s) : e.slice(-t)
            }

            function d(e) {
                if (!s.isBuffer(e)) {
                    if (Array.isArray(e)) e = s.from(e);
                    else if ("string" == typeof e) {
                        var t;
                        e = c(e) ? s.from((t = l(e)).length % 2 ? "0" + t : t, "hex") : s.from(e)
                    } else if ("number" == typeof e) e = intToBuffer(e);
                    else if (null == e) e = s.allocUnsafe(0);
                    else if ("bigint" == typeof e) e = a(e);
                    else if (e.toArray) e = s.from(e.toArray());
                    else throw Error("invalid type")
                }
                return e
            }

            function c(e) {
                return "string" == typeof e && e.match(/^0x[0-9A-Fa-f]*$/)
            }

            function l(e) {
                return "string" == typeof e && e.startsWith("0x") ? e.slice(2) : e
            }
            e.exports = {
                zeros: i,
                setLength: o,
                setLengthRight: function(e, t) {
                    return o(e, t, !0)
                },
                isHexString: c,
                stripHexPrefix: l,
                toBuffer: d,
                bufferToHex: function(e) {
                    return "0x" + (e = d(e)).toString("hex")
                },
                keccak: function(e, t) {
                    return e = d(e), t || (t = 256), n("keccak" + t).update(e).digest()
                },
                bitLengthFromBigInt: function(e) {
                    return e.toString(2).length
                },
                bufferBEFromBigInt: a,
                twosFromBigInt: function(e, t) {
                    let r;
                    if (e < 0 n) {
                        let s = (1 n << BigInt(t)) - 1 n;
                        r = (~e & s) + 1 n
                    } else r = e;
                    return r & (1 n << BigInt(t)) - 1 n
                }
            }
        },
        44794: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LIB_VERSION = void 0, t.LIB_VERSION = "4.0.4"
        }
    }
]);