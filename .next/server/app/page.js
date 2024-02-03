(() => {
  var e = {};
  (e.id = 931),
    (e.ids = [931]),
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
      2202: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => h,
            originalPathname: () => d,
            pages: () => l,
            routeModule: () => u,
            tree: () => p,
          });
        var s = r(7096),
          o = r(6132),
          a = r(7284),
          i = r.n(a),
          n = r(2564),
          c = {};
        for (let e in n)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (c[e] = () => n[e]);
        r.d(t, c);
        let p = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [
                    () => Promise.resolve().then(r.bind(r, 3982)),
                    "C:\\Users\\richa\\OneDrive\\Documents\\Portfolio\\app\\page.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 5345)),
                "C:\\Users\\richa\\OneDrive\\Documents\\Portfolio\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.t.bind(r, 9291, 23)),
                "next/dist/client/components/not-found-error",
              ],
            },
          ],
          l = [
            "C:\\Users\\richa\\OneDrive\\Documents\\Portfolio\\app\\page.tsx",
          ],
          d = "/page",
          h = { require: r, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: o.x.APP_PAGE,
              page: "/page",
              pathname: "/",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: p },
          });
      },
      5125: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 9467)),
          Promise.resolve().then(r.bind(r, 2841)),
          Promise.resolve().then(r.bind(r, 2074)),
          Promise.resolve().then(r.bind(r, 7691)),
          Promise.resolve().then(r.bind(r, 4711));
      },
      3982: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => Home });
        var s = r(4656);
        r(3542);
        var o = r(66),
          a = r(7661),
          i = r(9752);
        r(4606);
        var n = r(2306),
          c = r.n(n);
        r(5475);
        var p = r(2488),
          l = r(1895),
          d = r(4011);
        function Home() {
          return (0, s.jsxs)("main", {
            children: [
              s.jsx(i.ZP, {}),
              s.jsx(o.ZP, {}),
              (0, s.jsxs)("section", {
                id: "project",
                children: [
                  s.jsx("h3", { children: "My Projects" }),
                  (0, s.jsxs)("section", {
                    className: `${c().flex} ${c()["justify-between"]} ${c()["flex-wrap"]} ${c()["align-center"]} projects`,
                    children: [
                      s.jsx(a.Z, {
                        projectName: "AutoAligners",
                        codeURL: "https://github.com/choir27/autoAligners",
                        demoURL: "",
                        projectIMG: l.Z.src,
                        projectALT:
                          "website landing page preview of AutoAligners",
                        projectTech: ["TypeScript", "AppWrite", "Vite"],
                        projectDescription:
                          "AutoAligners allows the client to reserve various car services and submit an estimate for a car service.  Employees are able to manage aspects of the client, ranging from the purchases they made, to the reservations they made.",
                      }),
                      s.jsx(a.Z, {
                        projectName: "The Real Estate Beast",
                        codeURL:
                          "https://github.com/choir27/The-Real-Estate-Beast",
                        demoURL: "https://therealestatebeast.netlify.app",
                        projectIMG: d.Z.src,
                        projectALT:
                          "website landing page preview of The Real Estate Beast",
                        projectTech: ["CSS", "HTML"],
                        projectDescription:
                          "The Real Estate Beast is a real estate website that demonstrates Carleton Badgers' history of satisfied clients, while also providing home value estimations and available homes for purchase.",
                      }),
                      s.jsx("div", {
                        className: "flex justify-center",
                        children: s.jsx(a.Z, {
                          classNames: "width-100",
                          projectName: "EchoStream",
                          codeURL: "https://github.com/choir27/EchoStream",
                          demoURL: "https://echostream.netlify.app/",
                          projectIMG: p.Z.src,
                          projectALT:
                            "website landing page preview of EchoStream",
                          projectTech: ["Next", "TypeScript", "AppWrite"],
                          projectDescription:
                            "EchoStream is an audio service web application where users are able to add their own music tracks. Users can also create playlists where they add music tracks from various users, includings their own songs.",
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
    });
  var t = require("../webpack-runtime.js");
  t.C(e);
  var __webpack_exec__ = (e) => t((t.s = e)),
    r = t.X(0, [113, 825, 30, 668, 869], () => __webpack_exec__(2202));
  module.exports = r;
})();
