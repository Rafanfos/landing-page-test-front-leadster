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

/***/ "(app-client)/./src/app/components/main/videos-section/pagination/Pagination.tsx":
/*!**************************************************************************!*\
  !*** ./src/app/components/main/videos-section/pagination/Pagination.tsx ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Pagination_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pagination.styles */ \"(app-client)/./src/app/components/main/videos-section/pagination/Pagination.styles.ts\");\n\nvar _s = $RefreshSig$();\n\n\nconst Pagination = (param)=>{\n    let { videos, currentPage, setCurrentPage } = param;\n    _s();\n    const [pages, setPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _videos_;\n        const pagesQuantity = ((_videos_ = videos[videos.length - 1]) === null || _videos_ === void 0 ? void 0 : _videos_.page) || 0;\n        const updatedPages = Array.from({\n            length: pagesQuantity\n        }, (_, index)=>({\n                page: index + 1,\n                id: index\n            }));\n        setPages(updatedPages);\n    }, [\n        videos\n    ]);\n    const handlePageClick = (page)=>{\n        setCurrentPage(page);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Pagination_styles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"P\\xe1gina\"\n            }, void 0, false, {\n                fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/pagination/Pagination.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: pages.map((param)=>/*#__PURE__*/ {\n                    let { id, page } = param;\n                    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"page === currentPage : active ? ''\",\n                        onClick: ()=>handlePageClick(page),\n                        children: page\n                    }, id, false, {\n                        fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/pagination/Pagination.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/pagination/Pagination.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/pagination/Pagination.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Pagination, \"OZdSfBS7sFhYlewtmEOlG7gcNNI=\");\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL21haW4vdmlkZW9zLXNlY3Rpb24vcGFnaW5hdGlvbi9QYWdpbmF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNFO0FBRWhCO0FBUXRELE1BQU1HLGFBQWE7UUFBQyxFQUNsQkMsTUFBTSxFQUNOQyxXQUFXLEVBQ1hDLGNBQWMsRUFDRTs7SUFDaEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFpQyxFQUFFO0lBRXJFRCxnREFBU0EsQ0FBQztZQUNjSTtRQUF0QixNQUFNSyxnQkFBZ0JMLENBQUFBLENBQUFBLFdBQUFBLE1BQU0sQ0FBQ0EsT0FBT00sU0FBUyxFQUFFLGNBQXpCTixzQkFBQUEsS0FBQUEsSUFBQUEsU0FBMkJPLElBQUcsS0FBSztRQUN6RCxNQUFNQyxlQUFlQyxNQUFNQyxLQUFLO1lBQUVKLFFBQVFEO1FBQWMsR0FBRyxDQUFDTSxHQUFHQyxRQUFXO2dCQUN4RUwsTUFBTUssUUFBUTtnQkFDZEMsSUFBSUQ7WUFDTjtRQUNBUixTQUFTSTtJQUNYLEdBQUc7UUFBQ1I7S0FBTztJQUVYLE1BQU1jLGtCQUFrQixDQUFDUDtRQUN2QkwsZUFBZUs7SUFDakI7SUFFQSxxQkFDRSw4REFBQ1QsMERBQW1CQTs7MEJBQ2xCLDhEQUFDaUI7MEJBQUs7Ozs7OzswQkFDTiw4REFBQ0M7MEJBQ0ViLE1BQU1jLElBQUk7d0JBQUMsRUFBRUosRUFBRSxFQUFFTixJQUFJLEVBQUU7MkJBQ3RCLDhEQUFDVzt3QkFDQ0MsV0FBVTt3QkFFVkMsU0FBUyxJQUFNTixnQkFBZ0JQO2tDQUU5QkE7dUJBSElNOzs7OztnQkFJSDs7Ozs7Ozs7Ozs7O0FBS2Q7R0FwQ01kO0tBQUFBO0FBc0NOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL3ZpZGVvcy1zZWN0aW9uL3BhZ2luYXRpb24vUGFnaW5hdGlvbi50c3g/MWM0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJVmlkZW9zIH0gZnJvbSAnQC9hcHAvY29uc3RzL3ZpZGVvcy1saXN0JztcbmltcG9ydCBQYWdpbmF0aW9uQ29udGFpbmVyIGZyb20gJy4vUGFnaW5hdGlvbi5zdHlsZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25Qcm9wcyB7XG4gIHZpZGVvczogSVZpZGVvc1tdO1xuICBjdXJyZW50UGFnZTogbnVtYmVyO1xuICBzZXRDdXJyZW50UGFnZTogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248bnVtYmVyPj47XG59XG5cbmNvbnN0IFBhZ2luYXRpb24gPSAoe1xuICB2aWRlb3MsXG4gIGN1cnJlbnRQYWdlLFxuICBzZXRDdXJyZW50UGFnZSxcbn06IFBhZ2luYXRpb25Qcm9wcykgPT4ge1xuICBjb25zdCBbcGFnZXMsIHNldFBhZ2VzXSA9IHVzZVN0YXRlPHsgcGFnZTogbnVtYmVyOyBpZDogbnVtYmVyIH1bXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcGFnZXNRdWFudGl0eSA9IHZpZGVvc1t2aWRlb3MubGVuZ3RoIC0gMV0/LnBhZ2UgfHwgMDtcbiAgICBjb25zdCB1cGRhdGVkUGFnZXMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiBwYWdlc1F1YW50aXR5IH0sIChfLCBpbmRleCkgPT4gKHtcbiAgICAgIHBhZ2U6IGluZGV4ICsgMSxcbiAgICAgIGlkOiBpbmRleCxcbiAgICB9KSk7XG4gICAgc2V0UGFnZXModXBkYXRlZFBhZ2VzKTtcbiAgfSwgW3ZpZGVvc10pO1xuXG4gIGNvbnN0IGhhbmRsZVBhZ2VDbGljayA9IChwYWdlOiBudW1iZXIpID0+IHtcbiAgICBzZXRDdXJyZW50UGFnZShwYWdlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQYWdpbmF0aW9uQ29udGFpbmVyPlxuICAgICAgPHNwYW4+UMOhZ2luYTwvc3Bhbj5cbiAgICAgIDx1bD5cbiAgICAgICAge3BhZ2VzLm1hcCgoeyBpZCwgcGFnZSB9KSA9PiAoXG4gICAgICAgICAgPGxpXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlID09PSBjdXJyZW50UGFnZSA6IGFjdGl2ZSA/ICcnXCJcbiAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQYWdlQ2xpY2socGFnZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3BhZ2V9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvUGFnaW5hdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQYWdpbmF0aW9uQ29udGFpbmVyIiwiUGFnaW5hdGlvbiIsInZpZGVvcyIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJwYWdlcyIsInNldFBhZ2VzIiwicGFnZXNRdWFudGl0eSIsImxlbmd0aCIsInBhZ2UiLCJ1cGRhdGVkUGFnZXMiLCJBcnJheSIsImZyb20iLCJfIiwiaW5kZXgiLCJpZCIsImhhbmRsZVBhZ2VDbGljayIsInNwYW4iLCJ1bCIsIm1hcCIsImxpIiwiY2xhc3NOYW1lIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/main/videos-section/pagination/Pagination.tsx\n"));

/***/ })

});