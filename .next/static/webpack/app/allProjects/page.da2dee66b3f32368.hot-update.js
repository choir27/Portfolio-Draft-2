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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");\n/* harmony import */ var _middleware_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/State */ "(app-pages-browser)/./middleware/State.tsx");\n/* harmony import */ var _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/css/main.module.css */ "(app-pages-browser)/./assets/css/main.module.css");\n/* harmony import */ var _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Nav() {\n    _s();\n    const menu = (0,_middleware_State__WEBPACK_IMPORTED_MODULE_1__.useStore)((state)=>state.menu);\n    const setMenu = (0,_middleware_State__WEBPACK_IMPORTED_MODULE_1__.useStore)((state)=>state.setMenu);\n    function toggleMenu(check) {\n        check ? setMenu(false) : setMenu(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        id: "nav",\n        className: "".concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav), " ").concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().flex_col), " ").concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default()["align-center"])),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {\n                id: "menu",\n                className: "".concat(menu ? "fa-solid fa-xmark ".concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().bars)) : "fa-solid fa-bars ".concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().bars))),\n                onClick: (e)=>toggleMenu(menu)\n            }, void 0, false, {\n                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {\n                className: menu ? "menu" : "hidden",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {\n                                    children: "Menu"\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 24,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 23,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    href: "/",\n                                    children: "Home"\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    href: "/aboutMe",\n                                    children: "About Me"\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    href: "/allProjects",\n                                    children: "All Projects"\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {\n                        className: "".concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().flex), " ").concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default()["justify-between"]), " ").concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().social), " icons"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    target: "_blank",\n                                    href: "https://github.com/choir27",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {\n                                        className: "fa-brands fa-github",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                                            className: "hidden",\n                                            children: "My Github"\n                                        }, void 0, false, {\n                                            fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 47,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    target: "_blank",\n                                    href: "https://www.linkedin.com/in/richard-choir/",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {\n                                        className: "fa-brands fa-linkedin",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                                            className: "hidden",\n                                            children: "My LinkedIn"\n                                        }, void 0, false, {\n                                            fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    target: "_blank",\n                                    href: "https://docs.google.com/document/d/1Gw7hqvLquVzKwg7fD3sfF1NGvoG0dFRzTI5rR-yEPkw/edit?usp=sharing",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {\n                                        className: "fa-solid fa-file-lines",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                                            className: "hidden",\n                                            children: "My Resume"\n                                        }, void 0, false, {\n                                            fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 69,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    target: "_blank",\n                                    href: "https://twitter.com/choir241",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {\n                                        className: "fa-brands fa-twitter",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                                            className: "hidden",\n                                            children: "Twitter"\n                                        }, void 0, false, {\n                                            fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                            lineNumber: 86,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 80,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 79,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(Nav, "TuUHpecXqXGzNKnGBIHzk3Y++AQ=", false, function() {\n    return [\n        _middleware_State__WEBPACK_IMPORTED_MODULE_1__.useStore,\n        _middleware_State__WEBPACK_IMPORTED_MODULE_1__.useStore\n    ];\n});\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, "Nav");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQytDO0FBQ0k7QUFFcEMsU0FBU0U7O0lBQ3RCLE1BQU1DLE9BQU9ILDJEQUFRQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1ELElBQUk7SUFDM0MsTUFBTUUsVUFBVUwsMkRBQVFBLENBQUMsQ0FBQ0ksUUFBVUEsTUFBTUMsT0FBTztJQUVqRCxTQUFTQyxXQUFXQyxLQUFjO1FBQ2hDQSxRQUFRRixRQUFRLFNBQVNBLFFBQVE7SUFDbkM7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsSUFBRztRQUFNQyxXQUFXLEdBQWlCVCxPQUFkQSx3RUFBVSxFQUFDLEtBQXNCQSxPQUFuQkEsNkVBQWUsRUFBQyxLQUEwQixPQUF2QkEsb0ZBQXNCOzswQkFDakYsOERBQUNZO2dCQUNDSixJQUFHO2dCQUNIQyxXQUFXLEdBQWlGLE9BQTlFUCxPQUFPLHFCQUFpQyxPQUFaRix5RUFBVyxJQUFLLG9CQUFnQyxPQUFaQSx5RUFBVztnQkFDekZjLFNBQVMsQ0FBQ0MsSUFBTVYsV0FBV0g7Ozs7OzswQkFHN0IsOERBQUNRO2dCQUFJRCxXQUFXUCxPQUFPLFNBQVM7O2tDQUM5Qiw4REFBQ2M7OzBDQUNDLDhEQUFDQzswQ0FDQyw0RUFBQ0M7OENBQUc7Ozs7Ozs7Ozs7OzBDQUVOLDhEQUFDRDswQ0FDQyw0RUFBQ0U7b0NBQUVWLFdBQVdULHlFQUFXO29DQUFFcUIsTUFBSzs4Q0FBSTs7Ozs7Ozs7Ozs7MENBSXRDLDhEQUFDSjswQ0FDQyw0RUFBQ0U7b0NBQUVWLFdBQVdULHlFQUFXO29DQUFFcUIsTUFBSzs4Q0FBVzs7Ozs7Ozs7Ozs7MENBSTdDLDhEQUFDSjswQ0FDQyw0RUFBQ0U7b0NBQUVWLFdBQVdULHlFQUFXO29DQUFFcUIsTUFBSzs4Q0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTW5ELDhEQUFDTDt3QkFDQ1AsV0FBVyxHQUFrQlQsT0FBZkEseUVBQVcsRUFBQyxLQUFnQ0EsT0FBN0JBLHVGQUF5QixFQUFDLEtBQWlCLE9BQWRBLDJFQUFhLEVBQUM7OzBDQUV4RSw4REFBQ2lCOzBDQUNDLDRFQUFDRTtvQ0FDQ1YsV0FBV1QseUVBQVc7b0NBQ3RCd0IsUUFBTztvQ0FDUEgsTUFBSzs4Q0FFTCw0RUFBQ0k7d0NBQU1oQixXQUFVO2tEQUNmLDRFQUFDaUI7NENBQUtqQixXQUFVO3NEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBSS9CLDhEQUFDUTswQ0FDQyw0RUFBQ0U7b0NBQ0NWLFdBQVdULHlFQUFXO29DQUN0QndCLFFBQU87b0NBQ1BILE1BQUs7OENBRUwsNEVBQUNJO3dDQUFNaEIsV0FBVTtrREFDZiw0RUFBQ2lCOzRDQUFLakIsV0FBVTtzREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUkvQiw4REFBQ1E7MENBQ0MsNEVBQUNFO29DQUNDVixXQUFXVCx5RUFBVztvQ0FDdEJ3QixRQUFPO29DQUNQSCxNQUFLOzhDQUVMLDRFQUFDSTt3Q0FBTWhCLFdBQVU7a0RBQ2YsNEVBQUNpQjs0Q0FBS2pCLFdBQVU7c0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FJL0IsOERBQUNROzBDQUNDLDRFQUFDRTtvQ0FDQ1YsV0FBV1QseUVBQVc7b0NBQ3RCd0IsUUFBTztvQ0FDUEgsTUFBSzs4Q0FFTCw0RUFBQ0k7d0NBQU1oQixXQUFVO2tEQUNmLDRFQUFDaUI7NENBQUtqQixXQUFVO3NEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekM7R0F6RndCUjs7UUFDVEYsdURBQVFBO1FBQ0xBLHVEQUFRQTs7O0tBRkZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LnRzeD9lNjMyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tIFwiLi4vbWlkZGxld2FyZS9TdGF0ZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vYXNzZXRzL2Nzcy9tYWluLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCkge1xuICBjb25zdCBtZW51ID0gdXNlU3RvcmUoKHN0YXRlKSA9PiBzdGF0ZS5tZW51KTtcbiAgY29uc3Qgc2V0TWVudSA9IHVzZVN0b3JlKChzdGF0ZSkgPT4gc3RhdGUuc2V0TWVudSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTWVudShjaGVjazogYm9vbGVhbikge1xuICAgIGNoZWNrID8gc2V0TWVudShmYWxzZSkgOiBzZXRNZW51KHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwibmF2XCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmF2fSAke3N0eWxlcy5mbGV4X2NvbH0gJHtzdHlsZXNbJ2FsaWduLWNlbnRlciddfWB9PlxuICAgICAgPGlcbiAgICAgICAgaWQ9XCJtZW51XCJcbiAgICAgICAgY2xhc3NOYW1lPXtgJHttZW51ID8gYGZhLXNvbGlkIGZhLXhtYXJrICR7c3R5bGVzLmJhcnN9YCA6IGBmYS1zb2xpZCBmYS1iYXJzICR7c3R5bGVzLmJhcnN9YH1gfVxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdG9nZ2xlTWVudShtZW51KX1cbiAgICAgID48L2k+XG5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXttZW51ID8gXCJtZW51XCIgOiBcImhpZGRlblwifT5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxoMj5NZW51PC9oMj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IGhyZWY9XCIvYWJvdXRNZVwiPlxuICAgICAgICAgICAgICBBYm91dCBNZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30gaHJlZj1cIi9hbGxQcm9qZWN0c1wiPlxuICAgICAgICAgICAgICBBbGwgUHJvamVjdHNcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDx1bFxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmZsZXh9ICR7c3R5bGVzW1wianVzdGlmeS1iZXR3ZWVuXCJdfSAke3N0eWxlcy5zb2NpYWx9IGljb25zYH1cbiAgICAgICAgPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY2hvaXIyN1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmYS1icmFuZHMgZmEtZ2l0aHViXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuXCI+TXkgR2l0aHViPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubGlua31cbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9yaWNoYXJkLWNob2lyL1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJmYS1icmFuZHMgZmEtbGlua2VkaW5cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW5cIj5NeSBMaW5rZWRJbjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9kb2N1bWVudC9kLzFHdzdocXZMcXVWekt3ZzdmRDNzZkYxTkd2b0cwZEZSelRJNXJSLXlFUGt3L2VkaXQ/dXNwPXNoYXJpbmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiZmEtc29saWQgZmEtZmlsZS1saW5lc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhpZGRlblwiPk15IFJlc3VtZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2Nob2lyMjQxXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImZhLWJyYW5kcyBmYS10d2l0dGVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuXCI+VHdpdHRlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RvcmUiLCJzdHlsZXMiLCJOYXYiLCJtZW51Iiwic3RhdGUiLCJzZXRNZW51IiwidG9nZ2xlTWVudSIsImNoZWNrIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJuYXYiLCJmbGV4X2NvbCIsImkiLCJiYXJzIiwib25DbGljayIsImUiLCJ1bCIsImxpIiwiaDIiLCJhIiwibGluayIsImhyZWYiLCJmbGV4Iiwic29jaWFsIiwidGFyZ2V0Iiwic21hbGwiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Nav.tsx\n',
        ),
      );

      /***/
    },
});
