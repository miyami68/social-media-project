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

/***/ "./privacy/user_dashboard.js":
/*!***********************************!*\
  !*** ./privacy/user_dashboard.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _context_authlog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/authlog */ \"./context/authlog.js\");\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UserRoute = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ok = ref[0], setOk = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_authlog__WEBPACK_IMPORTED_MODULE_5__.UserContext), state = ref1[0];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (state && state.token) getCurrentUser();\n    }, [\n        state && state.token\n    ]);\n    var getCurrentUser = function() {\n        var _ref = _asyncToGenerator(D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"\".concat(\"http://localhost:5000/api\", \"/current_user\"), {\n                            headers: {\n                                Authorization: \"Bearers \".concat(state.token)\n                            }\n                        });\n                    case 3:\n                        data = _ctx.sent.data;\n                        console.log(\"DATA getCurrent_user\", data);\n                        if (data) setOk(true);\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        router.push(\"/login\");\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function getCurrentUser() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n     true && (!state || !state.token) && setTimeout(function() {\n        getCurrentUser();\n    }, 1000);\n    return !ok ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.SyncOutlined, {\n        spin: true,\n        className: \"d-flex justify-content-center display-1 text-primary p-5\"\n    }, void 0, false, {\n        fileName: \"D:\\\\socialmedia\\\\frontend\\\\privacy\\\\user_dashboard.js\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: children\n    }, void 0, false);\n};\n_s(UserRoute, \"vvndkmmTgUZGTWJhHxqqVbyM5o0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = UserRoute;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserRoute);\nvar _c;\n$RefreshReg$(_c, \"UserRoute\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcml2YWN5L3VzZXJfZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUM5QjtBQUNjO0FBQ1M7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEQsR0FBSyxDQUFDTyxTQUFTLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDM0IsR0FBSyxDQUFlUCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUEzQlEsRUFBRSxHQUFXUixHQUFlLEtBQXhCUyxLQUFLLEdBQUlULEdBQWU7SUFFbkMsR0FBSyxDQUFDVSxNQUFNLEdBQUdQLHNEQUFTO0lBQ3hCLEdBQUssQ0FBV0YsSUFBdUIsR0FBdkJBLGlEQUFVLENBQUNJLHlEQUFXLEdBQS9CTSxLQUFLLEdBQUlWLElBQXVCO0lBRXZDRixnREFBUyxDQUFDLFFBQVEsR0FBRixDQUFDO1FBQ2YsRUFBRSxFQUFFWSxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBSyxFQUFFQyxjQUFjO0lBQzFDLENBQUMsRUFBRSxDQUFDRjtRQUFBQSxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FBSztJQUFBLENBQUM7SUFFekIsR0FBSyxDQUFDQyxjQUFjO3VLQUFHLFFBQVEsV0FBSSxDQUFDO2dCQU0xQkMsSUFBSTs7Ozs7OytCQUFXWixnREFBUyxDQUFFLEdBQThCLE1BQWEsQ0FBekNjLDJCQUEyQixFQUFDLENBQWEsaUJBQUcsQ0FBQzs0QkFDN0VHLE9BQU8sRUFBQyxDQUFDO2dDQUNQQyxhQUFhLEVBQUUsQ0FBUSxVQUFjLE9BQVpULEtBQUssQ0FBQ0MsS0FBSzs0QkFDdEMsQ0FBQzt3QkFDSCxDQUFDOzt3QkFKS0UsSUFBSSxhQUFKQSxJQUFJO3dCQUtWTyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFzQix1QkFBRVIsSUFBSTt3QkFDeEMsRUFBRSxFQUFFQSxJQUFJLEVBQUVMLEtBQUssQ0FBQyxJQUFJOzs7Ozs7d0JBRXBCQyxNQUFNLENBQUNhLElBQUksQ0FBQyxDQUFROzs7Ozs7Ozs7OztRQUV4QixDQUFDO3dCQWhCS1YsY0FBYzs7OztJQWtCcEJHLEtBQWUsTUFDWEwsS0FBSyxLQUFLQSxLQUFLLENBQUNDLEtBQUssS0FDdkJhLFVBQVUsQ0FBQyxRQUFRLEdBQUYsQ0FBQztRQUNoQlosY0FBYztJQUNoQixDQUFDLEVBQUUsSUFBSTtJQUVULE1BQU0sRUFBRUwsRUFBRSwrRUFDUEosMkRBQVk7UUFDWHNCLElBQUk7UUFDSkMsU0FBUyxFQUFDLENBQTBEOzs7Ozs7a0JBR25FcEIsUUFBUTs7QUFFZixDQUFDO0dBMUNLRCxTQUFTOztRQUdFSCxrREFBUzs7O0tBSHBCRyxTQUFTO0FBNENmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJpdmFjeS91c2VyX2Rhc2hib2FyZC5qcz9hNzQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgU3luY091dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvYXV0aGxvZ1wiO1xyXG5cclxuY29uc3QgVXNlclJvdXRlID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtvaywgc2V0T2tdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbc3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc3RhdGUgJiYgc3RhdGUudG9rZW4pIGdldEN1cnJlbnRVc2VyKCk7XHJcbiAgfSwgW3N0YXRlICYmIHN0YXRlLnRva2VuXSk7XHJcblxyXG4gIGNvbnN0IGdldEN1cnJlbnRVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gbWFrZSBzdXJlIHRvIHNlbmQgdG9rZW4gaW4gaGVhZGVyc1xyXG4gICAgICAvLyBlbHNlIHlvdSB3aWxsIHNlZSBmbGlja2VyaW5nIHBhZ2Ugd2l0aCBub24tc3RvcCBhcGkgcmVxdWVzdHNcclxuICAgICAgLy8gYmVjYXVzZSBob21lIHBhZ2UgaXMgdHJ5aW5nIHRvIHJlZGlyZWN0IHRvIGxvZ2luXHJcbiAgICAgIC8vIGxvZ2luIHdpbGwgcmVkaXJlY3QgYmFjayB0byBob21lIGJlY2F1c2UgdXNlciBpcyBsb2dnZWQgaW5cclxuICAgICAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSX0vY3VycmVudF91c2VyYCwge1xyXG4gICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjpgQmVhcmVycyAke3N0YXRlLnRva2VufWBcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRBVEEgZ2V0Q3VycmVudF91c2VyXCIsIGRhdGEpO1xyXG4gICAgICBpZiAoZGF0YSkgc2V0T2sodHJ1ZSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcHJvY2Vzcy5icm93c2VyICYmXHJcbiAgICAoIXN0YXRlIHx8ICFzdGF0ZS50b2tlbikgJiZcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBnZXRDdXJyZW50VXNlcigpO1xyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gIHJldHVybiAhb2sgPyAoXHJcbiAgICA8U3luY091dGxpbmVkXHJcbiAgICAgIHNwaW5cclxuICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgZGlzcGxheS0xIHRleHQtcHJpbWFyeSBwLTVcIlxyXG4gICAgLz5cclxuICApIDogKFxyXG4gICAgPD57Y2hpbGRyZW59PC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJSb3V0ZTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VDb250ZXh0IiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJTeW5jT3V0bGluZWQiLCJVc2VyQ29udGV4dCIsIlVzZXJSb3V0ZSIsImNoaWxkcmVuIiwib2siLCJzZXRPayIsInJvdXRlciIsInN0YXRlIiwidG9rZW4iLCJnZXRDdXJyZW50VXNlciIsImRhdGEiLCJnZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImJyb3dzZXIiLCJzZXRUaW1lb3V0Iiwic3BpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./privacy/user_dashboard.js\n");

/***/ })

});