"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (e) {
  if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if ("function" == typeof define && define.amd) define([], e);else {
    var t;t = "undefined" == typeof window ? "undefined" == typeof global ? "undefined" == typeof self ? this : self : global : window, t.SimplePeer = e();
  }
})(function () {
  var t = Math.floor,
      n = Math.abs,
      r = Math.pow;return function () {
    function d(s, e, n) {
      function t(o, i) {
        if (!e[o]) {
          if (!s[o]) {
            var l = "function" == typeof require && require;if (!i && l) return l(o, !0);if (r) return r(o, !0);var c = new Error("Cannot find module '" + o + "'");throw c.code = "MODULE_NOT_FOUND", c;
          }var a = e[o] = { exports: {} };s[o][0].call(a.exports, function (e) {
            var r = s[o][1][e];return t(r || e);
          }, a, a.exports, d, s, e, n);
        }return e[o].exports;
      }for (var r = "function" == typeof require && require, o = 0; o < n.length; o++) {
        t(n[o]);
      }return t;
    }return d;
  }()({ 1: [function (e, t, n) {
      "use strict";
      function r(e) {
        var t = e.length;if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");var n = e.indexOf("=");-1 === n && (n = t);var r = n === t ? 0 : 4 - n % 4;return [n, r];
      }function o(e, t, n) {
        return 3 * (t + n) / 4 - n;
      }function a(e) {
        for (var t, n = r(e), a = n[0], d = n[1], s = new u(o(e, a, d)), l = 0, c = 0 < d ? a - 4 : a, f = 0; f < c; f += 4) {
          t = p[e.charCodeAt(f)] << 18 | p[e.charCodeAt(f + 1)] << 12 | p[e.charCodeAt(f + 2)] << 6 | p[e.charCodeAt(f + 3)], s[l++] = 255 & t >> 16, s[l++] = 255 & t >> 8, s[l++] = 255 & t;
        }return 2 === d && (t = p[e.charCodeAt(f)] << 2 | p[e.charCodeAt(f + 1)] >> 4, s[l++] = 255 & t), 1 === d && (t = p[e.charCodeAt(f)] << 10 | p[e.charCodeAt(f + 1)] << 4 | p[e.charCodeAt(f + 2)] >> 2, s[l++] = 255 & t >> 8, s[l++] = 255 & t), s;
      }function d(e) {
        return c[63 & e >> 18] + c[63 & e >> 12] + c[63 & e >> 6] + c[63 & e];
      }function s(e, t, n) {
        for (var r, o = [], a = t; a < n; a += 3) {
          r = (16711680 & e[a] << 16) + (65280 & e[a + 1] << 8) + (255 & e[a + 2]), o.push(d(r));
        }return o.join("");
      }function l(e) {
        for (var t, n = e.length, r = n % 3, o = [], a = 16383, d = 0, l = n - r; d < l; d += a) {
          o.push(s(e, d, d + a > l ? l : d + a));
        }return 1 === r ? (t = e[n - 1], o.push(c[t >> 2] + c[63 & t << 4] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1], o.push(c[t >> 10] + c[63 & t >> 4] + c[63 & t << 2] + "=")), o.join("");
      }n.byteLength = function (e) {
        var t = r(e),
            n = t[0],
            o = t[1];return 3 * (n + o) / 4 - o;
      }, n.toByteArray = a, n.fromByteArray = l;for (var c = [], p = [], u = "undefined" == typeof Uint8Array ? Array : Uint8Array, f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", g = 0, h = f.length; g < h; ++g) {
        c[g] = f[g], p[f.charCodeAt(g)] = g;
      }p[45] = 62, p[95] = 63;
    }, {}], 2: [function () {}, {}], 3: [function (e, t, n) {
      "use strict";
      function o(e) {
        if (2147483647 < e) throw new RangeError("Invalid typed array length");var t = new Uint8Array(e);return t.__proto__ = d.prototype, t;
      }function d(e, t, n) {
        if ("number" == typeof e) {
          if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");return l(e);
        }return a(e, t, n);
      }function a(e, t, n) {
        if ("number" == typeof e) throw new TypeError("\"value\" argument must not be a number");return V(e) || e && V(e.buffer) ? u(e, t, n) : "string" == typeof e ? c(e, t) : f(e);
      }function i(e) {
        if ("number" != typeof e) throw new TypeError("\"size\" argument must be of type number");else if (0 > e) throw new RangeError("\"size\" argument must not be negative");
      }function s(e, t, n) {
        return i(e), 0 >= e ? o(e) : void 0 === t ? o(e) : "string" == typeof n ? o(e).fill(t, n) : o(e).fill(t);
      }function l(e) {
        return i(e), o(0 > e ? 0 : 0 | g(e));
      }function c(e, t) {
        if (("string" != typeof t || "" === t) && (t = "utf8"), !d.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);var n = 0 | h(e, t),
            r = o(n),
            a = r.write(e, t);return a !== n && (r = r.slice(0, a)), r;
      }function p(e) {
        for (var t = 0 > e.length ? 0 : 0 | g(e.length), n = o(t), r = 0; r < t; r += 1) {
          n[r] = 255 & e[r];
        }return n;
      }function u(e, t, n) {
        if (0 > t || e.byteLength < t) throw new RangeError("\"offset\" is outside of buffer bounds");if (e.byteLength < t + (n || 0)) throw new RangeError("\"length\" is outside of buffer bounds");var r;return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), r.__proto__ = d.prototype, r;
      }function f(e) {
        if (d.isBuffer(e)) {
          var t = 0 | g(e.length),
              n = o(t);return 0 === n.length ? n : (e.copy(n, 0, 0, t), n);
        }if (e) {
          if (ArrayBuffer.isView(e) || "length" in e) return "number" != typeof e.length || G(e.length) ? o(0) : p(e);if ("Buffer" === e.type && Array.isArray(e.data)) return p(e.data);
        }throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object.");
      }function g(e) {
        if (e >= 2147483647) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647 .toString(16) + " bytes");return 0 | e;
      }function h(e, t) {
        if (d.isBuffer(e)) return e.length;if (ArrayBuffer.isView(e) || V(e)) return e.byteLength;"string" != typeof e && (e = "" + e);var n = e.length;if (0 === n) return 0;for (var r = !1;;) {
          switch (t) {case "ascii":case "latin1":case "binary":
              return n;case "utf8":case "utf-8":case void 0:
              return U(e).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return 2 * n;case "hex":
              return n >>> 1;case "base64":
              return H(e).length;default:
              if (r) return U(e).length;t = ("" + t).toLowerCase(), r = !0;}
        }
      }function m(e, t, n) {
        var r = !1;if ((void 0 === t || 0 > t) && (t = 0), t > this.length) return "";if ((void 0 === n || n > this.length) && (n = this.length), 0 >= n) return "";if (n >>>= 0, t >>>= 0, n <= t) return "";for (e || (e = "utf8");;) {
          switch (e) {case "hex":
              return I(this, t, n);case "utf8":case "utf-8":
              return T(this, t, n);case "ascii":
              return A(this, t, n);case "latin1":case "binary":
              return L(this, t, n);case "base64":
              return k(this, t, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return B(this, t, n);default:
              if (r) throw new TypeError("Unknown encoding: " + e);e = (e + "").toLowerCase(), r = !0;}
        }
      }function _(e, t, n) {
        var r = e[t];e[t] = e[n], e[n] = r;
      }function b(e, t, n, r, o) {
        if (0 === e.length) return -1;if ("string" == typeof n ? (r = n, n = 0) : 2147483647 < n ? n = 2147483647 : -2147483648 > n && (n = -2147483648), n = +n, G(n) && (n = o ? 0 : e.length - 1), 0 > n && (n = e.length + n), n >= e.length) {
          if (o) return -1;n = e.length - 1;
        } else if (0 > n) if (o) n = 0;else return -1;if ("string" == typeof t && (t = d.from(t, r)), d.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, n, r, o);if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : y(e, [t], n, r, o);throw new TypeError("val must be string, number or Buffer");
      }function y(e, t, n, r, o) {
        function a(e, t) {
          return 1 === d ? e[t] : e.readUInt16BE(t * d);
        }var d = 1,
            s = e.length,
            l = t.length;if (void 0 !== r && (r = (r + "").toLowerCase(), "ucs2" === r || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
          if (2 > e.length || 2 > t.length) return -1;d = 2, s /= 2, l /= 2, n /= 2;
        }var c;if (o) {
          var p = -1;for (c = n; c < s; c++) {
            if (a(e, c) !== a(t, -1 === p ? 0 : c - p)) -1 !== p && (c -= c - p), p = -1;else if (-1 === p && (p = c), c - p + 1 === l) return p * d;
          }
        } else for (n + l > s && (n = s - l), c = n; 0 <= c; c--) {
          for (var u = !0, f = 0; f < l; f++) {
            if (a(e, c + f) !== a(t, f)) {
              u = !1;break;
            }
          }if (u) return c;
        }return -1;
      }function C(e, t, n, r) {
        n = +n || 0;var o = e.length - n;r ? (r = +r, r > o && (r = o)) : r = o;var a = t.length;r > a / 2 && (r = a / 2);for (var d, s = 0; s < r; ++s) {
          if (d = parseInt(t.substr(2 * s, 2), 16), G(d)) return s;e[n + s] = d;
        }return s;
      }function w(e, t, n, r) {
        return z(U(t, e.length - n), e, n, r);
      }function S(e, t, n, r) {
        return z(W(t), e, n, r);
      }function v(e, t, n, r) {
        return S(e, t, n, r);
      }function x(e, t, n, r) {
        return z(H(t), e, n, r);
      }function R(e, t, n, r) {
        return z(q(t, e.length - n), e, n, r);
      }function k(e, t, n) {
        return 0 === t && n === e.length ? J.fromByteArray(e) : J.fromByteArray(e.slice(t, n));
      }function T(e, t, n) {
        n = X(e.length, n);for (var r = [], o = t; o < n;) {
          var a = e[o],
              d = null,
              s = 239 < a ? 4 : 223 < a ? 3 : 191 < a ? 2 : 1;if (o + s <= n) {
            var l, c, p, u;1 === s ? 128 > a && (d = a) : 2 === s ? (l = e[o + 1], 128 == (192 & l) && (u = (31 & a) << 6 | 63 & l, 127 < u && (d = u))) : 3 === s ? (l = e[o + 1], c = e[o + 2], 128 == (192 & l) && 128 == (192 & c) && (u = (15 & a) << 12 | (63 & l) << 6 | 63 & c, 2047 < u && (55296 > u || 57343 < u) && (d = u))) : 4 === s ? (l = e[o + 1], c = e[o + 2], p = e[o + 3], 128 == (192 & l) && 128 == (192 & c) && 128 == (192 & p) && (u = (15 & a) << 18 | (63 & l) << 12 | (63 & c) << 6 | 63 & p, 65535 < u && 1114112 > u && (d = u))) : void 0;
          }null === d ? (d = 65533, s = 1) : 65535 < d && (d -= 65536, r.push(55296 | 1023 & d >>> 10), d = 56320 | 1023 & d), r.push(d), o += s;
        }return E(r);
      }function E(e) {
        var t = e.length;if (t <= 4096) return Y.apply(String, e);for (var n = "", r = 0; r < t;) {
          n += Y.apply(String, e.slice(r, r += 4096));
        }return n;
      }function A(e, t, n) {
        var r = "";n = X(e.length, n);for (var o = t; o < n; ++o) {
          r += Y(127 & e[o]);
        }return r;
      }function L(e, t, n) {
        var r = "";n = X(e.length, n);for (var o = t; o < n; ++o) {
          r += Y(e[o]);
        }return r;
      }function I(e, t, n) {
        var r = e.length;(!t || 0 > t) && (t = 0), (!n || 0 > n || n > r) && (n = r);for (var o = "", a = t; a < n; ++a) {
          o += O(e[a]);
        }return o;
      }function B(e, t, n) {
        for (var r = e.slice(t, n), o = "", a = 0; a < r.length; a += 2) {
          o += Y(r[a] + 256 * r[a + 1]);
        }return o;
      }function F(e, t, n) {
        if (0 != e % 1 || 0 > e) throw new RangeError("offset is not uint");if (e + t > n) throw new RangeError("Trying to access beyond buffer length");
      }function N(e, t, n, r, o, a) {
        if (!d.isBuffer(e)) throw new TypeError("\"buffer\" argument must be a Buffer instance");if (t > o || t < a) throw new RangeError("\"value\" argument is out of bounds");if (n + r > e.length) throw new RangeError("Index out of range");
      }function M(e, t, n, r) {
        if (n + r > e.length) throw new RangeError("Index out of range");if (0 > n) throw new RangeError("Index out of range");
      }function D(e, t, n, r, o) {
        return t = +t, n >>>= 0, o || M(e, t, n, 4, 34028234663852886e22, -34028234663852886e22), $.write(e, t, n, r, 23, 4), n + 4;
      }function P(e, t, n, r, o) {
        return t = +t, n >>>= 0, o || M(e, t, n, 8, 17976931348623157e292, -17976931348623157e292), $.write(e, t, n, r, 52, 8), n + 8;
      }function j(e) {
        if (e = e.split("=")[0], e = e.trim().replace(K, ""), 2 > e.length) return "";for (; 0 != e.length % 4;) {
          e += "=";
        }return e;
      }function O(e) {
        return 16 > e ? "0" + e.toString(16) : e.toString(16);
      }function U(e, t) {
        t = t || 1 / 0;for (var n, r = e.length, o = null, a = [], d = 0; d < r; ++d) {
          if (n = e.charCodeAt(d), 55295 < n && 57344 > n) {
            if (!o) {
              if (56319 < n) {
                -1 < (t -= 3) && a.push(239, 191, 189);continue;
              } else if (d + 1 === r) {
                -1 < (t -= 3) && a.push(239, 191, 189);continue;
              }o = n;continue;
            }if (56320 > n) {
              -1 < (t -= 3) && a.push(239, 191, 189), o = n;continue;
            }n = (o - 55296 << 10 | n - 56320) + 65536;
          } else o && -1 < (t -= 3) && a.push(239, 191, 189);if (o = null, 128 > n) {
            if (0 > (t -= 1)) break;a.push(n);
          } else if (2048 > n) {
            if (0 > (t -= 2)) break;a.push(192 | n >> 6, 128 | 63 & n);
          } else if (65536 > n) {
            if (0 > (t -= 3)) break;a.push(224 | n >> 12, 128 | 63 & n >> 6, 128 | 63 & n);
          } else if (1114112 > n) {
            if (0 > (t -= 4)) break;a.push(240 | n >> 18, 128 | 63 & n >> 12, 128 | 63 & n >> 6, 128 | 63 & n);
          } else throw new Error("Invalid code point");
        }return a;
      }function W(e) {
        for (var t = [], n = 0; n < e.length; ++n) {
          t.push(255 & e.charCodeAt(n));
        }return t;
      }function q(e, t) {
        for (var n, r, o, a = [], d = 0; d < e.length && !(0 > (t -= 2)); ++d) {
          n = e.charCodeAt(d), r = n >> 8, o = n % 256, a.push(o), a.push(r);
        }return a;
      }function H(e) {
        return J.toByteArray(j(e));
      }function z(e, t, n, r) {
        for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o) {
          t[o + n] = e[o];
        }return o;
      }function V(e) {
        return e instanceof ArrayBuffer || null != e && null != e.constructor && "ArrayBuffer" === e.constructor.name && "number" == typeof e.byteLength;
      }function G(e) {
        return e !== e;
      }var Y = String.fromCharCode,
          X = Math.min,
          J = e("base64-js"),
          $ = e("ieee754");n.Buffer = d, n.SlowBuffer = function (e) {
        return +e != e && (e = 0), d.alloc(+e);
      }, n.INSPECT_MAX_BYTES = 50;n.kMaxLength = 2147483647, d.TYPED_ARRAY_SUPPORT = function () {
        try {
          var e = new Uint8Array(1);return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function foo() {
              return 42;
            } }, 42 === e.foo();
        } catch (t) {
          return !1;
        }
      }(), d.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(d.prototype, "parent", { get: function get() {
          return this instanceof d ? this.buffer : void 0;
        } }), Object.defineProperty(d.prototype, "offset", { get: function get() {
          return this instanceof d ? this.byteOffset : void 0;
        } }), "undefined" != typeof Symbol && Symbol.species && d[Symbol.species] === d && Object.defineProperty(d, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 }), d.poolSize = 8192, d.from = function (e, t, n) {
        return a(e, t, n);
      }, d.prototype.__proto__ = Uint8Array.prototype, d.__proto__ = Uint8Array, d.alloc = function (e, t, n) {
        return s(e, t, n);
      }, d.allocUnsafe = function (e) {
        return l(e);
      }, d.allocUnsafeSlow = function (e) {
        return l(e);
      }, d.isBuffer = function (e) {
        return null != e && !0 === e._isBuffer;
      }, d.compare = function (e, t) {
        if (!d.isBuffer(e) || !d.isBuffer(t)) throw new TypeError("Arguments must be Buffers");if (e === t) return 0;for (var n = e.length, r = t.length, o = 0, a = X(n, r); o < a; ++o) {
          if (e[o] !== t[o]) {
            n = e[o], r = t[o];break;
          }
        }return n < r ? -1 : r < n ? 1 : 0;
      }, d.isEncoding = function (e) {
        switch ((e + "").toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
            return !0;default:
            return !1;}
      }, d.concat = function (e, t) {
        if (!Array.isArray(e)) throw new TypeError("\"list\" argument must be an Array of Buffers");if (0 === e.length) return d.alloc(0);var n;if (t === void 0) for (t = 0, n = 0; n < e.length; ++n) {
          t += e[n].length;
        }var r = d.allocUnsafe(t),
            o = 0;for (n = 0; n < e.length; ++n) {
          var a = e[n];if (ArrayBuffer.isView(a) && (a = d.from(a)), !d.isBuffer(a)) throw new TypeError("\"list\" argument must be an Array of Buffers");a.copy(r, o), o += a.length;
        }return r;
      }, d.byteLength = h, d.prototype._isBuffer = !0, d.prototype.swap16 = function () {
        var e = this.length;if (0 != e % 2) throw new RangeError("Buffer size must be a multiple of 16-bits");for (var t = 0; t < e; t += 2) {
          _(this, t, t + 1);
        }return this;
      }, d.prototype.swap32 = function () {
        var e = this.length;if (0 != e % 4) throw new RangeError("Buffer size must be a multiple of 32-bits");for (var t = 0; t < e; t += 4) {
          _(this, t, t + 3), _(this, t + 1, t + 2);
        }return this;
      }, d.prototype.swap64 = function () {
        var e = this.length;if (0 != e % 8) throw new RangeError("Buffer size must be a multiple of 64-bits");for (var t = 0; t < e; t += 8) {
          _(this, t, t + 7), _(this, t + 1, t + 6), _(this, t + 2, t + 5), _(this, t + 3, t + 4);
        }return this;
      }, d.prototype.toString = function () {
        var e = this.length;return 0 === e ? "" : 0 === arguments.length ? T(this, 0, e) : m.apply(this, arguments);
      }, d.prototype.toLocaleString = d.prototype.toString, d.prototype.equals = function (e) {
        if (!d.isBuffer(e)) throw new TypeError("Argument must be a Buffer");return this === e || 0 === d.compare(this, e);
      }, d.prototype.inspect = function () {
        var e = "",
            t = n.INSPECT_MAX_BYTES;return 0 < this.length && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">";
      }, d.prototype.compare = function (e, t, n, r, o) {
        if (!d.isBuffer(e)) throw new TypeError("Argument must be a Buffer");if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), 0 > t || n > e.length || 0 > r || o > this.length) throw new RangeError("out of range index");if (r >= o && t >= n) return 0;if (r >= o) return -1;if (t >= n) return 1;if (t >>>= 0, n >>>= 0, r >>>= 0, o >>>= 0, this === e) return 0;for (var a = o - r, s = n - t, l = X(a, s), c = this.slice(r, o), p = e.slice(t, n), u = 0; u < l; ++u) {
          if (c[u] !== p[u]) {
            a = c[u], s = p[u];break;
          }
        }return a < s ? -1 : s < a ? 1 : 0;
      }, d.prototype.includes = function (e, t, n) {
        return -1 !== this.indexOf(e, t, n);
      }, d.prototype.indexOf = function (e, t, n) {
        return b(this, e, t, n, !0);
      }, d.prototype.lastIndexOf = function (e, t, n) {
        return b(this, e, t, n, !1);
      }, d.prototype.write = function (e, t, n, r) {
        if (void 0 === t) r = "utf8", n = this.length, t = 0;else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;else if (isFinite(t)) t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o = this.length - t;if ((void 0 === n || n > o) && (n = o), 0 < e.length && (0 > n || 0 > t) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");r || (r = "utf8");for (var a = !1;;) {
          switch (r) {case "hex":
              return C(this, e, t, n);case "utf8":case "utf-8":
              return w(this, e, t, n);case "ascii":
              return S(this, e, t, n);case "latin1":case "binary":
              return v(this, e, t, n);case "base64":
              return x(this, e, t, n);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return R(this, e, t, n);default:
              if (a) throw new TypeError("Unknown encoding: " + r);r = ("" + r).toLowerCase(), a = !0;}
        }
      }, d.prototype.toJSON = function () {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };d.prototype.slice = function (e, t) {
        var n = this.length;e = ~~e, t = void 0 === t ? n : ~~t, 0 > e ? (e += n, 0 > e && (e = 0)) : e > n && (e = n), 0 > t ? (t += n, 0 > t && (t = 0)) : t > n && (t = n), t < e && (t = e);var r = this.subarray(e, t);return r.__proto__ = d.prototype, r;
      }, d.prototype.readUIntLE = function (e, t, n) {
        e >>>= 0, t >>>= 0, n || F(e, t, this.length);for (var r = this[e], o = 1, a = 0; ++a < t && (o *= 256);) {
          r += this[e + a] * o;
        }return r;
      }, d.prototype.readUIntBE = function (e, t, n) {
        e >>>= 0, t >>>= 0, n || F(e, t, this.length);for (var r = this[e + --t], o = 1; 0 < t && (o *= 256);) {
          r += this[e + --t] * o;
        }return r;
      }, d.prototype.readUInt8 = function (e, t) {
        return e >>>= 0, t || F(e, 1, this.length), this[e];
      }, d.prototype.readUInt16LE = function (e, t) {
        return e >>>= 0, t || F(e, 2, this.length), this[e] | this[e + 1] << 8;
      }, d.prototype.readUInt16BE = function (e, t) {
        return e >>>= 0, t || F(e, 2, this.length), this[e] << 8 | this[e + 1];
      }, d.prototype.readUInt32LE = function (e, t) {
        return e >>>= 0, t || F(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3];
      }, d.prototype.readUInt32BE = function (e, t) {
        return e >>>= 0, t || F(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
      }, d.prototype.readIntLE = function (e, t, n) {
        e >>>= 0, t >>>= 0, n || F(e, t, this.length);for (var o = this[e], a = 1, d = 0; ++d < t && (a *= 256);) {
          o += this[e + d] * a;
        }return a *= 128, o >= a && (o -= r(2, 8 * t)), o;
      }, d.prototype.readIntBE = function (e, t, n) {
        e >>>= 0, t >>>= 0, n || F(e, t, this.length);for (var o = t, a = 1, d = this[e + --o]; 0 < o && (a *= 256);) {
          d += this[e + --o] * a;
        }return a *= 128, d >= a && (d -= r(2, 8 * t)), d;
      }, d.prototype.readInt8 = function (e, t) {
        return e >>>= 0, t || F(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e];
      }, d.prototype.readInt16LE = function (e, t) {
        e >>>= 0, t || F(e, 2, this.length);var n = this[e] | this[e + 1] << 8;return 32768 & n ? 4294901760 | n : n;
      }, d.prototype.readInt16BE = function (e, t) {
        e >>>= 0, t || F(e, 2, this.length);var n = this[e + 1] | this[e] << 8;return 32768 & n ? 4294901760 | n : n;
      }, d.prototype.readInt32LE = function (e, t) {
        return e >>>= 0, t || F(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
      }, d.prototype.readInt32BE = function (e, t) {
        return e >>>= 0, t || F(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
      }, d.prototype.readFloatLE = function (e, t) {
        return e >>>= 0, t || F(e, 4, this.length), $.read(this, e, !0, 23, 4);
      }, d.prototype.readFloatBE = function (e, t) {
        return e >>>= 0, t || F(e, 4, this.length), $.read(this, e, !1, 23, 4);
      }, d.prototype.readDoubleLE = function (e, t) {
        return e >>>= 0, t || F(e, 8, this.length), $.read(this, e, !0, 52, 8);
      }, d.prototype.readDoubleBE = function (e, t) {
        return e >>>= 0, t || F(e, 8, this.length), $.read(this, e, !1, 52, 8);
      }, d.prototype.writeUIntLE = function (e, t, n, o) {
        if (e = +e, t >>>= 0, n >>>= 0, !o) {
          var a = r(2, 8 * n) - 1;N(this, e, t, n, a, 0);
        }var d = 1,
            s = 0;for (this[t] = 255 & e; ++s < n && (d *= 256);) {
          this[t + s] = 255 & e / d;
        }return t + n;
      }, d.prototype.writeUIntBE = function (e, t, n, o) {
        if (e = +e, t >>>= 0, n >>>= 0, !o) {
          var a = r(2, 8 * n) - 1;N(this, e, t, n, a, 0);
        }var d = n - 1,
            s = 1;for (this[t + d] = 255 & e; 0 <= --d && (s *= 256);) {
          this[t + d] = 255 & e / s;
        }return t + n;
      }, d.prototype.writeUInt8 = function (e, t, n) {
        return e = +e, t >>>= 0, n || N(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1;
      }, d.prototype.writeUInt16LE = function (e, t, n) {
        return e = +e, t >>>= 0, n || N(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
      }, d.prototype.writeUInt16BE = function (e, t, n) {
        return e = +e, t >>>= 0, n || N(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
      }, d.prototype.writeUInt32LE = function (e, t, n) {
        return e = +e, t >>>= 0, n || N(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4;
      }, d.prototype.writeUInt32BE = function (e, t, n) {
        return e = +e, t >>>= 0, n || N(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
      }, d.prototype.writeIntLE = function (e, t, n, o) {
        if (e = +e, t >>>= 0, !o) {
          var a = r(2, 8 * n - 1);N(this, e, t, n, a - 1, -a);
        }var d = 0,
            s = 1,
            l = 0;for (this[t] = 255 & e; ++d < n && (s *= 256);) {
          0 > e && 0 === l && 0 !== this[t + d - 1] && (l = 1), this[t + d] = 255 & (e / s >> 0) - l;
        }return t + n;
      }, d.prototype.writeIntBE = function (e, t, n, o) {
        if (e = +e, t >>>= 0, !o) {
          var a = r(2, 8 * n - 1);N(this, e, t, n, a - 1, -a);
        }var d = n - 1,
            s = 1,
            l = 0;for (this[t + d] = 255 & e; 0 <= --d && (s *= 256);) {
          0 > e && 0 === l && 0 !== this[t + d + 1] && (l = 1), this[t + d] = 255 & (e / s >> 0) - l;
        }return t + n;
      }, d.prototype.writeInt8 = function (e, t, n) {
        return e = +e, t >>>= 0, n || N(this, e, t, 1, 127, -128), 0 > e && (e = 255 + e + 1), this[t] = 255 & e, t + 1;
      }, d.prototype.writeInt16LE = function (e, t, n) {
        return e = +e, t >>>= 0, n || N(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2;
      }, d.prototype.writeInt16BE = function (e, t, n) {
        return e = +e, t >>>= 0, n || N(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2;
      }, d.prototype.writeInt32LE = function (e, t, n) {
        return e = +e, t >>>= 0, n || N(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
      }, d.prototype.writeInt32BE = function (e, t, n) {
        return e = +e, t >>>= 0, n || N(this, e, t, 4, 2147483647, -2147483648), 0 > e && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4;
      }, d.prototype.writeFloatLE = function (e, t, n) {
        return D(this, e, t, !0, n);
      }, d.prototype.writeFloatBE = function (e, t, n) {
        return D(this, e, t, !1, n);
      }, d.prototype.writeDoubleLE = function (e, t, n) {
        return P(this, e, t, !0, n);
      }, d.prototype.writeDoubleBE = function (e, t, n) {
        return P(this, e, t, !1, n);
      }, d.prototype.copy = function (e, t, n, r) {
        if (!d.isBuffer(e)) throw new TypeError("argument should be a Buffer");if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), 0 < r && r < n && (r = n), r === n) return 0;if (0 === e.length || 0 === this.length) return 0;if (0 > t) throw new RangeError("targetStart out of bounds");if (0 > n || n >= this.length) throw new RangeError("Index out of range");if (0 > r) throw new RangeError("sourceEnd out of bounds");r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);var o = r - n;if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, n, r);else if (this === e && n < t && t < r) for (var a = o - 1; 0 <= a; --a) {
          e[a + t] = this[a + n];
        } else Uint8Array.prototype.set.call(e, this.subarray(n, r), t);return o;
      }, d.prototype.fill = function (e, t, n, r) {
        if ("string" == typeof e) {
          if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");if ("string" == typeof r && !d.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);if (1 === e.length) {
            var o = e.charCodeAt(0);("utf8" === r && 128 > o || "latin1" === r) && (e = o);
          }
        } else "number" == typeof e && (e &= 255);if (0 > t || this.length < t || this.length < n) throw new RangeError("Out of range index");if (n <= t) return this;t >>>= 0, n = n === void 0 ? this.length : n >>> 0, e || (e = 0);var a;if ("number" == typeof e) for (a = t; a < n; ++a) {
          this[a] = e;
        } else {
          var s = d.isBuffer(e) ? e : new d(e, r),
              l = s.length;if (0 === l) throw new TypeError("The value \"" + e + "\" is invalid for argument \"value\"");for (a = 0; a < n - t; ++a) {
            this[a + t] = s[a % l];
          }
        }return this;
      };var K = /[^+/0-9A-Za-z-_]/g;
    }, { "base64-js": 1, ieee754: 9 }], 4: [function (e, t) {
      function n() {
        this._events && Object.prototype.hasOwnProperty.call(this, "_events") || (this._events = _(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
      }function r(e) {
        return void 0 === e._maxListeners ? n.defaultMaxListeners : e._maxListeners;
      }function a(e, t, n) {
        if (t) e.call(n);else for (var r = e.length, o = h(e, r), a = 0; a < r; ++a) {
          o[a].call(n);
        }
      }function d(e, t, n, r) {
        if (t) e.call(n, r);else for (var o = e.length, a = h(e, o), d = 0; d < o; ++d) {
          a[d].call(n, r);
        }
      }function s(e, t, n, r, o) {
        if (t) e.call(n, r, o);else for (var a = e.length, d = h(e, a), s = 0; s < a; ++s) {
          d[s].call(n, r, o);
        }
      }function l(e, t, n, r, o, a) {
        if (t) e.call(n, r, o, a);else for (var d = e.length, s = h(e, d), l = 0; l < d; ++l) {
          s[l].call(n, r, o, a);
        }
      }function c(e, t, n, r) {
        if (t) e.apply(n, r);else for (var o = e.length, a = h(e, o), d = 0; d < o; ++d) {
          a[d].apply(n, r);
        }
      }function i(e, t, n, o) {
        var a, i, d;if ("function" != typeof n) throw new TypeError("\"listener\" argument must be a function");if (i = e._events, i ? (i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), d = i[t]) : (i = e._events = _(null), e._eventsCount = 0), !d) d = i[t] = n, ++e._eventsCount;else if ("function" == typeof d ? d = i[t] = o ? [n, d] : [d, n] : o ? d.unshift(n) : d.push(n), !d.warned && (a = r(e), a && 0 < a && d.length > a)) {
          d.warned = !0;var s = new Error("Possible EventEmitter memory leak detected. " + d.length + " \"" + (t + "\" listeners added. Use emitter.setMaxListeners() to increase limit."));s.name = "MaxListenersExceededWarning", s.emitter = e, s.type = t, s.count = d.length, "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.warn && console.warn("%s: %s", s.name, s.message);
        }return e;
      }function p() {
        if (!this.fired) switch (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length) {case 0:
            return this.listener.call(this.target);case 1:
            return this.listener.call(this.target, arguments[0]);case 2:
            return this.listener.call(this.target, arguments[0], arguments[1]);case 3:
            return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);default:
            for (var e = Array(arguments.length), t = 0; t < e.length; ++t) {
              e[t] = arguments[t];
            }this.listener.apply(this.target, e);}
      }function u(e, t, n) {
        var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
            o = y.call(p, r);return o.listener = n, r.wrapFn = o, o;
      }function f(e) {
        var t = this._events;if (t) {
          var n = t[e];if ("function" == typeof n) return 1;if (n) return n.length;
        }return 0;
      }function g(e, t) {
        for (var r = t, o = r + 1, a = e.length; o < a; r += 1, o += 1) {
          e[r] = e[o];
        }e.pop();
      }function h(e, t) {
        for (var n = Array(t), r = 0; r < t; ++r) {
          n[r] = e[r];
        }return n;
      }function m(e) {
        for (var t = Array(e.length), n = 0; n < t.length; ++n) {
          t[n] = e[n].listener || e[n];
        }return t;
      }var _ = Object.create || function (e) {
        var t = function t() {};return t.prototype = e, new t();
      },
          b = Object.keys || function (e) {
        var t = [];for (var n in e) {
          Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        }return n;
      },
          y = Function.prototype.bind || function (e) {
        var t = this;return function () {
          return t.apply(e, arguments);
        };
      };t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0;var C,
          w = 10;try {
        var S = {};Object.defineProperty && Object.defineProperty(S, "x", { value: 0 }), C = 0 === S.x;
      } catch (e) {
        C = !1;
      }C ? Object.defineProperty(n, "defaultMaxListeners", { enumerable: !0, get: function get() {
          return w;
        }, set: function set(e) {
          if ("number" != typeof e || 0 > e || e !== e) throw new TypeError("\"defaultMaxListeners\" must be a positive number");w = e;
        } }) : n.defaultMaxListeners = w, n.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || 0 > e || isNaN(e)) throw new TypeError("\"n\" argument must be a positive number");return this._maxListeners = e, this;
      }, n.prototype.getMaxListeners = function () {
        return r(this);
      }, n.prototype.emit = function (e) {
        var t,
            n,
            r,
            o,
            p,
            u,
            f = "error" === e;if (u = this._events, u) f = f && null == u.error;else if (!f) return !1;if (f) {
          if (1 < arguments.length && (t = arguments[1]), t instanceof Error) throw t;else {
            var g = new Error("Unhandled \"error\" event. (" + t + ")");throw g.context = t, g;
          }return !1;
        }if (n = u[e], !n) return !1;var h = "function" == typeof n;switch (r = arguments.length, r) {case 1:
            a(n, h, this);break;case 2:
            d(n, h, this, arguments[1]);break;case 3:
            s(n, h, this, arguments[1], arguments[2]);break;case 4:
            l(n, h, this, arguments[1], arguments[2], arguments[3]);break;default:
            for (o = Array(r - 1), p = 1; p < r; p++) {
              o[p - 1] = arguments[p];
            }c(n, h, this, o);}return !0;
      }, n.prototype.addListener = function (e, t) {
        return i(this, e, t, !1);
      }, n.prototype.on = n.prototype.addListener, n.prototype.prependListener = function (e, t) {
        return i(this, e, t, !0);
      }, n.prototype.once = function (e, t) {
        if ("function" != typeof t) throw new TypeError("\"listener\" argument must be a function");return this.on(e, u(this, e, t)), this;
      }, n.prototype.prependOnceListener = function (e, t) {
        if ("function" != typeof t) throw new TypeError("\"listener\" argument must be a function");return this.prependListener(e, u(this, e, t)), this;
      }, n.prototype.removeListener = function (e, t) {
        var n, r, o, a, d;if ("function" != typeof t) throw new TypeError("\"listener\" argument must be a function");if (r = this._events, !r) return this;if (n = r[e], !n) return this;if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = _(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));else if ("function" != typeof n) {
          for (o = -1, a = n.length - 1; 0 <= a; a--) {
            if (n[a] === t || n[a].listener === t) {
              d = n[a].listener, o = a;break;
            }
          }if (0 > o) return this;0 === o ? n.shift() : g(n, o), 1 === n.length && (r[e] = n[0]), r.removeListener && this.emit("removeListener", e, d || t);
        }return this;
      }, n.prototype.removeAllListeners = function (e) {
        var t, n, r;if (n = this._events, !n) return this;if (!n.removeListener) return 0 === arguments.length ? (this._events = _(null), this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = _(null) : delete n[e]), this;if (0 === arguments.length) {
          var o,
              a = b(n);for (r = 0; r < a.length; ++r) {
            o = a[r], "removeListener" === o || this.removeAllListeners(o);
          }return this.removeAllListeners("removeListener"), this._events = _(null), this._eventsCount = 0, this;
        }if (t = n[e], "function" == typeof t) this.removeListener(e, t);else if (t) for (r = t.length - 1; 0 <= r; r--) {
          this.removeListener(e, t[r]);
        }return this;
      }, n.prototype.listeners = function (e) {
        var t,
            n,
            r = this._events;return r ? (t = r[e], n = t ? "function" == typeof t ? [t.listener || t] : m(t) : []) : n = [], n;
      }, n.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : f.call(e, t);
      }, n.prototype.listenerCount = f, n.prototype.eventNames = function () {
        return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : [];
      };
    }, {}], 5: [function (e, t, n) {
      (function (e) {
        function t(e) {
          return Object.prototype.toString.call(e);
        }n.isArray = function (e) {
          return Array.isArray ? Array.isArray(e) : "[object Array]" === t(e);
        }, n.isBoolean = function (e) {
          return "boolean" == typeof e;
        }, n.isNull = function (e) {
          return null === e;
        }, n.isNullOrUndefined = function (e) {
          return null == e;
        }, n.isNumber = function (e) {
          return "number" == typeof e;
        }, n.isString = function (e) {
          return "string" == typeof e;
        }, n.isSymbol = function (e) {
          return "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e));
        }, n.isUndefined = function (e) {
          return void 0 === e;
        }, n.isRegExp = function (e) {
          return "[object RegExp]" === t(e);
        }, n.isObject = function (e) {
          return "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null !== e;
        }, n.isDate = function (e) {
          return "[object Date]" === t(e);
        }, n.isError = function (n) {
          return "[object Error]" === t(n) || n instanceof Error;
        }, n.isFunction = function (e) {
          return "function" == typeof e;
        }, n.isPrimitive = function (e) {
          return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == (typeof e === "undefined" ? "undefined" : _typeof(e)) || "undefined" == typeof e;
        }, n.isBuffer = e.isBuffer;
      }).call(this, { isBuffer: e("../../is-buffer/index.js") });
    }, { "../../is-buffer/index.js": 11 }], 6: [function (e, t, n) {
      (function (o) {
        function r(e) {
          var t = this.useColors;if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + n.humanize(this.diff), !!t) {
            var r = "color: " + this.color;e.splice(1, 0, r, "color: inherit");var o = 0,
                a = 0;e[0].replace(/%[a-zA-Z%]/g, function (e) {
              "%%" === e || (o++, "%c" === e && (a = o));
            }), e.splice(a, 0, r);
          }
        }function a(e) {
          try {
            null == e ? n.storage.removeItem("debug") : n.storage.debug = e;
          } catch (t) {}
        }function i() {
          var e;try {
            e = n.storage.debug;
          } catch (t) {}return !e && "undefined" != typeof o && "env" in o && (e = o.env.DEBUG), e;
        }n = t.exports = e("./debug"), n.log = function () {
          return "object" == (typeof console === "undefined" ? "undefined" : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
        }, n.formatArgs = r, n.save = a, n.load = i, n.useColors = function () {
          return !!("undefined" != typeof window && window.process && "renderer" === window.process.type) || !("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
        }, n.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : function () {
          try {
            return window.localStorage;
          } catch (t) {}
        }(), n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], n.formatters.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        }, n.enable(i());
      }).call(this, e("_process"));
    }, { "./debug": 7, _process: 15 }], 7: [function (e, t, r) {
      function o(e) {
        var t,
            o = 0;for (t in e) {
          o = (o << 5) - o + e.charCodeAt(t), o |= 0;
        }return r.colors[n(o) % r.colors.length];
      }function a(e) {
        function t() {
          if (t.enabled) {
            var e = t,
                o = +new Date(),
                a = o - (n || o);e.diff = a, e.prev = n, e.curr = o, n = o;for (var d = Array(arguments.length), s = 0; s < d.length; s++) {
              d[s] = arguments[s];
            }d[0] = r.coerce(d[0]), "string" != typeof d[0] && d.unshift("%O");var l = 0;d[0] = d[0].replace(/%([a-zA-Z%])/g, function (t, n) {
              if ("%%" === t) return t;l++;var o = r.formatters[n];if ("function" == typeof o) {
                var a = d[l];t = o.call(e, a), d.splice(l, 1), l--;
              }return t;
            }), r.formatArgs.call(e, d);var c = t.log || r.log || console.log.bind(console);c.apply(e, d);
          }
        }var n;return t.namespace = e, t.enabled = r.enabled(e), t.useColors = r.useColors(), t.color = o(e), t.destroy = i, "function" == typeof r.init && r.init(t), r.instances.push(t), t;
      }function i() {
        var e = r.instances.indexOf(this);return -1 !== e && (r.instances.splice(e, 1), !0);
      }function d(e) {
        r.save(e), r.names = [], r.skips = [];var t,
            n = ("string" == typeof e ? e : "").split(/[\s,]+/),
            o = n.length;for (t = 0; t < o; t++) {
          n[t] && (e = n[t].replace(/\*/g, ".*?"), "-" === e[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")));
        }for (t = 0; t < r.instances.length; t++) {
          var a = r.instances[t];a.enabled = r.enabled(a.namespace);
        }
      }function s() {
        r.enable("");
      }function l(e) {
        if ("*" === e[e.length - 1]) return !0;var t, n;for (t = 0, n = r.skips.length; t < n; t++) {
          if (r.skips[t].test(e)) return !1;
        }for (t = 0, n = r.names.length; t < n; t++) {
          if (r.names[t].test(e)) return !0;
        }return !1;
      }r = t.exports = a.debug = a["default"] = a, r.coerce = function (e) {
        return e instanceof Error ? e.stack || e.message : e;
      }, r.disable = s, r.enable = d, r.enabled = l, r.humanize = e("ms"), r.instances = [], r.names = [], r.skips = [], r.formatters = {};
    }, { ms: 13 }], 8: [function (e, t) {
      t.exports = function () {
        if ("undefined" == typeof window) return null;var e = { RTCPeerConnection: window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection, RTCSessionDescription: window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription, RTCIceCandidate: window.RTCIceCandidate || window.mozRTCIceCandidate || window.webkitRTCIceCandidate };return e.RTCPeerConnection ? e : null;
      };
    }, {}], 9: [function (e, o, a) {
      a.read = function (t, n, o, a, l) {
        var c,
            p,
            u = 8 * l - a - 1,
            f = (1 << u) - 1,
            g = f >> 1,
            h = -7,
            _ = o ? l - 1 : 0,
            b = o ? -1 : 1,
            d = t[n + _];for (_ += b, c = d & (1 << -h) - 1, d >>= -h, h += u; 0 < h; c = 256 * c + t[n + _], _ += b, h -= 8) {}for (p = c & (1 << -h) - 1, c >>= -h, h += a; 0 < h; p = 256 * p + t[n + _], _ += b, h -= 8) {}if (0 === c) c = 1 - g;else {
          if (c === f) return p ? NaN : (d ? -1 : 1) * (1 / 0);p += r(2, a), c -= g;
        }return (d ? -1 : 1) * p * r(2, c - a);
      }, a.write = function (o, a, l, p, u, f) {
        var g,
            h,
            _,
            b = 8 * f - u - 1,
            y = (1 << b) - 1,
            C = y >> 1,
            w = 23 === u ? 5.960464477539063e-8 - 6.617444900424222e-24 : 0,
            S = p ? 0 : f - 1,
            v = p ? 1 : -1,
            d = 0 > a || 0 === a && 0 > 1 / a ? 1 : 0;for (a = n(a), isNaN(a) || a === 1 / 0 ? (h = isNaN(a) ? 1 : 0, g = y) : (g = t(Math.log(a) / Math.LN2), 1 > a * (_ = r(2, -g)) && (g--, _ *= 2), a += 1 <= g + C ? w / _ : w * r(2, 1 - C), 2 <= a * _ && (g++, _ /= 2), g + C >= y ? (h = 0, g = y) : 1 <= g + C ? (h = (a * _ - 1) * r(2, u), g += C) : (h = a * r(2, C - 1) * r(2, u), g = 0)); 8 <= u; o[l + S] = 255 & h, S += v, h /= 256, u -= 8) {}for (g = g << u | h, b += u; 0 < b; o[l + S] = 255 & g, S += v, g /= 256, b -= 8) {}o[l + S - v] |= 128 * d;
      };
    }, {}], 10: [function (e, t) {
      t.exports = "function" == typeof Object.create ? function (e, t) {
        e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } });
      } : function (e, t) {
        e.super_ = t;var n = function n() {};n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
      };
    }, {}], 11: [function (e, t) {
      function n(e) {
        return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
      }function r(e) {
        return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
      }t.exports = function (e) {
        return null != e && (n(e) || r(e) || !!e._isBuffer);
      };
    }, {}], 12: [function (e, t) {
      var n = {}.toString;t.exports = Array.isArray || function (e) {
        return "[object Array]" == n.call(e);
      };
    }, {}], 13: [function (e, n) {
      function r(e) {
        if (e += "", !(100 < e.length)) {
          var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if (t) {
            var r = parseFloat(t[1]),
                n = (t[2] || "ms").toLowerCase();return "years" === n || "year" === n || "yrs" === n || "yr" === n || "y" === n ? 31557600000 * r : "days" === n || "day" === n || "d" === n ? 86400000 * r : "hours" === n || "hour" === n || "hrs" === n || "hr" === n || "h" === n ? 3600000 * r : "minutes" === n || "minute" === n || "mins" === n || "min" === n || "m" === n ? 60000 * r : "seconds" === n || "second" === n || "secs" === n || "sec" === n || "s" === n ? 1000 * r : "milliseconds" === n || "millisecond" === n || "msecs" === n || "msec" === n || "ms" === n ? r : void 0;
          }
        }
      }function o(e) {
        var t = Math.round;return 86400000 <= e ? t(e / 86400000) + "d" : 3600000 <= e ? t(e / 3600000) + "h" : 60000 <= e ? t(e / 60000) + "m" : 1000 <= e ? t(e / 1000) + "s" : e + "ms";
      }function a(e) {
        return i(e, 86400000, "day") || i(e, 3600000, "hour") || i(e, 60000, "minute") || i(e, 1000, "second") || e + " ms";
      }function i(e, r, n) {
        return e < r ? void 0 : e < 1.5 * r ? t(e / r) + " " + n : Math.ceil(e / r) + " " + n + "s";
      }n.exports = function (e, t) {
        t = t || {};var n = typeof e === "undefined" ? "undefined" : _typeof(e);if ("string" == n && 0 < e.length) return r(e);if ("number" == n && !1 === isNaN(e)) return t.long ? a(e) : o(e);throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
      };
    }, {}], 14: [function (e, t) {
      (function (e) {
        "use strict";
        t.exports = e.version && 0 !== e.version.indexOf("v0.") && (0 !== e.version.indexOf("v1.") || 0 === e.version.indexOf("v1.8.")) ? e : { nextTick: function nextTick(t, n, r, o) {
            if ("function" != typeof t) throw new TypeError("\"callback\" argument must be a function");var a,
                d,
                s = arguments.length;switch (s) {case 0:case 1:
                return e.nextTick(t);case 2:
                return e.nextTick(function () {
                  t.call(null, n);
                });case 3:
                return e.nextTick(function () {
                  t.call(null, n, r);
                });case 4:
                return e.nextTick(function () {
                  t.call(null, n, r, o);
                });default:
                for (a = Array(s - 1), d = 0; d < a.length;) {
                  a[d++] = arguments[d];
                }return e.nextTick(function () {
                  t.apply(null, a);
                });}
          } };
      }).call(this, e("_process"));
    }, { _process: 15 }], 15: [function (e, t) {
      function n() {
        throw new Error("setTimeout has not been defined");
      }function r() {
        throw new Error("clearTimeout has not been defined");
      }function o(t) {
        if (c === setTimeout) return setTimeout(t, 0);if ((c === n || !c) && setTimeout) return c = setTimeout, setTimeout(t, 0);try {
          return c(t, 0);
        } catch (n) {
          try {
            return c.call(null, t, 0);
          } catch (n) {
            return c.call(this, t, 0);
          }
        }
      }function a(t) {
        if (p === clearTimeout) return clearTimeout(t);if ((p === r || !p) && clearTimeout) return p = clearTimeout, clearTimeout(t);try {
          return p(t);
        } catch (n) {
          try {
            return p.call(null, t);
          } catch (n) {
            return p.call(this, t);
          }
        }
      }function i() {
        h && f && (h = !1, f.length ? g = f.concat(g) : m = -1, g.length && d());
      }function d() {
        if (!h) {
          var e = o(i);h = !0;for (var t = g.length; t;) {
            for (f = g, g = []; ++m < t;) {
              f && f[m].run();
            }m = -1, t = g.length;
          }f = null, h = !1, a(e);
        }
      }function s(e, t) {
        this.fun = e, this.array = t;
      }function l() {}var c,
          p,
          u = t.exports = {};(function () {
        try {
          c = "function" == typeof setTimeout ? setTimeout : n;
        } catch (t) {
          c = n;
        }try {
          p = "function" == typeof clearTimeout ? clearTimeout : r;
        } catch (t) {
          p = r;
        }
      })();var f,
          g = [],
          h = !1,
          m = -1;u.nextTick = function (e) {
        var t = Array(arguments.length - 1);if (1 < arguments.length) for (var n = 1; n < arguments.length; n++) {
          t[n - 1] = arguments[n];
        }g.push(new s(e, t)), 1 !== g.length || h || o(d);
      }, s.prototype.run = function () {
        this.fun.apply(null, this.array);
      }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = l, u.addListener = l, u.once = l, u.off = l, u.removeListener = l, u.removeAllListeners = l, u.emit = l, u.prependListener = l, u.prependOnceListener = l, u.listeners = function () {
        return [];
      }, u.binding = function () {
        throw new Error("process.binding is not supported");
      }, u.cwd = function () {
        return "/";
      }, u.chdir = function () {
        throw new Error("process.chdir is not supported");
      }, u.umask = function () {
        return 0;
      };
    }, {}], 16: [function (e, t) {
      (function (n, r) {
        "use strict";
        var o = e("safe-buffer").Buffer,
            a = r.crypto || r.msCrypto;t.exports = a && a.getRandomValues ? function (e, t) {
          if (65536 < e) throw new Error("requested too many random bytes");var i = new r.Uint8Array(e);0 < e && a.getRandomValues(i);var d = o.from(i.buffer);return "function" == typeof t ? n.nextTick(function () {
            t(null, d);
          }) : d;
        } : function () {
          throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
        };
      }).call(this, e("_process"), "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global);
    }, { _process: 15, "safe-buffer": 26 }], 17: [function (e, t) {
      "use strict";
      function n(e) {
        return this instanceof n ? void (s.call(this, e), l.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", r)) : new n(e);
      }function r() {
        this.allowHalfOpen || this._writableState.ended || a.nextTick(o, this);
      }function o(e) {
        e.end();
      }var a = e("process-nextick-args"),
          i = Object.keys || function (e) {
        var t = [];for (var n in e) {
          t.push(n);
        }return t;
      };t.exports = n;var d = e("core-util-is");d.inherits = e("inherits");var s = e("./_stream_readable"),
          l = e("./_stream_writable");d.inherits(n, s);for (var c, p = i(l.prototype), u = 0; u < p.length; u++) {
        c = p[u], n.prototype[c] || (n.prototype[c] = l.prototype[c]);
      }Object.defineProperty(n.prototype, "writableHighWaterMark", { enumerable: !1, get: function get() {
          return this._writableState.highWaterMark;
        } }), Object.defineProperty(n.prototype, "destroyed", { get: function get() {
          return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
        }, set: function set(e) {
          void 0 === this._readableState || void 0 === this._writableState || (this._readableState.destroyed = e, this._writableState.destroyed = e);
        } }), n.prototype._destroy = function (e, t) {
        this.push(null), this.end(), a.nextTick(t, e);
      };
    }, { "./_stream_readable": 19, "./_stream_writable": 21, "core-util-is": 5, inherits: 10, "process-nextick-args": 14 }], 18: [function (e, t) {
      "use strict";
      function n(e) {
        return this instanceof n ? void r.call(this, e) : new n(e);
      }t.exports = n;var r = e("./_stream_transform"),
          o = e("core-util-is");o.inherits = e("inherits"), o.inherits(n, r), n.prototype._transform = function (e, t, n) {
        n(null, e);
      };
    }, { "./_stream_transform": 20, "core-util-is": 5, inherits: 10 }], 19: [function (e, n) {
      (function (r, o) {
        "use strict";
        function a(e) {
          return O.from(e);
        }function i(e) {
          return O.isBuffer(e) || e instanceof U;
        }function d(e, t, n) {
          return "function" == typeof e.prependListener ? e.prependListener(t, n) : void (e._events && e._events[t] ? M(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n));
        }function s(n, r) {
          N = N || e("./_stream_duplex"), n = n || {};var o = r instanceof N;this.objectMode = !!n.objectMode, o && (this.objectMode = this.objectMode || !!n.readableObjectMode);var a = n.highWaterMark,
              i = n.readableHighWaterMark,
              d = this.objectMode ? 16 : 16384;this.highWaterMark = a || 0 === a ? a : o && (i || 0 === i) ? i : d, this.highWaterMark = t(this.highWaterMark), this.buffer = new V(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = n.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, n.encoding && (!z && (z = e("string_decoder/").StringDecoder), this.decoder = new z(n.encoding), this.encoding = n.encoding);
        }function l(t) {
          return N = N || e("./_stream_duplex"), this instanceof l ? void (this._readableState = new s(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), j.call(this)) : new l(t);
        }function c(e, t, n, r, o) {
          var i = e._readableState;if (null === t) i.reading = !1, m(e, i);else {
            var d;o || (d = u(i, t)), d ? e.emit("error", d) : i.objectMode || t && 0 < t.length ? ("string" != typeof t && !i.objectMode && Object.getPrototypeOf(t) !== O.prototype && (t = a(t)), r ? i.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : p(e, i, t, !0) : i.ended ? e.emit("error", new Error("stream.push() after EOF")) : (i.reading = !1, i.decoder && !n ? (t = i.decoder.write(t), i.objectMode || 0 !== t.length ? p(e, i, t, !1) : y(e, i)) : p(e, i, t, !1))) : !r && (i.reading = !1);
          }return f(i);
        }function p(e, t, n, r) {
          t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n), e.read(0)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && _(e)), y(e, t);
        }function u(e, t) {
          var n;return i(t) || "string" == typeof t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")), n;
        }function f(e) {
          return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length);
        }function g(e) {
          return 8388608 <= e ? e = 8388608 : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e;
        }function h(e, t) {
          return 0 >= e || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e === e ? (e > t.highWaterMark && (t.highWaterMark = g(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)) : t.flowing && t.length ? t.buffer.head.data.length : t.length;
        }function m(e, t) {
          if (!t.ended) {
            if (t.decoder) {
              var n = t.decoder.end();n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length);
            }t.ended = !0, _(e);
          }
        }function _(e) {
          var t = e._readableState;t.needReadable = !1, t.emittedReadable || (H("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? F.nextTick(b, e) : b(e));
        }function b(e) {
          H("emit readable"), e.emit("readable"), R(e);
        }function y(e, t) {
          t.readingMore || (t.readingMore = !0, F.nextTick(C, e, t));
        }function C(e, t) {
          for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (H("maybeReadMore read 0"), e.read(0), n !== t.length);) {
            n = t.length;
          }t.readingMore = !1;
        }function w(e) {
          return function () {
            var t = e._readableState;H("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && P(e, "data") && (t.flowing = !0, R(e));
          };
        }function S(e) {
          H("readable nexttick read 0"), e.read(0);
        }function v(e, t) {
          t.resumeScheduled || (t.resumeScheduled = !0, F.nextTick(x, e, t));
        }function x(e, t) {
          t.reading || (H("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), R(e), t.flowing && !t.reading && e.read(0);
        }function R(e) {
          var t = e._readableState;for (H("flow", t.flowing); t.flowing && null !== e.read();) {}
        }function k(e, t) {
          if (0 === t.length) return null;var n;return t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : n = T(e, t.buffer, t.decoder), n;
        }function T(e, t, n) {
          var r;return e < t.head.data.length ? (r = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : e === t.head.data.length ? r = t.shift() : r = n ? E(e, t) : A(e, t), r;
        }function E(e, t) {
          var r = t.head,
              o = 1,
              a = r.data;for (e -= a.length; r = r.next;) {
            var i = r.data,
                d = e > i.length ? i.length : e;if (a += d === i.length ? i : i.slice(0, e), e -= d, 0 === e) {
              d === i.length ? (++o, t.head = r.next ? r.next : t.tail = null) : (t.head = r, r.data = i.slice(d));break;
            }++o;
          }return t.length -= o, a;
        }function A(e, t) {
          var r = O.allocUnsafe(e),
              o = t.head,
              a = 1;for (o.data.copy(r), e -= o.data.length; o = o.next;) {
            var i = o.data,
                d = e > i.length ? i.length : e;if (i.copy(r, r.length - e, 0, d), e -= d, 0 === e) {
              d === i.length ? (++a, t.head = o.next ? o.next : t.tail = null) : (t.head = o, o.data = i.slice(d));break;
            }++a;
          }return t.length -= a, r;
        }function L(e) {
          var t = e._readableState;if (0 < t.length) throw new Error("\"endReadable()\" called on non-empty stream");t.endEmitted || (t.ended = !0, F.nextTick(I, t, e));
        }function I(e, t) {
          e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end"));
        }function B(e, t) {
          for (var n = 0, r = e.length; n < r; n++) {
            if (e[n] === t) return n;
          }return -1;
        }var F = e("process-nextick-args");n.exports = l;var N,
            M = e("isarray");l.ReadableState = s;var D = e("events").EventEmitter,
            P = function P(e, t) {
          return e.listeners(t).length;
        },
            j = e("./internal/streams/stream"),
            O = e("safe-buffer").Buffer,
            U = o.Uint8Array || function () {},
            W = e("core-util-is");W.inherits = e("inherits");var q = e("util"),
            H = void 0;H = q && q.debuglog ? q.debuglog("stream") : function () {};var z,
            V = e("./internal/streams/BufferList"),
            G = e("./internal/streams/destroy");W.inherits(l, j);var Y = ["error", "close", "destroy", "pause", "resume"];Object.defineProperty(l.prototype, "destroyed", { get: function get() {
            return void 0 !== this._readableState && this._readableState.destroyed;
          }, set: function set(e) {
            this._readableState && (this._readableState.destroyed = e);
          } }), l.prototype.destroy = G.destroy, l.prototype._undestroy = G.undestroy, l.prototype._destroy = function (e, t) {
          this.push(null), t(e);
        }, l.prototype.push = function (e, t) {
          var n,
              r = this._readableState;return r.objectMode ? n = !0 : "string" == typeof e && (t = t || r.defaultEncoding, t !== r.encoding && (e = O.from(e, t), t = ""), n = !0), c(this, e, t, !1, n);
        }, l.prototype.unshift = function (e) {
          return c(this, e, null, !0, !1);
        }, l.prototype.isPaused = function () {
          return !1 === this._readableState.flowing;
        }, l.prototype.setEncoding = function (t) {
          return z || (z = e("string_decoder/").StringDecoder), this._readableState.decoder = new z(t), this._readableState.encoding = t, this;
        };l.prototype.read = function (e) {
          H("read", e), e = parseInt(e, 10);var t = this._readableState,
              r = e;if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return H("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? L(this) : _(this), null;if (e = h(e, t), 0 === e && t.ended) return 0 === t.length && L(this), null;var o = t.needReadable;H("need readable", o), (0 === t.length || t.length - e < t.highWaterMark) && (o = !0, H("length less than watermark", o)), t.ended || t.reading ? (o = !1, H("reading or ended", o)) : o && (H("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, !t.reading && (e = h(r, t)));var a;return a = 0 < e ? k(e, t) : null, null === a ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (!t.ended && (t.needReadable = !0), r !== e && t.ended && L(this)), null !== a && this.emit("data", a), a;
        }, l.prototype._read = function () {
          this.emit("error", new Error("_read() is not implemented"));
        }, l.prototype.pipe = function (e, t) {
          function n(e, t) {
            H("onunpipe"), e === u && t && !1 === t.hasUnpiped && (t.hasUnpiped = !0, a());
          }function o() {
            H("onend"), e.end();
          }function a() {
            H("cleanup"), e.removeListener("close", l), e.removeListener("finish", c), e.removeListener("drain", m), e.removeListener("error", s), e.removeListener("unpipe", n), u.removeListener("end", o), u.removeListener("end", p), u.removeListener("data", i), _ = !0, f.awaitDrain && (!e._writableState || e._writableState.needDrain) && m();
          }function i(t) {
            H("ondata"), b = !1;var n = e.write(t);!1 !== n || b || ((1 === f.pipesCount && f.pipes === e || 1 < f.pipesCount && -1 !== B(f.pipes, e)) && !_ && (H("false write response, pause", u._readableState.awaitDrain), u._readableState.awaitDrain++, b = !0), u.pause());
          }function s(t) {
            H("onerror", t), p(), e.removeListener("error", s), 0 === P(e, "error") && e.emit("error", t);
          }function l() {
            e.removeListener("finish", c), p();
          }function c() {
            H("onfinish"), e.removeListener("close", l), p();
          }function p() {
            H("unpipe"), u.unpipe(e);
          }var u = this,
              f = this._readableState;switch (f.pipesCount) {case 0:
              f.pipes = e;break;case 1:
              f.pipes = [f.pipes, e];break;default:
              f.pipes.push(e);}f.pipesCount += 1, H("pipe count=%d opts=%j", f.pipesCount, t);var g = (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr,
              h = g ? o : p;f.endEmitted ? F.nextTick(h) : u.once("end", h), e.on("unpipe", n);var m = w(u);e.on("drain", m);var _ = !1,
              b = !1;return u.on("data", i), d(e, "error", s), e.once("close", l), e.once("finish", c), e.emit("pipe", u), f.flowing || (H("pipe resume"), u.resume()), e;
        }, l.prototype.unpipe = function (e) {
          var t = this._readableState,
              n = { hasUnpiped: !1 };if (0 === t.pipesCount) return this;if (1 === t.pipesCount) return e && e !== t.pipes ? this : (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n), this);if (!e) {
            var r = t.pipes,
                o = t.pipesCount;t.pipes = null, t.pipesCount = 0, t.flowing = !1;for (var a = 0; a < o; a++) {
              r[a].emit("unpipe", this, n);
            }return this;
          }var d = B(t.pipes, e);return -1 === d ? this : (t.pipes.splice(d, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n), this);
        }, l.prototype.on = function (e, t) {
          var n = j.prototype.on.call(this, e, t);if ("data" === e) !1 !== this._readableState.flowing && this.resume();else if ("readable" === e) {
            var r = this._readableState;r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.emittedReadable = !1, r.reading ? r.length && _(this) : F.nextTick(S, this));
          }return n;
        }, l.prototype.addListener = l.prototype.on, l.prototype.resume = function () {
          var e = this._readableState;return e.flowing || (H("resume"), e.flowing = !0, v(this, e)), this;
        }, l.prototype.pause = function () {
          return H("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (H("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
        }, l.prototype.wrap = function (e) {
          var t = this,
              r = this._readableState,
              o = !1;for (var a in e.on("end", function () {
            if (H("wrapped end"), r.decoder && !r.ended) {
              var e = r.decoder.end();e && e.length && t.push(e);
            }t.push(null);
          }), e.on("data", function (n) {
            if ((H("wrapped data"), r.decoder && (n = r.decoder.write(n)), !(r.objectMode && (null === n || void 0 === n))) && (r.objectMode || n && n.length)) {
              var a = t.push(n);a || (o = !0, e.pause());
            }
          }), e) {
            void 0 === this[a] && "function" == typeof e[a] && (this[a] = function (t) {
              return function () {
                return e[t].apply(e, arguments);
              };
            }(a));
          }for (var i = 0; i < Y.length; i++) {
            e.on(Y[i], this.emit.bind(this, Y[i]));
          }return this._read = function (t) {
            H("wrapped _read", t), o && (o = !1, e.resume());
          }, this;
        }, Object.defineProperty(l.prototype, "readableHighWaterMark", { enumerable: !1, get: function get() {
            return this._readableState.highWaterMark;
          } }), l._fromList = k;
      }).call(this, e("_process"), "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global);
    }, { "./_stream_duplex": 17, "./internal/streams/BufferList": 22, "./internal/streams/destroy": 23, "./internal/streams/stream": 24, _process: 15, "core-util-is": 5, events: 4, inherits: 10, isarray: 12, "process-nextick-args": 14, "safe-buffer": 26, "string_decoder/": 27, util: 2 }], 20: [function (e, t) {
      "use strict";
      function n(e, t) {
        var n = this._transformState;n.transforming = !1;var r = n.writecb;if (!r) return this.emit("error", new Error("write callback called multiple times"));n.writechunk = null, n.writecb = null, null != t && this.push(t), r(e);var o = this._readableState;o.reading = !1, (o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark);
      }function r(e) {
        return this instanceof r ? void (i.call(this, e), this._transformState = { afterTransform: n.bind(this), needTransform: !1, transforming: !1, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", o)) : new r(e);
      }function o() {
        var e = this;"function" == typeof this._flush ? this._flush(function (t, n) {
          a(e, t, n);
        }) : a(this, null, null);
      }function a(e, t, n) {
        if (t) return e.emit("error", t);if (null != n && e.push(n), e._writableState.length) throw new Error("Calling transform done when ws.length != 0");if (e._transformState.transforming) throw new Error("Calling transform done when still transforming");return e.push(null);
      }t.exports = r;var i = e("./_stream_duplex"),
          d = e("core-util-is");d.inherits = e("inherits"), d.inherits(r, i), r.prototype.push = function (e, t) {
        return this._transformState.needTransform = !1, i.prototype.push.call(this, e, t);
      }, r.prototype._transform = function () {
        throw new Error("_transform() is not implemented");
      }, r.prototype._write = function (e, t, n) {
        var r = this._transformState;if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
          var o = this._readableState;(r.needTransform || o.needReadable || o.length < o.highWaterMark) && this._read(o.highWaterMark);
        }
      }, r.prototype._read = function () {
        var e = this._transformState;null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0;
      }, r.prototype._destroy = function (e, t) {
        var n = this;i.prototype._destroy.call(this, e, function (e) {
          t(e), n.emit("close");
        });
      };
    }, { "./_stream_duplex": 17, "core-util-is": 5, inherits: 10 }], 21: [function (e, n) {
      (function (r, o, a) {
        "use strict";
        function i(e) {
          var t = this;this.next = null, this.entry = null, this.finish = function () {
            E(t, e);
          };
        }function d(e) {
          return M.from(e);
        }function s(e) {
          return M.isBuffer(e) || e instanceof D;
        }function l() {}function c(n, r) {
          L = L || e("./_stream_duplex"), n = n || {};var o = r instanceof L;this.objectMode = !!n.objectMode, o && (this.objectMode = this.objectMode || !!n.writableObjectMode);var a = n.highWaterMark,
              d = n.writableHighWaterMark,
              s = this.objectMode ? 16 : 16384;this.highWaterMark = a || 0 === a ? a : o && (d || 0 === d) ? d : s, this.highWaterMark = t(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;var l = !1 === n.decodeStrings;this.decodeStrings = !l, this.defaultEncoding = n.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (e) {
            y(r, e);
          }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new i(this);
        }function p(t) {
          return L = L || e("./_stream_duplex"), j.call(p, this) || this instanceof L ? void (this._writableState = new c(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), N.call(this)) : new p(t);
        }function u(e, t) {
          var n = new Error("write after end");e.emit("error", n), A.nextTick(t, n);
        }function f(e, t, n, r) {
          var o = !0,
              a = !1;return null === n ? a = new TypeError("May not write null values to stream") : "string" != typeof n && void 0 !== n && !t.objectMode && (a = new TypeError("Invalid non-string/buffer chunk")), a && (e.emit("error", a), A.nextTick(r, a), o = !1), o;
        }function g(e, t, n) {
          return e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = M.from(t, n)), t;
        }function h(e, t, n, r, o, a) {
          if (!n) {
            var i = g(t, r, o);r !== i && (n = !0, o = "buffer", r = i);
          }var d = t.objectMode ? 1 : r.length;t.length += d;var s = t.length < t.highWaterMark;if (s || (t.needDrain = !0), t.writing || t.corked) {
            var l = t.lastBufferedRequest;t.lastBufferedRequest = { chunk: r, encoding: o, isBuf: n, callback: a, next: null }, l ? l.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1;
          } else m(e, t, !1, d, r, o, a);return s;
        }function m(e, t, n, r, o, a, i) {
          t.writelen = r, t.writecb = i, t.writing = !0, t.sync = !0, n ? e._writev(o, t.onwrite) : e._write(o, a, t.onwrite), t.sync = !1;
        }function _(e, t, n, r, o) {
          --t.pendingcb, n ? (A.nextTick(o, r), A.nextTick(k, e, t), e._writableState.errorEmitted = !0, e.emit("error", r)) : (o(r), e._writableState.errorEmitted = !0, e.emit("error", r), k(e, t));
        }function b(e) {
          e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0;
        }function y(e, t) {
          var n = e._writableState,
              r = n.sync,
              o = n.writecb;if (b(n), t) _(e, n, r, t, o);else {
            var a = v(n);a || n.corked || n.bufferProcessing || !n.bufferedRequest || S(e, n), r ? I(C, e, n, a, o) : C(e, n, a, o);
          }
        }function C(e, t, n, r) {
          n || w(e, t), t.pendingcb--, r(), k(e, t);
        }function w(e, t) {
          0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"));
        }function S(e, t) {
          t.bufferProcessing = !0;var n = t.bufferedRequest;if (e._writev && n && n.next) {
            var r = t.bufferedRequestCount,
                o = Array(r),
                a = t.corkedRequestsFree;a.entry = n;for (var d = 0, s = !0; n;) {
              o[d] = n, n.isBuf || (s = !1), n = n.next, d += 1;
            }o.allBuffers = s, m(e, t, !0, t.length, o, "", a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new i(t), t.bufferedRequestCount = 0;
          } else {
            for (; n;) {
              var l = n.chunk,
                  c = n.encoding,
                  p = n.callback,
                  u = t.objectMode ? 1 : l.length;if (m(e, t, !1, u, l, c, p), n = n.next, t.bufferedRequestCount--, t.writing) break;
            }null === n && (t.lastBufferedRequest = null);
          }t.bufferedRequest = n, t.bufferProcessing = !1;
        }function v(e) {
          return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing;
        }function x(e, t) {
          e._final(function (n) {
            t.pendingcb--, n && e.emit("error", n), t.prefinished = !0, e.emit("prefinish"), k(e, t);
          });
        }function R(e, t) {
          t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++, t.finalCalled = !0, A.nextTick(x, e, t)) : (t.prefinished = !0, e.emit("prefinish")));
        }function k(e, t) {
          var n = v(t);return n && (R(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), n;
        }function T(e, t, n) {
          t.ending = !0, k(e, t), n && (t.finished ? A.nextTick(n) : e.once("finish", n)), t.ended = !0, e.writable = !1;
        }function E(e, t, n) {
          var r = e.entry;for (e.entry = null; r;) {
            var o = r.callback;t.pendingcb--, o(n), r = r.next;
          }t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e;
        }var A = e("process-nextick-args");n.exports = p;var L,
            I = !r.browser && -1 < ["v0.10", "v0.9."].indexOf(r.version.slice(0, 5)) ? a : A.nextTick;p.WritableState = c;var B = e("core-util-is");B.inherits = e("inherits");var F = { deprecate: e("util-deprecate") },
            N = e("./internal/streams/stream"),
            M = e("safe-buffer").Buffer,
            D = o.Uint8Array || function () {},
            P = e("./internal/streams/destroy");B.inherits(p, N), c.prototype.getBuffer = function () {
          for (var e = this.bufferedRequest, t = []; e;) {
            t.push(e), e = e.next;
          }return t;
        }, function () {
          try {
            Object.defineProperty(c.prototype, "buffer", { get: F.deprecate(function () {
                return this.getBuffer();
              }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
          } catch (e) {}
        }();var j;"function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (j = Function.prototype[Symbol.hasInstance], Object.defineProperty(p, Symbol.hasInstance, { value: function value(e) {
            return !!j.call(this, e) || !(this !== p) && e && e._writableState instanceof c;
          } })) : j = function j(e) {
          return e instanceof this;
        }, p.prototype.pipe = function () {
          this.emit("error", new Error("Cannot pipe, not readable"));
        }, p.prototype.write = function (e, t, n) {
          var r = this._writableState,
              o = !1,
              a = !r.objectMode && s(e);return a && !M.isBuffer(e) && (e = d(e)), "function" == typeof t && (n = t, t = null), a ? t = "buffer" : !t && (t = r.defaultEncoding), "function" != typeof n && (n = l), r.ended ? u(this, n) : (a || f(this, r, e, n)) && (r.pendingcb++, o = h(this, r, a, e, t, n)), o;
        }, p.prototype.cork = function () {
          var e = this._writableState;e.corked++;
        }, p.prototype.uncork = function () {
          var e = this._writableState;e.corked && (e.corked--, !e.writing && !e.corked && !e.finished && !e.bufferProcessing && e.bufferedRequest && S(this, e));
        }, p.prototype.setDefaultEncoding = function (e) {
          if ("string" == typeof e && (e = e.toLowerCase()), !(-1 < ["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()))) throw new TypeError("Unknown encoding: " + e);return this._writableState.defaultEncoding = e, this;
        }, Object.defineProperty(p.prototype, "writableHighWaterMark", { enumerable: !1, get: function get() {
            return this._writableState.highWaterMark;
          } }), p.prototype._write = function (e, t, n) {
          n(new Error("_write() is not implemented"));
        }, p.prototype._writev = null, p.prototype.end = function (e, t, n) {
          var r = this._writableState;"function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null !== e && e !== void 0 && this.write(e, t), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || T(this, r, n);
        }, Object.defineProperty(p.prototype, "destroyed", { get: function get() {
            return void 0 !== this._writableState && this._writableState.destroyed;
          }, set: function set(e) {
            this._writableState && (this._writableState.destroyed = e);
          } }), p.prototype.destroy = P.destroy, p.prototype._undestroy = P.undestroy, p.prototype._destroy = function (e, t) {
          this.end(), t(e);
        };
      }).call(this, e("_process"), "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global, e("timers").setImmediate);
    }, { "./_stream_duplex": 17, "./internal/streams/destroy": 23, "./internal/streams/stream": 24, _process: 15, "core-util-is": 5, inherits: 10, "process-nextick-args": 14, "safe-buffer": 26, timers: 28, "util-deprecate": 29 }], 22: [function (e, t) {
      "use strict";
      function n(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }function r(e, t, n) {
        e.copy(t, n);
      }var o = e("safe-buffer").Buffer,
          a = e("util");t.exports = function () {
        function e() {
          n(this, e), this.head = null, this.tail = null, this.length = 0;
        }return e.prototype.push = function (e) {
          var t = { data: e, next: null };0 < this.length ? this.tail.next = t : this.head = t, this.tail = t, ++this.length;
        }, e.prototype.unshift = function (e) {
          var t = { data: e, next: this.head };0 === this.length && (this.tail = t), this.head = t, ++this.length;
        }, e.prototype.shift = function () {
          if (0 !== this.length) {
            var e = this.head.data;return this.head = 1 === this.length ? this.tail = null : this.head.next, --this.length, e;
          }
        }, e.prototype.clear = function () {
          this.head = this.tail = null, this.length = 0;
        }, e.prototype.join = function (e) {
          if (0 === this.length) return "";for (var t = this.head, n = "" + t.data; t = t.next;) {
            n += e + t.data;
          }return n;
        }, e.prototype.concat = function (e) {
          if (0 === this.length) return o.alloc(0);if (1 === this.length) return this.head.data;for (var t = o.allocUnsafe(e >>> 0), n = this.head, a = 0; n;) {
            r(n.data, t, a), a += n.data.length, n = n.next;
          }return t;
        }, e;
      }(), a && a.inspect && a.inspect.custom && (t.exports.prototype[a.inspect.custom] = function () {
        var e = a.inspect({ length: this.length });return this.constructor.name + " " + e;
      });
    }, { "safe-buffer": 26, util: 2 }], 23: [function (e, t) {
      "use strict";
      function n(e, t) {
        e.emit("error", t);
      }var r = e("process-nextick-args");t.exports = { destroy: function destroy(e, t) {
          var o = this,
              a = this._readableState && this._readableState.destroyed,
              i = this._writableState && this._writableState.destroyed;return a || i ? (t ? t(e) : e && (!this._writableState || !this._writableState.errorEmitted) && r.nextTick(n, this, e), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function (e) {
            !t && e ? (r.nextTick(n, o, e), o._writableState && (o._writableState.errorEmitted = !0)) : t && t(e);
          }), this);
        }, undestroy: function undestroy() {
          this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
        } };
    }, { "process-nextick-args": 14 }], 24: [function (e, t) {
      t.exports = e("events").EventEmitter;
    }, { events: 4 }], 25: [function (e, t, n) {
      n = t.exports = e("./lib/_stream_readable.js"), n.Stream = n, n.Readable = n, n.Writable = e("./lib/_stream_writable.js"), n.Duplex = e("./lib/_stream_duplex.js"), n.Transform = e("./lib/_stream_transform.js"), n.PassThrough = e("./lib/_stream_passthrough.js");
    }, { "./lib/_stream_duplex.js": 17, "./lib/_stream_passthrough.js": 18, "./lib/_stream_readable.js": 19, "./lib/_stream_transform.js": 20, "./lib/_stream_writable.js": 21 }], 26: [function (e, t, n) {
      function r(e, t) {
        for (var n in e) {
          t[n] = e[n];
        }
      }function o(e, t, n) {
        return i(e, t, n);
      }var a = e("buffer"),
          i = a.Buffer;i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = a : (r(a, n), n.Buffer = o), r(i, o), o.from = function (e, t, n) {
        if ("number" == typeof e) throw new TypeError("Argument must not be a number");return i(e, t, n);
      }, o.alloc = function (e, t, n) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");var r = i(e);return void 0 === t ? r.fill(0) : "string" == typeof n ? r.fill(t, n) : r.fill(t), r;
      }, o.allocUnsafe = function (e) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");return i(e);
      }, o.allocUnsafeSlow = function (e) {
        if ("number" != typeof e) throw new TypeError("Argument must be a number");return a.SlowBuffer(e);
      };
    }, { buffer: 3 }], 27: [function (e, t, n) {
      "use strict";
      function r(e) {
        if (!e) return "utf8";for (var t;;) {
          switch (e) {case "utf8":case "utf-8":
              return "utf8";case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":
              return "utf16le";case "latin1":case "binary":
              return "latin1";case "base64":case "ascii":case "hex":
              return e;default:
              if (t) return;e = ("" + e).toLowerCase(), t = !0;}
        }
      }function o(e) {
        var t = r(e);if ("string" != typeof t && (m.isEncoding === _ || !_(e))) throw new Error("Unknown encoding: " + e);return t || e;
      }function a(e) {
        this.encoding = o(e);var t;switch (this.encoding) {case "utf16le":
            this.text = c, this.end = p, t = 4;break;case "utf8":
            this.fillLast = l, t = 4;break;case "base64":
            this.text = u, this.end = f, t = 3;break;default:
            return this.write = g, void (this.end = h);}this.lastNeed = 0, this.lastTotal = 0, this.lastChar = m.allocUnsafe(t);
      }function d(e) {
        if (127 >= e) return 0;return 6 == e >> 5 ? 2 : 14 == e >> 4 ? 3 : 30 == e >> 3 ? 4 : 2 == e >> 6 ? -1 : -2;
      }function s(e, t, n) {
        var r = t.length - 1;if (r < n) return 0;var o = d(t[r]);return 0 <= o ? (0 < o && (e.lastNeed = o - 1), o) : --r < n || -2 === o ? 0 : (o = d(t[r]), 0 <= o) ? (0 < o && (e.lastNeed = o - 2), o) : --r < n || -2 === o ? 0 : (o = d(t[r]), 0 <= o ? (0 < o && (2 === o ? o = 0 : e.lastNeed = o - 3), o) : 0);
      }function i(e, t) {
        if (128 != (192 & t[0])) return e.lastNeed = 0, "\uFFFD";if (1 < e.lastNeed && 1 < t.length) {
          if (128 != (192 & t[1])) return e.lastNeed = 1, "\uFFFD";if (2 < e.lastNeed && 2 < t.length && 128 != (192 & t[2])) return e.lastNeed = 2, "\uFFFD";
        }
      }function l(e) {
        var t = this.lastTotal - this.lastNeed,
            n = i(this, e, t);return void 0 === n ? this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void (e.copy(this.lastChar, t, 0, e.length), this.lastNeed -= e.length) : n;
      }function c(e, t) {
        if (0 == (e.length - t) % 2) {
          var n = e.toString("utf16le", t);if (n) {
            var r = n.charCodeAt(n.length - 1);if (55296 <= r && 56319 >= r) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1);
          }return n;
        }return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1);
      }function p(e) {
        var t = e && e.length ? this.write(e) : "";if (this.lastNeed) {
          var n = this.lastTotal - this.lastNeed;return t + this.lastChar.toString("utf16le", 0, n);
        }return t;
      }function u(e, t) {
        var r = (e.length - t) % 3;return 0 == r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 == r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r));
      }function f(e) {
        var t = e && e.length ? this.write(e) : "";return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t;
      }function g(e) {
        return e.toString(this.encoding);
      }function h(e) {
        return e && e.length ? this.write(e) : "";
      }var m = e("safe-buffer").Buffer,
          _ = m.isEncoding || function (e) {
        switch (e = "" + e, e && e.toLowerCase()) {case "hex":case "utf8":case "utf-8":case "ascii":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":case "raw":
            return !0;default:
            return !1;}
      };n.StringDecoder = a, a.prototype.write = function (e) {
        if (0 === e.length) return "";var t, n;if (this.lastNeed) {
          if (t = this.fillLast(e), void 0 === t) return "";n = this.lastNeed, this.lastNeed = 0;
        } else n = 0;return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || "";
      }, a.prototype.end = function (e) {
        var t = e && e.length ? this.write(e) : "";return this.lastNeed ? t + "\uFFFD" : t;
      }, a.prototype.text = function (e, t) {
        var n = s(this, e, t);if (!this.lastNeed) return e.toString("utf8", t);this.lastTotal = n;var r = e.length - (n - this.lastNeed);return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r);
      }, a.prototype.fillLast = function (e) {
        return this.lastNeed <= e.length ? (e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : void (e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length);
      };
    }, { "safe-buffer": 26 }], 28: [function (e, t, n) {
      (function (t, r) {
        function o(e, t) {
          this._id = e, this._clearFn = t;
        }var a = e("process/browser.js").nextTick,
            i = Function.prototype.apply,
            d = Array.prototype.slice,
            s = {},
            l = 0;n.setTimeout = function () {
          return new o(i.call(setTimeout, window, arguments), clearTimeout);
        }, n.setInterval = function () {
          return new o(i.call(setInterval, window, arguments), clearInterval);
        }, n.clearTimeout = n.clearInterval = function (e) {
          e.close();
        }, o.prototype.unref = o.prototype.ref = function () {}, o.prototype.close = function () {
          this._clearFn.call(window, this._id);
        }, n.enroll = function (e, t) {
          clearTimeout(e._idleTimeoutId), e._idleTimeout = t;
        }, n.unenroll = function (e) {
          clearTimeout(e._idleTimeoutId), e._idleTimeout = -1;
        }, n._unrefActive = n.active = function (e) {
          clearTimeout(e._idleTimeoutId);var t = e._idleTimeout;0 <= t && (e._idleTimeoutId = setTimeout(function () {
            e._onTimeout && e._onTimeout();
          }, t));
        }, n.setImmediate = "function" == typeof t ? t : function (e) {
          var t = l++,
              r = !(2 > arguments.length) && d.call(arguments, 1);return s[t] = !0, a(function () {
            s[t] && (r ? e.apply(null, r) : e.call(null), n.clearImmediate(t));
          }), t;
        }, n.clearImmediate = "function" == typeof r ? r : function (e) {
          delete s[e];
        };
      }).call(this, e("timers").setImmediate, e("timers").clearImmediate);
    }, { "process/browser.js": 15, timers: 28 }], 29: [function (e, t) {
      (function (e) {
        function n(t) {
          try {
            if (!e.localStorage) return !1;
          } catch (e) {
            return !1;
          }var n = e.localStorage[t];return null != n && "true" === (n + "").toLowerCase();
        }t.exports = function (e, t) {
          function r() {
            if (!o) {
              if (n("throwDeprecation")) throw new Error(t);else n("traceDeprecation") ? console.trace(t) : console.warn(t);o = !0;
            }return e.apply(this, arguments);
          }if (n("noDeprecation")) return e;var o = !1;return r;
        };
      }).call(this, "undefined" == typeof global ? "undefined" == typeof self ? "undefined" == typeof window ? {} : window : self : global);
    }, {}], "/": [function (e, t) {
      (function (n) {
        function r(e) {
          var t = this;if (!(t instanceof r)) return new r(e);if (t._id = l(4).toString("hex").slice(0, 7), t._debug("new peer %o", e), e = Object.assign({ allowHalfOpen: !1 }, e), c.Duplex.call(t, e), t.channelName = e.initiator ? e.channelName || l(20).toString("hex") : null, t._isChromium = "undefined" != typeof window && !!window.webkitRTCPeerConnection, t.initiator = e.initiator || !1, t.channelConfig = e.channelConfig || r.channelConfig, t.config = e.config || r.config, t.constraints = t._transformConstraints(e.constraints || r.constraints), t.offerConstraints = t._transformConstraints(e.offerConstraints || {}), t.answerConstraints = t._transformConstraints(e.answerConstraints || {}), t.sdpTransform = e.sdpTransform || function (e) {
            return e;
          }, t.streams = e.streams || (e.stream ? [e.stream] : []), t.trickle = void 0 === e.trickle || e.trickle, t.destroyed = !1, t.connected = !1, t.remoteAddress = void 0, t.remoteFamily = void 0, t.remotePort = void 0, t.localAddress = void 0, t.localPort = void 0, t._wrtc = e.wrtc && "object" == _typeof(e.wrtc) ? e.wrtc : d(), !t._wrtc) if ("undefined" == typeof window) throw o("No WebRTC support: Specify `opts.wrtc` option in this environment", "ERR_WEBRTC_SUPPORT");else throw o("No WebRTC support: Not a supported browser", "ERR_WEBRTC_SUPPORT");t._pcReady = !1, t._channelReady = !1, t._iceComplete = !1, t._channel = null, t._pendingCandidates = [], t._isNegotiating = !1, t._batchedNegotiation = !1, t._queuedNegotiation = !1, t._sendersAwaitingStable = [], t._senderMap = new WeakMap(), t._remoteTracks = [], t._remoteStreams = [], t._chunk = null, t._cb = null, t._interval = null, t._pc = new t._wrtc.RTCPeerConnection(t.config, t.constraints), t._isReactNativeWebrtc = "number" == typeof t._pc._peerConnectionId, t._pc.oniceconnectionstatechange = function () {
            t._onIceStateChange();
          }, t._pc.onicegatheringstatechange = function () {
            t._onIceStateChange();
          }, t._pc.onsignalingstatechange = function () {
            t._onSignalingStateChange();
          }, t._pc.onicecandidate = function (e) {
            t._onIceCandidate(e);
          }, t.initiator ? t._setupData({ channel: t._pc.createDataChannel(t.channelName, t.channelConfig) }) : t._pc.ondatachannel = function (e) {
            t._setupData(e);
          }, "addTrack" in t._pc && (t.streams && t.streams.forEach(function (e) {
            t.addStream(e);
          }), t._pc.ontrack = function (e) {
            t._onTrack(e);
          }), t.initiator && t._needsNegotiation(), t._onFinishBound = function () {
            t._onFinish();
          }, t.once("finish", t._onFinishBound);
        }function o(e, t) {
          var n = new Error(e);return n.code = t, n;
        }function a() {}t.exports = r;var i = e("debug")("simple-peer"),
            d = e("get-browser-rtc"),
            s = e("inherits"),
            l = e("randombytes"),
            c = e("readable-stream"),
            p = 65536;s(r, c.Duplex), r.WEBRTC_SUPPORT = !!d(), r.config = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }, { urls: "stun:global.stun.twilio.com:3478?transport=udp" }] }, r.constraints = {}, r.channelConfig = {}, Object.defineProperty(r.prototype, "bufferSize", { get: function get() {
            var e = this;return e._channel && e._channel.bufferedAmount || 0;
          } }), r.prototype.address = function () {
          var e = this;return { port: e.localPort, family: "IPv4", address: e.localAddress };
        }, r.prototype.signal = function (e) {
          var t = this;if (t.destroyed) throw o("cannot signal after peer is destroyed", "ERR_SIGNALING");if ("string" == typeof e) try {
            e = JSON.parse(e);
          } catch (t) {
            e = {};
          }t._debug("signal()"), e.renegotiate && (t._debug("got request to renegotiate"), t._needsNegotiation()), e.candidate && (t._pc.remoteDescription && t._pc.remoteDescription.type ? t._addIceCandidate(e.candidate) : t._pendingCandidates.push(e.candidate)), e.sdp && t._pc.setRemoteDescription(new t._wrtc.RTCSessionDescription(e), function () {
            t.destroyed || (t._pendingCandidates.forEach(function (e) {
              t._addIceCandidate(e);
            }), t._pendingCandidates = [], "offer" === t._pc.remoteDescription.type && t._createAnswer());
          }, function (e) {
            t.destroy(o(e, "ERR_SET_REMOTE_DESCRIPTION"));
          }), e.sdp || e.candidate || e.renegotiate || t.destroy(o("signal() called with invalid signal data", "ERR_SIGNALING"));
        }, r.prototype._addIceCandidate = function (e) {
          var t = this;try {
            t._pc.addIceCandidate(new t._wrtc.RTCIceCandidate(e), a, function (e) {
              t.destroy(o(e, "ERR_ADD_ICE_CANDIDATE"));
            });
          } catch (e) {
            t.destroy(o("error adding candidate: " + e.message, "ERR_ADD_ICE_CANDIDATE"));
          }
        }, r.prototype.send = function (e) {
          var t = this;t._channel.send(e);
        }, r.prototype.addStream = function (e) {
          var t = this;t._debug("addStream()"), e.getTracks().forEach(function (n) {
            t.addTrack(n, e);
          });
        }, r.prototype.addTrack = function (e, t) {
          var n = this;n._debug("addTrack()");var r = n._pc.addTrack(e, t),
              o = n._senderMap.get(e) || new WeakMap();o.set(t, r), n._senderMap.set(e, o), n._needsNegotiation();
        }, r.prototype.removeTrack = function (e, t) {
          var n = this;n._debug("removeSender()");var r = n._senderMap.get(e),
              o = r ? r.get(t) : null;o || n.destroy(new Error("Cannot remove track that was never added."));try {
            n._pc.removeTrack(o);
          } catch (e) {
            "NS_ERROR_UNEXPECTED" === e.name ? n._sendersAwaitingStable.push(o) : n.destroy(e);
          }
        }, r.prototype.removeStream = function (e) {
          var t = this;t._debug("removeSenders()"), e.getTracks().forEach(function (n) {
            t.removeTrack(n, e);
          });
        }, r.prototype._needsNegotiation = function () {
          var e = this;e._debug("_needsNegotiation"), e._batchedNegotiation || (e._batchedNegotiation = !0, setTimeout(function () {
            e._batchedNegotiation = !1, e._debug("starting batched negotiation"), e.negotiate();
          }, 0));
        }, r.prototype.negotiate = function () {
          var e = this;e.initiator ? e._isNegotiating ? (e._queuedNegotiation = !0, e._debug("already negotiating, queueing")) : (e._debug("start negotiation"), e._createOffer()) : (e._debug("requesting negotiation from initiator"), e.emit("signal", { renegotiate: !0 })), e._isNegotiating = !0;
        }, r.prototype.destroy = function (e) {
          var t = this;t._destroy(e, function () {});
        }, r.prototype._destroy = function (e, t) {
          var n = this;if (!n.destroyed) {
            if (n._debug("destroy (error: %s)", e && (e.message || e)), n.readable = n.writable = !1, n._readableState.ended || n.push(null), n._writableState.finished || n.end(), n.destroyed = !0, n.connected = !1, n._pcReady = !1, n._channelReady = !1, n._remoteTracks = null, n._remoteStreams = null, n._senderMap = null, clearInterval(n._interval), n._interval = null, n._chunk = null, n._cb = null, n._onFinishBound && n.removeListener("finish", n._onFinishBound), n._onFinishBound = null, n._channel) {
              try {
                n._channel.close();
              } catch (e) {}n._channel.onmessage = null, n._channel.onopen = null, n._channel.onclose = null, n._channel.onerror = null;
            }if (n._pc) {
              try {
                n._pc.close();
              } catch (e) {}n._pc.oniceconnectionstatechange = null, n._pc.onicegatheringstatechange = null, n._pc.onsignalingstatechange = null, n._pc.onicecandidate = null, "addTrack" in n._pc && (n._pc.ontrack = null), n._pc.ondatachannel = null;
            }n._pc = null, n._channel = null, e && n.emit("error", e), n.emit("close"), t();
          }
        }, r.prototype._setupData = function (e) {
          var t = this;return e.channel ? void (t._channel = e.channel, t._channel.binaryType = "arraybuffer", "number" == typeof t._channel.bufferedAmountLowThreshold && (t._channel.bufferedAmountLowThreshold = p), t.channelName = t._channel.label, t._channel.onmessage = function (e) {
            t._onChannelMessage(e);
          }, t._channel.onbufferedamountlow = function () {
            t._onChannelBufferedAmountLow();
          }, t._channel.onopen = function () {
            t._onChannelOpen();
          }, t._channel.onclose = function () {
            t._onChannelClose();
          }, t._channel.onerror = function (e) {
            t.destroy(o(e, "ERR_DATA_CHANNEL"));
          }) : t.destroy(o("Data channel event is missing `channel` property", "ERR_DATA_CHANNEL"));
        }, r.prototype._read = function () {}, r.prototype._write = function (e, t, n) {
          var r = this;if (r.destroyed) return n(o("cannot write after peer is destroyed", "ERR_DATA_CHANNEL"));if (r.connected) {
            try {
              r.send(e);
            } catch (e) {
              return r.destroy(o(e, "ERR_DATA_CHANNEL"));
            }r._channel.bufferedAmount > p ? (r._debug("start backpressure: bufferedAmount %d", r._channel.bufferedAmount), r._cb = n) : n(null);
          } else r._debug("write before connect"), r._chunk = e, r._cb = n;
        }, r.prototype._onFinish = function () {
          function e() {
            setTimeout(function () {
              t.destroy();
            }, 1e3);
          }var t = this;t.destroyed || (t.connected ? e() : t.once("connect", e));
        }, r.prototype._createOffer = function () {
          var e = this;e.destroyed || e._pc.createOffer(function (t) {
            function n() {
              var n = e._pc.localDescription || t;e._debug("signal"), e.emit("signal", { type: n.type, sdp: n.sdp });
            }e.destroyed || (t.sdp = e.sdpTransform(t.sdp), e._pc.setLocalDescription(t, function () {
              e._debug("createOffer success"), e.destroyed || (e.trickle || e._iceComplete ? n() : e.once("_iceComplete", n));
            }, function (t) {
              e.destroy(o(t, "ERR_SET_LOCAL_DESCRIPTION"));
            }));
          }, function (t) {
            e.destroy(o(t, "ERR_CREATE_OFFER"));
          }, e.offerConstraints);
        }, r.prototype._createAnswer = function () {
          var e = this;e.destroyed || e._pc.createAnswer(function (t) {
            function n() {
              var n = e._pc.localDescription || t;e._debug("signal"), e.emit("signal", { type: n.type, sdp: n.sdp });
            }e.destroyed || (t.sdp = e.sdpTransform(t.sdp), e._pc.setLocalDescription(t, function () {
              e.destroyed || (e.trickle || e._iceComplete ? n() : e.once("_iceComplete", n));
            }, function (t) {
              e.destroy(o(t, "ERR_SET_LOCAL_DESCRIPTION"));
            }));
          }, function (t) {
            e.destroy(o(t, "ERR_CREATE_ANSWER"));
          }, e.answerConstraints);
        }, r.prototype._onIceStateChange = function () {
          var e = this;if (!e.destroyed) {
            var t = e._pc.iceConnectionState,
                n = e._pc.iceGatheringState;e._debug("iceStateChange (connection: %s) (gathering: %s)", t, n), e.emit("iceStateChange", t, n), ("connected" === t || "completed" === t) && (e._pcReady = !0, e._maybeReady()), "failed" === t && e.destroy(o("Ice connection failed.", "ERR_ICE_CONNECTION_FAILURE")), "closed" === t && e.destroy(new Error("Ice connection closed."));
          }
        }, r.prototype.getStats = function (e) {
          var t = this;0 === t._pc.getStats.length ? t._pc.getStats().then(function (t) {
            var n = [];t.forEach(function (e) {
              n.push(e);
            }), e(null, n);
          }, function (t) {
            e(t);
          }) : t._isReactNativeWebrtc ? t._pc.getStats(null, function (t) {
            var n = [];t.forEach(function (e) {
              n.push(e);
            }), e(null, n);
          }, function (t) {
            e(t);
          }) : 0 < t._pc.getStats.length ? t._pc.getStats(function (n) {
            if (!t.destroyed) {
              var r = [];n.result().forEach(function (e) {
                var t = {};e.names().forEach(function (n) {
                  t[n] = e.stat(n);
                }), t.id = e.id, t.type = e.type, t.timestamp = e.timestamp, r.push(t);
              }), e(null, r);
            }
          }, function (t) {
            e(t);
          }) : e(null, []);
        }, r.prototype._maybeReady = function () {
          function e() {
            t.destroyed || t.getStats(function (n, r) {
              function a(e) {
                l = !0;var n = d[e.localCandidateId];n && n.ip ? (t.localAddress = n.ip, t.localPort = +n.port) : n && n.ipAddress ? (t.localAddress = n.ipAddress, t.localPort = +n.portNumber) : "string" == typeof e.googLocalAddress && (n = e.googLocalAddress.split(":"), t.localAddress = n[0], t.localPort = +n[1]);var r = i[e.remoteCandidateId];r && r.ip ? (t.remoteAddress = r.ip, t.remotePort = +r.port) : r && r.ipAddress ? (t.remoteAddress = r.ipAddress, t.remotePort = +r.portNumber) : "string" == typeof e.googRemoteAddress && (r = e.googRemoteAddress.split(":"), t.remoteAddress = r[0], t.remotePort = +r[1]), t.remoteFamily = "IPv4", t._debug("connect local: %s:%s remote: %s:%s", t.localAddress, t.localPort, t.remoteAddress, t.remotePort);
              }if (!t.destroyed) {
                n && (r = []);var i = {},
                    d = {},
                    s = {},
                    l = !1;if (r.forEach(function (e) {
                  ("remotecandidate" === e.type || "remote-candidate" === e.type) && (i[e.id] = e), ("localcandidate" === e.type || "local-candidate" === e.type) && (d[e.id] = e), ("candidatepair" === e.type || "candidate-pair" === e.type) && (s[e.id] = e);
                }), r.forEach(function (e) {
                  "transport" === e.type && e.selectedCandidatePairId && a(s[e.selectedCandidatePairId]), ("googCandidatePair" === e.type && "true" === e.googActiveConnection || ("candidatepair" === e.type || "candidate-pair" === e.type) && e.selected) && a(e);
                }), !l && (!Object.keys(s).length || Object.keys(d).length)) return void setTimeout(e, 100);if (t._connecting = !1, t.connected = !0, t._chunk) {
                  try {
                    t.send(t._chunk);
                  } catch (e) {
                    return t.destroy(o(e, "ERR_DATA_CHANNEL"));
                  }t._chunk = null, t._debug("sent chunk from \"write before connect\"");var c = t._cb;t._cb = null, c(null);
                }"number" != typeof t._channel.bufferedAmountLowThreshold && (t._interval = setInterval(function () {
                  t._onInterval();
                }, 150), t._interval.unref && t._interval.unref()), t._debug("connect"), t.emit("connect");
              }
            });
          }var t = this;t._debug("maybeReady pc %s channel %s", t._pcReady, t._channelReady), t.connected || t._connecting || !t._pcReady || !t._channelReady || (t._connecting = !0, e());
        }, r.prototype._onInterval = function () {
          var e = this;e._cb && e._channel && !(e._channel.bufferedAmount > p) && e._onChannelBufferedAmountLow();
        }, r.prototype._onSignalingStateChange = function () {
          var e = this;e.destroyed || ("stable" === e._pc.signalingState && (e._isNegotiating = !1, e._debug("flushing sender queue", e._sendersAwaitingStable), e._sendersAwaitingStable.forEach(function (t) {
            e.removeTrack(t), e._queuedNegotiation = !0;
          }), e._sendersAwaitingStable = [], e._queuedNegotiation && (e._debug("flushing negotiation queue"), e._queuedNegotiation = !1, e._needsNegotiation()), e._debug("negotiate"), e.emit("negotiate")), e._debug("signalingStateChange %s", e._pc.signalingState), e.emit("signalingStateChange", e._pc.signalingState));
        }, r.prototype._onIceCandidate = function (e) {
          var t = this;t.destroyed || (e.candidate && t.trickle ? t.emit("signal", { candidate: { candidate: e.candidate.candidate, sdpMLineIndex: e.candidate.sdpMLineIndex, sdpMid: e.candidate.sdpMid } }) : !e.candidate && (t._iceComplete = !0, t.emit("_iceComplete")));
        }, r.prototype._onChannelMessage = function (e) {
          var t = this;if (!t.destroyed) {
            var r = e.data;r instanceof ArrayBuffer && (r = n.from(r)), t.push(r);
          }
        }, r.prototype._onChannelBufferedAmountLow = function () {
          var e = this;if (!e.destroyed && e._cb) {
            e._debug("ending backpressure: bufferedAmount %d", e._channel.bufferedAmount);var t = e._cb;e._cb = null, t(null);
          }
        }, r.prototype._onChannelOpen = function () {
          var e = this;e.connected || e.destroyed || (e._debug("on channel open"), e._channelReady = !0, e._maybeReady());
        }, r.prototype._onChannelClose = function () {
          var e = this;e.destroyed || (e._debug("on channel close"), e.destroy());
        }, r.prototype._onTrack = function (e) {
          var t = this;t.destroyed || e.streams.forEach(function (n) {
            t._debug("on track"), t.emit("track", e.track, n), t._remoteTracks.push({ track: e.track, stream: n }), t._remoteStreams.some(function (e) {
              return e.id === n.id;
            }) || (t._remoteStreams.push(n), setTimeout(function () {
              t.emit("stream", n);
            }, 0));
          });
        }, r.prototype._debug = function () {
          var e = this,
              t = [].slice.call(arguments);t[0] = "[" + e._id + "] " + t[0], i.apply(null, t);
        }, r.prototype._transformConstraints = function (e) {
          var t = this;if (0 === Object.keys(e).length) return e;if ((e.mandatory || e.optional) && !t._isChromium) {
            var n = Object.assign({}, e.optional, e.mandatory);return void 0 !== n.OfferToReceiveVideo && (n.offerToReceiveVideo = n.OfferToReceiveVideo, delete n.OfferToReceiveVideo), void 0 !== n.OfferToReceiveAudio && (n.offerToReceiveAudio = n.OfferToReceiveAudio, delete n.OfferToReceiveAudio), n;
          }return e.mandatory || e.optional || !t._isChromium ? e : (void 0 !== e.offerToReceiveVideo && (e.OfferToReceiveVideo = e.offerToReceiveVideo, delete e.offerToReceiveVideo), void 0 !== e.offerToReceiveAudio && (e.OfferToReceiveAudio = e.offerToReceiveAudio, delete e.offerToReceiveAudio), { mandatory: e });
        };
      }).call(this, e("buffer").Buffer);
    }, { buffer: 3, debug: 6, "get-browser-rtc": 8, inherits: 10, randombytes: 16, "readable-stream": 25 }] }, {}, [])("/");
});