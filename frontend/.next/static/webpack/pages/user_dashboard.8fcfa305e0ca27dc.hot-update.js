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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _context_authlog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/authlog */ \"./context/authlog.js\");\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NewProvider = function(param) {\n    var childern = param.childern;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), k = ref[0], setOk = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_authlog__WEBPACK_IMPORTED_MODULE_5__.UserContext), state = ref1[0], setState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (state && state.token) {\n            getcurrentuser();\n        } else {\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/login');\n        }\n    }, []);\n    var getcurrentuser = function() {\n        var _ref = _asyncToGenerator(D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var find;\n            return D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"\".concat(\"http://localhost:5000/api\", \"/current_user\"), {\n                            headers: {\n                                Authorization: \"Bearer \".concat(state.token)\n                            }\n                        });\n                    case 3:\n                        find = _ctx.sent;\n                        if (find == true) {\n                            setok({\n                                ok: true\n                            });\n                        } else {\n                            setok({\n                                ok: false\n                            });\n                        }\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/login');\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function getcurrentuser() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return !ok ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.SyncOutlined, {\n        spin: true,\n        className: \"d-flex justify-content-center display-1 text-primary p-5\"\n    }, void 0, false, {\n        fileName: \"D:\\\\socialmedia\\\\frontend\\\\privacy\\\\user_dashboard.js\",\n        lineNumber: 47,\n        columnNumber: 16\n    }, _this) : {\n        childern: childern\n    };\n};\n_s(NewProvider, \"uSa921To1PYqMQRX2mT3i6O0afk=\");\n_c = NewProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewProvider);\nvar _c;\n$RefreshReg$(_c, \"NewProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcml2YWN5L3VzZXJfZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUN0QjtBQUNQO0FBQ3FCO0FBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELEdBQUssQ0FBQ1EsV0FBVyxHQUFDLFFBQVEsUUFBTSxDQUFDO1FBQWJDLFFBQVEsU0FBUkEsUUFBUTs7SUFFekIsR0FBSyxDQUFXUCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUF2QlEsQ0FBQyxHQUFRUixHQUFlLEtBQXRCUyxLQUFLLEdBQUVULEdBQWU7SUFDL0IsR0FBSyxDQUFtQkYsSUFBdUIsR0FBdkJBLGlEQUFVLENBQUNPLHlEQUFXLEdBQXZDSyxLQUFLLEdBQVlaLElBQXVCLEtBQWxDYSxRQUFRLEdBQUdiLElBQXVCO0lBRS9DQyxnREFBUyxDQUFDLFFBQ2IsR0FEaUIsQ0FBQztRQUlYLEVBQUUsRUFBQ1csS0FBSyxJQUFFQSxLQUFLLENBQUNFLEtBQUssRUFBQyxDQUFDO1lBRXJCQyxjQUFjO1FBQ2hCLENBQUMsTUFDQyxDQUFDO1lBQ0RaLHVEQUFXLENBQUMsQ0FBUTtRQUN4QixDQUFDO0lBRUgsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUVMLEdBQUssQ0FBQ1ksY0FBYzt1S0FBQyxRQUFRLFdBQUMsQ0FBQztnQkFHYkUsSUFBSTs7Ozs7OytCQUFTYixnREFBUyxDQUFFLEdBQThCLE1BQWEsQ0FBekNlLDJCQUEyQixFQUFDLENBQWEsaUJBQUUsQ0FBQzs0QkFDekVHLE9BQU8sRUFBQyxDQUFDO2dDQUNQQyxhQUFhLEVBQUUsQ0FBTyxTQUFjLE9BQVpYLEtBQUssQ0FBQ0UsS0FBSzs0QkFDckMsQ0FBQzt3QkFDTCxDQUFDOzt3QkFKTUcsSUFBSTt3QkFLWCxFQUFFLEVBQUNBLElBQUksSUFBRSxJQUFJLEVBQUMsQ0FBQzs0QkFDWE8sS0FBSyxDQUFDLENBQUNDO2dDQUFBQSxFQUFFLEVBQUMsSUFBSTs0QkFBQSxDQUFDO3dCQUNuQixDQUFDLE1BQ0csQ0FBQzs0QkFDSEQsS0FBSyxDQUFDLENBQUNDO2dDQUFBQSxFQUFFLEVBQUMsS0FBSzs0QkFBQSxDQUFDO3dCQUNsQixDQUFDOzs7Ozs7d0JBR0V0Qix1REFBVyxDQUFDLENBQVE7Ozs7Ozs7Ozs7O1FBRWxDLENBQUM7d0JBbEJLWSxjQUFjOzs7O0lBcUJwQixNQUFNLEVBQUVVLEVBQUUsK0VBQUdwQiwyREFBWTtRQUFHcUIsSUFBSTtRQUFFQyxTQUFTLEVBQUMsQ0FBMEQ7Ozs7O2dCQUFLLENBQUNsQjtRQUFBQSxRQUFRLEVBQVJBLFFBQVE7SUFBQSxDQUFDO0FBRXZILENBQUM7R0ExQ0tELFdBQVc7S0FBWEEsV0FBVztBQTJDakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wcml2YWN5L3VzZXJfZGFzaGJvYXJkLmpzP2E3NDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtTeW5jT3V0bGluZWR9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQge1VzZXJQcm92aWRlcixVc2VyQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9hdXRobG9nJ1xyXG5cclxuIGNvbnN0IE5ld1Byb3ZpZGVyPSh7Y2hpbGRlcm59KT0+e1xyXG4gICAgICAgXHJcbiAgICBjb25zdCBbayxzZXRPa109dXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3N0YXRlLHNldFN0YXRlXT0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgIFxyXG5cclxuICAgICAgXHJcbiAgICAgICAgaWYoc3RhdGUmJnN0YXRlLnRva2VuKXtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBnZXRjdXJyZW50dXNlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgfVxyXG5cclxuICAgIH0sW10pXHJcblxyXG4gICBjb25zdCBnZXRjdXJyZW50dXNlcj1hc3luYygpPT57XHJcbiAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGNvbnN0ICBmaW5kID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSX0vY3VycmVudF91c2VyYCx7XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246YEJlYXJlciAke3N0YXRlLnRva2VufWBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgaWYoZmluZD09dHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgIHNldG9rKHtvazp0cnVlfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRvayh7b2s6ZmFsc2V9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICBjYXRjaChlcnIpe1xyXG4gICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuICAgICAgICAgfVxyXG4gICB9XHJcbiAgIFxyXG5cclxuICAgcmV0dXJuICFvaz8oPFN5bmNPdXRsaW5lZCAgIHNwaW4gIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGRpc3BsYXktMSB0ZXh0LXByaW1hcnkgcC01XCIvPik6KHtjaGlsZGVybn0pXHJcblxyXG4gfVxyXG4gZXhwb3J0IGRlZmF1bHQgTmV3UHJvdmlkZXI7Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsImF4aW9zIiwiU3luY091dGxpbmVkIiwiVXNlclByb3ZpZGVyIiwiVXNlckNvbnRleHQiLCJOZXdQcm92aWRlciIsImNoaWxkZXJuIiwiayIsInNldE9rIiwic3RhdGUiLCJzZXRTdGF0ZSIsInRva2VuIiwiZ2V0Y3VycmVudHVzZXIiLCJwdXNoIiwiZmluZCIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInNldG9rIiwib2siLCJzcGluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./privacy/user_dashboard.js\n");

/***/ })

});