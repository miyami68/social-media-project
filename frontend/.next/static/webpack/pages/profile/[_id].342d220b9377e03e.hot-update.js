"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile/[_id]",{

/***/ "./pages/profile/[_id].js":
/*!********************************!*\
  !*** ./pages/profile/[_id].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_authlog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/authlog.js */ \"./context/authlog.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar profilePage = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_authlog_js__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), profilepage = ref1[0], setProfilepage = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (router.query._id) fetchUserProfile();\n    }, [\n        router.query._id\n    ]);\n    var fetchUserProfile = function() {\n        var _ref = _asyncToGenerator(D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get(\"/fetch-profile/\".concat(router.query._id));\n                    case 3:\n                        data = _ctx.sent.data;\n                        // console.log(data);\n                        setProfilepage(data);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchUserProfile() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var ImageUrl = function(user) {\n        if (user.image) {\n            return user.image.url;\n        } else {\n            return \"/images/memories.jpg\";\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \" row col-md-6 offset-md-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n            href: \"/user_dashboard\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                className: \"d-flex justify-content-center pt-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.RollbackOutlined, {}, void 0, false, {\n                    fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\profile\\\\[_id].js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\profile\\\\[_id].js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\profile\\\\[_id].js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\profile\\\\[_id].js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this));\n};\n_s(profilePage, \"BUV/ivELUpA8kC99iabUkya82Gs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (profilePage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlL1tfaWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ3pCO0FBQ3dCO0FBQzdCO0FBQ3lCO0FBQ3RCO0FBRVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3ZDLEdBQUssQ0FBQ1MsV0FBVyxHQUFFLFFBQVEsR0FBRixDQUFDOztJQUN0QixHQUFLLENBQW9CVCxHQUF1QixHQUF2QkEsaURBQVUsQ0FBQ0ksNERBQVcsR0FBeENNLEtBQUssR0FBYVYsR0FBdUIsS0FBbkNXLFFBQVEsR0FBSVgsR0FBdUI7SUFDaEQsR0FBSyxDQUFpQ0UsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxHQUExQ1UsV0FBVyxHQUFvQlYsSUFBWSxLQUE5QlcsY0FBYyxHQUFJWCxJQUFZO0lBQ2xELEdBQUssQ0FBQ1ksTUFBTSxHQUFDTixzREFBUztJQUV0QlAsZ0RBQVMsQ0FBQyxRQUNiLEdBRGlCLENBQUM7UUFDWCxFQUFFLEVBQUNhLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHLEVBQ25CQyxnQkFBZ0I7SUFDcEIsQ0FBQyxFQUFDLENBQUNIO1FBQUFBLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxHQUFHO0lBQUEsQ0FBQztJQUVwQixHQUFLLENBQUNDLGdCQUFnQjt1S0FBQyxRQUFRLFdBQUMsQ0FBQztnQkFFbkJDLElBQUk7Ozs7OzsrQkFBUWIsZ0RBQVMsQ0FBRSxDQUFlLGlCQUFtQixPQUFqQlMsTUFBTSxDQUFDQyxLQUFLLENBQUNDLEdBQUc7O3dCQUF4REUsSUFBSSxhQUFKQSxJQUFJO3dCQUNWLEVBQXFCO3dCQUNyQkwsY0FBYyxDQUFDSyxJQUFJOzs7Ozs7d0JBR3BCRSxPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O1FBRWxCLENBQUM7d0JBVEtKLGdCQUFnQjs7OztJQVd6QixHQUFLLENBQUNLLFFBQVEsR0FBRSxRQUFRLENBQVBDLElBQUksRUFBRyxDQUFDO1FBQ3RCLEVBQUUsRUFBQ0EsSUFBSSxDQUFDQyxLQUFLLEVBQUMsQ0FBQztZQUNiLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDQyxLQUFLLENBQUNDLEdBQUc7UUFDdkIsQ0FBQyxNQUNHLENBQUM7WUFDSCxNQUFNLENBQUMsQ0FBc0I7UUFDL0IsQ0FBQztJQUNKLENBQUM7SUFDQSxNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUEyQjs4RkFFdkNwQixrREFBSTtZQUFDcUIsSUFBSSxFQUFDLENBQWlCO2tHQUMzQkMsQ0FBQztnQkFBQ0YsU0FBUyxFQUFDLENBQW9DO3NHQUM5Q3JCLCtEQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRekIsQ0FBQztHQTFDS0csV0FBVzs7UUFHQUQsa0RBQVM7OztBQXlDMUIsK0RBQWVDLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlL1tfaWRdLmpzPzg3NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdmF0YXIsIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vY29udGV4dC9hdXRobG9nLmpzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHtSb2xsYmFja091dGxpbmVkfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IHByb2ZpbGVQYWdlPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XHJcbiAgICBjb25zdCBbcHJvZmlsZXBhZ2UsIHNldFByb2ZpbGVwYWdlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcclxuIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYocm91dGVyLnF1ZXJ5Ll9pZClcclxuICAgICAgICBmZXRjaFVzZXJQcm9maWxlKCk7XHJcbiAgICB9LFtyb3V0ZXIucXVlcnkuX2lkXSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hVc2VyUHJvZmlsZT1hc3luYygpPT57XHJcbiAgICAgICB0cnkge1xyXG4gICAgICAgICAgIGNvbnN0IHtkYXRhfT1hd2FpdCBheGlvcy5nZXQoYC9mZXRjaC1wcm9maWxlLyR7cm91dGVyLnF1ZXJ5Ll9pZH1gKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHNldFByb2ZpbGVwYWdlKGRhdGEpO1xyXG5cclxuICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG4gICBcclxuIGNvbnN0IEltYWdlVXJsID0odXNlcik9PntcclxuICAgIGlmKHVzZXIuaW1hZ2Upe1xyXG4gICAgICByZXR1cm4gdXNlci5pbWFnZS51cmw7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICByZXR1cm4gXCIvaW1hZ2VzL21lbW9yaWVzLmpwZ1wiO1xyXG4gICAgfVxyXG4gfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiByb3cgY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cclxuICAgIFxyXG4gICAgICA8TGluayBocmVmPVwiL3VzZXJfZGFzaGJvYXJkXCI+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB0LTVcIj5cclxuICAgICAgICA8Um9sbGJhY2tPdXRsaW5lZC8+XHJcbiAgICAgIFxyXG4gICAgICA8L2E+XHJcbiAgICAgICBcclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlUGFnZTsiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXZhdGFyIiwiVXNlckNvbnRleHQiLCJheGlvcyIsIlJvbGxiYWNrT3V0bGluZWQiLCJMaW5rIiwidXNlUm91dGVyIiwicHJvZmlsZVBhZ2UiLCJzdGF0ZSIsInNldFN0YXRlIiwicHJvZmlsZXBhZ2UiLCJzZXRQcm9maWxlcGFnZSIsInJvdXRlciIsInF1ZXJ5IiwiX2lkIiwiZmV0Y2hVc2VyUHJvZmlsZSIsImRhdGEiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiSW1hZ2VVcmwiLCJ1c2VyIiwiaW1hZ2UiLCJ1cmwiLCJkaXYiLCJjbGFzc05hbWUiLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile/[_id].js\n");

/***/ })

});