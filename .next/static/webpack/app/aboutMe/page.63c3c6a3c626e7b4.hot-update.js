"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/aboutMe/page", {
  /***/ "(app-pages-browser)/./components/Nav.tsx":
    /*!****************************!*\
  !*** ./components/Nav.tsx ***!
  \****************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");\n/* harmony import */ var _middleware_State__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/State */ "(app-pages-browser)/./middleware/State.tsx");\n/* harmony import */ var _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/css/main.module.css */ "(app-pages-browser)/./assets/css/main.module.css");\n/* harmony import */ var _assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Nav() {\n    _s();\n    const menu = (0,_middleware_State__WEBPACK_IMPORTED_MODULE_1__.useStore)((state)=>state.menu);\n    const setMenu = (0,_middleware_State__WEBPACK_IMPORTED_MODULE_1__.useStore)((state)=>state.setMenu);\n    function toggleMenu(check) {\n        check ? setMenu(false) : setMenu(true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        id: "nav",\n        className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {\n                id: "menu",\n                className: "".concat(menu ? "fa-solid fa-xmark ".concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().bars)) : "fa-solid fa-bars ".concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().bars))),\n                onClick: (e)=>toggleMenu(menu)\n            }, void 0, false, {\n                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {\n                className: menu ? "menu" : "hidden",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {\n                                    children: "Menu"\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 20,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 20,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    href: "/",\n                                    children: "Home"\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 21,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 21,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    href: "/aboutMe",\n                                    children: "About Me"\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 22,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 22,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    href: "/allProjects",\n                                    children: "All Projects"\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 23,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 23,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {\n                        className: "".concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().flex), " ").concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default()["justify-between"]), " ").concat((_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().social), " icons"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    target: "_blank",\n                                    href: "https://github.com/choir27",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {\n                                        className: "fa-brands fa-github",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                                            className: "hidden",\n                                            children: "My Github"\n                                        }, void 0, false, {\n                                            fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                            lineNumber: 27,\n                                            columnNumber: 143\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                        lineNumber: 27,\n                                        columnNumber: 102\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 27,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 27,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    target: "_blank",\n                                    href: "https://www.linkedin.com/in/richard-choir/",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {\n                                        className: "fa-brands fa-linkedin",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                                            className: "hidden",\n                                            children: "My LinkedIn"\n                                        }, void 0, false, {\n                                            fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                            lineNumber: 28,\n                                            columnNumber: 161\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                        lineNumber: 28,\n                                        columnNumber: 118\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 28,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 28,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    target: "_blank",\n                                    href: "https://docs.google.com/document/d/1Gw7hqvLquVzKwg7fD3sfF1NGvoG0dFRzTI5rR-yEPkw/edit?usp=sharing",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {\n                                        className: "fa-solid fa-file-lines",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                                            className: "hidden",\n                                            children: "My Resume"\n                                        }, void 0, false, {\n                                            fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                            lineNumber: 29,\n                                            columnNumber: 218\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                        lineNumber: 29,\n                                        columnNumber: 174\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 29,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 29,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                                    className: (_assets_css_main_module_css__WEBPACK_IMPORTED_MODULE_2___default().link),\n                                    target: "_blank",\n                                    href: "https://twitter.com/choir241",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {\n                                        className: "fa-brands fa-twitter",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                                            className: "hidden",\n                                            children: "Twitter"\n                                        }, void 0, false, {\n                                            fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                            lineNumber: 30,\n                                            columnNumber: 144\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                        lineNumber: 30,\n                                        columnNumber: 104\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                    lineNumber: 30,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                                lineNumber: 30,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "C:\\\\Users\\\\richa\\\\OneDrive\\\\Documents\\\\Portfolio\\\\components\\\\Nav.tsx",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(Nav, "TuUHpecXqXGzNKnGBIHzk3Y++AQ=", false, function() {\n    return [\n        _middleware_State__WEBPACK_IMPORTED_MODULE_1__.useStore,\n        _middleware_State__WEBPACK_IMPORTED_MODULE_1__.useStore\n    ];\n});\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, "Nav");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQzRDO0FBQ007QUFFbkMsU0FBU0U7O0lBRXBCLE1BQU1DLE9BQU9ILDJEQUFRQSxDQUFDLENBQUNJLFFBQVFBLE1BQU1ELElBQUk7SUFDekMsTUFBTUUsVUFBVUwsMkRBQVFBLENBQUMsQ0FBQ0ksUUFBUUEsTUFBTUMsT0FBTztJQUVsRCxTQUFTQyxXQUFXQyxLQUFjO1FBQ2pDQSxRQUFRRixRQUFRLFNBQVNBLFFBQVE7SUFDbEM7SUFFRyxxQkFDQSw4REFBQ0c7UUFBSUMsSUFBSTtRQUFNQyxXQUFhVCx3RUFBVTs7MEJBQ2xDLDhEQUFDVztnQkFBRUgsSUFBSztnQkFBT0MsV0FBYSxHQUFnRixPQUE3RVAsT0FBTSxxQkFBaUMsT0FBWkYseUVBQVcsSUFBSyxvQkFBZ0MsT0FBWkEseUVBQVc7Z0JBQU1hLFNBQVcsQ0FBQ0MsSUFBSVQsV0FBV0g7Ozs7OzswQkFFMUksOERBQUNRO2dCQUFJRCxXQUFhUCxPQUFPLFNBQVM7O2tDQUM5Qiw4REFBQ2E7OzBDQUNHLDhEQUFDQzswQ0FBRyw0RUFBQ0M7OENBQUc7Ozs7Ozs7Ozs7OzBDQUNSLDhEQUFDRDswQ0FBRyw0RUFBQ0U7b0NBQUVULFdBQWFULHlFQUFXO29DQUFFb0IsTUFBTzs4Q0FBSTs7Ozs7Ozs7Ozs7MENBQzVDLDhEQUFDSjswQ0FBRyw0RUFBQ0U7b0NBQUVULFdBQWFULHlFQUFXO29DQUFFb0IsTUFBTzs4Q0FBVzs7Ozs7Ozs7Ozs7MENBQ25ELDhEQUFDSjswQ0FBRyw0RUFBQ0U7b0NBQUVULFdBQWFULHlFQUFXO29DQUFFb0IsTUFBTzs4Q0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBRzNELDhEQUFDTDt3QkFBR04sV0FBYSxHQUFrQlQsT0FBZkEseUVBQVcsRUFBQyxLQUFnQ0EsT0FBN0JBLHVGQUF5QixFQUFDLEtBQWlCLE9BQWRBLDJFQUFhLEVBQUM7OzBDQUMxRSw4REFBQ2dCOzBDQUFHLDRFQUFDRTtvQ0FBRVQsV0FBYVQseUVBQVc7b0NBQUV1QixRQUFTO29DQUFTSCxNQUFLOzhDQUE2Qiw0RUFBQ0k7d0NBQU1mLFdBQVk7a0RBQXNCLDRFQUFDZ0I7NENBQUtoQixXQUFZO3NEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBQ3pKLDhEQUFDTzswQ0FBRyw0RUFBQ0U7b0NBQUVULFdBQWFULHlFQUFXO29DQUFFdUIsUUFBUztvQ0FBU0gsTUFBSzs4Q0FBNkMsNEVBQUNJO3dDQUFNZixXQUFZO2tEQUF3Qiw0RUFBQ2dCOzRDQUFLaEIsV0FBWTtzREFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUMzSyw4REFBQ087MENBQUcsNEVBQUNFO29DQUFFVCxXQUFhVCx5RUFBVztvQ0FBRXVCLFFBQVM7b0NBQVNILE1BQU87OENBQW1HLDRFQUFDSTt3Q0FBTWYsV0FBWTtrREFBeUIsNEVBQUNnQjs0Q0FBS2hCLFdBQVk7c0RBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FDcE8sOERBQUNPOzBDQUFHLDRFQUFDRTtvQ0FBRVQsV0FBYVQseUVBQVc7b0NBQUV1QixRQUFTO29DQUFTSCxNQUFLOzhDQUErQiw0RUFBQ0k7d0NBQU1mLFdBQVU7a0RBQXVCLDRFQUFDZ0I7NENBQUtoQixXQUFZO3NEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUs7R0E5QndCUjs7UUFFUEYsdURBQVFBO1FBQ0xBLHVEQUFRQTs7O0tBSEpFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2LnRzeD9lNjMyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7dXNlU3RvcmV9IGZyb20gXCIuLi9taWRkbGV3YXJlL1N0YXRlXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vYXNzZXRzL2Nzcy9tYWluLm1vZHVsZS5jc3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2KCl7XHJcblxyXG4gICAgY29uc3QgbWVudSA9IHVzZVN0b3JlKChzdGF0ZSk9PnN0YXRlLm1lbnUpO1xyXG4gICAgY29uc3Qgc2V0TWVudSA9IHVzZVN0b3JlKChzdGF0ZSk9PnN0YXRlLnNldE1lbnUpO1xyXG5cclxuXHRmdW5jdGlvbiB0b2dnbGVNZW51KGNoZWNrOiBib29sZWFuKXtcclxuXHRcdGNoZWNrID8gc2V0TWVudShmYWxzZSkgOiBzZXRNZW51KHRydWUpO1xyXG5cdH1cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2IGlkID1cIm5hdlwiIGNsYXNzTmFtZSA9IHtzdHlsZXMubmF2fT5cclxuICAgICAgICA8aSBpZCA9IFwibWVudVwiIGNsYXNzTmFtZSA9IHtgJHttZW51PyBgZmEtc29saWQgZmEteG1hcmsgJHtzdHlsZXMuYmFyc31gIDogYGZhLXNvbGlkIGZhLWJhcnMgJHtzdHlsZXMuYmFyc31gfWB9IG9uQ2xpY2sgPSB7KGUpPT50b2dnbGVNZW51KG1lbnUpfT48L2k+XHJcblxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lID0ge21lbnUgPyBcIm1lbnVcIiA6IFwiaGlkZGVuXCJ9PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGgyPk1lbnU8L2gyPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lID0ge3N0eWxlcy5saW5rfSBocmVmID0gXCIvXCI+SG9tZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZSA9IHtzdHlsZXMubGlua30gaHJlZiA9IFwiL2Fib3V0TWVcIj5BYm91dCBNZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZSA9IHtzdHlsZXMubGlua30gaHJlZiA9IFwiL2FsbFByb2plY3RzXCI+QWxsIFByb2plY3RzPC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lID0ge2Ake3N0eWxlcy5mbGV4fSAke3N0eWxlc1tcImp1c3RpZnktYmV0d2VlblwiXX0gJHtzdHlsZXMuc29jaWFsfSBpY29uc2B9PlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZSA9IHtzdHlsZXMubGlua30gdGFyZ2V0ID0gXCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Nob2lyMjdcIj48c21hbGwgY2xhc3NOYW1lID0gXCJmYS1icmFuZHMgZmEtZ2l0aHViXCI+PHNwYW4gY2xhc3NOYW1lID0gXCJoaWRkZW5cIj5NeSBHaXRodWI8L3NwYW4+PC9zbWFsbD48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWUgPSB7c3R5bGVzLmxpbmt9IHRhcmdldCA9IFwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9yaWNoYXJkLWNob2lyL1wiPjxzbWFsbCBjbGFzc05hbWUgPSBcImZhLWJyYW5kcyBmYS1saW5rZWRpblwiPjxzcGFuIGNsYXNzTmFtZSA9IFwiaGlkZGVuXCI+TXkgTGlua2VkSW48L3NwYW4+PC9zbWFsbD48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWUgPSB7c3R5bGVzLmxpbmt9IHRhcmdldCA9IFwiX2JsYW5rXCIgaHJlZiA9IFwiaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xR3c3aHF2THF1VnpLd2c3ZkQzc2ZGMU5Hdm9HMGRGUnpUSTVyUi15RVBrdy9lZGl0P3VzcD1zaGFyaW5nXCI+PHNtYWxsIGNsYXNzTmFtZSA9IFwiZmEtc29saWQgZmEtZmlsZS1saW5lc1wiPjxzcGFuIGNsYXNzTmFtZSA9IFwiaGlkZGVuXCI+TXkgUmVzdW1lPC9zcGFuPjwvc21hbGw+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lID0ge3N0eWxlcy5saW5rfSB0YXJnZXQgPSBcIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2Nob2lyMjQxXCI+PHNtYWxsIGNsYXNzTmFtZT1cImZhLWJyYW5kcyBmYS10d2l0dGVyXCI+PHNwYW4gY2xhc3NOYW1lID0gXCJoaWRkZW5cIj5Ud2l0dGVyPC9zcGFuPjwvc21hbGw+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlU3RvcmUiLCJzdHlsZXMiLCJOYXYiLCJtZW51Iiwic3RhdGUiLCJzZXRNZW51IiwidG9nZ2xlTWVudSIsImNoZWNrIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJuYXYiLCJpIiwiYmFycyIsIm9uQ2xpY2siLCJlIiwidWwiLCJsaSIsImgyIiwiYSIsImxpbmsiLCJocmVmIiwiZmxleCIsInNvY2lhbCIsInRhcmdldCIsInNtYWxsIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Nav.tsx\n',
        ),
      );

      /***/
    },
});
