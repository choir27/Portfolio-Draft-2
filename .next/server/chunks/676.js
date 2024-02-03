"use strict";
(exports.id = 676),
  (exports.ids = [676]),
  (exports.modules = {
    8676: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          Head: function () {
            return Head;
          },
          NextScript: function () {
            return NextScript;
          },
          Html: function () {
            return Html;
          },
          Main: function () {
            return Main;
          },
          default: function () {
            return Document;
          },
        });
      let r = _interop_require_default(n(6689)),
        i = n(4191),
        o = n(5778),
        l = n(9630),
        s = _interop_require_default(n(676)),
        a = n(3112);
      function _interop_require_default(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let u = new Set();
      function getDocumentFiles(e, t, n) {
        let r = (0, o.getPageFiles)(e, "/_app"),
          i = n ? [] : (0, o.getPageFiles)(e, t);
        return {
          sharedFiles: r,
          pageFiles: i,
          allFiles: [...new Set([...r, ...i])],
        };
      }
      function getPolyfillScripts(e, t) {
        let {
          assetPrefix: n,
          buildManifest: i,
          assetQueryString: o,
          disableOptimizedLoading: l,
          crossOrigin: s,
        } = e;
        return i.polyfillFiles
          .filter((e) => e.endsWith(".js") && !e.endsWith(".module.js"))
          .map((e) =>
            r.default.createElement("script", {
              key: e,
              defer: !l,
              nonce: t.nonce,
              crossOrigin: t.crossOrigin || s,
              noModule: !0,
              src: `${n}/_next/${e}${o}`,
            }),
          );
      }
      function AmpStyles({ styles: e }) {
        if (!e) return null;
        let t = Array.isArray(e) ? e : [];
        if (e.props && Array.isArray(e.props.children)) {
          let hasStyles = (e) => {
            var t, n;
            return null == e
              ? void 0
              : null == (n = e.props)
                ? void 0
                : null == (t = n.dangerouslySetInnerHTML)
                  ? void 0
                  : t.__html;
          };
          e.props.children.forEach((e) => {
            Array.isArray(e)
              ? e.forEach((e) => hasStyles(e) && t.push(e))
              : hasStyles(e) && t.push(e);
          });
        }
        return r.default.createElement("style", {
          "amp-custom": "",
          dangerouslySetInnerHTML: {
            __html: t
              .map((e) => e.props.dangerouslySetInnerHTML.__html)
              .join("")
              .replace(/\/\*# sourceMappingURL=.*\*\//g, "")
              .replace(/\/\*@ sourceURL=.*?\*\//g, ""),
          },
        });
      }
      function getDynamicChunks(e, t, n) {
        let {
          dynamicImports: i,
          assetPrefix: o,
          isDevelopment: l,
          assetQueryString: s,
          disableOptimizedLoading: a,
          crossOrigin: u,
        } = e;
        return i.map((e) =>
          !e.endsWith(".js") || n.allFiles.includes(e)
            ? null
            : r.default.createElement("script", {
                async: !l && a,
                defer: !a,
                key: e,
                src: `${o}/_next/${encodeURI(e)}${s}`,
                nonce: t.nonce,
                crossOrigin: t.crossOrigin || u,
              }),
        );
      }
      function getScripts(e, t, n) {
        var i;
        let {
            assetPrefix: o,
            buildManifest: l,
            isDevelopment: s,
            assetQueryString: a,
            disableOptimizedLoading: u,
            crossOrigin: c,
          } = e,
          d = n.allFiles.filter((e) => e.endsWith(".js")),
          p =
            null == (i = l.lowPriorityFiles)
              ? void 0
              : i.filter((e) => e.endsWith(".js"));
        return [...d, ...p].map((e) =>
          r.default.createElement("script", {
            key: e,
            src: `${o}/_next/${encodeURI(e)}${a}`,
            nonce: t.nonce,
            async: !s && u,
            defer: !u,
            crossOrigin: t.crossOrigin || c,
          }),
        );
      }
      function getPreNextScripts(e, t) {
        let { scriptLoader: n, disableOptimizedLoading: i, crossOrigin: o } = e,
          l = (function (e, t) {
            let {
              assetPrefix: n,
              scriptLoader: i,
              crossOrigin: o,
              nextScriptWorkers: l,
            } = e;
            if (!l) return null;
            try {
              let {
                  partytownSnippet: e,
                } = require("@builder.io/partytown/integration"),
                l = Array.isArray(t.children) ? t.children : [t.children],
                s = l.find((e) => {
                  var t, n;
                  return (
                    !!e &&
                    !!e.props &&
                    (null == e
                      ? void 0
                      : null == (n = e.props)
                        ? void 0
                        : null == (t = n.dangerouslySetInnerHTML)
                          ? void 0
                          : t.__html.length) &&
                    "data-partytown-config" in e.props
                  );
                });
              return r.default.createElement(
                r.default.Fragment,
                null,
                !s &&
                  r.default.createElement("script", {
                    "data-partytown-config": "",
                    dangerouslySetInnerHTML: {
                      __html: `
            partytown = {
              lib: "${n}/_next/static/~partytown/"
            };
          `,
                    },
                  }),
                r.default.createElement("script", {
                  "data-partytown": "",
                  dangerouslySetInnerHTML: { __html: e() },
                }),
                (i.worker || []).map((e, n) => {
                  let {
                      strategy: i,
                      src: l,
                      children: s,
                      dangerouslySetInnerHTML: a,
                      ...u
                    } = e,
                    c = {};
                  if (l) c.src = l;
                  else if (a && a.__html)
                    c.dangerouslySetInnerHTML = { __html: a.__html };
                  else if (s)
                    c.dangerouslySetInnerHTML = {
                      __html:
                        "string" == typeof s
                          ? s
                          : Array.isArray(s)
                            ? s.join("")
                            : "",
                    };
                  else
                    throw Error(
                      "Invalid usage of next/script. Did you forget to include a src attribute or an inline script? https://nextjs.org/docs/messages/invalid-script",
                    );
                  return r.default.createElement("script", {
                    ...c,
                    ...u,
                    type: "text/partytown",
                    key: l || n,
                    nonce: t.nonce,
                    "data-nscript": "worker",
                    crossOrigin: t.crossOrigin || o,
                  });
                }),
              );
            } catch (e) {
              return (
                (0, s.default)(e) &&
                  "MODULE_NOT_FOUND" !== e.code &&
                  console.warn(`Warning: ${e.message}`),
                null
              );
            }
          })(e, t),
          a = (n.beforeInteractive || [])
            .filter((e) => e.src)
            .map((e, n) => {
              let { strategy: l, ...s } = e;
              return r.default.createElement("script", {
                ...s,
                key: s.src || n,
                defer: s.defer ?? !i,
                nonce: t.nonce,
                "data-nscript": "beforeInteractive",
                crossOrigin: t.crossOrigin || o,
              });
            });
        return r.default.createElement(r.default.Fragment, null, l, a);
      }
      let Head = class Head extends r.default.Component {
        static #e = (this.contextType = a.HtmlContext);
        getCssLinks(e) {
          let {
              assetPrefix: t,
              assetQueryString: n,
              dynamicImports: i,
              crossOrigin: o,
              optimizeCss: l,
              optimizeFonts: s,
            } = this.context,
            a = e.allFiles.filter((e) => e.endsWith(".css")),
            u = new Set(e.sharedFiles),
            c = new Set([]),
            d = Array.from(new Set(i.filter((e) => e.endsWith(".css"))));
          if (d.length) {
            let e = new Set(a);
            (d = d.filter((t) => !(e.has(t) || u.has(t)))),
              (c = new Set(d)),
              a.push(...d);
          }
          let p = [];
          return (
            a.forEach((e) => {
              let i = u.has(e);
              l ||
                p.push(
                  r.default.createElement("link", {
                    key: `${e}-preload`,
                    nonce: this.props.nonce,
                    rel: "preload",
                    href: `${t}/_next/${encodeURI(e)}${n}`,
                    as: "style",
                    crossOrigin: this.props.crossOrigin || o,
                  }),
                );
              let s = c.has(e);
              p.push(
                r.default.createElement("link", {
                  key: e,
                  nonce: this.props.nonce,
                  rel: "stylesheet",
                  href: `${t}/_next/${encodeURI(e)}${n}`,
                  crossOrigin: this.props.crossOrigin || o,
                  "data-n-g": s ? void 0 : i ? "" : void 0,
                  "data-n-p": s ? void 0 : i ? void 0 : "",
                }),
              );
            }),
            s && (p = this.makeStylesheetInert(p)),
            0 === p.length ? null : p
          );
        }
        getPreloadDynamicChunks() {
          let {
            dynamicImports: e,
            assetPrefix: t,
            assetQueryString: n,
            crossOrigin: i,
          } = this.context;
          return e
            .map((e) =>
              e.endsWith(".js")
                ? r.default.createElement("link", {
                    rel: "preload",
                    key: e,
                    href: `${t}/_next/${encodeURI(e)}${n}`,
                    as: "script",
                    nonce: this.props.nonce,
                    crossOrigin: this.props.crossOrigin || i,
                  })
                : null,
            )
            .filter(Boolean);
        }
        getPreloadMainLinks(e) {
          let {
              assetPrefix: t,
              assetQueryString: n,
              scriptLoader: i,
              crossOrigin: o,
            } = this.context,
            l = e.allFiles.filter((e) => e.endsWith(".js"));
          return [
            ...(i.beforeInteractive || []).map((e) =>
              r.default.createElement("link", {
                key: e.src,
                nonce: this.props.nonce,
                rel: "preload",
                href: e.src,
                as: "script",
                crossOrigin: this.props.crossOrigin || o,
              }),
            ),
            ...l.map((e) =>
              r.default.createElement("link", {
                key: e,
                nonce: this.props.nonce,
                rel: "preload",
                href: `${t}/_next/${encodeURI(e)}${n}`,
                as: "script",
                crossOrigin: this.props.crossOrigin || o,
              }),
            ),
          ];
        }
        getBeforeInteractiveInlineScripts() {
          let { scriptLoader: e } = this.context,
            { nonce: t, crossOrigin: n } = this.props;
          return (e.beforeInteractive || [])
            .filter((e) => !e.src && (e.dangerouslySetInnerHTML || e.children))
            .map((e, i) => {
              let {
                  strategy: o,
                  children: l,
                  dangerouslySetInnerHTML: s,
                  src: a,
                  ...u
                } = e,
                c = "";
              return (
                s && s.__html
                  ? (c = s.__html)
                  : l &&
                    (c =
                      "string" == typeof l
                        ? l
                        : Array.isArray(l)
                          ? l.join("")
                          : ""),
                r.default.createElement("script", {
                  ...u,
                  dangerouslySetInnerHTML: { __html: c },
                  key: u.id || i,
                  nonce: t,
                  "data-nscript": "beforeInteractive",
                  crossOrigin: n || void 0,
                })
              );
            });
        }
        getDynamicChunks(e) {
          return getDynamicChunks(this.context, this.props, e);
        }
        getPreNextScripts() {
          return getPreNextScripts(this.context, this.props);
        }
        getScripts(e) {
          return getScripts(this.context, this.props, e);
        }
        getPolyfillScripts() {
          return getPolyfillScripts(this.context, this.props);
        }
        makeStylesheetInert(e) {
          return r.default.Children.map(e, (e) => {
            var t, n;
            if (
              (null == e ? void 0 : e.type) === "link" &&
              (null == e ? void 0 : null == (t = e.props) ? void 0 : t.href) &&
              i.OPTIMIZED_FONT_PROVIDERS.some(({ url: t }) => {
                var n, r;
                return null == e
                  ? void 0
                  : null == (r = e.props)
                    ? void 0
                    : null == (n = r.href)
                      ? void 0
                      : n.startsWith(t);
              })
            ) {
              let t = {
                ...(e.props || {}),
                "data-href": e.props.href,
                href: void 0,
              };
              return r.default.cloneElement(e, t);
            }
            if (
              null == e ? void 0 : null == (n = e.props) ? void 0 : n.children
            ) {
              let t = {
                ...(e.props || {}),
                children: this.makeStylesheetInert(e.props.children),
              };
              return r.default.cloneElement(e, t);
            }
            return e;
          }).filter(Boolean);
        }
        render() {
          let {
              styles: e,
              ampPath: t,
              inAmpMode: i,
              hybridAmp: o,
              canonicalBase: l,
              __NEXT_DATA__: s,
              dangerousAsPath: a,
              headTags: u,
              unstable_runtimeJS: c,
              unstable_JsPreload: d,
              disableOptimizedLoading: p,
              optimizeCss: f,
              optimizeFonts: h,
              assetPrefix: m,
              nextFontManifest: _,
            } = this.context,
            g = !1 === c,
            E = !1 === d || !p;
          this.context.docComponentsRendered.Head = !0;
          let { head: S } = this.context,
            y = [],
            I = [];
          S &&
            (S.forEach((e) => {
              let t;
              this.context.strictNextHead &&
                (t = r.default.createElement("meta", {
                  name: "next-head",
                  content: "1",
                })),
                e &&
                "link" === e.type &&
                "preload" === e.props.rel &&
                "style" === e.props.as
                  ? (t && y.push(t), y.push(e))
                  : e &&
                    (t && ("meta" !== e.type || !e.props.charSet) && I.push(t),
                    I.push(e));
            }),
            (S = y.concat(I)));
          let T = r.default.Children.toArray(this.props.children).filter(
            Boolean,
          );
          h && !i && (T = this.makeStylesheetInert(T));
          let P = !1,
            N = !1;
          S = r.default.Children.map(S || [], (e) => {
            if (!e) return e;
            let { type: t, props: n } = e;
            if (i) {
              let r = "";
              if (
                ("meta" === t && "viewport" === n.name
                  ? (r = 'name="viewport"')
                  : "link" === t && "canonical" === n.rel
                    ? (N = !0)
                    : "script" === t &&
                      ((n.src && -1 > n.src.indexOf("ampproject")) ||
                        (n.dangerouslySetInnerHTML &&
                          (!n.type || "text/javascript" === n.type))) &&
                      ((r = "<script"),
                      Object.keys(n).forEach((e) => {
                        r += ` ${e}="${n[e]}"`;
                      }),
                      (r += "/>")),
                r)
              )
                return (
                  console.warn(
                    `Found conflicting amp tag "${e.type}" with conflicting prop ${r} in ${s.page}. https://nextjs.org/docs/messages/conflicting-amp-tag`,
                  ),
                  null
                );
            } else "link" === t && "amphtml" === n.rel && (P = !0);
            return e;
          });
          let O = getDocumentFiles(
              this.context.buildManifest,
              this.context.__NEXT_DATA__.page,
              i,
            ),
            b = (function (e, t, n = "") {
              if (!e) return { preconnect: null, preload: null };
              let i = e.pages["/_app"],
                o = e.pages[t],
                l = [...(i ?? []), ...(o ?? [])],
                s = !!(0 === l.length && (i || o));
              return {
                preconnect: s
                  ? r.default.createElement("link", {
                      "data-next-font": e.pagesUsingSizeAdjust
                        ? "size-adjust"
                        : "",
                      rel: "preconnect",
                      href: "/",
                      crossOrigin: "anonymous",
                    })
                  : null,
                preload: l
                  ? l.map((e) => {
                      let t = /\.(woff|woff2|eot|ttf|otf)$/.exec(e)[1];
                      return r.default.createElement("link", {
                        key: e,
                        rel: "preload",
                        href: `${n}/_next/${encodeURI(e)}`,
                        as: "font",
                        type: `font/${t}`,
                        crossOrigin: "anonymous",
                        "data-next-font": e.includes("-s") ? "size-adjust" : "",
                      });
                    })
                  : null,
              };
            })(_, a, m);
          return r.default.createElement(
            "head",
            (function (e) {
              let { crossOrigin: t, nonce: n, ...r } = e;
              return r;
            })(this.props),
            this.context.isDevelopment &&
              r.default.createElement(
                r.default.Fragment,
                null,
                r.default.createElement("style", {
                  "data-next-hide-fouc": !0,
                  "data-ampdevmode": i ? "true" : void 0,
                  dangerouslySetInnerHTML: { __html: "body{display:none}" },
                }),
                r.default.createElement(
                  "noscript",
                  {
                    "data-next-hide-fouc": !0,
                    "data-ampdevmode": i ? "true" : void 0,
                  },
                  r.default.createElement("style", {
                    dangerouslySetInnerHTML: { __html: "body{display:block}" },
                  }),
                ),
              ),
            S,
            this.context.strictNextHead
              ? null
              : r.default.createElement("meta", {
                  name: "next-head-count",
                  content: r.default.Children.count(S || []).toString(),
                }),
            T,
            h &&
              r.default.createElement("meta", { name: "next-font-preconnect" }),
            b.preconnect,
            b.preload,
            i &&
              r.default.createElement(
                r.default.Fragment,
                null,
                r.default.createElement("meta", {
                  name: "viewport",
                  content: "width=device-width,minimum-scale=1,initial-scale=1",
                }),
                !N &&
                  r.default.createElement("link", {
                    rel: "canonical",
                    href: l + n(733).cleanAmpPath(a),
                  }),
                r.default.createElement("link", {
                  rel: "preload",
                  as: "script",
                  href: "https://cdn.ampproject.org/v0.js",
                }),
                r.default.createElement(AmpStyles, { styles: e }),
                r.default.createElement("style", {
                  "amp-boilerplate": "",
                  dangerouslySetInnerHTML: {
                    __html:
                      "body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}",
                  },
                }),
                r.default.createElement(
                  "noscript",
                  null,
                  r.default.createElement("style", {
                    "amp-boilerplate": "",
                    dangerouslySetInnerHTML: {
                      __html:
                        "body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}",
                    },
                  }),
                ),
                r.default.createElement("script", {
                  async: !0,
                  src: "https://cdn.ampproject.org/v0.js",
                }),
              ),
            !i &&
              r.default.createElement(
                r.default.Fragment,
                null,
                !P &&
                  o &&
                  r.default.createElement("link", {
                    rel: "amphtml",
                    href: l + (t || `${a}${a.includes("?") ? "&" : "?"}amp=1`),
                  }),
                this.getBeforeInteractiveInlineScripts(),
                !f && this.getCssLinks(O),
                !f &&
                  r.default.createElement("noscript", {
                    "data-n-css": this.props.nonce ?? "",
                  }),
                !g && !E && this.getPreloadDynamicChunks(),
                !g && !E && this.getPreloadMainLinks(O),
                !p && !g && this.getPolyfillScripts(),
                !p && !g && this.getPreNextScripts(),
                !p && !g && this.getDynamicChunks(O),
                !p && !g && this.getScripts(O),
                f && this.getCssLinks(O),
                f &&
                  r.default.createElement("noscript", {
                    "data-n-css": this.props.nonce ?? "",
                  }),
                this.context.isDevelopment &&
                  r.default.createElement("noscript", {
                    id: "__next_css__DO_NOT_USE__",
                  }),
                e || null,
              ),
            r.default.createElement(r.default.Fragment, {}, ...(u || [])),
          );
        }
      };
      let NextScript = class NextScript extends r.default.Component {
        static #e = (this.contextType = a.HtmlContext);
        getDynamicChunks(e) {
          return getDynamicChunks(this.context, this.props, e);
        }
        getPreNextScripts() {
          return getPreNextScripts(this.context, this.props);
        }
        getScripts(e) {
          return getScripts(this.context, this.props, e);
        }
        getPolyfillScripts() {
          return getPolyfillScripts(this.context, this.props);
        }
        static getInlineScriptSource(e) {
          let { __NEXT_DATA__: t, largePageDataBytes: r } = e;
          try {
            let i = JSON.stringify(t);
            if (u.has(t.page)) return (0, l.htmlEscapeJsonString)(i);
            let o = Buffer.from(i).byteLength,
              s = n(5955).Z;
            return (
              r &&
                o > r &&
                (u.add(t.page),
                console.warn(`Warning: data for page "${t.page}"${t.page === e.dangerousAsPath ? "" : ` (path "${e.dangerousAsPath}")`} is ${s(o)} which exceeds the threshold of ${s(r)}, this amount of data can reduce performance.
See more info here: https://nextjs.org/docs/messages/large-page-data`)),
              (0, l.htmlEscapeJsonString)(i)
            );
          } catch (e) {
            if (
              (0, s.default)(e) &&
              -1 !== e.message.indexOf("circular structure")
            )
              throw Error(
                `Circular structure in "getInitialProps" result of page "${t.page}". https://nextjs.org/docs/messages/circular-structure`,
              );
            throw e;
          }
        }
        render() {
          let {
              assetPrefix: e,
              inAmpMode: t,
              buildManifest: n,
              unstable_runtimeJS: i,
              docComponentsRendered: o,
              assetQueryString: l,
              disableOptimizedLoading: s,
              crossOrigin: a,
            } = this.context,
            u = !1 === i;
          if (((o.NextScript = !0), t)) return null;
          let c = getDocumentFiles(
            this.context.buildManifest,
            this.context.__NEXT_DATA__.page,
            t,
          );
          return r.default.createElement(
            r.default.Fragment,
            null,
            !u && n.devFiles
              ? n.devFiles.map((t) =>
                  r.default.createElement("script", {
                    key: t,
                    src: `${e}/_next/${encodeURI(t)}${l}`,
                    nonce: this.props.nonce,
                    crossOrigin: this.props.crossOrigin || a,
                  }),
                )
              : null,
            u
              ? null
              : r.default.createElement("script", {
                  id: "__NEXT_DATA__",
                  type: "application/json",
                  nonce: this.props.nonce,
                  crossOrigin: this.props.crossOrigin || a,
                  dangerouslySetInnerHTML: {
                    __html: NextScript.getInlineScriptSource(this.context),
                  },
                }),
            s && !u && this.getPolyfillScripts(),
            s && !u && this.getPreNextScripts(),
            s && !u && this.getDynamicChunks(c),
            s && !u && this.getScripts(c),
          );
        }
      };
      function Html(e) {
        let {
          inAmpMode: t,
          docComponentsRendered: n,
          locale: i,
          scriptLoader: o,
          __NEXT_DATA__: l,
        } = (0, a.useHtmlContext)();
        return (
          (n.Html = !0),
          (function (e, t, n) {
            var i, o, l, s;
            if (!n.children) return;
            let a = [],
              u = Array.isArray(n.children) ? n.children : [n.children],
              c =
                null == (o = u.find((e) => e.type === Head))
                  ? void 0
                  : null == (i = o.props)
                    ? void 0
                    : i.children,
              d =
                null == (s = u.find((e) => "body" === e.type))
                  ? void 0
                  : null == (l = s.props)
                    ? void 0
                    : l.children,
              p = [
                ...(Array.isArray(c) ? c : [c]),
                ...(Array.isArray(d) ? d : [d]),
              ];
            r.default.Children.forEach(p, (t) => {
              var n;
              if (t && (null == (n = t.type) ? void 0 : n.__nextScript)) {
                if ("beforeInteractive" === t.props.strategy) {
                  e.beforeInteractive = (e.beforeInteractive || []).concat([
                    { ...t.props },
                  ]);
                  return;
                }
                if (
                  ["lazyOnload", "afterInteractive", "worker"].includes(
                    t.props.strategy,
                  )
                ) {
                  a.push(t.props);
                  return;
                }
              }
            }),
              (t.scriptLoader = a);
          })(o, l, e),
          r.default.createElement("html", {
            ...e,
            lang: e.lang || i || void 0,
            amp: t ? "" : void 0,
            "data-ampdevmode": void 0,
          })
        );
      }
      function Main() {
        let { docComponentsRendered: e } = (0, a.useHtmlContext)();
        return (
          (e.Main = !0),
          r.default.createElement("next-js-internal-body-render-target", null)
        );
      }
      let Document = class Document extends r.default.Component {
        static getInitialProps(e) {
          return e.defaultGetInitialProps(e);
        }
        render() {
          return r.default.createElement(
            Html,
            null,
            r.default.createElement(Head, null),
            r.default.createElement(
              "body",
              null,
              r.default.createElement(Main, null),
              r.default.createElement(NextScript, null),
            ),
          );
        }
      };
      Document[i.NEXT_BUILTIN_DOCUMENT] = function () {
        return r.default.createElement(
          Html,
          null,
          r.default.createElement(Head, null),
          r.default.createElement(
            "body",
            null,
            r.default.createElement(Main, null),
            r.default.createElement(NextScript, null),
          ),
        );
      };
    },
    4191: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          MODERN_BROWSERSLIST_TARGET: function () {
            return i.default;
          },
          COMPILER_NAMES: function () {
            return o;
          },
          INTERNAL_HEADERS: function () {
            return l;
          },
          COMPILER_INDEXES: function () {
            return s;
          },
          PHASE_EXPORT: function () {
            return a;
          },
          PHASE_PRODUCTION_BUILD: function () {
            return u;
          },
          PHASE_PRODUCTION_SERVER: function () {
            return c;
          },
          PHASE_DEVELOPMENT_SERVER: function () {
            return d;
          },
          PHASE_TEST: function () {
            return p;
          },
          PHASE_INFO: function () {
            return f;
          },
          PAGES_MANIFEST: function () {
            return h;
          },
          APP_PATHS_MANIFEST: function () {
            return m;
          },
          APP_PATH_ROUTES_MANIFEST: function () {
            return _;
          },
          BUILD_MANIFEST: function () {
            return g;
          },
          APP_BUILD_MANIFEST: function () {
            return E;
          },
          FUNCTIONS_CONFIG_MANIFEST: function () {
            return S;
          },
          SUBRESOURCE_INTEGRITY_MANIFEST: function () {
            return y;
          },
          NEXT_FONT_MANIFEST: function () {
            return I;
          },
          EXPORT_MARKER: function () {
            return T;
          },
          EXPORT_DETAIL: function () {
            return P;
          },
          PRERENDER_MANIFEST: function () {
            return N;
          },
          ROUTES_MANIFEST: function () {
            return O;
          },
          IMAGES_MANIFEST: function () {
            return b;
          },
          SERVER_FILES_MANIFEST: function () {
            return v;
          },
          DEV_CLIENT_PAGES_MANIFEST: function () {
            return A;
          },
          MIDDLEWARE_MANIFEST: function () {
            return R;
          },
          DEV_MIDDLEWARE_MANIFEST: function () {
            return x;
          },
          REACT_LOADABLE_MANIFEST: function () {
            return M;
          },
          FONT_MANIFEST: function () {
            return L;
          },
          SERVER_DIRECTORY: function () {
            return C;
          },
          CONFIG_FILES: function () {
            return j;
          },
          BUILD_ID_FILE: function () {
            return D;
          },
          BLOCKED_PAGES: function () {
            return F;
          },
          CLIENT_PUBLIC_FILES_PATH: function () {
            return k;
          },
          CLIENT_STATIC_FILES_PATH: function () {
            return w;
          },
          STRING_LITERAL_DROP_BUNDLE: function () {
            return U;
          },
          NEXT_BUILTIN_DOCUMENT: function () {
            return B;
          },
          BARREL_OPTIMIZATION_PREFIX: function () {
            return $;
          },
          CLIENT_REFERENCE_MANIFEST: function () {
            return H;
          },
          SERVER_REFERENCE_MANIFEST: function () {
            return W;
          },
          MIDDLEWARE_BUILD_MANIFEST: function () {
            return z;
          },
          MIDDLEWARE_REACT_LOADABLE_MANIFEST: function () {
            return G;
          },
          CLIENT_STATIC_FILES_RUNTIME_MAIN: function () {
            return Y;
          },
          CLIENT_STATIC_FILES_RUNTIME_MAIN_APP: function () {
            return X;
          },
          APP_CLIENT_INTERNALS: function () {
            return V;
          },
          CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH: function () {
            return q;
          },
          CLIENT_STATIC_FILES_RUNTIME_AMP: function () {
            return J;
          },
          CLIENT_STATIC_FILES_RUNTIME_WEBPACK: function () {
            return K;
          },
          CLIENT_STATIC_FILES_RUNTIME_POLYFILLS: function () {
            return Z;
          },
          CLIENT_STATIC_FILES_RUNTIME_POLYFILLS_SYMBOL: function () {
            return Q;
          },
          EDGE_RUNTIME_WEBPACK: function () {
            return ee;
          },
          TEMPORARY_REDIRECT_STATUS: function () {
            return et;
          },
          PERMANENT_REDIRECT_STATUS: function () {
            return en;
          },
          STATIC_PROPS_ID: function () {
            return er;
          },
          SERVER_PROPS_ID: function () {
            return ei;
          },
          PAGE_SEGMENT_KEY: function () {
            return eo;
          },
          GOOGLE_FONT_PROVIDER: function () {
            return el;
          },
          OPTIMIZED_FONT_PROVIDERS: function () {
            return es;
          },
          DEFAULT_SERIF_FONT: function () {
            return ea;
          },
          DEFAULT_SANS_SERIF_FONT: function () {
            return eu;
          },
          STATIC_STATUS_PAGES: function () {
            return ec;
          },
          TRACE_OUTPUT_VERSION: function () {
            return ed;
          },
          TURBO_TRACE_DEFAULT_MEMORY_LIMIT: function () {
            return ep;
          },
          RSC_MODULE_TYPES: function () {
            return ef;
          },
          EDGE_UNSUPPORTED_NODE_APIS: function () {
            return eh;
          },
          SYSTEM_ENTRYPOINTS: function () {
            return em;
          },
        });
      let r = n(167),
        i = r._(n(7708)),
        o = { client: "client", server: "server", edgeServer: "edge-server" },
        l = [
          "x-invoke-path",
          "x-invoke-status",
          "x-invoke-error",
          "x-invoke-query",
          "x-middleware-invoke",
        ],
        s = { [o.client]: 0, [o.server]: 1, [o.edgeServer]: 2 },
        a = "phase-export",
        u = "phase-production-build",
        c = "phase-production-server",
        d = "phase-development-server",
        p = "phase-test",
        f = "phase-info",
        h = "pages-manifest.json",
        m = "app-paths-manifest.json",
        _ = "app-path-routes-manifest.json",
        g = "build-manifest.json",
        E = "app-build-manifest.json",
        S = "functions-config-manifest.json",
        y = "subresource-integrity-manifest",
        I = "next-font-manifest",
        T = "export-marker.json",
        P = "export-detail.json",
        N = "prerender-manifest.json",
        O = "routes-manifest.json",
        b = "images-manifest.json",
        v = "required-server-files.json",
        A = "_devPagesManifest.json",
        R = "middleware-manifest.json",
        x = "_devMiddlewareManifest.json",
        M = "react-loadable-manifest.json",
        L = "font-manifest.json",
        C = "server",
        j = ["next.config.js", "next.config.mjs"],
        D = "BUILD_ID",
        F = ["/_document", "/_app", "/_error"],
        k = "public",
        w = "static",
        U = "__NEXT_DROP_CLIENT_FILE__",
        B = "__NEXT_BUILTIN_DOCUMENT__",
        $ = "__barrel_optimize__",
        H = "client-reference-manifest",
        W = "server-reference-manifest",
        z = "middleware-build-manifest",
        G = "middleware-react-loadable-manifest",
        Y = "main",
        X = "" + Y + "-app",
        V = "app-pages-internals",
        q = "react-refresh",
        J = "amp",
        K = "webpack",
        Z = "polyfills",
        Q = Symbol(Z),
        ee = "edge-runtime-webpack",
        et = 307,
        en = 308,
        er = "__N_SSG",
        ei = "__N_SSP",
        eo = "__PAGE__",
        el = "https://fonts.googleapis.com/",
        es = [
          { url: el, preconnect: "https://fonts.gstatic.com" },
          {
            url: "https://use.typekit.net",
            preconnect: "https://use.typekit.net",
          },
        ],
        ea = {
          name: "Times New Roman",
          xAvgCharWidth: 821,
          azAvgWidth: 854.3953488372093,
          unitsPerEm: 2048,
        },
        eu = {
          name: "Arial",
          xAvgCharWidth: 904,
          azAvgWidth: 934.5116279069767,
          unitsPerEm: 2048,
        },
        ec = ["/500"],
        ed = 1,
        ep = 6e3,
        ef = { client: "client", server: "server" },
        eh = [
          "clearImmediate",
          "setImmediate",
          "BroadcastChannel",
          "ByteLengthQueuingStrategy",
          "CompressionStream",
          "CountQueuingStrategy",
          "DecompressionStream",
          "DomException",
          "MessageChannel",
          "MessageEvent",
          "MessagePort",
          "ReadableByteStreamController",
          "ReadableStreamBYOBRequest",
          "ReadableStreamDefaultController",
          "TransformStreamDefaultController",
          "WritableStreamDefaultController",
        ],
        em = new Set([Y, q, J, X]);
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    972: (e, t) => {
      function getObjectClassLabel(e) {
        return Object.prototype.toString.call(e);
      }
      function isPlainObject(e) {
        if ("[object Object]" !== getObjectClassLabel(e)) return !1;
        let t = Object.getPrototypeOf(e);
        return null === t || t.hasOwnProperty("isPrototypeOf");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getObjectClassLabel: function () {
            return getObjectClassLabel;
          },
          isPlainObject: function () {
            return isPlainObject;
          },
        });
    },
    7708: (e) => {
      e.exports = [
        "chrome 64",
        "edge 79",
        "firefox 67",
        "opera 51",
        "safari 12",
      ];
    },
    64: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "denormalizePagePath", {
          enumerable: !0,
          get: function () {
            return denormalizePagePath;
          },
        });
      let r = n(4676),
        i = n(9267);
      function denormalizePagePath(e) {
        let t = (0, i.normalizePathSep)(e);
        return t.startsWith("/index/") && !(0, r.isDynamicRoute)(t)
          ? t.slice(6)
          : "/index" !== t
            ? t
            : "/";
      }
    },
    9341: (e, t) => {
      function ensureLeadingSlash(e) {
        return e.startsWith("/") ? e : "/" + e;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ensureLeadingSlash", {
          enumerable: !0,
          get: function () {
            return ensureLeadingSlash;
          },
        });
    },
    7072: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizePagePath", {
          enumerable: !0,
          get: function () {
            return normalizePagePath;
          },
        });
      let r = n(9341),
        i = n(4676),
        o = n(7921);
      function normalizePagePath(e) {
        let t =
          /^\/index(\/|$)/.test(e) && !(0, i.isDynamicRoute)(e)
            ? "/index" + e
            : "/" === e
              ? "/index"
              : (0, r.ensureLeadingSlash)(e);
        {
          let { posix: e } = n(1017),
            r = e.normalize(t);
          if (r !== t)
            throw new o.NormalizeError(
              "Requested and resolved page mismatch: " + t + " " + r,
            );
        }
        return t;
      }
    },
    9267: (e, t) => {
      function normalizePathSep(e) {
        return e.replace(/\\/g, "/");
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizePathSep", {
          enumerable: !0,
          get: function () {
            return normalizePathSep;
          },
        });
    },
    4676: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getSortedRoutes: function () {
            return r.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return i.isDynamicRoute;
          },
        });
      let r = n(5651),
        i = n(3489);
    },
    3489: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return isDynamicRoute;
          },
        });
      let n = /\/\[[^/]+?\](?=\/|$)/;
      function isDynamicRoute(e) {
        return n.test(e);
      }
    },
    5651: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return getSortedRoutes;
          },
        });
      let UrlNode = class UrlNode {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let n = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              n.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/"),
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").',
              );
            n.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              n.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/"),
              ),
            null !== this.optionalRestSlugName &&
              n.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/"),
              ),
            n
          );
        }
        _insert(e, t, n) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (n) throw Error("Catch-all must be the last part of the URL.");
          let r = e[0];
          if (r.startsWith("[") && r.endsWith("]")) {
            let i = r.slice(1, -1),
              o = !1;
            if (
              (i.startsWith("[") &&
                i.endsWith("]") &&
                ((i = i.slice(1, -1)), (o = !0)),
              i.startsWith("...") && ((i = i.substring(3)), (n = !0)),
              i.startsWith("[") || i.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  i +
                  "').",
              );
            if (i.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  i +
                  "').",
              );
            function handleSlug(e, n) {
              if (null !== e && e !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    n +
                    "').",
                );
              t.forEach((e) => {
                if (e === n)
                  throw Error(
                    'You cannot have the same slug name "' +
                      n +
                      '" repeat within a single dynamic path',
                  );
                if (e.replace(/\W/g, "") === r.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path',
                  );
              }),
                t.push(n);
            }
            if (n) {
              if (o) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).',
                  );
                handleSlug(this.optionalRestSlugName, i),
                  (this.optionalRestSlugName = i),
                  (r = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").',
                  );
                handleSlug(this.restSlugName, i),
                  (this.restSlugName = i),
                  (r = "[...]");
              }
            } else {
              if (o)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").',
                );
              handleSlug(this.slugName, i), (this.slugName = i), (r = "[]");
            }
          }
          this.children.has(r) || this.children.set(r, new UrlNode()),
            this.children.get(r)._insert(e.slice(1), t, n);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      };
      function getSortedRoutes(e) {
        let t = new UrlNode();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    676: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return isError;
          },
          getProperError: function () {
            return getProperError;
          },
        });
      let r = n(972);
      function isError(e) {
        return (
          "object" == typeof e && null !== e && "name" in e && "message" in e
        );
      }
      function getProperError(e) {
        return isError(e)
          ? e
          : Error((0, r.isPlainObject)(e) ? JSON.stringify(e) : e + "");
      }
    },
    5955: (e, t) => {
      Object.defineProperty(t, "Z", {
        enumerable: !0,
        get: function () {
          return prettyBytes;
        },
      });
      let n = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        toLocaleString = (e, t) => {
          let n = e;
          return (
            "string" == typeof t
              ? (n = e.toLocaleString(t))
              : !0 === t && (n = e.toLocaleString()),
            n
          );
        };
      function prettyBytes(e, t) {
        if (!Number.isFinite(e))
          throw TypeError(`Expected a finite number, got ${typeof e}: ${e}`);
        if ((t = Object.assign({}, t)).signed && 0 === e) return " 0 B";
        let r = e < 0,
          i = r ? "-" : t.signed ? "+" : "";
        if ((r && (e = -e), e < 1)) {
          let n = toLocaleString(e, t.locale);
          return i + n + " B";
        }
        let o = Math.min(Math.floor(Math.log10(e) / 3), n.length - 1);
        e = Number((e / Math.pow(1e3, o)).toPrecision(3));
        let l = toLocaleString(e, t.locale),
          s = n[o];
        return i + l + " " + s;
      }
    },
    7093: (e, t, n) => {
      e.exports = n(2785);
    },
    3112: (e, t, n) => {
      e.exports = n(7093).vendored.contexts.HtmlContext;
    },
    5778: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getPageFiles", {
          enumerable: !0,
          get: function () {
            return getPageFiles;
          },
        });
      let r = n(64),
        i = n(7072);
      function getPageFiles(e, t) {
        let n = (0, r.denormalizePagePath)((0, i.normalizePagePath)(t));
        return (
          e.pages[n] ||
          (console.warn(
            `Could not find files for ${n} in .next/build-manifest.json`,
          ),
          [])
        );
      }
    },
    9630: (e, t) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          ESCAPE_REGEX: function () {
            return r;
          },
          htmlEscapeJsonString: function () {
            return htmlEscapeJsonString;
          },
        });
      let n = {
          "&": "\\u0026",
          ">": "\\u003e",
          "<": "\\u003c",
          "\u2028": "\\u2028",
          "\u2029": "\\u2029",
        },
        r = /[&><\u2028\u2029]/g;
      function htmlEscapeJsonString(e) {
        return e.replace(r, (e) => n[e]);
      }
    },
    733: (e, t, n) => {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          isBlockedPage: function () {
            return isBlockedPage;
          },
          cleanAmpPath: function () {
            return cleanAmpPath;
          },
          debounce: function () {
            return debounce;
          },
        });
      let r = n(4191);
      function isBlockedPage(e) {
        return r.BLOCKED_PAGES.includes(e);
      }
      function cleanAmpPath(e) {
        return (
          e.match(/\?amp=(y|yes|true|1)/) &&
            (e = e.replace(/\?amp=(y|yes|true|1)&?/, "?")),
          e.match(/&amp=(y|yes|true|1)/) &&
            (e = e.replace(/&amp=(y|yes|true|1)/, "")),
          (e = e.replace(/\?$/, ""))
        );
      }
      function debounce(e, t, n = 1 / 0) {
        let r, i, o;
        let l = 0,
          s = 0;
        function run() {
          let a = Date.now(),
            u = s + t - a;
          u <= 0 || l + n >= a
            ? ((r = void 0), e.apply(o, i))
            : (r = setTimeout(run, u));
        }
        return function (...e) {
          (i = e),
            (o = this),
            (s = Date.now()),
            void 0 === r && ((l = s), (r = setTimeout(run, t)));
        };
      }
    },
  });
