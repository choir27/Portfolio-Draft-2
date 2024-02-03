(() => {
  var e = {};
  (e.id = 12),
    (e.ids = [12]),
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
      1132: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => i.a,
            __next_app__: () => h,
            originalPathname: () => d,
            pages: () => p,
            routeModule: () => u,
            tree: () => l,
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
        let l = [
            "",
            {
              children: [
                "allProjects",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 5570)),
                        "C:\\Users\\richa\\OneDrive\\Documents\\Portfolio\\app\\allProjects\\page.tsx",
                      ],
                    },
                  ],
                },
                {
                  layout: [
                    () => Promise.resolve().then(r.bind(r, 5350)),
                    "C:\\Users\\richa\\OneDrive\\Documents\\Portfolio\\app\\allProjects\\layout.tsx",
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
          p = [
            "C:\\Users\\richa\\OneDrive\\Documents\\Portfolio\\app\\allProjects\\page.tsx",
          ],
          d = "/allProjects/page",
          h = { require: r, loadChunk: () => Promise.resolve() },
          u = new s.AppPageRouteModule({
            definition: {
              kind: o.x.APP_PAGE,
              page: "/allProjects/page",
              pathname: "/allProjects",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: l },
          });
      },
      3949: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 9467)),
          Promise.resolve().then(r.bind(r, 2841)),
          Promise.resolve().then(r.bind(r, 2074)),
          Promise.resolve().then(r.bind(r, 7691)),
          Promise.resolve().then(r.bind(r, 3567)),
          Promise.resolve().then(r.bind(r, 4711));
      },
      5350: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => RootLayout, metadata: () => i });
        var s = r(4656);
        r(3542);
        var o = r(554),
          a = r.n(o);
        let i = { title: "Portfolio - All Projects" };
        function RootLayout({ children: e }) {
          return (0, s.jsxs)("html", {
            lang: "en",
            children: [
              s.jsx(a(), {
                src: "https://kit.fontawesome.com/d0e0071c1c.js",
                crossOrigin: "anonymous",
              }),
              s.jsx("body", { children: e }),
            ],
          });
        }
      },
      5570: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => AllProjects });
        var s = r(4656),
          o = r(66),
          a = r(7661),
          i = r(9752);
        r(4606);
        var n = r(2306),
          c = r.n(n);
        r(5475);
        var l = r(2488),
          p = r(4011),
          d = r(1895);
        function AllProjects() {
          return (0, s.jsxs)("main", {
            children: [
              s.jsx(i.ZP, {}),
              s.jsx(o.ZP, {}),
              (0, s.jsxs)("section", {
                id: "project",
                children: [
                  s.jsx("h3", { children: "All My Projects" }),
                  (0, s.jsxs)("section", {
                    className: `${c().flex} ${c()["justify-between"]} ${c()["flex-wrap"]} ${c()["align-center"]} projects`,
                    children: [
                      s.jsx(a.Z, {
                        projectName: "AutoAligners",
                        codeURL: "https://github.com/choir27/autoAligners",
                        demoURL: "",
                        projectIMG: d.Z.src,
                        projectALT:
                          "website landing page preview of AutoAligners",
                        projectTech: ["TypeScript", "AppWrite", "Vite"],
                        projectDescription:
                          "AutoAligners allows the client to reserve various car services and submit an estimate for a car service.  Employees are able to manage aspects of the client, ranging from the purchases they made, to the reservations they made.",
                      }),
                      s.jsx(a.Z, {
                        projectName: "EchoStream",
                        codeURL: "https://github.com/choir27/EchoStream",
                        demoURL: "https://echostream.netlify.app/",
                        projectIMG: l.Z.src,
                        projectALT:
                          "website landing page preview of EchoStream",
                        projectTech: ["Next", "TypeScript", "AppWrite"],
                        projectDescription:
                          "EchoStream is an audio service web application where users are able to add their own music tracks. Users can also create playlists where they add music tracks from various users, includings their own songs.",
                      }),
                      s.jsx(a.Z, {
                        projectName: "Priconnect",
                        codeURL: "https://github.com/choir27/Priconnect",
                        demoURL: "https://priconnect.netlify.app",
                        projectIMG: "/_next/static/media/priconne.5205d7c9.png",
                        projectALT:
                          "website landing page preview of For Everything Priconne",
                        projectTech: ["React", "MongoDB", "Node"],
                        projectDescription:
                          "Priconnect is a social media web application that allows users to create, like and comment posts.  Users can also interact with each other by replying on comments.",
                      }),
                      s.jsx(a.Z, {
                        projectName: "The Real Estate Beast",
                        codeURL:
                          "https://github.com/choir27/The-Real-Estate-Beast",
                        demoURL: "https://therealestatebeast.netlify.app",
                        projectIMG: p.Z.src,
                        projectALT:
                          "website landing page preview of The Real Estate Beast",
                        projectTech: ["CSS", "HTML"],
                        projectDescription:
                          "The Real Estate Beast is a real estate website that demonstrates Carleton Badgers' history of satisfied clients, while also providing home value estimations and available homes for purchase.",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }
      },
      3567: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => s });
        let s = {
          src: "/_next/static/media/priconne.5205d7c9.png",
          height: 853,
          width: 1920,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbklEQVR42mPIidiTGL4nKfFwcfG29JxVxvZT9e37VC2bGfIjt8aEz42JWRgVNyc4arqzf6dPSJ2KXSNDZuSixKS8jKyalPRKD58kz4AUF88wOZtShqyoTQlRKwIiVgWm7/SNWeYcOsPIu5PfugYA444nBEqzLIAAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 4,
        };
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var __webpack_exec__ = (e) => t((t.s = e)),
    r = t.X(0, [113, 825, 30, 668, 869], () => __webpack_exec__(1132));
  module.exports = r;
})();
