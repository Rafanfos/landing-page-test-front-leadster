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

/***/ "(app-client)/./src/app/components/main/videos-section/videos-section.tsx":
/*!*******************************************************************!*\
  !*** ./src/app/components/main/videos-section/videos-section.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/Navigation */ \"(app-client)/./src/app/components/main/videos-section/navigation/Navigation.tsx\");\n/* harmony import */ var _videos_section_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videos-section.styles */ \"(app-client)/./src/app/components/main/videos-section/videos-section.styles.ts\");\n/* harmony import */ var _app_consts_videos_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/consts/videos-list */ \"(app-client)/./src/app/consts/videos-list.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst VideosSection = ()=>{\n    _s();\n    const [selectedSection, setSelectedSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_app_consts_videos_list__WEBPACK_IMPORTED_MODULE_4__.navigationBar[0].id);\n    const [videos, setVideos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSectionChange = (section)=>{\n        setSelectedSection(section);\n        if (section === \"leads generation\") {\n            setVideos(_app_consts_videos_list__WEBPACK_IMPORTED_MODULE_4__.leads);\n        } else {\n            setVideos([]);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_videos_section_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                selectedSection: selectedSection,\n                onSectionChange: handleSectionChange\n            }, void 0, false, {\n                fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/videos-section.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: videos.map((video)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: video.title\n                    }, video.id, false, {\n                        fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/videos-section.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/videos-section.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/videos-section.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VideosSection, \"JljGCHXWD/P3FXYxeSgYlQy/1m4=\");\n_c = VideosSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideosSection);\nvar _c;\n$RefreshReg$(_c, \"VideosSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL21haW4vdmlkZW9zLXNlY3Rpb24vdmlkZW9zLXNlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQUNnQjtBQUNZO0FBQ1k7QUFFekUsTUFBTUssZ0JBQWdCOztJQUNwQixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdQLCtDQUFRQSxDQUNwREksa0VBQWEsQ0FBQyxFQUFFLENBQUNJO0lBRW5CLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBWSxFQUFFO0lBRWxELE1BQU1XLHNCQUFzQixDQUFDQztRQUMzQkwsbUJBQW1CSztRQUVuQixJQUFJQSxZQUFZLG9CQUFvQjtZQUNsQ0YsVUFBVVAsMERBQUtBO1FBQ2pCLE9BQU87WUFDTE8sVUFBVSxFQUFFO1FBQ2Q7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUiw4REFBc0JBOzswQkFDckIsOERBQUNELDhEQUFVQTtnQkFDVEssaUJBQWlCQTtnQkFDakJPLGlCQUFpQkY7Ozs7OzswQkFFbkIsOERBQUNHOzBCQUNFTCxPQUFPTSxJQUFJLENBQUNDLHNCQUNYLDhEQUFDQztrQ0FBbUJELE1BQU1FO3VCQUFqQkYsTUFBTVI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLekI7R0E3Qk1IO0tBQUFBO0FBK0JOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL3ZpZGVvcy1zZWN0aW9uL3ZpZGVvcy1zZWN0aW9uLnRzeD9mZTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnLi9uYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xuaW1wb3J0IFZpZGVvc1NlY3Rpb25Db250YWluZXIgZnJvbSAnLi92aWRlb3Mtc2VjdGlvbi5zdHlsZXMnO1xuaW1wb3J0IHsgbGVhZHMsIG5hdmlnYXRpb25CYXIsIElWaWRlb3MgfSBmcm9tICdAL2FwcC9jb25zdHMvdmlkZW9zLWxpc3QnO1xuXG5jb25zdCBWaWRlb3NTZWN0aW9uID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRTZWN0aW9uLCBzZXRTZWxlY3RlZFNlY3Rpb25dID0gdXNlU3RhdGU8c3RyaW5nPihcbiAgICBuYXZpZ2F0aW9uQmFyWzBdLmlkXG4gICk7XG4gIGNvbnN0IFt2aWRlb3MsIHNldFZpZGVvc10gPSB1c2VTdGF0ZTxJVmlkZW9zW10+KFtdKTtcblxuICBjb25zdCBoYW5kbGVTZWN0aW9uQ2hhbmdlID0gKHNlY3Rpb246IHN0cmluZykgPT4ge1xuICAgIHNldFNlbGVjdGVkU2VjdGlvbihzZWN0aW9uKTtcblxuICAgIGlmIChzZWN0aW9uID09PSAnbGVhZHMgZ2VuZXJhdGlvbicpIHtcbiAgICAgIHNldFZpZGVvcyhsZWFkcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFZpZGVvcyhbXSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPFZpZGVvc1NlY3Rpb25Db250YWluZXI+XG4gICAgICA8TmF2aWdhdGlvblxuICAgICAgICBzZWxlY3RlZFNlY3Rpb249e3NlbGVjdGVkU2VjdGlvbn1cbiAgICAgICAgb25TZWN0aW9uQ2hhbmdlPXtoYW5kbGVTZWN0aW9uQ2hhbmdlfVxuICAgICAgLz5cbiAgICAgIDx1bD5cbiAgICAgICAge3ZpZGVvcy5tYXAoKHZpZGVvKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17dmlkZW8uaWR9Pnt2aWRlby50aXRsZX08L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9WaWRlb3NTZWN0aW9uQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW9zU2VjdGlvbjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk5hdmlnYXRpb24iLCJWaWRlb3NTZWN0aW9uQ29udGFpbmVyIiwibGVhZHMiLCJuYXZpZ2F0aW9uQmFyIiwiVmlkZW9zU2VjdGlvbiIsInNlbGVjdGVkU2VjdGlvbiIsInNldFNlbGVjdGVkU2VjdGlvbiIsImlkIiwidmlkZW9zIiwic2V0VmlkZW9zIiwiaGFuZGxlU2VjdGlvbkNoYW5nZSIsInNlY3Rpb24iLCJvblNlY3Rpb25DaGFuZ2UiLCJ1bCIsIm1hcCIsInZpZGVvIiwibGkiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/main/videos-section/videos-section.tsx\n"));

/***/ })

});