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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _context_authlog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/authlog */ \"./context/authlog.js\");\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NewProvider = function(param) {\n    var childern = param.childern;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), Ok = ref[0], setOk = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_authlog__WEBPACK_IMPORTED_MODULE_5__.UserContext), state = ref1[0], setState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (state && state.token) {\n            getcurrentuser();\n        } else {\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/login');\n        }\n    }, [\n        state && state.token\n    ]);\n    var getcurrentuser = function() {\n        var _ref = _asyncToGenerator(D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var find;\n            return D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"\".concat(\"http://localhost:5000/api\", \"/current_user\"), {\n                            headers: {\n                                Authorization: \"Bearer \".concat(state.token)\n                            }\n                        });\n                    case 3:\n                        find = _ctx.sent;\n                        if (find == true) {\n                            setOk({\n                                Ok: true\n                            });\n                        } else {\n                            setOk({\n                                Ok: false\n                            });\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/login');\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function getcurrentuser() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return !Ok ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.SyncOutlined, {\n        spin: true,\n        className: \"d-flex justify-content-center display-1 text-primary p-5\"\n    }, void 0, false, {\n        fileName: \"D:\\\\socialmedia\\\\frontend\\\\privacy\\\\user_dashboard.js\",\n        lineNumber: 47,\n        columnNumber: 16\n    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}, void 0, false);\n};\n_s(NewProvider, \"uSa921To1PYqMQRX2mT3i6O0afk=\");\n_c = NewProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewProvider);\nvar _c;\n$RefreshReg$(_c, \"NewProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcml2YWN5L3VzZXJfZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUN0QjtBQUNQO0FBQ3FCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLEdBQUssQ0FBQ08sV0FBVyxHQUFDLFFBQVEsUUFBTSxDQUFDO1FBQWJDLFFBQVEsU0FBUkEsUUFBUTs7SUFFekIsR0FBSyxDQUFZTixHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUF4Qk8sRUFBRSxHQUFRUCxHQUFlLEtBQXRCUSxLQUFLLEdBQUVSLEdBQWU7SUFDaEMsR0FBSyxDQUFtQkYsSUFBdUIsR0FBdkJBLGlEQUFVLENBQUNNLHlEQUFXLEdBQXZDSyxLQUFLLEdBQVlYLElBQXVCLEtBQWxDWSxRQUFRLEdBQUdaLElBQXVCO0lBRS9DQyxnREFBUyxDQUFDLFFBQ2IsR0FEaUIsQ0FBQztRQUlYLEVBQUUsRUFBQ1UsS0FBSyxJQUFFQSxLQUFLLENBQUNFLEtBQUssRUFBQyxDQUFDO1lBRXJCQyxjQUFjO1FBQ2hCLENBQUMsTUFDQyxDQUFDO1lBQ0RYLHVEQUFXLENBQUMsQ0FBUTtRQUN4QixDQUFDO0lBRUgsQ0FBQyxFQUFDLENBQUNRO1FBQUFBLEtBQUssSUFBRUEsS0FBSyxDQUFDRSxLQUFLO0lBQUEsQ0FBQztJQUV2QixHQUFLLENBQUNDLGNBQWM7dUtBQUMsUUFBUSxXQUFDLENBQUM7Z0JBR2JFLElBQUk7Ozs7OzsrQkFBU1osZ0RBQVMsQ0FBRSxHQUE4QixNQUFhLENBQXpDYywyQkFBMkIsRUFBQyxDQUFhLGlCQUFFLENBQUM7NEJBQ3pFRyxPQUFPLEVBQUMsQ0FBQztnQ0FDUEMsYUFBYSxFQUFFLENBQU8sU0FBYyxPQUFaWCxLQUFLLENBQUNFLEtBQUs7NEJBQ3JDLENBQUM7d0JBQ0wsQ0FBQzs7d0JBSk1HLElBQUk7d0JBS1gsRUFBRSxFQUFDQSxJQUFJLElBQUUsSUFBSSxFQUFDLENBQUM7NEJBQ1hOLEtBQUssQ0FBQyxDQUFDRDtnQ0FBQUEsRUFBRSxFQUFDLElBQUk7NEJBQUEsQ0FBQzt3QkFDbkIsQ0FBQyxNQUNHLENBQUM7NEJBQ0hDLEtBQUssQ0FBQyxDQUFDRDtnQ0FBQUEsRUFBRSxFQUFDLEtBQUs7NEJBQUEsQ0FBQzt3QkFDbEIsQ0FBQzs7Ozs7O3dCQUdFTix1REFBVyxDQUFDLENBQVE7Ozs7Ozs7Ozs7O1FBRWxDLENBQUM7d0JBbEJLVyxjQUFjOzs7O0lBcUJwQixNQUFNLEVBQUVMLEVBQUUsK0VBQUdKLDJEQUFZO1FBQUdrQixJQUFJO1FBQUVDLFNBQVMsRUFBQyxDQUEwRDs7Ozs7O0FBSXhHLENBQUM7R0E1Q0tqQixXQUFXO0tBQVhBLFdBQVc7QUE2Q2pCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJpdmFjeS91c2VyX2Rhc2hib2FyZC5qcz9hNzQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCx1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7U3luY091dGxpbmVkfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHtVc2VyQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9hdXRobG9nJ1xyXG5cclxuIGNvbnN0IE5ld1Byb3ZpZGVyPSh7Y2hpbGRlcm59KT0+e1xyXG4gICAgICAgXHJcbiAgICBjb25zdCBbT2ssc2V0T2tdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV09IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBcclxuXHJcbiAgICAgIFxyXG4gICAgICAgIGlmKHN0YXRlJiZzdGF0ZS50b2tlbil7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgZ2V0Y3VycmVudHVzZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFtzdGF0ZSYmc3RhdGUudG9rZW5dKVxyXG5cclxuICAgY29uc3QgZ2V0Y3VycmVudHVzZXI9YXN5bmMoKT0+e1xyXG4gICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBjb25zdCAgZmluZCA9IGF3YWl0IGF4aW9zLmdldChgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUEl9L2N1cnJlbnRfdXNlcmAse1xyXG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOntcclxuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOmBCZWFyZXIgJHtzdGF0ZS50b2tlbn1gXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIGlmKGZpbmQ9PXRydWUpe1xyXG4gICAgICAgICAgICAgICAgICBzZXRPayh7T2s6dHJ1ZX0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgc2V0T2soe09rOmZhbHNlfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgY2F0Y2goZXJyKXtcclxuICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgICAgIH1cclxuICAgfVxyXG4gICBcclxuXHJcbiAgIHJldHVybiAhT2s/KDxTeW5jT3V0bGluZWQgICBzcGluICBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBkaXNwbGF5LTEgdGV4dC1wcmltYXJ5IHAtNVwiLz4pOig8PlxyXG5cclxuICAgPC8+KVxyXG5cclxuIH1cclxuIGV4cG9ydCBkZWZhdWx0IE5ld1Byb3ZpZGVyOyJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJSb3V0ZXIiLCJheGlvcyIsIlN5bmNPdXRsaW5lZCIsIlVzZXJDb250ZXh0IiwiTmV3UHJvdmlkZXIiLCJjaGlsZGVybiIsIk9rIiwic2V0T2siLCJzdGF0ZSIsInNldFN0YXRlIiwidG9rZW4iLCJnZXRjdXJyZW50dXNlciIsInB1c2giLCJmaW5kIiwiZ2V0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSSIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwic3BpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./privacy/user_dashboard.js\n");

/***/ })

});