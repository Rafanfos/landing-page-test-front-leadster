"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./src/app/components/main/videos-section/navigation/Navigation.tsx":
/*!**************************************************************************!*\
  !*** ./src/app/components/main/videos-section/navigation/Navigation.tsx ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_consts_videos_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/consts/videos-list */ \"(app-client)/./src/app/consts/videos-list.ts\");\n/* harmony import */ var _Navigation_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navigation.styles */ \"(app-client)/./src/app/components/main/videos-section/navigation/Navigation.styles.ts\");\n\n\n\nconst Navigation = (param)=>{\n    let { selectedSection, onSectionChange } = param;\n    const handleSectionClick = (section)=>{\n        onSectionChange(section);\n        console.log(section);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: _app_consts_videos_list__WEBPACK_IMPORTED_MODULE_1__.navigationBar.map((param)=>/*#__PURE__*/ {\n                    let { id, title } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: selectedSection === id ? \"active\" : \"\",\n                        onClick: ()=>handleSectionClick(id),\n                        children: title\n                    }, id, false, {\n                        fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/navigation/Navigation.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/navigation/Navigation.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"order\",\n                        children: \"Ordenar por\"\n                    }, void 0, false, {\n                        fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/navigation/Navigation.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        id: \"order\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                children: \"Data de publica\\xe7\\xe3o\"\n                            }, void 0, false, {\n                                fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/navigation/Navigation.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                children: \"Ordem Alfab\\xe9tica\"\n                            }, void 0, false, {\n                                fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/navigation/Navigation.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/navigation/Navigation.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/navigation/Navigation.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/navigation/Navigation.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL21haW4vdmlkZW9zLXNlY3Rpb24vbmF2aWdhdGlvbi9OYXZpZ2F0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUN5RDtBQUNIO0FBT3RELE1BQU1FLGFBQWE7UUFBQyxFQUFFQyxlQUFlLEVBQUVDLGVBQWUsRUFBbUI7SUFDdkUsTUFBTUMscUJBQXFCLENBQUNDO1FBQzFCRixnQkFBZ0JFO1FBQ2hCQyxRQUFRQyxJQUFJRjtJQUNkO0lBRUEscUJBQ0UsOERBQUNMLDBEQUFtQkE7OzBCQUNsQiw4REFBQ1E7MEJBQ0VULGtFQUFhQSxDQUFDVSxJQUFJO3dCQUFDLEVBQUVDLEVBQUUsRUFBRUMsS0FBSyxFQUFFOzJCQUMvQiw4REFBQ0M7d0JBRUNDLFdBQVdYLG9CQUFvQlEsS0FBSyxXQUFXO3dCQUMvQ0ksU0FBUyxJQUFNVixtQkFBbUJNO2tDQUVqQ0M7dUJBSklEOzs7OztnQkFLSDs7Ozs7OzBCQUdSLDhEQUFDSzs7a0NBQ0MsOERBQUNDO3dCQUFNQyxTQUFRO2tDQUFROzs7Ozs7a0NBQ3ZCLDhEQUFDQzt3QkFBT1IsSUFBRzs7MENBQ1QsOERBQUNTOzBDQUFPOzs7Ozs7MENBQ1IsOERBQUNBOzBDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLbEI7S0E1Qk1sQjtBQThCTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvbWFpbi92aWRlb3Mtc2VjdGlvbi9uYXZpZ2F0aW9uL05hdmlnYXRpb24udHN4P2RjYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBuYXZpZ2F0aW9uQmFyIH0gZnJvbSAnQC9hcHAvY29uc3RzL3ZpZGVvcy1saXN0JztcbmltcG9ydCBOYXZpZ2F0aW9uQ29udGFpbmVyIGZyb20gJy4vTmF2aWdhdGlvbi5zdHlsZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25Qcm9wcyB7XG4gIHNlbGVjdGVkU2VjdGlvbjogc3RyaW5nO1xuICBvblNlY3Rpb25DaGFuZ2U6IChzZWN0aW9uOiBzdHJpbmcpID0+IHZvaWQ7XG59XG5cbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBzZWxlY3RlZFNlY3Rpb24sIG9uU2VjdGlvbkNoYW5nZSB9OiBOYXZpZ2F0aW9uUHJvcHMpID0+IHtcbiAgY29uc3QgaGFuZGxlU2VjdGlvbkNsaWNrID0gKHNlY3Rpb246IHN0cmluZykgPT4ge1xuICAgIG9uU2VjdGlvbkNoYW5nZShzZWN0aW9uKTtcbiAgICBjb25zb2xlLmxvZyhzZWN0aW9uKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxOYXZpZ2F0aW9uQ29udGFpbmVyPlxuICAgICAgPHVsPlxuICAgICAgICB7bmF2aWdhdGlvbkJhci5tYXAoKHsgaWQsIHRpdGxlIH0pID0+IChcbiAgICAgICAgICA8bGlcbiAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGVkU2VjdGlvbiA9PT0gaWQgPyAnYWN0aXZlJyA6ICcnfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlU2VjdGlvbkNsaWNrKGlkKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J29yZGVyJz5PcmRlbmFyIHBvcjwvbGFiZWw+XG4gICAgICAgIDxzZWxlY3QgaWQ9J29yZGVyJz5cbiAgICAgICAgICA8b3B0aW9uPkRhdGEgZGUgcHVibGljYcOnw6NvPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbj5PcmRlbSBBbGZhYsOpdGljYTwvb3B0aW9uPlxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvTmF2aWdhdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XG4iXSwibmFtZXMiOlsibmF2aWdhdGlvbkJhciIsIk5hdmlnYXRpb25Db250YWluZXIiLCJOYXZpZ2F0aW9uIiwic2VsZWN0ZWRTZWN0aW9uIiwib25TZWN0aW9uQ2hhbmdlIiwiaGFuZGxlU2VjdGlvbkNsaWNrIiwic2VjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJ1bCIsIm1hcCIsImlkIiwidGl0bGUiLCJsaSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJzZWxlY3QiLCJvcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/main/videos-section/navigation/Navigation.tsx\n"));

/***/ })

});