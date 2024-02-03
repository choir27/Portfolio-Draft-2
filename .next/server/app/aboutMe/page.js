(() => {
  var e = {};
  (e.id = 847),
    (e.ids = [847]),
    (e.modules = {
      5403: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external");
      },
      4749: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      5528: (e) => {
        "use strict";
        e.exports = require("next/dist\\client\\components\\action-async-storage.external.js");
      },
      1877: (e) => {
        "use strict";
        e.exports = require("next/dist\\client\\components\\request-async-storage.external.js");
      },
      5319: (e) => {
        "use strict";
        e.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");
      },
      2164: (e, t, s) => {
        "use strict";
        s.r(t),
          s.d(t, {
            GlobalError: () => r.a,
            __next_app__: () => u,
            originalPathname: () => d,
            pages: () => A,
            routeModule: () => g,
            tree: () => c,
          });
        var i = s(7096),
          a = s(6132),
          n = s(7284),
          r = s.n(n),
          o = s(2564),
          l = {};
        for (let e in o)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => o[e]);
        s.d(t, l);
        let c = [
            "",
            {
              children: [
                "aboutMe",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(s.bind(s, 901)),
                        "C:\\Users\\richa\\OneDrive\\Documents\\Portfolio\\app\\aboutMe\\page.tsx",
                      ],
                    },
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(s.bind(s, 8013)),
                    "C:\\Users\\richa\\OneDrive\\Documents\\Portfolio\\app\\aboutMe\\layout.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(s.bind(s, 5345)),
                "C:\\Users\\richa\\OneDrive\\Documents\\Portfolio\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(s.t.bind(s, 9291, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          A = [
            "C:\\Users\\richa\\OneDrive\\Documents\\Portfolio\\app\\aboutMe\\page.tsx",
          ],
          d = "/aboutMe/page",
          u = { require: s, loadChunk: () => Promise.resolve() },
          g = new i.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: "/aboutMe/page",
              pathname: "/aboutMe",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      9116: (e, t, s) => {
        Promise.resolve().then(s.bind(s, 9467)),
          Promise.resolve().then(s.bind(s, 2841)),
          Promise.resolve().then(s.bind(s, 3012)),
          Promise.resolve().then(s.bind(s, 294)),
          Promise.resolve().then(s.bind(s, 3690)),
          Promise.resolve().then(s.bind(s, 8093)),
          Promise.resolve().then(s.bind(s, 3120)),
          Promise.resolve().then(s.bind(s, 3317)),
          Promise.resolve().then(s.bind(s, 6462)),
          Promise.resolve().then(s.bind(s, 3821));
      },
      8013: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => RootLayout, metadata: () => r });
        var i = s(4656);
        s(3542);
        var a = s(554),
          n = s.n(a);
        let r = { title: "Portfolio - About Me" };
        function RootLayout({ children: e }) {
          return (0, i.jsxs)("html", {
            lang: "en",
            children: [
              i.jsx(n(), {
                src: "https://kit.fontawesome.com/d0e0071c1c.js",
                crossOrigin: "anonymous",
              }),
              i.jsx("body", { children: e }),
            ],
          });
        }
      },
      901: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => AboutMe });
        var i = s(4656);
        s(4606);
        var a = s(2306),
          n = s.n(a);
        s(5475);
        var r = s(66);
        function Image(e) {
          return i.jsx("div", {
            className: "imageContainer",
            children: i.jsx("img", { src: e.src, alt: e.alt }),
          });
        }
        var o = s(9752);
        function AboutMe() {
          return (0, i.jsxs)("main", {
            children: [
              i.jsx(o.ZP, {}),
              i.jsx(r.ZP, {}),
              (0, i.jsxs)("section", {
                id: "about",
                children: [
                  i.jsx("h2", { children: "About Me" }),
                  (0, i.jsxs)("section", {
                    id: "volunteer",
                    className: `${n().flex} ${n()["flex-col"]} ${n()["align-center"]}`,
                    children: [
                      i.jsx("h3", { children: "Linguistics Justice League" }),
                      i.jsx("p", {
                        children:
                          "Since June 2023, I have been volunteering as a developer for Linguistics Justice League, which is a 501c(3) non-profit organization.  They support language learners who speak low-resource languages.  Beyond facilitating language learning, the organization aims to raise awareness and the understanding with how important it is to preserve native cultures and languages.",
                      }),
                      (0, i.jsxs)("section", {
                        className: `${n().flex} ${n()["justify-between"]} social`,
                        children: [
                          (0, i.jsxs)("a", {
                            target: "_blank",
                            className: n().button,
                            href: "https://linguisticsjusticeleague.org/",
                            children: [
                              "LJL Website",
                              i.jsx("i", { className: "fa-solid fa-globe" }),
                            ],
                          }),
                          (0, i.jsxs)("a", {
                            target: "_blank",
                            className: n().button,
                            href: "https://twitter.com/Linguistics_LJL",
                            children: [
                              "LJL Twitter",
                              i.jsx("i", { className: "fa-brands fa-twitter" }),
                            ],
                          }),
                          (0, i.jsxs)("a", {
                            target: "_blank",
                            className: n().button,
                            href: "https://www.linkedin.com/in/linguisticsjusticeleague/",
                            children: [
                              "LJL LinkedIn",
                              i.jsx("i", {
                                className: "fa-brands fa-linkedin",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("a", {
                            target: "_blank",
                            className: n().button,
                            href: "https://www.facebook.com/LinguisticsJusticeLeague",
                            children: [
                              "LJL Facebook",
                              i.jsx("i", {
                                className: "fa-brands fa-facebook",
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("section", {
                        className: "images",
                        children: [
                          i.jsx(Image, {
                            src: "/_next/static/media/linguisticsJusticeLeague2.b41da061.png",
                            alt: "dashboard UI display when the user is logged in as an authenticated user",
                          }),
                          i.jsx(Image, {
                            src: "/_next/static/media/linguisticsJusticeLegue3.6f5ba6ad.png",
                            alt: "create Assignment UI display when the logged in authenticated user creates an assignment",
                          }),
                          i.jsx(Image, {
                            src: "/_next/static/media/linguisticsJusticeLeague4.f7edced0.png",
                            alt: "create Assignment UI display when the logged in authenticated user clicks the translate button after creating an assignment",
                          }),
                          i.jsx(Image, {
                            src: "/_next/static/media/linguisticsJusticeLeague7.3aeb3d52.png",
                            alt: "dashboard UI of a list of all current assignments that have been created by the current user",
                          }),
                          i.jsx(Image, {
                            src: "/_next/static/media/linguisticsJusticeLeague5.ff4cb574.png",
                            alt: "assignment display hub UI after the authenticated logged in user submitted the assignment",
                          }),
                          i.jsx(Image, {
                            src: "/_next/static/media/linguisticsJusticeLeague6.7c5e726a.png",
                            alt: "translated assignment display hub UI after the authenticated logged in user submitted the assignment",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("section", {
                    id: "documentation",
                    className: `${n().flex} ${n()["flex-col"]} ${n()["align-center"]}`,
                    children: [
                      i.jsx("h3", { children: "Documentation" }),
                      i.jsx("p", {
                        children:
                          "During the first couple weeks of October, I was tasked with the low-level research and presentation of the following topics: TypeScript, Next Webpack 5, Next App Routing, Zustand and Context API, and local storage, session storage, and local state.  I also prepared and presented my findings to my team members, improving upon my documentation using the feedback and suggestions I received.",
                      }),
                      (0, i.jsxs)("div", {
                        className: `${n().flex} ${n()["justify-evenly"]}`,
                        children: [
                          i.jsx(Image, {
                            src: "/_next/static/media/documentation.1411791e.png",
                            alt: "preview screenshot of the TypeScript section of my documentation",
                          }),
                          i.jsx(Image, {
                            src: "/_next/static/media/documentation1.de171674.png",
                            alt: "preview screenshot of the TypeScript section of my documentation",
                          }),
                        ],
                      }),
                      i.jsx("a", {
                        target: "_blank",
                        className: n().button,
                        href: "https://choir.hashnode.dev/low-level-documentation",
                        children: "My Tech Documentation",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("section", {
                    id: "meetup",
                    className: `${n().flex} ${n()["flex-col"]} ${n()["align-center"]}`,
                    children: [
                      i.jsx("h3", { children: "Meetups" }),
                      i.jsx("h4", { children: "Code And Coffee" }),
                      i.jsx("p", {
                        children:
                          "I have been attending NY Code And Coffee meetups for awhile, and it is the perfect environment to meet new people in the tech world.  Having been founded by Steve Chen, I have made many new friends and acquaintances from having attended multiple times.",
                      }),
                      (0, i.jsxs)("section", {
                        className: `buttons ${n()["justify-between"]} ${n().flex}`,
                        children: [
                          i.jsx("a", {
                            href: "https://codeandcoffee.org/",
                            className: n().button,
                            children: "Code & Coffee Website",
                          }),
                          i.jsx("a", {
                            href: "https://github.com/CodeandCoffeeCommunity/",
                            className: n().button,
                            children: "Code & Coffee Github",
                          }),
                          i.jsx("a", {
                            href: "https://www.youtube.com/@USCodeCoffee/videos",
                            className: n().button,
                            children: "Code & Coffee Youtube",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      },
      3012: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => i });
        let i = {
          src: "/_next/static/media/documentation.1411791e.png",
          height: 1789,
          width: 1091,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAANlBMVEX////9/f38/Pz7+/v6+vr5+fn4+Pj39/j39/f39vf29vb19fb19fX09fXz8/Py8vPy8vLv7+960164AAAAL0lEQVR42hXEQQIAEAgEwLWKhPD/z2IOA561MyrxTP13IxOsqCR4cxNEDFeMosILFvAA/nMPUogAAAAASUVORK5CYII=",
          blurWidth: 5,
          blurHeight: 8,
        };
      },
      294: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => i });
        let i = {
          src: "/_next/static/media/documentation1.de171674.png",
          height: 1784,
          width: 1091,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAIAAAC+k6JsAAAAeUlEQVR42i3KTQrDIBiE4blH23V6GKHt1rUpSW5Q242eIp5Q0CwEFX9A6LfI5mUGHmilX88H55wxppTCum0ApulOXZYVhz+cc957aggB+24+Uiqt5fdnjME8vwFcrjeqEAIkrbWET59SijHmnGutYwzQKqW01uj33v9980wIGPDwyQAAAABJRU5ErkJggg==",
          blurWidth: 5,
          blurHeight: 8,
        };
      },
      3690: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => i });
        let i = {
          src: "/_next/static/media/linguisticsJusticeLeague2.b41da061.png",
          height: 947,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAU0lEQVR42iWMSwqAMBBDe/9DirgQ6sJasPPrfOwghATyQso2TkSEiebm7qpqmV4OuZ7e797MVpkwsWnZuSIREzOLTF2+BJNKlaY5/j/iHQBIEfEBKfFdNi8jyzQAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 4,
        };
      },
      8093: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => i });
        let i = {
          src: "/_next/static/media/linguisticsJusticeLeague4.f7edced0.png",
          height: 947,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAW0lEQVR42i3JsRJAMBBF0fz/DynNqIyKDo3R0WBGJDb73kYKt7zHvf6S535iEBFASYJIqi5FL8G/kiz/qSLE6NRYFoFlaPu6mrsmmyngUMAM0HBs+zSe62xGkB8Ri1u1qLSJTAAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 4,
        };
      },
      3120: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => i });
        let i = {
          src: "/_next/static/media/linguisticsJusticeLeague5.ff4cb574.png",
          height: 1322,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAATlBMVEX////+/v79/f38/Pz9+/z9+/v7+/z7+/v6+vr7+Pb59vX09PXv8fHx8PDn6vHf4+7a2dziyrrdwLPPrZ3ArqGssrzMppOzjYGChZ94eoSSnOfCAAAANElEQVR42gWAhxGAIBAE9x7RV8xK6r9RhiSQFPBjT+bTwvp8L3OMbH8tmEToLSPA7+s0pAElXAF1OigwxwAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 6,
        };
      },
      3317: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => i });
        let i = {
          src: "/_next/static/media/linguisticsJusticeLeague6.7c5e726a.png",
          height: 1322,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAV1BMVEX////+/v79/f79/f38/Pz9+/z9+/v7+/z7+/v6+/v6+vr7+Pb49vX19fX09PXx8fHv8fHp7PLi5vDc3N/iyrrdwLLPrZ3ArqGssrvMppSzjoKDhp96fIYDRKfNAAAANUlEQVR42gWAhxGAIBAE9wRR35xJ/dfJsE4gyWP7sTnrR+bnexlCYPlzopPwtUQE2H2dDqkBLdoBv2wsZ6wAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 6,
        };
      },
      6462: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => i });
        let i = {
          src: "/_next/static/media/linguisticsJusticeLeague7.3aeb3d52.png",
          height: 1289,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAUklEQVR42i3JSxJAMBAFQPc/pWKj2KVSmPeZkNDbnuZzc2bcIYmknZRb5rTycLqUUmsFEIEAW2sj7Ou6qZdJBdRj4SEbQA52gu4xa5eFgP/wFw+BPXUaq3x2xQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 5,
        };
      },
      3821: (e, t, s) => {
        "use strict";
        s.r(t), s.d(t, { default: () => i });
        let i = {
          src: "/_next/static/media/linguisticsJusticeLegue3.6f5ba6ad.png",
          height: 947,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAXUlEQVR42i2MOw6AIBBEuf+FLE2sjBUloTF2VGoUl132g5g4mWom7zl8TswXILJwr5qKSmV2tdwEGYms/ek/lOKIQLiqyupnPw5xmZoZizhm6mvHYU8phGOL9tn0BQ6iW5f9uSZNAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 4,
        };
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var __webpack_exec__ = (e) => t((t.s = e)),
    s = t.X(0, [113, 825, 30, 668], () => __webpack_exec__(2164));
  module.exports = s;
})();
