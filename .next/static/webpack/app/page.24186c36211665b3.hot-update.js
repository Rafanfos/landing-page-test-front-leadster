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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/Navigation */ \"(app-client)/./src/app/components/main/videos-section/navigation/Navigation.tsx\");\n/* harmony import */ var _videos_section_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./videos-section.styles */ \"(app-client)/./src/app/components/main/videos-section/videos-section.styles.ts\");\n/* harmony import */ var _app_consts_videos_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/consts/videos-list */ \"(app-client)/./src/app/consts/videos-list.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst VideosSection = ()=>{\n    _s();\n    const [selectedSection, setSelectedSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_app_consts_videos_list__WEBPACK_IMPORTED_MODULE_4__.navigationBar[0].id);\n    const [videos, setVideos] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSectionChange = (section)=>{\n        setSelectedSection(section);\n        // Update the videos array based on the selected section\n        if (section === \"generations leads\") {\n            setVideos([\n                leads\n            ]); // Empty array for illustration purposes\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_videos_section_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navigation_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                selectedSection: selectedSection,\n                onSectionChange: handleSectionChange\n            }, void 0, false, {\n                fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/videos-section.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: videos.map((video)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: video.title\n                    }, video.id, false, {\n                        fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/videos-section.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/videos-section.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/rafael/Documentos/projetos/landing-page-test-front-leadster/src/app/components/main/videos-section/videos-section.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(VideosSection, \"JljGCHXWD/P3FXYxeSgYlQy/1m4=\");\n_c = VideosSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VideosSection);\nvar _c;\n$RefreshReg$(_c, \"VideosSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9jb21wb25lbnRzL21haW4vdmlkZW9zLXNlY3Rpb24vdmlkZW9zLXNlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpQztBQUNnQjtBQUNZO0FBQ0o7QUFFekQsTUFBTUksZ0JBQWdCOztJQUNwQixNQUFNLENBQUNDLGlCQUFpQkMsbUJBQW1CLEdBQUdOLCtDQUFRQSxDQUFDRyxrRUFBYSxDQUFDLEVBQUUsQ0FBQ0k7SUFDeEUsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFdkMsTUFBTVUsc0JBQXNCLENBQUNDO1FBQzNCTCxtQkFBbUJLO1FBQ25CLHdEQUF3RDtRQUN4RCxJQUFJQSxZQUFZLHFCQUFxQjtZQUNuQ0YsVUFBVTtnQkFBQ0c7YUFBTSxHQUFHLHdDQUF3QztRQUM5RDtJQUNGO0lBRUEscUJBQ0UsOERBQUNWLDhEQUFzQkE7OzBCQUNyQiw4REFBQ0QsOERBQVVBO2dCQUNUSSxpQkFBaUJBO2dCQUNqQlEsaUJBQWlCSDs7Ozs7OzBCQUVuQiw4REFBQ0k7MEJBRUVOLE9BQU9PLElBQUksQ0FBQ0Msc0JBQ1gsOERBQUNDO2tDQUFtQkQsTUFBTUU7dUJBQWpCRixNQUFNVDs7Ozs7Ozs7Ozs7Ozs7OztBQUt6QjtHQTFCTUg7S0FBQUE7QUE0Qk4sK0RBQWVBLGFBQWFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL21haW4vdmlkZW9zLXNlY3Rpb24vdmlkZW9zLXNlY3Rpb24udHN4P2ZlMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuL25hdmlnYXRpb24vTmF2aWdhdGlvbic7XG5pbXBvcnQgVmlkZW9zU2VjdGlvbkNvbnRhaW5lciBmcm9tICcuL3ZpZGVvcy1zZWN0aW9uLnN0eWxlcyc7XG5pbXBvcnQgeyBuYXZpZ2F0aW9uQmFyIH0gZnJvbSAnQC9hcHAvY29uc3RzL3ZpZGVvcy1saXN0JztcblxuY29uc3QgVmlkZW9zU2VjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkU2VjdGlvbiwgc2V0U2VsZWN0ZWRTZWN0aW9uXSA9IHVzZVN0YXRlKG5hdmlnYXRpb25CYXJbMF0uaWQpO1xuICBjb25zdCBbdmlkZW9zLCBzZXRWaWRlb3NdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IGhhbmRsZVNlY3Rpb25DaGFuZ2UgPSAoc2VjdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRTZWN0aW9uKHNlY3Rpb24pO1xuICAgIC8vIFVwZGF0ZSB0aGUgdmlkZW9zIGFycmF5IGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBzZWN0aW9uXG4gICAgaWYgKHNlY3Rpb24gPT09ICdnZW5lcmF0aW9ucyBsZWFkcycpIHtcbiAgICAgIHNldFZpZGVvcyhbbGVhZHNdKTsgLy8gRW1wdHkgYXJyYXkgZm9yIGlsbHVzdHJhdGlvbiBwdXJwb3Nlc1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxWaWRlb3NTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPE5hdmlnYXRpb25cbiAgICAgICAgc2VsZWN0ZWRTZWN0aW9uPXtzZWxlY3RlZFNlY3Rpb259XG4gICAgICAgIG9uU2VjdGlvbkNoYW5nZT17aGFuZGxlU2VjdGlvbkNoYW5nZX1cbiAgICAgIC8+XG4gICAgICA8dWw+XG4gICAgICAgIHsvKiBSZW5kZXIgdmlkZW9zIGJhc2VkIG9uIHRoZSBzZWxlY3RlZCBzZWN0aW9uICovfVxuICAgICAgICB7dmlkZW9zLm1hcCgodmlkZW8pID0+IChcbiAgICAgICAgICA8bGkga2V5PXt2aWRlby5pZH0+e3ZpZGVvLnRpdGxlfTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L1ZpZGVvc1NlY3Rpb25Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlb3NTZWN0aW9uO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTmF2aWdhdGlvbiIsIlZpZGVvc1NlY3Rpb25Db250YWluZXIiLCJuYXZpZ2F0aW9uQmFyIiwiVmlkZW9zU2VjdGlvbiIsInNlbGVjdGVkU2VjdGlvbiIsInNldFNlbGVjdGVkU2VjdGlvbiIsImlkIiwidmlkZW9zIiwic2V0VmlkZW9zIiwiaGFuZGxlU2VjdGlvbkNoYW5nZSIsInNlY3Rpb24iLCJsZWFkcyIsIm9uU2VjdGlvbkNoYW5nZSIsInVsIiwibWFwIiwidmlkZW8iLCJsaSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/components/main/videos-section/videos-section.tsx\n"));

/***/ })

});