"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile/[name]",{

/***/ "./pages/profile/[name].js":
/*!*********************************!*\
  !*** ./pages/profile/[name].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _context_authlog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/authlog.js */ \"./context/authlog.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar following = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_authlog_js__WEBPACK_IMPORTED_MODULE_3__.UserContext), state = ref[0], setState = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), profilepage = ref1[0], setProfile = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (state && state.token) fetchfollowing();\n    }, [\n        state && state.token\n    ]);\n    var fetchfollowing = function() {\n        var _ref = _asyncToGenerator(D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var data;\n            return D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().get('/fetch-followings');\n                    case 3:\n                        data = _ctx.sent.data;\n                        setPeople(data);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    7\n                ]\n            ]);\n        }));\n        return function fetchfollowing() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleUnFollow = function() {\n        var _ref = _asyncToGenerator(D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(user) {\n            var data, auth, filtered;\n            return D_socialmedia_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.prev = 0;\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_4___default().put(\"/user-unfollow\", {\n                            _id: user._id\n                        });\n                    case 3:\n                        data = _ctx.sent.data;\n                        auth = JSON.parse(localStorage.getItem('auth'));\n                        auth.user = data;\n                        localStorage.setItem('auth', JSON.stringify(auth));\n                        setState(_objectSpread({}, state, {\n                            user: data\n                        }));\n                        filtered = people.filter(function(p) {\n                            return p._id !== user._id;\n                        });\n                        setPeople(filtered);\n                        react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.error(\"Unfollowed \".concat(user.name));\n                        _ctx.next = 16;\n                        break;\n                    case 13:\n                        _ctx.prev = 13;\n                        _ctx.t0 = _ctx[\"catch\"](0);\n                        console.log(_ctx.t0);\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    0,\n                    13\n                ]\n            ]);\n        }));\n        return function handleUnFollow(user) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var ImageUrl = function(user) {\n        if (user.image) {\n            return user.image.url;\n        } else {\n            return \"/images/memories.jpg\";\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \" row col-md-6 offset-md-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.List, {\n                itemLayout: \"horizontal\",\n                dataSource: people,\n                renderItem: function(user) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.List.Item, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.List.Item.Meta, {\n                            avatar: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Avatar, {\n                                src: ImageUrl(user)\n                            }, void 0, false, void 0, void 0),\n                            title: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"d-flex justify-content-between\",\n                                children: [\n                                    user.name,\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                                        onClick: function() {\n                                            handleUnFollow(user);\n                                        },\n                                        className: \"text-primary pointer\",\n                                        children: \"Unfollow\"\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0)\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0);\n                }\n            }, void 0, false, {\n                fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\profile\\\\[name].js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                href: \"/user_dashboard\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    className: \"d-flex justify-content-center pt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.RollbackOutlined, {}, void 0, false, {\n                        fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\profile\\\\[name].js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\profile\\\\[name].js\",\n                    lineNumber: 80,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\profile\\\\[name].js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\socialmedia\\\\frontend\\\\pages\\\\profile\\\\[name].js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, _this));\n};\n_s(following, \"k/g6EvYIAGCe3ZKviIxbIcJrCjY=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (following);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsRUFBRSxRQUFRLENBQVB2QixJQUFJO2tDQUNmLE1BQU13QixDQUFBQSw2REFBQUEsQ0FBTDNDLDJDQUFTOzhHQUNQQSxnREFBYzs0QkFDYjZDLE1BQU0sOEVBQUc5Qyx3Q0FBTTtnQ0FBQytDLEdBQUcsRUFBRVgsUUFBUSxDQUFDaEIsSUFBSTs7NEJBQ2xDNEIsS0FBSyw4RUFDRlQsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQWdDOztvQ0FDNUNwQixJQUFJLENBQUNlLElBQUk7b0NBQUMsQ0FBQztnSEFBQ2MsQ0FBSTt3Q0FBQ0MsT0FBTyxFQUFFLFFBQzVDLEdBRGdELENBQUM7NENBQzlCL0IsY0FBYyxDQUFDQyxJQUFJO3dDQUNyQixDQUFDO3dDQUFFb0IsU0FBUyxFQUFDLENBQXNCO2tEQUFDLENBQVE7Ozs7Ozs7Ozs7Ozt3RkFTdkRuQyxrREFBSTtnQkFBQzhDLElBQUksRUFBQyxDQUFpQjtzR0FDM0JDLENBQUM7b0JBQUNaLFNBQVMsRUFBQyxDQUFvQzswR0FDOUNwQywrREFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU96QixDQUFDO0dBaEZLRyxTQUFTO0FBa0ZmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS9bbmFtZV0uanM/MDAwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF2YXRhciwgTGlzdCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvYXV0aGxvZy5qc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7Um9sbGJhY2tPdXRsaW5lZH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcclxuY29uc3QgZm9sbG93aW5nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3N0YXRlLHNldFN0YXRlXSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gICAgY29uc3QgW3Byb2ZpbGVwYWdlLCBzZXRQcm9maWxlXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKHN0YXRlJiZzdGF0ZS50b2tlbilcclxuICAgICAgICBmZXRjaGZvbGxvd2luZygpO1xyXG4gICAgfSxbc3RhdGUmJnN0YXRlLnRva2VuXSk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hmb2xsb3dpbmc9YXN5bmMoKT0+e1xyXG4gICAgICAgdHJ5IHtcclxuICAgICAgICAgICBjb25zdCB7ZGF0YX09YXdhaXQgYXhpb3MuZ2V0KCcvZmV0Y2gtZm9sbG93aW5ncycpO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFBlb3BsZShkYXRhKTtcclxuXHJcbiAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGhhbmRsZVVuRm9sbG93ID1hc3luYyh1c2VyKT0+e1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnB1dChcIi91c2VyLXVuZm9sbG93XCIse19pZDp1c2VyLl9pZH0pO1xyXG5cclxuICAgICAgICBsZXQgYXV0aCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2F1dGgnKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYXV0aC51c2VyPSBkYXRhO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoJyxKU09OLnN0cmluZ2lmeShhdXRoKSk7XHJcbiAgICAgICBcclxuICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsdXNlcjpkYXRhfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGZpbHRlcmVkID0gcGVvcGxlLmZpbHRlcigocCk9PntcclxuICAgICAgICAgICAgcmV0dXJuICAgcC5faWQhPT11c2VyLl9pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgc2V0UGVvcGxlKGZpbHRlcmVkKTtcclxuICAgICBcclxuICAgICAgdG9hc3QuZXJyb3IoYFVuZm9sbG93ZWQgJHt1c2VyLm5hbWV9YCkgOyAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiBjb25zdCBJbWFnZVVybCA9KHVzZXIpPT57XHJcbiAgICBpZih1c2VyLmltYWdlKXtcclxuICAgICAgcmV0dXJuIHVzZXIuaW1hZ2UudXJsO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuIFwiL2ltYWdlcy9tZW1vcmllcy5qcGdcIjtcclxuICAgIH1cclxuIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgcm93IGNvbC1tZC02IG9mZnNldC1tZC0zXCI+XHJcbiAgICAgIDxMaXN0XHJcbiAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgIGRhdGFTb3VyY2U9e3Blb3BsZX1cclxuICAgICAgICByZW5kZXJJdGVtPXsodXNlcikgPT4gKFxyXG4gICAgICAgICAgPExpc3QuSXRlbSA+XHJcbiAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9e0ltYWdlVXJsKHVzZXIpfSAgLz59XHJcbiAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAge3VzZXIubmFtZX0gPHNwYW4gb25DbGljaz17KCk9PntcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVVbkZvbGxvdyh1c2VyKVxyXG4gICAgICAgICAgICAgICAgICB9fSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgcG9pbnRlclwiPlVuZm9sbG93PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG5cclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgICA8TGluayBocmVmPVwiL3VzZXJfZGFzaGJvYXJkXCI+XHJcbiAgICAgIDxhIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB0LTVcIj5cclxuICAgICAgICA8Um9sbGJhY2tPdXRsaW5lZC8+XHJcbiAgICAgIFxyXG4gICAgICA8L2E+XHJcbiAgICAgICBcclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZvbGxvd2luZzsiXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQXZhdGFyIiwiTGlzdCIsIlVzZXJDb250ZXh0IiwiYXhpb3MiLCJSb2xsYmFja091dGxpbmVkIiwiTGluayIsInRvYXN0IiwiZm9sbG93aW5nIiwic3RhdGUiLCJzZXRTdGF0ZSIsInByb2ZpbGVwYWdlIiwic2V0UHJvZmlsZSIsInRva2VuIiwiZmV0Y2hmb2xsb3dpbmciLCJkYXRhIiwiZ2V0Iiwic2V0UGVvcGxlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVVuRm9sbG93IiwidXNlciIsImF1dGgiLCJmaWx0ZXJlZCIsInB1dCIsIl9pZCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicGVvcGxlIiwiZmlsdGVyIiwicCIsImVycm9yIiwibmFtZSIsIkltYWdlVXJsIiwiaW1hZ2UiLCJ1cmwiLCJkaXYiLCJjbGFzc05hbWUiLCJpdGVtTGF5b3V0IiwiZGF0YVNvdXJjZSIsInJlbmRlckl0ZW0iLCJJdGVtIiwiTWV0YSIsImF2YXRhciIsInNyYyIsInRpdGxlIiwic3BhbiIsIm9uQ2xpY2siLCJocmVmIiwiYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile/[name].js\n");

/***/ })

});