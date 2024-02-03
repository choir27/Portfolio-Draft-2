"use strict";
(exports.id = 2),
  (exports.ids = [2]),
  (exports.modules = {
    1323: (e, t) => {
      Object.defineProperty(t, "l", {
        enumerable: !0,
        get: function () {
          return function hoist(e, t) {
            return t in e
              ? e[t]
              : "then" in e && "function" == typeof e.then
                ? e.then((e) => hoist(e, t))
                : "function" == typeof e && "default" === t
                  ? e
                  : void 0;
          };
        },
      });
    },
    2534: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return Error;
          },
        });
      let r = n(167),
        o = r._(n(6689)),
        l = r._(n(6561)),
        a = {
          400: "Bad Request",
          404: "This page could not be found",
          405: "Method Not Allowed",
          500: "Internal Server Error",
        };
      function _getInitialProps(e) {
        let { res: t, err: n } = e,
          r = t && t.statusCode ? t.statusCode : n ? n.statusCode : 404;
        return { statusCode: r };
      }
      let i = {
        error: {
          fontFamily:
            'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
          height: "100vh",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        },
        desc: { lineHeight: "48px" },
        h1: {
          display: "inline-block",
          margin: "0 20px 0 0",
          paddingRight: 23,
          fontSize: 24,
          fontWeight: 500,
          verticalAlign: "top",
        },
        h2: { fontSize: 14, fontWeight: 400, lineHeight: "28px" },
        wrap: { display: "inline-block" },
      };
      let Error = class Error extends o.default.Component {
        render() {
          let { statusCode: e, withDarkMode: t = !0 } = this.props,
            n = this.props.title || a[e] || "An unexpected error has occurred";
          return o.default.createElement(
            "div",
            { style: i.error },
            o.default.createElement(
              l.default,
              null,
              o.default.createElement(
                "title",
                null,
                e
                  ? e + ": " + n
                  : "Application error: a client-side exception has occurred",
              ),
            ),
            o.default.createElement(
              "div",
              { style: i.desc },
              o.default.createElement("style", {
                dangerouslySetInnerHTML: {
                  __html:
                    "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" +
                    (t
                      ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"
                      : ""),
                },
              }),
              e
                ? o.default.createElement(
                    "h1",
                    { className: "next-error-h1", style: i.h1 },
                    e,
                  )
                : null,
              o.default.createElement(
                "div",
                { style: i.wrap },
                o.default.createElement(
                  "h2",
                  { style: i.h2 },
                  this.props.title || e
                    ? n
                    : o.default.createElement(
                        o.default.Fragment,
                        null,
                        "Application error: a client-side exception has occurred (see the browser console for more information)",
                      ),
                  ".",
                ),
              ),
            ),
          );
        }
      };
      (Error.displayName = "ErrorPage"),
        (Error.getInitialProps = _getInitialProps),
        (Error.origGetInitialProps = _getInitialProps),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    8801: (e, t) => {
      function isInAmpMode(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return isInAmpMode;
          },
        });
    },
    6561: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          defaultHead: function () {
            return defaultHead;
          },
          default: function () {
            return _default;
          },
        });
      let r = n(167),
        o = n(8760),
        l = o._(n(6689)),
        a = r._(n(9737)),
        i = n(8039),
        d = n(1988),
        u = n(8801);
      function defaultHead(e) {
        void 0 === e && (e = !1);
        let t = [l.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              l.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              }),
            ),
          t
        );
      }
      function onlyReactElement(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === l.default.Fragment
            ? e.concat(
                l.default.Children.toArray(t.props.children).reduce(
                  (e, t) =>
                    "string" == typeof t || "number" == typeof t
                      ? e
                      : e.concat(t),
                  [],
                ),
              )
            : e.concat(t);
      }
      n(8565);
      let f = ["name", "httpEquiv", "charSet", "itemProp"];
      function reduceComponents(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(onlyReactElement, [])
          .reverse()
          .concat(defaultHead(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (o) => {
                let l = !0,
                  a = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (l = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (l = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = f.length; e < t; e++) {
                      let t = f[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (l = !1) : n.add(t);
                        else {
                          let e = o.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !a) && n.has(e)
                            ? (l = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return l;
              };
            })(),
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                l.default.cloneElement(e, t)
              );
            }
            return l.default.cloneElement(e, { key: r });
          });
      }
      let _default = function (e) {
        let { children: t } = e,
          n = (0, l.useContext)(i.AmpStateContext),
          r = (0, l.useContext)(d.HeadManagerContext);
        return l.default.createElement(
          a.default,
          {
            reduceComponentsToState: reduceComponents,
            headManager: r,
            inAmpMode: (0, u.isInAmpMode)(n),
          },
          t,
        );
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9737: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return SideEffect;
          },
        });
      let r = n(6689),
        useClientOnlyLayoutEffect = () => {},
        useClientOnlyEffect = () => {};
      function SideEffect(e) {
        var t;
        let { headManager: n, reduceComponentsToState: o } = e;
        function emitChange() {
          if (n && n.mountedInstances) {
            let t = r.Children.toArray(
              Array.from(n.mountedInstances).filter(Boolean),
            );
            n.updateHead(o(t, e));
          }
        }
        return (
          null == n || null == (t = n.mountedInstances) || t.add(e.children),
          emitChange(),
          useClientOnlyLayoutEffect(() => {
            var t;
            return (
              null == n ||
                null == (t = n.mountedInstances) ||
                t.add(e.children),
              () => {
                var t;
                null == n ||
                  null == (t = n.mountedInstances) ||
                  t.delete(e.children);
              }
            );
          }),
          useClientOnlyLayoutEffect(
            () => (
              n && (n._pendingUpdate = emitChange),
              () => {
                n && (n._pendingUpdate = emitChange);
              }
            ),
          ),
          useClientOnlyEffect(
            () => (
              n &&
                n._pendingUpdate &&
                (n._pendingUpdate(), (n._pendingUpdate = null)),
              () => {
                n &&
                  n._pendingUpdate &&
                  (n._pendingUpdate(), (n._pendingUpdate = null));
              }
            ),
          ),
          null
        );
      }
    },
    8565: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "warnOnce", {
          enumerable: !0,
          get: function () {
            return warnOnce;
          },
        });
      let warnOnce = (e) => {};
    },
    5244: (e, t) => {
      var n;
      Object.defineProperty(t, "x", {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
        (function (e) {
          (e.PAGES = "PAGES"),
            (e.PAGES_API = "PAGES_API"),
            (e.APP_PAGE = "APP_PAGE"),
            (e.APP_ROUTE = "APP_ROUTE");
        })(n || (n = {}));
    },
    8039: (e, t, n) => {
      e.exports = n(7093).vendored.contexts.AmpContext;
    },
    1988: (e, t, n) => {
      e.exports = n(7093).vendored.contexts.HeadManagerContext;
    },
    8760: (e, t) => {
      function _getRequireWildcardCache(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (_getRequireWildcardCache = function (e) {
          return e ? n : t;
        })(e);
      }
      t._ = t._interop_require_wildcard = function (e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = _getRequireWildcardCache(t);
        if (n && n.has(e)) return n.get(e);
        var r = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var l in e)
          if ("default" !== l && Object.prototype.hasOwnProperty.call(e, l)) {
            var a = o ? Object.getOwnPropertyDescriptor(e, l) : null;
            a && (a.get || a.set)
              ? Object.defineProperty(r, l, a)
              : (r[l] = e[l]);
          }
        return (r.default = e), n && n.set(e, r), r;
      };
    },
  });
