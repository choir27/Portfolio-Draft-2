"use strict";
(exports.id = 310),
  (exports.ids = [310]),
  (exports.modules = {
    7921: (e, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        (function (e, r) {
          for (var t in r)
            Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
        })(r, {
          WEB_VITALS: function () {
            return t;
          },
          execOnce: function () {
            return execOnce;
          },
          isAbsoluteUrl: function () {
            return isAbsoluteUrl;
          },
          getLocationOrigin: function () {
            return getLocationOrigin;
          },
          getURL: function () {
            return getURL;
          },
          getDisplayName: function () {
            return getDisplayName;
          },
          isResSent: function () {
            return isResSent;
          },
          normalizeRepeatedSlashes: function () {
            return normalizeRepeatedSlashes;
          },
          loadGetInitialProps: function () {
            return loadGetInitialProps;
          },
          SP: function () {
            return o;
          },
          ST: function () {
            return i;
          },
          DecodeError: function () {
            return DecodeError;
          },
          NormalizeError: function () {
            return NormalizeError;
          },
          PageNotFoundError: function () {
            return PageNotFoundError;
          },
          MissingStaticPage: function () {
            return MissingStaticPage;
          },
          MiddlewareNotFoundError: function () {
            return MiddlewareNotFoundError;
          },
          stringifyError: function () {
            return stringifyError;
          },
        });
      let t = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function execOnce(e) {
        let r,
          t = !1;
        return function () {
          for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
          return t || ((t = !0), (r = e(...o))), r;
        };
      }
      let n = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        isAbsoluteUrl = (e) => n.test(e);
      function getLocationOrigin() {
        let { protocol: e, hostname: r, port: t } = window.location;
        return e + "//" + r + (t ? ":" + t : "");
      }
      function getURL() {
        let { href: e } = window.location,
          r = getLocationOrigin();
        return e.substring(r.length);
      }
      function getDisplayName(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function isResSent(e) {
        return e.finished || e.headersSent;
      }
      function normalizeRepeatedSlashes(e) {
        let r = e.split("?"),
          t = r[0];
        return (
          t.replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (r[1] ? "?" + r.slice(1).join("?") : "")
        );
      }
      async function loadGetInitialProps(e, r) {
        let t = r.res || (r.ctx && r.ctx.res);
        if (!e.getInitialProps)
          return r.ctx && r.Component
            ? { pageProps: await loadGetInitialProps(r.Component, r.ctx) }
            : {};
        let n = await e.getInitialProps(r);
        if (t && isResSent(t)) return n;
        if (!n) {
          let r =
            '"' +
            getDisplayName(e) +
            '.getInitialProps()" should resolve to an object. But found "' +
            n +
            '" instead.';
          throw Error(r);
        }
        return n;
      }
      let o = "undefined" != typeof performance,
        i =
          o &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e],
          );
      let DecodeError = class DecodeError extends Error {};
      let NormalizeError = class NormalizeError extends Error {};
      let PageNotFoundError = class PageNotFoundError extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      };
      let MissingStaticPage = class MissingStaticPage extends Error {
        constructor(e, r) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + r);
        }
      };
      let MiddlewareNotFoundError = class MiddlewareNotFoundError extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      };
      function stringifyError(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    167: (e, r) => {
      r._ = r._interop_require_default = function (e) {
        return e && e.__esModule ? e : { default: e };
      };
    },
  });
