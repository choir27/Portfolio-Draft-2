"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/allProjects/page", {
  /***/ "(app-pages-browser)/./components/Nav.tsx":
    /*!****************************!*\
  !*** ./components/Nav.tsx ***!
  \****************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");\n/* harmony import */ var _middleware_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/State */ "(app-pages-browser)/./middleware/State.tsx");\n/* harmony import */ var _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/css/main.module.css */ "(app-pages-browser)/./assets/css/main.module.css");\n/* harmony import */ var _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Nav() {\n    _s();\n    const menu = (0,_middleware_State__WEBPACK_IMPORTED_MODULE_1__.useStore)((state)=>state.menu);\n    const setMenu = (0,_middleware_State__WEBPACK_IMPORTED_MODULE_1__.useStore)((state)=>state.setMenu);\n    function toggleMenu(check) {\n        check ? setMenu(false) : setMenu(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        id: "nav",\n        className: "".concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav), " ").concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().flex) - col),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {\n                id: "menu",\n                className: "".concat(menu ? "fa-solid fa-xmark ".concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().bars)) : "fa-solid fa-bars ".concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().bars))),\n                onClick: (e)=>toggleMenu(menu)\n            }, void 0, false, {\n                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {\n                className: menu ? "menu" : "hidden",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {\n                                    children: "Menu"\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    href: "/",\n                                    children: "Home"\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    href: "/aboutMe",\n                                    children: "About Me"\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    href: "/allProjects",\n                                    children: "All Projects"\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {\n                        className: "".concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().flex), " ").concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default()["justify-between"]), " ").concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().social), " icons"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    target: "_blank",\n                                    href: "https://github.com/choir27",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {\n                                        className: "fa-brands fa-github",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                                            className: "hidden",\n                                            children: "My Github"\n                                        }, void 0, false, {\n                                            fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    target: "_blank",\n                                    href: "https://www.linkedin.com/in/richard-choir/",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {\n                                        className: "fa-brands fa-linkedin",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                                            className: "hidden",\n                                            children: "My LinkedIn"\n                                        }, void 0, false, {\n                                            fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    target: "_blank",\n                                    href: "https://docs.google.com/document/d/1Gw7hqvLquVzKwg7fD3sfF1NGvoG0dFRzTI5rR-yEPkw/edit?usp=sharing",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {\n                                        className: "fa-solid fa-file-lines",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                                            className: "hidden",\n                                            children: "My Resume"\n                                        }, void 0, false, {\n                                            fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    target: "_blank",\n                                    href: "https://twitter.com/choir241",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {\n                                        className: "fa-brands fa-twitter",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                                            className: "hidden",\n                                            children: "Twitter"\n                                        }, void 0, false, {\n                                            fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Nav, "TuUHpecXqXGzNKnGBIHzk3Y++AQ=", false, function() {\n    return [\n        _middleware_State__WEBPACK_IMPORTED_MODULE_1__.useStore,\n        _middleware_State__WEBPACK_IMPORTED_MODULE_1__.useStore\n    ];\n});\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, "Nav");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQytDO0FBQ0k7QUFFcEMsU0FBU0U7O0lBQ3RCLE1BQU1DLE9BQU9ILDJEQUFRQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1ELElBQUk7SUFDM0MsTUFBTUUsVUFBVUwsMkRBQVFBLENBQUMsQ0FBQ0ksUUFBVUEsTUFBTUMsT0FBTztJQUVqRCxTQUFTQyxXQUFXQyxLQUFjO1FBQ2hDQSxRQUFRRixRQUFRLFNBQVNBLFFBQVE7SUFDbkM7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsSUFBRztRQUFNQyxXQUFXLEdBQWlCVCxPQUFkQSx3RUFBVSxFQUFDLEtBQW1CLE9BQWhCQSx5RUFBVyxHQUFDWTs7MEJBQ3BELDhEQUFDQztnQkFDQ0wsSUFBRztnQkFDSEMsV0FBVyxHQUFpRixPQUE5RVAsT0FBTyxxQkFBaUMsT0FBWkYseUVBQVcsSUFBSyxvQkFBZ0MsT0FBWkEseUVBQVc7Z0JBQ3pGZSxTQUFTLENBQUNDLElBQU1YLFdBQVdIOzs7Ozs7MEJBRzdCLDhEQUFDUTtnQkFBSUQsV0FBV1AsT0FBTyxTQUFTOztrQ0FDOUIsOERBQUNlOzswQ0FDQyw4REFBQ0M7MENBQ0MsNEVBQUNDOzhDQUFHOzs7Ozs7Ozs7OzswQ0FFTiw4REFBQ0Q7MENBQ0MsNEVBQUNFO29DQUFFWCxXQUFXVCx5RUFBVztvQ0FBRXNCLE1BQUs7OENBQUk7Ozs7Ozs7Ozs7OzBDQUl0Qyw4REFBQ0o7MENBQ0MsNEVBQUNFO29DQUFFWCxXQUFXVCx5RUFBVztvQ0FBRXNCLE1BQUs7OENBQVc7Ozs7Ozs7Ozs7OzBDQUk3Qyw4REFBQ0o7MENBQ0MsNEVBQUNFO29DQUFFWCxXQUFXVCx5RUFBVztvQ0FBRXNCLE1BQUs7OENBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU1uRCw4REFBQ0w7d0JBQ0NSLFdBQVcsR0FBa0JULE9BQWZBLHlFQUFXLEVBQUMsS0FBZ0NBLE9BQTdCQSx1RkFBeUIsRUFBQyxLQUFpQixPQUFkQSwyRUFBYSxFQUFDOzswQ0FFeEUsOERBQUNrQjswQ0FDQyw0RUFBQ0U7b0NBQ0NYLFdBQVdULHlFQUFXO29DQUN0QndCLFFBQU87b0NBQ1BGLE1BQUs7OENBRUwsNEVBQUNHO3dDQUFNaEIsV0FBVTtrREFDZiw0RUFBQ2lCOzRDQUFLakIsV0FBVTtzREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUkvQiw4REFBQ1M7MENBQ0MsNEVBQUNFO29DQUNDWCxXQUFXVCx5RUFBVztvQ0FDdEJ3QixRQUFPO29DQUNQRixNQUFLOzhDQUVMLDRFQUFDRzt3Q0FBTWhCLFdBQVU7a0RBQ2YsNEVBQUNpQjs0Q0FBS2pCLFdBQVU7c0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJL0IsOERBQUNTOzBDQUNDLDRFQUFDRTtvQ0FDQ1gsV0FBV1QseUVBQVc7b0NBQ3RCd0IsUUFBTztvQ0FDUEYsTUFBSzs4Q0FFTCw0RUFBQ0c7d0NBQU1oQixXQUFVO2tEQUNmLDRFQUFDaUI7NENBQUtqQixXQUFVO3NEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSS9CLDhEQUFDUzswQ0FDQyw0RUFBQ0U7b0NBQ0NYLFdBQVdULHlFQUFXO29DQUN0QndCLFFBQU87b0NBQ1BGLE1BQUs7OENBRUwsNEVBQUNHO3dDQUFNaEIsV0FBVTtrREFDZiw0RUFBQ2lCOzRDQUFLakIsV0FBVTtzREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpDO0dBekZ3QlI7O1FBQ1RGLHVEQUFRQTtRQUNMQSx1REFBUUE7OztLQUZGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05hdi50c3g/ZTYzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSBcIi4uL21pZGRsZXdhcmUvU3RhdGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL2Fzc2V0cy9jc3MvbWFpbi5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdigpIHtcbiAgY29uc3QgbWVudSA9IHVzZVN0b3JlKChzdGF0ZSkgPT4gc3RhdGUubWVudSk7XG4gIGNvbnN0IHNldE1lbnUgPSB1c2VTdG9yZSgoc3RhdGUpID0+IHN0YXRlLnNldE1lbnUpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU1lbnUoY2hlY2s6IGJvb2xlYW4pIHtcbiAgICBjaGVjayA/IHNldE1lbnUoZmFsc2UpIDogc2V0TWVudSh0cnVlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cIm5hdlwiIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5hdn0gJHtzdHlsZXMuZmxleC1jb2x9YH0+XG4gICAgICA8aVxuICAgICAgICBpZD1cIm1lbnVcIlxuICAgICAgICBjbGFzc05hbWU9e2Ake21lbnUgPyBgZmEtc29saWQgZmEteG1hcmsgJHtzdHlsZXMuYmFyc31gIDogYGZhLXNvbGlkIGZhLWJhcnMgJHtzdHlsZXMuYmFyc31gfWB9XG4gICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB0b2dnbGVNZW51KG1lbnUpfVxuICAgICAgPjwvaT5cblxuICAgICAgPG5hdiBjbGFzc05hbWU9e21lbnUgPyBcIm1lbnVcIiA6IFwiaGlkZGVuXCJ9PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGgyPk1lbnU8L2gyPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgSG9tZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gaHJlZj1cIi9hYm91dE1lXCI+XG4gICAgICAgICAgICAgIEFib3V0IE1lXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSBocmVmPVwiL2FsbFByb2plY3RzXCI+XG4gICAgICAgICAgICAgIEFsbCBQcm9qZWN0c1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG5cbiAgICAgICAgPHVsXG4gICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZmxleH0gJHtzdHlsZXNbXCJqdXN0aWZ5LWJldHdlZW5cIl19ICR7c3R5bGVzLnNvY2lhbH0gaWNvbnNgfVxuICAgICAgICA+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlua31cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jaG9pcjI3XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZhLWJyYW5kcyBmYS1naXRodWJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW5cIj5NeSBHaXRodWI8L3NwYW4+XG4gICAgICAgICAgICAgIDwvc21hbGw+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saW5rfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL3JpY2hhcmQtY2hvaXIvXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZhLWJyYW5kcyBmYS1saW5rZWRpblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlblwiPk15IExpbmtlZEluPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlua31cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMUd3N2hxdkxxdVZ6S3dnN2ZEM3NmRjFOR3ZvRzBkRlJ6VEk1clIteUVQa3cvZWRpdD91c3A9c2hhcmluZ1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmYS1zb2xpZCBmYS1maWxlLWxpbmVzXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuXCI+TXkgUmVzdW1lPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlua31cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vY2hvaXIyNDFcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZmEtYnJhbmRzIGZhLXR3aXR0ZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW5cIj5Ud2l0dGVyPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdG9yZSIsInN0eWxlcyIsIk5hdiIsIm1lbnUiLCJzdGF0ZSIsInNldE1lbnUiLCJ0b2dnbGVNZW51IiwiY2hlY2siLCJkaXYiLCJpZCIsImNsYXNzTmFtZSIsIm5hdiIsImZsZXgiLCJjb2wiLCJpIiwiYmFycyIsIm9uQ2xpY2siLCJlIiwidWwiLCJsaSIsImgyIiwiYSIsImxpbmsiLCJocmVmIiwic29jaWFsIiwidGFyZ2V0Iiwic21hbGwiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Nav.tsx\n',
        ),
      );

      /***/
    },
});
