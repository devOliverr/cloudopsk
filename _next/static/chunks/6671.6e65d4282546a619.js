(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6671], {
        71818: function(e, t, r) {
            "use strict";
            var i = r(8297),
                n = r(63786),
                s = r(62942),
                o = r(35859),
                a = r(91216);
            t.Cv = 32, t.WH = 12, t.pg = 16;
            var c = new Uint8Array(16),
                h = function() {
                    function e(e) {
                        if (this.nonceLength = t.WH, this.tagLength = t.pg, e.length !== t.Cv) throw Error("ChaCha20Poly1305 needs 32-byte key");
                        this._key = new Uint8Array(e)
                    }
                    return e.prototype.seal = function(e, t, r, n) {
                        if (e.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        var o, a = new Uint8Array(16);
                        a.set(e, a.length - e.length);
                        var c = new Uint8Array(32);
                        i.stream(this._key, a, c, 4);
                        var h = t.length + this.tagLength;
                        if (n) {
                            if (n.length !== h) throw Error("ChaCha20Poly1305: incorrect destination length");
                            o = n
                        } else o = new Uint8Array(h);
                        return i.streamXOR(this._key, a, t, o, 4), this._authenticate(o.subarray(o.length - this.tagLength, o.length), c, o.subarray(0, o.length - this.tagLength), r), s.wipe(a), o
                    }, e.prototype.open = function(e, t, r, n) {
                        if (e.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        if (t.length < this.tagLength) return null;
                        var o, c = new Uint8Array(16);
                        c.set(e, c.length - e.length);
                        var h = new Uint8Array(32);
                        i.stream(this._key, c, h, 4);
                        var u = new Uint8Array(this.tagLength);
                        if (this._authenticate(u, h, t.subarray(0, t.length - this.tagLength), r), !a.equal(u, t.subarray(t.length - this.tagLength, t.length))) return null;
                        var l = t.length - this.tagLength;
                        if (n) {
                            if (n.length !== l) throw Error("ChaCha20Poly1305: incorrect destination length");
                            o = n
                        } else o = new Uint8Array(l);
                        return i.streamXOR(this._key, c, t.subarray(0, t.length - this.tagLength), o, 4), s.wipe(c), o
                    }, e.prototype.clean = function() {
                        return s.wipe(this._key), this
                    }, e.prototype._authenticate = function(e, t, r, i) {
                        var a = new n.Poly1305(t);
                        i && (a.update(i), i.length % 16 > 0 && a.update(c.subarray(i.length % 16))), a.update(r), r.length % 16 > 0 && a.update(c.subarray(r.length % 16));
                        var h = new Uint8Array(8);
                        i && o.writeUint64LE(i.length, h), a.update(h), o.writeUint64LE(r.length, h), a.update(h);
                        for (var u = a.digest(), l = 0; l < u.length; l++) e[l] = u[l];
                        a.clean(), s.wipe(u), s.wipe(h)
                    }, e
                }();
            t.OK = h
        },
        8297: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(35859),
                n = r(62942);

            function s(e, t, r, s, o) {
                if (void 0 === o && (o = 0), 32 !== e.length) throw Error("ChaCha: key size must be 32 bytes");
                if (s.length < r.length) throw Error("ChaCha: destination is shorter than source");
                if (0 === o) {
                    if (8 !== t.length && 12 !== t.length) throw Error("ChaCha nonce must be 8 or 12 bytes");
                    c = (a = new Uint8Array(16)).length - t.length, a.set(t, c)
                } else {
                    if (16 !== t.length) throw Error("ChaCha nonce with counter must be 16 bytes");
                    a = t, c = o
                }
                for (var a, c, h = new Uint8Array(64), u = 0; u < r.length; u += 64) {
                    ! function(e, t, r) {
                        for (var n = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], s = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], o = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], a = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], c = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], h = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], u = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], l = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], p = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], f = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], d = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], g = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], y = 1634760805, v = 857760878, m = 2036477234, b = 1797285236, w = n, _ = s, E = o, D = a, I = c, S = h, C = u, P = l, O = p, x = f, A = d, R = g, T = 0; T < 20; T += 2) O ^= y = y + w | 0, w ^= I = I + (O = O >>> 16 | O << 16) | 0, w = w >>> 20 | w << 12, x ^= v = v + _ | 0, _ ^= S = S + (x = x >>> 16 | x << 16) | 0, _ = _ >>> 20 | _ << 12, A ^= m = m + E | 0, E ^= C = C + (A = A >>> 16 | A << 16) | 0, E = E >>> 20 | E << 12, R ^= b = b + D | 0, D ^= P = P + (R = R >>> 16 | R << 16) | 0, D = D >>> 20 | D << 12, A ^= m = m + E | 0, E ^= C = C + (A = A >>> 24 | A << 8) | 0, E = E >>> 25 | E << 7, R ^= b = b + D | 0, D ^= P = P + (R = R >>> 24 | R << 8) | 0, D = D >>> 25 | D << 7, x ^= v = v + _ | 0, _ ^= S = S + (x = x >>> 24 | x << 8) | 0, _ = _ >>> 25 | _ << 7, O ^= y = y + w | 0, w ^= I = I + (O = O >>> 24 | O << 8) | 0, w = w >>> 25 | w << 7, R ^= y = y + _ | 0, _ ^= C = C + (R = R >>> 16 | R << 16) | 0, _ = _ >>> 20 | _ << 12, O ^= v = v + E | 0, E ^= P = P + (O = O >>> 16 | O << 16) | 0, E = E >>> 20 | E << 12, x ^= m = m + D | 0, D ^= I = I + (x = x >>> 16 | x << 16) | 0, D = D >>> 20 | D << 12, A ^= b = b + w | 0, w ^= S = S + (A = A >>> 16 | A << 16) | 0, w = w >>> 20 | w << 12, x ^= m = m + D | 0, D ^= I = I + (x = x >>> 24 | x << 8) | 0, D = D >>> 25 | D << 7, A ^= b = b + w | 0, w ^= S = S + (A = A >>> 24 | A << 8) | 0, w = w >>> 25 | w << 7, O ^= v = v + E | 0, E ^= P = P + (O = O >>> 24 | O << 8) | 0, E = E >>> 25 | E << 7, R ^= y = y + _ | 0, _ ^= C = C + (R = R >>> 24 | R << 8) | 0, _ = _ >>> 25 | _ << 7;
                        i.writeUint32LE(y + 1634760805 | 0, e, 0), i.writeUint32LE(v + 857760878 | 0, e, 4), i.writeUint32LE(m + 2036477234 | 0, e, 8), i.writeUint32LE(b + 1797285236 | 0, e, 12), i.writeUint32LE(w + n | 0, e, 16), i.writeUint32LE(_ + s | 0, e, 20), i.writeUint32LE(E + o | 0, e, 24), i.writeUint32LE(D + a | 0, e, 28), i.writeUint32LE(I + c | 0, e, 32), i.writeUint32LE(S + h | 0, e, 36), i.writeUint32LE(C + u | 0, e, 40), i.writeUint32LE(P + l | 0, e, 44), i.writeUint32LE(O + p | 0, e, 48), i.writeUint32LE(x + f | 0, e, 52), i.writeUint32LE(A + d | 0, e, 56), i.writeUint32LE(R + g | 0, e, 60)
                    }(h, a, e);
                    for (var l = u; l < u + 64 && l < r.length; l++) s[l] = r[l] ^ h[l - u];
                    ! function(e, t, r) {
                        for (var i = 1; r--;) i = i + (255 & e[t]) | 0, e[t] = 255 & i, i >>>= 8, t++;
                        if (i > 0) throw Error("ChaCha: counter overflow")
                    }(a, 0, c)
                }
                return n.wipe(h), 0 === o && n.wipe(a), s
            }
            t.streamXOR = s, t.stream = function(e, t, r, i) {
                return void 0 === i && (i = 0), n.wipe(r), s(e, t, r, r, i)
            }
        },
        91216: function(e, t) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return 0;
                for (var r = 0, i = 0; i < e.length; i++) r |= e[i] ^ t[i];
                return 1 & r - 1 >>> 8
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.select = function(e, t, r) {
                return ~(e - 1) & t | e - 1 & r
            }, t.lessOrEqual = function(e, t) {
                return (0 | e) - (0 | t) - 1 >>> 31 & 1
            }, t.compare = r, t.equal = function(e, t) {
                return 0 !== e.length && 0 !== t.length && 0 !== r(e, t)
            }
        },
        56867: function(e, t, r) {
            "use strict";
            t.Xx = t._w = t.aP = t.KS = t.jQ = void 0, r(69790);
            let i = r(61910);

            function n(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            r(62942), t.jQ = 64, t.KS = 64, t.aP = 32;
            let s = new Uint8Array(32);
            s[0] = 9;
            let o = n(),
                a = n([1]),
                c = (n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                h = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                u = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);

            function l(e, t) {
                for (let r = 0; r < 16; r++) e[r] = 0 | t[r]
            }

            function p(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let i = e[r] + t + 65535;
                    t = Math.floor(i / 65536), e[r] = i - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function f(e, t, r) {
                let i = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let n = i & (e[r] ^ t[r]);
                    e[r] ^= n, t[r] ^= n
                }
            }

            function d(e, t) {
                let r = n(),
                    i = n();
                for (let e = 0; e < 16; e++) i[e] = t[e];
                p(i), p(i), p(i);
                for (let e = 0; e < 2; e++) {
                    r[0] = i[0] - 65517;
                    for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                    r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                    let e = r[15] >> 16 & 1;
                    r[14] &= 65535, f(i, r, 1 - e)
                }
                for (let t = 0; t < 16; t++) e[2 * t] = 255 & i[t], e[2 * t + 1] = i[t] >> 8
            }
            n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function g(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] + r[i]
            }

            function y(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] - r[i]
            }

            function v(e, t, r) {
                let i, n, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    h = 0,
                    u = 0,
                    l = 0,
                    p = 0,
                    f = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    b = 0,
                    w = 0,
                    _ = 0,
                    E = 0,
                    D = 0,
                    I = 0,
                    S = 0,
                    C = 0,
                    P = 0,
                    O = 0,
                    x = 0,
                    A = 0,
                    R = 0,
                    T = 0,
                    N = 0,
                    k = 0,
                    j = 0,
                    L = r[0],
                    M = r[1],
                    q = r[2],
                    U = r[3],
                    z = r[4],
                    $ = r[5],
                    H = r[6],
                    F = r[7],
                    B = r[8],
                    K = r[9],
                    V = r[10],
                    W = r[11],
                    G = r[12],
                    Y = r[13],
                    J = r[14],
                    Q = r[15];
                s += (i = t[0]) * L, o += i * M, a += i * q, c += i * U, h += i * z, u += i * $, l += i * H, p += i * F, f += i * B, d += i * K, g += i * V, y += i * W, v += i * G, m += i * Y, b += i * J, w += i * Q, o += (i = t[1]) * L, a += i * M, c += i * q, h += i * U, u += i * z, l += i * $, p += i * H, f += i * F, d += i * B, g += i * K, y += i * V, v += i * W, m += i * G, b += i * Y, w += i * J, _ += i * Q, a += (i = t[2]) * L, c += i * M, h += i * q, u += i * U, l += i * z, p += i * $, f += i * H, d += i * F, g += i * B, y += i * K, v += i * V, m += i * W, b += i * G, w += i * Y, _ += i * J, E += i * Q, c += (i = t[3]) * L, h += i * M, u += i * q, l += i * U, p += i * z, f += i * $, d += i * H, g += i * F, y += i * B, v += i * K, m += i * V, b += i * W, w += i * G, _ += i * Y, E += i * J, D += i * Q, h += (i = t[4]) * L, u += i * M, l += i * q, p += i * U, f += i * z, d += i * $, g += i * H, y += i * F, v += i * B, m += i * K, b += i * V, w += i * W, _ += i * G, E += i * Y, D += i * J, I += i * Q, u += (i = t[5]) * L, l += i * M, p += i * q, f += i * U, d += i * z, g += i * $, y += i * H, v += i * F, m += i * B, b += i * K, w += i * V, _ += i * W, E += i * G, D += i * Y, I += i * J, S += i * Q, l += (i = t[6]) * L, p += i * M, f += i * q, d += i * U, g += i * z, y += i * $, v += i * H, m += i * F, b += i * B, w += i * K, _ += i * V, E += i * W, D += i * G, I += i * Y, S += i * J, C += i * Q, p += (i = t[7]) * L, f += i * M, d += i * q, g += i * U, y += i * z, v += i * $, m += i * H, b += i * F, w += i * B, _ += i * K, E += i * V, D += i * W, I += i * G, S += i * Y, C += i * J, P += i * Q, f += (i = t[8]) * L, d += i * M, g += i * q, y += i * U, v += i * z, m += i * $, b += i * H, w += i * F, _ += i * B, E += i * K, D += i * V, I += i * W, S += i * G, C += i * Y, P += i * J, O += i * Q, d += (i = t[9]) * L, g += i * M, y += i * q, v += i * U, m += i * z, b += i * $, w += i * H, _ += i * F, E += i * B, D += i * K, I += i * V, S += i * W, C += i * G, P += i * Y, O += i * J, x += i * Q, g += (i = t[10]) * L, y += i * M, v += i * q, m += i * U, b += i * z, w += i * $, _ += i * H, E += i * F, D += i * B, I += i * K, S += i * V, C += i * W, P += i * G, O += i * Y, x += i * J, A += i * Q, y += (i = t[11]) * L, v += i * M, m += i * q, b += i * U, w += i * z, _ += i * $, E += i * H, D += i * F, I += i * B, S += i * K, C += i * V, P += i * W, O += i * G, x += i * Y, A += i * J, R += i * Q, v += (i = t[12]) * L, m += i * M, b += i * q, w += i * U, _ += i * z, E += i * $, D += i * H, I += i * F, S += i * B, C += i * K, P += i * V, O += i * W, x += i * G, A += i * Y, R += i * J, T += i * Q, m += (i = t[13]) * L, b += i * M, w += i * q, _ += i * U, E += i * z, D += i * $, I += i * H, S += i * F, C += i * B, P += i * K, O += i * V, x += i * W, A += i * G, R += i * Y, T += i * J, N += i * Q, b += (i = t[14]) * L, w += i * M, _ += i * q, E += i * U, D += i * z, I += i * $, S += i * H, C += i * F, P += i * B, O += i * K, x += i * V, A += i * W, R += i * G, T += i * Y, N += i * J, k += i * Q, w += (i = t[15]) * L, _ += i * M, E += i * q, D += i * U, I += i * z, S += i * $, C += i * H, P += i * F, O += i * B, x += i * K, A += i * V, R += i * W, T += i * G, N += i * Y, k += i * J, j += i * Q, s += 38 * _, o += 38 * E, a += 38 * D, c += 38 * I, h += 38 * S, u += 38 * C, l += 38 * P, p += 38 * O, f += 38 * x, d += 38 * A, g += 38 * R, y += 38 * T, v += 38 * N, m += 38 * k, b += 38 * j, n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = h, e[5] = u, e[6] = l, e[7] = p, e[8] = f, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = m, e[14] = b, e[15] = w
            }

            function m(e, t) {
                let r = n(),
                    i = n(),
                    s = n(),
                    o = n(),
                    a = n(),
                    h = n(),
                    u = n(),
                    l = n(),
                    p = n();
                y(r, e[1], e[0]), y(p, t[1], t[0]), v(r, r, p), g(i, e[0], e[1]), g(p, t[0], t[1]), v(i, i, p), v(s, e[3], t[3]), v(s, s, c), v(o, e[2], t[2]), g(o, o, o), y(a, i, r), y(h, o, s), g(u, o, s), g(l, i, r), v(e[0], a, h), v(e[1], l, u), v(e[2], u, h), v(e[3], a, l)
            }

            function b(e, t, r) {
                for (let i = 0; i < 4; i++) f(e[i], t[i], r)
            }

            function w(e, t) {
                let r = n(),
                    i = n(),
                    s = n();
                (function(e, t) {
                    let r;
                    let i = n();
                    for (r = 0; r < 16; r++) i[r] = t[r];
                    for (r = 253; r >= 0; r--) v(i, i, i), 2 !== r && 4 !== r && v(i, i, t);
                    for (r = 0; r < 16; r++) e[r] = i[r]
                })(s, t[2]), v(r, t[0], s), v(i, t[1], s), d(e, i), e[31] ^= function(e) {
                    let t = new Uint8Array(32);
                    return d(t, e), 1 & t[0]
                }(r) << 7
            }

            function _(e, t) {
                let r = [n(), n(), n(), n()];
                l(r[0], h), l(r[1], u), l(r[2], a), v(r[3], h, u),
                    function(e, t, r) {
                        l(e[0], o), l(e[1], a), l(e[2], a), l(e[3], o);
                        for (let i = 255; i >= 0; --i) {
                            let n = r[i / 8 | 0] >> (7 & i) & 1;
                            b(e, t, n), m(t, e), m(e, e), b(e, t, n)
                        }
                    }(e, r, t)
            }
            t._w = function(e) {
                if (e.length !== t.aP) throw Error(`ed25519: seed must be ${t.aP} bytes`);
                let r = (0, i.hash)(e);
                r[0] &= 248, r[31] &= 127, r[31] |= 64;
                let s = new Uint8Array(32),
                    o = [n(), n(), n(), n()];
                _(o, r), w(s, o);
                let a = new Uint8Array(64);
                return a.set(e), a.set(s, 32), {
                    publicKey: s,
                    secretKey: a
                }
            };
            let E = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function D(e, t) {
                let r, i, n, s;
                for (i = 63; i >= 32; --i) {
                    for (r = 0, n = i - 32, s = i - 12; n < s; ++n) t[n] += r - 16 * t[i] * E[n - (i - 32)], r = Math.floor((t[n] + 128) / 256), t[n] -= 256 * r;
                    t[n] += r, t[i] = 0
                }
                for (n = 0, r = 0; n < 32; n++) t[n] += r - (t[31] >> 4) * E[n], r = t[n] >> 8, t[n] &= 255;
                for (n = 0; n < 32; n++) t[n] -= r * E[n];
                for (i = 0; i < 32; i++) t[i + 1] += t[i] >> 8, e[i] = 255 & t[i]
            }

            function I(e) {
                let t = new Float64Array(64);
                for (let r = 0; r < 64; r++) t[r] = e[r];
                for (let t = 0; t < 64; t++) e[t] = 0;
                D(e, t)
            }
            t.Xx = function(e, t) {
                let r = new Float64Array(64),
                    s = [n(), n(), n(), n()],
                    o = (0, i.hash)(e.subarray(0, 32));
                o[0] &= 248, o[31] &= 127, o[31] |= 64;
                let a = new Uint8Array(64);
                a.set(o.subarray(32), 32);
                let c = new i.SHA512;
                c.update(a.subarray(32)), c.update(t);
                let h = c.digest();
                c.clean(), I(h), _(s, h), w(a, s), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
                let u = c.digest();
                I(u);
                for (let e = 0; e < 32; e++) r[e] = h[e];
                for (let e = 0; e < 32; e++)
                    for (let t = 0; t < 32; t++) r[e + t] += u[e] * o[t];
                return D(a.subarray(32), r), a
            }
        },
        16203: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSerializableHash = function(e) {
                return void 0 !== e.saveState && void 0 !== e.restoreState && void 0 !== e.cleanSavedState
            }
        },
        36274: function(e, t, r) {
            "use strict";
            var i = r(84430),
                n = r(62942),
                s = function() {
                    function e(e, t, r, n) {
                        void 0 === r && (r = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = n;
                        var s = i.hmac(this._hash, r, t);
                        this._hmac = new i.HMAC(e, s), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
                    }
                    return e.prototype._fillBuffer = function() {
                        this._counter[0]++;
                        var e = this._counter[0];
                        if (0 === e) throw Error("hkdf: cannot expand more");
                        this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
                    }, e.prototype.expand = function(e) {
                        for (var t = new Uint8Array(e), r = 0; r < t.length; r++) this._bufpos === this._buffer.length && this._fillBuffer(), t[r] = this._buffer[this._bufpos++];
                        return t
                    }, e.prototype.clean = function() {
                        this._hmac.clean(), n.wipe(this._buffer), n.wipe(this._counter), this._bufpos = 0
                    }, e
                }();
            t.t = s
        },
        84430: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(16203),
                n = r(91216),
                s = r(62942),
                o = function() {
                    function e(e, t) {
                        this._finished = !1, this._inner = new e, this._outer = new e, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
                        var r = new Uint8Array(this.blockSize);
                        t.length > this.blockSize ? this._inner.update(t).finish(r).clean() : r.set(t);
                        for (var n = 0; n < r.length; n++) r[n] ^= 54;
                        this._inner.update(r);
                        for (var n = 0; n < r.length; n++) r[n] ^= 106;
                        this._outer.update(r), i.isSerializableHash(this._inner) && i.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), s.wipe(r)
                    }
                    return e.prototype.reset = function() {
                        if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't reset() because hash doesn't implement restoreState()");
                        return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.clean = function() {
                        i.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), i.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
                    }, e.prototype.update = function(e) {
                        return this._inner.update(e), this
                    }, e.prototype.finish = function(e) {
                        return this._finished ? this._outer.finish(e) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0), this
                    }, e.prototype.digest = function() {
                        var e = new Uint8Array(this.digestLength);
                        return this.finish(e), e
                    }, e.prototype.saveState = function() {
                        if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't saveState() because hash doesn't implement it");
                        return this._inner.saveState()
                    }, e.prototype.restoreState = function(e) {
                        if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't restoreState() because hash doesn't implement it");
                        return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.cleanSavedState = function(e) {
                        if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");
                        this._inner.cleanSavedState(e)
                    }, e
                }();
            t.HMAC = o, t.hmac = function(e, t, r) {
                var i = new o(e, t);
                i.update(r);
                var n = i.digest();
                return i.clean(), n
            }, t.equal = n.equal
        },
        63786: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(91216),
                n = r(62942);
            t.DIGEST_LENGTH = 16;
            var s = function() {
                function e(e) {
                    this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
                    var r = e[0] | e[1] << 8;
                    this._r[0] = 8191 & r;
                    var i = e[2] | e[3] << 8;
                    this._r[1] = (r >>> 13 | i << 3) & 8191;
                    var n = e[4] | e[5] << 8;
                    this._r[2] = (i >>> 10 | n << 6) & 7939;
                    var s = e[6] | e[7] << 8;
                    this._r[3] = (n >>> 7 | s << 9) & 8191;
                    var o = e[8] | e[9] << 8;
                    this._r[4] = (s >>> 4 | o << 12) & 255, this._r[5] = o >>> 1 & 8190;
                    var a = e[10] | e[11] << 8;
                    this._r[6] = (o >>> 14 | a << 2) & 8191;
                    var c = e[12] | e[13] << 8;
                    this._r[7] = (a >>> 11 | c << 5) & 8065;
                    var h = e[14] | e[15] << 8;
                    this._r[8] = (c >>> 8 | h << 8) & 8191, this._r[9] = h >>> 5 & 127, this._pad[0] = e[16] | e[17] << 8, this._pad[1] = e[18] | e[19] << 8, this._pad[2] = e[20] | e[21] << 8, this._pad[3] = e[22] | e[23] << 8, this._pad[4] = e[24] | e[25] << 8, this._pad[5] = e[26] | e[27] << 8, this._pad[6] = e[28] | e[29] << 8, this._pad[7] = e[30] | e[31] << 8
                }
                return e.prototype._blocks = function(e, t, r) {
                    for (var i = this._fin ? 0 : 2048, n = this._h[0], s = this._h[1], o = this._h[2], a = this._h[3], c = this._h[4], h = this._h[5], u = this._h[6], l = this._h[7], p = this._h[8], f = this._h[9], d = this._r[0], g = this._r[1], y = this._r[2], v = this._r[3], m = this._r[4], b = this._r[5], w = this._r[6], _ = this._r[7], E = this._r[8], D = this._r[9]; r >= 16;) {
                        var I, S = e[t + 0] | e[t + 1] << 8;
                        n += 8191 & S;
                        var C = e[t + 2] | e[t + 3] << 8;
                        s += (S >>> 13 | C << 3) & 8191;
                        var P = e[t + 4] | e[t + 5] << 8;
                        o += (C >>> 10 | P << 6) & 8191;
                        var O = e[t + 6] | e[t + 7] << 8;
                        a += (P >>> 7 | O << 9) & 8191;
                        var x = e[t + 8] | e[t + 9] << 8;
                        c += (O >>> 4 | x << 12) & 8191, h += x >>> 1 & 8191;
                        var A = e[t + 10] | e[t + 11] << 8;
                        u += (x >>> 14 | A << 2) & 8191;
                        var R = e[t + 12] | e[t + 13] << 8;
                        l += (A >>> 11 | R << 5) & 8191;
                        var T = e[t + 14] | e[t + 15] << 8;
                        p += (R >>> 8 | T << 8) & 8191, f += T >>> 5 | i;
                        var N = 0;
                        N = (I = 0 + n * d + s * (5 * D) + o * (5 * E) + a * (5 * _) + c * (5 * w)) >>> 13, I &= 8191, I += h * (5 * b) + u * (5 * m) + l * (5 * v) + p * (5 * y) + f * (5 * g), N += I >>> 13, I &= 8191;
                        var k = N;
                        k += n * g + s * d + o * (5 * D) + a * (5 * E) + c * (5 * _), N = k >>> 13, k &= 8191, k += h * (5 * w) + u * (5 * b) + l * (5 * m) + p * (5 * v) + f * (5 * y), N += k >>> 13, k &= 8191;
                        var j = N;
                        j += n * y + s * g + o * d + a * (5 * D) + c * (5 * E), N = j >>> 13, j &= 8191, j += h * (5 * _) + u * (5 * w) + l * (5 * b) + p * (5 * m) + f * (5 * v), N += j >>> 13, j &= 8191;
                        var L = N;
                        L += n * v + s * y + o * g + a * d + c * (5 * D), N = L >>> 13, L &= 8191, L += h * (5 * E) + u * (5 * _) + l * (5 * w) + p * (5 * b) + f * (5 * m), N += L >>> 13, L &= 8191;
                        var M = N;
                        M += n * m + s * v + o * y + a * g + c * d, N = M >>> 13, M &= 8191, M += h * (5 * D) + u * (5 * E) + l * (5 * _) + p * (5 * w) + f * (5 * b), N += M >>> 13, M &= 8191;
                        var q = N;
                        q += n * b + s * m + o * v + a * y + c * g, N = q >>> 13, q &= 8191, q += h * d + u * (5 * D) + l * (5 * E) + p * (5 * _) + f * (5 * w), N += q >>> 13, q &= 8191;
                        var U = N;
                        U += n * w + s * b + o * m + a * v + c * y, N = U >>> 13, U &= 8191, U += h * g + u * d + l * (5 * D) + p * (5 * E) + f * (5 * _), N += U >>> 13, U &= 8191;
                        var z = N;
                        z += n * _ + s * w + o * b + a * m + c * v, N = z >>> 13, z &= 8191, z += h * y + u * g + l * d + p * (5 * D) + f * (5 * E), N += z >>> 13, z &= 8191;
                        var $ = N;
                        $ += n * E + s * _ + o * w + a * b + c * m, N = $ >>> 13, $ &= 8191, $ += h * v + u * y + l * g + p * d + f * (5 * D), N += $ >>> 13, $ &= 8191;
                        var H = N;
                        H += n * D + s * E + o * _ + a * w + c * b, N = H >>> 13, H &= 8191, H += h * m + u * v + l * y + p * g + f * d, N += H >>> 13, H &= 8191, I = 8191 & (N = (N = (N << 2) + N | 0) + I | 0), N >>>= 13, k += N, n = I, s = k, o = j, a = L, c = M, h = q, u = U, l = z, p = $, f = H, t += 16, r -= 16
                    }
                    this._h[0] = n, this._h[1] = s, this._h[2] = o, this._h[3] = a, this._h[4] = c, this._h[5] = h, this._h[6] = u, this._h[7] = l, this._h[8] = p, this._h[9] = f
                }, e.prototype.finish = function(e, t) {
                    void 0 === t && (t = 0);
                    var r, i, n, s, o = new Uint16Array(10);
                    if (this._leftover) {
                        for (s = this._leftover, this._buffer[s++] = 1; s < 16; s++) this._buffer[s] = 0;
                        this._fin = 1, this._blocks(this._buffer, 0, 16)
                    }
                    for (r = this._h[1] >>> 13, this._h[1] &= 8191, s = 2; s < 10; s++) this._h[s] += r, r = this._h[s] >>> 13, this._h[s] &= 8191;
                    for (this._h[0] += 5 * r, r = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += r, r = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += r, o[0] = this._h[0] + 5, r = o[0] >>> 13, o[0] &= 8191, s = 1; s < 10; s++) o[s] = this._h[s] + r, r = o[s] >>> 13, o[s] &= 8191;
                    for (o[9] -= 8192, i = (1 ^ r) - 1, s = 0; s < 10; s++) o[s] &= i;
                    for (s = 0, i = ~i; s < 10; s++) this._h[s] = this._h[s] & i | o[s];
                    for (s = 1, this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, n = this._h[0] + this._pad[0], this._h[0] = 65535 & n; s < 8; s++) n = (this._h[s] + this._pad[s] | 0) + (n >>> 16) | 0, this._h[s] = 65535 & n;
                    return e[t + 0] = this._h[0] >>> 0, e[t + 1] = this._h[0] >>> 8, e[t + 2] = this._h[1] >>> 0, e[t + 3] = this._h[1] >>> 8, e[t + 4] = this._h[2] >>> 0, e[t + 5] = this._h[2] >>> 8, e[t + 6] = this._h[3] >>> 0, e[t + 7] = this._h[3] >>> 8, e[t + 8] = this._h[4] >>> 0, e[t + 9] = this._h[4] >>> 8, e[t + 10] = this._h[5] >>> 0, e[t + 11] = this._h[5] >>> 8, e[t + 12] = this._h[6] >>> 0, e[t + 13] = this._h[6] >>> 8, e[t + 14] = this._h[7] >>> 0, e[t + 15] = this._h[7] >>> 8, this._finished = !0, this
                }, e.prototype.update = function(e) {
                    var t, r = 0,
                        i = e.length;
                    if (this._leftover) {
                        (t = 16 - this._leftover) > i && (t = i);
                        for (var n = 0; n < t; n++) this._buffer[this._leftover + n] = e[r + n];
                        if (i -= t, r += t, this._leftover += t, this._leftover < 16) return this;
                        this._blocks(this._buffer, 0, 16), this._leftover = 0
                    }
                    if (i >= 16 && (t = i - i % 16, this._blocks(e, r, t), r += t, i -= t), i) {
                        for (var n = 0; n < i; n++) this._buffer[this._leftover + n] = e[r + n];
                        this._leftover += i
                    }
                    return this
                }, e.prototype.digest = function() {
                    if (this._finished) throw Error("Poly1305 was finished");
                    var e = new Uint8Array(16);
                    return this.finish(e), e
                }, e.prototype.clean = function() {
                    return n.wipe(this._buffer), n.wipe(this._r), n.wipe(this._h), n.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
                }, e
            }();
            t.Poly1305 = s, t.oneTimeAuth = function(e, t) {
                var r = new s(e);
                r.update(t);
                var i = r.digest();
                return r.clean(), i
            }, t.equal = function(e, r) {
                return e.length === t.DIGEST_LENGTH && r.length === t.DIGEST_LENGTH && i.equal(e, r)
            }
        },
        88906: function(e, t, r) {
            "use strict";
            var i = r(35859),
                n = r(62942);
            t.k = 32, t.cn = 64;
            var s = function() {
                function e() {
                    this.digestLength = t.k, this.blockSize = t.cn, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    n.wipe(this._buffer), n.wipe(this._temp), this.reset()
                }, e.prototype.update = function(e, t) {
                    if (void 0 === t && (t = e.length), this._finished) throw Error("SHA256: can't update because hash was finished.");
                    var r = 0;
                    if (this._bytesHashed += t, this._bufferLength > 0) {
                        for (; this._bufferLength < this.blockSize && t > 0;) this._buffer[this._bufferLength++] = e[r++], t--;
                        this._bufferLength === this.blockSize && (a(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (t >= this.blockSize && (r = a(this._temp, this._state, e, r, t), t %= this.blockSize); t > 0;) this._buffer[this._bufferLength++] = e[r++], t--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            n = t % 64 < 56 ? 64 : 128;
                        this._buffer[r] = 128;
                        for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
                        i.writeUint32BE(t / 536870912 | 0, this._buffer, n - 8), i.writeUint32BE(t << 3, this._buffer, n - 4), a(this._temp, this._state, this._buffer, 0, n), this._finished = !0
                    }
                    for (var s = 0; s < this.digestLength / 4; s++) i.writeUint32BE(this._state[s], e, 4 * s);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        state: new Int32Array(this._state),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._state.set(e.state), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    n.wipe(e.state), e.buffer && n.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.mE = s;
            var o = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

            function a(e, t, r, n, s) {
                for (; s >= 64;) {
                    for (var a = t[0], c = t[1], h = t[2], u = t[3], l = t[4], p = t[5], f = t[6], d = t[7], g = 0; g < 16; g++) {
                        var y = n + 4 * g;
                        e[g] = i.readUint32BE(r, y)
                    }
                    for (var g = 16; g < 64; g++) {
                        var v = e[g - 2],
                            m = (v >>> 17 | v << 15) ^ (v >>> 19 | v << 13) ^ v >>> 10,
                            b = ((v = e[g - 15]) >>> 7 | v << 25) ^ (v >>> 18 | v << 14) ^ v >>> 3;
                        e[g] = (m + e[g - 7] | 0) + (b + e[g - 16] | 0)
                    }
                    for (var g = 0; g < 64; g++) {
                        var m = (((l >>> 6 | l << 26) ^ (l >>> 11 | l << 21) ^ (l >>> 25 | l << 7)) + (l & p ^ ~l & f) | 0) + (d + (o[g] + e[g] | 0) | 0) | 0,
                            b = ((a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10)) + (a & c ^ a & h ^ c & h) | 0;
                        d = f, f = p, p = l, l = u + m | 0, u = h, h = c, c = a, a = m + b | 0
                    }
                    t[0] += a, t[1] += c, t[2] += h, t[3] += u, t[4] += l, t[5] += p, t[6] += f, t[7] += d, n += 64, s -= 64
                }
                return n
            }
            t.vp = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        61910: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(35859),
                n = r(62942);
            t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
            var s = function() {
                function e() {
                    this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset()
                }, e.prototype.update = function(e, r) {
                    if (void 0 === r && (r = e.length), this._finished) throw Error("SHA512: can't update because hash was finished.");
                    var i = 0;
                    if (this._bytesHashed += r, this._bufferLength > 0) {
                        for (; this._bufferLength < t.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (r >= this.blockSize && (i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, i, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            n = t % 128 < 112 ? 128 : 256;
                        this._buffer[r] = 128;
                        for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
                        i.writeUint32BE(t / 536870912 | 0, this._buffer, n - 8), i.writeUint32BE(t << 3, this._buffer, n - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, n), this._finished = !0
                    }
                    for (var s = 0; s < this.digestLength / 8; s++) i.writeUint32BE(this._stateHi[s], e, 8 * s), i.writeUint32BE(this._stateLo[s], e, 8 * s + 4);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    n.wipe(e.stateHi), n.wipe(e.stateLo), e.buffer && n.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.SHA512 = s;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(e, t, r, n, s, a, c) {
                for (var h, u, l, p, f, d, g, y, v = r[0], m = r[1], b = r[2], w = r[3], _ = r[4], E = r[5], D = r[6], I = r[7], S = n[0], C = n[1], P = n[2], O = n[3], x = n[4], A = n[5], R = n[6], T = n[7]; c >= 128;) {
                    for (var N = 0; N < 16; N++) {
                        var k = 8 * N + a;
                        e[N] = i.readUint32BE(s, k), t[N] = i.readUint32BE(s, k + 4)
                    }
                    for (var N = 0; N < 80; N++) {
                        var j = v,
                            L = m,
                            M = b,
                            q = w,
                            U = _,
                            z = E,
                            $ = D,
                            H = I,
                            F = S,
                            B = C,
                            K = P,
                            V = O,
                            W = x,
                            G = A,
                            Y = R,
                            J = T;
                        if (h = I, f = 65535 & (u = T), d = u >>> 16, g = 65535 & h, y = h >>> 16, h = (_ >>> 14 | x << 18) ^ (_ >>> 18 | x << 14) ^ (x >>> 9 | _ << 23), f += 65535 & (u = (x >>> 14 | _ << 18) ^ (x >>> 18 | _ << 14) ^ (_ >>> 9 | x << 23)), d += u >>> 16, g += 65535 & h, y += h >>> 16, h = _ & E ^ ~_ & D, f += 65535 & (u = x & A ^ ~x & R), d += u >>> 16, g += 65535 & h, y += h >>> 16, h = o[2 * N], f += 65535 & (u = o[2 * N + 1]), d += u >>> 16, g += 65535 & h, y += h >>> 16, h = e[N % 16], f += 65535 & (u = t[N % 16]), d += u >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, l = 65535 & g | y << 16, p = 65535 & f | d << 16, h = l, f = 65535 & (u = p), d = u >>> 16, g = 65535 & h, y = h >>> 16, h = (v >>> 28 | S << 4) ^ (S >>> 2 | v << 30) ^ (S >>> 7 | v << 25), f += 65535 & (u = (S >>> 28 | v << 4) ^ (v >>> 2 | S << 30) ^ (v >>> 7 | S << 25)), d += u >>> 16, g += 65535 & h, y += h >>> 16, h = v & m ^ v & b ^ m & b, f += 65535 & (u = S & C ^ S & P ^ C & P), d += u >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, H = 65535 & g | y << 16, J = 65535 & f | d << 16, h = q, f = 65535 & (u = V), d = u >>> 16, g = 65535 & h, y = h >>> 16, h = l, f += 65535 & (u = p), d += u >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, q = 65535 & g | y << 16, V = 65535 & f | d << 16, m = j, b = L, w = M, _ = q, E = U, D = z, I = $, v = H, C = F, P = B, O = K, x = V, A = W, R = G, T = Y, S = J, N % 16 == 15)
                            for (var k = 0; k < 16; k++) h = e[k], f = 65535 & (u = t[k]), d = u >>> 16, g = 65535 & h, y = h >>> 16, h = e[(k + 9) % 16], f += 65535 & (u = t[(k + 9) % 16]), d += u >>> 16, g += 65535 & h, y += h >>> 16, h = ((l = e[(k + 1) % 16]) >>> 1 | (p = t[(k + 1) % 16]) << 31) ^ (l >>> 8 | p << 24) ^ l >>> 7, f += 65535 & (u = (p >>> 1 | l << 31) ^ (p >>> 8 | l << 24) ^ (p >>> 7 | l << 25)), d += u >>> 16, g += 65535 & h, y += h >>> 16, h = ((l = e[(k + 14) % 16]) >>> 19 | (p = t[(k + 14) % 16]) << 13) ^ (p >>> 29 | l << 3) ^ l >>> 6, f += 65535 & (u = (p >>> 19 | l << 13) ^ (l >>> 29 | p << 3) ^ (p >>> 6 | l << 26)), d += u >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, e[k] = 65535 & g | y << 16, t[k] = 65535 & f | d << 16
                    }
                    h = v, f = 65535 & (u = S), d = u >>> 16, g = 65535 & h, y = h >>> 16, h = r[0], f += 65535 & (u = n[0]), d += u >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[0] = v = 65535 & g | y << 16, n[0] = S = 65535 & f | d << 16, h = m, f = 65535 & (u = C), d = u >>> 16, g = 65535 & h, y = h >>> 16, h = r[1], f += 65535 & (u = n[1]), d += u >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[1] = m = 65535 & g | y << 16, n[1] = C = 65535 & f | d << 16, h = b, f = 65535 & (u = P), d = u >>> 16, g = 65535 & h, y = h >>> 16, h = r[2], f += 65535 & (u = n[2]), d += u >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[2] = b = 65535 & g | y << 16, n[2] = P = 65535 & f | d << 16, h = w, f = 65535 & (u = O), d = u >>> 16, g = 65535 & h, y = h >>> 16, h = r[3], f += 65535 & (u = n[3]), d += u >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[3] = w = 65535 & g | y << 16, n[3] = O = 65535 & f | d << 16, h = _, f = 65535 & (u = x), d = u >>> 16, g = 65535 & h, y = h >>> 16, h = r[4], f += 65535 & (u = n[4]), d += u >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[4] = _ = 65535 & g | y << 16, n[4] = x = 65535 & f | d << 16, h = E, f = 65535 & (u = A), d = u >>> 16, g = 65535 & h, y = h >>> 16, h = r[5], f += 65535 & (u = n[5]), d += u >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[5] = E = 65535 & g | y << 16, n[5] = A = 65535 & f | d << 16, h = D, f = 65535 & (u = R), d = u >>> 16, g = 65535 & h, y = h >>> 16, h = r[6], f += 65535 & (u = n[6]), d += u >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[6] = D = 65535 & g | y << 16, n[6] = R = 65535 & f | d << 16, h = I, f = 65535 & (u = T), d = u >>> 16, g = 65535 & h, y = h >>> 16, h = r[7], f += 65535 & (u = n[7]), d += u >>> 16, g += 65535 & h, y += h >>> 16, d += f >>> 16, g += d >>> 16, y += g >>> 16, r[7] = I = 65535 & g | y << 16, n[7] = T = 65535 & f | d << 16, a += 128, c -= 128
                }
                return a
            }
            t.hash = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        99518: function(e, t, r) {
            "use strict";
            t.gi = t.Au = t.KS = t.kz = void 0;
            let i = r(69790),
                n = r(62942);

            function s(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            t.kz = 32, t.KS = 32;
            let o = new Uint8Array(32);
            o[0] = 9;
            let a = s([56129, 1]);

            function c(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let i = e[r] + t + 65535;
                    t = Math.floor(i / 65536), e[r] = i - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function h(e, t, r) {
                let i = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let n = i & (e[r] ^ t[r]);
                    e[r] ^= n, t[r] ^= n
                }
            }

            function u(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] + r[i]
            }

            function l(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] - r[i]
            }

            function p(e, t, r) {
                let i, n, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    h = 0,
                    u = 0,
                    l = 0,
                    p = 0,
                    f = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    b = 0,
                    w = 0,
                    _ = 0,
                    E = 0,
                    D = 0,
                    I = 0,
                    S = 0,
                    C = 0,
                    P = 0,
                    O = 0,
                    x = 0,
                    A = 0,
                    R = 0,
                    T = 0,
                    N = 0,
                    k = 0,
                    j = 0,
                    L = r[0],
                    M = r[1],
                    q = r[2],
                    U = r[3],
                    z = r[4],
                    $ = r[5],
                    H = r[6],
                    F = r[7],
                    B = r[8],
                    K = r[9],
                    V = r[10],
                    W = r[11],
                    G = r[12],
                    Y = r[13],
                    J = r[14],
                    Q = r[15];
                s += (i = t[0]) * L, o += i * M, a += i * q, c += i * U, h += i * z, u += i * $, l += i * H, p += i * F, f += i * B, d += i * K, g += i * V, y += i * W, v += i * G, m += i * Y, b += i * J, w += i * Q, o += (i = t[1]) * L, a += i * M, c += i * q, h += i * U, u += i * z, l += i * $, p += i * H, f += i * F, d += i * B, g += i * K, y += i * V, v += i * W, m += i * G, b += i * Y, w += i * J, _ += i * Q, a += (i = t[2]) * L, c += i * M, h += i * q, u += i * U, l += i * z, p += i * $, f += i * H, d += i * F, g += i * B, y += i * K, v += i * V, m += i * W, b += i * G, w += i * Y, _ += i * J, E += i * Q, c += (i = t[3]) * L, h += i * M, u += i * q, l += i * U, p += i * z, f += i * $, d += i * H, g += i * F, y += i * B, v += i * K, m += i * V, b += i * W, w += i * G, _ += i * Y, E += i * J, D += i * Q, h += (i = t[4]) * L, u += i * M, l += i * q, p += i * U, f += i * z, d += i * $, g += i * H, y += i * F, v += i * B, m += i * K, b += i * V, w += i * W, _ += i * G, E += i * Y, D += i * J, I += i * Q, u += (i = t[5]) * L, l += i * M, p += i * q, f += i * U, d += i * z, g += i * $, y += i * H, v += i * F, m += i * B, b += i * K, w += i * V, _ += i * W, E += i * G, D += i * Y, I += i * J, S += i * Q, l += (i = t[6]) * L, p += i * M, f += i * q, d += i * U, g += i * z, y += i * $, v += i * H, m += i * F, b += i * B, w += i * K, _ += i * V, E += i * W, D += i * G, I += i * Y, S += i * J, C += i * Q, p += (i = t[7]) * L, f += i * M, d += i * q, g += i * U, y += i * z, v += i * $, m += i * H, b += i * F, w += i * B, _ += i * K, E += i * V, D += i * W, I += i * G, S += i * Y, C += i * J, P += i * Q, f += (i = t[8]) * L, d += i * M, g += i * q, y += i * U, v += i * z, m += i * $, b += i * H, w += i * F, _ += i * B, E += i * K, D += i * V, I += i * W, S += i * G, C += i * Y, P += i * J, O += i * Q, d += (i = t[9]) * L, g += i * M, y += i * q, v += i * U, m += i * z, b += i * $, w += i * H, _ += i * F, E += i * B, D += i * K, I += i * V, S += i * W, C += i * G, P += i * Y, O += i * J, x += i * Q, g += (i = t[10]) * L, y += i * M, v += i * q, m += i * U, b += i * z, w += i * $, _ += i * H, E += i * F, D += i * B, I += i * K, S += i * V, C += i * W, P += i * G, O += i * Y, x += i * J, A += i * Q, y += (i = t[11]) * L, v += i * M, m += i * q, b += i * U, w += i * z, _ += i * $, E += i * H, D += i * F, I += i * B, S += i * K, C += i * V, P += i * W, O += i * G, x += i * Y, A += i * J, R += i * Q, v += (i = t[12]) * L, m += i * M, b += i * q, w += i * U, _ += i * z, E += i * $, D += i * H, I += i * F, S += i * B, C += i * K, P += i * V, O += i * W, x += i * G, A += i * Y, R += i * J, T += i * Q, m += (i = t[13]) * L, b += i * M, w += i * q, _ += i * U, E += i * z, D += i * $, I += i * H, S += i * F, C += i * B, P += i * K, O += i * V, x += i * W, A += i * G, R += i * Y, T += i * J, N += i * Q, b += (i = t[14]) * L, w += i * M, _ += i * q, E += i * U, D += i * z, I += i * $, S += i * H, C += i * F, P += i * B, O += i * K, x += i * V, A += i * W, R += i * G, T += i * Y, N += i * J, k += i * Q, w += (i = t[15]) * L, _ += i * M, E += i * q, D += i * U, I += i * z, S += i * $, C += i * H, P += i * F, O += i * B, x += i * K, A += i * V, R += i * W, T += i * G, N += i * Y, k += i * J, j += i * Q, s += 38 * _, o += 38 * E, a += 38 * D, c += 38 * I, h += 38 * S, u += 38 * C, l += 38 * P, p += 38 * O, f += 38 * x, d += 38 * A, g += 38 * R, y += 38 * T, v += 38 * N, m += 38 * k, b += 38 * j, n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, s += n - 1 + 37 * (n - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = h, e[5] = u, e[6] = l, e[7] = p, e[8] = f, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = m, e[14] = b, e[15] = w
            }

            function f(e, t) {
                let r = new Uint8Array(32),
                    i = new Float64Array(80),
                    n = s(),
                    o = s(),
                    f = s(),
                    d = s(),
                    g = s(),
                    y = s();
                for (let t = 0; t < 31; t++) r[t] = e[t];
                r[31] = 127 & e[31] | 64, r[0] &= 248,
                    function(e, t) {
                        for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
                        e[15] &= 32767
                    }(i, t);
                for (let e = 0; e < 16; e++) o[e] = i[e];
                n[0] = d[0] = 1;
                for (let e = 254; e >= 0; --e) {
                    let t = r[e >>> 3] >>> (7 & e) & 1;
                    h(n, o, t), h(f, d, t), u(g, n, f), l(n, n, f), u(f, o, d), l(o, o, d), p(d, g, g), p(y, n, n), p(n, f, n), p(f, o, g), u(g, n, f), l(n, n, f), p(o, n, n), l(f, d, y), p(n, f, a), u(n, n, d), p(f, f, n), p(n, d, y), p(d, o, i), p(o, g, g), h(n, o, t), h(f, d, t)
                }
                for (let e = 0; e < 16; e++) i[e + 16] = n[e], i[e + 32] = f[e], i[e + 48] = o[e], i[e + 64] = d[e];
                let v = i.subarray(32),
                    m = i.subarray(16);
                ! function(e, t) {
                    let r = s();
                    for (let e = 0; e < 16; e++) r[e] = t[e];
                    for (let e = 253; e >= 0; e--) p(r, r, r), 2 !== e && 4 !== e && p(r, r, t);
                    for (let t = 0; t < 16; t++) e[t] = r[t]
                }(v, v), p(m, m, v);
                let b = new Uint8Array(32);
                return ! function(e, t) {
                    let r = s(),
                        i = s();
                    for (let e = 0; e < 16; e++) i[e] = t[e];
                    c(i), c(i), c(i);
                    for (let e = 0; e < 2; e++) {
                        r[0] = i[0] - 65517;
                        for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                        r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                        let e = r[15] >> 16 & 1;
                        r[14] &= 65535, h(i, r, 1 - e)
                    }
                    for (let t = 0; t < 16; t++) e[2 * t] = 255 & i[t], e[2 * t + 1] = i[t] >> 8
                }(b, m), b
            }
            t.Au = function(e) {
                let r = (0, i.randomBytes)(32, e),
                    s = function(e) {
                        if (e.length !== t.KS) throw Error(`x25519: seed must be ${t.KS} bytes`);
                        let r = new Uint8Array(e),
                            i = f(r, o);
                        return {
                            publicKey: i,
                            secretKey: r
                        }
                    }(r);
                return (0, n.wipe)(r), s
            }, t.gi = function(e, r, i = !1) {
                if (e.length !== t.kz) throw Error("X25519: incorrect secret key length");
                if (r.length !== t.kz) throw Error("X25519: incorrect public key length");
                let n = f(e, r);
                if (i) {
                    let e = 0;
                    for (let t = 0; t < n.length; t++) e |= n[t];
                    if (0 === e) throw Error("X25519: invalid shared key")
                }
                return n
            }
        },
        3342: function(e, t, r) {
            "use strict";

            function i() {
                return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {}
            }

            function n() {
                let e = i();
                return e.subtle || e.webkitSubtle
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = i, t.getSubtleCrypto = n, t.isBrowserCryptoAvailable = function() {
                return !!i() && !!n()
            }
        },
        29880: function(e, t, r) {
            "use strict";
            var i = r(28070);

            function n() {
                return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
            }

            function s() {
                return void 0 !== i && void 0 !== i.versions && void 0 !== i.versions.node
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = n, t.isNode = s, t.isBrowser = function() {
                return !n() && !s()
            }
        },
        30837: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(96579);
            i.__exportStar(r(3342), t), i.__exportStar(r(29880), t)
        },
        93453: function(e, t, r) {
            "use strict";
            let i;
            r.d(t, {
                EthereumProvider: function() {
                    return nW
                }
            });
            var n = r(68495),
                s = r.n(n),
                o = r(20745);
            let a = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                c = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                h = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function u(e, t) {
                if ("__proto__" === e || "constructor" === e && t && "object" == typeof t && "prototype" in t) {
                    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
                    return
                }
                return t
            }

            function l(e, t = {}) {
                if ("string" != typeof e) return e;
                let r = e.trim();
                if ('"' === e[0] && e.endsWith('"') && !e.includes("\\")) return r.slice(1, -1);
                if (r.length <= 9) {
                    let e = r.toLowerCase();
                    if ("true" === e) return !0;
                    if ("false" === e) return !1;
                    if ("undefined" === e) return;
                    if ("null" === e) return null;
                    if ("nan" === e) return Number.NaN;
                    if ("infinity" === e) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === e) return Number.NEGATIVE_INFINITY
                }
                if (!h.test(e)) {
                    if (t.strict) throw SyntaxError("[destr] Invalid JSON");
                    return e
                }
                try {
                    if (a.test(e) || c.test(e)) {
                        if (t.strict) throw Error("[destr] Possible prototype pollution");
                        return JSON.parse(e, u)
                    }
                    return JSON.parse(e)
                } catch (r) {
                    if (t.strict) throw r;
                    return e
                }
            }
            var p = r(61900).Buffer;

            function f(e, ...t) {
                try {
                    var r;
                    return (r = e(...t)) && "function" == typeof r.then ? r : Promise.resolve(r)
                } catch (e) {
                    return Promise.reject(e)
                }
            }

            function d(e) {
                if (function(e) {
                        let t = typeof e;
                        return null === e || "object" !== t && "function" !== t
                    }(e)) return String(e);
                if (function(e) {
                        let t = Object.getPrototypeOf(e);
                        return !t || t.isPrototypeOf(Object)
                    }(e) || Array.isArray(e)) return JSON.stringify(e);
                if ("function" == typeof e.toJSON) return d(e.toJSON());
                throw Error("[unstorage] Cannot stringify value!")
            }
            let g = "base64:";

            function y(e) {
                return e ? e.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function v(e) {
                return (e = y(e)) ? e + ":" : ""
            }
            let m = () => {
                let e = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: t => e.has(t),
                    getItem: t => e.get(t) ? ? null,
                    getItemRaw: t => e.get(t) ? ? null,
                    setItem(t, r) {
                        e.set(t, r)
                    },
                    setItemRaw(t, r) {
                        e.set(t, r)
                    },
                    removeItem(t) {
                        e.delete(t)
                    },
                    getKeys: () => Array.from(e.keys()),
                    clear() {
                        e.clear()
                    },
                    dispose() {
                        e.clear()
                    }
                }
            };

            function b(e, t, r) {
                return e.watch ? e.watch((e, i) => t(e, r + i)) : () => {}
            }
            async function w(e) {
                "function" == typeof e.dispose && await f(e.dispose)
            }

            function _(e) {
                return new Promise((t, r) => {
                    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => r(e.error)
                })
            }

            function E(e, t) {
                let r = indexedDB.open(e);
                r.onupgradeneeded = () => r.result.createObjectStore(t);
                let i = _(r);
                return (e, r) => i.then(i => r(i.transaction(t, e).objectStore(t)))
            }

            function D() {
                return i || (i = E("keyval-store", "keyval")), i
            }

            function I(e, t = D()) {
                return t("readonly", t => _(t.get(e)))
            }
            let S = e => JSON.stringify(e, (e, t) => "bigint" == typeof t ? t.toString() + "n" : t),
                C = e => {
                    let t = e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3');
                    return JSON.parse(t, (e, t) => {
                        let r = "string" == typeof t && t.match(/^\d+n$/);
                        return r ? BigInt(t.substring(0, t.length - 1)) : t
                    })
                };

            function P(e) {
                if ("string" != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
                try {
                    return C(e)
                } catch (t) {
                    return e
                }
            }

            function O(e) {
                return "string" == typeof e ? e : S(e) || ""
            }
            var x = (e = {}) => {
                let t;
                let r = e.base && e.base.length > 0 ? `${e.base}:` : "",
                    i = e => r + e;
                return e.dbName && e.storeName && (t = E(e.dbName, e.storeName)), {
                    name: "idb-keyval",
                    options: e,
                    hasItem: async e => !(typeof await I(i(e), t) > "u"),
                    getItem: async e => await I(i(e), t) ? ? null,
                    setItem: (e, r) => (function(e, t, r = D()) {
                        return r("readwrite", r => (r.put(t, e), _(r.transaction)))
                    })(i(e), r, t),
                    removeItem: e => (function(e, t = D()) {
                        return t("readwrite", t => (t.delete(e), _(t.transaction)))
                    })(i(e), t),
                    getKeys: () => (function(e = D()) {
                        return e("readonly", e => {
                            var t;
                            if (e.getAllKeys) return _(e.getAllKeys());
                            let r = [];
                            return (t = e => r.push(e.key), e.openCursor().onsuccess = function() {
                                this.result && (t(this.result), this.result.continue())
                            }, _(e.transaction)).then(() => r)
                        })
                    })(t),
                    clear: () => (function(e = D()) {
                        return e("readwrite", e => (e.clear(), _(e.transaction)))
                    })(t)
                }
            };
            class A {
                constructor() {
                    this.indexedDb = function(e = {}) {
                        let t = {
                                mounts: {
                                    "": e.driver || m()
                                },
                                mountpoints: [""],
                                watching: !1,
                                watchListeners: [],
                                unwatch: {}
                            },
                            r = e => {
                                for (let r of t.mountpoints)
                                    if (e.startsWith(r)) return {
                                        base: r,
                                        relativeKey: e.slice(r.length),
                                        driver: t.mounts[r]
                                    };
                                return {
                                    base: "",
                                    relativeKey: e,
                                    driver: t.mounts[""]
                                }
                            },
                            i = (e, r) => t.mountpoints.filter(t => t.startsWith(e) || r && e.startsWith(t)).map(r => ({
                                relativeBase: e.length > r.length ? e.slice(r.length) : void 0,
                                mountpoint: r,
                                driver: t.mounts[r]
                            })),
                            n = (e, r) => {
                                if (t.watching)
                                    for (let i of (r = y(r), t.watchListeners)) i(e, r)
                            },
                            s = async () => {
                                if (!t.watching)
                                    for (let e in t.watching = !0, t.mounts) t.unwatch[e] = await b(t.mounts[e], n, e)
                            },
                            o = async () => {
                                if (t.watching) {
                                    for (let e in t.unwatch) await t.unwatch[e]();
                                    t.unwatch = {}, t.watching = !1
                                }
                            },
                            a = (e, t, i) => {
                                let n = new Map,
                                    s = e => {
                                        let t = n.get(e.base);
                                        return t || (t = {
                                            driver: e.driver,
                                            base: e.base,
                                            items: []
                                        }, n.set(e.base, t)), t
                                    };
                                for (let i of e) {
                                    let e = "string" == typeof i,
                                        n = y(e ? i : i.key),
                                        o = e ? void 0 : i.value,
                                        a = e || !i.options ? t : { ...t,
                                            ...i.options
                                        },
                                        c = r(n);
                                    s(c).items.push({
                                        key: n,
                                        value: o,
                                        relativeKey: c.relativeKey,
                                        options: a
                                    })
                                }
                                return Promise.all([...n.values()].map(e => i(e))).then(e => e.flat())
                            },
                            c = {
                                hasItem(e, t = {}) {
                                    e = y(e);
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e);
                                    return f(n.hasItem, i, t)
                                },
                                getItem(e, t = {}) {
                                    e = y(e);
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e);
                                    return f(n.getItem, i, t).then(e => l(e))
                                },
                                getItems: (e, t) => a(e, t, e => e.driver.getItems ? f(e.driver.getItems, e.items.map(e => ({
                                    key: e.relativeKey,
                                    options: e.options
                                })), t).then(t => t.map(t => ({
                                    key: function(...e) {
                                        return y(e.join(":"))
                                    }(e.base, t.key),
                                    value: l(t.value)
                                }))) : Promise.all(e.items.map(t => f(e.driver.getItem, t.relativeKey, t.options).then(e => ({
                                    key: t.key,
                                    value: l(e)
                                }))))),
                                getItemRaw(e, t = {}) {
                                    e = y(e);
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e);
                                    return n.getItemRaw ? f(n.getItemRaw, i, t) : f(n.getItem, i, t).then(e => "string" == typeof e && e.startsWith(g) ? p.from(e.slice(g.length), "base64") : e)
                                },
                                async setItem(e, t, i = {}) {
                                    if (void 0 === t) return c.removeItem(e);
                                    e = y(e);
                                    let {
                                        relativeKey: s,
                                        driver: o
                                    } = r(e);
                                    o.setItem && (await f(o.setItem, s, d(t), i), o.watch || n("update", e))
                                },
                                async setItems(e, t) {
                                    await a(e, t, async e => {
                                        if (e.driver.setItems) return f(e.driver.setItems, e.items.map(e => ({
                                            key: e.relativeKey,
                                            value: d(e.value),
                                            options: e.options
                                        })), t);
                                        e.driver.setItem && await Promise.all(e.items.map(t => f(e.driver.setItem, t.relativeKey, d(t.value), t.options)))
                                    })
                                },
                                async setItemRaw(e, t, i = {}) {
                                    if (void 0 === t) return c.removeItem(e, i);
                                    e = y(e);
                                    let {
                                        relativeKey: s,
                                        driver: o
                                    } = r(e);
                                    if (o.setItemRaw) await f(o.setItemRaw, s, t, i);
                                    else {
                                        if (!o.setItem) return;
                                        await f(o.setItem, s, function(e) {
                                            if ("string" == typeof e) return e;
                                            let t = p.from(e).toString("base64");
                                            return g + t
                                        }(t), i)
                                    }
                                    o.watch || n("update", e)
                                },
                                async removeItem(e, t = {}) {
                                    "boolean" == typeof t && (t = {
                                        removeMeta: t
                                    }), e = y(e);
                                    let {
                                        relativeKey: i,
                                        driver: s
                                    } = r(e);
                                    s.removeItem && (await f(s.removeItem, i, t), (t.removeMeta || t.removeMata) && await f(s.removeItem, i + "$", t), s.watch || n("remove", e))
                                },
                                async getMeta(e, t = {}) {
                                    "boolean" == typeof t && (t = {
                                        nativeOnly: t
                                    }), e = y(e);
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e), s = Object.create(null);
                                    if (n.getMeta && Object.assign(s, await f(n.getMeta, i, t)), !t.nativeOnly) {
                                        let e = await f(n.getItem, i + "$", t).then(e => l(e));
                                        e && "object" == typeof e && ("string" == typeof e.atime && (e.atime = new Date(e.atime)), "string" == typeof e.mtime && (e.mtime = new Date(e.mtime)), Object.assign(s, e))
                                    }
                                    return s
                                },
                                setMeta(e, t, r = {}) {
                                    return this.setItem(e + "$", t, r)
                                },
                                removeMeta(e, t = {}) {
                                    return this.removeItem(e + "$", t)
                                },
                                async getKeys(e, t = {}) {
                                    e = v(e);
                                    let r = i(e, !0),
                                        n = [],
                                        s = [];
                                    for (let e of r) {
                                        let r = await f(e.driver.getKeys, e.relativeBase, t),
                                            i = r.map(t => e.mountpoint + y(t)).filter(e => !n.some(t => e.startsWith(t)));
                                        s.push(...i), n = [e.mountpoint, ...n.filter(t => !t.startsWith(e.mountpoint))]
                                    }
                                    return e ? s.filter(t => t.startsWith(e) && !t.endsWith("$")) : s.filter(e => !e.endsWith("$"))
                                },
                                async clear(e, t = {}) {
                                    e = v(e), await Promise.all(i(e, !1).map(async e => {
                                        if (e.driver.clear) return f(e.driver.clear, e.relativeBase, t);
                                        if (e.driver.removeItem) {
                                            let r = await e.driver.getKeys(e.relativeBase || "", t);
                                            return Promise.all(r.map(r => e.driver.removeItem(r, t)))
                                        }
                                    }))
                                },
                                async dispose() {
                                    await Promise.all(Object.values(t.mounts).map(e => w(e)))
                                },
                                watch: async e => (await s(), t.watchListeners.push(e), async () => {
                                    t.watchListeners = t.watchListeners.filter(t => t !== e), 0 === t.watchListeners.length && await o()
                                }),
                                async unwatch() {
                                    t.watchListeners = [], await o()
                                },
                                mount(e, r) {
                                    if ((e = v(e)) && t.mounts[e]) throw Error(`already mounted at ${e}`);
                                    return e && (t.mountpoints.push(e), t.mountpoints.sort((e, t) => t.length - e.length)), t.mounts[e] = r, t.watching && Promise.resolve(b(r, n, e)).then(r => {
                                        t.unwatch[e] = r
                                    }).catch(console.error), c
                                },
                                async unmount(e, r = !0) {
                                    (e = v(e)) && t.mounts[e] && (t.watching && e in t.unwatch && (t.unwatch[e](), delete t.unwatch[e]), r && await w(t.mounts[e]), t.mountpoints = t.mountpoints.filter(t => t !== e), delete t.mounts[e])
                                },
                                getMount(e = "") {
                                    e = y(e) + ":";
                                    let t = r(e);
                                    return {
                                        driver: t.driver,
                                        base: t.base
                                    }
                                },
                                getMounts(e = "", t = {}) {
                                    e = y(e);
                                    let r = i(e, t.parents);
                                    return r.map(e => ({
                                        driver: e.driver,
                                        base: e.mountpoint
                                    }))
                                }
                            };
                        return c
                    }({
                        driver: x({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
                async getKeys() {
                    return this.indexedDb.getKeys()
                }
                async getEntries() {
                    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(e => [e.key, e.value])
                }
                async getItem(e) {
                    let t = await this.indexedDb.getItem(e);
                    if (null !== t) return t
                }
                async setItem(e, t) {
                    await this.indexedDb.setItem(e, O(t))
                }
                async removeItem(e) {
                    await this.indexedDb.removeItem(e)
                }
            }
            var R = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                T = {
                    exports: {}
                };

            function N(e) {
                var t;
                return [e[0], P(null != (t = e[1]) ? t : "")]
            }! function() {
                function e() {}
                e.prototype.getItem = function(e) {
                    return this.hasOwnProperty(e) ? String(this[e]) : null
                }, e.prototype.setItem = function(e, t) {
                    this[e] = String(t)
                }, e.prototype.removeItem = function(e) {
                    delete this[e]
                }, e.prototype.clear = function() {
                    let e = this;
                    Object.keys(e).forEach(function(t) {
                        e[t] = void 0, delete e[t]
                    })
                }, e.prototype.key = function(e) {
                    return e = e || 0, Object.keys(this)[e]
                }, e.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), "u" > typeof R && R.localStorage ? T.exports = R.localStorage : "u" > typeof window && window.localStorage ? T.exports = window.localStorage : T.exports = new e
            }();
            class k {
                constructor() {
                    this.localStorage = T.exports
                }
                async getKeys() {
                    return Object.keys(this.localStorage)
                }
                async getEntries() {
                    return Object.entries(this.localStorage).map(N)
                }
                async getItem(e) {
                    let t = this.localStorage.getItem(e);
                    if (null !== t) return P(t)
                }
                async setItem(e, t) {
                    this.localStorage.setItem(e, O(t))
                }
                async removeItem(e) {
                    this.localStorage.removeItem(e)
                }
            }
            let j = async (e, t, r) => {
                    let i = "wc_storage_version",
                        n = await t.getItem(i);
                    if (n && n >= 1) {
                        r(t);
                        return
                    }
                    let s = await e.getKeys();
                    if (!s.length) {
                        r(t);
                        return
                    }
                    let o = [];
                    for (; s.length;) {
                        let r = s.shift();
                        if (!r) continue;
                        let i = r.toLowerCase();
                        if (i.includes("wc@") || i.includes("walletconnect") || i.includes("wc_") || i.includes("wallet_connect")) {
                            let i = await e.getItem(r);
                            await t.setItem(r, i), o.push(r)
                        }
                    }
                    await t.setItem(i, 1), r(t), L(e, o)
                },
                L = async (e, t) => {
                    t.length && t.forEach(async t => {
                        await e.removeItem(t)
                    })
                };
            class M {
                constructor() {
                    this.initialized = !1, this.setInitialized = e => {
                        this.storage = e, this.initialized = !0
                    };
                    let e = new k;
                    this.storage = e;
                    try {
                        let t = new A;
                        j(e, t, this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                async getKeys() {
                    return await this.initialize(), this.storage.getKeys()
                }
                async getEntries() {
                    return await this.initialize(), this.storage.getEntries()
                }
                async getItem(e) {
                    return await this.initialize(), this.storage.getItem(e)
                }
                async setItem(e, t) {
                    return await this.initialize(), this.storage.setItem(e, t)
                }
                async removeItem(e) {
                    return await this.initialize(), this.storage.removeItem(e)
                }
                async initialize() {
                    this.initialized || await new Promise(e => {
                        let t = setInterval(() => {
                            this.initialized && (clearInterval(t), e())
                        }, 20)
                    })
                }
            }
            var q = r(88316);
            class U {}
            class z extends U {
                constructor(e) {
                    super()
                }
            }
            let $ = q.FIVE_SECONDS,
                H = {
                    pulse: "heartbeat_pulse"
                };
            class F extends z {
                constructor(e) {
                    super(e), this.events = new n.EventEmitter, this.interval = $, this.interval = e ? .interval || $
                }
                static async init(e) {
                    let t = new F(e);
                    return await t.init(), t
                }
                async init() {
                    await this.initialize()
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async initialize() {
                    this.intervalRef = setInterval(() => this.pulse(), (0, q.toMiliseconds)(this.interval))
                }
                pulse() {
                    this.events.emit(H.pulse)
                }
            }
            var B = r(2412),
                K = r.n(B);
            let V = {
                    level: "info"
                },
                W = "custom_context";
            class G {
                constructor(e) {
                    this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null
                }
                get value() {
                    return this.nodeValue
                }
                get size() {
                    return this.sizeInBytes
                }
            }
            class Y {
                constructor(e) {
                    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0
                }
                append(e) {
                    let t = new G(e);
                    if (t.size > this.maxSizeInBytes) throw Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);
                    for (; this.size + t.size > this.maxSizeInBytes;) this.shift();
                    this.head ? this.tail && (this.tail.next = t) : this.head = t, this.tail = t, this.lengthInNodes++, this.sizeInBytes += t.size
                }
                shift() {
                    if (!this.head) return;
                    let e = this.head;
                    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size
                }
                toArray() {
                    let e = [],
                        t = this.head;
                    for (; null !== t;) e.push(t.value), t = t.next;
                    return e
                }
                get length() {
                    return this.lengthInNodes
                }
                get size() {
                    return this.sizeInBytes
                }
                toOrderedArray() {
                    return Array.from(this)
                }[Symbol.iterator]() {
                    let e = this.head;
                    return {
                        next: () => {
                            if (!e) return {
                                done: !0,
                                value: null
                            };
                            let t = e.value;
                            return e = e.next, {
                                done: !1,
                                value: t
                            }
                        }
                    }
                }
            }
            class J {
                constructor(e, t = 1024e3) {
                    this.level = e ? ? "error", this.levelValue = B.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new Y(this.MAX_LOG_SIZE_IN_BYTES)
                }
                forwardToConsole(e, t) {
                    t === B.levels.values.error ? console.error(e) : t === B.levels.values.warn ? console.warn(e) : t === B.levels.values.debug ? console.debug(e) : t === B.levels.values.trace ? console.trace(e) : console.log(e)
                }
                appendToLogs(e) {
                    this.logs.append(O({
                        timestamp: new Date().toISOString(),
                        log: e
                    }));
                    let t = "string" == typeof e ? JSON.parse(e).level : e.level;
                    t >= this.levelValue && this.forwardToConsole(e, t)
                }
                getLogs() {
                    return this.logs
                }
                clearLogs() {
                    this.logs = new Y(this.MAX_LOG_SIZE_IN_BYTES)
                }
                getLogArray() {
                    return Array.from(this.logs)
                }
                logsToBlob(e) {
                    let t = this.getLogArray();
                    return t.push(O({
                        extraMetadata: e
                    })), new Blob(t, {
                        type: "application/json"
                    })
                }
            }
            class Q {
                constructor(e, t = 1024e3) {
                    this.baseChunkLogger = new J(e, t)
                }
                write(e) {
                    this.baseChunkLogger.appendToLogs(e)
                }
                getLogs() {
                    return this.baseChunkLogger.getLogs()
                }
                clearLogs() {
                    this.baseChunkLogger.clearLogs()
                }
                getLogArray() {
                    return this.baseChunkLogger.getLogArray()
                }
                logsToBlob(e) {
                    return this.baseChunkLogger.logsToBlob(e)
                }
                downloadLogsBlobInBrowser(e) {
                    let t = URL.createObjectURL(this.logsToBlob(e)),
                        r = document.createElement("a");
                    r.href = t, r.download = `walletconnect-logs-${new Date().toISOString()}.txt`, document.body.appendChild(r), r.click(), document.body.removeChild(r), URL.revokeObjectURL(t)
                }
            }
            class X {
                constructor(e, t = 1024e3) {
                    this.baseChunkLogger = new J(e, t)
                }
                write(e) {
                    this.baseChunkLogger.appendToLogs(e)
                }
                getLogs() {
                    return this.baseChunkLogger.getLogs()
                }
                clearLogs() {
                    this.baseChunkLogger.clearLogs()
                }
                getLogArray() {
                    return this.baseChunkLogger.getLogArray()
                }
                logsToBlob(e) {
                    return this.baseChunkLogger.logsToBlob(e)
                }
            }
            var Z = Object.defineProperty,
                ee = Object.defineProperties,
                et = Object.getOwnPropertyDescriptors,
                er = Object.getOwnPropertySymbols,
                ei = Object.prototype.hasOwnProperty,
                en = Object.prototype.propertyIsEnumerable,
                es = (e, t, r) => t in e ? Z(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                eo = (e, t) => {
                    for (var r in t || (t = {})) ei.call(t, r) && es(e, r, t[r]);
                    if (er)
                        for (var r of er(t)) en.call(t, r) && es(e, r, t[r]);
                    return e
                },
                ea = (e, t) => ee(e, et(t));

            function ec(e) {
                return ea(eo({}, e), {
                    level: e ? .level || V.level
                })
            }

            function eh(e, t = W) {
                return typeof e.bindings > "u" ? function(e, t = W) {
                    return e[t] || ""
                }(e, t) : e.bindings().context || ""
            }

            function eu(e, t, r = W) {
                let i = function(e, t, r = W) {
                        let i = eh(e, r);
                        return i.trim() ? `${i}/${t}` : t
                    }(e, t, r),
                    n = e.child({
                        context: i
                    });
                return function(e, t, r = W) {
                    return e[r] = t, e
                }(n, i, r)
            }
            class el extends U {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class ep extends U {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class ef {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            }
            class ed extends U {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class eg extends U {
                constructor(e) {
                    super()
                }
            }
            class ey {
                constructor(e, t, r, i) {
                    this.core = e, this.logger = t, this.name = r
                }
            }
            class ev extends U {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class em extends U {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            class eb {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class ew {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class e_ {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class eE {
                constructor(e) {
                    this.client = e
                }
            }
            var eD = r(56867),
                eI = r(69790);
            let eS = "base64url",
                eC = "base58btc";
            var eP = r(36627),
                eO = r(37863),
                ex = r(60919);

            function eA(e) {
                return (0, eO.B)((0, ex.m)(O(e), "utf8"), eS)
            }

            function eR(e) {
                let t = (0, ex.m)("K36", eC),
                    r = "z" + (0, eO.B)((0, eP.z)([t, e]), eC);
                return ["did", "key", r].join(":")
            }

            function eT(e = (0, eI.randomBytes)(32)) {
                return eD._w(e)
            }
            async function eN(e, t, r, i, n = (0, q.fromMiliseconds)(Date.now())) {
                var s, o, a;
                let c = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    h = eR(i.publicKey),
                    u = {
                        iss: h,
                        sub: e,
                        aud: t,
                        iat: n,
                        exp: n + r
                    },
                    l = (s = {
                        header: c,
                        payload: u
                    }, (0, ex.m)([eA(s.header), eA(s.payload)].join("."), "utf8")),
                    p = eD.Xx(i.secretKey, l);
                return [eA((o = {
                    header: c,
                    payload: u,
                    signature: p
                }).header), eA(o.payload), (a = o.signature, (0, eO.B)(a, eS))].join(".")
            }
            r(97947);
            var ek = r(45294);
            let ej = "INTERNAL_ERROR",
                eL = "SERVER_ERROR",
                eM = [-32700, -32600, -32601, -32602, -32603],
                eq = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [ej]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [eL]: {
                        code: -32e3,
                        message: "Server error"
                    }
                };

            function eU(e) {
                return Object.keys(eq).includes(e) ? eq[e] : eq[eL]
            }

            function ez(e, t, r) {
                return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? Error(`Unavailable ${r} RPC url at ${t}`) : e
            }
            var e$ = r(30837);

            function eH(e = 3) {
                let t = Date.now() * Math.pow(10, e);
                return t + Math.floor(Math.random() * Math.pow(10, e))
            }

            function eF(e = 6) {
                return BigInt(eH(e))
            }

            function eB(e, t, r) {
                return {
                    id: r || eH(),
                    jsonrpc: "2.0",
                    method: e,
                    params: t
                }
            }

            function eK(e, t) {
                return {
                    id: e,
                    jsonrpc: "2.0",
                    result: t
                }
            }

            function eV(e, t, r) {
                var i, n;
                return {
                    id: e,
                    jsonrpc: "2.0",
                    error: void 0 === (i = t) ? eU(ej) : ("string" == typeof i && (i = Object.assign(Object.assign({}, eU(eL)), {
                        message: i
                    })), void 0 !== r && (i.data = r), n = i.code, eM.includes(n) && (i = function(e) {
                        let t = Object.values(eq).find(t => t.code === e);
                        return t || eq[eL]
                    }(i.code)), i)
                }
            }
            class eW {}
            class eG extends eW {
                constructor() {
                    super()
                }
            }
            class eY extends eG {
                constructor(e) {
                    super()
                }
            }

            function eJ(e, t) {
                let r = function(e) {
                    let t = e.match(RegExp(/^\w+:/, "gi"));
                    if (t && t.length) return t[0]
                }(e);
                return void 0 !== r && new RegExp(t).test(r)
            }

            function eQ(e) {
                return eJ(e, "^https?:")
            }

            function eX(e) {
                return eJ(e, "^wss?:")
            }

            function eZ(e) {
                return "object" == typeof e && "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc
            }

            function e0(e) {
                return eZ(e) && "method" in e
            }

            function e1(e) {
                return eZ(e) && (e5(e) || e3(e))
            }

            function e5(e) {
                return "result" in e
            }

            function e3(e) {
                return "error" in e
            }
            class e6 extends eY {
                constructor(e) {
                    super(e), this.events = new n.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
                }
                async connect(e = this.connection) {
                    await this.open(e)
                }
                async disconnect() {
                    await this.close()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async request(e, t) {
                    return this.requestStrict(eB(e.method, e.params || [], e.id || eF().toString()), t)
                }
                async requestStrict(e, t) {
                    return new Promise(async (r, i) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (e) {
                            i(e)
                        }
                        this.events.on(`${e.id}`, e => {
                            e3(e) ? i(e.error) : r(e.result)
                        });
                        try {
                            await this.connection.send(e, t)
                        } catch (e) {
                            i(e)
                        }
                    })
                }
                setConnection(e = this.connection) {
                    return e
                }
                onPayload(e) {
                    this.events.emit("payload", e), e1(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
                onClose(e) {
                    e && 3e3 === e.code && this.events.emit("error", Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open(e = this.connection) {
                    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof e && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", e => this.onPayload(e)), this.connection.on("close", e => this.onClose(e)), this.connection.on("error", e => this.events.emit("error", e)), this.connection.on("register_error", e => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
            let e2 = () => "u" > typeof WebSocket || "u" > typeof r.g && "u" > typeof r.g.WebSocket || "u" > typeof window && "u" > typeof window.WebSocket || "u" > typeof self && "u" > typeof self.WebSocket,
                e8 = e => e.split("?")[0],
                e4 = "u" > typeof WebSocket ? WebSocket : "u" > typeof r.g && "u" > typeof r.g.WebSocket ? r.g.WebSocket : "u" > typeof window && "u" > typeof window.WebSocket ? window.WebSocket : "u" > typeof self && "u" > typeof self.WebSocket ? self.WebSocket : r(89499);
            class e9 {
                constructor(e) {
                    if (this.url = e, this.events = new n.EventEmitter, this.registering = !1, !eX(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    this.url = e
                }
                get connected() {
                    return "u" > typeof this.socket
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    return new Promise((e, t) => {
                        if (typeof this.socket > "u") {
                            t(Error("Connection already closed"));
                            return
                        }
                        this.socket.onclose = t => {
                            this.onClose(t), e()
                        }, this.socket.close()
                    })
                }
                async send(e) {
                    typeof this.socket > "u" && (this.socket = await this.register());
                    try {
                        this.socket.send(O(e))
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                register(e = this.url) {
                    if (!eX(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), typeof this.socket > "u") return t(Error("WebSocket connection is missing or invalid"));
                                e(this.socket)
                            })
                        })
                    }
                    return this.url = e, this.registering = !0, new Promise((t, r) => {
                        let i = new URLSearchParams(e).get("origin"),
                            n = (0, e$.isReactNative)() ? {
                                headers: {
                                    origin: i
                                }
                            } : {
                                rejectUnauthorized: !RegExp("wss?://localhost(:d{2,5})?").test(e)
                            },
                            s = new e4(e, [], n);
                        e2() ? s.onerror = e => {
                            r(this.emitError(e.error))
                        } : s.on("error", e => {
                            r(this.emitError(e))
                        }), s.onopen = () => {
                            this.onOpen(s), t(s)
                        }
                    })
                }
                onOpen(e) {
                    e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
                }
                onClose(e) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                }
                onPayload(e) {
                    if (typeof e.data > "u") return;
                    let t = "string" == typeof e.data ? P(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        i = r.message || r.toString(),
                        n = eV(e, i);
                    this.events.emit("payload", n)
                }
                parseError(e, t = this.url) {
                    return ez(e, e8(t), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(e) {
                    let t = this.parseError(Error(e ? .message || `WebSocket connection failed for host: ${e8(this.url)}`));
                    return this.events.emit("register_error", t), t
                }
            }
            var e7 = r(36657),
                te = r.n(e7),
                tt = r(5854),
                tr = r.n(tt),
                ti = r(28070),
                tn = function(e, t) {
                    if (e.length >= 255) throw TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                    for (var n = 0; n < e.length; n++) {
                        var s = e.charAt(n),
                            o = s.charCodeAt(0);
                        if (255 !== r[o]) throw TypeError(s + " is ambiguous");
                        r[o] = n
                    }
                    var a = e.length,
                        c = e.charAt(0),
                        h = Math.log(a) / Math.log(256),
                        u = Math.log(256) / Math.log(a);

                    function l(e) {
                        if ("string" != typeof e) throw TypeError("Expected String");
                        if (0 === e.length) return new Uint8Array;
                        var t = 0;
                        if (" " !== e[0]) {
                            for (var i = 0, n = 0; e[t] === c;) i++, t++;
                            for (var s = (e.length - t) * h + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                                var u = r[e.charCodeAt(t)];
                                if (255 === u) return;
                                for (var l = 0, p = s - 1;
                                    (0 !== u || l < n) && -1 !== p; p--, l++) u += a * o[p] >>> 0, o[p] = u % 256 >>> 0, u = u / 256 >>> 0;
                                if (0 !== u) throw Error("Non-zero carry");
                                n = l, t++
                            }
                            if (" " !== e[t]) {
                                for (var f = s - n; f !== s && 0 === o[f];) f++;
                                for (var d = new Uint8Array(i + (s - f)), g = i; f !== s;) d[g++] = o[f++];
                                return d
                            }
                        }
                    }
                    return {
                        encode: function(t) {
                            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                            if (0 === t.length) return "";
                            for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n];) n++, r++;
                            for (var o = (s - n) * u + 1 >>> 0, h = new Uint8Array(o); n !== s;) {
                                for (var l = t[n], p = 0, f = o - 1;
                                    (0 !== l || p < i) && -1 !== f; f--, p++) l += 256 * h[f] >>> 0, h[f] = l % a >>> 0, l = l / a >>> 0;
                                if (0 !== l) throw Error("Non-zero carry");
                                i = p, n++
                            }
                            for (var d = o - i; d !== o && 0 === h[d];) d++;
                            for (var g = c.repeat(r); d < o; ++d) g += e.charAt(h[d]);
                            return g
                        },
                        decodeUnsafe: l,
                        decode: function(e) {
                            var r = l(e);
                            if (r) return r;
                            throw Error(`Non-${t} character`)
                        }
                    }
                };
            let ts = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                to = e => new TextEncoder().encode(e),
                ta = e => new TextDecoder().decode(e);
            class tc {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class th {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return tl(this, e)
                }
            }
            class tu {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return tl(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            let tl = (e, t) => new tu({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class tp {
                constructor(e, t, r, i) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new tc(e, t, r), this.decoder = new th(e, t, i)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            let tf = ({
                    name: e,
                    prefix: t,
                    encode: r,
                    decode: i
                }) => new tp(e, t, r, i),
                td = ({
                    prefix: e,
                    name: t,
                    alphabet: r
                }) => {
                    let {
                        encode: i,
                        decode: n
                    } = tn(r, t);
                    return tf({
                        prefix: e,
                        name: t,
                        encode: i,
                        decode: e => ts(n(e))
                    })
                },
                tg = (e, t, r, i) => {
                    let n = {};
                    for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                    let s = e.length;
                    for (;
                        "=" === e[s - 1];) --s;
                    let o = new Uint8Array(s * r / 8 | 0),
                        a = 0,
                        c = 0,
                        h = 0;
                    for (let t = 0; t < s; ++t) {
                        let s = n[e[t]];
                        if (void 0 === s) throw SyntaxError(`Non-${i} character`);
                        c = c << r | s, (a += r) >= 8 && (a -= 8, o[h++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                    return o
                },
                ty = (e, t, r) => {
                    let i = "=" === t[t.length - 1],
                        n = (1 << r) - 1,
                        s = "",
                        o = 0,
                        a = 0;
                    for (let i = 0; i < e.length; ++i)
                        for (a = a << 8 | e[i], o += 8; o > r;) o -= r, s += t[n & a >> o];
                    if (o && (s += t[n & a << r - o]), i)
                        for (; s.length * r & 7;) s += "=";
                    return s
                },
                tv = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: r,
                    alphabet: i
                }) => tf({
                    prefix: t,
                    name: e,
                    encode: e => ty(e, i, r),
                    decode: t => tg(t, i, r, e)
                }),
                tm = tf({
                    prefix: "\x00",
                    name: "identity",
                    encode: e => ta(e),
                    decode: e => to(e)
                });
            var tb = Object.freeze({
                __proto__: null,
                identity: tm
            });
            let tw = tv({
                prefix: "0",
                name: "base2",
                alphabet: "01",
                bitsPerChar: 1
            });
            var t_ = Object.freeze({
                __proto__: null,
                base2: tw
            });
            let tE = tv({
                prefix: "7",
                name: "base8",
                alphabet: "01234567",
                bitsPerChar: 3
            });
            var tD = Object.freeze({
                __proto__: null,
                base8: tE
            });
            let tI = td({
                prefix: "9",
                name: "base10",
                alphabet: "0123456789"
            });
            var tS = Object.freeze({
                __proto__: null,
                base10: tI
            });
            let tC = tv({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                tP = tv({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                });
            var tO = Object.freeze({
                __proto__: null,
                base16: tC,
                base16upper: tP
            });
            let tx = tv({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                tA = tv({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                tR = tv({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                tT = tv({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                tN = tv({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                tk = tv({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                tj = tv({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                tL = tv({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                tM = tv({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                });
            var tq = Object.freeze({
                __proto__: null,
                base32: tx,
                base32upper: tA,
                base32pad: tR,
                base32padupper: tT,
                base32hex: tN,
                base32hexupper: tk,
                base32hexpad: tj,
                base32hexpadupper: tL,
                base32z: tM
            });
            let tU = td({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                tz = td({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                });
            var t$ = Object.freeze({
                __proto__: null,
                base36: tU,
                base36upper: tz
            });
            let tH = td({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                tF = td({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                });
            var tB = Object.freeze({
                __proto__: null,
                base58btc: tH,
                base58flickr: tF
            });
            let tK = tv({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                tV = tv({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                tW = tv({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                tG = tv({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                });
            var tY = Object.freeze({
                __proto__: null,
                base64: tK,
                base64pad: tV,
                base64url: tW,
                base64urlpad: tG
            });
            let tJ = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                tQ = tJ.reduce((e, t, r) => (e[r] = t, e), []),
                tX = tJ.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []),
                tZ = tf({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(e) {
                        return e.reduce((e, t) => e += tQ[t], "")
                    },
                    decode: function(e) {
                        let t = [];
                        for (let r of e) {
                            let e = tX[r.codePointAt(0)];
                            if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                            t.push(e)
                        }
                        return new Uint8Array(t)
                    }
                });
            var t0 = Object.freeze({
                    __proto__: null,
                    base256emoji: tZ
                }),
                t1 = {
                    encode: function e(t, r, i) {
                        r = r || [], i = i || 0;
                        for (var n = i; t >= 2147483648;) r[i++] = 255 & t | 128, t /= 128;
                        for (; - 128 & t;) r[i++] = 255 & t | 128, t >>>= 7;
                        return r[i] = 0 | t, e.bytes = i - n + 1, r
                    },
                    decode: function e(t, r) {
                        var i, n = 0,
                            r = r || 0,
                            s = 0,
                            o = r,
                            a = t.length;
                        do {
                            if (o >= a) throw e.bytes = 0, RangeError("Could not decode varint");
                            i = t[o++], n += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s), s += 7
                        } while (i >= 128);
                        return e.bytes = o - r, n
                    },
                    encodingLength: function(e) {
                        return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
                    }
                };
            let t5 = (e, t, r = 0) => (t1.encode(e, t, r), t),
                t3 = e => t1.encodingLength(e),
                t6 = (e, t) => {
                    let r = t.byteLength,
                        i = t3(e),
                        n = i + t3(r),
                        s = new Uint8Array(n + r);
                    return t5(e, s, 0), t5(r, s, i), s.set(t, n), new t2(e, r, t, s)
                };
            class t2 {
                constructor(e, t, r, i) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = i
                }
            }
            let t8 = ({
                name: e,
                code: t,
                encode: r
            }) => new t4(e, t, r);
            class t4 {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? t6(this.code, t) : t.then(e => t6(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            let t9 = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                t7 = t8({
                    name: "sha2-256",
                    code: 18,
                    encode: t9("SHA-256")
                }),
                re = t8({
                    name: "sha2-512",
                    code: 19,
                    encode: t9("SHA-512")
                });
            var rt = Object.freeze({
                    __proto__: null,
                    sha256: t7,
                    sha512: re
                }),
                rr = Object.freeze({
                    __proto__: null,
                    identity: {
                        code: 0,
                        name: "identity",
                        encode: ts,
                        digest: e => t6(0, ts(e))
                    }
                });
            new TextEncoder, new TextDecoder;
            let ri = { ...tb,
                ...t_,
                ...tD,
                ...tS,
                ...tO,
                ...tq,
                ...t$,
                ...tB,
                ...tY,
                ...t0
            };

            function rn(e, t, r, i) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }({ ...rt,
                ...rr
            });
            let rs = rn("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
                ro = rn("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    e = e.substring(1);
                    let t = function(e = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? globalThis.Buffer.allocUnsafe(e) : new Uint8Array(e)
                    }(e.length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                }),
                ra = {
                    utf8: rs,
                    "utf-8": rs,
                    hex: ri.base16,
                    latin1: ro,
                    ascii: ro,
                    binary: ro,
                    ...ri
                },
                rc = "core",
                rh = `wc@2:${rc}:`,
                ru = {
                    logger: "error"
                },
                rl = {
                    database: ":memory:"
                },
                rp = "client_ed25519_seed",
                rf = q.ONE_DAY,
                rd = q.SIX_HOURS,
                rg = "wss://relay.walletconnect.com",
                ry = "wss://relay.walletconnect.org",
                rv = {
                    message: "relayer_message",
                    message_ack: "relayer_message_ack",
                    connect: "relayer_connect",
                    disconnect: "relayer_disconnect",
                    error: "relayer_error",
                    connection_stalled: "relayer_connection_stalled",
                    publish: "relayer_publish"
                },
                rm = {
                    payload: "payload",
                    connect: "connect",
                    disconnect: "disconnect",
                    error: "error"
                },
                rb = q.ONE_SECOND,
                rw = {
                    created: "subscription_created",
                    deleted: "subscription_deleted",
                    sync: "subscription_sync",
                    resubscribed: "subscription_resubscribed"
                },
                r_ = 1e3 * q.FIVE_SECONDS,
                rE = {
                    wc_pairingDelete: {
                        req: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: q.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: q.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                rD = {
                    create: "pairing_create",
                    expire: "pairing_expire",
                    delete: "pairing_delete",
                    ping: "pairing_ping"
                },
                rI = {
                    created: "history_created",
                    updated: "history_updated",
                    deleted: "history_deleted",
                    sync: "history_sync"
                },
                rS = {
                    created: "expirer_created",
                    deleted: "expirer_deleted",
                    expired: "expirer_expired",
                    sync: "expirer_sync"
                },
                rC = "verify-api",
                rP = "https://verify.walletconnect.com",
                rO = "https://verify.walletconnect.org",
                rx = [rP, rO];
            class rA {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = rh, this.init = async () => {
                        if (!this.initialized) {
                            let e = await this.getKeyChain();
                            "u" > typeof e && (this.keychain = e), this.initialized = !0
                        }
                    }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
                        this.isInitialized(), this.keychain.set(e, t), await this.persist()
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.keychain.get(e);
                        if (typeof t > "u") {
                            let {
                                message: t
                            } = (0, o.kCb)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                            throw Error(t)
                        }
                        return t
                    }, this.del = async e => {
                        this.isInitialized(), this.keychain.delete(e), await this.persist()
                    }, this.core = e, this.logger = eu(t, this.name)
                }
                get context() {
                    return eh(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setKeyChain(e) {
                    await this.core.storage.setItem(this.storageKey, (0, o.KCv)(e))
                }
                async getKeyChain() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? (0, o.IPd)(e) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rR {
                constructor(e, t, r) {
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => {
                        this.isInitialized();
                        let e = await this.getClientSeed(),
                            t = eT(e);
                        return eR(t.publicKey)
                    }, this.generateKeyPair = () => {
                        this.isInitialized();
                        let e = (0, o.Au2)();
                        return this.setPrivateKey(e.publicKey, e.privateKey)
                    }, this.signJWT = async e => {
                        this.isInitialized();
                        let t = await this.getClientSeed(),
                            r = eT(t),
                            i = (0, o.jdp)();
                        return await eN(i, e, rf, r)
                    }, this.generateSharedKey = (e, t, r) => {
                        this.isInitialized();
                        let i = this.getPrivateKey(e),
                            n = (0, o.m$A)(i, t);
                        return this.setSymKey(n, r)
                    }, this.setSymKey = async (e, t) => {
                        this.isInitialized();
                        let r = t || (0, o.YmJ)(e);
                        return await this.keychain.set(r, e), r
                    }, this.deleteKeyPair = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.deleteSymKey = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.encode = async (e, t, r) => {
                        this.isInitialized();
                        let i = (0, o.ENt)(r),
                            n = O(t);
                        if ((0, o.Q8x)(i)) {
                            let t = i.senderPublicKey,
                                r = i.receiverPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        let s = this.getSymKey(e),
                            {
                                type: a,
                                senderPublicKey: c
                            } = i;
                        return (0, o.HIp)({
                            type: a,
                            symKey: s,
                            message: n,
                            senderPublicKey: c
                        })
                    }, this.decode = async (e, t, r) => {
                        this.isInitialized();
                        let i = (0, o.Llj)(t, r);
                        if ((0, o.Q8x)(i)) {
                            let t = i.receiverPublicKey,
                                r = i.senderPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        try {
                            let r = this.getSymKey(e),
                                i = (0, o.peR)({
                                    symKey: r,
                                    encoded: t
                                });
                            return P(i)
                        } catch (t) {
                            this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`), this.logger.error(t)
                        }
                    }, this.getPayloadType = e => {
                        let t = (0, o.vBi)(e);
                        return (0, o.WGe)(t.type)
                    }, this.getPayloadSenderPublicKey = e => {
                        let t = (0, o.vBi)(e);
                        return t.senderPublicKey ? (0, ek.BB)(t.senderPublicKey, o.AWt) : void 0
                    }, this.core = e, this.logger = eu(t, this.name), this.keychain = r || new rA(this.core, this.logger)
                }
                get context() {
                    return eh(this.logger)
                }
                async setPrivateKey(e, t) {
                    return await this.keychain.set(e, t), e
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                async getClientSeed() {
                    let e = "";
                    try {
                        e = this.keychain.get(rp)
                    } catch {
                        e = (0, o.jdp)(), await this.keychain.set(rp, e)
                    }
                    return function(e, t = "utf8") {
                        let r = ra[t];
                        if (!r) throw Error(`Unsupported encoding "${t}"`);
                        return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e, "utf8") : r.decoder.decode(`${r.prefix}${e}`)
                    }(e, "base16")
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rT extends ef {
                constructor(e, t) {
                    super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = rh, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                let e = await this.getRelayerMessages();
                                "u" > typeof e && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (e) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (e, t) => {
                        this.isInitialized();
                        let r = (0, o.rjm)(t),
                            i = this.messages.get(e);
                        return typeof i > "u" && (i = {}), "u" > typeof i[r] || (i[r] = t, this.messages.set(e, i), await this.persist()), r
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.messages.get(e);
                        return typeof t > "u" && (t = {}), t
                    }, this.has = (e, t) => {
                        this.isInitialized();
                        let r = this.get(e),
                            i = (0, o.rjm)(t);
                        return "u" > typeof r[i]
                    }, this.del = async e => {
                        this.isInitialized(), this.messages.delete(e), await this.persist()
                    }, this.logger = eu(e, this.name), this.core = t
                }
                get context() {
                    return eh(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setRelayerMessages(e) {
                    await this.core.storage.setItem(this.storageKey, (0, o.KCv)(e))
                }
                async getRelayerMessages() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? (0, o.IPd)(e) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class rN extends ed {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.events = new n.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, q.toMiliseconds)(q.ONE_MINUTE), this.failedPublishTimeout = (0, q.toMiliseconds)(q.ONE_SECOND), this.needsTransportRestart = !1, this.publish = async (e, t, r) => {
                        var i;
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: r
                            }
                        });
                        let n = r ? .ttl || rd,
                            s = (0, o._HE)(r),
                            a = r ? .prompt || !1,
                            c = r ? .tag || 0,
                            h = r ? .id || eF().toString(),
                            u = {
                                topic: e,
                                message: t,
                                opts: {
                                    ttl: n,
                                    relay: s,
                                    prompt: a,
                                    tag: c,
                                    id: h
                                }
                            },
                            l = `Failed to publish payload, please try again. id:${h} tag:${c}`,
                            p = Date.now(),
                            f, d = 1;
                        try {
                            for (; void 0 === f;) {
                                if (Date.now() - p > this.publishTimeout) throw Error(l);
                                this.logger.trace({
                                    id: h,
                                    attempts: d
                                }, `publisher.publish - attempt ${d}`), f = await await (0, o.hFY)(this.rpcPublish(e, t, n, s, a, c, h).catch(e => this.logger.warn(e)), this.publishTimeout, l), d++, f || await new Promise(e => setTimeout(e, this.failedPublishTimeout))
                            }
                            this.relayer.events.emit(rv.publish, u), this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    id: h,
                                    topic: e,
                                    message: t,
                                    opts: r
                                }
                            })
                        } catch (e) {
                            if (this.logger.debug("Failed to Publish Payload"), this.logger.error(e), null != (i = r ? .internal) && i.throwOnFailedPublish) throw e;
                            this.queue.set(h, u)
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.relayer = e, this.logger = eu(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return eh(this.logger)
                }
                rpcPublish(e, t, r, i, n, s, a) {
                    var c, h, u, l;
                    let p = {
                        method: (0, o.cOS)(i.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: r,
                            prompt: n,
                            tag: s
                        },
                        id: a
                    };
                    return (0, o.o8e)(null == (c = p.params) ? void 0 : c.prompt) && (null == (h = p.params) || delete h.prompt), (0, o.o8e)(null == (u = p.params) ? void 0 : u.tag) && (null == (l = p.params) || delete l.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: p
                    }), this.relayer.request(p)
                }
                removeRequestFromQueue(e) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    this.queue.forEach(async e => {
                        let {
                            topic: t,
                            message: r,
                            opts: i
                        } = e;
                        await this.publish(t, r, i)
                    })
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(H.pulse, () => {
                        if (this.needsTransportRestart) {
                            this.needsTransportRestart = !1, this.relayer.events.emit(rv.connection_stalled);
                            return
                        }
                        this.checkQueue()
                    }), this.relayer.on(rv.message_ack, e => {
                        this.removeRequestFromQueue(e.id.toString())
                    })
                }
            }
            class rk {
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        let r = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...r, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") {
                            this.map.delete(e);
                            return
                        }
                        if (!this.map.has(e)) return;
                        let r = this.get(e);
                        if (!this.exists(e, t)) return;
                        let i = r.filter(e => e !== t);
                        if (!i.length) {
                            this.map.delete(e);
                            return
                        }
                        this.map.set(e, i)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var rj = Object.defineProperty,
                rL = Object.defineProperties,
                rM = Object.getOwnPropertyDescriptors,
                rq = Object.getOwnPropertySymbols,
                rU = Object.prototype.hasOwnProperty,
                rz = Object.prototype.propertyIsEnumerable,
                r$ = (e, t, r) => t in e ? rj(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rH = (e, t) => {
                    for (var r in t || (t = {})) rU.call(t, r) && r$(e, r, t[r]);
                    if (rq)
                        for (var r of rq(t)) rz.call(t, r) && r$(e, r, t[r]);
                    return e
                },
                rF = (e, t) => rL(e, rM(t));
            class rB extends ev {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new rk, this.events = new n.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = rh, this.subscribeTimeout = (0, q.toMiliseconds)(q.ONE_MINUTE), this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.pendingBatchMessages = [], this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        });
                        try {
                            let r = (0, o._HE)(t),
                                i = {
                                    topic: e,
                                    relay: r
                                };
                            this.pending.set(e, i);
                            let n = await this.rpcSubscribe(e, r);
                            return "string" == typeof n && (this.onSubscribe(n, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: e,
                                    opts: t
                                }
                            })), n
                        } catch (e) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(e), e
                        }
                    }, this.unsubscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), "u" > typeof t ? .id ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                    }, this.isSubscribed = async e => {
                        if (this.topics.includes(e)) return !0;
                        let t = `${this.pendingSubscriptionWatchLabel}_${e}`;
                        return await new Promise((r, i) => {
                            let n = new q.Watch;
                            n.start(t);
                            let s = setInterval(() => {
                                !this.pending.has(e) && this.topics.includes(e) && (clearInterval(s), n.stop(t), r(!0)), n.elapsed(t) >= r_ && (clearInterval(s), n.stop(t), i(Error("Subscription resolution timeout")))
                            }, this.pollingInterval)
                        }).catch(() => !1)
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.start = async () => {
                        await this.onConnect()
                    }, this.stop = async () => {
                        await this.onDisconnect()
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = e, this.logger = eu(t, this.name), this.clientId = ""
                }
                get context() {
                    return eh(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let r = !1;
                    try {
                        r = this.getSubscription(e).topic === t
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(e, t) {
                    let r = this.topicMap.get(e);
                    await Promise.all(r.map(async r => await this.unsubscribeById(e, r, t)))
                }
                async unsubscribeById(e, t, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: r
                        }
                    });
                    try {
                        let i = (0, o._HE)(r);
                        await this.rpcUnsubscribe(e, t, i);
                        let n = (0, o.D6H)("USER_DISCONNECTED", `${this.name}, ${e}`);
                        await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: r
                            }
                        })
                    } catch (e) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(e), e
                    }
                }
                async rpcSubscribe(e, t) {
                    let r = {
                        method: (0, o.cOS)(t.protocol).subscribe,
                        params: {
                            topic: e
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        return await await (0, o.hFY)(this.relayer.request(r).catch(e => this.logger.warn(e)), this.subscribeTimeout) ? (0, o.rjm)(e + this.clientId) : null
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(rv.connection_stalled)
                    }
                    return null
                }
                async rpcBatchSubscribe(e) {
                    if (!e.length) return;
                    let t = e[0].relay,
                        r = {
                            method: (0, o.cOS)(t.protocol).batchSubscribe,
                            params: {
                                topics: e.map(e => e.topic)
                            }
                        };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        return await await (0, o.hFY)(this.relayer.request(r).catch(e => this.logger.warn(e)), this.subscribeTimeout)
                    } catch {
                        this.relayer.events.emit(rv.connection_stalled)
                    }
                }
                async rpcBatchFetchMessages(e) {
                    let t;
                    if (!e.length) return;
                    let r = e[0].relay,
                        i = {
                            method: (0, o.cOS)(r.protocol).batchFetchMessages,
                            params: {
                                topics: e.map(e => e.topic)
                            }
                        };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: i
                    });
                    try {
                        t = await await (0, o.hFY)(this.relayer.request(i).catch(e => this.logger.warn(e)), this.subscribeTimeout)
                    } catch {
                        this.relayer.events.emit(rv.connection_stalled)
                    }
                    return t
                }
                rpcUnsubscribe(e, t, r) {
                    let i = {
                        method: (0, o.cOS)(r.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: i
                    }), this.relayer.request(i)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, rF(rH({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach(e => {
                        this.setSubscription(e.id, rH({}, e)), this.pending.delete(e.topic)
                    })
                }
                async onUnsubscribe(e, t, r) {
                    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e)
                }
                async setRelayerSubscriptions(e) {
                    await this.relayer.core.storage.setItem(this.storageKey, e)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(e, t) {
                    this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t)
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, rH({}, t)), this.topicMap.set(t.topic, e), this.events.emit(rw.created, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    let t = this.subscriptions.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    let r = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(rw.deleted, rF(rH({}, r), {
                        reason: t
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(rw.sync)
                }
                async reset() {
                    if (this.cached.length) {
                        let e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let t = 0; t < e; t++) {
                            let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchFetchMessages(e), await this.batchSubscribe(e)
                        }
                    }
                    this.events.emit(rw.resubscribed)
                }
                async restore() {
                    try {
                        let e = await this.getRelayerSubscriptions();
                        if (typeof e > "u" || !e.length) return;
                        if (this.subscriptions.size) {
                            let {
                                message: e
                            } = (0, o.kCb)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
                    }
                }
                async batchSubscribe(e) {
                    if (!e.length) return;
                    let t = await this.rpcBatchSubscribe(e);
                    (0, o.qt8)(t) && this.onBatchSubscribe(t.map((t, r) => rF(rH({}, e[r]), {
                        id: t
                    })))
                }
                async batchFetchMessages(e) {
                    if (!e.length) return;
                    this.logger.trace(`Fetching batch messages for ${e.length} subscriptions`);
                    let t = await this.rpcBatchFetchMessages(e);
                    t && t.messages && (this.pendingBatchMessages = this.pendingBatchMessages.concat(t.messages))
                }
                async onConnect() {
                    await this.restart(), this.onEnable()
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (!this.initialized || !this.relayer.connected) return;
                    let e = [];
                    this.pending.forEach(t => {
                        e.push(t)
                    }), await this.batchSubscribe(e), this.pendingBatchMessages.length && (await this.relayer.handleBatchMessageEvents(this.pendingBatchMessages), this.pendingBatchMessages = [])
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(H.pulse, async () => {
                        await this.checkPending()
                    }), this.events.on(rw.created, async e => {
                        let t = rw.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    }), this.events.on(rw.deleted, async e => {
                        let t = rw.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise(e => {
                        let t = setInterval(() => {
                            this.restartInProgress || (clearInterval(t), e())
                        }, this.pollingInterval)
                    })
                }
            }
            var rK = Object.defineProperty,
                rV = Object.getOwnPropertySymbols,
                rW = Object.prototype.hasOwnProperty,
                rG = Object.prototype.propertyIsEnumerable,
                rY = (e, t, r) => t in e ? rK(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                rJ = (e, t) => {
                    for (var r in t || (t = {})) rW.call(t, r) && rY(e, r, t[r]);
                    if (rV)
                        for (var r of rV(t)) rG.call(t, r) && rY(e, r, t[r]);
                    return e
                };
            class rQ extends eg {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.events = new n.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "stalled", "interrupted"], this.hasExperiencedNetworkDisruption = !1, this.requestsInFlight = new Map, this.heartBeatTimeout = (0, q.toMiliseconds)(q.THIRTY_SECONDS + q.ONE_SECOND), this.request = async e => {
                        var t, r;
                        this.logger.debug("Publishing Request Payload");
                        let i = e.id || eF().toString();
                        await this.toEstablishConnection();
                        try {
                            let n = this.provider.request(e);
                            this.requestsInFlight.set(i, {
                                promise: n,
                                request: e
                            }), this.logger.trace({
                                id: i,
                                method: e.method,
                                topic: null == (t = e.params) ? void 0 : t.topic
                            }, "relayer.request - attempt to publish...");
                            let s = await new Promise(async (e, t) => {
                                let r = () => {
                                    t(Error(`relayer.request - publish interrupted, id: ${i}`))
                                };
                                this.provider.on(rm.disconnect, r);
                                let s = await n;
                                this.provider.off(rm.disconnect, r), e(s)
                            });
                            return this.logger.trace({
                                id: i,
                                method: e.method,
                                topic: null == (r = e.params) ? void 0 : r.topic
                            }, "relayer.request - published"), s
                        } catch (e) {
                            throw this.logger.debug(`Failed to Publish Request: ${i}`), e
                        } finally {
                            this.requestsInFlight.delete(i)
                        }
                    }, this.resetPingTimeout = () => {
                        if ((0, o.UGU)()) try {
                            clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
                                var e, t, r;
                                null == (r = null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket) || r.terminate()
                            }, this.heartBeatTimeout)
                        } catch (e) {
                            this.logger.warn(e)
                        }
                    }, this.onPayloadHandler = e => {
                        this.onProviderPayload(e), this.resetPingTimeout()
                    }, this.onConnectHandler = () => {
                        this.startPingTimeout(), this.events.emit(rv.connect)
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = e => {
                        this.logger.error(e), this.events.emit(rv.error, e), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on(rm.payload, this.onPayloadHandler), this.provider.on(rm.connect, this.onConnectHandler), this.provider.on(rm.disconnect, this.onDisconnectHandler), this.provider.on(rm.error, this.onProviderErrorHandler)
                    }, this.core = e.core, this.logger = "u" > typeof e.logger && "string" != typeof e.logger ? eu(e.logger, this.name) : K()(ec({
                        level: e.logger || "error"
                    })), this.messages = new rT(this.logger, e.core), this.subscriber = new rB(this, this.logger), this.publisher = new rN(this, this.logger), this.relayUrl = e ? .relayUrl || rg, this.projectId = e.projectId, this.bundleId = (0, o.X_B)(), this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${ry}...`), await this.restartTransport(ry)
                    }
                    this.initialized = !0, setTimeout(async () => {
                        0 === this.subscriber.topics.length && 0 === this.subscriber.pending.size && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }, 1e4)
                }
                get context() {
                    return eh(this.logger)
                }
                get connected() {
                    var e, t, r;
                    return (null == (r = null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket) ? void 0 : r.readyState) === 1
                }
                get connecting() {
                    var e, t, r;
                    return (null == (r = null == (t = null == (e = this.provider) ? void 0 : e.connection) ? void 0 : t.socket) ? void 0 : r.readyState) === 0
                }
                async publish(e, t, r) {
                    this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
                        topic: e,
                        message: t,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(e, t) {
                    var r;
                    this.isInitialized();
                    let i = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || "",
                        n, s = t => {
                            t.topic === e && (this.subscriber.off(rw.created, s), n())
                        };
                    return await Promise.all([new Promise(e => {
                        n = e, this.subscriber.on(rw.created, s)
                    }), new Promise(async r => {
                        i = await this.subscriber.subscribe(e, t) || i, r()
                    })]), i
                }
                async unsubscribe(e, t) {
                    this.isInitialized(), await this.subscriber.unsubscribe(e, t)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async transportDisconnect() {
                    if (!this.hasExperiencedNetworkDisruption && this.connected && this.requestsInFlight.size > 0) try {
                        await Promise.all(Array.from(this.requestsInFlight.values()).map(e => e.promise))
                    } catch (e) {
                        this.logger.warn(e)
                    }
                    this.hasExperiencedNetworkDisruption || this.connected ? await (0, o.hFY)(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect()
                }
                async transportClose() {
                    this.transportExplicitlyClosed = !0, await this.transportDisconnect()
                }
                async transportOpen(e) {
                    await this.confirmOnlineStateOrThrow(), e && e !== this.relayUrl && (this.relayUrl = e, await this.transportDisconnect()), await this.createProvider(), this.connectionAttemptInProgress = !0, this.transportExplicitlyClosed = !1;
                    try {
                        await new Promise(async (e, t) => {
                            let r = () => {
                                this.provider.off(rm.disconnect, r), t(Error("Connection interrupted while trying to subscribe"))
                            };
                            this.provider.on(rm.disconnect, r), await (0, o.hFY)(this.provider.connect(), (0, q.toMiliseconds)(q.ONE_MINUTE), `Socket stalled when trying to connect to ${this.relayUrl}`).catch(e => {
                                t(e)
                            }), await this.subscriber.start(), this.hasExperiencedNetworkDisruption = !1, e()
                        })
                    } catch (e) {
                        if (this.logger.error(e), this.hasExperiencedNetworkDisruption = !0, !this.isConnectionStalled(e.message)) throw e
                    } finally {
                        this.connectionAttemptInProgress = !1
                    }
                }
                async restartTransport(e) {
                    this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen())
                }
                async confirmOnlineStateOrThrow() {
                    if (!await (0, o.Ggh)()) throw Error("No internet connection detected. Please restart your network and try again.")
                }
                async handleBatchMessageEvents(e) {
                    if (e ? .length === 0) {
                        this.logger.trace("Batch message events is empty. Ignoring...");
                        return
                    }
                    let t = e.sort((e, t) => e.publishedAt - t.publishedAt);
                    for (let e of (this.logger.trace(`Batch of ${t.length} message events sorted`), t)) try {
                        await this.onMessageEvent(e)
                    } catch (e) {
                        this.logger.warn(e)
                    }
                    this.logger.trace(`Batch of ${t.length} message events processed`)
                }
                startPingTimeout() {
                    var e, t, r, i, n;
                    if ((0, o.UGU)()) try {
                        null != (t = null == (e = this.provider) ? void 0 : e.connection) && t.socket && (null == (n = null == (i = null == (r = this.provider) ? void 0 : r.connection) ? void 0 : i.socket) || n.once("ping", () => {
                            this.resetPingTimeout()
                        })), this.resetPingTimeout()
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isConnectionStalled(e) {
                    return this.staleConnectionErrors.some(t => e.includes(t))
                }
                async createProvider() {
                    this.provider.connection && this.unregisterProviderListeners();
                    let e = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new e6(new e9((0, o.$0m)({
                        sdkVersion: "2.13.0",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: e,
                        useOnCloseEvent: !0,
                        bundleId: this.bundleId
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    await this.messages.set(t, r)
                }
                async shouldIgnoreMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
                    if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
                    let i = this.messages.has(t, r);
                    return i && this.logger.debug(`Ignoring duplicate message: ${r}`), i
                }
                async onProviderPayload(e) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: e
                        }), e0(e)) {
                        if (!e.method.endsWith("_subscription")) return;
                        let t = e.params,
                            {
                                topic: r,
                                message: i,
                                publishedAt: n
                            } = t.data,
                            s = {
                                topic: r,
                                message: i,
                                publishedAt: n
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(rJ({
                            type: "event",
                            event: t.id
                        }, s)), this.events.emit(t.id, s), await this.acknowledgePayload(e), await this.onMessageEvent(s)
                    } else e1(e) && this.events.emit(rv.message_ack, e)
                }
                async onMessageEvent(e) {
                    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(rv.message, e), await this.recordMessageEvent(e))
                }
                async acknowledgePayload(e) {
                    let t = eK(e.id, !0);
                    await this.provider.connection.send(t)
                }
                unregisterProviderListeners() {
                    this.provider.off(rm.payload, this.onPayloadHandler), this.provider.off(rm.connect, this.onConnectHandler), this.provider.off(rm.disconnect, this.onDisconnectHandler), this.provider.off(rm.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout)
                }
                async registerEventListeners() {
                    let e = await (0, o.Ggh)();
                    (0, o.uwg)(async t => {
                        e !== t && (e = t, t ? await this.restartTransport().catch(e => this.logger.error(e)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportDisconnect(), this.transportExplicitlyClosed = !1))
                    })
                }
                async onProviderDisconnect() {
                    await this.subscriber.stop(), this.requestsInFlight.clear(), clearTimeout(this.pingTimeout), this.events.emit(rv.disconnect), this.connectionAttemptInProgress = !1, this.transportExplicitlyClosed || setTimeout(async () => {
                        await this.transportOpen().catch(e => this.logger.error(e))
                    }, (0, q.toMiliseconds)(rb))
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async toEstablishConnection() {
                    await this.confirmOnlineStateOrThrow(), this.connected || (this.connectionAttemptInProgress && await new Promise(e => {
                        let t = setInterval(() => {
                            this.connected && (clearInterval(t), e())
                        }, this.connectionStatusPollingInterval)
                    }), await this.transportOpen())
                }
            }
            var rX = Object.defineProperty,
                rZ = Object.getOwnPropertySymbols,
                r0 = Object.prototype.hasOwnProperty,
                r1 = Object.prototype.propertyIsEnumerable,
                r5 = (e, t, r) => t in e ? rX(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                r3 = (e, t) => {
                    for (var r in t || (t = {})) r0.call(t, r) && r5(e, r, t[r]);
                    if (rZ)
                        for (var r of rZ(t)) r1.call(t, r) && r5(e, r, t[r]);
                    return e
                };
            class r6 extends ey {
                constructor(e, t, r, i = rh, n) {
                    super(e, t, r, i), this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = rh, this.recentlyDeleted = [], this.recentlyDeletedLimit = 200, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => {
                            this.getKey && null !== e && !(0, o.o8e)(e) ? this.map.set(this.getKey(e), e) : (0, o.xWS)(e) ? this.map.set(e.id, e) : (0, o.h1R)(e) && this.map.set(e.topic, e)
                        }), this.cached = [], this.initialized = !0)
                    }, this.set = async (e, t) => {
                        this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: e,
                            value: t
                        }), this.map.set(e, t), await this.persist())
                    }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: e
                    }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter(t => Object.keys(e).every(r => te()(t[r], e[r]))) : this.values), this.update = async (e, t) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: e,
                            update: t
                        });
                        let r = r3(r3({}, this.getData(e)), t);
                        this.map.set(e, r), await this.persist()
                    }, this.delete = async (e, t) => {
                        this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: e,
                            reason: t
                        }), this.map.delete(e), this.addToRecentlyDeleted(e), await this.persist())
                    }, this.logger = eu(t, this.name), this.storagePrefix = i, this.getKey = n
                }
                get context() {
                    return eh(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                addToRecentlyDeleted(e) {
                    this.recentlyDeleted.push(e), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2)
                }
                async setDataStore(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(e) {
                    let t = this.map.get(e);
                    if (!t) {
                        if (this.recentlyDeleted.includes(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e}`);
                            throw this.logger.error(t), Error(t)
                        }
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        let e = await this.getDataStore();
                        if (typeof e > "u" || !e.length) return;
                        if (this.map.size) {
                            let {
                                message: e
                            } = (0, o.kCb)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class r2 {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(s()), this.initialized = !1, this.storagePrefix = rh, this.ignoredPayloadTypes = [o.rVF], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = ({
                        methods: e
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
                    }, this.create = async e => {
                        this.isInitialized();
                        let t = (0, o.jdp)(),
                            r = await this.core.crypto.setSymKey(t),
                            i = (0, o.gn4)(q.FIVE_MINUTES),
                            n = {
                                protocol: "irn"
                            },
                            s = (0, o.Bvr)({
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: r,
                                symKey: t,
                                relay: n,
                                expiryTimestamp: i,
                                methods: e ? .methods
                            });
                        return this.core.expirer.set(r, i), await this.pairings.set(r, {
                            topic: r,
                            expiry: i,
                            relay: n,
                            active: !1
                        }), await this.core.relayer.subscribe(r), {
                            topic: r,
                            uri: s
                        }
                    }, this.pair = async e => {
                        this.isInitialized(), this.isValidPair(e);
                        let {
                            topic: t,
                            symKey: r,
                            relay: i,
                            expiryTimestamp: n,
                            methods: s
                        } = (0, o.heJ)(e.uri);
                        if (this.pairings.keys.includes(t) && this.pairings.get(t).active) throw Error(`Pairing already exists: ${t}. Please try again with a new connection URI.`);
                        let a = n || (0, o.gn4)(q.FIVE_MINUTES),
                            c = {
                                topic: t,
                                relay: i,
                                expiry: a,
                                active: !1,
                                methods: s
                            };
                        return this.core.expirer.set(t, a), await this.pairings.set(t, c), e.activatePairing && await this.activate({
                            topic: t
                        }), this.events.emit(rD.create, c), this.core.crypto.keychain.has(t) || await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, {
                            relay: i
                        }), c
                    }, this.activate = async ({
                        topic: e
                    }) => {
                        this.isInitialized();
                        let t = (0, o.gn4)(q.THIRTY_DAYS);
                        this.core.expirer.set(e, t), await this.pairings.update(e, {
                            active: !0,
                            expiry: t
                        })
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.pairings.keys.includes(t)) {
                            let e = await this.sendRequest(t, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = (0, o.H1S)();
                            this.events.once((0, o.E0T)("pairing_ping", e), ({
                                error: e
                            }) => {
                                e ? n(e) : i()
                            }), await r()
                        }
                    }, this.updateExpiry = async ({
                        topic: e,
                        expiry: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            expiry: t
                        })
                    }, this.updateMetadata = async ({
                        topic: e,
                        metadata: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            peerMetadata: t
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", (0, o.D6H)("USER_DISCONNECTED")), await this.deletePairing(t))
                    }, this.sendRequest = async (e, t, r) => {
                        let i = eB(t, r),
                            n = await this.core.crypto.encode(e, i),
                            s = rE[t].req;
                        return this.core.history.set(e, i), this.core.relayer.publish(e, n, s), i.id
                    }, this.sendResult = async (e, t, r) => {
                        let i = eK(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = await this.core.history.get(t, e),
                            o = rE[s.request.method].res;
                        await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i)
                    }, this.sendError = async (e, t, r) => {
                        let i = eV(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = await this.core.history.get(t, e),
                            o = rE[s.request.method] ? rE[s.request.method].res : rE.unregistered_method.res;
                        await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i)
                    }, this.deletePairing = async (e, t) => {
                        await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, (0, o.D6H)("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                    }, this.cleanup = async () => {
                        let e = this.pairings.getAll().filter(e => (0, o.BwD)(e.expiry));
                        await Promise.all(e.map(e => this.deletePairing(e.topic)))
                    }, this.onRelayEventRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e;
                        switch (r.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(t, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(t, r);
                            default:
                                return this.onUnknownRpcMethodRequest(t, r)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.core.history.get(t, r.id)).request.method;
                        return "wc_pairingPing" === i ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(i)
                    }, this.onPairingPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(r, e, !0), this.events.emit(rD.ping, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onPairingPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            e5(t) ? this.events.emit((0, o.E0T)("pairing_ping", r), {}) : e3(t) && this.events.emit((0, o.E0T)("pairing_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e
                            }), await this.deletePairing(e), this.events.emit(rD.delete, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodRequest = async (e, t) => {
                        let {
                            id: r,
                            method: i
                        } = t;
                        try {
                            if (this.registeredMethods.includes(i)) return;
                            let t = (0, o.D6H)("WC_METHOD_UNSUPPORTED", i);
                            await this.sendError(r, e, t), this.logger.error(t)
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodResponse = e => {
                        this.registeredMethods.includes(e) || this.logger.error((0, o.D6H)("WC_METHOD_UNSUPPORTED", e))
                    }, this.isValidPair = e => {
                        var t;
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `pair() params: ${e}`);
                            throw Error(t)
                        }
                        if (!(0, o.jvJ)(e.uri)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                            throw Error(t)
                        }
                        let r = (0, o.heJ)(e.uri);
                        if (!(null != (t = r ? .relay) && t.protocol)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                            throw Error(e)
                        }
                        if (!(null != r && r.symKey)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", "pair() uri#symKey");
                            throw Error(e)
                        }
                        if (null != r && r.expiryTimestamp && (0, q.toMiliseconds)(r ? .expiryTimestamp) < Date.now()) {
                            let {
                                message: e
                            } = (0, o.kCb)("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidDisconnect = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidPairingTopic = async e => {
                        if (!(0, o.M_r)(e, !1)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                            throw Error(t)
                        }
                        if (!this.pairings.keys.includes(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                            throw Error(t)
                        }
                        if ((0, o.BwD)(this.pairings.get(e).expiry)) {
                            await this.deletePairing(e);
                            let {
                                message: t
                            } = (0, o.kCb)("EXPIRED", `pairing topic: ${e}`);
                            throw Error(t)
                        }
                    }, this.core = e, this.logger = eu(t, this.name), this.pairings = new r6(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return eh(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(rv.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        let i = await this.core.crypto.decode(t, r);
                        try {
                            e0(i) ? (this.core.history.set(t, i), this.onRelayEventRequest({
                                topic: t,
                                payload: i
                            })) : e1(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: t,
                                payload: i
                            }), this.core.history.delete(t, i.id))
                        } catch (e) {
                            this.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.core.expirer.on(rS.expired, async e => {
                        let {
                            topic: t
                        } = (0, o.iPz)(e.target);
                        t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(rD.expire, {
                            topic: t
                        }))
                    })
                }
            }
            class r8 extends ep {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new n.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = rh, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.records.set(e.id, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (e, t, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: e,
                                request: t,
                                chainId: r
                            }), this.records.has(t.id)) return;
                        let i = {
                            id: t.id,
                            topic: e,
                            request: {
                                method: t.method,
                                params: t.params || null
                            },
                            chainId: r,
                            expiry: (0, o.gn4)(q.THIRTY_DAYS)
                        };
                        this.records.set(i.id, i), this.persist(), this.events.emit(rI.created, i)
                    }, this.resolve = async e => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: e
                            }), !this.records.has(e.id)) return;
                        let t = await this.getRecord(e.id);
                        typeof t.response > "u" && (t.response = e3(e) ? {
                            error: e.error
                        } : {
                            result: e.result
                        }, this.records.set(t.id, t), this.persist(), this.events.emit(rI.updated, t))
                    }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: e,
                        id: t
                    }), await this.getRecord(t)), this.delete = (e, t) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: t
                        }), this.values.forEach(r => {
                            r.topic !== e || "u" > typeof t && r.id !== t || (this.records.delete(r.id), this.events.emit(rI.deleted, r))
                        }), this.persist()
                    }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = eu(t, this.name)
                }
                get context() {
                    return eh(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    let e = [];
                    return this.values.forEach(t => {
                        if ("u" > typeof t.response) return;
                        let r = {
                            topic: t.topic,
                            request: eB(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(r)
                    }), e
                }
                async setJsonRpcRecords(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(e) {
                    this.isInitialized();
                    let t = this.records.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(rI.sync)
                }
                async restore() {
                    try {
                        let e = await this.getJsonRpcRecords();
                        if (typeof e > "u" || !e.length) return;
                        if (this.records.size) {
                            let {
                                message: e
                            } = (0, o.kCb)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                    }
                }
                registerEventListeners() {
                    this.events.on(rI.created, e => {
                        let t = rI.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        })
                    }), this.events.on(rI.updated, e => {
                        let t = rI.updated;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        })
                    }), this.events.on(rI.deleted, e => {
                        let t = rI.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        })
                    }), this.core.heartbeat.on(H.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.isInitialized();
                        let e = !1;
                        this.records.forEach(t => {
                            (0, q.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(rI.deleted, t, !1), e = !0)
                        }), e && this.persist()
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class r4 extends em {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new n.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = rh, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.expirations.set(e.target, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = e => {
                        try {
                            let t = this.formatTarget(e);
                            return "u" > typeof this.getExpiration(t)
                        } catch {
                            return !1
                        }
                    }, this.set = (e, t) => {
                        this.isInitialized();
                        let r = this.formatTarget(e),
                            i = {
                                target: r,
                                expiry: t
                            };
                        this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(rS.created, {
                            target: r,
                            expiration: i
                        })
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.formatTarget(e);
                        return this.getExpiration(t)
                    }, this.del = e => {
                        if (this.isInitialized(), this.has(e)) {
                            let t = this.formatTarget(e),
                                r = this.getExpiration(t);
                            this.expirations.delete(t), this.events.emit(rS.deleted, {
                                target: t,
                                expiration: r
                            })
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = eu(t, this.name)
                }
                get context() {
                    return eh(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return (0, o.Z42)(e);
                    if ("number" == typeof e) return (0, o.GqV)(e);
                    let {
                        message: t
                    } = (0, o.kCb)("UNKNOWN_TYPE", `Target type: ${typeof e}`);
                    throw Error(t)
                }
                async setExpirations(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(rS.sync)
                }
                async restore() {
                    try {
                        let e = await this.getExpirations();
                        if (typeof e > "u" || !e.length) return;
                        if (this.expirations.size) {
                            let {
                                message: e
                            } = (0, o.kCb)("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
                    }
                }
                getExpiration(e) {
                    let t = this.expirations.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.warn(t), Error(t)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    let {
                        expiry: r
                    } = t;
                    (0, q.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(rS.expired, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(H.pulse, () => this.checkExpirations()), this.events.on(rS.created, e => {
                        let t = rS.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(rS.expired, e => {
                        let t = rS.expired;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(rS.deleted, e => {
                        let t = rS.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class r9 extends eb {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.name = rC, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async e => {
                        if (this.verifyDisabled || (0, o.b$m)() || !(0, o.jUY)()) return;
                        let t = this.getVerifyUrl(e ? .verifyUrl);
                        this.verifyUrl !== t && this.removeIframe(), this.verifyUrl = t;
                        try {
                            await this.createIframe()
                        } catch (e) {
                            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e)
                        }
                        if (!this.initialized) {
                            this.removeIframe(), this.verifyUrl = rO;
                            try {
                                await this.createIframe()
                            } catch (e) {
                                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e), this.verifyDisabled = !0
                            }
                        }
                    }, this.register = async e => {
                        this.initialized ? this.sendPost(e.attestationId) : (this.addToQueue(e.attestationId), await this.init())
                    }, this.resolve = async e => {
                        let t;
                        if (this.isDevEnv) return "";
                        let r = this.getVerifyUrl(e ? .verifyUrl);
                        try {
                            t = await this.fetchAttestation(e.attestationId, r)
                        } catch (i) {
                            this.logger.info(`failed to resolve attestation: ${e.attestationId} from url: ${r}`), this.logger.info(i), t = await this.fetchAttestation(e.attestationId, rO)
                        }
                        return t
                    }, this.fetchAttestation = async (e, t) => {
                        this.logger.info(`resolving attestation: ${e} from url: ${t}`);
                        let r = this.startAbortTimer(2 * q.ONE_SECOND),
                            i = await fetch(`${t}/attestation/${e}`, {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === i.status ? await i.json() : void 0
                    }, this.addToQueue = e => {
                        this.queue.push(e)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach(e => this.sendPost(e)), this.queue = [])
                    }, this.sendPost = e => {
                        var t;
                        try {
                            if (!this.iframe) return;
                            null == (t = this.iframe.contentWindow) || t.postMessage(e, "*"), this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = async () => {
                        let e;
                        let t = r => {
                            "verify_ready" === r.data && (this.onInit(), window.removeEventListener("message", t), e())
                        };
                        await Promise.race([new Promise(r => {
                            let i = document.getElementById(rC);
                            if (i) return this.iframe = i, this.onInit(), r();
                            window.addEventListener("message", t);
                            let n = document.createElement("iframe");
                            n.id = rC, n.src = `${this.verifyUrl}/${this.projectId}`, n.style.display = "none", document.body.append(n), this.iframe = n, e = r
                        }), new Promise((e, r) => setTimeout(() => {
                            window.removeEventListener("message", t), r("verify iframe load timeout")
                        }, (0, q.toMiliseconds)(q.FIVE_SECONDS)))])
                    }, this.onInit = () => {
                        this.initialized = !0, this.processQueue()
                    }, this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.getVerifyUrl = e => {
                        let t = e || rP;
                        return rx.includes(t) || (this.logger.info(`verify url: ${t}, not included in trusted list, assigning default: ${rP}`), t = rP), t
                    }, this.logger = eu(t, this.name), this.verifyUrl = rP, this.abortController = new AbortController, this.isDevEnv = (0, o.UGU)() && ti.env.IS_VITEST
                }
                get context() {
                    return eh(this.logger)
                }
                startAbortTimer(e) {
                    return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, q.toMiliseconds)(e))
                }
            }
            class r7 extends ew {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.context = "echo", this.registerDeviceToken = async e => {
                        let {
                            clientId: t,
                            token: r,
                            notificationType: i,
                            enableEncrypted: n = !1
                        } = e, s = `https://echo.walletconnect.com/${this.projectId}/clients`;
                        await tr()(s, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                client_id: t,
                                type: i,
                                token: r,
                                always_raw: n
                            })
                        })
                    }, this.logger = eu(t, this.context)
                }
            }
            var ie = Object.defineProperty,
                it = Object.getOwnPropertySymbols,
                ir = Object.prototype.hasOwnProperty,
                ii = Object.prototype.propertyIsEnumerable,
                is = (e, t, r) => t in e ? ie(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                io = (e, t) => {
                    for (var r in t || (t = {})) ir.call(t, r) && is(e, r, t[r]);
                    if (it)
                        for (var r of it(t)) ii.call(t, r) && is(e, r, t[r]);
                    return e
                };
            class ia extends el {
                constructor(e) {
                    var t, r;
                    super(e), this.protocol = "wc", this.version = 2, this.name = rc, this.events = new n.EventEmitter, this.initialized = !1, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = e ? .projectId, this.relayUrl = e ? .relayUrl || rg, this.customStoragePrefix = null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
                    let i = ec({
                            level: "string" == typeof e ? .logger && e.logger ? e.logger : ru.logger
                        }),
                        {
                            logger: s,
                            chunkLoggerController: o
                        } = "u" > typeof(r = {
                            opts: i,
                            maxSizeInBytes: e ? .maxLogBlobSizeInBytes,
                            loggerOverride: e ? .logger
                        }).loggerOverride && "string" != typeof r.loggerOverride ? {
                            logger: r.loggerOverride,
                            chunkLoggerController: null
                        } : "u" > typeof window ? function(e) {
                            var t, r;
                            let i = new Q(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes);
                            return {
                                logger: K()(ea(eo({}, e.opts), {
                                    level: "trace",
                                    browser: ea(eo({}, null == (r = e.opts) ? void 0 : r.browser), {
                                        write: e => i.write(e)
                                    })
                                })),
                                chunkLoggerController: i
                            }
                        }(r) : function(e) {
                            var t;
                            let r = new X(null == (t = e.opts) ? void 0 : t.level, e.maxSizeInBytes);
                            return {
                                logger: K()(ea(eo({}, e.opts), {
                                    level: "trace"
                                }), r),
                                chunkLoggerController: r
                            }
                        }(r);
                    this.logChunkController = o, null != (t = this.logChunkController) && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
                        var e, t;
                        null != (e = this.logChunkController) && e.downloadLogsBlobInBrowser && (null == (t = this.logChunkController) || t.downloadLogsBlobInBrowser({
                            clientId: await this.crypto.getClientId()
                        }))
                    }), this.logger = eu(s, this.name), this.heartbeat = new F, this.crypto = new rR(this, this.logger, e ? .keychain), this.history = new r8(this, this.logger), this.expirer = new r4(this, this.logger), this.storage = null != e && e.storage ? e.storage : new M(io(io({}, rl), e ? .storageOptions)), this.relayer = new rQ({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new r2(this, this.logger), this.verify = new r9(this.projectId || "", this.logger), this.echoClient = new r7(this.projectId || "", this.logger)
                }
                static async init(e) {
                    let t = new ia(e);
                    await t.initialize();
                    let r = await t.crypto.getClientId();
                    return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t
                }
                get context() {
                    return eh(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async getLogsBlob() {
                    var e;
                    return null == (e = this.logChunkController) ? void 0 : e.logsToBlob({
                        clientId: await this.crypto.getClientId()
                    })
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (e) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
                    }
                }
            }
            let ic = "client",
                ih = `wc@2:${ic}:`,
                iu = {
                    name: ic,
                    logger: "error"
                },
                il = "WALLETCONNECT_DEEPLINK_CHOICE",
                ip = "Proposal expired",
                id = q.SEVEN_DAYS,
                ig = {
                    wc_sessionPropose: {
                        req: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: q.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: q.ONE_DAY,
                            prompt: !1,
                            tag: 1115
                        }
                    },
                    wc_sessionAuthenticate: {
                        req: {
                            ttl: q.ONE_HOUR,
                            prompt: !0,
                            tag: 1116
                        },
                        res: {
                            ttl: q.ONE_HOUR,
                            prompt: !1,
                            tag: 1117
                        }
                    }
                },
                iy = {
                    min: q.FIVE_MINUTES,
                    max: q.SEVEN_DAYS
                },
                iv = {
                    idle: "IDLE",
                    active: "ACTIVE"
                },
                im = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"],
                ib = "wc@1.5:auth:",
                iw = `${ib}:PUB_KEY`;
            var i_ = Object.defineProperty,
                iE = Object.defineProperties,
                iD = Object.getOwnPropertyDescriptors,
                iI = Object.getOwnPropertySymbols,
                iS = Object.prototype.hasOwnProperty,
                iC = Object.prototype.propertyIsEnumerable,
                iP = (e, t, r) => t in e ? i_(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                iO = (e, t) => {
                    for (var r in t || (t = {})) iS.call(t, r) && iP(e, r, t[r]);
                    if (iI)
                        for (var r of iI(t)) iC.call(t, r) && iP(e, r, t[r]);
                    return e
                },
                ix = (e, t) => iE(e, iD(t));
            class iA extends eE {
                constructor(e) {
                    super(e), this.name = "engine", this.events = new(s()), this.initialized = !1, this.requestQueue = {
                        state: iv.idle,
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: iv.idle,
                        queue: []
                    }, this.requestQueueDelay = q.ONE_SECOND, this.expectedPairingMethodMap = new Map, this.recentlyDeletedMap = new Map, this.recentlyDeletedLimit = 200, this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                            methods: Object.keys(ig)
                        }), this.initialized = !0, setTimeout(() => {
                            this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
                        }, (0, q.toMiliseconds)(this.requestQueueDelay)))
                    }, this.connect = async e => {
                        await this.isInitialized();
                        let t = ix(iO({}, e), {
                            requiredNamespaces: e.requiredNamespaces || {},
                            optionalNamespaces: e.optionalNamespaces || {}
                        });
                        await this.isValidConnect(t);
                        let {
                            pairingTopic: r,
                            requiredNamespaces: i,
                            optionalNamespaces: n,
                            sessionProperties: s,
                            relays: a
                        } = t, c = r, h, u = !1;
                        try {
                            c && (u = this.client.core.pairing.pairings.get(c).active)
                        } catch (e) {
                            throw this.client.logger.error(`connect() -> pairing.get(${c}) failed`), e
                        }
                        if (!c || !u) {
                            let {
                                topic: e,
                                uri: t
                            } = await this.client.core.pairing.create();
                            c = e, h = t
                        }
                        if (!c) {
                            let {
                                message: e
                            } = (0, o.kCb)("NO_MATCHING_KEY", `connect() pairing topic: ${c}`);
                            throw Error(e)
                        }
                        let l = await this.client.core.crypto.generateKeyPair(),
                            p = ig.wc_sessionPropose.req.ttl || q.FIVE_MINUTES,
                            f = (0, o.gn4)(p),
                            d = iO({
                                requiredNamespaces: i,
                                optionalNamespaces: n,
                                relays: a ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: l,
                                    metadata: this.client.metadata
                                },
                                expiryTimestamp: f
                            }, s && {
                                sessionProperties: s
                            }),
                            {
                                reject: g,
                                resolve: y,
                                done: v
                            } = (0, o.H1S)(p, ip);
                        this.events.once((0, o.E0T)("session_connect"), async ({
                            error: e,
                            session: t
                        }) => {
                            if (e) g(e);
                            else if (t) {
                                t.self.publicKey = l;
                                let e = ix(iO({}, t), {
                                    requiredNamespaces: d.requiredNamespaces,
                                    optionalNamespaces: d.optionalNamespaces
                                });
                                await this.client.session.set(t.topic, e), await this.setExpiry(t.topic, t.expiry), c && await this.client.core.pairing.updateMetadata({
                                    topic: c,
                                    metadata: t.peer.metadata
                                }), y(e)
                            }
                        });
                        let m = await this.sendRequest({
                            topic: c,
                            method: "wc_sessionPropose",
                            params: d,
                            throwOnFailedPublish: !0
                        });
                        return await this.setProposal(m, iO({
                            id: m
                        }, d)), {
                            uri: h,
                            approval: v
                        }
                    }, this.pair = async e => {
                        await this.isInitialized();
                        try {
                            return await this.client.core.pairing.pair(e)
                        } catch (e) {
                            throw this.client.logger.error("pair() failed"), e
                        }
                    }, this.approve = async e => {
                        let t;
                        await this.isInitialized();
                        try {
                            await this.isValidApprove(e)
                        } catch (e) {
                            throw this.client.logger.error("approve() -> isValidApprove() failed"), e
                        }
                        let {
                            id: r,
                            relayProtocol: i,
                            namespaces: n,
                            sessionProperties: s,
                            sessionConfig: a
                        } = e;
                        try {
                            t = this.client.proposal.get(r)
                        } catch (e) {
                            throw this.client.logger.error(`approve() -> proposal.get(${r}) failed`), e
                        }
                        let {
                            pairingTopic: c,
                            proposer: h,
                            requiredNamespaces: u,
                            optionalNamespaces: l
                        } = t;
                        c = c || "";
                        let p = await this.client.core.crypto.generateKeyPair(),
                            f = h.publicKey,
                            d = await this.client.core.crypto.generateSharedKey(p, f),
                            g = iO(iO({
                                relay: {
                                    protocol: i ? ? "irn"
                                },
                                namespaces: n,
                                pairingTopic: c,
                                controller: {
                                    publicKey: p,
                                    metadata: this.client.metadata
                                },
                                expiry: (0, o.gn4)(id)
                            }, s && {
                                sessionProperties: s
                            }), a && {
                                sessionConfig: a
                            });
                        await this.client.core.relayer.subscribe(d);
                        let y = ix(iO({}, g), {
                            topic: d,
                            requiredNamespaces: u,
                            optionalNamespaces: l,
                            pairingTopic: c,
                            acknowledged: !1,
                            self: g.controller,
                            peer: {
                                publicKey: h.publicKey,
                                metadata: h.metadata
                            },
                            controller: p
                        });
                        await this.client.session.set(d, y);
                        try {
                            await this.sendResult({
                                id: r,
                                topic: c,
                                result: {
                                    relay: {
                                        protocol: i ? ? "irn"
                                    },
                                    responderPublicKey: p
                                },
                                throwOnFailedPublish: !0
                            }), await this.sendRequest({
                                topic: d,
                                method: "wc_sessionSettle",
                                params: g,
                                throwOnFailedPublish: !0
                            })
                        } catch (e) {
                            throw this.client.logger.error(e), this.client.session.delete(d, (0, o.D6H)("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(d), e
                        }
                        return await this.client.core.pairing.updateMetadata({
                            topic: c,
                            metadata: h.metadata
                        }), await this.client.proposal.delete(r, (0, o.D6H)("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: c
                        }), await this.setExpiry(d, (0, o.gn4)(id)), {
                            topic: d,
                            acknowledged: () => new Promise(e => setTimeout(() => e(this.client.session.get(d)), 500))
                        }
                    }, this.reject = async e => {
                        let t;
                        await this.isInitialized();
                        try {
                            await this.isValidReject(e)
                        } catch (e) {
                            throw this.client.logger.error("reject() -> isValidReject() failed"), e
                        }
                        let {
                            id: r,
                            reason: i
                        } = e;
                        try {
                            t = this.client.proposal.get(r).pairingTopic
                        } catch (e) {
                            throw this.client.logger.error(`reject() -> proposal.get(${r}) failed`), e
                        }
                        t && (await this.sendError({
                            id: r,
                            topic: t,
                            error: i
                        }), await this.client.proposal.delete(r, (0, o.D6H)("USER_DISCONNECTED")))
                    }, this.update = async e => {
                        await this.isInitialized();
                        try {
                            await this.isValidUpdate(e)
                        } catch (e) {
                            throw this.client.logger.error("update() -> isValidUpdate() failed"), e
                        }
                        let {
                            topic: t,
                            namespaces: r
                        } = e, {
                            done: i,
                            resolve: n,
                            reject: s
                        } = (0, o.H1S)(), a = eH(), c = eF().toString(), h = this.client.session.get(t).namespaces;
                        return this.events.once((0, o.E0T)("session_update", a), ({
                            error: e
                        }) => {
                            e ? s(e) : n()
                        }), await this.client.session.update(t, {
                            namespaces: r
                        }), await this.sendRequest({
                            topic: t,
                            method: "wc_sessionUpdate",
                            params: {
                                namespaces: r
                            },
                            throwOnFailedPublish: !0,
                            clientRpcId: a,
                            relayRpcId: c
                        }).catch(e => {
                            this.client.logger.error(e), this.client.session.update(t, {
                                namespaces: h
                            }), s(e)
                        }), {
                            acknowledged: i
                        }
                    }, this.extend = async e => {
                        await this.isInitialized();
                        try {
                            await this.isValidExtend(e)
                        } catch (e) {
                            throw this.client.logger.error("extend() -> isValidExtend() failed"), e
                        }
                        let {
                            topic: t
                        } = e, r = eH(), {
                            done: i,
                            resolve: n,
                            reject: s
                        } = (0, o.H1S)();
                        return this.events.once((0, o.E0T)("session_extend", r), ({
                            error: e
                        }) => {
                            e ? s(e) : n()
                        }), await this.setExpiry(t, (0, o.gn4)(id)), this.sendRequest({
                            topic: t,
                            method: "wc_sessionExtend",
                            params: {},
                            clientRpcId: r,
                            throwOnFailedPublish: !0
                        }).catch(e => {
                            s(e)
                        }), {
                            acknowledged: i
                        }
                    }, this.request = async e => {
                        await this.isInitialized();
                        try {
                            await this.isValidRequest(e)
                        } catch (e) {
                            throw this.client.logger.error("request() -> isValidRequest() failed"), e
                        }
                        let {
                            chainId: t,
                            request: r,
                            topic: i,
                            expiry: n = ig.wc_sessionRequest.req.ttl
                        } = e, s = this.client.session.get(i), a = eH(), c = eF().toString(), {
                            done: h,
                            resolve: u,
                            reject: l
                        } = (0, o.H1S)(n, "Request expired. Please try again.");
                        return this.events.once((0, o.E0T)("session_request", a), ({
                            error: e,
                            result: t
                        }) => {
                            e ? l(e) : u(t)
                        }), await Promise.all([new Promise(async e => {
                            await this.sendRequest({
                                clientRpcId: a,
                                relayRpcId: c,
                                topic: i,
                                method: "wc_sessionRequest",
                                params: {
                                    request: ix(iO({}, r), {
                                        expiryTimestamp: (0, o.gn4)(n)
                                    }),
                                    chainId: t
                                },
                                expiry: n,
                                throwOnFailedPublish: !0
                            }).catch(e => l(e)), this.client.events.emit("session_request_sent", {
                                topic: i,
                                request: r,
                                chainId: t,
                                id: a
                            }), e()
                        }), new Promise(async e => {
                            var t;
                            if (!(null != (t = s.sessionConfig) && t.disableDeepLink)) {
                                let e = await (0, o.bW6)(this.client.core.storage, il);
                                (0, o.HhN)({
                                    id: a,
                                    topic: i,
                                    wcDeepLink: e
                                })
                            }
                            e()
                        }), h()]).then(e => e[2])
                    }, this.respond = async e => {
                        await this.isInitialized(), await this.isValidRespond(e);
                        let {
                            topic: t,
                            response: r
                        } = e, {
                            id: i
                        } = r;
                        e5(r) ? await this.sendResult({
                            id: i,
                            topic: t,
                            result: r.result,
                            throwOnFailedPublish: !0
                        }) : e3(r) && await this.sendError({
                            id: i,
                            topic: t,
                            error: r.error
                        }), this.cleanupAfterResponse(e)
                    }, this.ping = async e => {
                        await this.isInitialized();
                        try {
                            await this.isValidPing(e)
                        } catch (e) {
                            throw this.client.logger.error("ping() -> isValidPing() failed"), e
                        }
                        let {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) {
                            let e = eH(),
                                r = eF().toString(),
                                {
                                    done: i,
                                    resolve: n,
                                    reject: s
                                } = (0, o.H1S)();
                            this.events.once((0, o.E0T)("session_ping", e), ({
                                error: e
                            }) => {
                                e ? s(e) : n()
                            }), await Promise.all([this.sendRequest({
                                topic: t,
                                method: "wc_sessionPing",
                                params: {},
                                throwOnFailedPublish: !0,
                                clientRpcId: e,
                                relayRpcId: r
                            }), i()])
                        } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                    }, this.emit = async e => {
                        await this.isInitialized(), await this.isValidEmit(e);
                        let {
                            topic: t,
                            event: r,
                            chainId: i
                        } = e, n = eF().toString();
                        await this.sendRequest({
                            topic: t,
                            method: "wc_sessionEvent",
                            params: {
                                event: r,
                                chainId: i
                            },
                            throwOnFailedPublish: !0,
                            relayRpcId: n
                        })
                    }, this.disconnect = async e => {
                        await this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) await this.sendRequest({
                            topic: t,
                            method: "wc_sessionDelete",
                            params: (0, o.D6H)("USER_DISCONNECTED"),
                            throwOnFailedPublish: !0
                        }), await this.deleteSession({
                            topic: t,
                            emitEvent: !1
                        });
                        else if (this.client.core.pairing.pairings.keys.includes(t)) await this.client.core.pairing.disconnect({
                            topic: t
                        });
                        else {
                            let {
                                message: e
                            } = (0, o.kCb)("MISMATCHED_TOPIC", `Session or pairing topic not found: ${t}`);
                            throw Error(e)
                        }
                    }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter(t => (0, o.Ih8)(t, e))), this.getPendingSessionRequests = () => this.client.pendingRequest.getAll(), this.authenticate = async e => {
                        this.isInitialized(), this.isValidAuthenticate(e);
                        let {
                            chains: t,
                            statement: r = "",
                            uri: i,
                            domain: n,
                            nonce: s,
                            type: a,
                            exp: c,
                            nbf: h,
                            methods: u = [],
                            expiry: l
                        } = e, p = [...e.resources || []], {
                            topic: f,
                            uri: d
                        } = await this.client.core.pairing.create({
                            methods: ["wc_sessionAuthenticate"]
                        });
                        this.client.logger.info({
                            message: "Generated new pairing",
                            pairing: {
                                topic: f,
                                uri: d
                            }
                        });
                        let g = await this.client.core.crypto.generateKeyPair(),
                            y = (0, o.YmJ)(g);
                        if (await Promise.all([this.client.auth.authKeys.set(iw, {
                                responseTopic: y,
                                publicKey: g
                            }), this.client.auth.pairingTopics.set(y, {
                                topic: y,
                                pairingTopic: f
                            })]), await this.client.core.relayer.subscribe(y), this.client.logger.info(`sending request to new pairing topic: ${f}`), u.length > 0) {
                            let {
                                namespace: e
                            } = (0, o.DQe)(t[0]), r = (0, o.IkP)(e, "request", u);
                            (0, o.hA9)(p) && (r = (0, o.qJM)(r, p.pop())), p.push(r)
                        }
                        let v = l && l > ig.wc_sessionAuthenticate.req.ttl ? l : ig.wc_sessionAuthenticate.req.ttl,
                            m = {
                                authPayload: {
                                    type: a ? ? "caip122",
                                    chains: t,
                                    statement: r,
                                    aud: i,
                                    domain: n,
                                    version: "1",
                                    nonce: s,
                                    iat: new Date().toISOString(),
                                    exp: c,
                                    nbf: h,
                                    resources: p
                                },
                                requester: {
                                    publicKey: g,
                                    metadata: this.client.metadata
                                },
                                expiryTimestamp: (0, o.gn4)(v)
                            },
                            b = {
                                eip155: {
                                    chains: t,
                                    methods: [...new Set(["personal_sign", ...u])],
                                    events: ["chainChanged", "accountsChanged"]
                                }
                            },
                            w = {
                                requiredNamespaces: {},
                                optionalNamespaces: b,
                                relays: [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: g,
                                    metadata: this.client.metadata
                                },
                                expiryTimestamp: (0, o.gn4)(ig.wc_sessionPropose.req.ttl)
                            },
                            {
                                done: _,
                                resolve: E,
                                reject: D
                            } = (0, o.H1S)(v, "Request expired"),
                            I = async ({
                                error: e,
                                session: t
                            }) => {
                                if (this.events.off((0, o.E0T)("session_request", C), S), e) D(e);
                                else if (t) {
                                    t.self.publicKey = g, await this.client.session.set(t.topic, t), await this.setExpiry(t.topic, t.expiry), f && await this.client.core.pairing.updateMetadata({
                                        topic: f,
                                        metadata: t.peer.metadata
                                    });
                                    let e = this.client.session.get(t.topic);
                                    await this.deleteProposal(P), E({
                                        session: e
                                    })
                                }
                            },
                            S = async e => {
                                let t;
                                if (await this.deletePendingAuthRequest(C, {
                                        message: "fulfilled",
                                        code: 0
                                    }), e.error) {
                                    let t = (0, o.D6H)("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
                                    return e.error.code === t.code ? void 0 : (this.events.off((0, o.E0T)("session_connect"), I), D(e.error.message))
                                }
                                await this.deleteProposal(P), this.events.off((0, o.E0T)("session_connect"), I);
                                let {
                                    cacaos: r,
                                    responder: i
                                } = e.result, n = [], s = [];
                                for (let e of r) {
                                    await (0, o.c4l)({
                                        cacao: e,
                                        projectId: this.client.core.projectId
                                    }) || (this.client.logger.error(e, "Signature verification failed"), D((0, o.D6H)("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
                                    let {
                                        p: t
                                    } = e, r = (0, o.hA9)(t.resources), i = [(0, o.DJo)(t.iss)], a = (0, o.NmC)(t.iss);
                                    if (r) {
                                        let e = (0, o.Y31)(r),
                                            t = (0, o.ouN)(r);
                                        n.push(...e), i.push(...t)
                                    }
                                    for (let e of i) s.push(`${e}:${a}`)
                                }
                                let a = await this.client.core.crypto.generateSharedKey(g, i.publicKey);
                                n.length > 0 && (t = {
                                    topic: a,
                                    acknowledged: !0,
                                    self: {
                                        publicKey: g,
                                        metadata: this.client.metadata
                                    },
                                    peer: i,
                                    controller: i.publicKey,
                                    expiry: (0, o.gn4)(id),
                                    requiredNamespaces: {},
                                    optionalNamespaces: {},
                                    relay: {
                                        protocol: "irn"
                                    },
                                    pairingTopic: f,
                                    namespaces: (0, o.E12)([...new Set(n)], [...new Set(s)])
                                }, await this.client.core.relayer.subscribe(a), await this.client.session.set(a, t), t = this.client.session.get(a)), E({
                                    auths: r,
                                    session: t
                                })
                            },
                            C = eH(),
                            P = eH();
                        this.events.once((0, o.E0T)("session_connect"), I), this.events.once((0, o.E0T)("session_request", C), S);
                        try {
                            await Promise.all([this.sendRequest({
                                topic: f,
                                method: "wc_sessionAuthenticate",
                                params: m,
                                expiry: e.expiry,
                                throwOnFailedPublish: !0,
                                clientRpcId: C
                            }), this.sendRequest({
                                topic: f,
                                method: "wc_sessionPropose",
                                params: w,
                                expiry: ig.wc_sessionPropose.req.ttl,
                                throwOnFailedPublish: !0,
                                clientRpcId: P
                            })])
                        } catch (e) {
                            throw this.events.off((0, o.E0T)("session_connect"), I), this.events.off((0, o.E0T)("session_request", C), S), e
                        }
                        return await this.setProposal(P, iO({
                            id: P
                        }, w)), await this.setAuthRequest(C, {
                            request: ix(iO({}, m), {
                                verifyContext: {}
                            }),
                            pairingTopic: f
                        }), {
                            uri: d,
                            response: _
                        }
                    }, this.approveSessionAuthenticate = async e => {
                        let t;
                        this.isInitialized();
                        let {
                            id: r,
                            auths: i
                        } = e, n = this.getPendingAuthRequest(r);
                        if (!n) throw Error(`Could not find pending auth request with id ${r}`);
                        let s = n.requester.publicKey,
                            a = await this.client.core.crypto.generateKeyPair(),
                            c = (0, o.YmJ)(s),
                            h = {
                                type: o.rVF,
                                receiverPublicKey: s,
                                senderPublicKey: a
                            },
                            u = [],
                            l = [];
                        for (let e of i) {
                            if (!await (0, o.c4l)({
                                    cacao: e,
                                    projectId: this.client.core.projectId
                                })) {
                                let e = (0, o.D6H)("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
                                throw await this.sendError({
                                    id: r,
                                    topic: c,
                                    error: e,
                                    encodeOpts: h
                                }), Error(e.message)
                            }
                            let {
                                p: t
                            } = e, i = (0, o.hA9)(t.resources), n = [(0, o.DJo)(t.iss)], s = (0, o.NmC)(t.iss);
                            if (i) {
                                let e = (0, o.Y31)(i),
                                    t = (0, o.ouN)(i);
                                u.push(...e), n.push(...t)
                            }
                            for (let e of n) l.push(`${e}:${s}`)
                        }
                        let p = await this.client.core.crypto.generateSharedKey(a, s);
                        return u ? .length > 0 && (t = {
                            topic: p,
                            acknowledged: !0,
                            self: {
                                publicKey: a,
                                metadata: this.client.metadata
                            },
                            peer: {
                                publicKey: s,
                                metadata: n.requester.metadata
                            },
                            controller: s,
                            expiry: (0, o.gn4)(id),
                            authentication: i,
                            requiredNamespaces: {},
                            optionalNamespaces: {},
                            relay: {
                                protocol: "irn"
                            },
                            pairingTopic: "",
                            namespaces: (0, o.E12)([...new Set(u)], [...new Set(l)])
                        }, await this.client.core.relayer.subscribe(p), await this.client.session.set(p, t)), await this.sendResult({
                            topic: c,
                            id: r,
                            result: {
                                cacaos: i,
                                responder: {
                                    publicKey: a,
                                    metadata: this.client.metadata
                                }
                            },
                            encodeOpts: h,
                            throwOnFailedPublish: !0
                        }), await this.client.auth.requests.delete(r, {
                            message: "fullfilled",
                            code: 0
                        }), await this.client.core.pairing.activate({
                            topic: n.pairingTopic
                        }), {
                            session: t
                        }
                    }, this.rejectSessionAuthenticate = async e => {
                        await this.isInitialized();
                        let {
                            id: t,
                            reason: r
                        } = e, i = this.getPendingAuthRequest(t);
                        if (!i) throw Error(`Could not find pending auth request with id ${t}`);
                        let n = i.requester.publicKey,
                            s = await this.client.core.crypto.generateKeyPair(),
                            a = (0, o.YmJ)(n),
                            c = {
                                type: o.rVF,
                                receiverPublicKey: n,
                                senderPublicKey: s
                            };
                        await this.sendError({
                            id: t,
                            topic: a,
                            error: r,
                            encodeOpts: c
                        }), await this.client.auth.requests.delete(t, {
                            message: "rejected",
                            code: 0
                        }), await this.client.proposal.delete(t, (0, o.D6H)("USER_DISCONNECTED"))
                    }, this.formatAuthMessage = e => {
                        this.isInitialized();
                        let {
                            request: t,
                            iss: r
                        } = e;
                        return (0, o.wvx)(t, r)
                    }, this.cleanupDuplicatePairings = async e => {
                        if (e.pairingTopic) try {
                            let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter(r => {
                                    var i, n;
                                    return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (n = r.peerMetadata) ? void 0 : n.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic
                                });
                            if (0 === r.length) return;
                            this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map(e => this.client.core.pairing.disconnect({
                                topic: e.topic
                            }))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.deleteSession = async e => {
                        let {
                            topic: t,
                            expirerHasDeleted: r = !1,
                            emitEvent: i = !0,
                            id: n = 0
                        } = e, {
                            self: s
                        } = this.client.session.get(t);
                        await this.client.core.relayer.unsubscribe(t), await this.client.session.delete(t, (0, o.D6H)("USER_DISCONNECTED")), this.addToRecentlyDeleted(t, "session"), this.client.core.crypto.keychain.has(s.publicKey) && await this.client.core.crypto.deleteKeyPair(s.publicKey), this.client.core.crypto.keychain.has(t) && await this.client.core.crypto.deleteSymKey(t), r || this.client.core.expirer.del(t), this.client.core.storage.removeItem(il).catch(e => this.client.logger.warn(e)), this.getPendingSessionRequests().forEach(e => {
                            e.topic === t && this.deletePendingSessionRequest(e.id, (0, o.D6H)("USER_DISCONNECTED"))
                        }), i && this.client.events.emit("session_delete", {
                            id: n,
                            topic: t
                        })
                    }, this.deleteProposal = async (e, t) => {
                        await Promise.all([this.client.proposal.delete(e, (0, o.D6H)("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "proposal")
                    }, this.deletePendingSessionRequest = async (e, t, r = !1) => {
                        await Promise.all([this.client.pendingRequest.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)]), this.addToRecentlyDeleted(e, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(t => t.id !== e), r && (this.sessionRequestQueue.state = iv.idle, this.client.events.emit("session_request_expire", {
                            id: e
                        }))
                    }, this.deletePendingAuthRequest = async (e, t, r = !1) => {
                        await Promise.all([this.client.auth.requests.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.setExpiry = async (e, t) => {
                        this.client.session.keys.includes(e) && (this.client.core.expirer.set(e, t), await this.client.session.update(e, {
                            expiry: t
                        }))
                    }, this.setProposal = async (e, t) => {
                        this.client.core.expirer.set(e, (0, o.gn4)(ig.wc_sessionPropose.req.ttl)), await this.client.proposal.set(e, t)
                    }, this.setAuthRequest = async (e, t) => {
                        let {
                            request: r,
                            pairingTopic: i
                        } = t;
                        this.client.core.expirer.set(e, r.expiryTimestamp), await this.client.auth.requests.set(e, {
                            authPayload: r.authPayload,
                            requester: r.requester,
                            expiryTimestamp: r.expiryTimestamp,
                            id: e,
                            pairingTopic: i,
                            verifyContext: r.verifyContext
                        })
                    }, this.setPendingSessionRequest = async e => {
                        let {
                            id: t,
                            topic: r,
                            params: i,
                            verifyContext: n
                        } = e, s = i.request.expiryTimestamp || (0, o.gn4)(ig.wc_sessionRequest.req.ttl);
                        this.client.core.expirer.set(t, s), await this.client.pendingRequest.set(t, {
                            id: t,
                            topic: r,
                            params: i,
                            verifyContext: n
                        })
                    }, this.sendRequest = async e => {
                        let t;
                        let {
                            topic: r,
                            method: i,
                            params: n,
                            expiry: s,
                            relayRpcId: a,
                            clientRpcId: c,
                            throwOnFailedPublish: h
                        } = e, u = eB(i, n, c);
                        if ((0, o.jUY)() && im.includes(i)) {
                            let e = (0, o.rjm)(JSON.stringify(u));
                            this.client.core.verify.register({
                                attestationId: e
                            })
                        }
                        try {
                            t = await this.client.core.crypto.encode(r, u)
                        } catch (e) {
                            throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${r} failed`), e
                        }
                        let l = ig[i].req;
                        return s && (l.ttl = s), a && (l.id = a), this.client.core.history.set(r, u), h ? (l.internal = ix(iO({}, l.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(r, t, l)) : this.client.core.relayer.publish(r, t, l).catch(e => this.client.logger.error(e)), u.id
                    }, this.sendResult = async e => {
                        let t, r;
                        let {
                            id: i,
                            topic: n,
                            result: s,
                            throwOnFailedPublish: o,
                            encodeOpts: a
                        } = e, c = eK(i, s);
                        try {
                            t = await this.client.core.crypto.encode(n, c, a)
                        } catch (e) {
                            throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${n} failed`), e
                        }
                        try {
                            r = await this.client.core.history.get(n, i)
                        } catch (e) {
                            throw this.client.logger.error(`sendResult() -> history.get(${n}, ${i}) failed`), e
                        }
                        let h = ig[r.request.method].res;
                        o ? (h.internal = ix(iO({}, h.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(n, t, h)) : this.client.core.relayer.publish(n, t, h).catch(e => this.client.logger.error(e)), await this.client.core.history.resolve(c)
                    }, this.sendError = async e => {
                        let t, r;
                        let {
                            id: i,
                            topic: n,
                            error: s,
                            encodeOpts: o
                        } = e, a = eV(i, s);
                        try {
                            t = await this.client.core.crypto.encode(n, a, o)
                        } catch (e) {
                            throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${n} failed`), e
                        }
                        try {
                            r = await this.client.core.history.get(n, i)
                        } catch (e) {
                            throw this.client.logger.error(`sendError() -> history.get(${n}, ${i}) failed`), e
                        }
                        let c = ig[r.request.method].res;
                        this.client.core.relayer.publish(n, t, c), await this.client.core.history.resolve(a)
                    }, this.cleanup = async () => {
                        let e = [],
                            t = [];
                        this.client.session.getAll().forEach(t => {
                            let r = !1;
                            (0, o.BwD)(t.expiry) && (r = !0), this.client.core.crypto.keychain.has(t.topic) || (r = !0), r && e.push(t.topic)
                        }), this.client.proposal.getAll().forEach(e => {
                            (0, o.BwD)(e.expiryTimestamp) && t.push(e.id)
                        }), await Promise.all([...e.map(e => this.deleteSession({
                            topic: e
                        })), ...t.map(e => this.deleteProposal(e))])
                    }, this.onRelayEventRequest = async e => {
                        this.requestQueue.queue.push(e), await this.processRequestsQueue()
                    }, this.processRequestsQueue = async () => {
                        if (this.requestQueue.state === iv.active) {
                            this.client.logger.info("Request queue already active, skipping...");
                            return
                        }
                        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                            this.requestQueue.state = iv.active;
                            let e = this.requestQueue.queue.shift();
                            if (e) try {
                                this.processRequest(e), await new Promise(e => setTimeout(e, 300))
                            } catch (e) {
                                this.client.logger.warn(e)
                            }
                        }
                        this.requestQueue.state = iv.idle
                    }, this.processRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = r.method;
                        if (!this.shouldIgnorePairingRequest({
                                topic: t,
                                requestMethod: i
                            })) switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(t, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(t, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(t, r);
                            case "wc_sessionAuthenticate":
                                return this.onSessionAuthenticateRequest(t, r);
                            default:
                                return this.client.logger.info(`Unsupported request method ${i}`)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.client.core.history.get(t, r.id)).request.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(t, r);
                            case "wc_sessionAuthenticate":
                                return this.onSessionAuthenticateResponse(t, r);
                            default:
                                return this.client.logger.info(`Unsupported response method ${i}`)
                        }
                    }, this.onRelayEventUnknownPayload = e => {
                        let {
                            topic: t
                        } = e, {
                            message: r
                        } = (0, o.kCb)("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
                        throw Error(r)
                    }, this.shouldIgnorePairingRequest = e => {
                        let {
                            topic: t,
                            requestMethod: r
                        } = e, i = this.expectedPairingMethodMap.get(t);
                        return !(!i || i.includes(r)) && !!(i.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0)
                    }, this.onSessionProposeRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            this.isValidConnect(iO({}, t.params));
                            let n = r.expiryTimestamp || (0, o.gn4)(ig.wc_sessionPropose.req.ttl),
                                s = iO({
                                    id: i,
                                    pairingTopic: e,
                                    expiryTimestamp: n
                                }, r);
                            await this.setProposal(i, s);
                            let a = (0, o.rjm)(JSON.stringify(t)),
                                c = await this.getVerifyContext(a, s.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: i,
                                params: s,
                                verifyContext: c
                            })
                        } catch (t) {
                            await this.sendError({
                                id: i,
                                topic: e,
                                error: t
                            }), this.client.logger.error(t)
                        }
                    }, this.onSessionProposeResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        if (e5(t)) {
                            let {
                                result: i
                            } = t;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: i
                            });
                            let n = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: n
                            });
                            let s = n.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: s
                            });
                            let o = i.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            let a = await this.client.core.crypto.generateSharedKey(s, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            let c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: e
                            })
                        } else if (e3(t)) {
                            await this.client.proposal.delete(r, (0, o.D6H)("USER_DISCONNECTED"));
                            let e = (0, o.E0T)("session_connect");
                            if (0 === this.events.listenerCount(e)) throw Error(`emitting ${e} without any listeners, 954`);
                            this.events.emit((0, o.E0T)("session_connect"), {
                                error: t.error
                            })
                        }
                    }, this.onSessionSettleRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidSessionSettleRequest(i);
                            let {
                                relay: r,
                                controller: n,
                                expiry: s,
                                namespaces: a,
                                sessionProperties: c,
                                pairingTopic: h,
                                sessionConfig: u
                            } = t.params, l = iO(iO({
                                topic: e,
                                relay: r,
                                expiry: s,
                                namespaces: a,
                                acknowledged: !0,
                                pairingTopic: h,
                                requiredNamespaces: {},
                                optionalNamespaces: {},
                                controller: n.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: n.publicKey,
                                    metadata: n.metadata
                                }
                            }, c && {
                                sessionProperties: c
                            }), u && {
                                sessionConfig: u
                            });
                            await this.sendResult({
                                id: t.id,
                                topic: e,
                                result: !0,
                                throwOnFailedPublish: !0
                            });
                            let p = (0, o.E0T)("session_connect");
                            if (0 === this.events.listenerCount(p)) throw Error(`emitting ${p} without any listeners 997`);
                            this.events.emit((0, o.E0T)("session_connect"), {
                                session: l
                            }), this.cleanupDuplicatePairings(l)
                        } catch (t) {
                            await this.sendError({
                                id: r,
                                topic: e,
                                error: t
                            }), this.client.logger.error(t)
                        }
                    }, this.onSessionSettleResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        e5(t) ? (await this.client.session.update(e, {
                            acknowledged: !0
                        }), this.events.emit((0, o.E0T)("session_approve", r), {})) : e3(t) && (await this.client.session.delete(e, (0, o.D6H)("USER_DISCONNECTED")), this.events.emit((0, o.E0T)("session_approve", r), {
                            error: t.error
                        }))
                    }, this.onSessionUpdateRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            let t = `${e}_session_update`,
                                n = o.O6B.get(t);
                            if (n && this.isRequestOutOfSync(n, i)) {
                                this.client.logger.info(`Discarding out of sync request - ${i}`), this.sendError({
                                    id: i,
                                    topic: e,
                                    error: (0, o.D6H)("INVALID_UPDATE_REQUEST")
                                });
                                return
                            }
                            this.isValidUpdate(iO({
                                topic: e
                            }, r));
                            try {
                                o.O6B.set(t, i), await this.client.session.update(e, {
                                    namespaces: r.namespaces
                                }), await this.sendResult({
                                    id: i,
                                    topic: e,
                                    result: !0,
                                    throwOnFailedPublish: !0
                                })
                            } catch (e) {
                                throw o.O6B.delete(t), e
                            }
                            this.client.events.emit("session_update", {
                                id: i,
                                topic: e,
                                params: r
                            })
                        } catch (t) {
                            await this.sendError({
                                id: i,
                                topic: e,
                                error: t
                            }), this.client.logger.error(t)
                        }
                    }, this.isRequestOutOfSync = (e, t) => parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, t) => {
                        let {
                            id: r
                        } = t, i = (0, o.E0T)("session_update", r);
                        if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                        e5(t) ? this.events.emit((0, o.E0T)("session_update", r), {}) : e3(t) && this.events.emit((0, o.E0T)("session_update", r), {
                            error: t.error
                        })
                    }, this.onSessionExtendRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidExtend({
                                topic: e
                            }), await this.setExpiry(e, (0, o.gn4)(id)), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0,
                                throwOnFailedPublish: !0
                            }), this.client.events.emit("session_extend", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError({
                                id: r,
                                topic: e,
                                error: t
                            }), this.client.logger.error(t)
                        }
                    }, this.onSessionExtendResponse = (e, t) => {
                        let {
                            id: r
                        } = t, i = (0, o.E0T)("session_extend", r);
                        if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                        e5(t) ? this.events.emit((0, o.E0T)("session_extend", r), {}) : e3(t) && this.events.emit((0, o.E0T)("session_extend", r), {
                            error: t.error
                        })
                    }, this.onSessionPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0,
                                throwOnFailedPublish: !0
                            }), this.client.events.emit("session_ping", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError({
                                id: r,
                                topic: e,
                                error: t
                            }), this.client.logger.error(t)
                        }
                    }, this.onSessionPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t, i = (0, o.E0T)("session_ping", r);
                        if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                        setTimeout(() => {
                            e5(t) ? this.events.emit((0, o.E0T)("session_ping", r), {}) : e3(t) && this.events.emit((0, o.E0T)("session_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e,
                                reason: t.params
                            }), await Promise.all([new Promise(t => {
                                this.client.core.relayer.once(rv.publish, async () => {
                                    t(await this.deleteSession({
                                        topic: e,
                                        id: r
                                    }))
                                })
                            }), this.sendResult({
                                id: r,
                                topic: e,
                                result: !0,
                                throwOnFailedPublish: !0
                            }), this.cleanupPendingSentRequestsForTopic({
                                topic: e,
                                error: (0, o.D6H)("USER_DISCONNECTED")
                            })])
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onSessionRequest = async (e, t) => {
                        var r;
                        let {
                            id: i,
                            params: n
                        } = t;
                        try {
                            await this.isValidRequest(iO({
                                topic: e
                            }, n));
                            let t = (0, o.rjm)(JSON.stringify(eB("wc_sessionRequest", n, i))),
                                s = this.client.session.get(e),
                                a = await this.getVerifyContext(t, s.peer.metadata),
                                c = {
                                    id: i,
                                    topic: e,
                                    params: n,
                                    verifyContext: a
                                };
                            await this.setPendingSessionRequest(c), null != (r = this.client.signConfig) && r.disableRequestQueue ? this.emitSessionRequest(c) : (this.addSessionRequestToSessionRequestQueue(c), this.processSessionRequestQueue())
                        } catch (t) {
                            await this.sendError({
                                id: i,
                                topic: e,
                                error: t
                            }), this.client.logger.error(t)
                        }
                    }, this.onSessionRequestResponse = (e, t) => {
                        let {
                            id: r
                        } = t, i = (0, o.E0T)("session_request", r);
                        if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                        e5(t) ? this.events.emit((0, o.E0T)("session_request", r), {
                            result: t.result
                        }) : e3(t) && this.events.emit((0, o.E0T)("session_request", r), {
                            error: t.error
                        })
                    }, this.onSessionEventRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            let t = `${e}_session_event_${i.event.name}`,
                                n = o.O6B.get(t);
                            if (n && this.isRequestOutOfSync(n, r)) {
                                this.client.logger.info(`Discarding out of sync request - ${r}`);
                                return
                            }
                            this.isValidEmit(iO({
                                topic: e
                            }, i)), this.client.events.emit("session_event", {
                                id: r,
                                topic: e,
                                params: i
                            }), o.O6B.set(t, r)
                        } catch (t) {
                            await this.sendError({
                                id: r,
                                topic: e,
                                error: t
                            }), this.client.logger.error(t)
                        }
                    }, this.onSessionAuthenticateResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        this.client.logger.trace({
                            type: "method",
                            method: "onSessionAuthenticateResponse",
                            topic: e,
                            payload: t
                        }), e5(t) ? this.events.emit((0, o.E0T)("session_request", r), {
                            result: t.result
                        }) : e3(t) && this.events.emit((0, o.E0T)("session_request", r), {
                            error: t.error
                        })
                    }, this.onSessionAuthenticateRequest = async (e, t) => {
                        let {
                            requester: r,
                            authPayload: i,
                            expiryTimestamp: n
                        } = t.params, s = (0, o.rjm)(JSON.stringify(t)), a = await this.getVerifyContext(s, this.client.metadata), c = {
                            requester: r,
                            pairingTopic: e,
                            id: t.id,
                            authPayload: i,
                            verifyContext: a,
                            expiryTimestamp: n
                        };
                        await this.setAuthRequest(t.id, {
                            request: c,
                            pairingTopic: e
                        }), this.client.events.emit("session_authenticate", {
                            topic: e,
                            params: t.params,
                            id: t.id
                        })
                    }, this.addSessionRequestToSessionRequestQueue = e => {
                        this.sessionRequestQueue.queue.push(e)
                    }, this.cleanupAfterResponse = e => {
                        this.deletePendingSessionRequest(e.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout(() => {
                            this.sessionRequestQueue.state = iv.idle, this.processSessionRequestQueue()
                        }, (0, q.toMiliseconds)(this.requestQueueDelay))
                    }, this.cleanupPendingSentRequestsForTopic = ({
                        topic: e,
                        error: t
                    }) => {
                        let r = this.client.core.history.pending;
                        r.length > 0 && r.filter(t => t.topic === e && "wc_sessionRequest" === t.request.method).forEach(e => {
                            let r = e.request.id,
                                i = (0, o.E0T)("session_request", r);
                            if (0 === this.events.listenerCount(i)) throw Error(`emitting ${i} without any listeners`);
                            this.events.emit((0, o.E0T)("session_request", e.request.id), {
                                error: t
                            })
                        })
                    }, this.processSessionRequestQueue = () => {
                        if (this.sessionRequestQueue.state === iv.active) {
                            this.client.logger.info("session request queue is already active.");
                            return
                        }
                        let e = this.sessionRequestQueue.queue[0];
                        if (!e) {
                            this.client.logger.info("session request queue is empty.");
                            return
                        }
                        try {
                            this.sessionRequestQueue.state = iv.active, this.emitSessionRequest(e)
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.emitSessionRequest = e => {
                        this.client.events.emit("session_request", e)
                    }, this.onPairingCreated = e => {
                        if (e.methods && this.expectedPairingMethodMap.set(e.topic, e.methods), e.active) return;
                        let t = this.client.proposal.getAll().find(t => t.pairingTopic === e.topic);
                        t && this.onSessionProposeRequest(e.topic, eB("wc_sessionPropose", {
                            requiredNamespaces: t.requiredNamespaces,
                            optionalNamespaces: t.optionalNamespaces,
                            relays: t.relays,
                            proposer: t.proposer,
                            sessionProperties: t.sessionProperties
                        }, t.id))
                    }, this.isValidConnect = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                            throw Error(t)
                        }
                        let {
                            pairingTopic: t,
                            requiredNamespaces: r,
                            optionalNamespaces: i,
                            sessionProperties: n,
                            relays: s
                        } = e;
                        if ((0, o.o8e)(t) || await this.isValidPairingTopic(t), !(0, o.PMr)(s, !0)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `connect() relays: ${s}`);
                            throw Error(e)
                        }(0, o.o8e)(r) || 0 === (0, o.L5o)(r) || this.validateNamespaces(r, "requiredNamespaces"), (0, o.o8e)(i) || 0 === (0, o.L5o)(i) || this.validateNamespaces(i, "optionalNamespaces"), (0, o.o8e)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.validateNamespaces = (e, t) => {
                        let r = (0, o.naP)(e, "connect()", t);
                        if (r) throw Error(r.message)
                    }, this.isValidApprove = async e => {
                        if (!(0, o.EJd)(e)) throw Error((0, o.kCb)("MISSING_OR_INVALID", `approve() params: ${e}`).message);
                        let {
                            id: t,
                            namespaces: r,
                            relayProtocol: i,
                            sessionProperties: n
                        } = e;
                        this.checkRecentlyDeleted(t), await this.isValidProposalId(t);
                        let s = this.client.proposal.get(t),
                            a = (0, o.ing)(r, "approve()");
                        if (a) throw Error(a.message);
                        let c = (0, o.rFo)(s.requiredNamespaces, r, "approve()");
                        if (c) throw Error(c.message);
                        if (!(0, o.M_r)(i, !0)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                            throw Error(e)
                        }(0, o.o8e)(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.isValidReject = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `reject() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            id: t,
                            reason: r
                        } = e;
                        if (this.checkRecentlyDeleted(t), await this.isValidProposalId(t), !(0, o.H4H)(r)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidSessionSettleRequest = e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            relay: t,
                            controller: r,
                            namespaces: i,
                            expiry: n
                        } = e;
                        if (!(0, o.Z26)(t)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw Error(e)
                        }
                        let s = (0, o.DdM)(r, "onSessionSettleRequest()");
                        if (s) throw Error(s.message);
                        let a = (0, o.ing)(i, "onSessionSettleRequest()");
                        if (a) throw Error(a.message);
                        if ((0, o.BwD)(n)) {
                            let {
                                message: e
                            } = (0, o.kCb)("EXPIRED", "onSessionSettleRequest()");
                            throw Error(e)
                        }
                    }, this.isValidUpdate = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `update() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            namespaces: r
                        } = e;
                        this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
                        let i = this.client.session.get(t),
                            n = (0, o.ing)(r, "update()");
                        if (n) throw Error(n.message);
                        let s = (0, o.rFo)(i.requiredNamespaces, r, "update()");
                        if (s) throw Error(s.message)
                    }, this.isValidExtend = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `extend() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t)
                    }, this.isValidRequest = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `request() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            request: r,
                            chainId: i,
                            expiry: n
                        } = e;
                        this.checkRecentlyDeleted(t), await this.isValidSessionTopic(t);
                        let {
                            namespaces: s
                        } = this.client.session.get(t);
                        if (!(0, o.p8o)(s, i)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `request() chainId: ${i}`);
                            throw Error(e)
                        }
                        if (!(0, o.hHR)(r)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `request() ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                        if (!(0, o.alS)(s, i, r.method)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `request() method: ${r.method}`);
                            throw Error(e)
                        }
                        if (n && !(0, o.ONw)(n, iy)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `request() expiry: ${n}. Expiry must be a number (in seconds) between ${iy.min} and ${iy.max}`);
                            throw Error(e)
                        }
                    }, this.isValidRespond = async e => {
                        var t;
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `respond() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: r,
                            response: i
                        } = e;
                        try {
                            await this.isValidSessionTopic(r)
                        } catch (r) {
                            throw null != (t = e ? .response) && t.id && this.cleanupAfterResponse(e), r
                        }
                        if (!(0, o.JTI)(i)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i)}`);
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.isValidEmit = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `emit() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            event: r,
                            chainId: i
                        } = e;
                        await this.isValidSessionTopic(t);
                        let {
                            namespaces: n
                        } = this.client.session.get(t);
                        if (!(0, o.p8o)(n, i)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `emit() chainId: ${i}`);
                            throw Error(e)
                        }
                        if (!(0, o.nfW)(r)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                        if (!(0, o.B95)(n, i, r.name)) {
                            let {
                                message: e
                            } = (0, o.kCb)("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidDisconnect = async e => {
                        if (!(0, o.EJd)(e)) {
                            let {
                                message: t
                            } = (0, o.kCb)("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.isValidAuthenticate = e => {
                        let {
                            chains: t,
                            uri: r,
                            domain: i,
                            nonce: n
                        } = e;
                        if (!Array.isArray(t) || 0 === t.length) throw Error("chains is required and must be a non-empty array");
                        if (!(0, o.M_r)(r, !1)) throw Error("uri is required parameter");
                        if (!(0, o.M_r)(i, !1)) throw Error("domain is required parameter");
                        if (!(0, o.M_r)(n, !1)) throw Error("nonce is required parameter");
                        if ([...new Set(t.map(e => (0, o.DQe)(e).namespace))].length > 1) throw Error("Multi-namespace requests are not supported. Please request single namespace only.");
                        let {
                            namespace: s
                        } = (0, o.DQe)(t[0]);
                        if ("eip155" !== s) throw Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.")
                    }, this.getVerifyContext = async (e, t) => {
                        let r = {
                            verified: {
                                verifyUrl: t.verifyUrl || rP,
                                validation: "UNKNOWN",
                                origin: t.url || ""
                            }
                        };
                        try {
                            let i = await this.client.core.verify.resolve({
                                attestationId: e,
                                verifyUrl: t.verifyUrl
                            });
                            i && (r.verified.origin = i.origin, r.verified.isScam = i.isScam, r.verified.validation = i.origin === new URL(t.url).origin ? "VALID" : "INVALID")
                        } catch (e) {
                            this.client.logger.info(e)
                        }
                        return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
                    }, this.validateSessionProps = (e, t) => {
                        Object.values(e).forEach(e => {
                            if (!(0, o.M_r)(e, !1)) {
                                let {
                                    message: r
                                } = (0, o.kCb)("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                                throw Error(r)
                            }
                        })
                    }, this.getPendingAuthRequest = e => {
                        let t = this.client.auth.requests.get(e);
                        return "object" == typeof t ? t : void 0
                    }, this.addToRecentlyDeleted = (e, t) => {
                        if (this.recentlyDeletedMap.set(e, t), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
                            let e = 0,
                                t = this.recentlyDeletedLimit / 2;
                            for (let r of this.recentlyDeletedMap.keys()) {
                                if (e++ >= t) break;
                                this.recentlyDeletedMap.delete(r)
                            }
                        }
                    }, this.checkRecentlyDeleted = e => {
                        let t = this.recentlyDeletedMap.get(e);
                        if (t) {
                            let {
                                message: r
                            } = (0, o.kCb)("MISSING_OR_INVALID", `Record was recently deleted - ${t}: ${e}`);
                            throw Error(r)
                        }
                    }
                }
                async isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = (0, o.kCb)("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                    await this.client.core.relayer.confirmOnlineStateOrThrow()
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(rv.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e, {
                            publicKey: i
                        } = this.client.auth.authKeys.keys.includes(iw) ? this.client.auth.authKeys.get(iw) : {
                            responseTopic: void 0,
                            publicKey: void 0
                        }, n = await this.client.core.crypto.decode(t, r, {
                            receiverPublicKey: i
                        });
                        try {
                            e0(n) ? (this.client.core.history.set(t, n), this.onRelayEventRequest({
                                topic: t,
                                payload: n
                            })) : e1(n) ? (await this.client.core.history.resolve(n), await this.onRelayEventResponse({
                                topic: t,
                                payload: n
                            }), this.client.core.history.delete(t, n.id)) : this.onRelayEventUnknownPayload({
                                topic: t,
                                payload: n
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(rS.expired, async e => {
                        let {
                            topic: t,
                            id: r
                        } = (0, o.iPz)(e.target);
                        return r && this.client.pendingRequest.keys.includes(r) ? await this.deletePendingSessionRequest(r, (0, o.kCb)("EXPIRED"), !0) : r && this.client.auth.requests.keys.includes(r) ? await this.deletePendingAuthRequest(r, (0, o.kCb)("EXPIRED"), !0) : void(t ? this.client.session.keys.includes(t) && (await this.deleteSession({
                            topic: t,
                            expirerHasDeleted: !0
                        }), this.client.events.emit("session_expire", {
                            topic: t
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        })))
                    })
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on(rD.create, e => this.onPairingCreated(e)), this.client.core.pairing.events.on(rD.delete, e => {
                        this.addToRecentlyDeleted(e.topic, "pairing")
                    })
                }
                isValidPairingTopic(e) {
                    if (!(0, o.M_r)(e, !1)) {
                        let {
                            message: t
                        } = (0, o.kCb)("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0, o.BwD)(this.client.core.pairing.pairings.get(e).expiry)) {
                        let {
                            message: t
                        } = (0, o.kCb)("EXPIRED", `pairing topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionTopic(e) {
                    if (!(0, o.M_r)(e, !1)) {
                        let {
                            message: t
                        } = (0, o.kCb)("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0, o.BwD)(this.client.session.get(e).expiry)) {
                        await this.deleteSession({
                            topic: e
                        });
                        let {
                            message: t
                        } = (0, o.kCb)("EXPIRED", `session topic: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.core.crypto.keychain.has(e)) {
                        let {
                            message: t
                        } = (0, o.kCb)("MISSING_OR_INVALID", `session topic does not exist in keychain: ${e}`);
                        throw await this.deleteSession({
                            topic: e
                        }), Error(t)
                    }
                }
                async isValidSessionOrPairingTopic(e) {
                    if (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
                    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
                    else if ((0, o.M_r)(e, !1)) {
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    } else {
                        let {
                            message: t
                        } = (0, o.kCb)("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidProposalId(e) {
                    if (!(0, o.Q01)(e)) {
                        let {
                            message: t
                        } = (0, o.kCb)("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.proposal.keys.includes(e)) {
                        let {
                            message: t
                        } = (0, o.kCb)("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if ((0, o.BwD)(this.client.proposal.get(e).expiryTimestamp)) {
                        await this.deleteProposal(e);
                        let {
                            message: t
                        } = (0, o.kCb)("EXPIRED", `proposal id: ${e}`);
                        throw Error(t)
                    }
                }
            }
            class iR extends r6 {
                constructor(e, t) {
                    super(e, t, "proposal", ih), this.core = e, this.logger = t
                }
            }
            class iT extends r6 {
                constructor(e, t) {
                    super(e, t, "session", ih), this.core = e, this.logger = t
                }
            }
            class iN extends r6 {
                constructor(e, t) {
                    super(e, t, "request", ih, e => e.id), this.core = e, this.logger = t
                }
            }
            class ik extends r6 {
                constructor(e, t) {
                    super(e, t, "authKeys", ib, () => iw), this.core = e, this.logger = t
                }
            }
            class ij extends r6 {
                constructor(e, t) {
                    super(e, t, "pairingTopics", ib), this.core = e, this.logger = t
                }
            }
            class iL extends r6 {
                constructor(e, t) {
                    super(e, t, "requests", ib, e => e.id), this.core = e, this.logger = t
                }
            }
            class iM {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.authKeys = new ik(this.core, this.logger), this.pairingTopics = new ij(this.core, this.logger), this.requests = new iL(this.core, this.logger)
                }
                async init() {
                    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init()
                }
            }
            class iq extends e_ {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = iu.name, this.events = new n.EventEmitter, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
                        try {
                            return await this.engine.connect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.pair = async e => {
                        try {
                            return await this.engine.pair(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.approve = async e => {
                        try {
                            return await this.engine.approve(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.reject = async e => {
                        try {
                            return await this.engine.reject(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.update = async e => {
                        try {
                            return await this.engine.update(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.extend = async e => {
                        try {
                            return await this.engine.extend(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.request = async e => {
                        try {
                            return await this.engine.request(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.respond = async e => {
                        try {
                            return await this.engine.respond(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.ping = async e => {
                        try {
                            return await this.engine.ping(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.emit = async e => {
                        try {
                            return await this.engine.emit(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.disconnect = async e => {
                        try {
                            return await this.engine.disconnect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.find = e => {
                        try {
                            return this.engine.find(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.authenticate = async e => {
                        try {
                            return await this.engine.authenticate(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.formatAuthMessage = e => {
                        try {
                            return this.engine.formatAuthMessage(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.approveSessionAuthenticate = async e => {
                        try {
                            return await this.engine.approveSessionAuthenticate(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.rejectSessionAuthenticate = async e => {
                        try {
                            return await this.engine.rejectSessionAuthenticate(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.name = e ? .name || iu.name, this.metadata = e ? .metadata || (0, o.DaH)(), this.signConfig = e ? .signConfig;
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : K()(ec({
                        level: e ? .logger || iu.logger
                    }));
                    this.core = e ? .core || new ia(e), this.logger = eu(t, this.name), this.session = new iT(this.core, this.logger), this.proposal = new iR(this.core, this.logger), this.pendingRequest = new iN(this.core, this.logger), this.engine = new iA(this), this.auth = new iM(this.core, this.logger)
                }
                static async init(e) {
                    let t = new iq(e);
                    return await t.initialize(), t
                }
                get context() {
                    return eh(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), await this.auth.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (e) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
                    }
                }
            }
            var iU = r(46350),
                iz = r.n(iU),
                i$ = Object.defineProperty,
                iH = Object.defineProperties,
                iF = Object.getOwnPropertyDescriptors,
                iB = Object.getOwnPropertySymbols,
                iK = Object.prototype.hasOwnProperty,
                iV = Object.prototype.propertyIsEnumerable,
                iW = (e, t, r) => t in e ? i$(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                iG = (e, t) => {
                    for (var r in t || (t = {})) iK.call(t, r) && iW(e, r, t[r]);
                    if (iB)
                        for (var r of iB(t)) iV.call(t, r) && iW(e, r, t[r]);
                    return e
                },
                iY = (e, t) => iH(e, iF(t));
            let iJ = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class iQ {
                constructor(e, t = !1) {
                    if (this.url = e, this.disableProviderPing = t, this.events = new n.EventEmitter, this.isAvailable = !1, this.registering = !1, !eQ(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    this.url = e, this.disableProviderPing = t
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    if (!this.isAvailable) throw Error("Connection already closed");
                    this.onClose()
                }
                async send(e) {
                    this.isAvailable || await this.register();
                    try {
                        let t = O(e),
                            r = await (await iz()(this.url, iY(iG({}, iJ), {
                                body: t
                            }))).json();
                        this.onPayload({
                            data: r
                        })
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                async register(e = this.url) {
                    if (!eQ(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), typeof this.isAvailable > "u") return t(Error("HTTP connection is missing or invalid"));
                                e()
                            })
                        })
                    }
                    this.url = e, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            let t = O({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await iz()(e, iY(iG({}, iJ), {
                                body: t
                            }))
                        }
                        this.onOpen()
                    } catch (t) {
                        let e = this.parseError(t);
                        throw this.events.emit("register_error", e), this.onClose(), e
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(e) {
                    if (typeof e.data > "u") return;
                    let t = "string" == typeof e.data ? P(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        i = r.message || r.toString(),
                        n = eV(e, i);
                    this.events.emit("payload", n)
                }
                parseError(e, t = this.url) {
                    return ez(e, t, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            let iX = "error",
                iZ = "wc@2:universal_provider:",
                i0 = {
                    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
                };
            var i1 = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                i5 = {
                    exports: {}
                };
            /**
             * @license
             * Lodash <https://lodash.com/>
             * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             */
            ! function(e, t) {
                (function() {
                    var r, i = "Expected a function",
                        n = "__lodash_hash_undefined__",
                        s = "__lodash_placeholder__",
                        o = 1 / 0,
                        a = 0 / 0,
                        c = [
                            ["ary", 128],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", 32],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        h = "[object Arguments]",
                        u = "[object Array]",
                        l = "[object Boolean]",
                        p = "[object Date]",
                        f = "[object Error]",
                        d = "[object Function]",
                        g = "[object GeneratorFunction]",
                        y = "[object Map]",
                        v = "[object Number]",
                        m = "[object Object]",
                        b = "[object Promise]",
                        w = "[object RegExp]",
                        _ = "[object Set]",
                        E = "[object String]",
                        D = "[object Symbol]",
                        I = "[object WeakMap]",
                        S = "[object ArrayBuffer]",
                        C = "[object DataView]",
                        P = "[object Float32Array]",
                        O = "[object Float64Array]",
                        x = "[object Int8Array]",
                        A = "[object Int16Array]",
                        R = "[object Int32Array]",
                        T = "[object Uint8Array]",
                        N = "[object Uint8ClampedArray]",
                        k = "[object Uint16Array]",
                        j = "[object Uint32Array]",
                        L = /\b__p \+= '';/g,
                        M = /\b(__p \+=) '' \+/g,
                        q = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        U = /&(?:amp|lt|gt|quot|#39);/g,
                        z = /[&<>"']/g,
                        $ = RegExp(U.source),
                        H = RegExp(z.source),
                        F = /<%-([\s\S]+?)%>/g,
                        B = /<%([\s\S]+?)%>/g,
                        K = /<%=([\s\S]+?)%>/g,
                        V = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        W = /^\w*$/,
                        G = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        Y = /[\\^$.*+?()[\]{}|]/g,
                        J = RegExp(Y.source),
                        Q = /^\s+/,
                        X = /\s/,
                        Z = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        et = /,? & /,
                        er = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        ei = /[()=,{}\[\]\/\s]/,
                        en = /\\(\\)?/g,
                        es = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        eo = /\w*$/,
                        ea = /^[-+]0x[0-9a-f]+$/i,
                        ec = /^0b[01]+$/i,
                        eh = /^\[object .+?Constructor\]$/,
                        eu = /^0o[0-7]+$/i,
                        el = /^(?:0|[1-9]\d*)$/,
                        ep = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        ef = /($^)/,
                        ed = /['\n\r\u2028\u2029\\]/g,
                        eg = "\ud800-\udfff",
                        ey = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        ev = "\\u2700-\\u27bf",
                        em = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        eb = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        ew = "\\ufe0e\\ufe0f",
                        e_ = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        eE = "['’]",
                        eD = "[" + e_ + "]",
                        eI = "[" + ey + "]",
                        eS = "[" + em + "]",
                        eC = "[^" + eg + e_ + "\\d+" + ev + em + eb + "]",
                        eP = "\ud83c[\udffb-\udfff]",
                        eO = "[^" + eg + "]",
                        ex = "(?:\ud83c[\udde6-\uddff]){2}",
                        eA = "[\ud800-\udbff][\udc00-\udfff]",
                        eR = "[" + eb + "]",
                        eT = "\\u200d",
                        eN = "(?:" + eS + "|" + eC + ")",
                        ek = "(?:" + eE + "(?:d|ll|m|re|s|t|ve))?",
                        ej = "(?:" + eE + "(?:D|LL|M|RE|S|T|VE))?",
                        eL = "(?:" + eI + "|" + eP + ")?",
                        eM = "[" + ew + "]?",
                        eq = "(?:" + eT + "(?:" + [eO, ex, eA].join("|") + ")" + eM + eL + ")*",
                        eU = eM + eL + eq,
                        ez = "(?:" + ["[" + ev + "]", ex, eA].join("|") + ")" + eU,
                        e$ = "(?:" + [eO + eI + "?", eI, ex, eA, "[" + eg + "]"].join("|") + ")",
                        eH = RegExp(eE, "g"),
                        eF = RegExp(eI, "g"),
                        eB = RegExp(eP + "(?=" + eP + ")|" + e$ + eU, "g"),
                        eK = RegExp([eR + "?" + eS + "+" + ek + "(?=" + [eD, eR, "$"].join("|") + ")", "(?:" + eR + "|" + eC + ")+" + ej + "(?=" + [eD, eR + eN, "$"].join("|") + ")", eR + "?" + eN + "+" + ek, eR + "+" + ej, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", ez].join("|"), "g"),
                        eV = RegExp("[" + eT + eg + ey + ew + "]"),
                        eW = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        eG = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        eY = -1,
                        eJ = {};
                    eJ[P] = eJ[O] = eJ[x] = eJ[A] = eJ[R] = eJ[T] = eJ[N] = eJ[k] = eJ[j] = !0, eJ[h] = eJ[u] = eJ[S] = eJ[l] = eJ[C] = eJ[p] = eJ[f] = eJ[d] = eJ[y] = eJ[v] = eJ[m] = eJ[w] = eJ[_] = eJ[E] = eJ[I] = !1;
                    var eQ = {};
                    eQ[h] = eQ[u] = eQ[S] = eQ[C] = eQ[l] = eQ[p] = eQ[P] = eQ[O] = eQ[x] = eQ[A] = eQ[R] = eQ[y] = eQ[v] = eQ[m] = eQ[w] = eQ[_] = eQ[E] = eQ[D] = eQ[T] = eQ[N] = eQ[k] = eQ[j] = !0, eQ[f] = eQ[d] = eQ[I] = !1;
                    var eX = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        eZ = parseFloat,
                        e0 = parseInt,
                        e1 = "object" == typeof i1 && i1 && i1.Object === Object && i1,
                        e5 = "object" == typeof self && self && self.Object === Object && self,
                        e3 = e1 || e5 || Function("return this")(),
                        e6 = t && !t.nodeType && t,
                        e2 = e6 && e && !e.nodeType && e,
                        e8 = e2 && e2.exports === e6,
                        e4 = e8 && e1.process,
                        e9 = function() {
                            try {
                                return e2 && e2.require && e2.require("util").types || e4 && e4.binding && e4.binding("util")
                            } catch {}
                        }(),
                        e7 = e9 && e9.isArrayBuffer,
                        te = e9 && e9.isDate,
                        tt = e9 && e9.isMap,
                        tr = e9 && e9.isRegExp,
                        ti = e9 && e9.isSet,
                        tn = e9 && e9.isTypedArray;

                    function ts(e, t, r) {
                        switch (r.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, r[0]);
                            case 2:
                                return e.call(t, r[0], r[1]);
                            case 3:
                                return e.call(t, r[0], r[1], r[2])
                        }
                        return e.apply(t, r)
                    }

                    function to(e, t, r, i) {
                        for (var n = -1, s = null == e ? 0 : e.length; ++n < s;) {
                            var o = e[n];
                            t(i, o, r(o), e)
                        }
                        return i
                    }

                    function ta(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i && !1 !== t(e[r], r, e););
                        return e
                    }

                    function tc(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (!t(e[r], r, e)) return !1;
                        return !0
                    }

                    function th(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }

                    function tu(e, t) {
                        return !!(null == e ? 0 : e.length) && tw(e, t, 0) > -1
                    }

                    function tl(e, t, r) {
                        for (var i = -1, n = null == e ? 0 : e.length; ++i < n;)
                            if (r(t, e[i])) return !0;
                        return !1
                    }

                    function tp(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = Array(i); ++r < i;) n[r] = t(e[r], r, e);
                        return n
                    }

                    function tf(e, t) {
                        for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                        return e
                    }

                    function td(e, t, r, i) {
                        var n = -1,
                            s = null == e ? 0 : e.length;
                        for (i && s && (r = e[++n]); ++n < s;) r = t(r, e[n], n, e);
                        return r
                    }

                    function tg(e, t, r, i) {
                        var n = null == e ? 0 : e.length;
                        for (i && n && (r = e[--n]); n--;) r = t(r, e[n], n, e);
                        return r
                    }

                    function ty(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (t(e[r], r, e)) return !0;
                        return !1
                    }
                    var tv = tI("length");

                    function tm(e, t, r) {
                        var i;
                        return r(e, function(e, r, n) {
                            if (t(e, r, n)) return i = r, !1
                        }), i
                    }

                    function tb(e, t, r, i) {
                        for (var n = e.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n;)
                            if (t(e[s], s, e)) return s;
                        return -1
                    }

                    function tw(e, t, r) {
                        return t == t ? function(e, t, r) {
                            for (var i = r - 1, n = e.length; ++i < n;)
                                if (e[i] === t) return i;
                            return -1
                        }(e, t, r) : tb(e, tE, r)
                    }

                    function t_(e, t, r, i) {
                        for (var n = r - 1, s = e.length; ++n < s;)
                            if (i(e[n], t)) return n;
                        return -1
                    }

                    function tE(e) {
                        return e != e
                    }

                    function tD(e, t) {
                        var r = null == e ? 0 : e.length;
                        return r ? tP(e, t) / r : a
                    }

                    function tI(e) {
                        return function(t) {
                            return null == t ? r : t[e]
                        }
                    }

                    function tS(e) {
                        return function(t) {
                            return null == e ? r : e[t]
                        }
                    }

                    function tC(e, t, r, i, n) {
                        return n(e, function(e, n, s) {
                            r = i ? (i = !1, e) : t(r, e, n, s)
                        }), r
                    }

                    function tP(e, t) {
                        for (var i, n = -1, s = e.length; ++n < s;) {
                            var o = t(e[n]);
                            o !== r && (i = i === r ? o : i + o)
                        }
                        return i
                    }

                    function tO(e, t) {
                        for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                        return i
                    }

                    function tx(e) {
                        return e && e.slice(0, tK(e) + 1).replace(Q, "")
                    }

                    function tA(e) {
                        return function(t) {
                            return e(t)
                        }
                    }

                    function tR(e, t) {
                        return tp(t, function(t) {
                            return e[t]
                        })
                    }

                    function tT(e, t) {
                        return e.has(t)
                    }

                    function tN(e, t) {
                        for (var r = -1, i = e.length; ++r < i && tw(t, e[r], 0) > -1;);
                        return r
                    }

                    function tk(e, t) {
                        for (var r = e.length; r-- && tw(t, e[r], 0) > -1;);
                        return r
                    }
                    var tj = tS({
                            À: "A",
                            Á: "A",
                            Â: "A",
                            Ã: "A",
                            Ä: "A",
                            Å: "A",
                            à: "a",
                            á: "a",
                            â: "a",
                            ã: "a",
                            ä: "a",
                            å: "a",
                            Ç: "C",
                            ç: "c",
                            Ð: "D",
                            ð: "d",
                            È: "E",
                            É: "E",
                            Ê: "E",
                            Ë: "E",
                            è: "e",
                            é: "e",
                            ê: "e",
                            ë: "e",
                            Ì: "I",
                            Í: "I",
                            Î: "I",
                            Ï: "I",
                            ì: "i",
                            í: "i",
                            î: "i",
                            ï: "i",
                            Ñ: "N",
                            ñ: "n",
                            Ò: "O",
                            Ó: "O",
                            Ô: "O",
                            Õ: "O",
                            Ö: "O",
                            Ø: "O",
                            ò: "o",
                            ó: "o",
                            ô: "o",
                            õ: "o",
                            ö: "o",
                            ø: "o",
                            Ù: "U",
                            Ú: "U",
                            Û: "U",
                            Ü: "U",
                            ù: "u",
                            ú: "u",
                            û: "u",
                            ü: "u",
                            Ý: "Y",
                            ý: "y",
                            ÿ: "y",
                            Æ: "Ae",
                            æ: "ae",
                            Þ: "Th",
                            þ: "th",
                            ß: "ss",
                            Ā: "A",
                            Ă: "A",
                            Ą: "A",
                            ā: "a",
                            ă: "a",
                            ą: "a",
                            Ć: "C",
                            Ĉ: "C",
                            Ċ: "C",
                            Č: "C",
                            ć: "c",
                            ĉ: "c",
                            ċ: "c",
                            č: "c",
                            Ď: "D",
                            Đ: "D",
                            ď: "d",
                            đ: "d",
                            Ē: "E",
                            Ĕ: "E",
                            Ė: "E",
                            Ę: "E",
                            Ě: "E",
                            ē: "e",
                            ĕ: "e",
                            ė: "e",
                            ę: "e",
                            ě: "e",
                            Ĝ: "G",
                            Ğ: "G",
                            Ġ: "G",
                            Ģ: "G",
                            ĝ: "g",
                            ğ: "g",
                            ġ: "g",
                            ģ: "g",
                            Ĥ: "H",
                            Ħ: "H",
                            ĥ: "h",
                            ħ: "h",
                            Ĩ: "I",
                            Ī: "I",
                            Ĭ: "I",
                            Į: "I",
                            İ: "I",
                            ĩ: "i",
                            ī: "i",
                            ĭ: "i",
                            į: "i",
                            ı: "i",
                            Ĵ: "J",
                            ĵ: "j",
                            Ķ: "K",
                            ķ: "k",
                            ĸ: "k",
                            Ĺ: "L",
                            Ļ: "L",
                            Ľ: "L",
                            Ŀ: "L",
                            Ł: "L",
                            ĺ: "l",
                            ļ: "l",
                            ľ: "l",
                            ŀ: "l",
                            ł: "l",
                            Ń: "N",
                            Ņ: "N",
                            Ň: "N",
                            Ŋ: "N",
                            ń: "n",
                            ņ: "n",
                            ň: "n",
                            ŋ: "n",
                            Ō: "O",
                            Ŏ: "O",
                            Ő: "O",
                            ō: "o",
                            ŏ: "o",
                            ő: "o",
                            Ŕ: "R",
                            Ŗ: "R",
                            Ř: "R",
                            ŕ: "r",
                            ŗ: "r",
                            ř: "r",
                            Ś: "S",
                            Ŝ: "S",
                            Ş: "S",
                            Š: "S",
                            ś: "s",
                            ŝ: "s",
                            ş: "s",
                            š: "s",
                            Ţ: "T",
                            Ť: "T",
                            Ŧ: "T",
                            ţ: "t",
                            ť: "t",
                            ŧ: "t",
                            Ũ: "U",
                            Ū: "U",
                            Ŭ: "U",
                            Ů: "U",
                            Ű: "U",
                            Ų: "U",
                            ũ: "u",
                            ū: "u",
                            ŭ: "u",
                            ů: "u",
                            ű: "u",
                            ų: "u",
                            Ŵ: "W",
                            ŵ: "w",
                            Ŷ: "Y",
                            ŷ: "y",
                            Ÿ: "Y",
                            Ź: "Z",
                            Ż: "Z",
                            Ž: "Z",
                            ź: "z",
                            ż: "z",
                            ž: "z",
                            Ĳ: "IJ",
                            ĳ: "ij",
                            Œ: "Oe",
                            œ: "oe",
                            ŉ: "'n",
                            ſ: "s"
                        }),
                        tL = tS({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function tM(e) {
                        return "\\" + eX[e]
                    }

                    function tq(e) {
                        return eV.test(e)
                    }

                    function tU(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e, i) {
                            r[++t] = [i, e]
                        }), r
                    }

                    function tz(e, t) {
                        return function(r) {
                            return e(t(r))
                        }
                    }

                    function t$(e, t) {
                        for (var r = -1, i = e.length, n = 0, o = []; ++r < i;) {
                            var a = e[r];
                            (a === t || a === s) && (e[r] = s, o[n++] = r)
                        }
                        return o
                    }

                    function tH(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e) {
                            r[++t] = e
                        }), r
                    }

                    function tF(e) {
                        return tq(e) ? function(e) {
                            for (var t = eB.lastIndex = 0; eB.test(e);) ++t;
                            return t
                        }(e) : tv(e)
                    }

                    function tB(e) {
                        return tq(e) ? e.match(eB) || [] : e.split("")
                    }

                    function tK(e) {
                        for (var t = e.length; t-- && X.test(e.charAt(t)););
                        return t
                    }
                    var tV = tS({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        tW = function e(t) {
                            var X, eg, ey, ev, em = (t = null == t ? e3 : tW.defaults(e3.Object(), t, tW.pick(e3, eG))).Array,
                                eb = t.Date,
                                ew = t.Error,
                                e_ = t.Function,
                                eE = t.Math,
                                eD = t.Object,
                                eI = t.RegExp,
                                eS = t.String,
                                eC = t.TypeError,
                                eP = em.prototype,
                                eO = e_.prototype,
                                ex = eD.prototype,
                                eA = t["__core-js_shared__"],
                                eR = eO.toString,
                                eT = ex.hasOwnProperty,
                                eN = 0,
                                ek = (X = /[^.]+$/.exec(eA && eA.keys && eA.keys.IE_PROTO || "")) ? "Symbol(src)_1." + X : "",
                                ej = ex.toString,
                                eL = eR.call(eD),
                                eM = e3._,
                                eq = eI("^" + eR.call(eT).replace(Y, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                eU = e8 ? t.Buffer : r,
                                ez = t.Symbol,
                                e$ = t.Uint8Array,
                                eB = eU ? eU.allocUnsafe : r,
                                eV = tz(eD.getPrototypeOf, eD),
                                eX = eD.create,
                                e1 = ex.propertyIsEnumerable,
                                e5 = eP.splice,
                                e6 = ez ? ez.isConcatSpreadable : r,
                                e2 = ez ? ez.iterator : r,
                                e4 = ez ? ez.toStringTag : r,
                                e9 = function() {
                                    try {
                                        var e = nd(eD, "defineProperty");
                                        return e({}, "", {}), e
                                    } catch {}
                                }(),
                                tv = t.clearTimeout !== e3.clearTimeout && t.clearTimeout,
                                tS = eb && eb.now !== e3.Date.now && eb.now,
                                tG = t.setTimeout !== e3.setTimeout && t.setTimeout,
                                tY = eE.ceil,
                                tJ = eE.floor,
                                tQ = eD.getOwnPropertySymbols,
                                tX = eU ? eU.isBuffer : r,
                                tZ = t.isFinite,
                                t0 = eP.join,
                                t1 = tz(eD.keys, eD),
                                t5 = eE.max,
                                t3 = eE.min,
                                t6 = eb.now,
                                t2 = t.parseInt,
                                t8 = eE.random,
                                t4 = eP.reverse,
                                t9 = nd(t, "DataView"),
                                t7 = nd(t, "Map"),
                                re = nd(t, "Promise"),
                                rt = nd(t, "Set"),
                                rr = nd(t, "WeakMap"),
                                ri = nd(eD, "create"),
                                rn = rr && new rr,
                                rs = {},
                                ro = nU(t9),
                                ra = nU(t7),
                                rc = nU(re),
                                rh = nU(rt),
                                ru = nU(rr),
                                rl = ez ? ez.prototype : r,
                                rp = rl ? rl.valueOf : r,
                                rf = rl ? rl.toString : r;

                            function rd(e) {
                                if (sV(e) && !sj(e) && !(e instanceof rm)) {
                                    if (e instanceof rv) return e;
                                    if (eT.call(e, "__wrapped__")) return nz(e)
                                }
                                return new rv(e)
                            }
                            var rg = function() {
                                function e() {}
                                return function(t) {
                                    if (!sK(t)) return {};
                                    if (eX) return eX(t);
                                    e.prototype = t;
                                    var i = new e;
                                    return e.prototype = r, i
                                }
                            }();

                            function ry() {}

                            function rv(e, t) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r
                            }

                            function rm(e) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                            }

                            function rb(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rw(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function r_(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rE(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.__data__ = new r_; ++t < r;) this.add(e[t])
                            }

                            function rD(e) {
                                var t = this.__data__ = new rw(e);
                                this.size = t.size
                            }

                            function rI(e, t) {
                                var r = sj(e),
                                    i = !r && sk(e),
                                    n = !r && !i && sU(e),
                                    s = !r && !i && !n && s0(e),
                                    o = r || i || n || s,
                                    a = o ? tO(e.length, eS) : [],
                                    c = a.length;
                                for (var h in e)(t || eT.call(e, h)) && !(o && ("length" == h || n && ("offset" == h || "parent" == h) || s && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || n_(h, c))) && a.push(h);
                                return a
                            }

                            function rS(e) {
                                var t = e.length;
                                return t ? e[iu(0, t - 1)] : r
                            }

                            function rC(e, t, i) {
                                (i === r || sR(e[t], i)) && (i !== r || t in e) || rR(e, t, i)
                            }

                            function rP(e, t, i) {
                                var n = e[t];
                                eT.call(e, t) && sR(n, i) && (i !== r || t in e) || rR(e, t, i)
                            }

                            function rO(e, t) {
                                for (var r = e.length; r--;)
                                    if (sR(e[r][0], t)) return r;
                                return -1
                            }

                            function rx(e, t, r, i) {
                                return rq(e, function(e, n, s) {
                                    t(i, e, r(e), s)
                                }), i
                            }

                            function rA(e, t) {
                                return e && iF(t, op(t), e)
                            }

                            function rR(e, t, r) {
                                "__proto__" == t && e9 ? e9(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: r,
                                    writable: !0
                                }) : e[t] = r
                            }

                            function rT(e, t) {
                                for (var i = -1, n = t.length, s = em(n), o = null == e; ++i < n;) s[i] = o ? r : oa(e, t[i]);
                                return s
                            }

                            function rN(e, t, i) {
                                return e == e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e
                            }

                            function rk(e, t, i, n, s, o) {
                                var a, c = 1 & t,
                                    u = 2 & t,
                                    f = 4 & t;
                                if (i && (a = s ? i(e, n, s, o) : i(e)), a !== r) return a;
                                if (!sK(e)) return e;
                                var b = sj(e);
                                if (b) {
                                    if (I = e.length, L = new e.constructor(I), I && "string" == typeof e[0] && eT.call(e, "index") && (L.index = e.index, L.input = e.input), a = L, !c) return iH(e, a)
                                } else {
                                    var I, L, M, q, U, z = nv(e),
                                        $ = z == d || z == g;
                                    if (sU(e)) return iL(e, c);
                                    if (z == m || z == h || $ && !s) {
                                        if (a = u || $ ? {} : nb(e), !c) return u ? (M = (U = a) && iF(e, of (e), U), iF(e, ny(e), M)) : (q = rA(a, e), iF(e, ng(e), q))
                                    } else {
                                        if (!eQ[z]) return s ? e : {};
                                        a = function(e, t, r) {
                                            var i, n, s = e.constructor;
                                            switch (t) {
                                                case S:
                                                    return iM(e);
                                                case l:
                                                case p:
                                                    return new s(+e);
                                                case C:
                                                    return i = r ? iM(e.buffer) : e.buffer, new e.constructor(i, e.byteOffset, e.byteLength);
                                                case P:
                                                case O:
                                                case x:
                                                case A:
                                                case R:
                                                case T:
                                                case N:
                                                case k:
                                                case j:
                                                    return iq(e, r);
                                                case y:
                                                    return new s;
                                                case v:
                                                case E:
                                                    return new s(e);
                                                case w:
                                                    return (n = new e.constructor(e.source, eo.exec(e))).lastIndex = e.lastIndex, n;
                                                case _:
                                                    return new s;
                                                case D:
                                                    return rp ? eD(rp.call(e)) : {}
                                            }
                                        }(e, z, c)
                                    }
                                }
                                o || (o = new rD);
                                var H = o.get(e);
                                if (H) return H;
                                o.set(e, a), sQ(e) ? e.forEach(function(r) {
                                    a.add(rk(r, t, i, r, e, o))
                                }) : sW(e) && e.forEach(function(r, n) {
                                    a.set(n, rk(r, t, i, n, e, o))
                                });
                                var F = f ? u ? na : no : u ? of : op,
                                    B = b ? r : F(e);
                                return ta(B || e, function(r, n) {
                                    B && (r = e[n = r]), rP(a, n, rk(r, t, i, n, e, o))
                                }), a
                            }

                            function rj(e, t, i) {
                                var n = i.length;
                                if (null == e) return !n;
                                for (e = eD(e); n--;) {
                                    var s = i[n],
                                        o = t[s],
                                        a = e[s];
                                    if (a === r && !(s in e) || !o(a)) return !1
                                }
                                return !0
                            }

                            function rL(e, t, n) {
                                if ("function" != typeof e) throw new eC(i);
                                return nT(function() {
                                    e.apply(r, n)
                                }, t)
                            }

                            function rM(e, t, r, i) {
                                var n = -1,
                                    s = tu,
                                    o = !0,
                                    a = e.length,
                                    c = [],
                                    h = t.length;
                                if (!a) return c;
                                r && (t = tp(t, tA(r))), i ? (s = tl, o = !1) : t.length >= 200 && (s = tT, o = !1, t = new rE(t));
                                e: for (; ++n < a;) {
                                    var u = e[n],
                                        l = null == r ? u : r(u);
                                    if (u = i || 0 !== u ? u : 0, o && l == l) {
                                        for (var p = h; p--;)
                                            if (t[p] === l) continue e;
                                        c.push(u)
                                    } else s(t, l, i) || c.push(u)
                                }
                                return c
                            }
                            rd.templateSettings = {
                                escape: F,
                                evaluate: B,
                                interpolate: K,
                                variable: "",
                                imports: {
                                    _: rd
                                }
                            }, rd.prototype = ry.prototype, rd.prototype.constructor = rd, rv.prototype = rg(ry.prototype), rv.prototype.constructor = rv, rm.prototype = rg(ry.prototype), rm.prototype.constructor = rm, rb.prototype.clear = function() {
                                this.__data__ = ri ? ri(null) : {}, this.size = 0
                            }, rb.prototype.delete = function(e) {
                                var t = this.has(e) && delete this.__data__[e];
                                return this.size -= t ? 1 : 0, t
                            }, rb.prototype.get = function(e) {
                                var t = this.__data__;
                                if (ri) {
                                    var i = t[e];
                                    return i === n ? r : i
                                }
                                return eT.call(t, e) ? t[e] : r
                            }, rb.prototype.has = function(e) {
                                var t = this.__data__;
                                return ri ? t[e] !== r : eT.call(t, e)
                            }, rb.prototype.set = function(e, t) {
                                var i = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, i[e] = ri && t === r ? n : t, this
                            }, rw.prototype.clear = function() {
                                this.__data__ = [], this.size = 0
                            }, rw.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = rO(t, e);
                                return !(r < 0) && (r == t.length - 1 ? t.pop() : e5.call(t, r, 1), --this.size, !0)
                            }, rw.prototype.get = function(e) {
                                var t = this.__data__,
                                    i = rO(t, e);
                                return i < 0 ? r : t[i][1]
                            }, rw.prototype.has = function(e) {
                                return rO(this.__data__, e) > -1
                            }, rw.prototype.set = function(e, t) {
                                var r = this.__data__,
                                    i = rO(r, e);
                                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
                            }, r_.prototype.clear = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new rb,
                                    map: new(t7 || rw),
                                    string: new rb
                                }
                            }, r_.prototype.delete = function(e) {
                                var t = np(this, e).delete(e);
                                return this.size -= t ? 1 : 0, t
                            }, r_.prototype.get = function(e) {
                                return np(this, e).get(e)
                            }, r_.prototype.has = function(e) {
                                return np(this, e).has(e)
                            }, r_.prototype.set = function(e, t) {
                                var r = np(this, e),
                                    i = r.size;
                                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
                            }, rE.prototype.add = rE.prototype.push = function(e) {
                                return this.__data__.set(e, n), this
                            }, rE.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rD.prototype.clear = function() {
                                this.__data__ = new rw, this.size = 0
                            }, rD.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = t.delete(e);
                                return this.size = t.size, r
                            }, rD.prototype.get = function(e) {
                                return this.__data__.get(e)
                            }, rD.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rD.prototype.set = function(e, t) {
                                var r = this.__data__;
                                if (r instanceof rw) {
                                    var i = r.__data__;
                                    if (!t7 || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                                    r = this.__data__ = new r_(i)
                                }
                                return r.set(e, t), this.size = r.size, this
                            };
                            var rq = iV(rV),
                                rU = iV(rW, !0);

                            function rz(e, t) {
                                var r = !0;
                                return rq(e, function(e, i, n) {
                                    return r = !!t(e, i, n)
                                }), r
                            }

                            function r$(e, t, i) {
                                for (var n = -1, s = e.length; ++n < s;) {
                                    var o = e[n],
                                        a = t(o);
                                    if (null != a && (c === r ? a == a && !sZ(a) : i(a, c))) var c = a,
                                        h = o
                                }
                                return h
                            }

                            function rH(e, t) {
                                var r = [];
                                return rq(e, function(e, i, n) {
                                    t(e, i, n) && r.push(e)
                                }), r
                            }

                            function rF(e, t, r, i, n) {
                                var s = -1,
                                    o = e.length;
                                for (r || (r = nw), n || (n = []); ++s < o;) {
                                    var a = e[s];
                                    t > 0 && r(a) ? t > 1 ? rF(a, t - 1, r, i, n) : tf(n, a) : i || (n[n.length] = a)
                                }
                                return n
                            }
                            var rB = iW(),
                                rK = iW(!0);

                            function rV(e, t) {
                                return e && rB(e, t, op)
                            }

                            function rW(e, t) {
                                return e && rK(e, t, op)
                            }

                            function rG(e, t) {
                                return th(t, function(t) {
                                    return sH(e[t])
                                })
                            }

                            function rY(e, t) {
                                t = iN(t, e);
                                for (var i = 0, n = t.length; null != e && i < n;) e = e[nq(t[i++])];
                                return i && i == n ? e : r
                            }

                            function rJ(e, t, r) {
                                var i = t(e);
                                return sj(e) ? i : tf(i, r(e))
                            }

                            function rQ(e) {
                                return null == e ? e === r ? "[object Undefined]" : "[object Null]" : e4 && e4 in eD(e) ? function(e) {
                                    var t = eT.call(e, e4),
                                        i = e[e4];
                                    try {
                                        e[e4] = r;
                                        var n = !0
                                    } catch {}
                                    var s = ej.call(e);
                                    return n && (t ? e[e4] = i : delete e[e4]), s
                                }(e) : ej.call(e)
                            }

                            function rX(e, t) {
                                return e > t
                            }

                            function rZ(e, t) {
                                return null != e && eT.call(e, t)
                            }

                            function r0(e, t) {
                                return null != e && t in eD(e)
                            }

                            function r1(e, t, i) {
                                for (var n = i ? tl : tu, s = e[0].length, o = e.length, a = o, c = em(o), h = 1 / 0, u = []; a--;) {
                                    var l = e[a];
                                    a && t && (l = tp(l, tA(t))), h = t3(l.length, h), c[a] = !i && (t || s >= 120 && l.length >= 120) ? new rE(a && l) : r
                                }
                                l = e[0];
                                var p = -1,
                                    f = c[0];
                                e: for (; ++p < s && u.length < h;) {
                                    var d = l[p],
                                        g = t ? t(d) : d;
                                    if (d = i || 0 !== d ? d : 0, !(f ? tT(f, g) : n(u, g, i))) {
                                        for (a = o; --a;) {
                                            var y = c[a];
                                            if (!(y ? tT(y, g) : n(e[a], g, i))) continue e
                                        }
                                        f && f.push(g), u.push(d)
                                    }
                                }
                                return u
                            }

                            function r5(e, t, i) {
                                t = iN(t, e);
                                var n = null == (e = nx(e, t)) ? e : e[nq(nQ(t))];
                                return null == n ? r : ts(n, e, i)
                            }

                            function r3(e) {
                                return sV(e) && rQ(e) == h
                            }

                            function r6(e, t, i, n, s) {
                                return e === t || (null != e && null != t && (sV(e) || sV(t)) ? function(e, t, i, n, s, o) {
                                    var a = sj(e),
                                        c = sj(t),
                                        d = a ? u : nv(e),
                                        g = c ? u : nv(t);
                                    d = d == h ? m : d, g = g == h ? m : g;
                                    var b = d == m,
                                        I = g == m,
                                        P = d == g;
                                    if (P && sU(e)) {
                                        if (!sU(t)) return !1;
                                        a = !0, b = !1
                                    }
                                    if (P && !b) return o || (o = new rD), a || s0(e) ? nn(e, t, i, n, s, o) : function(e, t, r, i, n, s, o) {
                                        switch (r) {
                                            case C:
                                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                                e = e.buffer, t = t.buffer;
                                            case S:
                                                return !(e.byteLength != t.byteLength || !s(new e$(e), new e$(t)));
                                            case l:
                                            case p:
                                            case v:
                                                return sR(+e, +t);
                                            case f:
                                                return e.name == t.name && e.message == t.message;
                                            case w:
                                            case E:
                                                return e == t + "";
                                            case y:
                                                var a = tU;
                                            case _:
                                                var c = 1 & i;
                                                if (a || (a = tH), e.size != t.size && !c) break;
                                                var h = o.get(e);
                                                if (h) return h == t;
                                                i |= 2, o.set(e, t);
                                                var u = nn(a(e), a(t), i, n, s, o);
                                                return o.delete(e), u;
                                            case D:
                                                if (rp) return rp.call(e) == rp.call(t)
                                        }
                                        return !1
                                    }(e, t, d, i, n, s, o);
                                    if (!(1 & i)) {
                                        var O = b && eT.call(e, "__wrapped__"),
                                            x = I && eT.call(t, "__wrapped__");
                                        if (O || x) {
                                            var A = O ? e.value() : e,
                                                R = x ? t.value() : t;
                                            return o || (o = new rD), s(A, R, i, n, o)
                                        }
                                    }
                                    return !!P && (o || (o = new rD), function(e, t, i, n, s, o) {
                                        var a = 1 & i,
                                            c = no(e),
                                            h = c.length;
                                        if (h != no(t).length && !a) return !1;
                                        for (var u = h; u--;) {
                                            var l = c[u];
                                            if (!(a ? l in t : eT.call(t, l))) return !1
                                        }
                                        var p = o.get(e),
                                            f = o.get(t);
                                        if (p && f) return p == t && f == e;
                                        var d = !0;
                                        o.set(e, t), o.set(t, e);
                                        for (var g = a; ++u < h;) {
                                            var y = e[l = c[u]],
                                                v = t[l];
                                            if (n) var m = a ? n(v, y, l, t, e, o) : n(y, v, l, e, t, o);
                                            if (!(m === r ? y === v || s(y, v, i, n, o) : m)) {
                                                d = !1;
                                                break
                                            }
                                            g || (g = "constructor" == l)
                                        }
                                        if (d && !g) {
                                            var b = e.constructor,
                                                w = t.constructor;
                                            b != w && "constructor" in e && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof w && w instanceof w) && (d = !1)
                                        }
                                        return o.delete(e), o.delete(t), d
                                    }(e, t, i, n, s, o))
                                }(e, t, i, n, r6, s) : e != e && t != t)
                            }

                            function r2(e, t, i, n) {
                                var s = i.length,
                                    o = s,
                                    a = !n;
                                if (null == e) return !o;
                                for (e = eD(e); s--;) {
                                    var c = i[s];
                                    if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                                }
                                for (; ++s < o;) {
                                    var h = (c = i[s])[0],
                                        u = e[h],
                                        l = c[1];
                                    if (a && c[2]) {
                                        if (u === r && !(h in e)) return !1
                                    } else {
                                        var p = new rD;
                                        if (n) var f = n(u, l, h, e, t, p);
                                        if (!(f === r ? r6(l, u, 3, n, p) : f)) return !1
                                    }
                                }
                                return !0
                            }

                            function r8(e) {
                                return !(!sK(e) || ek && ek in e) && (sH(e) ? eq : eh).test(nU(e))
                            }

                            function r4(e) {
                                return "function" == typeof e ? e : null == e ? oq : "object" == typeof e ? sj(e) ? ir(e[0], e[1]) : it(e) : oW(e)
                            }

                            function r9(e) {
                                if (!nC(e)) return t1(e);
                                var t = [];
                                for (var r in eD(e)) eT.call(e, r) && "constructor" != r && t.push(r);
                                return t
                            }

                            function r7(e, t) {
                                return e < t
                            }

                            function ie(e, t) {
                                var r = -1,
                                    i = sM(e) ? em(e.length) : [];
                                return rq(e, function(e, n, s) {
                                    i[++r] = t(e, n, s)
                                }), i
                            }

                            function it(e) {
                                var t = nf(e);
                                return 1 == t.length && t[0][2] ? nP(t[0][0], t[0][1]) : function(r) {
                                    return r === e || r2(r, e, t)
                                }
                            }

                            function ir(e, t) {
                                var i;
                                return nD(e) && (i = t) == i && !sK(i) ? nP(nq(e), t) : function(i) {
                                    var n = oa(i, e);
                                    return n === r && n === t ? oc(i, e) : r6(t, n, 3)
                                }
                            }

                            function ii(e, t, i, n, s) {
                                e !== t && rB(t, function(o, a) {
                                    if (s || (s = new rD), sK(o)) ! function(e, t, i, n, s, o, a) {
                                        var c = nA(e, i),
                                            h = nA(t, i),
                                            u = a.get(h);
                                        if (u) {
                                            rC(e, i, u);
                                            return
                                        }
                                        var l = o ? o(c, h, i + "", e, t, a) : r,
                                            p = l === r;
                                        if (p) {
                                            var f = sj(h),
                                                d = !f && sU(h),
                                                g = !f && !d && s0(h);
                                            l = h, f || d || g ? sj(c) ? l = c : sq(c) ? l = iH(c) : d ? (p = !1, l = iL(h, !0)) : g ? (p = !1, l = iq(h, !0)) : l = [] : sY(h) || sk(h) ? (l = c, sk(c) ? l = s9(c) : (!sK(c) || sH(c)) && (l = nb(h))) : p = !1
                                        }
                                        p && (a.set(h, l), s(l, h, n, o, a), a.delete(h)), rC(e, i, l)
                                    }(e, t, a, i, ii, n, s);
                                    else {
                                        var c = n ? n(nA(e, a), o, a + "", e, t, s) : r;
                                        c === r && (c = o), rC(e, a, c)
                                    }
                                }, of )
                            }

                            function is(e, t) {
                                var i = e.length;
                                if (i) return n_(t += t < 0 ? i : 0, i) ? e[t] : r
                            }

                            function io(e, t, r) {
                                t = t.length ? tp(t, function(e) {
                                    return sj(e) ? function(t) {
                                        return rY(t, 1 === e.length ? e[0] : e)
                                    } : e
                                }) : [oq];
                                var i = -1;
                                return t = tp(t, tA(nl())),
                                    function(e, t) {
                                        var r = e.length;
                                        for (e.sort(t); r--;) e[r] = e[r].value;
                                        return e
                                    }(ie(e, function(e, r, n) {
                                        return {
                                            criteria: tp(t, function(t) {
                                                return t(e)
                                            }),
                                            index: ++i,
                                            value: e
                                        }
                                    }), function(e, t) {
                                        return function(e, t, r) {
                                            for (var i = -1, n = e.criteria, s = t.criteria, o = n.length, a = r.length; ++i < o;) {
                                                var c = iU(n[i], s[i]);
                                                if (c) {
                                                    if (i >= a) return c;
                                                    return c * ("desc" == r[i] ? -1 : 1)
                                                }
                                            }
                                            return e.index - t.index
                                        }(e, t, r)
                                    })
                            }

                            function ia(e, t, r) {
                                for (var i = -1, n = t.length, s = {}; ++i < n;) {
                                    var o = t[i],
                                        a = rY(e, o);
                                    r(a, o) && id(s, iN(o, e), a)
                                }
                                return s
                            }

                            function ic(e, t, r, i) {
                                var n = i ? t_ : tw,
                                    s = -1,
                                    o = t.length,
                                    a = e;
                                for (e === t && (t = iH(t)), r && (a = tp(e, tA(r))); ++s < o;)
                                    for (var c = 0, h = t[s], u = r ? r(h) : h;
                                        (c = n(a, u, c, i)) > -1;) a !== e && e5.call(a, c, 1), e5.call(e, c, 1);
                                return e
                            }

                            function ih(e, t) {
                                for (var r = e ? t.length : 0, i = r - 1; r--;) {
                                    var n = t[r];
                                    if (r == i || n !== s) {
                                        var s = n;
                                        n_(n) ? e5.call(e, n, 1) : iS(e, n)
                                    }
                                }
                                return e
                            }

                            function iu(e, t) {
                                return e + tJ(t8() * (t - e + 1))
                            }

                            function il(e, t) {
                                var r = "";
                                if (!e || t < 1 || t > 9007199254740991) return r;
                                do t % 2 && (r += e), (t = tJ(t / 2)) && (e += e); while (t);
                                return r
                            }

                            function ip(e, t) {
                                return nN(nO(e, t, oq), e + "")
                            }

                            function id(e, t, i, n) {
                                if (!sK(e)) return e;
                                t = iN(t, e);
                                for (var s = -1, o = t.length, a = o - 1, c = e; null != c && ++s < o;) {
                                    var h = nq(t[s]),
                                        u = i;
                                    if ("__proto__" === h || "constructor" === h || "prototype" === h) break;
                                    if (s != a) {
                                        var l = c[h];
                                        (u = n ? n(l, h, c) : r) === r && (u = sK(l) ? l : n_(t[s + 1]) ? [] : {})
                                    }
                                    rP(c, h, u), c = c[h]
                                }
                                return e
                            }
                            var ig = rn ? function(e, t) {
                                    return rn.set(e, t), e
                                } : oq,
                                iy = e9 ? function(e, t) {
                                    return e9(e, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: oj(t),
                                        writable: !0
                                    })
                                } : oq;

                            function iv(e, t, r) {
                                var i = -1,
                                    n = e.length;
                                t < 0 && (t = -t > n ? 0 : n + t), (r = r > n ? n : r) < 0 && (r += n), n = t > r ? 0 : r - t >>> 0, t >>>= 0;
                                for (var s = em(n); ++i < n;) s[i] = e[i + t];
                                return s
                            }

                            function im(e, t) {
                                var r;
                                return rq(e, function(e, i, n) {
                                    return !(r = t(e, i, n))
                                }), !!r
                            }

                            function ib(e, t, r) {
                                var i = 0,
                                    n = null == e ? i : e.length;
                                if ("number" == typeof t && t == t && n <= 2147483647) {
                                    for (; i < n;) {
                                        var s = i + n >>> 1,
                                            o = e[s];
                                        null !== o && !sZ(o) && (r ? o <= t : o < t) ? i = s + 1 : n = s
                                    }
                                    return n
                                }
                                return iw(e, t, oq, r)
                            }

                            function iw(e, t, i, n) {
                                var s = 0,
                                    o = null == e ? 0 : e.length;
                                if (0 === o) return 0;
                                t = i(t);
                                for (var a = t != t, c = null === t, h = sZ(t), u = t === r; s < o;) {
                                    var l = tJ((s + o) / 2),
                                        p = i(e[l]),
                                        f = p !== r,
                                        d = null === p,
                                        g = p == p,
                                        y = sZ(p);
                                    if (a) var v = n || g;
                                    else v = u ? g && (n || f) : c ? g && f && (n || !d) : h ? g && f && !d && (n || !y) : !d && !y && (n ? p <= t : p < t);
                                    v ? s = l + 1 : o = l
                                }
                                return t3(o, 4294967294)
                            }

                            function i_(e, t) {
                                for (var r = -1, i = e.length, n = 0, s = []; ++r < i;) {
                                    var o = e[r],
                                        a = t ? t(o) : o;
                                    if (!r || !sR(a, c)) {
                                        var c = a;
                                        s[n++] = 0 === o ? 0 : o
                                    }
                                }
                                return s
                            }

                            function iE(e) {
                                return "number" == typeof e ? e : sZ(e) ? a : +e
                            }

                            function iD(e) {
                                if ("string" == typeof e) return e;
                                if (sj(e)) return tp(e, iD) + "";
                                if (sZ(e)) return rf ? rf.call(e) : "";
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function iI(e, t, r) {
                                var i = -1,
                                    n = tu,
                                    s = e.length,
                                    o = !0,
                                    a = [],
                                    c = a;
                                if (r) o = !1, n = tl;
                                else if (s >= 200) {
                                    var h = t ? null : i9(e);
                                    if (h) return tH(h);
                                    o = !1, n = tT, c = new rE
                                } else c = t ? [] : a;
                                e: for (; ++i < s;) {
                                    var u = e[i],
                                        l = t ? t(u) : u;
                                    if (u = r || 0 !== u ? u : 0, o && l == l) {
                                        for (var p = c.length; p--;)
                                            if (c[p] === l) continue e;
                                        t && c.push(l), a.push(u)
                                    } else n(c, l, r) || (c !== a && c.push(l), a.push(u))
                                }
                                return a
                            }

                            function iS(e, t) {
                                return t = iN(t, e), null == (e = nx(e, t)) || delete e[nq(nQ(t))]
                            }

                            function iC(e, t, r, i) {
                                return id(e, t, r(rY(e, t)), i)
                            }

                            function iP(e, t, r, i) {
                                for (var n = e.length, s = i ? n : -1;
                                    (i ? s-- : ++s < n) && t(e[s], s, e););
                                return r ? iv(e, i ? 0 : s, i ? s + 1 : n) : iv(e, i ? s + 1 : 0, i ? n : s)
                            }

                            function iO(e, t) {
                                var r = e;
                                return r instanceof rm && (r = r.value()), td(t, function(e, t) {
                                    return t.func.apply(t.thisArg, tf([e], t.args))
                                }, r)
                            }

                            function ix(e, t, r) {
                                var i = e.length;
                                if (i < 2) return i ? iI(e[0]) : [];
                                for (var n = -1, s = em(i); ++n < i;)
                                    for (var o = e[n], a = -1; ++a < i;) a != n && (s[n] = rM(s[n] || o, e[a], t, r));
                                return iI(rF(s, 1), t, r)
                            }

                            function iA(e, t, i) {
                                for (var n = -1, s = e.length, o = t.length, a = {}; ++n < s;) {
                                    var c = n < o ? t[n] : r;
                                    i(a, e[n], c)
                                }
                                return a
                            }

                            function iR(e) {
                                return sq(e) ? e : []
                            }

                            function iT(e) {
                                return "function" == typeof e ? e : oq
                            }

                            function iN(e, t) {
                                return sj(e) ? e : nD(e, t) ? [e] : nM(s7(e))
                            }

                            function ik(e, t, i) {
                                var n = e.length;
                                return i = i === r ? n : i, !t && i >= n ? e : iv(e, t, i)
                            }
                            var ij = tv || function(e) {
                                return e3.clearTimeout(e)
                            };

                            function iL(e, t) {
                                if (t) return e.slice();
                                var r = e.length,
                                    i = eB ? eB(r) : new e.constructor(r);
                                return e.copy(i), i
                            }

                            function iM(e) {
                                var t = new e.constructor(e.byteLength);
                                return new e$(t).set(new e$(e)), t
                            }

                            function iq(e, t) {
                                var r = t ? iM(e.buffer) : e.buffer;
                                return new e.constructor(r, e.byteOffset, e.length)
                            }

                            function iU(e, t) {
                                if (e !== t) {
                                    var i = e !== r,
                                        n = null === e,
                                        s = e == e,
                                        o = sZ(e),
                                        a = t !== r,
                                        c = null === t,
                                        h = t == t,
                                        u = sZ(t);
                                    if (!c && !u && !o && e > t || o && a && h && !c && !u || n && a && h || !i && h || !s) return 1;
                                    if (!n && !o && !u && e < t || u && i && s && !n && !o || c && i && s || !a && s || !h) return -1
                                }
                                return 0
                            }

                            function iz(e, t, r, i) {
                                for (var n = -1, s = e.length, o = r.length, a = -1, c = t.length, h = t5(s - o, 0), u = em(c + h), l = !i; ++a < c;) u[a] = t[a];
                                for (; ++n < o;)(l || n < s) && (u[r[n]] = e[n]);
                                for (; h--;) u[a++] = e[n++];
                                return u
                            }

                            function i$(e, t, r, i) {
                                for (var n = -1, s = e.length, o = -1, a = r.length, c = -1, h = t.length, u = t5(s - a, 0), l = em(u + h), p = !i; ++n < u;) l[n] = e[n];
                                for (var f = n; ++c < h;) l[f + c] = t[c];
                                for (; ++o < a;)(p || n < s) && (l[f + r[o]] = e[n++]);
                                return l
                            }

                            function iH(e, t) {
                                var r = -1,
                                    i = e.length;
                                for (t || (t = em(i)); ++r < i;) t[r] = e[r];
                                return t
                            }

                            function iF(e, t, i, n) {
                                var s = !i;
                                i || (i = {});
                                for (var o = -1, a = t.length; ++o < a;) {
                                    var c = t[o],
                                        h = n ? n(i[c], e[c], c, i, e) : r;
                                    h === r && (h = e[c]), s ? rR(i, c, h) : rP(i, c, h)
                                }
                                return i
                            }

                            function iB(e, t) {
                                return function(r, i) {
                                    var n = sj(r) ? to : rx,
                                        s = t ? t() : {};
                                    return n(r, e, nl(i, 2), s)
                                }
                            }

                            function iK(e) {
                                return ip(function(t, i) {
                                    var n = -1,
                                        s = i.length,
                                        o = s > 1 ? i[s - 1] : r,
                                        a = s > 2 ? i[2] : r;
                                    for (o = e.length > 3 && "function" == typeof o ? (s--, o) : r, a && nE(i[0], i[1], a) && (o = s < 3 ? r : o, s = 1), t = eD(t); ++n < s;) {
                                        var c = i[n];
                                        c && e(t, c, n, o)
                                    }
                                    return t
                                })
                            }

                            function iV(e, t) {
                                return function(r, i) {
                                    if (null == r) return r;
                                    if (!sM(r)) return e(r, i);
                                    for (var n = r.length, s = t ? n : -1, o = eD(r);
                                        (t ? s-- : ++s < n) && !1 !== i(o[s], s, o););
                                    return r
                                }
                            }

                            function iW(e) {
                                return function(t, r, i) {
                                    for (var n = -1, s = eD(t), o = i(t), a = o.length; a--;) {
                                        var c = o[e ? a : ++n];
                                        if (!1 === r(s[c], c, s)) break
                                    }
                                    return t
                                }
                            }

                            function iG(e) {
                                return function(t) {
                                    var i = tq(t = s7(t)) ? tB(t) : r,
                                        n = i ? i[0] : t.charAt(0),
                                        s = i ? ik(i, 1).join("") : t.slice(1);
                                    return n[e]() + s
                                }
                            }

                            function iY(e) {
                                return function(t) {
                                    return td(oT(oI(t).replace(eH, "")), e, "")
                                }
                            }

                            function iJ(e) {
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(t[0]);
                                        case 2:
                                            return new e(t[0], t[1]);
                                        case 3:
                                            return new e(t[0], t[1], t[2]);
                                        case 4:
                                            return new e(t[0], t[1], t[2], t[3]);
                                        case 5:
                                            return new e(t[0], t[1], t[2], t[3], t[4]);
                                        case 6:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                        case 7:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                    }
                                    var r = rg(e.prototype),
                                        i = e.apply(r, t);
                                    return sK(i) ? i : r
                                }
                            }

                            function iQ(e) {
                                return function(t, i, n) {
                                    var s = eD(t);
                                    if (!sM(t)) {
                                        var o = nl(i, 3);
                                        t = op(t), i = function(e) {
                                            return o(s[e], e, s)
                                        }
                                    }
                                    var a = e(t, i, n);
                                    return a > -1 ? s[o ? t[a] : a] : r
                                }
                            }

                            function iX(e) {
                                return ns(function(t) {
                                    var n = t.length,
                                        s = n,
                                        o = rv.prototype.thru;
                                    for (e && t.reverse(); s--;) {
                                        var a = t[s];
                                        if ("function" != typeof a) throw new eC(i);
                                        if (o && !c && "wrapper" == nh(a)) var c = new rv([], !0)
                                    }
                                    for (s = c ? s : n; ++s < n;) {
                                        var h = nh(a = t[s]),
                                            u = "wrapper" == h ? nc(a) : r;
                                        c = u && nI(u[0]) && 424 == u[1] && !u[4].length && 1 == u[9] ? c[nh(u[0])].apply(c, u[3]) : 1 == a.length && nI(a) ? c[h]() : c.thru(a)
                                    }
                                    return function() {
                                        var e = arguments,
                                            r = e[0];
                                        if (c && 1 == e.length && sj(r)) return c.plant(r).value();
                                        for (var i = 0, s = n ? t[i].apply(this, e) : r; ++i < n;) s = t[i].call(this, s);
                                        return s
                                    }
                                })
                            }

                            function iZ(e, t, i, n, s, o, a, c, h, u) {
                                var l = 128 & t,
                                    p = 1 & t,
                                    f = 2 & t,
                                    d = 24 & t,
                                    g = 512 & t,
                                    y = f ? r : iJ(e);
                                return function v() {
                                    for (var m = arguments.length, b = em(m), w = m; w--;) b[w] = arguments[w];
                                    if (d) var _ = nu(v),
                                        E = function(e, t) {
                                            for (var r = e.length, i = 0; r--;) e[r] === t && ++i;
                                            return i
                                        }(b, _);
                                    if (n && (b = iz(b, n, s, d)), o && (b = i$(b, o, a, d)), m -= E, d && m < u) {
                                        var D = t$(b, _);
                                        return i8(e, t, iZ, v.placeholder, i, b, D, c, h, u - m)
                                    }
                                    var I = p ? i : this,
                                        S = f ? I[e] : e;
                                    return m = b.length, c ? b = function(e, t) {
                                        for (var i = e.length, n = t3(t.length, i), s = iH(e); n--;) {
                                            var o = t[n];
                                            e[n] = n_(o, i) ? s[o] : r
                                        }
                                        return e
                                    }(b, c) : g && m > 1 && b.reverse(), l && h < m && (b.length = h), this && this !== e3 && this instanceof v && (S = y || iJ(S)), S.apply(I, b)
                                }
                            }

                            function i0(e, t) {
                                return function(r, i) {
                                    var n, s;
                                    return n = t(i), s = {}, rV(r, function(t, r, i) {
                                        e(s, n(t), r, i)
                                    }), s
                                }
                            }

                            function i1(e, t) {
                                return function(i, n) {
                                    var s;
                                    if (i === r && n === r) return t;
                                    if (i !== r && (s = i), n !== r) {
                                        if (s === r) return n;
                                        "string" == typeof i || "string" == typeof n ? (i = iD(i), n = iD(n)) : (i = iE(i), n = iE(n)), s = e(i, n)
                                    }
                                    return s
                                }
                            }

                            function i5(e) {
                                return ns(function(t) {
                                    return t = tp(t, tA(nl())), ip(function(r) {
                                        var i = this;
                                        return e(t, function(e) {
                                            return ts(e, i, r)
                                        })
                                    })
                                })
                            }

                            function i3(e, t) {
                                var i = (t = t === r ? " " : iD(t)).length;
                                if (i < 2) return i ? il(t, e) : t;
                                var n = il(t, tY(e / tF(t)));
                                return tq(t) ? ik(tB(n), 0, e).join("") : n.slice(0, e)
                            }

                            function i6(e) {
                                return function(t, i, n) {
                                    return n && "number" != typeof n && nE(t, i, n) && (i = n = r), t = s6(t), i === r ? (i = t, t = 0) : i = s6(i), n = n === r ? t < i ? 1 : -1 : s6(n),
                                        function(e, t, r, i) {
                                            for (var n = -1, s = t5(tY((t - e) / (r || 1)), 0), o = em(s); s--;) o[i ? s : ++n] = e, e += r;
                                            return o
                                        }(t, i, n, e)
                                }
                            }

                            function i2(e) {
                                return function(t, r) {
                                    return "string" == typeof t && "string" == typeof r || (t = s4(t), r = s4(r)), e(t, r)
                                }
                            }

                            function i8(e, t, i, n, s, o, a, c, h, u) {
                                var l = 8 & t,
                                    p = l ? a : r,
                                    f = l ? r : a,
                                    d = l ? o : r,
                                    g = l ? r : o;
                                t |= l ? 32 : 64, 4 & (t &= ~(l ? 64 : 32)) || (t &= -4);
                                var y = [e, t, s, d, p, g, f, c, h, u],
                                    v = i.apply(r, y);
                                return nI(e) && nR(v, y), v.placeholder = n, nk(v, e, t)
                            }

                            function i4(e) {
                                var t = eE[e];
                                return function(e, r) {
                                    if (e = s4(e), (r = null == r ? 0 : t3(s2(r), 292)) && tZ(e)) {
                                        var i = (s7(e) + "e").split("e");
                                        return +((i = (s7(t(i[0] + "e" + (+i[1] + r))) + "e").split("e"))[0] + "e" + (+i[1] - r))
                                    }
                                    return t(e)
                                }
                            }
                            var i9 = rt && 1 / tH(new rt([, -0]))[1] == o ? function(e) {
                                return new rt(e)
                            } : oF;

                            function i7(e) {
                                return function(t) {
                                    var r, i, n = nv(t);
                                    return n == y ? tU(t) : n == _ ? (r = -1, i = Array(t.size), t.forEach(function(e) {
                                        i[++r] = [e, e]
                                    }), i) : tp(e(t), function(e) {
                                        return [e, t[e]]
                                    })
                                }
                            }

                            function ne(e, t, n, o, a, c, h, u) {
                                var l = 2 & t;
                                if (!l && "function" != typeof e) throw new eC(i);
                                var p = o ? o.length : 0;
                                if (p || (t &= -97, o = a = r), h = h === r ? h : t5(s2(h), 0), u = u === r ? u : s2(u), p -= a ? a.length : 0, 64 & t) {
                                    var f = o,
                                        d = a;
                                    o = a = r
                                }
                                var g = l ? r : nc(e),
                                    y = [e, t, n, o, a, f, d, c, h, u];
                                if (g && function(e, t) {
                                        var r = e[1],
                                            i = t[1],
                                            n = r | i,
                                            o = n < 131,
                                            a = 128 == i && 8 == r || 128 == i && 256 == r && e[7].length <= t[8] || 384 == i && t[7].length <= t[8] && 8 == r;
                                        if (o || a) {
                                            1 & i && (e[2] = t[2], n |= 1 & r ? 0 : 4);
                                            var c = t[3];
                                            if (c) {
                                                var h = e[3];
                                                e[3] = h ? iz(h, c, t[4]) : c, e[4] = h ? t$(e[3], s) : t[4]
                                            }(c = t[5]) && (h = e[5], e[5] = h ? i$(h, c, t[6]) : c, e[6] = h ? t$(e[5], s) : t[6]), (c = t[7]) && (e[7] = c), 128 & i && (e[8] = null == e[8] ? t[8] : t3(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = n
                                        }
                                    }(y, g), e = y[0], t = y[1], n = y[2], o = y[3], a = y[4], (u = y[9] = y[9] === r ? l ? 0 : e.length : t5(y[9] - p, 0)) || !(24 & t) || (t &= -25), t && 1 != t) 8 == t || 16 == t ? (v = e, m = t, b = u, w = iJ(v), T = function e() {
                                    for (var t = arguments.length, i = em(t), n = t, s = nu(e); n--;) i[n] = arguments[n];
                                    var o = t < 3 && i[0] !== s && i[t - 1] !== s ? [] : t$(i, s);
                                    return (t -= o.length) < b ? i8(v, m, iZ, e.placeholder, r, i, o, r, r, b - t) : ts(this && this !== e3 && this instanceof e ? w : v, this, i)
                                }) : 32 != t && 33 != t || a.length ? T = iZ.apply(r, y) : (_ = e, E = t, D = n, I = o, S = 1 & E, C = iJ(_), T = function e() {
                                    for (var t = -1, r = arguments.length, i = -1, n = I.length, s = em(n + r), o = this && this !== e3 && this instanceof e ? C : _; ++i < n;) s[i] = I[i];
                                    for (; r--;) s[i++] = arguments[++t];
                                    return ts(o, S ? D : this, s)
                                });
                                else var v, m, b, w, _, E, D, I, S, C, P, O, x, A, R, T = (P = e, O = t, x = n, A = 1 & O, R = iJ(P), function e() {
                                    return (this && this !== e3 && this instanceof e ? R : P).apply(A ? x : this, arguments)
                                });
                                return nk((g ? ig : nR)(T, y), e, t)
                            }

                            function nt(e, t, i, n) {
                                return e === r || sR(e, ex[i]) && !eT.call(n, i) ? t : e
                            }

                            function nr(e, t, i, n, s, o) {
                                return sK(e) && sK(t) && (o.set(t, e), ii(e, t, r, nr, o), o.delete(t)), e
                            }

                            function ni(e) {
                                return sY(e) ? r : e
                            }

                            function nn(e, t, i, n, s, o) {
                                var a = 1 & i,
                                    c = e.length,
                                    h = t.length;
                                if (c != h && !(a && h > c)) return !1;
                                var u = o.get(e),
                                    l = o.get(t);
                                if (u && l) return u == t && l == e;
                                var p = -1,
                                    f = !0,
                                    d = 2 & i ? new rE : r;
                                for (o.set(e, t), o.set(t, e); ++p < c;) {
                                    var g = e[p],
                                        y = t[p];
                                    if (n) var v = a ? n(y, g, p, t, e, o) : n(g, y, p, e, t, o);
                                    if (v !== r) {
                                        if (v) continue;
                                        f = !1;
                                        break
                                    }
                                    if (d) {
                                        if (!ty(t, function(e, t) {
                                                if (!tT(d, t) && (g === e || s(g, e, i, n, o))) return d.push(t)
                                            })) {
                                            f = !1;
                                            break
                                        }
                                    } else if (!(g === y || s(g, y, i, n, o))) {
                                        f = !1;
                                        break
                                    }
                                }
                                return o.delete(e), o.delete(t), f
                            }

                            function ns(e) {
                                return nN(nO(e, r, nV), e + "")
                            }

                            function no(e) {
                                return rJ(e, op, ng)
                            }

                            function na(e) {
                                return rJ(e, of , ny)
                            }
                            var nc = rn ? function(e) {
                                return rn.get(e)
                            } : oF;

                            function nh(e) {
                                for (var t = e.name + "", r = rs[t], i = eT.call(rs, t) ? r.length : 0; i--;) {
                                    var n = r[i],
                                        s = n.func;
                                    if (null == s || s == e) return n.name
                                }
                                return t
                            }

                            function nu(e) {
                                return (eT.call(rd, "placeholder") ? rd : e).placeholder
                            }

                            function nl() {
                                var e = rd.iteratee || oU;
                                return e = e === oU ? r4 : e, arguments.length ? e(arguments[0], arguments[1]) : e
                            }

                            function np(e, t) {
                                var r, i = e.__data__;
                                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
                            }

                            function nf(e) {
                                for (var t = op(e), r = t.length; r--;) {
                                    var i = t[r],
                                        n = e[i];
                                    t[r] = [i, n, n == n && !sK(n)]
                                }
                                return t
                            }

                            function nd(e, t) {
                                var i = null == e ? r : e[t];
                                return r8(i) ? i : r
                            }
                            var ng = tQ ? function(e) {
                                    return null == e ? [] : th(tQ(e = eD(e)), function(t) {
                                        return e1.call(e, t)
                                    })
                                } : oJ,
                                ny = tQ ? function(e) {
                                    for (var t = []; e;) tf(t, ng(e)), e = eV(e);
                                    return t
                                } : oJ,
                                nv = rQ;

                            function nm(e, t, r) {
                                t = iN(t, e);
                                for (var i = -1, n = t.length, s = !1; ++i < n;) {
                                    var o = nq(t[i]);
                                    if (!(s = null != e && r(e, o))) break;
                                    e = e[o]
                                }
                                return s || ++i != n ? s : !!(n = null == e ? 0 : e.length) && sB(n) && n_(o, n) && (sj(e) || sk(e))
                            }

                            function nb(e) {
                                return "function" != typeof e.constructor || nC(e) ? {} : rg(eV(e))
                            }

                            function nw(e) {
                                return sj(e) || sk(e) || !!(e6 && e && e[e6])
                            }

                            function n_(e, t) {
                                var r = typeof e;
                                return !!(t = t ? ? 9007199254740991) && ("number" == r || "symbol" != r && el.test(e)) && e > -1 && e % 1 == 0 && e < t
                            }

                            function nE(e, t, r) {
                                if (!sK(r)) return !1;
                                var i = typeof t;
                                return ("number" == i ? !!(sM(r) && n_(t, r.length)) : "string" == i && t in r) && sR(r[t], e)
                            }

                            function nD(e, t) {
                                if (sj(e)) return !1;
                                var r = typeof e;
                                return !!("number" == r || "symbol" == r || "boolean" == r || null == e || sZ(e)) || W.test(e) || !V.test(e) || null != t && e in eD(t)
                            }

                            function nI(e) {
                                var t = nh(e),
                                    r = rd[t];
                                if ("function" != typeof r || !(t in rm.prototype)) return !1;
                                if (e === r) return !0;
                                var i = nc(r);
                                return !!i && e === i[0]
                            }(t9 && nv(new t9(new ArrayBuffer(1))) != C || t7 && nv(new t7) != y || re && nv(re.resolve()) != b || rt && nv(new rt) != _ || rr && nv(new rr) != I) && (nv = function(e) {
                                var t = rQ(e),
                                    i = t == m ? e.constructor : r,
                                    n = i ? nU(i) : "";
                                if (n) switch (n) {
                                    case ro:
                                        return C;
                                    case ra:
                                        return y;
                                    case rc:
                                        return b;
                                    case rh:
                                        return _;
                                    case ru:
                                        return I
                                }
                                return t
                            });
                            var nS = eA ? sH : oQ;

                            function nC(e) {
                                var t = e && e.constructor;
                                return e === ("function" == typeof t && t.prototype || ex)
                            }

                            function nP(e, t) {
                                return function(i) {
                                    return null != i && i[e] === t && (t !== r || e in eD(i))
                                }
                            }

                            function nO(e, t, i) {
                                return t = t5(t === r ? e.length - 1 : t, 0),
                                    function() {
                                        for (var r = arguments, n = -1, s = t5(r.length - t, 0), o = em(s); ++n < s;) o[n] = r[t + n];
                                        n = -1;
                                        for (var a = em(t + 1); ++n < t;) a[n] = r[n];
                                        return a[t] = i(o), ts(e, this, a)
                                    }
                            }

                            function nx(e, t) {
                                return t.length < 2 ? e : rY(e, iv(t, 0, -1))
                            }

                            function nA(e, t) {
                                if (!("constructor" === t && "function" == typeof e[t]) && "__proto__" != t) return e[t]
                            }
                            var nR = nj(ig),
                                nT = tG || function(e, t) {
                                    return e3.setTimeout(e, t)
                                },
                                nN = nj(iy);

                            function nk(e, t, r) {
                                var i, n, s = t + "";
                                return nN(e, function(e, t) {
                                    var r = t.length;
                                    if (!r) return e;
                                    var i = r - 1;
                                    return t[i] = (r > 1 ? "& " : "") + t[i], t = t.join(r > 2 ? ", " : " "), e.replace(Z, `{
/* [wrapped with ` + t + `] */
`)
                                }(s, (i = (n = s.match(ee)) ? n[1].split(et) : [], ta(c, function(e) {
                                    var t = "_." + e[0];
                                    r & e[1] && !tu(i, t) && i.push(t)
                                }), i.sort())))
                            }

                            function nj(e) {
                                var t = 0,
                                    i = 0;
                                return function() {
                                    var n = t6(),
                                        s = 16 - (n - i);
                                    if (i = n, s > 0) {
                                        if (++t >= 800) return arguments[0]
                                    } else t = 0;
                                    return e.apply(r, arguments)
                                }
                            }

                            function nL(e, t) {
                                var i = -1,
                                    n = e.length,
                                    s = n - 1;
                                for (t = t === r ? n : t; ++i < t;) {
                                    var o = iu(i, s),
                                        a = e[o];
                                    e[o] = e[i], e[i] = a
                                }
                                return e.length = t, e
                            }
                            var nM = (ey = (eg = sS(function(e) {
                                var t = [];
                                return 46 === e.charCodeAt(0) && t.push(""), e.replace(G, function(e, r, i, n) {
                                    t.push(i ? n.replace(en, "$1") : r || e)
                                }), t
                            }, function(e) {
                                return 500 === ey.size && ey.clear(), e
                            })).cache, eg);

                            function nq(e) {
                                if ("string" == typeof e || sZ(e)) return e;
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function nU(e) {
                                if (null != e) {
                                    try {
                                        return eR.call(e)
                                    } catch {}
                                    try {
                                        return e + ""
                                    } catch {}
                                }
                                return ""
                            }

                            function nz(e) {
                                if (e instanceof rm) return e.clone();
                                var t = new rv(e.__wrapped__, e.__chain__);
                                return t.__actions__ = iH(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                            }
                            var n$ = ip(function(e, t) {
                                    return sq(e) ? rM(e, rF(t, 1, sq, !0)) : []
                                }),
                                nH = ip(function(e, t) {
                                    var i = nQ(t);
                                    return sq(i) && (i = r), sq(e) ? rM(e, rF(t, 1, sq, !0), nl(i, 2)) : []
                                }),
                                nF = ip(function(e, t) {
                                    var i = nQ(t);
                                    return sq(i) && (i = r), sq(e) ? rM(e, rF(t, 1, sq, !0), r, i) : []
                                });

                            function nB(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : s2(r);
                                return n < 0 && (n = t5(i + n, 0)), tb(e, nl(t, 3), n)
                            }

                            function nK(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n - 1;
                                return i !== r && (s = s2(i), s = i < 0 ? t5(n + s, 0) : t3(s, n - 1)), tb(e, nl(t, 3), s, !0)
                            }

                            function nV(e) {
                                return (null == e ? 0 : e.length) ? rF(e, 1) : []
                            }

                            function nW(e) {
                                return e && e.length ? e[0] : r
                            }
                            var nG = ip(function(e) {
                                    var t = tp(e, iR);
                                    return t.length && t[0] === e[0] ? r1(t) : []
                                }),
                                nY = ip(function(e) {
                                    var t = nQ(e),
                                        i = tp(e, iR);
                                    return t === nQ(i) ? t = r : i.pop(), i.length && i[0] === e[0] ? r1(i, nl(t, 2)) : []
                                }),
                                nJ = ip(function(e) {
                                    var t = nQ(e),
                                        i = tp(e, iR);
                                    return (t = "function" == typeof t ? t : r) && i.pop(), i.length && i[0] === e[0] ? r1(i, r, t) : []
                                });

                            function nQ(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? e[t - 1] : r
                            }
                            var nX = ip(nZ);

                            function nZ(e, t) {
                                return e && e.length && t && t.length ? ic(e, t) : e
                            }
                            var n0 = ns(function(e, t) {
                                var r = null == e ? 0 : e.length,
                                    i = rT(e, t);
                                return ih(e, tp(t, function(e) {
                                    return n_(e, r) ? +e : e
                                }).sort(iU)), i
                            });

                            function n1(e) {
                                return null == e ? e : t4.call(e)
                            }
                            var n5 = ip(function(e) {
                                    return iI(rF(e, 1, sq, !0))
                                }),
                                n3 = ip(function(e) {
                                    var t = nQ(e);
                                    return sq(t) && (t = r), iI(rF(e, 1, sq, !0), nl(t, 2))
                                }),
                                n6 = ip(function(e) {
                                    var t = nQ(e);
                                    return t = "function" == typeof t ? t : r, iI(rF(e, 1, sq, !0), r, t)
                                });

                            function n2(e) {
                                if (!(e && e.length)) return [];
                                var t = 0;
                                return e = th(e, function(e) {
                                    if (sq(e)) return t = t5(e.length, t), !0
                                }), tO(t, function(t) {
                                    return tp(e, tI(t))
                                })
                            }

                            function n8(e, t) {
                                if (!(e && e.length)) return [];
                                var i = n2(e);
                                return null == t ? i : tp(i, function(e) {
                                    return ts(t, r, e)
                                })
                            }
                            var n4 = ip(function(e, t) {
                                    return sq(e) ? rM(e, t) : []
                                }),
                                n9 = ip(function(e) {
                                    return ix(th(e, sq))
                                }),
                                n7 = ip(function(e) {
                                    var t = nQ(e);
                                    return sq(t) && (t = r), ix(th(e, sq), nl(t, 2))
                                }),
                                se = ip(function(e) {
                                    var t = nQ(e);
                                    return t = "function" == typeof t ? t : r, ix(th(e, sq), r, t)
                                }),
                                st = ip(n2),
                                sr = ip(function(e) {
                                    var t = e.length,
                                        i = t > 1 ? e[t - 1] : r;
                                    return i = "function" == typeof i ? (e.pop(), i) : r, n8(e, i)
                                });

                            function si(e) {
                                var t = rd(e);
                                return t.__chain__ = !0, t
                            }

                            function sn(e, t) {
                                return t(e)
                            }
                            var ss = ns(function(e) {
                                    var t = e.length,
                                        i = t ? e[0] : 0,
                                        n = this.__wrapped__,
                                        s = function(t) {
                                            return rT(t, e)
                                        };
                                    return !(t > 1) && !this.__actions__.length && n instanceof rm && n_(i) ? ((n = n.slice(i, +i + (t ? 1 : 0))).__actions__.push({
                                        func: sn,
                                        args: [s],
                                        thisArg: r
                                    }), new rv(n, this.__chain__).thru(function(e) {
                                        return t && !e.length && e.push(r), e
                                    })) : this.thru(s)
                                }),
                                so = iB(function(e, t, r) {
                                    eT.call(e, r) ? ++e[r] : rR(e, r, 1)
                                }),
                                sa = iQ(nB),
                                sc = iQ(nK);

                            function sh(e, t) {
                                return (sj(e) ? ta : rq)(e, nl(t, 3))
                            }

                            function su(e, t) {
                                return (sj(e) ? function(e, t) {
                                    for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e););
                                    return e
                                } : rU)(e, nl(t, 3))
                            }
                            var sl = iB(function(e, t, r) {
                                    eT.call(e, r) ? e[r].push(t) : rR(e, r, [t])
                                }),
                                sp = ip(function(e, t, r) {
                                    var i = -1,
                                        n = "function" == typeof t,
                                        s = sM(e) ? em(e.length) : [];
                                    return rq(e, function(e) {
                                        s[++i] = n ? ts(t, e, r) : r5(e, t, r)
                                    }), s
                                }),
                                sf = iB(function(e, t, r) {
                                    rR(e, r, t)
                                });

                            function sd(e, t) {
                                return (sj(e) ? tp : ie)(e, nl(t, 3))
                            }
                            var sg = iB(function(e, t, r) {
                                    e[r ? 0 : 1].push(t)
                                }, function() {
                                    return [
                                        [],
                                        []
                                    ]
                                }),
                                sy = ip(function(e, t) {
                                    if (null == e) return [];
                                    var r = t.length;
                                    return r > 1 && nE(e, t[0], t[1]) ? t = [] : r > 2 && nE(t[0], t[1], t[2]) && (t = [t[0]]), io(e, rF(t, 1), [])
                                }),
                                sv = tS || function() {
                                    return e3.Date.now()
                                };

                            function sm(e, t, i) {
                                return t = i ? r : t, t = e && null == t ? e.length : t, ne(e, 128, r, r, r, r, t)
                            }

                            function sb(e, t) {
                                var n;
                                if ("function" != typeof t) throw new eC(i);
                                return e = s2(e),
                                    function() {
                                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = r), n
                                    }
                            }
                            var sw = ip(function(e, t, r) {
                                    var i = 1;
                                    if (r.length) {
                                        var n = t$(r, nu(sw));
                                        i |= 32
                                    }
                                    return ne(e, i, t, r, n)
                                }),
                                s_ = ip(function(e, t, r) {
                                    var i = 3;
                                    if (r.length) {
                                        var n = t$(r, nu(s_));
                                        i |= 32
                                    }
                                    return ne(t, i, e, r, n)
                                });

                            function sE(e, t, n) {
                                var s, o, a, c, h, u, l = 0,
                                    p = !1,
                                    f = !1,
                                    d = !0;
                                if ("function" != typeof e) throw new eC(i);

                                function g(t) {
                                    var i = s,
                                        n = o;
                                    return s = o = r, l = t, c = e.apply(n, i)
                                }

                                function y(e) {
                                    var i = e - u,
                                        n = e - l;
                                    return u === r || i >= t || i < 0 || f && n >= a
                                }

                                function v() {
                                    var e, r, i, n = sv();
                                    if (y(n)) return m(n);
                                    h = nT(v, (e = n - u, r = n - l, i = t - e, f ? t3(i, a - r) : i))
                                }

                                function m(e) {
                                    return h = r, d && s ? g(e) : (s = o = r, c)
                                }

                                function b() {
                                    var e, i = sv(),
                                        n = y(i);
                                    if (s = arguments, o = this, u = i, n) {
                                        if (h === r) return l = e = u, h = nT(v, t), p ? g(e) : c;
                                        if (f) return ij(h), h = nT(v, t), g(u)
                                    }
                                    return h === r && (h = nT(v, t)), c
                                }
                                return t = s4(t) || 0, sK(n) && (p = !!n.leading, a = (f = "maxWait" in n) ? t5(s4(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d), b.cancel = function() {
                                    h !== r && ij(h), l = 0, s = u = o = h = r
                                }, b.flush = function() {
                                    return h === r ? c : m(sv())
                                }, b
                            }
                            var sD = ip(function(e, t) {
                                    return rL(e, 1, t)
                                }),
                                sI = ip(function(e, t, r) {
                                    return rL(e, s4(t) || 0, r)
                                });

                            function sS(e, t) {
                                if ("function" != typeof e || null != t && "function" != typeof t) throw new eC(i);
                                var r = function() {
                                    var i = arguments,
                                        n = t ? t.apply(this, i) : i[0],
                                        s = r.cache;
                                    if (s.has(n)) return s.get(n);
                                    var o = e.apply(this, i);
                                    return r.cache = s.set(n, o) || s, o
                                };
                                return r.cache = new(sS.Cache || r_), r
                            }

                            function sC(e) {
                                if ("function" != typeof e) throw new eC(i);
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return !e.call(this);
                                        case 1:
                                            return !e.call(this, t[0]);
                                        case 2:
                                            return !e.call(this, t[0], t[1]);
                                        case 3:
                                            return !e.call(this, t[0], t[1], t[2])
                                    }
                                    return !e.apply(this, t)
                                }
                            }
                            sS.Cache = r_;
                            var sP = ip(function(e, t) {
                                    var r = (t = 1 == t.length && sj(t[0]) ? tp(t[0], tA(nl())) : tp(rF(t, 1), tA(nl()))).length;
                                    return ip(function(i) {
                                        for (var n = -1, s = t3(i.length, r); ++n < s;) i[n] = t[n].call(this, i[n]);
                                        return ts(e, this, i)
                                    })
                                }),
                                sO = ip(function(e, t) {
                                    var i = t$(t, nu(sO));
                                    return ne(e, 32, r, t, i)
                                }),
                                sx = ip(function(e, t) {
                                    var i = t$(t, nu(sx));
                                    return ne(e, 64, r, t, i)
                                }),
                                sA = ns(function(e, t) {
                                    return ne(e, 256, r, r, r, t)
                                });

                            function sR(e, t) {
                                return e === t || e != e && t != t
                            }
                            var sT = i2(rX),
                                sN = i2(function(e, t) {
                                    return e >= t
                                }),
                                sk = r3(function() {
                                    return arguments
                                }()) ? r3 : function(e) {
                                    return sV(e) && eT.call(e, "callee") && !e1.call(e, "callee")
                                },
                                sj = em.isArray,
                                sL = e7 ? tA(e7) : function(e) {
                                    return sV(e) && rQ(e) == S
                                };

                            function sM(e) {
                                return null != e && sB(e.length) && !sH(e)
                            }

                            function sq(e) {
                                return sV(e) && sM(e)
                            }
                            var sU = tX || oQ,
                                sz = te ? tA(te) : function(e) {
                                    return sV(e) && rQ(e) == p
                                };

                            function s$(e) {
                                if (!sV(e)) return !1;
                                var t = rQ(e);
                                return t == f || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !sY(e)
                            }

                            function sH(e) {
                                if (!sK(e)) return !1;
                                var t = rQ(e);
                                return t == d || t == g || "[object AsyncFunction]" == t || "[object Proxy]" == t
                            }

                            function sF(e) {
                                return "number" == typeof e && e == s2(e)
                            }

                            function sB(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                            }

                            function sK(e) {
                                var t = typeof e;
                                return null != e && ("object" == t || "function" == t)
                            }

                            function sV(e) {
                                return null != e && "object" == typeof e
                            }
                            var sW = tt ? tA(tt) : function(e) {
                                return sV(e) && nv(e) == y
                            };

                            function sG(e) {
                                return "number" == typeof e || sV(e) && rQ(e) == v
                            }

                            function sY(e) {
                                if (!sV(e) || rQ(e) != m) return !1;
                                var t = eV(e);
                                if (null === t) return !0;
                                var r = eT.call(t, "constructor") && t.constructor;
                                return "function" == typeof r && r instanceof r && eR.call(r) == eL
                            }
                            var sJ = tr ? tA(tr) : function(e) {
                                    return sV(e) && rQ(e) == w
                                },
                                sQ = ti ? tA(ti) : function(e) {
                                    return sV(e) && nv(e) == _
                                };

                            function sX(e) {
                                return "string" == typeof e || !sj(e) && sV(e) && rQ(e) == E
                            }

                            function sZ(e) {
                                return "symbol" == typeof e || sV(e) && rQ(e) == D
                            }
                            var s0 = tn ? tA(tn) : function(e) {
                                    return sV(e) && sB(e.length) && !!eJ[rQ(e)]
                                },
                                s1 = i2(r7),
                                s5 = i2(function(e, t) {
                                    return e <= t
                                });

                            function s3(e) {
                                if (!e) return [];
                                if (sM(e)) return sX(e) ? tB(e) : iH(e);
                                if (e2 && e[e2]) return function(e) {
                                    for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                                    return r
                                }(e[e2]());
                                var t = nv(e);
                                return (t == y ? tU : t == _ ? tH : o_)(e)
                            }

                            function s6(e) {
                                return e ? (e = s4(e)) === o || e === -o ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
                            }

                            function s2(e) {
                                var t = s6(e),
                                    r = t % 1;
                                return t == t ? r ? t - r : t : 0
                            }

                            function s8(e) {
                                return e ? rN(s2(e), 0, 4294967295) : 0
                            }

                            function s4(e) {
                                if ("number" == typeof e) return e;
                                if (sZ(e)) return a;
                                if (sK(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = sK(t) ? t + "" : t
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = tx(e);
                                var r = ec.test(e);
                                return r || eu.test(e) ? e0(e.slice(2), r ? 2 : 8) : ea.test(e) ? a : +e
                            }

                            function s9(e) {
                                return iF(e, of (e))
                            }

                            function s7(e) {
                                return null == e ? "" : iD(e)
                            }
                            var oe = iK(function(e, t) {
                                    if (nC(t) || sM(t)) {
                                        iF(t, op(t), e);
                                        return
                                    }
                                    for (var r in t) eT.call(t, r) && rP(e, r, t[r])
                                }),
                                ot = iK(function(e, t) {
                                    iF(t, of (t), e)
                                }),
                                or = iK(function(e, t, r, i) {
                                    iF(t, of (t), e, i)
                                }),
                                oi = iK(function(e, t, r, i) {
                                    iF(t, op(t), e, i)
                                }),
                                on = ns(rT),
                                os = ip(function(e, t) {
                                    e = eD(e);
                                    var i = -1,
                                        n = t.length,
                                        s = n > 2 ? t[2] : r;
                                    for (s && nE(t[0], t[1], s) && (n = 1); ++i < n;)
                                        for (var o = t[i], a = of (o), c = -1, h = a.length; ++c < h;) {
                                            var u = a[c],
                                                l = e[u];
                                            (l === r || sR(l, ex[u]) && !eT.call(e, u)) && (e[u] = o[u])
                                        }
                                    return e
                                }),
                                oo = ip(function(e) {
                                    return e.push(r, nr), ts(og, r, e)
                                });

                            function oa(e, t, i) {
                                var n = null == e ? r : rY(e, t);
                                return n === r ? i : n
                            }

                            function oc(e, t) {
                                return null != e && nm(e, t, r0)
                            }
                            var oh = i0(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = ej.call(t)), e[t] = r
                                }, oj(oq)),
                                ou = i0(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = ej.call(t)), eT.call(e, t) ? e[t].push(r) : e[t] = [r]
                                }, nl),
                                ol = ip(r5);

                            function op(e) {
                                return sM(e) ? rI(e) : r9(e)
                            }

                            function of (e) {
                                return sM(e) ? rI(e, !0) : function(e) {
                                    if (!sK(e)) return function(e) {
                                        var t = [];
                                        if (null != e)
                                            for (var r in eD(e)) t.push(r);
                                        return t
                                    }(e);
                                    var t = nC(e),
                                        r = [];
                                    for (var i in e) "constructor" == i && (t || !eT.call(e, i)) || r.push(i);
                                    return r
                                }(e)
                            }
                            var od = iK(function(e, t, r) {
                                    ii(e, t, r)
                                }),
                                og = iK(function(e, t, r, i) {
                                    ii(e, t, r, i)
                                }),
                                oy = ns(function(e, t) {
                                    var r = {};
                                    if (null == e) return r;
                                    var i = !1;
                                    t = tp(t, function(t) {
                                        return t = iN(t, e), i || (i = t.length > 1), t
                                    }), iF(e, na(e), r), i && (r = rk(r, 7, ni));
                                    for (var n = t.length; n--;) iS(r, t[n]);
                                    return r
                                }),
                                ov = ns(function(e, t) {
                                    return null == e ? {} : ia(e, t, function(t, r) {
                                        return oc(e, r)
                                    })
                                });

                            function om(e, t) {
                                if (null == e) return {};
                                var r = tp(na(e), function(e) {
                                    return [e]
                                });
                                return t = nl(t), ia(e, r, function(e, r) {
                                    return t(e, r[0])
                                })
                            }
                            var ob = i7(op),
                                ow = i7( of );

                            function o_(e) {
                                return null == e ? [] : tR(e, op(e))
                            }
                            var oE = iY(function(e, t, r) {
                                return t = t.toLowerCase(), e + (r ? oD(t) : t)
                            });

                            function oD(e) {
                                return oR(s7(e).toLowerCase())
                            }

                            function oI(e) {
                                return (e = s7(e)) && e.replace(ep, tj).replace(eF, "")
                            }
                            var oS = iY(function(e, t, r) {
                                    return e + (r ? "-" : "") + t.toLowerCase()
                                }),
                                oC = iY(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toLowerCase()
                                }),
                                oP = iG("toLowerCase"),
                                oO = iY(function(e, t, r) {
                                    return e + (r ? "_" : "") + t.toLowerCase()
                                }),
                                ox = iY(function(e, t, r) {
                                    return e + (r ? " " : "") + oR(t)
                                }),
                                oA = iY(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toUpperCase()
                                }),
                                oR = iG("toUpperCase");

                            function oT(e, t, i) {
                                var n;
                                return e = s7(e), (t = i ? r : t) === r ? (n = e, eW.test(n)) ? e.match(eK) || [] : e.match(er) || [] : e.match(t) || []
                            }
                            var oN = ip(function(e, t) {
                                    try {
                                        return ts(e, r, t)
                                    } catch (e) {
                                        return s$(e) ? e : new ew(e)
                                    }
                                }),
                                ok = ns(function(e, t) {
                                    return ta(t, function(t) {
                                        rR(e, t = nq(t), sw(e[t], e))
                                    }), e
                                });

                            function oj(e) {
                                return function() {
                                    return e
                                }
                            }
                            var oL = iX(),
                                oM = iX(!0);

                            function oq(e) {
                                return e
                            }

                            function oU(e) {
                                return r4("function" == typeof e ? e : rk(e, 1))
                            }
                            var oz = ip(function(e, t) {
                                    return function(r) {
                                        return r5(r, e, t)
                                    }
                                }),
                                o$ = ip(function(e, t) {
                                    return function(r) {
                                        return r5(e, r, t)
                                    }
                                });

                            function oH(e, t, r) {
                                var i = op(t),
                                    n = rG(t, i);
                                null != r || sK(t) && (n.length || !i.length) || (r = t, t = e, e = this, n = rG(t, op(t)));
                                var s = !(sK(r) && "chain" in r) || !!r.chain,
                                    o = sH(e);
                                return ta(n, function(r) {
                                    var i = t[r];
                                    e[r] = i, o && (e.prototype[r] = function() {
                                        var t = this.__chain__;
                                        if (s || t) {
                                            var r = e(this.__wrapped__);
                                            return (r.__actions__ = iH(this.__actions__)).push({
                                                func: i,
                                                args: arguments,
                                                thisArg: e
                                            }), r.__chain__ = t, r
                                        }
                                        return i.apply(e, tf([this.value()], arguments))
                                    })
                                }), e
                            }

                            function oF() {}
                            var oB = i5(tp),
                                oK = i5(tc),
                                oV = i5(ty);

                            function oW(e) {
                                return nD(e) ? tI(nq(e)) : function(t) {
                                    return rY(t, e)
                                }
                            }
                            var oG = i6(),
                                oY = i6(!0);

                            function oJ() {
                                return []
                            }

                            function oQ() {
                                return !1
                            }
                            var oX = i1(function(e, t) {
                                    return e + t
                                }, 0),
                                oZ = i4("ceil"),
                                o0 = i1(function(e, t) {
                                    return e / t
                                }, 1),
                                o1 = i4("floor"),
                                o5 = i1(function(e, t) {
                                    return e * t
                                }, 1),
                                o3 = i4("round"),
                                o6 = i1(function(e, t) {
                                    return e - t
                                }, 0);
                            return rd.after = function(e, t) {
                                if ("function" != typeof t) throw new eC(i);
                                return e = s2(e),
                                    function() {
                                        if (--e < 1) return t.apply(this, arguments)
                                    }
                            }, rd.ary = sm, rd.assign = oe, rd.assignIn = ot, rd.assignInWith = or, rd.assignWith = oi, rd.at = on, rd.before = sb, rd.bind = sw, rd.bindAll = ok, rd.bindKey = s_, rd.castArray = function() {
                                if (!arguments.length) return [];
                                var e = arguments[0];
                                return sj(e) ? e : [e]
                            }, rd.chain = si, rd.chunk = function(e, t, i) {
                                t = (i ? nE(e, t, i) : t === r) ? 1 : t5(s2(t), 0);
                                var n = null == e ? 0 : e.length;
                                if (!n || t < 1) return [];
                                for (var s = 0, o = 0, a = em(tY(n / t)); s < n;) a[o++] = iv(e, s, s += t);
                                return a
                            }, rd.compact = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = 0, n = []; ++t < r;) {
                                    var s = e[t];
                                    s && (n[i++] = s)
                                }
                                return n
                            }, rd.concat = function() {
                                var e = arguments.length;
                                if (!e) return [];
                                for (var t = em(e - 1), r = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
                                return tf(sj(r) ? iH(r) : [r], rF(t, 1))
                            }, rd.cond = function(e) {
                                var t = null == e ? 0 : e.length,
                                    r = nl();
                                return e = t ? tp(e, function(e) {
                                    if ("function" != typeof e[1]) throw new eC(i);
                                    return [r(e[0]), e[1]]
                                }) : [], ip(function(r) {
                                    for (var i = -1; ++i < t;) {
                                        var n = e[i];
                                        if (ts(n[0], this, r)) return ts(n[1], this, r)
                                    }
                                })
                            }, rd.conforms = function(e) {
                                var t, r;
                                return r = op(t = rk(e, 1)),
                                    function(e) {
                                        return rj(e, t, r)
                                    }
                            }, rd.constant = oj, rd.countBy = so, rd.create = function(e, t) {
                                var r = rg(e);
                                return null == t ? r : rA(r, t)
                            }, rd.curry = function e(t, i, n) {
                                i = n ? r : i;
                                var s = ne(t, 8, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rd.curryRight = function e(t, i, n) {
                                i = n ? r : i;
                                var s = ne(t, 16, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rd.debounce = sE, rd.defaults = os, rd.defaultsDeep = oo, rd.defer = sD, rd.delay = sI, rd.difference = n$, rd.differenceBy = nH, rd.differenceWith = nF, rd.drop = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, (t = i || t === r ? 1 : s2(t)) < 0 ? 0 : t, n) : []
                            }, rd.dropRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, 0, (t = n - (t = i || t === r ? 1 : s2(t))) < 0 ? 0 : t) : []
                            }, rd.dropRightWhile = function(e, t) {
                                return e && e.length ? iP(e, nl(t, 3), !0, !0) : []
                            }, rd.dropWhile = function(e, t) {
                                return e && e.length ? iP(e, nl(t, 3), !0) : []
                            }, rd.fill = function(e, t, i, n) {
                                var s = null == e ? 0 : e.length;
                                return s ? (i && "number" != typeof i && nE(e, t, i) && (i = 0, n = s), function(e, t, i, n) {
                                    var s = e.length;
                                    for ((i = s2(i)) < 0 && (i = -i > s ? 0 : s + i), (n = n === r || n > s ? s : s2(n)) < 0 && (n += s), n = i > n ? 0 : s8(n); i < n;) e[i++] = t;
                                    return e
                                }(e, t, i, n)) : []
                            }, rd.filter = function(e, t) {
                                return (sj(e) ? th : rH)(e, nl(t, 3))
                            }, rd.flatMap = function(e, t) {
                                return rF(sd(e, t), 1)
                            }, rd.flatMapDeep = function(e, t) {
                                return rF(sd(e, t), o)
                            }, rd.flatMapDepth = function(e, t, i) {
                                return i = i === r ? 1 : s2(i), rF(sd(e, t), i)
                            }, rd.flatten = nV, rd.flattenDeep = function(e) {
                                return (null == e ? 0 : e.length) ? rF(e, o) : []
                            }, rd.flattenDepth = function(e, t) {
                                return (null == e ? 0 : e.length) ? rF(e, t = t === r ? 1 : s2(t)) : []
                            }, rd.flip = function(e) {
                                return ne(e, 512)
                            }, rd.flow = oL, rd.flowRight = oM, rd.fromPairs = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = {}; ++t < r;) {
                                    var n = e[t];
                                    i[n[0]] = n[1]
                                }
                                return i
                            }, rd.functions = function(e) {
                                return null == e ? [] : rG(e, op(e))
                            }, rd.functionsIn = function(e) {
                                return null == e ? [] : rG(e, of (e))
                            }, rd.groupBy = sl, rd.initial = function(e) {
                                return (null == e ? 0 : e.length) ? iv(e, 0, -1) : []
                            }, rd.intersection = nG, rd.intersectionBy = nY, rd.intersectionWith = nJ, rd.invert = oh, rd.invertBy = ou, rd.invokeMap = sp, rd.iteratee = oU, rd.keyBy = sf, rd.keys = op, rd.keysIn = of , rd.map = sd, rd.mapKeys = function(e, t) {
                                var r = {};
                                return t = nl(t, 3), rV(e, function(e, i, n) {
                                    rR(r, t(e, i, n), e)
                                }), r
                            }, rd.mapValues = function(e, t) {
                                var r = {};
                                return t = nl(t, 3), rV(e, function(e, i, n) {
                                    rR(r, i, t(e, i, n))
                                }), r
                            }, rd.matches = function(e) {
                                return it(rk(e, 1))
                            }, rd.matchesProperty = function(e, t) {
                                return ir(e, rk(t, 1))
                            }, rd.memoize = sS, rd.merge = od, rd.mergeWith = og, rd.method = oz, rd.methodOf = o$, rd.mixin = oH, rd.negate = sC, rd.nthArg = function(e) {
                                return e = s2(e), ip(function(t) {
                                    return is(t, e)
                                })
                            }, rd.omit = oy, rd.omitBy = function(e, t) {
                                return om(e, sC(nl(t)))
                            }, rd.once = function(e) {
                                return sb(2, e)
                            }, rd.orderBy = function(e, t, i, n) {
                                return null == e ? [] : (sj(t) || (t = null == t ? [] : [t]), sj(i = n ? r : i) || (i = null == i ? [] : [i]), io(e, t, i))
                            }, rd.over = oB, rd.overArgs = sP, rd.overEvery = oK, rd.overSome = oV, rd.partial = sO, rd.partialRight = sx, rd.partition = sg, rd.pick = ov, rd.pickBy = om, rd.property = oW, rd.propertyOf = function(e) {
                                return function(t) {
                                    return null == e ? r : rY(e, t)
                                }
                            }, rd.pull = nX, rd.pullAll = nZ, rd.pullAllBy = function(e, t, r) {
                                return e && e.length && t && t.length ? ic(e, t, nl(r, 2)) : e
                            }, rd.pullAllWith = function(e, t, i) {
                                return e && e.length && t && t.length ? ic(e, t, r, i) : e
                            }, rd.pullAt = n0, rd.range = oG, rd.rangeRight = oY, rd.rearg = sA, rd.reject = function(e, t) {
                                return (sj(e) ? th : rH)(e, sC(nl(t, 3)))
                            }, rd.remove = function(e, t) {
                                var r = [];
                                if (!(e && e.length)) return r;
                                var i = -1,
                                    n = [],
                                    s = e.length;
                                for (t = nl(t, 3); ++i < s;) {
                                    var o = e[i];
                                    t(o, i, e) && (r.push(o), n.push(i))
                                }
                                return ih(e, n), r
                            }, rd.rest = function(e, t) {
                                if ("function" != typeof e) throw new eC(i);
                                return ip(e, t = t === r ? t : s2(t))
                            }, rd.reverse = n1, rd.sampleSize = function(e, t, i) {
                                return t = (i ? nE(e, t, i) : t === r) ? 1 : s2(t), (sj(e) ? function(e, t) {
                                    return nL(iH(e), rN(t, 0, e.length))
                                } : function(e, t) {
                                    var r = o_(e);
                                    return nL(r, rN(t, 0, r.length))
                                })(e, t)
                            }, rd.set = function(e, t, r) {
                                return null == e ? e : id(e, t, r)
                            }, rd.setWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : id(e, t, i, n)
                            }, rd.shuffle = function(e) {
                                return (sj(e) ? function(e) {
                                    return nL(iH(e))
                                } : function(e) {
                                    return nL(o_(e))
                                })(e)
                            }, rd.slice = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? (i && "number" != typeof i && nE(e, t, i) ? (t = 0, i = n) : (t = null == t ? 0 : s2(t), i = i === r ? n : s2(i)), iv(e, t, i)) : []
                            }, rd.sortBy = sy, rd.sortedUniq = function(e) {
                                return e && e.length ? i_(e) : []
                            }, rd.sortedUniqBy = function(e, t) {
                                return e && e.length ? i_(e, nl(t, 2)) : []
                            }, rd.split = function(e, t, i) {
                                return i && "number" != typeof i && nE(e, t, i) && (t = i = r), (i = i === r ? 4294967295 : i >>> 0) ? (e = s7(e)) && ("string" == typeof t || null != t && !sJ(t)) && !(t = iD(t)) && tq(e) ? ik(tB(e), 0, i) : e.split(t, i) : []
                            }, rd.spread = function(e, t) {
                                if ("function" != typeof e) throw new eC(i);
                                return t = null == t ? 0 : t5(s2(t), 0), ip(function(r) {
                                    var i = r[t],
                                        n = ik(r, 0, t);
                                    return i && tf(n, i), ts(e, this, n)
                                })
                            }, rd.tail = function(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? iv(e, 1, t) : []
                            }, rd.take = function(e, t, i) {
                                return e && e.length ? iv(e, 0, (t = i || t === r ? 1 : s2(t)) < 0 ? 0 : t) : []
                            }, rd.takeRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, (t = n - (t = i || t === r ? 1 : s2(t))) < 0 ? 0 : t, n) : []
                            }, rd.takeRightWhile = function(e, t) {
                                return e && e.length ? iP(e, nl(t, 3), !1, !0) : []
                            }, rd.takeWhile = function(e, t) {
                                return e && e.length ? iP(e, nl(t, 3)) : []
                            }, rd.tap = function(e, t) {
                                return t(e), e
                            }, rd.throttle = function(e, t, r) {
                                var n = !0,
                                    s = !0;
                                if ("function" != typeof e) throw new eC(i);
                                return sK(r) && (n = "leading" in r ? !!r.leading : n, s = "trailing" in r ? !!r.trailing : s), sE(e, t, {
                                    leading: n,
                                    maxWait: t,
                                    trailing: s
                                })
                            }, rd.thru = sn, rd.toArray = s3, rd.toPairs = ob, rd.toPairsIn = ow, rd.toPath = function(e) {
                                return sj(e) ? tp(e, nq) : sZ(e) ? [e] : iH(nM(s7(e)))
                            }, rd.toPlainObject = s9, rd.transform = function(e, t, r) {
                                var i = sj(e),
                                    n = i || sU(e) || s0(e);
                                if (t = nl(t, 4), null == r) {
                                    var s = e && e.constructor;
                                    r = n ? i ? new s : [] : sK(e) && sH(s) ? rg(eV(e)) : {}
                                }
                                return (n ? ta : rV)(e, function(e, i, n) {
                                    return t(r, e, i, n)
                                }), r
                            }, rd.unary = function(e) {
                                return sm(e, 1)
                            }, rd.union = n5, rd.unionBy = n3, rd.unionWith = n6, rd.uniq = function(e) {
                                return e && e.length ? iI(e) : []
                            }, rd.uniqBy = function(e, t) {
                                return e && e.length ? iI(e, nl(t, 2)) : []
                            }, rd.uniqWith = function(e, t) {
                                return t = "function" == typeof t ? t : r, e && e.length ? iI(e, r, t) : []
                            }, rd.unset = function(e, t) {
                                return null == e || iS(e, t)
                            }, rd.unzip = n2, rd.unzipWith = n8, rd.update = function(e, t, r) {
                                return null == e ? e : iC(e, t, iT(r))
                            }, rd.updateWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : iC(e, t, iT(i), n)
                            }, rd.values = o_, rd.valuesIn = function(e) {
                                return null == e ? [] : tR(e, of (e))
                            }, rd.without = n4, rd.words = oT, rd.wrap = function(e, t) {
                                return sO(iT(t), e)
                            }, rd.xor = n9, rd.xorBy = n7, rd.xorWith = se, rd.zip = st, rd.zipObject = function(e, t) {
                                return iA(e || [], t || [], rP)
                            }, rd.zipObjectDeep = function(e, t) {
                                return iA(e || [], t || [], id)
                            }, rd.zipWith = sr, rd.entries = ob, rd.entriesIn = ow, rd.extend = ot, rd.extendWith = or, oH(rd, rd), rd.add = oX, rd.attempt = oN, rd.camelCase = oE, rd.capitalize = oD, rd.ceil = oZ, rd.clamp = function(e, t, i) {
                                return i === r && (i = t, t = r), i !== r && (i = (i = s4(i)) == i ? i : 0), t !== r && (t = (t = s4(t)) == t ? t : 0), rN(s4(e), t, i)
                            }, rd.clone = function(e) {
                                return rk(e, 4)
                            }, rd.cloneDeep = function(e) {
                                return rk(e, 5)
                            }, rd.cloneDeepWith = function(e, t) {
                                return rk(e, 5, t = "function" == typeof t ? t : r)
                            }, rd.cloneWith = function(e, t) {
                                return rk(e, 4, t = "function" == typeof t ? t : r)
                            }, rd.conformsTo = function(e, t) {
                                return null == t || rj(e, t, op(t))
                            }, rd.deburr = oI, rd.defaultTo = function(e, t) {
                                return null == e || e != e ? t : e
                            }, rd.divide = o0, rd.endsWith = function(e, t, i) {
                                e = s7(e), t = iD(t);
                                var n = e.length,
                                    s = i = i === r ? n : rN(s2(i), 0, n);
                                return (i -= t.length) >= 0 && e.slice(i, s) == t
                            }, rd.eq = sR, rd.escape = function(e) {
                                return (e = s7(e)) && H.test(e) ? e.replace(z, tL) : e
                            }, rd.escapeRegExp = function(e) {
                                return (e = s7(e)) && J.test(e) ? e.replace(Y, "\\$&") : e
                            }, rd.every = function(e, t, i) {
                                var n = sj(e) ? tc : rz;
                                return i && nE(e, t, i) && (t = r), n(e, nl(t, 3))
                            }, rd.find = sa, rd.findIndex = nB, rd.findKey = function(e, t) {
                                return tm(e, nl(t, 3), rV)
                            }, rd.findLast = sc, rd.findLastIndex = nK, rd.findLastKey = function(e, t) {
                                return tm(e, nl(t, 3), rW)
                            }, rd.floor = o1, rd.forEach = sh, rd.forEachRight = su, rd.forIn = function(e, t) {
                                return null == e ? e : rB(e, nl(t, 3), of )
                            }, rd.forInRight = function(e, t) {
                                return null == e ? e : rK(e, nl(t, 3), of )
                            }, rd.forOwn = function(e, t) {
                                return e && rV(e, nl(t, 3))
                            }, rd.forOwnRight = function(e, t) {
                                return e && rW(e, nl(t, 3))
                            }, rd.get = oa, rd.gt = sT, rd.gte = sN, rd.has = function(e, t) {
                                return null != e && nm(e, t, rZ)
                            }, rd.hasIn = oc, rd.head = nW, rd.identity = oq, rd.includes = function(e, t, r, i) {
                                e = sM(e) ? e : o_(e), r = r && !i ? s2(r) : 0;
                                var n = e.length;
                                return r < 0 && (r = t5(n + r, 0)), sX(e) ? r <= n && e.indexOf(t, r) > -1 : !!n && tw(e, t, r) > -1
                            }, rd.indexOf = function(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : s2(r);
                                return n < 0 && (n = t5(i + n, 0)), tw(e, t, n)
                            }, rd.inRange = function(e, t, i) {
                                var n, s, o;
                                return t = s6(t), i === r ? (i = t, t = 0) : i = s6(i), (n = e = s4(e)) >= t3(s = t, o = i) && n < t5(s, o)
                            }, rd.invoke = ol, rd.isArguments = sk, rd.isArray = sj, rd.isArrayBuffer = sL, rd.isArrayLike = sM, rd.isArrayLikeObject = sq, rd.isBoolean = function(e) {
                                return !0 === e || !1 === e || sV(e) && rQ(e) == l
                            }, rd.isBuffer = sU, rd.isDate = sz, rd.isElement = function(e) {
                                return sV(e) && 1 === e.nodeType && !sY(e)
                            }, rd.isEmpty = function(e) {
                                if (null == e) return !0;
                                if (sM(e) && (sj(e) || "string" == typeof e || "function" == typeof e.splice || sU(e) || s0(e) || sk(e))) return !e.length;
                                var t = nv(e);
                                if (t == y || t == _) return !e.size;
                                if (nC(e)) return !r9(e).length;
                                for (var r in e)
                                    if (eT.call(e, r)) return !1;
                                return !0
                            }, rd.isEqual = function(e, t) {
                                return r6(e, t)
                            }, rd.isEqualWith = function(e, t, i) {
                                var n = (i = "function" == typeof i ? i : r) ? i(e, t) : r;
                                return n === r ? r6(e, t, r, i) : !!n
                            }, rd.isError = s$, rd.isFinite = function(e) {
                                return "number" == typeof e && tZ(e)
                            }, rd.isFunction = sH, rd.isInteger = sF, rd.isLength = sB, rd.isMap = sW, rd.isMatch = function(e, t) {
                                return e === t || r2(e, t, nf(t))
                            }, rd.isMatchWith = function(e, t, i) {
                                return i = "function" == typeof i ? i : r, r2(e, t, nf(t), i)
                            }, rd.isNaN = function(e) {
                                return sG(e) && e != +e
                            }, rd.isNative = function(e) {
                                if (nS(e)) throw new ew("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return r8(e)
                            }, rd.isNil = function(e) {
                                return null == e
                            }, rd.isNull = function(e) {
                                return null === e
                            }, rd.isNumber = sG, rd.isObject = sK, rd.isObjectLike = sV, rd.isPlainObject = sY, rd.isRegExp = sJ, rd.isSafeInteger = function(e) {
                                return sF(e) && e >= -9007199254740991 && e <= 9007199254740991
                            }, rd.isSet = sQ, rd.isString = sX, rd.isSymbol = sZ, rd.isTypedArray = s0, rd.isUndefined = function(e) {
                                return e === r
                            }, rd.isWeakMap = function(e) {
                                return sV(e) && nv(e) == I
                            }, rd.isWeakSet = function(e) {
                                return sV(e) && "[object WeakSet]" == rQ(e)
                            }, rd.join = function(e, t) {
                                return null == e ? "" : t0.call(e, t)
                            }, rd.kebabCase = oS, rd.last = nQ, rd.lastIndexOf = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n;
                                return i !== r && (s = (s = s2(i)) < 0 ? t5(n + s, 0) : t3(s, n - 1)), t == t ? function(e, t, r) {
                                    for (var i = r + 1; i-- && e[i] !== t;);
                                    return i
                                }(e, t, s) : tb(e, tE, s, !0)
                            }, rd.lowerCase = oC, rd.lowerFirst = oP, rd.lt = s1, rd.lte = s5, rd.max = function(e) {
                                return e && e.length ? r$(e, oq, rX) : r
                            }, rd.maxBy = function(e, t) {
                                return e && e.length ? r$(e, nl(t, 2), rX) : r
                            }, rd.mean = function(e) {
                                return tD(e, oq)
                            }, rd.meanBy = function(e, t) {
                                return tD(e, nl(t, 2))
                            }, rd.min = function(e) {
                                return e && e.length ? r$(e, oq, r7) : r
                            }, rd.minBy = function(e, t) {
                                return e && e.length ? r$(e, nl(t, 2), r7) : r
                            }, rd.stubArray = oJ, rd.stubFalse = oQ, rd.stubObject = function() {
                                return {}
                            }, rd.stubString = function() {
                                return ""
                            }, rd.stubTrue = function() {
                                return !0
                            }, rd.multiply = o5, rd.nth = function(e, t) {
                                return e && e.length ? is(e, s2(t)) : r
                            }, rd.noConflict = function() {
                                return e3._ === this && (e3._ = eM), this
                            }, rd.noop = oF, rd.now = sv, rd.pad = function(e, t, r) {
                                e = s7(e);
                                var i = (t = s2(t)) ? tF(e) : 0;
                                if (!t || i >= t) return e;
                                var n = (t - i) / 2;
                                return i3(tJ(n), r) + e + i3(tY(n), r)
                            }, rd.padEnd = function(e, t, r) {
                                e = s7(e);
                                var i = (t = s2(t)) ? tF(e) : 0;
                                return t && i < t ? e + i3(t - i, r) : e
                            }, rd.padStart = function(e, t, r) {
                                e = s7(e);
                                var i = (t = s2(t)) ? tF(e) : 0;
                                return t && i < t ? i3(t - i, r) + e : e
                            }, rd.parseInt = function(e, t, r) {
                                return r || null == t ? t = 0 : t && (t = +t), t2(s7(e).replace(Q, ""), t || 0)
                            }, rd.random = function(e, t, i) {
                                if (i && "boolean" != typeof i && nE(e, t, i) && (t = i = r), i === r && ("boolean" == typeof t ? (i = t, t = r) : "boolean" == typeof e && (i = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = s6(e), t === r ? (t = e, e = 0) : t = s6(t)), e > t) {
                                    var n = e;
                                    e = t, t = n
                                }
                                if (i || e % 1 || t % 1) {
                                    var s = t8();
                                    return t3(e + s * (t - e + eZ("1e-" + ((s + "").length - 1))), t)
                                }
                                return iu(e, t)
                            }, rd.reduce = function(e, t, r) {
                                var i = sj(e) ? td : tC,
                                    n = arguments.length < 3;
                                return i(e, nl(t, 4), r, n, rq)
                            }, rd.reduceRight = function(e, t, r) {
                                var i = sj(e) ? tg : tC,
                                    n = arguments.length < 3;
                                return i(e, nl(t, 4), r, n, rU)
                            }, rd.repeat = function(e, t, i) {
                                return t = (i ? nE(e, t, i) : t === r) ? 1 : s2(t), il(s7(e), t)
                            }, rd.replace = function() {
                                var e = arguments,
                                    t = s7(e[0]);
                                return e.length < 3 ? t : t.replace(e[1], e[2])
                            }, rd.result = function(e, t, i) {
                                t = iN(t, e);
                                var n = -1,
                                    s = t.length;
                                for (s || (s = 1, e = r); ++n < s;) {
                                    var o = null == e ? r : e[nq(t[n])];
                                    o === r && (n = s, o = i), e = sH(o) ? o.call(e) : o
                                }
                                return e
                            }, rd.round = o3, rd.runInContext = e, rd.sample = function(e) {
                                return (sj(e) ? rS : function(e) {
                                    return rS(o_(e))
                                })(e)
                            }, rd.size = function(e) {
                                if (null == e) return 0;
                                if (sM(e)) return sX(e) ? tF(e) : e.length;
                                var t = nv(e);
                                return t == y || t == _ ? e.size : r9(e).length
                            }, rd.snakeCase = oO, rd.some = function(e, t, i) {
                                var n = sj(e) ? ty : im;
                                return i && nE(e, t, i) && (t = r), n(e, nl(t, 3))
                            }, rd.sortedIndex = function(e, t) {
                                return ib(e, t)
                            }, rd.sortedIndexBy = function(e, t, r) {
                                return iw(e, t, nl(r, 2))
                            }, rd.sortedIndexOf = function(e, t) {
                                var r = null == e ? 0 : e.length;
                                if (r) {
                                    var i = ib(e, t);
                                    if (i < r && sR(e[i], t)) return i
                                }
                                return -1
                            }, rd.sortedLastIndex = function(e, t) {
                                return ib(e, t, !0)
                            }, rd.sortedLastIndexBy = function(e, t, r) {
                                return iw(e, t, nl(r, 2), !0)
                            }, rd.sortedLastIndexOf = function(e, t) {
                                if (null == e ? 0 : e.length) {
                                    var r = ib(e, t, !0) - 1;
                                    if (sR(e[r], t)) return r
                                }
                                return -1
                            }, rd.startCase = ox, rd.startsWith = function(e, t, r) {
                                return e = s7(e), r = null == r ? 0 : rN(s2(r), 0, e.length), t = iD(t), e.slice(r, r + t.length) == t
                            }, rd.subtract = o6, rd.sum = function(e) {
                                return e && e.length ? tP(e, oq) : 0
                            }, rd.sumBy = function(e, t) {
                                return e && e.length ? tP(e, nl(t, 2)) : 0
                            }, rd.template = function(e, t, i) {
                                var n = rd.templateSettings;
                                i && nE(e, t, i) && (t = r), e = s7(e), t = or({}, t, n, nt);
                                var s, o, a = or({}, t.imports, n.imports, nt),
                                    c = op(a),
                                    h = tR(a, c),
                                    u = 0,
                                    l = t.interpolate || ef,
                                    p = "__p += '",
                                    f = eI((t.escape || ef).source + "|" + l.source + "|" + (l === K ? es : ef).source + "|" + (t.evaluate || ef).source + "|$", "g"),
                                    d = "//# sourceURL=" + (eT.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++eY + "]") + `
`;
                                e.replace(f, function(t, r, i, n, a, c) {
                                    return i || (i = n), p += e.slice(u, c).replace(ed, tM), r && (s = !0, p += `' +
__e(` + r + `) +
'`), a && (o = !0, p += `';
` + a + `;
__p += '`), i && (p += `' +
((__t = (` + i + `)) == null ? '' : __t) +
'`), u = c + t.length, t
                                }), p += `';
`;
                                var g = eT.call(t, "variable") && t.variable;
                                if (g) {
                                    if (ei.test(g)) throw new ew("Invalid `variable` option passed into `_.template`")
                                } else p = `with (obj) {
` + p + `
}
`;
                                p = (o ? p.replace(L, "") : p).replace(M, "$1").replace(q, "$1;"), p = "function(" + (g || "obj") + `) {
` + (g ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + p + `return __p
}`;
                                var y = oN(function() {
                                    return e_(c, d + "return " + p).apply(r, h)
                                });
                                if (y.source = p, s$(y)) throw y;
                                return y
                            }, rd.times = function(e, t) {
                                if ((e = s2(e)) < 1 || e > 9007199254740991) return [];
                                var r = 4294967295,
                                    i = t3(e, 4294967295);
                                t = nl(t), e -= 4294967295;
                                for (var n = tO(i, t); ++r < e;) t(r);
                                return n
                            }, rd.toFinite = s6, rd.toInteger = s2, rd.toLength = s8, rd.toLower = function(e) {
                                return s7(e).toLowerCase()
                            }, rd.toNumber = s4, rd.toSafeInteger = function(e) {
                                return e ? rN(s2(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0
                            }, rd.toString = s7, rd.toUpper = function(e) {
                                return s7(e).toUpperCase()
                            }, rd.trim = function(e, t, i) {
                                if ((e = s7(e)) && (i || t === r)) return tx(e);
                                if (!e || !(t = iD(t))) return e;
                                var n = tB(e),
                                    s = tB(t),
                                    o = tN(n, s),
                                    a = tk(n, s) + 1;
                                return ik(n, o, a).join("")
                            }, rd.trimEnd = function(e, t, i) {
                                if ((e = s7(e)) && (i || t === r)) return e.slice(0, tK(e) + 1);
                                if (!e || !(t = iD(t))) return e;
                                var n = tB(e),
                                    s = tk(n, tB(t)) + 1;
                                return ik(n, 0, s).join("")
                            }, rd.trimStart = function(e, t, i) {
                                if ((e = s7(e)) && (i || t === r)) return e.replace(Q, "");
                                if (!e || !(t = iD(t))) return e;
                                var n = tB(e),
                                    s = tN(n, tB(t));
                                return ik(n, s).join("")
                            }, rd.truncate = function(e, t) {
                                var i = 30,
                                    n = "...";
                                if (sK(t)) {
                                    var s = "separator" in t ? t.separator : s;
                                    i = "length" in t ? s2(t.length) : i, n = "omission" in t ? iD(t.omission) : n
                                }
                                var o = (e = s7(e)).length;
                                if (tq(e)) {
                                    var a = tB(e);
                                    o = a.length
                                }
                                if (i >= o) return e;
                                var c = i - tF(n);
                                if (c < 1) return n;
                                var h = a ? ik(a, 0, c).join("") : e.slice(0, c);
                                if (s === r) return h + n;
                                if (a && (c += h.length - c), sJ(s)) {
                                    if (e.slice(c).search(s)) {
                                        var u, l = h;
                                        for (s.global || (s = eI(s.source, s7(eo.exec(s)) + "g")), s.lastIndex = 0; u = s.exec(l);) var p = u.index;
                                        h = h.slice(0, p === r ? c : p)
                                    }
                                } else if (e.indexOf(iD(s), c) != c) {
                                    var f = h.lastIndexOf(s);
                                    f > -1 && (h = h.slice(0, f))
                                }
                                return h + n
                            }, rd.unescape = function(e) {
                                return (e = s7(e)) && $.test(e) ? e.replace(U, tV) : e
                            }, rd.uniqueId = function(e) {
                                var t = ++eN;
                                return s7(e) + t
                            }, rd.upperCase = oA, rd.upperFirst = oR, rd.each = sh, rd.eachRight = su, rd.first = nW, oH(rd, (ev = {}, rV(rd, function(e, t) {
                                eT.call(rd.prototype, t) || (ev[t] = e)
                            }), ev), {
                                chain: !1
                            }), rd.VERSION = "4.17.21", ta(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                                rd[e].placeholder = rd
                            }), ta(["drop", "take"], function(e, t) {
                                rm.prototype[e] = function(i) {
                                    i = i === r ? 1 : t5(s2(i), 0);
                                    var n = this.__filtered__ && !t ? new rm(this) : this.clone();
                                    return n.__filtered__ ? n.__takeCount__ = t3(i, n.__takeCount__) : n.__views__.push({
                                        size: t3(i, 4294967295),
                                        type: e + (n.__dir__ < 0 ? "Right" : "")
                                    }), n
                                }, rm.prototype[e + "Right"] = function(t) {
                                    return this.reverse()[e](t).reverse()
                                }
                            }), ta(["filter", "map", "takeWhile"], function(e, t) {
                                var r = t + 1,
                                    i = 1 == r || 3 == r;
                                rm.prototype[e] = function(e) {
                                    var t = this.clone();
                                    return t.__iteratees__.push({
                                        iteratee: nl(e, 3),
                                        type: r
                                    }), t.__filtered__ = t.__filtered__ || i, t
                                }
                            }), ta(["head", "last"], function(e, t) {
                                var r = "take" + (t ? "Right" : "");
                                rm.prototype[e] = function() {
                                    return this[r](1).value()[0]
                                }
                            }), ta(["initial", "tail"], function(e, t) {
                                var r = "drop" + (t ? "" : "Right");
                                rm.prototype[e] = function() {
                                    return this.__filtered__ ? new rm(this) : this[r](1)
                                }
                            }), rm.prototype.compact = function() {
                                return this.filter(oq)
                            }, rm.prototype.find = function(e) {
                                return this.filter(e).head()
                            }, rm.prototype.findLast = function(e) {
                                return this.reverse().find(e)
                            }, rm.prototype.invokeMap = ip(function(e, t) {
                                return "function" == typeof e ? new rm(this) : this.map(function(r) {
                                    return r5(r, e, t)
                                })
                            }), rm.prototype.reject = function(e) {
                                return this.filter(sC(nl(e)))
                            }, rm.prototype.slice = function(e, t) {
                                e = s2(e);
                                var i = this;
                                return i.__filtered__ && (e > 0 || t < 0) ? new rm(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== r && (i = (t = s2(t)) < 0 ? i.dropRight(-t) : i.take(t - e)), i)
                            }, rm.prototype.takeRightWhile = function(e) {
                                return this.reverse().takeWhile(e).reverse()
                            }, rm.prototype.toArray = function() {
                                return this.take(4294967295)
                            }, rV(rm.prototype, function(e, t) {
                                var i = /^(?:filter|find|map|reject)|While$/.test(t),
                                    n = /^(?:head|last)$/.test(t),
                                    s = rd[n ? "take" + ("last" == t ? "Right" : "") : t],
                                    o = n || /^find/.test(t);
                                s && (rd.prototype[t] = function() {
                                    var t = this.__wrapped__,
                                        a = n ? [1] : arguments,
                                        c = t instanceof rm,
                                        h = a[0],
                                        u = c || sj(t),
                                        l = function(e) {
                                            var t = s.apply(rd, tf([e], a));
                                            return n && p ? t[0] : t
                                        };
                                    u && i && "function" == typeof h && 1 != h.length && (c = u = !1);
                                    var p = this.__chain__,
                                        f = !!this.__actions__.length,
                                        d = o && !p,
                                        g = c && !f;
                                    if (!o && u) {
                                        t = g ? t : new rm(this);
                                        var y = e.apply(t, a);
                                        return y.__actions__.push({
                                            func: sn,
                                            args: [l],
                                            thisArg: r
                                        }), new rv(y, p)
                                    }
                                    return d && g ? e.apply(this, a) : (y = this.thru(l), d ? n ? y.value()[0] : y.value() : y)
                                })
                            }), ta(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                                var t = eP[e],
                                    r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                    i = /^(?:pop|shift)$/.test(e);
                                rd.prototype[e] = function() {
                                    var e = arguments;
                                    if (i && !this.__chain__) {
                                        var n = this.value();
                                        return t.apply(sj(n) ? n : [], e)
                                    }
                                    return this[r](function(r) {
                                        return t.apply(sj(r) ? r : [], e)
                                    })
                                }
                            }), rV(rm.prototype, function(e, t) {
                                var r = rd[t];
                                if (r) {
                                    var i = r.name + "";
                                    eT.call(rs, i) || (rs[i] = []), rs[i].push({
                                        name: t,
                                        func: r
                                    })
                                }
                            }), rs[iZ(r, 2).name] = [{
                                name: "wrapper",
                                func: r
                            }], rm.prototype.clone = function() {
                                var e = new rm(this.__wrapped__);
                                return e.__actions__ = iH(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = iH(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = iH(this.__views__), e
                            }, rm.prototype.reverse = function() {
                                if (this.__filtered__) {
                                    var e = new rm(this);
                                    e.__dir__ = -1, e.__filtered__ = !0
                                } else e = this.clone(), e.__dir__ *= -1;
                                return e
                            }, rm.prototype.value = function() {
                                var e = this.__wrapped__.value(),
                                    t = this.__dir__,
                                    r = sj(e),
                                    i = t < 0,
                                    n = r ? e.length : 0,
                                    s = function(e, t, r) {
                                        for (var i = -1, n = r.length; ++i < n;) {
                                            var s = r[i],
                                                o = s.size;
                                            switch (s.type) {
                                                case "drop":
                                                    e += o;
                                                    break;
                                                case "dropRight":
                                                    t -= o;
                                                    break;
                                                case "take":
                                                    t = t3(t, e + o);
                                                    break;
                                                case "takeRight":
                                                    e = t5(e, t - o)
                                            }
                                        }
                                        return {
                                            start: e,
                                            end: t
                                        }
                                    }(0, n, this.__views__),
                                    o = s.start,
                                    a = s.end,
                                    c = a - o,
                                    h = i ? a : o - 1,
                                    u = this.__iteratees__,
                                    l = u.length,
                                    p = 0,
                                    f = t3(c, this.__takeCount__);
                                if (!r || !i && n == c && f == c) return iO(e, this.__actions__);
                                var d = [];
                                e: for (; c-- && p < f;) {
                                    h += t;
                                    for (var g = -1, y = e[h]; ++g < l;) {
                                        var v = u[g],
                                            m = v.iteratee,
                                            b = v.type,
                                            w = m(y);
                                        if (2 == b) y = w;
                                        else if (!w) {
                                            if (1 == b) continue e;
                                            break e
                                        }
                                    }
                                    d[p++] = y
                                }
                                return d
                            }, rd.prototype.at = ss, rd.prototype.chain = function() {
                                return si(this)
                            }, rd.prototype.commit = function() {
                                return new rv(this.value(), this.__chain__)
                            }, rd.prototype.next = function() {
                                this.__values__ === r && (this.__values__ = s3(this.value()));
                                var e = this.__index__ >= this.__values__.length,
                                    t = e ? r : this.__values__[this.__index__++];
                                return {
                                    done: e,
                                    value: t
                                }
                            }, rd.prototype.plant = function(e) {
                                for (var t, i = this; i instanceof ry;) {
                                    var n = nz(i);
                                    n.__index__ = 0, n.__values__ = r, t ? s.__wrapped__ = n : t = n;
                                    var s = n;
                                    i = i.__wrapped__
                                }
                                return s.__wrapped__ = e, t
                            }, rd.prototype.reverse = function() {
                                var e = this.__wrapped__;
                                if (e instanceof rm) {
                                    var t = e;
                                    return this.__actions__.length && (t = new rm(this)), (t = t.reverse()).__actions__.push({
                                        func: sn,
                                        args: [n1],
                                        thisArg: r
                                    }), new rv(t, this.__chain__)
                                }
                                return this.thru(n1)
                            }, rd.prototype.toJSON = rd.prototype.valueOf = rd.prototype.value = function() {
                                return iO(this.__wrapped__, this.__actions__)
                            }, rd.prototype.first = rd.prototype.head, e2 && (rd.prototype[e2] = function() {
                                return this
                            }), rd
                        }();
                    e2 ? ((e2.exports = tW)._ = tW, e6._ = tW) : e3._ = tW
                }).call(i1)
            }(i5, i5.exports);
            var i3 = Object.defineProperty,
                i6 = Object.defineProperties,
                i2 = Object.getOwnPropertyDescriptors,
                i8 = Object.getOwnPropertySymbols,
                i4 = Object.prototype.hasOwnProperty,
                i9 = Object.prototype.propertyIsEnumerable,
                i7 = (e, t, r) => t in e ? i3(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ne = (e, t) => {
                    for (var r in t || (t = {})) i4.call(t, r) && i7(e, r, t[r]);
                    if (i8)
                        for (var r of i8(t)) i9.call(t, r) && i7(e, r, t[r]);
                    return e
                },
                nt = (e, t) => i6(e, i2(t));

            function nr(e, t, r) {
                var i;
                let n = (0, o.DQe)(e);
                return (null == (i = t.rpcMap) ? void 0 : i[n.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${n.namespace}:${n.reference}&projectId=${r}`
            }

            function ni(e) {
                return e.includes(":") ? e.split(":")[1] : e
            }

            function nn(e) {
                return e.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
            }

            function ns(e = {}, t = {}) {
                let r = no(e),
                    i = no(t);
                return i5.exports.merge(r, i)
            }

            function no(e) {
                var t, r, i, n;
                let s = {};
                if (!(0, o.L5o)(e)) return s;
                for (let [a, c] of Object.entries(e)) {
                    let e = (0, o.gpE)(a) ? [a] : c.chains,
                        h = c.methods || [],
                        u = c.events || [],
                        l = c.rpcMap || {},
                        p = (0, o.Maj)(a);
                    s[p] = nt(ne(ne({}, s[p]), c), {
                        chains: (0, o.eGA)(e, null == (t = s[p]) ? void 0 : t.chains),
                        methods: (0, o.eGA)(h, null == (r = s[p]) ? void 0 : r.methods),
                        events: (0, o.eGA)(u, null == (i = s[p]) ? void 0 : i.events),
                        rpcMap: ne(ne({}, l), null == (n = s[p]) ? void 0 : n.rpcMap)
                    })
                }
                return s
            }

            function na(e) {
                return e.includes(":") ? e.split(":")[2] : e
            }

            function nc(e) {
                let t = {};
                for (let [r, i] of Object.entries(e)) {
                    let e = i.methods || [],
                        n = i.events || [],
                        s = i.accounts || [],
                        a = (0, o.gpE)(r) ? [r] : i.chains ? i.chains : nn(i.accounts);
                    t[r] = {
                        chains: a,
                        methods: e,
                        events: n,
                        accounts: s
                    }
                }
                return t
            }

            function nh(e) {
                return "number" == typeof e ? e : e.includes("0x") ? parseInt(e, 16) : isNaN(Number(e = e.includes(":") ? e.split(":")[1] : e)) ? e : Number(e)
            }
            let nu = {},
                nl = e => nu[e],
                np = (e, t) => {
                    nu[e] = t
                };
            class nf {
                constructor(e) {
                    this.name = "polkadot", this.namespace = e.namespace, this.events = nl("events"), this.client = nl("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(i0.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = ni(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nr(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new e6(new iQ(r, nl("disableProviderPing")))
                }
            }
            class nd {
                constructor(e) {
                    this.name = "eip155", this.namespace = e.namespace, this.events = nl("events"), this.client = nl("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(e) {
                    switch (e.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return await this.handleSwitchChain(e);
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit(i0.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                createHttpProvider(e, t) {
                    let r = t || nr(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new e6(new iQ(r, nl("disableProviderPing")))
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = parseInt(ni(t));
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                getHttpProvider() {
                    let e = this.chainId,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                async handleSwitchChain(e) {
                    var t, r;
                    let i = e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0";
                    i = i.startsWith("0x") ? i : `0x${i}`;
                    let n = parseInt(i, 16);
                    if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
                    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
                        topic: e.topic,
                        request: {
                            method: e.request.method,
                            params: [{
                                chainId: i
                            }]
                        },
                        chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                    }), this.setDefaultChain(`${n}`);
                    else throw Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                    return null
                }
                isChainApproved(e) {
                    return this.namespace.chains.includes(`${this.name}:${e}`)
                }
            }
            class ng {
                constructor(e) {
                    this.name = "solana", this.namespace = e.namespace, this.events = nl("events"), this.client = nl("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(i0.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = ni(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nr(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new e6(new iQ(r, nl("disableProviderPing")))
                }
            }
            class ny {
                constructor(e) {
                    this.name = "cosmos", this.namespace = e.namespace, this.events = nl("events"), this.client = nl("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(i0.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = ni(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nr(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new e6(new iQ(r, nl("disableProviderPing")))
                }
            }
            class nv {
                constructor(e) {
                    this.name = "cip34", this.namespace = e.namespace, this.events = nl("events"), this.client = nl("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(i0.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        let r = this.getCardanoRPCUrl(t),
                            i = ni(t);
                        e[i] = this.createHttpProvider(i, r)
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                getCardanoRPCUrl(e) {
                    let t = this.namespace.rpcMap;
                    if (t) return t[e]
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || this.getCardanoRPCUrl(e);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new e6(new iQ(r, nl("disableProviderPing")))
                }
            }
            class nm {
                constructor(e) {
                    this.name = "elrond", this.namespace = e.namespace, this.events = nl("events"), this.client = nl("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(i0.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = ni(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nr(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new e6(new iQ(r, nl("disableProviderPing")))
                }
            }
            class nb {
                constructor(e) {
                    this.name = "multiversx", this.namespace = e.namespace, this.events = nl("events"), this.client = nl("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(i0.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = ni(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nr(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new e6(new iQ(r, nl("disableProviderPing")))
                }
            }
            class nw {
                constructor(e) {
                    this.name = "near", this.namespace = e.namespace, this.events = nl("events"), this.client = nl("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        let r = t || nr(`${this.name}:${e}`, this.namespace);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(i0.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nr(e, this.namespace);
                    return typeof r > "u" ? void 0 : new e6(new iQ(r, nl("disableProviderPing")))
                }
            }
            var n_ = Object.defineProperty,
                nE = Object.defineProperties,
                nD = Object.getOwnPropertyDescriptors,
                nI = Object.getOwnPropertySymbols,
                nS = Object.prototype.hasOwnProperty,
                nC = Object.prototype.propertyIsEnumerable,
                nP = (e, t, r) => t in e ? n_(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                nO = (e, t) => {
                    for (var r in t || (t = {})) nS.call(t, r) && nP(e, r, t[r]);
                    if (nI)
                        for (var r of nI(t)) nC.call(t, r) && nP(e, r, t[r]);
                    return e
                },
                nx = (e, t) => nE(e, nD(t));
            class nA {
                constructor(e) {
                    this.events = new(s()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : K()(ec({
                        level: e ? .logger || iX
                    })), this.disableProviderPing = e ? .disableProviderPing || !1
                }
                static async init(e) {
                    let t = new nA(e);
                    return await t.initialize(), t
                }
                async request(e, t, r) {
                    let [i, n] = this.validateChain(t);
                    if (!this.session) throw Error("Please call connect() before request()");
                    return await this.getProvider(i).request({
                        request: nO({}, e),
                        chainId: `${i}:${n}`,
                        topic: this.session.topic,
                        expiry: r
                    })
                }
                sendAsync(e, t, r, i) {
                    let n = new Date().getTime();
                    this.request(e, r, i).then(e => t(null, eK(n, e))).catch(e => t(e, void 0))
                }
                async enable() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var e;
                    if (!this.session) throw Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (e = this.session) ? void 0 : e.topic,
                        reason: (0, o.D6H)("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(e) {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic)
                }
                async authenticate(e) {
                    if (!this.client) throw Error("Sign Client not initialized");
                    this.setNamespaces(e), await this.cleanupPendingPairings();
                    let {
                        uri: t,
                        response: r
                    } = await this.client.authenticate(e);
                    t && (this.uri = t, this.events.emit("display_uri", t));
                    let i = await r();
                    if (this.session = i.session, this.session) {
                        let e = nc(this.session.namespaces);
                        this.namespaces = ns(this.namespaces, e), this.persist("namespaces", this.namespaces), this.onConnect()
                    }
                    return i
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(e) {
                    this.shouldAbortPairingAttempt = !1;
                    let t = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
                        if (t >= this.maxPairingAttempts) throw Error("Max auto pairing attempts reached");
                        let {
                            uri: r,
                            approval: i
                        } = await this.client.connect({
                            pairingTopic: e,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        r && (this.uri = r, this.events.emit("display_uri", r)), await i().then(e => {
                            this.session = e;
                            let t = nc(e.namespaces);
                            this.namespaces = ns(this.namespaces, t), this.persist("namespaces", this.namespaces)
                        }).catch(e => {
                            if (e.message !== ip) throw e;
                            t++
                        })
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(e, t) {
                    try {
                        if (!this.session) return;
                        let [r, i] = this.validateChain(e);
                        this.getProvider(r).setDefaultChain(i, t)
                    } catch (e) {
                        if (!/Please call connect/.test(e.message)) throw e
                    }
                }
                async cleanupPendingPairings(e = {}) {
                    this.logger.info("Cleaning up inactive pairings...");
                    let t = this.client.pairing.getAll();
                    if ((0, o.qt8)(t)) {
                        for (let r of t) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                        this.logger.info(`Inactive pairings cleared: ${t.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        let e = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await iq.init({
                        logger: this.providerOpts.logger || iX,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        storage: this.providerOpts.storage,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (!this.session) throw Error("Session not initialized. Please call connect() before enable()");
                    let e = [...new Set(Object.keys(this.session.namespaces).map(e => (0, o.Maj)(e)))];
                    np("client", this.client), np("events", this.events), np("disableProviderPing", this.disableProviderPing), e.forEach(e => {
                        if (!this.session) return;
                        let t = function(e, t) {
                                let r = Object.keys(t.namespaces).filter(t => t.includes(e));
                                if (!r.length) return [];
                                let i = [];
                                return r.forEach(e => {
                                    let r = t.namespaces[e].accounts;
                                    i.push(...r)
                                }), i
                            }(e, this.session),
                            r = nn(t),
                            i = ns(this.namespaces, this.optionalNamespaces),
                            n = nx(nO({}, i[e]), {
                                accounts: t,
                                chains: r
                            });
                        switch (e) {
                            case "eip155":
                                this.rpcProviders[e] = new nd({
                                    namespace: n
                                });
                                break;
                            case "solana":
                                this.rpcProviders[e] = new ng({
                                    namespace: n
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[e] = new ny({
                                    namespace: n
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[e] = new nf({
                                    namespace: n
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[e] = new nv({
                                    namespace: n
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[e] = new nm({
                                    namespace: n
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[e] = new nb({
                                    namespace: n
                                });
                                break;
                            case "near":
                                this.rpcProviders[e] = new nw({
                                    namespace: n
                                })
                        }
                    })
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw Error("Sign Client is not initialized");
                    this.client.on("session_ping", e => {
                        this.events.emit("session_ping", e)
                    }), this.client.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        if ("accountsChanged" === r.name) {
                            let e = r.data;
                            e && (0, o.qt8)(e) && this.events.emit("accountsChanged", e.map(na))
                        } else if ("chainChanged" === r.name) {
                            let e = t.chainId,
                                r = t.event.data,
                                i = (0, o.Maj)(e),
                                n = nh(e) !== nh(r) ? `${i}:${nh(r)}` : e;
                            this.onChainChanged(n)
                        } else this.events.emit(r.name, r.data);
                        this.events.emit("session_event", e)
                    }), this.client.on("session_update", ({
                        topic: e,
                        params: t
                    }) => {
                        var r;
                        let {
                            namespaces: i
                        } = t, n = null == (r = this.client) ? void 0 : r.session.get(e);
                        this.session = nx(nO({}, n), {
                            namespaces: i
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: e,
                            params: t
                        })
                    }), this.client.on("session_delete", async e => {
                        await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", nx(nO({}, (0, o.D6H)("USER_DISCONNECTED")), {
                            data: e.topic
                        }))
                    }), this.on(i0.DEFAULT_CHAIN_CHANGED, e => {
                        this.onChainChanged(e, !0)
                    })
                }
                getProvider(e) {
                    if (!this.rpcProviders[e]) throw Error(`Provider not found: ${e}`);
                    return this.rpcProviders[e]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach(e => {
                        var t;
                        this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                    })
                }
                setNamespaces(e) {
                    let {
                        namespaces: t,
                        optionalNamespaces: r,
                        sessionProperties: i
                    } = e;
                    t && Object.keys(t).length && (this.namespaces = t), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = i, this.persist("namespaces", t), this.persist("optionalNamespaces", r)
                }
                validateChain(e) {
                    let [t, r] = e ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, r];
                    if (t && !Object.keys(this.namespaces || {}).map(e => (0, o.Maj)(e)).includes(t)) throw Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                    if (t && r) return [t, r];
                    let i = (0, o.Maj)(Object.keys(this.namespaces)[0]),
                        n = this.rpcProviders[i].getDefaultChain();
                    return [i, n]
                }
                async requestAccounts() {
                    let [e] = this.validateChain();
                    return await this.getProvider(e).requestAccounts()
                }
                onChainChanged(e, t = !1) {
                    if (!this.namespaces) return;
                    let [r, i] = this.validateChain(e);
                    i && (t || this.getProvider(r).setDefaultChain(i), this.namespaces[r] ? this.namespaces[r].defaultChain = i : this.namespaces[`${r}:${i}`] ? this.namespaces[`${r}:${i}`].defaultChain = i : this.namespaces[`${r}:${i}`] = {
                        defaultChain: i
                    }, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", i))
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(e, t) {
                    this.client.core.storage.setItem(`${iZ}/${e}`, t)
                }
                async getFromStore(e) {
                    return await this.client.core.storage.getItem(`${iZ}/${e}`)
                }
            }
            let nR = ["eth_sendTransaction", "personal_sign"],
                nT = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode", "wallet_sendCalls", "wallet_getCapabilities", "wallet_getCallsStatus", "wallet_showCallsStatus"],
                nN = ["chainChanged", "accountsChanged"],
                nk = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var nj = Object.defineProperty,
                nL = Object.defineProperties,
                nM = Object.getOwnPropertyDescriptors,
                nq = Object.getOwnPropertySymbols,
                nU = Object.prototype.hasOwnProperty,
                nz = Object.prototype.propertyIsEnumerable,
                n$ = (e, t, r) => t in e ? nj(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                nH = (e, t) => {
                    for (var r in t || (t = {})) nU.call(t, r) && n$(e, r, t[r]);
                    if (nq)
                        for (var r of nq(t)) nz.call(t, r) && n$(e, r, t[r]);
                    return e
                },
                nF = (e, t) => nL(e, nM(t));

            function nB(e) {
                return Number(e[0].split(":")[1])
            }

            function nK(e) {
                return `0x${e.toString(16)}`
            }
            class nV {
                constructor() {
                    this.events = new n.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
                }
                static async init(e) {
                    let t = new nV;
                    return await t.initialize(e), t
                }
                async request(e, t) {
                    return await this.signer.request(e, this.formatChainId(this.chainId), t)
                }
                sendAsync(e, t, r) {
                    this.signer.sendAsync(e, t, this.formatChainId(this.chainId), r)
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(e) {
                    if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(e);
                    let {
                        required: t,
                        optional: r
                    } = function(e) {
                        let {
                            chains: t,
                            optionalChains: r,
                            methods: i,
                            optionalMethods: n,
                            events: s,
                            optionalEvents: a,
                            rpcMap: c
                        } = e;
                        if (!(0, o.qt8)(t)) throw Error("Invalid chains");
                        let h = {
                                chains: t,
                                methods: i || nR,
                                events: s || nN,
                                rpcMap: nH({}, t.length ? {
                                    [nB(t)]: c[nB(t)]
                                } : {})
                            },
                            u = s ? .filter(e => !nN.includes(e)),
                            l = i ? .filter(e => !nR.includes(e));
                        if (!r && !a && !n && !(null != u && u.length) && !(null != l && l.length)) return {
                            required: t.length ? h : void 0
                        };
                        let p = u ? .length && l ? .length || !r,
                            f = {
                                chains: [...new Set(p ? h.chains.concat(r || []) : r)],
                                methods: [...new Set(h.methods.concat(null != n && n.length ? n : nT))],
                                events: [...new Set(h.events.concat(null != a && a.length ? a : nk))],
                                rpcMap: c
                            };
                        return {
                            required: t.length ? h : void 0,
                            optional: r.length ? f : void 0
                        }
                    }(this.rpc);
                    try {
                        let i = await new Promise(async (i, n) => {
                            var s;
                            this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal(e => {
                                e.open || this.signer.session || (this.signer.abortPairingAttempt(), n(Error("Connection request reset. Please try again.")))
                            })), await this.signer.connect(nF(nH({
                                namespaces: nH({}, t && {
                                    [this.namespace]: t
                                })
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: e ? .pairingTopic
                            })).then(e => {
                                i(e)
                            }).catch(e => {
                                n(Error(e.message))
                            })
                        });
                        if (!i) return;
                        let n = (0, o.guN)(i.namespaces, [this.namespace]);
                        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n), this.setAccounts(n), this.events.emit("connect", {
                            chainId: nK(this.chainId)
                        })
                    } catch (e) {
                        throw this.signer.logger.error(e), e
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async authenticate(e) {
                    if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts({
                        chains: e ? .chains
                    });
                    try {
                        let t = await new Promise(async (t, r) => {
                                var i;
                                this.rpc.showQrModal && (null == (i = this.modal) || i.subscribeModal(e => {
                                    e.open || this.signer.session || (this.signer.abortPairingAttempt(), r(Error("Connection request reset. Please try again.")))
                                })), await this.signer.authenticate(nF(nH({}, e), {
                                    chains: this.rpc.chains
                                })).then(e => {
                                    t(e)
                                }).catch(e => {
                                    r(Error(e.message))
                                })
                            }),
                            r = t.session;
                        if (r) {
                            let e = (0, o.guN)(r.namespaces, [this.namespace]);
                            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : e), this.setAccounts(e), this.events.emit("connect", {
                                chainId: nK(this.chainId)
                            })
                        }
                        return t
                    } catch (e) {
                        throw this.signer.logger.error(e), e
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", e)
                    }), this.signer.on("chainChanged", e => {
                        let t = parseInt(e);
                        this.chainId = t, this.events.emit("chainChanged", nK(this.chainId)), this.persist()
                    }), this.signer.on("session_update", e => {
                        this.events.emit("session_update", e)
                    }), this.signer.on("session_delete", e => {
                        this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", nF(nH({}, (0, o.D6H)("USER_DISCONNECTED")), {
                            data: e.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", e => {
                        var t, r;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: e
                        })), this.events.emit("display_uri", e)
                    })
                }
                switchEthereumChain(e) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: e.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(e) {
                    return "string" == typeof e && e.startsWith(`${this.namespace}:`)
                }
                formatChainId(e) {
                    return `${this.namespace}:${e}`
                }
                parseChainId(e) {
                    return Number(e.split(":")[1])
                }
                setChainIds(e) {
                    let t = e.filter(e => this.isCompatibleChainId(e)).map(e => this.parseChainId(e));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", nK(this.chainId)), this.persist())
                }
                setChainId(e) {
                    if (this.isCompatibleChainId(e)) {
                        let t = this.parseChainId(e);
                        this.chainId = t, this.switchEthereumChain(t)
                    }
                }
                parseAccountId(e) {
                    let [t, r, i] = e.split(":");
                    return {
                        chainId: `${t}:${r}`,
                        address: i
                    }
                }
                setAccounts(e) {
                    this.accounts = e.filter(e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map(e => this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(e) {
                    var t, r;
                    let i = null != (t = e ? .chains) ? t : [],
                        n = null != (r = e ? .optionalChains) ? r : [],
                        s = i.concat(n);
                    if (!s.length) throw Error("No chains specified in either `chains` or `optionalChains`");
                    let o = i.length ? e ? .methods || nR : [],
                        a = i.length ? e ? .events || nN : [],
                        c = e ? .optionalMethods || [],
                        h = e ? .optionalEvents || [],
                        u = e ? .rpcMap || this.buildRpcMap(s, e.projectId),
                        l = e ? .qrModalOptions || void 0;
                    return {
                        chains: i ? .map(e => this.formatChainId(e)),
                        optionalChains: n.map(e => this.formatChainId(e)),
                        methods: o,
                        events: a,
                        optionalMethods: c,
                        optionalEvents: h,
                        rpcMap: u,
                        showQrModal: !!(null != e && e.showQrModal),
                        qrModalOptions: l,
                        projectId: e.projectId,
                        metadata: e.metadata
                    }
                }
                buildRpcMap(e, t) {
                    let r = {};
                    return e.forEach(e => {
                        r[e] = this.getRpcUrl(e, t)
                    }), r
                }
                async initialize(e) {
                    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? nB(this.rpc.chains) : nB(this.rpc.optionalChains), this.signer = await nA.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: e.disableProviderPing,
                            relayUrl: e.relayUrl,
                            storageOptions: e.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let e;
                        try {
                            let {
                                WalletConnectModal: t
                            } = await r.e(6536).then(r.bind(r, 96536));
                            e = t
                        } catch {
                            throw Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (e) try {
                            this.modal = new e(nH({
                                projectId: this.rpc.projectId
                            }, this.rpc.qrModalOptions))
                        } catch (e) {
                            throw this.signer.logger.error(e), Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(e) {
                    if (!e) return;
                    let {
                        chains: t,
                        optionalChains: r,
                        rpcMap: i
                    } = e;
                    t && (0, o.qt8)(t) && (this.rpc.chains = t.map(e => this.formatChainId(e)), t.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    })), r && (0, o.qt8)(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = r ? .map(e => this.formatChainId(e)), r.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    }))
                }
                getRpcUrl(e, t) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (this.session) try {
                        let e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                            t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
                        this.setChainIds(e ? [this.formatChainId(e)] : t ? .accounts), this.setAccounts(t ? .accounts)
                    } catch (e) {
                        this.signer.logger.error("Failed to load persisted session, clearing state..."), this.signer.logger.error(e), await this.disconnect().catch(e => this.signer.logger.warn(e))
                    }
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(e) {
                    return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map(e => this.parseAccount(e))
                }
            }
            let nW = nV
        },
        49478: function(e, t, r) {
            "use strict";
            r.d(t, {
                iO: function() {
                    return i
                }
            });
            let i = {
                waku: {
                    publish: "waku_publish",
                    batchPublish: "waku_batchPublish",
                    subscribe: "waku_subscribe",
                    batchSubscribe: "waku_batchSubscribe",
                    subscription: "waku_subscription",
                    unsubscribe: "waku_unsubscribe",
                    batchUnsubscribe: "waku_batchUnsubscribe",
                    batchFetchMessages: "waku_batchFetchMessages"
                },
                irn: {
                    publish: "irn_publish",
                    batchPublish: "irn_batchPublish",
                    subscribe: "irn_subscribe",
                    batchSubscribe: "irn_batchSubscribe",
                    subscription: "irn_subscription",
                    unsubscribe: "irn_unsubscribe",
                    batchUnsubscribe: "irn_batchUnsubscribe",
                    batchFetchMessages: "irn_batchFetchMessages"
                },
                iridium: {
                    publish: "iridium_publish",
                    batchPublish: "iridium_batchPublish",
                    subscribe: "iridium_subscribe",
                    batchSubscribe: "iridium_batchSubscribe",
                    subscription: "iridium_subscription",
                    unsubscribe: "iridium_unsubscribe",
                    batchUnsubscribe: "iridium_batchUnsubscribe",
                    batchFetchMessages: "iridium_batchFetchMessages"
                }
            }
        },
        97947: function() {},
        37001: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(96579);
            i.__exportStar(r(19282), t), i.__exportStar(r(18980), t)
        },
        19282: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_THOUSAND = t.ONE_HUNDRED = void 0, t.ONE_HUNDRED = 100, t.ONE_THOUSAND = 1e3
        },
        18980: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = 5 * t.ONE_MINUTE, t.TEN_MINUTES = 10 * t.ONE_MINUTE, t.THIRTY_MINUTES = 30 * t.ONE_MINUTE, t.SIXTY_MINUTES = 60 * t.ONE_MINUTE, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = 3 * t.ONE_HOUR, t.SIX_HOURS = 6 * t.ONE_HOUR, t.TWELVE_HOURS = 12 * t.ONE_HOUR, t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = 3 * t.ONE_DAY, t.FIVE_DAYS = 5 * t.ONE_DAY, t.SEVEN_DAYS = 7 * t.ONE_DAY, t.THIRTY_DAYS = 30 * t.ONE_DAY, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = 2 * t.ONE_WEEK, t.THREE_WEEKS = 3 * t.ONE_WEEK, t.FOUR_WEEKS = 4 * t.ONE_WEEK, t.ONE_YEAR = 365 * t.ONE_DAY
        },
        88316: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(96579);
            i.__exportStar(r(51199), t), i.__exportStar(r(82892), t), i.__exportStar(r(9733), t), i.__exportStar(r(37001), t)
        },
        9733: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(96579);
            i.__exportStar(r(77378), t)
        },
        77378: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IWatch = void 0;
            class r {}
            t.IWatch = r
        },
        29937: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fromMiliseconds = t.toMiliseconds = void 0;
            let i = r(37001);
            t.toMiliseconds = function(e) {
                return e * i.ONE_THOUSAND
            }, t.fromMiliseconds = function(e) {
                return Math.floor(e / i.ONE_THOUSAND)
            }
        },
        79837: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.delay = void 0, t.delay = function(e) {
                return new Promise(t => {
                    setTimeout(() => {
                        t(!0)
                    }, e)
                })
            }
        },
        51199: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(96579);
            i.__exportStar(r(79837), t), i.__exportStar(r(29937), t)
        },
        82892: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Watch = void 0;
            class r {
                constructor() {
                    this.timestamps = new Map
                }
                start(e) {
                    if (this.timestamps.has(e)) throw Error(`Watch already started for label: ${e}`);
                    this.timestamps.set(e, {
                        started: Date.now()
                    })
                }
                stop(e) {
                    let t = this.get(e);
                    if (void 0 !== t.elapsed) throw Error(`Watch already stopped for label: ${e}`);
                    let r = Date.now() - t.started;
                    this.timestamps.set(e, {
                        started: t.started,
                        elapsed: r
                    })
                }
                get(e) {
                    let t = this.timestamps.get(e);
                    if (void 0 === t) throw Error(`No timestamp found for label: ${e}`);
                    return t
                }
                elapsed(e) {
                    let t = this.get(e),
                        r = t.elapsed || Date.now() - t.started;
                    return r
                }
            }
            t.Watch = r, t.default = r
        },
        1193: function(e, t) {
            "use strict";

            function r(e) {
                let t;
                return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t
            }

            function i(e) {
                let t = r(e);
                if (!t) throw Error(`${e} is not defined in Window`);
                return t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, t.getFromWindow = r, t.getFromWindowOrThrow = i, t.getDocumentOrThrow = function() {
                return i("document")
            }, t.getDocument = function() {
                return r("document")
            }, t.getNavigatorOrThrow = function() {
                return i("navigator")
            }, t.getNavigator = function() {
                return r("navigator")
            }, t.getLocationOrThrow = function() {
                return i("location")
            }, t.getLocation = function() {
                return r("location")
            }, t.getCryptoOrThrow = function() {
                return i("crypto")
            }, t.getCrypto = function() {
                return r("crypto")
            }, t.getLocalStorageOrThrow = function() {
                return i("localStorage")
            }, t.getLocalStorage = function() {
                return r("localStorage")
            }
        },
        35775: function(e, t, r) {
            "use strict";
            t.D = void 0;
            let i = r(1193);
            t.D = function() {
                let e, t, r;
                try {
                    e = i.getDocumentOrThrow(), t = i.getLocationOrThrow()
                } catch (e) {
                    return null
                }

                function n(...t) {
                    let r = e.getElementsByTagName("meta");
                    for (let e = 0; e < r.length; e++) {
                        let i = r[e],
                            n = ["itemprop", "property", "name"].map(e => i.getAttribute(e)).filter(e => !!e && t.includes(e));
                        if (n.length && n) {
                            let e = i.getAttribute("content");
                            if (e) return e
                        }
                    }
                    return ""
                }
                let s = ((r = n("name", "og:site_name", "og:title", "twitter:title")) || (r = e.title), r),
                    o = function() {
                        let e = n("description", "og:description", "twitter:description", "keywords");
                        return e
                    }(),
                    a = t.origin,
                    c = function() {
                        let r = e.getElementsByTagName("link"),
                            i = [];
                        for (let e = 0; e < r.length; e++) {
                            let n = r[e],
                                s = n.getAttribute("rel");
                            if (s && s.toLowerCase().indexOf("icon") > -1) {
                                let e = n.getAttribute("href");
                                if (e) {
                                    if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                                        let r = t.protocol + "//" + t.host;
                                        if (0 === e.indexOf("/")) r += e;
                                        else {
                                            let i = t.pathname.split("/");
                                            i.pop();
                                            let n = i.join("/");
                                            r += n + "/" + e
                                        }
                                        i.push(r)
                                    } else if (0 === e.indexOf("//")) {
                                        let r = t.protocol + e;
                                        i.push(r)
                                    } else i.push(e)
                                }
                            }
                        }
                        return i
                    }();
                return {
                    description: o,
                    url: a,
                    icons: c,
                    name: s
                }
            }
        },
        46350: function(e, t) {
            var r = "undefined" != typeof self ? self : this,
                i = function() {
                    function e() {
                        this.fetch = !1, this.DOMException = r.DOMException
                    }
                    return e.prototype = r, new e
                }();
            (function(e) {
                var t = {
                    searchParams: "URLSearchParams" in i,
                    iterable: "Symbol" in i && "iterator" in Symbol,
                    blob: "FileReader" in i && "Blob" in i && function() {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in i,
                    arrayBuffer: "ArrayBuffer" in i
                };
                if (t.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    n = ArrayBuffer.isView || function(e) {
                        return e && r.indexOf(Object.prototype.toString.call(e)) > -1
                    };

                function s(e) {
                    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw TypeError("Invalid character in header field name");
                    return e.toLowerCase()
                }

                function o(e) {
                    return "string" != typeof e && (e = String(e)), e
                }

                function a(e) {
                    var r = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return t.iterable && (r[Symbol.iterator] = function() {
                        return r
                    }), r
                }

                function Headers(e) {
                    this.map = {}, e instanceof Headers ? e.forEach(function(e, t) {
                        this.append(t, e)
                    }, this) : Array.isArray(e) ? e.forEach(function(e) {
                        this.append(e[0], e[1])
                    }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                        this.append(t, e[t])
                    }, this)
                }

                function c(e) {
                    if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
                    e.bodyUsed = !0
                }

                function h(e) {
                    return new Promise(function(t, r) {
                        e.onload = function() {
                            t(e.result)
                        }, e.onerror = function() {
                            r(e.error)
                        }
                    })
                }

                function u(e) {
                    var t = new FileReader,
                        r = h(t);
                    return t.readAsArrayBuffer(e), r
                }

                function l(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer
                }

                function p() {
                    return this.bodyUsed = !1, this._initBody = function(e) {
                        if (this._bodyInit = e, e) {
                            if ("string" == typeof e) this._bodyText = e;
                            else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                            else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                            else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                            else {
                                var r;
                                t.arrayBuffer && t.blob && (r = e) && DataView.prototype.isPrototypeOf(r) ? (this._bodyArrayBuffer = l(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : t.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || n(e)) ? this._bodyArrayBuffer = l(e) : this._bodyText = e = Object.prototype.toString.call(e)
                            }
                        } else this._bodyText = "";
                        !this.headers.get("content-type") && ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, t.blob && (this.blob = function() {
                        var e = c(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                        throw Error("could not read FormData body as blob")
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? c(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(u)
                    }), this.text = function() {
                        var e, t, r, i = c(this);
                        if (i) return i;
                        if (this._bodyBlob) return e = this._bodyBlob, r = h(t = new FileReader), t.readAsText(e), r;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                            for (var t = new Uint8Array(e), r = Array(t.length), i = 0; i < t.length; i++) r[i] = String.fromCharCode(t[i]);
                            return r.join("")
                        }(this._bodyArrayBuffer));
                        if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                        throw Error("could not read FormData body as text")
                    }, t.formData && (this.formData = function() {
                        return this.text().then(d)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                Headers.prototype.append = function(e, t) {
                    e = s(e), t = o(t);
                    var r = this.map[e];
                    this.map[e] = r ? r + ", " + t : t
                }, Headers.prototype.delete = function(e) {
                    delete this.map[s(e)]
                }, Headers.prototype.get = function(e) {
                    return e = s(e), this.has(e) ? this.map[e] : null
                }, Headers.prototype.has = function(e) {
                    return this.map.hasOwnProperty(s(e))
                }, Headers.prototype.set = function(e, t) {
                    this.map[s(e)] = o(t)
                }, Headers.prototype.forEach = function(e, t) {
                    for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
                }, Headers.prototype.keys = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push(r)
                    }), a(e)
                }, Headers.prototype.values = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }), a(e)
                }, Headers.prototype.entries = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push([r, t])
                    }), a(e)
                }, t.iterable && (Headers.prototype[Symbol.iterator] = Headers.prototype.entries);
                var f = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function Request(e, t) {
                    var r, i, n = (t = t || {}).body;
                    if (e instanceof Request) {
                        if (e.bodyUsed) throw TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new Headers(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new Headers(t.headers)), this.method = (i = (r = t.method || this.method || "GET").toUpperCase(), f.indexOf(i) > -1 ? i : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(n)
                }

                function d(e) {
                    var t = new FormData;
                    return e.trim().split("&").forEach(function(e) {
                        if (e) {
                            var r = e.split("="),
                                i = r.shift().replace(/\+/g, " "),
                                n = r.join("=").replace(/\+/g, " ");
                            t.append(decodeURIComponent(i), decodeURIComponent(n))
                        }
                    }), t
                }

                function Response(e, t) {
                    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new Headers(t.headers), this.url = t.url || "", this._initBody(e)
                }
                Request.prototype.clone = function() {
                    return new Request(this, {
                        body: this._bodyInit
                    })
                }, p.call(Request.prototype), p.call(Response.prototype), Response.prototype.clone = function() {
                    return new Response(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new Headers(this.headers),
                        url: this.url
                    })
                }, Response.error = function() {
                    var e = new Response(null, {
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error", e
                };
                var g = [301, 302, 303, 307, 308];
                Response.redirect = function(e, t) {
                    if (-1 === g.indexOf(t)) throw RangeError("Invalid status code");
                    return new Response(null, {
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                }, e.DOMException = i.DOMException;
                try {
                    new e.DOMException
                } catch (t) {
                    e.DOMException = function(e, t) {
                        this.message = e, this.name = t;
                        var r = Error(e);
                        this.stack = r.stack
                    }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
                }

                function y(r, i) {
                    return new Promise(function(n, s) {
                        var o = new Request(r, i);
                        if (o.signal && o.signal.aborted) return s(new e.DOMException("Aborted", "AbortError"));
                        var a = new XMLHttpRequest;

                        function c() {
                            a.abort()
                        }
                        a.onload = function() {
                            var e, t, r = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: (e = a.getAllResponseHeaders() || "", t = new Headers, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                                    var r = e.split(":"),
                                        i = r.shift().trim();
                                    if (i) {
                                        var n = r.join(":").trim();
                                        t.append(i, n)
                                    }
                                }), t)
                            };
                            r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL"), n(new Response("response" in a ? a.response : a.responseText, r))
                        }, a.onerror = function() {
                            s(TypeError("Network request failed"))
                        }, a.ontimeout = function() {
                            s(TypeError("Network request failed"))
                        }, a.onabort = function() {
                            s(new e.DOMException("Aborted", "AbortError"))
                        }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && t.blob && (a.responseType = "blob"), o.headers.forEach(function(e, t) {
                            a.setRequestHeader(t, e)
                        }), o.signal && (o.signal.addEventListener("abort", c), a.onreadystatechange = function() {
                            4 === a.readyState && o.signal.removeEventListener("abort", c)
                        }), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                    })
                }
                y.polyfill = !0, i.fetch || (i.fetch = y, i.Headers = Headers, i.Request = Request, i.Response = Response), e.Headers = Headers, e.Request = Request, e.Response = Response, e.fetch = y, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            })({}), i.fetch.ponyfill = !0, delete i.fetch.polyfill, (t = i.fetch).default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
        },
        77372: function(e) {
            "use strict";
            var t = "%[a-f0-9]{2}",
                r = RegExp("(" + t + ")|([^%]+?)", "gi"),
                i = RegExp("(" + t + ")+", "gi");
            e.exports = function(e) {
                if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                } catch (t) {
                    return function(e) {
                        for (var t = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, n = i.exec(e); n;) {
                            try {
                                t[n[0]] = decodeURIComponent(n[0])
                            } catch (e) {
                                var s = function(e) {
                                    try {
                                        return decodeURIComponent(e)
                                    } catch (n) {
                                        for (var t = e.match(r) || [], i = 1; i < t.length; i++) t = (e = (function e(t, r) {
                                            try {
                                                return [decodeURIComponent(t.join(""))]
                                            } catch (e) {}
                                            if (1 === t.length) return t;
                                            r = r || 1;
                                            var i = t.slice(0, r),
                                                n = t.slice(r);
                                            return Array.prototype.concat.call([], e(i), e(n))
                                        })(t, i).join("")).match(r) || [];
                                        return e
                                    }
                                }(n[0]);
                                s !== n[0] && (t[n[0]] = s)
                            }
                            n = i.exec(e)
                        }
                        t["%C2"] = "�";
                        for (var o = Object.keys(t), a = 0; a < o.length; a++) {
                            var c = o[a];
                            e = e.replace(RegExp(c, "g"), t[c])
                        }
                        return e
                    }(e)
                }
            }
        },
        30015: function(e, t, r) {
            "use strict";
            r.d(t, {
                qY: function() {
                    return f
                }
            });
            var i = r(28070),
                n = function(e, t, r) {
                    if (r || 2 == arguments.length)
                        for (var i, n = 0, s = t.length; n < s; n++) !i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
                    return e.concat(i || Array.prototype.slice.call(t))
                },
                s = function(e, t, r) {
                    this.name = e, this.version = t, this.os = r, this.type = "browser"
                },
                o = function(e) {
                    this.version = e, this.type = "node", this.name = "node", this.os = i.platform
                },
                a = function(e, t, r, i) {
                    this.name = e, this.version = t, this.os = r, this.bot = i, this.type = "bot-device"
                },
                c = function() {
                    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                },
                h = function() {
                    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                },
                u = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                l = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
                    ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
                    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FB[AS]V\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["curl", /^curl\/([0-9\.]+)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                ],
                p = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/]
                ];

            function f(e) {
                return e ? d(e) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new h : "undefined" != typeof navigator ? d(navigator.userAgent) : void 0 !== i && i.version ? new o(i.version.slice(1)) : null
            }

            function d(e) {
                var t = "" !== e && l.reduce(function(t, r) {
                    var i = r[0],
                        n = r[1];
                    if (t) return t;
                    var s = n.exec(e);
                    return !!s && [i, s]
                }, !1);
                if (!t) return null;
                var r = t[0],
                    i = t[1];
                if ("searchbot" === r) return new c;
                var o = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
                o ? o.length < 3 && (o = n(n([], o, !0), function(e) {
                    for (var t = [], r = 0; r < e; r++) t.push("0");
                    return t
                }(3 - o.length), !0)) : o = [];
                var h = o.join("."),
                    f = function(e) {
                        for (var t = 0, r = p.length; t < r; t++) {
                            var i = p[t],
                                n = i[0];
                            if (i[1].exec(e)) return n
                        }
                        return null
                    }(e),
                    d = u.exec(e);
                return d && d[1] ? new a(r, h, f, d[1]) : new s(r, h, f)
            }
        },
        68495: function(e) {
            "use strict";
            var t, r = "object" == typeof Reflect ? Reflect : null,
                i = r && "function" == typeof r.apply ? r.apply : function(e, t, r) {
                    return Function.prototype.apply.call(e, t, r)
                };
            t = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : function(e) {
                return Object.getOwnPropertyNames(e)
            };
            var n = Number.isNaN || function(e) {
                return e != e
            };

            function s() {
                s.init.call(this)
            }
            e.exports = s, e.exports.once = function(e, t) {
                return new Promise(function(r, i) {
                    function n(r) {
                        e.removeListener(t, s), i(r)
                    }

                    function s() {
                        "function" == typeof e.removeListener && e.removeListener("error", n), r([].slice.call(arguments))
                    }
                    g(e, t, s, {
                        once: !0
                    }), "error" !== t && "function" == typeof e.on && g(e, "error", n, {
                        once: !0
                    })
                })
            }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
            var o = 10;

            function a(e) {
                if ("function" != typeof e) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
            }

            function c(e) {
                return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
            }

            function h(e, t, r, i) {
                if (a(r), void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), s = e._events), o = s[t]), void 0 === o) o = s[t] = r, ++e._eventsCount;
                else if ("function" == typeof o ? o = s[t] = i ? [r, o] : [o, r] : i ? o.unshift(r) : o.push(r), (n = c(e)) > 0 && o.length > n && !o.warned) {
                    o.warned = !0;
                    var n, s, o, h = Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    h.name = "MaxListenersExceededWarning", h.emitter = e, h.type = t, h.count = o.length, console && console.warn && console.warn(h)
                }
                return e
            }

            function u() {
                if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function l(e, t, r) {
                var i = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: t,
                        listener: r
                    },
                    n = u.bind(i);
                return n.listener = r, i.wrapFn = n, n
            }

            function p(e, t, r) {
                var i = e._events;
                if (void 0 === i) return [];
                var n = i[t];
                return void 0 === n ? [] : "function" == typeof n ? r ? [n.listener || n] : [n] : r ? function(e) {
                    for (var t = Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
                    return t
                }(n) : d(n, n.length)
            }

            function f(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var r = t[e];
                    if ("function" == typeof r) return 1;
                    if (void 0 !== r) return r.length
                }
                return 0
            }

            function d(e, t) {
                for (var r = Array(t), i = 0; i < t; ++i) r[i] = e[i];
                return r
            }

            function g(e, t, r, i) {
                if ("function" == typeof e.on) i.once ? e.once(t, r) : e.on(t, r);
                else if ("function" == typeof e.addEventListener) e.addEventListener(t, function n(s) {
                    i.once && e.removeEventListener(t, n), r(s)
                });
                else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
            }
            Object.defineProperty(s, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(e) {
                    if ("number" != typeof e || e < 0 || n(e)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    o = e
                }
            }), s.init = function() {
                (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, s.prototype.setMaxListeners = function(e) {
                if ("number" != typeof e || e < 0 || n(e)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                return this._maxListeners = e, this
            }, s.prototype.getMaxListeners = function() {
                return c(this)
            }, s.prototype.emit = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
                var n = "error" === e,
                    s = this._events;
                if (void 0 !== s) n = n && void 0 === s.error;
                else if (!n) return !1;
                if (n) {
                    if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
                    var o, a = Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                    throw a.context = o, a
                }
                var c = s[e];
                if (void 0 === c) return !1;
                if ("function" == typeof c) i(c, this, t);
                else
                    for (var h = c.length, u = d(c, h), r = 0; r < h; ++r) i(u[r], this, t);
                return !0
            }, s.prototype.addListener = function(e, t) {
                return h(this, e, t, !1)
            }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) {
                return h(this, e, t, !0)
            }, s.prototype.once = function(e, t) {
                return a(t), this.on(e, l(this, e, t)), this
            }, s.prototype.prependOnceListener = function(e, t) {
                return a(t), this.prependListener(e, l(this, e, t)), this
            }, s.prototype.removeListener = function(e, t) {
                var r, i, n, s, o;
                if (a(t), void 0 === (i = this._events) || void 0 === (r = i[e])) return this;
                if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t));
                else if ("function" != typeof r) {
                    for (n = -1, s = r.length - 1; s >= 0; s--)
                        if (r[s] === t || r[s].listener === t) {
                            o = r[s].listener, n = s;
                            break
                        }
                    if (n < 0) return this;
                    0 === n ? r.shift() : function(e, t) {
                        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                        e.pop()
                    }(r, n), 1 === r.length && (i[e] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", e, o || t)
                }
                return this
            }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e) {
                var t, r, i;
                if (void 0 === (r = this._events)) return this;
                if (void 0 === r.removeListener) return 0 == arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
                if (0 == arguments.length) {
                    var n, s = Object.keys(r);
                    for (i = 0; i < s.length; ++i) "removeListener" !== (n = s[i]) && this.removeAllListeners(n);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" == typeof(t = r[e])) this.removeListener(e, t);
                else if (void 0 !== t)
                    for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
                return this
            }, s.prototype.listeners = function(e) {
                return p(this, e, !0)
            }, s.prototype.rawListeners = function(e) {
                return p(this, e, !1)
            }, s.listenerCount = function(e, t) {
                return "function" == typeof e.listenerCount ? e.listenerCount(t) : f.call(e, t)
            }, s.prototype.listenerCount = f, s.prototype.eventNames = function() {
                return this._eventsCount > 0 ? t(this._events) : []
            }
        },
        65194: function(e) {
            "use strict";
            e.exports = function(e, t) {
                for (var r = {}, i = Object.keys(e), n = Array.isArray(t), s = 0; s < i.length; s++) {
                    var o = i[s],
                        a = e[o];
                    (n ? -1 !== t.indexOf(o) : t(o, a, e)) && (r[o] = a)
                }
                return r
            }
        },
        36657: function(e, t, r) {
            e = r.nmd(e);
            var i, n, s, o = "__lodash_hash_undefined__",
                a = "[object Arguments]",
                c = "[object Array]",
                h = "[object Boolean]",
                u = "[object Date]",
                l = "[object Error]",
                p = "[object Function]",
                f = "[object Map]",
                d = "[object Number]",
                g = "[object Object]",
                y = "[object Promise]",
                v = "[object RegExp]",
                m = "[object Set]",
                b = "[object String]",
                w = "[object WeakMap]",
                _ = "[object ArrayBuffer]",
                E = "[object DataView]",
                D = /^\[object .+?Constructor\]$/,
                I = /^(?:0|[1-9]\d*)$/,
                S = {};
            S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0, S[a] = S[c] = S[_] = S[h] = S[E] = S[u] = S[l] = S[p] = S[f] = S[d] = S[g] = S[v] = S[m] = S[b] = S[w] = !1;
            var C = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                P = "object" == typeof self && self && self.Object === Object && self,
                O = C || P || Function("return this")(),
                x = t && !t.nodeType && t,
                A = x && e && !e.nodeType && e,
                R = A && A.exports === x,
                T = R && C.process,
                N = function() {
                    try {
                        return T && T.binding && T.binding("util")
                    } catch (e) {}
                }(),
                k = N && N.isTypedArray;

            function j(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e, i) {
                    r[++t] = [i, e]
                }), r
            }

            function L(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e) {
                    r[++t] = e
                }), r
            }
            var M = Array.prototype,
                q = Function.prototype,
                U = Object.prototype,
                z = O["__core-js_shared__"],
                $ = q.toString,
                H = U.hasOwnProperty,
                F = (i = /[^.]+$/.exec(z && z.keys && z.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "",
                B = U.toString,
                K = RegExp("^" + $.call(H).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                V = R ? O.Buffer : void 0,
                Symbol = O.Symbol,
                Uint8Array = O.Uint8Array,
                W = U.propertyIsEnumerable,
                G = M.splice,
                Y = Symbol ? Symbol.toStringTag : void 0,
                J = Object.getOwnPropertySymbols,
                Q = V ? V.isBuffer : void 0,
                X = (n = Object.keys, s = Object, function(e) {
                    return n(s(e))
                }),
                DataView = em(O, "DataView"),
                Map = em(O, "Map"),
                Promise = em(O, "Promise"),
                Set = em(O, "Set"),
                WeakMap = em(O, "WeakMap"),
                Z = em(Object, "create"),
                ee = e_(DataView),
                et = e_(Map),
                er = e_(Promise),
                ei = e_(Set),
                en = e_(WeakMap),
                es = Symbol ? Symbol.prototype : void 0,
                eo = es ? es.valueOf : void 0;

            function ea(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ec(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function eh(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function eu(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new eh; ++t < r;) this.add(e[t])
            }

            function el(e) {
                var t = this.__data__ = new ec(e);
                this.size = t.size
            }

            function ep(e, t) {
                for (var r = e.length; r--;)
                    if (eE(e[r][0], t)) return r;
                return -1
            }

            function ef(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Y && Y in Object(e) ? function(e) {
                    var t = H.call(e, Y),
                        r = e[Y];
                    try {
                        e[Y] = void 0;
                        var i = !0
                    } catch (e) {}
                    var n = B.call(e);
                    return i && (t ? e[Y] = r : delete e[Y]), n
                }(e) : B.call(e)
            }

            function ed(e) {
                return ex(e) && ef(e) == a
            }

            function eg(e, t, r, i, n, s) {
                var o = 1 & r,
                    a = e.length,
                    c = t.length;
                if (a != c && !(o && c > a)) return !1;
                var h = s.get(e);
                if (h && s.get(t)) return h == t;
                var u = -1,
                    l = !0,
                    p = 2 & r ? new eu : void 0;
                for (s.set(e, t), s.set(t, e); ++u < a;) {
                    var f = e[u],
                        d = t[u];
                    if (i) var g = o ? i(d, f, u, t, e, s) : i(f, d, u, e, t, s);
                    if (void 0 !== g) {
                        if (g) continue;
                        l = !1;
                        break
                    }
                    if (p) {
                        if (! function(e, t) {
                                for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                                    if (t(e[r], r, e)) return !0;
                                return !1
                            }(t, function(e, t) {
                                if (!p.has(t) && (f === e || n(f, e, r, i, s))) return p.push(t)
                            })) {
                            l = !1;
                            break
                        }
                    } else if (!(f === d || n(f, d, r, i, s))) {
                        l = !1;
                        break
                    }
                }
                return s.delete(e), s.delete(t), l
            }

            function ey(e) {
                var t;
                return t = function(e) {
                    return null != e && eP(e.length) && !eC(e) ? function(e, t) {
                        var r, i = eI(e),
                            n = !i && eD(e),
                            s = !i && !n && eS(e),
                            o = !i && !n && !s && eA(e),
                            a = i || n || s || o,
                            c = a ? function(e, t) {
                                for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                                return i
                            }(e.length, String) : [],
                            h = c.length;
                        for (var u in e) H.call(e, u) && !(a && ("length" == u || s && ("offset" == u || "parent" == u) || o && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || (r = null == (r = h) ? 9007199254740991 : r) && ("number" == typeof u || I.test(u)) && u > -1 && u % 1 == 0 && u < r)) && c.push(u);
                        return c
                    }(e) : function(e) {
                        if (t = e && e.constructor, e !== ("function" == typeof t && t.prototype || U)) return X(e);
                        var t, r = [];
                        for (var i in Object(e)) H.call(e, i) && "constructor" != i && r.push(i);
                        return r
                    }(e)
                }(e), eI(e) ? t : function(e, t) {
                    for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                    return e
                }(t, eb(e))
            }

            function ev(e, t) {
                var r, i = e.__data__;
                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
            }

            function em(e, t) {
                var r = null == e ? void 0 : e[t];
                return !(!eO(r) || F && F in r) && (eC(r) ? K : D).test(e_(r)) ? r : void 0
            }
            ea.prototype.clear = function() {
                this.__data__ = Z ? Z(null) : {}, this.size = 0
            }, ea.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, ea.prototype.get = function(e) {
                var t = this.__data__;
                if (Z) {
                    var r = t[e];
                    return r === o ? void 0 : r
                }
                return H.call(t, e) ? t[e] : void 0
            }, ea.prototype.has = function(e) {
                var t = this.__data__;
                return Z ? void 0 !== t[e] : H.call(t, e)
            }, ea.prototype.set = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = Z && void 0 === t ? o : t, this
            }, ec.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, ec.prototype.delete = function(e) {
                var t = this.__data__,
                    r = ep(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : G.call(t, r, 1), --this.size, !0)
            }, ec.prototype.get = function(e) {
                var t = this.__data__,
                    r = ep(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, ec.prototype.has = function(e) {
                return ep(this.__data__, e) > -1
            }, ec.prototype.set = function(e, t) {
                var r = this.__data__,
                    i = ep(r, e);
                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
            }, eh.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new ea,
                    map: new(Map || ec),
                    string: new ea
                }
            }, eh.prototype.delete = function(e) {
                var t = ev(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, eh.prototype.get = function(e) {
                return ev(this, e).get(e)
            }, eh.prototype.has = function(e) {
                return ev(this, e).has(e)
            }, eh.prototype.set = function(e, t) {
                var r = ev(this, e),
                    i = r.size;
                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
            }, eu.prototype.add = eu.prototype.push = function(e) {
                return this.__data__.set(e, o), this
            }, eu.prototype.has = function(e) {
                return this.__data__.has(e)
            }, el.prototype.clear = function() {
                this.__data__ = new ec, this.size = 0
            }, el.prototype.delete = function(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            }, el.prototype.get = function(e) {
                return this.__data__.get(e)
            }, el.prototype.has = function(e) {
                return this.__data__.has(e)
            }, el.prototype.set = function(e, t) {
                var r = this.__data__;
                if (r instanceof ec) {
                    var i = r.__data__;
                    if (!Map || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new eh(i)
                }
                return r.set(e, t), this.size = r.size, this
            };
            var eb = J ? function(e) {
                    return null == e ? [] : function(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }(J(e = Object(e)), function(t) {
                        return W.call(e, t)
                    })
                } : function() {
                    return []
                },
                ew = ef;

            function e_(e) {
                if (null != e) {
                    try {
                        return $.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }

            function eE(e, t) {
                return e === t || e != e && t != t
            }(DataView && ew(new DataView(new ArrayBuffer(1))) != E || Map && ew(new Map) != f || Promise && ew(Promise.resolve()) != y || Set && ew(new Set) != m || WeakMap && ew(new WeakMap) != w) && (ew = function(e) {
                var t = ef(e),
                    r = t == g ? e.constructor : void 0,
                    i = r ? e_(r) : "";
                if (i) switch (i) {
                    case ee:
                        return E;
                    case et:
                        return f;
                    case er:
                        return y;
                    case ei:
                        return m;
                    case en:
                        return w
                }
                return t
            });
            var eD = ed(function() {
                    return arguments
                }()) ? ed : function(e) {
                    return ex(e) && H.call(e, "callee") && !W.call(e, "callee")
                },
                eI = Array.isArray,
                eS = Q || function() {
                    return !1
                };

            function eC(e) {
                if (!eO(e)) return !1;
                var t = ef(e);
                return t == p || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }

            function eP(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }

            function eO(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function ex(e) {
                return null != e && "object" == typeof e
            }
            var eA = k ? function(e) {
                return k(e)
            } : function(e) {
                return ex(e) && eP(e.length) && !!S[ef(e)]
            };
            e.exports = function(e, t) {
                return function e(t, r, i, n, s) {
                    return t === r || (null != t && null != r && (ex(t) || ex(r)) ? function(e, t, r, i, n, s) {
                        var o = eI(e),
                            p = eI(t),
                            y = o ? c : ew(e),
                            w = p ? c : ew(t);
                        y = y == a ? g : y, w = w == a ? g : w;
                        var D = y == g,
                            I = w == g,
                            S = y == w;
                        if (S && eS(e)) {
                            if (!eS(t)) return !1;
                            o = !0, D = !1
                        }
                        if (S && !D) return s || (s = new el), o || eA(e) ? eg(e, t, r, i, n, s) : function(e, t, r, i, n, s, o) {
                            switch (r) {
                                case E:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                    e = e.buffer, t = t.buffer;
                                case _:
                                    if (e.byteLength != t.byteLength || !s(new Uint8Array(e), new Uint8Array(t))) break;
                                    return !0;
                                case h:
                                case u:
                                case d:
                                    return eE(+e, +t);
                                case l:
                                    return e.name == t.name && e.message == t.message;
                                case v:
                                case b:
                                    return e == t + "";
                                case f:
                                    var a = j;
                                case m:
                                    var c = 1 & i;
                                    if (a || (a = L), e.size != t.size && !c) break;
                                    var p = o.get(e);
                                    if (p) return p == t;
                                    i |= 2, o.set(e, t);
                                    var g = eg(a(e), a(t), i, n, s, o);
                                    return o.delete(e), g;
                                case "[object Symbol]":
                                    if (eo) return eo.call(e) == eo.call(t)
                            }
                            return !1
                        }(e, t, y, r, i, n, s);
                        if (!(1 & r)) {
                            var C = D && H.call(e, "__wrapped__"),
                                P = I && H.call(t, "__wrapped__");
                            if (C || P) {
                                var O = C ? e.value() : e,
                                    x = P ? t.value() : t;
                                return s || (s = new el), n(O, x, r, i, s)
                            }
                        }
                        return !!S && (s || (s = new el), function(e, t, r, i, n, s) {
                            var o = 1 & r,
                                a = ey(e),
                                c = a.length;
                            if (c != ey(t).length && !o) return !1;
                            for (var h = c; h--;) {
                                var u = a[h];
                                if (!(o ? u in t : H.call(t, u))) return !1
                            }
                            var l = s.get(e);
                            if (l && s.get(t)) return l == t;
                            var p = !0;
                            s.set(e, t), s.set(t, e);
                            for (var f = o; ++h < c;) {
                                var d = e[u = a[h]],
                                    g = t[u];
                                if (i) var y = o ? i(g, d, u, t, e, s) : i(d, g, u, e, t, s);
                                if (!(void 0 === y ? d === g || n(d, g, r, i, s) : y)) {
                                    p = !1;
                                    break
                                }
                                f || (f = "constructor" == u)
                            }
                            if (p && !f) {
                                var v = e.constructor,
                                    m = t.constructor;
                                v != m && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof m && m instanceof m) && (p = !1)
                            }
                            return s.delete(e), s.delete(t), p
                        }(e, t, r, i, n, s))
                    }(t, r, i, n, e, s) : t != t && r != r)
                }(e, t)
            }
        },
        5854: function(e) {
            "use strict";
            let t = self.fetch.bind(self);
            e.exports = t, e.exports.default = e.exports
        },
        84875: function(e, t, r) {
            "use strict";
            let i = r(55517),
                n = r(77372),
                s = r(31770),
                o = r(65194),
                a = e => null == e,
                c = Symbol("encodeFragmentIdentifier");

            function h(e) {
                if ("string" != typeof e || 1 !== e.length) throw TypeError("arrayFormatSeparator must be single character string")
            }

            function u(e, t) {
                return t.encode ? t.strict ? i(e) : encodeURIComponent(e) : e
            }

            function l(e, t) {
                return t.decode ? n(e) : e
            }

            function p(e) {
                let t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function f(e) {
                e = p(e);
                let t = e.indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function d(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : t.parseBooleans && null !== e && ("true" === e.toLowerCase() || "false" === e.toLowerCase()) && (e = "true" === e.toLowerCase()), e
            }

            function g(e, t) {
                h((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                let r = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, r, i) => {
                                    if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t) {
                                        i[e] = r;
                                        return
                                    }
                                    void 0 === i[e] && (i[e] = {}), i[e][t[1]] = r
                                };
                            case "bracket":
                                return (e, r, i) => {
                                    if (t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), !t) {
                                        i[e] = r;
                                        return
                                    }
                                    if (void 0 === i[e]) {
                                        i[e] = [r];
                                        return
                                    }
                                    i[e] = [].concat(i[e], r)
                                };
                            case "colon-list-separator":
                                return (e, r, i) => {
                                    if (t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), !t) {
                                        i[e] = r;
                                        return
                                    }
                                    if (void 0 === i[e]) {
                                        i[e] = [r];
                                        return
                                    }
                                    i[e] = [].concat(i[e], r)
                                };
                            case "comma":
                            case "separator":
                                return (t, r, i) => {
                                    let n = "string" == typeof r && r.includes(e.arrayFormatSeparator),
                                        s = "string" == typeof r && !n && l(r, e).includes(e.arrayFormatSeparator);
                                    r = s ? l(r, e) : r;
                                    let o = n || s ? r.split(e.arrayFormatSeparator).map(t => l(t, e)) : null === r ? r : l(r, e);
                                    i[t] = o
                                };
                            case "bracket-separator":
                                return (t, r, i) => {
                                    let n = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !n) {
                                        i[t] = r ? l(r, e) : r;
                                        return
                                    }
                                    let s = null === r ? [] : r.split(e.arrayFormatSeparator).map(t => l(t, e));
                                    if (void 0 === i[t]) {
                                        i[t] = s;
                                        return
                                    }
                                    i[t] = [].concat(i[t], s)
                                };
                            default:
                                return (e, t, r) => {
                                    if (void 0 === r[e]) {
                                        r[e] = t;
                                        return
                                    }
                                    r[e] = [].concat(r[e], t)
                                }
                        }
                    }(t),
                    i = Object.create(null);
                if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, ""))) return i;
                for (let n of e.split("&")) {
                    if ("" === n) continue;
                    let [e, o] = s(t.decode ? n.replace(/\+/g, " ") : n, "=");
                    o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : l(o, t), r(l(e, t), o, i)
                }
                for (let e of Object.keys(i)) {
                    let r = i[e];
                    if ("object" == typeof r && null !== r)
                        for (let e of Object.keys(r)) r[e] = d(r[e], t);
                    else i[e] = d(r, t)
                }
                return !1 === t.sort ? i : (!0 === t.sort ? Object.keys(i).sort() : Object.keys(i).sort(t.sort)).reduce((e, t) => {
                    let r = i[t];
                    return r && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
                    }(r) : e[t] = r, e
                }, Object.create(null))
            }
            t.extract = f, t.parse = g, t.stringify = (e, t) => {
                if (!e) return "";
                h((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                let r = r => t.skipNull && a(e[r]) || t.skipEmptyString && "" === e[r],
                    i = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, i) => {
                                    let n = r.length;
                                    return void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [u(t, e), "[", n, "]"].join("")] : [...r, [u(t, e), "[", u(n, e), "]=", u(i, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [u(t, e), "[]"].join("")] : [...r, [u(t, e), "[]=", u(i, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [u(t, e), ":list="].join("")] : [...r, [u(t, e), ":list=", u(i, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    let t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (i, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? i : (n = null === n ? "" : n, 0 === i.length) ? [
                                        [u(r, e), t, u(n, e)].join("")
                                    ] : [
                                        [i, u(n, e)].join(e.arrayFormatSeparator)
                                    ]
                                }
                            default:
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, u(t, e)] : [...r, [u(t, e), "=", u(i, e)].join("")]
                        }
                    }(t),
                    n = {};
                for (let t of Object.keys(e)) r(t) || (n[t] = e[t]);
                let s = Object.keys(n);
                return !1 !== t.sort && s.sort(t.sort), s.map(r => {
                    let n = e[r];
                    return void 0 === n ? "" : null === n ? u(r, t) : Array.isArray(n) ? 0 === n.length && "bracket-separator" === t.arrayFormat ? u(r, t) + "[]" : n.reduce(i(r), []).join("&") : u(r, t) + "=" + u(n, t)
                }).filter(e => e.length > 0).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                let [r, i] = s(e, "#");
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: g(f(e), t)
                }, t && t.parseFragmentIdentifier && i ? {
                    fragmentIdentifier: l(i, t)
                } : {})
            }, t.stringifyUrl = (e, r) => {
                r = Object.assign({
                    encode: !0,
                    strict: !0,
                    [c]: !0
                }, r);
                let i = p(e.url).split("?")[0] || "",
                    n = t.extract(e.url),
                    s = t.parse(n, {
                        sort: !1
                    }),
                    o = Object.assign(s, e.query),
                    a = t.stringify(o, r);
                a && (a = `?${a}`);
                let h = function(e) {
                    let t = "",
                        r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                return e.fragmentIdentifier && (h = `#${r[c]?u(e.fragmentIdentifier,r):e.fragmentIdentifier}`), `${i}${a}${h}`
            }, t.pick = (e, r, i) => {
                i = Object.assign({
                    parseFragmentIdentifier: !0,
                    [c]: !1
                }, i);
                let {
                    url: n,
                    query: s,
                    fragmentIdentifier: a
                } = t.parseUrl(e, i);
                return t.stringifyUrl({
                    url: n,
                    query: o(s, r),
                    fragmentIdentifier: a
                }, i)
            }, t.exclude = (e, r, i) => {
                let n = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
                return t.pick(e, n, i)
            }
        },
        3280: function(e) {
            "use strict";

            function t(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return '"[Circular]"'
                }
            }
            e.exports = function(e, r, i) {
                var n = i && i.stringify || t;
                if ("object" == typeof e && null !== e) {
                    var s = r.length + 1;
                    if (1 === s) return e;
                    var o = Array(s);
                    o[0] = n(e);
                    for (var a = 1; a < s; a++) o[a] = n(r[a]);
                    return o.join(" ")
                }
                if ("string" != typeof e) return e;
                var c = r.length;
                if (0 === c) return e;
                for (var h = "", u = 0, l = -1, p = e && e.length || 0, f = 0; f < p;) {
                    if (37 === e.charCodeAt(f) && f + 1 < p) {
                        switch (l = l > -1 ? l : 0, e.charCodeAt(f + 1)) {
                            case 100:
                            case 102:
                                if (u >= c || null == r[u]) break;
                                l < f && (h += e.slice(l, f)), h += Number(r[u]), l = f + 2, f++;
                                break;
                            case 105:
                                if (u >= c || null == r[u]) break;
                                l < f && (h += e.slice(l, f)), h += Math.floor(Number(r[u])), l = f + 2, f++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (u >= c || void 0 === r[u]) break;
                                l < f && (h += e.slice(l, f));
                                var d = typeof r[u];
                                if ("string" === d) {
                                    h += "'" + r[u] + "'", l = f + 2, f++;
                                    break
                                }
                                if ("function" === d) {
                                    h += r[u].name || "<anonymous>", l = f + 2, f++;
                                    break
                                }
                                h += n(r[u]), l = f + 2, f++;
                                break;
                            case 115:
                                if (u >= c) break;
                                l < f && (h += e.slice(l, f)), h += String(r[u]), l = f + 2, f++;
                                break;
                            case 37:
                                l < f && (h += e.slice(l, f)), h += "%", l = f + 2, f++, u--
                        }++u
                    }++f
                }
                return -1 === l ? e : (l < p && (h += e.slice(l)), h)
            }
        },
        31770: function(e) {
            "use strict";
            e.exports = (e, t) => {
                if (!("string" == typeof e && "string" == typeof t)) throw TypeError("Expected the arguments to be of type `string`");
                if ("" === t) return [e];
                let r = e.indexOf(t);
                return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)]
            }
        },
        55517: function(e) {
            "use strict";
            e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)
        },
        96579: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return w
                },
                __asyncGenerator: function() {
                    return b
                },
                __asyncValues: function() {
                    return _
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return u
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return C
                },
                __createBinding: function() {
                    return p
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return f
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return l
                },
                __importDefault: function() {
                    return I
                },
                __importStar: function() {
                    return D
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return h
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function h(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function u(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function l(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function p(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function f(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function b(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, h) : u(s[0][2], r)
                    } catch (e) {
                        u(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function h(e) {
                    a("throw", e)
                }

                function u(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function w(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function _(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function D(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function I(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function C(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        89499: function(e) {
            "use strict";
            e.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        2412: function(e, t, r) {
            "use strict";
            let i = r(3280);
            e.exports = s;
            let n = function() {
                function e(e) {
                    return void 0 !== e && e
                }
                try {
                    if ("undefined" != typeof globalThis) return globalThis;
                    return Object.defineProperty(Object.prototype, "globalThis", {
                        get: function() {
                            return delete Object.prototype.globalThis, this.globalThis = this
                        },
                        configurable: !0
                    }), globalThis
                } catch (t) {
                    return e(self) || e(window) || e(this) || {}
                }
            }().console || {};

            function s(e) {
                var t;
                (e = e || {}).browser = e.browser || {};
                let r = e.browser.transmit;
                if (r && "function" != typeof r.send) throw Error("pino: transmit option must have a send function");
                let i = e.browser.write || n;
                e.browser.write && (e.browser.asObject = !0);
                let u = e.serializers || {},
                    l = function(e, t) {
                        if (Array.isArray(e)) {
                            let t = e.filter(function(e) {
                                return "!stdSerializers.err" !== e
                            });
                            return t
                        }
                        return !0 === e && Object.keys(t)
                    }(e.browser.serialize, u),
                    g = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (g = !1), "function" == typeof i && (i.error = i.fatal = i.warn = i.info = i.debug = i.trace = i), !1 === e.enabled && (e.level = "silent");
                let y = e.level || "info",
                    v = Object.create(i);
                v.log || (v.log = p), Object.defineProperty(v, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(v, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(e) {
                        if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                        this._level = e, o(m, v, "error", "log"), o(m, v, "fatal", "error"), o(m, v, "warn", "error"), o(m, v, "info", "log"), o(m, v, "debug", "log"), o(m, v, "trace", "log")
                    }
                });
                let m = {
                    transmit: r,
                    serialize: l,
                    asObject: e.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: "function" == typeof(t = e).timestamp ? t.timestamp : !1 === t.timestamp ? f : d
                };
                return v.levels = s.levels, v.level = y, v.setMaxListeners = v.getMaxListeners = v.emit = v.addListener = v.on = v.prependListener = v.once = v.prependOnceListener = v.removeListener = v.removeAllListeners = v.listeners = v.listenerCount = v.eventNames = v.write = v.flush = p, v.serializers = u, v._serialize = l, v._stdErrSerialize = g, v.child = function(t, i) {
                    if (!t) throw Error("missing bindings for child Pino");
                    i = i || {}, l && t.serializers && (i.serializers = t.serializers);
                    let n = i.serializers;
                    if (l && n) {
                        var s = Object.assign({}, u, n),
                            o = !0 === e.browser.serialize ? Object.keys(s) : l;
                        delete t.serializers, a([t], o, s, this._stdErrSerialize)
                    }

                    function p(e) {
                        this._childLevel = (0 | e._childLevel) + 1, this.error = c(e, t, "error"), this.fatal = c(e, t, "fatal"), this.warn = c(e, t, "warn"), this.info = c(e, t, "info"), this.debug = c(e, t, "debug"), this.trace = c(e, t, "trace"), s && (this.serializers = s, this._serialize = o), r && (this._logEvent = h([].concat(e._logEvent.bindings, t)))
                    }
                    return p.prototype = this, new p(this)
                }, r && (v._logEvent = h()), v
            }

            function o(e, t, r, o) {
                let c = Object.getPrototypeOf(t);
                t[r] = t.levelVal > t.levels.values[r] ? p : c[r] ? c[r] : n[r] || n[o] || p,
                    function(e, t, r) {
                        if (e.transmit || t[r] !== p) {
                            var o;
                            t[r] = (o = t[r], function() {
                                let c = e.timestamp(),
                                    u = Array(arguments.length),
                                    l = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                                for (var p = 0; p < u.length; p++) u[p] = arguments[p];
                                if (e.serialize && !e.asObject && a(u, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? o.call(l, function(e, t, r, n) {
                                        e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                                        let o = r.slice(),
                                            c = o[0],
                                            h = {};
                                        n && (h.time = n), h.level = s.levels.values[t];
                                        let u = (0 | e._childLevel) + 1;
                                        if (u < 1 && (u = 1), null !== c && "object" == typeof c) {
                                            for (; u-- && "object" == typeof o[0];) Object.assign(h, o.shift());
                                            c = o.length ? i(o.shift(), o) : void 0
                                        } else "string" == typeof c && (c = i(o.shift(), o));
                                        return void 0 !== c && (h.msg = c), h
                                    }(this, r, u, c)) : o.apply(l, u), e.transmit) {
                                    let i = e.transmit.level || t.level,
                                        n = s.levels.values[i],
                                        o = s.levels.values[r];
                                    if (o < n) return;
                                    (function(e, t, r) {
                                        let i = t.send,
                                            n = t.ts,
                                            s = t.methodLevel,
                                            o = t.methodValue,
                                            c = t.val,
                                            u = e._logEvent.bindings;
                                        a(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = n, e._logEvent.messages = r.filter(function(e) {
                                            return -1 === u.indexOf(e)
                                        }), e._logEvent.level.label = s, e._logEvent.level.value = o, i(s, e._logEvent, c), e._logEvent = h(u)
                                    })(this, {
                                        ts: c,
                                        methodLevel: r,
                                        methodValue: o,
                                        transmitLevel: i,
                                        transmitValue: s.levels.values[e.transmit.level || t.level],
                                        send: e.transmit.send,
                                        val: t.levelVal
                                    }, u)
                                }
                            })
                        }
                    }(e, t, r)
            }

            function a(e, t, r, i) {
                for (let n in e)
                    if (i && e[n] instanceof Error) e[n] = s.stdSerializers.err(e[n]);
                    else if ("object" == typeof e[n] && !Array.isArray(e[n]))
                    for (let i in e[n]) t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]))
            }

            function c(e, t, r) {
                return function() {
                    let i = Array(1 + arguments.length);
                    i[0] = t;
                    for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
                    return e[r].apply(this, i)
                }
            }

            function h(e) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: e || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function u() {
                return {}
            }

            function l(e) {
                return e
            }

            function p() {}

            function f() {
                return !1
            }

            function d() {
                return Date.now()
            }
            s.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, s.stdSerializers = {
                mapHttpRequest: u,
                mapHttpResponse: u,
                wrapRequestSerializer: l,
                wrapResponseSerializer: l,
                wrapErrorSerializer: l,
                req: u,
                res: u,
                err: function(e) {
                    let t = {
                        type: e.constructor.name,
                        msg: e.message,
                        stack: e.stack
                    };
                    for (let r in e) void 0 === t[r] && (t[r] = e[r]);
                    return t
                }
            }, s.stdTimeFunctions = Object.assign({}, {
                nullTime: f,
                epochTime: d,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        },
        24104: function(e, t, r) {
            "use strict";

            function i(e = 0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? globalThis.Buffer.allocUnsafe(e) : new Uint8Array(e)
            }
            r.d(t, {
                E: function() {
                    return i
                }
            })
        },
        36627: function(e, t, r) {
            "use strict";
            r.d(t, {
                z: function() {
                    return n
                }
            });
            var i = r(24104);

            function n(e, t) {
                t || (t = e.reduce((e, t) => e + t.length, 0));
                let r = (0, i.E)(t),
                    n = 0;
                for (let t of e) r.set(t, n), n += t.length;
                return r
            }
        },
        60919: function(e, t, r) {
            "use strict";
            r.d(t, {
                m: function() {
                    return n
                }
            });
            var i = r(3333);

            function n(e, t = "utf8") {
                let r = i.Z[t];
                if (!r) throw Error(`Unsupported encoding "${t}"`);
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e, "utf8") : r.decoder.decode(`${r.prefix}${e}`)
            }
        },
        45294: function(e, t, r) {
            "use strict";
            r.d(t, {
                BB: function() {
                    return s.B
                },
                mL: function() {
                    return n.m
                },
                zo: function() {
                    return i.z
                }
            });
            var i = r(36627),
                n = r(60919),
                s = r(37863)
        },
        37863: function(e, t, r) {
            "use strict";
            r.d(t, {
                B: function() {
                    return n
                }
            });
            var i = r(3333);

            function n(e, t = "utf8") {
                let r = i.Z[t];
                if (!r) throw Error(`Unsupported encoding "${t}"`);
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1)
            }
        },
        3333: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return eW
                }
            });
            var i = {};
            r.r(i), r.d(i, {
                identity: function() {
                    return T
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                base2: function() {
                    return N
                }
            });
            var s = {};
            r.r(s), r.d(s, {
                base8: function() {
                    return k
                }
            });
            var o = {};
            r.r(o), r.d(o, {
                base10: function() {
                    return j
                }
            });
            var a = {};
            r.r(a), r.d(a, {
                base16: function() {
                    return L
                },
                base16upper: function() {
                    return M
                }
            });
            var c = {};
            r.r(c), r.d(c, {
                base32: function() {
                    return q
                },
                base32hex: function() {
                    return H
                },
                base32hexpad: function() {
                    return B
                },
                base32hexpadupper: function() {
                    return K
                },
                base32hexupper: function() {
                    return F
                },
                base32pad: function() {
                    return z
                },
                base32padupper: function() {
                    return $
                },
                base32upper: function() {
                    return U
                },
                base32z: function() {
                    return V
                }
            });
            var h = {};
            r.r(h), r.d(h, {
                base36: function() {
                    return W
                },
                base36upper: function() {
                    return G
                }
            });
            var u = {};
            r.r(u), r.d(u, {
                base58btc: function() {
                    return Y
                },
                base58flickr: function() {
                    return J
                }
            });
            var l = {};
            r.r(l), r.d(l, {
                base64: function() {
                    return Q
                },
                base64pad: function() {
                    return X
                },
                base64url: function() {
                    return Z
                },
                base64urlpad: function() {
                    return ee
                }
            });
            var p = {};
            r.r(p), r.d(p, {
                base256emoji: function() {
                    return en
                }
            });
            var f = {};
            r.r(f), r.d(f, {
                sha256: function() {
                    return ey
                },
                sha512: function() {
                    return ev
                }
            });
            var d = {};
            r.r(d), r.d(d, {
                identity: function() {
                    return em
                }
            });
            var g = {};
            r.r(g), r.d(g, {
                code: function() {
                    return ew
                },
                decode: function() {
                    return eE
                },
                encode: function() {
                    return e_
                },
                name: function() {
                    return eb
                }
            });
            var y = {};
            r.r(y), r.d(y, {
                code: function() {
                    return eC
                },
                decode: function() {
                    return eO
                },
                encode: function() {
                    return eP
                },
                name: function() {
                    return eS
                }
            });
            var v = function(e, t) {
                if (e.length >= 255) throw TypeError("Alphabet too long");
                for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                for (var n = 0; n < e.length; n++) {
                    var s = e.charAt(n),
                        o = s.charCodeAt(0);
                    if (255 !== r[o]) throw TypeError(s + " is ambiguous");
                    r[o] = n
                }
                var a = e.length,
                    c = e.charAt(0),
                    h = Math.log(a) / Math.log(256),
                    u = Math.log(256) / Math.log(a);

                function l(e) {
                    if ("string" != typeof e) throw TypeError("Expected String");
                    if (0 === e.length) return new Uint8Array;
                    var t = 0;
                    if (" " !== e[0]) {
                        for (var i = 0, n = 0; e[t] === c;) i++, t++;
                        for (var s = (e.length - t) * h + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                            var u = r[e.charCodeAt(t)];
                            if (255 === u) return;
                            for (var l = 0, p = s - 1;
                                (0 !== u || l < n) && -1 !== p; p--, l++) u += a * o[p] >>> 0, o[p] = u % 256 >>> 0, u = u / 256 >>> 0;
                            if (0 !== u) throw Error("Non-zero carry");
                            n = l, t++
                        }
                        if (" " !== e[t]) {
                            for (var f = s - n; f !== s && 0 === o[f];) f++;
                            for (var d = new Uint8Array(i + (s - f)), g = i; f !== s;) d[g++] = o[f++];
                            return d
                        }
                    }
                }
                return {
                    encode: function(t) {
                        if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                        if (0 === t.length) return "";
                        for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n];) n++, r++;
                        for (var o = (s - n) * u + 1 >>> 0, h = new Uint8Array(o); n !== s;) {
                            for (var l = t[n], p = 0, f = o - 1;
                                (0 !== l || p < i) && -1 !== f; f--, p++) l += 256 * h[f] >>> 0, h[f] = l % a >>> 0, l = l / a >>> 0;
                            if (0 !== l) throw Error("Non-zero carry");
                            i = p, n++
                        }
                        for (var d = o - i; d !== o && 0 === h[d];) d++;
                        for (var g = c.repeat(r); d < o; ++d) g += e.charAt(h[d]);
                        return g
                    },
                    decodeUnsafe: l,
                    decode: function(e) {
                        var r = l(e);
                        if (r) return r;
                        throw Error(`Non-${t} character`)
                    }
                }
            };
            new Uint8Array(0);
            let m = (e, t) => {
                    if (e === t) return !0;
                    if (e.byteLength !== t.byteLength) return !1;
                    for (let r = 0; r < e.byteLength; r++)
                        if (e[r] !== t[r]) return !1;
                    return !0
                },
                b = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                w = e => new TextEncoder().encode(e),
                _ = e => new TextDecoder().decode(e);
            class E {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class D {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return S(this, e)
                }
            }
            class I {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return S(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            let S = (e, t) => new I({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class C {
                constructor(e, t, r, i) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new E(e, t, r), this.decoder = new D(e, t, i)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            let P = ({
                    name: e,
                    prefix: t,
                    encode: r,
                    decode: i
                }) => new C(e, t, r, i),
                O = ({
                    prefix: e,
                    name: t,
                    alphabet: r
                }) => {
                    let {
                        encode: i,
                        decode: n
                    } = v(r, t);
                    return P({
                        prefix: e,
                        name: t,
                        encode: i,
                        decode: e => b(n(e))
                    })
                },
                x = (e, t, r, i) => {
                    let n = {};
                    for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                    let s = e.length;
                    for (;
                        "=" === e[s - 1];) --s;
                    let o = new Uint8Array(s * r / 8 | 0),
                        a = 0,
                        c = 0,
                        h = 0;
                    for (let t = 0; t < s; ++t) {
                        let s = n[e[t]];
                        if (void 0 === s) throw SyntaxError(`Non-${i} character`);
                        c = c << r | s, (a += r) >= 8 && (a -= 8, o[h++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                    return o
                },
                A = (e, t, r) => {
                    let i = "=" === t[t.length - 1],
                        n = (1 << r) - 1,
                        s = "",
                        o = 0,
                        a = 0;
                    for (let i = 0; i < e.length; ++i)
                        for (a = a << 8 | e[i], o += 8; o > r;) o -= r, s += t[n & a >> o];
                    if (o && (s += t[n & a << r - o]), i)
                        for (; s.length * r & 7;) s += "=";
                    return s
                },
                R = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: r,
                    alphabet: i
                }) => P({
                    prefix: t,
                    name: e,
                    encode: e => A(e, i, r),
                    decode: t => x(t, i, r, e)
                }),
                T = P({
                    prefix: "\x00",
                    name: "identity",
                    encode: e => _(e),
                    decode: e => w(e)
                }),
                N = R({
                    prefix: "0",
                    name: "base2",
                    alphabet: "01",
                    bitsPerChar: 1
                }),
                k = R({
                    prefix: "7",
                    name: "base8",
                    alphabet: "01234567",
                    bitsPerChar: 3
                }),
                j = O({
                    prefix: "9",
                    name: "base10",
                    alphabet: "0123456789"
                }),
                L = R({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                M = R({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                }),
                q = R({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                U = R({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                z = R({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                $ = R({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                H = R({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                F = R({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                B = R({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                K = R({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                V = R({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                }),
                W = O({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                G = O({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                }),
                Y = O({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                J = O({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                }),
                Q = R({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                X = R({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                Z = R({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                ee = R({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                }),
                et = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                er = et.reduce((e, t, r) => (e[r] = t, e), []),
                ei = et.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []),
                en = P({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(e) {
                        return e.reduce((e, t) => e += er[t], "")
                    },
                    decode: function(e) {
                        let t = [];
                        for (let r of e) {
                            let e = ei[r.codePointAt(0)];
                            if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                            t.push(e)
                        }
                        return new Uint8Array(t)
                    }
                });
            var es = {
                encode: function e(t, r, i) {
                    r = r || [];
                    for (var n = i = i || 0; t >= 2147483648;) r[i++] = 255 & t | 128, t /= 128;
                    for (; - 128 & t;) r[i++] = 255 & t | 128, t >>>= 7;
                    return r[i] = 0 | t, e.bytes = i - n + 1, r
                },
                decode: function e(t, r) {
                    var i, n = 0,
                        r = r || 0,
                        s = 0,
                        o = r,
                        a = t.length;
                    do {
                        if (o >= a) throw e.bytes = 0, RangeError("Could not decode varint");
                        i = t[o++], n += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s), s += 7
                    } while (i >= 128);
                    return e.bytes = o - r, n
                },
                encodingLength: function(e) {
                    return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
                }
            };
            let eo = (e, t = 0) => {
                    let r = es.decode(e, t);
                    return [r, es.decode.bytes]
                },
                ea = (e, t, r = 0) => (es.encode(e, t, r), t),
                ec = e => es.encodingLength(e),
                eh = (e, t) => {
                    let r = t.byteLength,
                        i = ec(e),
                        n = i + ec(r),
                        s = new Uint8Array(n + r);
                    return ea(e, s, 0), ea(r, s, i), s.set(t, n), new ep(e, r, t, s)
                },
                eu = e => {
                    let t = b(e),
                        [r, i] = eo(t),
                        [n, s] = eo(t.subarray(i)),
                        o = t.subarray(i + s);
                    if (o.byteLength !== n) throw Error("Incorrect length");
                    return new ep(r, n, o, t)
                },
                el = (e, t) => e === t || e.code === t.code && e.size === t.size && m(e.bytes, t.bytes);
            class ep {
                constructor(e, t, r, i) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = i
                }
            }
            let ef = ({
                name: e,
                code: t,
                encode: r
            }) => new ed(e, t, r);
            class ed {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? eh(this.code, t) : t.then(e => eh(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            let eg = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                ey = ef({
                    name: "sha2-256",
                    code: 18,
                    encode: eg("SHA-256")
                }),
                ev = ef({
                    name: "sha2-512",
                    code: 19,
                    encode: eg("SHA-512")
                }),
                em = {
                    code: 0,
                    name: "identity",
                    encode: b,
                    digest: e => eh(0, b(e))
                },
                eb = "raw",
                ew = 85,
                e_ = e => b(e),
                eE = e => b(e),
                eD = new TextEncoder,
                eI = new TextDecoder,
                eS = "json",
                eC = 512,
                eP = e => eD.encode(JSON.stringify(e)),
                eO = e => JSON.parse(eI.decode(e));
            class ex {
                constructor(e, t, r, i) {
                    this.code = t, this.version = e, this.multihash = r, this.bytes = i, this.byteOffset = i.byteOffset, this.byteLength = i.byteLength, this.asCID = this, this._baseCache = new Map, Object.defineProperties(this, {
                        byteOffset: eq,
                        byteLength: eq,
                        code: eM,
                        version: eM,
                        multihash: eM,
                        bytes: eM,
                        _baseCache: eq,
                        asCID: eq
                    })
                }
                toV0() {
                    if (0 === this.version) return this; {
                        let {
                            code: e,
                            multihash: t
                        } = this;
                        if (e !== eN) throw Error("Cannot convert a non dag-pb CID to CIDv0");
                        if (t.code !== ek) throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                        return ex.createV0(t)
                    }
                }
                toV1() {
                    switch (this.version) {
                        case 0:
                            {
                                let {
                                    code: e,
                                    digest: t
                                } = this.multihash,
                                r = eh(e, t);
                                return ex.createV1(this.code, r)
                            }
                        case 1:
                            return this;
                        default:
                            throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)
                    }
                }
                equals(e) {
                    return e && this.code === e.code && this.version === e.version && el(this.multihash, e.multihash)
                }
                toString(e) {
                    let {
                        bytes: t,
                        version: r,
                        _baseCache: i
                    } = this;
                    return 0 === r ? eR(t, i, e || Y.encoder) : eT(t, i, e || q.encoder)
                }
                toJSON() {
                    return {
                        code: this.code,
                        version: this.version,
                        hash: this.multihash.bytes
                    }
                }
                get[Symbol.toStringTag]() {
                    return "CID"
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return "CID(" + this.toString() + ")"
                }
                static isCID(e) {
                    return eU(/^0\.0/, ez), !!(e && (e[eL] || e.asCID === e))
                }
                get toBaseEncodedString() {
                    throw Error("Deprecated, use .toString()")
                }
                get codec() {
                    throw Error('"codec" property is deprecated, use integer "code" property instead')
                }
                get buffer() {
                    throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")
                }
                get multibaseName() {
                    throw Error('"multibaseName" property is deprecated')
                }
                get prefix() {
                    throw Error('"prefix" property is deprecated')
                }
                static asCID(e) {
                    if (e instanceof ex) return e;
                    if (null != e && e.asCID === e) {
                        let {
                            version: t,
                            code: r,
                            multihash: i,
                            bytes: n
                        } = e;
                        return new ex(t, r, i, n || ej(t, r, i.bytes))
                    }
                    if (null == e || !0 !== e[eL]) return null; {
                        let {
                            version: t,
                            multihash: r,
                            code: i
                        } = e, n = eu(r);
                        return ex.create(t, i, n)
                    }
                }
                static create(e, t, r) {
                    if ("number" != typeof t) throw Error("String codecs are no longer supported");
                    switch (e) {
                        case 0:
                            if (t === eN) return new ex(e, t, r, r.bytes);
                            throw Error(`Version 0 CID must use dag-pb (code: ${eN}) block encoding`);
                        case 1:
                            {
                                let i = ej(e, t, r.bytes);
                                return new ex(e, t, r, i)
                            }
                        default:
                            throw Error("Invalid version")
                    }
                }
                static createV0(e) {
                    return ex.create(0, eN, e)
                }
                static createV1(e, t) {
                    return ex.create(1, e, t)
                }
                static decode(e) {
                    let [t, r] = ex.decodeFirst(e);
                    if (r.length) throw Error("Incorrect length");
                    return t
                }
                static decodeFirst(e) {
                    let t = ex.inspectBytes(e),
                        r = t.size - t.multihashSize,
                        i = b(e.subarray(r, r + t.multihashSize));
                    if (i.byteLength !== t.multihashSize) throw Error("Incorrect length");
                    let n = i.subarray(t.multihashSize - t.digestSize),
                        s = new ep(t.multihashCode, t.digestSize, n, i),
                        o = 0 === t.version ? ex.createV0(s) : ex.createV1(t.codec, s);
                    return [o, e.subarray(t.size)]
                }
                static inspectBytes(e) {
                    let t = 0,
                        r = () => {
                            let [r, i] = eo(e.subarray(t));
                            return t += i, r
                        },
                        i = r(),
                        n = eN;
                    if (18 === i ? (i = 0, t = 0) : 1 === i && (n = r()), 0 !== i && 1 !== i) throw RangeError(`Invalid CID version ${i}`);
                    let s = t,
                        o = r(),
                        a = r(),
                        c = t + a;
                    return {
                        version: i,
                        codec: n,
                        multihashCode: o,
                        digestSize: a,
                        multihashSize: c - s,
                        size: c
                    }
                }
                static parse(e, t) {
                    let [r, i] = eA(e, t), n = ex.decode(i);
                    return n._baseCache.set(r, e), n
                }
            }
            let eA = (e, t) => {
                    switch (e[0]) {
                        case "Q":
                            return [Y.prefix, (t || Y).decode(`${Y.prefix}${e}`)];
                        case Y.prefix:
                            return [Y.prefix, (t || Y).decode(e)];
                        case q.prefix:
                            return [q.prefix, (t || q).decode(e)];
                        default:
                            if (null == t) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
                            return [e[0], t.decode(e)]
                    }
                },
                eR = (e, t, r) => {
                    let {
                        prefix: i
                    } = r;
                    if (i !== Y.prefix) throw Error(`Cannot string encode V0 in ${r.name} encoding`);
                    let n = t.get(i);
                    if (null != n) return n; {
                        let n = r.encode(e).slice(1);
                        return t.set(i, n), n
                    }
                },
                eT = (e, t, r) => {
                    let {
                        prefix: i
                    } = r, n = t.get(i);
                    if (null != n) return n; {
                        let n = r.encode(e);
                        return t.set(i, n), n
                    }
                },
                eN = 112,
                ek = 18,
                ej = (e, t, r) => {
                    let i = ec(e),
                        n = i + ec(t),
                        s = new Uint8Array(n + r.byteLength);
                    return ea(e, s, 0), ea(t, s, i), s.set(r, n), s
                },
                eL = Symbol.for("@ipld/js-cid/CID"),
                eM = {
                    writable: !1,
                    configurable: !1,
                    enumerable: !0
                },
                eq = {
                    writable: !1,
                    enumerable: !1,
                    configurable: !1
                },
                eU = (e, t) => {
                    if (e.test("0.0.0-dev")) console.warn(t);
                    else throw Error(t)
                },
                ez = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,
                e$ = { ...i,
                    ...n,
                    ...s,
                    ...o,
                    ...a,
                    ...c,
                    ...h,
                    ...u,
                    ...l,
                    ...p
                };
            ({ ...f,
                ...d
            });
            var eH = r(24104);

            function eF(e, t, r, i) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }
            let eB = eF("utf8", "u", e => {
                    let t = new TextDecoder("utf8");
                    return "u" + t.decode(e)
                }, e => {
                    let t = new TextEncoder;
                    return t.encode(e.substring(1))
                }),
                eK = eF("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    e = e.substring(1);
                    let t = (0, eH.E)(e.length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                }),
                eV = {
                    utf8: eB,
                    "utf-8": eB,
                    hex: e$.base16,
                    latin1: eK,
                    ascii: eK,
                    binary: eK,
                    ...e$
                };
            var eW = eV
        }
    }
]);