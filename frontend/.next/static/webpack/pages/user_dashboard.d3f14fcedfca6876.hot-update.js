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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var _context_authlog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/authlog */ \"./context/authlog.js\");\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar NewProvider = function(param) {\n    var childern = param.childern;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), ok = ref[0], setok = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_authlog__WEBPACK_IMPORTED_MODULE_5__.UserContext), state = ref1[0], setState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (state && state.user && state.user.token) {\n            getcurrentuser();\n        } else {\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/login');\n        }\n    }, []);\n    var getcurrentuser = function() {\n        var _ref = _asyncToGenerator(D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var find;\n            return D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        console.log(state, state.user, state.user.token);\n                        _ctx.next = 4;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"\".concat(\"http://localhost:5000/api\", \"/current_user\"), {\n                            headers: {\n                                Authorization: \"Bearer \".concat(state.token)\n                            }\n                        });\n                    case 4:\n                        find = _ctx.sent;\n                        if (find) {\n                            setok({\n                                ok: true\n                            });\n                        }\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/login');\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    8\n                ]\n            ]);\n        }));\n        return function getcurrentuser() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return !ok ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.SyncOutlined, {\n        spin: true,\n        className: \"d-flex justify-con\"\n    }, void 0, false, {\n        fileName: \"D:\\\\socialmedia\\\\frontend\\\\privacy\\\\user_dashboard.js\",\n        lineNumber: 44,\n        columnNumber: 16\n    }, _this) : {\n        childern: childern\n    };\n};\n_s(NewProvider, \"uSa921To1PYqMQRX2mT3i6O0afk=\");\n_c = NewProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewProvider);\nvar _c;\n$RefreshReg$(_c, \"NewProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wcml2YWN5L3VzZXJfZGFzaGJvYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUN0QjtBQUNQO0FBQ3FCO0FBQ2E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFELEdBQUssQ0FBQ1EsV0FBVyxHQUFDLFFBQVEsUUFBTSxDQUFDO1FBQWJDLFFBQVEsU0FBUkEsUUFBUTs7SUFFekIsR0FBSyxDQUFZUCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxHQUF4QlEsRUFBRSxHQUFRUixHQUFlLEtBQXRCUyxLQUFLLEdBQUVULEdBQWU7SUFDaEMsR0FBSyxDQUFtQkYsSUFBdUIsR0FBdkJBLGlEQUFVLENBQUNPLHlEQUFXLEdBQXZDSyxLQUFLLEdBQVlaLElBQXVCLEtBQWxDYSxRQUFRLEdBQUdiLElBQXVCO0lBRS9DQyxnREFBUyxDQUFDLFFBQ2IsR0FEaUIsQ0FBQztRQUVYLEVBQUUsRUFBQ1csS0FBSyxJQUFFQSxLQUFLLENBQUNFLElBQUksSUFBRUYsS0FBSyxDQUFDRSxJQUFJLENBQUNDLEtBQUssRUFBQyxDQUFDO1lBRXRDQyxjQUFjO1FBR2hCLENBQUMsTUFDQyxDQUFDO1lBQ0RiLHVEQUFXLENBQUMsQ0FBUTtRQUN4QixDQUFDO0lBRUgsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUVMLEdBQUssQ0FBQ2EsY0FBYzt1S0FBQyxRQUFRLFdBQUMsQ0FBQztnQkFHYkUsSUFBSTs7Ozs7d0JBRFpDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUixLQUFLLEVBQUNBLEtBQUssQ0FBQ0UsSUFBSSxFQUFDRixLQUFLLENBQUNFLElBQUksQ0FBQ0MsS0FBSzs7K0JBQ3hCWCxnREFBUyxDQUFFLEdBQThCLE1BQWEsQ0FBekNrQiwyQkFBMkIsRUFBQyxDQUFhLGlCQUFFLENBQUM7NEJBQ3pFRyxPQUFPLEVBQUMsQ0FBQztnQ0FDUEMsYUFBYSxFQUFFLENBQU8sU0FBYyxPQUFaZCxLQUFLLENBQUNHLEtBQUs7NEJBQ3JDLENBQUM7d0JBQ0wsQ0FBQzs7d0JBSk1HLElBQUk7d0JBS1gsRUFBRSxFQUFDQSxJQUFJLEVBQUMsQ0FBQzs0QkFDTFAsS0FBSyxDQUFDLENBQUNEO2dDQUFBQSxFQUFFLEVBQUMsSUFBSTs0QkFBQSxDQUFDO3dCQUNuQixDQUFDOzs7Ozs7d0JBR0VQLHVEQUFXLENBQUMsQ0FBUTs7Ozs7Ozs7Ozs7UUFFbEMsQ0FBQzt3QkFmS2EsY0FBYzs7OztJQWtCcEIsTUFBTSxFQUFFTixFQUFFLCtFQUFHTCwyREFBWTtRQUFHc0IsSUFBSTtRQUFFQyxTQUFTLEVBQUMsQ0FBb0I7Ozs7O2dCQUFLLENBQUNuQjtRQUFBQSxRQUFRLEVBQVJBLFFBQVE7SUFBQSxDQUFDO0FBRWpGLENBQUM7R0F2Q0tELFdBQVc7S0FBWEEsV0FBVztBQXdDakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wcml2YWN5L3VzZXJfZGFzaGJvYXJkLmpzP2E3NDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtTeW5jT3V0bGluZWR9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQge1VzZXJQcm92aWRlcixVc2VyQ29udGV4dH0gZnJvbSAnLi4vY29udGV4dC9hdXRobG9nJ1xyXG5cclxuIGNvbnN0IE5ld1Byb3ZpZGVyPSh7Y2hpbGRlcm59KT0+e1xyXG4gICAgICAgXHJcbiAgICBjb25zdCBbb2ssc2V0b2tdPXVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtzdGF0ZSxzZXRTdGF0ZV09IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgXHJcbiAgICAgICAgaWYoc3RhdGUmJnN0YXRlLnVzZXImJnN0YXRlLnVzZXIudG9rZW4pe1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgZ2V0Y3VycmVudHVzZXIoKTtcclxuICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9LFtdKVxyXG5cclxuICAgY29uc3QgZ2V0Y3VycmVudHVzZXI9YXN5bmMoKT0+e1xyXG4gICAgICAgICB0cnl7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZSxzdGF0ZS51c2VyLHN0YXRlLnVzZXIudG9rZW4pO1xyXG4gICAgICAgICAgICAgIGNvbnN0ICBmaW5kID0gYXdhaXQgYXhpb3MuZ2V0KGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSX0vY3VycmVudF91c2VyYCx7XHJcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246YEJlYXJlciAke3N0YXRlLnRva2VufWBcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgaWYoZmluZCl7XHJcbiAgICAgICAgICAgICAgICAgIHNldG9rKHtvazp0cnVlfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGNhdGNoKGVycil7XHJcbiAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG4gICAgICAgICB9XHJcbiAgIH1cclxuICAgXHJcblxyXG4gICByZXR1cm4gIW9rPyg8U3luY091dGxpbmVkICAgc3BpbiAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29uXCIvPik6KHtjaGlsZGVybn0pXHJcblxyXG4gfVxyXG4gZXhwb3J0IGRlZmF1bHQgTmV3UHJvdmlkZXI7Il0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsImF4aW9zIiwiU3luY091dGxpbmVkIiwiVXNlclByb3ZpZGVyIiwiVXNlckNvbnRleHQiLCJOZXdQcm92aWRlciIsImNoaWxkZXJuIiwib2siLCJzZXRvayIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VyIiwidG9rZW4iLCJnZXRjdXJyZW50dXNlciIsInB1c2giLCJmaW5kIiwiY29uc29sZSIsImxvZyIsImdldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUEkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInNwaW4iLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./privacy/user_dashboard.js\n");

/***/ })

});