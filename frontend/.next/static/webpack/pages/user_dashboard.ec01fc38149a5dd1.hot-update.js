"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/user_dashboard",{

/***/ "./pages/user_dashboard.js":
/*!*********************************!*\
  !*** ./pages/user_dashboard.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_authlog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/authlog */ \"./context/authlog.js\");\n/* harmony import */ var _privacy_user_dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../privacy/user_dashboard */ \"./privacy/user_dashboard.js\");\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_authlog__WEBPACK_IMPORTED_MODULE_2__.UserContext), state = ref[0], setstate = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_privacy_user_dashboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"col\",\n                    children: [\n                        \"JSON.stringify(state) }\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \" dashboard \"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\user_dashboard.js\",\n                            lineNumber: 17,\n                            columnNumber: 9\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\user_dashboard.js\",\n                    lineNumber: 13,\n                    columnNumber: 10\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\user_dashboard.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\user_dashboard.js\",\n            lineNumber: 11,\n            columnNumber: 8\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\user_dashboard.js\",\n        lineNumber: 8,\n        columnNumber: 8\n    }, _this));\n};\n_s(Home, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VyX2Rhc2hib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFrQztBQUNjO0FBQ0s7OztBQUNyRCxHQUFLLENBQUNHLElBQUksR0FBQyxRQUNYLEdBRGdCLENBQUM7O0lBQ2YsR0FBSyxDQUFrQkgsR0FBdUIsR0FBdkJBLGlEQUFVLENBQUNDLHlEQUFXLEdBQXRDRyxLQUFLLEdBQVdKLEdBQXVCLEtBQWpDSyxRQUFRLEdBQUVMLEdBQXVCO0lBRTlDLE1BQU0sNkVBQ0NFLCtEQUFXOzhGQUdaSSxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFXO2tHQUN4QkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQUs7c0dBQ2xCRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBSzs7d0JBQUMsQ0FJdEI7b0dBQUNDLENBQUU7c0NBQUMsQ0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3ZCLENBQUM7R0F0QktMLElBQUk7S0FBSkEsSUFBSTtBQXdCViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VyX2Rhc2hib2FyZC5qcz80Y2M2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9hdXRobG9nXCI7XHJcbmltcG9ydCAgIE5ld1Byb3ZpZGVyIGZyb20gJy4uL3ByaXZhY3kvdXNlcl9kYXNoYm9hcmQnXHJcbmNvbnN0IEhvbWU9KCk9PiB7XHJcbiAgY29uc3QgW3N0YXRlLHNldHN0YXRlXT11c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAgICAgXHJcbiAgcmV0dXJuIChcclxuICAgICAgIDwgTmV3UHJvdmlkZXI+XHJcblxyXG4gICAgICAgXHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICBcclxuICAgICAgICAgICBKU09OLnN0cmluZ2lmeShzdGF0ZSlcclxuICAgICAgICAgfVxyXG4gICAgICAgIDxoMT4gZGFzaGJvYXJkIDwvaDE+ICBcclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gPC8gTmV3UHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsIk5ld1Byb3ZpZGVyIiwiSG9tZSIsInN0YXRlIiwic2V0c3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/user_dashboard.js\n");

/***/ })

});