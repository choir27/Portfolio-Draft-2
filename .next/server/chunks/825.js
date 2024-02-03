"use strict";
(exports.id = 825),
  (exports.ids = [825]),
  (exports.modules = {
    784: (e, t, n) => {
      e.exports = n(316).vendored["react-ssr"].ReactJsxRuntime;
    },
    1668: (e, t, n) => {
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var u = n(9885),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        s = u.useState,
        i = u.useEffect,
        c = u.useLayoutEffect,
        l = u.useDebugValue;
      function r(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !o(e, n);
        } catch (e) {
          return !0;
        }
      }
      var f =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                u = s({ inst: { value: n, getSnapshot: t } }),
                o = u[0].inst,
                f = u[1];
              return (
                c(
                  function () {
                    (o.value = n), (o.getSnapshot = t), r(o) && f({ inst: o });
                  },
                  [e, n, t],
                ),
                i(
                  function () {
                    return (
                      r(o) && f({ inst: o }),
                      e(function () {
                        r(o) && f({ inst: o });
                      })
                    );
                  },
                  [e],
                ),
                l(n),
                n
              );
            };
      t.useSyncExternalStore =
        void 0 !== u.useSyncExternalStore ? u.useSyncExternalStore : f;
    },
    5074: (e, t, n) => {
      /**
       * @license React
       * use-sync-external-store-shim/with-selector.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var u = n(9885),
        o = n(1928),
        s =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        i = o.useSyncExternalStore,
        c = u.useRef,
        l = u.useEffect,
        f = u.useMemo,
        d = u.useDebugValue;
      t.useSyncExternalStoreWithSelector = function (e, t, n, u, o) {
        var S = c(null);
        if (null === S.current) {
          var v = { hasValue: !1, value: null };
          S.current = v;
        } else v = S.current;
        var p = i(
          e,
          (S = f(
            function () {
              function a(t) {
                if (!c) {
                  if (
                    ((c = !0), (e = t), (t = u(t)), void 0 !== o && v.hasValue)
                  ) {
                    var n = v.value;
                    if (o(n, t)) return (i = n);
                  }
                  return (i = t);
                }
                if (((n = i), s(e, t))) return n;
                var l = u(t);
                return void 0 !== o && o(n, l) ? n : ((e = t), (i = l));
              }
              var e,
                i,
                c = !1,
                l = void 0 === n ? null : n;
              return [
                function () {
                  return a(t());
                },
                null === l
                  ? void 0
                  : function () {
                      return a(l());
                    },
              ];
            },
            [t, n, u, o],
          ))[0],
          S[1],
        );
        return (
          l(
            function () {
              (v.hasValue = !0), (v.value = p);
            },
            [p],
          ),
          d(p),
          p
        );
      };
    },
    1928: (e, t, n) => {
      e.exports = n(1668);
    },
    6122: (e, t, n) => {
      e.exports = n(5074);
    },
    9715: (e, t, n) => {
      n.d(t, { Ue: () => create });
      let createStoreImpl = (e) => {
          let t;
          let n = new Set(),
            setState = (e, u) => {
              let o = "function" == typeof e ? e(t) : e;
              if (!Object.is(o, t)) {
                let e = t;
                (t = (null != u ? u : "object" != typeof o)
                  ? o
                  : Object.assign({}, t, o)),
                  n.forEach((n) => n(t, e));
              }
            },
            getState = () => t,
            u = {
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
          return (t = e(setState, getState, u)), u;
        },
        createStore = (e) => (e ? createStoreImpl(e) : createStoreImpl);
      var u = n(9885),
        o = n(6122);
      let { useSyncExternalStoreWithSelector: s } = o,
        i = !1,
        createImpl = (e) => {
          "function" != typeof e &&
            console.warn(
              "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.",
            );
          let t = "function" == typeof e ? createStore(e) : e,
            useBoundStore = (e, n) =>
              (function (e, t = e.getState, n) {
                n &&
                  !i &&
                  (console.warn(
                    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937",
                  ),
                  (i = !0));
                let o = s(
                  e.subscribe,
                  e.getState,
                  e.getServerState || e.getState,
                  t,
                  n,
                );
                return (0, u.useDebugValue)(o), o;
              })(t, e, n);
          return Object.assign(useBoundStore, t), useBoundStore;
        },
        create = (e) => (e ? createImpl(e) : createImpl);
    },
  });
