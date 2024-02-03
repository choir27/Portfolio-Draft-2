(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [847],
  {
    6636: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 7438, 23)),
        Promise.resolve().then(n.t.bind(n, 1886, 23)),
        Promise.resolve().then(n.t.bind(n, 4490, 23)),
        Promise.resolve().then(n.bind(n, 7216)),
        Promise.resolve().then(n.bind(n, 1300)),
        Promise.resolve().then(n.bind(n, 8762)),
        Promise.resolve().then(n.bind(n, 9435)),
        Promise.resolve().then(n.bind(n, 7064)),
        Promise.resolve().then(n.bind(n, 4801)),
        Promise.resolve().then(n.bind(n, 2386)),
        Promise.resolve().then(n.bind(n, 1201)),
        Promise.resolve().then(n.bind(n, 7185)),
        Promise.resolve().then(n.bind(n, 8819));
    },
    7216: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Header;
          },
        });
      var i = n(7437);
      n(2265);
      var s = n(7438),
        l = n.n(s);
      function Header() {
        let e = new Date();
        return (0, i.jsxs)("header", {
          id: "header",
          className: ""
            .concat(l().flex, " ")
            .concat(l()["justify-between"], " ")
            .concat(l()["align-center"]),
          children: [
            (0, i.jsxs)("ul", {
              className: l().icons,
              children: [
                (0, i.jsx)("li", {
                  children: (0, i.jsx)("h1", { children: "Richard Choi" }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)("p", {
                    children: "NJ Frontend Software Engineer",
                  }),
                }),
                (0, i.jsx)("li", {
                  id: "copyright",
                  children: (0, i.jsxs)("small", {
                    children: [
                      "Copyright \xa9 ",
                      e.getFullYear(),
                      ". All rights are reserved",
                    ],
                  }),
                }),
              ],
            }),
            (0, i.jsxs)("section", {
              className: ""
                .concat(l().callToAction, " ")
                .concat(l().flex, " ")
                .concat(l()["flex-col"], " ")
                .concat(l()["justify-between"]),
              children: [
                (0, i.jsxs)("a", {
                  target: "_blank",
                  href: "https://github.com/choir27",
                  className: l().button,
                  children: [
                    "View My GitHub",
                    (0, i.jsx)("small", { className: "fa-brands fa-github" }),
                  ],
                }),
                (0, i.jsxs)("a", {
                  target: "_blank",
                  href: "https://www.linkedin.com/in/richard-choir/",
                  className: l().button,
                  children: [
                    "View My LinkedIn",
                    (0, i.jsx)("small", { className: "fa-brands fa-linkedin" }),
                  ],
                }),
                (0, i.jsxs)("a", {
                  target: "_blank",
                  href: "https://docs.google.com/document/d/1Gw7hqvLquVzKwg7fD3sfF1NGvoG0dFRzTI5rR-yEPkw/edit?usp=sharing",
                  className: l().button,
                  children: [
                    "View My Resume",
                    (0, i.jsx)("small", {
                      className: "fa-solid fa-file-lines",
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: l().imageContainer,
              children: (0, i.jsx)("img", {
                src: "/_next/static/media/profile.e79de8d2.jpg",
                alt: "professional profile picture of myself",
              }),
            }),
          ],
        });
      }
    },
    1300: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return Nav;
          },
        });
      var i,
        s = n(7437);
      let createStoreImpl = (e) => {
          let t;
          let n = new Set(),
            setState = (e, i) => {
              let s = "function" == typeof e ? e(t) : e;
              if (!Object.is(s, t)) {
                let e = t;
                (t = (null != i ? i : "object" != typeof s)
                  ? s
                  : Object.assign({}, t, s)),
                  n.forEach((n) => n(t, e));
              }
            },
            getState = () => t,
            i = {
              setState,
              getState,
              subscribe: (e) => (n.add(e), () => n.delete(e)),
              destroy: () => {
                console.warn(
                  "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.",
                ),
                  n.clear();
              },
            };
          return (t = e(setState, getState, i)), i;
        },
        createStore = (e) => (e ? createStoreImpl(e) : createStoreImpl);
      var l = n(2265),
        c = n(5401);
      let { useSyncExternalStoreWithSelector: u } = c,
        o = !1,
        createImpl = (e) => {
          "function" != typeof e &&
            console.warn(
              "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.",
            );
          let t = "function" == typeof e ? createStore(e) : e,
            useBoundStore = (e, n) =>
              (function (e, t = e.getState, n) {
                n &&
                  !o &&
                  (console.warn(
                    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937",
                  ),
                  (o = !0));
                let i = u(
                  e.subscribe,
                  e.getState,
                  e.getServerState || e.getState,
                  t,
                  n,
                );
                return (0, l.useDebugValue)(i), i;
              })(t, e, n);
          return Object.assign(useBoundStore, t), useBoundStore;
        },
        A = (i = (e) => ({ menu: !1, setMenu: (t) => e(() => ({ menu: t })) }))
          ? createImpl(i)
          : createImpl;
      var d = n(7438),
        f = n.n(d);
      function Nav() {
        let e = A((e) => e.menu),
          t = A((e) => e.setMenu);
        return (0, s.jsxs)("div", {
          id: "nav",
          className: f().nav,
          children: [
            (0, s.jsx)("i", {
              id: "menu",
              className: "".concat(
                e
                  ? "fa-solid fa-xmark ".concat(f().bars)
                  : "fa-solid fa-bars ".concat(f().bars),
              ),
              onClick: (n) => {
                e ? t(!1) : t(!0);
              },
            }),
            (0, s.jsxs)("nav", {
              className: e ? "menu" : "hidden",
              children: [
                (0, s.jsxs)("ul", {
                  children: [
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)("h2", { children: "Menu" }),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)("a", {
                        className: f().link,
                        href: "/",
                        children: "Home",
                      }),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)("a", {
                        className: f().link,
                        href: "/aboutMe",
                        children: "About Me",
                      }),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)("a", {
                        className: f().link,
                        href: "/allProjects",
                        children: "All Projects",
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)("ul", {
                  className: ""
                    .concat(f().flex, " ")
                    .concat(f()["justify-between"], " ")
                    .concat(f().social, " icons"),
                  children: [
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)("a", {
                        className: f().link,
                        target: "_blank",
                        href: "https://github.com/choir27",
                        children: (0, s.jsx)("small", {
                          className: "fa-brands fa-github",
                          children: (0, s.jsx)("span", {
                            className: "hidden",
                            children: "My Github",
                          }),
                        }),
                      }),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)("a", {
                        className: f().link,
                        target: "_blank",
                        href: "https://www.linkedin.com/in/richard-choir/",
                        children: (0, s.jsx)("small", {
                          className: "fa-brands fa-linkedin",
                          children: (0, s.jsx)("span", {
                            className: "hidden",
                            children: "My LinkedIn",
                          }),
                        }),
                      }),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)("a", {
                        className: f().link,
                        target: "_blank",
                        href: "https://docs.google.com/document/d/1Gw7hqvLquVzKwg7fD3sfF1NGvoG0dFRzTI5rR-yEPkw/edit?usp=sharing",
                        children: (0, s.jsx)("small", {
                          className: "fa-solid fa-file-lines",
                          children: (0, s.jsx)("span", {
                            className: "hidden",
                            children: "My Resume",
                          }),
                        }),
                      }),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)("a", {
                        className: f().link,
                        target: "_blank",
                        href: "https://twitter.com/choir241",
                        children: (0, s.jsx)("small", {
                          className: "fa-brands fa-twitter",
                          children: (0, s.jsx)("span", {
                            className: "hidden",
                            children: "Twitter",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    1886: function () {},
    4490: function () {},
    7438: function (e) {
      e.exports = {
        flex: "main_flex__DzVMV",
        "flex-wrap": "main_flex-wrap__SvCEg",
        "flex-col": "main_flex-col__Ozvnm",
        "justify-center": "main_justify-center__kb7Jf",
        "justify-between": "main_justify-between__boI9I",
        "justify-evenly": "main_justify-evenly__gWLR0",
        "align-center": "main_align-center__VeK_1",
        imageContainer: "main_imageContainer__CPWcp",
        callToAction: "main_callToAction__Rhs0N",
        icons: "main_icons__Ybb3Y",
        social: "main_social__VEj3Y",
        button: "main_button__4zvZW",
        icon: "main_icon__6imUc",
        fit: "main_fit__7fS4U",
        small: "main_small__DLtyZ",
        large: "main_large__5sAjY",
        link: "main_link__XN810",
        bars: "main_bars__fW7_o",
        nav: "main_nav__NZyIU",
      };
    },
    8762: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/documentation.1411791e.png",
          height: 1789,
          width: 1091,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAANlBMVEX////9/f38/Pz7+/v6+vr5+fn4+Pj39/j39/f39vf29vb19fb19fX09fXz8/Py8vPy8vLv7+960164AAAAL0lEQVR42hXEQQIAEAgEwLWKhPD/z2IOA561MyrxTP13IxOsqCR4cxNEDFeMosILFvAA/nMPUogAAAAASUVORK5CYII=",
          blurWidth: 5,
          blurHeight: 8,
        });
    },
    9435: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/documentation1.de171674.png",
          height: 1784,
          width: 1091,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAeUlEQVR42i3KTQrDIBiE4blH23V6GKHt1rUpSW5Q242eIp5Q0CwEFX9A6LfI5mUGHmilX88H55wxppTCum0ApulOXZYVhz+cc957aggB+24+Uiqt5fdnjME8vwFcrjeqEAIkrbWET59SijHmnGutYwzQKqW01uj33v9980wIGPDwyQAAAABJRU5ErkJggg==",
          blurWidth: 5,
          blurHeight: 8,
        });
    },
    7064: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/linguisticsJusticeLeague2.b41da061.png",
          height: 947,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAU0lEQVR42iWMSwqAMBBDe/9DirgQ6sJasPPrfOwghATyQso2TkSEiebm7qpqmV4OuZ7e797MVpkwsWnZuSIREzOLTF2+BJNKlaY5/j/iHQBIEfEBKfFdNi8jyzQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 4,
        });
    },
    4801: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/linguisticsJusticeLeague4.f7edced0.png",
          height: 947,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAW0lEQVR42i3JsRJAMBBF0fz/DynNqIyKDo3R0WBGJDb73kYKt7zHvf6S535iEBFASYJIqi5FL8G/kiz/qSLE6NRYFoFlaPu6mrsmmyngUMAM0HBs+zSe62xGkB8Ri1u1qLSJTAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 4,
        });
    },
    2386: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/linguisticsJusticeLeague5.ff4cb574.png",
          height: 1322,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAATlBMVEX////+/v79/f38/Pz9+/z9+/v7+/z7+/v6+vr7+Pb59vX09PXv8fHx8PDn6vHf4+7a2dziyrrdwLPPrZ3ArqGssrzMppOzjYGChZ94eoSSnOfCAAAANElEQVR42gWAhxGAIBAE9x7RV8xK6r9RhiSQFPBjT+bTwvp8L3OMbH8tmEToLSPA7+s0pAElXAF1OigwxwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 6,
        });
    },
    1201: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/linguisticsJusticeLeague6.7c5e726a.png",
          height: 1322,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAV1BMVEX////+/v79/f79/f38/Pz9+/z9+/v7+/z7+/v6+/v6+vr7+Pb49vX19fX09PXx8fHv8fHp7PLi5vDc3N/iyrrdwLLPrZ3ArqGssrvMppSzjoKDhp96fIYDRKfNAAAANUlEQVR42gWAhxGAIBAE9wRR35xJ/dfJsE4gyWP7sTnrR+bnexlCYPlzopPwtUQE2H2dDqkBLdoBv2wsZ6wAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 6,
        });
    },
    7185: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/linguisticsJusticeLeague7.3aeb3d52.png",
          height: 1289,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAUklEQVR42i3JSxJAMBAFQPc/pWKj2KVSmPeZkNDbnuZzc2bcIYmknZRb5rTycLqUUmsFEIEAW2sj7Ou6qZdJBdRj4SEbQA52gu4xa5eFgP/wFw+BPXUaq3x2xQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        });
    },
    8819: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "/_next/static/media/linguisticsJusticeLegue3.6f5ba6ad.png",
          height: 947,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAXUlEQVR42i2MOw6AIBBEuf+FLE2sjBUloTF2VGoUl132g5g4mWom7zl8TswXILJwr5qKSmV2tdwEGYms/ek/lOKIQLiqyupnPw5xmZoZizhm6mvHYU8phGOL9tn0BQ6iW5f9uSZNAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        });
    },
    622: function (e, t, n) {
      "use strict";
      /**
       * @license React
       * react-jsx-runtime.production.min.js
       *
       * Copyright (c) Meta Platforms, Inc. and affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var i = n(2265),
        s = Symbol.for("react.element"),
        l = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        c =
          i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        u = { key: !0, ref: !0, __self: !0, __source: !0 };
      function q(e, t, n) {
        var i,
          o = {},
          A = null,
          d = null;
        for (i in (void 0 !== n && (A = "" + n),
        void 0 !== t.key && (A = "" + t.key),
        void 0 !== t.ref && (d = t.ref),
        t))
          l.call(t, i) && !u.hasOwnProperty(i) && (o[i] = t[i]);
        if (e && e.defaultProps)
          for (i in (t = e.defaultProps)) void 0 === o[i] && (o[i] = t[i]);
        return {
          $$typeof: s,
          type: e,
          key: A,
          ref: d,
          props: o,
          _owner: c.current,
        };
      }
      (t.jsx = q), (t.jsxs = q);
    },
    7437: function (e, t, n) {
      "use strict";
      e.exports = n(622);
    },
    1853: function (e, t, n) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var i = n(2265),
        s =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        l = i.useState,
        c = i.useEffect,
        u = i.useLayoutEffect,
        o = i.useDebugValue;
      function r(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !s(e, n);
        } catch (e) {
          return !0;
        }
      }
      var A =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                i = l({ inst: { value: n, getSnapshot: t } }),
                s = i[0].inst,
                A = i[1];
              return (
                u(
                  function () {
                    (s.value = n), (s.getSnapshot = t), r(s) && A({ inst: s });
                  },
                  [e, n, t],
                ),
                c(
                  function () {
                    return (
                      r(s) && A({ inst: s }),
                      e(function () {
                        r(s) && A({ inst: s });
                      })
                    );
                  },
                  [e],
                ),
                o(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== i.useSyncExternalStore ? i.useSyncExternalStore : A;
    },
    8704: function (e, t, n) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var i = n(2265),
        s = n(6272),
        l =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        c = s.useSyncExternalStore,
        u = i.useRef,
        o = i.useEffect,
        A = i.useMemo,
        d = i.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, i, s) {
        var f = u(null);
        if (null === f.current) {
          var h = { hasValue: !1, value: null };
          f.current = h;
        } else h = f.current;
        var g = c(
          e,
          (f = A(
            function () {
              function a(t) {
                if (!u) {
                  if (
                    ((u = !0), (e = t), (t = i(t)), void 0 !== s && h.hasValue)
                  ) {
                    var n = h.value;
                    if (s(n, t)) return (c = n);
                  }
                  return (c = t);
                }
                if (((n = c), l(e, t))) return n;
                var o = i(t);
                return void 0 !== s && s(n, o) ? n : ((e = t), (c = o));
              }
              var e,
                c,
                u = !1,
                o = void 0 === n ? null : n;
              return [
                function () {
                  return a(t());
                },
                null === o
                  ? void 0
                  : function () {
                      return a(o());
                    },
              ];
            },
            [t, n, i, s],
          ))[0],
          f[1],
        );
        return (
          o(
            function () {
              (h.hasValue = !0), (h.value = g);
            },
            [g],
          ),
          d(g),
          g
        );
      };
    },
    6272: function (e, t, n) {
      "use strict";
      e.exports = n(1853);
    },
    5401: function (e, t, n) {
      "use strict";
      e.exports = n(8704);
    },
  },
  function (e) {
    e.O(0, [971, 472, 744], function () {
      return e((e.s = 6636));
    }),
      (_N_E = e.O());
  },
]);
