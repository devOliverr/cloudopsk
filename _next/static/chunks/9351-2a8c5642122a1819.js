"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9351], {
        96123: function(e, t, r) {
            r.d(t, {
                L: function() {
                    return i
                }
            });
            var n = r(98392),
                a = r(12607);

            function i(e, t) {
                let {
                    chainId: r,
                    ...i
                } = t, o = e.getClient({
                    chainId: r
                }), s = (0, a.s)(o, n.L, "readContract");
                return s(i)
            }
        },
        12607: function(e, t, r) {
            r.d(t, {
                s: function() {
                    return n
                }
            });

            function n(e, t, r) {
                let n = e[t.name];
                if ("function" == typeof n) return n;
                let a = e[r];
                return "function" == typeof a ? a : r => t(e, r)
            }
        },
        1007: function(e, t, r) {
            r.d(t, {
                r: function() {
                    return I
                }
            });
            var n = r(98392),
                a = r(82022);
            class i extends a.G {
                constructor({
                    data: e
                }) {
                    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
                        metaMessages: ["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.", "", `Provided data: ${JSON.stringify(e)}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EnsAvatarInvalidMetadataError"
                    })
                }
            }
            class o extends a.G {
                constructor({
                    reason: e
                }) {
                    super(`ENS NFT avatar URI is invalid. ${e}`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EnsAvatarInvalidNftUriError"
                    })
                }
            }
            class s extends a.G {
                constructor({
                    uri: e
                }) {
                    super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EnsAvatarUriResolutionError"
                    })
                }
            }
            class l extends a.G {
                constructor({
                    namespace: e
                }) {
                    super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EnsAvatarUnsupportedNamespaceError"
                    })
                }
            }
            let u = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
                c = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
                f = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
                d = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
            async function p(e) {
                try {
                    let t = await fetch(e, {
                        method: "HEAD"
                    });
                    if (200 === t.status) {
                        let e = t.headers.get("content-type");
                        return e ? .startsWith("image/")
                    }
                    return !1
                } catch (t) {
                    if ("object" == typeof t && void 0 !== t.response || !globalThis.hasOwnProperty("Image")) return !1;
                    return new Promise(t => {
                        let r = new Image;
                        r.onload = () => {
                            t(!0)
                        }, r.onerror = () => {
                            t(!1)
                        }, r.src = e
                    })
                }
            }

            function y(e, t) {
                return e ? e.endsWith("/") ? e.slice(0, -1) : e : t
            }

            function m({
                uri: e,
                gatewayUrls: t
            }) {
                let r = f.test(e);
                if (r) return {
                    uri: e,
                    isOnChain: !0,
                    isEncoded: r
                };
                let n = y(t ? .ipfs, "https://ipfs.io"),
                    a = y(t ? .arweave, "https://arweave.net"),
                    i = e.match(u),
                    {
                        protocol: o,
                        subpath: l,
                        target: p,
                        subtarget: m = ""
                    } = i ? .groups || {},
                    b = "ipns:/" === o || "ipns/" === l,
                    h = "ipfs:/" === o || "ipfs/" === l || c.test(e);
                if (e.startsWith("http") && !b && !h) {
                    let r = e;
                    return t ? .arweave && (r = e.replace(/https:\/\/arweave.net/g, t ? .arweave)), {
                        uri: r,
                        isOnChain: !1,
                        isEncoded: !1
                    }
                }
                if ((b || h) && p) return {
                    uri: `${n}/${b?"ipns":"ipfs"}/${p}${m}`,
                    isOnChain: !1,
                    isEncoded: !1
                };
                if ("ar:/" === o && p) return {
                    uri: `${a}/${p}${m||""}`,
                    isOnChain: !1,
                    isEncoded: !1
                };
                let g = e.replace(d, "");
                if (g.startsWith("<svg") && (g = `data:image/svg+xml;base64,${btoa(g)}`), g.startsWith("data:") || g.startsWith("{")) return {
                    uri: g,
                    isOnChain: !0,
                    isEncoded: !1
                };
                throw new s({
                    uri: e
                })
            }

            function b(e) {
                if ("object" != typeof e || !("image" in e) && !("image_url" in e) && !("image_data" in e)) throw new i({
                    data: e
                });
                return e.image || e.image_url || e.image_data
            }
            async function h({
                gatewayUrls: e,
                uri: t
            }) {
                try {
                    let r = await fetch(t).then(e => e.json()),
                        n = await g({
                            gatewayUrls: e,
                            uri: b(r)
                        });
                    return n
                } catch {
                    throw new s({
                        uri: t
                    })
                }
            }
            async function g({
                gatewayUrls: e,
                uri: t
            }) {
                let {
                    uri: r,
                    isOnChain: n
                } = m({
                    uri: t,
                    gatewayUrls: e
                });
                if (n) return r;
                let a = await p(r);
                if (a) return r;
                throw new s({
                    uri: t
                })
            }
            async function w(e, {
                nft: t
            }) {
                if ("erc721" === t.namespace) return (0, n.L)(e, {
                    address: t.contractAddress,
                    abi: [{
                        name: "tokenURI",
                        type: "function",
                        stateMutability: "view",
                        inputs: [{
                            name: "tokenId",
                            type: "uint256"
                        }],
                        outputs: [{
                            name: "",
                            type: "string"
                        }]
                    }],
                    functionName: "tokenURI",
                    args: [BigInt(t.tokenID)]
                });
                if ("erc1155" === t.namespace) return (0, n.L)(e, {
                    address: t.contractAddress,
                    abi: [{
                        name: "uri",
                        type: "function",
                        stateMutability: "view",
                        inputs: [{
                            name: "_id",
                            type: "uint256"
                        }],
                        outputs: [{
                            name: "",
                            type: "string"
                        }]
                    }],
                    functionName: "uri",
                    args: [BigInt(t.tokenID)]
                });
                throw new l({
                    namespace: t.namespace
                })
            }
            async function v(e, {
                gatewayUrls: t,
                record: r
            }) {
                return /eip155:/i.test(r) ? E(e, {
                    gatewayUrls: t,
                    record: r
                }) : g({
                    uri: r,
                    gatewayUrls: t
                })
            }
            async function E(e, {
                gatewayUrls: t,
                record: r
            }) {
                let n = function(e) {
                        let t = e;
                        t.startsWith("did:nft:") && (t = t.replace("did:nft:", "").replace(/_/g, "/"));
                        let [r, n, a] = t.split("/"), [i, s] = r.split(":"), [l, u] = n.split(":");
                        if (!i || "eip155" !== i.toLowerCase()) throw new o({
                            reason: "Only EIP-155 supported"
                        });
                        if (!s) throw new o({
                            reason: "Chain ID not found"
                        });
                        if (!u) throw new o({
                            reason: "Contract address not found"
                        });
                        if (!a) throw new o({
                            reason: "Token ID not found"
                        });
                        if (!l) throw new o({
                            reason: "ERC namespace not found"
                        });
                        return {
                            chainID: Number.parseInt(s),
                            namespace: l.toLowerCase(),
                            contractAddress: u,
                            tokenID: a
                        }
                    }(r),
                    a = await w(e, {
                        nft: n
                    }),
                    {
                        uri: i,
                        isOnChain: s,
                        isEncoded: l
                    } = m({
                        uri: a,
                        gatewayUrls: t
                    });
                if (s && (i.includes("data:application/json;base64,") || i.startsWith("{"))) {
                    let e = l ? atob(i.replace("data:application/json;base64,", "")) : i,
                        r = JSON.parse(e);
                    return g({
                        uri: b(r),
                        gatewayUrls: t
                    })
                }
                let u = n.tokenID;
                return "erc1155" === n.namespace && (u = u.replace("0x", "").padStart(64, "0")), h({
                    gatewayUrls: t,
                    uri: i.replace(/(?:0x)?{id}/, u)
                })
            }
            var x = r(22122),
                B = r(36791);
            async function I(e, {
                blockNumber: t,
                blockTag: r,
                assetGatewayUrls: n,
                name: a,
                gatewayUrls: i,
                strict: o,
                universalResolverAddress: s
            }) {
                let l = await (0, x.s)(e, B.g, "getEnsText")({
                    blockNumber: t,
                    blockTag: r,
                    key: "avatar",
                    name: a,
                    universalResolverAddress: s,
                    gatewayUrls: i,
                    strict: o
                });
                if (!l) return null;
                try {
                    return await v(e, {
                        record: l,
                        gatewayUrls: n
                    })
                } catch {
                    return null
                }
            }
        },
        43822: function(e, t, r) {
            r.d(t, {
                w: function() {
                    return c
                }
            });
            var n = r(97812),
                a = r(90826),
                i = r(96904),
                o = r(25023),
                s = r(956),
                l = r(22122),
                u = r(98392);
            async function c(e, {
                address: t,
                blockNumber: r,
                blockTag: c,
                gatewayUrls: f,
                strict: d,
                universalResolverAddress: p
            }) {
                let y = p;
                if (!y) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    y = (0, a.L)({
                        blockNumber: r,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                let m = `${t.toLowerCase().substring(2)}.addr.reverse`;
                try {
                    let a = {
                            address: y,
                            abi: n.du,
                            functionName: "reverse",
                            args: [(0, i.NC)((0, s.T)(m))],
                            blockNumber: r,
                            blockTag: c
                        },
                        o = (0, l.s)(e, u.L, "readContract"),
                        [d, p] = f ? await o({ ...a,
                            args: [...a.args, f]
                        }) : await o(a);
                    if (t.toLowerCase() !== p.toLowerCase()) return null;
                    return d
                } catch (e) {
                    if (d) throw e;
                    if ((0, o.c)(e, "reverse")) return null;
                    throw e
                }
            }
        },
        36791: function(e, t, r) {
            r.d(t, {
                g: function() {
                    return p
                }
            });
            var n = r(97812),
                a = r(83817),
                i = r(12693),
                o = r(90826),
                s = r(96904),
                l = r(25023),
                u = r(90774),
                c = r(956),
                f = r(22122),
                d = r(98392);
            async function p(e, {
                blockNumber: t,
                blockTag: r,
                name: p,
                key: y,
                gatewayUrls: m,
                strict: b,
                universalResolverAddress: h
            }) {
                let g = h;
                if (!g) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    g = (0, o.L)({
                        blockNumber: t,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                try {
                    let o = {
                            address: g,
                            abi: n.k3,
                            functionName: "resolve",
                            args: [(0, s.NC)((0, c.T)(p)), (0, i.R)({
                                abi: n.nZ,
                                functionName: "text",
                                args: [(0, u.V)(p), y]
                            })],
                            blockNumber: t,
                            blockTag: r
                        },
                        l = (0, f.s)(e, d.L, "readContract"),
                        b = m ? await l({ ...o,
                            args: [...o.args, m]
                        }) : await l(o);
                    if ("0x" === b[0]) return null;
                    let h = (0, a.k)({
                        abi: n.nZ,
                        functionName: "text",
                        data: b[0]
                    });
                    return "" === h ? null : h
                } catch (e) {
                    if (b) throw e;
                    if ((0, l.c)(e, "resolve")) return null;
                    throw e
                }
            }
        },
        85403: function(e, t, r) {
            r.d(t, {
                R: function() {
                    return ee
                }
            });
            var n = r(89649);
            let a = /^error (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,
                i = /^event (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)$/,
                o = /^function (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*)\((?<parameters>.*?)\)(?: (?<scope>external|public{1}))?(?: (?<stateMutability>pure|view|nonpayable|payable{1}))?(?: returns\s?\((?<returns>.*?)\))?$/,
                s = /^struct (?<name>[a-zA-Z$_][a-zA-Z0-9$_]*) \{(?<properties>.*?)\}$/,
                l = /^constructor\((?<parameters>.*?)\)(?:\s(?<stateMutability>payable{1}))?$/,
                u = /^fallback\(\) external(?:\s(?<stateMutability>payable{1}))?$/,
                c = /^receive\(\) external payable$/,
                f = new Set(["indexed"]),
                d = new Set(["calldata", "memory", "storage"]);
            class p extends Error {
                constructor(e, t = {}) {
                    let r = t.cause instanceof p ? t.cause.details : t.cause ? .message ? t.cause.message : t.details,
                        n = t.cause instanceof p && t.cause.docsPath || t.docsPath,
                        a = [e || "An error occurred.", "", ...t.metaMessages ? [...t.metaMessages, ""] : [], ...n ? [`Docs: https://abitype.dev${n}`] : [], ...r ? [`Details: ${r}`] : [], "Version: abitype@1.0.5"].join("\n");
                    super(a), Object.defineProperty(this, "details", {
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
                        value: "AbiTypeError"
                    }), t.cause && (this.cause = t.cause), this.details = r, this.docsPath = n, this.metaMessages = t.metaMessages, this.shortMessage = e
                }
            }
            class y extends p {
                constructor({
                    type: e
                }) {
                    super("Unknown type.", {
                        metaMessages: [`Type "${e}" is not a valid ABI type. Perhaps you forgot to include a struct signature?`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownTypeError"
                    })
                }
            }
            class m extends p {
                constructor({
                    type: e
                }) {
                    super("Unknown type.", {
                        metaMessages: [`Type "${e}" is not a valid ABI type.`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownSolidityTypeError"
                    })
                }
            }
            class b extends p {
                constructor({
                    param: e
                }) {
                    super("Invalid ABI parameter.", {
                        details: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidParameterError"
                    })
                }
            }
            class h extends p {
                constructor({
                    param: e,
                    name: t
                }) {
                    super("Invalid ABI parameter.", {
                        details: e,
                        metaMessages: [`"${t}" is a protected Solidity keyword. More info: https://docs.soliditylang.org/en/latest/cheatsheet.html`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SolidityProtectedKeywordError"
                    })
                }
            }
            class g extends p {
                constructor({
                    param: e,
                    type: t,
                    modifier: r
                }) {
                    super("Invalid ABI parameter.", {
                        details: e,
                        metaMessages: [`Modifier "${r}" not allowed${t?` in "${t}" type`:""}.`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidModifierError"
                    })
                }
            }
            class w extends p {
                constructor({
                    param: e,
                    type: t,
                    modifier: r
                }) {
                    super("Invalid ABI parameter.", {
                        details: e,
                        metaMessages: [`Modifier "${r}" not allowed${t?` in "${t}" type`:""}.`, `Data location can only be specified for array, struct, or mapping types, but "${r}" was given.`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidFunctionModifierError"
                    })
                }
            }
            class v extends p {
                constructor({
                    abiParameter: e
                }) {
                    super("Invalid ABI parameter.", {
                        details: JSON.stringify(e, null, 2),
                        metaMessages: ["ABI parameter type is invalid."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAbiTypeParameterError"
                    })
                }
            }
            class E extends p {
                constructor({
                    signature: e,
                    type: t
                }) {
                    super(`Invalid ${t} signature.`, {
                        details: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidSignatureError"
                    })
                }
            }
            class x extends p {
                constructor({
                    signature: e
                }) {
                    super("Unknown signature.", {
                        details: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownSignatureError"
                    })
                }
            }
            class B extends p {
                constructor({
                    signature: e
                }) {
                    super("Invalid struct signature.", {
                        details: e,
                        metaMessages: ["No properties exist."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidStructSignatureError"
                    })
                }
            }
            class I extends p {
                constructor({
                    type: e
                }) {
                    super("Circular reference detected.", {
                        metaMessages: [`Struct "${e}" is a circular reference.`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "CircularReferenceError"
                    })
                }
            }
            class A extends p {
                constructor({
                    current: e,
                    depth: t
                }) {
                    super("Unbalanced parentheses.", {
                        metaMessages: [`"${e.trim()}" has too many ${t>0?"opening":"closing"} parentheses.`],
                        details: `Depth "${t}"`
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidParenthesisError"
                    })
                }
            }
            let P = new Map([
                    ["address", {
                        type: "address"
                    }],
                    ["bool", {
                        type: "bool"
                    }],
                    ["bytes", {
                        type: "bytes"
                    }],
                    ["bytes32", {
                        type: "bytes32"
                    }],
                    ["int", {
                        type: "int256"
                    }],
                    ["int256", {
                        type: "int256"
                    }],
                    ["string", {
                        type: "string"
                    }],
                    ["uint", {
                        type: "uint256"
                    }],
                    ["uint8", {
                        type: "uint8"
                    }],
                    ["uint16", {
                        type: "uint16"
                    }],
                    ["uint24", {
                        type: "uint24"
                    }],
                    ["uint32", {
                        type: "uint32"
                    }],
                    ["uint64", {
                        type: "uint64"
                    }],
                    ["uint96", {
                        type: "uint96"
                    }],
                    ["uint112", {
                        type: "uint112"
                    }],
                    ["uint160", {
                        type: "uint160"
                    }],
                    ["uint192", {
                        type: "uint192"
                    }],
                    ["uint256", {
                        type: "uint256"
                    }],
                    ["address owner", {
                        type: "address",
                        name: "owner"
                    }],
                    ["address to", {
                        type: "address",
                        name: "to"
                    }],
                    ["bool approved", {
                        type: "bool",
                        name: "approved"
                    }],
                    ["bytes _data", {
                        type: "bytes",
                        name: "_data"
                    }],
                    ["bytes data", {
                        type: "bytes",
                        name: "data"
                    }],
                    ["bytes signature", {
                        type: "bytes",
                        name: "signature"
                    }],
                    ["bytes32 hash", {
                        type: "bytes32",
                        name: "hash"
                    }],
                    ["bytes32 r", {
                        type: "bytes32",
                        name: "r"
                    }],
                    ["bytes32 root", {
                        type: "bytes32",
                        name: "root"
                    }],
                    ["bytes32 s", {
                        type: "bytes32",
                        name: "s"
                    }],
                    ["string name", {
                        type: "string",
                        name: "name"
                    }],
                    ["string symbol", {
                        type: "string",
                        name: "symbol"
                    }],
                    ["string tokenURI", {
                        type: "string",
                        name: "tokenURI"
                    }],
                    ["uint tokenId", {
                        type: "uint256",
                        name: "tokenId"
                    }],
                    ["uint8 v", {
                        type: "uint8",
                        name: "v"
                    }],
                    ["uint256 balance", {
                        type: "uint256",
                        name: "balance"
                    }],
                    ["uint256 tokenId", {
                        type: "uint256",
                        name: "tokenId"
                    }],
                    ["uint256 value", {
                        type: "uint256",
                        name: "value"
                    }],
                    ["event:address indexed from", {
                        type: "address",
                        name: "from",
                        indexed: !0
                    }],
                    ["event:address indexed to", {
                        type: "address",
                        name: "to",
                        indexed: !0
                    }],
                    ["event:uint indexed tokenId", {
                        type: "uint256",
                        name: "tokenId",
                        indexed: !0
                    }],
                    ["event:uint256 indexed tokenId", {
                        type: "uint256",
                        name: "tokenId",
                        indexed: !0
                    }]
                ]),
                k = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
                N = /^\((?<type>.+?)\)(?<array>(?:\[\d*?\])+?)?(?:\s(?<modifier>calldata|indexed|memory|storage{1}))?(?:\s(?<name>[a-zA-Z$_][a-zA-Z0-9$_]*))?$/,
                $ = /^u?int$/;

            function C(e, t) {
                var r, a, i;
                let o;
                let s = (r = t ? .type) ? `${r}:${e}` : e;
                if (P.has(s)) return P.get(s);
                let l = n.cN.test(e),
                    u = (0, n.Zw)(l ? N : k, e);
                if (!u) throw new b({
                    param: e
                });
                if (u.name && ("address" === (a = u.name) || "bool" === a || "function" === a || "string" === a || "tuple" === a || n.eL.test(a) || n.lh.test(a) || O.test(a))) throw new h({
                    param: e,
                    name: u.name
                });
                let c = u.name ? {
                        name: u.name
                    } : {},
                    f = "indexed" === u.modifier ? {
                        indexed: !0
                    } : {},
                    p = t ? .structs ? ? {},
                    y = {};
                if (l) {
                    o = "tuple";
                    let e = S(u.type),
                        t = [],
                        r = e.length;
                    for (let n = 0; n < r; n++) t.push(C(e[n], {
                        structs: p
                    }));
                    y = {
                        components: t
                    }
                } else if (u.type in p) o = "tuple", y = {
                    components: p[u.type]
                };
                else if ($.test(u.type)) o = `${u.type}256`;
                else if (o = u.type, t ? .type !== "struct" && !R(o)) throw new m({
                    type: o
                });
                if (u.modifier) {
                    if (!t ? .modifiers ? .has ? .(u.modifier)) throw new g({
                        param: e,
                        type: t ? .type,
                        modifier: u.modifier
                    });
                    if (d.has(u.modifier) && (i = o, !u.array && "bytes" !== i && "string" !== i && "tuple" !== i)) throw new w({
                        param: e,
                        type: t ? .type,
                        modifier: u.modifier
                    })
                }
                let v = {
                    type: `${o}${u.array??""}`,
                    ...c,
                    ...f,
                    ...y
                };
                return P.set(s, v), v
            }

            function S(e, t = [], r = "", n = 0) {
                let a = e.trim().length;
                for (let i = 0; i < a; i++) {
                    let a = e[i],
                        o = e.slice(i + 1);
                    switch (a) {
                        case ",":
                            return 0 === n ? S(o, [...t, r.trim()]) : S(o, t, `${r}${a}`, n);
                        case "(":
                            return S(o, t, `${r}${a}`, n + 1);
                        case ")":
                            return S(o, t, `${r}${a}`, n - 1);
                        default:
                            return S(o, t, `${r}${a}`, n)
                    }
                }
                if ("" === r) return t;
                if (0 !== n) throw new A({
                    current: r,
                    depth: n
                });
                return t.push(r.trim()), t
            }

            function R(e) {
                return "address" === e || "bool" === e || "function" === e || "string" === e || n.eL.test(e) || n.lh.test(e)
            }
            let O = /^(?:after|alias|anonymous|apply|auto|byte|calldata|case|catch|constant|copyof|default|defined|error|event|external|false|final|function|immutable|implements|in|indexed|inline|internal|let|mapping|match|memory|mutable|null|of|override|partial|private|promise|public|pure|reference|relocatable|return|returns|sizeof|static|storage|struct|super|supports|switch|this|true|try|typedef|typeof|var|view|virtual)$/,
                T = /^(?<type>[a-zA-Z$_][a-zA-Z0-9$_]*)(?<array>(?:\[\d*?\])+?)?$/;

            function q(e) {
                let t = function(e) {
                        let t = {},
                            r = e.length;
                        for (let a = 0; a < r; a++) {
                            let r = e[a];
                            if (!s.test(r)) continue;
                            let i = (0, n.Zw)(s, r);
                            if (!i) throw new E({
                                signature: r,
                                type: "struct"
                            });
                            let o = i.properties.split(";"),
                                l = [],
                                u = o.length;
                            for (let e = 0; e < u; e++) {
                                let t = o[e],
                                    r = t.trim();
                                if (!r) continue;
                                let n = C(r, {
                                    type: "struct"
                                });
                                l.push(n)
                            }
                            if (!l.length) throw new B({
                                signature: r
                            });
                            t[i.name] = l
                        }
                        let a = {},
                            i = Object.entries(t),
                            o = i.length;
                        for (let e = 0; e < o; e++) {
                            let [r, o] = i[e];
                            a[r] = function e(t, r, a = new Set) {
                                let i = [],
                                    o = t.length;
                                for (let s = 0; s < o; s++) {
                                    let o = t[s],
                                        l = n.cN.test(o.type);
                                    if (l) i.push(o);
                                    else {
                                        let t = (0, n.Zw)(T, o.type);
                                        if (!t ? .type) throw new v({
                                            abiParameter: o
                                        });
                                        let {
                                            array: s,
                                            type: l
                                        } = t;
                                        if (l in r) {
                                            if (a.has(l)) throw new I({
                                                type: l
                                            });
                                            i.push({ ...o,
                                                type: `tuple${s??""}`,
                                                components: e(r[l] ? ? [], r, new Set([...a, l]))
                                            })
                                        } else if (R(l)) i.push(o);
                                        else throw new y({
                                            type: l
                                        })
                                    }
                                }
                                return i
                            }(o, t)
                        }
                        return a
                    }(e),
                    r = [],
                    p = e.length;
                for (let y = 0; y < p; y++) {
                    let p = e[y];
                    s.test(p) || r.push(function(e, t = {}) {
                        if (o.test(e)) {
                            let r = (0, n.Zw)(o, e);
                            if (!r) throw new E({
                                signature: e,
                                type: "function"
                            });
                            let a = S(r.parameters),
                                i = [],
                                s = a.length;
                            for (let e = 0; e < s; e++) i.push(C(a[e], {
                                modifiers: d,
                                structs: t,
                                type: "function"
                            }));
                            let l = [];
                            if (r.returns) {
                                let e = S(r.returns),
                                    n = e.length;
                                for (let r = 0; r < n; r++) l.push(C(e[r], {
                                    modifiers: d,
                                    structs: t,
                                    type: "function"
                                }))
                            }
                            return {
                                name: r.name,
                                type: "function",
                                stateMutability: r.stateMutability ? ? "nonpayable",
                                inputs: i,
                                outputs: l
                            }
                        }
                        if (i.test(e)) {
                            let r = (0, n.Zw)(i, e);
                            if (!r) throw new E({
                                signature: e,
                                type: "event"
                            });
                            let a = S(r.parameters),
                                o = [],
                                s = a.length;
                            for (let e = 0; e < s; e++) o.push(C(a[e], {
                                modifiers: f,
                                structs: t,
                                type: "event"
                            }));
                            return {
                                name: r.name,
                                type: "event",
                                inputs: o
                            }
                        }
                        if (a.test(e)) {
                            let r = (0, n.Zw)(a, e);
                            if (!r) throw new E({
                                signature: e,
                                type: "error"
                            });
                            let i = S(r.parameters),
                                o = [],
                                s = i.length;
                            for (let e = 0; e < s; e++) o.push(C(i[e], {
                                structs: t,
                                type: "error"
                            }));
                            return {
                                name: r.name,
                                type: "error",
                                inputs: o
                            }
                        }
                        if (l.test(e)) {
                            let r = (0, n.Zw)(l, e);
                            if (!r) throw new E({
                                signature: e,
                                type: "constructor"
                            });
                            let a = S(r.parameters),
                                i = [],
                                o = a.length;
                            for (let e = 0; e < o; e++) i.push(C(a[e], {
                                structs: t,
                                type: "constructor"
                            }));
                            return {
                                type: "constructor",
                                stateMutability: r.stateMutability ? ? "nonpayable",
                                inputs: i
                            }
                        }
                        if (u.test(e)) return {
                            type: "fallback"
                        };
                        if (c.test(e)) return {
                            type: "receive",
                            stateMutability: "payable"
                        };
                        throw new x({
                            signature: e
                        })
                    }(p, t))
                }
                return r
            }
            var F = r(92341),
                M = r(97812),
                j = r(75379),
                _ = r(82022),
                L = r(24113),
                z = r(24948),
                U = r(83817),
                Z = r(66053),
                D = r(12693),
                G = r(90826),
                H = r(96904),
                V = r(64458),
                W = r(58023),
                Y = r(19571),
                K = r(31892),
                Q = r(38345),
                J = r(75983),
                X = r(49619);
            async function ee(e, t) {
                let {
                    account: n = e.account,
                    batch: a = !!e.batch ? .multicall,
                    blockNumber: i,
                    blockTag: o = "latest",
                    accessList: s,
                    blobs: l,
                    code: u,
                    data: c,
                    factory: f,
                    factoryData: d,
                    gas: p,
                    gasPrice: y,
                    maxFeePerBlobGas: m,
                    maxFeePerGas: b,
                    maxPriorityFeePerGas: h,
                    nonce: g,
                    to: w,
                    value: v,
                    stateOverride: E,
                    ...x
                } = t, B = n ? (0, F.T)(n) : void 0;
                if (u && (f || d)) throw new _.G("Cannot provide both `code` & `factory`/`factoryData` as parameters.");
                if (u && w) throw new _.G("Cannot provide both `code` & `to` as parameters.");
                let I = u && c,
                    A = f && d && w && c,
                    P = I || A,
                    k = I ? function(e) {
                        let {
                            code: t,
                            data: r
                        } = e;
                        return (0, Z.w)({
                            abi: q(["constructor(bytes, bytes)"]),
                            bytecode: j.NO,
                            args: [t, r]
                        })
                    }({
                        code: u,
                        data: c
                    }) : A ? function(e) {
                        let {
                            data: t,
                            factory: r,
                            factoryData: n,
                            to: a
                        } = e;
                        return (0, Z.w)({
                            abi: q(["constructor(address, bytes, address, bytes)"]),
                            bytecode: j.pG,
                            args: [a, t, r, n]
                        })
                    }({
                        data: c,
                        factory: f,
                        factoryData: d,
                        to: w
                    }) : c;
                try {
                    (0, X.F)(t);
                    let r = i ? (0, H.eC)(i) : void 0,
                        n = r || o,
                        u = (0, J.mF)(E),
                        c = e.chain ? .formatters ? .transactionRequest ? .format,
                        f = c || K.tG,
                        d = f({ ...(0, Y.K)(x, {
                                format: c
                            }),
                            from: B ? .address,
                            accessList: s,
                            blobs: l,
                            data: k,
                            gas: p,
                            gasPrice: y,
                            maxFeePerBlobGas: m,
                            maxFeePerGas: b,
                            maxPriorityFeePerGas: h,
                            nonce: g,
                            to: P ? void 0 : w,
                            value: v
                        });
                    if (a && function({
                            request: e
                        }) {
                            let {
                                data: t,
                                to: r,
                                ...n
                            } = e;
                            return !(!t || t.startsWith("0x82ad56cb")) && !!r && !(Object.values(n).filter(e => void 0 !== e).length > 0)
                        }({
                            request: d
                        }) && !u) try {
                        return await et(e, { ...d,
                            blockNumber: i,
                            blockTag: o
                        })
                    } catch (e) {
                        if (!(e instanceof L.pZ) && !(e instanceof L.mm)) throw e
                    }
                    let I = await e.request({
                        method: "eth_call",
                        params: u ? [d, n, u] : [d, n]
                    });
                    if ("0x" === I) return {
                        data: void 0
                    };
                    return {
                        data: I
                    }
                } catch (o) {
                    let n = function(e) {
                            if (!(e instanceof _.G)) return;
                            let t = e.walk();
                            return "object" == typeof t ? .data ? t.data ? .data : t.data
                        }(o),
                        {
                            offchainLookup: a,
                            offchainLookupSignature: i
                        } = await r.e(8372).then(r.bind(r, 18372));
                    if (!1 !== e.ccipRead && n ? .slice(0, 10) === i && w) return {
                        data: await a(e, {
                            data: n,
                            to: w
                        })
                    };
                    if (P && n ? .slice(0, 10) === "0x101bb98d") throw new z.Mo({
                        factory: f
                    });
                    throw function(e, {
                        docsPath: t,
                        ...r
                    }) {
                        let n = (() => {
                            let t = (0, W.k)(e, r);
                            return t instanceof V.cj ? e : t
                        })();
                        return new z.cg(n, {
                            docsPath: t,
                            ...r
                        })
                    }(o, { ...t,
                        account: B,
                        chain: e.chain
                    })
                }
            }
            async function et(e, t) {
                let {
                    batchSize: r = 1024,
                    wait: n = 0
                } = "object" == typeof e.batch ? .multicall ? e.batch.multicall : {}, {
                    blockNumber: a,
                    blockTag: i = "latest",
                    data: o,
                    multicallAddress: s,
                    to: l
                } = t, u = s;
                if (!u) {
                    if (!e.chain) throw new L.pZ;
                    u = (0, G.L)({
                        blockNumber: a,
                        chain: e.chain,
                        contract: "multicall3"
                    })
                }
                let c = a ? (0, H.eC)(a) : void 0,
                    f = c || i,
                    {
                        schedule: d
                    } = (0, Q.S)({
                        id: `${e.uid}.${f}`,
                        wait: n,
                        shouldSplitBatch(e) {
                            let t = e.reduce((e, {
                                data: t
                            }) => e + (t.length - 2), 0);
                            return t > 2 * r
                        },
                        fn: async t => {
                            let r = t.map(e => ({
                                    allowFailure: !0,
                                    callData: e.data,
                                    target: e.to
                                })),
                                n = (0, D.R)({
                                    abi: M.F8,
                                    args: [r],
                                    functionName: "aggregate3"
                                }),
                                a = await e.request({
                                    method: "eth_call",
                                    params: [{
                                        data: n,
                                        to: u
                                    }, f]
                                });
                            return (0, U.k)({
                                abi: M.F8,
                                args: [r],
                                functionName: "aggregate3",
                                data: a || "0x"
                            })
                        }
                    }),
                    [{
                        returnData: p,
                        success: y
                    }] = await d({
                        data: o,
                        to: l
                    });
                if (!y) throw new z.VQ({
                    data: p
                });
                return "0x" === p ? {
                    data: void 0
                } : {
                    data: p
                }
            }
        },
        60121: function(e, t, r) {
            r.d(t, {
                s: function() {
                    return a
                }
            });
            var n = r(96904);
            async function a(e, {
                address: t,
                blockNumber: r,
                blockTag: a = "latest"
            }) {
                let i = r ? (0, n.eC)(r) : void 0,
                    o = await e.request({
                        method: "eth_getBalance",
                        params: [t, i || a]
                    });
                return BigInt(o)
            }
        },
        45808: function(e, t, r) {
            r.d(t, {
                A: function() {
                    return p
                }
            });
            var n = r(97812),
                a = r(79495),
                i = r(82022),
                o = r(24948),
                s = r(83817),
                l = r(12693),
                u = r(90826),
                c = r(41335),
                f = r(22122),
                d = r(98392);
            async function p(e, t) {
                let {
                    allowFailure: r = !0,
                    batchSize: p,
                    blockNumber: y,
                    blockTag: m,
                    multicallAddress: b,
                    stateOverride: h
                } = t, g = t.contracts, w = p ? ? ("object" == typeof e.batch ? .multicall && e.batch.multicall.batchSize || 1024), v = b;
                if (!v) {
                    if (!e.chain) throw Error("client chain not configured. multicallAddress is required.");
                    v = (0, u.L)({
                        blockNumber: y,
                        chain: e.chain,
                        contract: "multicall3"
                    })
                }
                let E = [
                        []
                    ],
                    x = 0,
                    B = 0;
                for (let e = 0; e < g.length; e++) {
                    let {
                        abi: t,
                        address: n,
                        args: a,
                        functionName: i
                    } = g[e];
                    try {
                        let e = (0, l.R)({
                            abi: t,
                            args: a,
                            functionName: i
                        });
                        B += (e.length - 2) / 2, w > 0 && B > w && E[x].length > 0 && (x++, B = (e.length - 2) / 2, E[x] = []), E[x] = [...E[x], {
                            allowFailure: !0,
                            callData: e,
                            target: n
                        }]
                    } catch (o) {
                        let e = (0, c.S)(o, {
                            abi: t,
                            address: n,
                            args: a,
                            docsPath: "/docs/contract/multicall",
                            functionName: i
                        });
                        if (!r) throw e;
                        E[x] = [...E[x], {
                            allowFailure: !0,
                            callData: "0x",
                            target: n
                        }]
                    }
                }
                let I = await Promise.allSettled(E.map(t => (0, f.s)(e, d.L, "readContract")({
                        abi: n.F8,
                        address: v,
                        args: [t],
                        blockNumber: y,
                        blockTag: m,
                        functionName: "aggregate3",
                        stateOverride: h
                    }))),
                    A = [];
                for (let e = 0; e < I.length; e++) {
                    let t = I[e];
                    if ("rejected" === t.status) {
                        if (!r) throw t.reason;
                        for (let r = 0; r < E[e].length; r++) A.push({
                            status: "failure",
                            error: t.reason,
                            result: void 0
                        });
                        continue
                    }
                    let n = t.value;
                    for (let t = 0; t < n.length; t++) {
                        let {
                            returnData: i,
                            success: l
                        } = n[t], {
                            callData: u
                        } = E[e][t], {
                            abi: f,
                            address: d,
                            functionName: p,
                            args: y
                        } = g[A.length];
                        try {
                            if ("0x" === u) throw new a.wb;
                            if (!l) throw new o.VQ({
                                data: i
                            });
                            let e = (0, s.k)({
                                abi: f,
                                args: y,
                                data: i,
                                functionName: p
                            });
                            A.push(r ? {
                                result: e,
                                status: "success"
                            } : e)
                        } catch (t) {
                            let e = (0, c.S)(t, {
                                abi: f,
                                address: d,
                                args: y,
                                docsPath: "/docs/contract/multicall",
                                functionName: p
                            });
                            if (!r) throw e;
                            A.push({
                                error: e,
                                result: void 0,
                                status: "failure"
                            })
                        }
                    }
                }
                if (A.length !== g.length) throw new i.G("multicall results mismatch");
                return A
            }
        },
        98392: function(e, t, r) {
            r.d(t, {
                L: function() {
                    return l
                }
            });
            var n = r(83817),
                a = r(12693),
                i = r(41335),
                o = r(22122),
                s = r(85403);
            async function l(e, t) {
                let {
                    abi: r,
                    address: l,
                    args: u,
                    functionName: c,
                    ...f
                } = t, d = (0, a.R)({
                    abi: r,
                    args: u,
                    functionName: c
                });
                try {
                    let {
                        data: t
                    } = await (0, o.s)(e, s.R, "call")({ ...f,
                        data: d,
                        to: l
                    });
                    return (0, n.k)({
                        abi: r,
                        args: u,
                        functionName: c,
                        data: t || "0x"
                    })
                } catch (e) {
                    throw (0, i.S)(e, {
                        abi: r,
                        address: l,
                        args: u,
                        docsPath: "/docs/contract/readContract",
                        functionName: c
                    })
                }
            }
        },
        98356: function(e, t, r) {
            r.d(t, {
                R: function() {
                    return a
                }
            });
            var n = r(25009);
            let a = (0, n.a)({
                id: 1,
                name: "Ethereum",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://cloudflare-eth.com"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Etherscan",
                        url: "https://etherscan.io",
                        apiUrl: "https://api.etherscan.io/api"
                    }
                },
                contracts: {
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67",
                        blockCreated: 19258213
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 14353601
                    }
                }
            })
        },
        52766: function(e, t, r) {
            r.d(t, {
                F: function() {
                    return a
                }
            });
            var n = r(25009);
            let a = (0, n.a)({
                id: 11155111,
                name: "Sepolia",
                nativeCurrency: {
                    name: "Sepolia Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    default: {
                        http: ["https://rpc.sepolia.org"]
                    }
                },
                blockExplorers: {
                    default: {
                        name: "Etherscan",
                        url: "https://sepolia.etherscan.io",
                        apiUrl: "https://api-sepolia.etherscan.io/api"
                    }
                },
                contracts: {
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 751532
                    },
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC",
                        blockCreated: 5317080
                    }
                },
                testnet: !0
            })
        },
        29364: function(e, t, r) {
            r.d(t, {
                v: function() {
                    return i
                }
            });
            var n = r(85074),
                a = r(52598);

            function i(e) {
                let {
                    key: t = "public",
                    name: r = "Public Client"
                } = e, i = (0, n.e)({ ...e,
                    key: t,
                    name: r,
                    type: "publicClient"
                });
                return i.extend(a.I)
            }
        },
        52598: function(e, t, r) {
            r.d(t, {
                I: function() {
                    return t5
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                gk: function() {
                    return e_
                },
                dQ: function() {
                    return eX
                },
                ci: function() {
                    return ez
                },
                bytesToNumberBE: function() {
                    return eH
                },
                ty: function() {
                    return eV
                },
                eV: function() {
                    return eQ
                },
                n$: function() {
                    return e6
                },
                ql: function() {
                    return eK
                },
                Wd: function() {
                    return eJ
                },
                hexToBytes: function() {
                    return eG
                },
                _t: function() {
                    return ej
                },
                tL: function() {
                    return eW
                },
                S5: function() {
                    return eY
                },
                FF: function() {
                    return e2
                }
            });
            var a = r(97812),
                i = r(83817),
                o = r(12693),
                s = r(90826),
                l = r(48630),
                u = r(96904),
                c = r(25023),
                f = r(90774),
                d = r(956),
                p = r(22122),
                y = r(98392);
            async function m(e, {
                blockNumber: t,
                blockTag: r,
                coinType: n,
                name: m,
                gatewayUrls: b,
                strict: h,
                universalResolverAddress: g
            }) {
                let w = g;
                if (!w) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    w = (0, s.L)({
                        blockNumber: t,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                try {
                    let s = (0, o.R)({
                            abi: a.X$,
                            functionName: "addr",
                            ...null != n ? {
                                args: [(0, f.V)(m), BigInt(n)]
                            } : {
                                args: [(0, f.V)(m)]
                            }
                        }),
                        c = {
                            address: w,
                            abi: a.k3,
                            functionName: "resolve",
                            args: [(0, u.NC)((0, d.T)(m)), s],
                            blockNumber: t,
                            blockTag: r
                        },
                        h = (0, p.s)(e, y.L, "readContract"),
                        g = b ? await h({ ...c,
                            args: [...c.args, b]
                        }) : await h(c);
                    if ("0x" === g[0]) return null;
                    let v = (0, i.k)({
                        abi: a.X$,
                        args: null != n ? [(0, f.V)(m), BigInt(n)] : void 0,
                        functionName: "addr",
                        data: g[0]
                    });
                    if ("0x" === v || "0x00" === (0, l.f)(v)) return null;
                    return v
                } catch (e) {
                    if (h) throw e;
                    if ((0, c.c)(e, "resolve")) return null;
                    throw e
                }
            }
            var b = r(1007),
                h = r(43822);
            async function g(e, {
                blockNumber: t,
                blockTag: r,
                name: n,
                universalResolverAddress: a
            }) {
                let i = a;
                if (!i) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    i = (0, s.L)({
                        blockNumber: t,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                let [o] = await (0, p.s)(e, y.L, "readContract")({
                    address: i,
                    abi: [{
                        inputs: [{
                            type: "bytes"
                        }],
                        name: "findResolver",
                        outputs: [{
                            type: "address"
                        }, {
                            type: "bytes32"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }],
                    functionName: "findResolver",
                    args: [(0, u.NC)((0, d.T)(n))],
                    blockNumber: t,
                    blockTag: r
                });
                return o
            }
            var w = r(36791),
                v = r(85403);

            function E(e, {
                method: t
            }) {
                let r = {};
                return "fallback" === e.transport.type && e.transport.onResponse ? .(({
                    method: e,
                    response: n,
                    status: a,
                    transport: i
                }) => {
                    "success" === a && t === e && (r[n] = i.request)
                }), t => r[t] || e.request
            }
            async function x(e) {
                let t = E(e, {
                        method: "eth_newBlockFilter"
                    }),
                    r = await e.request({
                        method: "eth_newBlockFilter"
                    });
                return {
                    id: r,
                    request: t(r),
                    type: "block"
                }
            }
            var B = r(79495),
                I = r(82022);
            class A extends I.G {
                constructor(e) {
                    super(`Filter type "${e}" is not supported.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "FilterTypeNotSupportedError"
                    })
                }
            }
            var P = r(93749),
                k = r(68178),
                N = r(8100),
                $ = r(74743),
                C = r(84971),
                S = r(27342);
            let R = "/docs/contract/encodeEventTopics";

            function O(e) {
                let {
                    abi: t,
                    eventName: r,
                    args: n
                } = e, a = t[0];
                if (r) {
                    let e = (0, S.mE)({
                        abi: t,
                        name: r
                    });
                    if (!e) throw new B.mv(r, {
                        docsPath: R
                    });
                    a = e
                }
                if ("event" !== a.type) throw new B.mv(void 0, {
                    docsPath: R
                });
                let i = (0, C.t)(a),
                    o = (0, N.n)(i),
                    s = [];
                if (n && "inputs" in a) {
                    let e = a.inputs ? .filter(e => "indexed" in e && e.indexed),
                        t = Array.isArray(n) ? n : Object.values(n).length > 0 ? e ? .map(e => n[e.name]) ? ? [] : [];
                    t.length > 0 && (s = e ? .map((e, r) => Array.isArray(t[r]) ? t[r].map((n, a) => T({
                        param: e,
                        value: t[r][a]
                    })) : t[r] ? T({
                        param: e,
                        value: t[r]
                    }) : null) ? ? [])
                }
                return [o, ...s]
            }

            function T({
                param: e,
                value: t
            }) {
                if ("string" === e.type || "bytes" === e.type) return (0, k.w)((0, P.O0)(t));
                if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/)) throw new A(e.type);
                return (0, $.E)([e], [t])
            }
            async function q(e, t) {
                let {
                    address: r,
                    abi: n,
                    args: a,
                    eventName: i,
                    fromBlock: o,
                    strict: s,
                    toBlock: l
                } = t, c = E(e, {
                    method: "eth_newFilter"
                }), f = i ? O({
                    abi: n,
                    args: a,
                    eventName: i
                }) : void 0, d = await e.request({
                    method: "eth_newFilter",
                    params: [{
                        address: r,
                        fromBlock: "bigint" == typeof o ? (0, u.eC)(o) : o,
                        toBlock: "bigint" == typeof l ? (0, u.eC)(l) : l,
                        topics: f
                    }]
                });
                return {
                    abi: n,
                    args: a,
                    eventName: i,
                    id: d,
                    request: c(d),
                    strict: !!s,
                    type: "event"
                }
            }
            async function F(e, {
                address: t,
                args: r,
                event: n,
                events: a,
                fromBlock: i,
                strict: o,
                toBlock: s
            } = {}) {
                let l = a ? ? (n ? [n] : void 0),
                    c = E(e, {
                        method: "eth_newFilter"
                    }),
                    f = [];
                if (l) {
                    let e = l.flatMap(e => O({
                        abi: [e],
                        eventName: e.name,
                        args: r
                    }));
                    f = [e], n && (f = f[0])
                }
                let d = await e.request({
                    method: "eth_newFilter",
                    params: [{
                        address: t,
                        fromBlock: "bigint" == typeof i ? (0, u.eC)(i) : i,
                        toBlock: "bigint" == typeof s ? (0, u.eC)(s) : s,
                        ...f.length ? {
                            topics: f
                        } : {}
                    }]
                });
                return {
                    abi: l,
                    args: r,
                    eventName: n ? n.name : void 0,
                    fromBlock: i,
                    id: d,
                    request: c(d),
                    strict: !!o,
                    toBlock: s,
                    type: "event"
                }
            }
            async function M(e) {
                let t = E(e, {
                        method: "eth_newPendingTransactionFilter"
                    }),
                    r = await e.request({
                        method: "eth_newPendingTransactionFilter"
                    });
                return {
                    id: r,
                    request: t(r),
                    type: "transaction"
                }
            }
            var j = r(92341),
                _ = r(41335),
                L = r(25383);
            async function z(e, t) {
                let {
                    abi: r,
                    address: n,
                    args: a,
                    functionName: i,
                    ...s
                } = t, l = (0, o.R)({
                    abi: r,
                    args: a,
                    functionName: i
                });
                try {
                    let t = await (0, p.s)(e, L.Q, "estimateGas")({
                        data: l,
                        to: n,
                        ...s
                    });
                    return t
                } catch (t) {
                    let e = s.account ? (0, j.T)(s.account) : void 0;
                    throw (0, _.S)(t, {
                        abi: r,
                        address: n,
                        args: a,
                        docsPath: "/docs/contract/estimateContractGas",
                        functionName: i,
                        sender: e ? .address
                    })
                }
            }
            var U = r(34001),
                Z = r(36460),
                D = r(60121);
            async function G(e) {
                let t = await e.request({
                    method: "eth_blobBaseFee"
                });
                return BigInt(t)
            }
            var H = r(34654);
            let V = new Map,
                W = new Map;
            async function Y(e, {
                cacheKey: t,
                cacheTime: r = Number.POSITIVE_INFINITY
            }) {
                let n = function(e) {
                        let t = (e, t) => ({
                                clear: () => t.delete(e),
                                get: () => t.get(e),
                                set: r => t.set(e, r)
                            }),
                            r = t(e, V),
                            n = t(e, W);
                        return {
                            clear: () => {
                                r.clear(), n.clear()
                            },
                            promise: r,
                            response: n
                        }
                    }(t),
                    a = n.response.get();
                if (a && r > 0) {
                    let e = new Date().getTime() - a.created.getTime();
                    if (e < r) return a.data
                }
                let i = n.promise.get();
                i || (i = e(), n.promise.set(i));
                try {
                    let e = await i;
                    return n.response.set({
                        created: new Date,
                        data: e
                    }), e
                } finally {
                    n.promise.clear()
                }
            }
            let K = e => `blockNumber.${e}`;
            async function Q(e, {
                cacheTime: t = e.cacheTime
            } = {}) {
                let r = await Y(() => e.request({
                    method: "eth_blockNumber"
                }), {
                    cacheKey: K(e.uid),
                    cacheTime: t
                });
                return BigInt(r)
            }
            var J = r(45194);
            async function X(e, {
                blockHash: t,
                blockNumber: r,
                blockTag: n = "latest"
            } = {}) {
                let a;
                let i = void 0 !== r ? (0, u.eC)(r) : void 0;
                return a = t ? await e.request({
                    method: "eth_getBlockTransactionCountByHash",
                    params: [t]
                }, {
                    dedupe: !0
                }) : await e.request({
                    method: "eth_getBlockTransactionCountByNumber",
                    params: [i || n]
                }, {
                    dedupe: !!i
                }), (0, J.ly)(a)
            }
            var ee = r(16958);
            async function et(e, {
                address: t,
                blockNumber: r,
                blockTag: n = "latest"
            }) {
                let a = void 0 !== r ? (0, u.eC)(r) : void 0,
                    i = await e.request({
                        method: "eth_getCode",
                        params: [t, a || n]
                    }, {
                        dedupe: !!a
                    });
                if ("0x" !== i) return i
            }
            var er = r(6803),
                en = r(84617),
                ea = r(60923);
            let ei = "/docs/contract/decodeEventLog";

            function eo(e) {
                let {
                    abi: t,
                    data: r,
                    strict: n,
                    topics: a
                } = e, i = n ? ? !0, [o, ...s] = a;
                if (!o) throw new B.FM({
                    docsPath: ei
                });
                let l = t.find(e => "event" === e.type && o === (0, N.n)((0, C.t)(e)));
                if (!(l && "name" in l) || "event" !== l.type) throw new B.lC(o, {
                    docsPath: ei
                });
                let {
                    name: u,
                    inputs: c
                } = l, f = c ? .some(e => !("name" in e && e.name)), d = f ? [] : {}, p = c.filter(e => "indexed" in e && e.indexed);
                for (let e = 0; e < p.length; e++) {
                    let t = p[e],
                        r = s[e];
                    if (!r) throw new B.Gy({
                        abiItem: l,
                        param: t
                    });
                    d[f ? e : t.name || e] = function({
                        param: e,
                        value: t
                    }) {
                        if ("string" === e.type || "bytes" === e.type || "tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/)) return t;
                        let r = (0, ea.r)([e], t) || [];
                        return r[0]
                    }({
                        param: t,
                        value: r
                    })
                }
                let y = c.filter(e => !("indexed" in e && e.indexed));
                if (y.length > 0) {
                    if (r && "0x" !== r) try {
                        let e = (0, ea.r)(y, r);
                        if (e) {
                            if (f) d = [...d, ...e];
                            else
                                for (let t = 0; t < y.length; t++) d[y[t].name] = e[t]
                        }
                    } catch (e) {
                        if (i) {
                            if (e instanceof B.xB || e instanceof en.lQ) throw new B.SM({
                                abiItem: l,
                                data: r,
                                params: y,
                                size: (0, er.d)(r)
                            });
                            throw e
                        }
                    } else if (i) throw new B.SM({
                        abiItem: l,
                        data: "0x",
                        params: y,
                        size: 0
                    })
                }
                return {
                    eventName: u,
                    args: Object.values(d).length > 0 ? d : void 0
                }
            }

            function es({
                abi: e,
                eventName: t,
                logs: r,
                strict: n = !0
            }) {
                return r.map(r => {
                    try {
                        let a = eo({ ...r,
                            abi: e,
                            strict: n
                        });
                        if (t && !t.includes(a.eventName)) return null;
                        return { ...a,
                            ...r
                        }
                    } catch (a) {
                        let e, t;
                        if (a instanceof B.lC) return null;
                        if (a instanceof B.SM || a instanceof B.Gy) {
                            if (n) return null;
                            e = a.abiItem.name, t = a.abiItem.inputs ? .some(e => !("name" in e && e.name))
                        }
                        return { ...r,
                            args: t ? [] : {},
                            eventName: e
                        }
                    }
                }).filter(Boolean)
            }

            function el(e, {
                args: t,
                eventName: r
            } = {}) {
                return { ...e,
                    blockHash: e.blockHash ? e.blockHash : null,
                    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                    logIndex: e.logIndex ? Number(e.logIndex) : null,
                    transactionHash: e.transactionHash ? e.transactionHash : null,
                    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
                    ...r ? {
                        args: t,
                        eventName: r
                    } : {}
                }
            }
            async function eu(e, {
                address: t,
                blockHash: r,
                fromBlock: n,
                toBlock: a,
                event: i,
                events: o,
                args: s,
                strict: l
            } = {}) {
                let c;
                let f = o ? ? (i ? [i] : void 0),
                    d = [];
                if (f) {
                    let e = f.flatMap(e => O({
                        abi: [e],
                        eventName: e.name,
                        args: s
                    }));
                    d = [e], i && (d = d[0])
                }
                c = r ? await e.request({
                    method: "eth_getLogs",
                    params: [{
                        address: t,
                        topics: d,
                        blockHash: r
                    }]
                }) : await e.request({
                    method: "eth_getLogs",
                    params: [{
                        address: t,
                        topics: d,
                        fromBlock: "bigint" == typeof n ? (0, u.eC)(n) : n,
                        toBlock: "bigint" == typeof a ? (0, u.eC)(a) : a
                    }]
                });
                let p = c.map(e => el(e));
                return f ? es({
                    abi: f,
                    logs: p,
                    strict: l ? ? !1
                }) : p
            }
            async function ec(e, t) {
                let {
                    abi: r,
                    address: n,
                    args: a,
                    blockHash: i,
                    eventName: o,
                    fromBlock: s,
                    toBlock: l,
                    strict: u
                } = t, c = o ? (0, S.mE)({
                    abi: r,
                    name: o
                }) : void 0, f = c ? void 0 : r.filter(e => "event" === e.type);
                return (0, p.s)(e, eu, "getLogs")({
                    address: n,
                    args: a,
                    blockHash: i,
                    event: c,
                    events: f,
                    fromBlock: s,
                    toBlock: l,
                    strict: u
                })
            }
            class ef extends I.G {
                constructor({
                    address: e
                }) {
                    super(`No EIP-712 domain found on contract "${e}".`, {
                        metaMessages: ["Ensure that:", `- The contract is deployed at the address "${e}".`, "- `eip712Domain()` function exists on the contract.", "- `eip712Domain()` function matches signature to ERC-5267 specification."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "Eip712DomainNotFoundError"
                    })
                }
            }
            async function ed(e, t) {
                let {
                    address: r,
                    factory: n,
                    factoryData: a
                } = t;
                try {
                    let [t, i, o, s, l, u, c] = await (0, p.s)(e, y.L, "readContract")({
                        abi: ep,
                        address: r,
                        functionName: "eip712Domain",
                        factory: n,
                        factoryData: a
                    });
                    return {
                        domain: {
                            name: i,
                            version: o,
                            chainId: Number(s),
                            verifyingContract: l,
                            salt: u
                        },
                        extensions: c,
                        fields: t
                    }
                } catch (e) {
                    if ("ContractFunctionExecutionError" === e.name && "ContractFunctionZeroDataError" === e.cause.name) throw new ef({
                        address: r
                    });
                    throw e
                }
            }
            let ep = [{
                inputs: [],
                name: "eip712Domain",
                outputs: [{
                    name: "fields",
                    type: "bytes1"
                }, {
                    name: "name",
                    type: "string"
                }, {
                    name: "version",
                    type: "string"
                }, {
                    name: "chainId",
                    type: "uint256"
                }, {
                    name: "verifyingContract",
                    type: "address"
                }, {
                    name: "salt",
                    type: "bytes32"
                }, {
                    name: "extensions",
                    type: "uint256[]"
                }],
                stateMutability: "view",
                type: "function"
            }];
            async function ey(e, {
                blockCount: t,
                blockNumber: r,
                blockTag: n = "latest",
                rewardPercentiles: a
            }) {
                let i = r ? (0, u.eC)(r) : void 0,
                    o = await e.request({
                        method: "eth_feeHistory",
                        params: [(0, u.eC)(t), i || n, a]
                    }, {
                        dedupe: !!i
                    });
                return {
                    baseFeePerGas: o.baseFeePerGas.map(e => BigInt(e)),
                    gasUsedRatio: o.gasUsedRatio,
                    oldestBlock: BigInt(o.oldestBlock),
                    reward: o.reward ? .map(e => e.map(e => BigInt(e)))
                }
            }
            async function em(e, {
                filter: t
            }) {
                let r = "strict" in t && t.strict,
                    n = await t.request({
                        method: "eth_getFilterChanges",
                        params: [t.id]
                    });
                if ("string" == typeof n[0]) return n;
                let a = n.map(e => el(e));
                return "abi" in t && t.abi ? es({
                    abi: t.abi,
                    logs: a,
                    strict: r
                }) : a
            }
            async function eb(e, {
                filter: t
            }) {
                let r = t.strict ? ? !1,
                    n = await t.request({
                        method: "eth_getFilterLogs",
                        params: [t.id]
                    }),
                    a = n.map(e => el(e));
                return t.abi ? es({
                    abi: t.abi,
                    logs: a,
                    strict: r
                }) : a
            }
            var eh = r(79486);
            async function eg(e, {
                address: t,
                blockNumber: r,
                blockTag: n,
                storageKeys: a
            }) {
                let i = void 0 !== r ? (0, u.eC)(r) : void 0,
                    o = await e.request({
                        method: "eth_getProof",
                        params: [t, a, i || (n ? ? "latest")]
                    });
                return { ...o,
                    balance: o.balance ? BigInt(o.balance) : void 0,
                    nonce: o.nonce ? (0, J.ly)(o.nonce) : void 0,
                    storageProof: o.storageProof ? o.storageProof.map(e => ({ ...e,
                        value: BigInt(e.value)
                    })) : void 0
                }
            }
            async function ew(e, {
                address: t,
                blockNumber: r,
                blockTag: n = "latest",
                slot: a
            }) {
                let i = void 0 !== r ? (0, u.eC)(r) : void 0,
                    o = await e.request({
                        method: "eth_getStorageAt",
                        params: [t, a, i || n]
                    });
                return o
            }
            var ev = r(36923),
                eE = r(25259);
            async function ex(e, {
                blockHash: t,
                blockNumber: r,
                blockTag: n,
                hash: a,
                index: i
            }) {
                let o = n || "latest",
                    s = void 0 !== r ? (0, u.eC)(r) : void 0,
                    l = null;
                if (a ? l = await e.request({
                        method: "eth_getTransactionByHash",
                        params: [a]
                    }, {
                        dedupe: !0
                    }) : t ? l = await e.request({
                        method: "eth_getTransactionByBlockHashAndIndex",
                        params: [t, (0, u.eC)(i)]
                    }, {
                        dedupe: !0
                    }) : (s || o) && (l = await e.request({
                        method: "eth_getTransactionByBlockNumberAndIndex",
                        params: [s || o, (0, u.eC)(i)]
                    }, {
                        dedupe: !!s
                    })), !l) throw new ev.Bh({
                    blockHash: t,
                    blockNumber: r,
                    blockTag: o,
                    hash: a,
                    index: i
                });
                let c = e.chain ? .formatters ? .transaction ? .format || eE.Tr;
                return c(l)
            }
            async function eB(e, {
                hash: t,
                transactionReceipt: r
            }) {
                let [n, a] = await Promise.all([(0, p.s)(e, Q, "getBlockNumber")({}), t ? (0, p.s)(e, ex, "getTransaction")({
                    hash: t
                }) : void 0]), i = r ? .blockNumber || a ? .blockNumber;
                return i ? n - i + 1 n : 0 n
            }
            var eI = r(98247);
            let eA = {
                "0x0": "reverted",
                "0x1": "success"
            };

            function eP(e) {
                let t = { ...e,
                    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                    contractAddress: e.contractAddress ? e.contractAddress : null,
                    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
                    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
                    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
                    logs: e.logs ? e.logs.map(e => el(e)) : null,
                    to: e.to ? e.to : null,
                    transactionIndex: e.transactionIndex ? (0, J.ly)(e.transactionIndex) : null,
                    status: e.status ? eA[e.status] : null,
                    type: e.type ? eE.c8[e.type] || e.type : null
                };
                return e.blobGasPrice && (t.blobGasPrice = BigInt(e.blobGasPrice)), e.blobGasUsed && (t.blobGasUsed = BigInt(e.blobGasUsed)), t
            }
            async function ek(e, {
                hash: t
            }) {
                let r = await e.request({
                    method: "eth_getTransactionReceipt",
                    params: [t]
                }, {
                    dedupe: !0
                });
                if (!r) throw new ev.Yb({
                    hash: t
                });
                let n = e.chain ? .formatters ? .transactionReceipt ? .format || eP;
                return n(r)
            }
            var eN = r(45808);
            async function e$(e, t) {
                let {
                    abi: r,
                    address: n,
                    args: a,
                    dataSuffix: s,
                    functionName: l,
                    ...u
                } = t, c = u.account ? (0, j.T)(u.account) : e.account, f = (0, o.R)({
                    abi: r,
                    args: a,
                    functionName: l
                });
                try {
                    let {
                        data: o
                    } = await (0, p.s)(e, v.R, "call")({
                        batch: !1,
                        data: `${f}${s?s.replace("0x",""):""}`,
                        to: n,
                        ...u,
                        account: c
                    }), d = (0, i.k)({
                        abi: r,
                        args: a,
                        functionName: l,
                        data: o || "0x"
                    }), y = r.filter(e => "name" in e && e.name === t.functionName);
                    return {
                        result: d,
                        request: {
                            abi: y,
                            address: n,
                            args: a,
                            dataSuffix: s,
                            functionName: l,
                            ...u,
                            account: c
                        }
                    }
                } catch (e) {
                    throw (0, _.S)(e, {
                        abi: r,
                        address: n,
                        args: a,
                        docsPath: "/docs/contract/simulateContract",
                        functionName: l,
                        sender: c ? .address
                    })
                }
            }
            async function eC(e, {
                filter: t
            }) {
                return t.request({
                    method: "eth_uninstallFilter",
                    params: [t.id]
                })
            }
            var eS = r(99786);

            function eR(e, t) {
                return (0, k.w)(function(e) {
                    let t = "string" == typeof e ? (0, u.$G)(e) : "string" == typeof e.raw ? e.raw : (0, u.ci)(e.raw),
                        r = (0, u.$G)(`Ethereum Signed Message:
${(0,er.d)(t)}`);
                    return (0, eS.zo)([r, t])
                }(e), t)
            }
            var eO = r(75379),
                eT = r(24948),
                eq = r(66053);
            BigInt(0);
            let eF = BigInt(1),
                eM = BigInt(2);

            function ej(e) {
                return e instanceof Uint8Array || null != e && "object" == typeof e && "Uint8Array" === e.constructor.name
            }

            function e_(e) {
                if (!ej(e)) throw Error("Uint8Array expected")
            }
            let eL = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));

            function ez(e) {
                e_(e);
                let t = "";
                for (let r = 0; r < e.length; r++) t += eL[e[r]];
                return t
            }

            function eU(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                return BigInt("" === e ? "0" : `0x${e}`)
            }
            let eZ = {
                _0: 48,
                _9: 57,
                _A: 65,
                _F: 70,
                _a: 97,
                _f: 102
            };

            function eD(e) {
                return e >= eZ._0 && e <= eZ._9 ? e - eZ._0 : e >= eZ._A && e <= eZ._F ? e - (eZ._A - 10) : e >= eZ._a && e <= eZ._f ? e - (eZ._a - 10) : void 0
            }

            function eG(e) {
                if ("string" != typeof e) throw Error("hex string expected, got " + typeof e);
                let t = e.length,
                    r = t / 2;
                if (t % 2) throw Error("padded hex string expected, got unpadded hex of length " + t);
                let n = new Uint8Array(r);
                for (let t = 0, a = 0; t < r; t++, a += 2) {
                    let r = eD(e.charCodeAt(a)),
                        i = eD(e.charCodeAt(a + 1));
                    if (void 0 === r || void 0 === i) {
                        let t = e[a] + e[a + 1];
                        throw Error('hex string expected, got non-hex character "' + t + '" at index ' + a)
                    }
                    n[t] = 16 * r + i
                }
                return n
            }

            function eH(e) {
                return eU(ez(e))
            }

            function eV(e) {
                return e_(e), eU(ez(Uint8Array.from(e).reverse()))
            }

            function eW(e, t) {
                return eG(e.toString(16).padStart(2 * t, "0"))
            }

            function eY(e, t) {
                return eW(e, t).reverse()
            }

            function eK(e, t, r) {
                let n;
                if ("string" == typeof t) try {
                        n = eG(t)
                    } catch (r) {
                        throw Error(`${e} must be valid hex string, got "${t}". Cause: ${r}`)
                    } else if (ej(t)) n = Uint8Array.from(t);
                    else throw Error(`${e} must be hex string or Uint8Array`);
                let a = n.length;
                if ("number" == typeof r && a !== r) throw Error(`${e} expected ${r} bytes, got ${a}`);
                return n
            }

            function eQ(...e) {
                let t = 0;
                for (let r = 0; r < e.length; r++) {
                    let n = e[r];
                    e_(n), t += n.length
                }
                let r = new Uint8Array(t);
                for (let t = 0, n = 0; t < e.length; t++) {
                    let a = e[t];
                    r.set(a, n), n += a.length
                }
                return r
            }

            function eJ(e, t) {
                if (e.length !== t.length) return !1;
                let r = 0;
                for (let n = 0; n < e.length; n++) r |= e[n] ^ t[n];
                return 0 === r
            }
            let eX = e => (eM << BigInt(e - 1)) - eF,
                e0 = e => new Uint8Array(e),
                e1 = e => Uint8Array.from(e);

            function e6(e, t, r) {
                if ("number" != typeof e || e < 2) throw Error("hashLen must be a number");
                if ("number" != typeof t || t < 2) throw Error("qByteLen must be a number");
                if ("function" != typeof r) throw Error("hmacFn must be a function");
                let n = e0(e),
                    a = e0(e),
                    i = 0,
                    o = () => {
                        n.fill(1), a.fill(0), i = 0
                    },
                    s = (...e) => r(a, n, ...e),
                    l = (e = e0()) => {
                        a = s(e1([0]), e), n = s(), 0 !== e.length && (a = s(e1([1]), e), n = s())
                    },
                    u = () => {
                        if (i++ >= 1e3) throw Error("drbg: tried 1000 values");
                        let e = 0,
                            r = [];
                        for (; e < t;) {
                            n = s();
                            let t = n.slice();
                            r.push(t), e += n.length
                        }
                        return eQ(...r)
                    };
                return (e, t) => {
                    let r;
                    for (o(), l(e); !(r = t(u()));) l();
                    return o(), r
                }
            }
            let e5 = {
                bigint: e => "bigint" == typeof e,
                function: e => "function" == typeof e,
                boolean: e => "boolean" == typeof e,
                string: e => "string" == typeof e,
                stringOrUint8Array: e => "string" == typeof e || ej(e),
                isSafeInteger: e => Number.isSafeInteger(e),
                array: e => Array.isArray(e),
                field: (e, t) => t.Fp.isValid(e),
                hash: e => "function" == typeof e && Number.isSafeInteger(e.outputLen)
            };

            function e2(e, t, r = {}) {
                let n = (t, r, n) => {
                    let a = e5[r];
                    if ("function" != typeof a) throw Error(`Invalid validator "${r}", expected function`);
                    let i = e[t];
                    if ((!n || void 0 !== i) && !a(i, e)) throw Error(`Invalid param ${String(t)}=${i} (${typeof i}), expected ${r}`)
                };
                for (let [e, r] of Object.entries(t)) n(e, r, !1);
                for (let [e, t] of Object.entries(r)) n(e, t, !0);
                return e
            }
            var e8 = r(37016);
            let e3 = "0x6492649264926492649264926492649264926492649264926492649264926492";
            var e9 = r(46386),
                e4 = r(13325); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            let e7 = BigInt(0),
                te = BigInt(1),
                tt = BigInt(2),
                tr = BigInt(3),
                tn = BigInt(4),
                ta = BigInt(5),
                ti = BigInt(8);

            function to(e, t) {
                let r = e % t;
                return r >= e7 ? r : t + r
            }

            function ts(e, t, r) {
                let n = e;
                for (; t-- > e7;) n *= n, n %= r;
                return n
            }

            function tl(e, t) {
                if (e === e7 || t <= e7) throw Error(`invert: expected positive integers, got n=${e} mod=${t}`);
                let r = to(e, t),
                    n = t,
                    a = e7,
                    i = te,
                    o = te,
                    s = e7;
                for (; r !== e7;) {
                    let e = n / r,
                        t = n % r,
                        l = a - o * e,
                        u = i - s * e;
                    n = r, r = t, a = o, i = s, o = l, s = u
                }
                let l = n;
                if (l !== te) throw Error("invert: does not exist");
                return to(a, t)
            }
            BigInt(9), BigInt(16);
            let tu = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];

            function tc(e, t) {
                let r = void 0 !== t ? t : e.toString(2).length;
                return {
                    nBitLength: r,
                    nByteLength: Math.ceil(r / 8)
                }
            }

            function tf(e) {
                if ("bigint" != typeof e) throw Error("field order must be bigint");
                let t = e.toString(2).length;
                return Math.ceil(t / 8)
            }

            function td(e) {
                let t = tf(e);
                return t + Math.ceil(t / 2)
            }
            var tp = r(74482),
                ty = r(50882);
            class tm extends ty.kb {
                constructor(e, t) {
                    super(), this.finished = !1, this.destroyed = !1, (0, tp.vp)(e);
                    let r = (0, ty.O0)(t);
                    if (this.iHash = e.create(), "function" != typeof this.iHash.update) throw Error("Expected instance of class which extends utils.Hash");
                    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
                    let n = this.blockLen,
                        a = new Uint8Array(n);
                    a.set(r.length > n ? e.create().update(r).digest() : r);
                    for (let e = 0; e < a.length; e++) a[e] ^= 54;
                    this.iHash.update(a), this.oHash = e.create();
                    for (let e = 0; e < a.length; e++) a[e] ^= 106;
                    this.oHash.update(a), a.fill(0)
                }
                update(e) {
                    return (0, tp.Gg)(this), this.iHash.update(e), this
                }
                digestInto(e) {
                    (0, tp.Gg)(this), (0, tp.aI)(e, this.outputLen), this.finished = !0, this.iHash.digestInto(e), this.oHash.update(e), this.oHash.digestInto(e), this.destroy()
                }
                digest() {
                    let e = new Uint8Array(this.oHash.outputLen);
                    return this.digestInto(e), e
                }
                _cloneInto(e) {
                    e || (e = Object.create(Object.getPrototypeOf(this), {}));
                    let {
                        oHash: t,
                        iHash: r,
                        finished: n,
                        destroyed: a,
                        blockLen: i,
                        outputLen: o
                    } = this;
                    return e.finished = n, e.destroyed = a, e.blockLen = i, e.outputLen = o, e.oHash = t._cloneInto(e.oHash), e.iHash = r._cloneInto(e.iHash), e
                }
                destroy() {
                    this.destroyed = !0, this.oHash.destroy(), this.iHash.destroy()
                }
            }
            let tb = (e, t, r) => new tm(e, t).update(r).digest();
            tb.create = (e, t) => new tm(e, t); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            let th = BigInt(0),
                tg = BigInt(1);

            function tw(e) {
                return ! function(e) {
                    let t = tu.reduce((e, t) => (e[t] = "function", e), {
                        ORDER: "bigint",
                        MASK: "bigint",
                        BYTES: "isSafeInteger",
                        BITS: "isSafeInteger"
                    });
                    e2(e, t)
                }(e.Fp), e2(e, {
                    n: "bigint",
                    h: "bigint",
                    Gx: "field",
                    Gy: "field"
                }, {
                    nBitLength: "isSafeInteger",
                    nByteLength: "isSafeInteger"
                }), Object.freeze({ ...tc(e.n, e.nBitLength),
                    ...e,
                    p: e.Fp.ORDER
                })
            }
            let {
                bytesToNumberBE: tv,
                hexToBytes: tE
            } = n, tx = {
                Err: class extends Error {
                    constructor(e = "") {
                        super(e)
                    }
                },
                _parseInt(e) {
                    let {
                        Err: t
                    } = tx;
                    if (e.length < 2 || 2 !== e[0]) throw new t("Invalid signature integer tag");
                    let r = e[1],
                        n = e.subarray(2, r + 2);
                    if (!r || n.length !== r) throw new t("Invalid signature integer: wrong length");
                    if (128 & n[0]) throw new t("Invalid signature integer: negative");
                    if (0 === n[0] && !(128 & n[1])) throw new t("Invalid signature integer: unnecessary leading zero");
                    return {
                        d: tv(n),
                        l: e.subarray(r + 2)
                    }
                },
                toSig(e) {
                    let {
                        Err: t
                    } = tx, r = "string" == typeof e ? tE(e) : e;
                    e_(r);
                    let n = r.length;
                    if (n < 2 || 48 != r[0]) throw new t("Invalid signature tag");
                    if (r[1] !== n - 2) throw new t("Invalid signature: incorrect length");
                    let {
                        d: a,
                        l: i
                    } = tx._parseInt(r.subarray(2)), {
                        d: o,
                        l: s
                    } = tx._parseInt(i);
                    if (s.length) throw new t("Invalid signature: left bytes after parsing");
                    return {
                        r: a,
                        s: o
                    }
                },
                hexFromSig(e) {
                    let t = e => 8 & Number.parseInt(e[0], 16) ? "00" + e : e,
                        r = e => {
                            let t = e.toString(16);
                            return 1 & t.length ? `0${t}` : t
                        },
                        n = t(r(e.s)),
                        a = t(r(e.r)),
                        i = n.length / 2,
                        o = a.length / 2,
                        s = r(i),
                        l = r(o);
                    return `30${r(o+i+4)}02${l}${a}02${s}${n}`
                }
            }, tB = BigInt(0), tI = BigInt(1), tA = (BigInt(2), BigInt(3));
            BigInt(4); /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */
            let tP = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
                tk = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
                tN = BigInt(1),
                t$ = BigInt(2),
                tC = (e, t) => (e + t / t$) / t,
                tS = function(e, t, r = !1, n = {}) {
                    if (e <= e7) throw Error(`Expected Field ORDER > 0, got ${e}`);
                    let {
                        nBitLength: a,
                        nByteLength: i
                    } = tc(e, t);
                    if (i > 2048) throw Error("Field lengths over 2048 bytes are not supported");
                    let o = function(e) {
                            if (e % tn === tr) {
                                let t = (e + te) / tn;
                                return function(e, r) {
                                    let n = e.pow(r, t);
                                    if (!e.eql(e.sqr(n), r)) throw Error("Cannot find square root");
                                    return n
                                }
                            }
                            if (e % ti === ta) {
                                let t = (e - ta) / ti;
                                return function(e, r) {
                                    let n = e.mul(r, tt),
                                        a = e.pow(n, t),
                                        i = e.mul(r, a),
                                        o = e.mul(e.mul(i, tt), a),
                                        s = e.mul(i, e.sub(o, e.ONE));
                                    if (!e.eql(e.sqr(s), r)) throw Error("Cannot find square root");
                                    return s
                                }
                            }
                            return function(e) {
                                let t, r, n;
                                let a = (e - te) / tt;
                                for (t = e - te, r = 0; t % tt === e7; t /= tt, r++);
                                for (n = tt; n < e && function(e, t, r) {
                                        if (r <= e7 || t < e7) throw Error("Expected power/modulo > 0");
                                        if (r === te) return e7;
                                        let n = te;
                                        for (; t > e7;) t & te && (n = n * e % r), e = e * e % r, t >>= te;
                                        return n
                                    }(n, a, e) !== e - te; n++);
                                if (1 === r) {
                                    let t = (e + te) / tn;
                                    return function(e, r) {
                                        let n = e.pow(r, t);
                                        if (!e.eql(e.sqr(n), r)) throw Error("Cannot find square root");
                                        return n
                                    }
                                }
                                let i = (t + te) / tt;
                                return function(e, o) {
                                    if (e.pow(o, a) === e.neg(e.ONE)) throw Error("Cannot find square root");
                                    let s = r,
                                        l = e.pow(e.mul(e.ONE, n), t),
                                        u = e.pow(o, i),
                                        c = e.pow(o, t);
                                    for (; !e.eql(c, e.ONE);) {
                                        if (e.eql(c, e.ZERO)) return e.ZERO;
                                        let t = 1;
                                        for (let r = e.sqr(c); t < s && !e.eql(r, e.ONE); t++) r = e.sqr(r);
                                        let r = e.pow(l, te << BigInt(s - t - 1));
                                        l = e.sqr(r), u = e.mul(u, r), c = e.mul(c, l), s = t
                                    }
                                    return u
                                }
                            }(e)
                        }(e),
                        s = Object.freeze({
                            ORDER: e,
                            BITS: a,
                            BYTES: i,
                            MASK: eX(a),
                            ZERO: e7,
                            ONE: te,
                            create: t => to(t, e),
                            isValid: t => {
                                if ("bigint" != typeof t) throw Error(`Invalid field element: expected bigint, got ${typeof t}`);
                                return e7 <= t && t < e
                            },
                            is0: e => e === e7,
                            isOdd: e => (e & te) === te,
                            neg: t => to(-t, e),
                            eql: (e, t) => e === t,
                            sqr: t => to(t * t, e),
                            add: (t, r) => to(t + r, e),
                            sub: (t, r) => to(t - r, e),
                            mul: (t, r) => to(t * r, e),
                            pow: (e, t) => (function(e, t, r) {
                                if (r < e7) throw Error("Expected power > 0");
                                if (r === e7) return e.ONE;
                                if (r === te) return t;
                                let n = e.ONE,
                                    a = t;
                                for (; r > e7;) r & te && (n = e.mul(n, a)), a = e.sqr(a), r >>= te;
                                return n
                            })(s, e, t),
                            div: (t, r) => to(t * tl(r, e), e),
                            sqrN: e => e * e,
                            addN: (e, t) => e + t,
                            subN: (e, t) => e - t,
                            mulN: (e, t) => e * t,
                            inv: t => tl(t, e),
                            sqrt: n.sqrt || (e => o(s, e)),
                            invertBatch: e => (function(e, t) {
                                let r = Array(t.length),
                                    n = t.reduce((t, n, a) => e.is0(n) ? t : (r[a] = t, e.mul(t, n)), e.ONE),
                                    a = e.inv(n);
                                return t.reduceRight((t, n, a) => e.is0(n) ? t : (r[a] = e.mul(t, r[a]), e.mul(t, n)), a), r
                            })(s, e),
                            cmov: (e, t, r) => r ? t : e,
                            toBytes: e => r ? eY(e, i) : eW(e, i),
                            fromBytes: e => {
                                if (e.length !== i) throw Error(`Fp.fromBytes: expected ${i}, got ${e.length}`);
                                return r ? eV(e) : eH(e)
                            }
                        });
                    return Object.freeze(s)
                }(tP, void 0, void 0, {
                    sqrt: function(e) {
                        let t = BigInt(3),
                            r = BigInt(6),
                            n = BigInt(11),
                            a = BigInt(22),
                            i = BigInt(23),
                            o = BigInt(44),
                            s = BigInt(88),
                            l = e * e * e % tP,
                            u = l * l * e % tP,
                            c = ts(u, t, tP) * u % tP,
                            f = ts(c, t, tP) * u % tP,
                            d = ts(f, t$, tP) * l % tP,
                            p = ts(d, n, tP) * d % tP,
                            y = ts(p, a, tP) * p % tP,
                            m = ts(y, o, tP) * y % tP,
                            b = ts(m, s, tP) * m % tP,
                            h = ts(b, o, tP) * y % tP,
                            g = ts(h, t, tP) * u % tP,
                            w = ts(g, i, tP) * p % tP,
                            v = ts(w, r, tP) * l % tP,
                            E = ts(v, t$, tP);
                        if (!tS.eql(tS.sqr(E), e)) throw Error("Cannot find square root");
                        return E
                    }
                }),
                tR = function(e, t) {
                    let r = t => (function(e) {
                        let t = function(e) {
                                let t = tw(e);
                                return e2(t, {
                                    hash: "hash",
                                    hmac: "function",
                                    randomBytes: "function"
                                }, {
                                    bits2int: "function",
                                    bits2int_modN: "function",
                                    lowS: "boolean"
                                }), Object.freeze({
                                    lowS: !0,
                                    ...t
                                })
                            }(e),
                            {
                                Fp: r,
                                n: n
                            } = t,
                            a = r.BYTES + 1,
                            i = 2 * r.BYTES + 1;

                        function o(e) {
                            return to(e, n)
                        }
                        let {
                            ProjectivePoint: s,
                            normPrivateKeyToScalar: l,
                            weierstrassEquation: u,
                            isWithinCurveOrder: c
                        } = function(e) {
                            let t = /*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */ function(e) {
                                    let t = tw(e);
                                    e2(t, {
                                        a: "field",
                                        b: "field"
                                    }, {
                                        allowedPrivateKeyLengths: "array",
                                        wrapPrivateKey: "boolean",
                                        isTorsionFree: "function",
                                        clearCofactor: "function",
                                        allowInfinityPoint: "boolean",
                                        fromBytes: "function",
                                        toBytes: "function"
                                    });
                                    let {
                                        endo: r,
                                        Fp: n,
                                        a
                                    } = t;
                                    if (r) {
                                        if (!n.eql(a, n.ZERO)) throw Error("Endomorphism can only be defined for Koblitz curves that have a=0");
                                        if ("object" != typeof r || "bigint" != typeof r.beta || "function" != typeof r.splitScalar) throw Error("Expected endomorphism with beta: bigint and splitScalar: function")
                                    }
                                    return Object.freeze({ ...t
                                    })
                                }(e),
                                {
                                    Fp: r
                                } = t,
                                n = t.toBytes || ((e, t, n) => {
                                    let a = t.toAffine();
                                    return eQ(Uint8Array.from([4]), r.toBytes(a.x), r.toBytes(a.y))
                                }),
                                a = t.fromBytes || (e => {
                                    let t = e.subarray(1),
                                        n = r.fromBytes(t.subarray(0, r.BYTES)),
                                        a = r.fromBytes(t.subarray(r.BYTES, 2 * r.BYTES));
                                    return {
                                        x: n,
                                        y: a
                                    }
                                });

                            function i(e) {
                                let {
                                    a: n,
                                    b: a
                                } = t, i = r.sqr(e), o = r.mul(i, e);
                                return r.add(r.add(o, r.mul(e, n)), a)
                            }
                            if (!r.eql(r.sqr(t.Gy), i(t.Gx))) throw Error("bad generator point: equation left != right");

                            function o(e) {
                                return "bigint" == typeof e && tB < e && e < t.n
                            }

                            function s(e) {
                                if (!o(e)) throw Error("Expected valid bigint: 0 < bigint < curve.n")
                            }

                            function l(e) {
                                let r;
                                let {
                                    allowedPrivateKeyLengths: n,
                                    nByteLength: a,
                                    wrapPrivateKey: i,
                                    n: o
                                } = t;
                                if (n && "bigint" != typeof e) {
                                    if (ej(e) && (e = ez(e)), "string" != typeof e || !n.includes(e.length)) throw Error("Invalid key");
                                    e = e.padStart(2 * a, "0")
                                }
                                try {
                                    r = "bigint" == typeof e ? e : eH(eK("private key", e, a))
                                } catch (t) {
                                    throw Error(`private key must be ${a} bytes, hex or bigint, not ${typeof e}`)
                                }
                                return i && (r = to(r, o)), s(r), r
                            }
                            let u = new Map;

                            function c(e) {
                                if (!(e instanceof f)) throw Error("ProjectivePoint expected")
                            }
                            class f {
                                constructor(e, t, n) {
                                    if (this.px = e, this.py = t, this.pz = n, null == e || !r.isValid(e)) throw Error("x required");
                                    if (null == t || !r.isValid(t)) throw Error("y required");
                                    if (null == n || !r.isValid(n)) throw Error("z required")
                                }
                                static fromAffine(e) {
                                    let {
                                        x: t,
                                        y: n
                                    } = e || {};
                                    if (!e || !r.isValid(t) || !r.isValid(n)) throw Error("invalid affine point");
                                    if (e instanceof f) throw Error("projective point not allowed");
                                    let a = e => r.eql(e, r.ZERO);
                                    return a(t) && a(n) ? f.ZERO : new f(t, n, r.ONE)
                                }
                                get x() {
                                    return this.toAffine().x
                                }
                                get y() {
                                    return this.toAffine().y
                                }
                                static normalizeZ(e) {
                                    let t = r.invertBatch(e.map(e => e.pz));
                                    return e.map((e, r) => e.toAffine(t[r])).map(f.fromAffine)
                                }
                                static fromHex(e) {
                                    let t = f.fromAffine(a(eK("pointHex", e)));
                                    return t.assertValidity(), t
                                }
                                static fromPrivateKey(e) {
                                    return f.BASE.multiply(l(e))
                                }
                                _setWindowSize(e) {
                                    this._WINDOW_SIZE = e, u.delete(this)
                                }
                                assertValidity() {
                                    if (this.is0()) {
                                        if (t.allowInfinityPoint && !r.is0(this.py)) return;
                                        throw Error("bad point: ZERO")
                                    }
                                    let {
                                        x: e,
                                        y: n
                                    } = this.toAffine();
                                    if (!r.isValid(e) || !r.isValid(n)) throw Error("bad point: x or y not FE");
                                    let a = r.sqr(n),
                                        o = i(e);
                                    if (!r.eql(a, o)) throw Error("bad point: equation left != right");
                                    if (!this.isTorsionFree()) throw Error("bad point: not in prime-order subgroup")
                                }
                                hasEvenY() {
                                    let {
                                        y: e
                                    } = this.toAffine();
                                    if (r.isOdd) return !r.isOdd(e);
                                    throw Error("Field doesn't support isOdd")
                                }
                                equals(e) {
                                    c(e);
                                    let {
                                        px: t,
                                        py: n,
                                        pz: a
                                    } = this, {
                                        px: i,
                                        py: o,
                                        pz: s
                                    } = e, l = r.eql(r.mul(t, s), r.mul(i, a)), u = r.eql(r.mul(n, s), r.mul(o, a));
                                    return l && u
                                }
                                negate() {
                                    return new f(this.px, r.neg(this.py), this.pz)
                                }
                                double() {
                                    let {
                                        a: e,
                                        b: n
                                    } = t, a = r.mul(n, tA), {
                                        px: i,
                                        py: o,
                                        pz: s
                                    } = this, l = r.ZERO, u = r.ZERO, c = r.ZERO, d = r.mul(i, i), p = r.mul(o, o), y = r.mul(s, s), m = r.mul(i, o);
                                    return m = r.add(m, m), c = r.mul(i, s), c = r.add(c, c), l = r.mul(e, c), u = r.mul(a, y), u = r.add(l, u), l = r.sub(p, u), u = r.add(p, u), u = r.mul(l, u), l = r.mul(m, l), c = r.mul(a, c), y = r.mul(e, y), m = r.sub(d, y), m = r.mul(e, m), m = r.add(m, c), c = r.add(d, d), d = r.add(c, d), d = r.add(d, y), d = r.mul(d, m), u = r.add(u, d), y = r.mul(o, s), y = r.add(y, y), d = r.mul(y, m), l = r.sub(l, d), c = r.mul(y, p), c = r.add(c, c), new f(l, u, c = r.add(c, c))
                                }
                                add(e) {
                                    c(e);
                                    let {
                                        px: n,
                                        py: a,
                                        pz: i
                                    } = this, {
                                        px: o,
                                        py: s,
                                        pz: l
                                    } = e, u = r.ZERO, d = r.ZERO, p = r.ZERO, y = t.a, m = r.mul(t.b, tA), b = r.mul(n, o), h = r.mul(a, s), g = r.mul(i, l), w = r.add(n, a), v = r.add(o, s);
                                    w = r.mul(w, v), v = r.add(b, h), w = r.sub(w, v), v = r.add(n, i);
                                    let E = r.add(o, l);
                                    return v = r.mul(v, E), E = r.add(b, g), v = r.sub(v, E), E = r.add(a, i), u = r.add(s, l), E = r.mul(E, u), u = r.add(h, g), E = r.sub(E, u), p = r.mul(y, v), u = r.mul(m, g), p = r.add(u, p), u = r.sub(h, p), p = r.add(h, p), d = r.mul(u, p), h = r.add(b, b), h = r.add(h, b), g = r.mul(y, g), v = r.mul(m, v), h = r.add(h, g), g = r.sub(b, g), g = r.mul(y, g), v = r.add(v, g), b = r.mul(h, v), d = r.add(d, b), b = r.mul(E, v), u = r.mul(w, u), u = r.sub(u, b), b = r.mul(w, h), p = r.mul(E, p), new f(u, d, p = r.add(p, b))
                                }
                                subtract(e) {
                                    return this.add(e.negate())
                                }
                                is0() {
                                    return this.equals(f.ZERO)
                                }
                                wNAF(e) {
                                    return p.wNAFCached(this, u, e, e => {
                                        let t = r.invertBatch(e.map(e => e.pz));
                                        return e.map((e, r) => e.toAffine(t[r])).map(f.fromAffine)
                                    })
                                }
                                multiplyUnsafe(e) {
                                    let n = f.ZERO;
                                    if (e === tB) return n;
                                    if (s(e), e === tI) return this;
                                    let {
                                        endo: a
                                    } = t;
                                    if (!a) return p.unsafeLadder(this, e);
                                    let {
                                        k1neg: i,
                                        k1: o,
                                        k2neg: l,
                                        k2: u
                                    } = a.splitScalar(e), c = n, d = n, y = this;
                                    for (; o > tB || u > tB;) o & tI && (c = c.add(y)), u & tI && (d = d.add(y)), y = y.double(), o >>= tI, u >>= tI;
                                    return i && (c = c.negate()), l && (d = d.negate()), d = new f(r.mul(d.px, a.beta), d.py, d.pz), c.add(d)
                                }
                                multiply(e) {
                                    let n, a;
                                    s(e);
                                    let {
                                        endo: i
                                    } = t;
                                    if (i) {
                                        let {
                                            k1neg: t,
                                            k1: o,
                                            k2neg: s,
                                            k2: l
                                        } = i.splitScalar(e), {
                                            p: u,
                                            f: c
                                        } = this.wNAF(o), {
                                            p: d,
                                            f: y
                                        } = this.wNAF(l);
                                        u = p.constTimeNegate(t, u), d = p.constTimeNegate(s, d), d = new f(r.mul(d.px, i.beta), d.py, d.pz), n = u.add(d), a = c.add(y)
                                    } else {
                                        let {
                                            p: t,
                                            f: r
                                        } = this.wNAF(e);
                                        n = t, a = r
                                    }
                                    return f.normalizeZ([n, a])[0]
                                }
                                multiplyAndAddUnsafe(e, t, r) {
                                    let n = f.BASE,
                                        a = (e, t) => t !== tB && t !== tI && e.equals(n) ? e.multiply(t) : e.multiplyUnsafe(t),
                                        i = a(this, t).add(a(e, r));
                                    return i.is0() ? void 0 : i
                                }
                                toAffine(e) {
                                    let {
                                        px: t,
                                        py: n,
                                        pz: a
                                    } = this, i = this.is0();
                                    null == e && (e = i ? r.ONE : r.inv(a));
                                    let o = r.mul(t, e),
                                        s = r.mul(n, e),
                                        l = r.mul(a, e);
                                    if (i) return {
                                        x: r.ZERO,
                                        y: r.ZERO
                                    };
                                    if (!r.eql(l, r.ONE)) throw Error("invZ was invalid");
                                    return {
                                        x: o,
                                        y: s
                                    }
                                }
                                isTorsionFree() {
                                    let {
                                        h: e,
                                        isTorsionFree: r
                                    } = t;
                                    if (e === tI) return !0;
                                    if (r) return r(f, this);
                                    throw Error("isTorsionFree() has not been declared for the elliptic curve")
                                }
                                clearCofactor() {
                                    let {
                                        h: e,
                                        clearCofactor: r
                                    } = t;
                                    return e === tI ? this : r ? r(f, this) : this.multiplyUnsafe(t.h)
                                }
                                toRawBytes(e = !0) {
                                    return this.assertValidity(), n(f, this, e)
                                }
                                toHex(e = !0) {
                                    return ez(this.toRawBytes(e))
                                }
                            }
                            f.BASE = new f(t.Gx, t.Gy, r.ONE), f.ZERO = new f(r.ZERO, r.ONE, r.ZERO);
                            let d = t.nBitLength,
                                p = function(e, t) {
                                    let r = (e, t) => {
                                            let r = t.negate();
                                            return e ? r : t
                                        },
                                        n = e => ({
                                            windows: Math.ceil(t / e) + 1,
                                            windowSize: 2 ** (e - 1)
                                        });
                                    return {
                                        constTimeNegate: r,
                                        unsafeLadder(t, r) {
                                            let n = e.ZERO,
                                                a = t;
                                            for (; r > th;) r & tg && (n = n.add(a)), a = a.double(), r >>= tg;
                                            return n
                                        },
                                        precomputeWindow(e, t) {
                                            let {
                                                windows: r,
                                                windowSize: a
                                            } = n(t), i = [], o = e, s = o;
                                            for (let e = 0; e < r; e++) {
                                                s = o, i.push(s);
                                                for (let e = 1; e < a; e++) s = s.add(o), i.push(s);
                                                o = s.double()
                                            }
                                            return i
                                        },
                                        wNAF(t, a, i) {
                                            let {
                                                windows: o,
                                                windowSize: s
                                            } = n(t), l = e.ZERO, u = e.BASE, c = BigInt(2 ** t - 1), f = 2 ** t, d = BigInt(t);
                                            for (let e = 0; e < o; e++) {
                                                let t = e * s,
                                                    n = Number(i & c);
                                                i >>= d, n > s && (n -= f, i += tg);
                                                let o = t + Math.abs(n) - 1,
                                                    p = e % 2 != 0,
                                                    y = n < 0;
                                                0 === n ? u = u.add(r(p, a[t])) : l = l.add(r(y, a[o]))
                                            }
                                            return {
                                                p: l,
                                                f: u
                                            }
                                        },
                                        wNAFCached(e, t, r, n) {
                                            let a = e._WINDOW_SIZE || 1,
                                                i = t.get(e);
                                            return i || (i = this.precomputeWindow(e, a), 1 !== a && t.set(e, n(i))), this.wNAF(a, i, r)
                                        }
                                    }
                                }(f, t.endo ? Math.ceil(d / 2) : d);
                            return {
                                CURVE: t,
                                ProjectivePoint: f,
                                normPrivateKeyToScalar: l,
                                weierstrassEquation: i,
                                isWithinCurveOrder: o
                            }
                        }({ ...t,
                            toBytes(e, t, n) {
                                let a = t.toAffine(),
                                    i = r.toBytes(a.x),
                                    o = eQ;
                                return n ? o(Uint8Array.from([t.hasEvenY() ? 2 : 3]), i) : o(Uint8Array.from([4]), i, r.toBytes(a.y))
                            },
                            fromBytes(e) {
                                let t = e.length,
                                    n = e[0],
                                    o = e.subarray(1);
                                if (t === a && (2 === n || 3 === n)) {
                                    let e;
                                    let t = eH(o);
                                    if (!(tB < t && t < r.ORDER)) throw Error("Point is not on curve");
                                    let a = u(t);
                                    try {
                                        e = r.sqrt(a)
                                    } catch (t) {
                                        let e = t instanceof Error ? ": " + t.message : "";
                                        throw Error("Point is not on curve" + e)
                                    }
                                    let i = (e & tI) === tI;
                                    return (1 & n) == 1 !== i && (e = r.neg(e)), {
                                        x: t,
                                        y: e
                                    }
                                }
                                if (t === i && 4 === n) {
                                    let e = r.fromBytes(o.subarray(0, r.BYTES)),
                                        t = r.fromBytes(o.subarray(r.BYTES, 2 * r.BYTES));
                                    return {
                                        x: e,
                                        y: t
                                    }
                                }
                                throw Error(`Point of length ${t} was invalid. Expected ${a} compressed bytes or ${i} uncompressed bytes`)
                            }
                        }), f = e => ez(eW(e, t.nByteLength));

                        function d(e) {
                            let t = n >> tI;
                            return e > t
                        }
                        let p = (e, t, r) => eH(e.slice(t, r));
                        class y {
                            constructor(e, t, r) {
                                this.r = e, this.s = t, this.recovery = r, this.assertValidity()
                            }
                            static fromCompact(e) {
                                let r = t.nByteLength;
                                return new y(p(e = eK("compactSignature", e, 2 * r), 0, r), p(e, r, 2 * r))
                            }
                            static fromDER(e) {
                                let {
                                    r: t,
                                    s: r
                                } = tx.toSig(eK("DER", e));
                                return new y(t, r)
                            }
                            assertValidity() {
                                if (!c(this.r)) throw Error("r must be 0 < r < CURVE.n");
                                if (!c(this.s)) throw Error("s must be 0 < s < CURVE.n")
                            }
                            addRecoveryBit(e) {
                                return new y(this.r, this.s, e)
                            }
                            recoverPublicKey(e) {
                                let {
                                    r: a,
                                    s: i,
                                    recovery: l
                                } = this, u = h(eK("msgHash", e));
                                if (null == l || ![0, 1, 2, 3].includes(l)) throw Error("recovery id invalid");
                                let c = 2 === l || 3 === l ? a + t.n : a;
                                if (c >= r.ORDER) throw Error("recovery id 2 or 3 invalid");
                                let d = (1 & l) == 0 ? "02" : "03",
                                    p = s.fromHex(d + f(c)),
                                    y = tl(c, n),
                                    m = o(-u * y),
                                    b = o(i * y),
                                    g = s.BASE.multiplyAndAddUnsafe(p, m, b);
                                if (!g) throw Error("point at infinify");
                                return g.assertValidity(), g
                            }
                            hasHighS() {
                                return d(this.s)
                            }
                            normalizeS() {
                                return this.hasHighS() ? new y(this.r, o(-this.s), this.recovery) : this
                            }
                            toDERRawBytes() {
                                return eG(this.toDERHex())
                            }
                            toDERHex() {
                                return tx.hexFromSig({
                                    r: this.r,
                                    s: this.s
                                })
                            }
                            toCompactRawBytes() {
                                return eG(this.toCompactHex())
                            }
                            toCompactHex() {
                                return f(this.r) + f(this.s)
                            }
                        }

                        function m(e) {
                            let t = ej(e),
                                r = "string" == typeof e,
                                n = (t || r) && e.length;
                            return t ? n === a || n === i : r ? n === 2 * a || n === 2 * i : e instanceof s
                        }
                        let b = t.bits2int || function(e) {
                                let r = eH(e),
                                    n = 8 * e.length - t.nBitLength;
                                return n > 0 ? r >> BigInt(n) : r
                            },
                            h = t.bits2int_modN || function(e) {
                                return o(b(e))
                            },
                            g = eX(t.nBitLength);

                        function w(e) {
                            if ("bigint" != typeof e) throw Error("bigint expected");
                            if (!(tB <= e && e < g)) throw Error(`bigint expected < 2^${t.nBitLength}`);
                            return eW(e, t.nByteLength)
                        }
                        let v = {
                                lowS: t.lowS,
                                prehash: !1
                            },
                            E = {
                                lowS: t.lowS,
                                prehash: !1
                            };
                        return s.BASE._setWindowSize(8), {
                            CURVE: t,
                            getPublicKey: function(e, t = !0) {
                                return s.fromPrivateKey(e).toRawBytes(t)
                            },
                            getSharedSecret: function(e, t, r = !0) {
                                if (m(e)) throw Error("first arg must be private key");
                                if (!m(t)) throw Error("second arg must be public key");
                                let n = s.fromHex(t);
                                return n.multiply(l(e)).toRawBytes(r)
                            },
                            sign: function(e, a, i = v) {
                                let {
                                    seed: u,
                                    k2sig: f
                                } = function(e, a, i = v) {
                                    if (["recovered", "canonical"].some(e => e in i)) throw Error("sign() legacy options not supported");
                                    let {
                                        hash: u,
                                        randomBytes: f
                                    } = t, {
                                        lowS: p,
                                        prehash: m,
                                        extraEntropy: g
                                    } = i;
                                    null == p && (p = !0), e = eK("msgHash", e), m && (e = eK("prehashed msgHash", u(e)));
                                    let E = h(e),
                                        x = l(a),
                                        B = [w(x), w(E)];
                                    if (null != g && !1 !== g) {
                                        let e = !0 === g ? f(r.BYTES) : g;
                                        B.push(eK("extraEntropy", e))
                                    }
                                    let I = eQ(...B);
                                    return {
                                        seed: I,
                                        k2sig: function(e) {
                                            let t = b(e);
                                            if (!c(t)) return;
                                            let r = tl(t, n),
                                                a = s.BASE.multiply(t).toAffine(),
                                                i = o(a.x);
                                            if (i === tB) return;
                                            let l = o(r * o(E + i * x));
                                            if (l === tB) return;
                                            let u = (a.x === i ? 0 : 2) | Number(a.y & tI),
                                                f = l;
                                            return p && d(l) && (f = d(l) ? o(-l) : l, u ^= 1), new y(i, f, u)
                                        }
                                    }
                                }(e, a, i), p = e6(t.hash.outputLen, t.nByteLength, t.hmac);
                                return p(u, f)
                            },
                            verify: function(e, r, a, i = E) {
                                let l, u;
                                if (r = eK("msgHash", r), a = eK("publicKey", a), "strict" in i) throw Error("options.strict was renamed to lowS");
                                let {
                                    lowS: c,
                                    prehash: f
                                } = i;
                                try {
                                    if ("string" == typeof e || ej(e)) try {
                                        u = y.fromDER(e)
                                    } catch (t) {
                                        if (!(t instanceof tx.Err)) throw t;
                                        u = y.fromCompact(e)
                                    } else if ("object" == typeof e && "bigint" == typeof e.r && "bigint" == typeof e.s) {
                                        let {
                                            r: t,
                                            s: r
                                        } = e;
                                        u = new y(t, r)
                                    } else throw Error("PARSE");
                                    l = s.fromHex(a)
                                } catch (e) {
                                    if ("PARSE" === e.message) throw Error("signature must be Signature instance, Uint8Array or hex string");
                                    return !1
                                }
                                if (c && u.hasHighS()) return !1;
                                f && (r = t.hash(r));
                                let {
                                    r: d,
                                    s: p
                                } = u, m = h(r), b = tl(p, n), g = o(m * b), w = o(d * b), v = s.BASE.multiplyAndAddUnsafe(l, g, w) ? .toAffine();
                                if (!v) return !1;
                                let x = o(v.x);
                                return x === d
                            },
                            ProjectivePoint: s,
                            Signature: y,
                            utils: {
                                isValidPrivateKey(e) {
                                    try {
                                        return l(e), !0
                                    } catch (e) {
                                        return !1
                                    }
                                },
                                normPrivateKeyToScalar: l,
                                randomPrivateKey: () => {
                                    let e = td(t.n);
                                    return function(e, t, r = !1) {
                                        let n = e.length,
                                            a = tf(t),
                                            i = td(t);
                                        if (n < 16 || n < i || n > 1024) throw Error(`expected ${i}-1024 bytes of input, got ${n}`);
                                        let o = r ? eH(e) : eV(e),
                                            s = to(o, t - te) + te;
                                        return r ? eY(s, a) : eW(s, a)
                                    }(t.randomBytes(e), t.n)
                                },
                                precompute: (e = 8, t = s.BASE) => (t._setWindowSize(e), t.multiply(BigInt(3)), t)
                            }
                        }
                    })({ ...e,
                        hash: t,
                        hmac: (e, ...r) => tb(t, e, (0, ty.eV)(...r)),
                        randomBytes: ty.O6
                    });
                    return Object.freeze({ ...r(t),
                        create: r
                    })
                }({
                    a: BigInt(0),
                    b: BigInt(7),
                    Fp: tS,
                    n: tk,
                    Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
                    Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
                    h: BigInt(1),
                    lowS: !0,
                    endo: {
                        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
                        splitScalar: e => {
                            let t = BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
                                r = -tN * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
                                n = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
                                a = BigInt("0x100000000000000000000000000000000"),
                                i = tC(t * e, tk),
                                o = tC(-r * e, tk),
                                s = to(e - i * t - o * n, tk),
                                l = to(-i * r - o * t, tk),
                                u = s > a,
                                c = l > a;
                            if (u && (s = tk - s), c && (l = tk - l), s > a || l > a) throw Error("splitScalar: Endomorphism failed, k=" + e);
                            return {
                                k1neg: u,
                                k1: s,
                                k2neg: c,
                                k2: l
                            }
                        }
                    }
                }, e4.J);
            async function tO(e, t) {
                let {
                    address: r,
                    factory: n,
                    factoryData: i,
                    hash: o,
                    signature: s,
                    ...l
                } = t, c = (0, e8.v)(s) ? s : "object" == typeof s && "r" in s && "s" in s ? function({
                    r: e,
                    s: t,
                    v: r,
                    yParity: n
                }) {
                    let a = (() => {
                        if (0 === n || 1 === n) return n;
                        if (r && (27 n === r || 28 n === r || r >= 35 n)) return r % 2 n === 0 n ? 1 : 0;
                        throw Error("Invalid `v` or `yParity` value")
                    })();
                    return `0x${new tR.Signature((0,J.y_)(e),(0,J.y_)(t)).toCompactHex()}${0===a?"1b":"1c"}`
                }(s) : (0, u.ci)(s), f = await (async () => {
                    if (!n && !i || (0, e9.p5)(c, -32) === e3) return c;
                    let t = await (0, p.s)(e, et, "getCode")({
                        address: r
                    });
                    return t ? c : function(e) {
                        let {
                            address: t,
                            data: r,
                            signature: n
                        } = e;
                        return (0, eS.SM)([(0, $.E)([{
                            type: "address"
                        }, {
                            type: "bytes"
                        }, {
                            type: "bytes"
                        }], [t, r, n]), e3])
                    }({
                        address: n,
                        data: i,
                        signature: c
                    })
                })();
                try {
                    let {
                        data: t
                    } = await (0, p.s)(e, v.R, "call")({
                        data: (0, eq.w)({
                            abi: a.$o,
                            args: [r, o, f],
                            bytecode: eO.ST
                        }),
                        ...l
                    });
                    return function(e, t) {
                        let r = (0, e8.v)(e) ? (0, P.O0)(e) : e,
                            n = (0, e8.v)(t) ? (0, P.O0)(t) : t;
                        return eJ(r, n)
                    }(t ? ? "0x0", "0x1")
                } catch (e) {
                    if (e instanceof eT.cg) return !1;
                    throw e
                }
            }
            async function tT(e, {
                address: t,
                message: r,
                factory: n,
                factoryData: a,
                signature: i,
                ...o
            }) {
                let s = eR(r);
                return tO(e, {
                    address: t,
                    factory: n,
                    factoryData: a,
                    hash: s,
                    signature: i,
                    ...o
                })
            }
            BigInt(0), tR.ProjectivePoint;
            var tq = r(72185);

            function tF({
                data: e,
                primaryType: t,
                types: r
            }) {
                let n = function e({
                    data: t,
                    primaryType: r,
                    types: n
                }) {
                    let a = [{
                            type: "bytes32"
                        }],
                        i = [function({
                            primaryType: e,
                            types: t
                        }) {
                            let r = (0, u.NC)(function({
                                primaryType: e,
                                types: t
                            }) {
                                let r = "",
                                    n = function e({
                                        primaryType: t,
                                        types: r
                                    }, n = new Set) {
                                        let a = t.match(/^\w*/u),
                                            i = a ? .[0];
                                        if (n.has(i) || void 0 === r[i]) return n;
                                        for (let t of (n.add(i), r[i])) e({
                                            primaryType: t.type,
                                            types: r
                                        }, n);
                                        return n
                                    }({
                                        primaryType: e,
                                        types: t
                                    });
                                n.delete(e);
                                let a = [e, ...Array.from(n).sort()];
                                for (let e of a) r += `${e}(${t[e].map(({name:e,type:t})=>`
                                $ {
                                    t
                                }
                                $ {
                                    e
                                }
                                `).join(",")})`;
                                return r
                            }({
                                primaryType: e,
                                types: t
                            }));
                            return (0, k.w)(r)
                        }({
                            primaryType: r,
                            types: n
                        })];
                    for (let o of n[r]) {
                        let [r, s] = function t({
                            types: r,
                            name: n,
                            type: a,
                            value: i
                        }) {
                            if (void 0 !== r[a]) return [{
                                type: "bytes32"
                            }, (0, k.w)(e({
                                data: i,
                                primaryType: a,
                                types: r
                            }))];
                            if ("bytes" === a) {
                                let e = i.length % 2 ? "0" : "";
                                return i = `0x${e+i.slice(2)}`, [{
                                    type: "bytes32"
                                }, (0, k.w)(i)]
                            }
                            if ("string" === a) return [{
                                type: "bytes32"
                            }, (0, k.w)((0, u.NC)(i))];
                            if (a.lastIndexOf("]") === a.length - 1) {
                                let e = a.slice(0, a.lastIndexOf("[")),
                                    o = i.map(a => t({
                                        name: n,
                                        type: e,
                                        types: r,
                                        value: a
                                    }));
                                return [{
                                    type: "bytes32"
                                }, (0, k.w)((0, $.E)(o.map(([e]) => e), o.map(([, e]) => e)))]
                            }
                            return [{
                                type: a
                            }, i]
                        }({
                            types: n,
                            name: o.name,
                            type: o.type,
                            value: t[o.name]
                        });
                        a.push(r), i.push(s)
                    }
                    return (0, $.E)(a, i)
                }({
                    data: e,
                    primaryType: t,
                    types: r
                });
                return (0, k.w)(n)
            }
            async function tM(e, t) {
                let {
                    address: r,
                    factory: n,
                    factoryData: a,
                    signature: i,
                    message: o,
                    primaryType: s,
                    types: l,
                    domain: u,
                    ...c
                } = t, f = function(e) {
                    let {
                        domain: t = {},
                        message: r,
                        primaryType: n
                    } = e, a = {
                        EIP712Domain: (0, tq.cj)({
                            domain: t
                        }),
                        ...e.types
                    };
                    (0, tq.iC)({
                        domain: t,
                        message: r,
                        primaryType: n,
                        types: a
                    });
                    let i = ["0x1901"];
                    return t && i.push(function({
                        domain: e,
                        types: t
                    }) {
                        return tF({
                            data: e,
                            primaryType: "EIP712Domain",
                            types: t
                        })
                    }({
                        domain: t,
                        types: a
                    })), "EIP712Domain" !== n && i.push(tF({
                        data: r,
                        primaryType: n,
                        types: a
                    })), (0, k.w)((0, eS.zo)(i))
                }({
                    message: o,
                    primaryType: s,
                    types: l,
                    domain: u
                });
                return tO(e, {
                    address: r,
                    factory: n,
                    factoryData: a,
                    hash: f,
                    signature: i,
                    ...c
                })
            }
            var tj = r(32755);
            let t_ = new Map,
                tL = new Map,
                tz = 0;

            function tU(e, t, r) {
                let n = ++tz,
                    a = () => t_.get(e) || [],
                    i = () => {
                        let t = a();
                        t_.set(e, t.filter(e => e.id !== n))
                    },
                    o = () => {
                        let t = tL.get(e);
                        1 === a().length && t && t(), i()
                    },
                    s = a();
                if (t_.set(e, [...s, {
                        id: n,
                        fns: t
                    }]), s && s.length > 0) return o;
                let l = {};
                for (let e in t) l[e] = (...t) => {
                    let r = a();
                    if (0 !== r.length)
                        for (let n of r) n.fns[e] ? .(...t)
                };
                let u = r(l);
                return "function" == typeof u && tL.set(e, u), o
            }
            var tZ = r(55056),
                tD = r(94518),
                tG = r(66637);

            function tH(e, {
                emitOnBegin: t,
                initialWaitTime: r,
                interval: n
            }) {
                let a = !0,
                    i = () => a = !1,
                    o = async () => {
                        let o;
                        t && (o = await e({
                            unpoll: i
                        }));
                        let s = await r ? .(o) ? ? n;
                        await (0, tG.D)(s);
                        let l = async () => {
                            a && (await e({
                                unpoll: i
                            }), await (0, tG.D)(n), l())
                        };
                        l()
                    };
                return o(), i
            }

            function tV(e, {
                emitOnBegin: t = !1,
                emitMissed: r = !1,
                onBlockNumber: n,
                onError: a,
                poll: i,
                pollingInterval: o = e.pollingInterval
            }) {
                let s;
                let l = void 0 !== i ? i : "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type);
                return l ? (() => {
                    let i = (0, tD.P)(["watchBlockNumber", e.uid, t, r, o]);
                    return tU(i, {
                        onBlockNumber: n,
                        onError: a
                    }, n => tH(async () => {
                        try {
                            let t = await (0, p.s)(e, Q, "getBlockNumber")({
                                cacheTime: 0
                            });
                            if (s) {
                                if (t === s) return;
                                if (t - s > 1 && r)
                                    for (let e = s + 1 n; e < t; e++) n.onBlockNumber(e, s), s = e
                            }(!s || t > s) && (n.onBlockNumber(t, s), s = t)
                        } catch (e) {
                            n.onError ? .(e)
                        }
                    }, {
                        emitOnBegin: t,
                        interval: o
                    }))
                })() : (() => {
                    let i = (0, tD.P)(["watchBlockNumber", e.uid, t, r]);
                    return tU(i, {
                        onBlockNumber: n,
                        onError: a
                    }, t => {
                        let r = !0,
                            n = () => r = !1;
                        return (async () => {
                            try {
                                let a = (() => {
                                        if ("fallback" === e.transport.type) {
                                            let t = e.transport.transports.find(e => "webSocket" === e.config.type);
                                            return t ? t.value : e.transport
                                        }
                                        return e.transport
                                    })(),
                                    {
                                        unsubscribe: i
                                    } = await a.subscribe({
                                        params: ["newHeads"],
                                        onData(e) {
                                            if (!r) return;
                                            let n = (0, J.y_)(e.result ? .number);
                                            t.onBlockNumber(n, s), s = n
                                        },
                                        onError(e) {
                                            t.onError ? .(e)
                                        }
                                    });
                                n = i, r || n()
                            } catch (e) {
                                a ? .(e)
                            }
                        })(), () => n()
                    })
                })()
            }
            async function tW(e, {
                confirmations: t = 1,
                hash: r,
                onReplaced: n,
                pollingInterval: a = e.pollingInterval,
                retryCount: i = 6,
                retryDelay: o = ({
                    count: e
                }) => 200 * ~~(1 << e),
                timeout: s
            }) {
                let l, u, c;
                let f = (0, tD.P)(["waitForTransactionReceipt", e.uid, r]),
                    d = 0,
                    y = !1;
                return new Promise((m, b) => {
                    s && setTimeout(() => b(new ev.mc({
                        hash: r
                    })), s);
                    let h = tU(f, {
                        onReplaced: n,
                        resolve: m,
                        reject: b
                    }, n => {
                        let s = (0, p.s)(e, tV, "watchBlockNumber")({
                            emitMissed: !0,
                            emitOnBegin: !0,
                            poll: !0,
                            pollingInterval: a,
                            async onBlockNumber(a) {
                                let f = e => {
                                        s(), e(), h()
                                    },
                                    m = a;
                                if (!y) {
                                    d > i && f(() => n.reject(new ev.mc({
                                        hash: r
                                    })));
                                    try {
                                        if (c) {
                                            if (t > 1 && (!c.blockNumber || m - c.blockNumber + 1 n < t)) return;
                                            f(() => n.resolve(c));
                                            return
                                        }
                                        if (l || (y = !0, await (0, tZ.J)(async () => {
                                                (l = await (0, p.s)(e, ex, "getTransaction")({
                                                    hash: r
                                                })).blockNumber && (m = l.blockNumber)
                                            }, {
                                                delay: o,
                                                retryCount: i
                                            }), y = !1), c = await (0, p.s)(e, ek, "getTransactionReceipt")({
                                                hash: r
                                            }), t > 1 && (!c.blockNumber || m - c.blockNumber + 1 n < t)) return;
                                        f(() => n.resolve(c))
                                    } catch (r) {
                                        if (r instanceof ev.Bh || r instanceof ev.Yb) {
                                            if (!l) {
                                                y = !1;
                                                return
                                            }
                                            try {
                                                u = l, y = !0;
                                                let r = await (0, tZ.J)(() => (0, p.s)(e, H.Q, "getBlock")({
                                                    blockNumber: m,
                                                    includeTransactions: !0
                                                }), {
                                                    delay: o,
                                                    retryCount: i,
                                                    shouldRetry: ({
                                                        error: e
                                                    }) => e instanceof tj.f
                                                });
                                                y = !1;
                                                let a = r.transactions.find(({
                                                    from: e,
                                                    nonce: t
                                                }) => e === u.from && t === u.nonce);
                                                if (!a || (c = await (0, p.s)(e, ek, "getTransactionReceipt")({
                                                        hash: a.hash
                                                    }), t > 1 && (!c.blockNumber || m - c.blockNumber + 1 n < t))) return;
                                                let s = "replaced";
                                                a.to === u.to && a.value === u.value ? s = "repriced" : a.from === a.to && 0 n === a.value && (s = "cancelled"), f(() => {
                                                    n.onReplaced ? .({
                                                        reason: s,
                                                        replacedTransaction: u,
                                                        transaction: a,
                                                        transactionReceipt: c
                                                    }), n.resolve(c)
                                                })
                                            } catch (e) {
                                                f(() => n.reject(e))
                                            }
                                        } else f(() => n.reject(r))
                                    } finally {
                                        d++
                                    }
                                }
                            }
                        })
                    })
                })
            }
            var tY = r(20455),
                tK = r(41913);
            let tQ = /^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,
                tJ = /(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;
            var tX = r(40618);
            async function t0(e, t) {
                let {
                    address: r,
                    domain: n,
                    message: a,
                    nonce: i,
                    scheme: o,
                    signature: s,
                    time: l = new Date,
                    ...u
                } = t, c = function(e) {
                    let {
                        scheme: t,
                        statement: r,
                        ...n
                    } = e.match(tQ) ? .groups ? ? {}, {
                        chainId: a,
                        expirationTime: i,
                        issuedAt: o,
                        notBefore: s,
                        requestId: l,
                        ...u
                    } = e.match(tJ) ? .groups ? ? {}, c = e.split("Resources:")[1] ? .split("\n- ").slice(1);
                    return { ...n,
                        ...u,
                        ...a ? {
                            chainId: Number(a)
                        } : {},
                        ...i ? {
                            expirationTime: new Date(i)
                        } : {},
                        ...o ? {
                            issuedAt: new Date(o)
                        } : {},
                        ...s ? {
                            notBefore: new Date(s)
                        } : {},
                        ...l ? {
                            requestId: l
                        } : {},
                        ...c ? {
                            resources: c
                        } : {},
                        ...t ? {
                            scheme: t
                        } : {},
                        ...r ? {
                            statement: r
                        } : {}
                    }
                }(a);
                if (!c.address) return !1;
                let f = function(e) {
                    let {
                        address: t,
                        domain: r,
                        message: n,
                        nonce: a,
                        scheme: i,
                        time: o = new Date
                    } = e;
                    if (r && n.domain !== r || a && n.nonce !== a || i && n.scheme !== i || n.expirationTime && o >= n.expirationTime || n.notBefore && o < n.notBefore) return !1;
                    try {
                        if (!n.address || t && !(0, tX.E)(n.address, t)) return !1
                    } catch {
                        return !1
                    }
                    return !0
                }({
                    address: r,
                    domain: n,
                    message: c,
                    nonce: i,
                    scheme: o,
                    time: l
                });
                if (!f) return !1;
                let d = eR(a);
                return tO(e, {
                    address: c.address,
                    hash: d,
                    signature: s,
                    ...u
                })
            }
            var t1 = r(31061),
                t6 = r(71376);

            function t5(e) {
                return {
                    call: t => (0, v.R)(e, t),
                    createBlockFilter: () => x(e),
                    createContractEventFilter: t => q(e, t),
                    createEventFilter: t => F(e, t),
                    createPendingTransactionFilter: () => M(e),
                    estimateContractGas: t => z(e, t),
                    estimateGas: t => (0, L.Q)(e, t),
                    getBalance: t => (0, D.s)(e, t),
                    getBlobBaseFee: () => G(e),
                    getBlock: t => (0, H.Q)(e, t),
                    getBlockNumber: t => Q(e, t),
                    getBlockTransactionCount: t => X(e, t),
                    getBytecode: t => et(e, t),
                    getChainId: () => (0, ee.L)(e),
                    getCode: t => et(e, t),
                    getContractEvents: t => ec(e, t),
                    getEip712Domain: t => ed(e, t),
                    getEnsAddress: t => m(e, t),
                    getEnsAvatar: t => (0, b.r)(e, t),
                    getEnsName: t => (0, h.w)(e, t),
                    getEnsResolver: t => g(e, t),
                    getEnsText: t => (0, w.g)(e, t),
                    getFeeHistory: t => ey(e, t),
                    estimateFeesPerGas: t => (0, U.X)(e, t),
                    getFilterChanges: t => em(e, t),
                    getFilterLogs: t => eb(e, t),
                    getGasPrice: () => (0, eh.o)(e),
                    getLogs: t => eu(e, t),
                    getProof: t => eg(e, t),
                    estimateMaxPriorityFeePerGas: t => (0, Z._)(e, t),
                    getStorageAt: t => ew(e, t),
                    getTransaction: t => ex(e, t),
                    getTransactionConfirmations: t => eB(e, t),
                    getTransactionCount: t => (0, eI.K)(e, t),
                    getTransactionReceipt: t => ek(e, t),
                    multicall: t => (0, eN.A)(e, t),
                    prepareTransactionRequest: t => (0, t1.Z)(e, t),
                    readContract: t => (0, y.L)(e, t),
                    sendRawTransaction: t => (0, t6.p)(e, t),
                    simulateContract: t => e$(e, t),
                    verifyMessage: t => tT(e, t),
                    verifySiweMessage: t => t0(e, t),
                    verifyTypedData: t => tM(e, t),
                    uninstallFilter: t => eC(e, t),
                    waitForTransactionReceipt: t => tW(e, t),
                    watchBlocks: t => (function(e, {
                        blockTag: t = "latest",
                        emitMissed: r = !1,
                        emitOnBegin: n = !1,
                        onBlock: a,
                        onError: i,
                        includeTransactions: o,
                        poll: s,
                        pollingInterval: l = e.pollingInterval
                    }) {
                        let u, c, f;
                        let d = void 0 !== s ? s : "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type),
                            y = o ? ? !1;
                        return d ? (() => {
                            let o = (0, tD.P)(["watchBlocks", e.uid, t, r, n, y, l]);
                            return tU(o, {
                                onBlock: a,
                                onError: i
                            }, a => tH(async () => {
                                try {
                                    let n = await (0, p.s)(e, H.Q, "getBlock")({
                                        blockTag: t,
                                        includeTransactions: y
                                    });
                                    if (n.number && u ? .number) {
                                        if (n.number === u.number) return;
                                        if (n.number - u.number > 1 && r)
                                            for (let t = u ? .number + 1 n; t < n.number; t++) {
                                                let r = await (0, p.s)(e, H.Q, "getBlock")({
                                                    blockNumber: t,
                                                    includeTransactions: y
                                                });
                                                a.onBlock(r, u), u = r
                                            }
                                    }(!u ? .number || "pending" === t && !n ? .number || n.number && n.number > u.number) && (a.onBlock(n, u), u = n)
                                } catch (e) {
                                    a.onError ? .(e)
                                }
                            }, {
                                emitOnBegin: n,
                                interval: l
                            }))
                        })() : (c = !0, f = () => c = !1, (async () => {
                            try {
                                let t = (() => {
                                        if ("fallback" === e.transport.type) {
                                            let t = e.transport.transports.find(e => "webSocket" === e.config.type);
                                            return t ? t.value : e.transport
                                        }
                                        return e.transport
                                    })(),
                                    {
                                        unsubscribe: r
                                    } = await t.subscribe({
                                        params: ["newHeads"],
                                        onData(t) {
                                            if (!c) return;
                                            let r = e.chain ? .formatters ? .block ? .format || tY.Z,
                                                n = r(t.result);
                                            a(n, u), u = n
                                        },
                                        onError(e) {
                                            i ? .(e)
                                        }
                                    });
                                f = r, c || f()
                            } catch (e) {
                                i ? .(e)
                            }
                        })(), () => f())
                    })(e, t),
                    watchBlockNumber: t => tV(e, t),
                    watchContractEvent: t => (function(e, t) {
                        let {
                            abi: r,
                            address: n,
                            args: a,
                            batch: i = !0,
                            eventName: o,
                            fromBlock: s,
                            onError: l,
                            onLogs: u,
                            poll: c,
                            pollingInterval: f = e.pollingInterval,
                            strict: d
                        } = t, y = void 0 !== c ? c : "bigint" == typeof s || "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type);
                        return y ? (() => {
                            let t = d ? ? !1,
                                c = (0, tD.P)(["watchContractEvent", n, a, i, e.uid, o, f, t, s]);
                            return tU(c, {
                                onLogs: u,
                                onError: l
                            }, l => {
                                let u, c;
                                void 0 !== s && (u = s - 1 n);
                                let d = !1,
                                    y = tH(async () => {
                                        if (!d) {
                                            try {
                                                c = await (0, p.s)(e, q, "createContractEventFilter")({
                                                    abi: r,
                                                    address: n,
                                                    args: a,
                                                    eventName: o,
                                                    strict: t,
                                                    fromBlock: s
                                                })
                                            } catch {}
                                            d = !0;
                                            return
                                        }
                                        try {
                                            let s;
                                            if (c) s = await (0, p.s)(e, em, "getFilterChanges")({
                                                filter: c
                                            });
                                            else {
                                                let i = await (0, p.s)(e, Q, "getBlockNumber")({});
                                                s = u && u !== i ? await (0, p.s)(e, ec, "getContractEvents")({
                                                    abi: r,
                                                    address: n,
                                                    args: a,
                                                    eventName: o,
                                                    fromBlock: u + 1 n,
                                                    toBlock: i,
                                                    strict: t
                                                }) : [], u = i
                                            }
                                            if (0 === s.length) return;
                                            if (i) l.onLogs(s);
                                            else
                                                for (let e of s) l.onLogs([e])
                                        } catch (e) {
                                            c && e instanceof tK.yR && (d = !1), l.onError ? .(e)
                                        }
                                    }, {
                                        emitOnBegin: !0,
                                        interval: f
                                    });
                                return async () => {
                                    c && await (0, p.s)(e, eC, "uninstallFilter")({
                                        filter: c
                                    }), y()
                                }
                            })
                        })() : (() => {
                            let t = (0, tD.P)(["watchContractEvent", n, a, i, e.uid, o, f, d ? ? !1]),
                                s = !0,
                                c = () => s = !1;
                            return tU(t, {
                                onLogs: u,
                                onError: l
                            }, t => ((async () => {
                                try {
                                    let i = (() => {
                                            if ("fallback" === e.transport.type) {
                                                let t = e.transport.transports.find(e => "webSocket" === e.config.type);
                                                return t ? t.value : e.transport
                                            }
                                            return e.transport
                                        })(),
                                        l = o ? O({
                                            abi: r,
                                            eventName: o,
                                            args: a
                                        }) : [],
                                        {
                                            unsubscribe: u
                                        } = await i.subscribe({
                                            params: ["logs", {
                                                address: n,
                                                topics: l
                                            }],
                                            onData(e) {
                                                if (!s) return;
                                                let n = e.result;
                                                try {
                                                    let {
                                                        eventName: e,
                                                        args: a
                                                    } = eo({
                                                        abi: r,
                                                        data: n.data,
                                                        topics: n.topics,
                                                        strict: d
                                                    }), i = el(n, {
                                                        args: a,
                                                        eventName: e
                                                    });
                                                    t.onLogs([i])
                                                } catch (i) {
                                                    let e, r;
                                                    if (i instanceof B.SM || i instanceof B.Gy) {
                                                        if (d) return;
                                                        e = i.abiItem.name, r = i.abiItem.inputs ? .some(e => !("name" in e && e.name))
                                                    }
                                                    let a = el(n, {
                                                        args: r ? [] : {},
                                                        eventName: e
                                                    });
                                                    t.onLogs([a])
                                                }
                                            },
                                            onError(e) {
                                                t.onError ? .(e)
                                            }
                                        });
                                    c = u, s || c()
                                } catch (e) {
                                    l ? .(e)
                                }
                            })(), () => c()))
                        })()
                    })(e, t),
                    watchEvent: t => (function(e, {
                        address: t,
                        args: r,
                        batch: n = !0,
                        event: a,
                        events: i,
                        fromBlock: o,
                        onError: s,
                        onLogs: l,
                        poll: u,
                        pollingInterval: c = e.pollingInterval,
                        strict: f
                    }) {
                        let d, y;
                        let m = void 0 !== u ? u : "bigint" == typeof o || "webSocket" !== e.transport.type && ("fallback" !== e.transport.type || "webSocket" !== e.transport.transports[0].config.type),
                            b = f ? ? !1;
                        return m ? (() => {
                            let u = (0, tD.P)(["watchEvent", t, r, n, e.uid, a, c, o]);
                            return tU(u, {
                                onLogs: l,
                                onError: s
                            }, s => {
                                let l, u;
                                void 0 !== o && (l = o - 1 n);
                                let f = !1,
                                    d = tH(async () => {
                                        if (!f) {
                                            try {
                                                u = await (0, p.s)(e, F, "createEventFilter")({
                                                    address: t,
                                                    args: r,
                                                    event: a,
                                                    events: i,
                                                    strict: b,
                                                    fromBlock: o
                                                })
                                            } catch {}
                                            f = !0;
                                            return
                                        }
                                        try {
                                            let o;
                                            if (u) o = await (0, p.s)(e, em, "getFilterChanges")({
                                                filter: u
                                            });
                                            else {
                                                let n = await (0, p.s)(e, Q, "getBlockNumber")({});
                                                o = l && l !== n ? await (0, p.s)(e, eu, "getLogs")({
                                                    address: t,
                                                    args: r,
                                                    event: a,
                                                    events: i,
                                                    fromBlock: l + 1 n,
                                                    toBlock: n
                                                }) : [], l = n
                                            }
                                            if (0 === o.length) return;
                                            if (n) s.onLogs(o);
                                            else
                                                for (let e of o) s.onLogs([e])
                                        } catch (e) {
                                            u && e instanceof tK.yR && (f = !1), s.onError ? .(e)
                                        }
                                    }, {
                                        emitOnBegin: !0,
                                        interval: c
                                    });
                                return async () => {
                                    u && await (0, p.s)(e, eC, "uninstallFilter")({
                                        filter: u
                                    }), d()
                                }
                            })
                        })() : (d = !0, y = () => d = !1, (async () => {
                            try {
                                let n = (() => {
                                        if ("fallback" === e.transport.type) {
                                            let t = e.transport.transports.find(e => "webSocket" === e.config.type);
                                            return t ? t.value : e.transport
                                        }
                                        return e.transport
                                    })(),
                                    o = i ? ? (a ? [a] : void 0),
                                    u = [];
                                if (o) {
                                    let e = o.flatMap(e => O({
                                        abi: [e],
                                        eventName: e.name,
                                        args: r
                                    }));
                                    u = [e], a && (u = u[0])
                                }
                                let {
                                    unsubscribe: c
                                } = await n.subscribe({
                                    params: ["logs", {
                                        address: t,
                                        topics: u
                                    }],
                                    onData(e) {
                                        if (!d) return;
                                        let t = e.result;
                                        try {
                                            let {
                                                eventName: e,
                                                args: r
                                            } = eo({
                                                abi: o ? ? [],
                                                data: t.data,
                                                topics: t.topics,
                                                strict: b
                                            }), n = el(t, {
                                                args: r,
                                                eventName: e
                                            });
                                            l([n])
                                        } catch (a) {
                                            let e, r;
                                            if (a instanceof B.SM || a instanceof B.Gy) {
                                                if (f) return;
                                                e = a.abiItem.name, r = a.abiItem.inputs ? .some(e => !("name" in e && e.name))
                                            }
                                            let n = el(t, {
                                                args: r ? [] : {},
                                                eventName: e
                                            });
                                            l([n])
                                        }
                                    },
                                    onError(e) {
                                        s ? .(e)
                                    }
                                });
                                y = c, d || y()
                            } catch (e) {
                                s ? .(e)
                            }
                        })(), () => y())
                    })(e, t),
                    watchPendingTransactions: t => (function(e, {
                        batch: t = !0,
                        onError: r,
                        onTransactions: n,
                        poll: a,
                        pollingInterval: i = e.pollingInterval
                    }) {
                        let o, s;
                        let l = void 0 !== a ? a : "webSocket" !== e.transport.type;
                        return l ? (() => {
                            let a = (0, tD.P)(["watchPendingTransactions", e.uid, t, i]);
                            return tU(a, {
                                onTransactions: n,
                                onError: r
                            }, r => {
                                let n;
                                let a = tH(async () => {
                                    try {
                                        if (!n) try {
                                            n = await (0, p.s)(e, M, "createPendingTransactionFilter")({});
                                            return
                                        } catch (e) {
                                            throw a(), e
                                        }
                                        let i = await (0, p.s)(e, em, "getFilterChanges")({
                                            filter: n
                                        });
                                        if (0 === i.length) return;
                                        if (t) r.onTransactions(i);
                                        else
                                            for (let e of i) r.onTransactions([e])
                                    } catch (e) {
                                        r.onError ? .(e)
                                    }
                                }, {
                                    emitOnBegin: !0,
                                    interval: i
                                });
                                return async () => {
                                    n && await (0, p.s)(e, eC, "uninstallFilter")({
                                        filter: n
                                    }), a()
                                }
                            })
                        })() : (o = !0, s = () => o = !1, (async () => {
                            try {
                                let {
                                    unsubscribe: t
                                } = await e.transport.subscribe({
                                    params: ["newPendingTransactions"],
                                    onData(e) {
                                        if (!o) return;
                                        let t = e.result;
                                        n([t])
                                    },
                                    onError(e) {
                                        r ? .(e)
                                    }
                                });
                                s = t, o || s()
                            } catch (e) {
                                r ? .(e)
                            }
                        })(), () => s())
                    })(e, t)
                }
            }
        },
        72505: function(e, t, r) {
            r.d(t, {
                d: function() {
                    return f
                }
            });
            var n = r(11997),
                a = r(82022);
            class i extends a.G {
                constructor() {
                    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
                        docsPath: "/docs/clients/intro"
                    })
                }
            }
            var o = r(38345),
                s = r(21696),
                l = r(94518);
            let u = {
                current: 0,
                take() {
                    return this.current++
                },
                reset() {
                    this.current = 0
                }
            };
            var c = r(91847);

            function f(e, t = {}) {
                let {
                    batch: r,
                    fetchOptions: a,
                    key: f = "http",
                    name: d = "HTTP JSON-RPC",
                    onFetchRequest: p,
                    onFetchResponse: y,
                    retryDelay: m
                } = t;
                return ({
                    chain: b,
                    retryCount: h,
                    timeout: g
                }) => {
                    let {
                        batchSize: w = 1e3,
                        wait: v = 0
                    } = "object" == typeof r ? r : {}, E = t.retryCount ? ? h, x = g ? ? t.timeout ? ? 1e4, B = e || b ? .rpcUrls.default.http[0];
                    if (!B) throw new i;
                    let I = function(e, t = {}) {
                        return {
                            async request(r) {
                                let {
                                    body: a,
                                    onRequest: i = t.onRequest,
                                    onResponse: o = t.onResponse,
                                    timeout: c = t.timeout ? ? 1e4
                                } = r, f = { ...t.fetchOptions ? ? {},
                                    ...r.fetchOptions ? ? {}
                                }, {
                                    headers: d,
                                    method: p,
                                    signal: y
                                } = f;
                                try {
                                    let t;
                                    let r = await (0, s.F)(async ({
                                        signal: t
                                    }) => {
                                        let r = { ...f,
                                                body: Array.isArray(a) ? (0, l.P)(a.map(e => ({
                                                    jsonrpc: "2.0",
                                                    id: e.id ? ? u.take(),
                                                    ...e
                                                }))) : (0, l.P)({
                                                    jsonrpc: "2.0",
                                                    id: a.id ? ? u.take(),
                                                    ...a
                                                }),
                                                headers: { ...d,
                                                    "Content-Type": "application/json"
                                                },
                                                method: p || "POST",
                                                signal: y || (c > 0 ? t : null)
                                            },
                                            n = new Request(e, r);
                                        i && await i(n);
                                        let o = await fetch(e, r);
                                        return o
                                    }, {
                                        errorInstance: new n.W5({
                                            body: a,
                                            url: e
                                        }),
                                        timeout: c,
                                        signal: !0
                                    });
                                    if (o && await o(r), r.headers.get("Content-Type") ? .startsWith("application/json") ? t = await r.json() : (t = await r.text(), t = JSON.parse(t || "{}")), !r.ok) throw new n.Gg({
                                        body: a,
                                        details: (0, l.P)(t.error) || r.statusText,
                                        headers: r.headers,
                                        status: r.status,
                                        url: e
                                    });
                                    return t
                                } catch (t) {
                                    if (t instanceof n.Gg || t instanceof n.W5) throw t;
                                    throw new n.Gg({
                                        body: a,
                                        cause: t,
                                        url: e
                                    })
                                }
                            }
                        }
                    }(B, {
                        fetchOptions: a,
                        onRequest: p,
                        onResponse: y,
                        timeout: x
                    });
                    return (0, c.q)({
                        key: f,
                        name: d,
                        async request({
                            method: e,
                            params: t
                        }) {
                            let a = {
                                    method: e,
                                    params: t
                                },
                                {
                                    schedule: i
                                } = (0, o.S)({
                                    id: B,
                                    wait: v,
                                    shouldSplitBatch: e => e.length > w,
                                    fn: e => I.request({
                                        body: e
                                    }),
                                    sort: (e, t) => e.id - t.id
                                }),
                                s = async e => r ? i(e) : [await I.request({
                                    body: e
                                })],
                                [{
                                    error: l,
                                    result: u
                                }] = await s(a);
                            if (l) throw new n.bs({
                                body: a,
                                error: l,
                                url: B
                            });
                            return u
                        },
                        retryCount: E,
                        retryDelay: m,
                        timeout: x,
                        type: "http"
                    }, {
                        fetchOptions: a,
                        url: B
                    })
                }
            }
        },
        97812: function(e, t, r) {
            r.d(t, {
                $o: function() {
                    return u
                },
                F8: function() {
                    return n
                },
                Wo: function() {
                    return c
                },
                X$: function() {
                    return l
                },
                du: function() {
                    return o
                },
                k3: function() {
                    return i
                },
                nZ: function() {
                    return s
                }
            });
            let n = [{
                    inputs: [{
                        components: [{
                            name: "target",
                            type: "address"
                        }, {
                            name: "allowFailure",
                            type: "bool"
                        }, {
                            name: "callData",
                            type: "bytes"
                        }],
                        name: "calls",
                        type: "tuple[]"
                    }],
                    name: "aggregate3",
                    outputs: [{
                        components: [{
                            name: "success",
                            type: "bool"
                        }, {
                            name: "returnData",
                            type: "bytes"
                        }],
                        name: "returnData",
                        type: "tuple[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }],
                a = [{
                    inputs: [],
                    name: "ResolverNotFound",
                    type: "error"
                }, {
                    inputs: [],
                    name: "ResolverWildcardNotSupported",
                    type: "error"
                }, {
                    inputs: [],
                    name: "ResolverNotContract",
                    type: "error"
                }, {
                    inputs: [{
                        name: "returnData",
                        type: "bytes"
                    }],
                    name: "ResolverError",
                    type: "error"
                }, {
                    inputs: [{
                        components: [{
                            name: "status",
                            type: "uint16"
                        }, {
                            name: "message",
                            type: "string"
                        }],
                        name: "errors",
                        type: "tuple[]"
                    }],
                    name: "HttpError",
                    type: "error"
                }],
                i = [...a, {
                    name: "resolve",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes"
                    }, {
                        name: "data",
                        type: "bytes"
                    }],
                    outputs: [{
                        name: "",
                        type: "bytes"
                    }, {
                        name: "address",
                        type: "address"
                    }]
                }, {
                    name: "resolve",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes"
                    }, {
                        name: "data",
                        type: "bytes"
                    }, {
                        name: "gateways",
                        type: "string[]"
                    }],
                    outputs: [{
                        name: "",
                        type: "bytes"
                    }, {
                        name: "address",
                        type: "address"
                    }]
                }],
                o = [...a, {
                    name: "reverse",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        type: "bytes",
                        name: "reverseName"
                    }],
                    outputs: [{
                        type: "string",
                        name: "resolvedName"
                    }, {
                        type: "address",
                        name: "resolvedAddress"
                    }, {
                        type: "address",
                        name: "reverseResolver"
                    }, {
                        type: "address",
                        name: "resolver"
                    }]
                }, {
                    name: "reverse",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        type: "bytes",
                        name: "reverseName"
                    }, {
                        type: "string[]",
                        name: "gateways"
                    }],
                    outputs: [{
                        type: "string",
                        name: "resolvedName"
                    }, {
                        type: "address",
                        name: "resolvedAddress"
                    }, {
                        type: "address",
                        name: "reverseResolver"
                    }, {
                        type: "address",
                        name: "resolver"
                    }]
                }],
                s = [{
                    name: "text",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes32"
                    }, {
                        name: "key",
                        type: "string"
                    }],
                    outputs: [{
                        name: "",
                        type: "string"
                    }]
                }],
                l = [{
                    name: "addr",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes32"
                    }],
                    outputs: [{
                        name: "",
                        type: "address"
                    }]
                }, {
                    name: "addr",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes32"
                    }, {
                        name: "coinType",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bytes"
                    }]
                }],
                u = [{
                    inputs: [{
                        internalType: "address",
                        name: "_signer",
                        type: "address"
                    }, {
                        internalType: "bytes32",
                        name: "_hash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes",
                        name: "_signature",
                        type: "bytes"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }],
                c = [{
                    type: "event",
                    name: "Approval",
                    inputs: [{
                        indexed: !0,
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }]
                }, {
                    type: "event",
                    name: "Transfer",
                    inputs: [{
                        indexed: !0,
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "allowance",
                    stateMutability: "view",
                    inputs: [{
                        name: "owner",
                        type: "address"
                    }, {
                        name: "spender",
                        type: "address"
                    }],
                    outputs: [{
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "approve",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "spender",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        type: "bool"
                    }]
                }, {
                    type: "function",
                    name: "balanceOf",
                    stateMutability: "view",
                    inputs: [{
                        name: "account",
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
                    name: "name",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        type: "string"
                    }]
                }, {
                    type: "function",
                    name: "symbol",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        type: "string"
                    }]
                }, {
                    type: "function",
                    name: "totalSupply",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "transfer",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "recipient",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        type: "bool"
                    }]
                }, {
                    type: "function",
                    name: "transferFrom",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "sender",
                        type: "address"
                    }, {
                        name: "recipient",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        type: "bool"
                    }]
                }]
        },
        75379: function(e, t, r) {
            r.d(t, {
                NO: function() {
                    return n
                },
                ST: function() {
                    return i
                },
                pG: function() {
                    return a
                }
            });
            let n = "0x608060405234801561001057600080fd5b5060405161018e38038061018e83398101604081905261002f91610124565b6000808351602085016000f59050803b61004857600080fd5b6000808351602085016000855af16040513d6000823e81610067573d81fd5b3d81f35b634e487b7160e01b600052604160045260246000fd5b600082601f83011261009257600080fd5b81516001600160401b038111156100ab576100ab61006b565b604051601f8201601f19908116603f011681016001600160401b03811182821017156100d9576100d961006b565b6040528181528382016020018510156100f157600080fd5b60005b82811015610110576020818601810151838301820152016100f4565b506000918101602001919091529392505050565b6000806040838503121561013757600080fd5b82516001600160401b0381111561014d57600080fd5b61015985828601610081565b602085015190935090506001600160401b0381111561017757600080fd5b61018385828601610081565b915050925092905056fe",
                a = "0x608060405234801561001057600080fd5b506040516102c03803806102c083398101604081905261002f916101e6565b836001600160a01b03163b6000036100e457600080836001600160a01b03168360405161005c9190610270565b6000604051808303816000865af19150503d8060008114610099576040519150601f19603f3d011682016040523d82523d6000602084013e61009e565b606091505b50915091508115806100b857506001600160a01b0386163b155b156100e1578060405163101bb98d60e01b81526004016100d8919061028c565b60405180910390fd5b50505b6000808451602086016000885af16040513d6000823e81610103573d81fd5b3d81f35b80516001600160a01b038116811461011e57600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b60005b8381101561015457818101518382015260200161013c565b50506000910152565b600082601f83011261016e57600080fd5b81516001600160401b0381111561018757610187610123565b604051601f8201601f19908116603f011681016001600160401b03811182821017156101b5576101b5610123565b6040528181528382016020018510156101cd57600080fd5b6101de826020830160208701610139565b949350505050565b600080600080608085870312156101fc57600080fd5b61020585610107565b60208601519094506001600160401b0381111561022157600080fd5b61022d8782880161015d565b93505061023c60408601610107565b60608601519092506001600160401b0381111561025857600080fd5b6102648782880161015d565b91505092959194509250565b60008251610282818460208701610139565b9190910192915050565b60208152600082518060208401526102ab816040850160208701610139565b601f01601f1916919091016040019291505056fe",
                i = "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"
        },
        87258: function(e, t, r) {
            r.d(t, {
                $: function() {
                    return n
                },
                Up: function() {
                    return a
                },
                hZ: function() {
                    return i
                }
            });
            let n = {
                    1: "An `assert` condition failed.",
                    17: "Arithmetic operation resulted in underflow or overflow.",
                    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
                    33: "Attempted to convert to an invalid type.",
                    34: "Attempted to access a storage byte array that is incorrectly encoded.",
                    49: "Performed `.pop()` on an empty array",
                    50: "Array index is out of bounds.",
                    65: "Allocated too much memory or created an array which is too large.",
                    81: "Attempted to call a zero-initialized variable of internal function type."
                },
                a = {
                    inputs: [{
                        name: "message",
                        type: "string"
                    }],
                    name: "Error",
                    type: "error"
                },
                i = {
                    inputs: [{
                        name: "reason",
                        type: "uint256"
                    }],
                    name: "Panic",
                    type: "error"
                }
        },
        24948: function(e, t, r) {
            r.d(t, {
                cg: function() {
                    return h
                },
                uq: function() {
                    return g
                },
                Lu: function() {
                    return w
                },
                Dk: function() {
                    return v
                },
                Mo: function() {
                    return E
                },
                VQ: function() {
                    return x
                }
            });
            var n = r(92341),
                a = r(87258),
                i = r(30688),
                o = r(84971),
                s = r(94518);

            function l({
                abiItem: e,
                args: t,
                includeFunctionName: r = !0,
                includeName: n = !1
            }) {
                if ("name" in e && "inputs" in e && e.inputs) return `${r?e.name:""}(${e.inputs.map((e,r)=>`${n&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,s.P)(t[r]):t[r]}`).join(", ")})`
            }
            var u = r(27342),
                c = r(84426),
                f = r(83871),
                d = r(79495),
                p = r(82022),
                y = r(21965),
                m = r(36923),
                b = r(97609);
            class h extends p.G {
                constructor(e, {
                    account: t,
                    docsPath: r,
                    chain: a,
                    data: i,
                    gas: o,
                    gasPrice: s,
                    maxFeePerGas: l,
                    maxPriorityFeePerGas: u,
                    nonce: d,
                    to: p,
                    value: b,
                    stateOverride: h
                }) {
                    let g = t ? (0, n.T)(t) : void 0,
                        w = (0, m.xr)({
                            from: g ? .address,
                            to: p,
                            value: void 0 !== b && `${(0,c.d)(b)} ${a?.nativeCurrency?.symbol||"ETH"}`,
                            data: i,
                            gas: o,
                            gasPrice: void 0 !== s && `${(0,f.o)(s)} gwei`,
                            maxFeePerGas: void 0 !== l && `${(0,f.o)(l)} gwei`,
                            maxPriorityFeePerGas: void 0 !== u && `${(0,f.o)(u)} gwei`,
                            nonce: d
                        });
                    h && (w += `
${(0,y.Bj)(h)}`), super(e.shortMessage, {
                        cause: e,
                        docsPath: r,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Raw Call Arguments:", w].filter(Boolean)
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "CallExecutionError"
                    }), this.cause = e
                }
            }
            class g extends p.G {
                constructor(e, {
                    abi: t,
                    args: r,
                    contractAddress: n,
                    docsPath: a,
                    functionName: i,
                    sender: s
                }) {
                    let c = (0, u.mE)({
                            abi: t,
                            args: r,
                            name: i
                        }),
                        f = c ? l({
                            abiItem: c,
                            args: r,
                            includeFunctionName: !1,
                            includeName: !1
                        }) : void 0,
                        d = c ? (0, o.t)(c, {
                            includeName: !0
                        }) : void 0,
                        p = (0, m.xr)({
                            address: n && (0, b.CR)(n),
                            function: d,
                            args: f && "()" !== f && `${[...Array(i?.length??0).keys()].map(()=>" ").join("")}${f}`,
                            sender: s
                        });
                    super(e.shortMessage || `An unknown error occurred while executing the contract function "${i}".`, {
                        cause: e,
                        docsPath: a,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Contract Call:", p].filter(Boolean)
                    }), Object.defineProperty(this, "abi", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "args", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "contractAddress", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "formattedArgs", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "functionName", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "sender", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ContractFunctionExecutionError"
                    }), this.abi = t, this.args = r, this.cause = e, this.contractAddress = n, this.functionName = i, this.sender = s
                }
            }
            class w extends p.G {
                constructor({
                    abi: e,
                    data: t,
                    functionName: r,
                    message: n
                }) {
                    let s, u, c, f, p;
                    if (t && "0x" !== t) try {
                        p = (0, i.p)({
                            abi: e,
                            data: t
                        });
                        let {
                            abiItem: r,
                            errorName: n,
                            args: s
                        } = p;
                        if ("Error" === n) c = s[0];
                        else if ("Panic" === n) {
                            let [e] = s;
                            c = a.$[e]
                        } else {
                            let e = r ? (0, o.t)(r, {
                                    includeName: !0
                                }) : void 0,
                                t = r && s ? l({
                                    abiItem: r,
                                    args: s,
                                    includeFunctionName: !1,
                                    includeName: !1
                                }) : void 0;
                            u = [e ? `Error: ${e}` : "", t && "()" !== t ? `       ${[...Array(n?.length??0).keys()].map(()=>" ").join("")}${t}` : ""]
                        }
                    } catch (e) {
                        s = e
                    } else n && (c = n);
                    s instanceof d.yP && (f = s.signature, u = [`Unable to decode signature "${f}" as it was not found on the provided ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${f}.`]), super(c && "execution reverted" !== c || f ? [`The contract function "${r}" reverted with the following ${f?"signature":"reason"}:`, c || f].join("\n") : `The contract function "${r}" reverted.`, {
                        cause: s,
                        metaMessages: u
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ContractFunctionRevertedError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "reason", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "signature", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = p, this.reason = c, this.signature = f
                }
            }
            class v extends p.G {
                constructor({
                    functionName: e
                }) {
                    super(`The contract function "${e}" returned no data ("0x").`, {
                        metaMessages: ["This could be due to any of the following:", `  - The contract does not have the function "${e}",`, "  - The parameters passed to the contract function may be invalid, or", "  - The address is not a contract."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ContractFunctionZeroDataError"
                    })
                }
            }
            class E extends p.G {
                constructor({
                    factory: e
                }) {
                    super(`Deployment for counterfactual contract call failed${e?` for factory "${e}".`:""}`, {
                        metaMessages: ["Please ensure:", "- The `factory` is a valid contract deployment factory (ie. Create2 Factory, ERC-4337 Factory, etc).", "- The `factoryData` is a valid encoded function call for contract deployment function on the factory."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "CounterfactualDeploymentFailedError"
                    })
                }
            }
            class x extends p.G {
                constructor({
                    data: e,
                    message: t
                }) {
                    super(t || ""), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 3
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "RawContractError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = e
                }
            }
        },
        60923: function(e, t, r) {
            r.d(t, {
                r: function() {
                    return m
                }
            });
            var n = r(79495),
                a = r(11964),
                i = r(84335),
                o = r(6803),
                s = r(46386),
                l = r(48630),
                u = r(34569),
                c = r(45194),
                f = r(96904);

            function d(e, t = {}) {
                void 0 !== t.size && (0, c.Yf)(e, {
                    size: t.size
                });
                let r = (0, f.ci)(e, t);
                return (0, c.ly)(r, t)
            }
            var p = r(93749),
                y = r(74743);

            function m(e, t) {
                let r = "string" == typeof t ? (0, p.nr)(t) : t,
                    m = (0, i.q)(r);
                if (0 === (0, o.d)(r) && e.length > 0) throw new n.wb;
                if ((0, o.d)(t) && 32 > (0, o.d)(t)) throw new n.xB({
                    data: "string" == typeof t ? t : (0, f.ci)(t),
                    params: e,
                    size: (0, o.d)(t)
                });
                let h = 0,
                    g = [];
                for (let t = 0; t < e.length; ++t) {
                    let r = e[t];
                    m.setPosition(h);
                    let [i, o] = function e(t, r, {
                        staticPosition: i
                    }) {
                        let o = (0, y.S)(r.type);
                        if (o) {
                            let [n, a] = o;
                            return function(t, r, {
                                length: n,
                                staticPosition: a
                            }) {
                                if (!n) {
                                    let n = d(t.readBytes(32)),
                                        i = a + n,
                                        o = i + 32;
                                    t.setPosition(i);
                                    let s = d(t.readBytes(32)),
                                        l = b(r),
                                        u = 0,
                                        c = [];
                                    for (let n = 0; n < s; ++n) {
                                        t.setPosition(o + (l ? 32 * n : u));
                                        let [a, i] = e(t, r, {
                                            staticPosition: o
                                        });
                                        u += i, c.push(a)
                                    }
                                    return t.setPosition(a + 32), [c, 32]
                                }
                                if (b(r)) {
                                    let i = d(t.readBytes(32)),
                                        o = a + i,
                                        s = [];
                                    for (let a = 0; a < n; ++a) {
                                        t.setPosition(o + 32 * a);
                                        let [n] = e(t, r, {
                                            staticPosition: o
                                        });
                                        s.push(n)
                                    }
                                    return t.setPosition(a + 32), [s, 32]
                                }
                                let i = 0,
                                    o = [];
                                for (let s = 0; s < n; ++s) {
                                    let [n, s] = e(t, r, {
                                        staticPosition: a + i
                                    });
                                    i += s, o.push(n)
                                }
                                return [o, i]
                            }(t, { ...r,
                                type: a
                            }, {
                                length: n,
                                staticPosition: i
                            })
                        }
                        if ("tuple" === r.type) return function(t, r, {
                            staticPosition: n
                        }) {
                            let a = 0 === r.components.length || r.components.some(({
                                    name: e
                                }) => !e),
                                i = a ? [] : {},
                                o = 0;
                            if (b(r)) {
                                let s = d(t.readBytes(32)),
                                    l = n + s;
                                for (let n = 0; n < r.components.length; ++n) {
                                    let s = r.components[n];
                                    t.setPosition(l + o);
                                    let [u, c] = e(t, s, {
                                        staticPosition: l
                                    });
                                    o += c, i[a ? n : s ? .name] = u
                                }
                                return t.setPosition(n + 32), [i, 32]
                            }
                            for (let s = 0; s < r.components.length; ++s) {
                                let l = r.components[s],
                                    [u, c] = e(t, l, {
                                        staticPosition: n
                                    });
                                i[a ? s : l ? .name] = u, o += c
                            }
                            return [i, o]
                        }(t, r, {
                            staticPosition: i
                        });
                        if ("address" === r.type) return function(e) {
                            let t = e.readBytes(32);
                            return [(0, a.x)((0, f.ci)((0, s.T4)(t, -20))), 32]
                        }(t);
                        if ("bool" === r.type) return [function(e, t = {}) {
                            let r = e;
                            if (void 0 !== t.size && ((0, c.Yf)(r, {
                                    size: t.size
                                }), r = (0, l.f)(r)), r.length > 1 || r[0] > 1) throw new u.yr(r);
                            return !!r[0]
                        }(t.readBytes(32), {
                            size: 32
                        }), 32];
                        if (r.type.startsWith("bytes")) return function(e, t, {
                            staticPosition: r
                        }) {
                            let [n, a] = t.type.split("bytes");
                            if (!a) {
                                let t = d(e.readBytes(32));
                                e.setPosition(r + t);
                                let n = d(e.readBytes(32));
                                if (0 === n) return e.setPosition(r + 32), ["0x", 32];
                                let a = e.readBytes(n);
                                return e.setPosition(r + 32), [(0, f.ci)(a), 32]
                            }
                            let i = (0, f.ci)(e.readBytes(Number.parseInt(a), 32));
                            return [i, 32]
                        }(t, r, {
                            staticPosition: i
                        });
                        if (r.type.startsWith("uint") || r.type.startsWith("int")) return function(e, t) {
                            let r = t.type.startsWith("int"),
                                n = Number.parseInt(t.type.split("int")[1] || "256"),
                                a = e.readBytes(32);
                            return [n > 48 ? function(e, t = {}) {
                                void 0 !== t.size && (0, c.Yf)(e, {
                                    size: t.size
                                });
                                let r = (0, f.ci)(e, t);
                                return (0, c.y_)(r, t)
                            }(a, {
                                signed: r
                            }) : d(a, {
                                signed: r
                            }), 32]
                        }(t, r);
                        if ("string" === r.type) return function(e, {
                            staticPosition: t
                        }) {
                            let r = d(e.readBytes(32));
                            e.setPosition(t + r);
                            let n = d(e.readBytes(32));
                            if (0 === n) return e.setPosition(t + 32), ["", 32];
                            let a = e.readBytes(n, 32),
                                i = function(e, t = {}) {
                                    let r = e;
                                    return void 0 !== t.size && ((0, c.Yf)(r, {
                                        size: t.size
                                    }), r = (0, l.f)(r, {
                                        dir: "right"
                                    })), new TextDecoder().decode(r)
                                }((0, l.f)(a));
                            return e.setPosition(t + 32), [i, 32]
                        }(t, {
                            staticPosition: i
                        });
                        throw new n.CI(r.type, {
                            docsPath: "/docs/contract/decodeAbiParameters"
                        })
                    }(m, r, {
                        staticPosition: 0
                    });
                    h += o, g.push(i)
                }
                return g
            }

            function b(e) {
                let {
                    type: t
                } = e;
                if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
                if ("tuple" === t) return e.components ? .some(b);
                let r = (0, y.S)(e.type);
                return !!(r && b({ ...e,
                    type: r[1]
                }))
            }
        },
        30688: function(e, t, r) {
            r.d(t, {
                p: function() {
                    return u
                }
            });
            var n = r(87258),
                a = r(79495),
                i = r(46386),
                o = r(61662),
                s = r(60923),
                l = r(84971);

            function u(e) {
                let {
                    abi: t,
                    data: r
                } = e, u = (0, i.tP)(r, 0, 4);
                if ("0x" === u) throw new a.wb;
                let c = [...t || [], n.Up, n.hZ],
                    f = c.find(e => "error" === e.type && u === (0, o.C)((0, l.t)(e)));
                if (!f) throw new a.yP(u, {
                    docsPath: "/docs/contract/decodeErrorResult"
                });
                return {
                    abiItem: f,
                    args: "inputs" in f && f.inputs && f.inputs.length > 0 ? (0, s.r)(f.inputs, (0, i.tP)(r, 4)) : void 0,
                    errorName: f.name
                }
            }
        },
        83817: function(e, t, r) {
            r.d(t, {
                k: function() {
                    return s
                }
            });
            var n = r(79495),
                a = r(60923),
                i = r(27342);
            let o = "/docs/contract/decodeFunctionResult";

            function s(e) {
                let {
                    abi: t,
                    args: r,
                    functionName: s,
                    data: l
                } = e, u = t[0];
                if (s) {
                    let e = (0, i.mE)({
                        abi: t,
                        args: r,
                        name: s
                    });
                    if (!e) throw new n.xL(s, {
                        docsPath: o
                    });
                    u = e
                }
                if ("function" !== u.type) throw new n.xL(void 0, {
                    docsPath: o
                });
                if (!u.outputs) throw new n.MX(u.name, {
                    docsPath: o
                });
                let c = (0, a.r)(u.outputs, l);
                return c && c.length > 1 ? c : c && 1 === c.length ? c[0] : void 0
            }
        },
        40618: function(e, t, r) {
            r.d(t, {
                E: function() {
                    return i
                }
            });
            var n = r(76021),
                a = r(43936);

            function i(e, t) {
                if (!(0, a.U)(e, {
                        strict: !1
                    })) throw new n.b({
                    address: e
                });
                if (!(0, a.U)(t, {
                        strict: !1
                    })) throw new n.b({
                    address: t
                });
                return e.toLowerCase() === t.toLowerCase()
            }
        },
        25009: function(e, t, r) {
            r.d(t, {
                a: function() {
                    return n
                }
            });

            function n(e) {
                return {
                    formatters: void 0,
                    fees: void 0,
                    serializers: void 0,
                    ...e
                }
            }
        },
        90826: function(e, t, r) {
            r.d(t, {
                L: function() {
                    return a
                }
            });
            var n = r(24113);

            function a({
                blockNumber: e,
                chain: t,
                contract: r
            }) {
                let a = t ? .contracts ? .[r];
                if (!a) throw new n.mm({
                    chain: t,
                    contract: {
                        name: r
                    }
                });
                if (e && a.blockCreated && a.blockCreated > e) throw new n.mm({
                    blockNumber: e,
                    chain: t,
                    contract: {
                        name: r,
                        blockCreated: a.blockCreated
                    }
                });
                return a.address
            }
        },
        49647: function(e, t, r) {
            r.d(t, {
                i: function() {
                    return a
                }
            });
            var n = r(37016);

            function a(e) {
                if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]")) return null;
                let t = `0x${e.slice(1,65)}`;
                return (0, n.v)(t) ? t : null
            }
        },
        25023: function(e, t, r) {
            r.d(t, {
                c: function() {
                    return o
                }
            });
            var n = r(87258),
                a = r(82022),
                i = r(24948);

            function o(e, t) {
                if (!(e instanceof a.G)) return !1;
                let r = e.walk(e => e instanceof i.Lu);
                return r instanceof i.Lu && (!!(r.data ? .errorName === "ResolverNotFound" || r.data ? .errorName === "ResolverWildcardNotSupported" || r.data ? .errorName === "ResolverNotContract" || r.data ? .errorName === "ResolverError" || r.data ? .errorName === "HttpError" || r.reason ? .includes("Wildcard on non-extended resolvers is not supported")) || "reverse" === t && r.reason === n.$[50])
            }
        },
        90774: function(e, t, r) {
            r.d(t, {
                V: function() {
                    return l
                }
            });
            var n = r(99786),
                a = r(93749),
                i = r(96904),
                o = r(68178),
                s = r(49647);

            function l(e) {
                let t = new Uint8Array(32).fill(0);
                if (!e) return (0, i.ci)(t);
                let r = e.split(".");
                for (let e = r.length - 1; e >= 0; e -= 1) {
                    let i = (0, s.i)(r[e]),
                        l = i ? (0, a.O0)(i) : (0, o.w)((0, a.qX)(r[e]), "bytes");
                    t = (0, o.w)((0, n.zo)([t, l]), "bytes")
                }
                return (0, i.ci)(t)
            }
        },
        956: function(e, t, r) {
            r.d(t, {
                T: function() {
                    return s
                }
            });
            var n = r(93749),
                a = r(96904),
                i = r(68178),
                o = r(49647);

            function s(e) {
                let t = e.replace(/^\.|\.$/gm, "");
                if (0 === t.length) return new Uint8Array(1);
                let r = new Uint8Array((0, n.qX)(t).byteLength + 2),
                    s = 0,
                    l = t.split(".");
                for (let e = 0; e < l.length; e++) {
                    let t = (0, n.qX)(l[e]);
                    if (t.byteLength > 255) {
                        var u;
                        t = (0, n.qX)((u = function(e) {
                            let t = new Uint8Array(32).fill(0);
                            return e ? (0, o.i)(e) || (0, i.w)((0, n.qX)(e)) : (0, a.ci)(t)
                        }(l[e]), `[${u.slice(2)}]`))
                    }
                    r[s] = t.length, r.set(t, s + 1), s += t.length + 1
                }
                return r.byteLength !== s + 1 ? r.slice(0, s + 1) : r
            }
        },
        41335: function(e, t, r) {
            r.d(t, {
                S: function() {
                    return s
                }
            });
            var n = r(79495),
                a = r(82022),
                i = r(24948),
                o = r(41913);

            function s(e, {
                abi: t,
                address: r,
                args: s,
                docsPath: l,
                functionName: u,
                sender: c
            }) {
                let {
                    code: f,
                    data: d,
                    message: p,
                    shortMessage: y
                } = e instanceof i.VQ ? e : e instanceof a.G ? e.walk(e => "data" in e) || e.walk() : {}, m = e instanceof n.wb ? new i.Dk({
                    functionName: u
                }) : [3, o.XS.code].includes(f) && (d || p || y) ? new i.Lu({
                    abi: t,
                    data: "object" == typeof d ? d.data : d,
                    functionName: u,
                    message: y ? ? p
                }) : e;
                return new i.uq(m, {
                    abi: t,
                    args: s,
                    contractAddress: r,
                    docsPath: l,
                    functionName: u,
                    sender: c
                })
            }
        },
        38345: function(e, t, r) {
            r.d(t, {
                S: function() {
                    return a
                }
            });
            let n = new Map;

            function a({
                fn: e,
                id: t,
                shouldSplitBatch: r,
                wait: a = 0,
                sort: i
            }) {
                let o = async () => {
                        let t = u();
                        s();
                        let r = t.map(({
                            args: e
                        }) => e);
                        0 !== r.length && e(r).then(e => {
                            i && Array.isArray(e) && e.sort(i);
                            for (let r = 0; r < t.length; r++) {
                                let {
                                    pendingPromise: n
                                } = t[r];
                                n.resolve ? .([e[r], e])
                            }
                        }).catch(e => {
                            for (let r = 0; r < t.length; r++) {
                                let {
                                    pendingPromise: n
                                } = t[r];
                                n.reject ? .(e)
                            }
                        })
                    },
                    s = () => n.delete(t),
                    l = () => u().map(({
                        args: e
                    }) => e),
                    u = () => n.get(t) || [],
                    c = e => n.set(t, [...u(), e]);
                return {
                    flush: s,
                    async schedule(e) {
                        let t = {},
                            n = new Promise((e, r) => {
                                t.resolve = e, t.reject = r
                            }),
                            i = r ? .([...l(), e]);
                        i && o();
                        let s = u().length > 0;
                        return s ? c({
                            args: e,
                            pendingPromise: t
                        }) : (c({
                            args: e,
                            pendingPromise: t
                        }), setTimeout(o, a)), n
                    }
                }
            }
        },
        21696: function(e, t, r) {
            r.d(t, {
                F: function() {
                    return n
                }
            });

            function n(e, {
                errorInstance: t = Error("timed out"),
                timeout: r,
                signal: n
            }) {
                return new Promise((a, i) => {
                    (async () => {
                        let o;
                        try {
                            let s = new AbortController;
                            r > 0 && (o = setTimeout(() => {
                                n ? s.abort() : i(t)
                            }, r)), a(await e({
                                signal: s ? .signal || null
                            }))
                        } catch (e) {
                            e ? .name === "AbortError" && i(t), i(e)
                        } finally {
                            clearTimeout(o)
                        }
                    })()
                })
            }
        }
    }
]);